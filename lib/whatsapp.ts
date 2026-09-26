/**
 * Lead-generation Task 1.1 — one way to build a WhatsApp deep link.
 *
 * Every WhatsApp action on the site points at the single number in
 * `data/site.ts` and carries a **pre-filled first message** so the customer
 * never has to type context, and the team immediately knows which page the
 * enquiry came from. The message is always composed from registry-derived,
 * localized labels (service, sub-service, problem, area, guide or project
 * name) plus dictionary copy — never a raw slug and never free text.
 *
 * The helper is intentionally dependency-light so it can be used from a server
 * component (the floating CTA) and from client components (the quote form).
 */

import { getWhatsAppHref } from "@/data/site";

/**
 * Appends `?text=` to a `wa.me` base URL. The separator is chosen from the
 * base href so the function keeps working if the site ever adds a query
 * string (e.g. a campaign tag) to the configured WhatsApp link.
 */
export function buildWhatsAppHref(
  message: string,
  baseHref: string = getWhatsAppHref(),
): string {
  const separator = baseHref.includes("?") ? "&" : "?";

  return `${baseHref}${separator}text=${encodeURIComponent(message)}`;
}
