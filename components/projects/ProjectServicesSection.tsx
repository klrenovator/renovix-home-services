import Link from "next/link";
import { IconArrowRight, serviceIcons } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getProjectCategory, getProjectServiceCategories } from "@/data/project-content";
import { getProjectCategories } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectServicesSectionProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * The Renovix service pages this project connects to.
 *
 * Only categories recorded against the project are linked — the primary
 * service always, plus any further service genuinely carried out on the same
 * job. Categories with no service page in the current language render as plain
 * text instead of a dead link.
 */
export function ProjectServicesSection({
  project,
  lang,
}: ProjectServicesSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const categories = getProjectCategories(code);

  const entries = getProjectServiceCategories(project)
    .map((id) => {
      const category = getProjectCategory(id);
      if (!category) {
        return undefined;
      }

      return {
        id,
        label:
          categories.find((item) => item.id === id)?.label ??
          t.projects.fallbackCategory,
        icon: serviceIcons[category.icon],
        href: contentHref("service", category.servicePath.replace("/services/", ""), code),
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  if (entries.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container-app">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.projectPage.servicesEyebrow}</p>
          <h2 className="h2-section mt-3 text-navy">
            {t.projectPage.servicesTitle}
          </h2>
          <p className="lead mt-4">{t.projectPage.servicesBody}</p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {entries.map((entry) => {
            const Icon = entry.icon;

            return (
              <li
                key={entry.id}
                className="card flex items-center justify-between gap-4 p-5"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-navy">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    {entry.label}
                  </span>
                </span>
                {entry.href ? (
                  <Link
                    href={entry.href}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {t.cta.viewService}
                    <IconArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
