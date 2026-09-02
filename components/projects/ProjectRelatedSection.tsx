import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import {
  getProjectContent,
  getRelatedPublishedProjects,
} from "@/data/project-content";
import { getDictionary, format } from "@/i18n";
import { getProjectCategories } from "@/data/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectRelatedSectionProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * "More work like this" — sibling projects from the same service category.
 *
 * These are real internal links into the published portfolio. When a category
 * only has one entry yet, the section explains that instead of padding itself
 * with unrelated work.
 */
export function ProjectRelatedSection({
  project,
  lang,
}: ProjectRelatedSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const related = getRelatedPublishedProjects(project);
  const categoryLabel =
    getProjectCategories(code).find((item) => item.id === project.category)
      ?.label ?? t.projects.fallbackCategory;

  return (
    <section className="section bg-white">
      <div className="container-app">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.projectPage.relatedEyebrow}</p>
          <h2 className="h2-section mt-3 text-navy">
            {format(t.projectPage.relatedTitle, { category: categoryLabel })}
          </h2>
        </div>

        {related.length === 0 ? (
          <p className="mt-6 max-w-2xl rounded-2xl border border-slate-200 bg-surface p-6 text-sm leading-6 text-secondary">
            {t.projectPage.relatedEmpty}
          </p>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const content = getProjectContent(item.slug, code);
              const href = contentHref("project", item.slug, code);

              return (
                <li key={item.slug}>
                  <article className="card flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <Image
                        src={item.image.src}
                        alt={content.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading="lazy"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-semibold tracking-tight text-navy">
                        {href ? (
                          <Link
                            href={href}
                            className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                          >
                            {content.title}
                          </Link>
                        ) : (
                          content.title
                        )}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-secondary">
                        {content.shortDescription}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}

        <Link
          href={localizedHref("/projects", code)}
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {t.projectPage.backToProjects}
          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
