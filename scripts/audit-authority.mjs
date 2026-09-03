#!/usr/bin/env node
/**
 * Search + AI authority audit for Renovix Home Services (Phase 16).
 *
 * The pricing, business-info, locations, OG-font and project-asset audits
 * guard their own domains. This audit guards everything Phase 16 stands for:
 * honest authority content with no contradictions, no orphan or broken
 * references, no duplicate or cannibalizing copy, honest urgency language,
 * unique metadata, valid images and a synchronized AI-readable layer.
 *
 * It is dependency-free and fails with a non-zero exit on the first broken
 * rule, listing every violation. Run with: npm run audit:authority
 *
 *   1. No fabricated-authority claims (guarantees, 24/7, same-day, rank
 *      promises, invented credentials or awards).
 *   2. Urgency language ("emergency" and equivalents) only where it is
 *      genuine: safety-critical electrical/plumbing triage, the sagging-
 *      ceiling safety question, fire-escape design context and the audited
 *      locations intent matrix.
 *   3. Every cross-reference resolves: related services/problems, nearby
 *      areas, problem-to-service links and intent-matrix slugs (no orphan
 *      pages, no broken internal references).
 *   4. Index pages iterate the registries (every published page has a place
 *      in the architecture) and the sitemap coverage guard stays wired.
 *   5. One question per page: no duplicate FAQ question on the same page,
 *      and no identical question+answer pasted across pages.
 *   6. Unique meta descriptions and H1s per language (no duplication, no
 *      cannibalizing twins).
 *   7. AI-readable layer in sync: the business/pricing feeds and llms.txt
 *      exist, are generated from the shared knowledge builder, and are
 *      discoverable from the footer.
 *   8. Image SEO basics: every rendered image carries alt text.
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");

const failures = [];
const notes = [];

const fail = (message) => failures.push(message);
const note = (message) => notes.push(message);

function collectTsFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return collectTsFiles(full);
    return full.endsWith(".ts") && !full.endsWith(".d.ts") ? [full] : [];
  });
}

function collectTsxFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return collectTsxFiles(full);
    return full.endsWith(".tsx") ? [full] : [];
  });
}

const short = (file) => file.replace(`${ROOT}/`, "");

/* ------------------------------------------------------------------------ */
/* Copy sources guarded by this audit                                        */
/* ------------------------------------------------------------------------ */

const CONTENT_DIRS = [
  join(ROOT, "data", "service-content"),
  join(ROOT, "data", "problem-content"),
  join(ROOT, "data", "area-content"),
  join(ROOT, "data", "project-content"),
  join(ROOT, "data", "locations"),
];

const CONTENT_FILES = CONTENT_DIRS.flatMap(collectTsFiles).filter(
  (file) => !/[\\/]types\.ts$/.test(file) && !/[\\/]index\.ts$/.test(file),
);

const DICT_FILES = ["en", "ms", "zh"].map((lang) => join(ROOT, "i18n", `${lang}.ts`));
const FAQ_FILE = join(ROOT, "data", "site-faqs.ts");
const COPY_FILES = [...CONTENT_FILES, ...DICT_FILES, FAQ_FILE];

/* ------------------------------------------------------------------------ */
/* 1. No fabricated-authority claims                                         */
/* ------------------------------------------------------------------------ */

const CLAIM_RULES = [
  {
    name: "guaranteed outcome",
    pattern: /guaranteed/i,
    allow: /do not guarantee|does not guarantee|never guarantee/i,
  },
  { name: "24/7 availability", pattern: /24\/7/ },
  { name: "24-hour availability", pattern: /24-hour/i },
  { name: "same-day promise", pattern: /same-day/i },
  { name: "same day promise", pattern: /same day/i },
  { name: "ranking guarantee", pattern: /rank\s*#?\s*1/i },
  { name: "ranking guarantee", pattern: /#1 on google/i },
  { name: "ranking guarantee", pattern: /guaranteed.{0,30}(ranking|first page|ai overview)/i },
  { name: "ranking guarantee", pattern: /first page guarantee/i },
  { name: "invented award", pattern: /award-?winning/i },
  { name: "invented credential", pattern: /certified (contractor|company)/i },
  { name: "invented credential", pattern: /licensed (contractor|company)/i },
  { name: "invented credential", pattern: /fully licensed/i },
  { name: "invented credential", pattern: /we are (licensed|certified)/i },
  { name: "cheapest claim", pattern: /cheapest (contractor|service|price|company)/i },
  { name: "cheapest claim", pattern: /best price in/i },
  { name: "absolute price promise", pattern: /no (hidden|extra) charges?/i },
];

for (const file of COPY_FILES) {
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, index) => {
    // Code comments and research notes are not published copy.
    if (/^\s*(\/\/|\*)/.test(line) || /researchNote/.test(line)) return;
    for (const rule of CLAIM_RULES) {
      if (rule.pattern.test(line) && !(rule.allow && rule.allow.test(line))) {
        fail(`${short(file)}:${index + 1} makes a "${rule.name}" claim: ${line.trim().slice(0, 120)}`);
      }
    }
  });
}

