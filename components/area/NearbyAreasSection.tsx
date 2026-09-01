import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import { getAreaRegion, getAllAreas } from "@/data/area-content";
import { getRegionName } from "@/data/i18n";
import type { AreaDetail } from "@/data/area-content/types";

type NearbyAreasSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function NearbyAreasSection({ area, lang }: NearbyAreasSectionProps) {
  const t = getDictionary(lang);
  const region = getAreaRegion(area.region, lang);

  if (!region) {
    return null;
  }

  const regionHref = contentHref("areaRegion", region.id, lang);
  const regionCard = (
    <>
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
        <IconMapPin className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
        {format(t.areaPage.allAreasIn, { name: region.name })}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
        {format(t.areaPage.guidesCount, {
          count: String(region.areas.length),
          name: region.name,
        })}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        {format(t.areaPage.browseRegion, { name: region.name })}
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );

  const cardClasses =
    "card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areaPage.nearbyEyebrow}
          title={format(t.areaPage.nearbyTitle, { name: area.name })}
          description={t.areaPage.nearbyDescription}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regionHref ? (
            <Link href={regionHref} className={cardClasses}>
              {regionCard}
            </Link>
          ) : (
            <div className={cardClasses}>{regionCard}</div>
          )}

          {area.nearbyAreas.map((slug) => {
            const nearby = getAllAreas(lang).find((item) => item.slug === slug);

            if (!nearby) {
              return null;
            }

            const href = contentHref("area", `${nearby.region}/${nearby.slug}`, lang);
            const inner = (
              <>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {nearby.name}
                  {nearby.region !== area.region ? (
                    <span className="ml-1.5 text-xs font-medium text-secondary">
                      ({getRegionName(nearby.region, lang)})
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                  {nearby.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {t.cta.viewGuide}
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            );

            return href ? (
              <Link key={slug} href={href} className={cardClasses}>
                {inner}
              </Link>
            ) : (
              <div key={slug} className={cardClasses}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
