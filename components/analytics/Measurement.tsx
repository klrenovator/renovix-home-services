"use client";

/**
 * Phase 24 — measurement bootstrap. A single, tiny client component mounted
 * once from the locale root layout. It:
 *
 * 1. loads exactly one Google delivery route — either the Google tag (gtag.js)
 *    with the GA4 Measurement ID, OR a Google Tag Manager container, never
 *    both (`lib/analytics-config.ts` enforces the exclusivity) — plus,
 *    independently, Microsoft Clarity when its project ID exists;
 * 2. pushes Google Consent Mode defaults before any provider code runs:
 *    first-party analytics on, every advertising signal off;
 * 3. sends `page_view` exactly once per page (initial load and every client
 *    navigation), with the automatic page view disabled so nothing is
 *    double-counted;
 * 4. registers the provider sink for the site's conversion events
 *    (lib/analytics.ts) and replays events recorded before mount, once;
 * 5. tracks WhatsApp / phone / email clicks and explicit CTA data attributes
 *    through one delegated document listener — no per-link client components;
 * 6. reports Core Web Vitals (LCP, INP, CLS) plus FCP and TTFB as
 *    non-interaction `web_vitals` events.
 *
 * With no provider configured (the current OWNER-PENDING state) no external
 * script loads at all; the component still powers dev-mode event logging and
 * the Web Vitals console output.
 */

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import {
  analyticsConfig,
  analyticsMode,
  googleAdsConversionLabels,
} from "@/lib/analytics-config";
import {
  getQueuedConversionEvents,
  setConversionEventSink,
  trackConversionEvent,
  type ConversionEventRecord,
  type ConversionEventSink,
} from "@/lib/analytics";

/* ------------------------------------------------------------------------ */
/* Provider plumbing (module scope — runs before any provider script loads)  */
/* ------------------------------------------------------------------------ */

