#!/usr/bin/env node
/**
 * Route audit — the App Router tree matches the registries, and no carpentry
 * (or other out-of-scope) category is introduced.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];
const pass = (m) => console.log(`  ✓ ${m}`);
const fail = (m) => {
  failures.push(m);
  console.log(`  ✗ ${m}`);
};

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

console.log("Renovix Home Services — route audit");

const required = [
  "app/[lang]/page.tsx",
  "app/[lang]/services/page.tsx",
  "app/[lang]/services/[category]/page.tsx",
  "app/[lang]/services/[category]/[subService]/page.tsx",
  "app/[lang]/problems/page.tsx",
  "app/[lang]/problems/[slug]/page.tsx",
  "app/[lang]/areas/page.tsx",
  "app/[lang]/areas/[region]/page.tsx",
  "app/[lang]/areas/[region]/[slug]/page.tsx",
  "app/[lang]/blog/page.tsx",
  "app/[lang]/blog/[slug]/page.tsx",
  "app/[lang]/projects/page.tsx",
  "app/[lang]/projects/[slug]/page.tsx",
  "app/[lang]/quote/page.tsx",
  "app/[lang]/contact/page.tsx",
  "app/[lang]/about/page.tsx",
  "app/[lang]/faq/page.tsx",
  "app/[lang]/privacy/page.tsx",
  "app/[lang]/terms/page.tsx",
  "app/api/quote/route.ts",
  "app/sitemap.ts",
  "app/robots.ts",
  "app/llms.txt/route.ts",
  "app/ai/pricing.json/route.ts",
  "app/ai/business.json/route.ts",
];
for (const rel of required) {
  if (exists(rel)) pass(rel);
  else fail(`missing route ${rel}`);
}

const services = [
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
const src = fs.readFileSync(path.join(root, "data/services.ts"), "utf8");
for (const s of services) {
  if (src.includes(`"${s}"`) || src.includes(`slug: "${s}"`)) pass(`service slug ${s}`);
  else fail(`missing service ${s}`);
}
if (/carpentry/i.test(src)) fail("Carpentry category exists — it must not");
else pass("no Carpentry category");

const cfg = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");
if (cfg.includes("trailingSlash: true")) pass("trailingSlash enabled");
else fail("trailingSlash missing");
if (cfg.includes('destination: "/en/"')) pass("root redirects to /en/");
else fail("root redirect missing");

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — public routes match the intended architecture.");
