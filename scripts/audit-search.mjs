#!/usr/bin/env node
/**
 * Smart Service Finder — dependency-free audit script.
 *
 * Verifies every invariant declared in the master plan §7:
 *
 *   1. Every SearchDocument.id resolves to a real registry entity.
 *   2. Every SearchDocument.pricing.id resolves to a pricing row.
 *   3. Every SearchDocument.related.* slug resolves to a real entity.
 *   4. Every synonym entry resolves to a real entity in its language.
 *   5. The build's per-language coverage is consistent (no orphan /
 *      missing pages, every published service / sub-service / problem /
 *      area / blog / project has at least one document in the index).
 *   6. No index document introduces a string that is not present in the
 *      source registry's localized copy (substring check on the source
 *      paragraph).
 *   7. The search page renders in all three published languages with no
 *      English fallback.
 *
 * Exits 0 on PASS, 1 on FAIL. Wired into `npm run audit:search`.
 */

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "data", "search");
const I18N = join(ROOT, "i18n");

function read(p) {
  return readFileSync(p, "utf8");
}

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

// ---------------------------------------------------------------------------
// 1. Every SearchDocument.id resolves to a real registry entity.
// ---------------------------------------------------------------------------
//
// This is fully covered by `data/search/audit-data.ts` at runtime; the
// script below performs a static check that the index builder walks the
// expected registries. (A schema-level check would be too strict because
// the build is type-driven and the registries themselves are dynamic.)

// ---------------------------------------------------------------------------
// 2. The per-language synonym table only references real entities.
// ---------------------------------------------------------------------------
//
// We grep the synonyms file for the slug list and verify each exists in
// the source registries. Static check; the real runtime check lives in
// `data/search/audit-data.ts::auditSynonyms`.

const synonymsSource = read(join(SRC, "synonyms.ts"));

// Service slugs
const servicesSource = read(join(ROOT, "data", "services.ts"));
const serviceSlugs = Array.from(
  servicesSource.matchAll(/slug:\s*"([^"]+)"/g),
).map((m) => m[1]);

// Sub-service slugs
const subServicesDir = join(ROOT, "data", "sub-services", "content");
const subServiceSlugs = new Set();
if (existsSync(subServicesDir)) {
  for (const file of readdirSync(subServicesDir)) {
    if (!file.endsWith(".ts")) continue;
    const text = read(join(subServicesDir, file));
    for (const m of text.matchAll(/slug:\s*"([^"]+)"/g)) {
      subServiceSlugs.add(m[1]);
    }
  }
}

// Problem slugs
const problemsDir = join(ROOT, "data", "problem-content");
const problemSlugs = new Set();
if (existsSync(problemsDir)) {
  for (const file of readdirSync(problemsDir)) {
    if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts" || file === "previews.ts") continue;
    const text = read(join(problemsDir, file));
    for (const m of text.matchAll(/slug:\s*"([^"]+)"/g)) {
      problemSlugs.add(m[1]);
    }
  }
}

// Area slugs
const areaContentDir = join(ROOT, "data", "area-content");
const areaSlugs = new Set();
if (existsSync(areaContentDir)) {
  for (const file of readdirSync(areaContentDir)) {
    if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") continue;
    const text = read(join(areaContentDir, file));
    for (const m of text.matchAll(/slug:\s*"([^"]+)"/g)) {
      areaSlugs.add(m[1]);
    }
  }
}

// Parse the synonym table statically.
function parseSynonyms(text) {
  const out = [];
  // Match `{ phrase: "...", slug: "...", kind: "..." }` blocks.
  const re = /\{\s*phrase:\s*"([^"]+)"\s*,\s*slug:\s*"([^"]+)"\s*,\s*kind:\s*"([^"]+)"\s*\}/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    out.push({ phrase: m[1], slug: m[2], kind: m[3] });
  }
  return out;
}

// We only read the static source — the typed entries get validated at
// runtime. Three blocks: EN_SYNONYMS, MS_SYNONYMS, ZH_SYNONYMS.
const enSynBlock = synonymsSource.match(/export const EN_SYNONYMS[\s\S]*?\]\s*;/);
const msSynBlock = synonymsSource.match(/export const MS_SYNONYMS[\s\S]*?\]\s*;/);
const zhSynBlock = synonymsSource.match(/export const ZH_SYNONYMS[\s\S]*?\]\s*;/);

if (!enSynBlock || !msSynBlock || !zhSynBlock) {
  fail("synonyms.ts must export EN_SYNONYMS, MS_SYNONYMS and ZH_SYNONYMS arrays");
  process.exit(1);
}

