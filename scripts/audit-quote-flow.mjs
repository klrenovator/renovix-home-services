#!/usr/bin/env node
/**
 * Phase 22 quote-flow audit.
 *
 * Statically verifies the quote conversion path after the Phase 22 CRO pass:
 *  1. Security invariants of the single quote API (validation, honeypot,
 *     rate limit, origin allow-list, body-size cap, no-store, nodejs runtime).
 *  2. Registry integrity: quote sub-service options come from the Phase 19
 *     registry and every slug belongs to its parent service; property types
 *     are stable IDs; no free-text sub-service values are submitted.
 *  3. Truthful photo handling: no file input exists, nothing pretends photos
 *     were transmitted, and the WhatsApp photo handoff is localized.
 *  4. i18n completeness: the quote dictionary ships every new key in
 *     EN/MS/ZH (sections, propertyTypes by id, quick-path + success photo
 *     handoff copy, sub-service validation, FAQs) with no removed keys and
 *     no mojibake/replacement characters.
 *  5. Analytics preparation: the six conversion events exist, the quote flow
 *     fires them, and nothing loads an analytics platform or sends PII.
 *  6. SEO: the quote page carries FAQPage structured data, the WhatsApp CTA
 *     uses the single site configuration, and `/quote/` stays in the sitemap.
 *
 * Run with: npm run audit:quote
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");

const failures = [];
const fail = (message) => failures.push(message);
const pass = (message) => console.log(`  ✓ ${message}`);

/* ------------------------------------------------------------------------ */
/* 1. API route security invariants                                          */
/* ------------------------------------------------------------------------ */
console.log("\n1. Quote API security invariants");

const route = read("app/api/quote/route.ts");
const checksRoute = [
  ['runtime = "nodejs"', route.includes('runtime = "nodejs"')],
  ['force-dynamic', route.includes('dynamic = "force-dynamic"')],
  ["origin allow-list enforced", route.includes("isAllowedOrigin")],
  ["body-size limit enforced", route.includes("QUOTE_MAX_BODY_BYTES")],
  ["payload parsed via parseQuotePayload", route.includes("parseQuotePayload")],
  ["honeypot spam ignored silently (200, no email)", /reason === "spam"/.test(route)],
  ["rate limit applied", route.includes("rateLimit(")],
  ["honest 503 when email unconfigured", route.includes('"unavailable"') && route.includes("503")],
  ["no-store cache header", route.includes("no-store")],
  ["X-Robots-Tag: noindex", /X-Robots-Tag/.test(route) && /noindex/.test(route)],
];
for (const [label, ok] of checksRoute) {
  if (ok) {
    pass(label);
  } else {
    fail(`API route: ${label}`);
  }
}

const validation = read("lib/quote/validation.ts");
const checksValidation = [
  ["honeypot checked server-side", validation.includes("QUOTE_HONEYPOT_FIELD")],
  ["sub-service validated against the Phase 19 registry", validation.includes("getSubServicesByService")],
  ["sub-service free-text values rejected (slug match)", /item\.slug === subServiceSlug/.test(validation)],
  ["property type validated against stable IDs", validation.includes("isQuotePropertyTypeId")],
  ["email label resolved for notification (propertyTypeLabel)", validation.includes("propertyTypeLabel")],
  ["HTML escaping kept for email", validation.includes("escapeHtml")],
];
for (const [label, ok] of checksValidation) {
  if (ok) {
    pass(label);
  } else {
    fail(`validation: ${label}`);
  }
}

const constants = read("lib/quote/constants.ts");
const maxBytes = Number(constants.match(/QUOTE_MAX_BODY_BYTES = ([\d_]+)/)?.[1]?.replace(/_/g, ""));
if (maxBytes && maxBytes > 0 && maxBytes <= 128_000) {
  pass(`body-size cap is sane (${maxBytes} bytes)`);
} else {
  fail(`constants: QUOTE_MAX_BODY_BYTES missing or too large (${maxBytes})`);
}
if (constants.includes("QUOTE_PROPERTY_TYPE_IDS")) {
  pass("stable property-type ID registry defined");
} else {
  fail("constants: QUOTE_PROPERTY_TYPE_IDS missing");
}

