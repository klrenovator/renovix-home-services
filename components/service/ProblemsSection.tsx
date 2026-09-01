import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconAlertTriangle } from "@/components/icons";
import type { ServiceDetail } from "@/data/service-content/types";

type ProblemsSectionProps = {
  detail: ServiceDetail;
};

export function ProblemsSection({ detail }: ProblemsSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Problems We Solve"
          title={detail.problemsTitle}
          description={detail.problemsIntro}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {detail.problems.map((problem) => (
            <li key={problem.title} className="card flex h-full flex-col gap-3 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-navy">
                <IconAlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="h3-card">{problem.title}</h3>
              <p className="text-sm leading-6 text-secondary">{problem.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
