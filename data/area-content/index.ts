import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import { getSubServicesForLocation } from "@/data/sub-services";
import type { SubServiceDefinition } from "@/data/sub-services/types";
import type { AreaRegion, AreaRegionId, AreaDetail } from "./types";
import { kualaLumpur } from "./kuala-lumpur";
import { selangor } from "./selangor";
import type { AreaFaq } from "./types";
import { areaRegionTranslations, areaTranslations } from "./translations";

export type { AreaRegion, AreaRegionId, AreaDetail } from "./types";

/** English area guides — the source of truth for structure and meaning. */
export const areaRegions: AreaRegion[] = [kualaLumpur, selangor];

/** Merges a translated area guide over the English one, keeping every link. */
function localizeArea(area: AreaDetail, lang: LanguageCode): AreaDetail {
  if (lang === "en") {
    return area;
  }

  const translation = areaTranslations[lang][`${area.region}/${area.slug}`];

  if (!translation) {
    return area;
  }

  const { serviceNotes, ...copy } = translation;

  return {
    ...area,
    ...copy,
    region: area.region,
    slug: area.slug,
    servicesAvailable: area.servicesAvailable.map((focus, index) => ({
      serviceSlug: focus.serviceSlug,
      note: serviceNotes[index] ?? focus.note,
    })),
    relatedServices: area.relatedServices,
    relatedProblems: area.relatedProblems,
    nearbyAreas: area.nearbyAreas,
  };
}

function localizeRegion(region: AreaRegion, lang: LanguageCode): AreaRegion {
  const areas = region.areas.map((area) => localizeArea(area, lang));

  if (lang === "en") {
    return region;
  }

  const translation = areaRegionTranslations[lang][region.id];

  if (!translation) {
    return { ...region, areas };
  }

  const { serviceNotes, ...copy } = translation;

  return {
    ...region,
    ...copy,
    id: region.id,
    servicesAvailable: region.servicesAvailable.map((focus, index) => ({
      serviceSlug: focus.serviceSlug,
      note: serviceNotes[index] ?? focus.note,
    })),
    areas,
  };
}

export function getAreaRegions(lang: string = "en"): AreaRegion[] {
  const code = getLanguageCode(lang);
  return areaRegions.map((region) => localizeRegion(region, code));
}

export function getAreaRegion(
  id: string | undefined | null,
  lang: string = "en",
): AreaRegion | undefined {
  if (!id) {
    return undefined;
  }

  const region = areaRegions.find((item) => item.id === id);

  return region ? localizeRegion(region, getLanguageCode(lang)) : undefined;
}

export function isAreaRegionId(
  value: string | undefined | null,
): value is AreaRegionId {
  return value === "kuala-lumpur" || value === "selangor";
}

export function getAreaDetail(
  regionId: string | undefined | null,
  slug: string | undefined | null,
  lang: string = "en",
): AreaDetail | undefined {
  if (!regionId || !slug) {
    return undefined;
  }

  const region = areaRegions.find((item) => item.id === regionId);
  const area = region?.areas.find((item) => item.slug === slug);

  return area ? localizeArea(area, getLanguageCode(lang)) : undefined;
}

export function getAllAreas(lang: string = "en"): AreaDetail[] {
  return getAreaRegions(lang).flatMap((region) => region.areas);
}

export function getAreaHref(area: Pick<AreaDetail, "region" | "slug">): string {
  return `/areas/${area.region}/${area.slug}`;
}

/**
 * Phase 35 — the scopes of work a region's own area guides collectively cover.
 *
 * The two region hubs were the last page type carrying a service layer but no
 * scope layer: each listed the ten services most requested across the region
 * while all 53 of its own area guides listed the specific scopes carried out
 * there (Phase 29), so the most specific page family on the site — the 51
 * sub-service pages — had no inbound link from either hub.
 *
 * The list is a pure union: for every area guide in the region it calls
 * `getSubServicesForLocation()` — the exact derivation that guide already
 * renders — so a hub can never claim a scope its own guides do not carry.
 * Entries are ranked by how many of the region's guides cover them (widest
 * first) and ties keep guide order, so the result is stable. Nothing is
 * inferred from a service name or a keyword.
 */
