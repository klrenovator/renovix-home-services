#!/usr/bin/env node
/**
 * Phase 19 sub-service audit.
 *
 * Verifies the Service + Sub-service + Problem page architecture:
 *  1. Every *priced* sub-service in `data/pricing/pricing.ts` (the 51) is a
 *     publishing target; this reports which already have a standalone page and
 *     which are still only registered in pricing (so a page is never silently
 *     assumed where none exists).
 *  2. Authored sub-service slugs are unique and belong to a real 10-service
 *     pillar, and any `pricingId` points at a real pricing id.
 *  3. Every authored sub-service ships all three language copy blocks
 *     (`en`/`ms`/`zh`), so no English text can leak under `/ms/` or `/zh/`.
 *  4. Route / sitemap / hreflang parity is enforced at build time by the Next
 *     static params + `app/sitemap.ts` + the i18n coverage guard — this script
 *     re-checks the invariant that every authored slug is in all three
 *     languages (i.e. it will appear in each language's route set).
 *  5. Phase 28 — the hub → spoke link wiring: the service pillar renders the
 *     registry-derived links to its own sub-service pages and the problem
 *     guides render the inverse of each sub-service's `relatedProblems`, both
 *     filtered through `subServiceLanguages`. (`npm run audit:live` proves the
 *     rendered graph: no orphans, every sub-service page linked from its hub.)
 *
 * Run with: npm run audit:subservices
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PRICING_FILE = join(ROOT, "data", "pricing", "pricing.ts");
const CONTENT_DIR = join(ROOT, "data", "sub-services", "content");
const PROBLEM_DIR = join(ROOT, "data", "problem-content");

const failures = [];
const fail = (message) => failures.push(message);

const SERVICES = [
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

/* ------------------------------------------------------------------------ */
/* Parse pricing.ts for priced sub-service slugs and ids.                    */
/* ------------------------------------------------------------------------ */
const pricingSource = readFileSync(PRICING_FILE, "utf8");
function parseField(source, field) {
  const re = new RegExp(`^\\s*${field}:\\s*"([^"]+)"`, "m");
  const m = source.match(re);
  return m ? m[1] : undefined;
}

const pricedSubs = [];
const allIds = new Set();
const entries = pricingSource
  .split(/^\s*(?=\{)/m)
  .slice(1)
  .map((chunk) => ({ chunk, id: parseField(chunk, "id") }))
  .filter((e) => e.id);
for (const e of entries) {
  allIds.add(e.id);
  const sub = parseField(e.chunk, "subServiceSlug");
  const service = parseField(e.chunk, "serviceSlug");
  if (sub && service) {
    pricedSubs.push({ sub, service, id: e.id });
  }
}
if (entries.length === 0) {
  fail("Could not parse any pricing entries from data/pricing/pricing.ts.");
}

const pricedSubSet = new Map(pricedSubs.map((p) => [p.sub, p]));

/* ------------------------------------------------------------------------ */
/* Parse the authoritative problem catalogue (data/problem-content/*.ts).    */
/* These are the only slugs a sub-service may cite in `relatedProblems`.     */
/* ------------------------------------------------------------------------ */
const PROBLEM_SKIP = new Set(["index.ts", "types.ts"]);
const problemSlugs = new Set();
for (const file of readdirSync(PROBLEM_DIR)) {
  if (!file.endsWith(".ts") || PROBLEM_SKIP.has(file)) continue;
  const source = readFileSync(join(PROBLEM_DIR, file), "utf8");
  for (const m of source.matchAll(/^\s*slug:\s*"([a-z0-9-]+)"/gm)) {
    problemSlugs.add(m[1]);
  }
}
if (problemSlugs.size === 0) {
  fail("Could not parse any problem slugs from data/problem-content/.");
}

/* ------------------------------------------------------------------------ */
/* Parse authored sub-services from the content directory.                   */
/* ------------------------------------------------------------------------ */

/**
 * Splits a module that exports an array of object literals into those top-level
 * element objects. Elements are the `{ ... }` objects whose combined
 * bracket/brace depth returns to 1 (i.e. directly inside the exported array).
 * String literals are skipped so prose never fakes a brace.
 */
function splitTopLevelObjects(source) {
  const objects = [];
  let depth = 0;
  let objStart = -1;
  let inString = false;
  let quote = "";
  for (let i = 0; i < source.length; i += 1) {
    const c = source[i];
    if (inString) {
      if (c === "\\") {
        i += 1;
      } else if (c === quote) {
        inString = false;
      }
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inString = true;
      quote = c;
      continue;
    }
    if (c === "{" || c === "[") {
      if (c === "{" && depth === 1) {
        objStart = i;
      }
      depth += 1;
    } else if (c === "}" || c === "]") {
      depth -= 1;
      if (c === "}" && depth === 1 && objStart >= 0) {
        objects.push(source.slice(objStart, i + 1));
        objStart = -1;
      }
    }
  }
  return objects;
}

function parseAuthored() {
  const files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".ts"));
  const authored = [];
  for (const file of files) {
    const source = readFileSync(join(CONTENT_DIR, file), "utf8");
    for (const obj of splitTopLevelObjects(source)) {
      const slug = parseField(obj, "slug");
      if (!slug) continue;
      const service = parseField(obj, "serviceSlug");
      const pricingId = parseField(obj, "pricingId");
      const langs = ["en", "ms", "zh"].filter((l) =>
        new RegExp(`^\\s*${l}:\\s*\\{`, "m").test(obj),
      );
      const relatedMatch = obj.match(/relatedProblems:\s*\[([^\]]*)\]/);
      const relatedProblems = relatedMatch
        ? [...relatedMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
        : [];
      authored.push({ slug, service, pricingId, langs, relatedProblems, file });
    }
  }
  return authored;
}

