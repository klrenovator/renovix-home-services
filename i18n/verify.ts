import {
  translatedContent,
  ALL_AREAS,
  ALL_AREA_REGIONS,
  ALL_PROBLEMS,
  ALL_PROJECTS,
  ALL_SERVICES,
} from "./coverage";
import {
  getServiceDetail,
  serviceDetails,
  translatedServiceSlugs,
} from "@/data/service-content";
import {
  getProblemDetail,
  problemDetails,
  translatedProblemSlugs,
} from "@/data/problem-content";
import {
  areaRegions,
  getAllAreas,
  getAreaDetail,
  getAreaRegion,
  translatedAreaRegionIds,
  translatedAreaSlugs,
} from "@/data/area-content";
import { services } from "@/data/services";
import {
  getAreaName,
  getProblemCardLabels,
  getRegionName,
  getServiceName,
} from "@/data/i18n";
import {
  getPublishedProjects,
  projects,
  translatedProjectSlugs,
} from "@/data/project-content";
import { projectCategories } from "@/data/projects";
import { getSubService } from "@/data/sub-services";
import { siteFaqs } from "@/data/site-faqs";
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
  assertEntityNamesAreSingleSourced();
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
 * Phase 47 — one entity, one name, in every language.
 *
 * A label that links to a page must say what that page calls itself. Four
 * families publish a short label from a shared table *and* a long-form page from
 * a content registry, and nothing ever compared the two:
 *
 * - **areas** — `getAreaName()` (chips, cards, hero lists) vs the area guide's
 *   own `name` (its H1, `<title>`, breadcrumb and `WebPage`/`Service` JSON-LD).
 *   5 of 159 label/page pairs disagreed: `areaNames.ms` is empty for the 52
 *   localities whose official Malay spelling *is* the English one, so every
 *   `/ms/` page linked the `kl-city-centre` guide as "KL City Centre" while that
 *   guide said "Pusat Bandar KL"; and 4 Chinese guides published a different
 *   Chinese name from the one 120+ other `/zh/` pages used for them.
 * - **problems** — the library index card vs the guide it opens. The card read a
 *   second, independently authored translation table (retired in Phase 47): 10
 *   Malay and 22 Chinese card names disagreed with the guide's own H1, and all
 *   114 subtitles did.
 * - **services** and **regions** — measured as already agreeing; guarded so they
 *   cannot drift the way the two above did.
 *
 * Localized area names must also be **unique inside a language**. Two published
 * Chinese guides both named 沙登 (`selangor/serdang` and
 * `selangor/seri-kembangan`) left a Chinese reader — and an answer engine
 * quoting the site — unable to tell two different towns apart; `seri-kembangan`
 * now publishes 史里肯邦安, the spelling the rest of the `/zh/` corpus and its
 * own neighbour's guide already used for it.
 */
function assertEntityNamesAreSingleSourced() {
  for (const language of languages) {
    const code = language.code;

    const areaNamesSeen = new Map<string, string>();

    for (const area of getAllAreas()) {
      const key = `${area.region}/${area.slug}`;
      const guide = getAreaDetail(area.region, area.slug, code);

      if (!guide?.name) {
        throw new Error(
          `[i18n/verify] ${code} area guide publishes no name: ${key}`,
        );
      }

      const label = getAreaName(area, code);
      if (label !== guide.name) {
        throw new Error(
          `[i18n/verify] ${code} area label "${label}" disagrees with the name the guide itself publishes ("${guide.name}"): ${key}`,
        );
      }

      const other = areaNamesSeen.get(guide.name);
      if (other) {
        throw new Error(
          `[i18n/verify] ${code} publishes two area guides under one name "${guide.name}": ${other} and ${key}`,
        );
      }
      areaNamesSeen.set(guide.name, key);
    }

    for (const region of areaRegions) {
      const localized = getAreaRegion(region.id, code);
      const expected = localized?.name ?? region.name;
      const label = getRegionName(region.id, code);

      if (label !== expected) {
        throw new Error(
          `[i18n/verify] ${code} region label "${label}" disagrees with the name the region hub itself publishes ("${expected}"): ${region.id}`,
        );
      }
    }

    for (const service of services) {
      const detail = getServiceDetail(service.slug, code);
      const expected = detail?.name ?? service.name;
      const label = getServiceName(service.slug, code);

      if (label !== expected) {
        throw new Error(
          `[i18n/verify] ${code} service label "${label}" disagrees with the name the pillar page itself publishes ("${expected}"): ${service.slug}`,
        );
      }
    }

    for (const problem of problemDetails) {
      const guide = getProblemDetail(problem.slug, code);

      if (!guide?.name || !guide.subtitle) {
        throw new Error(
          `[i18n/verify] ${code} problem guide publishes no localized name or subtitle: ${problem.slug}`,
        );
      }

      const card = getProblemCardLabels(code, problem);
      if (card.name !== guide.name || card.subtitle !== guide.subtitle) {
        throw new Error(
          `[i18n/verify] ${code} problem index card ("${card.name}") disagrees with the guide it links to ("${guide.name}"): ${problem.slug}`,
        );
      }
    }
  }
}
