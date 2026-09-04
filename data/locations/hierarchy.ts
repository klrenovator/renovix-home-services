/**
 * Location Hierarchy & Navigation Traversal Helpers.
 *
 * Provides typed functions to navigate the hierarchy:
 *   Malaysia -> State / Region -> District -> City / Town -> Neighbourhood
 *
 * Integrates single-sourced pricing from Phase 14 to provide honest,
 * indicative rates for every location.
 */

import { locationsRegistry, districtGroups, stateCoverage } from "./registry";
import { getMatrixEntriesForLocation, getMatrixEntriesForService } from "./intent-matrix";
import { getHeadlinePricingEntry } from "@/data/pricing";
import { getServiceName } from "@/data/i18n";
import type {
  LocationEntity,
  DistrictGroup,
  StateCoverageEntity,
} from "./types";

/** Returns all location entities (active + planned). */
export function getAllLocations(): LocationEntity[] {
  return locationsRegistry;
}

/** Returns all published location guides (46 active locations). */
export function getPublishedLocations(): LocationEntity[] {
  return locationsRegistry.filter((loc) => loc.published);
}

/** Finds a location entity by its composite id (e.g. "selangor/petaling-jaya"). */
export function getLocationById(id: string): LocationEntity | undefined {
  return locationsRegistry.find((loc) => loc.id === id);
}

/** Finds a location entity by slug and optional region. */
export function getLocationBySlug(
  slug: string,
  regionId?: string,
): LocationEntity | undefined {
  if (regionId) {
    return locationsRegistry.find(
      (loc) => loc.slug === slug && loc.regionId === regionId,
    );
  }
  return locationsRegistry.find((loc) => loc.slug === slug);
}

/** Returns district groups for a region ("kuala-lumpur" | "selangor"). */
export function getDistrictsForRegion(regionId: string): DistrictGroup[] {
  return districtGroups.filter((district) => district.regionId === regionId);
}

/** Returns the district group a specific location belongs to. */
export function getDistrictForLocation(locationSlug: string): DistrictGroup | undefined {
  return districtGroups.find((district) =>
    district.locationSlugs.includes(locationSlug),
  );
}

/** Returns all locations in a specific district group. */
export function getLocationsInDistrict(districtId: string): LocationEntity[] {
  const district = districtGroups.find((d) => d.id === districtId);
  if (!district) return [];
  return district.locationSlugs
    .map((slug) => getLocationBySlug(slug, district.regionId))
    .filter((loc): loc is LocationEntity => Boolean(loc));
}

/** Returns the state coverage overview (Kuala Lumpur, Selangor, Planned). */
export function getStateCoverage(): StateCoverageEntity[] {
  return stateCoverage;
}

/** Returns the active published regions. */
export function getActiveStateCoverage(): StateCoverageEntity[] {
  return stateCoverage.filter((state) => state.published);
}

/** Returns full breadcrumb trail data for a location. */
export function getLocationBreadcrumbTrail(
  regionId: string,
  slug: string,
): {
  country: string;
  stateName: string;
  stateHref: string;
  districtName?: string;
  locationName: string;
} | null {
  const location = getLocationBySlug(slug, regionId);
  if (!location) return null;

  const district = getDistrictForLocation(slug);
  const state = stateCoverage.find((s) => s.id === regionId);

  return {
    country: "Malaysia",
    stateName: state?.name ?? (regionId === "kuala-lumpur" ? "Kuala Lumpur" : "Selangor"),
    stateHref: `/areas/${regionId}/`,
    districtName: district?.name,
    locationName: location.name,
  };
}

/**
 * Returns indicative starting rates for a location's primary services,
 * directly referencing Phase 14 pricing records.
 */
export function getStartingRatesForLocation(
  locationSlug: string,
  lang: string = "en",
): {
  serviceSlug: string;
  serviceName: string;
  subService: string;
  startingPrice: number;
  unit: string;
  disclaimer: string;
  lastReviewed: string;
}[] {
  const location = getLocationBySlug(locationSlug);
  if (!location) return [];

  const results: {
    serviceSlug: string;
    serviceName: string;
    subService: string;
    startingPrice: number;
    unit: string;
    disclaimer: string;
    lastReviewed: string;
  }[] = [];

  for (const serviceSlug of location.serviceRelevance.primaryServices) {
    // Use the explicitly approved catalogue headline for each service. A
    // lowest-price scan could mix units (for example, per-job and per-sqft)
    // and would not answer the location page's starting-price question.
    const best = getHeadlinePricingEntry(serviceSlug, lang);
    if (!best) continue;

    const serviceName = getServiceName(serviceSlug, lang, best.serviceName);
    results.push({
      serviceSlug: best.serviceSlug,
      serviceName,
      subService: best.subService ?? serviceName,
      startingPrice: best.startingPrice,
      unit: best.unit,
      disclaimer: best.disclaimer,
      lastReviewed: best.lastReviewed,
    });
  }

  return results;
}

export { getMatrixEntriesForLocation, getMatrixEntriesForService };
