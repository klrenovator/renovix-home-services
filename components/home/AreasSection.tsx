import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getAreaName, getRegionName, getRegionSummary } from "@/data/i18n";
import { areaRegions } from "@/data/area-content";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";

type HomeAreasSectionProps = {
  lang?: string;
};

export function AreasSection({ lang = "en" }: HomeAreasSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);

  return (
    <section id="areas" className="section scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.home.areas.eyebrow}
          title={t.home.areas.title}
          description={t.home.areas.description}
          align="center"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {areaRegions.map((region) => {
            const regionHref = contentHref("areaRegion", region.id, code);

            return (
              <article key={region.id} className="card p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-brand">
                      <IconMapPin className="h-5 w-5" />
                    </span>
                    <h3 className="h3-card">{getRegionName(region.id, code)}</h3>
                  </div>
                  {regionHref ? (
                    <Link
                      href={regionHref}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {t.cta.explore}
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  {getRegionSummary(region.id, code, region.summary)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {region.areas.map((area) => {
                    const href = contentHref(
                      "area",
                      `${area.region}/${area.slug}`,
                      code,
                    );
                    const label = getAreaName(area, code);

                    return (
                      <li key={`${area.region}/${area.slug}`}>
                        {href ? (
                          <Link
                            href={href}
                            className="chip transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {label}
                          </Link>
                        ) : (
                          <span className="chip">{label}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link href={localizedHref("/areas", code)} className="btn btn-primary">
            {t.cta.browseAllServiceAreas}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
