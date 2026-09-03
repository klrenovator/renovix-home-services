/**
 * Centralized Location Data Model & Search Intent Architecture.
 *
 * Implements the Malaysia -> State -> City -> District -> Town/Sub-city ->
 * Neighbourhood -> Kampung -> Sub-area hierarchy with strict quality gates,
 * search-intent matrix, Phase 14 pricing integration, and single-source NAP.
 */

export type LocationLevel =
  | "country"
  | "state"
  | "federal_territory"
  | "city"
  | "district"
  | "town"
  | "neighbourhood"
  | "kampung"
  | "sub_area";

export type LocationStatus = "active" | "expanded" | "planned";

export type UrgencyLevel = "urgent_safety" | "standard_service" | "scheduled_project";

export type IntentModifier =
  | "near_me"
  | "best_reliable"
  | "affordable_cost"
  | "repair"
  | "installation"
  | "replacement"
  | "emergency_triage"
  | "contractor_specialist"
  | "residential"
  | "commercial";

/** Quality checklist validating the 7 location page rules. */
export type LocationQualityChecklist = {
  hasSearchIntent: boolean;
  hasVerifiedCoverage: boolean;
  hasUniqueLocalContext: boolean;
  hasMeaningfulServiceRelevance: boolean;
  hasUniqueFaqs: boolean;
  hasGenuineNearbyConnections: boolean;
  hasPricingIntegration: boolean;
  hasMultiLingualCoverage: boolean;
};

export type LocationQualityScore = {
  score: number; // 0–100
  passed: boolean;
  checklist: LocationQualityChecklist;
};

/** Housing and property characteristics for a location. */
export type LocationPropertyContext = {
  housingEras: string[];
  propertyTypes: string[];
  strataDensity: "predominantly_strata" | "balanced" | "predominantly_landed";
  accessConsiderations: string[];
};

/** Service relevance and priority services for a location. */
export type LocationServiceRelevance = {
  primaryServices: string[];
  urgentServicesAvailable: string[];
  commonProblems: string[];
};

/** Central Location Entity Source of Truth. */
export type LocationEntity = {
  id: string; // e.g. "kuala-lumpur/mont-kiara", "selangor/petaling-jaya"
  slug: string;
  name: string;
  level: LocationLevel;
  country: "Malaysia";
  state: "Kuala Lumpur" | "Selangor" | "Penang" | "Johor" | "Negeri Sembilan" | "Perak" | string;
  regionId: "kuala-lumpur" | "selangor" | string;
  district: string;
  city?: string;
  town?: string;
  neighbourhood?: string;
  kampung?: string;
  parentLocationId?: string;
  subLocationIds?: string[];
  aliases: string[];
  nearbyLocationSlugs: string[];
  propertyContext: LocationPropertyContext;
  serviceRelevance: LocationServiceRelevance;
  status: LocationStatus;
  published: boolean;
  publicPath?: string;
  seo: {
    title: string;
    metaDescription: string;
    h1: string;
    searchIntents: string[];
    targetModifiers: IntentModifier[];
  };
  lastReviewed: string; // "2026-09-03"
  qualityScore: LocationQualityScore;
};

/** Entry in the Location + Service + Problem + Modifier matrix. */
export type LocationServiceMatrixEntry = {
  id: string; // e.g. "shah-alam-plumbing-leak"
  locationSlug: string;
  regionId: "kuala-lumpur" | "selangor";
  locationName: string;
  serviceSlug: string;
  serviceName: string;
  subServiceSlug?: string;
  subServiceName?: string;
  problemSlug?: string;
  problemName?: string;
  pricingId?: string; // Links to data/pricing/pricing.ts
  startingPrice?: number;
  unit?: string;
  intentModifiers: IntentModifier[];
  searchQueryExamples: string[];
  localContextNote: string;
  urgency: UrgencyLevel;
  /** Strictly true ONLY for electrical power trip / hazard and active plumbing/waterproofing leaks. */
  isEligibleForEmergency: boolean;
  published: boolean;
};

/** District grouping within a region for hierarchy explorer and breadcrumbs. */
export type DistrictGroup = {
  id: string;
  name: string;
  regionId: "kuala-lumpur" | "selangor";
  description: string;
  locationSlugs: string[];
};

/** High-level state / region entity in the Malaysia coverage tree. */
export type StateCoverageEntity = {
  id: string;
  name: string;
  country: "Malaysia";
  status: LocationStatus;
  published: boolean;
  summary: string;
  districts: DistrictGroup[];
  totalPublishedGuides: number;
};
