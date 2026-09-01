import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { localizedHref } from "@/i18n/hrefs";
import { areas, areasIndexHref } from "@/data/areas";

type AreasSectionProps = {
  areasNote: string;
  lang: string;
};

export function AreasSection({ areasNote, lang }: AreasSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Service Areas"
          title="Serving Kuala Lumpur & Selangor"
          description={areasNote}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {areas.map((area) => (
            <article key={area.id} className="card p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-brand">
                    <IconMapPin className="h-5 w-5" />
                  </span>
                  <h3 className="h3-card">{area.label}</h3>
                </div>
                <Link
                  href={localizedHref(area.href, lang)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  View areas
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">{area.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {area.places.map((place) => (
                  <li key={place.name}>
                    <Link
                      href={localizedHref(place.href, lang)}
                      className="chip transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {place.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200/80 bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="max-w-2xl">
              <h3 className="text-base font-semibold tracking-tight text-navy">
                Every area has its own guide
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                Local housing stock, common problems and practical service notes for
                neighbourhoods and towns across the Klang Valley.
              </p>
            </div>
            <Link
              href={localizedHref(areasIndexHref, lang)}
              className="btn btn-outline"
            >
              Browse All Service Areas
            </Link>
          </div>
        </div>

        <p className="mt-6 text-sm text-secondary">
          Not sure if we cover your area? Ask us — we serve most Klang Valley locations.
        </p>
      </div>
    </section>
  );
}
