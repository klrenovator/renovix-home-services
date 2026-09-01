import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { areaRegions } from "@/data/area-content";
import { areasIndexHref } from "@/data/areas";
import { getAreaName, getRegionName, getRegionSummary } from "@/data/i18n";

type AreasSectionProps = {
  areasNote: string;
  lang: string;
};

/**
 * The shared "where we work" block on service and problem guides. Region and
 * place names come from the localized lists, and a location only renders as a
 * link when it is published in the current language.
 */
export function AreasSection({ areasNote, lang }: AreasSectionProps) {
  const t = getDictionary(lang);

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areasBlock.eyebrow}
          title={t.areasBlock.title}
          description={areasNote}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {areaRegions.map((region) => {
            const regionHref = contentHref("areaRegion", region.id, lang);
            const regionName = getRegionName(region.id, lang);

            return (
              <article key={region.id} className="card p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-brand">
                      <IconMapPin className="h-5 w-5" />
                    </span>
                    <h3 className="h3-card">{regionName}</h3>
                  </div>
                  {regionHref ? (
                    <Link
                      href={regionHref}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {t.cta.viewAreas}
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {getRegionSummary(region.id, lang, region.summary)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {region.areas.map((area) => {
                    const href = contentHref("area", `${region.id}/${area.slug}`, lang);
                    const name = getAreaName(area, lang);

                    return (
                      <li key={area.slug}>
                        {href ? (
                          <Link
                            href={href}
                            className="chip transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {name}
                          </Link>
                        ) : (
                          <span className="chip">{name}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200/80 bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="max-w-2xl">
              <h3 className="text-base font-semibold tracking-tight text-navy">
                {t.areasBlock.guideTitle}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                {t.areasBlock.guideDescription}
              </p>
            </div>
            <Link href={localizedHref(areasIndexHref, lang)} className="btn btn-outline">
              {t.cta.browseAllServiceAreas}
            </Link>
          </div>
        </div>

        <p className="mt-6 text-sm text-secondary">{t.areasBlock.note}</p>
      </div>
    </section>
  );
}
