import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import { getLanguageCode } from "@/data/languages";
import { getServiceCategories } from "@/data/i18n";
import { subServiceLanguages } from "@/data/sub-services";
import type { SubServiceDefinition } from "@/data/sub-services/types";

/**
 * Phase 28 — the hub → spoke half of the sub-service link graph.
 *
 * Until now the dedicated sub-service pages were only reachable from each
 * other, from the guides that cite them and from the projects that show them:
 * their own parent service page — the strongest hub for that topic — never
 * linked down to them, and the problem guides never linked to the exact scopes
 * that resolve them. This block closes both directions with links derived from
 * the registries:
 *
 * - `scope="service"` lists every published sub-service of that service, so a
 *   pillar page points at its own detail pages (rendered inside the existing
 *   sub-service section, which it extends rather than replaces).
 * - `scope="problem"` lists the sub-services whose registry entry declares the
 *   problem in `relatedProblems` — the inverse of a relationship that is
 *   already audited in the other direction.
 * - `scope="area"` (Phase 29) lists the scopes relevant to one location guide.
 *   The list arrives already ordered and derived from the two authored
 *   sources — the search-intent matrix and the area's own locally noted
 *   problems (`getSubServicesForLocation`) — and every entry shows the parent
 *   service it belongs to, so a location page never becomes a bare link list.
 * - `scope="region"` (Phase 35) lists the scopes a region hub's own area
 *   guides collectively cover (`getSubServicesForRegion`), the union of every
 *   child guide's list — so the hub can never claim a scope its own guides do
 *   not carry.
 *
 * Nothing here is authored twice: names come from the localized sub-service
 * registry and the parent service name from the localized service list, and a
 * link is only rendered for languages where that sub-service page actually
 * exists (`subServiceLanguages`). A sub-service without a page in the current
 * language is omitted rather than linking to a 404.
 */

export type SubServiceLinksScope = "service" | "problem" | "area" | "region";

type SubServiceLinksProps = {
  subServices: SubServiceDefinition[];
  scope: SubServiceLinksScope;
  /** Localized page name used in the heading (`{name}`). */
  name: string;
  lang: string;
};

type SubServiceLinkEntry = {
  slug: string;
  name: string;
  href: string;
  serviceName: string;
};

function buildEntries(
  subServices: SubServiceDefinition[],
  lang: string,
): SubServiceLinkEntry[] {
  const code = getLanguageCode(lang);
  const serviceNames = new Map(
    getServiceCategories(code).map((service) => [service.slug, service.name]),
  );

  return subServices
    .filter((sub) => subServiceLanguages(sub.slug).includes(code))
    .map((sub) => ({
      slug: sub.slug,
      name: sub[code].name,
      href: localizedHref(`/services/${sub.serviceSlug}/${sub.slug}`, code),
      serviceName: serviceNames.get(sub.serviceSlug) ?? sub.serviceSlug,
    }));
}

/**
 * Heading + linked list. `inline` sits inside the service page's existing
 * sub-service section (indented by a rule, no second section); otherwise it is
 * the body of the standalone section below.
 */
export function SubServiceLinksBlock({
  subServices,
  scope,
  name,
  lang,
  headingLevel = 3,
  inline = true,
}: SubServiceLinksProps & { headingLevel?: 2 | 3; inline?: boolean }) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code).subServiceLinks;
  const entries = buildEntries(subServices, lang);

  if (entries.length === 0) {
    return null;
  }

  const Heading = headingLevel === 2 ? "h2" : "h3";
  const title =
    scope === "service"
      ? format(t.serviceTitle, { name })
      : scope === "area"
        ? format(t.areaTitle, { name })
        : scope === "region"
          ? format(t.regionTitle, { name })
          : format(t.problemTitle, { name });
  const description = format(
    scope === "service"
      ? t.serviceDescription
      : scope === "area"
        ? t.areaDescription
        : scope === "region"
          ? t.regionDescription
          : t.problemDescription,
    { name },
  );
  const eyebrow =
    scope === "service"
      ? t.serviceEyebrow
      : scope === "area"
        ? t.areaEyebrow
        : scope === "region"
          ? t.regionEyebrow
          : t.problemEyebrow;

  return (
    <div className={inline ? "mt-12 border-t border-slate-200/80 pt-8" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading
        className={`mt-3 text-navy ${headingLevel === 2 ? "h2-section" : "h3-card"}`}
      >
        {title}
      </Heading>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">{description}</p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {entries.map((entry) => (
          <li
            key={entry.slug}
            className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <Link
                href={entry.href}
                className="text-sm font-semibold leading-6 text-navy transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {entry.name}
              </Link>
              {scope !== "service" ? (
                <p className="mt-1 text-xs text-secondary">
                  {format(t.underService, { service: entry.serviceName })}
                </p>
              ) : null}
            </div>
            <Link
              href={entry.href}
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t.viewDetails}
              <IconArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Section wrapper for pages whose section order has no sub-service block of its
 * own (the problem guides). Same registry-derived content as the block above.
 */
export function SubServiceLinksSection({
  subServices,
  scope,
  name,
  lang,
  surface = true,
}: SubServiceLinksProps & { surface?: boolean }) {
  const entries = buildEntries(subServices, lang);

  if (entries.length === 0) {
    return null;
  }

  return (
    <section className={`section ${surface ? "section-surface" : "bg-white"}`}>
      <div className="container-app">
        <SubServiceLinksBlock
          subServices={subServices}
          scope={scope}
          name={name}
          lang={lang}
          headingLevel={2}
          inline={false}
        />
      </div>
    </section>
  );
}
