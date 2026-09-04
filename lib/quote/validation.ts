import { getLanguage } from "@/data/languages";
import { getServiceName } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { getSubServicesByService } from "@/data/sub-services";
import {
  isPreferredContactMethod,
  isQuoteLocale,
  isQuotePropertyTypeId,
  isQuoteServiceValue,
  QUOTE_HONEYPOT_FIELD,
  QUOTE_LIMITS,
  type PreferredContactMethod,
  type QuoteLocale,
  type QuotePropertyTypeId,
} from "./constants";
import { isValidEmail, isValidIsoDate, isValidPhone } from "./validators";

export { isValidEmail, isValidIsoDate, isValidPhone, normalizePhone } from "./validators";

export type QuoteFieldName =
  | "name"
  | "phone"
  | "email"
  | "propertyType"
  | "service"
  | "subService"
  | "location"
  | "description"
  | "preferredDate"
  | "preferredContact";

export type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  propertyTypeId: QuotePropertyTypeId;
  /** English label for the notification email. */
  propertyTypeLabel: string;
  service: string;
  serviceLabel: string;
  subService: string;
  /** English registry name for the notification email (empty when none). */
  subServiceLabel: string;
  location: string;
  description: string;
  preferredDate: string;
  preferredContact: PreferredContactMethod;
  locale: QuoteLocale;
  photoCount: number;
};

export type QuoteValidationResult =
  | { ok: true; data: QuotePayload }
  | { ok: false; reason: "validation"; fields: Partial<Record<QuoteFieldName, true>> }
  | { ok: false; reason: "spam" };

function getServiceLabel(service: string, locale: QuoteLocale): string {
  if (service === "not-sure-or-multiple-services") {
    return getDictionary(locale).quote.notSureOption;
  }

  return getServiceName(service, locale, service);
}

/**
 * English label for a property-type ID. The email notification is written for
 * the business, so it always renders the English dictionary label regardless
 * of the language the customer used.
 */
function getPropertyTypeLabel(id: QuotePropertyTypeId): string {
  return getDictionary("en").quote.propertyTypes[id];
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as Record<string, unknown>;
}

function readString(value: unknown, max: number): string | null {
  if (typeof value !== "string") {
    return null;
  }

  if (value.length > max) {
    return null;
  }

  return value;
}

function collapseWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * Phase 19 registry check: a sub-service may only be submitted for the service
 * it is registered under. Free-text sub-service values are rejected — the form
 * submits registry slugs, never display names.
 */
