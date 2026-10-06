#!/usr/bin/env node
/**
 * Lead-generation Task 3.2 — Google Search Console readiness check.
 *
 *   npm run verify:search-console          # repository wiring only (no network)
 *   npm run verify:search-console -- --live  # also fetch robots.txt, sitemap.xml
 *                                            # and the verification file
 *
 * Google Search Console cannot be driven from this repository: submitting a
 * sitemap, reading its processing status and seeing coverage/impressions all
 * require the owner's own Google account. What *can* be checked is the half
 * that lives in the code — and this script checks it, then prints the exact
 * owner steps that remain (`SEARCH_CONSOLE_SETUP.md`).
 *
 * Repository checks (always run, no network):
 *   - the HTML-file verification token in `public/` is present and shaped like
 *     the one Search Console issues, and is reported with the URL Google
 *     fetches to read it;
 *   - `app/robots.ts` allows crawling and names exactly one sitemap, derived
 *     from `lib/sitemap.ts` (no hand-written URL that can drift);
 *   - `lib/sitemap.ts` builds that URL from the single business source
 *     (`data/site.ts`), so the submitted URL and the served file agree;
 *   - `app/sitemap.ts` is the site's only sitemap route, with hreflang
 *     alternates and the build-time coverage/search guards;
 *   - the retired per-language sitemap URLs still redirect (crawlers that
 *     learned them before the consolidation never see a 404);
 *   - the owner runbook exists.
 *
 * `--live` additionally fetches the deployed site (read-only, no credentials)
 * to prove the three things Google itself fetches: `/robots.txt` names the
 * sitemap, `/sitemap.xml` returns 200 `application/xml` with the expected
 * URL set, and the verification file serves its token.
 *
 * Honesty rules:
 *   - Whether the sitemap is *submitted* and *processed* in Search Console is
 *     **not claimed** here — only the owner's Search Console account can show
 *     that (§3 of the runbook).
 *   - Offline `--live` runs say so and exit 0: "could not check" is never
 *     reported as a pass or a failure.
 *   - Exit 1 is reserved for defects this script actually observed (a missing
 *     token, a sitemap that 404s, robots.txt naming a different sitemap).
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const read = (path) => readFileSync(join(ROOT, path), "utf8");
const readIfExists = (path) => (existsSync(join(ROOT, path)) ? read(path) : null);

const live = process.argv.slice(2).includes("--live");
const lines = [];
const defects = [];

function line(text = "") {
  lines.push(text);
}
function ok(message) {
  line(`  ✓ ${message}`);
}
function bad(message) {
  defects.push(message);
  line(`  ✗ ${message}`);
}
function skip(message) {
  line(`  – ${message}`);
}

line("Renovix Home Services — Google Search Console readiness check");
line(live ? "(repository wiring + live fetch of the deployed site)" : "(repository wiring only; add --live to fetch the deployed site)");
line("");

/* ------------------------------------------------------------------------ */
/* 1. The verification file                                                  */
/* ------------------------------------------------------------------------ */

line("1. Site verification (HTML file method)");

const publicDir = join(ROOT, "public");
const verificationFiles = existsSync(publicDir)
  ? readdirSync(publicDir).filter((name) => /^google.*\.html$/.test(name))
  : [];

const siteSource = read("data/site.ts");
const siteUrl = siteSource.match(/^\s*url:\s*"(https:\/\/[^"]+)",\s*$/m)?.[1] ?? null;

if (siteUrl === null) {
  bad("data/site.ts no longer declares the site URL — the verification URL cannot be built");
} else {
  ok(`site URL: ${siteUrl}`);
}

let verificationToken = null;
let verificationFileName = null;

if (verificationFiles.length === 0) {
  bad("no Google verification HTML file in public/ — Search Console's HTML-file method would fail");
} else {
  for (const name of verificationFiles) {
    const body = readFileSync(join(publicDir, name), "utf8").trim();
    const match = body.match(/^google-site-verification:\s*(\S+)$/);
    if (!match) {
      bad(`public/${name} does not contain a "google-site-verification: <token>" line`);
      continue;
    }
    if (/^(x+|X+|0+)$/.test(match[1])) {
      bad(`public/${name} holds a placeholder token — Search Console will never accept it`);
      continue;
    }
    verificationToken = match[1];
    verificationFileName = name;
    ok(`verification file: public/${name} (token ${match[1].length} chars)`);
    if (siteUrl) ok(`Google fetches: ${siteUrl}/${name}`);
  }
}

