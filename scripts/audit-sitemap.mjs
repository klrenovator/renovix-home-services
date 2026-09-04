#!/usr/bin/env node
/**
 * Sitemap / robots audit against the content registries (no running server).
 * Expected public URL count = 3 languages × (12 chrome pages + 10 services +
 * 51 sub-services + 12 articles + 57 problems + 2 regions + 53 areas + 21 projects).
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

function countQuoted(listText) {
  return [...listText.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

console.log("Renovix Home Services — sitemap / robots audit");

const coverage = read("i18n/coverage.ts");
function grab(name) {
  const m = coverage.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const`));
  if (!m) return [];
  return countQuoted(m[1]);
}
const services = grab("ALL_SERVICES");
const problems = grab("ALL_PROBLEMS");
const areas = grab("ALL_AREAS");
const projects = grab("ALL_PROJECTS");
const regions = grab("ALL_AREA_REGIONS");

const subFiles = fs.readdirSync(path.join(root, "data/sub-services/content")).filter((f) => f.endsWith(".ts"));
let subSlugs = [];
for (const f of subFiles) {
  const t = read(`data/sub-services/content/${f}`);
  subSlugs.push(...[...t.matchAll(/^\s+slug: "([^"]+)"/gm)].map((m) => m[1]));
}
const articles = fs.readdirSync(path.join(root, "data/blog/content")).filter((f) => f.endsWith(".ts")).map((f) => f.replace(/\.ts$/, ""));

const chrome = 12; // home, services, problems, areas, quote, contact, about, projects, blog, faq, privacy, terms
const perLang = chrome + services.length + subSlugs.length + articles.length + problems.length + regions.length + areas.length + projects.length;
const total = perLang * 3;

pass(`services ${services.length}`);
pass(`sub-services ${subSlugs.length}`);
pass(`articles ${articles.length}`);
pass(`problems ${problems.length}`);
pass(`regions ${regions.length}`);
pass(`areas ${areas.length}`);
pass(`projects ${projects.length}`);
if (services.length !== 10) fail("expected 10 services");
if (subSlugs.length !== 51) fail("expected 51 sub-services");
if (articles.length !== 12) fail("expected 12 blog articles");
if (problems.length !== 57) fail("expected 57 problems");
if (regions.length !== 2) fail("expected 2 area regions");
if (areas.length !== 53) fail("expected 53 areas");
if (projects.length !== 21) fail("expected 21 projects");
if (new Set(subSlugs).size !== subSlugs.length) fail("duplicate sub-service slugs");

if (perLang !== 218) fail(`per-language page count ${perLang} expected 218`);
else pass(`per-language canonical pages ${perLang}`);
if (total !== 654) fail(`sitemap expectation ${total} expected 654`);
else pass(`expected sitemap <loc> count ${total}`);

const sitemapSrc = read("app/sitemap.ts");
if (sitemapSrc.includes("assertCoverageInSync()")) pass("sitemap runs coverage guard");
else fail("sitemap missing assertCoverageInSync");
if (sitemapSrc.includes('alternates["x-default"]') || sitemapSrc.includes('alternates["x-default"]') || sitemapSrc.includes('x-default')) {
  pass("sitemap emits x-default");
} else fail("sitemap missing x-default");

const robots = read("app/robots.ts");
if (robots.includes("allow: \"/\"") && robots.includes("mainSitemapUrl()")) pass("robots allow-all + sitemap helper");
else fail("robots.ts unexpected");
if (/disallow/i.test(robots) && /disallow:\s*"\/en/i.test(robots)) fail("robots blocks /en");

const lib = read("lib/sitemap.ts");
if (lib.includes("CONTENT_LAST_MODIFIED") && !lib.includes("new Date()")) pass("lastmod is a reviewed content date, not now()");
else fail("lastmod policy unexpected");

const site = read("data/site.ts");
if (site.includes('url: "https://renovixhomeservices.my"')) pass("canonical host is apex https://renovixhomeservices.my");
else fail("siteConfig.url is not the apex production domain");

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — sitemap/robots source of truth matches the registries (654 URLs).");
