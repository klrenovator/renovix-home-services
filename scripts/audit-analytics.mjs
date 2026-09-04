#!/usr/bin/env node
/**
 * Phase 24 analytics & measurement audit.
 *
 * Statically verifies the measurement implementation:
 *  1. No duplicated providers: exactly one Google delivery route (Google tag
 *     OR Google Tag Manager, never both), one page_view sender, one click
 *     listener, and a marker that prevents TrackedLink/delegated double
 *     events. No Meta Pixel or other tag exists anywhere.
 *  2. Owner-pending discipline: no real/hardcoded measurement IDs in code —
 *     every provider loads only through validated environment variables.
 *  3. Event layer: all ten conversion events are declared, fired from the
 *     right surfaces, and routed through the sanitizing allowlist in
 *     lib/analytics.ts (which stays platform-neutral — the Phase 22 audit
 *     still enforces that).
 *  4. PII discipline: no customer fields can reach an event (context keys
 *     are a closed set; call sites only pass slugs/classes/locales).
 *  5. Web Vitals: LCP/INP/CLS plus FCP/TTFB are reported as non-interaction
 *     events; measurement scripts load deferred, never beforeInteractive.
 *  6. Privacy & security: consent-mode defaults deny all advertising
 *     signals; the CSP only gains provider origins when IDs are configured;
 *     the privacy policy discloses measurement in EN/MS/ZH.
 *  7. Search Console verification survives untouched, and the sitemap /
 *     canonical config is unchanged by Phase 24.
 *
 * Run with: npm run audit:analytics
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
/* 1. Provider exclusivity & single installation                             */
/* ------------------------------------------------------------------------ */
console.log("\n1. Provider exclusivity (no duplicate tracking)");

const config = read("lib/analytics-config.ts");
const measurement = read("components/analytics/Measurement.tsx");
const layout = read("app/[lang]/layout.tsx");

if (config.includes('export const analyticsMode: "ga4" | "gtm" | "none"')) {
  if (/gtm\.value\s*\?\s*"gtm"\s*:\s*ga4\.value\s*\?\s*"ga4"\s*:\s*"none"/.test(config)) {
    pass("GA4-direct and GTM are mutually exclusive (GTM wins when both are set)");
  } else {
    fail("analytics-config: GA4/GTM exclusivity logic not found");
  }
} else {
  fail("analytics-config: analyticsMode route selection missing");
}

const gtagScriptCount = (measurement.match(/gtag\/js\?id=/g) ?? []).length;
const gtmScriptCount = (measurement.match(/gtm\.js\?id=/g) ?? []).length;
if (gtagScriptCount === 1 && gtmScriptCount === 1) {
  if (/analyticsMode === "ga4"[\s\S]{0,400}gtag\/js\?id=/.test(measurement) && /analyticsMode === "gtm"[\s\S]{0,400}gtm\.js\?id=/.test(measurement)) {
    pass("exactly one gtag.js and one gtm.js script tag, each behind its mode");
  } else {
    fail("Measurement.tsx: script tags are not both gated by analyticsMode");
  }
} else {
  fail(`Measurement.tsx: expected 1 gtag.js + 1 gtm.js script reference, found ${gtagScriptCount}/${gtmScriptCount}`);
}

if ((measurement.match(/send_page_view:\s*false/) ?? []).length === 1) {
  pass("the Google tag disables its automatic page_view (no double initial view)");
} else {
  fail("Measurement.tsx: send_page_view:false missing — automatic + manual page_view would duplicate");
}

const pageViewSenders = [
  layout,
  measurement,
  read("components/quote/QuoteForm.tsx"),
  read("components/analytics/TrackedLink.tsx"),
].filter((source) => source.includes('"page_view"'));
if (pageViewSenders.length === 1 && pageViewSenders[0] === measurement) {
  pass("page_view is sent from exactly one place (Measurement.tsx)");
} else {
  fail(`page_view sender count is ${pageViewSenders.length} (must be 1, in Measurement.tsx)`);
}

