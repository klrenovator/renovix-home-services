/**
 * Keyword research database — master brief, Section 4.
 *
 * Every row is COMPOSED from the site's verified registries plus the authored
 * natural phrasings in `phrases.ts`:
 *
 *   - core-service   10 services × 2 regions × 3 languages → service pillars
 *   - near-me        10 services × 3 languages → service pillars (intent only;
 *                    by design there is NO dedicated near-me URL — §4B)
 *   - hyperlocal     the 24 published search-intent-matrix entries and their
 *                    authored query examples → the sub-service (or service) page
 *   - problem        57 problem guides × 3 languages → the problem guide
 *   - informational  12 Knowledge Hub guides × their published languages → the
 *                    guide page
 *
 * Nothing is invented: every `searchVolume` is `null`, every
 * `existingRankingUrl` is `null`, every `researchStatus` is `"derived"`, and
 * every target is a typed reference whose URL is derived, not hand-typed.
 *
 * `runKeywordResearchAudits()` is wired into `app/sitemap.ts` and FAILS THE
 * BUILD when: a target stops resolving to a published page, two rows claim the
 * same normalized keyword in one language (cannibalization), a volume or
 * ranking URL appears without a source, or a near-me row stops pointing at a
 * service page. `npm run audit:keywords` adds the static source guards.
 */

import { languages, type LanguageCode } from "@/data/languages";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { getRegionName } from "@/data/i18n";
import { getProblemDetails } from "@/data/problem-content";
import {
  articleLanguages,
  getArticle,
  getArticleText,
  getArticles,
} from "@/data/blog";
import { locationServiceMatrix } from "@/data/locations/intent-matrix";
import { getAllSubServices, subServiceLanguages } from "@/data/sub-services";
import { ALL_AREA_REGIONS, hasTranslation } from "@/i18n/coverage";

import { coreServicePhrases } from "./phrases";
import {
  keywordTargetUrl,
  normalizeKeyword,
  type KeywordCluster,
  type KeywordResearchEntry,
  type KeywordTarget,
} from "./types";

export * from "./types";

/** Date this derivation was last reviewed against the registries. */
const REVIEW_DATE = "2026-10-09";

/** Static (non-entity) pages a keyword row may target. */
const STATIC_TARGET_PATHS = new Set([
  "/services/",
  "/problems/",
  "/areas/",
  "/blog/",
  "/projects/",
  "/quote/",
  "/contact/",
  "/about/",
  "/faq/",
  "/search/",
  "/privacy/",
  "/terms/",
]);

type RowInput = Omit<KeywordResearchEntry, "targetUrl" | "searchVolume" | "searchVolumeSource" | "competitionNotes" | "existingRankingUrl" | "researchStatus" | "lastReviewed">;

/**
 * Builds a row. The honesty fields are filled here — and only here — so a
 * future edit cannot smuggle in a volume or a ranking: `searchVolume` and
 * `existingRankingUrl` are always `null` at composition time, and the audit
 * below fails the build if that ever changes without a source.
 */
function row(input: RowInput): KeywordResearchEntry {
  return {
    ...input,
    targetUrl: keywordTargetUrl(input.language, input.target),
    searchVolume: null,
    competitionNotes: null,
    existingRankingUrl: null,
    researchStatus: "derived",
    lastReviewed: REVIEW_DATE,
  };
}

/* ------------------------------------------------------------------------ */
/* Cluster composition                                                       */
/* ------------------------------------------------------------------------ */

/** Core service × region rows → the localized service pillar. */
function coreServiceRows(): KeywordResearchEntry[] {
  const rows: KeywordResearchEntry[] = [];
  for (const lang of languages) {
    for (const service of services) {
      const phrase = coreServicePhrases[lang.code][service.slug];
      for (const regionId of ALL_AREA_REGIONS) {
        rows.push(
          row({
            id: `core-service:${lang.code}:${service.slug}:${regionId}`,
            keyword: `${phrase} ${getRegionName(regionId, lang.code)}`,
            language: lang.code,
            intent: "transactional",
            cluster: "core-service",
            serviceSlug: service.slug,
            regionId,
            source: "phrases.ts + services registry + region names",
            target: { kind: "service", serviceSlug: service.slug },
            conversionRelevance: "high",
            priority: "high",
            notes: "Core service × region cluster; the localized service pillar is the single primary target.",
          }),
        );
      }
    }
  }
  return rows;
}

/**
 * Near-me rows → the localized service pillar. The master brief (§4B) is
 * explicit: near-me queries are search intent, not a URL strategy — no
 * dedicated page is created for them.
 */