/* ------------------------------------------------------------------------ */
/* 2. robots.txt names exactly one sitemap                                   */
/* ------------------------------------------------------------------------ */

line("");
line("2. robots.txt → sitemap reference");

const robots = read("app/robots.ts");
if (!/sitemap:\s*mainSitemapUrl\(\)/.test(robots)) {
  bad("app/robots.ts no longer references mainSitemapUrl() — the sitemap line could drift from the file");
} else {
  ok("app/robots.ts points at mainSitemapUrl() (one sitemap, derived, no hand-written URL)");
}
if (/userAgent:\s*"\*"/.test(robots) && /allow:\s*"\//.test(robots)) {
  ok('robots.txt allows every crawler ("*" → allow "/")');
} else {
  bad("app/robots.ts no longer allows all crawlers — that would un-index the site");
}
/* A real directive line — not the explanatory comment that names the field. */
if (/^\s*host:\s*\S/im.test(robots)) {
  bad("app/robots.ts re-introduced a Host: directive (not part of RFC 9309; Google ignores it)");
} else {
  ok("no Host: directive (canonical-host choice belongs to hosting settings)");
}

/* ------------------------------------------------------------------------ */
/* 3. The sitemap URL and its single generator                               */
/* ------------------------------------------------------------------------ */

line("");
line("3. Sitemap URL and generator");

const sitemapLib = read("lib/sitemap.ts");
if (/return `\$\{siteConfig\.url\}\/sitemap\.xml`;/.test(sitemapLib)) {
  ok("lib/sitemap.ts builds the sitemap URL from data/site.ts (the single business source)");
} else {
  bad("lib/sitemap.ts no longer builds mainSitemapUrl() from siteConfig.url");
}
if (siteUrl) {
  ok(`sitemap submitted to Search Console: ${siteUrl}/sitemap.xml`);
}

const sitemapRoute = readIfExists("app/sitemap.ts");
if (sitemapRoute === null) {
  bad("app/sitemap.ts is missing — /sitemap.xml would 404");
} else {
  ok("app/sitemap.ts serves /sitemap.xml (native metadata route)");
  if (/alternates/.test(sitemapRoute) && /x-default/.test(sitemapRoute)) {
    ok("every entry carries hreflang alternates + x-default");
  } else {
    bad("app/sitemap.ts no longer emits hreflang alternates");
  }
  if (/assertCoverageInSync\(\)/.test(sitemapRoute) && /runSearchAudits/.test(sitemapRoute)) {
    ok("build-time guards throw rather than emit stale URLs (coverage + search audits)");
  } else {
    bad("app/sitemap.ts lost its build-time coverage/search guards");
  }
}

const config = read("next.config.ts");
for (const lang of ["en", "ms", "zh"]) {
  const pattern = new RegExp(`source:\\s*"/sitemap/${lang}\\.xml",\\s*destination:\\s*"/sitemap\\.xml"`);
  if (!pattern.test(config)) {
    bad(`next.config.ts no longer redirects the retired /sitemap/${lang}.xml to /sitemap.xml`);
  }
}
if (["en", "ms", "zh"].every((lang) => new RegExp(`/sitemap/${lang}\\.xml`).test(config))) {
  ok("the three retired per-language sitemap URLs still 308 to /sitemap.xml");
}

/* ------------------------------------------------------------------------ */
/* 4. The owner runbook exists                                               */
/* ------------------------------------------------------------------------ */

line("");
line("4. Owner runbook");

if (readIfExists("SEARCH_CONSOLE_SETUP.md") === null) {
  bad("SEARCH_CONSOLE_SETUP.md is missing — the Search Console steps have nowhere to live");
} else {
  ok("SEARCH_CONSOLE_SETUP.md present (property check → sitemap submission → processing → URL Inspection → GSC↔GA4)");
}

