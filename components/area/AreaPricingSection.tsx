import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconAlertTriangle } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import { formatPricingAmount, getPricingUnitsLabel } from "@/data/pricing";
import { getStartingRatesForLocation } from "@/data/locations";
import type { AreaDetail } from "@/data/area-content/types";

type AreaPricingSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaPricingSection({ area, lang }: AreaPricingSectionProps) {
  const t = getDictionary(lang);
  const rates = getStartingRatesForLocation(area.slug, lang);

  if (rates.length === 0) {
    return null;
  }

  return (
    <section id="pricing" className="section section-surface scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areaPage.pricingEyebrow}
          title={format(t.areaPage.pricingTitle, { name: area.name })}
          description={t.areaPage.pricingDescription}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rates.map((rate) => {
            const serviceHref = contentHref("service", rate.serviceSlug, lang);

            return (
              <div
                key={rate.serviceSlug}
                className="card flex h-full flex-col p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
                    {rate.serviceName}
                  </span>
                  <span className="text-xs text-slate-400">
                    {rate.lastReviewed}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-navy">
                  {rate.subService}
                </h3>

                <div className="mt-4 flex items-baseline gap-1.5 border-b border-slate-100 pb-4">
                  <span className="text-xs font-medium text-secondary">
                    {lang === "ms" ? "Bermula" : lang === "zh" ? "起步价" : "Starting from"}
                  </span>
                  <span className="text-2xl font-extrabold text-navy">
                    RM {formatPricingAmount(rate.startingPrice)}
                  </span>
                  <span className="text-xs text-secondary">
                    / {getPricingUnitsLabel(rate.unit, lang)}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-xs leading-5 text-secondary">
                  {rate.disclaimer}
                </p>

                {serviceHref ? (
                  <Link
                    href={serviceHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    {t.cta.viewService}
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
              <IconAlertTriangle className="h-5 w-5" />
            </span>
            <h3 className="text-base font-bold tracking-tight text-navy">
              {format(t.areaPage.pricingFactorsTitle, { name: area.name })}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-secondary">
            {t.areaPage.pricingFactorsBody}
          </p>

        </div>
      </div>
    </section>
  );
}
