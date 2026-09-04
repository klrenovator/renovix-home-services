import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getServiceCategories } from "@/data/i18n";
import { getProjectSubServices } from "@/data/project-content";
import { subServiceLanguages } from "@/data/sub-services";
import { format, getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectSubServicesSectionProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Phase 21 — Project → Sub-service links.
 *
 * Lists the Phase 19 sub-service pages whose scope this project's photographs
 * genuinely cover, each labelled with its parent service for context. The
 * section renders only when the registry maps at least one sub-service to the
 * project; a project without a genuine match shows nothing rather than a
 * guessed link.
 */
export function ProjectSubServicesSection({
  project,
  lang,
}: ProjectSubServicesSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);

  const serviceNames = new Map(
    getServiceCategories(code).map((service) => [service.slug, service.name]),
  );

  const entries = getProjectSubServices(project)
    .filter((sub) => subServiceLanguages(sub.slug).includes(code))
    .map((sub) => ({
      slug: sub.slug,
      name: sub[code].name,
      serviceName: serviceNames.get(sub.serviceSlug) ?? sub.serviceSlug,
      href: localizedHref(`/services/${sub.serviceSlug}/${sub.slug}`, code),
      serviceHref: localizedHref(`/services/${sub.serviceSlug}`, code),
    }));

  if (entries.length === 0) {
    return null;
  }

  return (
    <section className="section section-surface">
      <div className="container-app">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.projectPage.subServicesEyebrow}</p>
          <h2 className="h2-section mt-3 text-navy">
            {t.projectPage.subServicesTitle}
          </h2>
          <p className="lead mt-4">{t.projectPage.subServicesBody}</p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {entries.map((entry) => (
            <li
              key={entry.slug}
              className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <Link
                  href={entry.href}
                  className="text-sm font-semibold text-navy transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {entry.name}
                </Link>
                <p className="mt-1 text-xs text-secondary">
                  <Link
                    href={entry.serviceHref}
                    className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {format(t.projectPage.subServicesUnder, {
                      service: entry.serviceName,
                    })}
                  </Link>
                </p>
              </div>
              <Link
                href={entry.href}
                className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t.cta.viewService}
                <IconArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