const origin = read("lib/quote/origin.ts");
if (origin.includes("siteConfig.url") && origin.includes("isAllowedOrigin")) {
  pass("origin allow-list reuses the verified site URL");
} else {
  fail("origin: allow-list structure changed unexpectedly");
}

const rateLimit = read("lib/quote/rate-limit.ts");
if (rateLimit.includes("WINDOW_MS") && rateLimit.includes("MAX_HITS")) {
  pass("rate limiter intact");
} else {
  fail("rate-limit: limiter structure changed unexpectedly");
}

/* ------------------------------------------------------------------------ */
/* 2. Registry-based service → sub-service options                           */
/* ------------------------------------------------------------------------ */
console.log("\n2. Registry-based service → sub-service selection");

const servicesSource = read("data/services.ts");
const serviceSlugs = [...servicesSource.matchAll(/^\s{4}slug: "([a-z-]+)",$/gm)].map((m) => m[1]);
if (serviceSlugs.length === 10) {
  pass(`all ${serviceSlugs.length} service pillars found`);
} else {
  fail(`services: expected 10 service slugs, found ${serviceSlugs.length}`);
}

const contentDir = join(ROOT, "data", "sub-services", "content");
const subPairs = [];
for (const file of readdirSync(contentDir)) {
  const source = readFileSync(join(contentDir, file), "utf8");
  let currentService = null;
  for (const line of source.split("\n")) {
    const svc = line.match(/^\s{4}serviceSlug: "([a-z-]+)",$/);
    if (svc) currentService = svc[1];
    const slug = line.match(/^\s{4}slug: "([a-z-]+)",$/);
    if (slug && currentService) subPairs.push([slug[1], currentService]);
  }
}
const dangling = subPairs.filter(([, svc]) => !serviceSlugs.includes(svc));
if (dangling.length === 0) {
  pass(`every one of the ${subPairs.length} registry sub-services belongs to a real service`);
} else {
  fail(`sub-services with unknown serviceSlug: ${dangling.map(([s, svc]) => `${s}→${svc}`).join(", ")}`);
}

const i18nIndex = read("data/i18n/index.ts");
if (
  i18nIndex.includes("getSubServicesByService") &&
  /sub\[code\]\.name/.test(i18nIndex) &&
  !/subServices: Record<string, string\[\]>/.test(i18nIndex)
) {
  pass("quote options built from the registry with per-language names");
} else {
  fail("data/i18n: getQuoteServiceOptions no longer derives options from the registry");
}
if (i18nIndex.includes("subServices: [],")) {
  pass('"not sure / multiple services" offers no sub-service choice');
} else {
  fail('data/i18n: "not sure" option still exposes sub-service values');
}

/* ------------------------------------------------------------------------ */
/* 3. Truthful photo handling                                                */
/* ------------------------------------------------------------------------ */
console.log("\n3. Truthful photo handling");

const form = read("components/quote/QuoteForm.tsx");
if (!/type="file"/.test(form)) {
  pass("no fake file upload input in the form");
} else {
  fail("form: a file input exists but no upload path transmits files");
}
if (!form.includes("photoCount")) {
  pass("form no longer submits a misleading photoCount");
} else {
  fail("form: photoCount still submitted");
}
for (const [label, file] of [
  ["EN", "i18n/en.ts"],
  ["MS", "i18n/ms.ts"],
  ["ZH", "i18n/zh.ts"],
]) {
  const dict = read(file);
  if (dict.includes("successPhotosCta") && dict.includes("successPhotosBody")) {
    pass(`${label}: localized WhatsApp photo handoff present`);
  } else {
    fail(`${label}: success photo handoff copy missing`);
  }
}
const emailLib = read("lib/quote/email.ts");
if (!/Photos noted on the form/.test(emailLib)) {
  pass("notification email no longer references untransmitted photos");
} else {
  fail("email.ts still renders a photos row for photos that were never sent");
}