/* ------------------------------------------------------------------------ */
/* 5. Live fetch (optional, read-only)                                       */
/* ------------------------------------------------------------------------ */

async function get(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "renovix-search-console-check/1.0 (+https://renovixhomeservices.my/; read-only readiness verification)",
      },
    });
    return { status: response.status, ok: response.ok, type: response.headers.get("content-type") ?? "", body: await response.text() };
  } finally {
    clearTimeout(timer);
  }
}

if (live) {
  line("");
  line("5. Live fetch of the deployed site");

  if (!siteUrl) {
    bad("site URL unknown — cannot run the live checks");
  } else {
    let reachable = true;

    try {
      const robotsTxt = await get(`${siteUrl}/robots.txt`);
      if (robotsTxt.status !== 200) {
        bad(`/robots.txt returned ${robotsTxt.status}`);
      } else if (!robotsTxt.body.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
        bad(`/robots.txt does not name ${siteUrl}/sitemap.xml`);
      } else {
        ok("/robots.txt returns 200 and names the canonical sitemap");
      }

      const sitemap = await get(`${siteUrl}/sitemap.xml`);
      if (sitemap.status !== 200) {
        bad(`/sitemap.xml returned ${sitemap.status}`);
      } else if (!/xml/i.test(sitemap.type)) {
        bad(`/sitemap.xml served as ${sitemap.type || "an unknown content type"}, not XML`);
      } else {
        const locations = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
        const perLanguage = { en: 0, ms: 0, zh: 0 };
        for (const location of locations) {
          for (const lang of Object.keys(perLanguage)) {
            if (location.startsWith(`${siteUrl}/${lang}/`)) perLanguage[lang] += 1;
          }
        }
        ok(
          `/sitemap.xml returns 200 ${sitemap.type.split(";")[0]} with ${locations.length} URLs` +
            ` (en ${perLanguage.en} / ms ${perLanguage.ms} / zh ${perLanguage.zh})`,
        );
        if (locations.length === 0) bad("/sitemap.xml contains no <loc> entries");
        if (!/<lastmod>/.test(sitemap.body)) bad("/sitemap.xml carries no <lastmod> dates");
      }

      if (verificationFileName) {
        const verification = await get(`${siteUrl}/${verificationFileName}`);
        if (verification.status !== 200) {
          bad(`verification file ${siteUrl}/${verificationFileName} returned ${verification.status}`);
        } else if (verificationToken && !verification.body.includes(verificationToken)) {
          bad("the served verification file does not contain the token from the repository copy");
        } else {
          ok("the served verification file still contains its token (Search Console can re-check anytime)");
        }
      }
    } catch (error) {
      reachable = false;
      const reason = error?.cause?.code ?? error?.name ?? String(error);
      skip(`could not reach ${siteUrl} (${reason}) — live checks skipped, NOT a pass or a failure`);
      skip("re-run --live from a machine that can open the site in a browser");
    }

    if (!reachable) {
      line("");
      line("Live verdict: unknown (offline). The repository checks above still apply.");
    }
  }
}

/* ------------------------------------------------------------------------ */
/* 6. What only the owner can do                                             */
/* ------------------------------------------------------------------------ */

line("");
line("Still an owner action (NOT CLAIMED by this script)");
line("  - Search Console → Sitemaps: confirm /sitemap.xml is listed with status");
line("    \"Success\" and a discovered-URL count (SEARCH_CONSOLE_SETUP.md §3).");
line("  - URL Inspection on the money pages (home, /quote/, a service, an area) →");
line("    Request indexing where Google has not crawled them yet.");
line("  - link Search Console to GA4 (Search Console → Settings → Associations) so");
line("    queries and conversions can be read together.");
line("Nothing in this repository can read your Search Console account, and no");
line("script claims the sitemap is submitted or processed.");

line("");
if (defects.length > 0) {
  line(`Result: ${defects.length} defect(s) found — see the ✗ lines above.`);
} else {
  line("Result: repository wiring is ready. Run --live (and read the runbook) before");
  line("treating the sitemap as verifiable end-to-end.");
}

console.log(lines.join("\n"));
process.exit(defects.length > 0 ? 1 : 0);
