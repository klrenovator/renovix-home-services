export type AreaRegionId = "kuala-lumpur" | "selangor";

/** A Renovix service linked from an area page, with a note on why it matters locally. */
export type AreaServiceFocus = {
  serviceSlug: string;
  note: string;
};

/** Property stock commonly found in the area, with a local note. */
export type AreaPropertyType = {
  label: string;
  note: string;
};

/** A renovation or repair problem that is common in the area's housing stock. */
export type AreaProblem = {
  title: string;
  description: string;
};

export type AreaProcessStep = {
  title: string;
  description: string;
};

export type AreaFaq = {
  question: string;
  answer: string;
};

/** Region-level "housing landscape" highlight. */
export type AreaLandscapeItem = {
  title: string;
  description: string;
};

/**
 * A location page. Copy must stay honest: no invented local offices, service
 * radii, local teams, completed local projects or customer counts.
 * Intro and context strings may contain inline links written as
 * [label](/path) which are rendered by the shared InlineLinks component.
 */
export type AreaDetail = {
  region: AreaRegionId;
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  /** One-line summary used on region hub cards and area lists. */
  summary: string;
  intro: string[];
  servicesIntro: string;
  servicesAvailable: AreaServiceFocus[];
  propertyTypesIntro: string;
  propertyTypes: AreaPropertyType[];
  problemsIntro: string;
  problems: AreaProblem[];
  processTitle: string;
  processIntro: string;
  processSteps: AreaProcessStep[];
  contextIntro: string;
  context: string[];
  faqs: AreaFaq[];
  relatedServices: string[];
  /** Problem page slugs — links area pages to the problem library. */
  relatedProblems: string[];
  /** Slugs of nearby areas in the same region, for cross-linking. */
  nearbyAreas: string[];
};

/** A region hub page (Kuala Lumpur or Selangor) that links to its area pages. */
export type AreaRegion = {
  id: AreaRegionId;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  summary: string;
  intro: string[];
  landscapeIntro: string;
  landscape: AreaLandscapeItem[];
  servicesIntro: string;
  servicesAvailable: AreaServiceFocus[];
  faqs: AreaFaq[];
  areas: AreaDetail[];
};
