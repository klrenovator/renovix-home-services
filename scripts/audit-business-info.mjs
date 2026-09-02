#!/usr/bin/env node
/**
 * Business information audit for Renovix Home Services.
 *
 * Verifies that the verified business facts are the ONLY business facts in the
 * codebase: one phone / WhatsApp number, one email, one address, one set of
 * opening hours, and no placeholder, sample or conflicting values. It also
 * checks the structured-data builder for the required LocalBusiness fields
 * and for the absence of invented SEO signals (sameAs, ratings, geo, …).
 *
 * Run with: npm run audit:business
 *
 * English display strings are allowed to differ from the official English
 * form only where a language needs a localized presentation (Malay, Chinese);
 * those localized forms are checked explicitly against the approved values.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");

/** The verified business facts (the only ones the business has supplied). */
const OFFICIAL = {
  name: "Renovix Home Services",
  phone: "+601159259521",
  whatsappDigits: "601159259521",
  email: "renovixhomeservices@gmail.com",
  address:
    "Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
  hours: {
    en: "9:00 AM – 6:00 PM",
    ms: "9:00 pagi – 6:00 petang",
    zh: "上午 9:00 – 下午 6:00",
  },
  opens: "09:00",
  closes: "18:00",
};

const SOURCE_DIRS = ["app", "components", "data", "i18n", "lib"];
const SOURCE_EXTENSIONS = new Set([".ts", ".tsx"]);
const SITE_FILE = "data/site.ts";
const SCHEMA_FILE = "components/seo/schema.ts";

/** Strings that would claim hours or capabilities the business never stated. */
const FORBIDDEN_HOURS_CLAIMS = [
  "24/7",
  "24 hours",
  "24-hour",
  "open 24",
  "seven days a week",
  "7 days a week",
  "around the clock",
  "overnight service",
  "emergency service",
];

/** Business-contact placeholders from the pre-Phase-10 era. */
const FORBIDDEN_PLACEHOLDERS = [
  "[PHONE NUMBER]",
  "[WHATSAPP NUMBER]",
  "[EMAIL]",
  "[ADDRESS]",
  "[BUSINESS HOURS]",
  "[TELEPHONE]",
];

/** Form input examples for the visitor's OWN email — not business contact info. */
const FORM_EMAIL_PLACEHOLDERS = ["@example.com", "@contoh.com"];

/** Structured data that must exist and must NOT exist in the schema builder. */
const SCHEMA_REQUIRED = [
  { label: "LocalBusiness type", pattern: /"LocalBusiness"/ },
  { label: "telephone property", pattern: /telephone\s*:/ },
  { label: "email property", pattern: /email\s*:/ },
  { label: "PostalAddress", pattern: /"PostalAddress"/ },
  { label: "addressLocality", pattern: /addressLocality\s*:/ },
  { label: "addressRegion", pattern: /addressRegion\s*:/ },
  { label: "postalCode", pattern: /postalCode\s*:/ },
  { label: "addressCountry", pattern: /addressCountry\s*:/ },
  { label: "OpeningHoursSpecification", pattern: /"OpeningHoursSpecification"/ },
  { label: "areaServed", pattern: /areaServed\s*:/ },
];
const SCHEMA_FORBIDDEN = [
  { label: "aggregateRating", pattern: /aggregateRating\s*:/ },
  { label: "review", pattern: /review\s*:/ },
  { label: "sameAs", pattern: /sameAs\s*:/ },
  { label: "geo", pattern: /geo\s*:/ },
  { label: "priceRange", pattern: /priceRange\s*:/ },
];

const errors = [];
const notes = [];

function fail(message) {
  errors.push(message);
}

function note(message) {
  notes.push(message);
}

function collectSourceFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      files.push(...collectSourceFiles(path));
    } else if (SOURCE_EXTENSIONS.has(entry.slice(entry.lastIndexOf(".")))) {
      files.push(path);
    }
  }
  return files;
}

const sourceFiles = SOURCE_DIRS.flatMap((dir) => collectSourceFiles(join(ROOT, dir)));

if (sourceFiles.length === 0) {
  fail("No source files found to audit.");
}

const sourceText = new Map();
for (const file of sourceFiles) {
  sourceText.set(file, readFileSync(file, "utf8"));
}
const siteSource = sourceText.get(join(ROOT, SITE_FILE)) ?? "";
const schemaSource = sourceText.get(join(ROOT, SCHEMA_FILE)) ?? "";

/* ------------------------------------------------------------------ */
/* 1. data/site.ts — the single source of truth matches the official
 *    business facts.                                                     */
