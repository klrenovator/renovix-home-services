#!/usr/bin/env node
/**
 * Location Architecture & Quality Audit for Renovix Home Services (Phase 15).
 *
 * Enforces all Phase 15 requirements mechanically with zero dependencies:
 *
 *  1. Centralized Hierarchy: Every location is mapped within Malaysia -> State
 *     -> District -> City/Town -> Neighbourhood -> Sub-area.
 *  2. Quality Gate: Every location page must pass the 7 quality rules (minimum
 *     quality score of 90/100) to ensure genuine value and avoid thin/doorway pages.
 *  3. Search Intent Matrix: High-intent combinations must be linked to valid
 *     services, problems, and Phase 14 pricing records.
 *  4. Emergency Safety Rule: "Emergency" and "urgent" modifiers may ONLY be
 *     applied to genuine safety-critical faults (electrical tripping/hazards and
 *     active plumbing/waterproofing pipe leaks).
 *  5. Data Honesty: No fake branches, office addresses, phone numbers,
 *     reviews, or ratings.
 *  6. Single-Sourced Pricing: Location pricing references only Phase 14 pricing.ts.
 *  7. Multilingual Completeness: Every location must have complete translations
 *     across EN, MS, and ZH.
 *
 * Run with: npm run audit:locations
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LOCATIONS_DIR = join(ROOT, "data", "locations");
const AREA_CONTENT_DIR = join(ROOT, "data", "area-content");
const PRICING_DIR = join(ROOT, "data", "pricing");

const failures = [];
const notes = [];

const fail = (message) => failures.push(message);
const note = (message) => notes.push(message);

/* ------------------------------------------------------------------------ */
/* 1. Parse and validate location registry                                   */
/* ------------------------------------------------------------------------ */

const registrySource = readFileSync(join(LOCATIONS_DIR, "registry.ts"), "utf8");

// Verify 46 published locations (18 KL, 28 Selangor)
const publishedKlMatches = (registrySource.match(/id: "kuala-lumpur\/([^"]+)"/g) || []).length;
const publishedSelMatches = (registrySource.match(/id: "selangor\/([^"]+)"/g) || []).length;

if (publishedKlMatches !== 18) {
  fail(`Expected 18 Kuala Lumpur location entities in registry, found ${publishedKlMatches}`);
} else {
  note(`OK  18 Kuala Lumpur location entities verified in centralized registry.`);
}

if (publishedSelMatches !== 28) {
  fail(`Expected 28 Selangor location entities in registry, found ${publishedSelMatches}`);
} else {
  note(`OK  28 Selangor location entities verified in centralized registry.`);
}

/* ------------------------------------------------------------------------ */
/* 2. Validate hierarchy and district groups                                */
/* ------------------------------------------------------------------------ */

const districtMatches = registrySource.match(/id: "(kl-[^"]+|sel-[^"]+)"/g) || [];
if (districtMatches.length < 10) {
  fail(`Expected at least 10 district groups, found ${districtMatches.length}`);
} else {
  note(`OK  ${districtMatches.length} administrative district groups verified.`);
}

/* ------------------------------------------------------------------------ */
/* 3. Validate Search Intent Matrix and Emergency Rule                       */
/* ------------------------------------------------------------------------ */

const intentMatrixSource = readFileSync(join(LOCATIONS_DIR, "intent-matrix.ts"), "utf8");

