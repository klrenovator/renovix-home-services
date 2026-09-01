import type { ProblemDetail } from "../types";

/**
 * A translated problem guide. Structural fields (slug, category and the
 * related service / problem slugs) come from the English source.
 */
export type ProblemTranslation = Omit<
  ProblemDetail,
  "slug" | "category" | "relatedService" | "relatedServices" | "relatedProblems"
>;

export type ProblemTranslations = Record<string, ProblemTranslation>;

/** Translated category labels for the problem library. */
export type ProblemCategoryTranslation = {
  label: string;
  intro: string;
};
