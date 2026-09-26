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
- [ ] **Task 1.1: Mobile Floating WhatsApp CTA Component**
  - Implement a mobile-optimized, accessible, non-intrusive floating WhatsApp action button that appears across all service, problem, area, and blog pages.
  - Pre-fill message dynamically based on page context (e.g. *"Hi Renovix, I would like a quote for [Service Name]"*).
- [ ] **Task 1.2: Quote Page Pre-filled WhatsApp Direct Route**
  - Enhance `/quote/` with an prominent "Prefer Instant WhatsApp Quote? Click here to chat with photos" option right above the form.
  - Automatically encode user inputs (service, property type, area) into a one-click WhatsApp URL so no inquiry is ever lost.
- [ ] **Task 1.3: Service Page "Fast Photo Quote" Banners**
  - Add a dedicated visual banner under pricing tables: *"Have photos of the issue? Send them directly on WhatsApp for an immediate assessment."*
- [ ] **Task 1.4: Homepage Value Proposition Clarification**
  - Add clear reassurance chips: *"No Job Too Small (Handyman & Repairs) to Complete Home Renovations"*.

### Phase 2: Analytics & Lead Delivery Infrastructure
- [ ] **Task 2.1: Verify & Activate Lead Notification Pipeline**
  - Provide complete step-by-step documentation for owner to supply `RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, and `QUOTE_NOTIFICATION_EMAIL`.
- [ ] **Task 2.2: Activate Google Analytics 4 & Clarity**
  - Configure GA4 measurement ID and Microsoft Clarity ID in deployment environment variables.
  - Verify end-to-end event firing for `whatsapp_click`, `phone_click`, `quote_form_submit`, and `quote_form_success`.

### Phase 3: Local Authority & Google Search Dominance (Owner Action Items)
- [ ] **Task 3.1: Google Business Profile (GBP) Creation & Verification**
  - Set up profile with exact NAP: *Renovix Home Services, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, +601159259521*.
- [ ] **Task 3.2: Google Search Console Sitemap Indexing**
  - Confirm sitemap `https://renovixhomeservices.my/sitemap.xml` is submitted and processed in GSC.
- [ ] **Task 3.3: Local Malaysian Citations**
  - Register profile on Yellow Pages Malaysia, Hotfrog, BusinessList.my, and Facebook Local Business.
- [ ] **Task 3.4: Project Area Tagging**
  - Map verified locations (Mont Kiara, PJ, Subang, Cheras, etc.) to the 28 projects once confirmed by owner.

---

## 3. Progress Tracking Log

| Date | Phase | Task Completed | Verified By / Test Result |
|---|---|---|---|
| 2026-09-26 | Setup | Created Master Action Plan & Issues Register (`LEAD_GENERATION_PLAN.md`) | Build and audits clean |
