#!/usr/bin/env node
/**
 * Pricing audit for Renovix Home Services.
 *
 * The site publishes indicative *starting* prices. That is only honest if the
 * published figures stay a single source of truth and are always presented
 * with their scope, unit, review date and disclaimer. This audit enforces that
 * mechanically, with no dependencies:
 *
 *  1. `data/pricing/pricing.ts` is the only authoritative structured price
 *     source. Service-page editorial copy may repeat a price only as
 *     row-backed context; rule 8 checks those repetitions. Pricing
 *     translations may reword scope and duration but never own a price field.
 *  2. Every pricing entry has an id, service, unit, starting price, scope,
 *     factors, disclaimer and `lastReviewed`, and every id is unique.
 *  3. Every price range is consistent (`min <= max`) and its `startingPrice`
 *     equals the range minimum, so "Starting from" can never be higher than
 *     the range it is shown beside.
 *  4. Each entry's `serviceSlug` is a real published service.
 *  5. Every service that renders a pricing table has Malay and Chinese copy
 *     and a localized row label for each of its rows — otherwise English
 *     pricing text could leak onto a `/ms/` or `/zh/` page.
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
    isHeadline: /\bisHeadline:\s*true\b/.test(chunk),
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
note("Translations carry wording only; authoritative price fields live in pricing.ts.");

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
    note(`${lang.toUpperCase()} pricing copy and row labels cover all ${entries.length} rows.`);
  }

  const unknown = [...translated].filter((id) => !seen.has(id));
  if (unknown.length > 0) {
    fail(`${lang}.ts translates pricing ids that no longer exist: ${unknown.join(", ")}`);
  }

  const missingLabels = entries
    .filter(
      (entry) =>
        entry.id &&
        !new RegExp(`"${entry.id}":\\s*\\{[\\s\\S]*?\\bsubService:\\s*"`).test(source),
    )
    .map((entry) => entry.id);
  if (missingLabels.length > 0) {
    fail(`${lang}.ts is missing localized sub-service labels for: ${missingLabels.join(", ")}`);
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
/* 7. Each service has one explicit, row-backed headline                     */
/* ------------------------------------------------------------------------ */

/*
 * The answer-first headline is selected in the central catalogue, not from
 * editorial service copy. An explicit row marker is required because a
 * service may mix units: tiling's RM2 hacking row must not become the
 * headline for a ceramic installation service that starts from RM8.
 */
const byService = new Map();
for (const entry of entries) {
  if (!entry.serviceSlug) continue;
  if (!byService.has(entry.serviceSlug)) byService.set(entry.serviceSlug, []);
  byService.get(entry.serviceSlug).push(entry);
}

for (const [slug, rows] of byService) {
  const headlines = rows.filter((row) => row.isHeadline);

  if (headlines.length !== 1) {
    fail(
      `${slug} must have exactly one isHeadline pricing row; found ${headlines.length}.`,
    );
  }
}

note("Every service has exactly one explicit headline row in pricing.ts.");

/* ------------------------------------------------------------------------ */
/* 8. Service-page copy quotes only prices the catalogue backs (Phase 16)    */
/* ------------------------------------------------------------------------ */

/*
 * Section 7 guards the headline. This rule guards every other RM figure a
 * reader meets in Renovix's own voice on a service page (answer-first
 * answers, FAQs, pricing intros, durations, cost factors): the quoted number
 * must fall inside one of that service's own pricing-row ranges, or inside
 * a row range of another service named on the same line (a cross-service
 * reference such as tiling quoting the waterproofing membrane rate).
 *
 * Exemptions, each documented:
 * - `materials` arrays describe third-party material supply rates, not
 *   Renovix quotes, and are labelled as supply-only context.
 * - Lines mentioning TNB state the utility's own application fee.
 * - `general-renovation` project totals at/above RM10k (k-suffixed) are
 *   hand-verified psf-x-area derivations of the rows beside them.
 *
 * Translations are checked differently: numbers are never translated, so
 * every RM figure in an MS/ZH service file must already exist in the English
 * file for that service — otherwise a translation invented (or dropped) a
 * price. And outside `data/service-content/` + `data/pricing/`, no RM figure
 * may appear at all (problems, areas, projects, FAQs and dictionaries must
 * never contradict the single source of truth).
 */
const SERVICE_KEYWORDS = {
  plumbing: ["plumbing", "plumber", "pipe", "tap", "toilet", "drain", "water heater"],
  waterproofing: ["waterproof", "membrane", "torch-on", "pu injection", "flood test", "cementitious"],
  tiling: ["tiling", "tile", "ceramic", "porcelain", "marble", "mosaic", "hacking", "screed", "grout"],
  painting: ["painting", "paint"],
  electrical: ["electrical", "wiring", "socket", "db box", "downlight", "fan", "lighting", "power point", "piping"],
  flooring: ["flooring", "spc", "vinyl", "laminate"],
  "ceiling-partition": ["ceiling", "partition", "plaster", "drywall", "cornice", "l-box"],
  "welding-metal-works": ["welding", "grille", "gate", "metal", "steel", "wrought", "stainless", "railing", "awning"],
  "general-renovation": ["renovation", "kitchen", "bathroom", "extension", "cabinet", "countertop"],
  handyman: ["handyman", "mounting", "grout", "silicone", "lock", "hinge"],
};

