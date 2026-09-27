#!/usr/bin/env node
/**
 * Lead-generation Task 2.1 — local lead-notification configuration check.
 *
 * Verifies that the quote-form email pipeline *can* deliver from the current
 * environment, without sending anything:
 *
 *   npm run verify:quote-email
 *
 * - Reads RESEND_API_KEY, QUOTE_FROM_EMAIL and QUOTE_NOTIFICATION_EMAIL from
 *   the process environment, falling back to `.env.local` / `.env` files in
 *   the repository root when the variables are not exported (same precedence
 *   Next.js uses locally: process env wins, then `.env.local`, then `.env`).
 * - Format-checks each value (key presence + `re_` shape, From-address
 *   parseability, optional To-address validity).
 * - Reports CONFIGURED or NOT CONFIGURED with per-variable next steps that
 *   point at QUOTE_EMAIL_SETUP.md.
 *
 * This script is intentionally non-destructive and informational:
 *
 * - It makes no network calls and sends no email. End-to-end delivery is
 *   verified only by submitting a real quote on the deployed site
 *   (QUOTE_EMAIL_SETUP.md §5).
 * - It never prints secret values. At most the key length and its `re_`
 *   prefix shape are shown.
 * - It always exits 0 so it can run in CI as information without failing a
 *   build — an unconfigured checkout is the honest `503 + WhatsApp
 *   fallback` state, not a defect.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");

/** Minimal `KEY=value` reader for local env files (no dependency). */
function readEnvFile(name) {
  const path = join(ROOT, name);
  if (!existsSync(path)) return {};
  const values = {};
  for (const rawLine of readFileSync(path, "utf8").split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const index = line.indexOf("=");
    const key = line.slice(0, index).trim();
    let value = line.slice(index + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (key && !(key in values)) values[key] = value;
  }
  return values;
}

const dotEnv = readEnvFile(".env");
const dotEnvLocal = readEnvFile(".env.local");

function env(name) {
  const fromProcess = process.env[name];
  if (fromProcess !== undefined) return { value: fromProcess, source: "process environment" };
  if (dotEnvLocal[name] !== undefined) return { value: dotEnvLocal[name], source: ".env.local" };
  if (dotEnv[name] !== undefined) return { value: dotEnv[name], source: ".env" };
  return { value: "", source: "unset" };
}

/** Same shape the server accepts: `Name <addr>` or a bare address. */
function parseFromAddress(value) {
  const angled = value.match(/^(.+)<([^>]+)>$/);
  const email = (angled ? angled[2] : value).trim();
  return { email, hasDisplayName: Boolean(angled) };
}

function isValidEmail(value) {
  if (!value || value.length > 254 || value.includes("..") || value.includes(" ")) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

/** The documented default inbox, read from the single business source. */
function defaultInbox() {
  try {
    const site = readFileSync(join(ROOT, "data", "site.ts"), "utf8");
    const match = site.match(/email:\s*"([^"]+)"/);
    if (match) return match[1];
  } catch {
    // Fall through to the documented literal.
  }
  return "renovixhomeservices@gmail.com";
}

const fallbackInbox = defaultInbox();
const lines = [];
const problems = [];

lines.push("Renovix Home Services — quote email configuration check");
lines.push("(format check only: sends nothing, prints no secrets)");
lines.push("");

/* --- RESEND_API_KEY (required, server-side only) --- */
const apiKey = env("RESEND_API_KEY");
const apiKeyValue = apiKey.value.trim();
if (!apiKeyValue) {
  problems.push("RESEND_API_KEY is missing");
  lines.push(`[missing] RESEND_API_KEY (${apiKey.source})`);
  lines.push("  Next: create a Sending-only key in Resend → API Keys, set it in");
  lines.push("  Vercel → Project → Settings → Environment Variables (Production),");
  lines.push("  then redeploy. See QUOTE_EMAIL_SETUP.md §3 steps 3–4.");
} else {
  const looksResend = apiKeyValue.startsWith("re_");
  const shape = looksResend ? `re_… (${apiKeyValue.length} chars)` : `${apiKeyValue.length} chars, unexpected prefix`;
  if (!looksResend || apiKeyValue.length < 20) {
    problems.push("RESEND_API_KEY has an unexpected shape");
    lines.push(`[check]  RESEND_API_KEY (${apiKey.source}): set as ${shape}`);
    lines.push("  Next: Resend keys start with `re_` and are long random strings —");
    lines.push("  re-copy the key from Resend → API Keys (it is shown once).");
  } else {
    lines.push(`[ok]     RESEND_API_KEY (${apiKey.source}): set as ${shape}`);
  }
  if (process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    problems.push("NEXT_PUBLIC_RESEND_API_KEY must not exist");
    lines.push("  WARNING: NEXT_PUBLIC_RESEND_API_KEY is set — the key would ship to");
    lines.push("  browsers. Delete that variable; only RESEND_API_KEY (server-side) may hold it.");
  }
}
lines.push("");

/* --- QUOTE_FROM_EMAIL (required, verified domain) --- */
const from = env("QUOTE_FROM_EMAIL");
const fromValue = from.value.trim();
if (!fromValue) {
  problems.push("QUOTE_FROM_EMAIL is missing");
  lines.push(`[missing] QUOTE_FROM_EMAIL (${from.source})`);
  lines.push("  Next: set a sender identity on the Resend-verified domain, e.g.");
  lines.push("  `Renovix Home Services <noreply@renovixhomeservices.my>`.");
  lines.push("  See QUOTE_EMAIL_SETUP.md §3 steps 2 + 4.");
} else {
  const { email } = parseFromAddress(fromValue);
  if (!isValidEmail(email)) {
    problems.push("QUOTE_FROM_EMAIL is not a valid address");
    lines.push(`[check]  QUOTE_FROM_EMAIL (${from.source}): ${fromValue}`);
    lines.push("  Next: use `Name <address@verified-domain>` or a bare address on the");
    lines.push("  domain verified in Resend → Domains.");
  } else {
    const domain = email.split("@")[1].toLowerCase();
    lines.push(`[ok]     QUOTE_FROM_EMAIL (${from.source}): ${fromValue}`);
    if (domain === "gmail.com" || domain === "googlemail.com") {
      problems.push("QUOTE_FROM_EMAIL uses a freemail domain Resend cannot verify");
      lines.push("  WARNING: Resend cannot verify gmail.com — the From domain must be a");
      lines.push("  domain the business controls (e.g. renovixhomeservices.my).");
      lines.push("  See QUOTE_EMAIL_SETUP.md §3 step 2.");
    } else {
      lines.push(`  Domain to verify in Resend → Domains: ${domain}`);
    }
  }
}
lines.push("");

/* --- QUOTE_NOTIFICATION_EMAIL (optional, defaults to business inbox) --- */
const to = env("QUOTE_NOTIFICATION_EMAIL");
const toValue = to.value.trim();
if (!toValue) {
  lines.push(`[ok]     QUOTE_NOTIFICATION_EMAIL (${to.source}): unset → defaults to ${fallbackInbox}`);
} else if (!isValidEmail(toValue)) {
  problems.push("QUOTE_NOTIFICATION_EMAIL is not a valid address");
  lines.push(`[check]  QUOTE_NOTIFICATION_EMAIL (${to.source}): ${toValue}`);
  lines.push(`  Next: set a valid inbox, or unset it to use the default ${fallbackInbox}.`);
} else {
  lines.push(`[ok]     QUOTE_NOTIFICATION_EMAIL (${to.source}): ${toValue}`);
}
lines.push("");

/* --- Verdict --- */
if (problems.length === 0) {
  lines.push("Result: CONFIGURED — the running app can attempt Resend delivery.");
  lines.push("Next: prove end-to-end delivery with one real quote on production");
  lines.push("(QUOTE_EMAIL_SETUP.md §5) before calling the pipeline live.");
} else {
  lines.push("Result: NOT CONFIGURED — quote submissions honestly answer");
  lines.push("`503 unavailable` and the form offers its WhatsApp fallback.");
  lines.push(`Open items (${problems.length}):`);
  for (const problem of problems) lines.push(`  - ${problem}`);
  lines.push("Next: follow QUOTE_EMAIL_SETUP.md §3, redeploy, and re-run this check.");
}

console.log(lines.join("\n"));
