#!/usr/bin/env node
/**
 * Multilingual coverage audit: every registry slug is in the ms/zh coverage
 * lists, dictionaries exist, and stale location counts cannot return.
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

function grab(src, name) {
  const m = src.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\] as const`));
  return m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
}

console.log("Renovix Home Services — multilingual audit");

const coverage = read("i18n/coverage.ts");
const kinds = ["ALL_SERVICES", "ALL_PROBLEMS", "ALL_AREAS", "ALL_PROJECTS", "ALL_AREA_REGIONS"];
const inventories = Object.fromEntries(kinds.map((k) => [k, grab(coverage, k)]));

for (const lang of ["ms", "zh"]) {
  for (const [kind, expected] of [
    ["service", inventories.ALL_SERVICES],
    ["problem", inventories.ALL_PROBLEMS],
    ["area", inventories.ALL_AREAS],
    ["project", inventories.ALL_PROJECTS],
    ["areaRegion", inventories.ALL_AREA_REGIONS],
  ]) {
    const block = coverage.split(`${lang}:`)[1];
    const m = block.match(new RegExp(`${kind}: \\[([\\s\\S]*?)\\]`));
    const got = m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
    const missing = expected.filter((id) => !got.includes(id));
    const extra = got.filter((id) => !expected.includes(id));
    if (missing.length || extra.length) fail(`${lang} ${kind} drift missing=${missing} extra=${extra}`);
    else pass(`${lang} ${kind} coverage ${got.length}/${expected.length}`);
  }
}

for (const file of ["i18n/en.ts", "i18n/ms.ts", "i18n/zh.ts", "i18n/types.ts"]) {
  if (fs.existsSync(path.join(root, file))) pass(`${file} present`);
  else fail(`${file} missing`);
}

const lists = read("data/i18n/lists.ts");
if (lists.includes("18 kawasan") || lists.includes("28 pekan") || lists.includes("18 个地段") || lists.includes("28 个城镇")) {
  fail("stale 18/28 location counts still in region summaries");
} else pass("MS/ZH region summaries are not stuck on the pre-Phase-23 18/28 counts");
if (!lists.includes("21 kawasan") || !lists.includes("32 pekan")) {
  fail("MS region summaries do not state the current 21/32 guide counts");
} else pass("MS region summaries state 21 KL / 32 Selangor guides");
if (!lists.includes("21 个地段") || !lists.includes("32 个城镇")) {
  fail("ZH region summaries do not state the current 21/32 guide counts");
} else pass("ZH region summaries state 21 KL / 32 Selangor guides");

const languages = read("data/languages.ts");
for (const tag of ["en-MY", "ms-MY", "zh-MY"]) {
  if (languages.includes(tag)) pass(`hreflang tag ${tag} configured`);
  else fail(`missing ${tag}`);
}

/* ------------------------------------------------------------------------ */
/* Phase 29 — no slug-derived labels in rendered components                   */
/*                                                                           */
/* A label built by humanizing a slug (`"bathroom-leakage"` → "Bathroom       */
/* Leakage") is English on every page, including `/ms/` and `/zh/`. It is the  */
/* exact defect class fixed on the area intent-matrix section, so the pattern  */
/* is now banned in `components/` and the area section is pinned to the        */
/* localized registries it must keep using.                                    */
/* ------------------------------------------------------------------------ */

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`;
    if (entry.isDirectory()) walk(rel, out);
    else if (/\.tsx?$/.test(entry.name)) out.push(rel);
  }
  return out;
}

const componentFiles = walk("components");
const humanizers = componentFiles.filter((rel) => {
  const src = read(rel);
  // `.split("-")` + re-capitalizing the fragment is the humanizer fingerprint.
  return /\.split\(["']-["']\)/.test(src) && /toUpperCase\(\)/.test(src);
});
if (humanizers.length) {
  fail(
    `components rebuild a label from a slug (English on MS/ZH pages): ${humanizers.join(", ")}`,
  );
} else {
  pass("no component derives display text by humanizing a slug");
}

const matrixSection = read("components/area/AreaIntentMatrixSection.tsx");
for (const [token, label] of [
  ["getServiceCategories", "service names must come from the localized service list"],
  ["getProblemsBySlugs", "problem names must come from the localized problem registry"],
]) {
  if (matrixSection.includes(token)) pass(`area intent matrix uses ${token} — ${label}`);
  else fail(`components/area/AreaIntentMatrixSection.tsx no longer uses ${token}: ${label}`);
}

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — EN/MS/ZH coverage is complete and location counts are current.");
