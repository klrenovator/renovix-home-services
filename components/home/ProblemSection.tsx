import Link from "next/link";
import { serviceIcons, IconArrowRight } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLanguageCode } from "@/data/languages";
import { getProblemPreviews } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";

type ProblemSectionProps = {
  lang: string;
};

export function ProblemSection({ lang }: ProblemSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const problems = getProblemPreviews(code);

  return (
    <section id="problems" className="section scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.home.problems.eyebrow}
          title={t.home.problems.title}
          description={t.home.problems.description}
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = serviceIcons[problem.icon];
            const href = contentHref("problem", problem.id, code);

            const body = (
              <>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{problem.label}</span>
                {href ? (
                  <IconArrowRight className="ml-auto h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                ) : null}
              </>
            );

            const classes =
              "group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft transition-colors hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

            return (
              <li key={problem.id}>
                {href ? (
                  <Link href={href} className={classes}>
                    {body}
                  </Link>
                ) : (
                  <span className={classes}>{body}</span>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-secondary">
          {t.home.problems.libraryPrefix}{" "}
          <Link
            href={localizedHref("/problems", code)}
            className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-dark"
          >
            {t.home.problems.libraryLink}
          </Link>
          {t.home.problems.librarySuffix}
        </p>
      </div>
    </section>
  );
}
