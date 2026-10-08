#!/usr/bin/env node
/**
 * Lead-generation Task 3.3 — read-only live check for Malaysian directory
 * listings. Imported by `scripts/verify-citations.mjs` only behind the
 * `--live` flag, so the default verification path stays offline.
 *
 * For every profile the owner has marked published in `data/site.ts`, one
 * read-only GET is performed (redirects followed, bounded by a timeout, no
 * credentials, response body capped) and the served HTML is compared with the
 * NAP the website publishes — the same fields `npm run verify:local-seo`
 * prints, read from the same file:
 *
 *   - business name (full / truncated / missing),
 *   - phone number (E.164 and local digit forms),
 *   - street-address fragments and postcode.
 *
 * Verdicts (see `classifyLiveOutcome`):
 *   - "pass"       the page answers 2xx on the directory's own host and shows
 *                  the full business name, phone and address;
 *   - "warn"       the page answers but the name is truncated or the phone /
 *                  address are not visible in the served HTML — directories
 *                  often render these with JavaScript or behind a click, so
 *                  the owner confirms by eye;
 *   - "fail"       the URL does not answer 2xx, redirects off the directory's
 *                  host, or the page shows no trace of the business — a
 *                  contact-page link to it would be broken or wrong;
 *   - "unverified" the GET itself failed (no network, DNS failure, timeout) —
 *                  never a pass and never a failure.
 *
 * Honesty rules:
 *   - Read-only: this module writes nothing, changes no configuration and
 *     never marks a listing published. Only the owner sets that status.
 *   - It cannot prove a directory approved the listing, that the listing is
 *     the official record, or that no duplicate exists (LOCAL_SEO_SETUP.md §5).
 *   - The classifiers are pure and exported so `scripts/audit-citations.mjs`
 *     can pin their behaviour without any network access.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");

/** Reads the NAP the website publishes — the same source `verify:local-seo` prints. */
export function readNapFromSiteConfig() {
  const site = readFileSync(join(ROOT, "data/site.ts"), "utf8");
  const field = (source, pattern, label) => {
    const match = source.match(pattern);
    if (!match) {
      throw new Error(`data/site.ts no longer exposes ${label} in the expected shape`);
    }
    return match[1];
  };
  const addressStart = site.indexOf("address: {");
  if (addressStart < 0) throw new Error("data/site.ts no longer exposes an address block");
  const addressEnd = site.indexOf("\n  },", addressStart);
  if (addressEnd < 0) throw new Error("data/site.ts address block is not in the expected shape");
  const addressBlock = site.slice(addressStart, addressEnd);

  return {
    name: field(site, /\n\s*name:\s*"([^"]+)"/, "name"),
    phone: field(site, /\n\s*phone:\s*"([^"]+)"/, "phone"),
    streetAddress: field(addressBlock, /streetAddress:\s*"([^"]+)"/, "address.streetAddress"),
    postalCode: field(addressBlock, /postalCode:\s*"([^"]+)"/, "address.postalCode"),
  };
}

/** Digit-only forms a directory may print for the site's phone number. */
function phoneDigitForms(phone) {
  const digits = String(phone ?? "").replace(/\D/g, "");
  if (!digits) return [];
  const forms = [digits];
  // "+601159259521" is dialled locally as "011-5925 9521" — the same digits with a leading 0.
  if (digits.startsWith("60")) forms.push(`0${digits.slice(2)}`);
  return [...new Set(forms)];
}

/**
 * Pure: compares the published NAP with a page body.
 * Returns the name state, whether the phone and the full address are visible,
 * and a human-readable list of what is missing.
 */
