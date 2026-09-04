import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getProjectSubServices } from "@/data/project-content";
import { getProblemsBySlugs } from "@/data/problem-content";
import { getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectProblemsSectionProps = {
  project: ResolvedProject;
  lang: string;
};

const MAX_GUIDES = 6;

/**
 * Phase 21 — related problem guides on project pages.
 *
 * Guides are reached through the project's *genuine* sub-service mapping:
 * each mapped sub-service already declares its own related problems in the
 * Phase 19 registry, so a floor-tiling project surfaces the uneven-tiles and
 * cracked-tile guides, never a guessed link. When the project maps to no
 * sub-service (or the language has no guide translation), the section is
 * omitted entirely.
 */
export function ProjectProblemsSection({
  project,
  lang,
}: ProjectProblemsSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);

  const slugs = Array.from(
    new Set(
      getProjectSubServices(project).flatMap((sub) => sub.relatedProblems),
    ),
  ).slice(0, MAX_GUIDES);

  const problems = getProblemsBySlugs(slugs, code);

  if (problems.length === 0) {
    return null;
  }

  return (
    <section className="section section-surface">
      <div className="container-app">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.projectPage.relatedGuidesEyebrow}</p>
          <h2 className="h2-section mt-3 text-navy">
            {t.projectPage.relatedGuidesTitle}
          </h2>
          <p className="lead mt-4">{t.projectPage.relatedGuidesBody}</p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => {
            const href = contentHref("problem", problem.slug, code);

            return (
              <li key={problem.slug}>
                <article className="card flex h-full flex-col p-6">
                  <h3 className="text-base font-semibold tracking-tight text-navy">
                    {problem.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                    {problem.subtitle}
                  </p>
                  {href ? (
                    <Link
                      href={href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {t.cta.viewProblem}
                      <IconArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
