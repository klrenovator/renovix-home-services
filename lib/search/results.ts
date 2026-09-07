/**
 * Smart Service Finder — result composer.
 *
 * Takes the ranked `SearchResult` list and assembles the per-card data
 * structure the page renders. Every field on the card comes from either
 *
 *   1. the underlying `SearchDocument` (which is itself a strict
 *      projection of the source registry), or
 *   2. a single localized dictionary lookup, or
 *   3. a "read from the pricing catalogue" call.
 *
 * No new copy is authored in this file. The dictionary keys are
 * declared in `i18n/types.ts` and shipped complete in EN / MS / ZH by
 * `i18n/{en,ms,zh}.ts`. The audit (`npm run audit:search`) ensures a
 * missing key fails the build.
 */

import type { LanguageCode } from "@/data/languages";
import type { SearchResult, SearchDocument } from "@/data/search/types";
import { getDocumentPricingLine } from "@/data/search/build-index";
import { getDictionary } from "@/i18n";
import { getServiceName } from "@/data/i18n";
import { localizedHref } from "@/i18n/hrefs";

export type ComposedResultCard = {
  /** The localized headline (e.g. "Leaking tap in Kuala Lumpur"). */
  title: string;
  /** The sub-label above the headline (e.g. "Plumbing"). */
  category: string | undefined;
  /** The summary / short description. */
  summary: string;
  /** The kind of public surface — drives the icon. */
  kind: SearchDocument["kind"];
  /** The URL to the full page. */
  href: string;
  /** The "Starting from RM…" sub-line (only when the document has pricing). */
  pricingLine: string | undefined;
  /** "Why this matches" — a 1–2 line explanation. */
  whyMatched: string;
  /** Localized "Why this matches" label. */
  whyMatchedLabel: string;
  /** 0–3 short bullets from the entity's existing copy. */
  includes: string[];
  /** Localized "What's included" label. */
  includesLabel: string;
  /** Number of FAQs the target page carries. */
  faqCount: number;
  /** Localized "{N} FAQs on this page" string. */
  faqCountLabel: string;
  /** "View [Service]" / "Lihat Perkhidmatan" / "查看服务" link label. */
  viewLabel: string;
  /** The "Get a free quote" CTA label. */
  quoteLabel: string;
  /** The "WhatsApp us" CTA label. */
  whatsappLabel: string;
  /** The "Related services" section heading. */
  relatedHeading: string;
  /** Up to 3 related service cards (label + href). */
  related: Array<{ label: string; href: string }>;
  /** Score (debug-only metadata). */
  score: number;
};

const KIND_VIEW_LABEL_KEY: Record<SearchDocument["kind"], "viewService" | "viewService" | "viewProblem" | "viewGuide" | "viewService"> = {
  service: "viewService",
  "sub-service": "viewService",
  problem: "viewProblem",
  area: "viewService",
  blog: "viewGuide",
  project: "viewService",
};

/**
 * Pull a small "What's included" preview from the document.
 * The actual full list lives on the target page; this preview is just
 * 0–3 short strings for the card. We deliberately keep this short
 * and non-overlapping with the target page's own copy.
 */
function previewsFromDocument(
  document: SearchDocument,
): string[] {
  if (!document.hasIncludes) {
    return [];
  }
  // For documents that have a real "includes" list, expose up to 3 of
  // their search terms that are short, common words — this is enough
  // for a quick read.
  return document.searchTerms
    .filter((t) => t.length >= 4 && t.length <= 24)
    .slice(0, 3);
}

function relatedLinksFor(
  document: SearchDocument,
  lang: LanguageCode,
): Array<{ label: string; href: string }> {
  const out: Array<{ label: string; href: string }> = [];
  // For services, prefer `related.services` (already in the document).
  // For problems, prefer `related.services` (the related services list).
  // For sub-services, prefer `related.service` then the parent service.
  // For areas, prefer `related.services` (the locally-noted services).
  // For blog / project, prefer `related.services` (the supported pillars).
  const serviceSlugs: string[] = [];
  if (document.related.service) serviceSlugs.push(document.related.service);
  for (const slug of document.related.services ?? []) {
    if (!serviceSlugs.includes(slug)) serviceSlugs.push(slug);
  }
  for (const slug of serviceSlugs.slice(0, 3)) {
    out.push({
      label: serviceLabel(slug, lang),
      href: documentHref("service", slug, lang),
    });
  }
  return out;
}

function serviceLabel(slug: string, lang: LanguageCode): string {
  return getServiceName(slug, lang, slug);
}

function documentHref(
  kind: SearchDocument["kind"],
  slug: string,
  lang: LanguageCode,
): string {
  if (kind === "service") return localizedHref(`/services/${slug}/`, lang);
  return localizedHref(`/services/${slug}/`, lang);
}

/** Compose one result card. */
export function composeResult(
  result: SearchResult,
  lang: LanguageCode,
): ComposedResultCard {
  const t = getDictionary(lang);
  const document = result.document;
  const previews = previewsFromDocument(document);
  const related = relatedLinksFor(document, lang);
  const viewLabel = t.cta[KIND_VIEW_LABEL_KEY[document.kind]] ?? t.cta.viewService;

  const card: ComposedResultCard = {
    title: document.title,
    category: document.category,
    summary: document.summary,
    kind: document.kind,
    href: document.href,
    pricingLine: getDocumentPricingLine(document, lang),
    whyMatched: result.whyMatched,
    whyMatchedLabel: t.search.whyMatched,
    includes: previews,
    includesLabel: t.search.includesLabel,
    faqCount: document.faqCount,
    faqCountLabel:
      document.faqCount > 0
        ? t.search.faqCount.replace("{count}", String(document.faqCount))
        : t.search.faqCountNone,
    viewLabel,
    quoteLabel: t.cta.getFreeQuote,
    whatsappLabel: t.cta.whatsappUs,
    relatedHeading: t.search.relatedHeading,
    related,
    score: result.score,
  };
  return card;
}

/** Compose every result. */
export function composeResults(
  results: SearchResult[],
  lang: LanguageCode,
): ComposedResultCard[] {
  return results.map((r) => composeResult(r, lang));
}