export function checkNapPresence(body, nap) {
  const text = String(body ?? "");
  const haystack = text.toLowerCase();
  const digits = text.replace(/\D/g, "");

  const name = String(nap?.name ?? "").trim();
  const firstToken = name.split(/\s+/)[0] ?? "";
  const nameState =
    name && haystack.includes(name.toLowerCase())
      ? "full"
      : firstToken && haystack.includes(firstToken.toLowerCase())
        ? "truncated"
        : "missing";

  const phoneForms = phoneDigitForms(nap?.phone);
  const phone = phoneForms.length > 0 && phoneForms.some((form) => digits.includes(form));

  const fragments = [nap?.streetAddress, nap?.postalCode]
    .flatMap((value) => String(value ?? "").split(","))
    .map((fragment) => fragment.trim())
    .filter(Boolean);
  const missingFragments = fragments.filter((fragment) => !haystack.includes(fragment.toLowerCase()));
  const address = fragments.length > 0 && missingFragments.length === 0;

  const missing = [];
  if (nameState === "truncated") missing.push("the full business name (only a shortened form is visible)");
  if (nameState === "missing") missing.push("the business name");
  if (!phone) missing.push("the phone number");
  for (const fragment of missingFragments) missing.push(`the address "${fragment}"`);

  return { name: nameState, phone, address, missing };
}

/**
 * Pure: turns one GET outcome into a verdict.
 * `outcome` is either `{ error }` (the request failed) or
 * `{ status, finalUrl, body }` (the request answered).
 */
export function classifyLiveOutcome(directory, outcome, nap) {
  if (!outcome || outcome.error) {
    return {
      verdict: "unverified",
      reasons: ["the profile page could not be retrieved from this environment (no network, DNS failure or timeout)"],
      missing: [],
    };
  }

  const { status, finalUrl, body } = outcome;
  if (!Number.isInteger(status) || status < 200 || status >= 300) {
    return {
      verdict: "fail",
      reasons: [`the profile URL answered HTTP ${status} — a contact-page link to it would be broken`],
      missing: [],
    };
  }

  let finalHost = null;
  try {
    finalHost = new URL(finalUrl).hostname.toLowerCase();
  } catch {
    finalHost = null;
  }
  const allowedHosts = (directory?.allowedHosts ?? []).map((host) => String(host).toLowerCase());
  if (!finalHost || !allowedHosts.includes(finalHost)) {
    return {
      verdict: "fail",
      reasons: [
        `the profile URL landed on ${finalHost ?? "an unreadable address"}, off the ${directory?.label ?? "directory"} host — the configured URL is stale or wrong`,
      ],
      missing: [],
    };
  }

  const presence = checkNapPresence(body, nap);
  if (presence.name === "missing") {
    return {
      verdict: "fail",
      reasons: ["the public page shows no trace of the business — it is not the Renovix listing"],
      missing: presence.missing,
    };
  }
  if (presence.name === "truncated" || presence.missing.length > 0) {
    return {
      verdict: "warn",
      reasons: [
        presence.name === "truncated"
          ? `the served HTML shows only a shortened business name and lacks: ${presence.missing.join(", ")}`
          : `the served HTML does not show: ${presence.missing.join(", ")}`,
      ],
      missing: presence.missing,
    };
  }

  return {
    verdict: "pass",
    reasons: ["the public page answers on the directory host and shows the full NAP from data/site.ts"],
    missing: [],
  };
}

/** One read-only GET: redirects followed, timeout-bounded, body capped. */
export async function fetchProfilePage(url, { timeoutMs = 20_000, maxBodyChars = 2_000_000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "renovix-citation-check/1.0 (+https://renovixhomeservices.my/; read-only listing verification)",
        accept: "text/html,application/xhtml+xml",
      },
    });
    const body = (await response.text()).slice(0, maxBodyChars);
    return { status: response.status, finalUrl: response.url || url, body };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Runs the live check for each given profile (the caller gates this to
 * published entries). Returns one result per profile; writes nothing.
 */
export async function runLiveCitationChecks(profiles, nap, options = {}) {
  const results = [];
  for (const profile of profiles) {
    let outcome;
    try {
      outcome = await fetchProfilePage(profile.url, options);
    } catch (error) {
      outcome = { error };
    }
    const { verdict, reasons, missing } = classifyLiveOutcome(profile, outcome, nap);
    results.push({ id: profile.id, label: profile.label, url: profile.url, verdict, reasons, missing });
  }
  return results;
}
