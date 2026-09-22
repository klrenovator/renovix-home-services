#!/usr/bin/env node
/**
 * Phase 25 local production-server QA.
 * Talks to a running `next start` (default http://127.0.0.1:3000).
 * Does not invent results — every check is a real HTTP request.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const BASE = process.env.QA_BASE || "http://127.0.0.1:3000";
const CANONICAL_HOST = "https://renovixhomeservices.my";

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
  const res = await fetch(url, { redirect: "manual", ...opts });
  return res;
}

async function fetchText(path) {
  const res = await fetchRes(path);
  const text = await res.text();
  return { res, text, status: res.status };
}

function extractMeta(html, attr, value) {
  const re = new RegExp(
    `<meta[^>]+${attr}=["']${value}["'][^>]*content=["']([^"']+)["'][^>]*>`,
    "i",
  );
  const m = html.match(re);
  if (m) return m[1];
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]*${attr}=["']${value}["'][^>]*>`,
    "i",
  );
  const m2 = html.match(re2);
  return m2 ? m2[1] : null;
}

function extractLink(html, rel) {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]*>`, "gi");
  return [...html.matchAll(re)].map((m) => m[0]);
}

function hrefOf(tag) {
  if (!tag) return null;
  const m = tag.match(/href=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function hreflangOf(tag) {
  const m = tag.match(/hreflang=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function jsonLdBlocks(html) {
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  const out = [];
  for (const m of html.matchAll(re)) {
    try {
      out.push(JSON.parse(m[1].replace(/\\u003c/g, "<")));
    } catch (e) {
      out.push({ __parseError: String(e) });
    }
  }
  return out;
}

function flattenGraph(blocks) {
  const nodes = [];
  for (const b of blocks) {
    if (b.__parseError) continue;
    if (Array.isArray(b["@graph"])) nodes.push(...b["@graph"]);
    else nodes.push(b);
  }
  return nodes;
}

function typesOf(node) {
  const t = node["@type"];
  return Array.isArray(t) ? t : t ? [t] : [];
}

/**
 * Phase 44 — entity-graph integrity. Every node that carries both `@id` and
 * `@type` is an entity *definition*; a one-key `{"@id": …}` object anywhere
 * in the graph is a reference. Collecting the definitions lets a later check
 * assert that when several pages re-declare the same entity (a project page
 * restating its pillar's Service node, say) they restate the same values: one
 * entity, one name, one URL, everywhere. `description` is deliberately not
 * compared — the shared Organization node publishes a localized description on
 * every page by design, and partial restatements may omit copy without
 * contradicting the owner.
 */
function collectEntityNodes(nodes) {
  const defs = [];
  const refs = [];
  const compareFields = ["name", "url", "serviceType"];
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const item of node) visit(item);
      return;
    }
    const id = node["@id"];
    if (typeof id === "string") {
      if (node["@type"]) {
        defs.push({
          id,
          fields: compareFields
            .filter((field) => node[field] !== undefined)
            .map((field) => [field, String(node[field])]),
        });
      } else if (Object.keys(node).length === 1) {
        refs.push(id);
      }
    }
    for (const [key, value] of Object.entries(node)) {
      if (key.startsWith("@")) continue;
      visit(value);
    }
  };
  for (const node of nodes) visit(node);
  return { defs, refs };
}

async function checkPageSeo(path, expect = {}) {
  const { text, status } = await fetchText(path);
  if (status !== 200) {
    fail(`${path} status ${status}`);
    return null;
  }
  pass(`${path} HTTP 200`);

  const canonical = hrefOf(extractLink(text, "canonical")[0] || "");
  if (!canonical) fail(`${path} missing canonical`);
  else if (!canonical.startsWith(CANONICAL_HOST)) fail(`${path} canonical host ${canonical}`);
  else pass(`${path} canonical ${canonical}`);

  const alts = extractLink(text, "alternate").map((tag) => ({
    href: hrefOf(tag),
    hreflang: hreflangOf(tag),
  }));
  const langs = new Set(alts.map((a) => a.hreflang).filter(Boolean));
  let hreflangOk = true;
  for (const needed of ["en-MY", "ms-MY", "zh-MY", "x-default"]) {
    if (!langs.has(needed)) {
      fail(`${path} missing hreflang ${needed}`);
      hreflangOk = false;
    }
  }
  if (hreflangOk) pass(`${path} hreflang set complete`);
  const xDefault = alts.find((a) => a.hreflang === "x-default");
  if (xDefault && !xDefault.href?.includes("/en/")) {
    fail(`${path} x-default is not English: ${xDefault.href}`);
  }

  const robots = extractMeta(text, "name", "robots") || "";
  if (/noindex/i.test(robots) && !expect.noindex) fail(`${path} accidental noindex: ${robots}`);
  else if (!expect.noindex) pass(`${path} indexable (${robots || "default"})`);

  const ogTitle = extractMeta(text, "property", "og:title");
  const ogDesc = extractMeta(text, "property", "og:description");
  const ogUrl = extractMeta(text, "property", "og:url");
  const ogImage = extractMeta(text, "property", "og:image");
  const twCard = extractMeta(text, "name", "twitter:card");
  if (!ogTitle) fail(`${path} missing og:title`);
  if (!ogDesc) fail(`${path} missing og:description`);
  if (!ogImage) fail(`${path} missing og:image`);
  if (twCard && twCard !== "summary_large_image") fail(`${path} twitter:card ${twCard}`);
  if (ogUrl && !ogUrl.startsWith(CANONICAL_HOST)) fail(`${path} og:url host ${ogUrl}`);
  if (ogTitle && ogDesc && ogImage) pass(`${path} OG/Twitter present`);

  const gsc = extractMeta(text, "name", "google-site-verification");
  if (gsc !== "CIc-da9G9QfriX7tAeKqS3w5YF2tt4GKnjV8IMSGP8o") {
    fail(`${path} GSC verification meta ${gsc}`);
  }

  const htmlLang = (text.match(/<html[^>]*lang=["']([^"']+)["']/) || [])[1];
  if (expect.htmlLang && htmlLang !== expect.htmlLang) {
    fail(`${path} html lang ${htmlLang} expected ${expect.htmlLang}`);
  } else if (htmlLang) pass(`${path} html lang ${htmlLang}`);

  const h1s = [...text.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1) fail(`${path} H1 count ${h1s.length}`);
  else pass(`${path} single H1`);

  const skip = text.includes('href="#main"') && text.includes('id="main"');
  if (!skip) fail(`${path} missing skip link / main landmark`);
  else pass(`${path} skip link + main`);

  const blocks = jsonLdBlocks(text);
  if (blocks.some((b) => b.__parseError)) fail(`${path} JSON-LD parse error`);
  const nodes = flattenGraph(blocks);
  const allTypes = new Set(nodes.flatMap(typesOf));
  if (!allTypes.has("Organization") && !allTypes.has("LocalBusiness")) {
    fail(`${path} missing Organization/LocalBusiness`);
  }
  const dumpAll = JSON.stringify(nodes);
  if (/"@type"\s*:\s*"Review"/.test(dumpAll) || /AggregateRating/.test(dumpAll) || /aggregateRating/.test(dumpAll)) {
    fail(`${path} invented review/rating schema`);
  }
  if (expect.schemaTypes) {
    for (const t of expect.schemaTypes) {
      if (!allTypes.has(t)) fail(`${path} missing schema ${t} (have ${[...allTypes].join(",")})`);
    }
  }
  pass(`${path} JSON-LD types: ${[...allTypes].sort().join(", ")}`);

  if (expect.mustInclude) {
    for (const s of expect.mustInclude) {
      if (!text.includes(s)) fail(`${path} missing expected text: ${s}`);
    }
  }
  if (expect.mustNotInclude) {
    for (const s of expect.mustNotInclude) {
      if (text.includes(s)) fail(`${path} unexpected text: ${s}`);
    }
  }

  const analyticsHits = [
    "googletagmanager.com",
    "google-analytics.com",
    "gtag/js",
    "clarity.ms",
    "connect.facebook.net",
    "hotjar.com",
  ].filter((s) => text.includes(s));
  if (analyticsHits.length) fail(`${path} analytics scripts present without IDs: ${analyticsHits}`);
  else pass(`${path} no analytics vendor scripts (IDs unset)`);

  if (text.includes("http://renovix") || /src=["']http:\/\//.test(text)) {
    fail(`${path} mixed-content http URL`);
  }

  const wa = text.match(/https:\/\/wa\.me\/(\d+)/g) || [];
  const uniqueWa = [...new Set(wa)];
  if (uniqueWa.length && uniqueWa.some((u) => !u.startsWith("https://wa.me/601159259521"))) {
    fail(`${path} unexpected WhatsApp URL ${uniqueWa}`);
  }
  const tel = [...text.matchAll(/href="tel:([^"]+)"/g)].map((m) => m[1]);
  if (tel.some((t) => t !== "+601159259521")) fail(`${path} unexpected tel ${tel}`);

  return { text, canonical, alts, nodes, allTypes, status };
}

async function checkQuoteApi() {
  console.log("\n== Quote API ==");
  const origin = "https://renovixhomeservices.my";
  const endpoint = `${BASE}/api/quote/`;

  const get = await fetch(endpoint, { method: "GET" });
  if (get.status === 405) pass("GET /api/quote/ → 405");
  else fail(`GET /api/quote/ → ${get.status}`);

  const empty = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify({}),
  });
  const emptyBody = await empty.json();
  if (empty.status === 400 && emptyBody.error === "validation") pass("empty payload → 400 validation");
  else fail(`empty payload → ${empty.status} ${JSON.stringify(emptyBody)}`);

  const robots = empty.headers.get("x-robots-tag") || "";
  if (/noindex/i.test(robots)) pass("X-Robots-Tag noindex on API");
  else fail(`API robots tag ${robots}`);

  const foreign = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://evil.example" },
    body: JSON.stringify({ name: "Test" }),
  });
  const foreignBody = await foreign.json();
  if (foreign.status === 403 && foreignBody.error === "forbidden") pass("foreign origin → 403");
  else fail(`foreign origin → ${foreign.status} ${JSON.stringify(foreignBody)}`);

  const wwwOrigin = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://www.renovixhomeservices.my" },
    body: JSON.stringify({}),
  });
  if (wwwOrigin.status === 400) pass("www origin allowed (400 validation, not 403)");
  else if (wwwOrigin.status === 403) fail("www origin rejected — would break production quote form");
  else pass(`www origin status ${wwwOrigin.status} (not 403)`);

  const valid = {
    name: "Phase 25 QA",
    phone: "01159259521",
    email: "",
    preferredContact: "whatsapp",
    propertyType: "condominium-apartment",
    service: "tiling",
    subService: "bathroom-tiling",
    location: "Mont Kiara",
    description: "Phase 25 local verification — not a real customer.",
    preferredDate: "",
    locale: "en",
    companyWebsite: "",
  };
  const ok = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify(valid),
  });
  const okBody = await ok.json();
  if (ok.status === 503 && okBody.error === "unavailable") {
    pass("valid payload without Resend credentials → honest 503 unavailable");
  } else if (ok.status === 200 && okBody.ok === true) {
    warn("valid payload returned 200 — email credentials appear configured in this environment (not live-verified delivery)");
  } else {
    fail(`valid payload → ${ok.status} ${JSON.stringify(okBody)}`);
  }

  const honeypot = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify({ ...valid, companyWebsite: "http://spam.test" }),
  });
  const hpBody = await honeypot.json();
  if (honeypot.status === 200 && hpBody.ok === true) pass("honeypot silently accepted (200, no email)");
  else fail(`honeypot → ${honeypot.status} ${JSON.stringify(hpBody)}`);

  const badEmail = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify({ ...valid, email: "not-an-email", preferredContact: "email" }),
  });
  if (badEmail.status === 400) pass("invalid email + email contact → 400");
  else fail(`invalid email → ${badEmail.status}`);

  const cross = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify({ ...valid, service: "plumbing", subService: "bathroom-tiling" }),
  });
  if (cross.status === 400) pass("cross-service sub-service rejected");
  else fail(`cross-service sub-service → ${cross.status}`);

  const big = "x".repeat(70_000);
  const oversized = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json", origin },
    body: JSON.stringify({ ...valid, description: big }),
  });
  if (oversized.status === 413) pass("oversized body → 413");
  else fail(`oversized body → ${oversized.status}`);
}