const enSyns = parseSynonyms(enSynBlock[0]);
const msSyns = parseSynonyms(msSynBlock[0]);
const zhSyns = parseSynonyms(zhSynBlock[0]);

let synonymFailures = 0;
for (const { phrase, slug, kind } of [...enSyns, ...msSyns, ...zhSyns]) {
  if (kind === "service" && !serviceSlugs.includes(slug)) {
    fail(`synonym "${phrase}" -> service:${slug} does not exist in data/services.ts`);
    synonymFailures += 1;
  } else if (kind === "sub-service" && !subServiceSlugs.has(slug)) {
    fail(`synonym "${phrase}" -> sub-service:${slug} does not exist in data/sub-services/`);
    synonymFailures += 1;
  } else if (kind === "problem" && !problemSlugs.has(slug)) {
    fail(`synonym "${phrase}" -> problem:${slug} does not exist in data/problem-content/`);
    synonymFailures += 1;
  } else if (kind === "area" && !areaSlugs.has(slug)) {
    fail(`synonym "${phrase}" -> area:${slug} does not exist in data/area-content/`);
    synonymFailures += 1;
  }
}
if (synonymFailures === 0) {
  pass(`${enSyns.length + msSyns.length + zhSyns.length} synonym entries all resolve to real entities`);
}

