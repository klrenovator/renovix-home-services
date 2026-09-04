export type ProblemCategoryId =
  | "tiling"
  | "electrical"
  | "painting"
  | "ceiling"
  | "plumbing"
  | "waterproofing"
  | "handyman"
  | "welding"
  | "flooring"
  | "general-renovation";

export type ProblemCategory = {
  id: ProblemCategoryId;
  label: string;
  serviceSlug: string;
  intro: string;
};

export type ProblemSolution = {
  title: string;
  description: string;
};

export type ProblemProcessStep = {
  title: string;
  description: string;
};

export type ProblemPropertyType = {
  label: string;
  note: string;
};

export type ProblemFaq = {
  question: string;
  answer: string;
};

export type ProblemDetail = {
  slug: string;
  category: ProblemCategoryId;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  whatItMeans: string[];
  commonCauses: string[];
  warningSigns: string[];
  solutions: ProblemSolution[];
  whenToCall: string[];
  relatedService: string;
  relatedServiceNote: string;
  processTitle: string;
  processIntro: string;
  processSteps: ProblemProcessStep[];
  propertyTypesIntro: string;
  propertyTypes: ProblemPropertyType[];
  areasNote: string;
  faqs: ProblemFaq[];
  relatedServices: string[];
  relatedProblems: string[];
};
