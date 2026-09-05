# RENOVIX HOME SERVICES — DEEP AUDIT (PHASE 26)

**Site:** renovixhomeservices.my | **Audited:** September 5, 2026 | **Method:** Source-code inspection of the repository + live HTTP verification against the production site + independent execution of the repo's own 17 audit scripts.

**Evidence legend used throughout:**

✅ VERIFIED FROM CODE · 🌐 VERIFIED ON LIVE WEBSITE · ⚠️ LIKELY / NEEDS VERIFICATION · ❌ CANNOT VERIFY WITHOUT EXTERNAL ACCESS · 🔧 FIXED IN CODE (2026-09-05 session)

> **Companion files:** `PHASE_26_IMPLEMENTATION_PLAN.md` (phase-by-phase plan, green ticks updated as work lands) and `PROJECT_OWNER_PENDING.md` (owner-only actions). Where the original audit's claims changed after the 2026-09-05 implementation session, the finding text is preserved and a **Session update** note is appended — the report is the audit as performed; the plan file is the living status tracker.

---

## Executive Summary

Renovix Home Services is an unusually disciplined Next.js 16 / React 19 / TypeScript codebase for a business of this size. It has no runtime dependencies beyond `next`, `react`, `react-dom`; 17 custom build-time audit scripts that mechanically block fabricated data (fake reviews, invented prices, placeholder projects); genuine three-language content (English canonical, Malay, Simplified Chinese — independently read and confirmed as fluent, market-appropriate prose, not machine translation); a single-sourced pricing catalogue that every page, schema and AI feed derives from; and a machine-readable AI/LLM layer (`/llms.txt`, `/ai/business.json`, `/ai/pricing.json`) that is unusually rare among home-services competitors in this market.

The site is **technically launch-ready**. What remains is almost entirely owner-supplied real-world data (photos, Resend API keys, analytics IDs) rather than code defects — and the codebase is honest about this distinction throughout, refusing to fabricate what it doesn't have.

**Confirmed since the last written phase report (Phase 25, dated 2026-09-04):** every audit script was re-run and all 17 pass. The site's headline P0 issue from earlier phases — hardcoded, drifting prices in the search-intent matrix — is fully resolved: `resolveIntentPricing()` derives every price from the catalogue with zero literals in the matrix file, confirmed by direct code read; `audit:locations` compares matrix values against the catalogue (not just that an ID resolves) — 24/24 entries clean.

**Open at time of writing (as audited):**

- `www` vs apex domain canonicalization — a live fetch of the homepage landed on `www.renovixhomeservices.my`, not the apex the canonicals/sitemap declare. Vercel dashboard setting, not a code fix. *(owner task T-01)*
- Painting, Waterproofing, Flooring and Handyman had zero real project photos (confirmed live and via `audit:projects`). *(owner task)*
- CSP allowed `'unsafe-inline'` for both scripts and styles. *(T-10 — see Session update: inherent to full-static SSG; deferred with rationale)*
- Two location data layers (`data/locations/registry.ts` and `data/area-content/`) existed separately. *(T-05 — see Session update: dead duplicate copy now removed; remaining split is intentional and drift-guarded)*
- A legacy preview file (`data/problems.ts`) still existed alongside the 57-item `data/problem-content` registry. *(T-06 — 🔧 fully retired 2026-09-05)*
- The non-standard `host:` directive was still present in `robots.ts` (Google ignores it; non-conformant to RFC 9309). *(T-04/I-11 — 🔧 removed 2026-09-05)*

**New finding, not in any prior report:** the Painting service page's "Quick Answers" block and its "FAQs" section near the bottom restated the same pricing figures in near-identical wording. No automated script checked for it (the scripts check numeric consistency, not phrasing overlap within a single page). *(Session update: this was found on **all 10** service pages, not just Painting — 🔧 fixed + regression guard added, see I-06.)*

The original audit could not run `npm run build`, `type-check`, `lint` or `npm audit` (no network access in that sandbox); those are **now independently verified** — see Appendix A.

---

## Overall Score: 91/100

