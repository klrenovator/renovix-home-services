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
 *   3b. Service ↔ problem edges are reciprocal (Phase 40, 2026-09-20): every
 *      problem guide names the service that fixes it, so that service page
 *      must link the guide back. The reverse is not required — a service page
 *      may legitimately cross-link another service's problem guides.
 *   4. Index pages iterate the registries (every published page has a place
 *      in the architecture) and the sitemap coverage guard stays wired.
 *   5. One question per page: no duplicate FAQ question on the same page,
 *      and no identical question+answer pasted across pages.
 *   5b. Service pages only: the answer-first block and the FAQ section must
 *      not restate the same answer (near-duplicate detection, 2026-09-05 audit).
 *   6. Unique meta descriptions and H1s per language (no duplication, no
 *      cannibalizing twins).
 *   7. AI-readable layer in sync: the business/pricing feeds and llms.txt
 *      exist, are generated from the shared knowledge builder, and are
 *      discoverable from the footer.
 *   8. Image SEO basics: every rendered image carries alt text.
 *   9. Google Business Profile attribution (Lead-generation Task 3.1): the
 *      homepage reviews link is owner-supplied or absent — never guessed,
 *      templated or search-shaped, never hardcoded in the component, never
 *      copied into structured data, and its label exists in all three
 *      languages.
 *  10. Search Console readiness (Lead-generation Task 3.2): the deployed
 *      verification token, the single-sitemap wiring (robots.txt →
 *      lib/sitemap.ts → app/sitemap.ts), the retired per-language sitemap
 *      redirects, and the owner runbook's honesty gates — dashboard state
 *      (submitted / processed / indexed) is never claimed from the repository.
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
  join(ROOT, "data", "blog"),
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

// Phase 18: intent-matrix pricing references must resolve to real catalogue
// rows, and its sub-service references must be real catalogue sub-services.
const pricingCatalogueSource = readFileSync(join(ROOT, "data", "pricing", "pricing.ts"), "utf8");
const pricingRowIds = new Set(
  [...pricingCatalogueSource.matchAll(/^\s{4}id:\s*"([^"]+)"/gm)].map((m) => m[1]),
);
const pricingSubServiceSlugs = new Set(
  [...pricingCatalogueSource.matchAll(/^\s{4}subServiceSlug:\s*"([^"]+)"/gm)].map((m) => m[1]),
);

if (pricingRowIds.size === 0) {
  fail("Could not parse any pricing row ids — the intent-matrix reference check ran on nothing.");
}

for (const block of matrix.split(/\n  \{\n/).slice(1)) {
  const intentId = block.match(/\bid:\s*"([^"]+)"/)?.[1] ?? "(unknown)";
  const pricingId = block.match(/pricingId:\s*"([^"]+)"/)?.[1];
  const subServiceSlug = block.match(/subServiceSlug:\s*"([^"]+)"/)?.[1];

  if (pricingId && !pricingRowIds.has(pricingId)) {
    fail(`intent-matrix entry "${intentId}" references unknown pricingId "${pricingId}".`);
  }
  if (subServiceSlug && !pricingSubServiceSlugs.has(subServiceSlug)) {
    fail(
      `intent-matrix entry "${intentId}" references sub-service "${subServiceSlug}", ` +
        `which is not a catalogue sub-service slug in data/pricing/pricing.ts.`,
    );
  }
  if (subServiceSlug && !pricingId) {
    fail(`intent-matrix entry "${intentId}" declares a sub-service but no pricingId to derive pricing from.`);
  }
}

note(
  `Intent-matrix pricing and sub-service references validated against ${pricingRowIds.size} catalogue rows.`,
);

