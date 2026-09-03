import { pricingEntries } from "./pricing";
import { getPricingTranslation } from "./translations";
import type { PricingEntry, ServicePricingSummary } from "./types";
import { getServiceName } from "@/data/i18n";
import { siteConfig } from "@/data/site";

export const LAST_REVIEWED = "2026-09-03";
export const PRICING_CURRENCY = "MYR";
export const PRICING_DISCLAIMER_EN =
  "Prices start from the stated amount. Final quotation depends on actual site condition, scope, materials, accessibility and installation requirements.";
export const PRICING_DISCLAIMER_MS =
  "Harga bermula dari jumlah yang dinyatakan. Sebut harga akhir bergantung pada keadaan tapak sebenar, skop kerja, bahan, akses dan keperluan pemasangan.";
export const PRICING_DISCLAIMER_ZH =
  "价格为起始价。最终报价取决于实际现场情况、工程范围、材料、可达性及安装要求。";

/** The disclaimer approved for each published language. */
export function getPricingDisclaimer(lang: string = "en"): string {
  if (lang === "ms") return PRICING_DISCLAIMER_MS;
  if (lang === "zh") return PRICING_DISCLAIMER_ZH;
  return PRICING_DISCLAIMER_EN;
}

/**
 * Merges the localized copy over an entry. Every numeric field (price, range,
 * unit, currency) is taken from the English source of truth, so a translation
 * can only ever change wording — never a price.
 */
function localizePricing(entry: PricingEntry, lang: string): PricingEntry {
  if (lang === "en") {
    return entry;
  }

  const translation = getPricingTranslation(entry.id, lang);
  const disclaimer = getPricingDisclaimer(lang);

  if (!translation) {
    return { ...entry, disclaimer };
  }

  return {
    ...entry,
    scope: translation.scope ?? entry.scope,
    includes: translation.includes ?? entry.includes,
    excludes: translation.excludes ?? entry.excludes,
    factors: translation.factors ?? entry.factors,
    duration: translation.duration ?? entry.duration,
    disclaimer: translation.disclaimer ?? disclaimer,
  };
}

export function getAllPricing(lang: string = "en"): PricingEntry[] {
  return pricingEntries.map((entry) => localizePricing(entry, lang));
}

export function getPricingForService(
  serviceSlug: string,
  lang: string = "en",
): PricingEntry[] {
  return pricingEntries
    .filter((entry) => entry.serviceSlug === serviceSlug)
    .map((entry) => localizePricing(entry, lang));
}

export function getPricingById(id: string): PricingEntry | undefined {
  return pricingEntries.find((entry) => entry.id === id);
}

export function getPricingBySubService(subServiceSlug: string): PricingEntry | undefined {
  return pricingEntries.find((entry) => entry.subServiceSlug === subServiceSlug);
}

export function getStartingPriceForService(serviceSlug: string): number | undefined {
  const entries = getPricingForService(serviceSlug);
  if (entries.length === 0) return undefined;
  return Math.min(...entries.map((e) => e.startingPrice));
}

