/**
 * Platform-neutral conversion-event layer (prepared in Phase 22, connected to
 * a provider in Phase 24). This module deliberately does NOT load any
 * analytics platform, set cookies or make network requests — it defines the
 * typed events, sanitizes their context to a fixed allowlist of coarse,
 * non-identifying values, buffers them on `window.__renovixAnalytics` for
 * debugging/replay, and forwards them to whichever provider sink the
 * measurement bootstrap (components/analytics/Measurement.tsx) registered.
 *
 * Hard rule: events must never contain personally identifiable customer data —
 * no names, phone numbers, email addresses, locations or free-text
 * descriptions. `ConversionContext` is a closed type with fixed keys, and
 * `trackConversionEvent` rebuilds the context field-by-field (it never
 * spreads a caller object), so an unknown or PII key cannot slip through.
 * Values are truncated to provider-safe lengths.
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
  /** An email link was clicked (Phase 24). */
  "email_click",
  /** A quote CTA on a service page was clicked (Phase 24). */
  "service_cta_click",
  /** A quote CTA on a sub-service page was clicked (Phase 24). */
  "subservice_cta_click",
] as const;

export type ConversionEvent = (typeof CONVERSION_EVENTS)[number];

/**
 * Coarse, non-identifying context attached to an event. Keys are a closed
 * set; the provider glue forwards them as event parameters (≤ 40 chars per
 * name, values truncated by this module).
 */
export type ConversionContext = Partial<{
  /** Where the CTA lives, e.g. `quote_quick_path`, `quote_success`, `header`, `footer`, or a page-type token like `services`. */
  surface: string;
  /** Registry slug of the selected service — never a free-text value. */
  service: string;
  /** Registry slug of the selected sub-service — never a free-text value. */
  subservice: string;
  /** Failure class: `validation` | `rate_limited` | `unavailable` | `network`. */
  reason: string;
  /** Site language: `en` | `ms` | `zh`. */
  lang: string;
}>;

/** The only context keys ever forwarded to a provider. */
const CONTEXT_KEYS = ["surface", "service", "subservice", "reason", "lang"] as const;

export type ConversionEventRecord = {
  event: ConversionEvent;
  context: ConversionContext;
  /** Epoch milliseconds, added by this module — never client-supplied. */
  timestamp: number;
};

/**
 * Sink registered by the measurement bootstrap once a provider is active.
 * It must never throw (calls are guarded) and receives only sanitized
 * records.
 */
export type ConversionEventSink = (record: ConversionEventRecord) => void;

let sink: ConversionEventSink | null = null;

/**
 * Registers (or clears) the provider sink. Events recorded before
 * registration stay in the window buffer; the bootstrap replays them exactly
 * once when it connects, so nothing is double-sent.
 */
export function setConversionEventSink(next: ConversionEventSink | null): void {
  sink = next;
}

declare global {
  interface Window {
    __renovixAnalytics?: ConversionEventRecord[];
  }
}

/** Providers cap event-parameter values; keep every token comfortably under it. */
const MAX_CONTEXT_VALUE_LENGTH = 100;

function sanitizeContext(context: ConversionContext): ConversionContext {
  const clean: ConversionContext = {};

  for (const key of CONTEXT_KEYS) {
    const value = context[key];

    if (typeof value === "string" && value.length > 0) {
      clean[key] = value.slice(0, MAX_CONTEXT_VALUE_LENGTH);
    }
  }

  return clean;
}

const debugEnabled = process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";

/**
 * Records a conversion event. Safe to call during SSR (no-ops) and from any
 * event handler; a failed push can never break the surrounding interaction.
 * Fires at most one buffered record per call; the provider sink (when
 * registered) receives the same single record — one user action, one event.
 */
export function trackConversionEvent(
  event: ConversionEvent,
  context: ConversionContext = {},
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const record: ConversionEventRecord = {
      event,
      context: sanitizeContext(context),
      timestamp: Date.now(),
    };
    const queue = (window.__renovixAnalytics ??= []);
    queue.push(record);

    if (debugEnabled || process.env.NODE_ENV === "development") {
      console.debug(`[renovix analytics] ${event}`, record.context);
    }

    sink?.(record);
  } catch {
    // Analytics preparation must never throw into user-facing code.
  }
}

/** Read-and-keep accessor, mainly for the measurement bootstrap replay. */
export function getQueuedConversionEvents(): ConversionEventRecord[] {
  if (typeof window === "undefined") {
    return [];
  }

  return window.__renovixAnalytics ? [...window.__renovixAnalytics] : [];
}