function resolveSubService(
  subServiceSlug: string,
  service: string,
): { slug: string; label: string } | null {
  if (subServiceSlug.length === 0) {
    return { slug: "", label: "" };
  }

  if (service === "not-sure-or-multiple-services") {
    // "Not sure" has no registry sub-services; choosing one is contradictory.
    return null;
  }

  const registered = getSubServicesByService(service).find(
    (item) => item.slug === subServiceSlug,
  );

  if (!registered) {
    return null;
  }

  return { slug: registered.slug, label: registered.en.name };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Server-side validation for a quote submission. Field names in `fields` are
 * the only details returned to the client — never the submitted values.
 */
export function parseQuotePayload(input: unknown): QuoteValidationResult {
  const record = asRecord(input);

  if (!record) {
    return {
      ok: false,
      reason: "validation",
      fields: { name: true },
    };
  }

  const honeypotValue = record[QUOTE_HONEYPOT_FIELD];

  if (honeypotValue !== undefined && honeypotValue !== null) {
    if (typeof honeypotValue !== "string") {
      return { ok: false, reason: "spam" };
    }

    if (honeypotValue.trim().length > 0) {
      return { ok: false, reason: "spam" };
    }
  }

  const fields: Partial<Record<QuoteFieldName, true>> = {};

  const nameRaw = readString(record.name, QUOTE_LIMITS.name.max);
  const name = nameRaw === null ? null : collapseWhitespace(nameRaw);

  if (name === null || name.length < QUOTE_LIMITS.name.min) {
    fields.name = true;
  }

  const phoneRaw = readString(record.phone, QUOTE_LIMITS.phone.max);
  const phone = phoneRaw === null ? null : phoneRaw.trim();

  if (phone === null || !isValidPhone(phone)) {
    fields.phone = true;
  }

  const emailRaw = readString(record.email ?? "", QUOTE_LIMITS.email.max);
  const email = emailRaw === null ? null : emailRaw.trim();

  if (email === null) {
    fields.email = true;
  } else if (email.length > 0 && !isValidEmail(email)) {
    fields.email = true;
  }

  const propertyTypeRaw = readString(record.propertyType, QUOTE_LIMITS.propertyType.max);
  const propertyType = propertyTypeRaw === null ? null : propertyTypeRaw.trim();

  if (propertyType === null || !isQuotePropertyTypeId(propertyType)) {
    fields.propertyType = true;
  }

  const serviceRaw = readString(record.service, QUOTE_LIMITS.service.max);
  const service = serviceRaw === null ? null : serviceRaw.trim();

  if (service === null || !isQuoteServiceValue(service)) {
    fields.service = true;
  }

  const subServiceRaw = readString(record.subService ?? "", QUOTE_LIMITS.subService.max);
  const subService =
    subServiceRaw === null ? null : collapseWhitespace(subServiceRaw);

  if (subService === null) {
    fields.subService = true;
  }

  const locationRaw = readString(record.location, QUOTE_LIMITS.location.max);
  const location = locationRaw === null ? null : collapseWhitespace(locationRaw);

  if (location === null || location.length < QUOTE_LIMITS.location.min) {
    fields.location = true;
  }

  const descriptionRaw = readString(record.description, QUOTE_LIMITS.description.max);
  const description = descriptionRaw === null ? null : descriptionRaw.trim();

  if (description === null) {
    fields.description = true;
  } else if (description.length < QUOTE_LIMITS.description.min) {
    fields.description = true;
  } else if (description.length > QUOTE_LIMITS.description.max) {
    fields.description = true;
  }

  const preferredDateRaw = readString(record.preferredDate ?? "", QUOTE_LIMITS.preferredDate.max);
  const preferredDate = preferredDateRaw === null ? null : preferredDateRaw.trim();

  if (preferredDate === null) {
    fields.preferredDate = true;
  } else if (preferredDate.length > 0 && !isValidIsoDate(preferredDate)) {
    fields.preferredDate = true;
  }

  const preferredContactRaw = readString(record.preferredContact ?? "", 20);
  const preferredContact = preferredContactRaw === null ? null : preferredContactRaw.trim();

  if (preferredContact === null || !isPreferredContactMethod(preferredContact)) {
    fields.preferredContact = true;
  }

  if (preferredContact === "email" && (!email || email.length === 0)) {
    fields.email = true;
  }

  const localeRaw = readString(record.locale ?? "", 8);
  const locale = localeRaw !== null && isQuoteLocale(localeRaw) ? localeRaw : "en";

  const photoCountRaw = record.photoCount;
  let photoCount = 0;

  if (photoCountRaw !== undefined && photoCountRaw !== null) {
    if (typeof photoCountRaw !== "number" || !Number.isInteger(photoCountRaw)) {
      photoCount = 0;
    } else {
      photoCount = Math.min(Math.max(photoCountRaw, 0), QUOTE_LIMITS.photoCount.max);
    }
  }

  // Relationship checks run only when the individual fields themselves are
  // well-formed, so the client always receives actionable field errors first.
  let resolvedSubService: { slug: string; label: string } | null = null;

  if (!fields.service && !fields.subService && service && subService !== null) {
    resolvedSubService = resolveSubService(subService, service);

    if (!resolvedSubService) {
      fields.subService = true;
    }
  }

  if (Object.keys(fields).length > 0) {
    return { ok: false, reason: "validation", fields };
  }

  const propertyTypeId = propertyType as QuotePropertyTypeId;
  const resolvedServiceLabel = getServiceLabel(service as string, locale);

  return {
    ok: true,
    data: {
      name: name as string,
      phone: phone as string,
      email: email as string,
      propertyTypeId,
      propertyTypeLabel: getPropertyTypeLabel(propertyTypeId),
      service: service as string,
      serviceLabel: resolvedServiceLabel,
      subService: (resolvedSubService as { slug: string; label: string }).slug,
      subServiceLabel: (resolvedSubService as { slug: string; label: string }).label,
      location: location as string,
      description: description as string,
      preferredDate: preferredDate as string,
      preferredContact: preferredContact as PreferredContactMethod,
      locale,
      photoCount,
    },
  };
}

export function localeLabel(locale: QuoteLocale): string {
  return getLanguage(locale)?.label ?? locale;
}
