# RENOVIX HOME SERVICES — PHASE 17

# MASTER DEEP AUDIT, GAP VERIFICATION & NEXT-WORK PLANNING

**Project:** Renovix Home Services — https://renovixhomeservices.my
**Target market:** Kuala Lumpur, Selangor & Klang Valley, Malaysia
**Stack verified in repo:** Next.js 16.3.3 · React 19.2.8 · TypeScript 6.0.3 · Tailwind CSS 4.3.3 · App Router · Turbopack
**Languages:** English `en-MY` (canonical) · Bahasa Melayu `ms-MY` · Simplified Chinese `zh-MY`
**Mode:** AUDIT ONLY. No production code was modified, no pages created, no data fabricated. Every GREEN/YELLOW/RED below is backed by a file path, build output or script result.
**Branch:** `arena/01a06a31-renovix-home-services` (working tree clean at audit start)

---

## 0. Verification methods used (evidence standard)

| Check | Command / source | Result |
|---|---|---|
| Install | `npm ci` | ✅ clean |
| Types | `npm run type-check` (`next typegen && tsc --noEmit`) | ✅ **PASS** (`TYPECHECK_EXIT=0`) |
| Lint | `npm run lint` (eslint 9) | ✅ **PASS** (0 problems) |
| Build | `npx next build` | ✅ **PASS** (`BUILD_EXIT=0`) |
| Sitemap | built artifact `.next/server/app/sitemap.xml.body` | **408 `<loc>` URLs** |
| Business audit | `npm run audit:business` | ✅ PASS (249 files) |
| OG-font audit | `npm run audit:og-fonts` | ✅ PASS |
| Project-assets audit | `npm run audit:project-assets` | ✅ PASS (21 projects, 42 referenced images, 43 files on disk) |
| Pricing audit | `npm run audit:pricing` | ✅ PASS (parses **51** rows) — **but see §Part 4: it does not cover the intent matrix** |
| Locations audit | `npm run audit:locations` | ✅ PASS — **but its "pricing matches" check only verifies `pricingId` exists, not values; see §Part 3/4** |
| Authority audit | `npm run audit:authority` | ✅ PASS (46 problem slugs parsed) — **but it does not validate matrix sub-service slugs or prices** |
| Built-HTML spot check | `.next/server/app/{en,ms}/services/tiling.html` | canonical, 4 hreflang (`en-MY/ms-MY/zh-MY/x-default`), `FAQPage` JSON-LD, `og:locale`, unique title/H1/description ✅ |
| Real browser | not available in this environment | **STATIC VERIFICATION ONLY** — no Core Web Vitals / visual / device testing is claimed |

**Generated routes from build output:** 30 SSG routes per language set = 303 pre-rendered content pages + index/support pages + dynamic API + static AI/robots/sitemap.
Content pages per language: 10 services · 46 problems · 46 areas + 2 region hubs · 21 projects · home + 7 support/legal/index pages = **136 pages/language × 3 = 408 canonical URLs** (matches sitemap).

---

# 1. EXECUTIVE SUMMARY

Renovix is an unusually disciplined codebase. Pricing is single-sourced, translations are genuine (not machine-shaped English fallbacks), every page builds from registries, 6 dependency-free audit scripts guard data integrity, the sitemap self-validates at build time, the quote backend is a properly secured Route Handler, and there is a strict, mechanically-enforced anti-fabrication governance layer. Type-check, lint and production build all pass clean.

Against that strong base, the audit found **one genuinely broken data system, one entirely missing page family (twice), and a large amount of owner-gated proof work**. The headline findings:

1. **The Phase 15 Search Intent Matrix is a latent, disconnected, internally-drifting data set (RED/YELLOW).** It is not consumed by any rendered page; its prices/units/sub-service slugs were hand-typed and contradict the single-source catalogue on **10 of 16 entries**; and the audit that claims "pricing references match" only checks that the `pricingId` exists — never that its price, unit or sub-service agrees. No wrong price is currently shown to users (area pages price from catalogue headlines instead), but the file is a data-integrity landmine.
2. **Sub-service pages do not exist (RED for the new Part 6 requirement).** ~206 sub-services are listed as text on the 10 parent service pages and in JSON-LD OfferCatalogs, but there is **no `/services/{service}/{subservice}/` route, no sub-service registry, and zero sub-service pages in any language.** This is the single largest structural gap.
3. **Blog / Knowledge Hub does not exist (RED).** No `/blog` route, no article data, no guide content. Only an approved 7-item backlog in `CONTENT_MAP.md` §6.
4. **Problem coverage is 7/10 services (YELLOW).** 46 strong guides exist in EN+MS+ZH, but **Welding, Flooring and General Renovation have zero dedicated problem guides**; Flooring/Welding are documented as "accepted gaps."
5. **Portfolio proof covers 6/10 services (GREY/owner-dependent).** Painting, Waterproofing, Flooring and Handyman have **no project photos**. All 21 published projects lack confirmed location, year, property type and materials (fields exist but are empty by design, awaiting owner input).
6. **Quote form (Phase 12) is functionally complete and secure, but is GREY for two reasons:** (a) live email delivery cannot occur until the owner sets `RESEND_API_KEY` + a verified `QUOTE_FROM_EMAIL` (returns an honest 503 otherwise); (b) its **PROJECT_PROGRESS.md section header and opening were accidentally deleted/truncated** — the file has no `## PHASE 12` heading.
7. **Documentation drift:** PROJECT_PROGRESS marks Phases 15 and 16 `[x] COMPLETE`; Phase 15's matrix is in reality partial/disconnected. Several counts in docs are stale ("33 area guides" vs actual 46; "7 discrepancies" vs 10 value mismatches found here).
8. **Analytics = correctly absent (GREY).** GSC verification meta is present; **no GA4, GTM, Ads conversion or Web Vitals instrumentation exists** — by design, deferred to a late phase. Search Console performance data: **WAITING FOR REAL DATA** (no impressions/clicks/rankings claimed anywhere).

**Nothing in the audit was found to fabricate data.** The anti-fabrication controls are real and pass.

---

# 2. ACTUAL PHASE STATUS (Part 1)

Legend: 🟢 GREEN = genuinely complete · 🟡 YELLOW = partial · 🔴 RED = missing · ⚪ GREY = owner-dependent.

