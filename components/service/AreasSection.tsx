import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconMapPin } from "@/components/icons";
import { areas } from "@/data/areas";

type AreasSectionProps = {
  areasNote: string;
};

export function AreasSection({ areasNote }: AreasSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Service Areas"
          title="Serving Kuala Lumpur & Selangor"
          description={areasNote}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {areas.map((area) => (
            <article key={area.id} className="card p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-brand">
                  <IconMapPin className="h-5 w-5" />
                </span>
                <h3 className="h3-card">{area.label}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">{area.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {area.places.map((place) => (
                  <li key={place}>
                    <span className="chip">{place}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-secondary">
          Not sure if we cover your area? Ask us — we serve most Klang Valley locations.
        </p>
      </div>
    </section>
  );
}
