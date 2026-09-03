import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getDictionary, format } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { getPricingForService, getPricingUnitsLabel } from "@/data/pricing";
import type { ServiceDetail } from "@/data/service-content/types";

type PricingSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function PricingSection({ detail, lang }: PricingSectionProps) {
  const t = getDictionary(lang);
  const entries = getPricingForService(detail.slug);

  if (entries.length === 0) {
    return null;
  }

  const pricingIntro = detail.pricing?.intro ?? t.servicePage.pricingDescription;
  const disclaimer = detail.pricing?.disclaimer ?? t.servicePage.pricingDisclaimer;
  const lastReviewed = "2026-09-03";

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.pricingEyebrow}
          title={format(t.servicePage.pricingTitle, { name: detail.name })}
          description={pricingIntro}
        />

        {/* Answer-first pricing summary */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-surface p-6 sm:p-8">
          <h3 className="text-base font-semibold text-navy">
            {format(t.servicePage.pricingTitle, { name: detail.name })}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-secondary">
            <span className="font-semibold text-navy">
              {t.servicePage.startingFrom} RM{Math.min(...entries.map((e) => e.startingPrice))}{" "}
              {getPricingUnitsLabel(entries[0].unit, lang)}
            </span>{" "}
            — {pricingIntro} {disclaimer}
          </p>
          <p className="mt-3 text-xs text-secondary">
            {t.servicePage.lastReviewedLabel}: {lastReviewed} · {t.servicePage.pricingNote}
          </p>
        </div>

        {/* Pricing table */}
        <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-secondary">
              <tr>
                <th className="px-4 py-3">{t.servicePage.priceTableService}</th>
                <th className="px-4 py-3">{t.servicePage.priceTableScope}</th>
                <th className="px-4 py-3">{t.servicePage.priceTablePrice}</th>
                <th className="px-4 py-3">{t.servicePage.priceTableUnit}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {entries.map((entry) => (
                <tr key={entry.id} className="align-top">
                  <td className="px-4 py-4 font-medium text-navy">
                    {entry.subService ?? entry.serviceName}
                  </td>
                  <td className="px-4 py-4 leading-6 text-secondary max-w-[360px]">
                    {entry.scope}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap font-semibold text-navy">
                    {entry.pricingType === "starting_from" ? (
                      <>
                        {t.servicePage.startingFrom} RM{entry.startingPrice}
                        {entry.priceRange ? (
                          <span className="ml-1 font-normal text-secondary">
                            (RM{entry.priceRange.min}–RM{entry.priceRange.max})
                          </span>
                        ) : null}
                      </>
                    ) : entry.priceRange ? (
                      <>RM{entry.priceRange.min}–RM{entry.priceRange.max}</>
                    ) : (
                      <>RM{entry.startingPrice}</>
                    )}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-secondary">
                    {getPricingUnitsLabel(entry.unit, lang)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-semibold text-navy">{t.servicePage.pricingFactorsTitle}</p>
          <p className="mt-2 text-sm leading-6 text-secondary">{disclaimer}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-secondary">
            {Array.from(new Set(entries.flatMap((e) => e.factors)))
              .slice(0, 8)
              .map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={localizedHref("/quote/", lang)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy"
            >
              {t.servicePage.quotePromptTitle}
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-sm text-secondary">{t.servicePage.quotePromptBody}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
