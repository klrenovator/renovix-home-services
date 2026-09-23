import {
  getLanguageCode,
  type LanguageCode,
} from "@/data/languages";
import { siteFaqs, type SiteFaq } from "@/data/site-faqs";
import { getDictionary } from "@/i18n";
import { services, type ServiceCategory } from "@/data/services";
import {
  problemCategoryIcons,
  problemPreviewSlugs,
  type ProblemPreview,
} from "@/data/problem-content";
import { getProblemDetail, problemCategories } from "@/data/problem-content";
import type {
  ProblemCategory as ProblemContentCategory,
  ProblemDetail,
} from "@/data/problem-content/types";
import { projectCategories, type ProjectCategory } from "@/data/projects";
import { areasIndexFaqs, getAreaDetail } from "@/data/area-content";
import { getSubServicesByService } from "@/data/sub-services";
import type { AreaDetail, AreaFaq } from "@/data/area-content/types";
import {
  areaNames,
  areasIndexFaqList,
  districtList,
  problemCategoryList,
  projectCategoryLabels,
  regionList,
  serviceList,
  stateNames,
} from "./lists";
import type { DistrictGroup } from "@/data/locations/types";

/**
 * Language-aware accessors for the short shared lists. English values come from
 * the original data modules; `ms` and `zh` come from `data/i18n/lists.ts`.
 */

export function getServiceCategories(lang: LanguageCode | string): ServiceCategory[] {
  const code = getLanguageCode(lang);

  if (code === "en") {
    return services;
  }

  const localized = serviceList[code];

  return services.map((service) => {
    const entry = localized[service.slug];

    return entry
      ? { ...service, name: entry.name, shortDescription: entry.shortDescription }
      : service;
  });
}

export function getServiceName(
  slug: string,
  lang: LanguageCode | string,
  fallback?: string,
): string {
  const code = getLanguageCode(lang);

  if (code !== "en") {
    const entry = serviceList[code][slug];
    if (entry) {
      return entry.name;
    }
  }

  return fallback ?? services.find((service) => service.slug === slug)?.name ?? slug;
}

/**
 * Homepage problem previews, derived from the authoritative problem-content
 * registry. The only local data is the curated order and the category icon —
 * labels and slugs are never duplicated.
 */
export function getProblemPreviews(
  lang: LanguageCode | string,
): ProblemPreview[] {
  const code = getLanguageCode(lang);

  return problemPreviewSlugs
    .map((slug) => {
      const detail = getProblemDetail(slug, code);
      if (!detail) return undefined;

      return {
        id: detail.slug,
        label: detail.name,
        icon: problemCategoryIcons[detail.category],
      } satisfies ProblemPreview;
    })
    .filter((problem): problem is ProblemPreview => Boolean(problem));
}

export function getProblemCategories(
  lang: LanguageCode | string,
): ProblemContentCategory[] {
  const code = getLanguageCode(lang);

  if (code === "en") {
    return problemCategories;
  }

  const localized = problemCategoryList[code];

  return problemCategories.map((category) => {
    const entry = localized[category.id];

    return entry
      ? { ...category, label: entry.label, intro: entry.intro }
      : category;
  });
}

/**
 * Problem names and one-line summaries for the problem index cards.
 *
 * Phase 47 — the card now reads the guide itself. `getProblemDetail()` returns
 * the localized guide in the requested language (English included), so the card
 * label is by construction the same string as the H1, `<title>`, breadcrumb and
 * `Article.headline` of the page the card links to.
 *
 * It used to read a second, independently authored translation table
 * (`problemList` in `data/i18n/lists.ts`, retired here) whose doc comment still
 * described the guides as English-only and counted 46 of them. That table had
 * drifted from the guides it labelled: **10 Malay and 22 Chinese card names and
 * all 57 + 57 card subtitles** disagreed with the page behind them — `/zh/`
 * listed 破损瓷砖维修 for a guide whose own H1 reads 破砖维修, and the same
 * divergence was published into the index page's `ItemList` node. A card is a
 * preview of one page, so the page owns the wording.
 */
export function getProblemCardLabels(
  lang: LanguageCode | string,
  problem: ProblemDetail,
): { name: string; subtitle: string } {
  const detail = getProblemDetail(problem.slug, lang);

  return {
    name: detail?.name ?? problem.name,
    subtitle: detail?.subtitle ?? problem.subtitle,
  };
}

export function getProjectCategories(lang: LanguageCode | string): ProjectCategory[] {
  const code = getLanguageCode(lang);

  if (code === "en") {
    return projectCategories;
  }

  const localized = projectCategoryLabels[code];

  return projectCategories.map((category) => ({
    ...category,
    label: localized[category.id] ?? category.label,
  }));
}

export function getAreasIndexFaqs(lang: LanguageCode | string): AreaFaq[] {
  const code = getLanguageCode(lang);
  return code === "en" ? areasIndexFaqs : areasIndexFaqList[code];
}

export function getRegionName(
  regionId: string,
  lang: LanguageCode | string,
): string {
  const code = getLanguageCode(lang);

  if (code !== "en") {
    const entry = regionList[code][regionId];
    if (entry) {
      return entry.name;
    }
  }

  return regionId === "selangor" ? "Selangor" : "Kuala Lumpur";
}

export function getRegionSummary(
  regionId: string,
  lang: LanguageCode | string,
  fallback: string,
): string {
  const code = getLanguageCode(lang);

  if (code !== "en") {
    const entry = regionList[code][regionId];
    if (entry) {
      return entry.summary;
    }
  }

  return fallback;
}

