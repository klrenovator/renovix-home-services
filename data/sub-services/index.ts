import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import { getPricingBySubService, formatPricingAmount, getPricingUnitsLabel } from "@/data/pricing";
import { pricingEntries } from "@/data/pricing/pricing";
import type { PricingEntry } from "@/data/pricing/types";
import { getServiceDetail } from "@/data/service-content";
import type { ServiceDetail } from "@/data/service-content/types";
import type { SubServiceDefinition, SubServiceText } from "./types";
import { handymanSubServices } from "./content/handyman";
import { plumbingSubServices } from "./content/plumbing";
import { tilingSubServices } from "./content/tiling";
import { weldingSubServices } from "./content/welding";
import { electricalSubServices } from "./content/electrical";
import { waterproofingSubServices } from "./content/waterproofing";
import { paintingSubServices } from "./content/painting";
import { flooringSubServices } from "./content/flooring";
import { ceilingPartitionSubServices } from "./content/ceiling-partition";
import { generalRenovationSubServices } from "./content/general-renovation";

/**
 * Phase 19 registry. A sub-service is only available (and thus only routed,
 * sitemapped and hreflang-linked) once all three copy blocks are complete —
 * the type system enforces this because every language block is required.
 */
export const subServices: SubServiceDefinition[] = [
  ...handymanSubServices,
  ...plumbingSubServices,
  ...tilingSubServices,
  ...weldingSubServices,
  ...electricalSubServices,
  ...waterproofingSubServices,
  ...paintingSubServices,
  ...flooringSubServices,
  ...ceilingPartitionSubServices,
  ...generalRenovationSubServices,
];

export function getAllSubServices(): SubServiceDefinition[] {
  return subServices;
}

/** Every registered sub-service slug (used by audits to detect duplicates). */
export function getAllSubServiceSlugs(): string[] {
  return subServices.map((item) => item.slug);
}

export function getSubService(
  slug: string | undefined | null,
): SubServiceDefinition | undefined {
  if (!slug) {
    return undefined;
  }
  return subServices.find((item) => item.slug === slug);
}

export function getSubServicesByService(serviceSlug: string): SubServiceDefinition[] {
  return subServices.filter((item) => item.serviceSlug === serviceSlug);
}

/** True once a slug belongs to a real sub-service (even if not yet localized). */
export function isRegisteredSubService(slug: string): boolean {
  return subServices.some((item) => item.slug === slug);
}

/** Priced sub-services only — the primary publishing target of Phase 19. */
export function getPricedSubServices(): SubServiceDefinition[] {
  return subServices.filter((item) => Boolean(item.pricingId));
}

const START_FROM_LABELS: Record<string, string> = {
  en: "Starting from",
  ms: "Bermula dari",
  zh: "起",
};

/**
 * Localized "RM80 per job" style starting price for a sub-service, built purely
 * from the central pricing registry (number + unit label) plus a localized
 * prefix. Never re-derives a price from editorial copy.
 */
export function formatSubServicePrice(sub: SubServiceDefinition, lang: string): string | undefined {
  if (!sub.pricingId) {
    return undefined;
  }
  const entry = getPricingBySubService(sub.slug);
  if (!entry) {
    return undefined;
  }
  const code = getLanguageCode(lang);
  const amount = `RM${formatPricingAmount(entry.startingPrice)}`;
  const unit = getPricingUnitsLabel(entry.unit, code);
  const prefix = START_FROM_LABELS[code] ?? START_FROM_LABELS.en;
  if (code === "zh") {
    return `${amount} ${unit} ${prefix}`;
  }
  return `${prefix} ${amount} ${unit}`;
}

/** The resolved view of a sub-service for one language. */
export type ResolvedSubService = {
  definition: SubServiceDefinition;
  slug: string;
  serviceSlug: string;
  pricingId?: string;
  standaloneSearchIntent: boolean;
  relatedProblems: string[];
  text: SubServiceText;
  /** Priced row when the sub-service has one (language-neutral numbers). */
  pricing?: PricingEntry;
  /** Parent service detail resolved for the same language. */
  service?: ServiceDetail;
};

export function resolveSubService(
  sub: SubServiceDefinition,
  lang: string,
): ResolvedSubService {
  const code = getLanguageCode(lang);
  const text = sub[code];
  const pricing = sub.pricingId
    ? pricingEntries.find((entry) => entry.id === sub.pricingId)
    : undefined;
  const service = getServiceDetail(sub.serviceSlug, code);

  return {
    definition: sub,
    slug: sub.slug,
    serviceSlug: sub.serviceSlug,
    pricingId: sub.pricingId,
    standaloneSearchIntent: sub.standaloneSearchIntent,
    relatedProblems: sub.relatedProblems,
    text,
    pricing,
    service,
  };
}

export function getResolvedSubService(
  slug: string | undefined | null,
  lang: string,
): ResolvedSubService | undefined {
  const sub = getSubService(slug);
  return sub ? resolveSubService(sub, lang) : undefined;
}

/** Language codes with a complete translation (all registered ones today). */
export function subServiceLanguages(
  slug: string | undefined | null,
): LanguageCode[] {
  const sub = getSubService(slug);
  if (!sub) {
    return [];
  }
  return (["en", "ms", "zh"] as LanguageCode[]).filter((code) => Boolean(sub[code]));
}

/** Resolved view of a sub-service for each language that publishes it. */
export function resolveSubServiceForLanguages(sub: SubServiceDefinition) {
  return subServiceLanguages(sub.slug).map((code) => resolveSubService(sub, code));
}
