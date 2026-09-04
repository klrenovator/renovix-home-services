#!/usr/bin/env node
/**
 * Phase 25 local production-server QA.
 * Talks to a running `next start` (default http://127.0.0.1:3000).
 * Does not invent results — every check is a real HTTP request.
 */
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
  if (locs.length !== 654) fail(`sitemap count ${locs.length} expected 654`);
  else pass("sitemap 654 <loc> URLs");
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
  if (en === 218 && ms === 218 && zh === 218) pass("218 URLs per language");
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
  for (let i = 0; i < locs.length; i += batchSize) {
    const batch = locs.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (loc) => {
        const path = loc.replace(CANONICAL_HOST, "");
        const res = await fetchRes(path);
        return { loc, status: res.status };
      }),
    );
    for (const r of results) {
      if (r.status === 200) ok += 1;
      else {
        bad += 1;
        fail(`sitemap URL ${r.loc} → ${r.status}`);
      }
    }
  }
  if (bad === 0) pass(`all ${ok} sitemap URLs return 200`);
  else fail(`sitemap sweep ${ok} ok / ${bad} failed`);
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
  await sampleStatuses(locs);
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
