import type { ProblemCategoryTranslation, ProblemTranslations } from "./types";
import { msProblemTranslations } from "./ms";
import { zhProblemTranslations } from "./zh";

/** Translated problem guides, keyed by language and problem slug. */
export const problemTranslations: Record<"ms" | "zh", ProblemTranslations> = {
  ms: msProblemTranslations,
  zh: zhProblemTranslations,
};

export type { ProblemCategoryTranslation };
