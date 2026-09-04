#!/usr/bin/env node
/**
 * Phase 19 sub-service audit.
 *
 * Verifies the Service + Sub-service + Problem page architecture:
 *  1. Every *priced* sub-service in `data/pricing/pricing.ts` (the 51) is a
 *     publishing target; this reports which already have a standalone page and
 *     which are still only registered in pricing (so a page is never silently
 *     assumed where none exists).
 *  2. Authored sub-service slugs are unique and belong to a real 10-service
 *     pillar, and any `pricingId` points at a real pricing id.
 *  3. Every authored sub-service ships all three language copy blocks
 *     (`en`/`ms`/`zh`), so no English text can leak under `/ms/` or `/zh/`.
 *  4. Route / sitemap / hreflang parity is enforced at build time by the Next
 *     static params + `app/sitemap.ts` + the i18n coverage guard — this script
 *     re-checks the invariant that every authored slug is in all three
 *     languages (i.e. it will appear in each language's route set).
 *
 * Run with: npm run audit:subservices
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PRICING_FILE = join(ROOT, "data", "pricing", "pricing.ts");
const CONTENT_DIR = join(ROOT, "data", "sub-services", "content");
const PROBLEM_DIR = join(ROOT, "data", "problem-content");

const failures = [];
const fail = (message) => failures.push(message);

const SERVICES = [
  "tiling",
  "welding-metal-works",
  "electrical",
  "painting",
  "ceiling-partition",
  "general-renovation",
  "plumbing",
  "waterproofing",
  "flooring",
  "handyman",
];

/* ------------------------------------------------------------------------ */
/* Parse pricing.ts for priced sub-service slugs and ids.                    */
/* ------------------------------------------------------------------------ */
const pricingSource = readFileSync(PRICING_FILE, "utf8");
function parseField(source, field) {
  const re = new RegExp(`^\\s*${field}:\\s*"([^"]+)"`, "m");
  const m = source.match(re);
  return m ? m[1] : undefined;
}

const pricedSubs = [];
const allIds = new Set();
const entries = pricingSource
  .split(/^\s*(?=\{)/m)
  .slice(1)
  .map((chunk) => ({ chunk, id: parseField(chunk, "id") }))
  .filter((e) => e.id);
for (const e of entries) {
  allIds.add(e.id);
  const sub = parseField(e.chunk, "subServiceSlug");
  const service = parseField(e.chunk, "serviceSlug");
  if (sub && service) {
    pricedSubs.push({ sub, service, id: e.id });
  }
}
if (entries.length === 0) {
  fail("Could not parse any pricing entries from data/pricing/pricing.ts.");
}

const pricedSubSet = new Map(pricedSubs.map((p) => [p.sub, p]));

/* ------------------------------------------------------------------------ */
/* Parse the authoritative problem catalogue (data/problem-content/*.ts).    */
/* These are the only slugs a sub-service may cite in `relatedProblems`.     */
/* ------------------------------------------------------------------------ */
const PROBLEM_SKIP = new Set(["index.ts", "types.ts"]);
const problemSlugs = new Set();
for (const file of readdirSync(PROBLEM_DIR)) {
  if (!file.endsWith(".ts") || PROBLEM_SKIP.has(file)) continue;
  const source = readFileSync(join(PROBLEM_DIR, file), "utf8");
  for (const m of source.matchAll(/^\s*slug:\s*"([a-z0-9-]+)"/gm)) {
    problemSlugs.add(m[1]);
  }
}
if (problemSlugs.size === 0) {
  fail("Could not parse any problem slugs from data/problem-content/.");
}

/* ------------------------------------------------------------------------ */
/* Parse authored sub-services from the content directory.                   */
/* ------------------------------------------------------------------------ */

/**
 * Splits a module that exports an array of object literals into those top-level
 * element objects. Elements are the `{ ... }` objects whose combined
 * bracket/brace depth returns to 1 (i.e. directly inside the exported array).
 * String literals are skipped so prose never fakes a brace.
 */
function splitTopLevelObjects(source) {
  const objects = [];
  let depth = 0;
  let objStart = -1;
  let inString = false;
  let quote = "";
  for (let i = 0; i < source.length; i += 1) {
    const c = source[i];
    if (inString) {
      if (c === "\\") {
        i += 1;
      } else if (c === quote) {
        inString = false;
      }
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = true;
      quote = c;
      continue;
    }
    if (c === "{" || c === "[") {
      if (c === "{" && depth === 1) {
        objStart = i;
      }
      depth += 1;
    } else if (c === "}" || c === "]") {
      depth -= 1;
      if (c === "}" && depth === 1 && objStart >= 0) {
        objects.push(source.slice(objStart, i + 1));
        objStart = -1;
      }
    }
  }
  return objects;
}

function parseAuthored() {
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".ts"));
  const authored = [];
  for (const file of files) {
    const source = readFileSync(join(CONTENT_DIR, file), "utf8");
    for (const obj of splitTopLevelObjects(source)) {
      const slug = parseField(obj, "slug");
      if (!slug) continue;
      const service = parseField(obj, "serviceSlug");
      const pricingId = parseField(obj, "pricingId");
      const langs = ["en", "ms", "zh"].filter((l) =>
        new RegExp(`^\\s*${l}:\\s*\\{`, "m").test(obj),
      );
      const relatedMatch = obj.match(/relatedProblems:\s*\[([^\]]*)\]/);
      const relatedProblems = relatedMatch
        ? [...relatedMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
        : [];
      authored.push({ slug, service, pricingId, langs, relatedProblems, file });
    }
  }
  return authored;
}

