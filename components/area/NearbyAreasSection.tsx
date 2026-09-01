import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { localizedHref } from "@/i18n/hrefs";
import { getAreaRegion, getAllAreas } from "@/data/area-content";
import type { AreaDetail } from "@/data/area-content/types";

type NearbyAreasSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function NearbyAreasSection({ area, lang }: NearbyAreasSectionProps) {
  const region = getAreaRegion(area.region);

  if (!region) {
    return null;
  }

  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow="Nearby Areas"
          title={`Areas We Also Serve Near ${area.name}`}
          description={`Renovix covers neighbourhoods and towns across ${region.name}. Explore the guides closest to you.`}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href={localizedHref(`/areas/${region.id}`, lang)}
            className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
              <IconMapPin className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
              All areas in {region.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
              {region.areas.length} location guides across {region.name}.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              Browse {region.name}
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {area.nearbyAreas.map((slug) => {
            const nearby = getAllAreas().find((item) => item.slug === slug);

            if (!nearby) {
              return null;
            }

            return (
              <Link
                key={slug}
                href={localizedHref(`/areas/${nearby.region}/${nearby.slug}`, lang)}
                className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {nearby.name}
                  {nearby.region !== area.region ? (
                    <span className="ml-1.5 text-xs font-medium text-secondary">
                      ({nearby.region === "selangor" ? "Selangor" : "Kuala Lumpur"})
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                  {nearby.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  View Area
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
