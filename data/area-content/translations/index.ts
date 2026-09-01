import type { AreaRegionTranslations, AreaTranslations } from "./types";
import { msAreaTranslations, msAreaRegionTranslations } from "./ms";
import { zhAreaTranslations, zhAreaRegionTranslations } from "./zh";

/** Translated area guides, keyed by language and `region/slug`. */
export const areaTranslations: Record<"ms" | "zh", AreaTranslations> = {
  ms: msAreaTranslations,
  zh: zhAreaTranslations,
};

/** Translated region hubs, keyed by language and region id. */
export const areaRegionTranslations: Record<"ms" | "zh", AreaRegionTranslations> = {
  ms: msAreaRegionTranslations,
  zh: zhAreaRegionTranslations,
};