async function checkHeaders() {
  console.log("\n== Security headers ==");
  const res = await fetchRes("/en/");
  const csp = res.headers.get("content-security-policy") || "";
  const need = [
    "default-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ];
  for (const n of need) {
    if (csp.includes(n)) pass(`CSP has ${n}`);
    else fail(`CSP missing ${n}`);
  }
  if (csp.includes("frame-ancestors")) pass("CSP frame-ancestors present");
  else warn("CSP missing frame-ancestors (clickjacking defence)");
  if (res.headers.get("x-frame-options")) pass(`X-Frame-Options ${res.headers.get("x-frame-options")}`);
  else warn("X-Frame-Options missing");
  if (res.headers.get("x-content-type-options") === "nosniff") pass("X-Content-Type-Options nosniff");
  else fail("missing nosniff");
  if (res.headers.get("referrer-policy")) pass(`Referrer-Policy ${res.headers.get("referrer-policy")}`);
  else fail("missing Referrer-Policy");
  if (res.headers.get("permissions-policy")) pass(`Permissions-Policy ${res.headers.get("permissions-policy")}`);
  else fail("missing Permissions-Policy");
  if (res.headers.get("x-powered-by")) fail(`X-Powered-By leaked: ${res.headers.get("x-powered-by")}`);
  else pass("X-Powered-By absent");
}

async function checkSitemapLive() {
  console.log("\n== Sitemap + robots (served) ==");
  const { text, status } = await fetchText("/sitemap.xml");
  if (status !== 200) {
    fail(`sitemap.xml ${status}`);
    return [];
  }
  const locs = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  // Synced 2026-09-07 with the generated sitemap (Phase 26 + Smart Service
  // Finder search routes): 678 static URLs, 226 per language.
  const EXPECTED_TOTAL = 678;
  const EXPECTED_PER_LANG = 226;
  if (locs.length !== EXPECTED_TOTAL) fail(`sitemap count ${locs.length} expected ${EXPECTED_TOTAL}`);
  else pass(`sitemap ${EXPECTED_TOTAL} <loc> URLs`);
  if (new Set(locs).size !== locs.length) fail("duplicate sitemap URLs");
  else pass("sitemap URLs unique");
  if (locs.some((u) => !u.startsWith(CANONICAL_HOST))) fail("sitemap URL not on canonical host");
  else pass("all sitemap URLs on https://renovixhomeservices.my");
  if (locs.some((u) => u.includes("www."))) fail("sitemap contains www URLs");
  if (locs.some((u) => /localhost|vercel\.app|staging|127\.0\.0\.1/.test(u))) {
    fail("sitemap contains staging/dev URLs");
  } else pass("no staging/dev URLs in sitemap");
  const en = locs.filter((u) => u.includes("/en/")).length;
  const ms = locs.filter((u) => u.includes("/ms/")).length;
  const zh = locs.filter((u) => u.includes("/zh/")).length;
  if (en === EXPECTED_PER_LANG && ms === EXPECTED_PER_LANG && zh === EXPECTED_PER_LANG) pass(`${EXPECTED_PER_LANG} URLs per language`);
  else fail(`language split en=${en} ms=${ms} zh=${zh}`);

  const robots = await fetchText("/robots.txt");
  if (robots.status === 200 && robots.text.includes("Allow: /") && robots.text.includes(`${CANONICAL_HOST}/sitemap.xml`)) {
    pass("robots.txt allow-all + correct Sitemap");
  } else fail(`robots.txt unexpected: ${robots.text.slice(0, 200)}`);
  if (/disallow:\s*\/en/i.test(robots.text)) fail("robots accidentally blocks /en");

  return locs;
}

async function sampleStatuses(locs) {
  console.log("\n== Sample route statuses ==");
  const samples = [
    "/en/", "/ms/", "/zh/",
    "/en/services/",
    "/en/services/tiling/",
    "/en/services/welding-metal-works/",
    "/en/services/electrical/",
    "/en/services/painting/",
    "/en/services/ceiling-partition/",
    "/en/services/general-renovation/",
    "/en/services/plumbing/",
    "/en/services/waterproofing/",
    "/en/services/flooring/",
    "/en/services/handyman/",
    "/en/services/tiling/bathroom-tiling/",
    "/en/services/handyman/hourly-service/",
    "/ms/services/tiling/",
    "/zh/services/tiling/",
    "/en/problems/water-leakage/",
    "/ms/problems/water-leakage/",
    "/zh/problems/water-leakage/",
    "/en/areas/",
    "/en/areas/kuala-lumpur/",
    "/en/areas/selangor/",
    "/en/areas/kuala-lumpur/mont-kiara/",
    "/en/areas/kuala-lumpur/kl-city-centre/",
    "/en/areas/kuala-lumpur/kampung-baru/",
    "/en/areas/selangor/setia-alam/",
    "/ms/areas/kuala-lumpur/mont-kiara/",
    "/zh/areas/kuala-lumpur/mont-kiara/",
    "/en/quote/", "/ms/quote/", "/zh/quote/",
    "/en/contact/", "/en/about/",
    "/en/projects/",
    "/en/projects/marble-look-floor-tiling/",
    "/en/blog/",
    "/en/blog/bathroom-rebuild-cost-guide/",
    "/en/faq/", "/en/privacy/", "/en/terms/",
    "/llms.txt", "/ai/pricing.json", "/ai/business.json", "/icon.svg",
  ];
  for (const p of samples) {
    const res = await fetchRes(p);
    if (res.status === 200) pass(`${p} 200`);
    else fail(`${p} ${res.status}`);
  }

  const should404 = [
    "/en/services/carpentry/",
    "/en/areas/johor/",
    "/fr/",
    "/en/blog/does-not-exist/",
    "/en/projects/nonexistent-slug/",
  ];
  for (const p of should404) {
    const res = await fetchRes(p);
    if (res.status === 404) pass(`${p} 404`);
    else fail(`${p} expected 404 got ${res.status}`);
  }

  console.log("\n== Full sitemap status sweep ==");
  let ok = 0;
  let bad = 0;
  const batchSize = 25;
  // Phase 28 — the sweep also reads each page once and keeps its internal
  // links, so the same crawl feeds the internal-link-graph check below.
  // Phase 29 — the same pass keeps each anchor's visible text, so localized
  // anchor text is checked without a second crawl.
  // Phase 39 — the same pass also counts the anchors the shared InlineLinks
  // component renders inside the copy, and looks for inline-link markup that
  // reached the browser unrendered.
  const graph = new Map();
  const anchors = new Map();
  const inCopy = new Map();
  const titles = new Map();
  const leakedMarkup = [];
  // Phase 42 — rendered Q&A block count and published JSON-LD types, one entry
  // per served page.
  const faqBlocks = new Map();
  const schemaTypes = new Map();
  // Phase 43 — retain only the service entities and their visible scope cards.
  const serviceSchemas = new Map();
  // Phase 44 — entity definitions (@id + @type) and bare @id references kept
  // from every page's JSON-LD graph, so the entity-consistency check below
  // needs no second crawl.
  const entities = new Map();
  for (let i = 0; i < locs.length; i += batchSize) {
    const batch = locs.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (loc) => {
        const path = loc.replace(CANONICAL_HOST, "");
        const res = await fetchRes(path);
        let hrefs = null;
        let pageAnchors = null;
        let inCopyCount = 0;
        let leaked = false;
        let title = null;
        let faqBlocks = 0;
        let schemaTypes = null;
        let serviceSchema = null;
        let entityNodes = null;
        if (res.status === 200) {
          const html = await res.text();
          hrefs = extractInternalHrefs(html);
          pageAnchors = extractAnchors(html);
          // Phase 41 — the same pass keeps the served <title> of every page.
          title = extractTitleText(html);
          // Phase 42 — the same pass counts the question-and-answer blocks the
          // page actually renders (inside <main>, so the header's own
          // disclosure widgets cannot count) and keeps the JSON-LD types the
          // page publishes, so the rendered visible Q&A and the FAQPage node
          // that should describe it are compared without a second crawl.
          faqBlocks = countRenderedFaqBlocks(html);
          const nodes = flattenGraph(jsonLdBlocks(html));
          schemaTypes = new Set(nodes.flatMap((node) => typesOf(node)));
          serviceSchema = extractServiceSchema(path, html, nodes);
          entityNodes = collectEntityNodes(nodes);
          // Everything a crawler reads as page text: the flight-data scripts
          // are hydration payload, not copy, so they are set aside first.
          const visible = html.replace(/<script\b[\s\S]*?<\/script>/gi, " ");
          inCopyCount = countInCopyAnchors(visible);
          leaked = UNRENDERED_INLINE_LINK.test(visible);
        }
        return {
          loc,
          path,
          status: res.status,
          hrefs,
          pageAnchors,
          inCopyCount,
          leaked,
          title,
          faqBlocks,
          schemaTypes,
          serviceSchema,
          entityNodes,
        };
      }),
    );
    for (const r of results) {
      if (r.status === 200) ok += 1;
      else {
        bad += 1;
        fail(`sitemap URL ${r.loc} → ${r.status}`);
      }
      if (r.hrefs) graph.set(r.path, r.hrefs);
      if (r.pageAnchors) anchors.set(r.path, r.pageAnchors);
      if (r.status === 200) inCopy.set(r.path, r.inCopyCount);
      if (r.status === 200) titles.set(r.path, r.title);
      if (r.status === 200) faqBlocks.set(r.path, r.faqBlocks);
      if (r.schemaTypes) schemaTypes.set(r.path, r.schemaTypes);
      if (r.serviceSchema) serviceSchemas.set(r.path, r.serviceSchema);
      if (r.entityNodes) entities.set(r.path, r.entityNodes);
      if (r.leaked) leakedMarkup.push(r.path);
    }
  }
  if (bad === 0) pass(`all ${ok} sitemap URLs return 200`);
  else fail(`sitemap sweep ${ok} ok / ${bad} failed`);
  return { graph, anchors, inCopy, titles, leakedMarkup, faqBlocks, schemaTypes, serviceSchemas, entities };
}

