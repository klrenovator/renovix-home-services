export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  market: string;
  region: string;
  regionShort: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  businessHours: string;
};

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
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  email: "[EMAIL]",
  address: "[ADDRESS]",
  businessHours: "[BUSINESS HOURS]",
};

export const defaultLanguage = "en";

export const supportedLanguages = ["en", "ms", "zh"] as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[") && value.endsWith("]");
}

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

export function getWhatsAppHref(lang = "en"): string {
  if (isPlaceholder(siteConfig.whatsapp)) {
    return getContactHref(lang);
  }

  const digits = siteConfig.whatsapp.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : getContactHref(lang);
}

export function getPhoneHref(lang = "en"): string {
  if (isPlaceholder(siteConfig.phone)) {
    return getContactHref(lang);
  }

  const digits = siteConfig.phone.replace(/[^\d]/g, "");
  return digits ? `tel:${digits}` : getContactHref(lang);
}

export function getEmailHref(lang = "en"): string {
  if (isPlaceholder(siteConfig.email)) {
    return getContactHref(lang);
  }

  return `mailto:${siteConfig.email}`;
}

export function getSiteMetadata() {
  return {
    title: "Renovix Home Services | Home Renovation & Improvement in KL & Selangor",
    description: siteConfig.description,
  };
}
