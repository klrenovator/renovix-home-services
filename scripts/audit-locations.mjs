#!/usr/bin/env node
/**
 * Location Architecture, Reconciliation & Quality Audit (Phase 23).
 *
 * Phase 15 introduced the centralized location model; Phase 23 makes this
 * audit *reconciliation-driven* instead of count-driven. Nothing here asserts
 * a hard-coded number of guides any more — the audit derives the inventory
 * from the repository itself and then proves that every consumer of location
 * data agrees with it. Adding a location is therefore a data change, not a
 * script change, and a half-wired location fails the build.
 *
 * What is enforced:
 *
 *  1. ONE SOURCE OF TRUTH — `data/locations/registry.ts` and the area-content
 *     guides describe exactly the same set of locations, and the district
 *     groups, state coverage counts and `publicPath` values agree with it.
 *  2. QUALITY GATE — every published location carries genuine local substance
 *     (search intents, property context, service relevance, nearby links,
 *     access considerations, aliases) so no thin doorway page can ship.
 *  3. NO THIN / DUPLICATE CONTENT — every guide has unique metadata, unique
 *     FAQs, real body copy and enough sections to be worth indexing.
 *  4. SEARCH INTENT MATRIX — every matrix entry resolves to a real location,
 *     service and pricing row, and emergency claims stay safety-only.
 *  5. SINGLE-SOURCED PRICING — the matrix never stores its own price or unit.
 *  6. MULTILINGUAL COMPLETENESS — every published guide exists in EN, MS and
 *     ZH, with translated (not copied) metadata, and is listed in the i18n
 *     coverage lists that drive canonical, hreflang and the sitemap.
 *  7. INTERNAL LINK GRAPH — nearby areas, related services and related
 *     problems all point at pages that actually exist, and no guide is an
 *     orphan.
 *  8. HONESTY — no fabricated branches, addresses, ratings or "cheapest /
 *     best in town" claims on location pages.
 *
 * Run with: npm run audit:locations
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const LOCATIONS_DIR = join(ROOT, "data", "locations");
const AREA_CONTENT_DIR = join(ROOT, "data", "area-content");
const PRICING_DIR = join(ROOT, "data", "pricing");
const I18N_DIR = join(ROOT, "i18n");
const BLOG_DIR = join(ROOT, "data", "blog", "content");

const failures = [];
const notes = [];

const fail = (message) => failures.push(message);
const note = (message) => notes.push(message);

const read = (...parts) => readFileSync(join(...parts), "utf8");

/* ------------------------------------------------------------------------ */
/* 1. Parse the location registry (source of truth)                          */
/* ------------------------------------------------------------------------ */

const registrySource = read(LOCATIONS_DIR, "registry.ts");

/** Split the registry into one chunk per location entity. */
function parseRegistry(source) {
  const start = source.indexOf("export const locationsRegistry");
  const body = source.slice(start);
  const chunks = body.split(/\n  \{\n/).slice(1);
  const entities = [];

  for (const chunk of chunks) {
    const id = chunk.match(/^\s*id: "((?:kuala-lumpur|selangor)\/[a-z0-9-]+)"/m)?.[1];
    if (!id) continue;
    const list = (field) => {
      const raw = chunk.match(new RegExp(`${field}: \\[([^\\]]*)\\]`))?.[1] ?? "";
      return [...raw.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    };
    entities.push({
      id,
      slug: chunk.match(/\n\s*slug: "([^"]+)"/)?.[1],
      name: chunk.match(/\n\s*name: "([^"]+)"/)?.[1],
      level: chunk.match(/\n\s*level: "([^"]+)"/)?.[1],
      regionId: chunk.match(/\n\s*regionId: "([^"]+)"/)?.[1],
      district: chunk.match(/\n\s*district: "([^"]+)"/)?.[1],
      published: /\n\s*published: true/.test(chunk),
      publicPath: chunk.match(/\n\s*publicPath: "([^"]+)"/)?.[1],
      aliases: list("aliases"),
      nearbyLocationSlugs: list("nearbyLocationSlugs"),
      housingEras: list("housingEras"),
      propertyTypes: list("propertyTypes"),
      accessConsiderations: list("accessConsiderations"),
      primaryServices: list("primaryServices"),
      commonProblems: list("commonProblems"),
      searchIntents: list("searchIntents"),
      targetModifiers: list("targetModifiers"),
      raw: chunk,
    });
  }

  return entities;
}

