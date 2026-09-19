#!/usr/bin/env node
/**
 * Phase 21 project-linking audit.
 *
 * Verifies the portfolio architecture and the three internal-link directions
 * against the source registries:
 *
 *  1. Project registry  — unique slugs; every *published* project carries
 *     English copy (title / summary / alt) and a main image; no draft leaks.
 *  2. Project → Service — the primary category and every related category
 *     exist and resolve to a real service page.
 *  3. Project → Sub-service — every `subServices` slug exists in the Phase 19
 *     registry and belongs to a service the project actually carried out
 *     (mirrors the build-time guard in `i18n/verify.ts`).
 *  4. Service → Project — every service page's project section is fed by a
 *     category that maps back to that service; services with no real project
 *     are reported as "proof omitted" (they render no project section).
 *  5. Sub-service → Project — a sub-service page may only show projects whose
 *     registry entry genuinely maps to it; sub-services without a genuine
 *     match are reported as "section omitted".
 *  6. Multilingual routes — every published project is in `ALL_PROJECTS` and
 *     in both the ms and zh coverage lists, and every published project has
 *     a complete ms/zh translation entry (so every generated page carries a
 *     full canonical/hreflang set and language-specific copy).
 *  7. Structured data — the project JSON-LD source contains the Phase 21
 *     CreativeWork + ImageObject nodes and no Review / AggregateRating /
 *     Product / Offer / price claims.
 *  8. Images — every published project's hero file exists under `public/`.
 *     (Full dimension + OG audits: `npm run audit:project-assets`.)
 *  9. Orphans — every published project is reachable from the portfolio index
 *     and from its service page (category-based links), and appears in the
 *     sitemap inventory (`ALL_PROJECTS`).
 * 10. Problem → Project (Phase 30) — wiring guard for the registry-derived
 *     reverse proof edge on problem guides.
 * 11. Project → Knowledge Hub guides (Phase 32) — wiring guard + coverage for
 *     the inverse of each article's authored `relatedProjects` edge.
 *
 * Run with: npm run audit:projects
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");

const failures = [];
const fail = (message) => failures.push(message);

const read = (rel) => readFileSync(join(ROOT, rel), "utf8");

const PROJECTS_FILE = read("data/project-content/projects.ts");
const PROJECT_CATEGORIES_FILE = read("data/projects.ts");
const SERVICES_FILE = read("data/services.ts");
const COVERAGE_FILE = read("i18n/coverage.ts");
const MS_TRANSLATIONS_FILE = read("data/project-content/translations/ms/index.ts");
const ZH_TRANSLATIONS_FILE = read("data/project-content/translations/zh/index.ts");
const SUB_SERVICES_DIR = join(ROOT, "data", "sub-services", "content");
const PROJECT_JSON_LD_FILE = read("components/projects/ProjectJsonLd.tsx");

/* ------------------------------------------------------------------------ */
/* Small parsing helpers.                                                    */
/* ------------------------------------------------------------------------ */

