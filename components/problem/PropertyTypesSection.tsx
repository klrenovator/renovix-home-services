import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBuilding } from "@/components/icons";
import type { ProblemDetail } from "@/data/problem-content/types";

type PropertyTypesSectionProps = {
  problem: ProblemDetail;
};

export function PropertyTypesSection({ problem }: PropertyTypesSectionProps) {
  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow="Property Types"
          title="Property Types We Help With"
          description={problem.propertyTypesIntro}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problem.propertyTypes.map((propertyType) => (
            <li key={propertyType.label} className="card h-full p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
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
