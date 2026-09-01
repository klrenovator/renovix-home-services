export type SiteAddress = {
  /** Full one-line address, exactly as supplied by the business. */
  full: string;
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  /** ISO 3166-1 alpha-2 country code. */
  country: string;
};

export type SiteBusinessHours = {
  /** Display string used in English UI. Localized copies live in the dictionaries. */
  display: string;
  /** 24-hour opening time, for structured data. */
  opens: string;
  /** 24-hour closing time, for structured data. */
  closes: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  market: string;
  region: string;
  regionShort: string;
  /** E.164 phone number — the same number is used for calls and WhatsApp. */
  phone: string;
  whatsapp: string;
  email: string;
  address: SiteAddress;
  businessHours: SiteBusinessHours;
};

/**
 * Verified business information for Renovix Home Services.
 *
 * Only details supplied by the business are recorded here. Nothing about
 * registration numbers, licences, coordinates, additional branches, ratings or
 * review counts is stored or published anywhere on the site.
 */
export const siteConfig: SiteConfig = {
  name: "Renovix Home Services",
  legalName: "Renovix Home Services",
  tagline: "Professional Home Renovation & Improvement Services in Kuala Lumpur & Selangor",
  description:
    "Renovix Home Services provides professional home renovation and improvement services across Kuala Lumpur, Selangor and the Klang Valley. Tiling, welding, electrical, painting, ceiling, partition, plumbing, waterproofing, flooring, renovation and handyman services.",
  url: "https://renovixhomeservices.my",
  market: "Klang Valley",
  region: "Kuala Lumpur & Selangor",
  regionShort: "KL & Selangor",
  phone: "+601159259521",
  whatsapp: "+601159259521",
  email: "renovixhomeservices@gmail.com",
  address: {
    full: "Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
    streetAddress: "Jalan Kiara, Mont Kiara",
    locality: "Kuala Lumpur",
    region: "Wilayah Persekutuan Kuala Lumpur",
    postalCode: "50480",
    country: "MY",
  },
  businessHours: {
    display: "9:00 AM – 6:00 PM",
    opens: "09:00",
    closes: "18:00",
  },
};

/**
 * Trailing slashes match the URLs the site actually serves (`trailingSlash: true`
 * in next.config.ts), so these never cost an internal redirect hop.
 */
export function getContactHref(lang = "en"): string {
  return `/${lang}/contact/`;
}

export function getQuoteHref(lang = "en"): string {
  return `/${lang}/quote/`;
}

/** International WhatsApp format: digits only, no `+`, no leading zero. */
export function getWhatsAppHref(): string {
  const digits = siteConfig.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

/** `tel:` keeps the leading `+` so the number dials correctly from abroad. */
export function getPhoneHref(): string {
  return `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
}

export function getEmailHref(): string {
  return `mailto:${siteConfig.email}`;
}
