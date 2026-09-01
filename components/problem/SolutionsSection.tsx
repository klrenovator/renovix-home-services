import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrench } from "@/components/icons";
import { getDictionary } from "@/i18n";
import type { ProblemDetail } from "@/data/problem-content/types";

type SolutionsSectionProps = {
  problem: ProblemDetail;
  lang: string;
};

export function SolutionsSection({ problem, lang }: SolutionsSectionProps) {
  const t = getDictionary(lang);

  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.problemPage.solutionsEyebrow}
          title={t.problemPage.solutionsTitle}
          description={t.problemPage.solutionsDescription}
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
