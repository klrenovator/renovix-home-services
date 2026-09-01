import type { AreaDetail, AreaRegion } from "../types";

/**
 * A translated area guide. Structural fields (region, slug, related service /
 * problem slugs and nearby-area slugs) come from the English source, and the
 * "services available" notes are supplied in the same order as the English
 * list so the service slugs cannot drift.
 */
export type AreaTranslation = Omit<
  AreaDetail,
  | "region"
  | "slug"
  | "relatedServices"
  | "relatedProblems"
  | "nearbyAreas"
  | "servicesAvailable"
> & {
  /** Notes for `servicesAvailable`, in the same order as the English entry. */
  serviceNotes: string[];
};

export type AreaTranslations = Record<string, AreaTranslation>;

export type AreaRegionTranslation = Omit<
  AreaRegion,
  "id" | "areas" | "servicesAvailable"
> & {
  serviceNotes: string[];
};

export type AreaRegionTranslations = Record<string, AreaRegionTranslation>;
