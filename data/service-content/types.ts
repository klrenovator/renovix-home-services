export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceHighlight = {
  title: string;
  description: string;
};

export type ServiceProblem = {
  title: string;
  description: string;
};

export type ServicePropertyType = {
  label: string;
  note: string;
};

export type SubService = {
  name: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceMaterial = {
  title: string;
  description: string;
};

export type ServiceCostFactor = {
  title: string;
  description: string;
};

export type ServiceDuration = {
  intro: string;
  items: { label: string; value: string }[];
  note?: string;
};

export type ServiceAnswer = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  overviewTitle: string;
  overviewIntro: string;
  overviewParagraphs: string[];
  highlights: ServiceHighlight[];
  subServicesIntro: string;
  subServiceGroups?: {
    label: string;
    items: SubService[];
  }[];
  subServices: SubService[];
  problemsTitle: string;
  problemsIntro: string;
  problems: ServiceProblem[];
  propertyTypesIntro: string;
  propertyTypes: ServicePropertyType[];
  processTitle: string;
  processIntro: string;
  processSteps: ServiceProcessStep[];
  whyTitle: string;
  whyIntro: string;
  whyChoose: ServiceHighlight[];
  areasNote: string;
  faqs: ServiceFaq[];
  relatedServices: string[];
  relatedProblems?: string[];
  // Phase 14 enhancements
  materialsIntro?: string;
  materials?: ServiceMaterial[];
  costFactorsIntro?: string;
  costFactors?: ServiceCostFactor[];
  duration?: ServiceDuration;
  includes?: string[];
  excludes?: string[];
  includesTitle?: string;
  excludesTitle?: string;
  answerFirst?: ServiceAnswer[];
  searchIntents?: string[];
  entityKeywords?: string[];
};
