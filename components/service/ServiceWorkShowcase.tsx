import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getDictionary, format } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { getPublishedProjects, getProjectContent } from "@/data/project-content";
import { projectCategories } from "@/data/projects";
import type { ServiceDetail } from "@/data/service-content/types";

type ServiceWorkShowcaseProps = {
  detail: ServiceDetail;
  lang: string;
};

/**
 * Top-of-page work showcase: real project photos for this service, placed
 * directly under the hero so visitors see proof of work before the pricing.
 * Only published projects whose registry category genuinely maps to this
 * service are shown — no stock or AI imagery. Services with no matching
 * published project omit the section entirely.
 */
export function ServiceWorkShowcase({ detail, lang }: ServiceWorkShowcaseProps) {
  const t = getDictionary(lang);

  const categoryIds = new Set(
    projectCategories
      .filter((category) => category.servicePath === `/services/${detail.slug}`)
      .map((category) => category.id),
  );

  const projects = getPublishedProjects()
    .filter((project) => categoryIds.has(project.category))
    .slice(0, 3);

  if (projects.length === 0) {
    return null;
  }

  const projectsHref = localizedHref("/projects", lang);

  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.workShowcaseEyebrow}
          title={format(t.servicePage.workShowcaseTitle, { name: detail.name })}
          description={format(t.servicePage.workShowcaseDescription, { name: detail.name })}
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const href = contentHref("project", project.slug, lang);
            const content = getProjectContent(project.slug, lang);
            return (
              <Link
                key={project.slug}
                href={href ?? projectsHref}
                className="card card-hover group flex h-full flex-col overflow-hidden p-0"
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

        <p className="mt-8">
          <Link
            href={projectsHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy"
          >
            {t.servicePage.workShowcaseViewAll}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}
