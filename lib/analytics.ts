/**
 * Conversion-event interface prepared in Phase 22 for the analytics stack that
 * Phase 24 will install. This module deliberately does NOT load any analytics
 * platform, set cookies or make network requests — it only defines the typed
 * events and buffers them on `window.__renovixAnalytics` so a later provider
 * integration can replay them.
 *
 * Hard rule (carried into Phase 24): events must never contain personally
 * identifiable customer data — no names, phone numbers, email addresses,
 * locations or free-text descriptions. Context values are restricted to
 * coarse, non-identifying tokens such as a service slug or an error class.
 */

export const CONVERSION_EVENTS = [
  /** First meaningful interaction with the quote form (focus/change). */
  "quote_form_start",
  /** A validated quote form submission left the browser. */
  "quote_form_submit",
  /** The server accepted a quote submission (email notification sent). */
  "quote_form_success",
  /** A submission attempt failed (validation, rate limit, provider, network). */
  "quote_form_error",
  /** A WhatsApp CTA was clicked anywhere in the quote flow. */
  "whatsapp_click",
  /** A phone/call CTA was clicked anywhere in the quote flow. */
  "phone_click",
] as const;

export type ConversionEvent = (typeof CONVERSION_EVENTS)[number];

/** Coarse, non-identifying context attached to an event. */
export type ConversionContext = Partial<{
  /** Where the CTA lives, e.g. `quote_quick_path`, `quote_success`, `quote_error`. */
  surface: string;
  /** Registry slug of the selected service — never a free-text value. */
  service: string;
  /** Failure class: `validation` | `rate_limited` | `unavailable` | `network`. */
  reason: string;
  /** Site language: `en` | `ms` | `zh`. */
  lang: string;
}>;

export type ConversionEventRecord = {
  event: ConversionEvent;
  context: ConversionContext;
  /** Epoch milliseconds, added by this module — never client-supplied. */
  timestamp: number;
};

declare global {
  interface Window {
    __renovixAnalytics?: ConversionEventRecord[];
  }
}

/**
 * Records a conversion event. Safe to call during SSR (no-ops) and from any
 * event handler; a failed push can never break the surrounding interaction.
 */
export function trackConversionEvent(
  event: ConversionEvent,
  context: ConversionContext = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const queue = (window.__renovixAnalytics ??= []);
    queue.push({ event, context, timestamp: Date.now() });
  } catch {
    // Analytics preparation must never throw into user-facing code.
  }
}

/** Read-and-keep accessor, mainly for the Phase 24 provider bootstrap. */
export function getQueuedConversionEvents(): ConversionEventRecord[] {
  if (typeof window === "undefined") {
    return [];
  }

  return window.__renovixAnalytics ? [...window.__renovixAnalytics] : [];
}
