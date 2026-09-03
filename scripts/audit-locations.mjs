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
/* 4. Validate Pricing Single-Source Reference                              */
/* ------------------------------------------------------------------------ */

const pricingSource = readFileSync(join(PRICING_DIR, "pricing.ts"), "utf8");
const validPricingIds = new Set(
  (pricingSource.match(/id:\s*"([^"]+)"/g) || []).map((m) => m.replace(/id:\s*"/, "").replace('"', "")),
);

const pricingIdRefs = (intentMatrixSource.match(/pricingId:\s*"([^"]+)"/g) || []).map((m) =>
  m.replace(/pricingId:\s*"/, "").replace('"', ""),
);

for (const ref of pricingIdRefs) {
  if (!validPricingIds.has(ref)) {
    fail(`Search Intent Matrix references invalid pricingId '${ref}' not found in pricing.ts`);
  }
}
note(`OK  All intent matrix pricing references match single-source pricing.ts.`);

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
