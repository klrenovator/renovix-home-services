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

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — structured data builders stay honest and complete.");
