#!/usr/bin/env node
/**
 * Structured-data honesty audit. Fails if schema builders invent reviews,
 * ratings, awards or credentials, or stop emitting the required entity types.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");
const failures = [];
const pass = (m) => console.log(`  ✓ ${m}`);
const fail = (m) => {
  failures.push(m);
  console.log(`  ✗ ${m}`);
};

console.log("Renovix Home Services — structured data audit");

const schema = read("components/seo/schema.ts");
for (const needle of [
  '["Organization", "LocalBusiness"]',
  "WebSite",
  "WebPage",
  "BreadcrumbList",
  "FAQPage",
  "OfferCatalog",
  "SERVICE_PLACES",
  "Kuala Lumpur",
  "Selangor",
  "Klang Valley",
]) {
  if (schema.includes(needle)) pass(`schema.ts: ${needle}`);
  else fail(`schema.ts missing ${needle}`);
}

const banned = ["aggregateRating", "AggregateRating", '"Review"', "priceRange"];
for (const b of banned) {
  if (schema.includes(b)) fail(`schema.ts contains banned ${b}`);
  else pass(`schema.ts has no ${b}`);
}

if (/["']award["']\s*:/.test(schema)) fail("schema.ts emits an award field");
else pass("schema.ts does not emit awards");

if (/["']dayOfWeek["']\s*:/.test(schema) || /dayOfWeek\s*:/.test(schema)) fail("schema invents opening days");
else pass("openingHoursSpecification has no invented dayOfWeek");

const siteSchema = read("components/seo/SiteSchema.tsx");
if (siteSchema.includes("organizationNode") && siteSchema.includes("websiteNode")) {
  pass("SiteSchema emits Organization + WebSite");
} else fail("SiteSchema incomplete");

const jsonld = read("components/seo/JsonLd.tsx");
if (jsonld.includes("dangerouslySetInnerHTML") && jsonld.includes("\\u003c")) {
  pass("JsonLd escapes < before inlining");
} else fail("JsonLd escaping missing");

const sub = read("components/service/SubServiceJsonLd.tsx");
if (sub.includes("pricing.startingPrice") && sub.includes("PriceSpecification")) {
  pass("sub-service Offer prices come from the pricing registry");
} else fail("sub-service schema price source unexpected");

// Phase 43 — the service graph must describe the full visible catalogue and
// connect detailed scopes to the same business and pillar the page links to.
// Source checks are an early warning; audit:live compares actual names,
// descriptions and @ids on every rendered service/sub-service page.
const withoutComments = (source) => source
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/^\s*\/\/.*$/gm, "");
const schemaCode = withoutComments(schema);
const serviceBuilder = schemaCode.match(/export function serviceNode\b[\s\S]*?(?=\nexport function|$)/)?.[0] ?? "";
if (/itemListElement:\s*catalogItems\.map\(/.test(serviceBuilder)) {
  pass("service OfferCatalog maps every visible scope without a sample cap");
} else fail("service OfferCatalog must map the full catalogItems list (no slice/filter)");

const subCode = withoutComments(sub);
if (/provider:\s*\{\s*"@id":\s*ORGANIZATION_ID\s*\}/.test(subCode)) {
  pass("sub-service provider references the shared ORGANIZATION_ID");
} else fail("sub-service Service node must reference ORGANIZATION_ID as its provider");

if (
  /const serviceCanonical\s*=\s*absoluteUrl\(lang,\s*`\/services\/\$\{detail\.serviceSlug\}\/`\)/.test(subCode) &&
  /isRelatedTo:\s*\{\s*"@id":\s*`\$\{serviceCanonical\}#service`\s*\}/.test(subCode)
) {
  pass("sub-service schema links its own localized parent Service entity");
} else fail("sub-service isRelatedTo must reference the localized parent Service @id");

// Phase 44 — project pages restate their pillar's Service entity inline. The
// restated name must come from the service-content registry the pillar page
// itself publishes; the portfolio category labels are chips and <title>
// fragments, and using them here aliased the same entity under a second name.
// This is the early-warning source check; audit:live compares every rendered
// entity definition against its owner page across all 678 pages.
const projectSchemaCode = withoutComments(read("components/projects/ProjectJsonLd.tsx"));
if (
  /const serviceLang\s*=\s*hasTranslation\(\s*"service",\s*serviceSlug,\s*code\s*\)\s*\?\s*code\s*:\s*"en"/.test(projectSchemaCode) &&
  /absoluteUrl\(\s*serviceLang,\s*`\/services\/\$\{serviceSlug\}\/`\s*\)/.test(projectSchemaCode)
) {
  pass("project pillar entity reference resolves the localized pillar page before minting the @id");
} else fail("ProjectJsonLd must resolve the localized pillar (hasTranslation) and reuse that language for url and name alike");

if (
  /const serviceName\s*=\s*getServiceDetail\(\s*serviceSlug,\s*serviceLang\s*\)\?\.name\s*\?\?\s*categoryLabel/.test(projectSchemaCode) &&
  /name:\s*serviceName\s*,/.test(projectSchemaCode) &&
  /serviceType:\s*serviceName\s*,/.test(projectSchemaCode)
) {
  pass("project pillar entity name is derived from the service-content registry");
} else fail("ProjectJsonLd primaryServiceNode name/serviceType must use getServiceDetail(...).name with the categoryLabel fallback");

if (/name:\s*categoryLabel|serviceType:\s*categoryLabel/.test(projectSchemaCode)) {
  fail("ProjectJsonLd must not publish the portfolio category label as an entity name");
} else pass("no portfolio category label is used as an entity name in ProjectJsonLd");

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — structured data builders stay honest and complete.");
