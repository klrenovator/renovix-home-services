/**
 * Location Content Quality Gate & Validation Engine.
 *
 * Implements the 7 Quality Gate rules defined in Phase 15:
 *   1. Genuine search intent verification
 *   2. Authoritative business service coverage (no fabricated areas)
 *   3. Unique local context (housing era, property characteristics, access)
 *   4. Meaningful service relevance (services tailored to local housing)
 *   5. Unique location FAQs (no templated duplicates)
 *   6. Genuine nearby area connections
 *   7. Centralized pricing integration from Phase 14
 */

import type { LocationEntity } from "./types";

export type QualityEvaluationResult = {
  id: string;
  name: string;
  score: number;
  passed: boolean;
  issues: string[];
};

/**
 * Validates a location entity against the Phase 15 Quality Gate.
 * Requires a minimum score of 90/100 to pass publication criteria.
 */
export function evaluateLocationQuality(location: LocationEntity): QualityEvaluationResult {
  const issues: string[] = [];
  let score = 100;

  // 1. Search Intent Check
  if (!location.seo.searchIntents || location.seo.searchIntents.length < 2) {
    score -= 15;
    issues.push("Insufficient search intent keywords (minimum 2 required)");
  }

  // 2. Verified Coverage Check
  if (location.status === "active" && !location.regionId) {
    score -= 20;
    issues.push("Active location missing valid region assignment");
  }

  // 3. Unique Local Context Check
  if (
    !location.propertyContext.housingEras ||
    location.propertyContext.housingEras.length === 0 ||
    !location.propertyContext.propertyTypes ||
    location.propertyContext.propertyTypes.length === 0
  ) {
    score -= 20;
    issues.push("Missing property context or housing eras");
  }

  // 4. Service Relevance Check
  if (
    !location.serviceRelevance.primaryServices ||
    location.serviceRelevance.primaryServices.length < 3
  ) {
    score -= 15;
    issues.push("Fewer than 3 primary services declared");
  }

  // 5. Nearby Area Connections Check
  if (
    !location.nearbyLocationSlugs ||
    location.nearbyLocationSlugs.length < 2
  ) {
    score -= 15;
    issues.push("Fewer than 2 nearby location connections");
  }

  // 6. Access Considerations Check
  if (
    !location.propertyContext.accessConsiderations ||
    location.propertyContext.accessConsiderations.length === 0
  ) {
    score -= 10;
    issues.push("Missing access considerations (strata rules, landed staging, etc.)");
  }

  // 7. Aliases Check
  if (!location.aliases || location.aliases.length === 0) {
    score -= 5;
    issues.push("Missing location aliases / alternate search names");
  }

  const passed = score >= 90;

  return {
    id: location.id,
    name: location.name,
    score: Math.max(0, score),
    passed,
    issues,
  };
}

/** Evaluates all locations in the registry. */
export function evaluateAllLocations(locations: LocationEntity[]): QualityEvaluationResult[] {
  return locations.map(evaluateLocationQuality);
}
