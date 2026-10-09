#!/usr/bin/env node
/**
 * Keyword research database audit — master brief, Sections 4 + 19.
 *
 * Static source guards for `data/keywords/`. The SEMANTIC validation (targets
 * resolve to published pages, no two rows claim one keyword, no invented
 * volumes) runs at build time via `runKeywordResearchAudits()` wired into
 * `app/sitemap.ts` — this script guards the sources and the wiring:
 *
 *  1. The database module, phrasing table, types and runbook all exist.
 *  2. `npm run audit:keywords` is wired into package.json.
 *  3. `app/sitemap.ts` runs `runKeywordResearchAudits()` and fails the build
 *     on any issue (same pattern as the search-index audits).
 *  4. Honesty literals: no `searchVolume:` / `existingRankingUrl:` /
 *     `competitionNotes:` value other than `null` anywhere in the composition
 *     sources. Volumes, rankings and competition data are never invented;
 *     real evidence is added later in a reviewed overlay (KEYWORD_RESEARCH.md
 *     §5), which is when this guard is updated deliberately.
 *  5. The authored phrasing table covers every service slug in all three
 *     languages (slugs parsed from `data/services.ts`, blocks parsed from
 *     `data/keywords/phrases.ts`).
 *  6. The composition imports only the verified registries (services,
 *     problem-content, blog, intent-matrix, sub-services, coverage) plus the
 *     phrasing table — no free-floating keyword lists.
 *  7. The runbook documents the no-fabrication rule.
 *
 * Run with: npm run audit:keywords
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const read = (...parts) => readFileSync(join(ROOT, ...parts), "utf8");

const failures = [];
const passes = [];
const pass = (msg) => {
  passes.push(msg);
  console.log(`  ✓ ${msg}`);
};
const fail = (msg) => {
  failures.push(msg);
  console.log(`  ✗ ${msg}`);
};

console.log("Renovix Home Services — keyword research database audit");

/* 1. Files exist ---------------------------------------------------------- */

const REQUIRED_FILES = [
  "data/keywords/types.ts",
  "data/keywords/phrases.ts",
  "data/keywords/index.ts",
  "KEYWORD_RESEARCH.md",
];
for (const file of REQUIRED_FILES) {
  if (existsSync(join(ROOT, file))) pass(`${file} exists`);
  else fail(`${file} is missing`);
}
if (failures.length > 0) {
  console.log(`\nFAIL — ${failures.length} problem(s)`);
  process.exit(1);
}

const typesSource = read("data/keywords/types.ts");
const phrasesSource = read("data/keywords/phrases.ts");
const indexSource = read("data/keywords/index.ts");
const runbook = read("KEYWORD_RESEARCH.md");

/* 2. package.json wiring --------------------------------------------------- */

const pkg = JSON.parse(read("package.json"));
if (pkg.scripts?.["audit:keywords"] === "node scripts/audit-keywords.mjs") {
  pass("package.json wires `npm run audit:keywords`");
} else {
  fail("package.json is missing the audit:keywords script");
}

/* 3. Build-time wiring in app/sitemap.ts ----------------------------------- */

const sitemapSource = read("app/sitemap.ts");
if (
  sitemapSource.includes('from "@/data/keywords"') &&
  sitemapSource.includes("runKeywordResearchAudits()")
) {
  pass("app/sitemap.ts imports runKeywordResearchAudits from @/data/keywords");
} else {
  fail("app/sitemap.ts does not import runKeywordResearchAudits — the build-time guard is unwired");
}
if (sitemapSource.includes("[audit:keywords] failed at build time")) {
  pass("app/sitemap.ts fails the build on keyword audit issues");
} else {
  fail("app/sitemap.ts does not throw on keyword audit issues");
}

/* 4. Honesty literals ------------------------------------------------------ */

/** Strips block and line comments so doc text is never scanned as code. */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/[^\n]*/g, "$1");
}

