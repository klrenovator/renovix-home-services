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

export const localCitationDirectoryIds = [
  "yellowPagesMalaysia",
  "hotfrog",
  "businessList",
  "facebookLocal",
] as const;

export type LocalCitationDirectoryId = (typeof localCitationDirectoryIds)[number];

export type LocalCitationProfile = {
  /** Owner-confirmed state; only a public listing with matching NAP is published. */
  status: "pending" | "published";
  /** Direct HTTPS profile URL copied from the live listing; empty while pending. */
  url: string;
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
  facebookUrl: string;
  instagramUrl: string;
  /**
   * The business's Google Business Profile link as shared by the owner, or an
   * empty string while none exists. OWNER-SUPPLIED ONLY (Lead-generation Task
   * 3.1, supplied 2026-10-09): the footer's social row links it next to
   * Facebook and Instagram. It may never be guessed or templated from the
   * business name. While both fields point at the same profile this stays in
   * sync with `googleReviewsUrl` below; the two may diverge if the owner ever
   * supplies a dedicated review link instead of the profile link.
   */
  googleBusinessProfileUrl: string;
  /**
   * The business's live Google Business Profile review URL, or an empty string
   * while no profile exists. OWNER-SUPPLIED ONLY (Lead-generation Task 3.1):
   * it is copied from the verified profile in Google Maps / Search once the
   * owner has created and verified it, and it may never be guessed, templated
   * from the business name, or filled with a search URL. When it is empty the
   * homepage reviews block renders exactly as it did before — no link, and no
   * claim that one exists. See `LOCAL_SEO_SETUP.md` §6.
   */
  googleReviewsUrl: string;
  /**
   * Direct public profile URLs for the Task 3.3 citation directories. Each URL
   * and `published` status are OWNER-SUPPLIED only, after the listing is live
   * and its name/address/phone have been checked against this file. Keep every
   * entry pending with an empty URL until then; the contact-page links stay
   * hidden, and the existing social Facebook share URL is not a citation.
   * See `LOCAL_SEO_SETUP.md` §5.
   */
  localCitationProfiles: Record<LocalCitationDirectoryId, LocalCitationProfile>;
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
  facebookUrl: "https://www.facebook.com/share/1dr51n9qii/",
  instagramUrl: "https://www.instagram.com/renovixhomeservices/",
  /**
   * OWNER-SUPPLIED 2026-10-09: the owner's own Google Business Profile share
   * link (https://share.google/… is Google's current profile-share format).
   * Renders the footer Google icon beside Facebook and Instagram. The profile
   * currently has no Google reviews; the homepage reviews block's cards are
   * the owner-approved presentation and are deliberately untouched.
   */
  googleBusinessProfileUrl: "https://share.google/FxD6lF5xTiX9sNCcu",
  /**
   * OWNER-SUPPLIED 2026-10-09 (Lead-generation Task 3.1 step 5): the same
   * profile link the owner shared, arming the homepage reviews block's
   * "View on Google" button (`review_profile_click`). Owner decision
   * 2026-10-09: keep the existing website reviews exactly as they are — the
   * profile has no Google reviews of its own yet and nothing here removes or
   * replaces the published review cards (`LOCAL_SEO_SETUP.md` §6).
   */
  googleReviewsUrl: "https://share.google/FxD6lF5xTiX9sNCcu",
  localCitationProfiles: {
    yellowPagesMalaysia: { status: "pending", url: "" },
    hotfrog: { status: "pending", url: "" },
    businessList: { status: "pending", url: "" },
    facebookLocal: { status: "pending", url: "" },
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