/* ------------------------------------------------------------------------ */
/* Phase 41 — the served <title> of every page: budget, brand, uniqueness    */
/*                                                                           */
/* Titles are the one metadata field the site had no guard for. Descriptions  */
/* and H1s are checked for uniqueness by `audit:authority` §6, but titles     */
/* were only ever audited by hand (Phases 9 and 13), and the pages added      */
/* since — 51 sub-services, 11 problem guides, 12 Knowledge Hub guides, the   */
/* project portfolio — drifted: 210 of 678 titles ran past the 65-character   */
/* budget (the longest, an area guide, reached 106), three pairs of pages     */
/* shared one identical title, and the two legal pages in each language       */
/* carried no brand at all. The budget lives in `i18n/seo.ts` and is read     */
/* from there, so this check cannot disagree with the composer that also      */
/* honours it. Titles are checked on the served pages rather than in source    */
/* because project and legal-page titles are composed at render time.         */
/* ------------------------------------------------------------------------ */

/** The single-sourced title budget, read from the module that defines it. */
const TITLE_MAX_LENGTH = (() => {
  const source = readFileSync(
    fileURLToPath(new URL("../i18n/seo.ts", import.meta.url)),
    "utf8",
  );
  const m = source.match(/export const TITLE_MAX_LENGTH\s*=\s*(\d+)/);
  if (!m) {
    fail("i18n/seo.ts no longer exports TITLE_MAX_LENGTH — the title budget check cannot run");
    return 65;
  }
  return Number(m[1]);
})();

/** The brand token every title must carry (Phase 10: the full brand, always). */
const TITLE_BRAND_TOKEN = "Renovix";

function extractTitleText(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!m) return null;
  return m[1]
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function checkTitles(locs, titles) {
  console.log("\n== Title metadata (Phase 41) ==");

  const missing = locs.filter((loc) => {
    const path = loc.replace(CANONICAL_HOST, "");
    return !titles.get(path);
  });
  if (missing.length === 0) pass(`all ${locs.length} served pages render a <title>`);
  else fail(`${missing.length} served pages render no <title> (e.g. ${missing.slice(0, 3).join(", ")})`);

  // 1. Budget.
  const overBudget = [...titles]
    .filter(([, title]) => title.length > TITLE_MAX_LENGTH)
    .sort((a, b) => b[1].length - a[1].length);
  if (overBudget.length === 0) {
    const longest = [...titles.values()].reduce((max, t) => Math.max(max, t.length), 0);
    pass(`all ${titles.size} titles fit the ${TITLE_MAX_LENGTH}-character budget (longest ${longest})`);
  } else {
    for (const [path, title] of overBudget.slice(0, 10)) {
      fail(`title over budget (${title.length} > ${TITLE_MAX_LENGTH}) ${path} :: ${title}`);
    }
    if (overBudget.length > 10) fail(`…and ${overBudget.length - 10} more titles over ${TITLE_MAX_LENGTH} characters`);
  }

  // 2. Brand.
  const noBrand = [...titles].filter(([, title]) => !title.includes(TITLE_BRAND_TOKEN));
  if (noBrand.length === 0) {
    pass(`every title carries the brand token "${TITLE_BRAND_TOKEN}"`);
  } else {
    for (const [path, title] of noBrand.slice(0, 10)) fail(`title carries no brand ${path} :: ${title}`);
    if (noBrand.length > 10) fail(`…and ${noBrand.length - 10} more titles without the brand`);
  }

  // 3. Uniqueness within each language — two indexable pages sharing one title
  //    compete for the same listing and cannot be told apart in a SERP.
  const byLang = new Map();
  for (const [path, title] of titles) {
    const lang = path.split("/")[1];
    const key = `${lang}|${title}`;
    if (!byLang.has(key)) byLang.set(key, []);
    byLang.get(key).push(path);
  }
  const duplicates = [...byLang].filter(([, paths]) => paths.length > 1);
  if (duplicates.length === 0) {
    const perLang = new Set([...titles.keys()].map((p) => p.split("/")[1])).size;
    pass(`titles are unique within each of the ${perLang} published languages`);
  } else {
    for (const [key, paths] of duplicates.slice(0, 10)) {
      fail(`duplicate title "${key.split("|")[1]}" shared by ${paths.join(" , ")}`);
    }
    if (duplicates.length > 10) fail(`…and ${duplicates.length - 10} more duplicated titles`);
  }
}

/* ------------------------------------------------------------------------ */
/* Phase 39 — in-copy internal links on the location and pillar pages        */
/*                                                                           */
/* `data/area-content/` and `data/service-content/` write contextual links    */
/* inline in the copy as `[label](/services/slug)`;                           */
/* `components/service/InlineLinks.tsx` turns them into real anchors. Until    */
/* Phase 39 the English guides carried 279 of those links and the MS/ZH        */
/* translations carried none, so 110 served location pages published their     */
/* in-copy links as plain text; the localized pillar pages were also missing   */
/* one cross-service link each on `/services/general-renovation/`. The copy    */
/* was restored without changing a visible word, and this check proves it at   */
/* the HTTP level: every area guide, region hub and service pillar renders     */
/* in-copy anchors in all three languages, the localized corpora are not       */
/* smaller than the English one, and no page anywhere ships unrendered link    */
/* markup.                                                                    */
/* ------------------------------------------------------------------------ */

/** The class the InlineLinks component stamps on every anchor it renders. */
const IN_COPY_SIGNATURE = (() => {
  const source = readFileSync(
    fileURLToPath(new URL("../components/service/InlineLinks.tsx", import.meta.url)),
    "utf8",
  );
  const m = source.match(/className="([^"]*decoration-brand[^"]*)"/);
  const token = m ? m[1].split(" ").find((c) => c.startsWith("decoration-brand")) : null;
  if (!token) {
    fail("components/service/InlineLinks.tsx no longer stamps a decoration-brand class — the in-copy link check cannot identify its anchors");
  }
  return token;
})();