/** Ranges of the `materials: [...]` array in a service source file. */
function materialsRanges(source) {
  const ranges = [];
  let from = 0;
  while (true) {
    const key = source.indexOf("materials:", from);
    if (key < 0) break;
    const open = source.indexOf("[", key);
    let depth = 0;
    let close = open;
    for (; close < source.length; close += 1) {
      if (source[close] === "[") depth += 1;
      if (source[close] === "]") {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    ranges.push([key, close]);
    from = close + 1;
  }
  return ranges;
}

function expandPrice(raw, suffix) {
  const value = Number(raw.replace(/,/g, ""));
  if (!suffix) return value;
  if (suffix.toLowerCase() === "k") return value * 1000;
  if (suffix.toLowerCase() === "m") return value * 1000000;
  return value;
}

function lineOf(source, index) {
  return source.slice(0, index).split("\n").length;
}

const PRICE_FIGURE = /RM\s?([0-9][0-9,]*(?:\.[0-9]+)?)\s*([kKmM])?\b/g;

const enPriceSets = new Map();

for (const slug of serviceSlugs) {
  const file = join(SERVICE_DIR, `${slug}.ts`);
  const source = readFileSync(file, "utf8");
  const ranges = materialsRanges(source);
  const inMaterials = (index) => ranges.some(([a, b]) => index >= a && index <= b);
  const ownRanges = (byService.get(slug) ?? [])
    .filter((row) => row.priceRange)
    .map((row) => [row.priceRange.min, row.priceRange.max]);
  const inOwn = (n) => ownRanges.some(([a, b]) => n >= a && n <= b);
  const enNumbers = new Set();

  for (const match of source.matchAll(PRICE_FIGURE)) {
    enNumbers.add(expandPrice(match[1], match[2]));
    if (inMaterials(match.index)) continue;
    const line = source.split("\n")[lineOf(source, match.index) - 1];
    if (/TNB/i.test(line)) continue;
    const value = expandPrice(match[1], match[2]);
    if (slug === "general-renovation" && match[2] && value >= 10000) continue;
    if (inOwn(value)) continue;
    const covered = [...byService.keys()].some(
      (other) =>
        other !== slug &&
        (SERVICE_KEYWORDS[other] ?? []).some((word) => line.toLowerCase().includes(word)) &&
        (byService.get(other) ?? []).some(
          (row) => row.priceRange && value >= row.priceRange.min && value <= row.priceRange.max,
        ),
    );
    if (!covered) {
      fail(`${slug}.ts line ${lineOf(source, match.index)} quotes ${match[0]}, backed by no pricing row.`);
    }
  }

  enPriceSets.set(slug, enNumbers);
}

note("Every service-page price claim is backed by a pricing row (materials supply context exempt).");

for (const lang of ["ms", "zh"]) {
  for (const slug of serviceSlugs) {
    const file = join(SERVICE_DIR, "translations", lang, `${slug}.ts`);
    const source = readFileSync(file, "utf8");
    const allowed = enPriceSets.get(slug) ?? new Set();
    for (const match of source.matchAll(PRICE_FIGURE)) {
      if (!allowed.has(expandPrice(match[1], match[2]))) {
        fail(`${lang}/${slug}.ts quotes ${match[0]}, which the English page never states.`);
      }
    }
  }
}

note("MS/ZH service copy quotes no price the English page does not state.");

const PRICE_FREE_DIRS = [
  join(ROOT, "data", "problem-content"),
  join(ROOT, "data", "area-content"),
  join(ROOT, "data", "project-content"),
  join(ROOT, "data", "locations"),
  join(ROOT, "data", "i18n"),
  join(ROOT, "data", "blog"),
];

const PRICE_FREE_FILES = [
  join(ROOT, "data", "site-faqs.ts"),
  join(ROOT, "i18n", "en.ts"),
  join(ROOT, "i18n", "ms.ts"),
  join(ROOT, "i18n", "zh.ts"),
];

function collectTsFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return collectTsFiles(full);
    return full.endsWith(".ts") ? [full] : [];
  });
}

for (const dir of PRICE_FREE_DIRS) {
  for (const file of collectTsFiles(dir)) {
    const source = readFileSync(file, "utf8");
    const hit = source.match(/RM\s?[0-9]/);
    if (hit) {
      fail(`${file.replace(`${ROOT}/`, "")} quotes a price outside the pricing catalogue.`);
    }
  }
}

for (const file of PRICE_FREE_FILES) {
  const source = readFileSync(file, "utf8");
  if (/RM\s?[0-9]/.test(source)) {
    fail(`${file.replace(`${ROOT}/`, "")} quotes a price outside the pricing catalogue.`);
  }
}

note("Problems, areas, projects, locations, FAQs and dictionaries quote no prices.");

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
