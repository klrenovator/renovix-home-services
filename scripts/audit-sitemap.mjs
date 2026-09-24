#!/usr/bin/env node
/**
 * Sitemap / robots audit against the content registries (no running server).
 * Expected public URL count = 3 languages × (13 chrome pages + 10 services +
 * 51 sub-services + 12 articles + 57 problems + 2 regions + 53 areas + 28 projects).
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

const chrome = 13; // home, services, problems, areas, quote, contact, about, projects, blog, faq, privacy, terms, search
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
if (projects.length !== 28) fail("expected 28 projects");
if (new Set(subSlugs).size !== subSlugs.length) fail("duplicate sub-service slugs");

if (perLang !== 226) fail(`per-language page count ${perLang} expected 226`);
else pass(`per-language canonical pages ${perLang}`);
if (total !== 678) fail(`sitemap expectation ${total} expected 678`);
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

/* -------------------------------------------------------------------------- */
/* Phase 49 — lastmod truthfulness.                                           */
/*                                                                            */
/* A sitemap entry may never claim a page was modified before the content it  */
/* publishes existed. The Knowledge Hub records each guide's own `published`  */
/* (and optional `updated`) date, so those entries are dated from that value  */
/* via the shared helper; every other page keeps the site-wide reviewed date. */
/* -------------------------------------------------------------------------- */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const isIsoDate = (value) =>
  ISO_DATE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));

const articleDir = path.join(root, "data/blog/content");
const articleDates = new Map();
for (const f of fs.readdirSync(articleDir)) {
  if (!f.endsWith(".ts")) continue;
  const src = read(`data/blog/content/${f}`);
  const slug = src.match(/^\s{2}slug:\s*"([a-z0-9-]+)"/m)?.[1];
  const published = src.match(/^\s{2}published:\s*"([0-9-]+)"/m)?.[1];
  if (!slug || !published) continue;
  articleDates.set(slug, {
    published,
    updated: src.match(/^\s{2}updated:\s*"([0-9-]+)"/m)?.[1] ?? null,
  });
}

if (articleDates.size === articles.length && articleDates.size > 0) {
  pass(`all ${articleDates.size} Knowledge Hub guides record a published date`);
} else {
  fail(`${articleDates.size} guides with a published date, expected ${articles.length}`);
}

const badArticleDates = [...articleDates.entries()].filter(
  ([, dates]) =>
    !isIsoDate(dates.published) || (dates.updated !== null && !isIsoDate(dates.updated)),
);
if (badArticleDates.length === 0) pass("every recorded guide date is a valid YYYY-MM-DD date");
else fail(`malformed guide date(s): ${badArticleDates.map(([slug]) => slug).join(", ")}`);

if (lib.includes("export function contentLastModified")) {
  pass("lib/sitemap.ts exports contentLastModified");
} else fail("lib/sitemap.ts missing contentLastModified (lastmod cannot be derived per page)");

// The helper must take the later of the two dates, not the earlier one.
const helper = lib.match(/export function contentLastModified[\s\S]*?\n}/)?.[0] ?? "";
if (/value\s*>\s*latest/.test(helper) && helper.includes("latest = value")) {
  pass("contentLastModified keeps the later of the reviewed date and the content date");
} else fail("contentLastModified does not resolve to the later date");

if (/new Date\(|Date\.now\(/.test(lib)) {
  fail("lib/sitemap.ts computes a date at runtime (lastmod must be recorded, never now())");
} else pass("lib/sitemap.ts computes no runtime date");

// The blog loop must pass the guide's own dates into that helper, so a new
// guide (or a new date field) cannot silently fall back to the site-wide date.
const blogLoop = sitemapSrc.match(/for \(const article of getArticles\(\)\)[\s\S]*?\n  }/)?.[0] ?? "";
if (/lastModified:\s*contentLastModified\(\s*article\.published,\s*article\.updated\s*\)/.test(blogLoop)) {
  pass("blog sitemap entries are dated from the guide's own published/updated dates");
} else fail("blog sitemap entries do not use contentLastModified(article.published, article.updated)");

const siteWide = lib.match(/export const CONTENT_LAST_MODIFIED = "([0-9-]+)"/)?.[1];
if (siteWide && isIsoDate(siteWide)) pass(`site-wide reviewed date ${siteWide} is a valid ISO date`);
else fail(`CONTENT_LAST_MODIFIED is not a valid ISO date (${siteWide})`);

const site = read("data/site.ts");
if (site.includes('url: "https://renovixhomeservices.my"')) pass("canonical host is apex https://renovixhomeservices.my");
else fail("siteConfig.url is not the apex production domain");

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — sitemap/robots source of truth matches the registries (678 URLs).");
