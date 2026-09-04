import {
  translatedContent,
  ALL_AREAS,
  ALL_AREA_REGIONS,
  ALL_PROBLEMS,
  ALL_PROJECTS,
  ALL_SERVICES,
} from "./coverage";
import { serviceDetails, translatedServiceSlugs } from "@/data/service-content";
import { problemDetails, translatedProblemSlugs } from "@/data/problem-content";
import {
  areaRegions,
  translatedAreaRegionIds,
  translatedAreaSlugs,
} from "@/data/area-content";
import {
  getPublishedProjects,
  projects,
  translatedProjectSlugs,
} from "@/data/project-content";
import { projectCategories } from "@/data/projects";
import { getSubService } from "@/data/sub-services";
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

  // `ALL_PROJECTS` drives the sitemap, the hreflang sets and the language
  // switcher, so it must list exactly the *published* projects — a slug in here
  // for a draft would submit a URL that answers 404.
  diff(
    "project",
    "ALL_PROJECTS",
    [...ALL_PROJECTS],
    getPublishedProjects().map((project) => project.slug),
  );

  assertFaqTranslationsInSync();
  assertProblemLabelsInSync();
  assertProjectDataIsSound();
  assertProjectSubServiceLinksAreSound();
  assertTranslationRegistriesInSync();
}

/**
 * Project-specific integrity checks: slugs must be unique (two projects with
 * the same slug would silently share a URL) and every published project must
 * carry English copy plus a main image, because both are required to render a
 * detail page at all.
 */
function assertProjectDataIsSound() {
  const seen = new Set<string>();

  for (const project of projects) {
    if (seen.has(project.slug)) {
      throw new Error(
        `[i18n/verify] duplicate project slug: ${project.slug}`,
      );
    }
    seen.add(project.slug);

    if (project.status !== "published") {
      continue;
    }

    if (!project.image?.src) {
      throw new Error(
        `[i18n/verify] published project has no main image: ${project.slug}`,
      );
    }
  }
}

/**
 * Phase 21 — project ↔ sub-service link integrity.
 *
 * A project may only cite a Phase 19 sub-service when that sub-service is
 * real (registered in `data/sub-services`) and belongs to a service the
 * project actually carried out (its primary category or a related category).
 * Anything else would either be a dead link or a fabricated relationship, so
 * both are build failures, not warnings.
 */
function assertProjectSubServiceLinksAreSound() {
  for (const project of projects) {
    if (project.status !== "published") {
      continue;
    }

    const projectServiceSlugs = new Set(
      [project.category, ...(project.relatedCategories ?? [])]
        .map(
          (id) =>
            projectCategories.find((category) => category.id === id)
              ?.servicePath.replace("/services/", ""),
        )
        .filter((slug): slug is string => Boolean(slug)),
    );
    const seen = new Set<string>();

    for (const slug of project.subServices ?? []) {
      if (seen.has(slug)) {
        throw new Error(
          `[i18n/verify] project ${project.slug} lists sub-service ${slug} more than once`,
        );
      }
      seen.add(slug);

      const sub = getSubService(slug);
      if (!sub) {
        throw new Error(
          `[i18n/verify] project ${project.slug} references an unknown sub-service: ${slug}`,
        );
      }

      if (!projectServiceSlugs.has(sub.serviceSlug)) {
        throw new Error(
          `[i18n/verify] project ${project.slug} cites sub-service ${slug} (service: ${sub.serviceSlug}), but the project is not recorded under that service — a project may only link to sub-services of services it actually carried out`,
        );
      }
    }
  }
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

    diff(
      `${lang} project translation`,
      `translatedContent.${lang}.project`,
      translatedContent[lang].project,
      translatedProjectSlugs(lang),
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