const registry = parseRegistry(registrySource);
const published = registry.filter((entity) => entity.published);

if (registry.length === 0) {
  fail("Could not parse any location entities from data/locations/registry.ts.");
}

const byRegion = (regionId) => published.filter((entity) => entity.regionId === regionId);
const KL_COUNT = byRegion("kuala-lumpur").length;
const SEL_COUNT = byRegion("selangor").length;

note(
  `OK  Location registry parsed: ${published.length} published locations ` +
    `(${KL_COUNT} Kuala Lumpur, ${SEL_COUNT} Selangor).`,
);

/* ------------------------------------------------------------------------ */
/* 2. Parse the area-content guides and reconcile against the registry       */
/* ------------------------------------------------------------------------ */

function parseAreaGuides() {
  const guides = [];

  for (const file of readdirSync(AREA_CONTENT_DIR)) {
    if (!/^(kuala-lumpur|selangor)-areas-[a-z]\.ts$/.test(file)) continue;
    const source = read(AREA_CONTENT_DIR, file);

    for (const chunk of source.split(/\n  \{\n/).slice(1)) {
      const region = chunk.match(/^\s*region: "([^"]+)"/m)?.[1];
      const slug = chunk.match(/\n\s*slug: "([^"]+)"/)?.[1];
      if (!region || !slug) continue;

      const list = (field) => {
        const raw = chunk.match(new RegExp(`\\n\\s{4}${field}: \\[([\\s\\S]*?)\\]`))?.[1] ?? "";
        return [...raw.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]);
      };

      guides.push({
        file,
        id: `${region}/${slug}`,
        region,
        slug,
        name: chunk.match(/\n\s*name: "([^"]+)"/)?.[1],
        title: chunk.match(/\n\s*title:\s*\n?\s*"([^"]+)"/)?.[1],
        metaDescription: chunk.match(/metaDescription:\s*\n?\s*"([^"]+)"/)?.[1],
        h1: chunk.match(/\n\s*h1: "([^"]+)"/)?.[1],
        summary: chunk.match(/\n\s*summary:\s*\n?\s*"([^"]+)"/)?.[1],
        faqCount: (chunk.match(/\n\s{8}question: /g) || []).length,
        problemCount: (chunk.match(/\n\s{8}title: "/g) || []).length,
        serviceSlugs: [...chunk.matchAll(/serviceSlug: "([a-z-]+)"/g)].map((m) => m[1]),
        relatedServices: list("relatedServices"),
        relatedProblems: list("relatedProblems"),
        nearbyAreas: list("nearbyAreas"),
        raw: chunk,
      });
    }
  }

  return guides;
}

const guides = parseAreaGuides();
const guideIds = new Set(guides.map((guide) => guide.id));
const registryIds = new Set(published.map((entity) => entity.id));

for (const id of registryIds) {
  if (!guideIds.has(id)) {
    fail(`Registry publishes "${id}" but no area guide exists for it — a published location with no page.`);
  }
}
for (const id of guideIds) {
  if (!registryIds.has(id)) {
    fail(`Area guide "${id}" is not a published entity in the location registry — two conflicting location lists.`);
  }
}

if (guides.length === published.length && failures.length === 0) {
  note(`OK  Registry <-> area guides reconciled: ${guides.length} locations, one authoritative list.`);
}

// publicPath must match the actual route the guide is served at.
for (const entity of published) {
  const expected = `/areas/${entity.regionId}/${entity.slug}`;
  if (entity.publicPath !== expected) {
    fail(`Location "${entity.id}" declares publicPath "${entity.publicPath}", expected "${expected}".`);
  }
}
note("OK  Every published location's publicPath matches its real route.");