/* ------------------------------------------------------------------------ */
/* 4. i18n completeness of the quote dictionaries                            */
/* ------------------------------------------------------------------------ */
console.log("\n4. Multilingual quote dictionary");

const REQUIRED_QUOTE_KEYS = [
  "sections:",
  "whatsappQuickTitle:",
  "whatsappQuickCta:",
  "whatsappQuickMessage:",
  "successPhotosTitle:",
  "successPhotosCta:",
  "successPhotosMessage:",
  "faqEyebrow:",
  "faqTitle:",
  "faqs: [",
];
const REMOVED_QUOTE_KEYS = [
  "photosPrompt:",
  "photosSelectedSuffix:",
  "notSureSubService:",
  "multipleServicesSubService:",
  'propertyTypes: [',
];

for (const [label, file] of [
  ["EN", "i18n/en.ts"],
  ["MS", "i18n/ms.ts"],
  ["ZH", "i18n/zh.ts"],
]) {
  const dict = read(file);
  const missing = REQUIRED_QUOTE_KEYS.filter((key) => !dict.includes(key));
  if (missing.length === 0) {
    pass(`${label}: all new quote keys present`);
  } else {
    fail(`${label}: missing quote keys: ${missing.join(", ")}`);
  }
  const stale = REMOVED_QUOTE_KEYS.filter((key) => dict.includes(key));
  if (stale.length === 0) {
    pass(`${label}: removed keys fully cleaned up`);
  } else {
    fail(`${label}: stale quote keys remain: ${stale.join(", ")}`);
  }
  if (dict.includes("subService:")) {
    const quoteBlock = dict.slice(dict.indexOf("  quote: {"));
    const validationBlock = quoteBlock.slice(0, quoteBlock.indexOf("whatsappQuickTitle"));
    if (/subService:/.test(validationBlock)) {
      pass(`${label}: sub-service validation message present`);
    } else {
      fail(`${label}: validation.subService missing`);
    }
  }
  if (/\uFFFD/.test(dict)) {
    fail(`${label}: replacement character (mojibake) found in dictionary`);
  } else {
    pass(`${label}: no mojibake / replacement characters`);
  }
  if (/nina\.v@example\.com/.test(dict)) {
    fail(`${label}: leftover personal-looking placeholder email`);
  }
}

// Property-type keys must be IDs in all three languages.
const PROPERTY_TYPE_IDS = [
  '"condominium-apartment":',
  '"terrace-landed-house":',
  '"semi-detached-bungalow":',
  '"shop-office-commercial":',
  '"other-not-sure":',
];
for (const [label, file] of [
  ["EN", "i18n/en.ts"],
  ["MS", "i18n/ms.ts"],
  ["ZH", "i18n/zh.ts"],
]) {
  const dict = read(file);
  const quoteStart = dict.indexOf("  quote: {");
  const quoteEnd = dict.indexOf("\n  },", quoteStart);
  const block = dict.slice(quoteStart, quoteEnd);
  const missingIds = PROPERTY_TYPE_IDS.filter((id) => !block.includes(id));
  if (missingIds.length === 0) {
    pass(`${label}: property types keyed by stable IDs`);
  } else {
    fail(`${label}: propertyTypes missing IDs: ${missingIds.join(", ")}`);
  }
}

// The typed dictionary must import the property-type IDs.
const types = read("i18n/types.ts");
if (types.includes("Record<QuotePropertyTypeId, string>")) {
  pass("dictionary type enforces property-type completeness");
} else {
  fail("types.ts: propertyTypes no longer typed by QuotePropertyTypeId");
}

