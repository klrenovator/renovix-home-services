import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconAlertTriangle, IconArrowRight } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import { getProblemsBySlugs } from "@/data/problem-content";
import type { AreaDetail } from "@/data/area-content/types";

type AreaProblemsSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaProblemsSection({ area, lang }: AreaProblemsSectionProps) {
  const problemPages = getProblemsBySlugs(area.relatedProblems);

  return (
    <section id="problems" className="section section-surface scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow="Common Problems"
          title={`Common Renovation & Repair Problems in ${area.name}`}
          description={area.problemsIntro}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {area.problems.map((problem) => (
            <li key={problem.title} className="card h-full p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <IconAlertTriangle className="h-5 w-5" />
                </span>
                <h3 className="h3-card">{problem.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">{problem.description}</p>
            </li>
          ))}
        </ul>

        {problemPages.length > 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
            <h3 className="text-base font-semibold tracking-tight text-navy">
              Learn more about these problems
            </h3>
            <p className="mt-2 text-sm leading-6 text-secondary">
              Detailed problem guides explain causes, warning signs and how the work is
              carried out.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {problemPages.map((problem) => (
                <li key={problem.slug}>
                  <Link
                    href={localizeHref(`/problems/${problem.slug}`, lang)}
                    className="chip inline-flex items-center gap-1.5 transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {problem.name}
                    <IconArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