| Phase | Declared title | Actual implementation (evidence) | Verdict | Key gap / debt |
|---|---|---|---|---|
| 1 | Foundation, design system, homepage | `app/globals.css`, `app/[lang]/layout.tsx`, `components/home/*`, self-hosted fonts, skip link, semantic landmarks | 🟢 | — |
| 2 | Main service architecture & service pages | 10 services (`data/services.ts` + `data/service-content/*.ts`), full `ServicePage` (17 sections), unique title/H1/meta, FAQPage+Service+OfferCatalog schema, EN+MS+ZH | 🟢 | Sub-services are listed only, not pages (see Part 6) |
| 3 | Problem-based architecture | 46 guides in `data/problem-content/` across 7 trades, 5 FAQs each, `ProblemPage`, full 3-language parity | 🟢 for what exists | Only 7/10 services covered (Part 7) |
| 4 | Areas / location pages | 46 area guides + 2 region hubs + index (`data/area-content/`), 13-section `AreaPage`, full parity | 🟢 | — |
| 5 | Supporting pages & conversion | about, contact, faq, quote, privacy, terms — all in 3 languages; quote form UI | 🟢 | Backend was Phase 12 |
| 6 | Multilingual website | `i18n/`, `data/languages.ts`, genuine MS+ZH copy (verified, not English fallback), build-time coverage guard `i18n/verify.ts` | 🟢 | Future content must ship in 3 languages together |
| 7 | SEO / AEO / GEO / structured data | `components/seo/schema.ts`, canonical+hreflang builder `i18n/seo.ts`, breadcrumb/FAQ/Service/Article/ItemList nodes, robots, single sitemap | 🟢 | JSON-LD `Offer`s carry no `price` (optional improvement) |
| 8 | Performance / a11y / mobile / UX QA | only **5 client components** in whole repo, self-hosted woff2, focus rings, aria on quote form, 16px inputs | 🟢 code-level | Real-browser CWV/INP not verified (static only) |
| 9 | Final full-site audit & QA | Build guards, audits, defect fixes recorded | 🟢 | — |
| 10 | MS+ZH localization + real business details | Real NAP in `data/site.ts`; full EN+MS+ZH of services/problems/areas/projects | 🟢 | — |
| 11 | Business info & local SEO foundation | Single NAP source, `audit:business-info`, contact pages in 3 languages | 🟢 | No geo coords / hours-day / reviews (owner-gated, intentionally absent) |
| 12 | Quote form backend + Resend | `app/api/quote/route.ts`, `lib/quote/{validation,rate-limit,origin,email,constants}.ts`, client `QuoteForm.tsx` — complete & secure | 🟡→🟢 code / ⚪ delivery | **Docs header truncated;** live email needs Resend keys; no budget/time field; photos not uploaded (count only) |
| 13 | Logo, real portfolio, area expansion | 21 real projects, 42 WebP images + OG cards, `audit:project-assets`, real logo, WhatsApp CTA | 🟢 / ⚪ | 4 services lack photo proof; project location/year/materials empty (owner) |
| 14 | Sitemap consolidation + authoritative pricing | Native `app/sitemap.ts` (408 URLs, self-validating), 51 pricing rows, `/ai/pricing.json`, `audit:pricing`, MS+ZH pricing labels | 🟢 | Pricing audit does not cover the intent matrix |
| 15 | Malaysia + Klang Valley location domination | Registry (`data/locations/registry.ts`, 46 active + 3 planned states), 12 district groups, quality-score engine, district badges wired into area pages | 🟡 | **Intent matrix disconnected from UI + 10 price/unit/sub-service drifts + audit blind spot** (Part 3) |
| 16 | Full search + AI authority | `lib/ai-knowledge.ts`, `/llms.txt`, `/ai/business.json`, `/ai/pricing.json`, `audit:authority`, CONTENT_MAP/GOVERNANCE docs | 🟢 for the AI layer | It fixed area copy pricing but did not reconcile the intent-matrix rows |
| Final | Stabilization & launch readiness | Security headers + CSP, legal pages, 404s, all audits/build pass | 🟢 | Live deploy + DNS + email + real-device QA remain owner/ops |

---

# 3. COMPLETED WORK (verified GREEN)

- **10 service pillar pages**, each in EN+MS+ZH, with answer-first Q&A, overview, sub-service list, problems, centralized pricing table, materials, cost factors, duration, includes/excludes, property types, process, why-us, areas, 11 FAQs, related services, quote + WhatsApp CTAs, Service/OfferCatalog/FAQPage JSON-LD, canonical + hreflang.
- **46 problem diagnosis guides** in EN+MS+ZH (each: what-it-means, causes, warning signs, solutions, when-to-call, related service, process, property types, areas, 5 FAQs, related problems, CTA, Article+FAQPage schema).
- **46 area guides + 2 region hubs + areas index** in EN+MS+ZH, each with unique local housing/strata context, property types, local problems, process, district badge, headline pricing, FAQs, nearby links.
- **21 real projects** with 42 referenced images (all exist on disk, dimensions validated), EN+MS+ZH captions, per-project OG cards.
- **51 single-source pricing rows** across all 10 services, each with unit, range, scope, includes/excludes, factors, disclaimer, `lastReviewed`, headline marker; prices never duplicated in translations (audited).
- **Quote backend:** server validation (name/phone/email/property/service/location/description/contact/date), honeypot (`companyWebsite`) silently dropped, in-memory rate limit (5 / 15 min / IP), Origin allow-list, 64 KB body cap, Resend HTTP integration with `reply_to`, HTML-escaped notification email, honest 503 when unconfigured, retryable failures, accessible client form with inline errors and focus management.
- **SEO infrastructure:** trailing-slash canonicals, 4-way hreflang incl. `x-default`, native single sitemap with build-time drift guard, robots.txt, OG/Twitter cards + dynamic `next/og` images with embedded font subsets, self-canonical metadata builder.
- **AI/LLM layer:** `/llms.txt`, `/ai/business.json`, `/ai/pricing.json` — all generated from registries; footer links `llms.txt`.
- **Security:** CSP, Referrer-Policy, nosniff, Permissions-Policy, `poweredByHeader:false`, form origin checks, no secrets in client, `.env.example` documented.
- **Engineering hygiene:** only 5 `"use client"` files; all images via `next/image`; zero plain `<img>`; type-check/lint/build clean; 6 audit scripts.

---

# 4. PARTIAL WORK (YELLOW)