// §3b Service ↔ problem edges must be reciprocal in the one direction that is
// registry-derived: a problem guide names the service that fixes it
// (`relatedService`), so that service page must link the guide back. Without
// this the two halves drift — the guide links up to its pillar while the
// pillar silently omits the guide (the flooring, welding and general-renovation
// pillars did exactly that: 11 guides, 33 localized pages). Service pages may
// still carry extra cross-service problems, so only the owning-service edge is
// required.
{
  const problemsByService = new Map();

  for (const file of problemFiles) {
    const source = readFileSync(file, "utf8");
    for (const block of source.split(/\n  \{\n/).slice(1)) {
      const slug = block.match(/^\s*slug:\s*"([^"]+)"/m)?.[1];
      const owningService = block.match(/relatedService:\s*"([^"]+)"/)?.[1];
      if (!slug || !owningService) continue;
      if (!problemsByService.has(owningService)) problemsByService.set(owningService, []);
      problemsByService.get(owningService).push(slug);
    }
  }

  for (const [service, slugs] of problemsByService) {
    const file = join(ROOT, "data", "service-content", `${service}.ts`);
    if (!existsSync(file)) {
      fail(`problem guides declare service "${service}", which has no service page to link them from.`);
      continue;
    }
    const linked = new Set();
    for (const match of readFileSync(file, "utf8").matchAll(/relatedProblems:\s*\[([\s\S]*?)\]/g)) {
      for (const slug of match[1].matchAll(/"([^"]+)"/g)) linked.add(slug[1]);
    }
    const unlinked = slugs.filter((slug) => !linked.has(slug));
    if (unlinked.length > 0) {
      fail(
        `data/service-content/${service}.ts does not link its own problem guides: ${unlinked.join(", ")} — ` +
          `each guide declares relatedService "${service}", so the pillar must link it back.`,
      );
    }
  }

  note("Every problem guide is linked back from the service page it declares as its owner.");
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
/* 5b. Service pages: the answer-first block must not be restated in the     */
/*     FAQ section (2026-09-05 deep audit, finding I-06).                     */
/*                                                                            */
/* Every service page opens with an answer-first "Quick Answers" block and    */
/* closes with a FAQ list. The cost figure a searcher wants therefore         */
/* appears twice on the same page — until now nothing checked that the two    */
/* sections carry different framings. A FAQ answer that re-lists the          */
/* answer-first block's numbers in near-identical wording reads as            */
/* repetition to a human and as duplicated content to a crawler. §5 above     */
/* only catches exact question+answer copies, so this adds a per-page         */
/* containment check between the two blocks: shared word ratio ≥ 0.55, or    */
/* ≥ 0.45 together with 4+ shared RM figures (a paraphrased re-list is still */
/* a re-list). The 2026-09-05 fix rewrote the ten duplicated cost FAQs into  */
/* complementary "how to read the number" answers — this guard keeps them     */
/* complementary.                                                             */
/* ------------------------------------------------------------------------ */

function serviceQaBlocks(source, section) {
  const block = source.match(new RegExp(`${section}:\\s*\\[([\\s\\S]*?)\\n  \\],`));
  if (!block) return [];
  const items = [];
  const pair = /question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*(?:\n\s*)?"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = pair.exec(block[1]))) items.push({ question: m[1], answer: m[2] });
  return items;
}

const contentWordSet = (text) =>
  new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fff\u00c0-\u024f ]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3),
  );

const contentRmFigures = (text) =>
  new Set([...text.matchAll(/RM\s?([\d][\d,.]*)\s?k?/gi)].map((m) => m[1].replace(/,/g, "")));

for (const file of collectTsFiles(join(ROOT, "data", "service-content")).filter(
  (f) => !/[/\\](index|types)\.ts$/.test(f),
)) {
  const source = readFileSync(file, "utf8");
  const answerFirst = serviceQaBlocks(source, "answerFirst");
  const faqs = serviceQaBlocks(source, "faqs");
  for (const quick of answerFirst) {
    for (const faq of faqs) {
      const quickWords = contentWordSet(quick.answer);
      const faqWords = contentWordSet(faq.answer);
      const smaller = quickWords.size <= faqWords.size ? quickWords : faqWords;
      const larger = smaller === quickWords ? faqWords : quickWords;
      if (smaller.size < 12) continue; // short answers legitimately reuse phrasing
      let shared = 0;
      for (const word of smaller) if (larger.has(word)) shared += 1;
      const containment = shared / smaller.size;
      const sharedFigures = [...contentRmFigures(quick.answer)].filter((f) =>
        contentRmFigures(faq.answer).has(f),
      ).length;
      const duplicated =
        containment >= 0.55 || (containment >= 0.45 && sharedFigures >= 4);
      if (duplicated) {
        fail(
          `${short(file)}: the FAQ "${faq.question.slice(0, 60)}" restates the answer-first block ` +
            `"${quick.question.slice(0, 60)}" (${(containment * 100).toFixed(0)}% word overlap, ` +
            `${sharedFigures} shared RM figures) — rewrite one of the two with a complementary angle.`,
        );
      }
    }
  }
}