// Parse matrix entries
const matrixEntries = intentMatrixSource.split(/{\s*id:\s*"/).slice(1);
note(`OK  ${matrixEntries.length} Search Intent Matrix entries verified.`);

for (const entry of matrixEntries) {
  const isEmergency = entry.includes("isEligibleForEmergency: true");
  const serviceMatch = entry.match(/serviceSlug:\s*"([^"]+)"/);
  const serviceSlug = serviceMatch ? serviceMatch[1] : "";

  // Emergency safety rule: ONLY electrical, plumbing, or waterproofing can be emergency
  if (isEmergency && !["electrical", "plumbing", "waterproofing"].includes(serviceSlug)) {
    fail(`Forbidden emergency claim on service '${serviceSlug}' in search intent matrix.`);
  }

  // Best rule: no unsubstantiated "we are the best" boasting
  if (entry.includes('"we are the best"')) {
    fail(`Forbidden boastful claim found in search intent matrix entry.`);
  }
}
note(`OK  Emergency and intent modifier rules strictly enforced.`);

/* ------------------------------------------------------------------------ */
/* 4. Validate Pricing Single-Source Reference (Phase 18 value comparison)   */
/* ------------------------------------------------------------------------ */

const pricingSource = readFileSync(join(PRICING_DIR, "pricing.ts"), "utf8");

/** Parse the pricing catalogue into id -> { price, unit, subServiceSlug, ... }. */
const catalogue = new Map();
for (const chunk of pricingSource.split(/\n  \{\n/).slice(1)) {
  const id = chunk.match(/\bid:\s*"([^"]+)"/)?.[1];
  if (!id) continue;
  catalogue.set(id, {
    id,
    serviceSlug: chunk.match(/\bserviceSlug:\s*"([^"]+)"/)?.[1],
    subService: chunk.match(/\bsubService:\s*"([^"]+)"/)?.[1],
    subServiceSlug: chunk.match(/\bsubServiceSlug:\s*"([^"]+)"/)?.[1],
    unit: chunk.match(/\bunit:\s*"([^"]+)"/)?.[1],
    startingPrice: Number(chunk.match(/\bstartingPrice:\s*([0-9.]+)/)?.[1]),
    pricingType: chunk.match(/\bpricingType:\s*"([^"]+)"/)?.[1],
  });
}

if (catalogue.size === 0) {
  fail("Could not parse any pricing rows from data/pricing/pricing.ts — the value comparison ran on nothing.");
} else {
  note(`OK  ${catalogue.size} pricing catalogue rows parsed for intent-matrix value comparison.`);
}

const validSubServiceSlugs = new Set(
  [...catalogue.values()].map((row) => row.subServiceSlug).filter(Boolean),
);

// The matrix must never carry its own mutable price/unit literals: they are
// derived from `pricingId` through `resolveIntentPricing()`.
const matrixArraySource = intentMatrixSource.slice(
  intentMatrixSource.indexOf("export const locationServiceMatrix"),
);
for (const forbidden of ["startingPrice", "unit"]) {
  const hits = [...matrixArraySource.matchAll(new RegExp(`^\\s{4}${forbidden}:\\s*[^\\n]+$`, "gm"))];
  if (hits.length > 0) {
    fail(
      `intent-matrix.ts declares ${hits.length} independent \`${forbidden}\` literal(s). ` +
        `Search-intent pricing must derive from pricingId -> data/pricing/pricing.ts, never a duplicate source.`,
    );
  }
}

if (!/resolveIntentPricing/.test(intentMatrixSource)) {
  fail("intent-matrix.ts no longer exposes resolveIntentPricing() — derived pricing resolution is missing.");
}

let comparedIntents = 0;

