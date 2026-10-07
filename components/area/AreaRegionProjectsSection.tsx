import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getProjectCategories } from "@/data/i18n";
import {
  getProjectContent,
  getPublishedProjectsForRegion,
} from "@/data/project-content";
import { format, getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import type { AreaRegion } from "@/data/area-content/types";

type AreaRegionProjectsSectionProps = {
  region: AreaRegion;
  lang: string;
};

const MAX_PROJECTS = 6;

/**
 * Lead-generation Task 3.4 — project proof on region hubs (Region → Project edge).
 *
 * When the business confirms real work that took place in this region, this
 * section surfaces those projects with genuine photographs, scope and
 * links to the project case studies. When no projects have been confirmed for
 * this region, the section is cleanly omitted.
 */
export function AreaRegionProjectsSection({
  region,
  lang,
}: AreaRegionProjectsSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const projects = getPublishedProjectsForRegion(region.id);

  if (projects.length === 0) {
    return null;
  }

  const categoryLabels = new Map(
    getProjectCategories(code).map((cat) => [cat.id, cat.label]),
  );

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areaRegion.projectsEyebrow}
          title={format(t.areaRegion.projectsTitle, { name: region.name })}
          description={format(t.areaRegion.projectsDescription, { name: region.name })}
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, MAX_PROJECTS).map((project) => {
            const href = contentHref("project", project.slug, code);
            const content = getProjectContent(project.slug, code);
            const categoryLabel = categoryLabels.get(project.category);

            return (
              <article
                key={project.slug}
                className="card card-hover group flex h-full flex-col overflow-hidden p-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image.src}
                    alt={content.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {categoryLabel ? (
                    <span className="absolute top-3 left-3 rounded-full bg-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-xs">
                      {categoryLabel}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
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
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-secondary">
                    {content.shortDescription}
                  </p>
                  <div className="mt-4 pt-2">
                    {href ? (
                      <Link
                        href={href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {t.areaRegion.viewProject}
                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:text-left">
          <Link
            href={localizedHref("/projects", code)}
            className="btn btn-outline"
          >
            <span>{t.areaRegion.allProjectsCta}</span>
            <IconArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
