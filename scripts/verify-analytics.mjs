#!/usr/bin/env node
/**
 * Lead-generation Task 2.2 — local measurement configuration check.
 *
 * Verifies that the analytics & measurement layer *can* load from the current
 * environment, without loading anything:
 *
 *   npm run verify:analytics
 *
 * - Reads every `NEXT_PUBLIC_*` measurement variable from the process
 *   environment, falling back to `.env.local` / `.env` in the repository root
 *   when the variables are not exported (the same precedence Next.js uses
 *   locally: process env wins, then `.env.local`, then `.env`).
 * - Format-checks each ID with exactly the patterns `lib/analytics-config.ts`
 *   applies at build time (pinned identical by `npm run audit:analytics`), so
 *   a value this script accepts is a value the site will actually load.
 * - Resolves the delivery route the same way the site does (GTM wins over a
 *   direct GA4 tag, otherwise no provider at all) and previews the exact
 *   Content-Security-Policy origins the build would add.
 * - Reports CONFIGURED / NOT CONFIGURED / MISCONFIGURED with per-variable next
 *   steps that point at ANALYTICS_SETUP.md.
 *
 * This script is intentionally non-destructive and informational:
 *
 * - It makes no network calls and loads no measurement script. Live data
 *   collection is verified only in the provider's own UI (ANALYTICS_SETUP.md
 *   §5) or with the browser harness `npm run verify:analytics:e2e`.
 * - It prints IDs only in the masked form a human needs to recognise their own
 *   property (prefix + length), never a value that could be pasted elsewhere.
 * - It always exits 0 so it can run in CI as information without failing a
 *   build — an unconfigured checkout is the honest "no script loads" state,
 *   not a defect.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");

/* ------------------------------------------------------------------------ */
/* Environment resolution (mirrors scripts/verify-quote-email.mjs)           */
/* ------------------------------------------------------------------------ */

/** Minimal `KEY=value` reader for local env files (no dependency). */
function readEnvFile(name) {
  const path = join(ROOT, name);
  if (!existsSync(path)) return {};
  const values = {};
  for (const rawLine of readFileSync(path, "utf8").split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const index = line.indexOf("=");
    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key && !(key in values)) values[key] = value;
  }
  return values;
}

const dotEnv = readEnvFile(".env");
const dotEnvLocal = readEnvFile(".env.local");

function env(name) {
  const fromProcess = process.env[name];
  if (fromProcess !== undefined) return { value: fromProcess, source: "process environment" };
  if (dotEnvLocal[name] !== undefined) return { value: dotEnvLocal[name], source: ".env.local" };
  if (dotEnv[name] !== undefined) return { value: dotEnv[name], source: ".env" };
  return { value: "", source: "unset" };
}

/* ------------------------------------------------------------------------ */
/* ID formats — must stay identical to lib/analytics-config.ts               */
/* ------------------------------------------------------------------------ */

const GA4_ID_PATTERN = /^G-[A-Z0-9]{6,12}$/;
const GTM_ID_PATTERN = /^GTM-[A-Z0-9]{4,10}$/;
const ADS_ID_PATTERN = /^AW-\d{8,12}$/;
const ADS_LABEL_PATTERN = /^[A-Za-z0-9/_-]{5,100}$/;
const CLARITY_ID_PATTERN = /^[a-z0-9]{6,20}$/i;

/**
 * Placeholder-shaped IDs: every character after the provider prefix is the
 * same — the shape every guide (this repository's included) prints as an
 * example. Kept behaviourally identical to `isPlaceholderBody` in
 * `lib/analytics-config.ts` (pinned by `npm run audit:analytics`): a value
 * like this passes the format check, so the site would load a tag that can
 * never report — the exact "the ID is installed but the dashboard is empty"
 * state this check exists to catch.
 */
function isPlaceholderBody(value) {
  const separator = value.lastIndexOf("-");
  const body = separator >= 0 ? value.slice(separator + 1) : value;
  return body.length > 0 && new Set(body).size === 1;
}

