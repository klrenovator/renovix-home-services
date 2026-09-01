import type { AreaRegion, AreaRegionId, AreaDetail } from "./types";
import { kualaLumpur } from "./kuala-lumpur";
import { selangor } from "./selangor";
import type { AreaFaq } from "./types";

export type { AreaRegion, AreaRegionId, AreaDetail } from "./types";

export const areaRegions: AreaRegion[] = [kualaLumpur, selangor];

export function getAreaRegion(
  id: string | undefined | null,
): AreaRegion | undefined {
  if (!id) {
    return undefined;
  }

  return areaRegions.find((region) => region.id === id);
}

export function isAreaRegionId(
  value: string | undefined | null,
): value is AreaRegionId {
  return value === "kuala-lumpur" || value === "selangor";
}

export function getAreaDetail(
  regionId: string | undefined | null,
  slug: string | undefined | null,
): AreaDetail | undefined {
  if (!regionId || !slug) {
    return undefined;
  }

  return getAreaRegion(regionId)?.areas.find((area) => area.slug === slug);
}

export function getAllAreas(): AreaDetail[] {
  return areaRegions.flatMap((region) => region.areas);
}

export function getRegionPath(regionId: AreaRegionId): string {
  return `/areas/${regionId}`;
}

export function getAreaPath(area: AreaDetail): string {
  return `/areas/${area.region}/${area.slug}`;
}

export function getAreaHref(area: Pick<AreaDetail, "region" | "slug">): string {
  return `/areas/${area.region}/${area.slug}`;
}

/** Resolves the slugs an area lists as nearby into full area details. */
export function getNearbyAreas(area: AreaDetail): AreaDetail[] {
  return area.nearbyAreas
    .map((slug) => getAllAreas().find((item) => item.slug === slug))
    .filter((item): item is AreaDetail => Boolean(item));
}

export function getOtherRegion(region: AreaRegion): AreaRegion | undefined {
  return areaRegions.find((item) => item.id !== region.id);
}

/** FAQs shown on the /areas index page. */
export const areasIndexFaqs: AreaFaq[] = [
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Kuala Lumpur and Selangor — our main guides cover 14 KL neighbourhoods and 17 Selangor towns, with more areas served on request across the Klang Valley.",
  },
  {
    question: "What is the Klang Valley?",
    answer:
      "The Klang Valley is the metropolitan region centred on Kuala Lumpur and surrounding Selangor towns — Petaling Jaya, Subang Jaya, Shah Alam, Klang, Kajang and the rest. When we say we serve the Klang Valley, we mean Kuala Lumpur plus these Selangor districts.",
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
