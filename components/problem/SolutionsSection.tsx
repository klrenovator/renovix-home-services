import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrench } from "@/components/icons";
import type { ProblemDetail } from "@/data/problem-content/types";

type SolutionsSectionProps = {
  problem: ProblemDetail;
};

export function SolutionsSection({ problem }: SolutionsSectionProps) {
  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow="Possible Solutions"
          title="How we can fix it"
          description="The practical approaches we take to resolve this problem — from a targeted repair to a fuller solution."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {problem.solutions.map((solution) => (
            <article key={solution.title} className="card flex h-full gap-4 p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <IconWrench className="h-5 w-5" />
              </span>
              <div>
                <h3 className="h3-card">{solution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{solution.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