/** Shows enough of an ID to recognise it, never enough to reuse it. */
function mask(value) {
  if (!value) return "(empty)";
  const dash = value.lastIndexOf("-");
  const prefix = dash > 0 ? `${value.slice(0, dash + 1)}…` : "";
  return `${prefix}${value.length} chars`;
}

const lines = [];
const problems = [];
const warnings = [];

lines.push("Renovix Home Services — measurement configuration check");
lines.push("(format check only: loads no script, makes no network call)");
lines.push("");

/* ------------------------------------------------------------------------ */
/* Google delivery route: GA4 direct XOR Google Tag Manager                  */
/* ------------------------------------------------------------------------ */

lines.push("Google delivery route");

const ga4 = env("NEXT_PUBLIC_GA4_MEASUREMENT_ID");
const ga4Value = ga4.value.trim();
const gtm = env("NEXT_PUBLIC_GTM_CONTAINER_ID");
const gtmValue = gtm.value.trim();

const ga4Placeholder = ga4Value ? isPlaceholderBody(ga4Value) : false;
const gtmPlaceholder = gtmValue ? isPlaceholderBody(gtmValue) : false;
const ga4Valid = ga4Value ? GA4_ID_PATTERN.test(ga4Value) && !ga4Placeholder : null;
const gtmValid = gtmValue ? GTM_ID_PATTERN.test(gtmValue) && !gtmPlaceholder : null;

if (ga4Value && ga4Valid === false && ga4Placeholder) {
  problems.push(
    "NEXT_PUBLIC_GA4_MEASUREMENT_ID is a documentation placeholder, not a real Measurement ID",
  );
  lines.push(`[check]  NEXT_PUBLIC_GA4_MEASUREMENT_ID (${ga4.source}): placeholder shape`);
  lines.push("  Next: every character after the prefix is the same, so this value could");
  lines.push("  never report anywhere — the tag would load (CSP and all) and every GA4");
  lines.push("  report and Realtime view would stay empty. That is the exact state this");
  lines.push("  check exists to catch. Copy the real Measurement ID from");
  lines.push("  GA4 → Admin → Data streams, set it in Vercel → Production, redeploy, then");
  lines.push("  confirm with `npm run verify:analytics:live` and GA4 Realtime (§5.2).");
} else if (ga4Value && ga4Valid === false) {
  problems.push("NEXT_PUBLIC_GA4_MEASUREMENT_ID is not a valid GA4 Measurement ID");
  lines.push(`[check]  NEXT_PUBLIC_GA4_MEASUREMENT_ID (${ga4.source}): ${mask(ga4Value)}`);
  lines.push("  Next: a GA4 Measurement ID looks like G-XXXXXXXXXX (6–12 uppercase");
  lines.push("  letters/digits after `G-`). Re-copy it from GA4 → Admin → Data streams.");
  lines.push("  Until it is corrected this provider stays OFF (a typo can never point");
  lines.push("  measurement at someone else's property). See ANALYTICS_SETUP.md §3 step 1.");
} else if (ga4Value) {
  lines.push(`[ok]     NEXT_PUBLIC_GA4_MEASUREMENT_ID (${ga4.source}): ${mask(ga4Value)}`);
} else {
  lines.push(`[missing] NEXT_PUBLIC_GA4_MEASUREMENT_ID (${ga4.source})`);
  lines.push("  Next: create the GA4 web data stream for https://renovixhomeservices.my");
  lines.push("  and set the `G-…` Measurement ID in Vercel → Project → Settings →");
  lines.push("  Environment Variables (Production), then redeploy. ANALYTICS_SETUP.md §3.");
}

