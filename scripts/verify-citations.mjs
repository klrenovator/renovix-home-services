#!/usr/bin/env node
/**
 * Lead-generation Task 3.3 — readiness check for Malaysian local citations.
 *
 *   npm run verify:citations           # configuration shape only (no network)
 *   npm run verify:citations -- --live # also performs one read-only GET per
 *                                      # owner-declared published profile and
 *                                      # compares the page with the site's NAP
 *
 * Reads the owner-maintained `localCitationProfiles` in `data/site.ts`, checks
 * that published entries use clean HTTPS direct-profile URLs on the expected
 * directory hosts, and prints which profiles are still pending.
 *
 * Honesty rules:
 *   - The default run is offline: it contacts no directory and cannot prove
 *     that an external listing is public, approved or accurate.
 *   - `--live` is opt-in and read-only: one GET per published profile,
 *     redirects followed, bounded by a timeout, no credentials, no writes.
 *     It reports LIVE PASS / LIVE WARN / LIVE FAIL, and NOT VERIFIED when a
 *     page cannot be reached from this environment — never a pass or a
 *     failure.
 *   - Neither mode can confirm approval, officiality or the absence of
 *     duplicates; the owner must open each public page and check the NAP
 *     against `npm run verify:local-seo` before relying on a listing.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { CITATION_DIRECTORIES, validateCitationUrl } from "./citation-rules.mjs";

const live = process.argv.slice(2).includes("--live");

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const source = readFileSync(join(ROOT, "data/site.ts"), "utf8");
const configStart = source.indexOf("export const siteConfig");
const blockStart = source.indexOf("localCitationProfiles: {", configStart);
const blockEnd = blockStart < 0 ? -1 : source.indexOf("\n  },", blockStart);

if (configStart < 0 || blockStart < 0 || blockEnd < 0) {
  console.error("data/site.ts does not expose localCitationProfiles in the expected shape.");
  process.exit(1);
}

const profileBlock = source.slice(blockStart, blockEnd);
const failures = [];
const publishedProfiles = [];

console.log("Renovix Home Services — Local Malaysian citation readiness");
console.log(
  live
    ? "(offline configuration check + one read-only GET per published profile)"
    : "(offline check: validates configured URL shapes; contacts no directory)",
);
console.log("");

for (const directory of CITATION_DIRECTORIES) {
  const pattern = new RegExp(
    `${directory.id}:\\s*\\{\\s*status:\\s*"([^"]+)"\\s*,\\s*url:\\s*"([^"]*)"\\s*\\}`,
  );
  const match = profileBlock.match(pattern);

  if (!match) {
    failures.push(`data/site.ts is missing ${directory.id} with status and URL fields.`);
    continue;
  }

  const [, status, url] = match;
  if (!["pending", "published"].includes(status)) {
    failures.push(`${directory.label}: status must be "pending" or "published", not ${JSON.stringify(status)}.`);
    continue;
  }

  if (status === "pending") {
    if (url !== "") {
      failures.push(`${directory.label}: keep the URL empty while status is pending; submission/private URLs must not be published.`);
      continue;
    }
    console.log(`[PENDING] ${directory.label}: no public profile supplied; no site link is shown.`);
    continue;
  }

  const result = validateCitationUrl(directory.id, url);
  if (!result.ok) {
    failures.push(`${directory.label}: ${result.reason}.`);
    continue;
  }

  publishedProfiles.push({ ...directory, url: result.normalizedUrl });
  console.log(`[OWNER-DECLARED PUBLISHED] ${directory.label}: ${result.normalizedUrl}`);
}

console.log("");
if (publishedProfiles.length === 0) {
  console.log("No local-directory links are enabled on the EN/MS/ZH contact pages.");
} else {
  console.log("The contact-page link block is enabled only for these owner-declared profiles:");
  for (const profile of publishedProfiles) console.log(`  - ${profile.label}`);
}
console.log("");
console.log("NOT CLAIMED: no check here can confirm submission, approval, public visibility or NAP accuracy on its own.");
console.log("Before setting a profile to published, open its public page and compare the business name, address and phone with npm run verify:local-seo.");

if (failures.length === 0 && live) {
  console.log("");
  console.log("Live listing check (--live, read-only, one GET per published profile):");
  if (publishedProfiles.length === 0) {
    console.log("  – no profile is marked published yet — there is nothing to retrieve.");
    console.log("  – after the owner publishes a listing and sets it to published, re-run with --live.");
  } else {
    const { readNapFromSiteConfig, runLiveCitationChecks } = await import("./citation-live-check.mjs");
    const nap = readNapFromSiteConfig();
    const results = await runLiveCitationChecks(publishedProfiles, nap);
    for (const result of results) {
      if (result.verdict === "pass") {
        console.log(`  ✓ [LIVE PASS] ${result.label}: ${result.url}`);
        for (const reason of result.reasons) console.log(`      - ${reason}`);
      } else if (result.verdict === "warn") {
        console.log(`  ! [LIVE WARN] ${result.label}: ${result.url}`);
        for (const reason of result.reasons) console.log(`      - ${reason}`);
        console.log("      directories may render these with JavaScript or behind a click — confirm by eye.");
      } else if (result.verdict === "fail") {
        failures.push(`live check: ${result.label}: ${result.reasons.join("; ")}.`);
        console.log(`  ✗ [LIVE FAIL] ${result.label}: ${result.url}`);
        for (const reason of result.reasons) console.log(`      - ${reason}`);
      } else {
        console.log(`  – [NOT VERIFIED] ${result.label}: ${result.url}`);
        for (const reason of result.reasons) console.log(`      - ${reason}`);
        console.log("      could not check from this environment — not a pass or a failure.");
      }
    }
    console.log("");
    console.log("The live check is read-only and writes nothing; it cannot prove a listing is approved,");
    console.log("official or free of duplicates — the owner's own look at each public page remains the gate.");
  }
}

if (failures.length > 0) {
  console.error("\nFAIL");
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log("");
console.log(
  live
    ? "PASS — configuration is consistent and every reachable published profile checked out; approval remains owner-verified."
    : "PASS — configuration is consistent; external listing state remains owner-verified.",
);
