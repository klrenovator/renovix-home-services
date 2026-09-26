import type { Dictionary } from "@/i18n";
import { QUOTE_LIMITS } from "@/lib/quote/constants";

/**
 * Lead-generation Task 1.2 — the quote page's pre-filled WhatsApp direct
 * route. Whenever a customer leaves the form to continue on WhatsApp (or the
 * form fails to submit), the chat opens with everything they had already
 * entered, so no inquiry is ever lost.
 *
 * Like the floating CTA (Task 1.1), the message is composed from dictionary
 * copy plus localized labels — a registry-derived service/sub-service name,
 * the localized property-type label for the stable ID and the customer's own
 * location text. No slug is ever shown to the customer, and nothing but the
 * location is free text. Composition is pure so it is safe to call on every
 * keystroke from the client component.
 */

/** The details the customer has entered so far that can pre-fill a message. */
export type QuotePrefillDetails = {
  /** Localized service label from the quote options (registry-derived). */
  serviceLabel: string;
  /** Localized sub-service label, when one is chosen. */
  subServiceLabel: string;
  /** Localized property-type label resolved from the stable ID. */
  propertyTypeLabel: string;
  /** The location typed by the customer (sanitized before it is used). */
  location: string;
};

/**
 * One localized "Label: value" line per entered detail. Empty selections
 * contribute no line, so the message only ever carries real information and
 * a customer who answers nothing gets the base message unchanged.
 */
export function composeQuoteDetailLines(
  details: QuotePrefillDetails,
  t: Dictionary["quote"],
): string[] {
  const lines: string[] = [];

  if (details.serviceLabel) {
    lines.push(t.instantLineService.replace("{value}", details.serviceLabel));
  }

  if (details.subServiceLabel) {
    lines.push(t.instantLineSubService.replace("{value}", details.subServiceLabel));
  }

  if (details.propertyTypeLabel) {
    lines.push(t.instantLinePropertyType.replace("{value}", details.propertyTypeLabel));
  }

  // The location is the one customer-typed value: collapse whitespace (a
  // pasted multi-line address must not break the line-per-detail format)
  // and cap it at the same limit the form field enforces.
  const location = details.location.replace(/\s+/g, " ").trim().slice(0, QUOTE_LIMITS.location.max);

  if (location) {
    lines.push(t.instantLineLocation.replace("{value}", location));
  }

  return lines;
}

/**
 * Appends the entered details to a localized base message as new lines.
 * With nothing entered yet the base message is returned untouched, which is
 * exactly the behavior the instant path needs: on page load the WhatsApp
 * link opens with the plain greeting, and every answered field quietly
 * joins the message from then on.
 */
export function composeQuoteWhatsAppMessage(
  baseMessage: string,
  details: QuotePrefillDetails,
  t: Dictionary["quote"],
): string {
  const lines = composeQuoteDetailLines(details, t);

  if (lines.length === 0) {
    return baseMessage;
  }

  return [baseMessage, ...lines].join("\n");
}