export function getSubServicesForRegion(
  region: AreaRegion,
  limit?: number,
): SubServiceDefinition[] {
  const found = new Map<string, SubServiceDefinition>();
  const counts = new Map<string, number>();
  const order: string[] = [];

  for (const area of region.areas) {
    for (const sub of getSubServicesForLocation(area.slug, area.relatedProblems)) {
      if (!found.has(sub.slug)) {
        found.set(sub.slug, sub);
        order.push(sub.slug);
      }
      counts.set(sub.slug, (counts.get(sub.slug) ?? 0) + 1);
    }
  }

  const ranked = rankByCoverage(order, counts);
  const slugs = limit && limit > 0 ? ranked.slice(0, limit) : ranked;

  return slugs
    .map((slug) => found.get(slug))
    .filter((sub): sub is SubServiceDefinition => Boolean(sub));
}

/**
 * Phase 35 — the problem guides a region's own area guides point at, most
 * widely noted first.
 *
 * Same rule as the scope union: the slugs come from `AreaDetail.relatedProblems`
 * on the region's own guides, ranked by how many of them note the problem, so a
 * hub can never advertise a problem its own guides do not cover.
 */
export function getRegionProblemSlugs(region: AreaRegion, limit?: number): string[] {
  const counts = new Map<string, number>();
  const order: string[] = [];

  for (const area of region.areas) {
    for (const slug of area.relatedProblems) {
      if (!counts.has(slug)) {
        order.push(slug);
      }
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }

  const ranked = rankByCoverage(order, counts);
  return limit && limit > 0 ? ranked.slice(0, limit) : ranked;
}

/** Widest coverage first; ties keep the order the guides declared them. */
function rankByCoverage(order: string[], counts: Map<string, number>): string[] {
  const firstSeen = new Map(order.map((slug, index) => [slug, index]));

  return [...order].sort((a, b) => {
    const byCount = (counts.get(b) ?? 0) - (counts.get(a) ?? 0);
    return byCount !== 0 ? byCount : (firstSeen.get(a) ?? 0) - (firstSeen.get(b) ?? 0);
  });
}

export function getOtherRegion(
  region: AreaRegion,
  lang: string = "en",
): AreaRegion | undefined {
  return getAreaRegions(lang).find((item) => item.id !== region.id);
}

/** Slugs with a complete translation in a language — used by the build guard. */
export function translatedAreaSlugs(lang: "ms" | "zh"): string[] {
  return areaRegions
    .flatMap((region) => region.areas.map((area) => `${region.id}/${area.slug}`))
    .filter((id) => Boolean(areaTranslations[lang][id]));
}

export function translatedAreaRegionIds(lang: "ms" | "zh"): string[] {
  return areaRegions
    .map((region) => region.id)
    .filter((id) => Boolean(areaRegionTranslations[lang][id]));
}

/** FAQs shown on the /areas index page. */
export const areasIndexFaqs: AreaFaq[] = [
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Kuala Lumpur and Selangor — our main guides cover 21 Kuala Lumpur neighbourhoods and 32 Selangor towns, with more areas served on request across the Klang Valley.",
  },
  {
    question: "What is the Klang Valley?",
    answer:
      "The Klang Valley is the metropolitan region centred on Kuala Lumpur and surrounding Selangor towns — Petaling Jaya, Subang Jaya, Shah Alam, Klang, Kajang, Bangi, Sepang and the rest. When we say we serve the Klang Valley, we mean Kuala Lumpur plus these Selangor districts.",
  },
  {
    question: "My area isn't listed. Can you still help?",
    answer:
      "Quite possibly — the guides cover our most requested areas, not a boundary. Send us a message with your location and the work you need, and we'll confirm what we can do.",
  },
  {
    question: "Do you serve high-rise and landed properties?",
    answer:
      "Both. Strata work follows each building's management rules, and landed work is scheduled around your household — the area guides explain the practical details for each location.",
  },
];
