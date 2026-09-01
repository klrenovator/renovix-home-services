export type FaqGroupId = "getting-started" | "areas-properties" | "services";

export type SiteFaq = {
  id: string;
  group: FaqGroupId;
  question: string;
  answer: string;
  relatedServiceSlug?: string;
};

export const siteFaqs: SiteFaq[] = [
  {
    id: "services-provided",
    group: "getting-started",
    question: "What services do you provide?",
    answer:
      "Renovix provides home renovation, repair and improvement support across tiling, welding and metal works, electrical, painting, ceiling and partition, general renovation, plumbing, waterproofing, flooring and handyman work.",
  },
  {
    id: "request-quote",
    group: "getting-started",
    question: "How can I request a quote?",
    answer:
      "Use the Get a Quote form to share the work you need, your property details and location. You can also call or WhatsApp us on +601159259521, or email renovixhomeservices@gmail.com. After the information is reviewed, further details or an assessment may be needed before a quotation is prepared.",
  },
  {
    id: "send-photos",
    group: "getting-started",
    question: "Can I send photos for quotation?",
    answer:
      "Yes. Clear photos of the affected area, together with a short description, can help with the initial assessment. Photos do not replace an assessment where one is needed, and they do not guarantee an instant quote.",
  },
  {
    id: "multiple-services",
    group: "getting-started",
    question: "Do you provide multiple services for one renovation project?",
    answer:
      "Where a project needs more than one trade, such as tiling, plumbing, electrical work and painting, Renovix can discuss a coordinated scope through one point of contact. Share the full list of work so the sequence can be considered properly.",
    relatedServiceSlug: "general-renovation",
  },
  {
    id: "areas-covered",
    group: "areas-properties",
    question: "Which areas do you cover?",
    answer:
      "Renovix covers Kuala Lumpur, Selangor and the wider Klang Valley. Visit the Service Areas page for region and local area guides, then share your location when requesting a quote so the job can be considered properly.",
  },
  {
    id: "kuala-lumpur",
    group: "areas-properties",
    question: "Do you work in Kuala Lumpur?",
    answer:
      "Yes. Kuala Lumpur is within Renovix’s stated service coverage. The Service Areas section includes Kuala Lumpur guidance and neighbourhood pages; availability for a particular job is confirmed after the work and location are reviewed.",
  },
  {
    id: "selangor",
    group: "areas-properties",
    question: "Do you work in Selangor?",
    answer:
      "Yes. Selangor is within Renovix’s stated service coverage. The Service Areas section includes Selangor guidance and town pages; availability for a particular job is confirmed after the work and location are reviewed.",
  },
  {
    id: "condos",
    group: "areas-properties",
    question: "Do you work in condos?",
    answer:
      "Condominium and apartment jobs can be discussed. Building management rules, work-hour restrictions, renovation approvals and access arrangements may apply, so it helps to share these details early in the quote request.",
  },
  {
    id: "tiling",
    group: "services",
    question: "Do you provide tiling?",
    answer:
      "Yes. The tiling service covers tile installation, replacement and repair for floors, walls, bathrooms and related areas. The service page lists the available tiling scopes and common issues.",
    relatedServiceSlug: "tiling",
  },
  {
    id: "welding",
    group: "services",
    question: "Do you provide welding and metal works?",
    answer:
      "Yes. Welding and metal works can include gates, grilles, railings, awning structures, repairs and custom metal fabrication. Review the service page to see the listed scopes before requesting a quote.",
    relatedServiceSlug: "welding-metal-works",
  },
  {
    id: "electrical",
    group: "services",
    question: "Do you provide electrical work?",
    answer:
      "Yes. The electrical service page covers listed installation, wiring, lighting, socket, switch and fault-check scopes. Electrical work should be assessed and carried out in line with applicable Malaysian requirements.",
    relatedServiceSlug: "electrical",
  },
  {
    id: "painting",
    group: "services",
    question: "Do you provide painting?",
    answer:
      "Yes. The painting service includes listed interior and exterior painting, repainting, touch-ups and wall-finishing work. The service page explains the preparation and related surface work that may be relevant.",
    relatedServiceSlug: "painting",
  },
  {
    id: "ceiling-partition",
    group: "services",
    question: "Do you provide ceiling and partition work?",
    answer:
      "Yes. The ceiling and partition service covers listed ceiling installation, repair and replacement work, together with gypsum, drywall, glass and other partition scopes. The service page separates the available ceiling and partition options.",
    relatedServiceSlug: "ceiling-partition",
  },
  {
    id: "renovation",
    group: "services",
    question: "Do you provide general renovation work?",
    answer:
      "Yes. General renovation covers the listed core renovation scopes and can be discussed alongside related finishing trades. The service page explains the types of renovation work and how a multi-service scope can be planned.",
    relatedServiceSlug: "general-renovation",
  },
  {
    id: "plumbing",
    group: "services",
    question: "Do you provide plumbing?",
    answer:
      "Yes. The plumbing service covers listed repair and installation work for pipes, taps, toilets, sinks, showers, drainage and related issues. The service page explains the available plumbing scopes.",
    relatedServiceSlug: "plumbing",
  },
  {
    id: "waterproofing",
    group: "services",
    question: "Do you provide waterproofing?",
    answer:
      "Yes. Waterproofing is available for listed bathrooms, toilets, balconies, roofs, walls and moisture-prone areas. The service page explains the scopes and common seepage problems that may need assessment.",
    relatedServiceSlug: "waterproofing",
  },
  {
    id: "flooring",
    group: "services",
    question: "Do you provide flooring?",
    answer:
      "Yes. The flooring service covers listed floor repair, replacement and finishing work for suitable floor types and areas. Visit the service page to review the available options.",
    relatedServiceSlug: "flooring",
  },
  {
    id: "handyman",
    group: "services",
    question: "Do you provide handyman services?",
    answer:
      "Yes. Handyman support is available for listed smaller home fixes, installations, adjustments and everyday maintenance tasks. The handyman service page outlines the specific jobs that can be discussed.",
    relatedServiceSlug: "handyman",
  },
];