/** Inline-link markup that reached the browser without being rendered. */
const UNRENDERED_INLINE_LINK = /\]\(\/(?:services|problems|areas|blog|projects)\//;

function countInCopyAnchors(visibleHtml) {
  if (!IN_COPY_SIGNATURE) return 0;
  const signature = IN_COPY_SIGNATURE.replace("/", "\\/");
  const rx = new RegExp(`<a\\b[^>]*class="[^"]*${signature}[^"]*"`, "g");
  return (visibleHtml.match(rx) || []).length;
}

function checkInCopyLinks(locs, inCopy, leakedMarkup) {
  console.log("\n== In-copy internal links (Phase 39) ==");
  const paths = locs.map((loc) => loc.replace(CANONICAL_HOST, ""));

  if (leakedMarkup.length === 0) {
    pass(`no served page renders unrendered inline-link markup (all ${paths.length} URLs checked)`);
  } else {
    leakedMarkup
      .slice(0, 10)
      .forEach((p) => fail(`inline-link markup reached the browser as text on ${p}`));
    if (leakedMarkup.length > 10) fail(`…and ${leakedMarkup.length - 10} more`);
  }

  const locationPaths = paths.filter((p) => /^\/(en|ms|zh)\/areas\/[^/]+(\/[^/]+)?\/$/.test(p));
  const empty = locationPaths.filter((p) => (inCopy.get(p) ?? 0) === 0);
  if (empty.length === 0) {
    pass(
      `all ${locationPaths.length} area guides and region hubs render in-copy internal links (EN/MS/ZH)`,
    );
  } else {
    empty.slice(0, 10).forEach((p) => fail(`location page renders no in-copy internal link: ${p}`));
    if (empty.length > 10) fail(`…and ${empty.length - 10} more`);
  }

  // The 10 service pillar pages render their `intro` / `overviewParagraphs`
  // through the same component, so they are part of the same guarantee.
  const pillarPaths = paths.filter((p) => /^\/(en|ms|zh)\/services\/[^/]+\/$/.test(p));
  const pillarEmpty = pillarPaths.filter((p) => (inCopy.get(p) ?? 0) === 0);
  if (pillarEmpty.length === 0) {
    pass(
      `all ${pillarPaths.length} service pillar pages render in-copy internal links (EN/MS/ZH)`,
    );
  } else {
    pillarEmpty
      .slice(0, 10)
      .forEach((p) => fail(`service pillar page renders no in-copy internal link: ${p}`));
    if (pillarEmpty.length > 10) fail(`…and ${pillarEmpty.length - 10} more`);
  }

  const pillarTotals = { en: 0, ms: 0, zh: 0 };
  for (const p of pillarPaths) pillarTotals[p.split("/")[1]] += inCopy.get(p) ?? 0;
  // Measured after Phase 39: 33 EN / 24 MS / 24 ZH in-copy links on the pillar
  // pages (the localized pillars link every service the English pillar links
  // and their own copy names; the three remaining English-only targets are
  // services the localized paragraph never mentions — see PROJECT_PROGRESS
  // Phase 39). Floors sit just below the measured coverage.
  for (const [lang, floor] of [
    ["en", 30],
    ["ms", 22],
    ["zh", 22],
  ]) {
    if (pillarTotals[lang] >= floor) {
      pass(`/${lang}/ service pillar pages render ${pillarTotals[lang]} in-copy internal links (floor ${floor})`);
    } else {
      fail(
        `/${lang}/ service pillar pages render only ${pillarTotals[lang]} in-copy internal links (floor ${floor}) — a pillar page lost its cross-service links`,
      );
    }
  }

  const totals = { en: 0, ms: 0, zh: 0 };
  for (const p of locationPaths) totals[p.split("/")[1]] += inCopy.get(p) ?? 0;
  // Measured after Phase 39: 279 EN / 337 MS / 339 ZH in-copy links on the
  // location pages (before it: 279 / 18 / 18). The floors sit just below the
  // real coverage so a mass regression fails while genuine copy edits do not.
  for (const [lang, floor] of [
    ["en", 270],
    ["ms", 320],
    ["zh", 320],
  ]) {
    if (totals[lang] >= floor) {
      pass(`/${lang}/ location pages render ${totals[lang]} in-copy internal links (floor ${floor})`);
    } else {
      fail(
        `/${lang}/ location pages render only ${totals[lang]} in-copy internal links (floor ${floor}) — the localized copy lost its contextual links`,
      );
    }
  }
}

/* ------------------------------------------------------------------------ */
/* Phase 28 — internal link graph                                            */
/*                                                                           */
/* The site is fully static, so the rendered link graph is the crawl path:    */
/* a page that nothing links to is only reachable through the sitemap. This   */
/* turns the full-sitemap sweep above into a graph check — no orphan pages,   */
/* every published sub-service page linked from its own service hub and back, */
/* problem guides linking down to the scopes that declare them, and no        */
/* internal link pointing at a URL the site does not serve.                   */
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

function normalizeHref(href) {
  const path = href.split("#")[0].split("?")[0];
  if (!path.startsWith("/") || path.startsWith("/_next/")) return null;
  // Served-but-not-pages targets (feeds, icons, robots) are not part of the
  // page graph and are validated by their own checks.
  if (NON_PAGE_HREFS.has(path)) return null;
  return path.length > 1 && !path.endsWith("/") ? `${path}/` : path;
}

function extractInternalHrefs(html) {
  const out = new Set();
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const path = normalizeHref(m[1]);
    if (path) out.add(path);
  }
  return out;
}

/**
 * Phase 29 — the visible text of every plain-text internal anchor, kept so the
 * sweep can check that no localized page renders a slug as its own label
 * (`/ms/problems/bathroom-leakage/` must never read "Bathroom Leakage").
 */
function extractAnchors(html) {
  const out = [];
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"[^>]*>([^<]*)<\/a>/g)) {
    const path = normalizeHref(m[1]);
    const text = m[2].trim();
    if (path && text) out.push({ path, text });
  }
  return out;
}

