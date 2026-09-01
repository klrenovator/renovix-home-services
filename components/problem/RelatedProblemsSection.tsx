import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconAlertTriangle } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import type { ProblemDetail } from "@/data/problem-content/types";

type RelatedProblemsSectionProps = {
  problems: ProblemDetail[];
  current: ProblemDetail;
  lang: string;
};

export function RelatedProblemsSection({
  problems,
  current,
  lang,
}: RelatedProblemsSectionProps) {
  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow="Related Problems"
          title="Problems that are often linked"
          description={`These issues are frequently related to ${current.name.toLowerCase()}. Explore them to understand the wider picture.`}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <Link
              key={problem.slug}
              href={localizeHref(`/problems/${problem.slug}`, lang)}
              className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <IconAlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                {problem.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                {problem.subtitle}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                View problem
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
