import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconMapPin } from "@/components/icons";
import { areas } from "@/data/areas";

export function AreasSection() {
  return (
    <section id="areas" className="section scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow="Where We Work"
          title="Serving Kuala Lumpur & Selangor"
          description="Renovix provides home renovation and improvement services throughout the Klang Valley, including the main city and key Selangor locations."
          align="center"
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

        <p className="mt-6 text-center text-sm text-secondary">
          Dedicated area service pages will be added in a later phase.
        </p>
      </div>
    </section>
  );
}