if (gtmValue && gtmValid === false && gtmPlaceholder) {
  problems.push("NEXT_PUBLIC_GTM_CONTAINER_ID is a documentation placeholder, not a real container ID");
  lines.push(`[check]  NEXT_PUBLIC_GTM_CONTAINER_ID (${gtm.source}): placeholder shape`);
  lines.push("  Next: every character after the prefix is the same — no container answers");
  lines.push("  to it. Copy the real container ID from tagmanager.google.com → Admin.");
} else if (gtmValue && gtmValid === false) {
  problems.push("NEXT_PUBLIC_GTM_CONTAINER_ID is not a valid container ID");
  lines.push(`[check]  NEXT_PUBLIC_GTM_CONTAINER_ID (${gtm.source}): ${mask(gtmValue)}`);
  lines.push("  Next: a GTM container ID looks like GTM-XXXXXX (4–10 uppercase");
  lines.push("  letters/digits). Re-copy it from tagmanager.google.com.");
} else if (gtmValue) {
  lines.push(`[ok]     NEXT_PUBLIC_GTM_CONTAINER_ID (${gtm.source}): ${mask(gtmValue)}`);
} else {
  lines.push(`[unset]  NEXT_PUBLIC_GTM_CONTAINER_ID (${gtm.source}) — fine: the direct GA4 route is used instead`);
}

/* Same precedence as lib/analytics-config.ts: GTM wins when both are set. */
const mode = gtmValid ? "gtm" : ga4Valid ? "ga4" : "none";

if (mode === "gtm") {
  lines.push("  Route: GOOGLE TAG MANAGER — only gtm.js loads. The container must hold");
  lines.push("  the GA4 tag, triggered by a Custom Event on `page_view` (do NOT also");
  if (ga4Valid) {
    warnings.push("Both the GTM container and a GA4 Measurement ID are set — the direct Google tag stays OFF");
  }
  lines.push("  enable an \"All Pages\" GA4 tag or the initial view doubles). §3 of");
  lines.push("  PHASE_24_ANALYTICS.md has the exact container setup.");
} else if (mode === "ga4") {
  lines.push("  Route: DIRECT GOOGLE TAG — gtag.js loads with the GA4 Measurement ID.");
  lines.push("  Page views and every conversion event are sent by this site's bootstrap;");
  lines.push("  the tag's automatic page_view stays disabled, so nothing double-counts.");
} else {
  lines.push("  Route: NONE — no measurement script loads at all. The site serves the");
  lines.push("  same HTML and CSP it served before measurement was built.");
}
lines.push("");

/* ------------------------------------------------------------------------ */
/* Microsoft Clarity (independent of the Google route)                       */
/* ------------------------------------------------------------------------ */

lines.push("Microsoft Clarity (session recordings)");

const clarity = env("NEXT_PUBLIC_CLARITY_PROJECT_ID");
const clarityValue = clarity.value.trim();

if (!clarityValue) {
  lines.push(`[unset]  NEXT_PUBLIC_CLARITY_PROJECT_ID (${clarity.source}) — recordings stay OFF`);
  lines.push("  Next (optional): create the project at clarity.microsoft.com for");
  lines.push("  renovixhomeservices.my and set the Project ID. Recordings ship with");
  lines.push("  Clarity's default on-screen text masking left ON. ANALYTICS_SETUP.md §3 step 4.");
} else if (!CLARITY_ID_PATTERN.test(clarityValue) || isPlaceholderBody(clarityValue)) {
  problems.push("NEXT_PUBLIC_CLARITY_PROJECT_ID is not a valid Clarity Project ID");
  lines.push(`[check]  NEXT_PUBLIC_CLARITY_PROJECT_ID (${clarity.source}): ${mask(clarityValue)}`);
  lines.push("  Next: a Clarity Project ID is a short alphanumeric string (6–20 chars) —");
  lines.push("  never a placeholder (all one character). Re-copy it from");
  lines.push("  Clarity → Settings → Setup.");
} else {
  lines.push(`[ok]     NEXT_PUBLIC_CLARITY_PROJECT_ID (${clarity.source}): ${mask(clarityValue)}`);
  lines.push("  Loads at browser idle (lazyOnload); default text masking is never disabled.");
}
lines.push("");

/* ------------------------------------------------------------------------ */
/* Google Ads conversions (optional, only if ads are running)                */
/* ------------------------------------------------------------------------ */

lines.push("Google Ads conversions (optional)");

const adsId = env("NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID");
const adsIdValue = adsId.value.trim();
const labels = [
  ["NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL", "quote_form_success"],
  ["NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL", "whatsapp_click"],
  ["NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL", "phone_click"],
];

