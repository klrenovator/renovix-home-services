import { services } from "@/data/services";

/** Maximum lengths applied on both the client and the server. */
export const QUOTE_LIMITS = {
  name: { min: 2, max: 100 },
  phone: { min: 8, max: 20 },
  email: { max: 254 },
  propertyType: { max: 80 },
  service: { max: 80 },
  subService: { max: 200 },
  location: { min: 2, max: 200 },
  description: { min: 1, max: 4000 },
  preferredDate: { max: 10 },
  photoCount: { max: 20 },
} as const;

export const QUOTE_SERVICE_VALUES = [
  "not-sure-or-multiple-services",
  ...services.map((service) => service.slug),
] as const;

export type QuoteServiceValue = (typeof QUOTE_SERVICE_VALUES)[number];

export const PREFERRED_CONTACT_METHODS = ["whatsapp", "phone", "email"] as const;

export type PreferredContactMethod = (typeof PREFERRED_CONTACT_METHODS)[number];

export const QUOTE_LOCALES = ["en", "ms", "zh"] as const;

export type QuoteLocale = (typeof QUOTE_LOCALES)[number];

/** Hidden honeypot field name. Real users never fill this in. */
export const QUOTE_HONEYPOT_FIELD = "companyWebsite";

export const QUOTE_ENDPOINT = "/api/quote/";

/** Maximum encoded JSON request body accepted by the public quote endpoint. */
export const QUOTE_MAX_BODY_BYTES = 64_000;

export function isQuoteServiceValue(value: string): value is QuoteServiceValue {
  return (QUOTE_SERVICE_VALUES as readonly string[]).includes(value);
}

export function isPreferredContactMethod(
  value: string,
): value is PreferredContactMethod {
  return (PREFERRED_CONTACT_METHODS as readonly string[]).includes(value);
}

export function isQuoteLocale(value: string): value is QuoteLocale {
  return (QUOTE_LOCALES as readonly string[]).includes(value);
}
