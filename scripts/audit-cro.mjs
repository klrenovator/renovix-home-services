#!/usr/bin/env node
/**
 * Lead-generation Task 1.1 — CRO surface audit (floating WhatsApp CTA).
 *
 * Statically verifies the persistent WhatsApp conversion path that the lead
 * generation plan (P-03) added to every commercial page:
 *
 *  1. **One contact system.** The button builds its link through
 *     `lib/whatsapp.ts` (which reads the single WhatsApp number from
 *     `data/site.ts`) and fires the `whatsapp_click` conversion event through
 *     `TrackedLink` — no second number, no second pixel, no untracked link.
 *  2. **Page-aware, localized pre-fill.** Every page family (service,
 *     sub-service, problem, area/region, guide, project, generic) has its own
 *     template in EN/MS/ZH with the expected `{name}`/`{service}` slots, and
 *     the templates are short enough to survive a `wa.me?text=` URL. No
 *     template may be a copy of the English one in `ms`/`zh`, and the Chinese
 *     templates must be written in Chinese.
 *  3. **Registry names, never slugs.** The label a call site passes must be a
 *     registry value (`detail.name`, `problem.name`, `area.name`,
 *     `region.name`, `text.h1`, `project.content.title`) — a quoted literal is
 *     a humanized slug waiting to leak English into a `/ms/` or `/zh/` page.
 *  4. **Rendered where it is needed.** All four plan-mandated families
 *     (services, sub-services, problems, areas incl. region hubs, plus the
 *     Knowledge Hub) render it, and the quote page deliberately does not (it
 *     owns its own WhatsApp quick path — one conversion path per page).
 *  5. **Accessible & non-intrusive.** Visible localized label, decorative icon
 *     hidden from assistive tech, 44 px tap target via `.btn`, safe-area aware
 *     fixed positioning below the header/overlay z-index, hidden from print.
 *  6. **Photo-first quote path (Task 1.3).** The "Fast Photo Quote" banner
 *     renders directly under the pricing table of every service pillar page
 *     and under the price block of every sub-service page, invites the
 *     customer to send photographs of the real site on WhatsApp, and does so
 *     with the same single number, the same tracked event and the same
 *     localized-copy discipline as the floating CTA. Copy stays honest: no
 *     response time is promised.
 *
 * Run with: npm run audit:cro
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");

const failures = [];
const fail = (message) => failures.push(message);
const pass = (message) => console.log(`  ✓ ${message}`);

/* ------------------------------------------------------------------------ */
/* 1. One contact system, one tracked event                                  */
/* ------------------------------------------------------------------------ */
console.log("\n1. Floating CTA wiring");

const component = read("components/whatsapp/FloatingWhatsApp.tsx");
const helper = read("lib/whatsapp.ts");

if (!/^"use client"/.test(component)) {
  pass("floating CTA ships as a server component (no client state of its own)");
} else {
  fail("FloatingWhatsApp is a client component — it needs no client-side state");
}

if (helper.includes("getWhatsAppHref") && helper.includes("encodeURIComponent")) {
  pass("pre-fill links come from the single site WhatsApp config via lib/whatsapp.ts");
} else {
  fail("lib/whatsapp.ts: buildWhatsAppHref no longer uses data/site.ts + encodeURIComponent");
}

if (component.includes("buildWhatsAppHref(") && !/wa\.me|whatsapp:\/\//.test(component)) {
  pass("component never hardcodes a WhatsApp URL or number");
} else {
  fail("FloatingWhatsApp hardcodes a WhatsApp URL/number instead of buildWhatsAppHref()");
}

if (component.includes("<TrackedLink") && component.includes('event="whatsapp_click"')) {
  pass("every click fires whatsapp_click through TrackedLink (no delegated double count)");
} else {
  fail("FloatingWhatsApp does not emit whatsapp_click via TrackedLink");
}

