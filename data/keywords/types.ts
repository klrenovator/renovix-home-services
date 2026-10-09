import type { LanguageCode } from "@/data/languages";
import { absoluteUrl } from "@/i18n/seo";

/**
 * Keyword research database — types (master brief, Section 4).
 *
 * One row per researched keyword cluster. The database is the single place
 * where keyword → intent → entity → target URL is recorded, and where real
 * Search Console / autocomplete / People-Also-Ask evidence lands later.
 *
 * HONESTY RULES (binding — enforced by `runKeywordResearchAudits()` in
 * `data/keywords/index.ts`, which `app/sitemap.ts` runs at build time, and by
 * `npm run audit:keywords`):
 *
 *  1. **Never invent a search volume.** `searchVolume` is `null` (unknown)
 *     until a real source is recorded in `searchVolumeSource`. The same for
 *     competition notes and existing ranking URLs.
 *  2. **Never invent a ranking.** `existingRankingUrl` stays `null` until it
 *     is copied from a verified Search Console export, and it must be a URL on
 *     the production domain.
 *  3. **One primary target per keyword per language.** Two rows claiming the
 *     same normalized keyword is keyword cannibalization — the build fails.
 *  4. **Every target must be a real, published page.** The target is stored as
 *     a typed reference (slugs, never a hand-typed URL); the URL is derived
 *     from it, so a row can never drift from the page it names.
 *  5. Rows are composed from the site's verified registries (services,
 *     sub-services, problems, areas, articles, the search-intent matrix) plus
 *     the authored natural phrasings in `phrases.ts`. Nothing else.
 */

/** How close the searcher is to an enquiry. */
export type KeywordIntent = "informational" | "commercial" | "transactional";

/** The research cluster a row belongs to — each cluster has ONE URL strategy. */
export type KeywordCluster =
  /** Service + region, e.g. "tile repair Kuala Lumpur" → the service pillar. */
  | "core-service"
  /**
   * "… near me" phrasings. Intent only — by design there is NO dedicated
   * near-me URL (master brief §4B): the service pillar, the 53 area guides and
   * the Google Business Profile (owner-pending) answer this intent.
   */
  | "near-me"
  /** Location + service + problem combinations (search-intent matrix). */
  | "hyperlocal"
  /** Problem phrasings → the problem guide that diagnoses them. */
  | "problem"
  /** Educational phrasings → the Knowledge Hub guide that answers them. */
  | "informational";

export type KeywordPriority = "high" | "medium" | "low";

export type KeywordResearchStatus =
  /**
   * Composed from the site's verified registries and authored phrasings; no
   * live research source (GSC / autocomplete / PAA / Trends) checked yet.
   */
  | "derived"
  /** Confirmed against a real research source; the source is named in notes. */
  | "verified";

/**
 * A typed reference to the page a keyword should win. The URL is always
 * derived from this (`keywordTargetUrl`), never stored as a free string.
 */
export type KeywordTarget =
  | { kind: "service"; serviceSlug: string }
  | { kind: "subService"; serviceSlug: string; subServiceSlug: string }
  | { kind: "problem"; problemSlug: string }
  | { kind: "area"; regionId: string; areaSlug: string }
  | { kind: "article"; articleSlug: string }
  | { kind: "static"; path: string };

export type KeywordResearchEntry = {
  /** Stable id, e.g. `core-service:en:tiling:kuala-lumpur`. */
  id: string;
  /** The keyword or natural search phrasing, in its language. */
  keyword: string;
  language: LanguageCode;
  intent: KeywordIntent;
  cluster: KeywordCluster;
  serviceSlug?: string;
  subServiceSlug?: string;
  problemSlug?: string;
  /** Area slug when the keyword is location-specific. */
  locationSlug?: string;
  regionId?: "kuala-lumpur" | "selangor";
  /** Modifier(s) the phrasing carries ("near me", "cost", …). */
  modifier?: string;
  /**
   * Research source of the phrasing: which registry or authored table it was
   * composed from (e.g. "intent-matrix", "phrases.ts + services registry").
   */
  source: string;
  /**
   * NEVER invented. `null` = unknown. When set, `searchVolumeSource` is
   * required (enforced at build time).
   */
  searchVolume: number | null;
  /** The real source a volume was copied from (e.g. "GSC export 2026-10"). */
  searchVolumeSource?: string;
  /** Competition indicators, only when genuinely observed. `null` = unknown. */
  competitionNotes: string | null;
  /**
   * The URL currently ranking for this keyword, only ever copied from a
   * verified Search Console export. `null` = unknown / not ranking.
   */
  existingRankingUrl: string | null;
  /** The one primary target page for this keyword in this language. */
  target: KeywordTarget;
  /** Derived from `target` — do not hand-edit. */
  targetUrl: string;
  conversionRelevance: "high" | "medium" | "low";
  priority: KeywordPriority;
  researchStatus: KeywordResearchStatus;
  /** ISO date this row was last reviewed against its sources. */
  lastReviewed: string;
  notes?: string;
};

/** Root-relative path of the page a target refers to (trailing slash). */
export function keywordTargetPath(target: KeywordTarget): string {
  switch (target.kind) {
    case "service":
      return `/services/${target.serviceSlug}/`;
    case "subService":
      return `/services/${target.serviceSlug}/${target.subServiceSlug}/`;
    case "problem":
      return `/problems/${target.problemSlug}/`;
    case "area":
      return `/areas/${target.regionId}/${target.areaSlug}/`;
    case "article":
      return `/blog/${target.articleSlug}/`;
    case "static":
      return target.path;
  }
}

/** Canonical absolute URL of a target page in a language. */
export function keywordTargetUrl(lang: LanguageCode, target: KeywordTarget): string {
  return absoluteUrl(lang, keywordTargetPath(target));
}

/**
 * Normalization for duplicate detection: case-folded (English only has case),
 * whitespace-collapsed, trimmed. Two rows in one language whose normalized
 * keywords match are competing for the same intent — the build fails.
 */
export function normalizeKeyword(keyword: string): string {
  return keyword.trim().replace(/\s+/g, " ").toLowerCase();
}
