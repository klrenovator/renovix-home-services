import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconArrowRight,
  IconWrench,
  IconCheck,
  IconAlertTriangle,
} from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import type { AreaDetail } from "@/data/area-content/types";

type AreaIntentMatrixSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaIntentMatrixSection({
  area,
  lang,
}: AreaIntentMatrixSectionProps) {
  const t = getDictionary(lang);

  // Group services into high-intent clusters
  const primaryServices = area.servicesAvailable.slice(0, 6);
  const relatedProblems = area.relatedProblems.slice(0, 4);

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areaPage.matrixEyebrow}
          title={format(t.areaPage.matrixTitle, { name: area.name })}
          description={t.areaPage.matrixDescription}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Cluster 1: Repairs & Troubleshooting */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-surface p-6 shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <IconWrench className="h-4 w-4" />
              </span>
              <h3 className="text-base font-bold text-navy">
                {t.areaPage.matrixRepair}
              </h3>
            </div>
            <p className="mt-3 text-xs leading-5 text-secondary">
              {lang === "ms"
                ? `Pembaikan paip bocor, litar pintas, jubin pecah dan masalah bumbung di ${area.name}.`
                : lang === "zh"
                  ? `针对 ${area.name} 的水管漏水、跳闸短路、瓷砖空鼓破损及屋顶漏水排查维修。`
                  : `Targeted repair for leaking pipes, tripping circuits, cracked tiles, and roof seepage in ${area.name}.`}
            </p>

            <ul className="mt-4 flex-1 space-y-2 border-t border-slate-200/60 pt-4">
              {relatedProblems.map((problemSlug) => {
                const problemHref = contentHref("problem", problemSlug, lang);
                const problemLabel = problemSlug
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ");

                return (
                  <li key={problemSlug} className="flex items-center gap-2">
                    <IconCheck className="h-3.5 w-3.5 shrink-0 text-brand" />
                    {problemHref ? (
                      <Link
                        href={problemHref}
                        className="text-xs font-medium text-navy transition-colors hover:text-brand"
                      >
                        {problemLabel}
                      </Link>
                    ) : (
                      <span className="text-xs text-secondary">{problemLabel}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Cluster 2: Installations & Upgrades */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-surface p-6 shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/20 text-accent-dark">
                <IconCheck className="h-4 w-4" />
              </span>
              <h3 className="text-base font-bold text-navy">
                {t.areaPage.matrixInstall}
              </h3>
            </div>
            <p className="mt-3 text-xs leading-5 text-secondary">
              {lang === "ms"
                ? `Pemasangan lantai SPC, siling plaster, mata suis baru dan kelengkapan bilik air di ${area.name}.`
                : lang === "zh"
                  ? `${area.name} 各类 SPC 锁扣地板铺设、石膏吊顶天花、增设插座电位及卫浴洁具安装。`
                  : `SPC click flooring, plaster ceiling, additional electrical points, and sanitaryware in ${area.name}.`}
            </p>

            <ul className="mt-4 flex-1 space-y-2 border-t border-slate-200/60 pt-4">
              {primaryServices.slice(0, 4).map((item) => {
                const serviceHref = contentHref("service", item.serviceSlug, lang);
                const serviceLabel = item.serviceSlug
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ");

                return (
                  <li key={item.serviceSlug} className="flex items-center gap-2">
                    <IconCheck className="h-3.5 w-3.5 shrink-0 text-accent-dark" />
                    {serviceHref ? (
                      <Link
                        href={serviceHref}
                        className="text-xs font-medium text-navy transition-colors hover:text-brand"
                      >
                        {serviceLabel}
                      </Link>
                    ) : (
                      <span className="text-xs text-secondary">{serviceLabel}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Cluster 3: Full House & Commercial */}
          <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-surface p-6 shadow-soft">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <IconAlertTriangle className="h-4 w-4" />
              </span>
              <h3 className="text-base font-bold text-navy">
                {t.areaPage.matrixFullReno}
              </h3>
            </div>
            <p className="mt-3 text-xs leading-5 text-secondary">
              {lang === "ms"
                ? `Pengubahsuaian rumah penuh, sambungan dapur, cat semula dan refit kedai di ${area.name}.`
                : lang === "zh"
                  ? `${area.name} 全屋整体翻新、厨房扩建、旧屋重装油漆及商业店铺改造。`
                  : `Whole-house modernisations, kitchen extensions, full repaints, and shoplot refits in ${area.name}.`}
            </p>

            <div className="mt-4 flex flex-1 flex-col justify-between border-t border-slate-200/60 pt-4">
              <p className="text-xs text-secondary">
                {lang === "ms"
                  ? "Penyelarasan semua tukang profesional dengan satu jadual teratur dan sebut harga terperinci."
                  : lang === "zh"
                    ? "统一协调泥水、水电、油漆及木工，单一窗口专业管理进度与预算。"
                    : "Single-contractor management coordinating multiple trades with clear timelines and sequenced scope."}
              </p>

              <Link
                href={contentHref("service", "general-renovation", lang) ?? `/services/general-renovation`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                {t.cta.viewService}
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
