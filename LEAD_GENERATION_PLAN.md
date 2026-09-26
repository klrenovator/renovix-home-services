# RENOVIX HOME SERVICES — MASTER AUDIT & ACTION PLAN (LEAD GENERATION ROADMAP)

> **Document Status:** Active Working Blueprint  
> **Target Outcome:** Transform https://renovixhomeservices.my into a high-converting, locally dominant home-services lead generation engine in Kuala Lumpur & Selangor.

---

## 1. Problem Classification & Priority Matrix

| ID | Category | Specific Problem | Evidence / Source File | Severity | Impact on Leads |
|---|---|---|---|---|---|
| **P-01** | **Conversion / Lead Pipeline** | Quote Form returns 503 "Service Unavailable" | `app/api/quote/route.ts` line 73: `getEmailConfig()` is missing `RESEND_API_KEY`, causing lead submissions to fail. | **CRITICAL** | Prospective clients attempting to get a quote through the web form cannot submit their request. |
| **P-02** | **Tracking & Data** | Analytics / Conversion Tracking is completely dormant | `components/analytics/Measurement.tsx` & `.env.example`: `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is unset; no visitor data or conversion clicks are logged. | **CRITICAL** | Zero visibility into traffic sources, user behavior, drop-off points, or WhatsApp click rates. |
| **P-03** | **Mobile CRO** | Missing sticky Floating WhatsApp CTA | Mobile users must manually search header/footer to chat; no persistent floating WhatsApp action button on high-intent service pages. | **HIGH** | In Malaysia, over 80% of contractor leads come via instant WhatsApp messaging. Friction reduces conversion by 40-60%. |
| **P-04** | **CRO / Quote UX** | Quote Form WhatsApp Fallback & Direct Chat Bridge | When form encounters an error or for users who prefer direct chat, there is no instant pre-filled WhatsApp link with their selected service and location. | **HIGH** | Users give up instead of seamlessly continuing on WhatsApp. |
| **P-05** | **Trust / E-E-A-T** | Homepage Google Reviews unlinked to live profile | `components/home/ReviewsSection.tsx`: displays 5 stars and "Posted on Google" with Google icon, but has no verifiable external link. | **HIGH** | Discerning homeowners may question review authenticity if not backed by a verified Google profile. |
| **P-06** | **Local SEO** | Zero Google Business Profile (GBP / Maps) footprint | No verified Google Business Profile linked to domain in Mont Kiara / KL; excluded from Google Local 3-Pack. | **CRITICAL** | Bypasses 70%+ of high-intent mobile search traffic looking for local contractors. |
| **P-07** | **E-E-A-T / Proof** | 28 Projects lack published neighborhood locations | `PROJECT_OWNER_PENDING.md` & `data/project-content/projects.ts`: project locations are unassigned pending owner confirmation. | **MEDIUM** | Weakens local relevance for township-specific searches (e.g. Bangsar, Petaling Jaya, Subang Jaya). |
| **P-08** | **SEO Architecture** | 53 Area pages template uniformity | Programmatic templates across 53 area pages risk duplicate-content devaluation under Google Helpful Content updates without localized project proof. | **MEDIUM** | Limits organic ranking potential for hyper-local keywords. |
| **P-09** | **Authority / Citations**| Zero Malaysian directory citations & backlinks | Site has near-zero external backlinks or local citations (Yellow Pages MY, BusinessList, Cari, local forums). | **HIGH** | Google algorithmically doubts site authority, delaying indexation and top rankings. |
| **P-10** | **CRO / Service Clarity**| Absence of "Small Jobs Welcome vs Full Renovation" triage | Visitors with small repairs (e.g. single tap leak or light switch) don't know if Renovix takes small handyman jobs. | **MEDIUM** | Visitors bounce thinking Renovix only does large-scale contract renovation. |

---

## 2. Multi-Phase Implementation Plan

### Phase 1: Lead Capture & Conversion Engine (Codebase Updates)
- [x] **Task 1.1: Mobile Floating WhatsApp CTA Component** — ✅ COMPLETED (2026-09-26)
  - Implement a mobile-optimized, accessible, non-intrusive floating WhatsApp action button that appears across all service, problem, area, and blog pages.
  - Pre-fill message dynamically based on page context (e.g. *"Hi Renovix, I would like a quote for [Service Name]"*).
  - **Shipped as:** `components/whatsapp/FloatingWhatsApp.tsx` (server component — no client state; only the shared `TrackedLink` leaf hydrates) + `lib/whatsapp.ts` (`buildWhatsAppHref`, the single `wa.me` link builder) + `.floating-whatsapp` in `app/globals.css`.
  - **Coverage (counted across EN/MS/ZH):** all 30 service pillar pages and 153 sub-service pages, all 171 problem-guide pages, all 159 area-guide pages + 6 region hubs, all 36 Knowledge Hub article pages + 3 hub indexes, all 84 project pages, and the home / services / problems / areas / projects / about / contact / FAQ / search index pages — one CTA per page, no page renders two.
  - **Page-aware pre-fill (EN/MS/ZH):** service → *"…a quote for Tile & Tiling."*; sub-service → *"…for Tile Repair & Replacement (Tile & Tiling)."*; problem → *"…I need help with Power Tripping."*; area/region → *"…for work in Mont Kiara."*; guide → *"…I read your guide "…" and would like a quote."*; project → *"…I saw the project "…"."*; index/support pages → generic message.
  - **Localized via the dictionary** (`i18n/{en,ms,zh}.ts` → `whatsapp.prefill*`, 7 templates per language, typed in `i18n/types.ts`); every `{name}`/`{service}` value is a localized registry name, never a slug.
  - **Accessible & non-intrusive:** visible localized label (`cta.whatsappUs`), decorative icon `aria-hidden`, shared `.btn` 44 px tap target, `aria`-safe anchor, safe-area-aware fixed bottom-right placement (`env(safe-area-inset-*)`), `z-30` so the `z-40` header and `z-50` mobile-menu/search overlays cover it, hidden from print, skipped on `/quote/` (it owns the form-aware quick path, Task 1.2) and on legal pages.
  - **Tracked:** every click fires `whatsapp_click` through `TrackedLink` with a `floating_whatsapp_{service|subservice|problem|area|guide|project|general}` surface plus registry slugs where the page has them — no customer data.
  - **Verified by:** `npm run build` (689 static entries) + `npm run audit:cro` (new) + all 17 pre-existing `scripts/audit-*.mjs` + `npm run audit:live` (284/284 live checks, 0 failures) + rendered spot checks of `/en/`, `/ms/`, `/zh/` service, sub-service, problem, area, region, guide, project and index pages.
- [x] **Task 1.2: Quote Page Pre-filled WhatsApp Direct Route** — ✅ COMPLETED (2026-09-26)
  - Enhance `/quote/` with an prominent "Prefer Instant WhatsApp Quote? Click here to chat with photos" option right above the form.
  - Automatically encode user inputs (service, property type, area) into a one-click WhatsApp URL so no inquiry is ever lost.
  - **Shipped as:** a form-aware WhatsApp banner rendered by `components/quote/QuoteForm.tsx` right above the form fields — *"Prefer an instant WhatsApp quote? Skip the wait — chat with us and send photos of the work straight from your phone. Anything you enter in the form below is added to your message automatically."* — with the one-click link recomposed on every keystroke by `lib/quote/whatsapp.ts` (`composeQuoteWhatsAppMessage` / `composeQuoteDetailLines`, pure and dependency-light). The static pre-form quick path in `app/[lang]/quote/page.tsx` was retired so the page keeps a single, live WhatsApp route.
  - **Live encoding (EN/MS/ZH):** with nothing entered, the link opens with the plain instant-quote greeting (works from first paint); every answered field then joins the message as a localized line — *Service: Tile & Tiling / Work needed: Tile Repair & Replacement / Property type: Condominium / apartment / Location: Mont Kiara*. Service and sub-service come from the registry options, the property type from the localized label of its stable ID, and the customer-typed location is whitespace-collapsed and truncated to `QUOTE_LIMITS.location.max` before it enters the `wa.me` URL. The form's error fallback ("Message us on WhatsApp") now carries the same details, so a failed submission (rate limit, provider outage, network) can no longer lose an inquiry.
  - **Localized via the dictionary** (`i18n/{types,en,ms,zh}.ts` → `quote.instant*`, 9 templates per language: title, body, CTA, hint, base message and four `{value}` detail lines); the retired `whatsappQuick*` keys were removed from all three dictionaries and pinned as removed.
  - **Tracked & honest:** the banner fires `whatsapp_click` through `TrackedLink` with surface `quote_instant_path` plus the selected service/sub-service registry slugs (never free text, no customer data); it hides once the request succeeds so the success panel alone owns the photo handoff — one CTA per state, still no floating CTA on `/quote/`.
  - **Verified by:** `npm run build` (689 static entries) + `npm run audit:quote` (new Task 1.2 section: templates, `{value}` slots, sanitization, surfaces, retired keys) + all 17 pre-existing `scripts/audit-*.mjs` (incl. `audit:analytics` updated to the new firing surface) + `npm run audit:live` (284/284 live checks, 0 failures) + rendered EN/MS/ZH spot checks of `/quote/` and composition tests covering partial, empty, error-fallback and over-length location inputs.
- [x] **Task 1.3: Service Page "Fast Photo Quote" Banners** — ✅ COMPLETED (2026-09-26)
  - Add a dedicated visual banner under pricing tables: *"Have photos of the issue? Send them directly on WhatsApp for an immediate assessment."*
  - **Shipped as:** `components/service/FastPhotoQuoteBanner.tsx` (server component — only the shared `TrackedLink` leaf hydrates; no layout JavaScript of its own) rendered directly under the pricing table in `components/service/PricingSection.tsx` and under the price block in `components/service/SubServicePage.tsx`, so all **30 service pillar pages** and all **153 sub-service pages** (EN/MS/ZH) carry it exactly once, at the moment the customer has just read the price list and is deciding whether to ask.
  - **Visual banner:** a camera badge, the eyebrow *"Fast Photo Quote"*, the question headline *"Have photos of the issue?"*, one sentence of explanation, a practical hint (a wide shot, a close-up, your location) and the WhatsApp-green CTA *"Send photos on WhatsApp"*, on a brand-tinted panel that reuses the shared `.btn btn-whatsapp` styling (44 px target) — no new design-system classes.
  - **Copy honesty (one deliberate change from the plan's draft wording):** the draft said *"for an immediate assessment"*. Promising a response time would contradict the owner-confirmed, audited policy in `CONTENT_GOVERNANCE.md` §4 (no 24/7, same-day or rapid-response promise), so the shipped copy invites the photos and says what they are actually for — *"we will assess the [service] work from the pictures before a quotation is prepared"*. The banner still delivers the plan's intent (a photo-first quote path at the pricing decision point) without an unverifiable claim.
  - **One contact system:** the link comes from the shared `buildWhatsAppHref` (`lib/whatsapp.ts`, single number in `data/site.ts`); every click fires `whatsapp_click` through `TrackedLink` with the coarse surface `photo_quote_banner_service` / `photo_quote_banner_subservice` plus the page's registry slugs — never free text, no customer data, and the delegated listener cannot double-count it.
  - **Localized via the dictionary** (`i18n/{types,en,ms,zh}.ts` → a new typed `photoQuote` block, 7 keys per language: eyebrow, title, body, CTA, hint and two pre-fills); the `wa.me` message names the page's own work — *"…I have photos of the Tile & Tiling work. I would like a quote."* / *"…saya ada gambar untuk Pembaikan Pintu & Penggantian Kunci (Servis Handyman)…"* / *"…我有门维修与锁具更换（家居维修服务）的照片，想索取报价。"* — every substituted value a localized registry name, never a slug. The quote page keeps its own form-aware route; the banner never renders there.
  - **Verified by:** `npm run build` (689 static entries, unchanged route set) + `npm run audit:cro` (new Task 1.3 section: server component, single builder, tracked surface, both render sites positioned under their pricing blocks with registry-derived labels, 7-key dictionary coverage with slot/length/translation integrity, quote-flow exclusion, visible label + decorative icons) + all 18 static `scripts/audit-*.mjs` + `npm run audit:live` (284/284 live checks, 0 failures) + rendered EN/MS/ZH spot checks of pillar and sub-service pages (banner present once, localized pre-fill in the `wa.me` link).
- [x] **Task 1.4: Homepage Value Proposition Clarification** — ✅ COMPLETED (2026-09-26)
  - Added a fourth, visible reassurance chip to the homepage hero highlighting Renovix's range from smaller handyman repairs to full renovations, directly answering whether the business handles more than large renovation projects.
  - **Localized via the existing hero highlights dictionary (EN/MS/ZH):** *"From small handyman repairs to full renovations"* / *"Daripada pembaikan kecil oleh tukang am hingga renovasi penuh"* / *"从小型家居维修到全面装修"*. This describes the listed service range without promising that every possible job is accepted.
  - **Shipped as:** homepage hero chip in `components/home/Hero.tsx` (existing responsive chip rendering) with localized copy in `i18n/{en,ms,zh}.ts`; `scripts/audit-cro.mjs` now verifies that this specific value proposition is rendered and translated in all three languages.
  - **Verified by:** `npm run build` (689 static entries) + all 18 `scripts/audit-*.mjs` (PASS).

### Phase 2: Analytics & Lead Delivery Infrastructure
- [ ] **Task 2.1: Verify & Activate Lead Notification Pipeline** — [PENDING]
  - Provide complete step-by-step documentation for owner to supply `RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, and `QUOTE_NOTIFICATION_EMAIL`.
