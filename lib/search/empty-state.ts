/**
 * Smart Service Finder — empty-state composer.
 *
 * When no document crosses the match threshold, the page renders this
 * panel instead of a dead end. It never invents a service — every
 * recommendation links to a real, published page on the site.
 *
 * The fallback offers:
 *   - 3 popular services (the three services whose pricing rows carry
 *     `isHeadline: true` and a non-zero starting price)
 *   - a "Browse all services" / "Browse all problems" link
 *   - a "Describe in your own words" pre-filled WhatsApp quick path
 *   - a "Get a free quote" CTA
 *   - the audit-disclosure line: results are drawn from the site.
 */

import type { LanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { getServiceName } from "@/data/i18n";
import { services } from "@/data/services";
import { localizedHref } from "@/i18n/hrefs";
import { getWhatsAppHref } from "@/data/site";

export type EmptyState = {
  title: string;
  body: string;
  popularServicesTitle: string;
  popularServices: Array<{ label: string; href: string }>;
  browseAllServices: string;
  browseServicesHref: string;
  browseAllProblems: string;
  browseProblemsHref: string;
  describeMoreLabel: string;
  describeMoreBody: string;
  describeMoreCta: string;
  describeMoreHref: string;
  quoteLabel: string;
  quoteHref: string;
  auditDisclosure: string;
};

const POPULAR_PICKS: ReadonlyArray<string> = [
  "plumbing",
  "electrical",
  "waterproofing",
];

/** Build the empty-state payload for one language. */
export function buildEmptyState(lang: LanguageCode, query: string): EmptyState {
  const t = getDictionary(lang);

  const popular: Array<{ label: string; href: string }> = [];
  for (const slug of POPULAR_PICKS) {
    const found = services.find((s) => s.slug === slug);
    if (!found) continue;
    popular.push({
      label: getServiceName(slug, lang, found.name),
      href: localizedHref(`/services/${slug}/`, lang),
    });
  }

  // Pre-filled WhatsApp message — the customer types the rest.
  const trimmed = query.trim();
  const waText = encodeURIComponent(
    trimmed
      ? `Hi, I searched "${trimmed}" on the Renovix website and could not find a match. Can you help?`
      : "Hi, I have a question about a home service. Can you help?",
  );
  // Reuse the site-wide WhatsApp link from `data/site.ts`.
  const baseHref = getWhatsAppHref();
  const describeMoreHref = `${baseHref}?text=${waText}`;

  return {
    title: t.search.noResultsTitle,
    body: t.search.noResultsBody,
    popularServicesTitle: t.search.popularServicesTitle,
    popularServices: popular,
    browseAllServices: t.search.browseAllServices,
    browseServicesHref: localizedHref("/services/", lang),
    browseAllProblems: t.search.browseAllProblems,
    browseProblemsHref: localizedHref("/problems/", lang),
    describeMoreLabel: t.search.describeMore,
    describeMoreBody: t.search.describeMoreBody,
    describeMoreCta: t.search.describeMoreCta,
    describeMoreHref,
    quoteLabel: t.search.requestQuote,
    quoteHref: localizedHref("/quote/", lang),
    auditDisclosure: t.search.auditDisclosure,
  };
}