note("No guarantee, 24/7, same-day, ranking or credential claims in published copy.");

/* ------------------------------------------------------------------------ */
/* 2. Urgency language only where genuine                                    */
/* ------------------------------------------------------------------------ */

// Files allowed to use emergency language, with the reason each is genuine.
const EMERGENCY_ALLOWLIST = new Set([
  // Safety-critical triage: power faults and active water leaks.
  "data/service-content/electrical.ts",
  "data/service-content/plumbing.ts",
  "data/service-content/translations/ms/electrical.ts",
  "data/service-content/translations/ms/plumbing.ts",
  "data/service-content/translations/zh/electrical.ts",
  "data/service-content/translations/zh/plumbing.ts",
  "data/problem-content/electrical.ts",
  // A visibly sagging ceiling can fail suddenly; the question is responsible
  // problem-first SEO with a measured answer, in all three languages.
  "data/problem-content/ceiling.ts",
  "data/problem-content/translations/ms/ceiling.ts",
  "data/problem-content/translations/zh/ceiling.ts",
  // Audited Phase 15 infrastructure restricted to safety-critical faults.
  "data/locations/registry.ts",
  "data/locations/intent-matrix.ts",
  "data/locations/types.ts",
  "data/locations/hierarchy.ts",
  "data/locations/quality-score.ts",
  "data/locations/index.ts",
  // Search-intent metadata for the plumber/electrician triage rows.
  "data/pricing/pricing.ts",
  "data/pricing/index.ts",
  // The scoped urgent-triage policy block on area pages.
  "i18n/en.ts",
  "i18n/ms.ts",
  "i18n/zh.ts",
  "i18n/types.ts",
  "components/area/AreaAnswerFirstSection.tsx",
]);

const EMERGENCY_WORDS = /emergency|kecemasan|紧急|应急/i;
// Fire-escape design context ("emergency exit route") is safety information,
// not an urgency promise, and is allowed wherever it appears.
const ESCAPE_CONTEXT = /exit|escape|egress|keluar kecemasan|逃生/i;

for (const file of [...COPY_FILES, ...collectTsxFiles(join(ROOT, "components"))]) {
  const rel = short(file);
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, index) => {
    if (!EMERGENCY_WORDS.test(line) || ESCAPE_CONTEXT.test(line)) return;
    if (/^\s*(\/\/|\*)/.test(line) || /researchNote/.test(line)) return;
    if (!EMERGENCY_ALLOWLIST.has(rel)) {
      fail(`${rel}:${index + 1} uses urgency language outside the audited triage contexts.`);
    }
  });
}

note("Urgency language appears only in safety-critical triage and fire-escape contexts.");

/* ------------------------------------------------------------------------ */
/* 3. Every cross-reference resolves (orphan / broken-link audit)            */
/* ------------------------------------------------------------------------ */

const serviceSlugs = new Set(
  readdirSync(join(ROOT, "data", "service-content"))
    .filter((file) => file.endsWith(".ts") && !["index.ts", "types.ts"].includes(file))
    .map((file) => file.replace(/\.ts$/, "")),
);

const problemFiles = collectTsFiles(join(ROOT, "data", "problem-content")).filter(
  (file) => !/[\\/]translations[\\/]/.test(file) && !/[\\/]types\.ts$/.test(file) && !/[\\/]index\.ts$/.test(file),
);

const problemSlugs = new Set();
for (const file of problemFiles) {
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)) {
    problemSlugs.add(match[1]);
  }
}

if (problemSlugs.size === 0) {
  fail("Could not parse any problem slugs — the reference check ran on nothing.");
} else {
  note(`${problemSlugs.size} problem slugs parsed for reference checking.`);
}

