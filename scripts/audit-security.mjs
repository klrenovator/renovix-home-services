#!/usr/bin/env node
/**
 * Security audit — headers, secrets, quote-endpoint guards, client-bundle hygiene.
 * Static. Does not claim live email delivery or live TLS.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];
const pass = (m) => console.log(`  ✓ ${m}`);
const fail = (m) => {
  failures.push(m);
  console.log(`  ✗ ${m}`);
};

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".git" || ent.name === ".next") continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

console.log("Renovix Home Services — security audit");

const cfg = read("next.config.ts");
for (const needle of [
  "default-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "X-Frame-Options",
  "DENY",
  "Referrer-Policy",
  "strict-origin-when-cross-origin",
  "X-Content-Type-Options",
  "nosniff",
  "Permissions-Policy",
  "poweredByHeader: false",
]) {
  if (cfg.includes(needle)) pass(`next.config.ts contains ${needle}`);
  else fail(`next.config.ts missing ${needle}`);
}

const quote = read("app/api/quote/route.ts");
for (const needle of [
  "isAllowedOrigin",
  "QUOTE_MAX_BODY_BYTES",
  "rateLimit",
  "parseQuotePayload",
  'X-Robots-Tag": "noindex, nofollow"',
  'error: "unavailable"',
]) {
  if (quote.includes(needle) || quote.includes(needle.replace('": "', '": "'))) pass(`quote route: ${needle}`);
  else if (quote.includes("noindex, nofollow") && needle.includes("X-Robots-Tag")) pass("quote route: X-Robots-Tag noindex");
  else fail(`quote route missing ${needle}`);
}

const origin = read("lib/quote/origin.ts");
if (origin.includes("www.${siteHost}") || origin.includes("www.${siteHost}") || origin.includes("`www.${siteHost}`")) {
  pass("origin allow-list includes www alias");
} else if (origin.includes("www.")) pass("origin allow-list mentions www");
else fail("origin allow-list does not mention www");

const email = read("lib/quote/email.ts");
if (email.includes("process.env.RESEND_API_KEY") && !email.includes("NEXT_PUBLIC_RESEND")) {
  pass("Resend key is server-side only");
} else fail("Resend key handling unexpected");

const envExample = read(".env.example");
if (!/RESEND_API_KEY=.+/.test(envExample.split("\n").find((l) => l.startsWith("RESEND_API_KEY=")) || "RESEND_API_KEY=")) {
  pass(".env.example leaves RESEND_API_KEY empty");
} else fail(".env.example appears to contain a real RESEND_API_KEY");

const secretPatterns = [
  /re_[A-Za-z0-9]{20,}/,
  /sk_live_[A-Za-z0-9]+/,
  /AIza[0-9A-Za-z\-_]{20,}/,
];
let leaked = 0;
for (const file of walk(root)) {
  const rel = path.relative(root, file);
  if (rel.startsWith("scripts/") || rel.startsWith("node_modules/") || rel.includes(".next")) continue;
  if (!/\.(ts|tsx|js|mjs|json|html)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const re of secretPatterns) {
    const m = text.match(re);
    if (m) {
      fail(`possible secret in ${rel}: ${m[0]}`);
      leaked += 1;
    }
  }
}
if (leaked === 0) pass("no hardcoded API keys / live secrets in app source");

const gitignore = read(".gitignore");
if (gitignore.includes(".env") && gitignore.includes("!.env.example")) pass(".gitignore covers env files");
else fail(".gitignore env coverage missing");

if (failures.length) {
  console.log(`\nFAIL — ${failures.length} issue(s)`);
  process.exit(1);
}
console.log("\nPASS — security invariants hold.");
