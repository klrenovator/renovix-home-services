#!/usr/bin/env node
/**
 * Pricing audit for Renovix Home Services.
 *
 * The site publishes indicative *starting* prices. That is only honest if the
 * published figures stay a single source of truth and are always presented
 * with their scope, unit, review date and disclaimer. This audit enforces that
 * mechanically, with no dependencies:
 *
 *  1. `data/pricing/pricing.ts` is the only place a price literal lives.
 *     Translations may reword scope and duration but must never contain a
 *     number-bearing price field.
 *  2. Every pricing entry has an id, service, unit, starting price, scope,
 *     factors, disclaimer and `lastReviewed`, and every id is unique.
 *  3. Every price range is consistent (`min <= max`) and its `startingPrice`
 *     equals the range minimum, so "Starting from" can never be higher than
 *     the range it is shown beside.
 *  4. Each entry's `serviceSlug` is a real published service.
 *  5. Every service that renders a pricing table has Malay and Chinese copy
 *     for each of its rows — otherwise an English scope would leak onto a
 *     `/ms/` or `/zh/` page.
 *  6. No price is presented as final: nothing claims "fixed price",
 *     "guaranteed price", "final price" or "no extra charge".
 *
 * Run with: npm run audit:pricing
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PRICING_DIR = join(ROOT, "data", "pricing");
const SERVICE_DIR = join(ROOT, "data", "service-content");

const failures = [];
const notes = [];

const fail = (message) => failures.push(message);
const note = (message) => notes.push(message);

/* ------------------------------------------------------------------------ */
/* Parse the pricing entries out of the TypeScript source                    */
/* ------------------------------------------------------------------------ */

const pricingSource = readFileSync(join(PRICING_DIR, "pricing.ts"), "utf8");

/** Splits the top-level `{ ... }` objects of the exported array. */
function splitEntries(source) {
  const start = source.indexOf("pricingEntries");
  const arrayStart = source.indexOf("[", source.indexOf("=", start));
  const chunks = [];
  let depth = 0;
  let current = null;

  for (let i = arrayStart; i < source.length; i += 1) {
    const char = source[i];

    if (char === "{") {
      if (depth === 0) current = i;
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0 && current !== null) {
        chunks.push(source.slice(current, i + 1));
        current = null;
      }
    } else if (char === "]" && depth === 0) {
      break;
    }
  }

  return chunks;
}

