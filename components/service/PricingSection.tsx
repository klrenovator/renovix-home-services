import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getDictionary, format } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import {
  formatPricingAmount,
  getPricingDisclaimer,
  getPricingForService,
  getPricingUnitsLabel,
  getServicePricingHeadline,
  LAST_REVIEWED as PRICING_LAST_REVIEWED,
} from "@/data/pricing";
import type { ServiceDetail } from "@/data/service-content/types";

type PricingSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function PricingSection({ detail, lang }: PricingSectionProps) {
  const t = getDictionary(lang);
  const entries = getPricingForService(detail.slug, lang);

  if (entries.length === 0) {
    return null;
  }

  // The catalogue owns every number shown in this section. Editorial service
  // copy can explain the work, but cannot override the row-backed headline or
  // disclaimer and drift away from the table.
  const pricingIntro = t.servicePage.pricingDescription;
  const disclaimer = getPricingDisclaimer(lang);
  const lastReviewed = PRICING_LAST_REVIEWED;
  const headline =
    getServicePricingHeadline(detail.slug, lang) ??
    `${t.servicePage.startingFrom} ${getPricingUnitsLabel("per_job", lang)}`;

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
            <span className="font-semibold text-navy">{headline}</span> — {pricingIntro}{" "}
            {disclaimer}
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
                        {t.servicePage.startingFrom} RM{formatPricingAmount(entry.startingPrice)}
                        {entry.priceRange ? (
                          <span className="ml-1 font-normal text-secondary">
                            (RM{formatPricingAmount(entry.priceRange.min)}–RM{formatPricingAmount(entry.priceRange.max)})
                          </span>
                        ) : null}
                      </>
                    ) : entry.priceRange ? (
                      <>RM{formatPricingAmount(entry.priceRange.min)}–RM{formatPricingAmount(entry.priceRange.max)}</>
                    ) : (
                      <>RM{formatPricingAmount(entry.startingPrice)}</>
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