// Area slugs (`region/slug`) from the coverage inventory, the same list that
// drives sitemaps and hreflang sets.
const coverage = readFileSync(join(ROOT, "i18n", "coverage.ts"), "utf8");
const areaSlugs = new Set([...coverage.matchAll(/"([a-z-]+\/[a-z-]+)"/g)].map((m) => m[1]));

// Location slugs (the Phase 15 administrative namespace, e.g. "shah-alam").
const registry = readFileSync(join(ROOT, "data", "locations", "registry.ts"), "utf8");
const locationSlugs = new Set([...registry.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]));

function checkStringArray(file, source, field, value, valid, kind) {
  if (!valid.has(value)) {
    fail(`${short(file)} links ${kind} "${value}" in ${field}, which does not exist.`);
  }
}

for (const file of CONTENT_FILES) {
  const source = readFileSync(file, "utf8");
  const rel = short(file);
  const isTranslation = /[\\/]translations[\\/]/.test(file);

  for (const match of source.matchAll(/relatedServices:\s*\[([\s\S]*?)\]/g)) {
    for (const slug of match[1].matchAll(/"([^"]+)"/g)) {
      checkStringArray(file, source, "relatedServices", slug[1], serviceSlugs, "service");
    }
  }

  for (const match of source.matchAll(/relatedProblems:\s*\[([\s\S]*?)\]/g)) {
    for (const slug of match[1].matchAll(/"([^"]+)"/g)) {
      checkStringArray(file, source, "relatedProblems", slug[1], problemSlugs, "problem");
    }
  }

  for (const match of source.matchAll(/relatedService:\s*"([^"]+)"/g)) {
    checkStringArray(file, source, "relatedService", match[1], serviceSlugs, "service");
  }

  for (const match of source.matchAll(/serviceSlug:\s*"([^"]+)"/g)) {
    // `serviceSlug` inside service files is the page's own slug; inside the
    // pricing catalogue, locations matrix and problem files it is a link.
    if (rel.startsWith("data/service-content/") && !isTranslation) continue;
    if (rel.startsWith("data/pricing/")) continue;
    checkStringArray(file, source, "serviceSlug", match[1], serviceSlugs, "service");
  }

  for (const match of source.matchAll(/nearbyAreas:\s*\[([\s\S]*?)\]/g)) {
    for (const slug of match[1].matchAll(/"([^"]+)"/g)) {
      const value = slug[1].includes("/") ? slug[1] : slug[1];
      if (!areaSlugs.has(value)) {
        // Nearby areas are stored as bare slugs inside the same region file;
        // resolve them against every region before failing.
        const resolved = [...areaSlugs].some((area) => area.endsWith(`/${value}`));
        if (!resolved) fail(`${rel} links nearby area "${value}", which does not exist.`);
      }
    }
  }
}

// Intent-matrix entries live in the locations namespace.
const matrix = readFileSync(join(ROOT, "data", "locations", "intent-matrix.ts"), "utf8");
for (const match of matrix.matchAll(/serviceSlug:\s*"([^"]+)"/g)) {
  if (!serviceSlugs.has(match[1])) fail(`intent-matrix links unknown service "${match[1]}".`);
}
for (const match of matrix.matchAll(/problemSlug:\s*"([^"]+)"/g)) {
  if (!problemSlugs.has(match[1])) fail(`intent-matrix links unknown problem "${match[1]}".`);
}
for (const match of matrix.matchAll(/locationSlug:\s*"([^"]+)"/g)) {
  if (!locationSlugs.has(match[1])) fail(`intent-matrix links unknown location "${match[1]}".`);
}

note("All related-service, related-problem, nearby-area and intent-matrix references resolve.");

/* ------------------------------------------------------------------------ */
/* 4. Every published page has a place in the architecture (orphan audit)    */
/* ------------------------------------------------------------------------ */

const WIRED = [
  ["app/[lang]/services/page.tsx", "getServiceCategories", "services index"],
  ["app/[lang]/problems/page.tsx", "problemDetails", "problems index"],
  ["app/[lang]/problems/[slug]/page.tsx", "problemDetails", "problem detail route"],
  ["app/[lang]/areas/page.tsx", "areaRegions", "areas index"],
  ["app/[lang]/projects/page.tsx", "getPublishedProjects", "projects index"],
  ["app/sitemap.ts", "assertCoverageInSync", "sitemap coverage guard"],
];