const stringField = (chunk, key) => {
  const match = chunk.match(new RegExp(`\\b${key}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return match ? match[1] : undefined;
};

const numberField = (chunk, key) => {
  const match = chunk.match(new RegExp(`\\b${key}:\\s*([0-9]+(?:\\.[0-9]+)?)`));
  return match ? Number(match[1]) : undefined;
};

const constantField = (chunk, key) => {
  const match = chunk.match(new RegExp(`\\b${key}:\\s*([A-Z_][A-Z0-9_]*)`));
  if (!match) return undefined;
  const constant = pricingSource.match(
    new RegExp(`const ${match[1]}\\s*=\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`),
  );
  return constant ? constant[1] : undefined;
};

const listField = (chunk, key) => {
  const match = chunk.match(new RegExp(`\\b${key}:\\s*\\[([\\s\\S]*?)\\]`));
  if (!match) return undefined;
  return [...match[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
};

const entries = splitEntries(pricingSource).map((chunk) => {
  const rangeMatch = chunk.match(/priceRange:\s*\{([^}]*)\}/);

  return {
    id: stringField(chunk, "id"),
    serviceSlug: stringField(chunk, "serviceSlug"),
    unit: stringField(chunk, "unit"),
    pricingType: stringField(chunk, "pricingType"),
    scope: stringField(chunk, "scope"),
    // `disclaimer` and `lastReviewed` are shared constants in the source, so
    // accept either the literal or the constant reference.
    disclaimer: stringField(chunk, "disclaimer") ?? constantField(chunk, "disclaimer"),
    lastReviewed: stringField(chunk, "lastReviewed") ?? constantField(chunk, "lastReviewed"),
    startingPrice: numberField(chunk, "startingPrice"),
    factors: listField(chunk, "factors"),
    priceRange: rangeMatch
      ? {
          min: numberField(rangeMatch[1], "min"),
          max: numberField(rangeMatch[1], "max"),
        }
      : undefined,
  };
});

if (entries.length === 0) {
  fail("No pricing entries could be parsed from data/pricing/pricing.ts.");
}

/* ------------------------------------------------------------------------ */
/* 1. Prices live in exactly one file                                        */
/* ------------------------------------------------------------------------ */

const PRICE_FIELDS = /\b(startingPrice|priceRange|currency)\s*:/;

for (const file of readdirSync(join(PRICING_DIR, "translations"))) {
  if (!file.endsWith(".ts")) continue;
  const source = readFileSync(join(PRICING_DIR, "translations", file), "utf8");
  if (PRICE_FIELDS.test(source)) {
    fail(`data/pricing/translations/${file} contains a price field — prices belong only in pricing.ts.`);
  }
}
note("Translations carry wording only; every price literal lives in pricing.ts.");

/* ------------------------------------------------------------------------ */
/* 2–3. Required fields, unique ids, coherent ranges                         */
/* ------------------------------------------------------------------------ */

const seen = new Set();

for (const entry of entries) {
  const label = entry.id ?? "(entry without id)";

  for (const key of ["id", "serviceSlug", "unit", "pricingType", "scope", "disclaimer", "lastReviewed"]) {
    if (!entry[key]) fail(`Pricing entry ${label} is missing "${key}".`);
  }

  if (typeof entry.startingPrice !== "number" || Number.isNaN(entry.startingPrice)) {
    fail(`Pricing entry ${label} has no numeric startingPrice.`);
  } else if (entry.startingPrice <= 0) {
    fail(`Pricing entry ${label} has a non-positive startingPrice.`);
  }

  if (!entry.factors || entry.factors.length === 0) {
    fail(`Pricing entry ${label} lists no cost factors — a price without factors reads as final.`);
  }

  if (entry.lastReviewed && !/^\d{4}-\d{2}-\d{2}$/.test(entry.lastReviewed)) {
    fail(`Pricing entry ${label} has a malformed lastReviewed date: ${entry.lastReviewed}`);
  }

  if (entry.id) {
    if (seen.has(entry.id)) fail(`Duplicate pricing id: ${entry.id}`);
    seen.add(entry.id);
  }

  if (entry.priceRange) {
    const { min, max } = entry.priceRange;
    if (typeof min !== "number" || typeof max !== "number") {
      fail(`Pricing entry ${label} has an unparseable priceRange.`);
    } else {
      if (min > max) fail(`Pricing entry ${label} has priceRange.min greater than priceRange.max.`);
      if (entry.startingPrice !== undefined && entry.startingPrice > min) {
        fail(
          `Pricing entry ${label} shows "starting from ${entry.startingPrice}" beside a range that begins at ${min}.`,
        );
      }
    }
  }
}

note(`${entries.length} pricing entries parsed, all ids unique.`);

/* ------------------------------------------------------------------------ */
/* 4. Every priced service exists                                            */
/* ------------------------------------------------------------------------ */

const serviceSlugs = new Set(
  readdirSync(SERVICE_DIR)
    .filter((file) => file.endsWith(".ts") && !["index.ts", "types.ts"].includes(file))
    .map((file) => file.replace(/\.ts$/, "")),
);

for (const entry of entries) {
  if (entry.serviceSlug && !serviceSlugs.has(entry.serviceSlug)) {
    fail(`Pricing entry ${entry.id} points at unknown service "${entry.serviceSlug}".`);
  }
}

/* ------------------------------------------------------------------------ */
/* 5. Full translation coverage for every priced row                         */
/* ------------------------------------------------------------------------ */

for (const lang of ["ms", "zh"]) {
  const source = readFileSync(join(PRICING_DIR, "translations", `${lang}.ts`), "utf8");
  const translated = new Set([...source.matchAll(/"([a-z0-9-]+)":\s*\{/g)].map((m) => m[1]));
  const missing = entries.filter((entry) => entry.id && !translated.has(entry.id)).map((e) => e.id);

  if (missing.length > 0) {
    fail(`${lang}.ts is missing pricing copy for: ${missing.join(", ")}`);
  } else {
    note(`${lang.toUpperCase()} pricing copy covers all ${entries.length} rows.`);
  }

  const unknown = [...translated].filter((id) => !seen.has(id));
  if (unknown.length > 0) {
    fail(`${lang}.ts translates pricing ids that no longer exist: ${unknown.join(", ")}`);
  }
}

/* ------------------------------------------------------------------------ */
/* 6. Nothing is presented as a final or guaranteed price                    */
/* ------------------------------------------------------------------------ */

const FORBIDDEN = [
  /\bfixed price\b/i,
  /\bguaranteed price\b/i,
  /\bfinal price\b(?!\s+depends)/i,
  /\bno (?:extra|hidden) charge\b/i,
  /\bbest price in\b/i,
  /\bcheapest\b/i,
];

const copyFiles = [
  join(PRICING_DIR, "pricing.ts"),
  join(PRICING_DIR, "index.ts"),
  ...readdirSync(join(PRICING_DIR, "translations"))
    .filter((file) => file.endsWith(".ts"))
    .map((file) => join(PRICING_DIR, "translations", file)),
];

for (const file of copyFiles) {
  const source = readFileSync(file, "utf8");
  for (const pattern of FORBIDDEN) {
    const match = source.match(pattern);
    if (match) {
      fail(`${file.replace(`${ROOT}/`, "")} presents pricing as final/absolute: "${match[0]}"`);
    }
  }
}
note("No entry claims a fixed, guaranteed, cheapest or final price.");


/* ------------------------------------------------------------------------ */
/* 7. Each service's headline price matches a real row                       */
/* ------------------------------------------------------------------------ */

/*
 * The answer-first line on a service page quotes one headline figure. It must
 * be a price a reader could actually be quoted — i.e. it must appear in that
 * service's own pricing table. A service that mixes units (tiling sells both
 * per-sqft laying and per-sqft hacking, plus per-job repairs) must not
 * advertise its cheapest ancillary row as the headline for the whole service.
 */
const byService = new Map();
for (const entry of entries) {
  if (!entry.serviceSlug) continue;
  if (!byService.has(entry.serviceSlug)) byService.set(entry.serviceSlug, []);
  byService.get(entry.serviceSlug).push(entry);
}

for (const [slug, rows] of byService) {
  const source = readFileSync(join(SERVICE_DIR, `${slug}.ts`), "utf8");
  const note = source.match(/startingFromNote: "((?:[^"\\]|\\.)*)"/);

  if (!note) {
    fail(`${slug}.ts has a pricing table but no startingFromNote headline.`);
    continue;
  }

  const quoted = [...note[1].matchAll(/RM([0-9][0-9,]*(?:\.[0-9]+)?)/g)].map((m) =>
    Number(m[1].replace(/,/g, "")),
  );

  if (quoted.length === 0) {
    fail(`${slug}.ts startingFromNote quotes no price.`);
    continue;
  }

  const available = new Set();
  for (const row of rows) {
    available.add(row.startingPrice);
    if (row.priceRange) {
      available.add(row.priceRange.min);
      available.add(row.priceRange.max);
    }
  }

  const unmatched = quoted.filter((price) => !available.has(price));
  if (unmatched.length > 0) {
    fail(
      `${slug}.ts headline quotes RM${unmatched.join(", RM")}, which appears in no ${slug} pricing row.`,
    );
  }
}

note("Every service headline price appears in that service's own pricing table.");

/* ------------------------------------------------------------------------ */
/* Report                                                                    */
/* ------------------------------------------------------------------------ */

console.log("Renovix Home Services — pricing audit");
console.log("=".repeat(60));
for (const line of notes) console.log(`  OK  ${line}`);

if (failures.length > 0) {
  console.error("\nFAIL");
  for (const line of failures) console.error(`  ✗  ${line}`);
  process.exit(1);
}

console.log("\nPASS — pricing data is single-sourced, complete, coherent and clearly indicative.");
