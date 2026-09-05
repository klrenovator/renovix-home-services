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
import { areasIndexFaqs } from "@/data/area-content";
import { getSubServicesByService } from "@/data/sub-services";
import type { AreaDetail, AreaFaq } from "@/data/area-content/types";
import {
  areaNames,
  areasIndexFaqList,
  problemCategoryList,
  problemList,
  projectCategoryLabels,
  regionList,
  serviceList,
} from "./lists";

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
 * Problem names and one-line summaries for the problem index cards. The full
 * problem guides are English-only, but the index lists all of them in every
 * language, so the card labels are translated here — otherwise a `/ms/` or
 * `/zh/` index page would render an English catalogue.
 */
export function getProblemCardLabels(
  lang: LanguageCode | string,
  problem: ProblemDetail,
): { name: string; subtitle: string } {
  const code = getLanguageCode(lang);

  if (code === "en") {
    return { name: problem.name, subtitle: problem.subtitle };
  }

  return problemList[code][problem.slug] ?? {
    name: problem.name,
    subtitle: problem.subtitle,
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

/** Localized display name for a location (proper nouns stay as-is in Malay). */
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
