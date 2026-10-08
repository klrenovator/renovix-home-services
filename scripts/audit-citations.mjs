#!/usr/bin/env node
/**
 * Lead-generation Task 3.3 — local Malaysian citation audit.
 *
 * Guards the repo-side preparation for Yellow Pages Malaysia, Hotfrog,
 * BusinessList.my and Facebook Local Business: owner-only profile state,
 * direct HTTPS URLs, a localized contact-page presentation, privacy-safe click
 * measurement, an honest owner runbook, and the opt-in read-only live listing
 * check (`npm run verify:citations -- --live`) with its honesty contract.
 * This audit never claims that an external listing has been submitted or
 * approved.
 *
 * Run with: npm run audit:citations
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { CITATION_DIRECTORIES, validateCitationUrl } from "./citation-rules.mjs";
import { checkNapPresence, classifyLiveOutcome } from "./citation-live-check.mjs";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const read = (path) => readFileSync(join(ROOT, path), "utf8");
const failures = [];
const notes = [];
const fail = (message) => failures.push(message);
const note = (message) => notes.push(message);

const site = read("data/site.ts");
const configStart = site.indexOf("export const siteConfig");
const profilesStart = site.indexOf("localCitationProfiles: {", configStart);
const profilesEnd = profilesStart < 0 ? -1 : site.indexOf("\n  },", profilesStart);
const profileBlock = profilesStart >= 0 && profilesEnd >= 0
  ? site.slice(profilesStart, profilesEnd)
  : "";

if (!site.includes("Record<LocalCitationDirectoryId, LocalCitationProfile>")) {
  fail("data/site.ts must type the directory profiles by the closed directory-ID list.");
}
if (CITATION_DIRECTORIES.length !== 4) {
  fail("the audited directory catalogue must contain exactly four requested platforms.");
}

const configuredProfiles = [];
for (const directory of CITATION_DIRECTORIES) {
  const pattern = new RegExp(
    `${directory.id}:\\s*\\{\\s*status:\\s*"([^"]+)"\\s*,\\s*url:\\s*"([^"]*)"\\s*\\}`,
  );
  const match = profileBlock.match(pattern);
  if (!match) {
    fail(`data/site.ts is missing the ${directory.id} status/URL record.`);
    continue;
  }

  const [, status, url] = match;
  configuredProfiles.push({ ...directory, status, url });
  if (!["pending", "published"].includes(status)) {
    fail(`${directory.label}: status must be pending or published.`);
    continue;
  }
  if (status === "pending" && url !== "") {
    fail(`${directory.label}: pending profiles must not retain a private, submission or unapproved URL.`);
  } else if (status === "published" && !url) {
    fail(`${directory.label}: published status requires a direct public profile URL.`);
  } else if (status === "published") {
    const result = validateCitationUrl(directory.id, url);
    if (!result.ok) fail(`${directory.label}: ${result.reason}.`);
  }
}

if (configuredProfiles.length === CITATION_DIRECTORIES.length) {
  const allPending = configuredProfiles.every(({ status, url }) => status === "pending" && url === "");
  if (allPending) {
    note("all four citation profiles are [PENDING]; no directory listing is claimed or linked yet.");
  } else {
    note("configured links are limited to owner-declared published profiles with direct HTTPS URLs.");
  }
}

/* Negative and positive format cases keep the URL gate from becoming vacuous. */
const urlCases = [
  ["valid Yellow Pages profile", "yellowPagesMalaysia", "https://www.yellowpages.my/business/renovix-home-services", true],
  ["valid Hotfrog profile", "hotfrog", "https://www.hotfrog.com.my/company/renovix-id/renovix-home-services/kuala-lumpur", true],
  ["valid BusinessList profile", "businessList", "https://www.businesslist.my/company/123456/renovix-home-services", true],
  ["valid Facebook Page", "facebookLocal", "https://www.facebook.com/RenovixHomeServices", true],
  ["reject insecure URL", "hotfrog", "http://www.hotfrog.com.my/company/renovix", false],
  ["reject directory homepage", "businessList", "https://www.businesslist.my/", false],
  ["reject a search results URL", "yellowPagesMalaysia", "https://www.yellowpages.my/search/renovix", false],
  ["reject a mismatched host", "hotfrog", "https://www.facebook.com/RenovixHomeServices", false],
  ["reject Facebook share URL", "facebookLocal", "https://www.facebook.com/share/abc123/", false],
  ["reject URL credentials", "hotfrog", "https://owner:secret@www.hotfrog.com.my/company/renovix", false],
];
for (const [label, directory, url, expected] of urlCases) {
  const result = validateCitationUrl(directory, url);
  if (result.ok !== expected) {
    fail(`${label}: expected ${expected ? "accept" : "reject"}, got ${result.ok ? "accept" : result.reason}.`);
  }
}
note("URL rules accept direct profiles and reject home/search/share/insecure or mismatched destinations.");

