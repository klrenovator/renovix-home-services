/**
 * Smart Service Finder — ResultCard.
 *
 * Server component. Renders one search hit as a self-contained card.
 * Every string comes from a registry / catalogue / dictionary read —
 * the card never authors new copy.
 *
 * Anatomy:
 *   - category eyebrow (e.g. "Plumbing") + kind chip
 *   - title (the H1 of the target page)
 *   - summary
 *   - pricing line ("Starting from RM…")
 *   - "Why this matches" line (matched tokens, plain text)
 *   - "What's included" + "How the work is done" preview bullets
 *   - "Related services" small grid
 *   - CTAs: "View service", "Get a free quote", "WhatsApp us"
 */

import Link from "next/link";
import type { ComposedResultCard } from "@/lib/search/results";
import type { LanguageCode } from "@/data/languages";
import { getQuoteHref, getWhatsAppHref } from "@/data/site";
import { IconArrowRight, IconWhatsApp } from "@/components/icons";

type ResultCardProps = {
  card: ComposedResultCard;
  lang: LanguageCode;
};

const KIND_CHIP_LABEL: Record<ComposedResultCard["kind"], string> = {
  service: "Service",
  "sub-service": "Service",
  problem: "Problem",
  area: "Area",
  blog: "Guide",
  project: "Project",
};

export function ResultCard({ card, lang }: ResultCardProps) {
  const quoteHref = getQuoteHref(lang);
  const whatsappHref = getWhatsAppHref();

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-brand/30 sm:p-7">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
        {card.category ? <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-brand">{card.category}</span> : null}
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600">{KIND_CHIP_LABEL[card.kind]}</span>
      </div>

      <h3 className="mt-3 text-xl font-bold text-navy sm:text-2xl">
        <Link
          href={card.href}
          className="rounded-sm transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {card.title}
        </Link>
      </h3>

      {card.summary ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{card.summary}</p>
      ) : null}

      {card.pricingLine ? (
        <p className="mt-4 inline-flex rounded-md bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900">
          {card.pricingLine}
        </p>
      ) : null}

      {card.whyMatched ? (
        <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">
          <span className="font-semibold">{card.whyMatchedLabel}: </span>
          <span className="font-normal normal-case text-slate-700">{card.whyMatched}</span>
        </p>
      ) : null}

      {card.includes.length > 0 ? (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{card.includesLabel}</p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
            {card.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {card.faqCount > 0 ? (
        <p className="mt-4 text-xs text-slate-500">
          {card.faqCountLabel}
        </p>
      ) : null}

      {card.related.length > 0 ? (
        <div className="mt-5 border-t border-slate-100 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{card.relatedHeading}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {card.related.map((rel) => (
              <li key={rel.href}>
                <Link
                  href={rel.href}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-brand/30 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {rel.label}
                  <IconArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Link
          href={card.href}
          className="btn btn-primary h-11 min-h-11 px-5 text-sm font-semibold"
        >
          {card.viewLabel}
          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href={quoteHref}
          className="btn btn-outline h-11 min-h-11 px-5 text-sm font-semibold"
        >
          {card.quoteLabel}
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label={card.whatsappLabel}
          className="btn btn-whatsapp h-11 min-h-11 px-5 text-sm font-semibold"
        >
          <IconWhatsApp className="h-4 w-4" aria-hidden="true" />
          {card.whatsappLabel}
        </a>
      </div>
    </article>
  );
}
