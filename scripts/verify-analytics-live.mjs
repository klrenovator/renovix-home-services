#!/usr/bin/env node
/**
 * Lead-generation Task 2.2 (follow-up) — live measurement check of the
 * deployed site.
 *
 *   npm run verify:analytics:live
 *   npm run verify:analytics:live -- --expect G-ABC1234567
 *   npm run verify:analytics:live -- --url https://renovix-home-services-git-branch.vercel.app
 *   npm run verify:analytics:live -- --json
 *
 * Answers the only two questions that matter when a measurement dashboard
 * stays empty:
 *
 *   1. Is a measurement provider actually configured in the *deployed* build?
 *   2. Which ID does the deployed site report to?
 *
 * Why a dedicated script exists: `next.config.ts` widens the
 * Content-Security-Policy only for providers whose ID is present at build
 * time, so the served CSP already proves whether a provider is configured —
 * and because `components/analytics/Measurement.tsx` deliberately injects the
 * provider script *after* hydration (Consent Mode defaults must be pushed
 * before any provider code runs), the ID itself is not in the served HTML: it
 * is baked into the Next.js client chunks. This script therefore
 *
 * - reads the served CSP and reports what it proves,
 * - lists every Next.js `_next/static` script the page references,
 * - downloads them (capped) and extracts the inlined measurement
 *   configuration — the value each `NEXT_PUBLIC_*` variable was inlined with,
 *   read from the `validateId(value, "VARIABLE", …)` call the app builds, with
 *   the `ga4MeasurementId` / `gtmContainerId` / `clarityProjectId` /
 *   `googleAdsConversionId` properties and the raw ID shapes as fallbacks —
 *   plus the Phase-24 event names,
 * - and prints the GA4 Measurement ID the live site actually reports to,
 *   flagging documentation-placeholder IDs (which load a tag that can never
 *   report — the classic "the ID is installed but the dashboard is empty").
 *
 * Honesty rules kept by this script:
 *
 * - It only *reads* public URLs. No writes, no credentials, no cookies, no
 *   PII; the IDs it prints are public values that already ship to every
 *   visitor's browser.
 * - It never claims data is arriving. Only the provider's own UI can show
 *   that (`ANALYTICS_SETUP.md` §5.2–§5.3).
 * - If the network is unreachable (a sandbox without egress, a laptop behind a
 *   captive proxy) it says so and exits 0 — "could not check" must never be
 *   mistaken for "checked, and everything is fine".
 * - It exits 1 only for a defect it actually observed in the live deployment:
 *   an `--expect` mismatch, a placeholder ID, or an ID whose required CSP
 *   origin is missing (which would block the tag in a real browser).
 */

const DEFAULT_BASE = "https://renovixhomeservices.my";
/** Page whose assets are inspected: the default locale, always published. */
const DEFAULT_PATH = "/en/";
/** Asset-fetch cap. The layout chunk carries the analytics config; the rest
 * is scanned for the event layer, so a healthy sample is a few dozen files. */
const DEFAULT_MAX_ASSETS = 30;
/** Total bytes downloaded across all assets. */
const DEFAULT_MAX_BYTES = 6 * 1024 * 1024;
/** Per-request timeout. */
const DEFAULT_TIMEOUT_SECONDS = 20;

/* ------------------------------------------------------------------------ */
/* Arguments                                                                 */
/* ------------------------------------------------------------------------ */

function parseArgs(argv) {
  const options = {
    base: DEFAULT_BASE,
    expect: null,
    json: false,
    maxAssets: DEFAULT_MAX_ASSETS,
    maxBytes: DEFAULT_MAX_BYTES,
    timeoutMs: DEFAULT_TIMEOUT_SECONDS * 1000,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === "--json") {
      options.json = true;
    } else if (arg === "--url" && next) {
      options.base = next.replace(/\/+$/, "");
      index += 1;
    } else if (arg === "--expect" && next) {
      options.expect = next.trim();
      index += 1;
    } else if (arg === "--max-assets" && next) {
      options.maxAssets = Number.parseInt(next, 10);
      index += 1;
    } else if (arg === "--timeout" && next) {
      options.timeoutMs = Number.parseFloat(next) * 1000;
      index += 1;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else {
      options.unknown = arg;
    }
  }

  return options;
}