if (!adsIdValue) {
  lines.push(`[unset]  NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID (${adsId.source}) — no ad conversions fire`);
  lines.push("  Only needed if Google Ads are running. Three actions exist: quote");
  lines.push("  success, WhatsApp click, phone click. ANALYTICS_SETUP.md §3 step 5.");
} else if (!ADS_ID_PATTERN.test(adsIdValue) || isPlaceholderBody(adsIdValue)) {
  problems.push("NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID is not a valid conversion ID");
  lines.push(`[check]  NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID (${adsId.source}): ${mask(adsIdValue)}`);
  lines.push("  Next: a Google Ads conversion ID looks like AW-123456789, and it must not");
  lines.push("  be a placeholder (every character after `AW-` the same) — a placeholder");
  lines.push("  would arm a conversion that can never be attributed.");
} else {
  lines.push(`[ok]     NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID (${adsId.source}): ${mask(adsIdValue)}`);
  for (const [variable, event] of labels) {
    const entry = env(variable);
    const value = entry.value.trim();
    if (!value) {
      lines.push(`[unset]  ${variable} — the ${event} conversion stays disarmed`);
    } else if (!ADS_LABEL_PATTERN.test(value)) {
      problems.push(`${variable} is not a valid conversion label`);
      lines.push(`[check]  ${variable}: ${mask(value)} — labels are 5–100 chars of A–Z a–z 0–9 / _ -`);
    } else {
      lines.push(`[ok]     ${variable}: ${mask(value)} — ${event} counts as a conversion`);
    }
  }
  if (mode === "gtm") {
    lines.push("  Note: in GTM mode conversions are wired inside the container instead,");
    lines.push("  so these labels are not read at all (nothing fires twice).");
  } else if (mode === "none") {
    warnings.push("Google Ads labels are set but no Google delivery route is — conversions cannot fire");
  }
}
lines.push("");

/* ------------------------------------------------------------------------ */
/* Debug logging                                                             */
/* ------------------------------------------------------------------------ */

const debug = env("NEXT_PUBLIC_ANALYTICS_DEBUG");
if (debug.value.trim() === "true") {
  lines.push(`[info]   NEXT_PUBLIC_ANALYTICS_DEBUG=true (${debug.source}) — every event prints to the browser console`);
  if (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production") {
    warnings.push("NEXT_PUBLIC_ANALYTICS_DEBUG=true in a production environment — visitors' consoles log every event");
  }
} else {
  lines.push(`[ok]     NEXT_PUBLIC_ANALYTICS_DEBUG (${debug.source}): off (development logs events anyway)`);
}
lines.push("");

/* ------------------------------------------------------------------------ */
/* Public-prefix mistakes (a non-NEXT_PUBLIC_ ID never reaches the browser)  */
/* ------------------------------------------------------------------------ */

const misnamed = [];
for (const bare of [
  "GA4_MEASUREMENT_ID",
  "GTM_CONTAINER_ID",
  "CLARITY_PROJECT_ID",
  "GOOGLE_ADS_CONVERSION_ID",
]) {
  const bareEntry = env(bare);
  if (bareEntry.value.trim()) {
    misnamed.push([bare, bareEntry.source]);
  }
}

if (misnamed.length > 0) {
  lines.push("Client-side variable names");
  for (const [bare, source] of misnamed) {
    problems.push(`${bare} is set without the NEXT_PUBLIC_ prefix and will never reach the browser`);
    lines.push(`[check]  ${bare} (${source}) is set — client-side measurement only reads`);
    lines.push(`  NEXT_PUBLIC_${bare}. Rename it, or the ID silently does nothing.`);
  }
  lines.push("");
}

/* ------------------------------------------------------------------------ */
/* CSP preview — what the build would allow                                  */
/* ------------------------------------------------------------------------ */

lines.push("Content-Security-Policy effect of this configuration");

const cspScript = [];
const cspConnect = [];
const cspImg = [];
const cspFrame = [];

