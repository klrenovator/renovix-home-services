/**
 * Smart Service Finder — index builder.
 *
 * Walks every existing, typed registry (services, sub-services, problem
 * guides, area guides, blog guides, published projects) and projects one
 * `SearchDocument` per published entity per language. This file is the
 * single place where the search index is built; the result is consumed by
 * `lib/search/match.ts` (server) and `data/search/serialize.ts` (client
 * typeahead mirror).
 *
 * Hard rules:
 *
 * - **No new content is authored here.** Every title, summary and search
 *   term comes verbatim from the source registry's localized copy.
 * - **No price is authored here.** Pricing references a `pricingId` and
 *   the renderer reads the amount / unit / disclaimer from
 *   `data/pricing/pricing.ts`.
 * - **No entity is invented.** Every related slug is one the source
 *   registry already declares. The audit (`npm run audit:search`) proves
 *   this; any drift fails the build.
 */

import { getAreaDetail, getAreaRegion, getAllAreas } from "@/data/area-content";
import { getArticles, getArticleText } from "@/data/blog";
import { getLanguageCode, type LanguageCode } from "@/data/languages";
import {
  formatPricingAmount,
  getHeadlinePricingEntry,
  getPricingById,
  getPricingDisclaimer,
  getPricingUnitsLabel,
} from "@/data/pricing";
import { getResolvedProject, getPublishedProjects } from "@/data/project-content";
import { getProblemsForService } from "@/data/problem-content";
import { projectCategories } from "@/data/projects";
import { getServiceDetail } from "@/data/service-content";
import { services } from "@/data/services";
import { getSubService, getSubServicesByService } from "@/data/sub-services";
import { localizedHref } from "@/i18n/hrefs";
import { areaNames } from "@/data/i18n/lists";
import type { ArticleBlock } from "@/data/blog/types";
import type { SubServiceText } from "@/data/sub-services/types";
import type {
  SearchDocument,
  SearchDocumentId,
  SearchDocumentKind,
  SearchDocumentPricing,
  SearchIndex,
} from "./types";

/** ISO date stamped on the index. Pure runtime — no `now()` of build-time lying. */
const BUILT_AT = "2026-09-06";

/** Document weight — used as a tie-breaker. Higher = more authoritative. */
const WEIGHT_BY_KIND: Record<SearchDocumentKind, number> = {
  service: 100,
  "sub-service": 80,
  problem: 70,
  area: 50,
  blog: 40,
  project: 30,
};

/** Convert a slug to a public path. Centralized so the index never diverges. */
function docHref(
  kind: SearchDocumentKind,
  slug: string,
  lang: LanguageCode,
  extra?: { serviceSlug?: string; region?: string },
): string {
  switch (kind) {
    case "service":
      return localizedHref(`/services/${slug}/`, lang);
    case "sub-service":
      if (!extra?.serviceSlug) {
        throw new Error(`sub-service document "${slug}" requires a serviceSlug`);
      }
      return localizedHref(`/services/${extra.serviceSlug}/${slug}/`, lang);
    case "problem":
      return localizedHref(`/problems/${slug}/`, lang);
    case "area":
      if (!extra?.region) {
        throw new Error(`area document "${slug}" requires a region`);
      }
      return localizedHref(`/areas/${extra.region}/${slug}/`, lang);
    case "blog":
      return localizedHref(`/blog/${slug}/`, lang);
    case "project":
      return localizedHref(`/projects/${slug}/`, lang);
  }
}

function docId(kind: SearchDocumentKind, slug: string): SearchDocumentId {
  return `${kind}:${slug}`;
}

/**
 * Build the localized pricing reference for a document, or `undefined` if
 * the entity has no priced row. The values come from
 * `data/pricing/pricing.ts` — the single source of truth.
 */
