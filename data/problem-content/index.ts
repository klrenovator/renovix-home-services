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

export const problemDetails: ProblemDetail[] = [
  ...tilingProblems,
  ...electricalProblems,
  ...paintingProblems,
  ...ceilingProblems,
  ...plumbingProblems,
  ...waterproofingProblems,
  ...handymanProblems,
];

export function getProblemDetail(
  slug: string | undefined | null,
): ProblemDetail | undefined {
  if (!slug) {
    return undefined;
  }

  return problemDetails.find((problem) => problem.slug === slug);
}

export function getRelatedProblemDetails(problem: ProblemDetail): ProblemDetail[] {
  return problem.relatedProblems
    .map((slug) => problemDetails.find((item) => item.slug === slug))
    .filter((item): item is ProblemDetail => Boolean(item));
}

export function getProblemsByCategory(category: ProblemCategoryId): ProblemDetail[] {
  return problemDetails.filter((problem) => problem.category === category);
}

export function getProblemsForService(serviceSlug: string): ProblemDetail[] {
  return problemDetails.filter((problem) => problem.relatedService === serviceSlug);
}

export function getProblemsBySlugs(slugs: string[] | undefined): ProblemDetail[] {
  if (!slugs || slugs.length === 0) {
    return [];
  }

  return slugs
    .map((slug) => problemDetails.find((item) => item.slug === slug))
    .filter((item): item is ProblemDetail => Boolean(item));
}

export function getProblemCategory(id: ProblemCategoryId): ProblemCategory | undefined {
  return problemCategories.find((category) => category.id === id);
}

export function getProblemServiceDetails(problem: ProblemDetail) {
  const service = getServiceDetail(problem.relatedService);
  const related = problem.relatedServices
    .map((slug) => getServiceDetail(slug))
    .filter((item): item is ServiceDetail => Boolean(item));

  return {
    service,
    related,
  };
}