if (mode !== "none") {
  /* Mirrors analyticsCspSources() exactly — Google's CSP guide for Google
   * Analytics without Ads also requires the tag host in connect-src/img-src
   * and `*.google.com` for the denied-ads Consent Mode pings. Keeping this
   * list identical to lib/analytics-config.ts is pinned by audit-analytics
   * §10; a missing origin here means the browser drops those requests while
   * every other check still passes. */
  cspScript.push("https://www.googletagmanager.com");
  cspConnect.push(
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://*.google.com",
  );
  cspImg.push("https://www.googletagmanager.com", "https://www.google-analytics.com", "https://*.google-analytics.com");
}
if (adsIdValue && ADS_ID_PATTERN.test(adsIdValue) && !isPlaceholderBody(adsIdValue)) {
  cspScript.push("https://www.googleadservices.com", "https://www.google.com");
  cspConnect.push("https://www.google.com", "https://www.google.com.sg", "https://*.g.doubleclick.net");
  cspImg.push("https://www.google.com", "https://www.google.com.sg", "https://*.g.doubleclick.net");
}
if (clarityValue && CLARITY_ID_PATTERN.test(clarityValue) && !isPlaceholderBody(clarityValue)) {
  cspScript.push("https://www.clarity.ms");
  cspConnect.push("https://www.clarity.ms", "https://*.clarity.ms");
  cspImg.push("https://*.clarity.ms");
}
if (gtmValid) {
  cspFrame.push("https://www.googletagmanager.com", "https://tagmanager.google.com");
}

if (cspScript.length === 0) {
  lines.push("  No origin is added — the strict pre-measurement policy ships unchanged.");
} else {
  lines.push(`  script-src  += ${[...new Set(cspScript)].join(" ")}`);
  lines.push(`  connect-src += ${[...new Set(cspConnect)].join(" ")}`);
  lines.push(`  img-src     += ${[...new Set(cspImg)].join(" ")}`);
  if (cspFrame.length > 0) lines.push(`  frame-src    = ${[...new Set(cspFrame)].join(" ")} (GTM Preview only)`);
  lines.push("  Every other directive (default-src 'self', object-src 'none',");
  lines.push("  frame-ancestors 'none', …) stays exactly as it is.");
}
lines.push("");

/* ------------------------------------------------------------------------ */
/* Verdict                                                                   */
/* ------------------------------------------------------------------------ */

for (const warning of warnings) {
  lines.push(`WARNING: ${warning}`);
}
if (warnings.length > 0) lines.push("");

if (problems.length > 0) {
  lines.push("Result: MISCONFIGURED — the value(s) above are rejected at build time, so");
  lines.push("the affected provider stays OFF rather than reporting to a wrong account.");
  lines.push(`Open items (${problems.length}):`);
  for (const problem of problems) lines.push(`  - ${problem}`);
  lines.push("Next: correct the values, redeploy, and re-run this check.");
} else if (mode === "none" && !clarityValue) {
  lines.push("Result: NOT CONFIGURED — no measurement script loads at all. The site is");
  lines.push("byte-for-byte the pre-measurement site: no provider request, no CSP change.");
  lines.push("Next: follow ANALYTICS_SETUP.md §3, redeploy, re-run this check, then");
  lines.push("confirm live data in GA4 Realtime / Clarity (ANALYTICS_SETUP.md §5).");
} else {
  lines.push(
    mode === "gtm"
      ? "Result: CONFIGURED — the GTM container loads and this site pushes plain data-layer events to it."
      : "Result: CONFIGURED — the Google tag loads with the GA4 Measurement ID." +
          (clarityValue ? " Clarity loads at browser idle." : ""),
  );
  lines.push("Next: prove it end-to-end — `npm run verify:analytics:e2e` drives a real");
  lines.push("browser through whatsapp_click, phone_click, quote_form_submit and");
  lines.push("quote_form_success, and ANALYTICS_SETUP.md §5 covers the live-provider");
  lines.push("checks (GA4 Realtime + DebugView, Clarity sessions).");
}

console.log(lines.join("\n"));