const authored = parseAuthored();

/* ---- uniqueness ---- */
const seen = new Set();
for (const a of authored) {
  if (seen.has(a.slug)) {
    fail(`Duplicate sub-service slug: ${a.slug}.`);
  }
  seen.add(a.slug);
}

/* ---- serviceSlug validity + pricingId resolution + language parity ---- */
for (const a of authored) {
  if (!SERVICES.includes(a.service ?? "")) {
    fail(`Sub-service "${a.slug}" has an unknown serviceSlug "${a.service}".`);
  }
  if (a.pricingId && !allIds.has(a.pricingId)) {
    fail(`Sub-service "${a.slug}" references an unknown pricingId "${a.pricingId}".`);
  }
  for (const problem of a.relatedProblems) {
    if (!problemSlugs.has(problem)) {
      fail(
        `Sub-service "${a.slug}" links to an unknown problem "${problem}" — it must exist in data/problem-content/.`,
      );
    }
  }
  if (new Set(a.relatedProblems).size !== a.relatedProblems.length) {
    fail(`Sub-service "${a.slug}" repeats a slug in relatedProblems.`);
  }
  const missingLangs = ["en", "ms", "zh"].filter((l) => !a.langs.includes(l));
  if (missingLangs.length > 0) {
    fail(
      `Sub-service "${a.slug}" is missing ${missingLangs.join(", ")} copy — it cannot be published to every language.`,
    );
  }
}

/* ---- which priced sub-services already have a standalone page? ---- */
const authoredSet = new Set(authored.map((a) => a.slug));
const unpublishedPriced = pricedSubs.filter((p) => !authoredSet.has(p.sub));
const publishedPriced = pricedSubs.filter((p) => authoredSet.has(p.sub));

/* ---- every authored slug that is priced must carry its pricingId ---- */
for (const a of authored) {
  const priced = pricedSubSet.get(a.slug);
  if (priced && !a.pricingId) {
    fail(
      `Sub-service "${a.slug}" is priced in the catalogue but its page does not set pricingId.`,
    );
  }
}

/* ---- report ---- */
console.log("\n=== PHASE 19 SUB-SERVICE AUDIT ===\n");
console.log(`Priced sub-services in catalogue: ${pricedSubs.length}`);
console.log(`Authored standalone sub-service pages: ${authored.length}`);
console.log(`  of which published in all 3 languages (en/ms/zh): ${
  authored.filter((a) => a.langs.length === 3).length
}`);
console.log(`Problem slugs in catalogue: ${problemSlugs.size}`);
console.log(`Sub-service → problem links validated: ${
  authored.reduce((n, a) => n + a.relatedProblems.length, 0)
}`);
console.log(`Authored but not priced: ${
  authored.filter((a) => !pricedSubSet.has(a.slug)).length
}`);
console.log("\nPublished priced sub-services:");
for (const p of publishedPriced) {
  console.log(`  ✔ ${p.service} / ${p.sub}`);
}
console.log("\nPriced sub-services still needing a standalone page:");
if (unpublishedPriced.length === 0) {
  console.log("  (none)");
} else {
  for (const p of unpublishedPriced) {
    console.log(`  – ${p.service} / ${p.sub}`);
  }
}
console.log(`\nAuthored slugs by file:`);
const byFile = new Map();
for (const a of authored) {
  byFile.set(a.file, (byFile.get(a.file) ?? 0) + 1);
}
for (const [file, count] of byFile) {
  console.log(`  ${file}: ${count}`);
}

if (failures.length > 0) {
  console.error(`\n${failures.length} FAILURE(S):`);
  for (const f of failures) {
    console.error(`  ✗ ${f}`);
  }
  process.exitCode = 1;
} else {
  console.log("\nAll sub-service integrity checks passed.");
}
console.log(`\nNotes: build-time guards in i18n/verify.ts + app/sitemap.ts enforce route/sitemap/hreflang parity.`);