1. **Phase 15 intent matrix** — present, typed, audited as "PASS" but **not rendered**, and **drifting** (full detail in §Part 3 & §Part 4).
2. **Phase 12 quote system** — code complete; delivery owner-gated; documentation truncated; several CRO fields absent (Part 14).
3. **Problems** — strong for 7 trades, absent for welding/flooring/renovation.
4. **Portfolio** — 6/10 services have proof; project detail fields (location/year/type/materials) structurally supported but empty.
5. **Pricing reach** — pricing is fully wired to service pages, area headlines and AI feeds, but **not** wired into JSON-LD `Offer`s, problem pages or the intent matrix.
6. **Service page content model** — rich, but `SubService` is `{name, description}` text only; no slug/link target.

---

# 5. MISSING WORK (RED)

- **Sub-service pages: 0** (new mandatory Part 6 requirement). No route, no registry, no translations.
- **Blog / Knowledge Hub: 0 articles** (Part 8). No `/blog` segment at all.
- **Problem guides for welding, flooring, general-renovation: 0.**
- **Service → project internal links:** no service page links to its project showcases (Part 9).
- **GA4 / GTM / Ads conversion / Web Vitals reporting:** none (intentionally deferred).
- **Dedicated sub-service pricing rows:** pricing rows cover 51 of ~206 sub-services; most sub-services have no price row (by design, but a content gap for future pages).

---

# 6. WEAKNESSES (summary)

- A "safety-net" audit (`audit:locations`) reports success for a property it does not actually test (price value consistency) — a **false-confidence** risk.
- Two parallel location data systems (`data/locations/registry.ts` entity model vs `data/area-content/` page content) with only partial coupling (district + headline pricing).
- Legacy preview list `data/problems.ts` (14 items) duplicates taxonomy that now lives in `data/problem-content` (46) — currently links resolve, but it is a second source of truth for homepage cards.
- Homepage shows no project/proof content and a fixed 14-problem preview rather than the fuller library.

---

# 7. TECHNICAL ISSUES

| ID | Issue | Evidence | Severity |
|---|---|---|---|
| T-1 | Intent matrix duplicates `startingPrice`/`unit`/`subServiceSlug` as literals instead of deriving from `pricingId` | `data/locations/intent-matrix.ts` vs `data/pricing/pricing.ts` | High (data integrity) |
| T-2 | `audit-locations.mjs` "pricing matches" check only asserts `pricingId` exists (lines 109–118); never compares price/unit/sub-service | `scripts/audit-locations.mjs` | High (false PASS) |
| T-3 | `audit-authority.mjs` validates matrix service/problem/location slugs but **not** `subServiceSlug` | `scripts/audit-authority.mjs:270–281` | Medium |
| T-4 | Rate limiter is in-memory per serverless instance (documented) — not a global quota | `lib/quote/rate-limit.ts` | Low/Medium (acceptable baseline) |
| T-5 | Two location models (registry entity vs area-content page) maintained separately | `data/locations/*` vs `data/area-content/*` | Medium (drift risk) |
| T-6 | Legacy `data/problems.ts` (14) duplicates the 46-item problem taxonomy for homepage previews | `data/i18n/index.ts:8,74` | Low (links still resolve) |
| T-7 | JSON-LD `Offer`/`itemOffered` nodes contain no `price`/`priceCurrency` | `components/seo/schema.ts:237–265` | Low (optional rich-result enhancement) |
| T-8 | No end-to-end test harness for `/api/quote` (validation tested manually per docs) | repo has no test runner | Low |
| T-9 | Core Web Vitals / INP / real-device behaviour not verifiable here | no browser in environment | ⚪ needs real-browser verification |

---

# 8. SEO ISSUES

- 🟢 Technical SEO is strong: self-canonicals, complete hreflang, single validated sitemap (408 URLs), robots, OG/Twitter, static prerender, fast lean client JS.
- 🟡 **Entity/inner-depth gap:** no sub-service pages and no blog means the site cannot target the long-tail commercial/informational layer ("cost to repair X", "Y vs Z material", "how to fix Z") — the exact content competitors rank for.
- 🟡 **Internal link graph is shallow in places** (Part 9): services do not link to projects; no blog exists to distribute authority; problem→sub-service links impossible (no sub-service URLs).
- 🟡 Schema `Offer`s lack `priceSpecification`; product/Service rich results with price are not emitted (price is visible in HTML/AI feeds).
- ⚪ Local SEO: no reviews, geo-coordinates, or opening *days* — correctly withheld pending owner-supplied truth; GBP measurement not connected.
- ⚪ Search Console performance: **WAITING FOR REAL DATA** — no impressions, clicks, CTR, rankings or index counts are claimed or available.

---

# 9. CONTENT ISSUES

- Service pillars, problems and areas are genuinely deep and unique (audited for duplicated questions/metadata — pass).
- 🔴 No blog/guides/comparison/cost/maintenance/decision articles despite an approved backlog.
- 🟡 Problem coverage misses 3 trades; sub-services exist only as one-line labels (many are high-intent topics deserving their own guide).
- 🟡 Service FAQs are exactly 11 per pillar and problem FAQs exactly 5 per guide — consistent, but future sub-service pages must avoid templated repetition (the authority audit already enforces unique questions).
- Modifier usage ("near me / best / affordable / emergency / contractor") is governed honestly and audited; **"cheap" is not used** and should remain so unless the business positions that way.

---

# 10. MULTILINGUAL ISSUES

- 🟢 Route parity is perfect: every published page exists in EN+MS+ZH; sitemap/hreflang/language-switcher all derive from `i18n/coverage.ts`, and a build fails if a translation list drifts. MS and ZH copy is genuine (spot-checked tiling/waterproofing — real localized prose, not English fallback).
- 🟡 **Future risk, not current defect:** sub-service pages and blog articles do not exist; governance already requires shipping them in all 3 languages together — this must be honoured (no English-only launch of new page families).
- 🟡 Pricing numbers are correctly never translated; localized unit labels exist for all units.
- Note: localized *slugs* are not used (slugs stay English across locales, e.g. `/ms/services/tiling/`). Acceptable and consistent; changing later is optional.

---

# 11. PORTFOLIO ISSUES (Part 10)

Real photographic proof by service (from `data/project-content/projects.ts`, 21 published):

| Service | Projects | Images | Status |
|---|---|---|---|
| Tiling | 2 (+1 office reno partial) | ✅ | 🟢 |
| Ceiling & Partition | 6 | ✅ | 🟢 |
| Electrical | 6 (+1 fan/light) | ✅ | 🟢 |
| Plumbing | 1 (toilet & basin) | ✅ | 🟢 thin (1) |
| Welding & Metal Works | 4 | ✅ | 🟢 |
| General Renovation | 1 (office ceiling+tiling) | ✅ | 🟢 thin |
| **Painting** | **0** | — | 🔴/⚪ no proof |
| **Waterproofing** | **0** | — | 🔴/⚪ no proof |
| **Flooring** | **0** | — | 🔴/⚪ no proof |
| **Handyman** | **0** | — | 🔴/⚪ no proof |