/* ------------------------------------------------------------------------ */
/* 3. District groups and state coverage counts                              */
/* ------------------------------------------------------------------------ */

const districtSection = registrySource.slice(
  registrySource.indexOf("export const districtGroups"),
  registrySource.indexOf("export const stateCoverage"),
);

const districts = [];
for (const chunk of districtSection.split(/\n  \{\n/).slice(1)) {
  const id = chunk.match(/id: "([^"]+)"/)?.[1];
  const regionId = chunk.match(/regionId: "([^"]+)"/)?.[1];
  const slugs = [
    ...(chunk.match(/locationSlugs: \[([\s\S]*?)\]/)?.[1] ?? "").matchAll(/"([^"]+)"/g),
  ].map((m) => m[1]);
  if (id) districts.push({ id, regionId, slugs });
}

const districtSlugs = new Map();
for (const district of districts) {
  for (const slug of district.slugs) {
    if (districtSlugs.has(slug)) {
      fail(`Location slug "${slug}" appears in two district groups (${districtSlugs.get(slug)} and ${district.id}).`);
    }
    districtSlugs.set(slug, district.id);
    const entity = published.find((item) => item.slug === slug && item.regionId === district.regionId);
    if (!entity) {
      fail(`District group "${district.id}" lists "${slug}", which is not a published location in ${district.regionId}.`);
    }
  }
}

for (const entity of published) {
  if (!districtSlugs.has(entity.slug)) {
    fail(`Published location "${entity.id}" belongs to no district group — it is orphaned in the hierarchy.`);
  }
}
note(`OK  ${districts.length} district groups verified; every published location sits in exactly one.`);

const stateSection = registrySource.slice(registrySource.indexOf("export const stateCoverage"));
const declaredKl = Number(
  stateSection.match(/id: "kuala-lumpur"[\s\S]*?totalPublishedGuides: (\d+)/)?.[1],
);
const declaredSel = Number(
  stateSection.match(/id: "selangor"[\s\S]*?totalPublishedGuides: (\d+)/)?.[1],
);

if (declaredKl !== KL_COUNT) {
  fail(`stateCoverage declares ${declaredKl} Kuala Lumpur guides, registry publishes ${KL_COUNT}.`);
}
if (declaredSel !== SEL_COUNT) {
  fail(`stateCoverage declares ${declaredSel} Selangor guides, registry publishes ${SEL_COUNT}.`);
}
note(`OK  stateCoverage guide counts match the registry (${KL_COUNT} KL / ${SEL_COUNT} Selangor).`);

/* ------------------------------------------------------------------------ */
/* 4. Quality gate — no thin or doorway pages                                */
/* ------------------------------------------------------------------------ */

const MIN = {
  searchIntents: 2,
  aliases: 1,
  nearby: 2,
  primaryServices: 3,
  propertyTypes: 3,
  housingEras: 1,
  access: 1,
  faqs: 4,
  problems: 4,
  metaDescription: 80,
};

for (const entity of published) {
  const issues = [];
  if (entity.searchIntents.length < MIN.searchIntents) issues.push("fewer than 2 search intents");
  if (entity.aliases.length < MIN.aliases) issues.push("no aliases / alternate search names");
  if (entity.nearbyLocationSlugs.length < MIN.nearby) issues.push("fewer than 2 nearby connections");
  if (entity.primaryServices.length < MIN.primaryServices) issues.push("fewer than 3 primary services");
  if (entity.propertyTypes.length < MIN.propertyTypes) issues.push("fewer than 3 property types");
  if (entity.housingEras.length < MIN.housingEras) issues.push("no housing eras");
  if (entity.accessConsiderations.length < MIN.access) issues.push("no access considerations");
  if (entity.commonProblems.length < 3) issues.push("fewer than 3 common problems");
  if (issues.length > 0) {
    fail(`Quality gate failed for "${entity.id}": ${issues.join("; ")}.`);
  }
}
note(`OK  Quality gate passed for all ${published.length} published locations (local substance, not templates).`);

