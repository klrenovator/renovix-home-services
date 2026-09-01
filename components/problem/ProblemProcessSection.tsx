import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemProcessSectionProps = {
  problem: ProblemDetail;
};

export function ProblemProcessSection({ problem }: ProblemProcessSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Our Process"
          title={problem.processTitle}
          description={problem.processIntro}
        />

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problem.processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200/80 bg-surface p-6"
            >
              <span className="text-xs font-bold tracking-widest text-brand">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
