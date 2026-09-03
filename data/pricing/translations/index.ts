import type { PricingTranslation, PricingTranslations } from "../types";
import { msPricingTranslations } from "./ms";
import { zhPricingTranslations } from "./zh";

/**
 * Localized copy for the pricing rows, keyed by language and pricing id.
 * Prices, units and ranges are never translated — they live only in
 * `pricing.ts`, so a translation can change wording but never a number.
 */
export const pricingTranslations: PricingTranslations = {
  ms: msPricingTranslations,
  zh: zhPricingTranslations,
};

export function getPricingTranslation(
  id: string,
  lang: string,
): PricingTranslation | undefined {
  if (lang !== "ms" && lang !== "zh") {
    return undefined;
  }

  return pricingTranslations[lang]?.[id];
}