function buildPricing(
  pricingId: string | undefined,
  lang: LanguageCode,
): SearchDocumentPricing | undefined {
  if (!pricingId) return undefined;

  const row = getPricingById(pricingId);
  if (!row) return undefined;

  return {
    id: row.id,
    label: row.subService ?? row.id,
    currency: "MYR",
    startingPrice: row.startingPrice,
    priceRange: {
      min: row.priceRange?.min ?? row.startingPrice,
      max: row.priceRange?.max ?? row.startingPrice,
    },
    unit: getPricingUnitsLabel(row.unit, lang),
    disclaimer: getPricingDisclaimer(lang),
    lastReviewed: row.lastReviewed,
  };
}

/**
 * Build a single search term string for a pricing row's localized copy.
 * Used to surface the "RM…per…" sub-line in the result card without
 * hand-typing the figure.
 */
function pricingLine(pricing: SearchDocumentPricing, lang: LanguageCode): string {
  const amount = `RM${formatPricingAmount(pricing.startingPrice)}`;
  if (lang === "zh") {
    return `${amount} ${pricing.unit} 起`;
  }
  const prefix = lang === "ms" ? "Bermula dari" : "Starting from";
  return `${prefix} ${amount} ${pricing.unit}`;
}

/**
 * Tokenize a piece of source copy into the `searchTerms` array. We keep
 * Unicode letter runs, drop punctuation, and lowercase Latin chars. CJK
 * bigrams are added at match time, not index time (the CJK corpus in the
 * site is small enough that single-character coverage is sufficient when
 * combined with the bigram pass in the tokenizer).
 */
function tokenize(...sources: Array<string | string[] | undefined>): string[] {
  const bag = new Set<string>();
  const add = (text: string | undefined) => {
    if (!text) return;
    // Normalize: lowercase Latin, keep CJK as-is.
    const normalized = text.toLowerCase();
    // Split on any non-letter-or-digit Unicode boundary.
    const matches = normalized.match(/[\p{L}\p{N}]+/gu);
    if (matches) {
      for (const match of matches) {
        if (match.length > 1) {
          bag.add(match);
        }
      }
    }
  };
  for (const source of sources) {
    if (!source) continue;
    if (Array.isArray(source)) {
      for (const item of source) add(item);
    } else {
      add(source);
    }
  }
  return Array.from(bag);
}

/** Build a `SearchDocument` for a service. */
function buildServiceDocument(
  slug: string,
  lang: LanguageCode,
): SearchDocument | undefined {
  const detail = getServiceDetail(slug, lang);
  if (!detail) return undefined;

  const headlineRow = getHeadlinePricingEntry(slug, lang);
  const pricing = buildPricing(headlineRow?.id, lang);

  return {
    id: docId("service", slug),
    lang,
    kind: "service",
    slug,
    href: docHref("service", slug, lang),
    title: detail.h1,
    summary: detail.intro[0] ?? detail.overviewParagraphs[0] ?? "",
    category: detail.name,
    searchTerms: tokenize(
      detail.name,
      detail.h1,
      detail.intro,
      detail.overviewParagraphs,
      detail.subServices.map((s) => s.name),
      detail.problems.map((p) => p.title),
      detail.faqs.map((f) => f.question),
      detail.answerFirst?.map((a) => a.question),
      detail.searchIntents,
    ),
    related: {
      services: detail.relatedServices,
      problems: detail.relatedProblems,
    },
    faqCount: detail.faqs.length,
    hasIncludes: Boolean(detail.includes && detail.includes.length > 0),
    hasMaterials: Boolean(detail.materials && detail.materials.length > 0),
    hasProcess: detail.processSteps.length > 0,
    ...(pricing ? { pricing } : {}),
    weight: WEIGHT_BY_KIND.service,
  };
}

