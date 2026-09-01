import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconAlertTriangle, IconArrowRight } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import type { ServiceDetail } from "@/data/service-content/types";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemsSectionProps = {
  detail: ServiceDetail;
  relatedProblemPages?: ProblemDetail[];
  lang: string;
};

export function ProblemsSection({
  detail,
  relatedProblemPages = [],
  lang,
}: ProblemsSectionProps) {
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

        {relatedProblemPages.length > 0 ? (
          <div className="mt-10">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-navy">
              <span className="h-1.5 w-8 rounded-full bg-accent" aria-hidden="true" />
              Explore these problem pages
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProblemPages.map((problem) => (
                <Link
                  key={problem.slug}
                  href={localizeHref(`/problems/${problem.slug}`, lang)}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition-colors hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <IconAlertTriangle className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{problem.name}</span>
                  <IconArrowRight className="ml-auto h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