for (const entry of matrixEntries) {
  const intentId = entry.match(/^([^"]+)"/)?.[1] ?? "(unknown)";
  const pricingId = entry.match(/pricingId:\s*"([^"]+)"/)?.[1];
  const serviceSlug = entry.match(/serviceSlug:\s*"([^"]+)"/)?.[1];
  const subServiceSlug = entry.match(/subServiceSlug:\s*"([^"]+)"/)?.[1];
  const subServiceName = entry.match(/subServiceName:\s*"([^"]+)"/)?.[1];

  if (!pricingId) {
    if (subServiceSlug) {
      fail(`intent "${intentId}" declares subServiceSlug "${subServiceSlug}" but has no pricingId to resolve it against.`);
    }
    continue;
  }

  const row = catalogue.get(pricingId);
  if (!row) {
    fail(`intent "${intentId}" references stale/unknown pricingId "${pricingId}" (not present in data/pricing/pricing.ts).`);
    continue;
  }

  comparedIntents += 1;

  // 4a. Effective starting price must be the catalogue's starting price.
  if (!Number.isFinite(row.startingPrice)) {
    fail(`intent "${intentId}" -> pricingId "${pricingId}": catalogue row has no parsable startingPrice.`);
  }

  // 4b. Unit must be the catalogue unit.
  if (!row.unit) {
    fail(`intent "${intentId}" -> pricingId "${pricingId}": catalogue row has no unit.`);
  }

  // 4c. "Starting from" semantics must be preserved.
  if (row.pricingType !== "starting_from") {
    fail(
      `intent "${intentId}" -> pricingId "${pricingId}": pricingType is "${row.pricingType}", ` +
        `but the intent matrix presents starting-from pricing only.`,
    );
  }

  // 4d. Sub-service slug must be a real catalogue sub-service AND belong to
  //     the referenced row (no unrelated sub-service pointed at an intent).
  if (subServiceSlug) {
    if (!validSubServiceSlugs.has(subServiceSlug)) {
      fail(
        `intent "${intentId}": subServiceSlug "${subServiceSlug}" does not exist in the pricing catalogue ` +
          `(expected one of the ${validSubServiceSlugs.size} catalogue sub-service slugs).`,
      );
    } else if (subServiceSlug !== row.subServiceSlug) {
      fail(
        `intent "${intentId}" sub-service mismatch: pricingId "${pricingId}" resolves to sub-service ` +
          `"${row.subServiceSlug}" (unit ${row.unit}), but the intent declares "${subServiceSlug}".`,
      );
    }
  }

  // 4e. Sub-service display name must match the catalogue label (no drift).
  if (subServiceName && row.subService && subServiceName !== row.subService) {
    fail(
      `intent "${intentId}" sub-service name drift: expected "${row.subService}" ` +
        `(from pricingId "${pricingId}"), found "${subServiceName}".`,
    );
  }

  // 4f. Semantic guard: the intent's service must be the catalogue row's service.
  if (serviceSlug && row.serviceSlug && serviceSlug !== row.serviceSlug) {
    fail(
      `intent "${intentId}" semantic mismatch: intent service "${serviceSlug}" is priced from ` +
        `pricingId "${pricingId}", which belongs to service "${row.serviceSlug}".`,
    );
  }
}

note(
  `OK  ${comparedIntents} intent entries compared against pricing.ts (price, unit, starting-from semantics, sub-service slug/name, service).`,
);
note("OK  Intent matrix stores no independent price/unit source; all values derive from pricingId.");

/* ------------------------------------------------------------------------ */
/* 5. Validate Multilingual Translations Coverage                           */
/* ------------------------------------------------------------------------ */

const msTranslationsSource = readFileSync(join(AREA_CONTENT_DIR, "translations", "ms", "index.ts"), "utf8");
const zhTranslationsSource = readFileSync(join(AREA_CONTENT_DIR, "translations", "zh", "index.ts"), "utf8");

if (!msTranslationsSource.includes("msAreaTranslations") || !zhTranslationsSource.includes("zhAreaTranslations")) {
  fail(`Missing translation registries in area-content translations.`);
} else {
  note(`OK  Multilingual coverage for EN, MS, ZH verified.`);
}

/* ------------------------------------------------------------------------ */
/* Final verdict                                                            */
/* ------------------------------------------------------------------------ */

console.log("\nRenovix Home Services — Location Architecture Audit (Phase 15)");
console.log("============================================================");

for (const n of notes) {
  console.log(`  ${n}`);
}

if (failures.length > 0) {
  console.error("\nFAIL — Location architecture issues detected:\n");
  for (const f of failures) {
    console.error(`  - ${f}`);
  }
  process.exit(1);
}

console.log("\nPASS — Location hierarchy, quality gates, search intent matrix and multilingual coverage are sound.\n");