/**
 * Phase 46 — localized name of a district group from the location hierarchy.
 * The registry's English `name` is the fallback, exactly as `getRegionName`
 * and `getAreaName` fall back, so a missing entry can never blank a page —
 * `audit:multilingual` is what keeps the table complete.
 */
export function getDistrictName(
  district: Pick<DistrictGroup, "id" | "name">,
  lang: LanguageCode | string,
): string {
  const code = getLanguageCode(lang);

  if (code !== "en") {
    const entry = districtList[code][district.id];
    if (entry) {
      return entry.name;
    }
  }

  return district.name;
}

/** Phase 46 — localized one-line description of a district group. */
export function getDistrictDescription(
  district: Pick<DistrictGroup, "id" | "description">,
  lang: LanguageCode | string,
): string {
  const code = getLanguageCode(lang);

  if (code !== "en") {
    const entry = districtList[code][district.id];
    if (entry) {
      return entry.description;
    }
  }

  return district.description;
}

/** Phase 46 — localized official state name for the coverage roadmap list. */
export function getStateName(
  state: { id: string; name: string },
  lang: LanguageCode | string,
): string {
  const code = getLanguageCode(lang);

  if (code !== "en") {
    const entry = stateNames[code][state.id];
    if (entry) {
      return entry;
    }
  }

  return state.name;
}

/**
 * Localized display name for a location (proper nouns stay as-is in Malay).
 *
 * Phase 47 — precedence, and why it is in this order:
 *
 * 1. `areaNames` — the short label table this file exists for.
 * 2. the area guide's own localized `name` — a label may never disagree with
 *    the page it links to. The guide owns the entity, the same rule Phase 44
 *    applied to shared `@id` entities ("one entity, one name").
 * 3. the English registry name — last, so a missing entry can never blank a
 *    chip or a card.
 *
 * Until step 2 existed, the English name came second, and because `areaNames.ms`
 * is deliberately empty for the 52 localities whose official Malay spelling is
 * the English one, every `/ms/` page linked the `kl-city-centre` guide as
 * "KL City Centre" while that guide's own H1, title, breadcrumb and 53 body
 * occurrences said "Pusat Bandar KL". `i18n/verify.ts` now fails the build if a
 * label and its guide ever disagree again.
 */
export function getAreaName(
  area: Pick<AreaDetail, "region" | "slug" | "name">,
  lang: LanguageCode | string,
): string {
  const code = getLanguageCode(lang);

  if (code !== "en") {
    const entry = areaNames[code][`${area.region}/${area.slug}`];
    if (entry) {
      return entry;
    }

    const guide = getAreaDetail(area.region, area.slug, code);
    if (guide?.name) {
      return guide.name;
    }
  }

  return area.name;
}

export * from "./lists";

/**
 * Site FAQs with the current language's question and answer. The English text
 * stays in `data/site-faqs.ts`; translations live in the UI dictionary so they
 * are type-checked alongside every other interface string.
 */
export function getSiteFaqs(lang: LanguageCode | string): SiteFaq[] {
  const code = getLanguageCode(lang);
  const answers = getDictionary(code).faq.answers;

  if (code === "en") {
    return siteFaqs;
  }

  return siteFaqs.map((faq) => {
    const translated = answers[faq.id];

    return translated
      ? { ...faq, question: translated.question, answer: translated.answer }
      : faq;
  });
}

/**
 * How many site FAQs the homepage previews in its "Common questions" accordion.
 *
 * Phase 42: the homepage is the only page on the site that renders question and
 * answer copy, so it is the only one that publishes no `FAQPage` node for it.
 * The visible accordion and the structured data that describes it must never
 * disagree — a schema node claiming Q&As the page does not show is exactly the
 * dishonesty `audit:schema` exists to prevent — so the preview is read through
 * this one function by both `FAQPreview` and `app/[lang]/page.tsx`. Change the
 * number here and both follow.
 */
export const HOME_FAQ_COUNT = 6;

/** The site FAQs the homepage previews, in the current language. */
export function getHomeFaqs(lang: LanguageCode | string): SiteFaq[] {
  return getSiteFaqs(lang).slice(0, HOME_FAQ_COUNT);
}

export type QuoteSubServiceOption = {
  /** Phase 19 registry slug — the value the form submits. */
  value: string;
  /** Localized registry name shown to the customer. */
  label: string;
};

export type QuoteOption = {
  value: string;
  label: string;
  subServices: QuoteSubServiceOption[];
};

/**
 * Quote form options for a language, built from the Phase 19 sub-service
 * registry. Sub-services are submitted as registry slugs with genuinely
 * localized names in every language (each registry entry ships complete
 * en/ms/zh copy), so a `/ms/` or `/zh/` form never mixes in English option
 * labels. "Not sure / multiple services" deliberately offers no sub-service
 * choice — the description field carries that context instead.
 */
export function getQuoteServiceOptions(
  lang: LanguageCode | string,
): QuoteOption[] {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const categories = getServiceCategories(code);

  const notSure: QuoteOption = {
    value: "not-sure-or-multiple-services",
    label: t.quote.notSureOption,
    subServices: [],
  };

  return [
    notSure,
    ...categories.map((service) => ({
      value: service.slug,
      label: service.name,
      subServices: getSubServicesByService(service.slug).map((sub) => ({
        value: sub.slug,
        label: sub[code].name,
      })),
    })),
  ];
}
