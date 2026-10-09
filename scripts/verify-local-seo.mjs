#!/usr/bin/env node
/**
 * Lead-generation Task 3.1 — local authority / NAP readiness check.
 *
 *   npm run verify:local-seo
 *
 * Prints the exact business details a Google Business Profile and every local
 * citation must use, taken from the one place the website publishes them
 * (`data/site.ts`), so the profile and the site can never disagree:
 *
 * - the NAP block (name, street, locality, region, postcode, country),
 * - phone / WhatsApp / email / website,
 * - the published opening hours, with the "no days stated" caveat that Google
 *   requires the owner to resolve,
 * - the localities the site publishes guides for, as the reference list for
 *   GBP service areas (the owner still chooses only the ones the business
 *   genuinely works in),
 * - whether the homepage reviews link is armed with a verified profile URL.
 *
 * This script is intentionally non-destructive and informational:
 *
 * - It makes no network calls and contacts no Google service. Whether a
 *   profile exists, is verified, or is approved is **not claimed** here — that
 *   is only knowable in the owner's Google account (`LOCAL_SEO_SETUP.md` §7).
 * - It never prints a value the business has not supplied. Anything unknown is
 *   reported as unknown rather than filled in.
 * - It always exits 0 so it can run in CI as information without failing a
 *   build — an unclaimed profile is a missing action, not a defect.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const read = (path) => readFileSync(join(ROOT, path), "utf8");

/** Reads a quoted string field from data/site.ts (the single source). */
function field(source, pattern, label) {
  const match = source.match(pattern);
  if (!match) {
    throw new Error(`data/site.ts no longer exposes ${label} in the expected shape`);
  }
  return match[1];
}

const site = read("data/site.ts");

/**
 * The address fields are read from inside the `address: { … }` block only.
 * `region` in particular exists twice in `data/site.ts` — once as the market
 * region ("Kuala Lumpur & Selangor") and once, correctly, as the state that
 * belongs in an address ("Wilayah Persekutuan Kuala Lumpur").
 */
const addressBlock = (() => {
  const start = site.indexOf("address: {");
  if (start < 0) throw new Error("data/site.ts no longer exposes an address block");
  const end = site.indexOf("\n  },", start);
  if (end < 0) throw new Error("data/site.ts address block is not in the expected shape");
  return site.slice(start, end);
})();

const business = {
  name: field(site, /\n\s*name:\s*"([^"]+)"/, "name"),
  legalName: field(site, /\n\s*legalName:\s*"([^"]+)"/, "legalName"),
  url: field(site, /\n\s*url:\s*"([^"]+)"/, "url"),
  phone: field(site, /\n\s*phone:\s*"([^"]+)"/, "phone"),
  whatsapp: field(site, /\n\s*whatsapp:\s*"([^"]+)"/, "whatsapp"),
  email: field(site, /\n\s*email:\s*"([^"]+)"/, "email"),
  streetAddress: field(addressBlock, /streetAddress:\s*"([^"]+)"/, "address.streetAddress"),
  locality: field(addressBlock, /locality:\s*"([^"]+)"/, "address.locality"),
  region: field(addressBlock, /region:\s*"([^"]+)"/, "address.region"),
  postalCode: field(addressBlock, /postalCode:\s*"([^"]+)"/, "address.postalCode"),
  country: field(addressBlock, /country:\s*"([^"]+)"/, "address.country"),
  hoursDisplay: field(site, /businessHours:\s*\{[\s\S]*?display:\s*"([^"]+)"/, "businessHours.display"),
  opens: field(site, /businessHours:\s*\{[\s\S]*?opens:\s*"([^"]+)"/, "businessHours.opens"),
  closes: field(site, /businessHours:\s*\{[\s\S]*?closes:\s*"([^"]+)"/, "businessHours.closes"),
  googleReviewsUrl: field(site, /googleReviewsUrl:\s*"([^"]*)"/, "googleReviewsUrl"),
};

/** Published area guides, grouped by their region hub. */
function publishedAreas() {
  const dir = join(ROOT, "data", "area-content");
  const regions = new Map();

  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".ts") || file === "index.ts" || file === "types.ts") continue;

    const text = readFileSync(join(dir, file), "utf8");
    const pattern = /region:\s*"([a-z-]+)",\s*\n\s*slug:\s*"([^"]+)",\s*\n\s*name:\s*"([^"]+)"/g;

    for (const match of text.matchAll(pattern)) {
      const [, region, slug, name] = match;
      if (!regions.has(region)) regions.set(region, []);
      regions.get(region).push({ slug, name });
    }
  }

  return regions;
}

const areas = publishedAreas();
const totalAreas = [...areas.values()].reduce((sum, list) => sum + list.length, 0);