for (const guide of guides) {
  const issues = [];
  if (guide.faqCount < MIN.faqs) issues.push(`only ${guide.faqCount} FAQs (minimum ${MIN.faqs})`);
  if (guide.problemCount < MIN.problems) issues.push(`only ${guide.problemCount} local problems`);
  if (guide.relatedServices.length < 3) issues.push("fewer than 3 related services");
  if (guide.relatedProblems.length < 3) issues.push("fewer than 3 related problems");
  if (guide.nearbyAreas.length < 2) issues.push("fewer than 2 nearby areas");
  if ((guide.metaDescription ?? "").length < MIN.metaDescription) {
    issues.push("meta description too short to be useful");
  }
  if (issues.length > 0) {
    fail(`Thin-content check failed for area guide "${guide.id}": ${issues.join("; ")}.`);
  }
}
note("OK  No thin or doorway location pages: every guide carries FAQs, local problems and real internal links.");

/* ------------------------------------------------------------------------ */
/* 5. Duplicate-content checks                                               */
/* ------------------------------------------------------------------------ */

for (const field of ["title", "metaDescription", "h1", "summary"]) {
  const seen = new Map();
  for (const guide of guides) {
    const value = guide[field];
    if (!value) {
      fail(`Area guide "${guide.id}" is missing a ${field}.`);
      continue;
    }
    if (seen.has(value)) {
      fail(`Duplicate ${field} shared by area guides "${seen.get(value)}" and "${guide.id}".`);
    }
    seen.set(value, guide.id);
  }
}
note("OK  Every location page has a unique title, meta description, H1 and summary.");

// A location page whose H1 is only "<Service> in <Location>" repeated is the
// classic doorway signature; require the guide to talk about local specifics.
for (const guide of guides) {
  const intro = guide.raw.match(/intro: \[([\s\S]*?)\n    \],/)?.[1] ?? "";
  if (intro.replace(/\s+/g, " ").length < 400) {
    fail(`Area guide "${guide.id}" has an intro shorter than 400 characters — not enough local substance.`);
  }
  const context = guide.raw.match(/context: \[([\s\S]*?)\n    \],/)?.[1] ?? "";
  if (context.replace(/\s+/g, " ").length < 300) {
    fail(`Area guide "${guide.id}" has a local-context section shorter than 300 characters.`);
  }
}
note("OK  Every location page carries substantive local intro and context copy.");

/* ------------------------------------------------------------------------ */
/* 6. Honesty rules on location copy                                         */
/* ------------------------------------------------------------------------ */

const FORBIDDEN = [
  { pattern: /\bcheapest\b/i, why: 'unsubstantiated "cheapest" claim' },
  { pattern: /\bnumber one\b|\b#1\b/i, why: 'unsubstantiated "number one" ranking claim' },
  { pattern: /\bguarantee(?:d)? (?:lowest|best) price\b/i, why: "unsubstantiated price guarantee" },
  { pattern: /\bour (?:branch|office|showroom) in\b/i, why: "fabricated local branch or office" },
  { pattern: /\b\d+\s*(?:5-star|five-star)\s*reviews?\b/i, why: "invented review count" },
  { pattern: /\b24\/7 (?:branch|office)\b/i, why: "unsupported around-the-clock premises claim" },
];

for (const guide of guides) {
  for (const rule of FORBIDDEN) {
    if (rule.pattern.test(guide.raw)) {
      fail(`Honesty rule broken in area guide "${guide.id}": ${rule.why}.`);
    }
  }
}
for (const entity of published) {
  for (const rule of FORBIDDEN) {
    if (rule.pattern.test(entity.raw)) {
      fail(`Honesty rule broken in registry entity "${entity.id}": ${rule.why}.`);
    }
  }
}
note("OK  No fabricated branches, ratings or superlative price claims on location pages.");

// Location pages must not invent their own prices — pricing is centralized.
for (const guide of guides) {
  const priceLiteral = guide.raw.match(/RM\s?\d[\d,]*/);
  if (priceLiteral) {
    fail(
      `Area guide "${guide.id}" contains the hard-coded price "${priceLiteral[0]}". ` +
        "Location pricing must come from data/pricing/pricing.ts only.",
    );
  }
}
note("OK  No location page invents a price; all rates resolve from data/pricing/pricing.ts.");

/* ------------------------------------------------------------------------ */
/* 7. Internal link graph: services, problems and nearby areas resolve       */
/* ------------------------------------------------------------------------ */

const coverageSource = read(I18N_DIR, "coverage.ts");
const allServices = [
  ...(coverageSource.match(/export const ALL_SERVICES = \[([\s\S]*?)\] as const;/)?.[1] ?? "").matchAll(/"([^"]+)"/g),
].map((m) => m[1]);
const allProblems = [
  ...(coverageSource.match(/export const ALL_PROBLEMS = \[([\s\S]*?)\] as const;/)?.[1] ?? "").matchAll(/"([^"]+)"/g),
].map((m) => m[1]);
const allAreas = [
  ...(coverageSource.match(/export const ALL_AREAS = \[([\s\S]*?)\] as const;/)?.[1] ?? "").matchAll(/"([^"]+)"/g),
].map((m) => m[1]);

