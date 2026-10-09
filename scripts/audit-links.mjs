#!/usr/bin/env node
/**
 * Whole-corpus internal-link audit — Renovix Home Services.
 *
 * Implements the internal-link auditing script mandated by the master brief
 * (Sections 11 + 19). It talks to a running production server (`next start`,
 * default http://127.0.0.1:3000, override with QA_BASE) and crawls every URL in
 * the served sitemap — no sampling — then reports:
 *
 *   1. Orphan indexable pages (sitemap URL with no inbound internal link from
 *      another page)                                    — FAIL
 *   2. Broken internal links (distinct internal target not HTTP 200)
 *                                                          — FAIL
 *   3. Internal links pointing at redirected or noncanonical URLs (verbatim
 *      href is not the canonical serving form; probed with redirects manual)
 *                                                          — FAIL
 *   4. Invalid internal destinations (target neither served nor a known
 *      non-page asset)                                     — FAIL
 *   5. Missing breadcrumbs (no BreadcrumbList JSON-LD; the three language
 *      homepages are the breadcrumb roots and are exempt) — FAIL
 *   6. Pages with insufficient relevant internal links (fewer than 3 inbound
 *      links from other pages)                            — WARN (review list)
 *   7. Duplicate or excessively repetitive anchors (non-descriptive anchor
 *      text; one anchor text reused for many distinct targets)
 *                                                          — FAIL / WARN
 *   8. Unexpected external links (external <a href> outside the allowlist
 *      derived from data/site.ts)                          — FAIL
 *   9. Excessive navigation depth (same-language BFS click depth from the
 *      language homepage; reachability of every sitemap URL)
 *                                                          — FAIL / WARN
 *
 * Deterministic defects fail; ambiguous signals are warnings with a capped
 * review list. Nothing is "fixed" automatically — this script only reports.
 *
 * Run with: npm run audit:links   (after npm run build && next start)
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const BASE = process.env.QA_BASE || "http://127.0.0.1:3000";
const CANONICAL_HOST = "https://renovixhomeservices.my";
const LANGUAGES = ["en", "ms", "zh"];

const failures = [];
const warnings = [];
const passes = [];

function pass(msg) {
  passes.push(msg);
  console.log(`  ✓ ${msg}`);
}
function fail(msg) {
  failures.push(msg);
  console.log(`  ✗ ${msg}`);
}
function warn(msg) {
  warnings.push(msg);
  console.log(`  ⚠ ${msg}`);
}

async function fetchRes(path, opts = {}) {
  const url = path.startsWith("http") ? path : `${BASE}${path}`;
  return fetch(url, { redirect: "manual", ...opts });
}

async function fetchText(path) {
  const res = await fetchRes(path);
  const text = await res.text();
  return { res, text, status: res.status };
}

/** Batched map over items, preserving order, `size` concurrent requests. */
async function batch(items, size, fn) {
  const out = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: size }, worker));
  return out;
}

/* ------------------------------------------------------------------------ */
/* External-link allowlist, derived from the single source of truth.         */
/* ------------------------------------------------------------------------ */

/**
 * Reads the verified contact values out of `data/site.ts` so the allowlist
 * tracks the registry instead of a second hand-copied list. The site's only
 * legitimate external anchors are WhatsApp deep links, the `tel:` call link,
 * the `mailto:` link and the two configured social profiles.
 */
function externalAllowlist() {
  const site = readFileSync(join(ROOT, "data/site.ts"), "utf8");
  const grab = (key) => {
    const m = site.match(new RegExp(`${key}:\\s*"([^"]+)"`));
    return m ? m[1] : null;
  };
  const phone = grab("phone");
  const whatsapp = grab("whatsapp");
  const email = grab("email");
  const facebookUrl = grab("facebookUrl");
  const instagramUrl = grab("instagramUrl");
  const missing = [
    ["phone", phone],
    ["whatsapp", whatsapp],
    ["email", email],
    ["facebookUrl", facebookUrl],
    ["instagramUrl", instagramUrl],
  ].filter(([, v]) => !v);
  if (missing.length > 0) {
    throw new Error(`data/site.ts no longer publishes: ${missing.map(([k]) => k).join(", ")}`);
  }
  const digits = whatsapp.replace(/[^\d]/g, "");
  return {
    phone,
    whatsappDigits: digits,
    email,
    facebookUrl,
    instagramUrl,
    /** True when the external href is one the business itself publishes. */
    isAllowed(href) {
      if (href === `tel:${phone}`) return true;
      if (href === `mailto:${email}`) return true;
      if (href === facebookUrl || href === instagramUrl) return true;
      // WhatsApp deep links carry a pre-filled ?text= message.
      if (href === `https://wa.me/${digits}`) return true;
      if (href.startsWith(`https://wa.me/${digits}?`)) return true;
      return false;
    },
  };
}