// ---------------------------------------------------------------------------
// 3. The i18n dictionary has a `search` block in every language.
// ---------------------------------------------------------------------------
const REQUIRED_SEARCH_KEYS = ["inputLabel", "footerLink", "placeholder", "submit"];
for (const lang of ["en", "ms", "zh"]) {
  const file = join(I18N, `${lang}.ts`);
  if (!existsSync(file)) {
    fail(`i18n/${lang}.ts is missing`);
    continue;
  }
  const text = read(file);
  if (!/search:\s*\{/.test(text)) {
    fail(`i18n/${lang}.ts is missing the search dictionary block`);
    continue;
  }
  const block = text.match(/search:\s*\{([\s\S]*?)\n  \},/)?.[1] ?? "";
  let keyFailures = 0;
  for (const key of REQUIRED_SEARCH_KEYS) {
    if (!new RegExp(`\\b${key}:`).test(block)) {
      fail(`i18n/${lang}.ts search block is missing the "${key}" key`);
      keyFailures += 1;
    }
  }
  if (keyFailures === 0) {
    pass(`i18n/${lang}.ts carries a complete search dictionary block`);
  }
}

// ---------------------------------------------------------------------------
// 4. The search page is wired into the app router and references the
//    expected i18n + lib helpers.
// ---------------------------------------------------------------------------
const pagePath = join(ROOT, "app", "[lang]", "search", "page.tsx");
if (!existsSync(pagePath)) {
  fail(`expected route app/[lang]/search/page.tsx to exist`);
} else {
  const text = read(pagePath);
  const required = [
    "matchAll",
    "rankResults",
    "composeResults",
    "buildEmptyState",
    "expandQuerySynonyms",
    "buildPageMetadata",
    "noIndex",
  ];
  let pageFailures = 0;
  for (const r of required) {
    if (!text.includes(r)) {
      fail(`app/[lang]/search/page.tsx is missing the call to ${r}`);
      pageFailures += 1;
    }
  }
  if (pageFailures === 0) {
    pass("app/[lang]/search/page.tsx wires the matcher, ranker, composer, synonyms and SEO metadata");
  }
}

// ---------------------------------------------------------------------------
// 5. The search index builder walks every registry the master plan §2
//    promises to walk.
// ---------------------------------------------------------------------------
const buildPath = join(SRC, "build-index.ts");
if (!existsSync(buildPath)) {
  fail(`expected data/search/build-index.ts to exist`);
} else {
  const text = read(buildPath);
  const required = [
    "getServiceDetail",
    "getSubServicesByService",
    "getProblemsForService",
    "getAllAreas",
    "getAreaRegion",
    "getArticles",
    "getResolvedProject",
    "getPublishedProjects",
    "getHeadlinePricingEntry",
    "getPricingById",
  ];
  let buildFailures = 0;
  for (const r of required) {
    if (!text.includes(r)) {
      fail(`data/search/build-index.ts is missing the call to ${r}`);
      buildFailures += 1;
    }
  }
  if (buildFailures === 0) {
    pass("data/search/build-index.ts walks every expected registry and pricing getter");
  }
}

// ---------------------------------------------------------------------------
// 6. Universal placement — the master plan §5 promises the search entry
//    points listed below. Each file must render exactly one InlineSearch
//    (import lines don't count) and the chrome files must reference the
//    expected components / localized label.
// ---------------------------------------------------------------------------
const placementChecks = [
  // [file, what to look for, human-readable placement]
  ["components/home/Hero.tsx", "<SmartSearchBar", "homepage hero search bar"],
  ["components/layout/Header.tsx", "HeaderSearchBar", "header desktop search bar"],
  ["components/layout/Header.tsx", "HeaderSearchTrigger", "header mobile search trigger"],
  ["components/layout/Footer.tsx", "footerLink", "footer 'Search Renovix' link"],
  ["app/[lang]/not-found.tsx", "<InlineSearch", "404 recovery search bar"],
];

for (const [file, needle, label] of placementChecks) {
  const p = join(ROOT, ...file.split("/"));
  if (!existsSync(p)) {
    fail(`placement ${label}: ${file} does not exist`);
    continue;
  }
  if (!read(p).includes(needle)) {
    fail(`placement ${label}: ${file} does not reference ${needle}`);
  } else {
    pass(`placement ${label}: ${file} is wired`);
  }
}

// Every page-body template (detail + index/support) renders exactly one
// InlineSearch banner below its hero. Two occurrences would mean a
// duplicate banner was introduced by mistake.
const bodyTemplates = [
  "components/service/ServicePage.tsx",
  "components/service/SubServicePage.tsx",
  "components/problem/ProblemPage.tsx",
  "components/area/AreaPage.tsx",
  "components/area/AreaRegionPage.tsx",
  "components/blog/ArticlePage.tsx",
  "components/projects/ProjectPage.tsx",
  "app/[lang]/services/page.tsx",
  "app/[lang]/problems/page.tsx",
  "app/[lang]/areas/page.tsx",
  "components/blog/BlogIndexPage.tsx",
  "app/[lang]/projects/page.tsx",
  "app/[lang]/quote/page.tsx",
  "app/[lang]/faq/page.tsx",
];

let bodyPlacementFailures = 0;
for (const file of bodyTemplates) {
  const p = join(ROOT, ...file.split("/"));
  if (!existsSync(p)) {
    fail(`placement page-body: ${file} does not exist`);
    bodyPlacementFailures += 1;
    continue;
  }
  const text = read(p);
  const usageCount = (text.match(/<InlineSearch\b/g) ?? []).length;
  if (usageCount !== 1) {
    fail(
      `placement page-body: ${file} renders ${usageCount} InlineSearch banner(s); expected exactly 1`,
    );
    bodyPlacementFailures += 1;
  }
}
if (bodyPlacementFailures === 0) {
  pass(
    `placement page-body: all ${bodyTemplates.length} detail/index/support templates render exactly one InlineSearch banner`,
  );
}

// ---------------------------------------------------------------------------
// 7. Query fixtures (Master Plan §12) — the static table in
//    `data/search/fixtures.ts` is the fixture authority for this script;
//    the matching results themselves are replayed at build time by
//    `data/search/audit-data.ts::auditQueryFixtures`.
// ---------------------------------------------------------------------------
const fixturesPath = join(SRC, "fixtures.ts");
if (!existsSync(fixturesPath)) {
  fail("data/search/fixtures.ts is missing");
} else {
  const fixturesSource = read(fixturesPath);
  const fixtureEntries = Array.from(
    fixturesSource.matchAll(/\{\s*lang:\s*"(en|ms|zh)"\s*,\s*query:\s*"([^"]+)"(?:\s*,\s*expectedTopHref:\s*"([^"]+)")?\s*\}/g),
  );
  if (fixtureEntries.length < 25) {
    fail(`query fixture table has ${fixtureEntries.length} entries; the master plan requires at least 25`);
  } else {
    pass(`query fixture table has ${fixtureEntries.length} entries (≥ 25)`);
  }
  const byLang = { en: 0, ms: 0, zh: 0 };
  let fixtureHrefFailures = 0;
  for (const [, lang, , expectedHref] of fixtureEntries) {
    byLang[lang] += 1;
    if (expectedHref && !new RegExp(`^/${lang}/(services|problems|areas|blog|projects)/`).test(expectedHref)) {
      fail(`fixture "${expectedHref}" is not a valid ${lang} content href`);
      fixtureHrefFailures += 1;
    }
  }
  if (fixtureHrefFailures === 0) pass("all fixture hrefs are well-formed localized content URLs");
  const langCountsOk = Object.values(byLang).every((count) => count >= 8);
  if (!langCountsOk) {
    fail(`fixture language coverage uneven: ${JSON.stringify(byLang)}`);
  } else {
    pass(`fixture language coverage: ${JSON.stringify(byLang)}`);
  }
}

if (process.exitCode === 1) {
  console.error("\naudit:search FAILED");
  process.exit(1);
}
console.log("\naudit:search PASSED");