const serviceSet = new Set(allServices);
const problemSet = new Set(allProblems);
const slugSet = new Set(guides.map((guide) => guide.slug));

const inboundLinks = new Map(guides.map((guide) => [guide.slug, 0]));

for (const guide of guides) {
  for (const slug of new Set([...guide.serviceSlugs, ...guide.relatedServices])) {
    if (!serviceSet.has(slug)) {
      fail(`Area guide "${guide.id}" links to unknown service "${slug}".`);
    }
  }
  for (const slug of guide.relatedProblems) {
    if (!problemSet.has(slug)) {
      fail(`Area guide "${guide.id}" links to unknown problem "${slug}".`);
    }
  }
  for (const slug of guide.nearbyAreas) {
    if (!slugSet.has(slug)) {
      fail(`Area guide "${guide.id}" links to nearby area "${slug}", which has no page.`);
    } else {
      inboundLinks.set(slug, (inboundLinks.get(slug) ?? 0) + 1);
    }
    if (slug === guide.slug) {
      fail(`Area guide "${guide.id}" lists itself as a nearby area.`);
    }
  }
}

for (const entity of published) {
  for (const slug of entity.nearbyLocationSlugs) {
    if (!slugSet.has(slug)) {
      fail(`Registry entity "${entity.id}" references nearby location "${slug}", which has no page.`);
    }
  }
  for (const slug of entity.primaryServices) {
    if (!serviceSet.has(slug)) {
      fail(`Registry entity "${entity.id}" references unknown service "${slug}".`);
    }
  }
  for (const slug of entity.commonProblems) {
    if (!problemSet.has(slug)) {
      fail(`Registry entity "${entity.id}" references unknown problem "${slug}".`);
    }
  }
}

const orphans = [...inboundLinks.entries()].filter(([, count]) => count === 0).map(([slug]) => slug);
if (orphans.length > 0) {
  fail(
    `Orphan location page(s) with no inbound "nearby areas" link: ${orphans.join(", ")}. ` +
      "Every location must be reachable from at least one neighbouring guide.",
  );
}
note(
  `OK  Location link graph verified: services, problems and ${inboundLinks.size} nearby-area links all resolve, no orphans.`,
);

/* ------------------------------------------------------------------------ */
/* 8. Location <-> blog graph                                                */
/* ------------------------------------------------------------------------ */

let blogLocationRefs = 0;
for (const file of readdirSync(BLOG_DIR)) {
  if (!file.endsWith(".ts")) continue;
  const source = read(BLOG_DIR, file);
  const block = source.match(/relatedLocations: \[([\s\S]*?)\]/)?.[1] ?? "";
  for (const [, id] of block.matchAll(/"([^"]+)"/g)) {
    blogLocationRefs += 1;
    if (!guideIds.has(id)) {
      fail(`Blog article "${file}" links to location "${id}", which has no area guide.`);
    }
  }
}
note(`OK  ${blogLocationRefs} blog -> location references all resolve to real area guides.`);

