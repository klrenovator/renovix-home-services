/**
 * Shape of the UI dictionary. Every visible interface string lives here so each
 * language renders a complete, single-language page — no language mixing.
 *
 * `en.ts` is the source of truth; `ms.ts` and `zh.ts` are typed against this
 * shape, so a missing key is a TypeScript error rather than a silent gap.
 */

import type { ProjectDetailKey } from "@/data/project-content/types";
import type { QuotePropertyTypeId } from "@/lib/quote/constants";

export type TextItem = {
  title: string;
  description: string;
};

export type QuoteFaq = {
  question: string;
  answer: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type Dictionary = {
  meta: {
    siteName: string;
    brandTagline: string;
    defaultDescription: string;
    homeTitle: string;
    homeDescription: string;
    /** Badge line rendered on the social share card. */
    ogBadge: string;
  };
  a11y: {
    skipToContent: string;
    primaryNavigation: string;
    mobileNavigation: string;
    breadcrumb: string;
    languageNavigation: string;
    openMenu: string;
    closeMenu: string;
    brandHome: string;
    filterProjects: string;
    /** Accessible name for the compact header language button. */
    languageMenu: string;
  };
  nav: {
    home: string;
    services: string;
    problems: string;
    areas: string;
    projects: string;
    /** Knowledge Hub / guides. */
    blog: string;
    faq: string;
    about: string;
    contact: string;
  };
  legal: {
    privacy: string;
    terms: string;
  };
  cta: {
    getFreeQuote: string;
    /** Short form for the compact mobile header button. */
    quoteShort: string;
    /** Short header label for the WhatsApp button on phones. */
    whatsappShort: string;
    requestQuote: string;
    getQuote: string;
    startQuoteRequest: string;
    whatsappUs: string;
    viewService: string;
    viewProblem: string;
    viewGuide: string;
    viewAreas: string;
    explore: string;
    exploreServices: string;
    exploreServiceAreas: string;
    browseAllServices: string;
    allServiceAreas: string;
    browseAllServiceAreas: string;
    viewAllFaqs: string;
    backToHome: string;
    exploreCategory: string;
    viewContactDetails: string;
    viewServiceAreas: string;
    tellUsAboutWork: string;
    callNow: string;
    emailUs: string;
    /** "View {name}" — used for the main-service card on problem guides. */
    viewNamed: string;
  };
  footer: {
    blurbPrimary: string;
    blurbSecondary: string;
    language: string;
    services: string;
    navigation: string;
    areasWeServe: string;
    contact: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    hours: string;
    rights: string;
    machineReadable: string;
  };
  home: {
    hero: {
      badge: string;
      title: string;
      lead: string;
      highlights: string[];
      imageAlt: string;
      imageTitle: string;
      imageCaption: string;
    };
    services: { eyebrow: string; title: string; description: string };
    problems: {
      eyebrow: string;
      title: string;
      description: string;
      libraryPrefix: string;
      libraryLink: string;
      librarySuffix: string;
    };
    why: {
      eyebrow: string;
      title: string;
      description: string;
      benefits: TextItem[];
    };
    process: {
      eyebrow: string;
      title: string;
      description: string;
      steps: TextItem[];
    };
    areas: { eyebrow: string; title: string; description: string };
    ctaSection: {
      eyebrow: string;
      title: string;
      description: string;
      note: string;
    };
    faq: { eyebrow: string; title: string; description: string };
  };
  servicesIndex: {
    metaTitle: string;
    metaDescription: string;
    ogDescription: string;
    breadcrumb: string;
    title: string;
    lead: string;
    gridEyebrow: string;
    gridTitle: string;
    gridDescription: string;
    oneStopEyebrow: string;
    oneStopTitle: string;
    oneStopDescription: string;
    oneStopNote: string;
  };
  servicePage: {
    breadcrumbServices: string;
    overviewEyebrow: string;
    highlightsTitle: string;
    subServicesEyebrow: string;
    /** "{name} Services" */
    subServicesTitle: string;
    problemsEyebrow: string;
    propertyTypesEyebrow: string;
    propertyTypesTitle: string;
    processEyebrow: string;
    whyEyebrow: string;
    areasEyebrow: string;
    areasTitle: string;
    faqsEyebrow: string;
    /** "{name} — Frequently Asked Questions" */
    faqsTitle: string;
    faqsDescription: string;
    relatedEyebrow: string;
    relatedTitle: string;
    /** "{name} often pairs with other Renovix services…" */
    relatedDescription: string;
    relatedProblemsTitle: string;
    relatedProblemsNote: string;
    /** "Need {name} in Kuala Lumpur & Selangor?" */
    ctaHeading: string;
    ctaTitle: string;
    ctaDescription: string;
    // Phase 14 pricing & authority
    pricingEyebrow: string;
    pricingTitle: string;
    pricingDescription: string;
    pricingDisclaimer: string;
    pricingNote: string;
    startingFrom: string;
    priceTableService: string;
    priceTableScope: string;
    priceTablePrice: string;
    priceTableUnit: string;
    costFactorsEyebrow: string;
    costFactorsTitle: string;
    costFactorsDescription: string;
    materialsEyebrow: string;
    materialsTitle: string;
    materialsDescription: string;
    durationEyebrow: string;
    durationTitle: string;
    durationDescription: string;
    durationNote: string;
    includesEyebrow: string;
    includesTitle: string;
    excludesTitle: string;
    answerFirstEyebrow: string;
    answerFirstTitle: string;
    answerFirstDescription: string;
    quotePromptTitle: string;
    quotePromptBody: string;
    lastReviewedLabel: string;
    viewPricing: string;
    pricingFactorsTitle: string;
  };
  subServicePage: {
    suitableEyebrow: string;
    suitableTitle: string;
    projectEyebrow: string;
    projectTitle: string;
    projectDescription: string;
    relatedSubTitle: string;
    backToService: string;
    includedEyebrow: string;
    includedTitle: string;
    excludedTitle: string;
    ctaHeading: string;
    processTitle: string;
  };
  problemsIndex: {
    metaTitle: string;
    metaDescription: string;
    ogDescription: string;
    breadcrumb: string;
    title: string;
    lead: string;
  };
  problemPage: {
    breadcrumbProblems: string;
    /** Eyebrow fallback when a problem has no category label. */
    heroCategoryFallback: string;
    whatItMeansEyebrow: string;
    /** "Understanding {name}" */
    whatItMeansTitle: string;
    whatItMeansDescription: string;
    shortAnswerEyebrow: string;
    shortAnswerNote: string;
    causesEyebrow: string;
    /** "What usually causes {name}" */
    causesTitle: string;
    causesDescription: string;
    warningSignsEyebrow: string;
    warningSignsTitle: string;
    warningSignsDescription: string;
    solutionsEyebrow: string;
    solutionsTitle: string;
    solutionsDescription: string;
    whenToCallEyebrow: string;
    whenToCallTitle: string;
    whenToCallDescription: string;
    relatedServiceEyebrow: string;
    relatedServiceTitle: string;
    /** "{problem} is handled by our {service} team…" */
    relatedServiceDescription: string;
    mainServiceLabel: string;
    processEyebrow: string;
    propertyTypesEyebrow: string;
    propertyTypesTitle: string;
    faqsEyebrow: string;
    /** "{name} — Frequently Asked Questions" */
    faqsTitle: string;
    faqsDescription: string;
    relatedProblemsEyebrow: string;
    relatedProblemsTitle: string;
    relatedProblemsDescription: string;
    /** "Need help with {name} in Kuala Lumpur & Selangor?" */
    ctaHeading: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  areasIndex: {
    metaTitle: string;
    metaDescription: string;
    ogDescription: string;
    breadcrumb: string;
    title: string;
    lead: string;
    faqEyebrow: string;
    faqTitle: string;
    faqDescription: string;
    guidesEyebrow: string;
    guidesTitle: string;
    guidesDescription: string;
    guidesCountSuffix: string;
    viewRegion: string;
    klangValleyTitle: string;
    klangValleyParagraphs: string[];
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    // Phase 15 hierarchy & coverage explorer
    hierarchyEyebrow: string;
    hierarchyTitle: string;
    hierarchyDescription: string;
    activeCoverageTitle: string;
    expansionRoadmapTitle: string;
    expansionRoadmapBody: string;
    districtExplorerTitle: string;
    districtExplorerDescription: string;
  };
  areaRegion: {
    breadcrumbAreas: string;
    areasEyebrow: string;
    /** "Areas We Serve in {name}" */
    areasTitle: string;
    areasDescription: string;
    landscapeEyebrow: string;
    /** "Understanding housing in {name}" */
    landscapeTitle: string;
    servicesEyebrow: string;
    /** "Services Most Requested in {name}" */
    servicesTitle: string;
    faqsEyebrow: string;
    /** "{name} — Frequently Asked Questions" */
    faqsTitle: string;
    faqsDescription: string;
    otherRegion: string;
    /** "We also serve {name}" */
    otherTitle: string;
    /** "Browse our {name} area guides…" */
    otherBody: string;
    /** "Explore {name}" */
    exploreOther: string;
    ctaTitle: string;
    ctaDescription: string;
    districtsTitle: string;
    districtsDescription: string;
  };
  areaPage: {
    breadcrumbAreas: string;
    servicesEyebrow: string;
    /** "Home Services Available in {name}" */
    servicesTitle: string;
    /** "{service} in {name}" — card title in the services grid. */
    serviceInArea: string;
    /** "All areas in {name}" */
    allAreasIn: string;
    /** "{count} location guides across {name}." */
    guidesCount: string;
    /** "Browse {name}" */
    browseRegion: string;
    /** Service name used in the page's structured data. */
    schemaServiceName: string;
    /** Service type used in the page's structured data. */
    schemaServiceType: string;
    /** Offer catalogue name used in the page's structured data. */
    schemaCatalogName: string;
    propertyTypesEyebrow: string;
    /** "Property Types in {name}" */
    propertyTypesTitle: string;
    problemsEyebrow: string;
    /** "Common Renovation & Repair Problems in {name}" */
    problemsTitle: string;
    processEyebrow: string;
    contextEyebrow: string;
    /** "Working in {name} — What to Expect" */
    contextTitle: string;
    relatedEyebrow: string;
    /** "Services Often Combined in {name}" */
    relatedTitle: string;
    relatedDescription: string;
    nearbyEyebrow: string;
    /** "Areas We Also Serve Near {name}" */
    nearbyTitle: string;
    nearbyDescription: string;
    faqsEyebrow: string;
    /** "{name} — Frequently Asked Questions" */
    faqsTitle: string;
    faqsDescription: string;
    problemsLink: string;
    coverageNoteTitle: string;
    coverageNote: string;
    /** "Planning work in {name}? Start with a free quotation." */
    ctaHeading: string;
    /** "Get a Free Quote in {name}" */
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    // Phase 15 local SEO & search-intent
    answerFirstEyebrow: string;
    answerFirstTitle: string;
    answerFirstDescription: string;
    coverageLabel: string;
    pricingLabel: string;
    emergencyLabel: string;
    quotationLabel: string;
    pricingEyebrow: string;
    pricingTitle: string;
    pricingDescription: string;
    pricingDisclaimer: string;
    pricingFactorsTitle: string;
    pricingFactorsBody: string;
    matrixEyebrow: string;
    matrixTitle: string;
    matrixDescription: string;
    matrixRepair: string;
    matrixInstall: string;
    matrixFullReno: string;
    matrixUrgentTag: string;
    hierarchyEyebrow: string;
    districtLabel: string;
    stateLabel: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    eyebrow: string;
    title: string;
    description: string;
    approachEyebrow: string;
    approachTitle: string;
    approachParagraphs: string[];
    approachLink: string;
    standardsEyebrow: string;
    standardsTitle: string;
    standardsLead: string;
    principles: TextItem[];
    servicesEyebrow: string;
    servicesTitle: string;
    servicesLead: string;
    coverageEyebrow: string;
    coverageTitle: string;
    coverageBody: string;
    kualaLumpurLink: string;
    selangorLink: string;
    allAreasLink: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaSecondary: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    eyebrow: string;
    title: string;
    description: string;
    heroPrimary: string;
    detailsEyebrow: string;
    detailsTitle: string;
    detailsLead: string;
    channels: {
      business: string;
      businessHelper: string;
      phone: string;
      phoneHelper: string;
      whatsapp: string;
      whatsappHelper: string;
      email: string;
      emailHelper: string;
      address: string;
      addressHelper: string;
      hours: string;
      hoursHelper: string;
    };
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
    whatsappEyebrow: string;
    whatsappTitle: string;
    whatsappBody: string;
    whatsappNote: string;
    areasEyebrow: string;
    areasTitle: string;
    areasLead: string;
    kualaLumpurDescription: string;
    selangorDescription: string;
    klangValleyDescription: string;
  };
  quote: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    eyebrow: string;
    title: string;
    description: string;
    heroPrimary: string;
    formTitle: string;
    formLead: string;
    /** Grouped-section headings inside the form. */
    sections: {
      contact: string;
      job: string;
    };
    labels: {
      name: string;
      whatsapp: string;
      email: string;
      propertyType: string;
      service: string;
      subService: string;
      location: string;
      description: string;
      preferredDate: string;
      preferredContact: string;
      /** Spoken-only "(required)" suffix for required-field labels. */
      requiredText: string;
    };
    placeholders: {
      name: string;
      whatsapp: string;
      email: string;
      propertyType: string;
      service: string;
      subService: string;
      subServiceDisabled: string;
      location: string;
      description: string;
    };
    help: {
      phone: string;
      email: string;
      subService: string;
      location: string;
      preferredDate: string;
      requiredNote: string;
      preferredContact: string;
    };
    contactMethods: {
      whatsapp: string;
      phone: string;
      email: string;
    };
    validation: {
      required: string;
      name: string;
      phone: string;
      email: string;
      emailRequired: string;
      propertyType: string;
      service: string;
      subService: string;
      location: string;
      description: string;
      descriptionTooLong: string;
      preferredContact: string;
    };
    /** WhatsApp alternative shown before/next to the form (no form needed). */
    whatsappQuickTitle: string;
    whatsappQuickBody: string;
    whatsappQuickCta: string;
    whatsappQuickMessage: string;
    deliveryTitle: string;
    deliveryBody: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    /** Truthful photo handoff: photos are sent on WhatsApp after submitting. */
    successPhotosTitle: string;
    successPhotosBody: string;
    successPhotosCta: string;
    /** `wa.me` prefill; `{service}` is replaced with the chosen service label. */
    successPhotosMessage: string;
    errorTitle: string;
    errorBody: string;
    whatsappFallback: string;
    whatsappFallbackCta: string;
    whatsappFallbackMessage: string;
    privacyNote: string;
    asideEyebrow: string;
    asideTitle: string;
    asideBody: string;
    guidanceEyebrow: string;
    steps: TextItem[];
    statusTitle: string;
    statusBody: string;
    faqEyebrow: string;
    faqTitle: string;
    faqs: QuoteFaq[];
    browseEyebrow: string;
    browseTitle: string;
    browseBody: string;
    coverageEyebrow: string;
    coverageTitle: string;
    coverageBody: string;
    /** Display labels keyed by the stable property-type IDs. */
    propertyTypes: Record<QuotePropertyTypeId, string>;
    notSureOption: string;
  };
  /** Knowledge Hub index (`/{lang}/blog/`). */
  blogIndex: {
    metaTitle: string;
    metaDescription: string;
    ogDescription: string;
    breadcrumb: string;
    title: string;
    lead: string;
    eyebrow: string;
    gridTitle: string;
    gridDescription: string;
    /** Label above the category grouping, e.g. "Cost guides". */
    categoryEyebrow: string;
    readGuide: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  /** Article detail page (`/{lang}/blog/{slug}/`). */
  blogPage: {
    breadcrumbBlog: string;
    answerEyebrow: string;
    keyPointsTitle: string;
    publishedLabel: string;
    updatedLabel: string;
    /** Byline — the business, never an invented author persona. */
    writtenByLabel: string;
    pricingNote: string;
    faqsEyebrow: string;
    faqsTitle: string;
    relatedServicesTitle: string;
    relatedSubServicesTitle: string;
    relatedProblemsTitle: string;
    relatedProjectsTitle: string;
    relatedAreasTitle: string;
    relatedArticlesTitle: string;
    relatedAreasDescription: string;
    ctaHeading: string;
    ctaDescription: string;
  };
  /** "Guides" cross-links rendered on service, sub-service and problem pages. */
  guideLinks: {
    eyebrow: string;
    serviceTitle: string;
    subServiceTitle: string;
    problemTitle: string;
    areaTitle: string;
    description: string;
  };
  projects: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    eyebrow: string;
    title: string;
    description: string;
    statusEyebrow: string;
    statusTitle: string;
    statusBody: string;
    browseEyebrow: string;
    browseTitle: string;
    browseLead: string;
    allCategories: string;
    showingPrefix: string;
    showingSuffixOne: string;
    showingSuffixMany: string;
    showingNote: string;
    emptyState: string;
    fallbackCategory: string;
    exploreServicePrefix: string;
    /** Card link label — "View project". */
    viewProject: string;
    /** Accessible name for the projects list region. */
    listRegion: string;
    /** Page-level empty state, shown when no project is published yet. */
    emptyEyebrow: string;
    emptyTitle: string;
    emptyBody: string;
    emptyNote: string;
    emptyCtaPrimary: string;
    emptyCtaSecondary: string;
    futureEyebrow: string;
    futureTitle: string;
    futureLead: string;
    futureItems: TextItem[];
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaSecondary: string;
  };
  /** Project detail page (`/{lang}/projects/{slug}/`). */
  projectPage: {
    /** `{title}` + `{category}` + the full brand, as one `<title>`. */
    metaTitleTemplate: string;
    eyebrow: string;
    overviewEyebrow: string;
    overviewTitle: string;
    scopeEyebrow: string;
    scopeTitle: string;
    detailsEyebrow: string;
    detailsTitle: string;
    /** Localized row labels for the "Project details" list. */
    detailLabels: Record<ProjectDetailKey, string>;
    galleryEyebrow: string;
    galleryTitle: string;
    beforeLabel: string;
    afterLabel: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesBody: string;
    subServicesEyebrow: string;
    subServicesTitle: string;
    subServicesBody: string;
    /** "Part of {service}" — parent-service label under a sub-service link. */
    subServicesUnder: string;
    relatedGuidesEyebrow: string;
    relatedGuidesTitle: string;
    relatedGuidesBody: string;
    locationEyebrow: string;
    locationTitle: string;
    /** Shown when no verified location has been supplied for the project. */
    locationUnverifiedBody: string;
    /** Honest note repeated on detail pages. */
    honestyNote: string;
    relatedEyebrow: string;
    /** "More {category} work". */
    relatedTitle: string;
    relatedEmpty: string;
    backToProjects: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  faq: {
    metaTitle: string;
    metaDescription: string;
    breadcrumb: string;
    eyebrow: string;
    title: string;
    description: string;
    asideEyebrow: string;
    asideTitle: string;
    asideLead: string;
    browseServices: string;
    exploreAreas: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    explorePrefix: string;
    groups: { id: string; label: string; description: string }[];
    answers: Record<string, { question: string; answer: string }>;
  };
  legalPage: {
    eyebrow: string;
    privacyTitle: string;
    privacyDescription: string;
    privacyMetaDescription: string;
    termsTitle: string;
    termsDescription: string;
    termsMetaDescription: string;
    privacySections: LegalSection[];
    termsSections: LegalSection[];
  };
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    services: string;
    areas: string;
  };
  common: {
    home: string;
    serviceAreas: string;
    malaysia: string;
    kualaLumpur: string;
    selangor: string;
    klangValley: string;
    /** Eyebrow above the quote CTA blocks. */
    freeQuoteEyebrow: string;
    /** Hero chip. */
    freeQuotation: string;
    /** Hero chip / coverage line. */
    klSelangor: string;
    /** Process step label, rendered as "Step 01". */
    step: string;
    /** Localized rendering of the business hours in `data/site.ts`. */
    businessHours: string;
    /** Label in front of the phone number on contact CTA blocks. */
    callOrWhatsApp: string;
  };
  /** Shared "service areas" block used by service and problem guides. */
  areasBlock: {
    eyebrow: string;
    title: string;
    guideTitle: string;
    guideDescription: string;
    note: string;
  };
};
