import Link from "next/link";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getRegionName } from "@/data/i18n";
import { getAreaDetail } from "@/data/area-content";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectLocationSectionProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Location block.
 *
 * When the business has confirmed where a job was carried out, the project
 * links through to the matching page in the existing area architecture. When
 * no location has been supplied the section says so plainly and links to the
 * service-areas index instead — no area is ever claimed for a project without
 * the data behind it.
 */
export function ProjectLocationSection({
  project,
  lang,
}: ProjectLocationSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const location = project.location;

  let name: string | undefined;
  let href: string | null = null;

  if (location) {
    if (location.area) {
      const area = getAreaDetail(location.region, location.area, code);
      name = area
        ? `${area.name}, ${getRegionName(location.region, code)}`
        : undefined;
      href = contentHref("area", `${location.region}/${location.area}`, code);
    }

    if (!name) {
      name = getRegionName(location.region, code);
      href = contentHref("areaRegion", location.region, code);
    }
  }

  return (
    <section className="section section-surface">
      <div className="container-app">
        <div className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <IconMapPin className="h-6 w-6" aria-hidden="true" />
          </span>

          <div>
            <p className="eyebrow">{t.projectPage.locationEyebrow}</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-navy">
              {t.projectPage.locationTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary">
              {name
                ? t.areasBlock.guideDescription
                : t.projectPage.locationUnverifiedBody}
            </p>
            {name ? (
              <p className="mt-3 text-sm font-semibold text-navy">{name}</p>
            ) : null}
          </div>

          <Link
            href={href ?? localizedHref("/areas", code)}
            className="btn btn-outline whitespace-nowrap"
          >
            <span>{t.cta.viewServiceAreas}</span>
            <IconArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