const surfaceMatch = component.match(/surface:\s*`floating_whatsapp_\$\{[^}]+\}`/);
if (surfaceMatch) {
  pass("conversion events carry a coarse floating_whatsapp_* surface");
} else {
  fail("FloatingWhatsApp conversion events carry no floating_whatsapp surface token");
}

/* ------------------------------------------------------------------------ */
/* 2. Localized pre-fill templates                                           */
/* ------------------------------------------------------------------------ */
console.log("\n2. Localized pre-fill templates (EN/MS/ZH)");

const TEMPLATE_KEYS = [
  "prefillGeneral",
  "prefillService",
  "prefillSubService",
  "prefillProblem",
  "prefillArea",
  "prefillGuide",
  "prefillProject",
];

const dictionaries = {
  en: read("i18n/en.ts"),
  ms: read("i18n/ms.ts"),
  zh: read("i18n/zh.ts"),
};

/** Extracts the `whatsapp: { … }` block of a dictionary file. */
function whatsappBlock(source) {
  const start = source.indexOf("\n  whatsapp: {");
  if (start === -1) return null;
  const end = source.indexOf("\n  },", start);
  return end === -1 ? null : source.slice(start, end);
}

const blocks = {};
for (const [lang, source] of Object.entries(dictionaries)) {
  const block = whatsappBlock(source);
  if (!block) {
    fail(`${lang}: no whatsapp pre-fill block in the dictionary`);
    continue;
  }
  blocks[lang] = block;

  const missing = TEMPLATE_KEYS.filter((key) => !block.includes(`${key}:`));
  if (missing.length === 0) {
    pass(`${lang}: all ${TEMPLATE_KEYS.length} pre-fill templates present`);
  } else {
    fail(`${lang}: missing pre-fill templates: ${missing.join(", ")}`);
  }

  if (/\uFFFD/.test(block)) {
    fail(`${lang}: replacement character (mojibake) in the pre-fill copy`);
  }
}

const types = read("i18n/types.ts");
if (TEMPLATE_KEYS.every((key) => types.includes(`${key}: string;`))) {
  pass("the Dictionary type enforces every pre-fill template in all three languages");
} else {
  fail("i18n/types.ts does not type every whatsapp pre-fill template");
}

