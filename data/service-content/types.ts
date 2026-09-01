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
};