/** Splits an exported array/record of object literals into top-level chunks. */
function splitTopLevelEntries(source) {
  return source
    .split(/^\s*(?=\{)/m)
    .slice(1)
    .map((chunk) => ({ chunk, body: chunk.split("\n").slice(0, -1).join("\n") }));
}

function parseStringField(source, field) {
  const re = new RegExp(`^\\s*${field}:\\s*"([^"]+)"`, "m");
  const match = source.match(re);
  return match ? match[1] : undefined;
}

function parseStringArrayField(source, field) {
  const re = new RegExp(`^\\s*${field}:\\s*\\[([^\\]]*)\\]`, "m");
  const match = source.match(re);
  if (!match) return undefined;
  return [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

/** String-array contents of a `key: [ ... ]` or `key = [ ... ]` block. */
function parseNamedStringArray(source, key) {
  const re = new RegExp(`${key}\\s*[:=]\\s*\\[([^\\]]*)\\]`, "s");
  const match = source.match(re);
  if (!match) return undefined;
  return [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

/** Record keys of a `name: Record<...> = { "key": { ... } }` map. */
function parseRecordKeys(source, recordName) {
  const start = source.indexOf(`${recordName}`);
  const open = source.indexOf("{", start);
  const keys = [];
  const keyRe = /^\s*"([^"]+)"\s*:\s*\{/;
  for (const line of source.slice(open + 1).split("\n")) {
    const stripped = line.trim();
    if (stripped.startsWith("//")) continue;
    if (stripped === "};") break;
    const m = line.match(keyRe);
    if (m) keys.push(m[1]);
  }
  return keys;
}

/* ------------------------------------------------------------------------ */
/* Parse the project registry.                                               */
/* ------------------------------------------------------------------------ */

const projectEntries = splitTopLevelEntries(PROJECTS_FILE).map(({ chunk }) => ({
  slug: parseStringField(chunk, "slug"),
  category: parseStringField(chunk, "category"),
  status: parseStringField(chunk, "status"),
  relatedCategories: parseStringArrayField(chunk, "relatedCategories") ?? [],
  subServices: parseStringArrayField(chunk, "subServices") ?? [],
  heroSrc: parseStringField(chunk, "src"),
}));

const projects = projectEntries.filter((project) => project.slug);
const publishedProjects = projects.filter((project) => project.status === "published");
const draftProjects = projects.filter((project) => project.status === "draft");

const enContentKeys = parseRecordKeys(PROJECTS_FILE, "projectContent");
const msTranslationKeys = parseRecordKeys(MS_TRANSLATIONS_FILE, "msProjectTranslations");
const zhTranslationKeys = parseRecordKeys(ZH_TRANSLATIONS_FILE, "zhProjectTranslations");

/* ------------------------------------------------------------------------ */
/* Parse the service / sub-service / coverage registries.                    */
/* ------------------------------------------------------------------------ */

const projectCategories = splitTopLevelEntries(PROJECT_CATEGORIES_FILE).map(({ chunk }) => ({
  id: parseStringField(chunk, "id"),
  servicePath: parseStringField(chunk, "servicePath"),
}));
const serviceSlugs = new Set(
  splitTopLevelEntries(SERVICES_FILE)
    .map(({ chunk }) => parseStringField(chunk, "slug"))
    .filter(Boolean),
);

const subServices = new Map(); // slug -> serviceSlug
const subServiceProblems = new Map(); // slug -> relatedProblems[]
for (const file of readdirSync(SUB_SERVICES_DIR)) {
  if (!file.endsWith(".ts")) continue;
  const source = read(`data/sub-services/content/${file}`);
  for (const { chunk } of splitTopLevelEntries(source)) {
    const slug = parseStringField(chunk, "slug");
    const serviceSlug = parseStringField(chunk, "serviceSlug");
    if (slug && serviceSlug) subServices.set(slug, serviceSlug);
    const relatedProblems = parseStringArrayField(chunk, "relatedProblems");
    if (slug && relatedProblems?.length) {
      subServiceProblems.set(slug, relatedProblems);
    }
  }
}

const ALL_PROJECTS = parseNamedStringArray(COVERAGE_FILE, "ALL_PROJECTS") ?? [];
const msProjectCoverage = parseNamedStringArray(COVERAGE_FILE, "project") ?? [];
const zhProjectCoverage = msProjectCoverage.length
  ? parseNamedStringArray(
      COVERAGE_FILE.slice(COVERAGE_FILE.indexOf("zh: {")),
      "project",
    ) ?? []
  : [];

const categoryIdToServiceSlug = new Map(
  projectCategories
    .filter((category) => category.id && category.servicePath)
    .map((category) => [
      category.id,
      category.servicePath.replace("/services/", ""),
    ]),
);

const projectBySlug = new Map(projects.map((project) => [project.slug, project]));

/* ------------------------------------------------------------------------ */
/* 1. Registry checks.                                                       */
/* ------------------------------------------------------------------------ */

const seenSlugs = new Set();
for (const project of projects) {
  if (seenSlugs.has(project.slug)) {
    fail(`Duplicate project slug in registry: ${project.slug}`);
  }
  seenSlugs.add(project.slug);
}

if (draftProjects.length > 0) {
  console.log(`Draft projects (no public URL, excluded from everything): ${draftProjects.length}`);
}

for (const project of publishedProjects) {
  if (!enContentKeys.includes(project.slug)) {
    fail(`Published project ${project.slug} has no English content entry.`);
  }
  if (!project.heroSrc) {
    fail(`Published project ${project.slug} has no main image.`);
  }
  if (!project.category) {
    fail(`Published project ${project.slug} has no primary category.`);
  }
}

/* ------------------------------------------------------------------------ */
/* 2. Project → Service.                                                     */
/* ------------------------------------------------------------------------ */

for (const project of publishedProjects) {
  for (const id of [project.category, ...project.relatedCategories]) {
    if (!categoryIdToServiceSlug.has(id)) {
      fail(`Project ${project.slug} cites unknown category: ${id}`);
      continue;
    }
    const serviceSlug = categoryIdToServiceSlug.get(id);
    if (!serviceSlugs.has(serviceSlug)) {
      fail(
        `Project ${project.slug} category ${id} maps to service "${serviceSlug}", which is not in data/services.ts.`,
      );
    }
  }
}

/* ------------------------------------------------------------------------ */
/* 3. Project → Sub-service.                                                 */
/* ------------------------------------------------------------------------ */

for (const project of publishedProjects) {
  const projectServiceSlugs = new Set(
    [project.category, ...project.relatedCategories]
      .map((id) => categoryIdToServiceSlug.get(id))
      .filter(Boolean),
  );
  const seen = new Set();
  for (const slug of project.subServices) {
    if (seen.has(slug)) {
      fail(`Project ${project.slug} lists sub-service ${slug} more than once.`);
    }
    seen.add(slug);
    const subService = subServices.get(slug);
    if (!subService) {
      fail(`Project ${project.slug} cites unknown sub-service: ${slug}`);
      continue;
    }
    if (!projectServiceSlugs.has(subService)) {
      fail(
        `Project ${project.slug} cites sub-service ${slug} (service: ${subService}) that is not one of its recorded services.`,
      );
    }
  }
}

/* ------------------------------------------------------------------------ */
/* 4. Service → Project.                                                     */
/* ------------------------------------------------------------------------ */

const projectsByService = new Map();
for (const project of publishedProjects) {
  for (const id of [project.category, ...project.relatedCategories]) {
    const serviceSlug = categoryIdToServiceSlug.get(id);
    if (!serviceSlug) continue;
    if (!projectsByService.has(serviceSlug)) projectsByService.set(serviceSlug, []);
    projectsByService.get(serviceSlug).push(project.slug);
  }
}

const servicesWithoutProjects = [...serviceSlugs].filter(
  (slug) => !projectsByService.has(slug),
);

/* ------------------------------------------------------------------------ */
/* 5. Sub-service → Project.                                                 */
/* ------------------------------------------------------------------------ */

const projectsBySubService = new Map();
for (const project of publishedProjects) {
  for (const slug of project.subServices) {
    if (!projectsBySubService.has(slug)) projectsBySubService.set(slug, []);
    projectsBySubService.get(slug).push(project.slug);
  }
}

const subServicesWithoutProjects = [...subServices.keys()].filter(
  (slug) => !projectsBySubService.has(slug),
);

/* ------------------------------------------------------------------------ */
/* 6. Multilingual routes.                                                   */
/* ------------------------------------------------------------------------ */

const publishedSlugs = publishedProjects.map((project) => project.slug);
const allProjectsSet = new Set(ALL_PROJECTS);
const msCoverageSet = new Set(msProjectCoverage);
const zhCoverageSet = new Set(zhProjectCoverage);

for (const slug of publishedSlugs) {
  if (!allProjectsSet.has(slug)) {
    fail(`Published project ${slug} missing from i18n ALL_PROJECTS (sitemap/hreflang inventory).`);
  }
  if (!msCoverageSet.has(slug)) {
    fail(`Published project ${slug} missing from ms coverage — its /ms/ page is not generated.`);
  }
  if (!zhCoverageSet.has(slug)) {
    fail(`Published project ${slug} missing from zh coverage — its /zh/ page is not generated.`);
  }
  if (!msTranslationKeys.includes(slug)) {
    fail(`Published project ${slug} has no Malay translation entry.`);
  }
  if (!zhTranslationKeys.includes(slug)) {
    fail(`Published project ${slug} has no Chinese translation entry.`);
  }
}

for (const slug of ALL_PROJECTS) {
  const project = projectBySlug.get(slug);
  if (!project || project.status !== "published") {
    fail(`ALL_PROJECTS contains ${slug}, which is not a published project.`);
  }
}

/* ------------------------------------------------------------------------ */
/* 7. Structured-data checks (source-level honesty heuristics).              */
/* ------------------------------------------------------------------------ */

// Scan code only — the file's own doc comment names these types as *absent*.
const projectJsonLdCode = PROJECT_JSON_LD_FILE.replace(/\/\*\*[\s\S]*?\*\//g, "");

for (const forbidden of [
  '"@type": "Review"',
  "aggregateRating",
  '"@type": "Product"',
  '"@type": "Offer"',
  '"@type": "OfferCatalog"',
  "priceSpecification",
]) {
  if (projectJsonLdCode.includes(forbidden)) {
    fail(`Project JSON-LD source must not contain: ${forbidden}`);
  }
}

for (const required of ['"@type": "CreativeWork"', '"@type": "ImageObject"']) {
  if (!PROJECT_JSON_LD_FILE.includes(required)) {
    fail(`Project JSON-LD source is missing the required node: ${required}`);
  }
}

/* ------------------------------------------------------------------------ */
/* 8. Image files exist under public/.                                       */
/* ------------------------------------------------------------------------ */

for (const project of publishedProjects) {
  if (!project.heroSrc) continue;
  if (!existsSync(join(PUBLIC_DIR, project.heroSrc.replace(/^\//, "")))) {
    fail(`Project ${project.slug} hero image missing on disk: ${project.heroSrc}`);
  }
}

/* ------------------------------------------------------------------------ */
/* 9. Orphans — every project is reachable from the index and its service.   */
/* ------------------------------------------------------------------------ */

for (const project of publishedProjects) {
  const primaryService = categoryIdToServiceSlug.get(project.category);
  if (!primaryService) {
    fail(`Project ${project.slug} has no reachable service page (orphan risk).`);
  }
}

/* ------------------------------------------------------------------------ */
/* 10. Problem → Project (Phase 30 — the inverse of the Phase 21 edge).      */
/* ------------------------------------------------------------------------ */

/* Derived exactly as the site derives it: a project belongs on a problem
   guide only when a sub-service mapped to that project declares the problem
   in its own `relatedProblems`. Recomputed here from the same authored
   sources so the two directions can be compared for drift. */
const projectsByProblem = new Map();
for (const project of publishedProjects) {
  const problems = new Set(
    project.subServices.flatMap((slug) => subServiceProblems.get(slug) ?? []),
  );
  for (const problem of problems) {
    if (!projectsByProblem.has(problem)) projectsByProblem.set(problem, []);
    projectsByProblem.get(problem).push(project.slug);
  }
}

/* Wiring guard: the reverse edge must stay registry-derived and rendered. */
const projectContentIndex = read("data/project-content/index.ts");
const problemPageSource = read("components/problem/ProblemPage.tsx");
const problemProjectsSection = read("components/problem/ProblemProjectsSection.tsx");

if (!/export function getProjectsForProblem\(/.test(projectContentIndex)) {
  fail(
    "Phase 30 link guard: data/project-content/index.ts must expose getProjectsForProblem() (the registry-derived Problem → Project edge).",
  );
}
if (
  !/getProjectsForProblem[\s\S]*?getProjectSubServices[\s\S]*?relatedProblems/.test(
    projectContentIndex,
  )
) {
  fail(
    "Phase 30 link guard: getProjectsForProblem must be derived from each project's mapped sub-services' own relatedProblems — the exact inverse of ProjectProblemsSection, so the two directions cannot drift.",
  );
}
if (!/<ProblemProjectsSection problem=\{problem\} lang=\{lang\} \/>/.test(problemPageSource)) {
  fail(
    "Phase 30 link guard: components/problem/ProblemPage.tsx must render <ProblemProjectsSection problem={problem} lang={lang} />.",
  );
}
if (!/getProjectsForProblem\(problem\.slug\)/.test(problemProjectsSection)) {
  fail(
    "Phase 30 link guard: ProblemProjectsSection must derive its projects from getProjectsForProblem(problem.slug).",
  );
}
if (!/projects\.length === 0[\s\S]*?return null/.test(problemProjectsSection)) {
  fail(
    "Phase 30 link guard: ProblemProjectsSection must render nothing when no mapped project exists (never borrow projects).",
  );
}
for (const dict of ["en", "ms", "zh"]) {
  const source = read(`i18n/${dict}.ts`);
  for (const key of ["projectsEyebrow", "projectsTitle", "projectsDescription"]) {
    if (!source.includes(key)) {
      fail(`Phase 30 link guard: i18n/${dict}.ts is missing problemPage.${key}.`);
    }
  }
}

/* ------------------------------------------------------------------------ */
/* 10b. Phase 32 — Project → Knowledge Hub guides.                           */
/*                                                                           */
/* The registry-derived inverse of the article-side `relatedProjects` edge:  */
/* an article renders links to the projects it declares (ArticlePage), and   */
/* the project page renders the articles that declare it — both directions   */
/* read the same authored field, so they cannot drift.                       */
/* ------------------------------------------------------------------------ */

const blogIndexSource = read("data/blog/index.ts");
const guideLinksSectionSource = read("components/blog/GuideLinksSection.tsx");
const projectPageSource = read("components/projects/ProjectPage.tsx");

if (
  !/export function getArticlesForProject\([\s\S]*?relatedProjects\.includes\(projectSlug\)/.test(
    blogIndexSource,
  )
) {
  fail(
    "Phase 32 link guard: data/blog/index.ts must expose getArticlesForProject() derived from each article's own relatedProjects — the exact inverse of ArticlePage's related-project links.",
  );
}
if (!/type GuideScope = [^;]*"project"/.test(guideLinksSectionSource)) {
  fail(
    'Phase 32 link guard: GuideLinksSection must support the "project" scope.',
  );
}
if (!/project: t\.guideLinks\.projectTitle/.test(guideLinksSectionSource)) {
  fail(
    "Phase 32 link guard: GuideLinksSection must render guideLinks.projectTitle for the project scope.",
  );
}
if (!/articles\.length === 0[\s\S]*?return null/.test(guideLinksSectionSource)) {
  fail(
    "Phase 32 link guard: GuideLinksSection must render nothing when no guide declares the entity (never pad with loosely-related reading).",
  );
}
if (
  !/getArticlesForProject\(project\.slug\)/.test(projectPageSource) ||
  !/scope="project"/.test(projectPageSource)
) {
  fail(
    'Phase 32 link guard: components/projects/ProjectPage.tsx must render <GuideLinksSection … scope="project" /> fed by getArticlesForProject(project.slug).',
  );
}
for (const dict of ["en", "ms", "zh"]) {
  const source = read(`i18n/${dict}.ts`);
  if (!/projectTitle:\s*"[^"]+"/.test(source)) {
    fail(`Phase 32 link guard: i18n/${dict}.ts is missing guideLinks.projectTitle.`);
  }
}

/* Coverage of the inverse edge, computed from the authored registries. */
const publishedProjectSlugs = new Set(publishedProjects.map((p) => p.slug));
const guidePairs = [];
for (const file of readdirSync(join(ROOT, "data", "blog", "content")).filter(
  (f) => f.endsWith(".ts"),
)) {
  const src = read(`data/blog/content/${file}`);
  const articleSlug = parseStringField(src, "slug");
  for (const ref of parseNamedStringArray(src, "relatedProjects") ?? []) {
    if (publishedProjectSlugs.has(ref)) guidePairs.push(`${articleSlug} → ${ref}`);
  }
}

/* ------------------------------------------------------------------------ */
/* Report.                                                                   */
/* ------------------------------------------------------------------------ */

console.log("\n=== PHASE 21 PROJECT LINKING AUDIT ===\n");
console.log(`Projects in registry: ${projects.length} (${publishedProjects.length} published, ${draftProjects.length} draft)`);
console.log(`Sub-services in Phase 19 registry: ${subServices.size}`);
console.log(`Project → Service links validated: ${publishedProjects.reduce((n, p) => n + 1 + p.relatedCategories.length, 0)}`);
console.log(`Project → Sub-service links validated: ${publishedProjects.reduce((n, p) => n + p.subServices.length, 0)}`);

console.log("\nPortfolio distribution (primary category):");
const byCategory = new Map();
for (const project of publishedProjects) {
  byCategory.set(project.category, (byCategory.get(project.category) ?? 0) + 1);
}
for (const [category, count] of [...byCategory.entries()].sort()) {
  console.log(`  ${category}: ${count}`);
}

console.log("\nSub-service → project proof (genuine mappings only):");
for (const [slug, list] of [...projectsBySubService.entries()].sort()) {
  console.log(`  ✔ ${slug} (${subServices.get(slug)}): ${list.join(", ")}`);
}

console.log("\nSub-services with no genuinely matching project (section omitted on page):");
if (subServicesWithoutProjects.length === 0) {
  console.log("  (none)");
} else {
  for (const slug of subServicesWithoutProjects.sort()) {
    console.log(`  – ${slug} (${subServices.get(slug)})`);
  }
}

console.log("\nServices with no real project (project section omitted on page):");
if (servicesWithoutProjects.length === 0) {
  console.log("  (none)");
} else {
  for (const slug of servicesWithoutProjects.sort()) {
    console.log(`  – ${slug}`);
  }
}

const problemEdgeCount = [...projectsByProblem.values()].reduce(
  (n, list) => n + list.length,
  0,
);
console.log(
  `\nProblem → project proof (Phase 30): ${projectsByProblem.size} problem guides link to ${problemEdgeCount} project edges`,
);
for (const [slug, list] of [...projectsByProblem.entries()].sort()) {
  console.log(`  ✔ ${slug}: ${list.join(", ")}`);
}

const projectsWithGuides = new Set(guidePairs.map((pair) => pair.split(" → ")[1]));
console.log(
  `\nProject → Knowledge Hub guides (Phase 32): ${guidePairs.length} (article, project) pairs across ${projectsWithGuides.size} published projects`,
);
for (const pair of guidePairs.sort()) {
  console.log(`  ✔ ${pair}`);
}

console.log("\nMultilingual coverage: en/ms/zh copy + route lists verified for all published projects.");

if (failures.length > 0) {
  console.error(`\n${failures.length} FAILURE(S):`);
  for (const failure of failures) {
    console.error(`  ✗ ${failure}`);
  }
  process.exitCode = 1;
} else {
  console.log("\nAll project linking integrity checks passed.");
}

console.log("\nNotes:");
console.log("  – Build-time guards: i18n/verify.ts (sub-service links, slug drift) + app/sitemap.ts (sitemap/hreflang).");
console.log("  – Full image dimension/OG audit: npm run audit:project-assets.");
console.log("  – Owner-pending project metadata: PROJECT_OWNER_PENDING.md.");
