import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBuilding } from "@/components/icons";
import type { AreaDetail } from "@/data/area-content/types";

type AreaPropertyTypesSectionProps = {
  area: AreaDetail;
};

export function AreaPropertyTypesSection({ area }: AreaPropertyTypesSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Property Types"
          title={`Property Types in ${area.name}`}
          description={area.propertyTypesIntro}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {area.propertyTypes.map((propertyType) => (
            <li key={propertyType.label} className="card h-full p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <IconBuilding className="h-5 w-5" />
                </span>
                <h3 className="h3-card">{propertyType.label}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">{propertyType.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