/* ------------------------------------------------------------------------ */
/* Href classification and canonical-form rules                              */
/* ------------------------------------------------------------------------ */

/** Static/utility targets that are deliberately outside the sitemap. */
const NON_PAGE_HREFS = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/icon.svg",
  "/ai/business.json",
  "/ai/pricing.json",
  "/favicon.ico",
]);

/** The only route whose links may legitimately carry a query string. */
const QUERY_ALLOWED_PATHS = new Set(["/en/search/", "/ms/search/", "/zh/search/"]);

/**
 * Classifies a raw href. Internal links are root-relative or absolute URLs on
 * the canonical host (www and http forms are still "internal" but are checked
 * against the canonical form below).
 */
function classifyHref(href) {
  if (href.startsWith("#")) return { kind: "fragment" };
  if (href.startsWith("/_next/")) return { kind: "asset" };
  if (href.startsWith("tel:") || href.startsWith("mailto:")) return { kind: "contact", href };
  if (href.startsWith("/")) return { kind: "internal", href };
  if (/^https?:\/\//i.test(href)) {
    const withoutProtocol = href.replace(/^https?:\/\//i, "");
    const host = withoutProtocol.split("/")[0].toLowerCase();
    if (host === "renovixhomeservices.my" || host === "www.renovixhomeservices.my") {
      return { kind: "internal", href };
    }
    return { kind: "external", href };
  }
  return { kind: "other", href };
}

/** Strips fragment and query, returns the bare path (no trailing-slash fix). */
function barePath(href) {
  return href.split("#")[0].split("?")[0];
}

/**
 * The canonical serving form of an internal page href: root-relative path with
 * a trailing slash (the site sets `trailingSlash: true`). Non-page assets keep
 * their exact path. Returns null when the href is not an internal page link.
 */
function canonicalPagePath(href) {
  let path = barePath(href);
  if (/^https?:\/\//i.test(path)) path = `/${path.replace(/^https?:\/\/[^/]+/i, "")}`;
  if (!path.startsWith("/")) return null;
  if (NON_PAGE_HREFS.has(path)) return path;
  return path.length > 1 && !path.endsWith("/") ? `${path}/` : path;
}

/**
 * Why a verbatim internal href is not the canonical form. Returns a list of
 * issue codes (empty when the href already is canonical):
 *   - `no-trailing-slash` — page link missing the trailing slash (308s)
 *   - `noncanonical-host` — absolute URL on www / http / another host
 *   - `query-on-page`     — query string on a route other than the finder
 */
function canonicalIssues(href) {
  const issues = [];
  const bare = barePath(href);
  const isAbsolute = /^https?:\/\//i.test(href);
  if (isAbsolute) {
    // The canonical form is https on the apex host; http:// would be forced
    // through an https redirect, and www. through the apex redirect.
    if (/^http:\/\//i.test(href)) issues.push("http-scheme");
    const host = href.replace(/^https?:\/\//i, "").split("/")[0].toLowerCase();
    if (host !== "renovixhomeservices.my") issues.push("noncanonical-host");
  }
  if (!NON_PAGE_HREFS.has(bare)) {
    if (bare.length > 1 && !bare.endsWith("/")) issues.push("no-trailing-slash");
    if (href.includes("?") && !QUERY_ALLOWED_PATHS.has(canonicalPagePath(href))) {
      issues.push("query-on-page");
    }
  }
  return issues;
}

/* ------------------------------------------------------------------------ */
/* HTML extraction                                                           */
/* ------------------------------------------------------------------------ */

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

/** Every anchor: raw href plus its visible text (tags stripped). */
function extractAnchors(html) {
  const out = [];
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const text = decodeEntities(m[2].replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
    out.push({ href: m[1], text });
  }
  return out;
}

/** True when the page's JSON-LD graph contains a BreadcrumbList node. */
function hasBreadcrumbList(html) {
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let parsed;
    try {
      parsed = JSON.parse(m[1].replace(/\\u003c/g, "<"));
    } catch {
      continue;
    }
    const visit = (node) => {
      if (!node || typeof node !== "object") return false;
      if (Array.isArray(node)) return node.some(visit);
      const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
      if (types.includes("BreadcrumbList")) return true;
      // `@graph` carries the nodes; other `@`-keys are identifiers, not nodes.
      if (Array.isArray(node["@graph"]) && node["@graph"].some(visit)) return true;
      return Object.entries(node).some(
        ([key, value]) => !key.startsWith("@") && visit(value),
      );
    };
    if (visit(parsed)) return true;
  }
  return false;
}

/* ------------------------------------------------------------------------ */
/* Crawl                                                                     */
/* ------------------------------------------------------------------------ */

/**
 * Fetches every sitemap URL once and records its anchors, external links and
 * breadcrumb signal. The same crawl feeds every check below — there is no
 * second pass over the corpus.
 */
async function crawl(urls) {
  console.log(`\n== Crawl: ${urls.length} sitemap URLs ==`);
  const pages = new Map();
  let ok = 0;
  await batch(urls, 25, async (path) => {
    const { text, status } = await fetchText(path);
    if (status !== 200) return; // reported by the status sweep below
    ok += 1;
    const anchors = extractAnchors(text);
    const internal = [];
    const external = [];
    for (const { href, text: anchorText } of anchors) {
      const cls = classifyHref(href);
      if (cls.kind === "internal") {
        const pagePath = canonicalPagePath(href);
        if (pagePath) internal.push({ href, path: pagePath, text: anchorText });
      } else if (cls.kind === "external") {
        external.push(href);
      } else if (cls.kind === "contact") {
        external.push(href); // validated against the allowlist like externals
      }
    }
    pages.set(path, {
      status,
      internal,
      external,
      hasBreadcrumb: hasBreadcrumbList(text),
    });
  });
  console.log(`  crawled ${ok}/${urls.length} pages`);
  return pages;
}

/* ------------------------------------------------------------------------ */
/* Checks                                                                    */
/* ------------------------------------------------------------------------ */

function checkSitemapStatus(sitemapPaths, pages) {
  console.log("\n== 1. Sitemap URLs all serve 200 ==");
  const bad = sitemapPaths.filter((p) => pages.get(p)?.status !== 200);
  if (bad.length === 0) pass(`all ${sitemapPaths.length} sitemap URLs return 200`);
  else bad.slice(0, 10).forEach((p) => fail(`sitemap URL ${p} does not serve 200`));
}

function checkOrphans(sitemapPaths, pages) {
  console.log("\n== 2. Orphan indexable pages ==");
  const served = new Set(sitemapPaths);
  const inbound = new Map();
  for (const [from, page] of pages) {
    for (const link of page.internal) {
      if (!served.has(link.path)) continue;
      if (link.path === from) continue; // a self-link is not an inbound link
      if (!inbound.has(link.path)) inbound.set(link.path, new Set());
      inbound.get(link.path).add(from);
    }
  }
  const orphans = sitemapPaths.filter((p) => !inbound.has(p));
  if (orphans.length === 0) {
    pass(`no orphan pages (all ${sitemapPaths.length} sitemap URLs have an inbound internal link)`);
  } else {
    orphans.slice(0, 10).forEach((p) => fail(`orphan page (no inbound internal link): ${p}`));
    if (orphans.length > 10) fail(`…and ${orphans.length - 10} more orphans`);
  }
  return inbound;
}

/**
 * Pure part of the broken-link sweep: every distinct internal target, and the
 * targets that are neither a sitemap page nor a known non-page asset. Split
 * out so the self-test can exercise it without a server.
 */
function findInternalTargets(sitemapPaths, pages) {
  const targets = new Map(); // path → Set of sources
  for (const [from, page] of pages) {
    for (const link of page.internal) {
      if (!targets.has(link.path)) targets.set(link.path, new Set());
      targets.get(link.path).add(from);
    }
  }
  const served = new Set(sitemapPaths);
  const invalid = [...targets.keys()].filter(
    (t) => !served.has(t) && !NON_PAGE_HREFS.has(t),
  );
  return { targets, invalid };
}

function checkBrokenAndInvalidTargets(sitemapPaths, pages) {
  console.log("\n== 3. Broken internal links / invalid destinations (full sweep) ==");
  const { targets, invalid } = findInternalTargets(sitemapPaths, pages);
  if (invalid.length === 0) {
    pass(`every internal link target is a served page or known asset (${targets.size} distinct targets)`);
  } else {
    invalid.slice(0, 10).forEach((t) =>
      fail(`invalid internal destination ${t} (linked from ${[...targets.get(t)].slice(0, 3).join(", ")})`),
    );
  }

  // Non-page assets are validated by their own checks in audit:live; here we
  // only fetch page targets, so a missing feed cannot fail this audit twice.
  const pageTargets = [...targets.keys()].filter((t) => !NON_PAGE_HREFS.has(t));
  return batch(pageTargets, 25, async (path) => {
    const res = await fetchRes(path);
    return { path, status: res.status };
  }).then((results) => {
    const broken = results.filter((r) => r.status !== 200);
    if (broken.length === 0) {
      pass(`no broken internal links (all ${pageTargets.length} distinct page targets return 200)`);
    } else {
      broken.slice(0, 10).forEach((b) =>
        fail(`broken internal link target ${b.path} → HTTP ${b.status} (linked from ${[...targets.get(b.path)].slice(0, 3).join(", ")})`),
      );
      if (broken.length > 10) fail(`…and ${broken.length - 10} more broken targets`);
    }
  });
}

/**
 * Pure part of the canonical-target check: every verbatim internal href that
 * is not in canonical form, with the reasons. Split out so the self-test can
 * exercise it without a server.
 */
function findNoncanonicalHrefs(pages) {
  const suspects = new Map(); // verbatim href → { issues, sources }
  for (const [from, page] of pages) {
    for (const link of page.internal) {
      const issues = canonicalIssues(link.href);
      if (issues.length === 0) continue;
      if (!suspects.has(link.href)) suspects.set(link.href, { issues, sources: new Set() });
      suspects.get(link.href).sources.add(from);
    }
  }
  return suspects;
}

function checkCanonicalLinkTargets(pages) {
  console.log("\n== 4. Links to redirected / noncanonical URLs ==");
  const suspects = findNoncanonicalHrefs(pages);
  if (suspects.size === 0) {
    pass("every internal link href is already in canonical form (no redirect hops)");
    return Promise.resolve();
  }
  // Probe each suspect exactly as written: a canonical site answers 308 for a
  // noncanonical form, which is precisely the defect being reported.
  return batch([...suspects.keys()], 10, async (href) => {
    const path = barePath(href).startsWith("http")
      ? `/${barePath(href).replace(/^https?:\/\/[^/]+/i, "")}`
      : barePath(href);
    const res = await fetchRes(path);
    return { href, status: res.status };
  }).then((probes) => {
    let redirects = 0;
    let duplicates = 0;
    for (const probe of probes) {
      const { issues, sources } = suspects.get(probe.href);
      const where = [...sources].slice(0, 3).join(", ");
      if (probe.status >= 300 && probe.status < 400) {
        redirects += 1;
        fail(`internal link "${probe.href}" (${issues.join("+")}) redirects → HTTP ${probe.status} (linked from ${where})`);
      } else if (probe.status === 200) {
        duplicates += 1;
        fail(`internal link "${probe.href}" (${issues.join("+")}) serves 200 at a noncanonical URL — duplicate-content risk (linked from ${where})`);
      } else {
        fail(`internal link "${probe.href}" (${issues.join("+")}) → HTTP ${probe.status} (linked from ${where})`);
      }
    }
    if (redirects + duplicates === 0) {
      pass(`probed ${probes.length} noncanonical href forms`);
    }
  });
}

function checkBreadcrumbs(sitemapPaths, pages) {
  console.log("\n== 5. Breadcrumbs ==");
  const exempt = new Set(LANGUAGES.map((l) => `/${l}/`));
  const missing = sitemapPaths.filter(
    (p) => !exempt.has(p) && pages.get(p) && !pages.get(p).hasBreadcrumb,
  );
  if (missing.length === 0) {
    pass(`all ${sitemapPaths.length - exempt.size} non-home pages publish a BreadcrumbList (3 homepages are the roots)`);
  } else {
    missing.slice(0, 10).forEach((p) => fail(`missing BreadcrumbList: ${p}`));
    if (missing.length > 10) fail(`…and ${missing.length - 10} more pages without breadcrumbs`);
  }
}

function checkInboundSufficiency(inbound, sitemapPaths) {
  console.log("\n== 6. Pages with insufficient relevant internal links (review list) ==");
  const counts = sitemapPaths.map((p) => inbound.get(p)?.size ?? 0);
  const sorted = [...counts].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const thin = sitemapPaths
    .filter((p) => (inbound.get(p)?.size ?? 0) < 3)
    .sort((a, b) => (inbound.get(a)?.size ?? 0) - (inbound.get(b)?.size ?? 0));
  console.log(
    `  inbound links per page: min ${sorted[0]}, median ${median}, max ${sorted[sorted.length - 1]}`,
  );
  if (thin.length === 0) {
    pass(`every sitemap URL has at least 3 inbound internal links (median ${median})`);
  } else {
    thin.slice(0, 20).forEach((p) =>
      warn(`page with fewer than 3 inbound internal links (${inbound.get(p)?.size ?? 0}): ${p}`),
    );
    if (thin.length > 20) warn(`…and ${thin.length - 20} more thin pages (see list above)`);
  }
}

const NON_DESCRIPTIVE_ANCHORS = new Set([
  "click here",
  "here",
  "read more",
  "learn more",
  "more",
  "link",
  "this",
  "this page",
  "website",
  "url",
]);

function checkAnchorText(pages) {
  console.log("\n== 7. Duplicate / non-descriptive anchor text ==");
  let nonDescriptive = 0;
  const byText = new Map(); // normalized text → Set of targets
  for (const [from, page] of pages) {
    for (const link of page.internal) {
      const text = link.text.toLowerCase();
      if (!text) continue;
      if (NON_DESCRIPTIVE_ANCHORS.has(text)) {
        nonDescriptive += 1;
        if (nonDescriptive <= 10) {
          fail(`non-descriptive anchor text "${link.text}" → ${link.path} (on ${from})`);
        }
        continue;
      }
      // Very short labels are navigation/card chrome; repetition is only
      // meaningful for real anchor text.
      if (text.length < 12) continue;
      if (!byText.has(text)) byText.set(text, new Set());
      byText.get(text).add(link.path);
    }
  }
  if (nonDescriptive === 0) pass("no non-descriptive anchor text (click here / read more / …)");
  else if (nonDescriptive > 10) fail(`…and ${nonDescriptive - 10} more non-descriptive anchors`);

  const repetitive = [...byText.entries()]
    .filter(([, targets]) => targets.size > 8)
    .sort((a, b) => b[1].size - a[1].size);
  if (repetitive.length === 0) {
    pass("no anchor text is reused for more than 8 distinct targets");
  } else {
    repetitive.slice(0, 10).forEach(([text, targets]) =>
      warn(`anchor text "${text.slice(0, 60)}" points at ${targets.size} distinct targets`),
    );
    if (repetitive.length > 10) warn(`…and ${repetitive.length - 10} more repetitive anchors`);
  }
}

function checkExternalLinks(pages, allowlist) {
  console.log("\n== 8. Unexpected external links ==");
  const seen = new Map(); // href → Set of sources
  for (const [from, page] of pages) {
    for (const href of page.external) {
      if (!seen.has(href)) seen.set(href, new Set());
      seen.get(href).add(from);
    }
  }
  const unexpected = [...seen.entries()].filter(([href]) => !allowlist.isAllowed(href));
  // WhatsApp deep links differ per page (pre-filled message), so the raw href
  // list is noise — report the distinct families and their counts instead.
  const families = new Map();
  for (const href of seen.keys()) {
    const family = href.startsWith("https://wa.me/")
      ? "wa.me deep links"
      : href.startsWith("tel:")
        ? "tel: call links"
        : href.startsWith("mailto:")
          ? "mailto: links"
          : href.includes("facebook.com")
            ? "facebook.com"
            : href.includes("instagram.com")
              ? "instagram.com"
              : `other: ${href.slice(0, 60)}`;
    families.set(family, (families.get(family) ?? 0) + 1);
  }
  console.log(
    `  external/contact anchor families: ${[...families.entries()].map(([k, n]) => `${k} (${n})`).join(", ")}`,
  );
  if (unexpected.length === 0) {
    pass(`all ${seen.size} distinct external/contact anchors match the data/site.ts allowlist`);
  } else {
    unexpected.slice(0, 10).forEach(([href, sources]) =>
      fail(`unexpected external link "${href}" (on ${[...sources].slice(0, 3).join(", ")})`),
    );
    if (unexpected.length > 10) fail(`…and ${unexpected.length - 10} more unexpected external links`);
  }
}

function checkNavigationDepth(sitemapPaths, pages) {
  console.log("\n== 9. Navigation depth (same-language BFS from each homepage) ==");
  for (const lang of LANGUAGES) {
    const home = `/${lang}/`;
    const sameLang = new Set(sitemapPaths.filter((p) => p.startsWith(`/${lang}/`)));
    const adjacency = new Map();
    for (const [from, page] of pages) {
      if (!from.startsWith(`/${lang}/`)) continue;
      adjacency.set(from, page.internal.map((l) => l.path).filter((p) => sameLang.has(p)));
    }
    // BFS
    const depth = new Map([[home, 0]]);
    const queue = [home];
    while (queue.length > 0) {
      const current = queue.shift();
      for (const next of adjacency.get(current) ?? []) {
        if (!depth.has(next)) {
          depth.set(next, depth.get(current) + 1);
          queue.push(next);
        }
      }
    }
    const unreachable = [...sameLang].filter((p) => !depth.has(p));
    if (unreachable.length > 0) {
      unreachable.slice(0, 10).forEach((p) =>
        fail(`${lang}: sitemap URL not reachable from ${home} via same-language links: ${p}`),
      );
      if (unreachable.length > 10) {
        fail(`…and ${unreachable.length - 10} more unreachable ${lang} pages`);
      }
    } else {
      const max = Math.max(...depth.values());
      pass(`${lang}: all ${sameLang.size} pages reachable from ${home} (max depth ${max})`);
    }
    // Depth is reported even when reachability failed — a deep page is a
    // review item independent of an orphan elsewhere.
    const deep = [...depth.entries()].filter(([, d]) => d > 4).sort((a, b) => b[1] - a[1]);
    if (deep.length > 0) {
      deep
        .slice(0, 20)
        .forEach(([p, d]) => warn(`${lang}: page at click depth ${d} (> 4): ${p}`));
      if (deep.length > 20) warn(`…and ${deep.length - 20} more pages deeper than 4 clicks (${lang})`);
    }
  }
}

/* ------------------------------------------------------------------------ */
/* Main                                                                      */
/* ------------------------------------------------------------------------ */

async function main() {
  console.log("Renovix Home Services — whole-corpus internal-link audit");
  console.log(`target: ${BASE} (canonical host ${CANONICAL_HOST})`);

  const allowlist = externalAllowlist();

  const { text: sitemapText, status: sitemapStatus } = await fetchText("/sitemap.xml");
  if (sitemapStatus !== 200) {
    console.error(`✗ /sitemap.xml → HTTP ${sitemapStatus}; start a production server first (npm run build && npx next start)`);
    process.exit(1);
  }
  const locs = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const sitemapPaths = locs
    .filter((u) => u.startsWith(CANONICAL_HOST))
    .map((u) => {
      let path = u.slice(CANONICAL_HOST.length);
      return path.length > 1 && !path.endsWith("/") ? `${path}/` : path;
    });
  if (sitemapPaths.length === 0) {
    console.error("✗ sitemap contains no canonical URLs");
    process.exit(1);
  }
  console.log(`sitemap: ${sitemapPaths.length} canonical URLs`);

  const pages = await crawl(sitemapPaths);

  checkSitemapStatus(sitemapPaths, pages);
  const inbound = checkOrphans(sitemapPaths, pages);
  await checkBrokenAndInvalidTargets(sitemapPaths, pages);
  await checkCanonicalLinkTargets(pages);
  checkBreadcrumbs(sitemapPaths, pages);
  checkInboundSufficiency(inbound, sitemapPaths);
  checkAnchorText(pages);
  checkExternalLinks(pages, allowlist);
  checkNavigationDepth(sitemapPaths, pages);

  console.log("\n== Summary ==");
  console.log(`PASS ${passes.length}  WARN ${warnings.length}  FAIL ${failures.length}`);
  if (failures.length > 0) {
    console.log("\nFailures:");
    failures.forEach((f) => console.log(`  ✗ ${f}`));
    process.exit(1);
  }
  if (warnings.length > 0) {
    console.log("\nWarnings (review list):");
    warnings.forEach((w) => console.log(`  ⚠ ${w}`));
  }
}

/* ------------------------------------------------------------------------ */
/* Self-test                                                                 */
/*                                                                           */
/* Runs the pure helpers and the graph-based checks against synthetic       */
/* fixtures — no server needed — proving every report path can actually     */
/* fail. A check that cannot fail is not a check. Run:                       */
/*   node scripts/audit-links.mjs --self-test                                */
/* ------------------------------------------------------------------------ */

function selfTest() {
  console.log("Renovix Home Services — audit:links self-test (synthetic fixtures, no server)");
  let ok = 0;
  let bad = 0;
  const t = (name, cond) => {
    if (cond) {
      ok += 1;
      console.log(`  ✓ ${name}`);
    } else {
      bad += 1;
      console.log(`  ✗ ${name}`);
    }
  };

  // canonicalIssues
  t(
    "canonicalIssues: missing trailing slash detected",
    canonicalIssues("/en/services/tiling").includes("no-trailing-slash"),
  );
  t(
    "canonicalIssues: canonical href is clean",
    canonicalIssues("/en/services/tiling/").length === 0,
  );
  t(
    "canonicalIssues: www host detected",
    canonicalIssues("https://www.renovixhomeservices.my/en/").includes("noncanonical-host"),
  );
  t(
    "canonicalIssues: http scheme detected",
    canonicalIssues("http://renovixhomeservices.my/en/").includes("http-scheme"),
  );
  t(
    "canonicalIssues: finder query string allowed",
    canonicalIssues("/en/search/?q=tile").length === 0,
  );
  t(
    "canonicalIssues: query string on another page flagged",
    canonicalIssues("/en/services/tiling/?utm=x").includes("query-on-page"),
  );
  t(
    "canonicalIssues: non-page asset untouched",
    canonicalIssues("/llms.txt").length === 0,
  );

  // classifyHref
  t("classifyHref: fragment", classifyHref("#top").kind === "fragment");
  t("classifyHref: build asset", classifyHref("/_next/static/x.js").kind === "asset");
  t("classifyHref: contact", classifyHref("tel:+601159259521").kind === "contact");
  t("classifyHref: internal root-relative", classifyHref("/en/").kind === "internal");
  t("classifyHref: internal absolute canonical host", classifyHref(`${CANONICAL_HOST}/en/`).kind === "internal");
  t("classifyHref: external", classifyHref("https://example.com/").kind === "external");

  // hasBreadcrumbList
  const withGraph =
    '<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[]}]}</script>';
  const withoutBreadcrumb =
    '<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage"}</script>';
  t("hasBreadcrumbList: finds node inside @graph", hasBreadcrumbList(withGraph));
  t("hasBreadcrumbList: absent without BreadcrumbList", !hasBreadcrumbList(withoutBreadcrumb));

  // externalAllowlist (derived from data/site.ts)
  const allow = externalAllowlist();
  t("allowlist: wa.me base", allow.isAllowed("https://wa.me/601159259521"));
  t("allowlist: wa.me deep link with text", allow.isAllowed("https://wa.me/601159259521?text=Hello"));
  t("allowlist: tel", allow.isAllowed("tel:+601159259521"));
  t("allowlist: mailto", allow.isAllowed("mailto:renovixhomeservices@gmail.com"));
  t("allowlist: facebook", allow.isAllowed("https://www.facebook.com/share/1dr51n9qii/"));
  t("allowlist: instagram", allow.isAllowed("https://www.instagram.com/renovixhomeservices/"));
  t("allowlist: rejects unknown external", !allow.isAllowed("https://example.com/"));
  t("allowlist: rejects a different wa.me number", !allow.isAllowed("https://wa.me/60123456789"));

  // Synthetic link graph. /en/orphan/ is linked by nobody; /en/bad/ links to
  // an unserved destination with a non-descriptive anchor and an unexpected
  // external link; /en/rep/ reuses one anchor text for 9 targets; /en/deep6/
  // sits 6 clicks from home; /en/nocrumb/ has no breadcrumb.
  const mk = (internal, external = [], hasBreadcrumb = true) => ({
    status: 200,
    internal,
    external,
    hasBreadcrumb,
  });
  const repLinks = Array.from({ length: 9 }, (_, i) => ({
    href: `/en/target-${i}/`,
    path: `/en/target-${i}/`,
    text: "full renovation package details",
  }));
  const pages = new Map([
    ["/en/", mk([{ href: "/en/a/", path: "/en/a/", text: "Area A" }])],
    ["/en/a/", mk([{ href: "/en/", path: "/en/", text: "Home" }])],
    ["/en/orphan/", mk([])],
    [
      "/en/bad/",
      mk(
        [
          { href: "/en/missing/", path: "/en/missing/", text: "click here" },
          { href: "/en/a", path: "/en/a/", text: "Area A" },
        ],
        ["https://example.com/"],
      ),
    ],
    ["/en/rep/", mk(repLinks)],
    ["/en/deep1/", mk([{ href: "/en/deep2/", path: "/en/deep2/", text: "Deep 2" }])],
    ["/en/deep2/", mk([{ href: "/en/deep3/", path: "/en/deep3/", text: "Deep 3" }])],
    ["/en/deep3/", mk([{ href: "/en/deep4/", path: "/en/deep4/", text: "Deep 4" }])],
    ["/en/deep4/", mk([{ href: "/en/deep5/", path: "/en/deep5/", text: "Deep 5" }])],
    ["/en/deep5/", mk([{ href: "/en/deep6/", path: "/en/deep6/", text: "Deep 6" }])],
    ["/en/deep6/", mk([{ href: "/en/", path: "/en/", text: "Home" }])],
    ["/en/nocrumb/", mk([{ href: "/en/", path: "/en/", text: "Home" }], [], false)],
  ]);
  // Wire the chain into the homepage's reachability set.
  pages.get("/en/").internal.push({ href: "/en/deep1/", path: "/en/deep1/", text: "Deep 1" });
  pages.get("/en/").internal.push({ href: "/en/bad/", path: "/en/bad/", text: "Bad" });
  pages.get("/en/").internal.push({ href: "/en/rep/", path: "/en/rep/", text: "Rep" });
  pages.get("/en/").internal.push({ href: "/en/nocrumb/", path: "/en/nocrumb/", text: "No crumb" });
  const sitemapPaths = [
    "/en/",
    "/en/a/",
    "/en/orphan/",
    "/en/bad/",
    "/en/rep/",
    "/en/deep1/",
    "/en/deep2/",
    "/en/deep3/",
    "/en/deep4/",
    "/en/deep5/",
    "/en/deep6/",
    "/en/nocrumb/",
  ];

  const snapshot = () => ({ p: passes.length, w: warnings.length, f: failures.length });
  const run = (fn) => {
    const before = snapshot();
    fn();
    return {
      p: passes.length - before.p,
      w: warnings.length - before.w,
      f: failures.length - before.f,
    };
  };

  // findInternalTargets / findNoncanonicalHrefs (pure)
  const { invalid } = findInternalTargets(sitemapPaths, pages);
  t("findInternalTargets: unserved destination flagged", invalid.includes("/en/missing/"));
  const suspects = findNoncanonicalHrefs(pages);
  t(
    "findNoncanonicalHrefs: missing trailing slash flagged",
    suspects.has("/en/a") && suspects.get("/en/a").issues.includes("no-trailing-slash"),
  );
  t(
    "findNoncanonicalHrefs: canonical hrefs not flagged",
    ![...suspects.keys()].includes("/en/a/"),
  );

  // Graph-based checks — each must record its failure/warning.
  let d = run(() => checkOrphans(sitemapPaths, pages));
  t("checkOrphans: orphan page fails", d.f >= 1);

  d = run(() => checkBreadcrumbs(sitemapPaths, pages));
  t("checkBreadcrumbs: missing BreadcrumbList fails", d.f >= 1);

  d = run(() => checkInboundSufficiency(checkOrphans(sitemapPaths, pages), sitemapPaths));
  t("checkInboundSufficiency: thin pages warn", d.w >= 1);

  d = run(() => checkAnchorText(pages));
  t("checkAnchorText: 'click here' fails", d.f >= 1);
  t("checkAnchorText: repetitive anchor warns", d.w >= 1);

  d = run(() => checkExternalLinks(pages, allow));
  t("checkExternalLinks: unexpected external fails", d.f >= 1);

  d = run(() => checkNavigationDepth(["/en/", ...sitemapPaths.filter((p) => p !== "/en/")], pages));
  t("checkNavigationDepth: unreachable page fails (orphan)", d.f >= 1);
  t("checkNavigationDepth: page deeper than 4 clicks warns", d.w >= 1);

  console.log(`\nself-test: ${ok} passed, ${bad} failed`);
  if (bad > 0) process.exit(1);
  console.log("SELF-TEST PASS — every report path can fail.");
}

if (process.argv.includes("--self-test")) {
  selfTest();
} else {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
