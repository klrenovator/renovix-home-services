import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import type { ServiceDetail } from "./types";
import { tiling } from "./tiling";
import { weldingMetalWorks } from "./welding-metal-works";
import { electrical } from "./electrical";
import { painting } from "./painting";
import { ceilingPartition } from "./ceiling-partition";
import { generalRenovation } from "./general-renovation";
import { plumbing } from "./plumbing";
import { waterproofing } from "./waterproofing";
import { flooring } from "./flooring";
import { handyman } from "./handyman";
import { serviceTranslations } from "./translations";

/** English service pages — the source of truth for structure and meaning. */
export const serviceDetails: ServiceDetail[] = [
  tiling,
  weldingMetalWorks,
  electrical,
  painting,
  ceilingPartition,
  generalRenovation,
  plumbing,
  waterproofing,
  flooring,
  handyman,
];

/**
 * Merges a translation over the English page. The slug and the related-content
 * slugs always come from English, so a localized page links to exactly the same
 * pages as its English counterpart — in the reader's language.
 */
function localize(detail: ServiceDetail, lang: LanguageCode): ServiceDetail {
  if (lang === "en") {
    return detail;
  }

  const translation = serviceTranslations[lang][detail.slug];

  if (!translation) {
    return detail;
  }

  return {
    ...detail,
    ...translation,
    slug: detail.slug,
    relatedServices: detail.relatedServices,
    relatedProblems: detail.relatedProblems,
  };
}

/** Every service page in one language, in site order. */
export function getServiceDetails(lang: string = "en"): ServiceDetail[] {
  const code = getLanguageCode(lang);
  return serviceDetails.map((detail) => localize(detail, code));
}

export function getServiceDetail(
  slug: string | undefined | null,
  lang: string = "en",
): ServiceDetail | undefined {
  if (!slug) {
    return undefined;
  }

  const detail = serviceDetails.find((item) => item.slug === slug);

  return detail ? localize(detail, getLanguageCode(lang)) : undefined;
}

export function getRelatedServiceDetails(
  detail: ServiceDetail,
  lang: string = "en",
): ServiceDetail[] {
  return detail.relatedServices
    .map((slug) => getServiceDetail(slug, lang))
    .filter((item): item is ServiceDetail => Boolean(item));
}

/** Slugs with a complete translation in a language — used by the build guard. */
export function translatedServiceSlugs(lang: "ms" | "zh"): string[] {
  return serviceDetails
    .map((detail) => detail.slug)
    .filter((slug) => Boolean(serviceTranslations[lang][slug]));
}
