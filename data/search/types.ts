/**
 * Smart Service Finder — typed search index.
 *
 * Every public surface on the site (10 service pillars, 51 sub-services,
 * 57 problem guides, 53 area guides, 12 blog guides, 21 published projects)
 * is projected into one `SearchDocument` per language. The index is the
 * single source of truth for the Smart Service Finder; the search UI
 * (server results page + tiny client typeahead) reads nothing else.
 *
 * Honesty rules (binding — also enforced by `npm run audit:search`):
 *
 * 1. No document may introduce a string that is not present in the
 *    originating registry's localized copy. Every `title`, `subtitle`,
 *    `summary` and `searchTerms` token is a strict substring of source
 *    text from `data/service-content`, `data/sub-services`,
 *    `data/problem-content`, `data/area-content`, `data/blog` or
 *    `data/project-content`.
 * 2. No price is ever authored here. `pricing` references a `pricingId`
 *    in `data/pricing/pricing.ts` and the matcher/renderer reads the
 *    amount, unit, scope and disclaimer from there.
 * 3. No new entities are invented. `related.services/problems/areas/etc.`
 *    are the slugs the source registry already declares.
 * 4. The `lang` field is one of `"en" | "ms" | "zh"`; the index is
 *    built once per language and is never mixed.
 */

import type { LanguageCode } from "@/data/languages";

/** The kind of public surface a `SearchDocument` represents. */
export type SearchDocumentKind =
  | "service"
  | "sub-service"
  | "problem"
  | "area"
  | "blog"
  | "project";

/** Stable identifier — composed of `${kind}:${slug}` for full uniqueness. */
export type SearchDocumentId = string;

/** A localized, registry-derived pricing reference. */
export type SearchDocumentPricing = {
  /** The catalogue row id (resolves to `data/pricing/pricing.ts`). */
  id: string;
  /** Localized row sub-service label (e.g. "Visible Pipe Leak Repair"). */
  label: string;
  /** Localized currency, always "MYR" today. */
  currency: "MYR";
  /** Starting price (integer ringgit) — read from the catalogue. */
  startingPrice: number;
  /** Min/max range — read from the catalogue. */
  priceRange: { min: number; max: number };
  /** Localized unit, e.g. "per job", "per sqft". */
  unit: string;
  /** Localized disclaimer line (single sentence, catalogue-approved). */
  disclaimer: string;
  /** ISO date the row was last reviewed. */
  lastReviewed: string;
};

/** Cross-entity relationships — every slug resolves to a real entity. */
export type SearchDocumentRelations = {
  /** Parent service slug (for sub-service / problem / project / blog). */
  service?: string;
  /** Sub-service slugs genuinely mapped (problem / project). */
  subServices?: string[];
  /** Problem slugs genuinely mapped (service / sub-service / area / blog). */
  problems?: string[];
  /** Related service slugs (service / problem / project / blog). */
  services?: string[];
  /** Area paths (`kuala-lumpur/cheras` etc.) genuinely mapped. */
  areas?: string[];
  /** Blog slugs genuinely mapped (service / problem / area). */
  blog?: string[];
  /** Project slugs genuinely mapped (service / sub-service / problem). */
  projects?: string[];
};

/**
 * One indexed surface in one language. Fields are the minimum needed to
 * score, render and link — no duplicates of the source page's body.
 */
export type SearchDocument = {
  /** Stable id — `${kind}:${slug}` (e.g. `service:plumbing`). */
  id: SearchDocumentId;
  /** Language the document is in. */
  lang: LanguageCode;
  /** Kind of public surface. */
  kind: SearchDocumentKind;
  /** Slug of the underlying entity (matches the URL segment). */
  slug: string;
  /** Public URL — language-prefixed, trailing-slash form. */
  href: string;
  /** Localized title / H1 used for the result card headline. */
  title: string;
  /** Localized one-line summary used for the result card body. */
  summary: string;
  /** Optional sub-label shown above the title (e.g. service category). */
  category?: string;
  /**
   * Pre-tokenized, lowercased search terms. Built from the entity's
   * localized copy (title, h1, lead, intro, problem what-it-means,
   * FAQ questions, area intro). NEVER typed freehand.
   */
  searchTerms: string[];
  /**
   * Localized name/aliases for cross-language matching. E.g. a Chinese
   * place name indexed under the English document so a ZH query can
   * match an EN-indexed area.
   */
  aliases?: string[];
  /** Pricing reference (when the entity has a priced row in the catalogue). */
  pricing?: SearchDocumentPricing;
  /** Cross-entity relationships — every slug resolves. */
  related: SearchDocumentRelations;
  /** Total FAQ count, used by the result card ("5 FAQs on this page"). */
  faqCount: number;
  /** When true, the page has a real "What's included" / "Process" / "Materials" section. */
  hasIncludes: boolean;
  hasMaterials: boolean;
  hasProcess: boolean;
  /**
   * Document weight — used as a small tie-breaker. Services rank above
   * problems above areas above blog above project for the same score
   * (see `lib/search/rank.ts`).
   */
  weight: number;
};

/**
 * The complete search index for one language.
 *
 * Built by `data/search/build-index.ts` and consumed by:
 * - `lib/search/match.ts` (server ranking, results page)
 * - `data/search/serialize.ts` (JSON mirror, client typeahead)
 */
export type SearchIndex = {
  lang: LanguageCode;
  /** Built-at timestamp (ISO). */
  builtAt: string;
  /** Every document, in registry-stable order. */
  documents: SearchDocument[];
};

/** A scored, ranked result ready to render. */
export type SearchResult = {
  /** The matched document. */
  document: SearchDocument;
  /** Total match score (the sum of weighted hits). */
  score: number;
  /** Per-signal score breakdown (debug / explain mode only). */
  signals: SearchResultSignal[];
  /** Short, human-readable reason this matched (built from hit fields). */
  whyMatched: string;
  /** Localized sub-line: starting price, or "See full pricing on page". */
  pricingLine?: string;
};

export type SearchResultSignal = {
  /** Which field produced the hit (title, summary, faq, …). */
  field: "title" | "summary" | "searchTerm" | "alias" | "synonym" | "category" | "faq";
  /** The token that hit. */
  token: string;
  /** Score contribution. */
  weight: number;
};

/** A search query after tokenization. */
export type TokenizedQuery = {
  /** Original trimmed query, untouched. */
  raw: string;
  /** The page language. */
  lang: LanguageCode;
  /** Latin (lower-cased) tokens, after stop-word removal. */
  latin: string[];
  /** CJK unigrams + bigrams. */
  cjk: string[];
  /** Did the query contain both scripts (mixed-language query)? */
  isMixed: boolean;
  /** Detected synonyms (per language) — applied as a low-cost boost. */
  synonyms: string[];
};