const authored = parseAuthored();

/* ---- uniqueness ---- */
const seen = new Set();
for (const a of authored) {
  if (seen.has(a.slug)) {
    fail(`Duplicate sub-service slug: ${a.slug}.`);
  }
  seen.add(a.slug);
}

/* ---- serviceSlug validity + pricingId resolution + language parity ---- */
for (const a of authored) {
  if (!SERVICES.includes(a.service ?? "")) {
    fail(`Sub-service "${a.slug}" has an unknown serviceSlug "${a.service}".`);
  }
  if (a.pricingId && !allIds.has(a.pricingId)) {
    fail(`Sub-service "${a.slug}" references an unknown pricingId "${a.pricingId}".`);
  }
  for (const problem of a.relatedProblems) {
    if (!problemSlugs.has(problem)) {
      fail(
        `Sub-service "${a.slug}" links to an unknown problem "${problem}" — it must exist in data/problem-content/.`,
      );
    }
  }
  if (new Set(a.relatedProblems).size !== a.relatedProblems.length) {
    fail(`Sub-service "${a.slug}" repeats a slug in relatedProblems.`);
  }
  const missingLangs = ["en", "ms", "zh"].filter((l) => !a.langs.includes(l));
  if (missingLangs.length > 0) {
    fail(
      `Sub-service "${a.slug}" is missing ${missingLangs.join(", ")} copy — it cannot be published to every language.`,
    );
  }
}

/* ---- which priced sub-services already have a standalone page? ---- */
const authoredSet = new Set(authored.map((a) => a.slug));
const unpublishedPriced = pricedSubs.filter((p) => !authoredSet.has(p.sub));
const publishedPriced = pricedSubs.filter((p) => authoredSet.has(p.sub));

/* ---- every authored slug that is priced must carry its pricingId ---- */
for (const a of authored) {
  const priced = pricedSubSet.get(a.slug);
  if (priced && !a.pricingId) {
    fail(
      `Sub-service "${a.slug}" is priced in the catalogue but its page does not set pricingId.`,
    );
  }
}

/* ------------------------------------------------------------------------ */
/* Phase 28 — hub → spoke link graph wiring                                  */
/*                                                                           */
/* Each published sub-service page must be reachable from its own parent      */
/* service page (the strongest hub for that topic) and from the problem       */
/* guides it declares, not only from its siblings, guides and projects. The   */
/* links are registry-derived, so this guard checks the wiring that keeps     */
/* them derived rather than the link list itself.                             */
/* ------------------------------------------------------------------------ */
const REGISTRY_INDEX = join(ROOT, "data", "sub-services", "index.ts");
const SUB_LINKS_COMPONENT = join(ROOT, "components", "service", "SubServiceLinksSection.tsx");
const SERVICE_PAGE = join(ROOT, "components", "service", "ServicePage.tsx");
const PROBLEM_PAGE = join(ROOT, "components", "problem", "ProblemPage.tsx");

function readIfExists(file) {
  try {
    return readFileSync(file, "utf8");
  } catch {
    fail(`Phase 28 link guard: expected file missing — ${file.replace(`${ROOT}/`, "")}`);
    return "";
  }
}

