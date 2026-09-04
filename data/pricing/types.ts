export type PricingUnit =
  | "per_sqft"
  | "per_pfr"
  | "per_job"
  | "per_point"
  | "per_unit"
  | "per_hour"
  | "per_bathroom"
  | "per_area"
  | "per_meter"
  | "per_day";

export type PricingType = "starting_from" | "range" | "fixed";

export type PricingEntry = {
  id: string;
  serviceSlug: string;
  serviceName: string;
  subService?: string;
  subServiceSlug?: string;
  problemSlug?: string;
  unit: PricingUnit;
  startingPrice: number;
  priceRange?: { min: number; max: number };
  currency: "MYR";
  pricingType: PricingType;
  /** One row per service supplies the answer-first headline price. */
  isHeadline?: boolean;
  scope: string;
  includes?: string[];
  excludes?: string[];
  factors: string[];
  disclaimer: string;
  duration?: string;
  lastReviewed: string;
  researchNote?: string;
  intentModifiers?: string[];
  materials?: string[];
};

export type ServicePricingSummary = {
  serviceSlug: string;
  serviceName: string;
  headline: string;
  intro: string;
  startingFrom: number;
  startingFromLabel: string;
  unit: PricingUnit;
  disclaimer: string;
  factorsIntro: string;
  factors: { title: string; description: string }[];
  lastReviewed: string;
};

export type PricingTranslation = {
  subService?: string;
  scope?: string;
  includes?: string[];
  excludes?: string[];
  factors?: string[];
  disclaimer?: string;
  duration?: string;
  headline?: string;
  intro?: string;
  startingFromLabel?: string;
  factorsIntro?: string;
};

export type PricingTranslations = Record<string, Record<string, PricingTranslation>>;
