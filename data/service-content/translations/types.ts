import type { ServiceDetail } from "../types";

/**
 * A translated service page.
 *
 * Everything a customer reads is translated; the structural fields (`slug` and
 * the related-content slugs) are deliberately omitted and taken from the
 * English source, so a translation can never point at a different page than
 * its English counterpart.
 */
export type ServiceTranslation = Omit<
  ServiceDetail,
  "slug" | "relatedServices" | "relatedProblems"
>;

export type ServiceTranslations = Record<string, ServiceTranslation>;
