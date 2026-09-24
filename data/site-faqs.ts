export type FaqGroupId = "getting-started" | "areas-properties" | "services";

/**
 * Phase 51 — the page an answer already names.
 *
 * Every `related` entry is a *reference to an existing registry*, never a
 * label: the FAQ page renders the target's own published name in the current
 * language (a service through `getServiceName`, a region through
 * `getRegionName`, a guide through its own `h1`, a route through the very
 * string the header and footer link it with). That is the Phase 47 rule — one
 * entity, one name — applied to the answer surface, so an anchor can never
 * advertise something different from the page it opens, and a translation can
 * never carry an English label.
 *
 * Only pages the answer's own copy already names are declared. `send-photos`
 * therefore carries none: it names a channel, not a page.
 */
export type FaqRelated =
  | { kind: "service"; slug: string }
  | { kind: "areaRegion"; slug: string }
  | { kind: "article"; slug: string }
  | { kind: "route"; route: FaqRouteKey };

/** Static routes that already have one localized name in the dictionary. */
export type FaqRouteKey = "services" | "areas" | "quote";

export type SiteFaq = {
  id: string;
  group: FaqGroupId;
  question: string;
  answer: string;
  related?: FaqRelated[];
};

export const siteFaqs: SiteFaq[] = [
  {
    id: "services-provided",
    group: "getting-started",
    question: "What services do you provide?",
    answer:
      "Renovix provides home renovation, repair and improvement support across tiling, welding and metal works, electrical, painting, ceiling and partition, general renovation, plumbing, waterproofing, flooring and handyman work.",
    related: [{ kind: "route", route: "services" }],
  },
  {
    id: "request-quote",
    group: "getting-started",
    question: "How can I request a quote?",
    answer:
      "Use the Get a Quote form to share the work you need, your property details and location. You can also call or WhatsApp us on +601159259521, or email renovixhomeservices@gmail.com. After the information is reviewed, further details or an assessment may be needed before a quotation is prepared.",
    related: [{ kind: "route", route: "quote" }],
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
    related: [{ kind: "service", slug: "general-renovation" }],
  },
  {
    id: "areas-covered",
    group: "areas-properties",
    question: "Which areas do you cover?",
    answer:
      "Renovix covers Kuala Lumpur, Selangor and the wider Klang Valley. Visit the Service Areas page for region and local area guides, then share your location when requesting a quote so the job can be considered properly.",
    related: [{ kind: "route", route: "areas" }],
  },
  {
    id: "kuala-lumpur",
    group: "areas-properties",
    question: "Do you work in Kuala Lumpur?",
    answer:
      "Yes. Kuala Lumpur is within Renovix’s stated service coverage. The Service Areas section includes Kuala Lumpur guidance and neighbourhood pages; availability for a particular job is confirmed after the work and location are reviewed.",
    related: [{ kind: "areaRegion", slug: "kuala-lumpur" }],
  },
  {
    id: "selangor",
    group: "areas-properties",
    question: "Do you work in Selangor?",
    answer:
      "Yes. Selangor is within Renovix’s stated service coverage. The Service Areas section includes Selangor guidance and town pages; availability for a particular job is confirmed after the work and location are reviewed.",
    related: [{ kind: "areaRegion", slug: "selangor" }],
  },
  {
    id: "condos",
    group: "areas-properties",
    question: "Do you work in condos?",
    answer:
      "Condominium and apartment jobs can be discussed. Building management rules, work-hour restrictions, renovation approvals and access arrangements may apply, so it helps to share these details early in the quote request.",
    related: [{ kind: "article", slug: "condo-renovation-approval-checklist" }],
  },
  {
    id: "tiling",
    group: "services",
    question: "Do you provide tiling?",
    answer:
      "Yes. The tiling service covers tile installation, replacement and repair for floors, walls, bathrooms and related areas. The service page lists the available tiling scopes and common issues.",
    related: [{ kind: "service", slug: "tiling" }],
  },
  {
    id: "welding",
    group: "services",
    question: "Do you provide welding and metal works?",
    answer:
      "Yes. Welding and metal works can include gates, grilles, railings, awning structures, repairs and custom metal fabrication. Review the service page to see the listed scopes before requesting a quote.",
    related: [{ kind: "service", slug: "welding-metal-works" }],
  },
  {
    id: "electrical",
    group: "services",
    question: "Do you provide electrical work?",
    answer:
      "Yes. The electrical service page covers listed installation, wiring, lighting, socket, switch and fault-check scopes. Electrical work should be assessed and carried out in line with applicable Malaysian requirements.",
    related: [{ kind: "service", slug: "electrical" }],
  },
  {
    id: "painting",
    group: "services",
    question: "Do you provide painting?",
    answer:
      "Yes. The painting service includes listed interior and exterior painting, repainting, touch-ups and wall-finishing work. The service page explains the preparation and related surface work that may be relevant.",
    related: [{ kind: "service", slug: "painting" }],
  },
  {
    id: "ceiling-partition",
    group: "services",
    question: "Do you provide ceiling and partition work?",
    answer:
      "Yes. The ceiling and partition service covers listed ceiling installation, repair and replacement work, together with gypsum, drywall, glass and other partition scopes. The service page separates the available ceiling and partition options.",
    related: [{ kind: "service", slug: "ceiling-partition" }],
  },
  {
    id: "renovation",
    group: "services",
    question: "Do you provide general renovation work?",
    answer:
      "Yes. General renovation covers the listed core renovation scopes and can be discussed alongside related finishing trades. The service page explains the types of renovation work and how a multi-service scope can be planned.",
    related: [{ kind: "service", slug: "general-renovation" }],
  },
  {
    id: "plumbing",
    group: "services",
    question: "Do you provide plumbing?",
    answer:
      "Yes. The plumbing service covers listed repair and installation work for pipes, taps, toilets, sinks, showers, drainage and related issues. The service page explains the available plumbing scopes.",
    related: [{ kind: "service", slug: "plumbing" }],
  },
  {
    id: "waterproofing",
    group: "services",
    question: "Do you provide waterproofing?",
    answer:
      "Yes. Waterproofing is available for listed bathrooms, toilets, balconies, roofs, walls and moisture-prone areas. The service page explains the scopes and common seepage problems that may need assessment.",
    related: [{ kind: "service", slug: "waterproofing" }],
  },
  {
    id: "flooring",
    group: "services",
    question: "Do you provide flooring?",
    answer:
      "Yes. The flooring service covers listed floor repair, replacement and finishing work for suitable floor types and areas. Visit the service page to review the available options.",
    related: [{ kind: "service", slug: "flooring" }],
  },
  {
    id: "handyman",
    group: "services",
    question: "Do you provide handyman services?",
    answer:
      "Yes. Handyman support is available for listed smaller home fixes, installations, adjustments and everyday maintenance tasks. The handyman service page outlines the specific jobs that can be discussed.",
    related: [{ kind: "service", slug: "handyman" }],
  },
];