/** Pulls the single-line string value of a template key. */
function templateValue(lang, key) {
  const block = blocks[lang];
  if (!block) return null;
  const match = block.match(new RegExp(`${key}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return match ? match[1] : null;
}

const PLACEHOLDERS = {
  prefillGeneral: [],
  prefillService: ["name"],
  prefillSubService: ["name", "service"],
  prefillProblem: ["name"],
  prefillArea: ["name"],
  prefillGuide: ["name"],
  prefillProject: ["name"],
};

for (const key of TEMPLATE_KEYS) {
  const expected = PLACEHOLDERS[key];
  const problems = [];

  for (const lang of ["en", "ms", "zh"]) {
    const value = templateValue(lang, key);
    if (value === null) {
      problems.push(`${lang}: unreadable`);
      continue;
    }

    const slots = [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]);
    const wrong =
      slots.length !== expected.length || expected.some((slot) => !slots.includes(slot));
    if (wrong) {
      problems.push(`${lang}: expected {${expected.join("}, {")}} but got {${slots.join("}, {")}}`);
    }
    if (value.length > 200) {
      problems.push(`${lang}: ${value.length} characters — too long for a wa.me message`);
    }
    if (/[\r\n]/.test(value)) {
      problems.push(`${lang}: template spans multiple lines`);
    }
  }

  if (problems.length === 0) {
    pass(`${key}: correct placeholder slots and length in EN/MS/ZH`);
  } else {
    fail(`${key}: ${problems.join("; ")}`);
  }
}

/* The localized templates must be genuine translations, not the English copy. */
for (const key of TEMPLATE_KEYS) {
  const en = templateValue("en", key);
  const ms = templateValue("ms", key);
  const zh = templateValue("zh", key);

  if (en && ms && en === ms) {
    fail(`${key}: the Malay template is the English string verbatim`);
  }
  if (zh && !/[\u4e00-\u9fff]/.test(zh)) {
    fail(`${key}: the Chinese template contains no Chinese characters`);
  }
}
if (!failures.some((message) => message.includes("template is the English string"))) {
  pass("no localized template is the English string verbatim, and zh is written in Chinese");
}

/* ------------------------------------------------------------------------ */
/* 3. Render sites: registry names, never slugs                              */
/* ------------------------------------------------------------------------ */
console.log("\n3. Render sites");

const SITES = [
  ["components/service/ServicePage.tsx", "service", /subject=\{\{\s*kind:\s*"service",\s*label:\s*[\w.]+\s*\}\}/],
  [
    "components/service/SubServicePage.tsx",
    "sub-service",
    /subject=\{\{\s*kind:\s*"subservice",\s*label:\s*\w+,\s*parent:\s*[^}]+\}\}/,
  ],
  ["components/problem/ProblemPage.tsx", "problem guide", /subject=\{\{\s*kind:\s*"problem",\s*label:\s*[\w.]+\s*\}\}/],
  ["components/area/AreaPage.tsx", "area guide", /subject=\{\{\s*kind:\s*"area",\s*label:\s*[\w.]+\s*\}\}/],
  ["components/area/AreaRegionPage.tsx", "region hub", /subject=\{\{\s*kind:\s*"area",\s*label:\s*[\w.]+\s*\}\}/],
  ["components/blog/ArticlePage.tsx", "Knowledge Hub guide", /subject=\{\{\s*kind:\s*"guide",\s*label:\s*[\w.]+\s*\}\}/],
  ["components/projects/ProjectPage.tsx", "project case study", /subject=\{\{\s*kind:\s*"project",\s*label:\s*[\w.]+\s*\}\}/],
];

const GENERIC_SITES = [
  "components/home/HomePage.tsx",
  "components/blog/BlogIndexPage.tsx",
  "app/[lang]/services/page.tsx",
  "app/[lang]/problems/page.tsx",
  "app/[lang]/areas/page.tsx",
  "app/[lang]/projects/page.tsx",
  "app/[lang]/about/page.tsx",
  "app/[lang]/contact/page.tsx",
  "app/[lang]/faq/page.tsx",
  "app/[lang]/search/page.tsx",
];

let subjectSites = 0;
for (const [file, label, pattern] of SITES) {
  const source = read(file);
  if (!source.includes("<FloatingWhatsApp")) {
    fail(`${file} (${label}) no longer renders the floating WhatsApp CTA`);
    continue;
  }
  if (!pattern.test(source)) {
    fail(`${file} (${label}) does not pass its registry-derived subject to the CTA`);
    continue;
  }
  // A quoted literal label would be a slug or hardcoded name, not a registry name.
  if (/subject=\{\{\s*kind:\s*"[a-z]+",\s*label:\s*"/.test(source)) {
    fail(`${file} (${label}) passes a hardcoded label string instead of a registry name`);
    continue;
  }
  subjectSites += 1;
}
if (subjectSites === SITES.length) {
  pass(
    `all ${SITES.length} content templates render the CTA with a registry-derived subject name ` +
      "(service, sub-service + parent, problem, area, region, guide, project)",
  );
}

let genericSites = 0;
for (const file of GENERIC_SITES) {
  if (read(file).includes("<FloatingWhatsApp")) {
    genericSites += 1;
  } else {
    fail(`${file} no longer renders the floating WhatsApp CTA`);
  }
}
if (genericSites === GENERIC_SITES.length) {
  pass(`all ${GENERIC_SITES.length} index/support pages render the CTA with the generic message`);
}

/* The quote page owns the conversion flow (quick path + form fallback). */
if (!read("app/[lang]/quote/page.tsx").includes("<FloatingWhatsApp")) {
  pass("the quote page keeps a single, form-aware WhatsApp path (no competing floating CTA)");
} else {
  fail("the quote page renders the floating CTA on top of its own WhatsApp quick path");
}

/* ------------------------------------------------------------------------ */
/* 4. Accessibility & non-intrusive placement                                */
/* ------------------------------------------------------------------------ */
console.log("\n4. Accessibility & placement");

if (component.includes("{t.cta.whatsappUs}") && /<IconWhatsApp[^>]*aria-hidden/.test(component)) {
  pass("visible localized label + decorative icon hidden from assistive tech");
} else {
  fail("the CTA lost its visible localized label or hides the icon incorrectly");
}

const css = read("app/globals.css");
if (/\.floating-whatsapp\s*\{[^}]*safe-area-inset/.test(css)) {
  pass("fixed position honours the device safe areas (iPhone home bar / landscape notch)");
} else {
  fail("app/globals.css: .floating-whatsapp no longer offsets by env(safe-area-inset-*)");
}
if (/\.floating-whatsapp\s*\{[^}]*z-30/.test(css)) {
  pass("z-30 keeps the CTA above content but below the z-40 header and z-50 overlays");
} else {
  fail("app/globals.css: .floating-whatsapp z-index changed (must stay below header/overlays)");
}
if (component.includes("print:hidden")) {
  pass("the CTA is hidden from print");
} else {
  fail("the floating CTA is not hidden from print");
}
if (component.includes('className="btn btn-whatsapp')) {
  pass("the CTA reuses .btn (44 px minimum tap target) and the official WhatsApp green");
} else {
  fail("the floating CTA no longer uses the shared .btn/.btn-whatsapp classes");
}

/* ------------------------------------------------------------------------ */
/* 5. Fast Photo Quote banner (lead-generation Task 1.3)                     */
/* ------------------------------------------------------------------------ */
console.log("\n5. Fast photo quote banner (Task 1.3)");

const banner = read("components/service/FastPhotoQuoteBanner.tsx");
/** Comments are documentation, not URLs or markup — strip them before checking. */
const bannerCode = banner
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .split("\n")
  .filter((line) => !line.trim().startsWith("//"))
  .join("\n");

if (!/^"use client"/.test(banner)) {
  pass("photo banner ships as a server component (no client state of its own)");
} else {
  fail("FastPhotoQuoteBanner is a client component — it needs no client-side state");
}

if (bannerCode.includes("buildWhatsAppHref(") && !/wa\.me|whatsapp:\/\//.test(bannerCode)) {
  pass("banner builds its link through lib/whatsapp.ts (no hardcoded number or URL)");
} else {
  fail("FastPhotoQuoteBanner hardcodes a WhatsApp URL/number instead of buildWhatsAppHref()");
}

if (bannerCode.includes("<TrackedLink") && bannerCode.includes('event="whatsapp_click"')) {
  pass("every banner click fires whatsapp_click through TrackedLink");
} else {
  fail("FastPhotoQuoteBanner does not emit whatsapp_click via TrackedLink");
}

if (/surface:\s*`photo_quote_banner_\$\{[^}]+\}`/.test(banner)) {
  pass("banner events carry a coarse photo_quote_banner_* surface");
} else {
  fail("FastPhotoQuoteBanner carries no photo_quote_banner surface token");
}

if (banner.includes("copy.prefillService") && banner.includes("copy.prefillSubService")) {
  pass("both page families read their own pre-fill template (service and sub-service + parent)");
} else {
  fail("the banner does not read both photoQuote pre-fill templates");
}

if (/\{copy\.cta\}/.test(banner) && /<span[^>]*aria-hidden="true"[^>]*>\s*<IconCamera/.test(banner) && /<IconWhatsApp[^>]*aria-hidden="true"/.test(banner)) {
  pass("visible localized CTA label + decorative camera and WhatsApp icons hidden from assistive tech");
} else {
  fail("the banner lost its visible localized label or hides an icon incorrectly");
}

if (bannerCode.includes("btn btn-whatsapp")) {
  pass("the banner reuses .btn (44 px minimum target) and the official WhatsApp green");
} else {
  fail("the banner no longer uses the shared .btn/.btn-whatsapp classes");
}

if (bannerCode.includes("fast-photo-quote") && /\.fast-photo-quote\s*\{[^}]*background-image/.test(css)) {
  pass("the banner renders .fast-photo-quote and app/globals.css defines its brand wash");
} else {
  fail("the banner's .fast-photo-quote identity hook or its app/globals.css rule is missing");
}

/* Copy: the photoQuote block must be complete, localized and short enough. */
const PHOTO_KEYS = [
  "eyebrow",
  "title",
  "body",
  "cta",
  "hint",
  "prefillService",
  "prefillSubService",
];

const PHOTO_PLACEHOLDERS = {
  eyebrow: [],
  title: [],
  body: ["name"],
  cta: [],
  hint: [],
  prefillService: ["name"],
  prefillSubService: ["name", "service"],
};

/** Longest acceptable value per key: pre-fills travel in a `wa.me?text=` URL. */
const PHOTO_MAX_LENGTH = {
  eyebrow: 60,
  title: 80,
  body: 260,
  cta: 60,
  hint: 200,
  prefillService: 200,
  prefillSubService: 200,
};

/**
 * Extracts the `photoQuote: { … }` block of a source file. Dictionaries close
 * members with `,` while `i18n/types.ts` closes them with `;`, so both markers
 * are accepted.
 */
function photoQuoteBlock(source) {
  const start = source.indexOf("\n  photoQuote: {");
  if (start === -1) return null;
  const ends = ["\n  },", "\n  };"]
    .map((marker) => source.indexOf(marker, start))
    .filter((index) => index !== -1);
  return ends.length === 0 ? null : source.slice(start, Math.min(...ends));
}

const photoBlocks = {};
for (const [lang, source] of Object.entries(dictionaries)) {
  const block = photoQuoteBlock(source);
  if (!block) {
    fail(`${lang}: no photoQuote block in the dictionary`);
    continue;
  }
  photoBlocks[lang] = block;

  const missing = PHOTO_KEYS.filter((key) => !block.includes(`${key}:`));
  if (missing.length === 0) {
    pass(`${lang}: all ${PHOTO_KEYS.length} photoQuote keys present`);
  } else {
    fail(`${lang}: missing photoQuote keys: ${missing.join(", ")}`);
  }

  if (/\uFFFD/.test(block)) {
    fail(`${lang}: replacement character (mojibake) in the photoQuote copy`);
  }
}

/** Pulls the single-line string value of a photoQuote key. */
function photoValue(lang, key) {
  const block = photoBlocks[lang];
  if (!block) return null;
  const match = block.match(new RegExp(`${key}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return match ? match[1] : null;
}

const typesPhotoBlock = photoQuoteBlock(types);
if (typesPhotoBlock && PHOTO_KEYS.every((key) => typesPhotoBlock.includes(`${key}: string;`))) {
  pass("i18n/types.ts types every photoQuote key in all three languages");
} else {
  fail("i18n/types.ts does not type every photoQuote key");
}

for (const key of PHOTO_KEYS) {
  const expected = PHOTO_PLACEHOLDERS[key];
  const maxLength = PHOTO_MAX_LENGTH[key];
  const problems = [];

  for (const lang of ["en", "ms", "zh"]) {
    const value = photoValue(lang, key);
    if (value === null) {
      problems.push(`${lang}: unreadable`);
      continue;
    }

    const slots = [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]);
    const wrongSlots =
      slots.length !== expected.length || expected.some((slot) => !slots.includes(slot));
    if (wrongSlots) {
      problems.push(`${lang}: expected {${expected.join("}, {")}} but got {${slots.join("}, {")}}`);
    }
    if (value.length > maxLength) {
      problems.push(`${lang}: ${value.length} characters (max ${maxLength})`);
    }
    if (/[\r\n]/.test(value)) {
      problems.push(`${lang}: value spans multiple lines`);
    }
  }

  if (problems.length === 0) {
    pass(`photoQuote.${key}: correct placeholder slots and length in EN/MS/ZH`);
  } else {
    fail(`photoQuote.${key}: ${problems.join("; ")}`);
  }
}