/** Build a `SearchDocument` for a sub-service. */
function buildSubServiceDocument(
  subSlug: string,
  serviceSlug: string,
  lang: LanguageCode,
): SearchDocument | undefined {
  const sub = getSubService(subSlug);
  if (!sub) return undefined;
  if (sub.serviceSlug !== serviceSlug) return undefined;

  const pricing = buildPricing(sub.pricingId, lang);
  // Pull the per-language text from the dedicated resolver.
  const text = sub[lang] as SubServiceText | undefined;
  if (!text) return undefined;

  return {
    id: docId("sub-service", subSlug),
    lang,
    kind: "sub-service",
    slug: subSlug,
    href: docHref("sub-service", subSlug, lang, { serviceSlug }),
    title: text.h1,
    summary: text.lead,
    category: text.name,
    searchTerms: tokenize(
      text.name,
      text.h1,
      text.lead,
      text.suitableFor,
      text.includes,
      text.excludes,
      text.materials?.map((m) => `${m.title} ${m.description}`),
      text.process?.map((p) => `${p.title} ${p.description}`),
      text.costFactors?.map((c) => `${c.title} ${c.description}`),
      text.faqs.map((f) => `${f.question} ${f.answer}`),
    ),
    related: {
      service: serviceSlug,
      problems: sub.relatedProblems,
    },
    faqCount: text.faqs.length,
    hasIncludes: text.includes.length > 0,
    hasMaterials: Boolean(text.materials && text.materials.length > 0),
    hasProcess: Boolean(text.process && text.process.length > 0),
    ...(pricing ? { pricing } : {}),
    weight: WEIGHT_BY_KIND["sub-service"],
  };
}

/** Build a `SearchDocument` for a problem guide. */
function buildProblemDocument(
  slug: string,
  lang: LanguageCode,
): SearchDocument | undefined {
  const problem = getProblemsForService("placeholder", lang).find((p) => p.slug === slug)
    ?? (() => {
      // Direct lookup: the problem-content registry is keyed by category, not service.
      // Walk every service to find the problem.
      for (const service of services) {
        const found = getProblemsForService(service.slug, lang).find((p) => p.slug === slug);
        if (found) return found;
      }
      return undefined;
    })();
  if (!problem) return undefined;

  return {
    id: docId("problem", slug),
    lang,
    kind: "problem",
    slug,
    href: docHref("problem", slug, lang),
    title: problem.h1,
    summary: problem.subtitle || problem.whatItMeans[0] || "",
    category: problem.name,
    searchTerms: tokenize(
      problem.name,
      problem.h1,
      problem.subtitle,
      problem.whatItMeans,
      problem.commonCauses,
      problem.warningSigns,
      problem.solutions.map((s) => `${s.title} ${s.description}`),
      problem.whenToCall,
      problem.faqs.map((f) => `${f.question} ${f.answer}`),
    ),
    related: {
      service: problem.relatedService,
      services: problem.relatedServices,
      problems: problem.relatedProblems,
    },
    faqCount: problem.faqs.length,
    hasIncludes: problem.processSteps.length > 0,
    hasMaterials: false,
    hasProcess: problem.processSteps.length > 0,
    weight: WEIGHT_BY_KIND.problem,
  };
}

/** Build a `SearchDocument` for an area guide (KL/Selangor town). */
function buildAreaDocument(
  region: "kuala-lumpur" | "selangor",
  slug: string,
  lang: LanguageCode,
): SearchDocument | undefined {
  const area = getAreaDetail(region, slug, lang);
  if (!area) return undefined;

  // Localized place-name alias (e.g. a Chinese query for "孟沙" should
  // surface the Bangsar area). The lists.ts table already holds these
  // in the right shape.
  const aliases: string[] = [];
  const aliasKey = `${region}/${slug}`;
  if (lang === "zh" && areaNames.zh[aliasKey]) {
    aliases.push(areaNames.zh[aliasKey]);
  }

  return {
    id: docId("area", `${region}/${slug}`),
    lang,
    kind: "area",
    slug: `${region}/${slug}`,
    href: docHref("area", slug, lang, { region }),
    title: area.h1,
    summary: area.summary,
    category: area.name,
    searchTerms: tokenize(
      area.name,
      area.h1,
      area.summary,
      area.intro,
      area.servicesAvailable.map((s) => `${s.serviceSlug} ${s.note}`),
      area.propertyTypes.map((p) => `${p.label} ${p.note}`),
      area.problems.map((p) => `${p.title} ${p.description}`),
      area.faqs.map((f) => `${f.question} ${f.answer}`),
    ),
    ...(aliases.length > 0 ? { aliases } : {}),
    related: {
      services: area.servicesAvailable.map((s) => s.serviceSlug),
    },
    faqCount: area.faqs.length,
    hasIncludes: false,
    hasMaterials: false,
    hasProcess: area.processSteps.length > 0,
    weight: WEIGHT_BY_KIND.area,
  };
}