declare global {
  interface Window {
    dataLayer?: unknown[];
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

function dataLayer(): unknown[] {
  return (window.dataLayer ??= []);
}

/** gtag.js-style command, e.g. ["event", name, params] / ["config", id, opts]. */
function pushCommand(command: unknown[]): void {
  dataLayer().push(command);
}

/** GTM-style event object, e.g. { event: name, ...params }. */
function pushDataLayerEvent(entry: Record<string, unknown>): void {
  dataLayer().push(entry);
}

/**
 * Consent Mode defaults, pushed before any tag executes: aggregate
 * first-party measurement only, every advertising purpose denied. GA4 is
 * configured with Google signals and ad personalization off, and this site
 * never sends PII to measurement (lib/analytics.ts allowlists context), so
 * no consent banner is required for this baseline. A future CMP can call
 * `gtag("consent", "update", …)` / push an update to the data layer.
 */
function pushConsentDefaults(): void {
  pushCommand([
    "consent",
    "default",
    {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    },
  ]);
}

/**
 * Module-scope bootstrap: consent first, then the delivery-route init, then
 * (separately) the Clarity queue shim. Module code executes when this chunk
 * loads, which is always before the `afterInteractive`/`lazyOnload` script
 * tags below are injected, so the ordering guarantees hold without any
 * inline HTML snippets.
 */
if (typeof window !== "undefined") {
  pushConsentDefaults();

  if (analyticsMode === "ga4" && analyticsConfig.ga4MeasurementId) {
    pushCommand(["js", new Date()]);
    // send_page_view: false — page views are sent once per route by this
    // component, so the tag's automatic initial page view would be a
    // duplicate. Google signals stay off (no cross-site audience building).
    pushCommand([
      "config",
      analyticsConfig.ga4MeasurementId,
      {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      },
    ]);
  } else if (analyticsMode === "gtm" && analyticsConfig.gtmContainerId) {
    dataLayer().push({ "gtm.start": Date.now(), event: "gtm.js" });
  }

  if (analyticsConfig.clarityProjectId) {
    // Official Clarity queue shim so early calls are replayed once the tag
    // loads. Clarity's default text masking is never disabled.
    window.clarity ??= (...args: unknown[]) => {
      (window.clarity!.q ??= []).push(args);
    };
  }
}

function sendProviderEvent(name: string, params: Record<string, unknown>): void {
  if (analyticsMode === "ga4") {
    pushCommand(["event", name, params]);
  } else if (analyticsMode === "gtm") {
    pushDataLayerEvent({ event: name, ...params });
  }
}

/** Events already replayed/forwarded — guards React strict-mode double runs. */
const forwardedRecords = new WeakSet<ConversionEventRecord>();

function makeSink(): ConversionEventSink {
  const adsId = analyticsConfig.googleAdsConversionId;

  return (record) => {
    sendProviderEvent(record.event, { ...record.context });

    // Google Ads conversions (Google-tag mode). In GTM mode conversions are
    // wired inside the container on our event names instead — see
    // PHASE_24_ANALYTICS.md — so nothing fires twice.
    const label =
      adsId &&
      record.event in googleAdsConversionLabels &&
      googleAdsConversionLabels[record.event as keyof typeof googleAdsConversionLabels];

    if (analyticsMode === "ga4" && adsId && label) {
      pushCommand(["event", "conversion", { send_to: `${adsId}/${label}` }]);
    }
  };
}

/* ------------------------------------------------------------------------ */
/* Page views                                                                */
/* ------------------------------------------------------------------------ */

/** Last page_view path+query sent this session; dedupes remounts. */
let lastSentPageView: string | null = null;

function sendPageView(pathname: string): void {
  const location = window.location;
  const pathWithQuery = `${pathname}${location.search}`;

  if (pathWithQuery === lastSentPageView) {
    return;
  }

  const referrer = lastSentPageView
    ? `${location.origin}${lastSentPageView}`
    : document.referrer || undefined;

  lastSentPageView = pathWithQuery;

  sendProviderEvent("page_view", {
    page_title: document.title,
    page_location: `${location.origin}${pathWithQuery}`,
    page_path: pathWithQuery,
    ...(referrer ? { page_referrer: referrer } : {}),
    language: (document.documentElement.lang || "en").slice(0, 2),
  });
}

/* ------------------------------------------------------------------------ */
/* Core Web Vitals                                                           */
/* ------------------------------------------------------------------------ */

const WEB_VITAL_METRICS = new Set(["LCP", "INP", "CLS", "FCP", "TTFB"]);
/** One report per metric per page load (the hook can re-deliver). */
const reportedVitals = new Set<string>();

/** Stable callback identity (required by useReportWebVitals to avoid re-reports). */
type WebVitalMetric = Parameters<Parameters<typeof useReportWebVitals>[0]>[0];

const handleWebVitals = (metric: WebVitalMetric): void => {
  if (!WEB_VITAL_METRICS.has(metric.name) || reportedVitals.has(metric.id)) {
    return;
  }

  reportedVitals.add(metric.id);

  // GA4 event values must be integers; CLS is scaled ×1000 (ms-equivalent).
  const value =
    metric.name === "CLS" ? Math.round(metric.value * 1000) : Math.round(metric.value);

  if (analyticsConfig.debug || process.env.NODE_ENV === "development") {
    console.debug(
      `[renovix web-vitals] ${metric.name} ${value} (${metric.rating}) — ${metric.navigationType}`,
    );
  }

  if (analyticsMode === "ga4") {
    pushCommand([
      "event",
      "web_vitals",
      {
        metric_name: metric.name,
        metric_value: value,
        metric_rating: metric.rating,
        navigation_type: metric.navigationType,
        language: (document.documentElement.lang || "en").slice(0, 2),
        non_interaction: true,
        transport_type: "beacon",
      },
    ]);
  } else if (analyticsMode === "gtm") {
    pushDataLayerEvent({
      event: "web_vitals",
      metric_name: metric.name,
      metric_value: value,
      metric_rating: metric.rating,
      navigation_type: metric.navigationType,
    });
  }
};

/* ------------------------------------------------------------------------ */
/* Delegated click tracking                                                  */
/* ------------------------------------------------------------------------ */

const WHATSAPP_HREF_PATTERN =
  /^whatsapp:\/\/|^https?:\/\/(?:wa\.me|api\.whatsapp\.com)(?:[/?#]|$)/i;

/** Coarse, non-identifying location of a click: header, footer or page token. */
function clickSurface(anchor: HTMLAnchorElement): string {
  if (anchor.closest("header")) {
    return "header";
  }

  if (anchor.closest("footer")) {
    return "footer";
  }

  // `/en/services/tiling/` → "services"; `/en/` → "home".
  const segment = window.location.pathname.split("/")[2] ?? "";
  return segment || "home";
}

function onClickTrack(event: Event): void {
  const target = event.target as Element | null;

  if (!target || typeof target.closest !== "function") {
    return;
  }

  const anchor = target.closest<HTMLAnchorElement>("a[href]");

  if (!anchor) {
    return;
  }

  // Links already instrumented through <TrackedLink> fire their own event
  // with richer context; this marker prevents a second, duplicate event.
  if (anchor.hasAttribute("data-renovix-tracked")) {
    return;
  }

  const lang = (document.documentElement.lang || "en").slice(0, 2);
  const surface = clickSurface(anchor);
  const href = anchor.getAttribute("href") ?? "";
  const explicitEvent = anchor.getAttribute("data-analytics-event");

  if (explicitEvent === "service_cta_click" || explicitEvent === "subservice_cta_click") {
    trackConversionEvent(explicitEvent, {
      lang,
      surface,
      service: anchor.getAttribute("data-analytics-service") ?? undefined,
      subservice: anchor.getAttribute("data-analytics-subservice") ?? undefined,
    });
    return;
  }

  if (href.startsWith("tel:")) {
    trackConversionEvent("phone_click", { lang, surface });
    return;
  }

  if (href.startsWith("mailto:")) {
    trackConversionEvent("email_click", { lang, surface });
    return;
  }

  if (WHATSAPP_HREF_PATTERN.test(href)) {
    trackConversionEvent("whatsapp_click", { lang, surface });
  }
}

/* ------------------------------------------------------------------------ */
/* Component                                                                 */
/* ------------------------------------------------------------------------ */

export function Measurement() {
  const pathname = usePathname();

  // Bootstrap once: replay pre-mount events, then connect the live sink.
  useEffect(() => {
    const sink = makeSink();

    for (const record of getQueuedConversionEvents()) {
      if (!forwardedRecords.has(record)) {
        forwardedRecords.add(record);
        sink(record);
      }
    }

    setConversionEventSink(sink);

    if (analyticsConfig.debug || process.env.NODE_ENV === "development") {
      console.debug(
        `[renovix analytics] mode=${analyticsMode}` +
          (analyticsConfig.googleAdsConversionId ? " googleAds=armed" : ""),
      );
    }

    return () => setConversionEventSink(null);
  }, []);

  // Page views: initial load + every client-side navigation, exactly once
  // per route (sendPageView dedupes; the tag's automatic view is disabled).
  useEffect(() => {
    if (analyticsMode === "none" || typeof window === "undefined") {
      return;
    }

    sendPageView(pathname ?? "/");
  }, [pathname]);

  // Delegated click listener — one capture listener for the whole document.
  useEffect(() => {
    document.addEventListener("click", onClickTrack, { capture: true });

    return () => document.removeEventListener("click", onClickTrack, { capture: true });
  }, []);

  // Clarity is pure product analytics — load at browser idle, never blocking
  // first paint or interaction. Tag language for session segmentation.
  useEffect(() => {
    if (analyticsConfig.clarityProjectId) {
      window.clarity?.("set", "language", (document.documentElement.lang || "en").slice(0, 2));
    }
  }, [pathname]);

  useReportWebVitals(handleWebVitals);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      {analyticsMode === "ga4" && analyticsConfig.ga4MeasurementId ? (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4MeasurementId}`}
          strategy="afterInteractive"
        />
      ) : null}

      {analyticsMode === "gtm" && analyticsConfig.gtmContainerId ? (
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${analyticsConfig.gtmContainerId}`}
          strategy="afterInteractive"
        />
      ) : null}

      {analyticsConfig.clarityProjectId ? (
        <Script
          src={`https://www.clarity.ms/tag/${analyticsConfig.clarityProjectId}`}
          strategy="lazyOnload"
        />
      ) : null}
    </>
  );
}