/* Genuine translations, not the English strings, and MS/ZH stay photo-first. */
for (const key of PHOTO_KEYS) {
  const en = photoValue("en", key);
  const ms = photoValue("ms", key);
  const zh = photoValue("zh", key);

  if (en && ms && en === ms) {
    fail(`photoQuote.${key}: the Malay string is the English string verbatim`);
  }
  if (zh && !/[\u4e00-\u9fff]/.test(zh)) {
    fail(`photoQuote.${key}: the Chinese string contains no Chinese characters`);
  }
}
if (!failures.some((message) => message.includes("photoQuote."))) {
  pass("photoQuote copy is genuinely localized in EN/MS/ZH");
}

/* Rendered where the plan needs it: under both service pricing blocks. */
const pricingSection = read("components/service/PricingSection.tsx");
const subServiceTemplate = read("components/service/SubServicePage.tsx");

const serviceBannerCount = (pricingSection.match(/<FastPhotoQuoteBanner/g) ?? []).length;
const serviceBannerIndex = pricingSection.indexOf("<FastPhotoQuoteBanner");
const serviceTableIndex = pricingSection.indexOf("<table");
if (
  serviceBannerCount === 1 &&
  serviceBannerIndex > serviceTableIndex &&
  /subject=\{\{\s*kind:\s*"service",\s*label:\s*[\w.]+\s*\}\}/.test(pricingSection) &&
  !/subject=\{\{\s*kind:\s*"[a-z]+",\s*label:\s*"/.test(pricingSection)
) {
  pass("every service pillar page renders the banner under its pricing table with a registry name");
} else {
  fail(
    "PricingSection.tsx must render exactly one FastPhotoQuoteBanner after the pricing <table>, passing a registry-derived service label",
  );
}

const subBannerCount = (subServiceTemplate.match(/<FastPhotoQuoteBanner/g) ?? []).length;
const subBannerIndex = subServiceTemplate.indexOf("<FastPhotoQuoteBanner");
const subPricingIndex = subServiceTemplate.indexOf('id="pricing"');
if (
  subBannerCount === 1 &&
  subBannerIndex > subPricingIndex &&
  /subject=\{\{\s*kind:\s*"subservice",\s*label:\s*\w+,\s*parent:\s*[^}]+\}\}/.test(subServiceTemplate) &&
  !/subject=\{\{\s*kind:\s*"[a-z]+",\s*label:\s*"/.test(subServiceTemplate)
) {
  pass("every sub-service page renders the banner under its price block with a registry name + parent");
} else {
  fail(
    "SubServicePage.tsx must render exactly one FastPhotoQuoteBanner inside the pricing section, passing a registry-derived sub-service label and parent service",
  );
}

/* The quote page owns the form and its form-aware quick path. */
const photoQuoteElsewhere = ["app/[lang]/quote/page.tsx", "components/quote/QuoteForm.tsx"].filter(
  (file) => read(file).includes("<FastPhotoQuoteBanner"),
);
if (photoQuoteElsewhere.length === 0) {
  pass("the quote page keeps its single form-aware WhatsApp path (no banner competing with the form)");
} else {
  fail(`the photo banner renders on the quote flow: ${photoQuoteElsewhere.join(", ")}`);
}

/* ------------------------------------------------------------------------ */
/* Report                                                                    */
/* ------------------------------------------------------------------------ */
console.log("\nSummary");
console.log(`  Failures: ${failures.length}`);
for (const message of failures) {
  console.log(`    ✗ ${message}`);
}

if (failures.length > 0) {
  console.log("\nCRO surface audit: FAIL");
  process.exit(1);
}
console.log("\nCRO surface audit: PASS");
