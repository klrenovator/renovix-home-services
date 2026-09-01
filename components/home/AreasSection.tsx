import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import { areas, areasIndexHref } from "@/data/areas";

type HomeAreasSectionProps = {
  lang?: string;
};

export function AreasSection({ lang = "en" }: HomeAreasSectionProps) {
  return (
    <section id="areas" className="section scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow="Where We Work"
          title="Serving Kuala Lumpur & Selangor"
          description="Renovix provides home renovation and improvement services throughout the Klang Valley — with dedicated local guides for the main city neighbourhoods and key Selangor towns."
          align="center"
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
                  href={localizeHref(area.href, lang)}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Explore
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">{area.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {area.places.map((place) => (
                  <li key={place.name}>
                    <Link
                      href={localizeHref(place.href, lang)}
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

        <div className="mt-8 text-center">
          <Link href={localizeHref(areasIndexHref, lang)} className="btn btn-primary">
            Browse All Service Areas
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
