import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconAlertTriangle } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import { getStartingRatesForLocation } from "@/data/locations";
import type { AreaDetail } from "@/data/area-content/types";

type AreaPricingSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaPricingSection({ area, lang }: AreaPricingSectionProps) {
  const t = getDictionary(lang);
  const rates = getStartingRatesForLocation(area.slug);

  if (rates.length === 0) {
    return null;
  }

  // Unit translation helper
  function formatUnit(unit: string): string {
    switch (unit) {
      case "per_sqft":
        return lang === "ms" ? "setiap kps" : lang === "zh" ? "每平方尺" : "per sqft";
      case "per_pfr":
      case "per_foot_run":
        return lang === "ms" ? "setiap kaki panjang" : lang === "zh" ? "每直尺" : "per foot run";
      case "per_job":
        return lang === "ms" ? "setiap kerja" : lang === "zh" ? "单项工程" : "per job";
      case "per_point":
        return lang === "ms" ? "setiap mata suis/lampu" : lang === "zh" ? "每个点位" : "per point";
      case "per_unit":
        return lang === "ms" ? "setiap unit" : lang === "zh" ? "每台" : "per unit";
      case "per_hour":
        return lang === "ms" ? "sejam" : lang === "zh" ? "每小时" : "per hour";
      default:
        return unit.replace("_", " ");
    }
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
                    RM {rate.startingPrice.toFixed(rate.startingPrice % 1 === 0 ? 0 : 2)}
                  </span>
                  <span className="text-xs text-secondary">
                    / {formatUnit(rate.unit)}
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
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-secondary">
            <span className="rounded-md bg-slate-100 px-2.5 py-1">
              ✓ {lang === "ms" ? "Tiada caj tersembunyi" : lang === "zh" ? "无隐藏收费" : "No hidden charges"}
            </span>
            <span className="rounded-md bg-slate-100 px-2.5 py-1">
              ✓ {lang === "ms" ? "Sebut harga bertulis sebelum mula" : lang === "zh" ? "开工前出具书面报价" : "Written quote before work starts"}
            </span>
            <span className="rounded-md bg-slate-100 px-2.5 py-1">
              ✓ {lang === "ms" ? "Pematuhan syarat pengurusan strata" : lang === "zh" ? "严格遵守公寓管理条例" : "Full strata compliance"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