note("Answer-first blocks and FAQ sections stay complementary on every service page (all languages).");

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
/* 6b. The title budget and the brand, on the source side                     */
/*                                                                           */
/* `npm run audit:live` measures every served <title> — budget, brand and     */
/* uniqueness — and that is the authoritative check, because project and      */
/* legal-page titles are composed at render time rather than stored. This     */
/* section pins the source side so the composition cannot be quietly          */
/* un-wired between live runs: the budget is exported once, the project       */
/* composer honours it through a category-free fallback, the legal pages      */
/* compose their brand-first title, and every bespoke `seoTitle` literal      */
/* already fits. Before Phase 41 nothing checked titles at all: 210 of 678    */
/* had drifted past the budget, three pairs of pages shared one title, and    */
/* the legal pages carried no brand.                                         */
/* ------------------------------------------------------------------------ */

const TITLE_BUDGET = (() => {
  const seo = readFileSync(join(ROOT, "i18n", "seo.ts"), "utf8");
  const m = seo.match(/export const TITLE_MAX_LENGTH\s*=\s*(\d+)/);
  if (!m) {
    fail("i18n/seo.ts must export TITLE_MAX_LENGTH — the title budget has no single source.");
  }
  if (!/export function brandTitle\(/.test(seo)) {
    fail("i18n/seo.ts must export brandTitle() so the brand-first separator cannot drift between pages.");
  }

  // Phase 49 — `og:locale:alternate` is the Open Graph equivalent of the
  // hreflang set, and must be derived from the same published-language set:
  // a page must never advertise a translation it does not publish, and must
  // never list itself. Nothing checked this before Phase 49, so all 678 pages
  // carried `og:locale` and no alternates at all. `audit:live` compares the
  // served tags on every page; this pins the derivation in source.
  const ogBlock = seo.match(/openGraph:\s*\{[\s\S]*?\n    \},/)?.[0] ?? "";
  // Only the failures are recorded — this audit reports the rules it keeps,
  // so a passing derivation speaks through the checks that did not fire.
  if (!/alternateLocale:\s*languages\s*\n?\s*\.filter\(/.test(seo) || !/languageSet\.has\(language\.code\)/.test(seo)) {
    fail("i18n/seo.ts must derive alternateLocale from languageSet (the hreflang set), not a fixed list.");
  }
  if (!/language\.code !== getLanguageCodeSafe\(lang\)/.test(seo)) {
    fail("og:locale:alternate must exclude the page's own locale (a page is not its own alternate).");
  }
  if (!ogBlock.includes("locale: getOgLocale(lang)")) {
    fail("og:locale must be localized (getOgLocale(lang))");
  }

  return m ? Number(m[1]) : 65;
})();

{
  const composer = readFileSync(join(ROOT, "data", "project-content", "seo.ts"), "utf8");
  // Importing or mentioning the budget is not enough — it has to be compared
  // against a composed length, so an edit that drops the comparison but leaves
  // the import (and the doc comment) still fails here.
  if (!/\.length\s*<=\s*TITLE_MAX_LENGTH/.test(composer)) {
    fail("data/project-content/seo.ts no longer compares a composed project title against TITLE_MAX_LENGTH.");
  }
  if (!composer.includes("metaTitleShortTemplate")) {
    fail("data/project-content/seo.ts must fall back to metaTitleShortTemplate when the full form is over budget — the visible project name is never shortened to fit.");
  }
  for (const lang of ["en", "ms", "zh"]) {
    const dict = readFileSync(join(ROOT, "i18n", `${lang}.ts`), "utf8");
    const m = dict.match(/metaTitleShortTemplate:\s*"([^"]*)"/);
    if (!m) fail(`i18n/${lang}.ts must define projectPage.metaTitleShortTemplate.`);
    else if (m[1].includes("{category}")) {
      fail(`i18n/${lang}.ts metaTitleShortTemplate must be the category-free fallback, not the full form.`);
    }
  }
  for (const page of ["privacy", "terms"]) {
    const source = readFileSync(join(ROOT, "app", "[lang]", page, "page.tsx"), "utf8");
    if (!/title:\s*brandTitle\(/.test(source)) {
      fail(`app/[lang]/${page}/page.tsx must compose its <title> with brandTitle() — the legal pages were the only indexable pages whose title carried no brand.`);
    }
  }

  // Bespoke seoTitle literals (EN source + the MS/ZH translation indexes, which
  // CONTENT_FILES skips because they are named index.ts) must already fit.
  const projectFiles = [
    join(ROOT, "data", "project-content", "projects.ts"),
    join(ROOT, "data", "project-content", "translations", "ms", "index.ts"),
    join(ROOT, "data", "project-content", "translations", "zh", "index.ts"),
  ];
  let bespoke = 0;
  for (const file of projectFiles) {
    if (!existsSync(file)) continue;
    const source = readFileSync(file, "utf8");
    for (const m of source.matchAll(/^\s*seoTitle:\s*"((?:[^"\\]|\\.)*)"/gm)) {
      bespoke += 1;
      const value = m[1].trim();
      if (value.length > TITLE_BUDGET) {
        fail(`${short(file)}: seoTitle is ${value.length} characters (budget ${TITLE_BUDGET}) — "${value}"`);
      }
      if (!value.includes("Renovix")) {
        fail(`${short(file)}: seoTitle carries no brand — "${value}"`);
      }
    }
  }
  note(
    `Titles compose against one ${TITLE_BUDGET}-character budget (i18n/seo.ts); the ${bespoke} bespoke project seoTitle literals fit it and carry the brand.`,
  );
}

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
  [
    "app/llms.txt/route.ts",
    "knowledge.projects.published",
    "llms.txt enumerates every published project page (Phase 33)",
  ],
  [
    "app/llms.txt/route.ts",
    "knowledge.problems.guides",
    "llms.txt enumerates every problem guide, not a sample (Phase 42)",
  ],
  [
    "lib/ai-knowledge.ts",
    "getProblemCategory(problem.category)",
    "knowledge builder derives each problem guide's category from the registry (Phase 42)",
  ],
  ["app/[lang]/page.tsx", "faqNode(", "the homepage publishes a FAQPage node (Phase 42)"],
  [
    "app/[lang]/page.tsx",
    "getHomeFaqs(code)",
    "the homepage FAQPage node is built from the same array the accordion renders (Phase 42)",
  ],
  [
    "data/i18n/index.ts",
    "export function getHomeFaqs(lang: LanguageCode | string)",
    "one shared source defines the homepage FAQ preview (Phase 42)",
  ],
  [
    "lib/ai-knowledge.ts",
    "getSynonyms(\"ms\")",
    "knowledge builder publishes the Malay phrasing table (Phase 34)",
  ],
  [
    "lib/ai-knowledge.ts",
    "getSynonyms(\"zh\")",
    "knowledge builder publishes the Chinese phrasing table (Phase 34)",
  ],
  [
    "lib/ai-knowledge.ts",
    "function localizedUrls(path: string)",
    "knowledge builder derives the per-language URL map from the language registry (Phase 36)",
  ],
  [
    "lib/ai-knowledge.ts",
    "languages.map((language) => [language.code, absoluteUrl(language.code, path)])",
    "the per-language URL map must be built from the language registry, never typed per entity (Phase 36)",
  ],
  [
    "lib/ai-knowledge.ts",
    "keyPagesByLanguage",
    "knowledge builder publishes the twelve entry points in every language (Phase 36)",
  ],
  ["lib/ai-knowledge.ts", "getServicePricingHeadline", "knowledge builder derives prices from the catalogue"],
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