/** "bathroom-leakage" → "Bathroom Leakage" — the humanized-slug fingerprint. */
function humanizeSlug(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function checkInternalLinkGraph(locs, graph) {
  console.log("\n== Internal link graph ==");
  const sitemap = new Set(locs.map((loc) => loc.replace(CANONICAL_HOST, "")));

  // 1. No orphan pages: every sitemap URL is linked from at least one other.
  const inbound = new Map();
  for (const [from, hrefs] of graph) {
    for (const to of hrefs) {
      if (!inbound.has(to)) inbound.set(to, new Set());
      inbound.get(to).add(from);
    }
  }
  const orphans = [...sitemap].filter((path) => !inbound.has(path));
  if (orphans.length === 0) {
    pass(`link graph: no orphan pages (all ${sitemap.size} sitemap URLs have an internal inbound link)`);
  } else {
    orphans.slice(0, 10).forEach((o) => fail(`orphan page (no internal inbound link): ${o}`));
    if (orphans.length > 10) fail(`…and ${orphans.length - 10} more orphans`);
  }

  // 2. Hub → spoke: every published sub-service page is linked from its own
  //    service pillar, and links back to it.
  const subServicePaths = [...sitemap].filter((p) =>
    /^\/(en|ms|zh)\/services\/[^/]+\/[^/]+\/$/.test(p),
  );
  let missingFromHub = 0;
  let missingBack = 0;
  for (const path of subServicePaths) {
    const segments = path.split("/").filter(Boolean); // [lang, services, service, sub]
    const hub = `/${segments.slice(0, 3).join("/")}/`;
    if (!graph.get(hub)?.has(path)) missingFromHub += 1;
    if (!graph.get(path)?.has(hub)) missingBack += 1;
  }
  if (missingFromHub === 0) {
    pass(`link graph: all ${subServicePaths.length} sub-service pages are linked from their own service pillar`);
  } else {
    fail(`${missingFromHub} sub-service pages are not linked from their parent service page`);
  }
  if (missingBack === 0) {
    pass(`link graph: all ${subServicePaths.length} sub-service pages link back to their service pillar`);
  } else {
    fail(`${missingBack} sub-service pages do not link back to their parent service page`);
  }

  // 3. Problem guides → the sub-services that declare them.
  const problemPaths = [...sitemap].filter((p) => /^\/(en|ms|zh)\/problems\/[^/]+\/$/.test(p));
  let problemsWithScopes = 0;
  let problemEdges = 0;
  for (const path of problemPaths) {
    const edges = [...(graph.get(path) ?? [])].filter((h) =>
      /^\/(en|ms|zh)\/services\/[^/]+\/[^/]+\/$/.test(h),
    );
    if (edges.length > 0) problemsWithScopes += 1;
    problemEdges += edges.length;
  }
  // 53 of the 57 problem guides have at least one genuinely related
  // sub-service in the registry (four have none and correctly render no
  // block), so the guard sits just below that real coverage.
  if (problemsWithScopes >= 53 && problemEdges >= 180) {
    pass(
      `link graph: ${problemsWithScopes}/${problemPaths.length} problem guides link to related sub-service scopes (${problemEdges} links)`,
    );
  } else {
    fail(
      `problem → sub-service link coverage dropped: ${problemsWithScopes}/${problemPaths.length} guides, ${problemEdges} links`,
    );
  }

  // 3b. Phase 29 — every area guide links down to the specific scopes of work
  //     carried out there (the location → sub-service edge derived from the
  //     intent matrix and the area's own local problems).
  const areaPaths = [...sitemap].filter((p) => /^\/(en|ms|zh)\/areas\/[^/]+\/[^/]+\/$/.test(p));
  let areasWithScopes = 0;
  let areaEdges = 0;
  for (const path of areaPaths) {
    const edges = [...(graph.get(path) ?? [])].filter((h) =>
      /^\/(en|ms|zh)\/services\/[^/]+\/[^/]+\/$/.test(h),
    );
    if (edges.length > 0) areasWithScopes += 1;
    areaEdges += edges.length;
  }
  if (areasWithScopes === areaPaths.length && areaEdges >= areaPaths.length) {
    pass(
      `link graph: all ${areaPaths.length} area guides link to the sub-service scopes carried out there (${areaEdges} links)`,
    );
  } else {
    fail(
      `area → sub-service link coverage incomplete: ${areasWithScopes}/${areaPaths.length} area guides, ${areaEdges} links`,
    );
  }

  // 3c. Phase 30 — problem guides → photographed project proof. The inverse of
  //     the Phase 21 project → problem edge: a problem guide links to a
  //     project only when a sub-service mapped to that project declares the
  //     problem, and every project's related-guides section renders its whole
  //     problem union (never clipped by its cap of six), so every rendered
  //     reverse edge must be answered by a forward link on the project page.
  const projectPaths = new Set(
    [...sitemap].filter((p) => /^\/(en|ms|zh)\/projects\/[^/]+\/$/.test(p)),
  );
  let problemsWithProjects = 0;
  let problemProjectEdges = 0;
  let unreturnedProjectEdges = 0;
  for (const path of problemPaths) {
    const edges = [...(graph.get(path) ?? [])].filter((h) => projectPaths.has(h));
    if (edges.length > 0) problemsWithProjects += 1;
    problemProjectEdges += edges.length;
    for (const target of edges) {
      if (!graph.get(target)?.has(path)) unreturnedProjectEdges += 1;
    }
  }
  // 25 of the 57 problem guides have at least one genuinely mapped project
  // (the other 32 correctly render no section), giving 75 pages and 156
  // rendered edges; the guard sits just below that real coverage.
  if (problemsWithProjects >= 73 && problemProjectEdges >= 150) {
    pass(
      `link graph: ${problemsWithProjects}/${problemPaths.length} problem guides link to genuinely mapped projects (${problemProjectEdges} links)`,
    );
  } else {
    fail(
      `problem → project link coverage dropped: ${problemsWithProjects}/${problemPaths.length} guides, ${problemProjectEdges} links`,
    );
  }
  if (unreturnedProjectEdges === 0) {
    pass("link graph: every problem → project link is answered by the project's own related-guides link back");
  } else {
    fail(`${unreturnedProjectEdges} problem → project links point at projects that do not link back (edge drift)`);
  }

  // 3d. Phase 31 — owner-checklist completeness: service ↔ area and
  //     sub-service ↔ area. Every service pillar and every sub-service page
  //     must link to ALL published area guides of its own language (the
  //     "where we work" block), and every area guide must link back to its
  //     locally-noted services. Deterministic counts — anything short of
  //     full coverage is a regression.
  const servicePaths = [...sitemap].filter((p) =>
    /^\/(en|ms|zh)\/services\/[^/]+\/$/.test(p),
  );
  const areasByLang = { en: new Set(), ms: new Set(), zh: new Set() };
  for (const a of areaPaths) areasByLang[a.split("/")[1]].add(a);

  let areaLinksMissing = 0;
  for (const path of [...servicePaths, ...subServicePaths]) {
    const hrefs = graph.get(path) ?? new Set();
    for (const area of areasByLang[path.split("/")[1]]) {
      if (!hrefs.has(area)) areaLinksMissing += 1;
    }
  }
  const expectedAreaLinks =
    (servicePaths.length + subServicePaths.length) * areasByLang.en.size;
  if (areaLinksMissing === 0) {
    pass(
      `link graph: every one of ${servicePaths.length + subServicePaths.length} service + sub-service pages links to all ${areasByLang.en.size} area guides of its language (${expectedAreaLinks} links)`,
    );
  } else {
    fail(
      `${areaLinksMissing} service/sub-service → area links missing (expected ${expectedAreaLinks}, every page must reach every published area guide)`,
    );
  }

  let areasWithServices = 0;
  for (const path of areaPaths) {
    const svcEdges = [...(graph.get(path) ?? [])].filter((h) =>
      /^\/(en|ms|zh)\/services\/[^/]+\/$/.test(h),
    ).length;
    // Every guide carries six locally-noted services; fewer means the
    // services section lost coverage.
    if (svcEdges >= 6) areasWithServices += 1;
  }
  if (areasWithServices === areaPaths.length) {
    pass(
      `link graph: all ${areaPaths.length} area guides link back to at least 6 service pillars`,
    );
  } else {
    fail(
      `area → service link coverage incomplete: only ${areasWithServices}/${areaPaths.length} area guides link to ≥6 services`,
    );
  }

  // 3e. Phase 32 — project pages → the Knowledge Hub guides that reference
  //     them. The inverse of the article-side relatedProjects edge: a blog
  //     guide renders links to the projects it declares, and a project page
  //     renders every guide that declares it, so every rendered blog →
  //     project edge must be answered by a project → blog edge back.
  //     15 authored (article, project) pairs cover 13 of the 28 projects;
  //     the other 15 correctly render no guide block.
  const blogArticlePaths = new Set(
    [...sitemap].filter((p) => /^\/(en|ms|zh)\/blog\/[^/]+\/$/.test(p)),
  );
  let projectsWithGuides = 0;
  let projectGuideEdges = 0;
  let unreturnedBlogProjectEdges = 0;
  for (const path of blogArticlePaths) {
    for (const target of graph.get(path) ?? []) {
      if (projectPaths.has(target) && !graph.get(target)?.has(path)) {
        unreturnedBlogProjectEdges += 1;
      }
    }
  }
  for (const path of projectPaths) {
    const edges = [...(graph.get(path) ?? [])].filter((h) =>
      blogArticlePaths.has(h),
    );
    if (edges.length > 0) projectsWithGuides += 1;
    projectGuideEdges += edges.length;
  }
  if (projectsWithGuides >= 37 && projectGuideEdges >= 42) {
    pass(
      `link graph: ${projectsWithGuides}/${projectPaths.size} project pages link to the guides that reference them (${projectGuideEdges} links)`,
    );
  } else {
    fail(
      `project → blog guide coverage dropped: ${projectsWithGuides}/${projectPaths.size} pages, ${projectGuideEdges} links`,
    );
  }
  if (unreturnedBlogProjectEdges === 0) {
    pass("link graph: every blog → project link is answered by the project's own guide links back");
  } else {
    fail(`${unreturnedBlogProjectEdges} blog → project links point at projects that do not link back (edge drift)`);
  }

  // 3f. Phase 35 — region hubs → the scope and problem layers their own area
  //     guides carry. The two hubs rendered a service layer but linked to no
  //     sub-service page and no problem guide, even though all 53 of their own
  //     guides did. Both lists are pure unions of what those child guides
  //     render (`getSubServicesForRegion` / `getRegionProblemSlugs`), so every
  //     rendered hub link must also resolve, and every hub must carry both.
  const regionHubPaths = [...sitemap].filter((p) =>
    /^\/(en|ms|zh)\/areas\/[^/]+\/$/.test(p),
  );
  let hubsWithScopes = 0;
  let regionScopeEdges = 0;
  let hubsWithProblems = 0;
  let regionProblemEdges = 0;
  for (const path of regionHubPaths) {
    const hrefs = graph.get(path) ?? new Set();
    const scopeEdges = [...hrefs].filter((h) =>
      /^\/(en|ms|zh)\/services\/[^/]+\/[^/]+\/$/.test(h),
    );
    const problemEdges = [...hrefs].filter((h) => /^\/(en|ms|zh)\/problems\/[^/]+\/$/.test(h));
    if (scopeEdges.length > 0) hubsWithScopes += 1;
    if (problemEdges.length > 0) hubsWithProblems += 1;
    regionScopeEdges += scopeEdges.length;
    regionProblemEdges += problemEdges.length;
  }
  // Six hubs (2 regions × 3 languages), each capped at 12 scopes and 12
  // problems; the guard sits well below that real coverage so a genuine
  // coverage drop fails while an ordinary cap change does not.
  if (hubsWithScopes === regionHubPaths.length && regionScopeEdges >= regionHubPaths.length * 8) {
    pass(
      `link graph: all ${regionHubPaths.length} region hubs link to the sub-service scopes their area guides carry (${regionScopeEdges} links)`,
    );
  } else {
    fail(
      `region → sub-service link coverage incomplete: ${hubsWithScopes}/${regionHubPaths.length} hubs, ${regionScopeEdges} links`,
    );
  }
  if (hubsWithProblems === regionHubPaths.length && regionProblemEdges >= regionHubPaths.length * 8) {
    pass(
      `link graph: all ${regionHubPaths.length} region hubs link to the problem guides their area guides note (${regionProblemEdges} links)`,
    );
  } else {
    fail(
      `region → problem link coverage incomplete: ${hubsWithProblems}/${regionHubPaths.length} hubs, ${regionProblemEdges} links`,
    );
  }

  // 3g. Phase 40 — service pillar → the problem guides that name it as their
  //     owner. Every problem guide already linked up to the service that fixes
  //     it, but the flooring, welding and general-renovation pillars linked
  //     none of their own guides back (11 guides, 33 localized pages), so those
  //     pages had no hub link at all. The registry edge is now required by
  //     `audit:authority` §3b; this proves it renders in all three languages.
  //     The reverse is deliberately not asserted — a pillar may legitimately
  //     cross-link another service's problem guides.
  const reverseInbound = new Map();
  for (const [from, hrefs] of graph) {
    for (const to of hrefs) {
      if (!reverseInbound.has(to)) reverseInbound.set(to, new Set());
      reverseInbound.get(to).add(from);
    }
  }
  let problemsWithoutPillar = 0;
  let problemPillarEdges = 0;
  for (const path of problemPaths) {
    const lang = path.split("/")[1];
    const pillarEdges = [...(reverseInbound.get(path) ?? [])].filter((from) =>
      new RegExp(`^/${lang}/services/[^/]+/$`).test(from),
    );
    if (pillarEdges.length === 0) problemsWithoutPillar += 1;
    problemPillarEdges += pillarEdges.length;
  }
  if (problemsWithoutPillar === 0) {
    pass(
      `link graph: all ${problemPaths.length} problem guides are linked from the service pillar that owns them (${problemPillarEdges} links)`,
    );
  } else {
    fail(
      `${problemsWithoutPillar} of ${problemPaths.length} problem guides are not linked from any service pillar page (service → problem hub link missing)`,
    );
  }

  // 3h. Phase 41 — region hubs → the Knowledge Hub guides their own area
  //     guides publish. Area guides rendered that layer from Phase 20, and
  //     Phase 35 gave the hubs the other two layers their children carry
  //     (scopes, problems), but the guide layer was left out: both hubs linked
  //     0 guides in all three languages. `getArticlesForRegion()` derives the
  //     list as the union of its children's declared locations, so a hub can
  //     only ever surface a guide at least one of its own guides carries.
  let hubsWithGuides = 0;
  let regionGuideEdges = 0;
  for (const path of regionHubPaths) {
    const hrefs = graph.get(path) ?? new Set();
    const guideEdges = [...hrefs].filter((h) => blogArticlePaths.has(h));
    if (guideEdges.length > 0) hubsWithGuides += 1;
    regionGuideEdges += guideEdges.length;
  }
  // Six hubs (2 regions × 3 languages); every guide in the library is declared
  // by areas in both regions, so the real coverage is 12 per hub and the floor
  // sits well below it — a mass regression fails, an editorial cap change does
  // not.
  if (hubsWithGuides === regionHubPaths.length && regionGuideEdges >= regionHubPaths.length * 8) {
    pass(
      `link graph: all ${regionHubPaths.length} region hubs link to the Knowledge Hub guides their area guides publish (${regionGuideEdges} links)`,
    );
  } else {
    fail(
      `region → guide link coverage incomplete: ${hubsWithGuides}/${regionHubPaths.length} hubs, ${regionGuideEdges} links`,
    );
  }

  // 4. No internal link may point at a URL the site does not serve.
  const deadLinks = new Map();
  for (const [from, hrefs] of graph) {
    for (const to of hrefs) {
      if (sitemap.has(to) || NON_PAGE_HREFS.has(to)) continue;
      if (!deadLinks.has(to)) deadLinks.set(to, new Set());
      deadLinks.get(to).add(from);
    }
  }
  if (deadLinks.size === 0) {
    pass("link graph: every internal link points at a served page");
  } else {
    for (const [target, sources] of [...deadLinks].slice(0, 10)) {
      fail(`internal link to unserved URL ${target} (from ${[...sources].slice(0, 3).join(", ")})`);
    }
    if (deadLinks.size > 10) fail(`…and ${deadLinks.size - 10} more unserved internal targets`);
  }
}

/**
 * Phase 33 — the AI-readable summary must enumerate the pages the site
 * actually serves. `/llms.txt` lists every service, sub-service, region
 * overview, area guide, guide and published project in full (the 57 problem
 * guides are a deliberate sample behind their index link).
 *
 * The live sitemap is the crawl-true record of what is served, so the two are
 * compared in both directions per family: a family that silently drops out of
 * the feed (the Phase 33 defect — 28 published project pages were reachable
 * only through the portfolio index) and a URL the feed advertises that the
 * site no longer serves (stale entry after a page is unpublished).
 */
async function checkAiFeedCoverage(locs) {
  console.log("\n== AI feed coverage (/llms.txt) ==");
  const { status, text } = await fetchText("/llms.txt");
  if (status !== 200) {
    fail(`/llms.txt status ${status}`);
    return;
  }

  const served = new Set(locs.map((loc) => loc.replace(CANONICAL_HOST, "")));
  const listed = new Set(
    [...text.matchAll(/\((https:\/\/renovixhomeservices\.my\/[^)\s]+)\)/g)].map(
      (m) => m[1].replace(CANONICAL_HOST, ""),
    ),
  );

  // English URLs only: the summary is written once, in the canonical
  // language, and every entry is a self-canonical English page.
  const families = [
    ["service page", /^\/en\/services\/[^/]+\/$/],
    ["sub-service page", /^\/en\/services\/[^/]+\/[^/]+\/$/],
    ["region overview", /^\/en\/areas\/[^/]+\/$/],
    ["area guide", /^\/en\/areas\/[^/]+\/[^/]+\/$/],
    // Phase 42 — problem guides join the fully-enumerated families. Until now
    // this feed listed 12 of the 57 guides behind an index link while
    // `/ai/business.json` carried all 57 and every other family here was
    // complete, so the one document written for answer engines cited a fifth
    // of the symptom corpus. The sample floor below is gone: the family is now
    // compared in both directions like every other one.
    ["problem guide", /^\/en\/problems\/[^/]+\/$/],
    ["guide", /^\/en\/blog\/[^/]+\/$/],
    ["project page", /^\/en\/projects\/[^/]+\/$/],
  ];

  for (const [label, pattern] of families) {
    const expected = [...served].filter((p) => pattern.test(p));
    const missing = expected.filter((p) => !listed.has(p));
    const stale = [...listed].filter(
      (p) => pattern.test(p) && !served.has(p),
    );
    if (missing.length === 0 && stale.length === 0) {
      pass(`/llms.txt lists all ${expected.length} ${label}s, none unserved`);
    } else {
      if (missing.length) {
        fail(
          `/llms.txt omits ${missing.length}/${expected.length} ${label}s (e.g. ${missing.slice(0, 3).join(", ")})`,
        );
      }
      if (stale.length) {
        fail(
          `/llms.txt lists ${stale.length} ${label} URLs the site does not serve (e.g. ${stale.slice(0, 3).join(", ")})`,
        );
      }
    }
  }

  // The symptom corpus is now enumerated in full, but readers still need the
  // one-line route into the browsable index.
  if (listed.has("/en/problems/")) {
    pass("/llms.txt keeps the all-problem-guides index link");
  } else {
    fail("/llms.txt no longer links the problem-guide index at /en/problems/");
  }
}