const options = parseArgs(process.argv.slice(2));

if (options.help) {
  console.log(`Renovix Home Services — live measurement check

  npm run verify:analytics:live                        check the production site
  npm run verify:analytics:live -- --expect G-…        also compare with the ID from GA4
  npm run verify:analytics:live -- --url <base>        check a preview deployment
  npm run verify:analytics:live -- --json              machine-readable output

Read-only: fetches the deployed page and its JavaScript assets. Never writes,
never sends measurement data, never needs a credential.`);
  process.exit(0);
}

if (options.unknown) {
  console.error(`Unknown argument: ${options.unknown} (try --help)`);
  process.exit(2);
}

/* ------------------------------------------------------------------------ */
/* Fetching                                                                  */
/* ------------------------------------------------------------------------ */

const USER_AGENT =
  "renovix-analytics-live-check/1.0 (+https://renovixhomeservices.my/; read-only measurement verification)";

async function getText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeoutMs);

  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": USER_AGENT, accept: "text/html,application/javascript,text/javascript,*/*" },
    });
    const body = await response.text();
    return { ok: response.ok, status: response.status, headers: response.headers, body, url: response.url };
  } finally {
    clearTimeout(timer);
  }
}

/* ------------------------------------------------------------------------ */
/* Extractors                                                                */
/* ------------------------------------------------------------------------ */

/** Provider references that can appear directly in served HTML (if ever SSR'd). */
function refsInMarkup(html) {
  const ga4 = html.match(/googletagmanager\.com\/gtag\/js\?id=([A-Za-z0-9-]+)/)?.[1] ?? null;
  const gtm = html.match(/googletagmanager\.com\/gtm\.js\?id=([A-Za-z0-9-]+)/)?.[1] ?? null;
  const clarity = html.match(/clarity\.ms\/tag\/([A-Za-z0-9]+)/)?.[1] ?? null;
  return { ga4, gtm, clarity };
}

