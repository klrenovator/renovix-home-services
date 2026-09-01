import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons, IconArrowRight } from "@/components/icons";
import { problems } from "@/data/problems";
import { localizeHref } from "@/data/navigation";

type ProblemSectionProps = {
  lang: string;
};

export function ProblemSection({ lang }: ProblemSectionProps) {
  return (
    <section id="problems" className="section scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow="Common Home Issues"
          title="Having a Problem at Home? We Can Help."
          description="These are some of the home problems we can assess and support you with across the Klang Valley."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = serviceIcons[problem.icon];
            return (
              <li key={problem.id}>
                <Link
                  href={localizeHref(problem.href, lang)}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition-colors hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{problem.label}</span>
                  <IconArrowRight className="ml-auto h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-secondary">
          Browse every home problem we cover in our{" "}
          <Link
            href={localizeHref("/problems", lang)}
            className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-dark"
          >
            problems library
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