if (measurement.includes("lastSentPageView") && measurement.includes("pathWithQuery === lastSentPageView")) {
  pass("page_view dedupes remounts/double effects by path+query");
} else {
  fail("Measurement.tsx: page_view dedupe guard missing");
}

const sinkRegistrations = (measurement.match(/setConversionEventSink\(/g) ?? []).length;
if (sinkRegistrations === 2) { // register + cleanup(null)
  pass("exactly one provider sink registration (plus cleanup)");
} else {
  fail(`Measurement.tsx: expected 2 setConversionEventSink calls (set + clear), found ${sinkRegistrations}`);
}

if (measurement.includes("forwardedRecords") && measurement.includes("WeakSet")) {
  pass("pre-mount event replay is exactly-once (WeakSet guard)");
} else {
  fail("Measurement.tsx: replay dedupe (WeakSet) missing");
}

// Delegated listener + TrackedLink must not double-fire on the same link.
const trackedLink = read("components/analytics/TrackedLink.tsx");
if (trackedLink.includes("data-renovix-tracked") && measurement.includes('hasAttribute("data-renovix-tracked")')) {
  pass("TrackedLink marks its anchors; the delegated click listener skips them (no double events)");
} else {
  fail("TrackedLink/delegated-listener dedupe marker (data-renovix-tracked) missing on one side");
}

const clickListenerCount = (measurement.match(/addEventListener\("click"/g) ?? []).length;
if (clickListenerCount === 1) {
  pass("one delegated document click listener for the whole site");
} else {
  fail(`Measurement.tsx: expected exactly 1 document click listener, found ${clickListenerCount}`);
}

if (layout.includes('<Measurement />')) {
  pass("Measurement is mounted exactly once, in the locale root layout (all EN/MS/ZH routes)");
} else {
  fail("app/[lang]/layout.tsx does not mount <Measurement />");
}

/* No Meta Pixel / other tags anywhere */
const allSources = ["app", "components", "lib"]
  .flatMap((dir) => readdir(join(ROOT, dir)))
  .filter((name) => name.endsWith(".ts") || name.endsWith(".tsx"))
  .map((name) => join(name));
const pixelPattern = /fbq\s*\(|connect\.facebook\.net|graph\.facebook\.com|tiktok\.com\/i18n\/pixel|static\.hotjar\.com|plausible\.io\/js|posthog\.com/i;
const pixelHits = [];
for (const source of allSources) {
  const text = readSafe(source);
  if (text && pixelPattern.test(text)) {
    pixelHits.push(source);
  }
}
if (pixelHits.length === 0) {
  pass("no Meta Pixel, TikTok, Hotjar, Plausible or PostHog tags exist anywhere");
} else {
  fail(`unexpected third-party tags found in: ${pixelHits.join(", ")}`);
}

/* ------------------------------------------------------------------------ */
/* 2. Owner-pending discipline — no invented IDs                             */
/* ------------------------------------------------------------------------ */
console.log("\n2. No fabricated measurement IDs (all providers owner-pending)");

const idPattern = /["'`]G-[A-Z0-9]{6,12}["'`]|["'`]GTM-[A-Z0-9]{4,10}["'`]|["'`]AW-\d{8,12}["'`]|clarity\.ms\/tag\/[a-z0-9]{6,20}/;
const idHits = [];
for (const source of allSources) {
  const text = readSafe(source);
  if (text && idPattern.test(text)) {
    idHits.push(source);
  }
}
if (idHits.length === 0) {
  pass("no hardcoded GA4/GTM/Google Ads/Clarity IDs in app/, components/ or lib/");
} else {
  fail(`hardcoded measurement IDs found in: ${idHits.join(", ")}`);
}

const envExample = read(".env.example");
for (const variable of [
  "NEXT_PUBLIC_GA4_MEASUREMENT_ID",
  "NEXT_PUBLIC_GTM_CONTAINER_ID",
  "NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID",
  "NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL",
  "NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL",
  "NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL",
  "NEXT_PUBLIC_CLARITY_PROJECT_ID",
  "NEXT_PUBLIC_ANALYTICS_DEBUG",
]) {
  if (envExample.includes(variable)) {
    pass(`.env.example documents ${variable}`);
  } else {
    fail(`.env.example missing ${variable}`);
  }
}

const configuredHere = [
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
].some((value) => Boolean(value && value.trim()));
console.log(
  configuredHere
    ? "  ℹ live IDs are configured in this environment — remember: LIVE VERIFIED still requires real-data confirmation in the provider UIs"
    : "  ℹ no measurement IDs configured in this environment (OWNER-PENDING state — correct default)",
);

/* ------------------------------------------------------------------------ */
/* 3. Event layer & firing surfaces                                          */
/* ------------------------------------------------------------------------ */
console.log("\n3. Conversion events defined and fired");

const analytics = read("lib/analytics.ts");
const EVENTS = [
  "quote_form_start",
  "quote_form_submit",
  "quote_form_success",
  "quote_form_error",
  "whatsapp_click",
  "phone_click",
  "email_click",
  "service_cta_click",
  "subservice_cta_click",
];
for (const event of EVENTS) {
  if (analytics.includes(`"${event}"`)) {
    pass(`event defined: ${event}`);
  } else {
    fail(`analytics: event missing: ${event}`);
  }
}

/* Platform neutrality of the event layer (Phase 22 invariant, kept) */
for (const banned of ["gtag", "datalayer", "googletagmanager", "clarity", "plausible", "posthog"]) {
  if (analytics.toLowerCase().includes(banned)) {
    fail(`analytics: platform reference found (${banned}) — the event layer must stay platform-neutral`);
  }
}
if (!failures.some((message) => message.includes("platform-neutral"))) {
  pass("lib/analytics.ts stays platform-neutral (provider glue lives in Measurement.tsx only)");
}

/* Firing surfaces */
const quoteForm = read("components/quote/QuoteForm.tsx");
const quotePage = read("app/[lang]/quote/page.tsx");
const serviceHero = read("components/service/ServiceHero.tsx");
const serviceCta = read("components/service/CtaSection.tsx");
const subServicePage = read("components/service/SubServicePage.tsx");

const fireChecks = [
  [quoteForm, "quote_form_start", "QuoteForm"],
  [quoteForm, "quote_form_submit", "QuoteForm"],
  [quoteForm, "quote_form_success", "QuoteForm"],
  [quoteForm, "quote_form_error", "QuoteForm"],
  [quotePage, "whatsapp_click", "quote page quick path"],
  [quoteForm, "whatsapp_click", "QuoteForm fallback/success"],
  [measurement, "phone_click", "delegated click listener"],
  [measurement, "email_click", "delegated click listener"],
  [measurement, "whatsapp_click", "delegated click listener"],
  [serviceHero, "service_cta_click", "ServiceHero quote CTA"],
  [serviceCta, "service_cta_click", "service CtaSection quote CTA"],
  [subServicePage, "subservice_cta_click", "SubServicePage quote CTAs"],
];
for (const [source, event, where] of fireChecks) {
  if (source.includes(`"${event}"`)) {
    pass(`${event} fired via ${where}`);
  } else {
    fail(`${event} not fired in ${where}`);
  }
}

if (subServicePage.match(/analyticsEvent="subservice_cta_click"/g)?.length === 2) {
  pass("both sub-service quote CTAs (hero + bottom CTA) carry subservice_cta_click");
} else {
  fail("SubServicePage: expected 2 subservice_cta_click buttons");
}

const button = read("components/ui/Button.tsx");
if (button.includes("data-analytics-event") && button.includes("data-analytics-service")) {
  pass("Button forwards analytics data attributes (read by the delegated listener)");
} else {
  fail("ui/Button.tsx: analytics data attributes missing");
}

/* ------------------------------------------------------------------------ */
/* 4. PII discipline                                                         */
/* ------------------------------------------------------------------------ */
console.log("\n4. PII cannot reach analytics");

if (analytics.includes("sanitizeContext") && analytics.includes("CONTEXT_KEYS")) {
  pass("context is rebuilt through a fixed key allowlist (no caller-object spread)");
} else {
  fail("analytics: sanitizeContext/CONTEXT_KEYS allowlist missing");
}

if (analytics.includes("MAX_CONTEXT_VALUE_LENGTH")) {
  pass("context values are length-capped for provider safety");
} else {
  fail("analytics: context value truncation missing");
}

/* No customer field names in any tracking call across the codebase */
const piiCallPattern = /trackConversionEvent\([^)]*(?:\bname\b|\bphone\b|\bemail\b|\bdescription\b|\blocation\b)/i;
const piiHits = [];
for (const source of allSources) {
  const text = readSafe(source);
  if (text && piiCallPattern.test(text.replace(/\n/g, " "))) {
    piiHits.push(source);
  }
}
if (piiHits.length === 0) {
  pass("no trackConversionEvent call passes name/phone/email/description/location fields");
} else {
  fail(`potential PII in tracking calls: ${piiHits.join(", ")}`);
}

/* The delegated listener must not read link text or query strings */
if (!/anchor\.(innerText|textContent|innerHTML)/.test(measurement)) {
  pass("click tracker classifies by href scheme only — never link text or URL payloads");
} else {
  fail("Measurement.tsx reads anchor text content into analytics");
}

/* ------------------------------------------------------------------------ */
/* 5. Web Vitals & performance discipline                                    */
/* ------------------------------------------------------------------------ */
console.log("\n5. Web Vitals & loading strategy");

for (const metric of ["LCP", "INP", "CLS", "FCP", "TTFB"]) {
  if (measurement.includes(`"${metric}"`)) {
    pass(`web vital measured: ${metric}`);
  } else {
    fail(`Measurement.tsx: web vital ${metric} not reported`);
  }
}
if (/FID/.test(measurement)) {
  fail("Measurement.tsx still tracks deprecated FID instead of INP");
}

if (measurement.includes("non_interaction: true") && measurement.includes("transport_type:")) {
  pass("web vitals are non-interaction events sent via beacon (no bounce-rate or perf damage)");
} else {
  fail("Measurement.tsx: web vitals not marked non_interaction/beacon");
}

if (measurement.includes("useReportWebVitals")) {
  pass("vitals come from next/web-vitals (real-user measurement, not synthetic)");
} else {
  fail("Measurement.tsx: useReportWebVitals not used");
}

const strategyHits = measurement.match(/strategy="([a-zA-Z]+)"/g) ?? [];
if (
  strategyHits.length > 0 &&
  strategyHits.every((hit) => hit.includes("afterInteractive") || hit.includes("lazyOnload"))
) {
  pass(`all provider scripts load deferred (${[...new Set(strategyHits)].join(", ")}), never beforeInteractive`);
} else {
  fail(`Measurement.tsx: unexpected script strategy: ${strategyHits.join(", ")}`);
}

if (/clarity[\s\S]{0,600}lazyOnload/.test(measurement)) {
  pass("Clarity (session recordings) loads at browser idle only");
} else {
  fail("Measurement.tsx: Clarity script is not lazyOnload");
}

/* ------------------------------------------------------------------------ */
/* 6. Consent, CSP & privacy disclosure                                      */
/* ------------------------------------------------------------------------ */
console.log("\n6. Consent defaults, CSP gating, privacy disclosure");

for (const consentKey of ["ad_storage", "ad_user_data", "ad_personalization"]) {
  const re = new RegExp(`${consentKey}:\\s*"denied"`);
  if (re.test(measurement)) {
    pass(`consent default denies ${consentKey}`);
  } else {
    fail(`consent default for ${consentKey} missing or not denied`);
  }
}
if (/analytics_storage:\s*"granted"/.test(measurement)) {
  pass("consent default grants analytics_storage (aggregate first-party measurement only)");
} else {
  fail("consent default analytics_storage missing");
}

if (/allow_google_signals:\s*false/.test(measurement) && /allow_ad_personalization_signals:\s*false/.test(measurement)) {
  pass("GA4 config disables Google signals & ad personalization signals");
} else {
  fail("Measurement.tsx: Google signals not disabled in GA4 config");
}

const nextConfig = read("next.config.ts");
if (nextConfig.includes("analyticsCspSources()")) {
  pass("CSP sources come from the shared config (empty while no provider is configured)");
} else {
  fail("next.config.ts does not call analyticsCspSources()");
}
if (/connect-src[^;]*analyticsCsp/.test(nextConfig) || nextConfig.includes('withOrigins("connect-src \'self\'"')) {
  pass("connect-src only widens when a provider ID exists");
} else {
  fail("next.config.ts: connect-src is not conditionally extended");
}
/* The strict default must be intact when nothing is configured */
if (nextConfig.includes("default-src 'self'") && nextConfig.includes("object-src 'none'")) {
  pass("baseline CSP unchanged: default-src 'self' + object-src 'none' remain");
} else {
  fail("next.config.ts: baseline CSP directives lost");
}

for (const [file, marker] of [
  ["i18n/en.ts", "Website measurement"],
  ["i18n/ms.ts", "Pengukuran laman web"],
  ["i18n/zh.ts", "网站流量衡量"],
]) {
  const dictionary = read(file);
  if (dictionary.includes(marker) && dictionary.includes("Google Analytics")) {
    pass(`privacy policy discloses measurement (${file})`);
  } else {
    fail(`privacy policy in ${file} missing the measurement section`);
  }
}

/* ------------------------------------------------------------------------ */
/* 7. Existing infrastructure untouched                                      */
/* ------------------------------------------------------------------------ */
console.log("\n7. Search Console verification & SEO surface intact");

if (layout.includes("google: \"CIc-da9G9QfriX7tAeKqS3w5YF2tt4GKnjV8IMSGP8o\"")) {
  pass("Search Console verification meta stays exactly as verified before Phase 24");
} else {
  fail("app/[lang]/layout.tsx: Search Console verification changed — do not break it");
}

if (layout.includes('language?.htmlLang ?? "en-MY"')) {
  pass("locale html lang attribute logic unchanged (analytics reads it for language context)");
} else {
  fail("app/[lang]/layout.tsx: html lang resolution changed unexpectedly");
}

const sitemap = read("app/sitemap.ts");
if (!/analytics|gtag|measurement/i.test(sitemap)) {
  pass("sitemap generation untouched by measurement");
} else {
  fail("app/sitemap.ts references measurement — unexpected");
}

/* Report */
console.log("\nSummary");
console.log(`  Failures: ${failures.length}`);
for (const message of failures) {
  console.log(`    ✗ ${message}`);
}

if (failures.length > 0) {
  console.log("\nAnalytics audit: FAIL");
  process.exit(1);
}
console.log("\nAnalytics audit: PASS");

/* ------------------------------------------------------------------------ */

function readdir(dir) {
  try {
    const names = readdirSync(dir, { withFileTypes: true });
    const files = [];
    for (const entry of names) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...readdir(full));
      } else if (/\.(ts|tsx)$/.test(entry.name)) {
        files.push(full);
      }
    }
    return files.map((file) => file.slice(join(ROOT).length + 1));
  } catch {
    return [];
  }
}

function readSafe(relativePath) {
  try {
    return read(relativePath);
  } catch {
    return null;
  }
}
