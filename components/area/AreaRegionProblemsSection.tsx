import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconAlertTriangle, IconArrowRight } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import { getProblemsBySlugs } from "@/data/problem-content";
import { getRegionProblemSlugs } from "@/data/area-content";
import type { AreaRegion } from "@/data/area-content/types";

/** Region hubs cap the problem list; their 53 child guides carry the detail. */
const REGION_PROBLEM_LIMIT = 12;

type AreaRegionProblemsSectionProps = {
  region: AreaRegion;
  lang: string;
};

/**
 * Phase 35 — the problem half of the region-hub link graph.
 *
 * Both region hubs described local housing, districts and the services most
 * requested across the region, but linked to none of the 57 problem guides —
 * even though every one of their 53 area guides links to the problems common
 * in that location. The hub was the only page in the areas tree with no route
 * into the problem library.
 *
 * The list is `getRegionProblemSlugs()`: the union of the problem guides the
 * region's own area guides already link to, most widely noted first, so the hub
 * never advertises a problem its own guides do not cover. It reuses the chip
 * markup the area guides render inside their own problems section — an additive
 * section, no new component, no redesign.
 */
export function AreaRegionProblemsSection({
  region,
  lang,
}: AreaRegionProblemsSectionProps) {
  const t = getDictionary(lang);
  const slugs = getRegionProblemSlugs(region, REGION_PROBLEM_LIMIT);
  const problems = getProblemsBySlugs(slugs, lang);

  if (problems.length === 0) {
    return null;
  }

  return (
    <section id="problems" className="section bg-white scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areaRegion.problemsEyebrow}
          title={format(t.areaRegion.problemsTitle, { name: region.name })}
          description={format(t.areaRegion.problemsDescription, {
            name: region.name,
          })}
        />

        <div className="mt-10 rounded-2xl border border-slate-200/80 bg-surface p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <IconAlertTriangle className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold tracking-tight text-navy">
              {t.areaRegion.problemsLinkTitle}
            </h3>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
            {format(t.areaRegion.problemsNote, { name: region.name })}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {problems.map((problem) => (
              <li key={problem.slug}>
                <Link
                  href={contentHref("problem", problem.slug, lang) ?? "#"}
                  className="chip inline-flex items-center gap-1.5 transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {problem.name}
                  <IconArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