// In the composition sources every honesty field must be the literal `null`.
// (types.ts legitimately carries the *type* annotations, so it is exempt —
// its doc markers are checked in §7 instead.)
for (const file of ["data/keywords/index.ts", "data/keywords/phrases.ts"]) {
  const source = stripComments(read(file));
  for (const field of ["searchVolume", "existingRankingUrl", "competitionNotes"]) {
    const offenders = [...source.matchAll(new RegExp(`${field}:\\s*([^\\n,]+)`, "g"))]
      .map((m) => m[1].trim())
      .filter((value) => value !== "null");
    if (offenders.length === 0) {
      pass(`${file}: every ${field} literal is null (never invented)`);
    } else {
      offenders.slice(0, 5).forEach((value) =>
        fail(`${file}: ${field} is set to "${value}" — volumes/rankings/competition are never invented; add real evidence via the reviewed overlay (KEYWORD_RESEARCH.md §5)`),
      );
    }
  }
}

/* 5. Phrasing table covers every service in every language ------------------ */

const serviceSlugs = [...read("data/services.ts").matchAll(/slug:\s*"([^"]+)"/g)].map(
  (m) => m[1],
);
if (serviceSlugs.length !== 10) {
  fail(`expected 10 service slugs in data/services.ts, parsed ${serviceSlugs.length}`);
} else {
  pass(`parsed ${serviceSlugs.length} service slugs from data/services.ts`);
}

/** Extracts the `lang: { … }` block from the phrasing table (brace-matched). */
function extractLanguageBlock(source, langKey) {
  const start = source.indexOf(`${langKey}: {`);
  if (start === -1) return null;
  let depth = 0;
  const from = source.indexOf("{", start);
  for (let i = from; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(from, i + 1);
    }
  }
  return null;
}

for (const langKey of ["en", "ms", "zh"]) {
  const block = extractLanguageBlock(phrasesSource, langKey);
  if (!block) {
    fail(`data/keywords/phrases.ts has no "${langKey}: {{ … }}" block`);
    continue;
  }
  const missing = serviceSlugs.filter(
    (slug) => !new RegExp(`["']?${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']?\\s*:`).test(block),
  );
  if (missing.length === 0) {
    pass(`phrases.ts covers all ${serviceSlugs.length} services in "${langKey}"`);
  } else {
    fail(`phrases.ts "${langKey}" block is missing phrasings for: ${missing.join(", ")}`);
  }
}

/* 6. Composition imports only verified registries -------------------------- */

const REQUIRED_IMPORTS = [
  'from "@/data/services"',
  'from "@/data/problem-content"',
  'from "@/data/blog"',
  'from "@/data/locations/intent-matrix"',
  'from "@/data/sub-services"',
  'from "@/i18n/coverage"',
  'from "./phrases"',
];
for (const imp of REQUIRED_IMPORTS) {
  if (indexSource.includes(imp)) pass(`index.ts composes via ${imp}`);
  else fail(`index.ts is missing the ${imp} import — rows must derive from the verified registries`);
}

/* 7. Honesty markers in types + runbook ------------------------------------ */

if (typesSource.includes("Never invent a search volume")) {
  pass("types.ts documents the no-invented-volume rule");
} else {
  fail("types.ts lost its honesty documentation — restore the binding rules comment");
}
for (const marker of ["never invented", "One primary target per keyword", "null"]) {
  if (runbook.toLowerCase().includes(marker.toLowerCase())) {
    pass(`KEYWORD_RESEARCH.md documents "${marker}"`);
  } else {
    fail(`KEYWORD_RESEARCH.md does not document "${marker}"`);
  }
}

/* Summary ------------------------------------------------------------------ */

console.log("\n== Summary ==");
console.log(`PASS ${passes.length}  FAIL ${failures.length}`);
if (failures.length > 0) {
  console.log("\nFailures:");
  failures.forEach((f) => console.log(`  ✗ ${f}`));
  console.log("\nFAIL — keyword research database audit found problems.");
  process.exit(1);
}
console.log("\nPASS — keyword research database sources and wiring are sound.");
console.log("Semantic validation (targets resolve, no cannibalization) runs at build time via app/sitemap.ts.");
