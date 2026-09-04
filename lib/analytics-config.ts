/**
 * Phase 24 — analytics & measurement configuration.
 *
 * Single source of truth for every measurement provider ID. All IDs come from
 * environment variables; nothing in this repository may hardcode a real
 * measurement ID (see `scripts/audit-analytics.mjs`). Every variable is
 * OWNER-PENDING until the business supplies a real value from its own account
 * — fabricated IDs would send data to a stranger's property.
 *
 * This module is intentionally dependency-free and isomorphic: it is imported
 * by `next.config.ts` (for the Content-Security-Policy additions) and by the
 * client-side measurement bootstrap, so it must not touch app-only APIs.
 *
 * A malformed ID is treated as "not configured" (plus a build-time warning in
 * `next.config.ts`) so a typo can never silently point measurement at a wrong
 * account.
 */

/** Matches `G-XXXXXXXXXX` GA4 Measurement IDs (Google allows 6–12 chars). */
const GA4_ID_PATTERN = /^G-[A-Z0-9]{6,12}$/;
/** Matches `GTM-XXXXXX` container IDs (Google allows 4–10 chars). */
const GTM_ID_PATTERN = /^GTM-[A-Z0-9]{4,10}$/;
/** Matches `AW-XXXXXXXXX` Google Ads conversion IDs. */
const ADS_ID_PATTERN = /^AW-\d{8,12}$/;
/** Matches Google Ads conversion labels (alphanumeric, `/`, `_`, `-`). */
const ADS_LABEL_PATTERN = /^[A-Za-z0-9/_-]{5,100}$/;
/** Microsoft Clarity project IDs are short alphanumeric strings. */
const CLARITY_ID_PATTERN = /^[a-z0-9]{6,20}$/i;

type Validated<T> = { value: T | null; warning: string | null };

function validateId(raw: string | undefined, label: string, pattern: RegExp): Validated<string> {
  const trimmed = (raw ?? "").trim();

  if (!trimmed) {
    return { value: null, warning: null };
  }

  if (pattern.test(trimmed)) {
    return { value: trimmed, warning: null };
  }

  return {
    value: null,
    warning: `${label} "${trimmed}" does not look like a valid ID — measurement for this provider stays OFF until it is corrected.`,
  };
}

const ga4 = validateId(
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  "NEXT_PUBLIC_GA4_MEASUREMENT_ID",
  GA4_ID_PATTERN,
);
const gtm = validateId(
  process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
  "NEXT_PUBLIC_GTM_CONTAINER_ID",
  GTM_ID_PATTERN,
);
const adsId = validateId(
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID,
  "NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID",
  ADS_ID_PATTERN,
);
const adsQuoteLabel = validateId(
  process.env.NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL,
  "NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL",
  ADS_LABEL_PATTERN,
);
const adsWhatsAppLabel = validateId(
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL,
  "NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL",
  ADS_LABEL_PATTERN,
);
const adsPhoneLabel = validateId(
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL,
  "NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL",
  ADS_LABEL_PATTERN,
);
const clarity = validateId(
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  "NEXT_PUBLIC_CLARITY_PROJECT_ID",
  CLARITY_ID_PATTERN,
);

/**
 * Google Ads conversion labels, keyed by the site conversion event they map
 * to. Only the three business-critical conversions exist; a conversion fires
 * only when the shared ID *and* that event's label are both configured.
 */
export const googleAdsConversionLabels = {
  quote_form_success: adsQuoteLabel.value,
  whatsapp_click: adsWhatsAppLabel.value,
  phone_click: adsPhoneLabel.value,
} as const;

/**
 * How GA4 measurement reaches Google. Exactly one route is active:
 *
 * - `"ga4"` — the Google tag (gtag.js) is loaded directly with the GA4
 *   Measurement ID. Page views and events are sent by this site's bootstrap.
 * - `"gtm"` — Google Tag Manager loads instead, and GA4 (plus any other tags)
 *   is configured inside the container by the owner. This site pushes plain
 *   dataLayer events; the Google tag is NOT also loaded, so nothing is sent
 *   twice.
 * - `"none"` — no provider configured (the current state): no measurement
 *   script loads at all and the site behaves exactly as before Phase 24.
 *
 * A GTM container takes precedence when both IDs are present, because GTM is
 * then the intended delivery route for GA4 — the direct Google tag stays off.
 */