/**
 * Phase 42 — every page that renders question-and-answer copy must publish the
 * `FAQPage` node that describes it, and no page may claim a `FAQPage` node for
 * Q&As it does not render.
 *
 * The site's own rule (`components/seo/schema.ts`) is that an `FAQPage` node is
 * built "from the same Q&A data the visible FAQ section renders" — a node is
 * only honest if the page shows what it claims. That rule had no guard: the
 * homepage rendered six questions in `FAQPreview` and published no node at all,
 * the one page on the site out of step with `/faq/` and `/quote/`. This check
 * compares the rendered page against the served JSON-LD on all 678 URLs, so the
 * two halves cannot drift apart again in either direction.
 */
function countRenderedFaqBlocks(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  const scope = main ? main[1] : html;
  // A rendered Q&A block is a <details> disclosure: the accordion every FAQ
  // section on this site renders, and nothing else uses the element.
  return (scope.match(/<details\b/g) || []).length;
}

function checkVisibleFaqCoverage(locs, faqBlocks, schemaTypes) {
  console.log("\n== Rendered Q&A vs FAQPage (Phase 42) ==");

  const withBlocks = [];
  const missing = [];
  const overclaiming = [];

  for (const loc of locs) {
    const path = loc.replace(CANONICAL_HOST, "");
    const blocks = faqBlocks.get(path) ?? 0;
    const types = schemaTypes.get(path);
    if (!types) continue;
    const hasFaq = types.has("FAQPage");
    if (blocks > 0) withBlocks.push({ path, blocks });
    if (blocks > 0 && !hasFaq) missing.push(`${path} (${blocks} rendered)`);
    if (blocks === 0 && hasFaq) overclaiming.push(path);
  }

  if (missing.length === 0) {
    pass(
      `all ${withBlocks.length} pages rendering visible Q&A publish a FAQPage node for it`,
    );
  } else {
    fail(
      `${missing.length} page(s) render visible Q&A with no FAQPage node (e.g. ${missing
        .slice(0, 4)
        .join(", ")})`,
    );
  }

  if (overclaiming.length === 0) {
    pass("no page publishes a FAQPage node without rendered Q&A on the page");
  } else {
    fail(
      `${overclaiming.length} page(s) publish a FAQPage node with no rendered Q&A (e.g. ${overclaiming
        .slice(0, 4)
        .join(", ")})`,
    );
  }

  // A regression floor: the corpus really is Q&A-bearing, so the check above
  // cannot pass by finding nothing to look at.
  if (withBlocks.length >= 560) {
    pass(`${withBlocks.length} pages render Q&A blocks (floor 560)`);
  } else {
    fail(
      `only ${withBlocks.length} pages render Q&A blocks (floor 560) — the corpus or the counter changed`,
    );
  }

  // The homepage is why this block exists: it was the sole page rendering Q&A
  // with no node. Assert it directly so the regression has a name.
  for (const code of ["en", "ms", "zh"]) {
    const path = `/${code}/`;
    const blocks = faqBlocks.get(path) ?? 0;
    const types = schemaTypes.get(path);
    if (types && blocks > 0 && types.has("FAQPage")) {
      pass(`${path} renders ${blocks} Q&A blocks and publishes the FAQPage node`);
    } else {
      fail(
        `${path} renders ${blocks} Q&A blocks and publishes ${
          types && types.has("FAQPage") ? "a FAQPage node" : "no FAQPage node"
        } — homepage Q&A must be described by structured data (Phase 42)`,
      );
    }
  }
}

/**
 * Phase 43 — complete, connected Service entities, checked against the page.
 * The overview cards (208 EN scopes, repeated in MS/ZH) are not the same
 * inventory as the 51 standalone sub-service pages. Compare each pillar's
 * OfferCatalog with its own rendered cards, then verify every detailed scope
 * points at the existing business and its own localized pillar Service @id.
 */
const SERVICE_PILLAR_PATH = /^\/(?:en|ms|zh)\/services\/[^/]+\/$/;
const SUB_SERVICE_PATH = /^\/(?:en|ms|zh)\/services\/[^/]+\/[^/]+\/$/;
const normalizeSchemaCopy = (text) => typeof text === "string"
  ? text.replace(/\s+/g, " ").trim()
  : null;

