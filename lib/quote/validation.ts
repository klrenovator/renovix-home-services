import { getLanguage } from "@/data/languages";
import { getServiceBySlug } from "@/data/services";
import {
  isPreferredContactMethod,
  isQuoteLocale,
  isQuoteServiceValue,
  QUOTE_HONEYPOT_FIELD,
  QUOTE_LIMITS,
  type PreferredContactMethod,
  type QuoteLocale,
} from "./constants";

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
  propertyType: string;
  service: string;
  serviceLabel: string;
  subService: string;
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

export function normalizePhone(value: string): string {
  const stripped = value.trim().replace(/[\s().-]/g, "");

  if (stripped.startsWith("00")) {
    return `+${stripped.slice(2)}`;
  }

  return stripped;
}

export function isValidPhone(value: string): boolean {
  const normalized = normalizePhone(value);

  if (!/^\+?[0-9]{8,15}$/.test(normalized)) {
    return false;
  }

  const digits = normalized.replace(/\D/g, "");

  return digits.length >= 8 && digits.length <= 15;
}

export function isValidEmail(value: string): boolean {
  if (value.length === 0 || value.length > QUOTE_LIMITS.email.max) {
    return false;
  }

  if (value.includes("..") || value.includes(" ")) {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
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
  const propertyType = propertyTypeRaw === null ? null : collapseWhitespace(propertyTypeRaw);

  if (propertyType === null || propertyType.length === 0) {
    fields.propertyType = true;
  }

  const serviceRaw = readString(record.service, QUOTE_LIMITS.service.max);
  const service = serviceRaw === null ? null : serviceRaw.trim();

  if (service === null || !isQuoteServiceValue(service)) {
    fields.service = true;
  }

  const serviceLabelRaw = readString(record.serviceLabel ?? "", QUOTE_LIMITS.serviceLabel.max);
  const serviceLabel = serviceLabelRaw === null ? "" : collapseWhitespace(serviceLabelRaw);

  const subServiceRaw = readString(record.subService ?? "", QUOTE_LIMITS.subService.max);
  const subService = subServiceRaw === null ? null : collapseWhitespace(subServiceRaw);

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

  if (Object.keys(fields).length > 0) {
    return { ok: false, reason: "validation", fields };
  }

  const resolvedServiceLabel =
    serviceLabel ||
    (service === "not-sure-or-multiple-services"
      ? "Not sure / multiple services"
      : (getServiceBySlug(service ?? "")?.name ?? service ?? ""));

  return {
    ok: true,
    data: {
      name: name as string,
      phone: phone as string,
      email: email as string,
      propertyType: propertyType as string,
      service: service as string,
      serviceLabel: resolvedServiceLabel,
      subService: subService as string,
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