/* Only published profiles may reach the public contact-page link block. */
const component = read("components/contact/LocalCitationLinks.tsx");
const contactPage = read("app/[lang]/contact/page.tsx");
for (const [label, condition] of [
  ["contact-page profile component", component.includes("export function LocalCitationLinks")],
  ["status-gated public links", /profile\.status !== "published" \|\| !profile\.url\.trim\(\)/.test(component)],
  ["empty-state omission", /if \(profiles\.length === 0\) return null/.test(component)],
  ["external links open through TrackedLink", component.includes("<TrackedLink") && component.includes("external")],
  ["contact page renders the optional block", contactPage.includes("<LocalCitationLinks lang={code} />")],
  ["contact links use no hardcoded profile URLs", !/https?:\/\//.test(component)],
]) {
  if (condition) note(`${label} is wired.`);
  else fail(`${label} is missing or no longer safe.`);
}

const schema = read("components/seo/schema.ts");
if (/localCitationProfiles|directory_profile_click/.test(schema)) {
  fail("local-directory URLs/events must not enter structured data.");
} else {
  note("directory listings stay out of LocalBusiness sameAs until the owner separately approves entity data.");
}

/* EN/MS/ZH copy stays complete, translated and usable for assistive technology. */
const dictionaryFiles = [
  ["en", "i18n/en.ts"],
  ["ms", "i18n/ms.ts"],
  ["zh", "i18n/zh.ts"],
];
const labelKeys = CITATION_DIRECTORIES.map(({ id }) => id);
const dictionaryStrings = {};
for (const [lang, path] of dictionaryFiles) {
  const dictionary = read(path);
  const start = dictionary.indexOf("    directoryProfiles: {");
  const end = start < 0 ? -1 : dictionary.indexOf("\n    },", start);
  if (start < 0 || end < 0) {
    fail(`${path} is missing contact.directoryProfiles.`);
    continue;
  }
  const block = dictionary.slice(start, end);
  for (const key of ["eyebrow", "title", "description", "openProfile", ...labelKeys]) {
    const match = block.match(new RegExp(`\\b${key}:\\s*"([^"]+)"`));
    if (!match) {
      fail(`${path} is missing a non-empty directoryProfiles.${key} translation.`);
    } else {
      dictionaryStrings[`${lang}.${key}`] = match[1];
    }
  }
  if (!block.includes("{directory}")) {
    fail(`${path} openProfile must keep the {directory} accessibility-label slot.`);
  }
}

for (const key of ["eyebrow", "title", "description", "openProfile"]) {
  const values = ["en", "ms", "zh"].map((lang) => dictionaryStrings[`${lang}.${key}`]).filter(Boolean);
  if (values.length === 3 && new Set(values).size !== 3) {
    fail(`contact.directoryProfiles.${key} must be genuinely localized in EN/MS/ZH.`);
  }
}
if (!read("i18n/types.ts").includes("directoryProfiles:")) {
  fail("i18n/types.ts must type the directory profile copy and all three translations.");
} else {
  note("contact-page directory labels and accessible names are typed and translated in EN/MS/ZH.");
}

/* Privacy-safe attribution for outbound profile clicks. */
const analytics = read("lib/analytics.ts");
const phase24 = read("PHASE_24_ANALYTICS.md");
const analyticsAudit = read("scripts/audit-analytics.mjs");
for (const [label, source, pattern] of [
  ["event type", analytics, /"directory_profile_click"/],
  ["closed directory context", analytics, /directory:\s*"yellow_pages_malaysia" \| "hotfrog" \| "businesslist" \| "facebook_local"/],
  ["sanitized directory context", analytics, /\["surface", "service", "subservice", "reason", "directory", "lang"\]/],
  ["event fired only with coarse profile context", component, /event="directory_profile_click"[\s\S]*?surface:\s*"contact_local_citations"[\s\S]*?directory:\s*profile\.analyticsId[\s\S]*?lang/],
  ["event included in analytics audit", analyticsAudit, /"directory_profile_click"/],
  ["event documented in Phase 24 catalogue", phase24, /\| `directory_profile_click` \|/],
]) {
  if (pattern.test(source)) note(`${label} is documented and enforced.`);
  else fail(`${label} is missing.`);
}

/* Owner runbook + CLI wiring; no false completion of the external task. */
const localSeoGuide = read("LOCAL_SEO_SETUP.md");
const ownerPending = read("PROJECT_OWNER_PENDING.md");
const plan = read("LEAD_GENERATION_PLAN.md");
const packageJson = read("package.json");
const readme = read("README.md");
const verifier = read("scripts/verify-citations.mjs");
const citationRules = read("scripts/citation-rules.mjs");

for (const [label, source, pattern] of [
  ["Yellow Pages Malaysia official destination", localSeoGuide, /https:\/\/www\.yellowpages\.my/],
  ["Hotfrog Malaysia official destination", localSeoGuide, /https:\/\/www\.hotfrog\.com\.my/],
  ["BusinessList.my official listing flow", localSeoGuide, /https:\/\/www\.businesslist\.my\/create-business-listing/],
  ["duplicate search/claim before creating", localSeoGuide, /search[\s\S]{0,160}(claim|existing listing)/i],
  ["paid listing requires owner approval", localSeoGuide, /paid[\s\S]{0,100}(owner|approval)|owner[\s\S]{0,100}paid/i],
  ["exact NAP is copied from verify:local-seo", localSeoGuide, /verify:local-seo/],
  ["direct URL is configured only after publication", localSeoGuide, /localCitationProfiles[\s\S]{0,300}published/i],
  ["external directory state remains NOT CLAIMED", localSeoGuide, /NOT CLAIMED[\s\S]{0,120}(directory|citation)/i],
  ["owner checklist points to the citation verifier", ownerPending, /verify:citations/],
  ["Task 3.3 remains pending", plan, /\*\*Task 3\.3: Local Malaysian Citations\*\* — \[PENDING\]/],
  ["README documents the verifier", readme, /npm run verify:citations/],
  ["package.json wires the verifier", packageJson, /"verify:citations":\s*"node scripts\/verify-citations\.mjs"/],
  ["offline verifier makes no network requests", verifier, !/\bfetch\s*\(|node:https?|XMLHttpRequest/.test(verifier)],
  ["URL validation is shared by audit and verifier", verifier, /validateCitationUrl/],
  ["the URL-rules helper makes no network requests", citationRules, !/\bfetch\s*\(|node:https?|XMLHttpRequest/.test(citationRules)],
]) {
  if (typeof pattern === "boolean" ? pattern : pattern.test(source)) note(`${label} is covered.`);
  else fail(`${label} is missing or inaccurate.`);
}

/* Opt-in live listing verification: read-only, offline-honest, write-free. */
const liveModule = read("scripts/citation-live-check.mjs");

for (const [label, ok] of [
  ["live mode is opt-in via --live", /process\.argv[\s\S]{0,120}--live/.test(verifier)],
  ["live checks are imported only behind the flag", /await import\(["']\.\/citation-live-check\.mjs["']\)/.test(verifier)],
  ["the default verification path still performs no network request", !/\bfetch\s*\(|node:https?|XMLHttpRequest/.test(verifier)],
  ["the live module performs the read-only GET", /\bfetch\s*\(/.test(liveModule)],
  ["the live module writes nothing and never touches the profile config", !/writeFileSync|appendFileSync|writeFile\(|createWriteStream|localCitationProfiles/.test(liveModule)],
  ["every live request is bounded by a timeout", /AbortController/.test(liveModule) && /setTimeout/.test(liveModule)],
  ["redirects are followed and the final URL is reported", /redirect:\s*"follow"/.test(liveModule) && /response\.url/.test(liveModule)],
  ["network failure is classified unverified, never pass or fail", /"unverified"/.test(liveModule)],
  ["the live check compares the published NAP (name, phone, address)", /checkNapPresence/.test(liveModule) && /phone/.test(liveModule) && /postalCode/.test(liveModule)],
  ["the live check never marks a listing published", !/status:\s*"published"|status\s*=\s*"published"/.test(liveModule)],
  ["the guide documents the live check and its honesty contract", /verify:citations -- --live/.test(localSeoGuide) && /NOT VERIFIED/.test(localSeoGuide)],
  ["README documents the live mode", /verify:citations -- --live/.test(readme)],
  ["the owner checklist points at the live check", /verify:citations -- --live/.test(ownerPending)],
]) {
  if (ok) note(`${label} is covered.`);
  else fail(`${label} is missing or inaccurate.`);
}

/* The live classifiers are pinned offline so this audit cannot pass vacuously. */
const nap = {
  name: "Renovix Home Services",
  phone: "+601159259521",
  streetAddress: "Jalan Kiara, Mont Kiara",
  postalCode: "50480",
};

const napCases = [
  [
    "a full NAP page is recognised",
    "<html><body>Renovix Home Services · +60 11-5925 9521 · Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur</body></html>",
    { name: "full", phone: true, address: true },
  ],
  [
    "the local phone format is recognised",
    "<html><body>Renovix Home Services · 011-5925 9521 · Jalan Kiara, Mont Kiara, 50480</body></html>",
    { name: "full", phone: true, address: true },
  ],
  [
    "a truncated business name is flagged",
    "<html><body>Renovix — handyman services · 011-5925 9521 · Jalan Kiara, Mont Kiara, 50480</body></html>",
    { name: "truncated", phone: true, address: true },
  ],
  [
    "a page without the business name is flagged",
    "<html><body>Best Renovation KL · 011-5925 9521 · Jalan Kiara, Mont Kiara, 50480</body></html>",
    { name: "missing", phone: true, address: true },
  ],
  [
    "a hidden phone is reported missing",
    "<html><body>Renovix Home Services · Jalan Kiara, Mont Kiara, 50480</body></html>",
    { name: "full", phone: false, address: true },
  ],
  [
    "a missing postcode is reported missing",
    "<html><body>Renovix Home Services · 011-5925 9521 · Jalan Kiara, Mont Kiara</body></html>",
    { name: "full", phone: true, address: false },
  ],
];
for (const [label, body, expected] of napCases) {
  const presence = checkNapPresence(body, nap);
  const actual = { name: presence.name, phone: presence.phone, address: presence.address };
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    fail(`${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}.`);
  }
}
note("NAP comparison recognises full/local phone formats and flags truncated names, hidden phones and missing address fragments.");

const liveDirectory = { label: "Hotfrog Malaysia", allowedHosts: ["hotfrog.com.my", "www.hotfrog.com.my"] };
const liveCases = [
  ["a failed request is unverified, never a failure", liveDirectory, { error: new Error("getaddrinfo ENOTFOUND") }, nap, "unverified"],
  ["a 404 is a failure", liveDirectory, { status: 404, finalUrl: "https://www.hotfrog.com.my/company/gone", body: "" }, nap, "fail"],
  ["a redirect off the directory host is a failure", liveDirectory, { status: 200, finalUrl: "https://www.facebook.com/RenovixHomeServices", body: "Renovix Home Services" }, nap, "fail"],
  ["a nameless page is a failure", liveDirectory, { status: 200, finalUrl: "https://www.hotfrog.com.my/company/other", body: "Other Renovation Sdn Bhd" }, nap, "fail"],
  ["a full-NAP page passes", liveDirectory, { status: 200, finalUrl: "https://www.hotfrog.com.my/company/renovix", body: "Renovix Home Services · +601159259521 · Jalan Kiara, Mont Kiara, 50480" }, nap, "pass"],
  ["a truncated name warns", liveDirectory, { status: 200, finalUrl: "https://www.hotfrog.com.my/company/renovix", body: "Renovix · 011-5925 9521 · Jalan Kiara, Mont Kiara, 50480" }, nap, "warn"],
  ["a hidden phone warns", liveDirectory, { status: 200, finalUrl: "https://www.hotfrog.com.my/company/renovix", body: "Renovix Home Services · Jalan Kiara, Mont Kiara, 50480" }, nap, "warn"],
];
for (const [label, directory, outcome, napCase, expected] of liveCases) {
  const result = classifyLiveOutcome(directory, outcome, napCase);
  if (result.verdict !== expected) {
    fail(`${label}: expected verdict ${expected}, got ${result.verdict} (${result.reasons.join("; ")}).`);
  }
}
note("live verdicts pinned: unreachable is unverified; broken, off-directory or nameless pages fail; truncated or partially visible NAP warns.");

if (failures.length > 0) {
  console.error("Renovix Home Services — local citation audit\n" + "=".repeat(58));
  for (const message of notes) console.log(`  OK  ${message}`);
  console.error("\nFAIL");
  for (const message of failures) console.error(`  ✗  ${message}`);
  process.exit(1);
}

console.log("Renovix Home Services — local citation audit\n" + "=".repeat(58));
for (const message of notes) console.log(`  OK  ${message}`);
console.log("\nPASS — repo support is ready; off-site submissions remain an owner action.");
