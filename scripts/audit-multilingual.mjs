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

/* ------------------------------------------------------------------------ */
/* Phase 39 — in-copy internal links must survive translation                 */
/*                                                                           */
/* `data/area-content/` writes its contextual internal links inline in the    */
/* copy as `[label](/services/slug)` and `components/service/InlineLinks.tsx`  */
/* renders them as real anchors. The 55 English area guides and region hubs    */
/* carried 279 of those links while the MS and ZH translations carried none,   */
/* so every `/ms/` and `/zh/` area page published its in-copy links as plain   */
/* text: two thirds of the location library had no contextual link from the    */
/* paragraph a customer actually reads. The copy was restored without          */
/* changing one visible word (markup only, same shared component), and this    */
/* section keeps it that way:                                                 */
/*                                                                           */
/*   1. PARAGRAPH ALIGNMENT — every localized guide keeps the same number of   */
/*      `intro` / `context` paragraphs as its English source, so a paragraph   */
/*      can always be compared with its counterpart.                          */
/*   2. NO DROPPED LINK — a service the English paragraph links and the        */
/*      localized paragraph *names* must be linked in the localized            */
/*      paragraph too. A localized sentence that genuinely does not name the   */
/*      service is left alone rather than rewritten.                          */
/*   3. NO INVENTED TARGET — every in-copy link points at a published service  */
/*      slug, and no label is a bare or humanized slug.                       */
/*   4. NO EMPTY PAGE — all 55 entities carry in-copy links in all three       */
/*      languages, so the pre-Phase-39 zero cannot return silently.           */
/*                                                                           */
/* The term table is the audit's own reading aid: the localized surface forms  */
/* of each service exactly as this copy writes them. A term the table does not */
/* know can only make rule 2 more permissive, never stricter, so the guard     */
/* fails closed on dropped links and open on vocabulary it has not seen.      */
/* ------------------------------------------------------------------------ */

const AREA_DIR = "data/area-content";
const INLINE_LINK_RE = /\[([^\]]*)\]\((\/[^)]*)\)/g;
const SERVICES_SOURCE = read("data/services.ts");
const SERVICE_SLUGS = [...SERVICES_SOURCE.matchAll(/\n\s*slug: "([a-z0-9-]+)"/g)].map(
  (m) => m[1],
);
/** English service names, so a localized label can never be one of them. */
const ENGLISH_SERVICE_NAMES = new Map(
  [...SERVICES_SOURCE.matchAll(/\n\s*slug: "([a-z0-9-]+)",\n\s*name: "([^"]+)"/g)].map(
    (m) => [m[1], m[2]],
  ),
);

/**
 * Anchor text a `/ms/` or `/zh/` page must never show: an English service name
 * or a humanized slug (Phase 24's bug — English labels reached localized pages
 * through humanized slugs). Compared case-sensitively, so the real Malay
 * loanwords the localized copy writes ("plumbing", "handyman") stay legal.
 */
const ENGLISH_ANCHOR_TEXT = new Set([
  ...ENGLISH_SERVICE_NAMES.values(),
  ...SERVICE_SLUGS.map((slug) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  ),
]);

/** `null` when the label is real localized copy, otherwise the reason. */
function badAnchorLabel(label, lang) {
  if (!label.trim()) return "the label is empty";
  if (lang !== "en" && ENGLISH_ANCHOR_TEXT.has(label)) {
    return `"${label}" is English anchor text (a service name or a humanized slug)`;
  }
  return null;
}