export const analyticsMode: "ga4" | "gtm" | "none" = gtm.value
  ? "gtm"
  : ga4.value
    ? "ga4"
    : "none";

export const analyticsConfig = {
  /** GA4 Measurement ID (`G-…`) or null. */
  ga4MeasurementId: ga4.value,
  /** GTM container ID (`GTM-…`) or null. */
  gtmContainerId: gtm.value,
  /** Google Ads conversion ID (`AW-…`) or null. */
  googleAdsConversionId: adsId.value,
  /** Per-event Google Ads conversion labels (null = conversion not armed). */
  googleAdsConversionLabels,
  /** Microsoft Clarity project ID or null. */
  clarityProjectId: clarity.value,
  /**
   * Verbose console logging of every measurement action in any environment
   * (`NEXT_PUBLIC_ANALYTICS_DEBUG=true`). Development logs it by default.
   */
  debug: process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true",
} as const;

/** Build-time warnings for malformed (present but invalid) IDs. */
export const analyticsConfigWarnings = [
  ga4.warning,
  gtm.warning,
  adsId.warning,
  adsQuoteLabel.warning,
  adsWhatsAppLabel.warning,
  adsPhoneLabel.warning,
  clarity.warning,
  analyticsMode === "gtm" && ga4.value
    ? "Both NEXT_PUBLIC_GTM_CONTAINER_ID and NEXT_PUBLIC_GA4_MEASUREMENT_ID are set — the Google tag is NOT loaded directly; GA4 runs through Google Tag Manager only, so the container must contain the GA4 tag."
    : null,
].filter((warning): warning is string => Boolean(warning));

/**
 * Content-Security-Policy origins that must be allowed for the configured
 * providers. Every array is empty while no provider is configured, which
 * keeps the pre-Phase-24 strict CSP byte-for-byte identical until the owner
 * activates a service.
 */
export function analyticsCspSources(): {
  scriptSources: string[];
  connectSources: string[];
  imgSources: string[];
  frameSources: string[];
} {
  const usesGoogleTag = analyticsMode !== "none";
  const usesGoogleAds = Boolean(adsId.value);

  if (!usesGoogleTag && !clarity.value) {
    return { scriptSources: [], connectSources: [], imgSources: [], frameSources: [] };
  }

  const scriptSources: string[] = [];
  const connectSources: string[] = [];
  const imgSources: string[] = [];
  const frameSources: string[] = [];

  if (usesGoogleTag) {
    // gtag.js and gtm.js are both served from googletagmanager.com.
    scriptSources.push("https://www.googletagmanager.com");
    connectSources.push(
      "https://www.google-analytics.com",
      "https://*.google-analytics.com",
      "https://*.analytics.google.com",
    );
    imgSources.push("https://www.google-analytics.com", "https://*.google-analytics.com");
  }

  if (usesGoogleAds) {
    // Google Ads conversion tracking loads conversion linker code and reports
    // through googleadservices / google.com / doubleclick beacons.
    scriptSources.push("https://www.googleadservices.com", "https://www.google.com");
    connectSources.push(
      "https://www.google.com",
      "https://www.google.com.sg",
      "https://*.g.doubleclick.net",
    );
    imgSources.push("https://www.google.com", "https://www.google.com.sg", "https://*.g.doubleclick.net");
  }

  if (clarity.value) {
    scriptSources.push("https://www.clarity.ms");
    connectSources.push("https://www.clarity.ms");
  }

  if (gtm.value) {
    // Only needed for GTM's own preview/debug pane, never for tracking
    // itself — but without it the owner cannot use GTM Preview to verify
    // their container, which Phase 24 documentation asks them to do.
    frameSources.push("https://www.googletagmanager.com", "https://tagmanager.google.com");
  }

  return {
    scriptSources: [...new Set(scriptSources)],
    connectSources: [...new Set(connectSources)],
    imgSources: [...new Set(imgSources)],
    frameSources: [...new Set(frameSources)],
  };
}