function nearMeRows(): KeywordResearchEntry[] {
  const rows: KeywordResearchEntry[] = [];
  for (const lang of languages) {
    for (const service of services) {
      const phrase = coreServicePhrases[lang.code][service.slug];
      const suffix = lang.code === "zh" ? "附近" : "near me";
      rows.push(
        row({
          id: `near-me:${lang.code}:${service.slug}`,
          keyword: `${phrase} ${suffix}`,
          language: lang.code,
          intent: "transactional",
          cluster: "near-me",
          serviceSlug: service.slug,
          modifier: suffix,
          source: "phrases.ts + services registry",
          target: { kind: "service", serviceSlug: service.slug },
          conversionRelevance: "high",
          priority: "high",
          notes:
            "Near-me intent cluster — no dedicated URL by design (master brief §4B). Answered by the service pillar, the 53 area guides and the Google Business Profile (owner-pending).",
        }),
      );
    }
  }
  return rows;
}

/** Hyperlocal rows from the published search-intent matrix → scope pages. */
function hyperlocalRows(): KeywordResearchEntry[] {
  const rows: KeywordResearchEntry[] = [];
  for (const entry of locationServiceMatrix) {
    if (!entry.published) continue;
    entry.searchQueryExamples.forEach((example, index) => {
      const target: KeywordTarget = entry.subServiceSlug
        ? {
            kind: "subService",
            serviceSlug: entry.serviceSlug,
            subServiceSlug: entry.subServiceSlug,
          }
        : { kind: "service", serviceSlug: entry.serviceSlug };
      rows.push(
        row({
          id: `hyperlocal:${entry.id}:${index}`,
          keyword: example,
          language: "en",
          intent: "transactional",
          cluster: "hyperlocal",
          serviceSlug: entry.serviceSlug,
          subServiceSlug: entry.subServiceSlug,
          problemSlug: entry.problemSlug,
          locationSlug: entry.locationSlug,
          regionId: entry.regionId,
          modifier: entry.intentModifiers.join(", "),
          source: `search-intent matrix entry "${entry.id}" (authored query example)`,
          target,
          conversionRelevance: "high",
          priority: "high",
          notes: `${entry.locationName} — ${entry.serviceName}${entry.subServiceName ? ` / ${entry.subServiceName}` : ""}${entry.problemName ? `; problem: ${entry.problemName}` : ""}.`,
        }),
      );
    });
  }
  return rows;
}

/** Problem phrasings → the localized problem guide. */
function problemRows(): KeywordResearchEntry[] {
  const rows: KeywordResearchEntry[] = [];
  for (const lang of languages) {
    for (const problem of getProblemDetails(lang.code)) {
      if (!hasTranslation("problem", problem.slug, lang.code)) continue;
      rows.push(
        row({
          id: `problem:${lang.code}:${problem.slug}`,
          keyword: lang.code === "en" ? problem.name.toLowerCase() : problem.name,
          language: lang.code,
          intent: "commercial",
          cluster: "problem",
          serviceSlug: problem.relatedServices[0],
          problemSlug: problem.slug,
          source: "problem-content registry (the guide's own published name)",
          target: { kind: "problem", problemSlug: problem.slug },
          conversionRelevance: "high",
          priority: "high",
          notes: "Problem phrasing → the guide that diagnoses it; the guide links the bookable scopes that fix it.",
        }),
      );
    }
  }
  return rows;
}

/** Educational phrasings → the localized Knowledge Hub guide. */
function informationalRows(): KeywordResearchEntry[] {
  const rows: KeywordResearchEntry[] = [];
  for (const article of getArticles()) {
    for (const lang of articleLanguages(article.slug)) {
      const text = getArticleText(article, lang);
      const isCostGuide = article.category === "cost-guides";
      rows.push(
        row({
          id: `informational:${lang}:${article.slug}`,
          keyword: lang === "en" ? text.title.toLowerCase() : text.title,
          language: lang,
          intent: isCostGuide ? "commercial" : "informational",
          cluster: "informational",
          serviceSlug: article.relatedServices[0],
          source: "blog registry (the guide's own published title)",
          target: { kind: "article", articleSlug: article.slug },
          conversionRelevance: isCostGuide ? "high" : "medium",
          priority: isCostGuide ? "high" : "medium",
          notes: `Knowledge Hub guide (${article.category}); published ${article.published}.`,
        }),
      );
    }
  }
  return rows;
}

/** The composed database. Regenerate nothing by hand — edit the sources. */
export const keywordResearchEntries: KeywordResearchEntry[] = [
  ...coreServiceRows(),
  ...nearMeRows(),
  ...hyperlocalRows(),
  ...problemRows(),
  ...informationalRows(),
];