/** Every Next.js JavaScript asset the document references (deduped, in order). */
function assetUrls(html, base) {
  const found = new Set();
  for (const match of html.matchAll(/["'\\/](\/_next\/static\/[^"'\\\s)]+?\.js)/g)) {
    found.add(match[1]);
  }
  return [...found].map((path) => `${base}${path}`);
}

/** Reads `property:"value"` out of minified client code. */
function inlinedValue(source, property) {
  const match = source.match(new RegExp(`${property}\\s*:\\s*"([^"]*)"`));
  return match && match[1] ? match[1] : null;
}

/**
 * The value a `NEXT_PUBLIC_*` variable was inlined with. Every ID in this app
 * flows through `validateId(value, "VARIABLE", pattern)` in
 * `lib/analytics-config.ts`, and Next.js inlines public variables at build
 * time — so in the deployed bundle the literal sits immediately before its own
 * variable name, whatever the minifier does to the object it later lands in.
 */
function configuredLiteral(source, variable) {
  const match = source.match(
    new RegExp(`["'\`]([^"'\`(),;]{1,64})["'\`]\\s*,\\s*["']${variable}["']`),
  );
  return match ? match[1] : null;
}

/** Every quoted literal in the bundle that has a provider's ID shape. */
function quotedIds(source, pattern) {
  const found = new Set();
  for (const match of source.matchAll(pattern)) {
    found.add(match[1]);
  }
  return [...found];
}

/** Placeholder shape: every character after the prefix is the same. */
function isPlaceholderBody(value) {
  const separator = value.lastIndexOf("-");
  const body = separator >= 0 ? value.slice(separator + 1) : value;
  return body.length > 0 && new Set(body).size === 1;
}

function cspDirectives(header) {
  const directives = {};
  for (const part of (header ?? "").split(";")) {
    const [name, ...values] = part.trim().split(/\s+/);
    if (name) directives[name] = values;
  }
  return directives;
}

/* ------------------------------------------------------------------------ */
/* Report                                                                    */
/* ------------------------------------------------------------------------ */

const lines = [];
const defects = [];

function line(text = "") {
  lines.push(text);
}

line("Renovix Home Services — live measurement check");
line(`Target: ${options.base}${DEFAULT_PATH}`);
line("(read-only: no writes, no credentials, no measurement data sent)");
line("");

let page;
try {
  page = await getText(`${options.base}${DEFAULT_PATH}`);
} catch (error) {
  const reason = error?.cause?.code ?? error?.name ?? String(error);
  line(`Could not reach the deployed site (${reason}).`);
  line("");
  line("This is NOT a verdict. No network egress, a blocked hostname or a captive");
  line("proxy all look like this. Re-run from a machine that can open");
  line(`${options.base}${DEFAULT_PATH} in a browser.`);
  console.log(lines.join("\n"));
  process.exit(0);
}

const csp = page.headers.get("content-security-policy");
const directives = cspDirectives(csp);
const markupRefs = refsInMarkup(page.body);
const assets = assetUrls(page.body, options.base);

line("Deployment");
line(`  HTTP status           : ${page.status}${page.ok ? "" : " (NOT ok)"}`);
line(`  Server                : ${page.headers.get("server") ?? "(none reported)"}`);
line(`  Cache                 : ${page.headers.get("x-vercel-cache") ?? "(no CDN header)"}`);
line(`  JavaScript assets seen: ${assets.length}`);
line("");

/* ---- provider references in the markup --------------------------------- */

line("Provider references in the served HTML");
line(`  gtag.js (GA4)         : ${markupRefs.ga4 ?? "not in markup"}`);
line(`  gtm.js (Tag Manager)  : ${markupRefs.gtm ?? "not in markup"}`);
line(`  Clarity               : ${markupRefs.clarity ?? "not in markup"}`);
line(
  "  Note: the tag is injected after hydration by design (Consent Mode defaults",
);
line("  are pushed before any provider code runs), so \"not in markup\" is expected");
line("  even when measurement is live. The ID is read from the client bundles below.");
line("");

/* ---- client bundles ---------------------------------------------------- */

const bundles = [];
let downloadedBytes = 0;
let skippedByBudget = 0;
let assetFailures = 0;

for (const url of assets.slice(0, Math.max(0, options.maxAssets))) {
  let asset;
  try {
    asset = await getText(url);
  } catch {
    assetFailures += 1;
    continue;
  }

  downloadedBytes += Buffer.byteLength(asset.body, "utf8");

  if (downloadedBytes > options.maxBytes) {
    skippedByBudget = assets.length - bundles.length - assetFailures;
    break;
  }

  bundles.push({ url, body: asset.body });
}

const bundleText = bundles.map((b) => b.body).join("\n");

const ga4Candidates = quotedIds(bundleText, /["'`](G-[A-Z0-9]{6,12})["'`]/g);
const gtmCandidates = quotedIds(bundleText, /["'`](GTM-[A-Z0-9]{4,10})["'`]/g);
const adsCandidates = quotedIds(bundleText, /["'`](AW-\d{8,12})["'`]/g);

const ga4Id =
  configuredLiteral(bundleText, "NEXT_PUBLIC_GA4_MEASUREMENT_ID") ??
  bundles.map((b) => inlinedValue(b.body, "ga4MeasurementId")).find(Boolean) ??
  ga4Candidates[0] ??
  markupRefs.ga4;
const gtmId =
  configuredLiteral(bundleText, "NEXT_PUBLIC_GTM_CONTAINER_ID") ??
  bundles.map((b) => inlinedValue(b.body, "gtmContainerId")).find(Boolean) ??
  gtmCandidates[0] ??
  markupRefs.gtm;
const clarityId =
  configuredLiteral(bundleText, "NEXT_PUBLIC_CLARITY_PROJECT_ID") ??
  bundles.map((b) => inlinedValue(b.body, "clarityProjectId")).find(Boolean) ??
  markupRefs.clarity;
const adsId =
  configuredLiteral(bundleText, "NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID") ??
  bundles.map((b) => inlinedValue(b.body, "googleAdsConversionId")).find(Boolean) ??
  adsCandidates[0] ??
  null;
const eventLayer = ["whatsapp_click", "quote_form_success", "quote_form_submit", "page_view"].filter(
  (name) => bundleText.includes(name),
);

line("Client bundles scanned");
line(`  Downloaded            : ${bundles.length} asset(s), ${Math.round(downloadedBytes / 1024)} KB`);
if (assetFailures > 0) line(`  Unreachable assets    : ${assetFailures}`);
if (skippedByBudget > 0) line(`  Skipped (budget)      : ${skippedByBudget}`);
line(`  GA4 Measurement ID    : ${ga4Id ?? "none found"}`);
line(`  GTM container ID      : ${gtmId ?? "none found"}`);
line(`  Clarity project ID    : ${clarityId ?? "none found"}`);
line(`  Google Ads ID         : ${adsId ?? "none found"}`);
line(
  `  Phase-24 event layer  : ${
    eventLayer.length > 0 ? `present (${eventLayer.join(", ")})` : "NOT found in the scanned assets"
  }`,
);
line("");

/* ---- CSP --------------------------------------------------------------- */

const scriptSrc = directives["script-src"] ?? [];
const connectSrc = directives["connect-src"] ?? [];
const imgSrc = directives["img-src"] ?? [];
const frameSrc = directives["frame-src"] ?? [];

line("Content-Security-Policy derived from the deployed build");
if (!csp) {
  line("  No Content-Security-Policy header was served.");
} else {
  line(`  script-src            : ${scriptSrc.join(" ") || "(empty)"}`);
  line(`  connect-src           : ${connectSrc.join(" ") || "(empty)"}`);
  if (imgSrc.length > 0) line(`  img-src               : ${imgSrc.join(" ")}`);
  if (frameSrc.length > 0) line(`  frame-src             : ${frameSrc.join(" ")}`);
}
line("");

/*
 * Completeness against the provider's own documentation. A CSP can allow the
 * tag *script* and still drop the tag's data traffic — the failure looks
 * exactly like "GA4 is installed but the dashboard is empty". Google's guide
 * for Google Analytics without Ads
 * (https://developers.google.com/tag-platform/security/guides/csp) requires
 * the tag host in connect-src and img-src as well, plus `*.google.com` for the
 * Consent Mode pings this site sends while ad storage is denied; Microsoft
 * lists `*.clarity.ms` in connect-src for Clarity.
 */
/* Exact source expressions, not suffix guessing: a policy that allows
 * `https://*.analytics.google.com` does not allow `https://www.google.com`,
 * so the requirement is satisfied only by one of the accepted literals. */
const cspRequirements = [];
if (csp && /google-analytics\.com|googletagmanager\.com/.test(csp)) {
  cspRequirements.push(
    ["script-src", ["https://www.googletagmanager.com"], "the Google tag itself"],
    ["connect-src", ["https://www.googletagmanager.com"], "the tag's own config and beacon traffic"],
    [
      "connect-src",
      ["https://*.google-analytics.com", "https://www.google-analytics.com", "https://region1.google-analytics.com"],
      "GA4 hit delivery",
    ],
    ["connect-src", ["https://*.google.com", "https://www.google.com"], "Consent Mode pings (ad storage denied)"],
    ["img-src", ["https://www.googletagmanager.com"], "the image-beacon fallback"],
    [
      "img-src",
      ["https://*.google-analytics.com", "https://www.google-analytics.com"],
      "the image-beacon fallback",
    ],
  );
}
if (csp && /clarity\.ms/.test(csp)) {
  cspRequirements.push(
    ["script-src", ["https://www.clarity.ms", "https://*.clarity.ms"], "the Clarity tag"],
    ["connect-src", ["https://*.clarity.ms", "https://www.clarity.ms"], "Clarity session uploads"],
  );
}

const cspSourcesByDirective = {
  "script-src": scriptSrc,
  "connect-src": connectSrc,
  "img-src": imgSrc,
};

const missingCsp = cspRequirements.filter(([directive, accepted]) => {
  const served = (cspSourcesByDirective[directive] ?? []).map((value) => value.replace(/\/$/, ""));
  return !accepted.some((wanted) => served.includes(wanted));
});

if (cspRequirements.length > 0) {
  if (missingCsp.length === 0) {
    line(`CSP completeness      : complete (${cspRequirements.length} documented origins present)`);
  } else {
    line(`CSP completeness      : INCOMPLETE — ${missingCsp.length} documented origin(s) missing`);
    for (const [directive, accepted, purpose] of missingCsp) {
      line(`  ✗ ${directive}: ${accepted.join(" or ")} — ${purpose}`);
    }
    for (const [directive, accepted, purpose] of missingCsp) {
      defects.push(
        `the deployed Content-Security-Policy does not allow ${accepted[0]} in ${directive} (${purpose}) — ` +
          `the browser drops those requests silently, so the tag loads while nothing is collected. ` +
          `Google/Microsoft document this origin; see ANALYTICS_SETUP.md §6.2 and redeploy after the fix`,
      );
    }
  }
  line("");
}

/* ---- verdict ----------------------------------------------------------- */

/* Several distinct IDs of one kind in the bundles means the build carries a
 * configuration nobody can reason about — say so instead of picking one. */
for (const [label, candidates] of [
  ["GA4 Measurement IDs", ga4Candidates],
  ["GTM container IDs", gtmCandidates],
  ["Google Ads IDs", adsCandidates],
]) {
  if (candidates.length > 1) {
    defects.push(`the deployed bundles mention several ${label} (${candidates.join(", ")}) — only one can be live`);
  }
}

line("Verdict");

/*
 * The Content-Security-Policy is the ground truth for whether a provider is
 * ACTIVE, because this repository builds it from the values that passed
 * validation. A variable can be inlined into the bundle and still be rejected
 * (a placeholder, a typo), in which case no tag loads at all — that difference
 * is exactly what an owner staring at an empty dashboard needs to see.
 */
const cspAllowsGoogleTag = scriptSrc.includes("https://www.googletagmanager.com");
const cspAllowsGoogleCollect = connectSrc.some((src) => src.includes("google-analytics"));
const cspAllowsClarity = scriptSrc.includes("https://www.clarity.ms");

const suppliedGoogleId = ga4Id ?? gtmId ?? null;
const googleActive = cspAllowsGoogleTag || Boolean(markupRefs.ga4 || markupRefs.gtm);

if (googleActive) {
  const route = gtmId ? "Google Tag Manager" : "the direct Google tag (ga4)";
  line(`  A Google measurement provider IS active in the deployed build: ${route}.`);
  if (ga4Id) line(`  Live GA4 Measurement ID: ${ga4Id}`);
  if (gtmId) line(`  Live GTM container ID  : ${gtmId}`);
  line("");
  line("  What this proves: the deployment was built with a measurement ID that passed");
  line("  validation, and this is the ID every visitor's browser reports to.");
  line("");
  line("  What this does not prove: that the ID belongs to the GA4 property you are");
  line("  looking at. If GA4 stays empty, compare the ID above with");
  line("  GA4 → Admin → Data streams: they must match character for character, in");
  line("  the same Google account/property. ANALYTICS_SETUP.md §6.1 then ranks what");
  line("  is left — Realtime keeps only the last 30 minutes, the property open in");
  line("  Reports may not be the one this ID belongs to, the property's data");
  line("  collection toggle, Active data filters, a local ad- or DNS-level blocker,");
  line("  and the plain fact that a site with no real visitors has an empty");
  line("  dashboard.");

  if (!cspAllowsGoogleCollect && ga4Id) {
    defects.push("GA4 is configured but the CSP connect-src blocks google-analytics.com — collection requests would be blocked");
  }
  if (ga4Id && isPlaceholderBody(ga4Id)) {
    defects.push(
      `the deployed GA4 ID (${ga4Id}) is a documentation placeholder — it can never report, so every GA4 report stays empty`,
    );
  }
  if (gtmId && isPlaceholderBody(gtmId)) {
    defects.push(`the deployed GTM container ID (${gtmId}) is a documentation placeholder — no container answers to it`);
  }
} else if (suppliedGoogleId) {
  line("  A Google measurement ID was supplied at build time, but the deployed");
  line(`  Content-Security-Policy shows the provider stayed OFF: ${suppliedGoogleId}`);
  line("");
  if (isPlaceholderBody(suppliedGoogleId)) {
    line("  Reason: it is a documentation placeholder — every character after the prefix");
    line("  is the same. It could never report even if it loaded, so this is exactly the");
    line("  \"the ID is installed but GA4 shows no data\" state, caught before it wastes");
    line("  anyone's afternoon.");
    defects.push(
      `the GA4 value supplied (${suppliedGoogleId}) is a documentation placeholder — every GA4 report stays empty until the real Measurement ID is set in Vercel and the site is redeployed`,
    );
  } else {
    line("  Reason: the value was rejected by the build's format validation (a typo, a");
    line("  stray character, or a value that is not a Measurement ID at all). No tag");
    line("  loads, so nothing can reach GA4.");
    defects.push(
      `the GA4 value supplied (${suppliedGoogleId}) was rejected at build time — no measurement is running`,
    );
  }
  line("");
  line("  Next: correct NEXT_PUBLIC_GA4_MEASUREMENT_ID in Vercel → Project → Settings");
  line("  → Environment Variables (Production), redeploy, then re-run this check.");
  line("  ANALYTICS_SETUP.md §3 documents the whole path.");
} else if (cspAllowsClarity || markupRefs.clarity || clarityId) {
  line("  Only Microsoft Clarity (not GA4) is active in the deployed build.");
  if (!cspAllowsClarity) {
    defects.push("Clarity is configured but the CSP does not allow clarity.ms — recordings would be blocked");
  }
} else {
  line("  NO measurement provider is active in the deployed build.");
  line("");
  line("  The served CSP carries none of the provider origins, which is how this");
  line("  codebase builds when the ID variables are empty or malformed — the site");
  line("  behaves exactly as it did before measurement was added.");
  line("");
  line("  Next: set NEXT_PUBLIC_GA4_MEASUREMENT_ID (or NEXT_PUBLIC_GTM_CONTAINER_ID)");
  line("  in Vercel → Project → Settings → Environment Variables for **Production**,");
  line("  redeploy, then re-run this check. ANALYTICS_SETUP.md §3.");
}

if (cspAllowsClarity || clarityId) {
  line("");
  line(`  Microsoft Clarity: active (${clarityId ?? "ID not readable from the bundles"}) —`);
  line("  check Recordings after a few real sessions (ANALYTICS_SETUP.md §5.3).");
} else if (googleActive) {
  line("");
  line("  Microsoft Clarity: not configured (optional). Project setup: §3 step 4.");
}

/* ---- expectation ------------------------------------------------------- */

if (options.expect) {
  const expected = options.expect;
  const served = ga4Id ?? gtmId;
  line("");
  line(`Expectation check: --expect ${expected}`);

  if (!served) {
    defects.push(`--expect ${expected} was given but the deployed build carries no Google measurement ID at all`);
  } else if (served.toUpperCase() === expected.toUpperCase()) {
    line(`  MATCH — the deployed site reports to ${expected}.`);
    line("  The deployment side is therefore correct: the tag loads and this is the ID");
    line("  the property owns. If GA4 still looks empty, work through");
    line("  ANALYTICS_SETUP.md §6.1 in this order — Realtime keeps only the last 30");
    line("  minutes (check it while on the site); the property open in Reports must be");
    line("  the one whose Data streams screen shows this ID; its Admin → Data");
    line("  collection toggle must be ON; no Active data filter may exclude your");
    line("  traffic; your browser or DNS must not be blocking Google (re-test from a");
    line("  phone on mobile data); and a site with no real visitors has an empty");
    line("  dashboard by definition.");
    line("  One-minute test that says which side is at fault: DevTools → Network →");
    line("  filter `collect` → reload — a 204 response to google-analytics.com/g/collect");
    line("  carrying this ID means Google received the hit.");
  } else {
    defects.push(`the deployed site reports to ${served}, not ${expected} — the two must match`);
  }
}

if (defects.length > 0) {
  line("");
  line("Defects observed:");
  for (const defect of defects) line(`  ✗ ${defect}`);
}

line("");
line("Only your own GA4 (and Clarity) UI can show data arriving — §5.2–§5.3 of");
line("ANALYTICS_SETUP.md. This script checks the deployment, nothing else.");

/* ------------------------------------------------------------------------ */
/* Output                                                                    */
/* ------------------------------------------------------------------------ */

if (options.json) {
  console.log(
    JSON.stringify(
      {
        target: `${options.base}${DEFAULT_PATH}`,
        status: page.status,
        csp: csp ?? null,
        markupRefs,
        assetsSeen: assets.length,
        assetsScanned: bundles.length,
        ga4MeasurementId: ga4Id,
        gtmContainerId: gtmId,
        clarityProjectId: clarityId,
        googleAdsConversionId: adsId,
        eventLayer,
        expect: options.expect,
        defects,
      },
      null,
      2,
    ),
  );
} else {
  console.log(lines.join("\n"));
}

process.exit(defects.length > 0 ? 1 : 0);