// Phase 42 — the problem-guide section of /llms.txt used to render
// `knowledge.problems.guides.slice(0, 12)`, which silently truncated the
// corpus every time a guide was added. The guard above proves the full list is
// read; this one proves no slice can quietly reappear. Comments are stripped
// first so this rule's own explanation cannot trip it.
{
  const source = readFileSync(join(ROOT, "app/llms.txt/route.ts"), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .filter((line) => !line.trim().startsWith("//"))
    .join("\n");
  if (/knowledge\.problems\.guides\.slice\(/.test(source)) {
    fail(
      "app/llms.txt/route.ts slices knowledge.problems.guides — /llms.txt must enumerate every problem guide (Phase 42).",
    );
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
/* 9. Google Business Profile attribution (Lead-generation Task 3.1)          */
/* ------------------------------------------------------------------------ */

/**
 * The homepage reviews block becomes checkable only when the business has a
 * verified Google Business Profile. Until the owner supplies that URL the
 * section must publish no profile link at all — a guessed, templated or
 * search-shaped URL would be an invented trust signal (CONTENT_GOVERNANCE §1).
 */
const site = readFileSync(join(ROOT, "data/site.ts"), "utf8");
const reviewsSection = readFileSync(join(ROOT, "components/home/ReviewsSection.tsx"), "utf8");
const schemaSource = readFileSync(join(ROOT, "components/seo/schema.ts"), "utf8");

/* The full address as the site publishes it (contact page, footer, AI feeds). */
const businessAddressFull =
  site.match(/\n\s*full:\s*"([^"]+)"/)?.[1] ?? "(address not found)";

const reviewsUrlMatch = site.match(/googleReviewsUrl:\s*"([^"]*)"/);
const reviewsUrl = reviewsUrlMatch ? reviewsUrlMatch[1].trim() : null;

if (reviewsUrl === null) {
  fail("data/site.ts no longer declares googleReviewsUrl — the reviews link cannot be armed");
} else if (reviewsUrl === "") {
  note(
    "Google reviews link: not armed (owner decision 2026-10-09 — the profile link is published on the footer social icon only; the reviews-block link stays off while the profile has no Google reviews)",
  );
} else if (
  !/^https:\/\/(www\.)?(google\.[a-z.]+\/maps|maps\.google\.[a-z.]+|g\.page|search\.google\.[a-z.]+|maps\.app\.goo\.gl|share\.google)\/?/i.test(
    reviewsUrl,
  )
) {
  fail(
    "data/site.ts googleReviewsUrl must be a real Google Business Profile URL " +
      "(google.com/maps, maps.google.com, g.page, search.google.com, maps.app.goo.gl or share.google — " +
      "the formats Google's own Share dialog hands out), never a search or guessed URL",
  );
} else {
  note("Google reviews link: armed with an owner-supplied profile URL");
}

if (reviewsUrl !== null && reviewsUrl !== "") {
  if (!reviewsSection.includes("review_profile_click")) {
    fail("the armed reviews link does not fire review_profile_click");
  }
  if (!/surface:\s*"home_reviews"/.test(reviewsSection)) {
    fail("the armed reviews link must carry the coarse surface home_reviews");
  }
}

if (!/const reviewsUrl = siteConfig\.googleReviewsUrl\.trim\(\)/.test(reviewsSection)) {
  fail("ReviewsSection must read the profile URL from data/site.ts (no local URL literal)");
}
if (!/\{reviewsUrl \?/.test(reviewsSection)) {
  fail("ReviewsSection must render the profile link only when a URL exists");
}
if (!reviewsSection.includes("{reviews.viewOnGoogle}")) {
  fail("the reviews link must use the localized dictionary label, never hardcoded copy");
}
/* The component has no reason to contain any URL literal: the only href it
 * renders is built from `siteConfig.googleReviewsUrl`. A hardcoded profile
 * URL could be g.page, goo.gl/maps, maps.app.goo.gl, search.google.com, … so
 * match any absolute URL rather than a list of Google shapes. */
const urlLiterals = reviewsSection.match(/https?:\/\/[^\s"'`)\]]+/g) ?? [];
if (urlLiterals.length > 0) {
  fail(
    `ReviewsSection hardcodes a URL (${urlLiterals.join(", ")}) — the profile URL must come from data/site.ts`,
  );
}
if (/googleReviewsUrl/.test(schemaSource)) {
  fail("the reviews URL must not enter structured data (no sameAs; audit-business forbids it)");
}

/* Only the single business source and this one component may know the URL. */
const reviewsUrlSites = [];
for (const file of [...collectTsFiles(join(ROOT, "data")), ...collectTsFiles(join(ROOT, "lib"))]) {
  if (readFileSync(file, "utf8").includes("googleReviewsUrl") && !file.endsWith(join("data", "site.ts"))) {
    reviewsUrlSites.push(file.slice(ROOT.length + 1));
  }
}
for (const file of collectTsxFiles(join(ROOT, "components"))) {
  if (readFileSync(file, "utf8").includes("googleReviewsUrl") && !file.endsWith("ReviewsSection.tsx")) {
    reviewsUrlSites.push(file.slice(ROOT.length + 1));
  }
}
if (reviewsUrlSites.length === 0) {
  note("Only data/site.ts and ReviewsSection.tsx know the profile URL.");
} else {
  fail(`the profile URL leaked into: ${reviewsUrlSites.join(", ")}`);
}

/* The owner runbook and its verifier must stay wired and must not invent facts. */
const localSeoGuide = (() => {
  try {
    return readFileSync(join(ROOT, "LOCAL_SEO_SETUP.md"), "utf8");
  } catch {
    return null;
  }
})();
const packageJson = readFileSync(join(ROOT, "package.json"), "utf8");

if (localSeoGuide === null) {
  fail("LOCAL_SEO_SETUP.md is missing — the Google Business Profile steps have nowhere to live");
} else {
  for (const [topic, pattern] of [
    ["the exact NAP block", /Jalan Kiara, Mont Kiara/],
    ["the published phone number", /\+601159259521/],
    ["the hours question (days are not stated)", /days not stated|day by day/i],
    ["the business-name keyword rule", /keyword/i],
    ["service areas as a claim", /service area/i],
    ["the reviews-link step", /googleReviewsUrl/],
    ["the citation cross-reference", /Task 3\.3/],
    ["a NOT CLAIMED gate for Maps/Local Pack", /NOT CLAIMED/],
    ["real photos only (no stock, no AI)", /never AI-generated|no AI/i],
    ["no invented experience/certification claims", /no years of experience|years of experience/i],
    ["the duplicate-listing check before creating", /business\.google\.com/],
    ["the unresolved 'P-06 vs the owner note' record", /Where the record stands/],
  ]) {
    if (pattern.test(localSeoGuide)) {
      note(`LOCAL_SEO_SETUP.md covers ${topic}.`);
    } else {
      fail(`LOCAL_SEO_SETUP.md does not cover ${topic}`);
    }
  }

  /* The guide must quote the same NAP the site publishes, not a stale copy. */
  if (localSeoGuide.includes(businessAddressFull)) {
    note("LOCAL_SEO_SETUP.md publishes the address exactly as the site does.");
  } else {
    fail(
      `LOCAL_SEO_SETUP.md must quote the published address verbatim ("${businessAddressFull}") so the profile and the site cannot diverge`,
    );
  }
}

if (packageJson.includes('"verify:local-seo": "node scripts/verify-local-seo.mjs"')) {
  note("npm run verify:local-seo is wired to scripts/verify-local-seo.mjs.");
} else {
  fail("package.json does not wire npm run verify:local-seo");
}

const localSeoVerifier = (() => {
  try {
    return readFileSync(join(ROOT, "scripts/verify-local-seo.mjs"), "utf8");
  } catch {
    return null;
  }
})();

if (localSeoVerifier === null) {
  fail("scripts/verify-local-seo.mjs is missing");
} else {
  const networkUse = [
    [/\bfetch\s*\(/, "fetch()"],
    [/from\s+["']node:https?["']/, "a node:http(s) import"],
    [/\bXMLHttpRequest\b/, "XMLHttpRequest"],
  ].filter(([pattern]) => pattern.test(localSeoVerifier));
  if (networkUse.length === 0) {
    note("The local-SEO verifier contacts no service (no network call anywhere in it).");
  } else {
    fail(`scripts/verify-local-seo.mjs uses ${networkUse.map(([, name]) => name).join(", ")}`);
  }
  if (/process\.exit\(1\)/.test(localSeoVerifier)) {
    fail("scripts/verify-local-seo.mjs must stay informational (exit 0) — an unclaimed profile is not a defect");
  }
}

/* The label exists in all three languages and is genuinely translated. */
const reviewLabels = {};
for (const [code, file] of [["en", "i18n/en.ts"], ["ms", "i18n/ms.ts"], ["zh", "i18n/zh.ts"]]) {
  const dictionary = readFileSync(join(ROOT, file), "utf8");
  const match = dictionary.match(/viewOnGoogle:\s*"([^"]+)"/);
  if (!match) {
    fail(`${file} is missing home.reviews.viewOnGoogle — the reviews link would render an empty label`);
    continue;
  }
  reviewLabels[code] = match[1];
}
if (Object.keys(reviewLabels).length === 3) {
  if (new Set(Object.values(reviewLabels)).size === 3) {
    note(`The reviews link label is translated in all three languages (EN/MS/ZH).`);
  } else {
    fail("home.reviews.viewOnGoogle must be genuinely translated per language, not repeated");
  }
  for (const [code, label] of Object.entries(reviewLabels)) {
    if (label.length > 60) {
      fail(`home.reviews.viewOnGoogle (${code}) is ${label.length} characters — keep it a button label`);
    }
  }
}

/* ------------------------------------------------------------------------ */
/* 10. Search Console readiness (Lead-generation Task 3.2)                   */
/* ------------------------------------------------------------------------ */

/**
 * Google Search Console itself cannot be driven or read from this repository.
 * What can be held to account is the half Google actually fetches — the
 * verification token, one canonical sitemap, the robots.txt reference and the
 * retired-URL redirects — plus the honesty of the owner runbook: the dashboard
 * state (submitted / processed / indexed) may never be asserted here.
 */
const searchConsoleGuide = (() => {
  try {
    return readFileSync(join(ROOT, "SEARCH_CONSOLE_SETUP.md"), "utf8");
  } catch {
    return null;
  }
})();

const publicFiles = (() => {
  try {
    return readdirSync(join(ROOT, "public"));
  } catch {
    return [];
  }
})();
const verificationFile = publicFiles.find((name) => /^google.*\.html$/.test(name));
if (!verificationFile) {
  fail("public/ has no Google verification HTML file — Search Console's HTML-file method cannot work");
} else {
  const body = readFileSync(join(ROOT, "public", verificationFile), "utf8").trim();
  const token = body.match(/^google-site-verification:\s*(\S+)$/)?.[1];
  if (!token) {
    fail(`public/${verificationFile} does not contain a google-site-verification token line`);
  } else if (/^(x+|X+|0+)$/.test(token)) {
    fail(`public/${verificationFile} holds a placeholder token — Search Console would reject it`);
  } else {
    note(`Search Console verification file is deployed with a real-shaped token (public/${verificationFile}).`);
  }
}

const robotsSource = readFileSync(join(ROOT, "app/robots.ts"), "utf8");
if (/sitemap:\s*mainSitemapUrl\(\)/.test(robotsSource)) {
  note("robots.txt names the single canonical sitemap via mainSitemapUrl().");
} else {
  fail("app/robots.ts no longer references mainSitemapUrl() — the sitemap line could drift");
}
if (/^\s*host:\s*\S/im.test(robotsSource)) {
  fail("app/robots.ts re-introduced a Host: directive (not part of RFC 9309)");
}

const sitemapLibSource = readFileSync(join(ROOT, "lib/sitemap.ts"), "utf8");
if (/return `\$\{siteConfig\.url\}\/sitemap\.xml`;/.test(sitemapLibSource)) {
  note("the submitted sitemap URL is built from the single business source (data/site.ts).");
} else {
  fail("lib/sitemap.ts no longer builds mainSitemapUrl() from siteConfig.url");
}

const configSource = readFileSync(join(ROOT, "next.config.ts"), "utf8");
for (const lang of ["en", "ms", "zh"]) {
  if (!new RegExp(`source:\\s*"/sitemap/${lang}\\.xml"`).test(configSource)) {
    fail(`next.config.ts no longer redirects the retired /sitemap/${lang}.xml`);
  }
}
note("retired per-language sitemap URLs still redirect to /sitemap.xml (no 404 for old crawler entries).");

if (searchConsoleGuide === null) {
  fail("SEARCH_CONSOLE_SETUP.md is missing — the Search Console steps have nowhere to live");
} else {
  for (const [topic, pattern] of [
    ["the HTML-file verification method", /HTML file/],
    ["submitting sitemap.xml once", /Submit the sitemap \(once\)|submit it \*\*once\*\*/],
    ["the real sitemap URL", /https:\/\/renovixhomeservices\.my\/sitemap\.xml/],
    ["reading the sitemap status honestly", /Couldn't fetch/],
    ["URL Inspection + Request indexing", /Request indexing/],
    ["linking Search Console to GA4", /Associations/],
    ["a monthly reading routine", /every month/i],
    ["troubleshooting", /Troubleshooting/],
    ["the record conflict (plan PENDING vs the 2026-09-06 note)", /Where the record stands/],
    ["the draft/production sitemap facts (lastmod, hreflang)", /hreflang/],
    ["the no-second-property rule", /do not create a second property|Do not create a second property/i],
  ]) {
    if (pattern.test(searchConsoleGuide)) {
      note(`SEARCH_CONSOLE_SETUP.md covers ${topic}.`);
    } else {
      fail(`SEARCH_CONSOLE_SETUP.md does not cover ${topic}`);
    }
  }

  if (/NOT CLAIMED/.test(searchConsoleGuide) && /LIVE VERIFIED/.test(searchConsoleGuide)) {
    note("SEARCH_CONSOLE_SETUP.md keeps its NOT CLAIMED / LIVE VERIFIED gates.");
  } else {
    fail("SEARCH_CONSOLE_SETUP.md lost its NOT CLAIMED / LIVE VERIFIED gates — dashboard state must not be asserted");
  }
  if (/only the owner's Search Console account|owner's Search Console account can show/i.test(searchConsoleGuide)) {
    note("SEARCH_CONSOLE_SETUP.md states that only the owner's account can show submission/processing state.");
  } else {
    fail("SEARCH_CONSOLE_SETUP.md must say only the owner's Search Console account can show processing state");
  }
  if (/2026-09-06/.test(searchConsoleGuide)) {
    note("SEARCH_CONSOLE_SETUP.md cites the existing 2026-09-06 submission record it reconciles.");
  } else {
    fail("SEARCH_CONSOLE_SETUP.md must cite the 2026-09-06 record it reconciles (PROJECT_OWNER_PENDING.md)");
  }
}

const packageJsonSource = readFileSync(join(ROOT, "package.json"), "utf8");
if (packageJsonSource.includes('"verify:search-console": "node scripts/verify-search-console.mjs"')) {
  note("npm run verify:search-console is wired to scripts/verify-search-console.mjs.");
} else {
  fail("package.json does not wire npm run verify:search-console");
}

const searchConsoleVerifier = (() => {
  try {
    return readFileSync(join(ROOT, "scripts/verify-search-console.mjs"), "utf8");
  } catch {
    return null;
  }
})();
if (searchConsoleVerifier === null) {
  fail("scripts/verify-search-console.mjs is missing");
} else {
  if (searchConsoleVerifier.includes("--live")) {
    note("the readiness check keeps its live mode behind an explicit --live flag.");
  } else {
    fail("scripts/verify-search-console.mjs lost its --live mode");
  }
  const writes = [
    [/method:\s*["']POST["']/, "a POST request"],
    [/Authorization/, "an Authorization header"],
    [/document\.cookie/, "cookie handling"],
  ].filter(([pattern]) => pattern.test(searchConsoleVerifier));
  if (writes.length === 0) {
    note("the readiness check only reads public URLs (no writes, no credentials).");
  } else {
    fail(`scripts/verify-search-console.mjs uses ${writes.map(([, name]) => name).join(", ")}`);
  }
  if (/NOT a pass or a failure/.test(searchConsoleVerifier) && /process\.exit\(defects\.length > 0/.test(searchConsoleVerifier)) {
    note("an offline run is reported as unknown (exit 0); exit 1 is reserved for observed defects.");
  } else {
    fail("scripts/verify-search-console.mjs must treat an offline run as unknown and reserve exit 1 for defects");
  }
  if (/NOT CLAIMED by this script|NOT CLAIMED by this repository/.test(searchConsoleVerifier)) {
    note("the readiness check claims nothing about Search Console state.");
  } else {
    fail("scripts/verify-search-console.mjs must not imply it can read Search Console state");
  }
}

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