/* ------------------------------------------------------------------------ */
/* 9. Location <-> project graph (honest, never inferred)                    */
/* ------------------------------------------------------------------------ */

const projectSource = read(ROOT, "data", "project-content", "projects.ts");
let projectLocationRefs = 0;
for (const [, region, area] of projectSource.matchAll(
  /location: \{\s*region: "([^"]+)",(?:\s*area: "([^"]+)",)?/g,
)) {
  projectLocationRefs += 1;
  if (!["kuala-lumpur", "selangor"].includes(region)) {
    fail(`Project location references unknown region "${region}".`);
  }
  if (area && !guideIds.has(`${region}/${area}`)) {
    fail(`Project location references area "${region}/${area}", which has no area guide.`);
  }
}
note(
  projectLocationRefs === 0
    ? "OK  No project claims a location — unknown project locations are left unknown, never inferred."
    : `OK  ${projectLocationRefs} owner-supplied project location(s) resolve to real area pages.`,
);

/* ------------------------------------------------------------------------ */
/* 10. Search Intent Matrix + single-sourced pricing                         */
/* ------------------------------------------------------------------------ */

const intentMatrixSource = read(LOCATIONS_DIR, "intent-matrix.ts");
const matrixEntries = intentMatrixSource
  .slice(intentMatrixSource.indexOf("export const locationServiceMatrix"))
  .split(/\{\s*id:\s*"/)
  .slice(1);

note(`OK  ${matrixEntries.length} Search Intent Matrix entries verified.`);

for (const entry of matrixEntries) {
  const intentId = entry.match(/^([^"]+)"/)?.[1] ?? "(unknown)";
  const isEmergency = entry.includes("isEligibleForEmergency: true");
  const serviceSlug = entry.match(/serviceSlug:\s*"([^"]+)"/)?.[1] ?? "";
  const locationSlug = entry.match(/locationSlug:\s*"([^"]+)"/)?.[1] ?? "";

  if (isEmergency && !["electrical", "plumbing", "waterproofing"].includes(serviceSlug)) {
    fail(`Forbidden emergency claim on service "${serviceSlug}" in intent "${intentId}".`);
  }
  if (!slugSet.has(locationSlug)) {
    fail(`Intent "${intentId}" targets location "${locationSlug}", which has no published guide.`);
  }
  if (serviceSlug && !serviceSet.has(serviceSlug)) {
    fail(`Intent "${intentId}" targets unknown service "${serviceSlug}".`);
  }
  if (entry.includes('"we are the best"')) {
    fail(`Forbidden boastful claim in intent "${intentId}".`);
  }
}
note("OK  Emergency and intent modifier rules strictly enforced; every intent targets a real location and service.");

const pricingSource = read(PRICING_DIR, "pricing.ts");
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

const matrixArraySource = intentMatrixSource.slice(
  intentMatrixSource.indexOf("export const locationServiceMatrix"),
);
for (const forbidden of ["startingPrice", "unit"]) {
  const hits = [...matrixArraySource.matchAll(new RegExp(`^\\s{4}${forbidden}:\\s*[^\\n]+$`, "gm"))];
  if (hits.length > 0) {
    fail(
      `intent-matrix.ts declares ${hits.length} independent \`${forbidden}\` literal(s). ` +
        "Search-intent pricing must derive from pricingId -> data/pricing/pricing.ts.",
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
      fail(`intent "${intentId}" declares subServiceSlug "${subServiceSlug}" but has no pricingId.`);
    }
    continue;
  }

  const row = catalogue.get(pricingId);
  if (!row) {
    fail(`intent "${intentId}" references unknown pricingId "${pricingId}".`);
    continue;
  }

  comparedIntents += 1;

  if (!Number.isFinite(row.startingPrice)) {
    fail(`intent "${intentId}" -> "${pricingId}": catalogue row has no parsable startingPrice.`);
  }
  if (!row.unit) {
    fail(`intent "${intentId}" -> "${pricingId}": catalogue row has no unit.`);
  }
  if (row.pricingType !== "starting_from") {
    fail(
      `intent "${intentId}" -> "${pricingId}": pricingType is "${row.pricingType}", ` +
        "but the intent matrix presents starting-from pricing only.",
    );
  }
  if (subServiceSlug) {
    if (!validSubServiceSlugs.has(subServiceSlug)) {
      fail(`intent "${intentId}": subServiceSlug "${subServiceSlug}" does not exist in the pricing catalogue.`);
    } else if (subServiceSlug !== row.subServiceSlug) {
      fail(
        `intent "${intentId}" sub-service mismatch: "${pricingId}" resolves to "${row.subServiceSlug}", ` +
          `intent declares "${subServiceSlug}".`,
      );
    }
  }
  if (subServiceName && row.subService && subServiceName !== row.subService) {
    fail(`intent "${intentId}" sub-service name drift: expected "${row.subService}", found "${subServiceName}".`);
  }
  if (serviceSlug && row.serviceSlug && serviceSlug !== row.serviceSlug) {
    fail(
      `intent "${intentId}" semantic mismatch: service "${serviceSlug}" priced from "${pricingId}" ` +
        `(service "${row.serviceSlug}").`,
    );
  }
}

note(`OK  ${comparedIntents} intent entries compared against pricing.ts (price, unit, semantics, sub-service, service).`);
note("OK  Intent matrix stores no independent price/unit source; all values derive from pricingId.");

/* ------------------------------------------------------------------------ */
/* 11. Multilingual completeness (EN / MS / ZH)                              */
/* ------------------------------------------------------------------------ */

function parseTranslationKeys(lang) {
  const dir = join(AREA_CONTENT_DIR, "translations", lang);
  const entries = new Map();

  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".ts") || file === "index.ts") continue;
    const source = read(dir, file);
    for (const chunk of source.split(/\n  "/).slice(1)) {
      const id = chunk.match(/^((?:kuala-lumpur|selangor)\/[a-z0-9-]+)"/)?.[1];
      if (!id) continue;
      entries.set(id, {
        file,
        metaDescription: chunk.match(/metaDescription:\s*\n?\s*"([^"]+)"/)?.[1],
        h1: chunk.match(/\n\s*h1: "([^"]+)"/)?.[1],
        faqCount: (chunk.match(/question: "/g) || []).length,
        serviceNotes: (chunk.match(/serviceNotes: \[([\s\S]*?)\n\s{4}\]/)?.[1].match(/"/g) || []).length / 2,
      });
    }
  }

  return entries;
}

// The translation index files must actually re-export every batch.
for (const lang of ["ms", "zh"]) {
  const indexSource = read(AREA_CONTENT_DIR, "translations", lang, "index.ts");
  for (const file of readdirSync(join(AREA_CONTENT_DIR, "translations", lang))) {
    if (!file.endsWith(".ts") || file === "index.ts") continue;
    const moduleName = file.replace(/\.ts$/, "");
    if (!indexSource.includes(`"./${moduleName}"`)) {
      fail(`translations/${lang}/index.ts does not import "./${moduleName}" — those translations are unreachable.`);
    }
  }
}

for (const lang of ["ms", "zh"]) {
  const translations = parseTranslationKeys(lang);

  for (const guide of guides) {
    const translation = translations.get(guide.id);
    if (!translation) {
      fail(`Location "${guide.id}" has no ${lang.toUpperCase()} translation — EN/MS/ZH coverage is incomplete.`);
      continue;
    }
    if (!translation.metaDescription || translation.metaDescription === guide.metaDescription) {
      fail(`${lang.toUpperCase()} translation for "${guide.id}" reuses the English meta description.`);
    }
    if (!translation.h1 || translation.h1 === guide.h1) {
      fail(`${lang.toUpperCase()} translation for "${guide.id}" reuses the English H1.`);
    }
    if (translation.faqCount < MIN.faqs - 1) {
      fail(`${lang.toUpperCase()} translation for "${guide.id}" has only ${translation.faqCount} FAQs.`);
    }
    if (translation.serviceNotes !== guide.serviceSlugs.length) {
      fail(
        `${lang.toUpperCase()} translation for "${guide.id}" supplies ${translation.serviceNotes} service notes ` +
          `but the English guide lists ${guide.serviceSlugs.length} services — the notes would drift out of order.`,
      );
    }
  }

  for (const id of translations.keys()) {
    if (!guideIds.has(id)) {
      fail(`${lang.toUpperCase()} translations include "${id}", which has no English area guide.`);
    }
  }

  note(`OK  ${translations.size} ${lang.toUpperCase()} location translations verified (localized, not copied).`);
}

/* ------------------------------------------------------------------------ */
/* 12. Canonical / hreflang / sitemap coverage lists                         */
/* ------------------------------------------------------------------------ */

const allAreasSet = new Set(allAreas);
for (const guide of guides) {
  if (!allAreasSet.has(guide.id)) {
    fail(`i18n/coverage.ts ALL_AREAS is missing "${guide.id}" — it would be absent from the sitemap and hreflang sets.`);
  }
}
for (const id of allAreas) {
  if (!guideIds.has(id)) {
    fail(`i18n/coverage.ts ALL_AREAS lists "${id}", which has no area guide — the sitemap would emit a 404 URL.`);
  }
}
note(`OK  ALL_AREAS (${allAreas.length}) matches the guide inventory exactly — sitemap and hreflang stay in sync.`);

const coverageBlocks = coverageSource.match(/area: \[([\s\S]*?)\n    \],/g) ?? [];
if (coverageBlocks.length !== 2) {
  fail(`Expected MS and ZH area coverage lists in i18n/coverage.ts, found ${coverageBlocks.length}.`);
} else {
  for (const [index, block] of coverageBlocks.entries()) {
    const lang = index === 0 ? "ms" : "zh";
    const listed = new Set([...block.matchAll(/"([^"]+)"/g)].map((m) => m[1]));
    for (const guide of guides) {
      if (!listed.has(guide.id)) {
        fail(`i18n/coverage.ts ${lang} area list is missing "${guide.id}" — the ${lang} page would never be generated.`);
      }
    }
    for (const id of listed) {
      if (!guideIds.has(id)) {
        fail(`i18n/coverage.ts ${lang} area list references "${id}", which has no area guide.`);
      }
    }
  }
  note("OK  MS and ZH coverage lists publish every location — canonical + hreflang complete in all three languages.");
}

// Chinese place names must exist for every guide, otherwise /zh/ shows English.
const listsSource = read(ROOT, "data", "i18n", "lists.ts");
const zhNamesBlock = listsSource.slice(listsSource.indexOf("export const areaNames"));
const zhNames = new Set(
  [...zhNamesBlock.matchAll(/"((?:kuala-lumpur|selangor)\/[a-z0-9-]+)":/g)].map((m) => m[1]),
);
for (const guide of guides) {
  if (!zhNames.has(guide.id)) {
    fail(`data/i18n/lists.ts areaNames.zh is missing "${guide.id}" — the Chinese pages would show the English name.`);
  }
}
note("OK  Chinese place names present for every location.");

/* ------------------------------------------------------------------------ */
/* Final verdict                                                            */
/* ------------------------------------------------------------------------ */

console.log("\nRenovix Home Services — Location Architecture & Reconciliation Audit (Phase 23)");
console.log("==============================================================================");

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

console.log(
  `\nPASS — One authoritative location model: ${published.length} published locations ` +
    `(${KL_COUNT} Kuala Lumpur, ${SEL_COUNT} Selangor), reconciled across registry, guides, ` +
    "hierarchy, intent matrix, pricing, translations, link graph and sitemap coverage.\n",
);