function serviceScopeHtmlText(html) {
  // Decode once: React escapes these characters in HTML, not in JSON-LD.
  const entities = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
  return normalizeSchemaCopy(html.replace(/<[^>]*>/g, "").replace(
    /&(amp|lt|gt|quot|apos|nbsp|#x[0-9a-f]+|#\d+);/gi,
    (entity, code) => {
      if (!code.startsWith("#")) return entities[code.toLowerCase()];
      const hex = code.slice(0, 2).toLowerCase() === "#x";
      const point = Number.parseInt(code.slice(hex ? 2 : 1), hex ? 16 : 10);
      return point <= 0x10ffff ? String.fromCodePoint(point) : entity;
    },
  ));
}

function extractServiceSchema(path, html, nodes) {
  const isPillar = SERVICE_PILLAR_PATH.test(path);
  if (!isPillar && !SUB_SERVICE_PATH.test(path)) return null;

  const visibleScopes = [];
  if (isPillar) {
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
    // SubServicesSection's overview cards are the only <li> elements with
    // these three classes. Match tokens, not their order. An empty extraction
    // fails below, so a markup change cannot silently disable the comparison.
    for (const card of main.matchAll(/<li\b([^>]*)>([\s\S]*?)<\/li>/gi)) {
      const classes = new Set((card[1].match(/\bclass="([^"]*)"/)?.[1] ?? "").split(/\s+/));
      if (!["card", "h-full", "p-5"].every((token) => classes.has(token))) continue;
      visibleScopes.push({
        name: serviceScopeHtmlText(card[2].match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/i)?.[1] ?? ""),
        description: serviceScopeHtmlText(card[2].match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? ""),
      });
    }
  }

  return {
    nodes: nodes.filter((node) => typesOf(node).includes("Service")),
    organizationIds: nodes
      .filter((node) => typesOf(node).includes("Organization") && typesOf(node).includes("LocalBusiness"))
      .map((node) => node["@id"]),
    visibleScopes,
  };
}

function checkServiceSchemaCoverage(locs, serviceSchemas, graph) {
  console.log("\n== Service catalogue + entity links (Phase 43) ==");
  const paths = locs.map((loc) => loc.replace(CANONICAL_HOST, ""));
  const pillars = paths.filter((path) => SERVICE_PILLAR_PATH.test(path));
  const scopes = paths.filter((path) => SUB_SERVICE_PATH.test(path));
  if (pillars.length === 0 || scopes.length === 0) {
    fail("service schema comparison needs both pillar and sub-service pages; found an empty family");
    return;
  }

  const servicePaths = [...pillars, ...scopes];
  const primary = new Map();
  const invalid = [];
  for (const path of servicePaths) {
    const canonical = `${CANONICAL_HOST}${path}`;
    const matches = (serviceSchemas.get(path)?.nodes ?? []).filter(
      (node) => node["@id"] === `${canonical}#service` && node.url === canonical,
    );
    if (matches.length === 1) primary.set(path, matches[0]);
    else invalid.push(path);
  }
  if (invalid.length === 0) pass(`all ${servicePaths.length} service pages publish one canonical Service entity`);
  else fail(`${invalid.length} service page(s) lack a unique canonical Service entity (e.g. ${invalid.slice(0, 3).join(", ")})`);

  const organizationId = `${CANONICAL_HOST}/#organization`;
  const badProviders = servicePaths.filter((path) =>
    primary.get(path)?.provider?.["@id"] !== organizationId ||
    !serviceSchemas.get(path)?.organizationIds.includes(organizationId),
  );
  if (badProviders.length === 0) pass(`all ${servicePaths.length} Service entities reference the shared Organization/LocalBusiness provider`);
  else fail(`${badProviders.length} Service entities lack the shared provider link (e.g. ${badProviders.slice(0, 3).join(", ")})`);

  const badParents = scopes.filter((path) => {
    const parent = path.replace(/[^/]+\/$/, "");
    const related = primary.get(path)?.isRelatedTo;
    const targets = Array.isArray(related) ? related : [related];
    return !primary.has(parent) || !graph.get(path)?.has(parent) || !targets.some(
      (target) => target?.["@id"] === `${CANONICAL_HOST}${parent}#service`,
    );
  });
  if (badParents.length === 0) pass(`all ${scopes.length} sub-service entities link their own served, visibly linked parent Service`);
  else fail(`${badParents.length} sub-service entities lack their own localized parent Service link (e.g. ${badParents.slice(0, 3).join(", ")})`);

  const badCatalogues = [];
  let visibleTotal = 0;
  for (const path of pillars) {
    const expected = serviceSchemas.get(path)?.visibleScopes ?? [];
    visibleTotal += expected.length;
    const catalogue = primary.get(path)?.hasOfferCatalog;
    const items = Array.isArray(catalogue?.itemListElement) ? catalogue.itemListElement : [];
    const actual = items.map((offer) => ({
      name: normalizeSchemaCopy(offer.itemOffered?.name),
      description: normalizeSchemaCopy(offer.itemOffered?.description),
    }));
    if (
      expected.length === 0 || expected.some((item) => !item.name || !item.description) ||
      !typesOf(catalogue ?? {}).includes("OfferCatalog") ||
      items.some((offer) => !typesOf(offer).includes("Offer") || !typesOf(offer.itemOffered ?? {}).includes("Service")) ||
      JSON.stringify(actual) !== JSON.stringify(expected)
    ) {
      badCatalogues.push(`${path} (${actual.length} schema / ${expected.length} visible)`);
    }
  }
  if (badCatalogues.length === 0) pass(`all ${pillars.length} OfferCatalogs match all ${visibleTotal} visible scope names and descriptions, in page order`);
  else fail(`${badCatalogues.length} OfferCatalogs differ from their complete visible scopes (e.g. ${badCatalogues.slice(0, 3).join(", ")})`);
}

/**
 * Phase 44 — one entity, one identity, everywhere. The site defines each
 * entity once and references it by `@id`; where a page restates a foreign
 * entity inline (project pages re-publishing their pillar's `#service` node),
 * every restated field must match the owner's values — an entity that answers
 * engines find under two names is two entities. Over all 678 pages the sweep
 * compares `name`, `url` and `serviceType` of every typed definition, and
 * verifies that every bare `{"@id": …}` reference resolves to an entity the
 * site actually publishes. Nothing here hard-codes an expected name: the
 * pillar page owns the truth, every other page must agree with it.
 */
function checkEntityGraphConsistency(locs, pageEntities) {
  console.log("\n== Entity graph consistency (Phase 44) ==");
  const defs = new Map();
  const refs = [];
  let scanned = 0;
  for (const loc of locs) {
    const path = loc.replace(CANONICAL_HOST, "");
    const entry = pageEntities.get(path);
    if (!entry) continue;
    scanned += 1;
    for (const def of entry.defs) {
      if (!defs.has(def.id)) defs.set(def.id, []);
      defs.get(def.id).push({ path, fields: def.fields });
    }
    for (const id of entry.refs) refs.push({ path, id });
  }
  if (defs.size === 0 || refs.length === 0) {
    fail("entity consistency check needs at least one definition and one reference; the extraction returned an empty set");
    return;
  }

  const conflicts = [];
  let shared = 0;
  for (const [id, ds] of [...defs].sort()) {
    if (ds.length < 2) continue;
    shared += 1;
    const byField = new Map();
    for (const d of ds) {
      for (const [field, value] of d.fields) {
        if (!byField.has(field)) byField.set(field, new Map());
        const byValue = byField.get(field);
        if (!byValue.has(value)) byValue.set(value, []);
        byValue.get(value).push(d.path);
      }
    }
    for (const [field, byValue] of byField) {
      if (byValue.size > 1) {
        const [first, ...rest] = [...byValue];
        conflicts.push(
          `${id} — "${field}" published as ${JSON.stringify(first[0])} (e.g. ${first[1][0]}) ` +
          `but also ${JSON.stringify(rest[0][0])} (e.g. ${rest[0][1][0]})`,
        );
      }
    }
  }
  if (conflicts.length === 0) {
    pass(`all ${shared} entities re-declared across pages agree with their owner page on name, URL and serviceType (${defs.size} definitions on ${scanned} pages)`);
  } else {
    for (const c of conflicts.slice(0, 8)) fail(c);
    if (conflicts.length > 8) fail(`…and ${conflicts.length - 8} more conflicting entities`);
  }

  const unresolved = [];
  for (const { path, id } of refs) {
    if (!defs.has(id)) unresolved.push(`${path} references ${id}`);
  }
  if (unresolved.length === 0) {
    pass(`all ${refs.length} entity @id references on the sitemap pages resolve to an entity the site publishes`);
  } else {
    for (const u of unresolved.slice(0, 8)) fail(`unresolved entity reference: ${u}`);
    if (unresolved.length > 8) fail(`…and ${unresolved.length - 8} more unresolved references`);
  }
}


/**
 * Phase 34 — the AI feed must carry the phrasing tables for every language
 * the site serves. `/ai/business.json` publishes (phrase → kind + slug)
 * tuples so an assistant can map a customer's own words to the page that
 * answers them; a Malay or Chinese customer phrases the query in their own
 * language, so shipping only the English table left the site's two other
 * published languages unmappable even though the Smart Service Finder itself
 * matches them (`app/[lang]/search/page.tsx`).
 *
 * Both halves are checked against the live sitemap, because a phrasing table
 * is only useful if every entry resolves to a page the site actually serves
 * in that language: one table per code in `supportedLanguages`, each
 * non-empty, and every (kind, slug) resolving to a real `/{lang}/…` page.
 */
async function checkAiPhrasingCoverage(locs) {
  console.log("\n== AI feed phrasing tables (/ai/business.json) ==");
  const res = await fetchRes("/ai/business.json");
  if (res.status !== 200) {
    fail(`/ai/business.json status ${res.status}`);
    return;
  }
  let feed;
  try {
    feed = await res.json();
  } catch {
    fail("/ai/business.json is not valid JSON");
    return;
  }

  // Index the served URLs by language and section so each phrasing can be
  // resolved by slug alone (a sub-service slug is unique across services, and
  // the guard only asserts the page exists for that language, not the parent).
  const served = new Map();
  const bucket = (lang, section) => {
    if (!served.has(lang)) served.set(lang, new Map());
    const bySection = served.get(lang);
    if (!bySection.has(section)) bySection.set(section, new Set());
    return bySection.get(section);
  };
  for (const loc of locs) {
    const [, lang, section, a, b] = loc.replace(CANONICAL_HOST, "").split("/");
    if (!lang || !section) continue;
    if (a && !b) bucket(lang, section).add(a);
    else if (a && b) bucket(lang, `${section}/nested`).add(b);
  }

  const kinds = [
    ["service", "services"],
    ["problem", "problems"],
    ["area", "areas/nested"],
    ["sub-service", "services/nested"],
  ];
  const codes = feed?.searchIntents?.supportedLanguages;
  if (!Array.isArray(codes) || codes.length < 3) {
    fail(
      `/ai/business.json supportedLanguages ${Array.isArray(codes) ? codes.length : "missing"} — expected the site's published languages`,
    );
    return;
  }

  for (const code of codes) {
    const key = code === "en" ? "englishPhrasings" : `${code}Phrasings`;
    const entries = feed?.searchIntents?.[key];
    if (!Array.isArray(entries) || entries.length === 0) {
      fail(`/ai/business.json ${key} missing or empty for supported language "${code}"`);
      continue;
    }
    const unresolved = [];
    const unknownKinds = new Set();
    for (const entry of entries) {
      const section = kinds.find(([kind]) => kind === entry.kind)?.[1];
      if (!section) {
        unknownKinds.add(entry.kind);
        continue;
      }
      if (!bucket(code, section).has(entry.slug)) {
        unresolved.push(`${entry.kind}:${entry.slug}`);
      }
    }
    if (unknownKinds.size) {
      fail(`/ai/business.json ${key} uses unknown kinds: ${[...unknownKinds].join(", ")}`);
    } else if (unresolved.length === 0) {
      pass(
        `/ai/business.json ${key}: all ${entries.length} phrasings resolve to served ${code} pages`,
      );
    } else {
      fail(
        `/ai/business.json ${key}: ${unresolved.length}/${entries.length} phrasings point at pages the site does not serve (e.g. ${unresolved.slice(0, 3).join(", ")})`,
      );
    }
  }
}

/**
 * Phase 36 — the entity catalogue must publish the localized address of every
 * page it lists, not only the English one.
 *
 * The feed declares three supported languages, publishes three homepages and
 * three phrasing tables, and those tables resolve Malay and Chinese customer
 * wording to `/ms/…` and `/zh/…` pages. But every service, sub-service,
 * problem, project, guide and area entry carried `url` pointing at `/en/`
 * only — so an assistant answering a Malay or Chinese query was handed the
 * English page. `urls` (one entry per published language, derived from the
 * language registry) closes that: the check reads the served feed, requires a
 * map covering every declared language on every entity of every family, and
 * resolves each entry against the live sitemap in its own language tree, in
 * both directions — a language that silently drops out fails, and so does a
 * URL the site no longer serves.
 */
async function checkAiLocalizedUrlCoverage(locs) {
  console.log("\n== AI feed localized URLs (/ai/business.json) ==");
  const res = await fetchRes("/ai/business.json");
  if (res.status !== 200) {
    fail(`/ai/business.json status ${res.status}`);
    return;
  }
  let feed;
  try {
    feed = await res.json();
  } catch {
    fail("/ai/business.json is not valid JSON");
    return;
  }

  const served = new Set(locs.map((loc) => loc.replace(CANONICAL_HOST, "")));
  const codes = feed?.searchIntents?.supportedLanguages;
  if (!Array.isArray(codes) || codes.length < 3) {
    fail("/ai/business.json supportedLanguages missing — cannot check localized URLs");
    return;
  }

  /** Every entity the feed lists, as { label, urls }. */
  const entities = [
    ...(feed?.services ?? []).map((e) => ({ label: `service:${e.slug}`, urls: e.urls })),
    ...(feed?.subServices?.scopes ?? []).map((e) => ({
      label: `sub-service:${e.slug}`,
      urls: e.urls,
    })),
    ...(feed?.problems?.guides ?? []).map((e) => ({
      label: `problem:${e.url.split("/").filter(Boolean).pop()}`,
      urls: e.urls,
    })),
    ...(feed?.projects?.published ?? []).map((e) => ({
      label: `project:${e.url.split("/").filter(Boolean).pop()}`,
      urls: e.urls,
    })),
    ...(feed?.knowledgeHub?.articles ?? []).map((e) => ({
      label: `guide:${e.url.split("/").filter(Boolean).pop()}`,
      urls: e.urls,
    })),
    ...(feed?.serviceArea?.areaGuides ?? []).map((e) => ({
      label: `area:${e.url.split("/").filter(Boolean).pop()}`,
      urls: e.urls,
    })),
    ...(feed?.serviceArea?.regions ?? []).flatMap((region) => [
      { label: `region:${region.id}`, urls: region.urls },
      ...(region.districts ?? []).flatMap((district) =>
        (district.locations ?? []).map((location) => ({
          label: `area:${location.url.split("/").filter(Boolean).pop()}`,
          urls: location.urls,
        })),
      ),
    ]),
  ];

  if (entities.length === 0) {
    fail("/ai/business.json lists no entities to localize");
    return;
  }

  const missingMap = [];
  const missingLang = [];
  const unserved = [];
  let checked = 0;

  for (const entity of entities) {
    if (!entity.urls || typeof entity.urls !== "object") {
      missingMap.push(entity.label);
      continue;
    }
    for (const code of codes) {
      const url = entity.urls[code];
      if (typeof url !== "string" || !url) {
        missingLang.push(`${entity.label} (${code})`);
        continue;
      }
      checked += 1;
      const path = url.startsWith(CANONICAL_HOST) ? url.slice(CANONICAL_HOST.length) : url;
      if (!served.has(path)) unserved.push(`${entity.label} → ${path}`);
      // A language's entry must live in that language's own tree — a map that
      // repeats the English URL three times would pass every other check.
      if (!path.startsWith(`/${code}/`)) {
        unserved.push(`${entity.label} ${code} entry is outside the /${code}/ tree: ${path}`);
      }
    }
  }

  if (missingMap.length === 0) {
    pass(`/ai/business.json: all ${entities.length} catalogued entities publish a per-language URL map`);
  } else {
    fail(
      `/ai/business.json: ${missingMap.length}/${entities.length} entities have no urls map (e.g. ${missingMap.slice(0, 3).join(", ")})`,
    );
  }
  if (missingLang.length === 0) {
    pass(`/ai/business.json: every entity URL map covers all ${codes.length} supported languages (${checked} URLs checked)`);
  } else {
    fail(
      `/ai/business.json: ${missingLang.length} entity/language URLs missing (e.g. ${missingLang.slice(0, 3).join(", ")})`,
    );
  }
  if (unserved.length === 0) {
    pass(`/ai/business.json: all ${checked} localized entity URLs resolve to served pages`);
  } else {
    fail(
      `/ai/business.json: ${unserved.length} localized entity URLs point at pages the site does not serve (e.g. ${unserved.slice(0, 3).join(", ")})`,
    );
  }

  // The twelve top-level entry points, per language.
  const byLang = feed?.keyPagesByLanguage;
  if (!byLang || typeof byLang !== "object") {
    fail("/ai/business.json keyPagesByLanguage missing — assistants cannot reach the localized entry points");
  } else {
    const missing = [];
    const dead = [];
    for (const code of codes) {
      const pages = byLang[code];
      if (!pages || typeof pages !== "object") {
        missing.push(`${code} (all)`);
        continue;
      }
      for (const [name, url] of Object.entries(pages)) {
        const path = url.startsWith(CANONICAL_HOST) ? url.slice(CANONICAL_HOST.length) : url;
        if (!served.has(path)) dead.push(`${code}.${name} → ${path}`);
      }
    }
    if (missing.length === 0 && dead.length === 0) {
      pass(`/ai/business.json: keyPagesByLanguage resolves in all ${codes.length} languages`);
    } else {
      if (missing.length) fail(`/ai/business.json keyPagesByLanguage missing: ${missing.join(", ")}`);
      if (dead.length) {
        fail(
          `/ai/business.json keyPagesByLanguage points at unserved pages: ${dead.slice(0, 3).join(", ")}`,
        );
      }
    }
  }
}

/**
 * Phase 29 — localized anchor text. An anchor whose visible label is just the
 * humanized slug ("Old House Wiring" pointing at
 * `/ms/problems/old-house-wiring/`) is English text on a Malay or Chinese
 * page, and it was the exact defect the area intent-matrix section carried.
 * Place-name links (`/areas/…`) are excluded: "Cheras" is the correct label in
 * every language. Single-word slugs are excluded too, because words such as
 * "About" genuinely exist in both languages' chrome.
 */
async function checkLocalizedAnchors(anchors) {
  console.log("\n== Localized anchor text ==");
  const offenders = [];
  for (const [from, list] of anchors) {
    if (!/^\/(ms|zh)\//.test(from)) continue;
    for (const { path, text } of list) {
      const segments = path.split("/").filter(Boolean);
      if (segments.length < 2 || segments[1] === "areas") continue;
      const slug = segments[segments.length - 1];
      if (!slug.includes("-")) continue;
      if (text === humanizeSlug(slug)) {
        offenders.push(`${from} → ${path} labeled "${text}"`);
      }
    }
  }
  if (offenders.length === 0) {
    pass("no /ms/ or /zh/ page labels a link with the humanized slug (English anchor text)");
  } else {
    for (const offender of offenders.slice(0, 10)) {
      fail(`English slug label on a localized page: ${offender}`);
    }
    if (offenders.length > 10) fail(`…and ${offenders.length - 10} more`);
  }
}

async function checkInternalLinks() {
  console.log("\n== Internal link sample ==");
  const pages = ["/en/", "/ms/", "/zh/", "/en/services/tiling/", "/en/quote/", "/en/contact/"];
  const broken = [];
  for (const page of pages) {
    const { text, status } = await fetchText(page);
    if (status !== 200) continue;
    const hrefs = [...text.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1].split("#")[0]).filter(Boolean);
    const unique = [...new Set(hrefs)].filter((h) => !h.startsWith("/_next") && h !== "/");
    for (const href of unique.slice(0, 80)) {
      const res = await fetchRes(href);
      if (res.status >= 400) broken.push(`${page} → ${href} (${res.status})`);
    }
  }
  if (broken.length === 0) pass("sampled internal links all resolve");
  else broken.forEach((b) => fail(b));
}

async function multilingualSpot() {
  console.log("\n== Multilingual / SEO / schema spot checks ==");
  await checkPageSeo("/en/", {
    htmlLang: "en-MY",
    mustInclude: ["Get a Free Quote", "Tile & Tiling", "+601159259521"],
    mustNotInclude: ["[PHONE NUMBER]", "lorem ipsum"],
    schemaTypes: ["Organization", "WebSite"],
  });
  await checkPageSeo("/ms/", {
    htmlLang: "ms-MY",
    mustInclude: ["Sebut Harga", "Kerja Jubin"],
    mustNotInclude: ["Get a Free Quote", "Tile & Tiling"],
    schemaTypes: ["Organization", "WebSite"],
  });
  await checkPageSeo("/zh/", {
    htmlLang: "zh-MY",
    mustInclude: ["报价", "瓷砖"],
    mustNotInclude: ["Get a Free Quote"],
    schemaTypes: ["Organization", "WebSite"],
  });
  await checkPageSeo("/en/services/tiling/", {
    htmlLang: "en-MY",
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
    mustInclude: ["RM"],
  });
  await checkPageSeo("/ms/services/tiling/", {
    htmlLang: "ms-MY",
    schemaTypes: ["Service", "FAQPage"],
  });
  await checkPageSeo("/zh/services/tiling/", {
    htmlLang: "zh-MY",
    schemaTypes: ["Service", "FAQPage"],
  });
  await checkPageSeo("/en/quote/", {
    htmlLang: "en-MY",
    schemaTypes: ["FAQPage"],
    mustInclude: ["wa.me/601159259521", "Submit Quote Request"],
    mustNotInclude: ['type="file"'],
  });
  await checkPageSeo("/en/contact/", {
    htmlLang: "en-MY",
    mustInclude: ["renovixhomeservices@gmail.com", "+601159259521", "Jalan Kiara"],
  });
  await checkPageSeo("/en/problems/water-leakage/", {
    htmlLang: "en-MY",
    schemaTypes: ["Article", "FAQPage"],
  });
  await checkPageSeo("/en/areas/kuala-lumpur/mont-kiara/", {
    htmlLang: "en-MY",
    schemaTypes: ["Service", "FAQPage", "BreadcrumbList"],
  });
  await checkPageSeo("/en/blog/bathroom-rebuild-cost-guide/", {
    htmlLang: "en-MY",
    schemaTypes: ["Article", "FAQPage"],
  });
  await checkPageSeo("/en/projects/marble-look-floor-tiling/", {
    htmlLang: "en-MY",
    schemaTypes: ["ImageObject"],
  });
}

async function main() {
  console.log(`Phase 25 live QA against ${BASE}\n`);
  await checkHeaders();
  const locs = await checkSitemapLive();
  const { graph, anchors, inCopy, titles, leakedMarkup, faqBlocks, schemaTypes, serviceSchemas, entities } =
    await sampleStatuses(locs);
  checkInternalLinkGraph(locs, graph);
  checkTitles(locs, titles);
  checkInCopyLinks(locs, inCopy, leakedMarkup);
  await checkAiFeedCoverage(locs);
  checkVisibleFaqCoverage(locs, faqBlocks, schemaTypes);
  checkServiceSchemaCoverage(locs, serviceSchemas, graph);
  checkEntityGraphConsistency(locs, entities);
  await checkAiPhrasingCoverage(locs);
  await checkAiLocalizedUrlCoverage(locs);
  await checkLocalizedAnchors(anchors);
  await multilingualSpot();
  await checkQuoteApi();
  await checkInternalLinks();

  console.log("\n== Summary ==");
  console.log(`PASS ${passes.length}  WARN ${warnings.length}  FAIL ${failures.length}`);
  if (failures.length) {
    console.log("Failures:");
    for (const f of failures) console.log(" -", f);
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