- All 42 referenced images exist with matching dimensions and localized alt text (`audit:project-assets` PASS).
- **Before/after:** gallery supports before/after pairs but **none are populated** (owner-gated).
- **Project location / completion year / property type / materials:** the content model supports these (`ProjectLocation`, `year?`, `propertyType?`, `materials?`, `details?`) but **every project has them empty** — by design, awaiting owner confirmation. No fabricated locations/years exist.
- **Anti-fabrication rule confirmed in code:** project schema explicitly omits Review/aggregateRating/price/completion date; empty-state component states only real work is published.
- **Required owner input:** real photos for painting/waterproofing/flooring/handyman; for all projects — real area, year, property type, materials, customer permission; any future illustrative visuals must be clearly labelled "Illustrative Service Visual" and never presented as completed work.

---

# 12. QUOTE / CRO ISSUES (Parts 2 & 14)

**Backend verification (all present in code):**
- ✅ Validation server-side (`parseQuotePayload`), length limits, ISO date check, MY/international phone regex, email regex.
- ✅ Rate limiting (in-memory, 5/15min/IP, with `Retry-After`).
- ✅ Origin validation (`isAllowedOrigin` — same-host + production + www; localhost only when request is local).
- ✅ Honeypot (`companyWebsite`) — spam submissions silently return `{ok:true}` and send no email.
- ✅ Body size cap (64 KB → 413), JSON parse guard (400), foreign origin (403), unconfigured/failed email (503), unexpected error (500).
- ✅ Resend integration via `fetch` (no dependency), 12s timeout, `reply_to` set to customer email, HTML-escaped fields, MY-timezone timestamp.
- ✅ Success / failure / rate-limited states; failure keeps the form retryable; no fake success when email unconfigured.
- ✅ Accessibility: labels, `aria-required`, `aria-invalid`, `aria-describedby`, `role="alert"`/`status`, focus-first-error, 44px controls, `noValidate` (localized messages, no English HTML5 bubbles).

**Why Phase 12 shows as partial / gaps to fix in Phase 18/22:**
1. ⚪ **Live delivery owner-gated:** needs `RESEND_API_KEY` + `QUOTE_FROM_EMAIL` on a Resend-verrated domain (`.env.example`). Until set, every submission returns 503.
2. 🟡 **No budget field** — Part 14 lists budget; form omits it.
3. 🟡 **No preferred time** — only preferred *date*; no time-of-day preference.
4. 🟡 **No problem selection** — service + sub-service only; no link to the 46 problem guides (would sharpen triage).
5. 🟡 **Photo upload is nominal only** — files are counted (`photoCount`) but **never transmitted**; email tells the owner to ask the customer to send photos on WhatsApp. Honest, but not true upload.
6. 🟡 **Sub-service dropdown values are free-text names** (`detail.subServices[].name`), not slugs — no structured linkage, and the server only length-validates `subService` (it is not checked against a catalogue, unlike `service`).
7. 🟡 Single long form (one step) — acceptable on mobile but no multi-step wizard / progress; conversion friction not yet optimized.
8. 🟡 No conversion event / analytics hook (deferred to Phase 24).

**Phase 12 documentation bug (exact):** In `PROJECT_PROGRESS.md` there is **no `## PHASE 12 — …` heading**. The Phase 12 body is present but orphaned: its checklist fragments begin at **line 1193** (`missions are` / `ignored (no email)` … through the Resend/validation/multilingual/a11y/testing checklist), immediately *after* the giant Phase 10/11 summary paragraph (line 1192) and *before* `## PHASE 13 (PART 1)` (~line 1227). The opening of the section — its title header, intro and the first checklist items (the tail of one line is literally cut: "...submissions are…missions are ignored (no email)") — was accidentally deleted/overwritten. **Required Phase 18 fix (documentation only):** insert a proper `## PHASE 12 — Quote Form Backend & Resend Integration — [x]/🟡` header with a short factual intro *before* line 1193, reconstruct the truncated first bullet, and mark status consistently (code complete; live delivery pending Resend credentials).

---

# 13. PRICING ISSUES — FULL DISCREPANCY TABLE (Part 4)

**Architecture answer:** Yes — pricing *can* be fully dynamic. Service pages (`getPricingForService`), area headline cards (`getStartingRatesForLocation` → headline rows), answer-first copy (`getPricingById`) and AI feeds already derive from `data/pricing/pricing.ts`. **The intent matrix is the one place that re-types price/unit/sub-service instead of deriving them**; it should import/look up via `pricingId` (and drop its mutable `startingPrice`/`unit`), then the values cannot drift.

