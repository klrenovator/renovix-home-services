#!/usr/bin/env node
/**
 * Lead-generation Task 3.3 — offline readiness for Malaysian local citations.
 *
 *   npm run verify:citations
 *
 * Reads the owner-maintained `localCitationProfiles` in `data/site.ts`, checks
 * that published entries use clean HTTPS direct-profile URLs on the expected
 * directory hosts, and prints which profiles are still pending. It makes no
 * network calls and cannot prove that an external listing is public, approved
 * or accurate; the owner must check the live page and exact NAP first.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { CITATION_DIRECTORIES, validateCitationUrl } from "./citation-rules.mjs";

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
const published = [];

console.log("Renovix Home Services — Local Malaysian citation readiness");
console.log("(offline check: validates configured URL shapes; contacts no directory)");
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

  published.push(directory.label);
  console.log(`[OWNER-DECLARED PUBLISHED] ${directory.label}: ${result.normalizedUrl}`);
}

console.log("");
if (published.length === 0) {
  console.log("No local-directory links are enabled on the EN/MS/ZH contact pages.");
} else {
  console.log("The contact-page link block is enabled only for these owner-declared profiles:");
  for (const label of published) console.log(`  - ${label}`);
}
console.log("");
console.log("NOT CLAIMED: this offline check cannot confirm submission, approval, public visibility or NAP accuracy.");
console.log("Before setting a profile to published, open its public page and compare the business name, address and phone with npm run verify:local-seo.");

if (failures.length > 0) {
  console.error("\nFAIL");
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log("\nPASS — configuration is consistent; external listing state remains owner-verified.");