- [ ] **Task 2.2: Activate Google Analytics 4 & Clarity** — [PENDING]
  - Configure GA4 measurement ID and Microsoft Clarity ID in deployment environment variables.
  - Verify end-to-end event firing for `whatsapp_click`, `phone_click`, `quote_form_submit`, and `quote_form_success`.

### Phase 3: Local Authority & Google Search Dominance (Owner Action Items)
- [ ] **Task 3.1: Google Business Profile (GBP) Creation & Verification** — [PENDING]
  - Set up profile with exact NAP: *Renovix Home Services, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, +601159259521*.
- [ ] **Task 3.2: Google Search Console Sitemap Indexing** — [PENDING]
  - Confirm sitemap `https://renovixhomeservices.my/sitemap.xml` is submitted and processed in GSC.
- [ ] **Task 3.3: Local Malaysian Citations** — [PENDING]
  - Register profile on Yellow Pages Malaysia, Hotfrog, BusinessList.my, and Facebook Local Business.
- [ ] **Task 3.4: Project Area Tagging** — [PENDING]
  - Map verified locations (Mont Kiara, PJ, Subang, Cheras, etc.) to the 28 projects once confirmed by owner.

---

## 3. Progress Tracking Log

| Date | Phase | Task Completed | Verified By / Test Result |
|---|---|---|---|
| 2026-09-26 | Setup | Created Master Action Plan & Issues Register (`LEAD_GENERATION_PLAN.md`) | Build and audits clean |
| 2026-09-26 | Phase 1 | **Task 1.1 — Mobile Floating WhatsApp CTA** (`components/whatsapp/FloatingWhatsApp.tsx`, `lib/whatsapp.ts`, `app/globals.css`, `i18n/{types,en,ms,zh}.ts`, 17 render sites) | `npm run build` clean (689 static entries); new `npm run audit:cro` PASS; all 16 pre-existing `scripts/audit-*.mjs` PASS; `npm run audit:live` 284 PASS / 0 FAIL; rendered pre-fill verified in EN/MS/ZH on service, sub-service, problem, area, region, guide, project, home and index pages (exactly one CTA per page, none on `/quote/`) |
| 2026-09-26 | Phase 1 | **Task 1.2 — Quote Page Pre-filled WhatsApp Direct Route** (`lib/quote/whatsapp.ts`, `components/quote/QuoteForm.tsx`, `app/[lang]/quote/page.tsx`, `i18n/{types,en,ms,zh}.ts`, `scripts/{audit-quote-flow,audit-analytics}.mjs`) | `npm run build` clean (689 static entries); `npm run audit:quote` PASS with the new Task 1.2 section; all 17 other static audits PASS; `npm run audit:live` 284 PASS / 0 FAIL; EN/MS/ZH rendered pre-fill verified on `/quote/` and composition verified for partial, empty, error-fallback and over-length location inputs |
| 2026-09-26 | Phase 1 | **Task 1.3 — Service Page "Fast Photo Quote" Banners** (`components/service/FastPhotoQuoteBanner.tsx`, `components/service/{PricingSection,SubServicePage}.tsx`, `i18n/{types,en,ms,zh}.ts`, `scripts/audit-cro.mjs`, `PHASE_24_ANALYTICS.md`) | `npm run build` clean (689 static entries, route set unchanged); `npm run audit:cro` PASS with the new Task 1.3 section; all 17 other static audits PASS; `npm run audit:live` 284 PASS / 0 FAIL; rendered EN/MS/ZH spot checks of pillar and sub-service pages — banner under the pricing block exactly once, localized `wa.me` pre-fill and tracked `photo_quote_banner_*` surface |
| 2026-09-26 | Phase 1 | **Task 1.4 — Homepage Value Proposition Clarification** (`components/home/Hero.tsx`, `i18n/{en,ms,zh}.ts`, `scripts/audit-cro.mjs`) | Added a visible, localized homepage hero chip covering small handyman repairs through full renovations in EN/MS/ZH; `npm run build` clean (689 static entries); all 18 `scripts/audit-*.mjs` PASS, including `audit-cro.mjs` checks for the rendered chip and its three translations |