/** Build a `SearchDocument` for an area region hub. */
function buildRegionDocument(
  region: "kuala-lumpur" | "selangor",
  lang: LanguageCode,
): SearchDocument | undefined {
  const hub = getAreaRegion(region, lang);
  if (!hub) return undefined;

  return {
    id: docId("area", region),
    lang,
    kind: "area",
    slug: region,
    href: localizedHref(`/areas/${region}/`, lang),
    title: hub.h1,
    summary: hub.summary,
    category: hub.name,
    searchTerms: tokenize(
      hub.name,
      hub.h1,
      hub.summary,
      hub.intro,
      hub.landscape.map((l) => `${l.title} ${l.description}`),
      hub.faqs.map((f) => `${f.question} ${f.answer}`),
    ),
    related: {
      services: hub.areas.flatMap((a) => a.servicesAvailable.map((s) => s.serviceSlug)),
    },
    faqCount: hub.faqs.length,
    hasIncludes: false,
    hasMaterials: false,
    hasProcess: false,
    weight: WEIGHT_BY_KIND.area,
  };
}

/** Build a `SearchDocument` for a published blog article. */
function buildBlogDocument(slug: string, lang: LanguageCode): SearchDocument | undefined {
  const article = getArticles().find((a) => a.slug === slug);
  if (!article) return undefined;
  const text = getArticleText(article, lang);

  return {
    id: docId("blog", slug),
    lang,
    kind: "blog",
    slug,
    href: docHref("blog", slug, lang),
    title: text.h1,
    summary: text.excerpt,
    category: text.title,
    searchTerms: tokenize(
      text.h1,
      text.excerpt,
      text.question,
      text.answer,
      text.keyPoints,
      text.sections.map((s) => `${s.heading} ${s.blocks.map(blockText).join(" ")}`),
      text.faqs.map((f) => `${f.question} ${f.answer}`),
      text.closing,
    ),
    related: {
      services: article.relatedServices,
      subServices: article.relatedSubServices,
      problems: article.relatedProblems,
      areas: article.relatedLocations,
      projects: article.relatedProjects,
    },
    faqCount: text.faqs.length,
    hasIncludes: text.sections.some((s) => s.blocks.some((b) => b.type === "list")),
    hasMaterials: text.sections.some((s) =>
      s.blocks.some((b) => b.type === "table" || b.type === "pricing"),
    ),
    hasProcess: text.sections.some((s) =>
      s.blocks.some((b) => b.type === "steps" || b.type === "list"),
    ),
    weight: WEIGHT_BY_KIND.blog,
  };
}

function blockText(block: ArticleBlock): string {
  switch (block.type) {
    case "paragraph":
      return block.text;
    case "list":
      return block.items.join(" ");
    case "steps":
      return block.items.map((i) => `${i.title} ${i.description}`).join(" ");
    case "pricing":
      return ""; // Numbers are resolved at render time, never indexed.
    case "callout":
      return `${block.title} ${block.text}`;
    case "table":
      return `${block.columns.join(" ")} ${block.rows.flat().join(" ")}`;
  }
}