/** Localized surface forms of each service, longest first. */
const SERVICE_TERMS = {
  ms: {
    tiling: ["kerja jubin", "jubin"],
    electrical: ["kerja elektrik", "pendawaian semula", "pendawaian", "elektrik"],
    plumbing: ["kerja paip", "paip", "plumbing"],
    waterproofing: ["kerja kalis air", "kalis air"],
    painting: ["kerja mengecat", "kerja cat", "pengecatan", "mengecat", "cat"],
    "ceiling-partition": ["siling & partisyen", "partisyen", "siling"],
    flooring: ["kerja lantai", "lantai"],
    handyman: [
      "servis handyman",
      "penyelenggaraan handyman",
      "pembaikan handyman",
      "handyman",
    ],
    "general-renovation": ["renovasi penuh", "renovasi am", "renovasi"],
    "welding-metal-works": ["kerja kimpalan", "kerja logam", "kimpalan", "kerja besi", "logam"],
  },
  zh: {
    tiling: ["瓷砖工程", "瓷砖", "铺砖", "贴砖"],
    electrical: ["电气工程", "电气布线", "电线重拉", "重新布线", "电气", "电线", "布线", "电路", "电工"],
    plumbing: ["水管工程", "水管更换", "水管", "暗管", "管道"],
    waterproofing: ["防水工程", "防水处理", "防水重做", "防水"],
    painting: ["油漆工程", "油漆", "粉刷", "刷漆"],
    "ceiling-partition": ["天花板与隔间工程", "天花板", "天花维修", "天花", "隔间", "隔墙"],
    flooring: ["地板工程", "地板"],
    handyman: ["家居维修", "日常维修", "杂项维修", "handyman"],
    "general-renovation": ["整体装修", "装修工程", "全面翻新", "装修", "翻新"],
    "welding-metal-works": ["金属工程", "铁工", "铁花", "焊接"],
  },
};

/** Every double-quoted string literal in a source fragment, unescaped. */
function stringLiterals(raw) {
  return [...raw.matchAll(/"(?:[^"\\]|\\.)*"/g)].map((m) => {
    try {
      return JSON.parse(m[0]);
    } catch {
      return m[0].slice(1, -1);
    }
  });
}

/** The paragraphs of an array field (`intro`, `context`) inside a block. */
function paragraphField(block, field) {
  const m = block.match(new RegExp(`\\n\\s*${field}: \\[([\\s\\S]*?)\\n\\s*\\],`));
  return m ? stringLiterals(m[1]) : [];
}

function inlineLinks(paragraph) {
  return [...String(paragraph).matchAll(INLINE_LINK_RE)].map((m) => ({
    label: m[1],
    href: m[2],
  }));
}

/** The copy as a reader sees it: link markup reduced to its label. */
const visibleText = (paragraph) =>
  String(paragraph).replace(/\[([^\]]*)\]\((\/[^)]*)\)/g, "$1");

/** Services a paragraph names, in the audit's own localized vocabulary. */
function namedServices(paragraph, lang) {
  const text = visibleText(paragraph);
  const named = new Set();
  for (const [slug, terms] of Object.entries(SERVICE_TERMS[lang] ?? {})) {
    for (const term of terms) {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // Malay needs word boundaries ("cat" must not match "mengecat");
      // Chinese is matched as written.
      const rx =
        lang === "ms"
          ? new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "iu")
          : new RegExp(escaped, "u");
      if (rx.test(text)) {
        named.add(slug);
        break;
      }
    }
  }
  return named;
}

/** English area guides and region hubs, keyed `region/slug` (`__region__` hubs). */
function englishAreaEntities() {
  const entities = new Map();
  for (const file of fs.readdirSync(path.join(root, AREA_DIR))) {
    const rel = `${AREA_DIR}/${file}`;
    if (/^(kuala-lumpur|selangor)-areas-[a-z]\.ts$/.test(file)) {
      for (const chunk of read(rel).split(/\n  \{\n/).slice(1)) {
        const region = chunk.match(/^\s*region: "([^"]+)"/m)?.[1];
        const slug = chunk.match(/\n\s*slug: "([^"]+)"/)?.[1];
        if (!region || !slug) continue;
        entities.set(`${region}/${slug}`, {
          intro: paragraphField(chunk, "intro"),
          context: paragraphField(chunk, "context"),
        });
      }
    } else if (/^(kuala-lumpur|selangor)\.ts$/.test(file)) {
      const region = file.replace(/\.ts$/, "");
      entities.set(`${region}/__region__`, {
        intro: paragraphField(read(rel), "intro"),
        context: [],
      });
    }
  }
  return entities;
}

