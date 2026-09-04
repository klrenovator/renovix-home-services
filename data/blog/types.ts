/**
 * Phase 20 — typed article (Knowledge Hub) registry.
 *
 * An article is an educational guide that supports the commercial pages: it
 * answers a real question a Klang Valley property owner asks before hiring,
 * then links to the service, sub-service, problem, location and project pages
 * that carry the transactional intent.
 *
 * Rules encoded by these types:
 *
 * 1. **No combined-language articles.** Every article carries three complete,
 *    separately authored copy blocks (`en`, `ms`, `zh`). All three are
 *    required, so a `/ms/blog/…` page can never render English body copy.
 * 2. **No authored prices.** Copy blocks contain no RM figures. Prices reach
 *    the page only through `PricingBlock`, which resolves rows out of
 *    `data/pricing/pricing.ts` — the single source of truth. `npm run
 *    audit:pricing` fails the build if an RM figure is typed into this
 *    namespace.
 * 3. **Only real relationships.** The `related*` arrays are validated against
 *    the service, sub-service, problem, area and project registries by
 *    `npm run audit:authority`, so an article can never link a page that does
 *    not exist, and every article is reachable from the entities it supports
 *    (no orphan guides).
 * 4. **Honest dates and attribution.** `published` is the date the article was
 *    actually written; `updated` is only set when the copy was materially
 *    revised. Attribution is the business itself — no invented author
 *    personas, credentials or bylines.
 */

import type { ServiceFaq } from "@/data/service-content/types";

/** Editorial category — also the Knowledge Hub filter label key. */
export type ArticleCategoryId =
  | "cost-guides"
  | "materials"
  | "troubleshooting"
  | "planning"
  | "maintenance";

/**
 * Search intent an article genuinely serves. Used to keep the backlog honest:
 * an intent is declared only when the article really answers it, so the
 * content map can show coverage without inventing "one blog per URL".
 */
export type ArticleIntent =
  | "cost"
  | "price-factors"
  | "repair"
  | "installation"
  | "maintenance"
  | "material-comparison"
  | "troubleshooting"
  | "decision-guide"
  | "preparation"
  | "lifespan"
  | "signs-of-failure"
  | "when-to-call";

/** A body block. Prices are never text — they are resolved from the catalogue. */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; description: string }[] }
  | {
      /**
       * Renders catalogue rows as a table. `pricingIds` must exist in
       * `data/pricing/pricing.ts`; the numbers, units and disclaimer are read
       * from there at render time and localized by the pricing registry.
       */
      type: "pricing";
      pricingIds: string[];
      note?: string;
    }
  | { type: "callout"; title: string; text: string }
  | {
      /**
       * A comparison table with authored, price-free cells (e.g. materials
       * versus wear resistance). Any money comparison must use a `pricing`
       * block instead.
       */
      type: "table";
      columns: string[];
      rows: string[][];
    };

export type ArticleSection = {
  /** H2 text. */
  heading: string;
  blocks: ArticleBlock[];
};

/** One language's complete copy for one article. */
export type ArticleText = {
  /** `<title>` for search results. */
  title: string;
  /** Meta description. */
  metaDescription: string;
  /** Page H1. */
  h1: string;
  /** Card / listing summary. */
  excerpt: string;
  /** The question the article answers, stated plainly. */
  question: string;
  /** The concise answer block rendered directly under the H1 (AEO/LLMO). */
  answer: string;
  /** Scannable takeaways under the answer block. */
  keyPoints: string[];
  sections: ArticleSection[];
  faqs: ServiceFaq[];
  /** One honest closing paragraph before the CTA. */
  closing: string;
};

export type ArticleDefinition = {
  /** Stable URL slug: `/{lang}/blog/{slug}/`. */
  slug: string;
  category: ArticleCategoryId;
  /** Intents this article genuinely serves. */
  intents: ArticleIntent[];
  /** ISO date the article was written. Never back-dated, never invented. */
  published: string;
  /** ISO date of a material revision — omitted until one actually happens. */
  updated?: string;
  /**
   * Image rendered at the top of the article and used as its social card.
   * Only set when a real, owned photograph exists for the topic; omitted
   * otherwise so no stock or staged image is ever implied.
   */
  image?: { src: string; width: number; height: number; alt: string };
  /** Pillar service slugs this article supports. */
  relatedServices: string[];
  /** Sub-service slugs (`data/sub-services`) genuinely covered. */
  relatedSubServices: string[];
  /** Problem-guide slugs genuinely covered. */
  relatedProblems: string[];
  /** Area guides (`region/slug`) where the topic has real local context. */
  relatedLocations: string[];
  /** Published project slugs that genuinely show this work. */
  relatedProjects: string[];
  /** Catalogue rows quoted anywhere in the body (used for validation + AI feeds). */
  pricingIds: string[];
  en: ArticleText;
  ms: ArticleText;
  zh: ArticleText;
};