const lines = [];
lines.push("Renovix Home Services — local authority / NAP readiness");
lines.push("(offline check: contacts no Google service, prints only supplied facts)");
lines.push("");

lines.push("1. Exact business details — use these verbatim, character for character");
lines.push("");
lines.push(`   Business name      ${business.name}`);
lines.push(`   Legal name         ${business.legalName}`);
lines.push(`   Street address     ${business.streetAddress}`);
lines.push(`   Locality           ${business.locality}`);
lines.push(`   State / region     ${business.region}`);
lines.push(`   Postcode           ${business.postalCode}`);
lines.push(`   Country            ${business.country}`);
lines.push("");
lines.push("   Website            " + business.url);
lines.push(`   Phone (primary)    ${business.phone}`);
lines.push(`   WhatsApp           ${business.whatsapp}`);
lines.push(`   Email              ${business.email}`);
lines.push("");
lines.push("   Everything a citation site asks for is above. Do not reword, re-order or");
lines.push("   abbreviate it: Google matches the profile against the site and other");
lines.push('   citations, and "Jln" vs "Jalan" or a missing postcode weakens that match.');
lines.push("");

lines.push("2. Opening hours");
lines.push("");
lines.push(`   Published hours    ${business.hoursDisplay} (${business.opens}–${business.closes})`);
lines.push("   Days               NOT STATED by the business");
lines.push("");
lines.push("   Google asks for hours day-by-day, so the owner must decide them. Two rules:");
lines.push("   - If the real hours differ from the published range, update");
lines.push("     data/site.ts first so the site and the profile agree.");
lines.push("   - If the business is not open every day, the site copy needs the days");
lines.push("     added too. Do not enter days in GBP that the site does not state.");
lines.push("   The site deliberately publishes no opening days in structured data");
lines.push("   (audit:schema enforces this) because none have been supplied.");
lines.push("");

lines.push("3. Service areas — published coverage (owner chooses; GBP is a claim)");
lines.push("");
if (totalAreas === 0) {
  lines.push("   No published area guides were parsed — see data/area-content/.");
} else {
  for (const [region, list] of [...areas].sort()) {
    lines.push(`   ${region} — ${list.length} published guide(s)`);
    const names = list.map((area) => area.name);
    const width = 62;
    let line = "     ";
    for (const name of names) {
      if (line.length + name.length + 2 > width) {
        lines.push(line);
        line = "     ";
      }
      line += `${name}, `;
    }
    if (line.trim()) lines.push(line.replace(/, $/, ""));
    lines.push("");
  }
  lines.push(`   ${totalAreas} published locality guides in total — a marketing list, not a`);
  lines.push("   service commitment. A service area on the profile tells customers the");
  lines.push("   business works there, so select only the localities where it genuinely");
  lines.push("   takes jobs; leftover areas can be added later without penalty.");
  lines.push("   GBP limits how many areas can be listed, so lead with the core ones.");
}
lines.push("");

lines.push("4. Homepage reviews link (Phase 3 / problem register P-05)");
lines.push("");
if (business.googleReviewsUrl.trim()) {
  lines.push(`   ARMED — ${business.googleReviewsUrl}`);
  lines.push("   The homepage reviews block links to the profile and fires");
  lines.push("   review_profile_click (surface: home_reviews) in EN/MS/ZH.");
} else {
  lines.push("   NOT ARMED — by owner decision (2026-10-09): the owner-supplied");
  lines.push("   profile link is published on the footer social icon only, and the");
  lines.push("   reviews-block link stays off while the profile has no Google reviews.");
  lines.push("   The homepage reviews block renders exactly as the owner approved:");
  lines.push("   reviews, the localized \"Posted on Google\" line and no link.");
  lines.push("   To arm it later, paste the profile URL into `googleReviewsUrl` in");
  lines.push("   data/site.ts — one line; labels and tracking stay wired.");
  lines.push("   See LOCAL_SEO_SETUP.md §6.");
}
lines.push("");

lines.push("5. Result");
lines.push("");
lines.push("   The website's half is ready: one name, one address, one phone number, one");
lines.push("   email and one hours range, published from data/site.ts and enforced by");
lines.push("   `npm run audit:business`; a LocalBusiness entity on every page; and a");
lines.push("   reviews link that arms itself the moment a verified profile URL exists.");
lines.push("");
lines.push("   NOT CLAIMED: that a Google Business Profile has been created, verified or");
lines.push("   approved, that any citation has been submitted, or that anything appears");
lines.push("   in Maps / the Local Pack. Those are owner actions, and only the owner's");
lines.push("   Google account can confirm them (LOCAL_SEO_SETUP.md §7).");
lines.push("");
lines.push("   Next: follow LOCAL_SEO_SETUP.md §3 to create and verify the profile, then");
lines.push("   §5 for the citation sites, then re-run this check with the URL supplied.");

console.log(lines.join("\n"));