/* ------------------------------------------------------------------------ */
/* 5. Analytics preparation (no platform, no PII)                            */
/* ------------------------------------------------------------------------ */
console.log("\n5. Analytics hooks (Phase 24 preparation)");

const analytics = read("lib/analytics.ts");
const EVENTS = [
  "quote_form_start",
  "quote_form_submit",
  "quote_form_success",
  "quote_form_error",
  "whatsapp_click",
  "phone_click",
];
for (const event of EVENTS) {
  if (analytics.includes(`"${event}"`)) {
    pass(`event defined: ${event}`);
  } else {
    fail(`analytics: event missing: ${event}`);
  }
}
for (const banned of ["gtag", "dataLayer", "googletagmanager", "plausible", "posthog"]) {
  if (analytics.toLowerCase().includes(banned)) {
    fail(`analytics: platform reference found (${banned}) — Phase 24 concern, not Phase 22`);
  }
}
if (analytics.includes("window.__renovixAnalytics") && analytics.includes("timestamp")) {
  pass("events buffered on window.__renovixAnalytics with timestamps");
} else {
  fail("analytics: event buffer missing");
}

const trackedLink = read("components/analytics/TrackedLink.tsx");
if (trackedLink.includes("trackConversionEvent")) {
  pass("TrackedLink click interface in place");
} else {
  fail("TrackedLink does not emit conversion events");
}
const formEvents = ["quote_form_start", "quote_form_submit", "quote_form_success", "quote_form_error"];
for (const event of formEvents) {
  if (form.includes(`"${event}"`)) {
    pass(`form fires ${event}`);
  } else {
    fail(`form: ${event} never fired`);
  }
}
if (form.includes("name") && /trackConversionEvent\([^)]*name/.test(form)) {
  fail("form: analytics events appear to carry the customer name (PII)");
} else {
  pass("form analytics events carry no customer data");
}

/* ------------------------------------------------------------------------ */
/* 6. Page-level CRO/SEO wiring                                              */
/* ------------------------------------------------------------------------ */
console.log("\n6. Quote page CRO/SEO wiring");

const page = read("app/[lang]/quote/page.tsx");
if (page.includes("faqNode") && page.includes("t.quote.faqs")) {
  pass("FAQPage structured data rendered from the same visible FAQs");
} else {
  fail("page: FAQPage node missing");
}
if (page.includes("getWhatsAppHref()") && page.includes("whatsappQuickMessage")) {
  pass("WhatsApp quick path reuses the single site WhatsApp configuration");
} else {
  fail("page: WhatsApp quick path not wired to site config");
}
if (page.includes("getQuoteServiceOptions(code)")) {
  pass("form options come from getQuoteServiceOptions(lang)");
} else {
  fail("page: service options not built from the registry helper");
}
if (/serviceDetails/.test(page)) {
  fail("page: still derives sub-services from service content (pre-Phase 22 path)");
} else {
  pass("page no longer derives sub-services from service page content");
}
const honeypotRendered = form.includes("QUOTE_HONEYPOT_FIELD");
if (honeypotRendered) {
  pass("honeypot field still rendered client-side");
} else {
  fail("form: honeypot input missing");
}
if (form.includes('noValidate') && form.includes('aria-busy')) {
  pass("noValidate + aria-busy kept (no English browser bubbles)");
} else {
  fail("form: noValidate/aria-busy regression");
}

const sitemap = read("app/sitemap.ts");
if (sitemap.includes('"/quote/"')) {
  pass("/quote/ remains in the sitemap");
} else {
  fail("sitemap: /quote/ disappeared");
}

const robots = read("app/robots.ts");
if (!/quote/.test(robots)) {
  pass("robots.ts has no quote-specific exclusion (page stays indexable)");
} else {
  fail("robots.ts excludes a quote route unexpectedly");
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
  console.log("\nQuote-flow audit: FAIL");
  process.exit(1);
}
console.log("\nQuote-flow audit: PASS");
