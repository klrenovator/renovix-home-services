import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import type {
  ArticleCategoryId,
  ArticleDefinition,
  ArticleIntent,
  ArticleText,
} from "./types";
import { bathroomRebuildCostGuide } from "./content/bathroom-rebuild-cost-guide";
import { housePaintingCostByPropertyType } from "./content/house-painting-cost-by-property-type";
import { ceilingStainVsActiveLeak } from "./content/ceiling-stain-vs-active-leak";
import { spcVinylLaminateTileComparison } from "./content/spc-vinyl-laminate-tile-comparison";
import { condoRenovationApprovalChecklist } from "./content/condo-renovation-approval-checklist";
import { waterproofingSystemsCompared } from "./content/waterproofing-systems-compared";
import { regroutSiliconeMaintenance } from "./content/regrout-silicone-maintenance";
import { oldHouseWiringWarningSigns } from "./content/old-house-wiring-warning-signs";
import { metalGrilleGateBuyingGuide } from "./content/metal-grille-gate-buying-guide";
import { flooringSubfloorPreparation } from "./content/flooring-subfloor-preparation";
import { plumbingWaterPressureDiagnosis } from "./content/plumbing-water-pressure-diagnosis";
import { ceilingPartitionMaterialChoice } from "./content/ceiling-partition-material-choice";

/**
 * Phase 20 Knowledge Hub registry.
 *
 * Order is editorial (the approved CONTENT_MAP backlog first, then the two
 * coverage articles that close the electrical and welding gaps). Every entry
 * ships EN + MS + ZH, so `/en/blog/`, `/ms/blog/` and `/zh/blog/` publish the
 * same set of URLs and each article's hreflang set is complete.
 */
export const articles: ArticleDefinition[] = [
  bathroomRebuildCostGuide,
  housePaintingCostByPropertyType,
  ceilingStainVsActiveLeak,
  spcVinylLaminateTileComparison,
  condoRenovationApprovalChecklist,
  waterproofingSystemsCompared,
  regroutSiliconeMaintenance,
  oldHouseWiringWarningSigns,
  metalGrilleGateBuyingGuide,
  flooringSubfloorPreparation,
  plumbingWaterPressureDiagnosis,
  ceilingPartitionMaterialChoice,
];

/** Category labels per language — used by the hub filter chips and the cards. */
export const articleCategoryLabels: Record<
  ArticleCategoryId,
  Record<LanguageCode, string>
> = {
  "cost-guides": { en: "Cost guides", ms: "Panduan kos", zh: "费用指南" },
  materials: { en: "Materials & comparisons", ms: "Bahan & perbandingan", zh: "材料与对比" },
  troubleshooting: { en: "Troubleshooting", ms: "Mengesan masalah", zh: "问题排查" },
  planning: { en: "Planning", ms: "Perancangan", zh: "规划" },
  maintenance: { en: "Maintenance", ms: "Penyelenggaraan", zh: "保养维护" },
};

export function getArticles(): ArticleDefinition[] {
  return articles;
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function getArticle(slug: string | undefined | null): ArticleDefinition | undefined {
  if (!slug) {
    return undefined;
  }
  return articles.find((article) => article.slug === slug);
}

/** The localized copy block for an article. */
export function getArticleText(article: ArticleDefinition, lang: string): ArticleText {
  return article[getLanguageCode(lang)];
}

export function getArticleCategoryLabel(
  category: ArticleCategoryId,
  lang: string,
): string {
  return articleCategoryLabels[category][getLanguageCode(lang)];
}

/**
 * Languages that publish an article. Every article requires all three copy
 * blocks at the type level, so this is always the full set — the function
 * exists so routes, sitemap and hreflang read the same source rather than
 * hardcoding the list, and so a future draft-state article degrades safely.
 */
export function articleLanguages(slug: string | undefined | null): LanguageCode[] {
  const article = getArticle(slug);
  if (!article) {
    return [];
  }
  return (["en", "ms", "zh"] as LanguageCode[]).filter((code) => Boolean(article[code]));
}

export function hasArticleTranslation(slug: string, lang: string): boolean {
  return articleLanguages(slug).includes(getLanguageCode(lang));
}

/* -------------------------------------------------------------------------- */
/* Relationship lookups — the content graph                                    */
/* -------------------------------------------------------------------------- */

/** Articles that genuinely support a service pillar. */
export function getArticlesForService(serviceSlug: string): ArticleDefinition[] {
  return articles.filter((article) => article.relatedServices.includes(serviceSlug));
}

/** Articles that genuinely support a standalone sub-service. */
export function getArticlesForSubService(subServiceSlug: string): ArticleDefinition[] {
  return articles.filter((article) => article.relatedSubServices.includes(subServiceSlug));
}

/** Articles that genuinely support a problem guide. */
export function getArticlesForProblem(problemSlug: string): ArticleDefinition[] {
  return articles.filter((article) => article.relatedProblems.includes(problemSlug));
}

/** Articles with real local context for an area guide (`region/slug`). */
export function getArticlesForLocation(areaKey: string): ArticleDefinition[] {
  return articles.filter((article) => article.relatedLocations.includes(areaKey));
}

/** Articles that genuinely relate to a published project. */
export function getArticlesForProject(projectSlug: string): ArticleDefinition[] {
  return articles.filter((article) => article.relatedProjects.includes(projectSlug));
}

/** Other articles sharing a service, problem or category with this one. */
export function getRelatedArticles(
  article: ArticleDefinition,
  limit = 3,
): ArticleDefinition[] {
  const scored = articles
    .filter((other) => other.slug !== article.slug)
    .map((other) => {
      const services = other.relatedServices.filter((slug) =>
        article.relatedServices.includes(slug),
      ).length;
      const problems = other.relatedProblems.filter((slug) =>
        article.relatedProblems.includes(slug),
      ).length;
      const category = other.category === article.category ? 1 : 0;
      return { other, score: services * 2 + problems * 2 + category };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.other);
}

/** Every intent covered by the published library — used by the content audit. */
export function getCoveredIntents(): ArticleIntent[] {
  const set = new Set<ArticleIntent>();
  for (const article of articles) {
    for (const intent of article.intents) {
      set.add(intent);
    }
  }
  return [...set];
}

export type { ArticleDefinition, ArticleText, ArticleCategoryId, ArticleIntent };