export function getServicePricingSummaries(lang: string = "en"): ServicePricingSummary[] {
  const serviceSlugs = Array.from(new Set(pricingEntries.map((e) => e.serviceSlug)));

  return serviceSlugs.map((slug) => {
    const entries = getPricingForService(slug, lang);
    const min = Math.min(...entries.map((e) => e.startingPrice));
    const serviceName = getServiceName(slug, lang, entries[0]?.serviceName ?? slug);

    const summaries: Record<string, { headline: string; intro: string; factorsIntro: string }> = {
      plumbing: {
        headline: "Plumbing repair and installation pricing",
        intro: "Plumbing costs depend on leak type, accessibility, pipe material and whether hacking is needed. Visible repairs start lower; concealed leaks cost more due to detection and reinstatement.",
        factorsIntro: "What affects plumbing cost",
      },
      waterproofing: {
        headline: "Waterproofing pricing in KL & Selangor",
        intro: "Waterproofing price depends on area, system (cementitious, PU, torch-on), existing tile condition and access. Bathroom all-in jobs include hacking, membrane, flood test and retiling.",
        factorsIntro: "What affects waterproofing cost",
      },
      tiling: {
        headline: "Tiling installation and repair pricing",
        intro: "Tiling cost is driven by tile size, material (ceramic vs porcelain vs large-format), pattern complexity, area size and surface preparation.",
        factorsIntro: "What affects tiling cost",
      },
      painting: {
        headline: "Painting service pricing",
        intro: "Painting cost depends on wall condition, paint brand, number of colours, height/scaffolding and whether interior, exterior or full house.",
        factorsIntro: "What affects painting cost",
      },
      electrical: {
        headline: "Electrical wiring and installation pricing",
        intro: "Electrical pricing is per point for sockets and lights, per unit for fans and DB boxes, and per project for full house wiring. Concealed wiring costs 30–50% more than exposed casing.",
        factorsIntro: "What affects electrical cost",
      },
      flooring: {
        headline: "Flooring installation pricing",
        intro: "Flooring cost depends on material (SPC, vinyl, laminate), thickness, area size, subfloor condition and pattern (herringbone costs more).",
        factorsIntro: "What affects flooring cost",
      },
      "ceiling-partition": {
        headline: "Ceiling and partition pricing",
        intro: "Ceiling cost depends on design (flat vs L-box vs island), area, height and lighting integration. Partition cost depends on type (standard, moisture-resistant, soundproof).",
        factorsIntro: "What affects ceiling & partition cost",
      },
      "welding-metal-works": {
        headline: "Welding and metal works pricing",
        intro: "Metal works pricing depends on material (mild steel, wrought iron, stainless steel), design complexity, size and finishing.",
        factorsIntro: "What affects welding cost",
      },
      "general-renovation": {
        headline: "General renovation pricing",
        intro: "Renovation cost is estimated per square foot for overall scope, or per job for kitchen, bathroom and extension. Material grade and hacking needs drive the final figure.",
        factorsIntro: "What affects renovation cost",
      },
      handyman: {
        headline: "Handyman service pricing",
        intro: "Handyman pricing is hourly for general tasks, or fixed per job for door, mounting, grout and minor repairs. Call-out fee is waived if you proceed.",
        factorsIntro: "What affects handyman cost",
      },
    };

    const fallback = {
      headline: `${serviceName} pricing`,
      intro: `Indicative starting prices for ${serviceName.toLowerCase()} services in Kuala Lumpur & Selangor.`,
      factorsIntro: "What affects cost",
    };

    const info = summaries[slug] ?? fallback;

    // Generic factors aggregated from entries
    const allFactors = Array.from(new Set(entries.flatMap((e) => e.factors))).slice(0, 8);

    return {
      serviceSlug: slug,
      serviceName,
      headline: info.headline,
      intro: info.intro,
      startingFrom: min,
      startingFromLabel: `From RM ${min}`,
      unit: entries[0]?.unit ?? "per_job",
      disclaimer: getPricingDisclaimer(lang),
      factorsIntro: info.factorsIntro,
      factors: allFactors.map((f) => ({ title: f, description: "" })),
      lastReviewed: LAST_REVIEWED,
    };
  });
}

// AI-readable export
export function getAiReadablePricing() {
  return {
    company: siteConfig.name,
    currency: PRICING_CURRENCY,
    lastReviewed: LAST_REVIEWED,
    disclaimer: PRICING_DISCLAIMER_EN,
    market: "Kuala Lumpur, Selangor, Klang Valley, Malaysia",
    services: pricingEntries.map((entry) => ({
      id: entry.id,
      service: entry.serviceSlug,
      serviceName: entry.serviceName,
      subService: entry.subService,
      subServiceSlug: entry.subServiceSlug,
      problemSlug: entry.problemSlug,
      unit: entry.unit,
      startingPrice: entry.startingPrice,
      priceRange: entry.priceRange,
      currency: entry.currency,
      pricingType: entry.pricingType,
      scope: entry.scope,
      includes: entry.includes,
      excludes: entry.excludes,
      factors: entry.factors,
      materials: entry.materials,
      disclaimer: entry.disclaimer,
      duration: entry.duration,
      lastReviewed: entry.lastReviewed,
      researchNote: entry.researchNote,
      intentModifiers: entry.intentModifiers,
    })),
    summary: getServicePricingSummaries("en").map((s) => ({
      service: s.serviceSlug,
      serviceName: s.serviceName,
      startingFrom: s.startingFrom,
      unit: s.unit,
      headline: s.headline,
      disclaimer: s.disclaimer,
      lastReviewed: s.lastReviewed,
    })),
  };
}

// For sitemap / SEO
export function getPricingUnitsLabel(unit: string, lang: string = "en"): string {
  const labels: Record<string, Record<string, string>> = {
    en: {
      per_sqft: "per sqft",
      per_pfr: "per foot run",
      per_job: "per job",
      per_point: "per point",
      per_unit: "per unit",
      per_hour: "per hour",
      per_bathroom: "per bathroom",
      per_area: "per area",
      per_meter: "per meter",
      per_day: "per day",
    },
    ms: {
      per_sqft: "per kaki persegi",
      per_pfr: "per kaki panjang",
      per_job: "per kerja",
      per_point: "per titik",
      per_unit: "per unit",
      per_hour: "per jam",
      per_bathroom: "per bilik air",
      per_area: "per kawasan",
      per_meter: "per meter",
      per_day: "per hari",
    },
    zh: {
      per_sqft: "每平方英尺",
      per_pfr: "每英尺",
      per_job: "每项工程",
      per_point: "每点位",
      per_unit: "每单位",
      per_hour: "每小时",
      per_bathroom: "每间浴室",
      per_area: "每区域",
      per_meter: "每米",
      per_day: "每天",
    },
  };

  const l = lang === "ms" || lang === "zh" ? lang : "en";
  return labels[l][unit] ?? labels.en[unit] ?? unit;
}
