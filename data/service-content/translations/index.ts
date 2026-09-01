import type { ServiceTranslations } from "./types";
import { msServiceTranslations } from "./ms";
import { zhServiceTranslations } from "./zh";

/**
 * Translated service pages, keyed by language and service slug.
 * A slug that is absent here is simply not published in that language —
 * `i18n/coverage.ts` gates the routes, sitemap and hreflang set from the same
 * inventory, and `i18n/verify.ts` fails the build if the two ever disagree.
 */
export const serviceTranslations: Record<"ms" | "zh", ServiceTranslations> = {
  ms: msServiceTranslations,
  zh: zhServiceTranslations,
};