/* ------------------------------------------------------------------------ */
/* Build-time audit                                                          */
/* ------------------------------------------------------------------------ */

/** True when the target page is actually published in the row's language. */
function targetIsPublished(target: KeywordTarget, lang: LanguageCode): boolean {
  switch (target.kind) {
    case "service":
      return (
        services.some((service) => service.slug === target.serviceSlug) &&
        hasTranslation("service", target.serviceSlug, lang)
      );
    case "subService": {
      const sub = getAllSubServices().find(
        (item) =>
          item.slug === target.subServiceSlug &&
          item.serviceSlug === target.serviceSlug,
      );
      if (!sub) return false;
      return subServiceLanguages(sub.slug).includes(lang);
    }
    case "problem":
      return hasTranslation("problem", target.problemSlug, lang);
    case "area":
      return hasTranslation("area", target.areaSlug, lang);
    case "article": {
      const article = getArticle(target.articleSlug);
      if (!article) return false;
      return articleLanguages(article.slug).includes(lang);
    }
    case "static":
      return STATIC_TARGET_PATHS.has(target.path);
  }
}

/**
 * Validates the whole database. Returns a list of issues (empty = pass).
 * Wired into `app/sitemap.ts`, so any issue fails `npm run build`.
 */
export function runKeywordResearchAudits(): string[] {
  const issues: string[] = [];
  const seenIds = new Set<string>();
  const seenKeywords = new Map<string, string>(); // `${lang}:${normalized}` → row id

  for (const entry of keywordResearchEntries) {
    // 1. Stable, unique ids.
    if (seenIds.has(entry.id)) issues.push(`duplicate row id: ${entry.id}`);
    seenIds.add(entry.id);

    // 2. Keyword present and unique per language (cannibalization guard).
    if (!entry.keyword.trim()) {
      issues.push(`row ${entry.id} has an empty keyword`);
    } else {
      const key = `${entry.language}:${normalizeKeyword(entry.keyword)}`;
      const existing = seenKeywords.get(key);
      if (existing) {
        issues.push(
          `keyword "${entry.keyword}" (${entry.language}) is claimed by both ${existing} and ${entry.id} — one primary target per keyword`,
        );
      } else {
        seenKeywords.set(key, entry.id);
      }
    }

    // 3. The stored URL must equal the URL derived from the typed target.
    const derived = keywordTargetUrl(entry.language, entry.target);
    if (entry.targetUrl !== derived) {
      issues.push(
        `row ${entry.id}: targetUrl ${entry.targetUrl} does not match the derived URL ${derived}`,
      );
    }

    // 4. The target must be a real, published page in that language.
    if (!targetIsPublished(entry.target, entry.language)) {
      issues.push(
        `row ${entry.id}: target ${entry.targetUrl} is not a published page in ${entry.language}`,
      );
    }

    // 5. Honesty guards — no invented volumes, rankings or competition data.
    if (
      entry.searchVolume !== null &&
      (!(typeof entry.searchVolume === "number" && entry.searchVolume > 0) ||
        !entry.searchVolumeSource?.trim())
    ) {
      issues.push(
        `row ${entry.id}: searchVolume is set without a positive number + searchVolumeSource — volumes are never invented`,
      );
    }
    if (
      entry.existingRankingUrl !== null &&
      !entry.existingRankingUrl.startsWith(`${siteConfig.url}/`)
    ) {
      issues.push(
        `row ${entry.id}: existingRankingUrl must be null or a ${siteConfig.url} URL copied from a verified Search Console export`,
      );
    }
    if (entry.competitionNotes !== null && !entry.notes?.includes("source:")) {
      issues.push(
        `row ${entry.id}: competitionNotes is set — record the observation source in notes first`,
      );
    }
    if (entry.researchStatus === "verified" && !entry.notes?.trim()) {
      issues.push(`row ${entry.id}: researchStatus "verified" requires the source named in notes`);
    }

    // 6. Near-me rows answer intent on service pages — never a dedicated URL.
    if (entry.cluster === "near-me" && entry.target.kind !== "service") {
      issues.push(`row ${entry.id}: near-me rows must target a service page (no dedicated near-me URL)`);
    }
  }

  return issues;
}

/** Row counts per cluster — used by the audit script and progress records. */
export function keywordResearchSummary(): Record<KeywordCluster, number> {
  const summary: Record<KeywordCluster, number> = {
    "core-service": 0,
    "near-me": 0,
    hyperlocal: 0,
    problem: 0,
    informational: 0,
  };
  for (const entry of keywordResearchEntries) {
    summary[entry.cluster] += 1;
  }
  return summary;
}