The three points knocked off a near-perfect technical foundation: the live www/apex mismatch, the unhardened CSP, and the portfolio gap for 4 of 10 services — all genuinely fixable, none of them structural. (Post-session scorecard in Appendix A reflects what moved.)

---

## Top 20 Findings (highest signal, in priority order)

1. 🌐 **www/apex mismatch is live.** A direct fetch of `https://www.renovixhomeservices.my/` resolved with `www` in the final URL, while every canonical, hreflang and sitemap `<loc>` uses the bare apex. Split-signal for Google; can dilute ranking signals between two duplicate hostnames. **Fix: Vercel dashboard → Domains → set apex as primary** — not a code change. *(T-01, owner)*
2. ✅ **Intent-matrix pricing drift is fully resolved.** `data/locations/intent-matrix.ts` carries only `pricingId`; `resolveIntentPricing()` is the single derivation point; `audit:locations` compares effective values against the catalogue — 24/24 clean.
3. 🌐 **4 of 10 services have zero project-proof photos** (Painting, Waterproofing, Flooring, Handyman). The site correctly omits fake proof rather than fabricating it — a real E-E-A-T/conversion gap until real photos arrive. *(owner)*
4. ✅→⚠️ **CSP allowed `'unsafe-inline'`** for `script-src` and `style-src` (`next.config.ts`). A defensible Next.js tradeoff but a real un-hardened XSS surface. *(T-10 — see Session update: full nonce strategy forces per-request dynamic rendering, which would break the 665-page fully-static architecture; deferred deliberately with rationale, not forgotten.)*
5. 🆕→🔧 **On-page content duplication on service pages** (Finding I-06). Verified live on `/en/services/painting/`: "Quick Answers" and "FAQs" restated near-identical pricing sentences. **Session update: measured across all 10 services — every one had its `faqs[0]` cost answer as a compressed copy of `answerFirst[0]` (76–100% word overlap). All 10 English sources rewritten to complementary framings; `audit:authority` §5b now fails the build if it regresses.**
6. ✅ **Rate limiting is in-memory, per-serverless-instance** (`lib/quote/rate-limit.ts`), correctly documented as a baseline. `MAX_KEYS = 2000` with prune-then-clear defends against unbounded memory growth. A distributed store (Vercel KV/Upstash) is the pre-scale upgrade. *(T-11, owner provisioning)*
7. ✅ **Live email delivery is entirely owner-gated.** Without `RESEND_API_KEY`/`QUOTE_FROM_EMAIL` the API honestly returns 503 and the form surfaces a WhatsApp fallback — never a fake success. Correct behavior; but **quote submissions are not delivered anywhere** until Resend is configured. *(T-02, owner)*
8. ✅→🔧 **Two parallel location data models**: `data/locations/registry.ts` and `data/area-content/`. **Session update: the genuine duplication was the registry's dead `seo.title/metaDescription/h1` copies (never rendered; the pages render from the guides). Those 159 lines were removed — registry = structure/intents, guides = copy. `audit:locations` already reconciled both by ids/districts/publicPath, so drift was mechanically guarded before and is fully single-sourced now.**
9. ✅→🔧 **Legacy dual problem taxonomy.** `data/i18n/index.ts` still imported `problemCategoryIcons`/`problemPreviewSlugs` from `data/problems.ts`. **Session update: `data/problems.ts` is deleted; the two curated preview constants live in `data/problem-content/previews.ts` inside the authoritative registry. One taxonomy file set, zero second source.**
10. ✅→🔧 **`robots.txt` emitted the non-standard `host:` directive** (`app/robots.ts`). **Session update: removed; robots.txt verified conformant via the local production server.**
11. 🌐 **Live sitemap.xml is well-formed** — apex-only URLs, full 4-way hreflang (`en-MY`/`ms-MY`/`zh-MY`/`x-default`) per entry, genuine content-based `lastmod` (`2026-09-01`, not `now()`).
12. ✅ **Quote-flow security is genuinely well-built.** Origin validation is honest about its one real gap (no-Origin requests bypass by design, compensated by downstream validation); `escapeHtml()` applied universally across every email field — no per-field bypass.
13. 🌐 **Multilingual content is high quality, not machine-translated.** Raw Malay/Chinese sources read directly: idiomatic ("berterus terang", 一漆遮丑, correct 组屋/巴生谷 usage). A genuine, rare strength in this market. (Session note: the translations also *already omit* the duplicated cost FAQ that the English pages carried — see Finding 5.)
14. ✅ **No fabricated trust signals anywhere** — `audit:schema` emits no `Review`/`AggregateRating`/`priceRange`/awards; `CONTENT_GOVERNANCE.md` forbids it and the audits enforce it. Correct for a business with no reviews yet, though it means zero visible social proof today.
15. ⚠️ **Analytics is dark by design** (no GA4/GTM/Ads/Clarity IDs) — confirmed live (no tracking scripts) and in code. Zero visibility into real traffic/conversions until the owner supplies IDs. *(T-05 owner checklist item)*
16. ❌→✅ **The original auditor could not run build/type-check/lint** in its sandbox; Phase 25's claims were relayed, not confirmed. **Session update: all three were re-run here on 2026-09-05 — 0 TypeScript errors, 0 ESLint warnings, build PASS with 665 static pages, verified independently (see Appendix A).**
17. ❌→✅ **Dependency CVE scan not possible in the audit sandbox** (438 lockfile packages; lockfile↔package.json confirmed in sync). **Session update: `npm ci` + `npm audit` run 2026-09-05 → `found 0 vulnerabilities`.**
18. 🌐 **Competitive positioning is strong on transparency.** Live checks of 7 KL/Selangor competitors: none show starting prices, most use templated testimonial widgets, none show visible multilingual content. Renovix's transparent pricing ranges and honest "no reviews yet" are rare differentiators.
19. ✅ **Minimal dependency surface** — exactly 3 runtime packages (`next`, `react`, `react-dom`).
20. ✅ **Sub-service and blog architecture fully realized** — 51/51 priced sub-services standalone; 12 blog articles; confirmed by `audit:subservices`/`audit:blog` and cross-checked against the live `llms.txt` feed.