Every matrix `startingPrice` was programmatically compared to its referenced `pricingId` row in `data/pricing/pricing.ts` (51 rows). Result: **10 of 16 rows have a price mismatch; 1 unit mismatch; 12 of 16 reference a sub-service slug that does not exist on the pricing row.** (The prior audit's "7 discrepancies" understated it — 7 distinct numeric deltas were listed, but 10 entries are affected because the wrong roof/bathroom figures repeat across locations.)

| ID | Matrix entry (`data/locations/intent-matrix.ts`) | pricingId | Matrix value | Catalogue value | Diff | Sub-service slug mismatch? | Severity | Required fix |
|---|---|---|---|---|---|---|---|---|
| P-01 | `shah-alam-roof-waterproofing` | `waterproofing-flat-roof` | RM15/sqft | **RM8/sqft** (range 8–25) | +RM7 (+88%) | Yes: `roof-leak-repair` vs `flat-roof-waterproofing` | High | Derive from id; matrix "roof tile/flashing" intent has no own row — reuse flat-roof row or add a genuine roof-repair row |
| P-02 | `petaling-jaya-flooring-spc` | `flooring-spc` | RM5.50/sqft | RM5.50/sqft ✅ | 0 | Yes: `spc-flooring-installation` vs `spc-flooring` | Low | Align slug |
| P-03 | `petaling-jaya-electrical-rewire` | `electrical-db-box` | **RM650/job** | **RM400/unit** | +RM250 (+63%) **and unit job vs unit** | Yes: `db-box-upgrade` vs `db-box` | High | DB-box row is per-unit; a "rewire/DB upgrade" intent more honestly maps to `electrical-full-wiring` (RM5,000) — re-point or add row; fix unit |
| P-04 | `cheras-waterproofing-bathroom` | `waterproofing-bathroom-hack` | **RM1,800/bathroom** | **RM1,500/bathroom** (1500–5000) | +RM300 (+20%) | No (`bathroom-waterproofing` matches) | High | Derive RM1,500 |
| P-05 | `cheras-tiling-repair` | `tiling-floor-ceramic` | RM8/sqft | RM8/sqft ✅ | 0 | Yes: `cracked-tile-repair` (a repair) points to a new-installation row `floor-tile-installation` | Medium | Repair intent should map to `tiling-repair` (RM150/job) or a tile-repair row |
| P-06 | `mont-kiara-condo-renovation` | `renovation-bathroom-full` | RM8,000/bathroom | RM8,000 ✅ | 0 | Yes: `condo-refurbishment` vs `bathroom-renovation`; unit "per bathroom" for a condo reno is semantically wrong | Medium | Use a renovation headline (`renovation-mid` RM70/sqft or `renovation-minor`) and per-sqft unit |
| P-07 | `mont-kiara-electrical-safety` | `electrical-troubleshoot` | **RM80/job** | **RM150/job** (150–500) | −RM70 (−47%) | Yes: `power-tripping-diagnosis` vs `troubleshooting` | High | Derive RM150 |
| P-08 | `subang-jaya-plumbing-repiping` | `plumbing-water-heater-install` | **RM120/unit** | **RM150/unit** | −RM30 (−20%) | Yes: `whole-house-repiping` maps to a *water-heater* row — wrong service concept | High | Add a repiping row or re-point; whole-house repiping is not water-heater install |
| P-09 | `usj-kitchen-extension-renovation` | `renovation-kitchen` | **RM15,000/job** | **RM8,000/job** (8000–35000) | +RM7,000 (+88%) | Yes: `kitchen-extension` vs `kitchen-renovation` (extension ≈ `renovation-extension` RM150/sqft) | High | Re-point to extension row (per-sqft) or kitchen row; 15,000 sits inside the *range* but contradicts the "starting from" headline |
| P-10 | `bangsar-house-modernisation` | `renovation-bathroom-full` | RM8,000/bathroom | RM8,000 ✅ | 0 | Yes: `heritage-terrace-refurbishment` vs `bathroom-renovation`; wrong unit for whole-house modernisation | Medium | Re-point to `renovation-mid` per sqft |
| P-11 | `ttdi-waterproofing-roof-terrace` | `waterproofing-flat-roof` | **RM15/sqft** | **RM8/sqft** | +RM7 | Yes: `roof-leak-repair` vs `flat-roof-waterproofing` | High | Same as P-01 |
| P-12 | `puchong-bathroom-waterproofing` | `waterproofing-bathroom-hack` | **RM1,800/bathroom** | **RM1,500/bathroom** | +RM300 | No | High | Same as P-04 |
| P-13 | `kajang-landed-roof-leak-repair` | `waterproofing-flat-roof` | **RM15/sqft** | **RM8/sqft** | +RM7 | Yes: `roof-leak-repair` | High | Same as P-01 |
| P-14 | `klang-metal-welding-grille` | `welding-grille-window` | **RM28/sqft** | **RM12/sqft** (12–35) | +RM16 (+133%) | Yes: `security-grilles` vs `window-grille` | High | Derive RM12 (28 sits inside range but contradicts start-from) |
| P-15 | `cyberjaya-condo-painting-spc` | `painting-interior` | RM1.20/sqft | RM1.20/sqft ✅ | 0 | No (`interior-painting` matches) | None | OK |
| P-16 | `shah-alam-plumbing-leak` | `plumbing-pipe-leak-visible` | RM150/job | RM150/job ✅ | 0 | No (`pipe-leak-repair` matches) | None | OK |

**Aggregate:** 10 price mismatches (P-01,03,04,07,08,09,11,12,13,14), 1 unit mismatch (P-03), 12 sub-service-slug mismatches, and several *semantic* mismatches where the matrix intent (roof-tile repair, whole-house repiping, condo refurbishment, heritage modernisation) has **no matching pricing row at all**. No other file in the repo carries prices outside the catalogue — the service-page/area/AI copy all passed `audit:pricing`. The matrix currently renders nothing, so users see no wrong numbers today; the risk is future activation plus the false "PASS."

---

# 14. SERVICE ARCHITECTURE (Part 5)

All 10 pillars verified present with: dedicated route ✅ · EN/MS/ZH pages ✅ · canonical ✅ · hreflang ✅ · metadata ✅ · Service+OfferCatalog+FAQPage schema ✅ · FAQs (11) ✅ · sub-services listed ✅ (but not pages) · problems linked ✅ (9/10 files list `relatedProblems`; flooring relies on tiling links) · pricing ✅ · internal links ✅ · related services ✅ · quote + WhatsApp CTA ✅.

| Service | Page 3-lang | FAQs | Pricing rows | Problems linked | Project proof | Related blogs |
|---|---|---|---|---|---|---|
| Tile & Tiling | ✅ | 11 | 5 | 9 | 2 (+1) | 🔴 none |
| Welding & Metal Works | ✅ | 11 | 5 | **0** | 4 | 🔴 none |
| Electrical | ✅ | 11 | 6 | 8 | 6 | 🔴 none |
| Painting | ✅ | 11 | 4 | 6 | **0** | 🔴 none |
| Ceiling & Partition | ✅ | 11 | 4 | 5 | 6 | 🔴 none |
| General Renovation | ✅ | 11 | 5 | cross-trade only | 1 | 🔴 none |
| Plumbing | ✅ | 12 | 7 | 6 | 1 | 🔴 none |
| Waterproofing | ✅ | 12 | 5 | 6 | **0** | 🔴 none |
| Flooring | ✅ | 11 | 5 | **0** (tiling inbound) | **0** | 🔴 none |
| Handyman | ✅ | 11 | 5 | 6 | **0** | 🔴 none |

No Carpentry category exists — correct per instruction.

---

# 15. SUB-SERVICE ARCHITECTURE (Part 6) — 🔴

- Current count: **~206 sub-services** documented as `{name, description}` on parent pages (Tiling 24, Welding 22, Electrical 31, Painting 32, Ceiling 16 + Partition 14, Reno 21, Plumbing 15, Waterproofing 11, Flooring 10, Handyman 12).
- Current routes: **none.** No `app/[lang]/services/[category]/[sub]/` segment; no sub-slug registry; `SubService` type has no `slug`.
- Translation parity: labels live in MS/ZH service files (and pricing translations for the 51 priced rows), but there are no standalone pages to be "parity" for.
- Pricing relationship: only 51 of ~206 sub-services map to a pricing row (pricing `subServiceSlug` ≠ service-copy names in most cases).
- **Recommendation (do NOT bulk-generate):** build sub-service pages **only for sub-services with genuine standalone intent and backing content** — natural first wave = the **51 priced sub-services** (they already have scope, includes/excludes, factors, duration, disclaimer and MS/ZH labels). Give each a slug, a compact unique page (answer-first, price row, scope, when-this-applies, linked problem guides, related areas, CTA), in EN+MS+ZH, wired into sitemap/coverage/breadcrumbs and the OfferCatalog `url`. Avoid pages that would be thin duplicates; merge near-identical labels first.

---

# 16. PROBLEM PAGE ARCHITECTURE (Part 7) — 🟡

- Existing: **46 problem pages**, EN+MS+ZH, full schema, unique copy, audited one-question-per-page.
- Missing by service: **Welding (0), Flooring (0), General Renovation (0 dedicated; cross-trade only).** CONTENT_MAP.md documents flooring/welding as "accepted gaps unless real demand appears."
- Candidate gaps to evaluate on genuine intent (not auto-create): flooring — swollen/damaged floor, vinyl/SPC lifting, floor squeak/noise, laminate water damage; welding — rusted gate/grille, broken hinge/door frame, railing damage, awning leak/frame; renovation — hacking/demolition scope, condo renovation approval, kitchen/bath remodelling decision.
- Plumbing already covers leaks/taps/drains/toilets/pressure; tiling/electrical/painting/ceiling/waterproofing/handyman sets are broad.

---

# 17. BLOG / KNOWLEDGE HUB (Part 8) — 🔴

- **0 articles, 0 guides, 0 routes.** There is no `/blog` or `/guides` segment and no article data model.
- The target funnel Service → Sub-service → Problem → **Blog/Guide** → FAQ → Location → Quote/WhatsApp has the **Blog rung missing entirely.**
- Approved, intent-mapped backlog already exists (`CONTENT_MAP.md` §6, 7 items): bathroom rebuild cost guide; full-house painting cost by property type; ceiling-stain-vs-active-leak diagnosis; SPC vs vinyl vs laminate vs tile; condo renovation approval checklist; cementitious vs PU vs torch-on waterproofing; regrout/silicone maintenance.
- Rules already in place and to keep: each article needs real research, all 3 languages, catalogue-only prices, contextual internal links, no keyword stuffing, pass both audits.

---

# 18. INTERNAL LINKING (Part 9)

Verified present: Service→problems, Service→areas, Service→related services, Problem→service, Problem→related problems, Problem→areas, Problem→service CTA, Area→services, Area→problems, Area→related services, Area→nearby areas, Project→service (sidebar + schema), footer/hub→everything, homepage→services/problems/areas.

| Gap | Finding |
|---|---|
| 🔴 Service → Project | **No service page links to its project showcases** (projects link *to* services, not back). High-value, easy win. |
| 🔴 Service/Problem → Blog | No blogs exist to link. |
| 🔴 Sub-service links | Sub-services are not links (no target URLs). |
| 🟡 Problem ↔ Problem | Related problems exist; coverage is good but tiling-heavy. |
| 🟡 Location → Project | Areas never link to projects (and projects carry no location yet — owner-gated). |
| 🟢 Orphans | `audit:authority` confirms no orphan pages / broken refs across services/problems/areas. |
| 🟢 Anchor text | Audited for exact-match repetition; no stuffing found. |
| Note | Two components referenced as possible dead code are actually used (`ProblemListSection` in ProblemPage, `ProjectsEmptyState` in projects page). |

---

# 19. ANALYTICS / GOOGLE SERVICES (Part 17) — ⚪ GREY

| Service | Status | Evidence |
|---|---|---|
| Google Search Console verification | ✅ meta tag present | `app/[lang]/layout.tsx` `verification.google` |
| GA4 | ❌ not installed | no `gtag`/`G-XXXX` anywhere |
| Google Tag Manager | ❌ not installed | no `GTM-` / googletagmanager |
| Google Ads conversion | ❌ not installed | no conversion snippet |
| GBP measurement / Maps/Places | ❌ not integrated | no Maps embed/Places calls |
| Web Vitals reporting | ❌ not instrumented | no `useReportWebVitals`/web-vitals |
| Conversion events | ❌ none | quote success not tracked (no analytics layer) |

**Search Console performance analysis: WAITING FOR REAL DATA.** No impressions, clicks, CTR, rankings, indexed-page counts or traffic numbers are claimed or fabricated. Analytics/GTM correctly deferred to a late phase.

---

# 20. PERFORMANCE / ACCESSIBILITY / SECURITY (Part 18)

**Verified (static):**
- Only **5 client components** total; nearly everything is a static/SSG server component → minimal JS.
- All imagery via `next/image` with AVIF/WebP, intrinsic dimensions (no CLS from images), 31-day cache; self-hosted woff2 fonts with `display:swap`.
- CSP, Referrer-Policy, X-Content-Type-Options, Permissions-Policy, powered-by-header off; form origin allow-list; honeypot; rate limit; no client secrets.
- Accessibility: skip link, landmarks, aria on form (alert/status/describedby/required/invalid), focus management, visible focus styles, 44px targets, 16px inputs, `prefers-reduced-motion` handling in CSS.

**Potential issues (need real-browser verification):**
- Actual LCP/CLS/INP across devices, mobile 360/390/412 layouts, keyboard flow through mobile drawer + language menu + multi-field quote form — **cannot be measured in this environment.**
- CSP uses `'unsafe-inline'` for scripts/styles (common for Next inline bootstrap; review nonce strategy if hardening further).

**Dependencies:** minimal (next/react only; no runtime third-party libs) — small attack surface.

---

# 21. BUILD / TEST / DEPLOYMENT (Part 19)

- `npm run type-check` ✅ · `npm run lint` ✅ (0 problems) · `npx next build` ✅ (419 outputs; `/api/quote` dynamic; everything else static/SSG).
- 6 audit scripts all PASS.
- Git: clean working tree at audit start; branch `arena/01a06a31-renovix-home-services`; latest merge PR #30.
- **STATIC VERIFICATION ONLY** — no browser binaries in this environment; no live HTTP serving, real-device or email-delivery test is claimed.
- Deployment readiness: code is deploy-ready; launch-blocking owner/ops items are Resend env vars + verified sender domain, production DNS/HTTPS check, sitemap submission (one-time), and real-device QA.

---

# 22. DOCUMENTATION ISSUES (Part 15)

| Doc | Issue |
|---|---|
| `PROJECT_PROGRESS.md` | 🔴 **Phase 12 section header/intro truncated/relocated** (no `## PHASE 12` heading; orphan checklist at line 1193) — exact fix in §12. |
| `PROJECT_PROGRESS.md` | 🟡 Phase 15 marked `[x] COMPLETE` but matrix is disconnected + drifting; status should be partial until §13 fixes land. |
| `PROJECT_PROGRESS.md` | 🟡 Stale counts: "33 area guides" (now 46), "100 pages" per language (now 136), "7 pricing discrepancies" (actually 10 affected entries). |
| `MASTER_AUDIT_REPORT.md` | 🟡 Prior audit says flooring has "Flooring projects" and lists 6 services with proof — actually **0 flooring projects**; its "206 sub-services" is accurate; treat as superseded by this report. |
| `CONTENT_MAP.md` | 🟢 Accurate and honest (notes no blog, flooring/welding gap, no fabrication). Refresh counts after Phase 18/19. |
| `CONTENT_GOVERNANCE.md` | 🟢 Strong; recommend adding an explicit rule "intent matrix must derive price/unit/sub-service from pricingId; audits must compare values." |
| `SITEMAP.md` / `README.md` / `AGENTS.md` | 🟢 Accurate. |

---

# 23. MASTER GAP MATRIX (Part 20)

| ID | Category | Issue | Evidence | Sev | Status | Impact | Recommended fix | Phase | Owner dep | Priority |
|---|---|---|---|---|---|---|---|---|---|---|
| G-01 | Pricing/Data | Intent matrix hardcodes drifting prices/units | intent-matrix.ts vs pricing.ts (10 mismatches) | High | 🔴 | Latent wrong data; false confidence | Derive price/unit from `pricingId`; add rows for intents with no match | 18 | No | **P0** |
| G-02 | Audit | audit-locations only checks pricingId existence | scripts/audit-locations.mjs:109-118 | High | 🔴 | False "PASS" | Extend audit to compare price/unit/sub-service to catalogue; fail build on drift | 18 | No | **P0** |
| G-03 | Docs | Phase 12 header truncated | PROJECT_PROGRESS.md ~line 1193 | Med | 🟡 | Broken record of work | Reinsert Phase 12 heading + intro; set honest status | 18 | No | **P1** |
| G-04 | Architecture | No sub-service pages (0) | no route/registry; SubService has no slug | High | 🔴 | Misses long-tail; thin funnel | Build pages for the 51 priced sub-services first, EN+MS+ZH, with slug registry | 19 | No | **P1** |
| G-05 | Content | No blog/knowledge hub (0) | no /blog route | High | 🔴 | Missing informational/commercial authority | Ship CONTENT_MAP §6 backlog, 3 languages, real research | 20 | No | **P1** |
| G-06 | Content | Welding/Flooring/Renovation problem guides = 0 | problem-content has 7 trade files | Med | 🟡 | Coverage holes | Add guides only where genuine intent; keep flooring/welding decision evidence-based | 19/20 | No | **P2** |
| G-07 | Internal links | Services don't link to projects | components/service/* | Med | 🟡 | Proof not surfaced where it converts | Add contextual "See our {service} work" sections | 19/21 | No | **P2** |
| G-08 | Portfolio | Painting/Waterproofing/Flooring/Handyman no photos | projects.ts categories | Med | ⚪ | Weak E-E-A.T for 4 services | Owner supplies real photos; else clearly-labelled illustrative visuals only | 21/25 | **Yes** | **P2** |
| G-09 | Portfolio | All projects missing location/year/type/materials | ProjectLocation/year empty | Med | ⚪ | Thin proof schema | Owner confirms real details; then populate fields | 25 | **Yes** | **P2** |
| G-10 | Quote/CRO | No budget, preferred-time, problem field; photos counted not sent | QuoteForm.tsx | Med | 🟡 | Conversion/triage friction | Add fields in a later form pass; wire sub-service to slugs | 22 | Field approval = Yes | **P2** |
| G-11 | Quote delivery | Resend keys not set | .env.example; 503 path | High | ⚪ | Form can't deliver in prod | Owner creates Resend key + verified sender domain | 25 | **Yes** | **P1** |
| G-12 | Analytics | No GA4/GTM/Ads/Web-Vitals/conversion events | absent | Med | ⚪ | No measurement | Implement near end, after content | 24 | Account access = Yes | **P3** |
| G-13 | SEO | JSON-LD Offers lack price | schema.ts | Low | 🟡 | Fewer rich signals | Add priceSpecification from catalogue rows | 19 | No | **P3** |
| G-14 | Tech debt | Two parallel location models | registry vs area-content | Low | 🟡 | Drift risk | Reconcile/derive one from the other over time | 18/23 | No | **P3** |
| G-15 | Tech debt | Legacy data/problems.ts (14) duplicates 46-taxonomy | data/i18n/index.ts | Low | 🟡 | Dual taxonomy | Derive homepage previews from problem-content registry | 18 | No | **P3** |
| G-16 | Perf/A11y | Real CWV/INP/mobile not verified | no browser | Med | ⚪ | Unknown UX quality | Real-browser + device QA post-launch | 25 | Testing env | **P2** |
| G-17 | Local SEO | No reviews/geo/open-days | schema omits by design | Low | ⚪ | Limited local signals | Only after owner supplies/verifies truth | 25 | **Yes** | **P4** |
| G-18 | Docs | Stale counts/status in PROJECT_PROGRESS | counts vs actual | Low | 🟡 | Misleading record | Reconcile counts; mark Phase 15 partial then complete | 18 | No | **P2** |

---

# 24. OWNER vs CODING WORK (Part 21)

## A. Coding / agent work (doable entirely in repo)

1. Fix intent matrix to derive price/unit/sub-service from pricingId; add genuinely-missing pricing rows (roof repair, repiping, etc.) or re-point intents (G-01).
2. Strengthen `audit:locations` (+ `audit:authority`) to compare matrix values and sub-service slugs; fail on drift (G-02).
3. Fix PROJECT_PROGRESS Phase 12 header + stale counts/status (G-03, G-18).
4. Build sub-service registry (slugs) + pages for the 51 priced sub-services, EN+MS+ZH, with sitemap/coverage/breadcrumb/schema wiring (G-04).
5. Build blog/guide data model + first 7 CONTENT_MAP articles in 3 languages (G-05).
6. Add selected welding/flooring/renovation problem guides where intent is genuine (G-06).
7. Add service→project contextual links; surface related content (G-07).
8. Add priceSpecification to Offer JSON-LD (G-13); reconcile location models (G-14); derive homepage previews from registry (G-15).
9. Quote form CRO pass: budget, preferred time, problem select, slug-based sub-service, optional real photo strategy (G-10) — *after* owner approves field list.
10. GA4/GTM/Web-Vitals/conversion events implementation in the late phase (G-12) — code work, but needs owner's Google accounts.

## B. Owner / real-world work (cannot be derived from repo)

1. **Resend:** create API key + verify sender domain; set `RESEND_API_KEY` and `QUOTE_FROM_EMAIL` (G-11).
2. **Real project photos** for painting, waterproofing, flooring, handyman (G-08) — and permission to publish.
3. For **all 21 projects:** real area/location, completion year, property type, actual materials/scope, before/after pairs where available (G-09).
4. **Google accounts:** GA4 property/Measurement ID, GTM container access, Google Business Profile access for measurement (G-12); GSC is already verified.
5. **Business facts** if/when available and true: opening *days*, service-radius confirmation, any verified licences/certifications, real customer reviews (only with consent) (G-17).
6. **Quote form field approval** (which fields are required; whether budget/time should be asked) (G-10).
7. **Deployment/ops:** production DNS/HTTPS verification, one-time sitemap submission, real-device QA window (G-16).
8. Confirm/deny positioning for any modifier ("cheap", "emergency 24h", "commercial") before it is ever used in copy.

---

# 25. RECOMMENDED PHASE ROADMAP (Part 22)

Coding-first, analytics/owner work last. Boundaries kept from the brief; sequencing rationale noted.

| Phase | Scope | Why this order | Key items |
|---|---|---|---|
| **PHASE 18 — Core Technical & Data Integrity** | Fix all P0/P1 data + audit + docs | Must precede new page families so new content builds on a truthful foundation | G-01 matrix derive-from-source + missing pricing rows; G-02 audit value checks; G-03/G-18 docs; G-14/G-15 debt consolidation; **re-run all 6 audits + build green** |
| **PHASE 19 — Service / Sub-service / Problem page completion** | Sub-service pages (51 priced first) + selected missing problem guides + service→project links + Offer price schema | After data integrity; structural pages before content marketing | G-04, G-06, G-07, G-13; full EN+MS+ZH; sitemap/coverage guards extended |
| **PHASE 20 — Blog / FAQ / Internal-linking authority** | Blog data model + 7 backlog guides; contextual cross-linking across the Service→Sub→Problem→Blog→FAQ→Location→Quote funnel | Pages must exist before authority content can link to them | G-05; internal-link graph completion; no thin/stuffed articles |
| **PHASE 21 — Portfolio / Service proof** | Wire project-proof sections into service/area pages; support "Illustrative Service Visual" labelling; build the *slots* that real photos will fill | Structure first so owner assets drop in cleanly | G-07/G-08 scaffolding; empty states honest; anti-fabrication enforced |
| **PHASE 22 — Quote Form + CRO** | Budget/time/problem fields, slug-based sub-service, photo strategy, conversion-ready wiring (events stubbed) | After content so form options reflect final taxonomy; before analytics so events can be tagged | G-10; owner-approved field list |
| **PHASE 23 — Phase 15 Location completion** | Decide & finish matrix: either fully wire it into area pages (now that prices derive from source) or retire it; reconcile registry vs area-content; expand locations only with real unique content | Deliberately after pricing integrity (18) and page completion (19/20) so location pages link into finished sub-service/blog content | G-01 residual, G-14; no doorway pages |
| **PHASE 24 — GA4 / GTM / Web Vitals / Measurement** | Install GA4+GTM, consent-aware events, Web Vitals, quote/WhatsApp conversion tracking | Kept near end per brief — measure the finished site, not a moving target | G-12; needs owner Google accounts |
| **PHASE 25 — Owner Data + Final Real-World Verification** | Inject real photos/details, Resend go-live, real-device/CWV QA, GSC monitoring start | Owner dependencies and live verification last | G-08/09/11/16/17 |

> Note vs the brief's Phase 21 (Portfolio) ordering: the **structural** portfolio slots move with Phase 19/21 coding, but the **real photos** remain owner-gated in Phase 25 — this satisfies "coding before owner-dependent." Analytics stays at Phase 24 as required.

---

# 26. EXACT NEXT PHASE TO EXECUTE (Part 22 final)

## ▶ PHASE 18 — Core Technical + Data Integrity

**Definition of done (all coding, no owner input required):**

1. **Intent matrix → single source (`data/locations/intent-matrix.ts`):**
   - Remove mutable `startingPrice`/`unit` literals; look them up from `getPricingById(pricingId)` (or add a typed resolver). Keep `pricingId` as the only price link.
   - Fix the 10 value mismatches and 1 unit mismatch identified in §13.
   - Resolve semantic orphans: add genuine catalogue rows for intents that have none (roof-tile/flashing repair, whole-house repiping, DB-upgrade/rewire vs DB-box, condo/terrace refurbishment per-sqft) **or** re-point those entries to the correct existing row; do not invent prices outside the researched catalogue methodology.
   - Align matrix `subServiceSlug` values to real pricing sub-service slugs (or drop the field until sub-service slugs exist post-Phase-19).
2. **Audits:**
   - Extend `scripts/audit-locations.mjs` to compare each matrix entry's effective price and unit against the referenced catalogue row and fail on mismatch.
   - Extend `scripts/audit-authority.mjs` (or locations audit) to validate matrix `subServiceSlug` against the pricing catalogue / sub-service registry.
   - Keep both green.
3. **Documentation:**
   - Restore the `## PHASE 12` heading + intro in `PROJECT_PROGRESS.md` (before line 1193) and mark its status accurately.
   - Correct stale counts (46 areas, 136 pages/language, 408 URLs, 51 pricing rows) and re-state Phase 15 as partial-until-18 then complete.
   - Add the governance rule: matrix prices must derive from `pricingId`; audits must compare values.
4. **Small debt consolidation (optional but cheap):** derive homepage problem previews from `data/problem-content` instead of the legacy 14-item list; note the registry↔area-content model reconciliation as a Phase-23 task.
5. **Exit gates:** `npm run type-check`, `npm run lint`, `npm run build`, and **all six audit scripts** PASS; sitemap still 408 URLs; no user-visible price changes that contradict the catalogue.

**This audit stops here. No code was modified in Phase 17.**
