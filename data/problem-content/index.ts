import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import type { ProblemCategory, ProblemCategoryId, ProblemDetail } from "./types";
import type { ServiceDetail } from "@/data/service-content/types";
import { tilingProblems } from "./tiling";
import { electricalProblems } from "./electrical";
import { paintingProblems } from "./painting";
import { ceilingProblems } from "./ceiling";
import { plumbingProblems } from "./plumbing";
import { waterproofingProblems } from "./waterproofing";
import { handymanProblems } from "./handyman";
import { getServiceDetail } from "@/data/service-content";
import { problemTranslations } from "./translations";

export const problemCategories: ProblemCategory[] = [
  {
    id: "tiling",
    label: "Tile & Tiling Problems",
    serviceSlug: "tiling",
    intro:
      "Broken, cracked, hollow, loose and uneven tiles, plus grout, bathroom, kitchen and seepage problems across the Klang Valley.",
  },
  {
    id: "electrical",
    label: "Electrical Problems",
    serviceSlug: "electrical",
    intro:
      "Tripping circuits, faulty sockets and switches, flickering lights, short circuits, old wiring and ceiling fan faults.",
  },
  {
    id: "painting",
    label: "Painting & Wall Problems",
    serviceSlug: "painting",
    intro:
      "Peeling paint, cracked and mouldy walls, faded and uneven finishes and damaged wall surfaces.",
  },
  {
    id: "ceiling",
    label: "Ceiling Problems",
    serviceSlug: "ceiling-partition",
    intro:
      "Cracked, sagging, water-damaged and stained ceilings, plus old plaster ceilings in need of repair or replacement.",
  },
  {
    id: "plumbing",
    label: "Plumbing Problems",
    serviceSlug: "plumbing",
    intro:
      "Water leakage, leaking taps and pipes, blocked drains, toilet problems and low water pressure.",
  },
  {
    id: "waterproofing",
    label: "Waterproofing Problems",
    serviceSlug: "waterproofing",
    intro:
      "Roof, bathroom and balcony leakage, wall seepage, damp walls and water stains.",
  },
  {
    id: "handyman",
    label: "Handyman Problems",
    serviceSlug: "handyman",
    intro:
      "Door and lock problems, curtain installation, TV mounting, shelf installation and minor home repairs.",
  },
];

/** English problem guides — the source of truth for structure and meaning. */
export const problemDetails: ProblemDetail[] = [
  ...tilingProblems,
  ...electricalProblems,
  ...paintingProblems,
  ...ceilingProblems,
  ...plumbingProblems,
  ...waterproofingProblems,
  ...handymanProblems,
];

/** Merges a translation over the English guide, keeping every link identical. */
function localize(problem: ProblemDetail, lang: LanguageCode): ProblemDetail {
  if (lang === "en") {
    return problem;
  }

  const translation = problemTranslations[lang][problem.slug];

  if (!translation) {
    return problem;
  }

  return {
    ...problem,
    ...translation,
    slug: problem.slug,
    category: problem.category,
    relatedService: problem.relatedService,
    relatedServices: problem.relatedServices,
    relatedProblems: problem.relatedProblems,
  };
}

export function getProblemDetails(lang: string = "en"): ProblemDetail[] {
  const code = getLanguageCode(lang);
  return problemDetails.map((problem) => localize(problem, code));
}

export function getProblemDetail(
  slug: string | undefined | null,
  lang: string = "en",
): ProblemDetail | undefined {
  if (!slug) {
    return undefined;
  }

  const problem = problemDetails.find((item) => item.slug === slug);

  return problem ? localize(problem, getLanguageCode(lang)) : undefined;
}

export function getRelatedProblemDetails(
  problem: ProblemDetail,
  lang: string = "en",
): ProblemDetail[] {
  return problem.relatedProblems
    .map((slug) => getProblemDetail(slug, lang))
    .filter((item): item is ProblemDetail => Boolean(item));
}

export function getProblemsByCategory(
  category: ProblemCategoryId,
  lang: string = "en",
): ProblemDetail[] {
  return getProblemDetails(lang).filter((problem) => problem.category === category);
}

export function getProblemsForService(
  serviceSlug: string,
  lang: string = "en",
): ProblemDetail[] {
  return getProblemDetails(lang).filter(
    (problem) => problem.relatedService === serviceSlug,
  );
}

export function getProblemsBySlugs(
  slugs: string[] | undefined,
  lang: string = "en",
): ProblemDetail[] {
  if (!slugs || slugs.length === 0) {
    return [];
  }

  return slugs
    .map((slug) => getProblemDetail(slug, lang))
    .filter((item): item is ProblemDetail => Boolean(item));
}

export function getProblemCategory(id: ProblemCategoryId): ProblemCategory | undefined {
  return problemCategories.find((category) => category.id === id);
}

export function getProblemServiceDetails(problem: ProblemDetail, lang: string = "en") {
  const service = getServiceDetail(problem.relatedService, lang);
  const related = problem.relatedServices
    .map((slug) => getServiceDetail(slug, lang))
    .filter((item): item is ServiceDetail => Boolean(item));

  return {
    service,
    related,
  };
}

/** Slugs with a complete translation in a language — used by the build guard. */
export function translatedProblemSlugs(lang: "ms" | "zh"): string[] {
  return problemDetails
    .map((problem) => problem.slug)
    .filter((slug) => Boolean(problemTranslations[lang][slug]));
}