/** Build a `SearchDocument` for a published project. */
/**
 * Project categories (`ceiling`, `welding`, …) are not service slugs —
 * the registry's `servicePath` is the single source that maps a category
 * to its service (`/services/ceiling-partition`, …). Related-service
 * links on the result card must use real service slugs or they 404.
 */
function projectCategoryServiceSlugs(categoryIds: string[]): string[] {
  const out: string[] = [];
  for (const id of categoryIds) {
    const category = projectCategories.find((c) => c.id === id);
    const serviceSlug = category?.servicePath.replace("/services/", "");
    if (serviceSlug && !out.includes(serviceSlug)) out.push(serviceSlug);
  }
  return out;
}

function buildProjectDocument(
  projectSlug: string,
  lang: LanguageCode,
): SearchDocument | undefined {
  const resolved = getResolvedProject(projectSlug, lang);
  if (!resolved) return undefined;
  const category = projectCategories.find((c) => c.id === resolved.category)?.label;
  const serviceSlugs = projectCategoryServiceSlugs([
    resolved.category,
    ...(resolved.relatedCategories ?? []),
  ]);

  return {
    id: docId("project", projectSlug),
    lang,
    kind: "project",
    slug: projectSlug,
    href: docHref("project", projectSlug, lang),
    title: resolved.content.title,
    summary: resolved.content.shortDescription,
    category,
    searchTerms: tokenize(
      resolved.content.title,
      resolved.content.shortDescription,
      resolved.content.fullDescription,
      resolved.content.scopeOfWork,
      resolved.content.alt,
    ),
    related: {
      service: serviceSlugs[0],
      services: serviceSlugs.slice(1),
      subServices: resolved.subServices,
    },
    faqCount: 0,
    hasIncludes: Boolean(resolved.content.scopeOfWork && resolved.content.scopeOfWork.length > 0),
    hasMaterials: false,
    hasProcess: false,
    weight: WEIGHT_BY_KIND.project,
  };
}

/** Build the full search index for one language. */
export function buildSearchIndex(lang: LanguageCode | string): SearchIndex {
  const code = getLanguageCode(lang);
  const documents: SearchDocument[] = [];

  // Services (10).
  for (const service of services) {
    const doc = buildServiceDocument(service.slug, code);
    if (doc) documents.push(doc);
  }

  // Sub-services (51, every priced row).
  for (const service of services) {
    for (const sub of getSubServicesByService(service.slug)) {
      const doc = buildSubServiceDocument(sub.slug, service.slug, code);
      if (doc) documents.push(doc);
    }
  }

  // Problems (57).
  for (const service of services) {
    for (const problem of getProblemsForService(service.slug, code)) {
      const doc = buildProblemDocument(problem.slug, code);
      if (doc) documents.push(doc);
    }
  }

  // Areas (53) + region hubs (2).
  for (const region of ["kuala-lumpur", "selangor"] as const) {
    for (const area of getAllAreas(code)) {
      if (area.region !== region) continue;
      const doc = buildAreaDocument(region, area.slug, code);
      if (doc) documents.push(doc);
    }
    const regionDoc = buildRegionDocument(region, code);
    if (regionDoc) documents.push(regionDoc);
  }

  // Blog (12).
  for (const article of getArticles()) {
    const doc = buildBlogDocument(article.slug, code);
    if (doc) documents.push(doc);
  }

  // Projects (21 published).
  for (const project of getPublishedProjects()) {
    const doc = buildProjectDocument(project.slug, code);
    if (doc) documents.push(doc);
  }

  return {
    lang: code,
    builtAt: BUILT_AT,
    documents,
  };
}

/**
 * Returns the localized pricing-line for a document's pricing reference, or
 * `undefined` when the document has no priced row. Used by the result card.
 */
export function getDocumentPricingLine(
  document: SearchDocument,
  lang: LanguageCode,
): string | undefined {
  if (!document.pricing) return undefined;
  return pricingLine(document.pricing, lang);
}