const registryIndex = readIfExists(REGISTRY_INDEX);
const subLinksComponent = readIfExists(SUB_LINKS_COMPONENT);
const servicePageSource = readIfExists(SERVICE_PAGE);
const problemPageSource = readIfExists(PROBLEM_PAGE);

if (!/export function getSubServicesForProblem\(/.test(registryIndex)) {
  fail(
    "Phase 28 link guard: data/sub-services/index.ts must expose getSubServicesForProblem() (the registry-derived inverse of each sub-service's relatedProblems).",
  );
}
if (!/relatedProblems\.includes\(problemSlug\)/.test(registryIndex)) {
  fail(
    "Phase 28 link guard: getSubServicesForProblem must derive its result from the registry's own relatedProblems — a hand-maintained second list would drift.",
  );
}
if (!/import \{ subServiceLanguages \}/.test(subLinksComponent) || !/subServiceLanguages\(sub\.slug\)\.includes\(code\)/.test(subLinksComponent)) {
  fail(
    "Phase 28 link guard: components/service/SubServiceLinksSection.tsx must filter every link through subServiceLanguages(), so no language ever links a sub-service page that does not exist.",
  );
}
if (!/localizedHref\(`\/services\/\$\{sub\.serviceSlug\}\/\$\{sub\.slug\}`/.test(subLinksComponent)) {
  fail(
    "Phase 28 link guard: SubServiceLinksSection must build its hrefs from the canonical /services/{serviceSlug}/{slug} route shape.",
  );
}
const subServicesSectionSource = readIfExists(join(ROOT, "components", "service", "SubServicesSection.tsx"));
if (
  !/linkedSubServices=\{getSubServicesByService\(detail\.slug\)\}/.test(servicePageSource) ||
  !/<SubServiceLinksBlock/.test(subServicesSectionSource)
) {
  fail(
    "Phase 28 link guard: the service pillar must pass getSubServicesByService(detail.slug) into SubServicesSection and that section must render SubServiceLinksBlock — otherwise published sub-service pages have no inbound link from their own hub.",
  );
}
if (!/<SubServiceLinksSection/.test(problemPageSource) || !/getSubServicesForProblem\(problem\.slug\)/.test(problemPageSource)) {
  fail(
    "Phase 28 link guard: the problem guide must render SubServiceLinksSection for getSubServicesForProblem(problem.slug).",
  );
}
for (const lang of ["en", "ms", "zh"]) {
  const dict = readIfExists(join(ROOT, "i18n", `${lang}.ts`));
  if (!/subServiceLinks: \{[\s\S]*?underService:/.test(dict) || !/viewDetails:/.test(dict)) {
    fail(`Phase 28 link guard: i18n/${lang}.ts is missing the subServiceLinks dictionary block.`);
  }
}
if (failures.length === 0) {
  console.log(
    "  ✔ Phase 28 hub → spoke link wiring: service pillar → every published sub-service page, problem guide → the scopes that declare it",
  );
}

/* ------------------------------------------------------------------------ */
/* Phase 29 — location → scope link graph wiring                              */
/*                                                                            */
/* Area guides were the one page type that never linked to a sub-service page. */
/* `getSubServicesForLocation()` closes that edge from two authored sources —  */
/* the location × service × sub-service × problem intent matrix and the area's  */
/* own locally noted problems — and the area services section renders it. This  */
/* guard checks that derivation instead of the rendered list, so the two can    */
/* never drift apart.                                                           */
/* ------------------------------------------------------------------------ */
const AREA_SUB_COMPONENT = join(ROOT, "components", "area", "AreaSubServicesSection.tsx");
const AREA_SERVICES_SECTION = join(ROOT, "components", "area", "AreaServicesSection.tsx");
const areaSubComponent = readIfExists(AREA_SUB_COMPONENT);
const areaServicesSection = readIfExists(AREA_SERVICES_SECTION);

if (!/export function getSubServicesForLocation\(/.test(registryIndex)) {
  fail(
    "Phase 29 link guard: data/sub-services/index.ts must expose getSubServicesForLocation() (the registry-derived scopes relevant to one location).",
  );
}
if (!/getMatrixEntriesForLocation\(locationSlug\)/.test(registryIndex)) {
  fail(
    "Phase 29 link guard: getSubServicesForLocation must lead with the authored location × service × sub-service × problem matrix entries.",
  );
}
if (!/getSubServicesForProblem\(problemSlug\)/.test(registryIndex)) {
  fail(
    "Phase 29 link guard: getSubServicesForLocation must fall back to the inverse of each sub-service's own relatedProblems — a second hand-maintained list would drift.",
  );
}
if (!/getSubServicesForLocation\(area\.slug, area\.relatedProblems\)/.test(areaSubComponent)) {
  fail(
    "Phase 29 link guard: components/area/AreaSubServicesSection.tsx must derive its list from getSubServicesForLocation(area.slug, area.relatedProblems).",
  );
}
if (!/<SubServiceLinksBlock/.test(areaSubComponent)) {
  fail(
    "Phase 29 link guard: the area block must render through the shared SubServiceLinksBlock, which filters every link with subServiceLanguages().",
  );
}
if (!/<AreaSubServicesBlock\s+area=\{area\}\s+lang=\{lang\}/.test(areaServicesSection)) {
  fail(
    "Phase 29 link guard: AreaServicesSection must render <AreaSubServicesBlock area={area} lang={lang} /> — otherwise area guides lose their only link to the sub-service pages.",
  );
}
for (const lang of ["en", "ms", "zh"]) {
  const dict = readIfExists(join(ROOT, "i18n", `${lang}.ts`));
  if (!/areaEyebrow:/.test(dict) || !/areaTitle:/.test(dict) || !/areaDescription:/.test(dict)) {
    fail(
      `Phase 29 link guard: i18n/${lang}.ts is missing the area scope copy (areaEyebrow / areaTitle / areaDescription) in the subServiceLinks block.`,
    );
  }
}
if (failures.length === 0) {
  console.log(
    "  ✔ Phase 29 location → scope link wiring: area guide → the scopes derived from the intent matrix and the area's own local problems",
  );
}

/* ------------------------------------------------------------------------ */
/* Phase 35 — region hub → scope + region hub → problem link graph wiring     */
/*                                                                           */
/* The two region hubs carried a service layer but neither the scope layer    */
/* nor the problem layer: all 53 of their own area guides linked to the        */
/* sub-service pages and problem guides relevant to that location, while the   */
/* hub above them linked to neither. `getSubServicesForRegion()` and           */
/* `getRegionProblemSlugs()` close both edges as pure unions of what the       */
/* region's own guides already render, so a hub can never claim a scope or a   */
/* problem its child guides do not carry. This guard checks that derivation    */
/* rather than the rendered list, so the two can never drift apart.            */
/* ------------------------------------------------------------------------ */
const AREA_CONTENT_INDEX = join(ROOT, "data", "area-content", "index.ts");
const REGION_SCOPE_COMPONENT = join(
  ROOT,
  "components",
  "area",
  "AreaRegionSubServicesSection.tsx",
);
const REGION_PROBLEM_COMPONENT = join(
  ROOT,
  "components",
  "area",
  "AreaRegionProblemsSection.tsx",
);
const REGION_PAGE = join(ROOT, "components", "area", "AreaRegionPage.tsx");
const areaContentIndex = readIfExists(AREA_CONTENT_INDEX);
const regionScopeComponent = readIfExists(REGION_SCOPE_COMPONENT);
const regionProblemComponent = readIfExists(REGION_PROBLEM_COMPONENT);
const regionPageSource = readIfExists(REGION_PAGE);

if (!/export function getSubServicesForRegion\(/.test(areaContentIndex)) {
  fail(
    "Phase 35 link guard: data/area-content/index.ts must expose getSubServicesForRegion() (the union of the scopes the region's own area guides carry).",
  );
}
if (!/getSubServicesForLocation\(area\.slug, area\.relatedProblems\)/.test(areaContentIndex)) {
  fail(
    "Phase 35 link guard: getSubServicesForRegion must derive its list from getSubServicesForLocation(area.slug, area.relatedProblems) for every area guide in the region — a hand-maintained second list would drift.",
  );
}
if (!/export function getRegionProblemSlugs\(/.test(areaContentIndex)) {
  fail(
    "Phase 35 link guard: data/area-content/index.ts must expose getRegionProblemSlugs() (the union of the problems the region's own area guides note).",
  );
}
if (!/for \(const slug of area\.relatedProblems\)/.test(areaContentIndex)) {
  fail(
    "Phase 35 link guard: getRegionProblemSlugs must read the problem slugs from each area guide's own relatedProblems field.",
  );
}
if (!/getSubServicesForRegion\(region, REGION_SCOPE_LIMIT\)/.test(regionScopeComponent)) {
  fail(
    "Phase 35 link guard: components/area/AreaRegionSubServicesSection.tsx must derive its list from getSubServicesForRegion().",
  );
}
if (!/<SubServiceLinksBlock/.test(regionScopeComponent) || !/scope="region"/.test(regionScopeComponent)) {
  fail(
    "Phase 35 link guard: the region scope block must render through the shared SubServiceLinksBlock with scope=\"region\", which filters every link with subServiceLanguages().",
  );
}
if (!/getRegionProblemSlugs\(region, REGION_PROBLEM_LIMIT\)/.test(regionProblemComponent)) {
  fail(
    "Phase 35 link guard: components/area/AreaRegionProblemsSection.tsx must derive its list from getRegionProblemSlugs().",
  );
}
if (
  !/<AreaRegionSubServicesBlock\s+region=\{region\}\s+lang=\{lang\}/.test(regionPageSource) ||
  !/<AreaRegionProblemsSection\s+region=\{region\}\s+lang=\{lang\}/.test(regionPageSource)
) {
  fail(
    "Phase 35 link guard: AreaRegionPage must render both <AreaRegionSubServicesBlock region={region} lang={lang} /> and <AreaRegionProblemsSection region={region} lang={lang} /> — otherwise the hubs lose their links to the sub-service and problem pages.",
  );
}
for (const lang of ["en", "ms", "zh"]) {
  const dict = readIfExists(join(ROOT, "i18n", `${lang}.ts`));
  if (!/regionEyebrow:/.test(dict) || !/regionTitle:/.test(dict) || !/regionDescription:/.test(dict)) {
    fail(
      `Phase 35 link guard: i18n/${lang}.ts is missing the region scope copy (regionEyebrow / regionTitle / regionDescription) in the subServiceLinks block.`,
    );
  }
  if (
    !/problemsEyebrow:/.test(dict) ||
    !/problemsTitle:/.test(dict) ||
    !/problemsDescription:/.test(dict) ||
    !/problemsNote:/.test(dict)
  ) {
    fail(
      `Phase 35 link guard: i18n/${lang}.ts is missing the region-hub problem copy (problemsEyebrow / problemsTitle / problemsDescription / problemsNote) in the areaRegion block.`,
    );
  }
}
if (failures.length === 0) {
  console.log(
    "  ✔ Phase 35 region → scope + problem link wiring: region hub → the scopes and problems its own area guides carry",
  );
}

/* ---- report ---- */
console.log("\n=== PHASE 19 SUB-SERVICE AUDIT ===\n");
console.log(`Priced sub-services in catalogue: ${pricedSubs.length}`);
console.log(`Authored standalone sub-service pages: ${authored.length}`);
console.log(`  of which published in all 3 languages (en/ms/zh): ${
  authored.filter((a) => a.langs.length === 3).length
}`);
console.log(`Problem slugs in catalogue: ${problemSlugs.size}`);
console.log(`Sub-service → problem links validated: ${
  authored.reduce((n, a) => n + a.relatedProblems.length, 0)
}`);
console.log(`Authored but not priced: ${
  authored.filter((a) => !pricedSubSet.has(a.slug)).length
}`);
console.log("\nPublished priced sub-services:");
for (const p of publishedPriced) {
  console.log(`  ✔ ${p.service} / ${p.sub}`);
}
console.log("\nPriced sub-services still needing a standalone page:");
if (unpublishedPriced.length === 0) {
  console.log("  (none)");
} else {
  for (const p of unpublishedPriced) {
    console.log(`  – ${p.service} / ${p.sub}`);
  }
}
console.log(`\nAuthored slugs by file:`);
const byFile = new Map();
for (const a of authored) {
  byFile.set(a.file, (byFile.get(a.file) ?? 0) + 1);
}
for (const [file, count] of byFile) {
  console.log(`  ${file}: ${count}`);
}

if (failures.length > 0) {
  console.error(`\n${failures.length} FAILURE(S):`);
  for (const f of failures) {
    console.error(`  ✗ ${f}`);
  }
  process.exitCode = 1;
} else {
  console.log("\nAll sub-service integrity checks passed.");
}
console.log(`\nNotes: build-time guards in i18n/verify.ts + app/sitemap.ts enforce route/sitemap/hreflang parity.`);