for (const [page, token, label] of WIRED) {
  const source = readFileSync(join(ROOT, page), "utf8");
  if (!source.includes(token)) {
    fail(`${page} no longer iterates ${token} — the ${label} may orphan pages.`);
  }
}

note("Index pages iterate the registries; the sitemap coverage guard stays wired.");

/* ------------------------------------------------------------------------ */
/* 5. One question per page; no pasted answers across pages                  */
/* ------------------------------------------------------------------------ */

// A page is identified by the nearest preceding `slug: "…"` marker, so files
// holding several problems or areas are still checked page by page.
// Translation files mirror the same markers, mapping to the same pages.
function questionsByPage(file) {
  const source = readFileSync(file, "utf8");
  const lines = source.split("\n");
  const pages = new Map();
  let current = null;

  lines.forEach((line, index) => {
    const slug = line.match(/^\s*slug:\s*"([^"]+)"/);
    if (slug) current = slug[1];
    const question = line.match(/^\s*question:\s*"((?:[^"\\]|\\.)*)"/);
    if (question) {
      const page = current ?? short(file);
      if (!pages.has(page)) pages.set(page, []);
      const answerLine = lines.slice(index, index + 12).join("\n");
      const answer = answerLine.match(/answer:\s*"((?:[^"\\]|\\.)*)"/);
      pages.get(page).push({
        question: question[1].toLowerCase().trim(),
        answer: (answer?.[1] ?? "").toLowerCase().trim(),
        line: index + 1,
        file: short(file),
      });
    }
  });

  return pages;
}

const seenQuestions = new Map();

for (const file of CONTENT_FILES) {
  for (const [page, questions] of questionsByPage(file)) {
    const within = new Set();
    for (const item of questions) {
      if (within.has(item.question)) {
        fail(`${item.file}:${item.line} repeats the question "${item.question.slice(0, 80)}" on the same page.`);
      }
      within.add(item.question);

      const key = `${item.question} || ${item.answer}`;
      if (!seenQuestions.has(key)) seenQuestions.set(key, []);
      seenQuestions.get(key).push(`${item.file}:${item.line} [${page}]`);
    }
  }
}

for (const [key, places] of seenQuestions) {
  const pages = new Set(places.map((place) => place.match(/\[(.+)\]$/)[1]));
  if (pages.size > 1) {
    fail(`Identical question+answer pasted across pages: ${key.slice(0, 90)} :: ${places.join(" | ")}`);
  }
}

note("Every page asks each question once; no answer is pasted across pages.");

/* ------------------------------------------------------------------------ */
/* 6. Unique metadata per language (duplication / cannibalization audit)     */
/* ------------------------------------------------------------------------ */

function metadataCorpus(files) {
  const descriptions = new Map();
  const h1s = new Map();
  for (const file of files) {
    const source = readFileSync(file, "utf8");
    for (const match of source.matchAll(/metaDescription:\s*"((?:[^"\\]|\\.)*)"/g)) {
      const value = match[1].trim();
      if (!descriptions.has(value)) descriptions.set(value, []);
      descriptions.get(value).push(short(file));
    }
    for (const match of source.matchAll(/^\s*h1:\s*"((?:[^"\\]|\\.)*)"/gm)) {
      const value = match[1].trim();
      if (!h1s.has(value)) h1s.set(value, []);
      h1s.get(value).push(short(file));
    }
  }
  return { descriptions, h1s };
}

// `data/locations/` is planning metadata (intent matrix, quality scoring) —
// its seo fields are never rendered as page copy, so they are not part of
// the page-metadata corpus.
const enFiles = CONTENT_FILES.filter(
  (file) => !/[\\/]translations[\\/]/.test(file) && !file.includes(`${join("data", "locations")}/`),
);

for (const lang of ["ms", "zh"]) {
  const langFiles = CONTENT_FILES.filter((file) => file.includes(`translations/${lang}/`));
  const { descriptions, h1s } = metadataCorpus(langFiles);
  for (const [value, places] of descriptions) {
    if (places.length > 1) fail(`Duplicate ${lang} meta description "${value.slice(0, 70)}" :: ${places.join(" | ")}`);
  }
  for (const [value, places] of h1s) {
    if (places.length > 1) fail(`Duplicate ${lang} H1 "${value.slice(0, 70)}" :: ${places.join(" | ")}`);
  }
}

