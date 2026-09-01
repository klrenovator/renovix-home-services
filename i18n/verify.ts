import {
  translatedContent,
  ALL_AREAS,
  ALL_AREA_REGIONS,
  ALL_PROBLEMS,
  ALL_SERVICES,
} from "./coverage";
import { serviceDetails, translatedServiceSlugs } from "@/data/service-content";
import { problemDetails, translatedProblemSlugs } from "@/data/problem-content";
import {
  areaRegions,
  translatedAreaRegionIds,
  translatedAreaSlugs,
} from "@/data/area-content";
import { siteFaqs } from "@/data/site-faqs";
import { problemList } from "@/data/i18n/lists";
import { languages } from "@/data/languages";
import { getDictionary } from "./index";

function diff(kind: string, listName: string, expected: string[], actual: string[]) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);

  const wrong = expected.filter((slug) => !actualSet.has(slug));
  const missing = actual.filter((slug) => !expectedSet.has(slug));

  if (wrong.length > 0 || missing.length > 0) {
    const parts: string[] = [];
    if (wrong.length > 0) {
      parts.push(`in ${listName} but not in the registry: ${wrong.join(", ")}`);
    }
    if (missing.length > 0) {
      parts.push(`in the registry but missing from ${listName}: ${missing.join(", ")}`);
    }

    throw new Error(`[i18n/verify] ${kind} slug inventory drifted — ${parts.join("; ")}`);
  }
}

/**
 * Build-time guard against slug drift between `i18n/coverage.ts` (the lists
 * that drive sitemaps, hreflang sets and static param generation) and the
 * actual content registries. A stale slug here means a sitemap entry for a
 * URL that 404s — so the mismatch is a build failure, not a warning.
 *
 * Imported from `app/sitemap.ts`, which runs for every locale at build time.
 */
export function assertCoverageInSync() {
  diff(
    "service",
    "ALL_SERVICES",
    [...ALL_SERVICES],
    serviceDetails.map((detail) => detail.slug),
  );

  diff(
    "problem",
    "ALL_PROBLEMS",
    [...ALL_PROBLEMS],
    problemDetails.map((detail) => detail.slug),
  );

  diff(
    "area region",
    "ALL_AREA_REGIONS",
    [...ALL_AREA_REGIONS],
    areaRegions.map((region) => region.id),
  );

  diff(
    "area",
    "ALL_AREAS",
    [...ALL_AREAS],
    areaRegions.flatMap((region) =>
      region.areas.map((area) => `${region.id}/${area.slug}`),
    ),
  );

  assertFaqTranslationsInSync();
  assertProblemLabelsInSync();
  assertTranslationRegistriesInSync();
}

/**
 * `i18n/coverage.ts` decides which localized pages are generated, linked and
 * listed in the sitemap, while the translation registries hold the actual copy.
 * If the two disagree, either a localized page is published without a
 * translation (English leaking under a /ms/ or /zh/ URL) or a finished
 * translation is never published. Both are build failures.
 */
function assertTranslationRegistriesInSync() {
  for (const lang of ["ms", "zh"] as const) {
    diff(
      `${lang} service translation`,
      `translatedContent.${lang}.service`,
      translatedContent[lang].service,
      translatedServiceSlugs(lang),
    );

    diff(
      `${lang} problem translation`,
      `translatedContent.${lang}.problem`,
      translatedContent[lang].problem,
      translatedProblemSlugs(lang),
    );

    diff(
      `${lang} area translation`,
      `translatedContent.${lang}.area`,
      translatedContent[lang].area,
      translatedAreaSlugs(lang),
    );

    diff(
      `${lang} area region translation`,
      `translatedContent.${lang}.areaRegion`,
      translatedContent[lang].areaRegion,
      translatedAreaRegionIds(lang),
    );
  }
}

/**
 * The FAQ answers are keyed by FAQ id in a `Record<string, …>`, so a key that
 * does not match an id is invisible to TypeScript — it silently falls back to
 * the English question and answer and mixes languages on a `/ms/` or `/zh/`
 * page. This turns that class of typo into a build failure.
 */
function assertFaqTranslationsInSync() {
  const ids = siteFaqs.map((faq) => faq.id);

  for (const language of languages) {
    const answers = getDictionary(language.code).faq.answers;

    diff(
      `${language.code} FAQ answer`,
      `${language.code}.faq.answers`,
      Object.keys(answers),
      ids,
    );
  }
}

/**
 * The problem index lists every problem in all three languages, so a slug
 * missing from `problemList` would silently render an English card inside a
 * Malay or Chinese page.
 */
function assertProblemLabelsInSync() {
  const ids = problemDetails.map((problem) => problem.slug);

  for (const language of languages) {
    if (language.code === "en") {
      continue;
    }

    diff(
      `${language.code} problem card`,
      `problemList.${language.code}`,
      Object.keys(problemList[language.code]),
      ids,
    );
  }
}
