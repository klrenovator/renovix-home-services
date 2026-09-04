import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight } from "@/components/icons";
import { getDictionary, format } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { getPublishedProjects, getProjectContent } from "@/data/project-content";
import { projectCategories } from "@/data/projects";
import { getSubServicesByService } from "@/data/sub-services";

type Props = {
  serviceSlug: string;
  serviceName: string;
  lang: string;
};

function serviceProjectCategoryIds(serviceSlug: string): string[] {
  return projectCategories
    .filter((category) => category.servicePath === `/services/${serviceSlug}`)
    .map((category) => category.id);
}

/**
 * Phase 19 reverse-linking fix: a service page that has real published work
 * behind it surfaces that work as contextual "See our work" links (Service →
 * Project), and links out to its standalone sub-service pages (Service →
 * Sub-service). Nothing is invented — only projects already in the registry.
 */
export function ServiceSubLinksSection({ serviceSlug, serviceName, lang }: Props) {
  const t = getDictionary(lang);
  const categoryIds = new Set(serviceProjectCategoryIds(serviceSlug));
  const projects = getPublishedProjects().filter((project) => categoryIds.has(project.category));
  const subs = getSubServicesByService(serviceSlug);

  if (projects.length === 0 && subs.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container-app grid gap-10 lg:grid-cols-2">
        {projects.length > 0 && (
          <div>
            <SectionHeading
              eyebrow={t.subServicePage.projectEyebrow}
              title={format(t.subServicePage.projectTitle, { service: serviceName })}
              description={format(t.subServicePage.projectDescription, { service: serviceName })}
            />
            <ul className="mt-6 space-y-3">
              {projects.map((project) => {
                const href = contentHref("project", project.slug, lang);
                const title = getProjectContent(project.slug, lang).title;
                return (
                  <li key={project.slug}>
                    <Link
                      href={href ?? localizedHref("/projects", lang)}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-surface p-4 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="text-sm font-semibold text-navy">{title}</span>
                      <IconArrowRight className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {subs.length > 0 && (
          <div>
            <SectionHeading
              eyebrow={t.servicePage.subServicesEyebrow}
              title={format(t.subServicePage.relatedSubTitle, { service: serviceName })}
              description=""
            />
            <ul className="mt-6 space-y-3">
              {subs.map((sub) => {
                const code = lang === "ms" || lang === "zh" ? lang : "en";
                const text = sub[code];
                const href = localizedHref(`/services/${serviceSlug}/${sub.slug}`, lang);
                return (
                  <li key={sub.slug}>
                    <Link
                      href={href}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-surface p-4 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="text-sm font-semibold text-navy">{text.name}</span>
                      <IconArrowRight className="h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
