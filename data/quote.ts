import { serviceDetails } from "@/data/service-content";
import { services } from "@/data/services";

export type QuoteServiceOption = {
  value: string;
  label: string;
  subServices: string[];
};

export type QuoteRequestPayload = {
  name: string;
  whatsappNumber: string;
  email: string;
  serviceRequired: string;
  subService: string;
  propertyType: string;
  location: string;
  description: string;
  preferredDate: string;
  photos: File[];
};

/**
 * Quote delivery is intentionally not configured in Phase 5. Connect a secure
 * server action or route handler here only after a validated destination and
 * file-upload storage policy are available.
 */
export const quoteIntegration = {
  status: "not-configured",
  endpoint: null,
} as const;

const additionalQuoteOptions: QuoteServiceOption[] = [
  {
    value: "not-sure-or-multiple-services",
    label: "Not sure / multiple services",
    subServices: [
      "Not sure — please advise",
      "Multiple services / renovation scope",
    ],
  },
];

export const quoteServiceOptions: QuoteServiceOption[] = [
  ...additionalQuoteOptions,
  ...services.map((service) => {
    const detail = serviceDetails.find((item) => item.slug === service.slug);
    const groupedSubServices = detail?.subServiceGroups?.flatMap((group) =>
      group.items.map((item) => item.name),
    );
    const subServices = [
      ...(detail?.subServices.map((item) => item.name) ?? []),
      ...(groupedSubServices ?? []),
    ];

    return {
      value: service.slug,
      label: service.name,
      subServices: ["Not sure — please advise", ...subServices],
    };
  }),
];

export const propertyTypeOptions = [
  "Condominium / apartment",
  "Terrace / landed house",
  "Semi-detached / bungalow",
  "Shop / office / commercial space",
  "Other / not sure yet",
] as const;
