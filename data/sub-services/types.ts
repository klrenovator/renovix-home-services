/**
 * Phase 19 — typed sub-service registry.
 *
 * A standalone sub-service is a specific, bookable scope of work that sits
 * under one of the 10 main services (e.g. "Tile Repair & Replacement" under
 * Tile & Tiling). Each entry carries a stable slug, its parent service, its
 * optional link into the central pricing registry (`pricingId`), and — most
 * importantly for SEO quality — a **separately authored, genuinely localized
 * copy block for English, Bahasa Melayu and Simplified Chinese**.
 *
 * Every page is single-language: a sub-service is only generated for a
 * language once all of that language's copy is present. The pricing numbers,
 * units and ranges are never authored here — they come from the central
 * `data/pricing/pricing.ts` registry through `pricingId`, so a sub-service page
 * can never drift from the catalogue it is meant to represent.
 */

import type { ServiceFaq } from "@/data/service-content/types";

/** A "what changes the price / how it fits your home" card. */
export type SubServiceCard = {
  title: string;
  description: string;
};

/**
 * The localized copy for one sub-service in one language. Every field is
 * required and genuinely translated; an English sentence never leaks onto a
 * `/ms/` or `/zh/` sub-service page because a missing field would be a type
 * error rather than a runtime fallback.
 */
export type SubServiceText = {
  /** Card / breadcrumb label, e.g. "Tile Repair & Replacement". */
  name: string;
  /** Page H1, e.g. "Tile Repair & Replacement in Kuala Lumpur & Selangor". */
  h1: string;
  /** Meta description shown in search results. */
  metaDescription: string;
  /** `<title>` — brand + name + market. */
  title: string;
  /** One short answer-first paragraph under the H1. */
  lead: string;
  /** When this sub-service is the right fit (user context). */
  suitableFor: string[];
  /** What the work includes. */
  includes: string[];
  /** What the work does not include. */
  excludes: string[];
  /** Cost drivers, each linked to the pricing catalogue's own factors. */
  costFactors?: SubServiceCard[];
  /** Material / finish options where relevant. */
  materials?: SubServiceCard[];
  /** How the job is carried out (trust/process). */
  process?: SubServiceCard[];
  /** Frequently asked questions. */
  faqs: ServiceFaq[];
};

/**
 * One registered standalone sub-service. `en`, `ms` and `zh` must all be
 * complete before the entry can be published (enforced in the registry by the
 * fact that every field is required and the page only generates for a language
 * that has a complete block).
 */
export type SubServiceDefinition = {
  /** Stable URL slug, unique across all sub-services. */
  slug: string;
  /** The 10-service pillar slug this belongs under. */
  serviceSlug: string;
  /**
   * Id of the matching row in `data/pricing/pricing.ts`. When set, the page
   * surfaces the starting price, unit and scope straight from that row — the
   * single source of truth for pricing. Sub-services without a priced row
   * leave this unset and show no price (honesty rule).
   */
  pricingId?: string;
  /**
   * True only when this scope is a real thing people search for on its own
   * (e.g. "SPC flooring installation"), as opposed to a sub-part of a priced
   * project that has no standalone search intent. Guards against doorway pages.
   */
  standaloneSearchIntent: boolean;
  /** Problem-guide slugs that genuinely relate to this scope. */
  relatedProblems: string[];
  /** English copy block. */
  en: SubServiceText;
  /** Bahasa Melayu copy block. */
  ms: SubServiceText;
  /** Simplified Chinese copy block. */
  zh: SubServiceText;
};