/** Translated guides and hubs for one language, keyed the same way. */
function translatedAreaEntities(lang) {
  const dir = `${AREA_DIR}/translations/${lang}`;
  const entities = new Map();
  for (const file of fs.readdirSync(path.join(root, dir))) {
    if (!file.endsWith(".ts") || file === "index.ts" || file === "types.ts") continue;
    const source = read(`${dir}/${file}`);
    const isRegions = file === "regions.ts";
    // Region hub keys are quoted only when they contain a hyphen
    // (`"kuala-lumpur": {` but `selangor: {`).
    const keys = [...source.matchAll(/\n {2}"?([a-z0-9/-]+)"?: \{/g)];
    keys.forEach((m, index) => {
      const end = index + 1 < keys.length ? keys[index + 1].index : source.length;
      const block = source.slice(m.index, end);
      const id = isRegions ? `${m[1]}/__region__` : m[1];
      entities.set(id, {
        intro: paragraphField(block, "intro"),
        context: paragraphField(block, "context"),
      });
    });
  }
  return entities;
}

const englishAreas = englishAreaEntities();
const translatedAreas = {
  ms: translatedAreaEntities("ms"),
  zh: translatedAreaEntities("zh"),
};

if (englishAreas.size !== 55) {
  fail(`expected 55 English area entities (53 guides + 2 region hubs), parsed ${englishAreas.size}`);
} else {
  pass(`parsed all ${englishAreas.size} English area entities (53 guides + 2 region hubs)`);
}

const inCopyTotals = { en: 0, ms: 0, zh: 0 };
const entitiesWithLinks = { en: 0, ms: 0, zh: 0 };
let misaligned = 0;
let droppedLinks = 0;
let badTargets = 0;
let slugLabels = 0;

for (const [id, en] of englishAreas) {
  for (const field of ["intro", "context"]) {
    inCopyTotals.en += (en[field] || []).reduce(
      (n, paragraph) => n + inlineLinks(paragraph).length,
      0,
    );
  }
  if ((en.intro || []).some((p) => inlineLinks(p).length)) entitiesWithLinks.en += 1;
  for (const field of ["intro", "context"]) {
    (en[field] || []).forEach((paragraph, index) => {
      for (const link of inlineLinks(paragraph)) {
        const slug = link.href.replace(/^\/services\//, "");
        if (!link.href.startsWith("/services/") || !SERVICE_SLUGS.includes(slug)) {
          badTargets += 1;
          fail(`en "${id}" ${field}[${index}] links "${link.href}", which is not a published service page`);
        }
        if (!link.label.trim()) {
          slugLabels += 1;
          fail(`en "${id}" ${field}[${index}] has an empty in-copy link label`);
        }
      }
    });
  }

  for (const lang of ["ms", "zh"]) {
    const localized = translatedAreas[lang].get(id);
    if (!localized) {
      fail(`no ${lang} translation parsed for area entity "${id}"`);
      continue;
    }

    // 1. Paragraph alignment — the comparison below is index-based.
    for (const field of ["intro", "context"]) {
      if ((en[field] || []).length !== (localized[field] || []).length) {
        misaligned += 1;
        fail(
          `${lang} "${id}" ${field} has ${(localized[field] || []).length} paragraphs, the English source has ${(en[field] || []).length} — in-copy links can no longer be compared paragraph by paragraph`,
        );
      }
    }

    let entityLinks = 0;
    for (const field of ["intro", "context"]) {
      (en[field] || []).forEach((enParagraph, index) => {
        const enTargets = [
          ...new Set(inlineLinks(enParagraph).map((l) => l.href.replace(/^\/services\//, ""))),
        ];
        const localizedParagraph = (localized[field] || [])[index];
        if (typeof localizedParagraph !== "string") return;

        const links = inlineLinks(localizedParagraph);
        entityLinks += links.length;

        // 3. No invented target, no slug used as its own label.
        for (const link of links) {
          const slug = link.href.replace(/^\/services\//, "");
          if (!link.href.startsWith("/services/") || !SERVICE_SLUGS.includes(slug)) {
            badTargets += 1;
            fail(`${lang} "${id}" ${field}[${index}] links "${link.href}", which is not a published service page`);
          }
          // A single-word loanword the localized copy genuinely writes
          // ("handyman", "plumbing" in Malay) is real copy; a humanized slug
          // or an English service name is not.
          const labelProblem = badAnchorLabel(link.label, lang);
          if (labelProblem) {
            slugLabels += 1;
            fail(`${lang} "${id}" ${field}[${index}] uses "${link.label}" as in-copy link text — ${labelProblem}`);
          }
        }

        // 2. No dropped link: a service the English paragraph links and this
        //    paragraph names must be linked here too.
        const named = namedServices(localizedParagraph, lang);
        const linkedTargets = new Set(links.map((l) => l.href.replace(/^\/services\//, "")));
        for (const target of enTargets) {
          if (named.has(target) && !linkedTargets.has(target)) {
            droppedLinks += 1;
            fail(
              `${lang} "${id}" ${field}[${index}] names ${target} but leaves it unlinked, while the English source links it — the in-copy internal link was dropped in translation`,
            );
          }
        }
      });
    }

    inCopyTotals[lang] += entityLinks;
    if (entityLinks > 0) entitiesWithLinks[lang] += 1;
  }
}

if (misaligned === 0) pass("every localized area guide keeps the English paragraph structure (intro/context)");
if (droppedLinks === 0) {
  pass(
    `no in-copy internal link is dropped in translation (EN ${inCopyTotals.en} / MS ${inCopyTotals.ms} / ZH ${inCopyTotals.zh} inline links across ${englishAreas.size} area entities)`,
  );
} else {
  fail(`${droppedLinks} in-copy internal link(s) named in the localized copy are still unlinked`);
}
if (badTargets === 0 && slugLabels === 0) {
  pass("every in-copy link resolves to a published service page and carries real localized link text");
}
for (const lang of ["en", "ms", "zh"]) {
  if (entitiesWithLinks[lang] === englishAreas.size) {
    pass(`${lang}: all ${englishAreas.size} area guides and region hubs publish in-copy internal links`);
  } else {
    fail(
      `${lang}: only ${entitiesWithLinks[lang]}/${englishAreas.size} area entities publish in-copy internal links — a location page whose paragraphs name no service is a dead end for crawlers`,
    );
  }
}

/* ------------------------------------------------------------------------ */
/* Phase 39 (b) — the same guarantee on the 10 service pillar pages           */
/*                                                                           */
/* `components/service/ServiceHero.tsx` and `OverviewSection.tsx` render      */
/* `intro` and `overviewParagraphs` through the very same `InlineLinks`       */
/* component, so the pillar pages carry in-copy links as well (33 rendered    */
/* anchors in English). Those two MS/ZH paragraph sets are re-authored rather */
/* than translated word for word, so a pillar page can lose a cross-service   */
/* link the English page publishes without any coverage guard noticing. The   */
/* rules mirror the area rules above:                                        */
/*                                                                           */
/*   1. PREFIX ALIGNMENT — a localized `intro` / `overviewParagraphs` may     */
/*      add a paragraph (`/services/ceiling-partition/` publishes a third,    */
/*      repair-specific one) but may never drop one, because the comparison   */
/*      below is index-based.                                                */
/*   2. NO DROPPED LINK — paragraph level, exactly as for the areas.         */
/*   3. NO PAGE-LEVEL DROP — a service the English pillar links and the       */
/*      localized pillar *names anywhere* in the copy it renders must be      */
/*      linked somewhere in that copy. This is the rule that caught           */
/*      `/ms/services/general-renovation/` and `/zh/services/                 */
/*      general-renovation/`: their second intro paragraph enumerates four    */
/*      trades while the first one names the fifth (`cat` / `油漆`), so        */
/*      painting stayed unlinked on both localized pillar pages.             */
/*   4. NO INVENTED TARGET / NO ENGLISH LABEL — as for the areas, in every    */
/*      language including English.                                          */
/*   5. NO EMPTY PILLAR — all 10 service pages publish in-copy links in all   */
/*      three languages.                                                     */
/* ------------------------------------------------------------------------ */

const SERVICE_DIR = "data/service-content";
const PILLAR_FIELDS = ["intro", "overview"];

/** `intro` + `overviewParagraphs` are the only fields rendered as in-copy links. */
function pillarCopy(source) {
  return {
    intro: paragraphField(source, "intro"),
    overview: paragraphField(source, "overviewParagraphs"),
  };
}

function servicePillars(dir) {
  return new Map(SERVICE_SLUGS.map((slug) => [slug, pillarCopy(read(`${dir}/${slug}.ts`))]));
}

const englishPillars = servicePillars(SERVICE_DIR);
const translatedPillars = {
  ms: servicePillars(`${SERVICE_DIR}/translations/ms`),
  zh: servicePillars(`${SERVICE_DIR}/translations/zh`),
};

const pillarTotals = { en: 0, ms: 0, zh: 0 };
const pillarsWithLinks = { en: 0, ms: 0, zh: 0 };
let pillarMisaligned = 0;
let pillarDroppedLinks = 0;
let pillarPageDrops = 0;
let pillarBadTargets = 0;
let pillarSlugLabels = 0;

const targetOf = (href) => href.replace(/^\/services\//, "").replace(/\/$/, "");

/** Rule 4, shared by every language: real target, real localized link text. */
function checkPillarLink(lang, slug, field, index, link) {
  const target = targetOf(link.href);
  if (!link.href.startsWith("/services/") || !SERVICE_SLUGS.includes(target)) {
    pillarBadTargets += 1;
    fail(
      `${lang} /services/${slug}/ ${field}[${index}] links "${link.href}", which is not a published service page`,
    );
  }
  const labelProblem = badAnchorLabel(link.label, lang);
  if (labelProblem) {
    pillarSlugLabels += 1;
    fail(
      `${lang} /services/${slug}/ ${field}[${index}] uses "${link.label}" as in-copy link text — ${labelProblem}`,
    );
  }
}

for (const [slug, en] of englishPillars) {
  const enLinked = new Set();
  let enLinks = 0;
  PILLAR_FIELDS.forEach((field) => {
    en[field].forEach((paragraph, index) => {
      for (const link of inlineLinks(paragraph)) {
        enLinks += 1;
        enLinked.add(targetOf(link.href));
        checkPillarLink("en", slug, field, index, link);
      }
    });
  });
  pillarTotals.en += enLinks;
  if (enLinks > 0) pillarsWithLinks.en += 1;

  for (const lang of ["ms", "zh"]) {
    const localized = translatedPillars[lang].get(slug);
    if (!localized) {
      fail(`no ${lang} translation parsed for service "${slug}"`);
      continue;
    }

    // 1. Prefix alignment — extra localized paragraphs are allowed.
    for (const field of PILLAR_FIELDS) {
      if (localized[field].length < en[field].length) {
        pillarMisaligned += 1;
        fail(
          `${lang} /services/${slug}/ ${field} has ${localized[field].length} paragraphs, the English source has ${en[field].length} — a pillar paragraph and its in-copy links were dropped in translation`,
        );
      }
    }

    let links = 0;
    const linkedAnywhere = new Set();
    const namedAnywhere = new Set();
    for (const field of PILLAR_FIELDS) {
      // 2. Paragraph-level comparison against the English counterpart.
      en[field].forEach((enParagraph, index) => {
        const localizedParagraph = localized[field][index];
        if (typeof localizedParagraph !== "string") return;
        const paragraphLinks = inlineLinks(localizedParagraph);
        paragraphLinks.forEach((link) => checkPillarLink(lang, slug, field, index, link));

        const named = namedServices(localizedParagraph, lang);
        const linkedHere = new Set(paragraphLinks.map((l) => targetOf(l.href)));
        for (const target of inlineLinks(enParagraph).map((l) => targetOf(l.href))) {
          if (target === slug) continue;
          if (named.has(target) && !linkedHere.has(target)) {
            pillarDroppedLinks += 1;
            fail(
              `${lang} /services/${slug}/ ${field}[${index}] names ${target} but leaves it unlinked, while the English source links it — the in-copy internal link was dropped in translation`,
            );
          }
        }
      });

      // Page-level sets and totals, including paragraphs only the localized
      // copy has (they carry links too, so they are counted here, once).
      localized[field].forEach((paragraph) => {
        const paragraphLinks = inlineLinks(paragraph);
        links += paragraphLinks.length;
        for (const link of paragraphLinks) linkedAnywhere.add(targetOf(link.href));
        for (const service of namedServices(paragraph, lang)) namedAnywhere.add(service);
      });
    }

    // 3. Page-level: named in the localized copy and linked by the English
    //    pillar ⇒ the localized pillar must link it somewhere too.
    for (const target of enLinked) {
      if (target === slug) continue;
      if (namedAnywhere.has(target) && !linkedAnywhere.has(target)) {
        pillarPageDrops += 1;
        fail(
          `${lang} /services/${slug}/ names ${target} in the copy it renders but never links it, while the English pillar page does — the cross-service link was dropped in translation`,
        );
      }
    }

    pillarTotals[lang] += links;
    if (links > 0) pillarsWithLinks[lang] += 1;
  }
}

if (pillarMisaligned === 0) {
  pass("every localized service pillar keeps the English paragraph structure (intro/overviewParagraphs)");
}
if (pillarDroppedLinks === 0 && pillarPageDrops === 0) {
  pass(
    `no service pillar loses an in-copy link in translation (EN ${pillarTotals.en} / MS ${pillarTotals.ms} / ZH ${pillarTotals.zh} inline links across the ${SERVICE_SLUGS.length} pillars)`,
  );
} else {
  fail(`${pillarDroppedLinks + pillarPageDrops} service-pillar in-copy link(s) named in the localized copy are still unlinked`);
}
if (pillarBadTargets === 0 && pillarSlugLabels === 0) {
  pass("every service-pillar in-copy link resolves to a published service page and carries real localized link text");
}
for (const lang of ["en", "ms", "zh"]) {
  if (pillarsWithLinks[lang] === SERVICE_SLUGS.length) {
    pass(`${lang}: all ${SERVICE_SLUGS.length} service pillar pages publish in-copy internal links`);
  } else {
    fail(
      `${lang}: only ${pillarsWithLinks[lang]}/${SERVICE_SLUGS.length} service pillar pages publish in-copy internal links`,
    );
  }
}

/* ------------------------------------------------------------------------ */
/* Phase 46 — district groups and state names are localized wherever rendered */
/*                                                                           */
/* `districtGroups` and `stateCoverage` in `data/locations/registry.ts` carry  */
/* English-only `name` / `description` strings. Four render sites (area hero   */
/* chip, area answer-first paragraph, region hub district grid, areas index    */
/* district grid + coverage roadmap) read them directly, so every `/ms/` and   */
/* `/zh/` area, region and index page published English district copy         */
/* ("Segambut & Mont Kiara District", "High-density condominium enclaves…") —  */
/* 264 English names and 52 English descriptions across 112 localized pages.  */
/* `data/i18n/lists.ts` now carries `districtList` + `stateNames`, and         */
/* `getDistrictName` / `getDistrictDescription` / `getStateName` in           */
/* `data/i18n/index.ts` are the only sanctioned readers. This section keeps    */
/* the tables complete and the render sites on the accessors.                 */
/* ------------------------------------------------------------------------ */

const registrySource = read("data/locations/registry.ts");
const districtIds = [
  ...registrySource
    .slice(registrySource.indexOf("export const districtGroups"), registrySource.indexOf("export const stateCoverage"))
    .matchAll(/\n\s*id: "([a-z0-9-]+)"/g),
].map((m) => m[1]);
const stateIds = [
  ...registrySource.slice(registrySource.indexOf("export const stateCoverage")).matchAll(/\n\s*id: "([a-z0-9-]+)"/g),
].map((m) => m[1]);
if (districtIds.length < 13 || stateIds.length < 5) {
  fail(`could not parse the location registry (found ${districtIds.length} districts / ${stateIds.length} states)`);
}

const districtTable = lists.slice(lists.indexOf("export const districtList"), lists.indexOf("export const stateNames"));
const stateTable = lists.slice(lists.indexOf("export const stateNames"), lists.indexOf("export const areaNames"));
const ENGLISH_DISTRICT_WORDS = /\b(?:District|Centre|corridor|enclaves|neighbourhoods|townships|housing|corridors|communities|hub)\b/;
for (const lang of ["ms", "zh"]) {
  const langBlock = (table) => {
    const start = table.indexOf(`\n  ${lang}: {`);
    const next = table.indexOf(`\n  ${lang === "ms" ? "zh" : "END"}: {`);
    return table.slice(start, next === -1 ? undefined : next);
  };
  const districtBlock = langBlock(districtTable);
  const stateBlock = langBlock(stateTable);
  const missingDistricts = districtIds.filter((id) => {
    const entry = districtBlock.match(new RegExp(`"${id}":\\s*\\{([\\s\\S]*?)\\n    \\}`));
    return !entry || !/\bname:\s*"[^"]+"/.test(entry[1]) || !/\bdescription:\s*\n?\s*"[^"]+"/.test(entry[1]);
  });
  if (missingDistricts.length) {
    fail(`${lang}: districtList lacks a name + description for ${missingDistricts.join(", ")} — the English registry text would render on /${lang}/ pages`);
  } else {
    pass(`${lang}: all ${districtIds.length} district groups have a localized name and description`);
  }
  const englishLeft = [...districtBlock.matchAll(/(?:name|description):\s*\n?\s*"([^"]+)"/g)]
    .map((m) => m[1])
    .filter((text) => ENGLISH_DISTRICT_WORDS.test(text));
  if (englishLeft.length) {
    fail(`${lang}: districtList still contains English wording: ${englishLeft.map((t) => `"${t}"`).join(", ")}`);
  }
  const missingStates = stateIds.filter((id) => !new RegExp(`(?:"${id}"|\\b${id}):\\s*"[^"]+"`).test(stateBlock));
  if (missingStates.length) {
    fail(`${lang}: stateNames lacks ${missingStates.join(", ")}`);
  } else {
    pass(`${lang}: all ${stateIds.length} coverage states have a localized name`);
  }
}

const DISTRICT_RENDER_SITES = [
  "components/area/AreaHero.tsx",
  "components/area/AreaAnswerFirstSection.tsx",
  "components/area/AreaRegionPage.tsx",
  "app/[lang]/areas/page.tsx",
];
const directReads = [];
for (const rel of [...componentFiles, ...walk("app")]) {
  if (!/\.tsx$/.test(rel)) continue;
  const src = read(rel);
  const hits = [
    ...src.matchAll(/\bdistrict\.(?:name|description)\b|\bstate\.name\b/g),
  ].map((m) => m[0]);
  if (hits.length) directReads.push(`${rel} (${[...new Set(hits)].join(", ")})`);
}
if (directReads.length) {
  fail(`district/state registry strings are rendered directly instead of through getDistrictName/getDistrictDescription/getStateName: ${directReads.join("; ")}`);
} else {
  pass("no component or page renders district.name / district.description / state.name directly");
}
for (const rel of DISTRICT_RENDER_SITES) {
  const src = read(rel);
  const uses = rel.endsWith("AreaHero.tsx") || rel.endsWith("AreaAnswerFirstSection.tsx")
    ? /\bgetDistrictName\(/.test(src)
    : /\bgetDistrictName\(/.test(src) && /\bgetDistrictDescription\(/.test(src);
  if (!uses) {
    fail(`${rel} no longer localizes its district copy through data/i18n`);
  }
}
if (!/\bgetStateName\(/.test(read("app/[lang]/areas/page.tsx"))) {
  fail("app/[lang]/areas/page.tsx no longer localizes the coverage-roadmap state names through getStateName");
}
if (!failures.some((f) => f.includes("no longer localizes"))) {
  pass(`all ${DISTRICT_RENDER_SITES.length} district render sites use the localized accessors`);
}

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — EN/MS/ZH coverage is complete and location counts are current.");