{
  const { descriptions, h1s } = metadataCorpus(enFiles);
  for (const [value, places] of descriptions) {
    if (places.length > 1) fail(`Duplicate meta description "${value.slice(0, 70)}" :: ${places.join(" | ")}`);
  }
  for (const [value, places] of h1s) {
    if (places.length > 1) fail(`Duplicate H1 "${value.slice(0, 70)}" :: ${places.join(" | ")}`);
  }
}

note("Meta descriptions and H1s are unique within each language.");

/* ------------------------------------------------------------------------ */
/* 7. AI-readable layer in sync and discoverable                             */
/* ------------------------------------------------------------------------ */

const aiChecks = [
  ["app/ai/business.json/route.ts", "@/lib/ai-knowledge", "business feed reads the shared knowledge builder"],
  ["app/llms.txt/route.ts", "@/lib/ai-knowledge", "llms.txt reads the shared knowledge builder"],
  ["app/ai/pricing.json/route.ts", "getAiReadablePricing", "pricing feed reads the catalogue"],
  ["components/layout/Footer.tsx", "/llms.txt", "footer links the machine-readable summary"],
  [
    "lib/ai-knowledge.ts",
    "serviceDetails",
    "knowledge builder derives services from the registry",
  ],
  ["lib/ai-knowledge.ts", "problemDetails", "knowledge builder derives problems from the registry"],
  ["lib/ai-knowledge.ts", "areaRegions", "knowledge builder derives areas from the registry"],
  ["lib/ai-knowledge.ts", "getPublishedProjects", "knowledge builder derives projects from the registry"],
  ["lib/ai-knowledge.ts", "getPricingForService", "knowledge builder derives prices from the catalogue"],
];

for (const [file, token, label] of aiChecks) {
  const path = join(ROOT, file);
  if (!existsSync(path)) {
    fail(`Missing ${file} — ${label}.`);
    continue;
  }
  if (!readFileSync(path, "utf8").includes(token)) {
    fail(`${file} no longer contains "${token}" — ${label}.`);
  }
}

// The feeds must never hardcode a price: figures flow from the catalogue.
// Comments are stripped first so a comment citing an example figure cannot
// trip the rule.
for (const file of ["lib/ai-knowledge.ts", "app/ai/business.json/route.ts", "app/llms.txt/route.ts"]) {
  const source = readFileSync(join(ROOT, file), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .filter((line) => !line.trim().startsWith("//"))
    .join("\n");
  if (/RM\s?[0-9]/.test(source)) {
    fail(`${file} hardcodes a price — AI feeds must derive every figure from the catalogue.`);
  }
}

note("AI feeds exist, derive from the shared builder and are linked from the footer.");

/* ------------------------------------------------------------------------ */
/* 8. Image SEO basics                                                       */
/* ------------------------------------------------------------------------ */

for (const file of [...collectTsxFiles(join(ROOT, "components")), ...collectTsxFiles(join(ROOT, "app"))]) {
  const source = readFileSync(file, "utf8");
  // Strip commented-out code before checking, so a commented example cannot
  // pass or fail the audit.
  const live = source
    .split("\n")
    .filter((line) => !line.trim().startsWith("//") && !line.trim().startsWith("{/*"))
    .join("\n");
  const images = [...live.matchAll(/<Image\b([\s\S]*?)(?:\/>|>)/g)];
  for (const image of images) {
    if (!/alt=/.test(image[1])) {
      fail(`${short(file)} renders an image without alt text.`);
    }
  }
  for (const image of live.matchAll(/<img\b([\s\S]*?)>/g)) {
    if (!/alt=/.test(image[1])) {
      fail(`${short(file)} renders an <img> without alt text.`);
    }
  }
}

note("Every rendered image carries alt text.");

/* ------------------------------------------------------------------------ */
/* Report                                                                    */
/* ------------------------------------------------------------------------ */

console.log("Renovix Home Services — search + AI authority audit");
console.log("=".repeat(60));
for (const line of notes) console.log(`  OK  ${line}`);

if (failures.length > 0) {
  console.error("\nFAIL");
  for (const line of failures) console.error(`  ✗  ${line}`);
  process.exit(1);
}

console.log("\nPASS — no fabricated claims, no orphans, no duplicates, AI layer in sync.");
