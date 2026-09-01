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
};

export const defaultLanguage = "en";

export const supportedLanguages = ["en", "ms", "zh"] as const;

export function isPlaceholder(value: string): boolean {
  return value.startsWith("[") && value.endsWith("]");
}

export function getWhatsAppHref(lang = "en"): string {
  if (isPlaceholder(siteConfig.whatsapp)) {
    return `/${lang}/#contact`;
  }

  const digits = siteConfig.whatsapp.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : `/${lang}/#contact`;
}

export function getPhoneHref(lang = "en"): string {
  if (isPlaceholder(siteConfig.phone)) {
    return `/${lang}/#contact`;
  }

  const digits = siteConfig.phone.replace(/[^\d]/g, "");
  return digits ? `tel:${digits}` : `/${lang}/#contact`;
}

export function getEmailHref(lang = "en"): string {
  if (isPlaceholder(siteConfig.email)) {
    return `/${lang}/#contact`;
  }

  return `mailto:${siteConfig.email}`;
}

export function getSiteMetadata() {
  return {
    title: "Renovix Home Services | Home Renovation & Improvement in KL & Selangor",
    description: siteConfig.description,
  };
}