---

## 1. Technical SEO

- ✅ `trailingSlash: true` globally enforced (`next.config.ts`); every canonical, sitemap `<loc>` and hreflang alternate uses the trailing-slash form.
- ✅ Root `/` → `/en/` via 308 permanent redirect (Google's hreflang/default-locale guidance).
- ✅ Retired per-language sitemaps `/sitemap/{en,ms,zh}.xml` → `/sitemap.xml` (308) — stale backlinks don't 404.
- ✅ Hreflang: every page emits `en-MY`/`ms-MY`/`zh-MY`/`x-default` — confirmed in live sitemap.xml.
- 🌐 **www vs apex — still live at audit time.** Fetch returned `final_url: https://www.renovixhomeservices.my/en/` while canonicals/sitemap declare the apex. **Not fixable in application code without loop risk** (the code's own docs say so). Fix: Vercel → Domains → apex primary. *(T-01)*
- ⚠️ CSP `'unsafe-inline'` present for scripts + styles — adjacent to the security headers Lighthouse flags. *(T-10 — see Session update under Security.)*
- 🔧 `robots.txt` — `Allow: /`, single canonical sitemap; the non-standard `host:` line has been **removed** (2026-09-05) and served output verified conformant to RFC 9309.

## 2. Indexability & Crawlability

- ✅ No accidental noindex/disallow anywhere; the only `noindex` is the deliberate `X-Robots-Tag` on `/api/quote` (correct).
- ✅ No orphan pages (`audit:authority` reference resolution).
- 🌐 Sitemap well-formed: apex-only `<loc>`, content-based `lastmod`, sensible priority tiers (home 1.0, service pillars 0.8, sub-services 0.75, problems 0.7, blog 0.65).
- ⚠️ GSC indexing status cannot be verified without owner Search Console access — submission is a one-time owner action once T-01 lands.
- ✅ No redirect chains/loops — 4 single-hop redirect rules total.

## 3. On-Page SEO

- ✅ Unique title/meta description per page per language (`audit:authority` + live spot-checks).
- ✅ Single H1 per page — confirmed live.
- ✅ Answer-first "Quick Answers" block before the main body — good for snippet capture and AI extraction.
- 🔧 **Content duplication within a single page (I-06).** "Quick Answers" and "FAQs" both restated the same pricing ranges in near-identical wording — on **all 10** services once measured (painting pair ≈ 76–80% overlap; handyman 100%). Not a numeric-integrity issue; a content-quality issue. **Fixed 2026-09-05:** each page's cost FAQ answer rewritten to a complementary angle (how the quote is built, what moves the number, how to read per-sqft vs per-trip vs package pricing), keeping only anchor figures consistent with the catalogue. `audit:authority` §5b now mechanically prevents the pattern from returning.
- ✅ Contextual internal links in prose, not just footer blocks.
- ✅ Alt text on every image (`audit:authority`).

## 4. Content Quality

- ✅ Non-generic, trade-specific content (putty vs skim coat, why Malaysian humidity peels paint, drying times, brand names Nippon/Jotun/Dulux, per-property day counts).
- ✅ No AI-slop red flags; genuine specificity throughout.
- ✅ No fabricated trust signals (governed + mechanically enforced).
- 🔧 The one content-quality gap found (answer-first/FAQ duplication) — fixed as above.

## 5. Local SEO

- ✅ NAP single-sourced from `data/site.ts`, enforced by `audit:business` (309 files, zero conflicts).
- 🌐 53 area guides (21 KL + 32 Selangor) confirmed matching `llms.txt` and `audit:locations`.
- ✅ Genuine local context (heritage shophouses, 1950s PJ, royal Klang) — not templated boilerplate.
- ✅ No doorway-page risk: `/[service]-in-[area]/` pages forbidden by governance and guarded by the locations quality gate.
- ⚠️ No GBP integration, geo-coordinates or review sync — deliberate honesty rule (would require invented data). Opportunity cost noted; owner to connect GBP with real data.

## 6. AEO / GEO / LLM SEO

- 🌐 `/llms.txt` — clean Markdown business summary: services + prices, 12 guides, 53 area guides by district, contact info, quoting steps. Exactly the shape answer engines ingest.
- ✅ `/ai/business.json` + `/ai/pricing.json` generated at build time from the same registries every page renders from (`lib/ai-knowledge.ts`) — cannot silently drift.
- ✅ Answer-first Q→A blocks feed AEO extraction directly.
- ✅ Explicit anti-fabrication disclosure inside the live llms.txt ("No ranking, review-count, licence, certification, award or outcome claims are made").
- ⚠️ No `Offer` price/priceCurrency in JSON-LD (correct per schema-honesty rules today; see governance §6 and the deferred optional enhancement in Phase 6 of the plan).

## 7. Structured Data / Schema

- ✅ Present: Organization/LocalBusiness (stable @id), WebSite, WebPage, BreadcrumbList, Service + OfferCatalog, FAQPage, Article, ImageObject.
- ✅ Deliberately absent (confirmed correct): Review, AggregateRating, priceRange, awards, dayOfWeek, geo — inventing any of them would be schema fraud.
- ✅ One Organization/LocalBusiness node site-wide via stable @id; no duplicates/conflicts.

## 8. Internal Linking

- ✅ Service → Sub-service → Project chains live; blog links contextual.
- ✅ No orphans (`audit:authority`).
- 🌐 Project showcases link from service pages where projects exist; correctly absent where they don't (honest, by design).
- 🔧 Parallel-location linking risk — neutralized at the data layer (see Finding 8 / T-05).

## 9. Site Architecture

```
Home (/en/ /ms/ /zh/)
├── Services (10 pillars)
│   └── Sub-services (51, standalone pages)
├── Problems (57 guides)
├── Areas (53 local guides + 2 region hubs)
├── Projects (21 real, photographed)
├── Blog / Guides (12 articles)
├── Quote / Contact / FAQ / About
└── Machine-readable layer (/llms.txt, /ai/business.json, /ai/pricing.json)
```

- ✅ Exactly 10 pillars, no Carpentry (route audit + code confirm).
- ✅ Max 3 hops homepage → any granular page.
- 🔧 Architecture debt item (two location layers) — resolved into an intentional, documented split: `data/locations/` = structure + search intent; `data/area-content/` = page copy. `audit:locations` reconciles both.

## 10. Programmatic SEO

- ✅ Not thin/templated: 53 area guides + 51 sub-service pages individually authored (translation sources read directly); `standaloneSearchIntent` gates guard doorway risk.
- ✅ No `/{service}-in-{area}/` combinations; quality gate enforced pre-build.
- ✅ Remaining unpublished sub-services are correctly NOT auto-generated.

## 11. Performance & Core Web Vitals

- ✅ Minimal client JS (very few `"use client"` components; rest Server Components/SSG).
- ✅ AVIF-first + WebP fallback; 31-day image cache TTL with rename-to-bust convention.
- ✅ Self-hosted fonts (`app/fonts/`).
- ❌ Field CWV data unmeasurable in-repo (no browser, no PSI quota) — owner task: PageSpeed Insights / GSC CWV report once traffic exists. Code-level signals are strong.

## 12. Mobile UX

- ✅ Code-level: 16px inputs (no iOS zoom), ≥44px tap targets, `prefers-reduced-motion`.
- ❌ Real-device pass outstanding — owner (also flagged by every prior phase).

## 13. CRO

- ✅ WhatsApp + phone CTAs consistent everywhere; single verified number (+601159259521); no NAP conflicts.
- ✅ Quote flow never fakes success (503 + WhatsApp fallback when Resend unset) — ethical and honest, but the primary conversion path is non-functional until T-02.
- 🟡 No photo upload (count tracked, files not sent — by design; users send photos via WhatsApp), no budget field, no preferred-time field. *(T-09 — owner approval of field list first.)*
- 🌐 Zero visible social proof (correct, pending real reviews).

## 14. Accessibility

- ✅ Skip link, semantic landmarks, ARIA on the quote form (`aria-required`, `aria-invalid`, `aria-describedby`, `role="alert"/status").
- ❌ Screen-reader/keyboard tooling pass and contrast audit need a real browser — outstanding owner/QA task.

## 15. Security

- ✅ CSP, `X-Frame-Options: DENY`, nosniff, Referrer-Policy, Permissions-Policy applied to `/(.*)`.
- ⚠️ `'unsafe-inline'` on scripts + styles. **Session update (2026-09-05):** a proper nonce requires per-request server rendering (middleware nonce → `metadata.csp` via `headers()`), which would force all 665 pages dynamic and destroy the site's fully-static architecture. Deferred **by decision, documented in the plan**, not by oversight — revisit if/when the site moves to ISR/dynamic rendering; revisit sooner if any ever renders user input.
- ✅ Origin validation reasoned honestly (no-Origin allowed by design + compensated by downstream validation/rate limit).
- ✅ `escapeHtml()` universal across the 12 email rows — no field bypass; `replyTo` validated before use.
- ✅ No secrets in source; `.env.example` documents keys; `.gitignore` covers env.
- ✅ Rate limiter memory-capped (2,000 keys, prune-then-clear) — interim design; Vercel KV/Upstash before scale. *(T-11)*
- ✅ **Session update:** `npm audit` (run with network on 2026-09-05) → **0 vulnerabilities**; lockfile↔package.json in sync.

## 16. Code Quality

- ✅ Clean, well-commented (`why`, not just `what`); no dead code found in inspected areas.
- 🔧 Legacy `data/problems.ts` — **retired 2026-09-05** (T-06 complete; preview curation moved into `data/problem-content/previews.ts`).
- 🔧 Two location layers — **single-sourced for copy 2026-09-05** (T-05 complete at the data level; full file-merge explicitly NOT done — the audit's own numbers say it is drift-safe now and the remaining split is a structural/copy layering, not duplication).

## 17. Dependencies

- ✅ 3 runtime packages only. Lockfile internally consistent.
- 🔧 **Session update:** `npm audit` → 0 vulnerabilities (2026-09-05, network-enabled run). Dependabot/Snyk still recommended for *ongoing* coverage (GitHub repo setting — owner).
- ⚠️ Never blindly upgrade Next 16 / React 19 / TS 6 — always through the repo's type-check→lint→build→all-audits gate.

## 18. Images & Media

- ✅ AVIF/WebP + 31-day TTL; 21 real projects, 42 referenced images verified on disk with matching dimensions (43 files; 1 spare unreferenced — harmless).
- 🌐 4 services with zero project imagery — honest empty states, no stock/AI placeholders (owner to supply consented photos).

## 19. Sitemap & Robots

- 🌐 Sitemap: apex-only, 4-way hreflang, content `lastmod`, tiered priorities — fetched and read.
- 🔧 Robots: `host:` directive removed 2026-09-05; `Sitemap:` line references the single native sitemap.
- ✅ Sitemap is registry-driven — new pages are included automatically.

## 20. Search Console Readiness

- ✅ GSC verification meta tag live and in code (`CIc-da9G9QfriX7tAeKqS3w5YF2tt4GKnjV8IMSGP8o`).
- ✅ Sitemap submission-ready.
- ❌ Cannot verify actual submission/indexing without owner GSC access. Owner checklist: fix T-01 first, then submit `https://renovixhomeservices.my/sitemap.xml` once on the apex property; don't resubmit per-language sitemaps; allow 1–2 weeks before judging indexing performance.

## 21. Competitor / Market Benchmark

7 sampled KL/Selangor competitors: none publish specific starting prices; testimonials are templated/aggregator widgets; no multilingual content visible; generic value props dominate. Renovix is ahead on transparency (published ranges), tri-lingual depth, and the honest AI-feed layer. Competitors currently ahead on visible review volume and broader galleries. Do not copy their opacity or template-testimonial culture — close those gaps with real data only.

## 22. Search Intent Analysis

| Page type | Likely intent | Current quality | Gap | Recommendation |
| --- | --- | --- | --- | --- |
| Service pillar pages | Commercial + informational | Strong — answer-first, pricing, process, FAQs | 🔧 Answer-first/FAQ duplication — **fixed all 10** | Maintain §5b guard |
| Sub-service pages | Commercial, narrower | Strong, single-purpose, price-anchored | None found | — |
| Problem guides | Informational, pre-purchase | Strong — diagnostic framing | None found | — |
| Blog / guides | Informational, comparison | Strong — genuinely researched | None found | — |
| Area guides | Local + commercial | Strong — real local context | None found | — |
| Quote page | Transactional | Complete but undeliverable (no Resend) | Live delivery gap | Owner T-02 |

## 23. E-E-A-T / Trust

- ✅ Real, single-sourced business identity; consistent everywhere checked.
- ✅ Honest absence over fabricated presence (no reviews/invented years/fake certs).
- 🌐 21 real photographed projects covering 6/10 services.
- 🟡 No author/team page — worth an owner decision: a simple founder note strengthens trust without overstating.

## 24. Duplicate Content & Cannibalization

| Page A | Page B | Overlap | Risk | Action |
| --- | --- | --- | --- | --- |
| "Quick Answers" block | Same page's "FAQs" | Near-verbatim pricing phrasing (all 10 services) | Medium (content quality) | 🔧 Done — EN rewrites + §5b guard |
| `data/locations/registry.ts` | `data/area-content/` | Dead duplicate copy metadata | Medium (drift risk) | 🔧 Done — registry copy fields removed; audit reconciles the rest |
| `data/problems.ts` | `data/problem-content/` | Legacy preview source | Low | 🔧 Done — legacy file deleted |

No page-vs-page keyword cannibalization found; service/sub-service/problem/area scopes are distinct.

## 25. Broken Links / Errors

- ✅ No broken internal links in `audit:authority`'s reference checks or in the live spot-checks.
- 🔧 **Session update:** full local production sweep re-run 2026-09-05 via `npm run audit:live` against `next start`: **PASS 199 / WARN 0 / FAIL 0** — every sampled URL 200, canonicals match, hreflang resolves, JSON-LD parses, quote API behaves honestly (405/400/403/413/429/503 paths all exercised).

## 26. Business Conversion Journey

Search → landing ✅ → service understanding ✅ (answer-first) → trust 🟡 (no reviews yet — honest; 4/10 services lack photos) → quote form ⚠️ (**cannot deliver until T-02**) → WhatsApp ✅ (works today) → booking off-platform ✅.

**Highest-impact friction today:** quote-form email delivery (Resend unconfigured). Everything else in the funnel is in good shape.

---

## Master Issue Register (with 2026-09-05 session status)

| ID | Category | Severity | Page/File | Problem | Status after 2026-09-05 session |
| --- | --- | --- | --- | --- | --- |
| I-01 | Technical SEO | 🔴 CRITICAL | Vercel domains | www/apex canonical mismatch | ✅ CLOSED 2026-09-05 — owner set apex primary in Vercel; AI-verified live: www→apex redirect works, apex serves, no loop |
| I-02 | CRO/Business | 🔴 CRITICAL | .env / Resend | Quote form cannot deliver email | ✅ CLOSED 2026-09-06 — owner configured Resend; AI verified DNS + clean redeploy; real test quote delivered to inbox |
| I-03 | Security | 🟠 HIGH | next.config.ts | CSP `'unsafe-inline'` | ⏸ DEFERRED (documented): nonce ⇒ dynamic rendering breaks SSG; revisit at architecture change |
| I-04 | E-E-A-T | 🟠 HIGH | projects | 4/10 services no photos | ☐ **OWNER** — real consented photos |
| I-05 | Analytics | 🟠 HIGH | .env | No GA4/GTM IDs | ☐ **OWNER** — supply ID (never both GA4+GTM) |
| I-06 | Content Quality | 🟡 MEDIUM | all 10 service pages | Quick-Answers ↔ FAQ duplication | ✅ FIXED — 10 EN rewrites + `audit:authority` §5b regression guard |
| I-07 | Code Quality | 🟡 MEDIUM | locations | Two parallel location models | ✅ FIXED (data level) — dead duplicate `seo` copy removed from registry (−159 lines); intentional structure↔copy split now documented; drift guarded by `audit:locations` |
| I-08 | Code Quality | 🟡 MEDIUM | data/problems.ts | Legacy taxonomy import | ✅ FIXED — file deleted; curation in `data/problem-content/previews.ts` |
| I-09 | CRO | 🟡 MEDIUM | QuoteForm | No photo/budget/time fields | ☐ OWNER — approve field list (photo upload also needs storage decision); coding is ~1 day once approved |
| I-10 | Security/Scale | 🟡 MEDIUM | rate-limit.ts | In-memory limiter | ☐ OWNER — provision Vercel KV/Upstash before high traffic |
| I-11 | Technical SEO | 🟢 LOW | robots.ts | Non-standard `host:` | ✅ FIXED — removed; live robots.txt verified conformant |
| I-12 | Dependencies | ⚪ UNVERIFIABLE→✅ | lockfile | CVE status | ✅ VERIFIED — `npm audit`: 0 vulnerabilities (2026-09-05); enable Dependabot (owner, GitHub settings) |
| I-13 | Build | ⚪ UNVERIFIABLE→✅ | whole repo | 0 TS/0 lint/build | ✅ VERIFIED — `tsc --noEmit` 0 errors, `eslint` 0 warnings, `next build` 665 pages, all 17 audits PASS (2026-09-05) |

### Priority map after this session

- **P0 (owner, unblocked by anything):** I-01 www/apex primary · I-02 Resend + one real test quote
- **P1:** I-03 (owner decision on CSP-vs-SSG stance) · I-04 photos · I-05 analytics ID · sitemap submission in GSC after I-01
- **P2:** I-09 field-list approval → implement · I-10 KV before scale · periodic re-runs of all audits
- **P3:** nothing left — I-11 done; I-06/07/08 done; I-12/13 verified

---

## Final Scorecard (as audited → post-session)

| Dimension | Score | Reasoning (post-session) |
| --- | --- | --- |
| Technical SEO | 90 | Live www/apex (owner) remains the one real defect |
| On-Page SEO | 93→95 | 🔧 I-06 duplication fixed + guarded |
| Content Quality | 92→94 | 🔧 Same; content otherwise genuinely strong |
| Local SEO | 90 | GBP/reviews absence remains honest |
| AEO | 96 | Standout; llms.txt + AI feeds |
| GEO | 95 | Same strength |
| LLM/AI readiness | 96 | Anti-fabrication disclosure in-feed |
| Site Architecture | 94→96 | 🔧 I-07/I-08 data-model debt resolved |
| Internal Linking | 93 | Contextual; no orphans |
| Performance (code) | 90 | Minimal JS, good images/fonts; field data pending |
| CWV readiness | 75 | Unmeasured remains unmeasured — honest |
| Mobile UX | 78 | Needs owner real-device pass |
| Accessibility | 82 | Needs real assistive-tech pass |
| CRO | 80 | Blocked only by Resend (owner) |
| Trust/E-E-A-T | 84 | Honest; photos/reviews pending |
| Security | 88 | 🔧 npm audit 0; CSP stance documented; KV pending |
| Code Quality | 91→95 | 🔧 Both open debt items closed |
| Indexability | 92 | Pending www/apex owner fix |
| **Overall** | **91 → 93 (post-session)** | Remaining gaps are owner actions, not code defects |

---

## Appendix A — Implementation session, 2026-09-05

Independent verification performed in this session (network-enabled sandbox, `npm ci` succeeded):

| Check | Result |
| --- | --- |
| `npm run type-check` (`next typegen && tsc --noEmit`) | ✅ 0 errors |
| `npm run lint` (`eslint`) | ✅ 0 warnings |
| `npm run build` | ✅ Compiled successfully; **665 static pages** (independently confirms Phase 25's claim) |
| All 17 `npm run audit:*` scripts | ✅ PASS (pre- and post-fix) |
| `npm audit` | ✅ **found 0 vulnerabilities** |
| `npm run audit:live` vs `next start` | ✅ PASS 199 / WARN 0 / FAIL 0 (incl. quote-API honest responses) |
| Live robots.txt (local prod server) | ✅ `User-Agent: *` / `Allow: /` / single `Sitemap:` — no `Host:` |

Code changes landed this session (commit `phase 26` on `arena/01a06f4c-renovix-home-services`):

1. **T-04 / I-11** — `app/robots.ts`: removed the non-standard `host:` directive (+ explanatory comment).
2. **T-06 / I-08** — `data/problems.ts` deleted; `problemCategoryIcons` + `problemPreviewSlugs` (+ `ProblemPreview` type) moved into `data/problem-content/previews.ts`; `data/i18n` rewired. One problem taxonomy now exists.
3. **T-05 / I-07** — `data/locations/registry.ts`: removed the 53× dead `seo.title/metaDescription/h1` duplicates (−159 lines); `types.ts` documents the intentional split (registry = structure/intents; `data/area-content` = page copy); `audit:locations` no longer parses the removed fields. `audit:locations` still PASSes (its bidirectional registry↔guides reconciliation remains the drift guard).
4. **T-07 / I-06** — all 10 English `data/service-content/*.ts` files: the duplicated cost FAQ answers rewritten to complementary framings (max overlap 50% pre-guard-threshold vs 76–100% before). MS/ZH were verified to already omit these entries — no translation changes needed; `audit:pricing` confirms EN/MS/ZH number parity still holds.
5. **Regression guard** — `scripts/audit-authority.mjs` §5b: fails the build when any service page's `answerFirst` and `faqs` blocks share ≥0.55 word containment (≥0.45 with ≥4 shared RM figures). Negative-tested: reverting the old painting copy makes the audit FAIL ("80% word overlap, 9 shared RM figures"); with the fix it PASSes.

Explicitly NOT done in this session (with reasons, tracked in the plan): T-01/T-02/T-03/T-05-owner-items (dashboard/owner actions), I-09 quote fields (audit itself gates on owner field-list approval), I-03 CSP nonce (would force dynamic rendering; documented), I-10 KV (needs paid provisioning).