/* ------------------------------------------------------------------ */
for (const [label, value] of [
  ["business name", OFFICIAL.name],
  ["phone number", OFFICIAL.phone],
  ["whatsapp number", OFFICIAL.phone],
  ["email", OFFICIAL.email],
  ["address", OFFICIAL.address],
  ["opening time", OFFICIAL.opens],
  ["closing time", OFFICIAL.closes],
]) {
  if (!siteSource.includes(value)) {
    fail(`data/site.ts does not contain the verified ${label}: ${value}`);
  }
}

for (const target of ["tel:", "wa.me", "mailto:"]) {
  if (!siteSource.includes(target)) {
    fail(`data/site.ts is missing the ${target} link builder.`);
  }
}

note("1. data/site.ts holds the verified name, phone/WhatsApp, email, address and hours.");

/* ------------------------------------------------------------------ */
/* 2. Phone scan — any number that is not the verified number (in any
 *    common formatting) is conflicting business information.             */
/* ------------------------------------------------------------------ */
const phonePattern = /(?:\+?\d[\d\s()-]{7,})/g;
const foundPhones = new Set();

for (const text of sourceText.values()) {
  for (const match of text.matchAll(phonePattern)) {
    // Decimal points appear in SVG path coordinates and version numbers,
    // never in a phone number, so they filter out non-phone digit runs.
    if (match[0].includes(".")) continue;
    const digits = match[0].replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 15) continue;
    foundPhones.add(digits);
  }
}

for (const digits of foundPhones) {
  if (digits !== OFFICIAL.whatsappDigits) {
    fail(
      `Phone number ${digits} appears in source files but only ` +
        `${OFFICIAL.phone} (WhatsApp: ${OFFICIAL.whatsappDigits}) is verified.`,
    );
  }
}

/* ------------------------------------------------------------------ */
/* 3. Email scan.                                                        */
/* ------------------------------------------------------------------ */
const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
const foundEmails = new Set();

for (const text of sourceText.values()) {
  for (const match of text.matchAll(emailPattern)) {
    foundEmails.add(match[0]);
  }
}

for (const email of foundEmails) {
  if (email === OFFICIAL.email) continue;
  if (FORM_EMAIL_PLACEHOLDERS.some((suffix) => email.endsWith(suffix))) {
    note(`Form input example allowed (visitor's own email): ${email}`);
    continue;
  }
  fail(
    `Email address ${email} appears in source files but only ` +
      `${OFFICIAL.email} is verified.`,
  );
}

/* ------------------------------------------------------------------ */
/* 4. Opening-hours claims.                                              */
/* ------------------------------------------------------------------ */
for (const [file, text] of sourceText) {
  if (relative(ROOT, file) === SITE_FILE) continue; // site.ts comments only
  for (const phrase of FORBIDDEN_HOURS_CLAIMS) {
    if (text.includes(phrase)) {
      fail(`Conflicting opening-hours claim "${phrase}" in ${relative(ROOT, file)}.`);
    }
  }
}

for (const [lang, value] of Object.entries(OFFICIAL.hours)) {
  const dictionary = sourceText.get(join(ROOT, `i18n/${lang}.ts`)) ?? "";
  if (!dictionary.includes(value)) {
    fail(`i18n/${lang}.ts is missing the approved business-hours string: ${value}`);
  }
}

/* ------------------------------------------------------------------ */
/* 5. Placeholders.                                                      */
/* ------------------------------------------------------------------ */
for (const [file, text] of sourceText) {
  for (const placeholder of FORBIDDEN_PLACEHOLDERS) {
    if (text.includes(placeholder)) {
      fail(`Business placeholder "${placeholder}" remains in ${relative(ROOT, file)}.`);
    }
  }
}

/* ------------------------------------------------------------------ */
/* 6. Structured data.                                                   */
/* ------------------------------------------------------------------ */
for (const { label, pattern } of SCHEMA_REQUIRED) {
  if (!pattern.test(schemaSource)) {
    fail(`Structured-data builder is missing required ${label}.`);
  }
}
for (const { label, pattern } of SCHEMA_FORBIDDEN) {
  if (pattern.test(schemaSource)) {
    fail(`Structured-data builder contains an unverified SEO signal: ${label}`);
  }
}

/* ------------------------------------------------------------------ */
/* 7. Brand consistency.                                                 */
/* ------------------------------------------------------------------ */
for (const [file, text] of sourceText) {
  if (/(KL Renovator|KL Servis Rumah|Servis Rumah KL)/i.test(text)) {
    fail(`Another business name appears in ${relative(ROOT, file)}.`);
  }
}

/* ------------------------------------------------------------------ */
/* Report                                                               */
/* ------------------------------------------------------------------ */
console.log("Renovix Home Services — business information audit");
console.log(`Scanned ${sourceFiles.length} source files.`);
for (const line of notes) console.log(`  OK  ${line}`);

if (errors.length > 0) {
  console.error(`\nFAIL (${errors.length} issue${errors.length === 1 ? "" : "s"}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log("\nPASS — no conflicting, placeholder or invented business information found.");
