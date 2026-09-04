import { QUOTE_LIMITS } from "./constants";

/**
 * Pure, dependency-free field validators shared by the client form and the
 * server payload parser. This module intentionally imports nothing beyond the
 * constants so that bundling it into the browser never drags the content
 * registries (services, sub-services, dictionaries) into the client bundle.
 *
 * The heavier `validation.ts` (which resolves labels against the registries)
 * re-exports these for server-side use.
 */

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

  // E.164 allows at most 15 digits; the constant `phone.min` (8) mirrors the
  // shortest valid Malaysian mobile number.
  return digits.length >= QUOTE_LIMITS.phone.min && digits.length <= 15;
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
