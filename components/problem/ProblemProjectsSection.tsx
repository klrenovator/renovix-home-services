import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import {
  getProjectContent,
  getProjectsForProblem,
} from "@/data/project-content";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemProjectsSectionProps = {
  problem: ProblemDetail;
  lang: string;
};

const MAX_PROJECTS = 6;

/**
 * Phase 30 — project proof on problem guides (the Problem → Project edge).
 *
 * Project pages have linked to their related problem guides since Phase 21,
 * but the problem guides never linked back to photographed work. This section
 * closes that direction with the exact inverse of `ProjectProblemsSection`:
 * a project appears here only when a sub-service mapped to it declares this
 * problem in its own `relatedProblems` (Phase 19 registry). Problems whose
 * resolving scopes have no photographed work yet render nothing — the section
 * is omitted rather than borrowing projects from a parent service, the same
 * honesty rule the sub-service pages follow.
 */
export function ProblemProjectsSection({
  problem,
  lang,
}: ProblemProjectsSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const projects = getProjectsForProblem(problem.slug);

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.problemPage.projectsEyebrow}
          title={format(t.problemPage.projectsTitle, { name: problem.name })}
          description={t.problemPage.projectsDescription}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, MAX_PROJECTS).map((project) => {
            const href = contentHref("project", project.slug, code);
            const content = getProjectContent(project.slug, code);
            return (
              <Link
                key={project.slug}
                href={href ?? "#"}
                className="card card-hover group flex h-full flex-col overflow-hidden p-0"
                aria-disabled={!href}
              >
                <span className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image.src}
                    alt={content.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="text-base font-semibold tracking-tight text-navy">
                    {content.title}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    {t.projects.viewProject}
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
