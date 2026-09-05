# PROJECT OWNER-PENDING DATA — Phases 22, 24, 25 & 26

Status: **OWNER-PENDING**. Nothing on this list is a code defect. Each item
can only be completed by the business or in the hosting/Search Console
dashboards. Do not invent values.

## Phase 26 (2026-09-05) — current owner checklist

The Phase 26 deep audit was completed and every code-side fix it recommended
landed the same day (robots `host:` removed, legacy problem taxonomy retired,
location-registry duplicate copy fields removed, answer-first/FAQ duplication
fixed on all 10 services + regression guard, build/lint/npm-audit/live-QA all
independently verified green — see `PHASE_26_DEEP_AUDIT_2026-09-05.md` and
`PHASE_26_IMPLEMENTATION_PLAN.md`). **Everything below is an owner/dashboard
or real-data action; none of it can or should be faked in code.**

| # | Action | Where | Notes |
| --- | --- | --- | --- |
| 1 | ~~Make apex `renovixhomeservices.my` the **primary domain** so `www` redirects to apex~~ **DONE 2026-09-05** — owner set it; AI-verified live: www → `renovixhomeservices.my/en/` redirect works, apex serves directly, no loop, all links/canonicals on apex | Vercel → Project → Settings → Domains | ✅ CLOSED — I-01 resolved; GSC submission (task 3) now unblocked |
| 2 | ~~Configure Resend: API key + verified sending domain; env vars in Vercel; redeploy; one real test quote~~ **DONE 2026-09-06** — domain verified (AI checked SPF/DKIM DNS live), env set, redeployed, test quote delivered to inbox | Resend + Vercel dashboards | ✅ CLOSED — email funnel live |
| 3 | Submit `https://renovixhomeservices.my/sitemap.xml` once (apex property) in Google Search Console | GSC | Do after (1). Per-language sitemaps no longer exist — don't resubmit them |
| 4 | Supply analytics IDs: GA4 `NEXT_PUBLIC_GA4_MEASUREMENT_ID` **or** `NEXT_PUBLIC_GTM_CONTAINER_ID` (never both); optionally Clarity / Ads labels | Vercel env | Zero analytics is live today by design (`PHASE_24_ANALYTICS.md` has exact steps). Never placeholder IDs |
| 5 | Real consented project photos for Painting / Waterproofing / Flooring / Handyman (2–3 per service, honest captions) | Owner → `public/projects/` + `data/project-content/projects.ts` | Add dimensions + descriptions as per the existing 21 entries; `audit:project-assets` + `audit:projects` will check them. Never stock/AI images |
| 6 | Real-device QA pass: mobile menu, quote form, WhatsApp deep link, `tel:` | Phone | Flagged since Phase 22; no browser/device exists in code environments |
| 7 | Approve quote-form field list expansion (optional budget band + preferred time-of-day; decision on photo upload needing a storage policy) | Owner reply to AI | `audit` item I-09 / plan T-09. AI implements once approved |
| 8 | Before high-traffic launch: provision Vercel KV or Upstash Redis and let AI wire distributed rate limiting (T-11) | Vercel/Upstash | Current limiter is per-instance by design |
| 9 | Enable GitHub Dependabot alerts + security updates on the repo (npm audit came back 0 on 2026-09-05; keep it monitored) | GitHub → Settings → Code security | One click |
| 10 | Claim Google Business Profile; supply confirmed opening days if schema should ever show hours | GBP | Schema intentionally omits dayOfWeek/geo until real (governance §6) |
| 11 | Optional E-E-A-T: short About/founder note (real names/bio only) | Owner | No credentials invented — write "what's true" |

**CSP decision (owner + AI):** `'unsafe-inline'` stays for now — removing it
properly requires abandoning fully-static rendering (nonce ⇒ per-request
dynamic pages). The full trade-off and the revisit trigger are documented in
the plan (T-10). Accept it consciously; don't ask AI to "just add a nonce"
without the rendering-model change.

## Phase 25 — remaining owner actions (historical; superseded by Phase 26 list where they overlap)

Already done in code and, where noted, live-checked. **Do not redo these:**
the site, HTTPS, `/sitemap.xml`, `/robots.txt`, WhatsApp `wa.me/601159259521`,
`tel:+601159259521`, `mailto:renovixhomeservices@gmail.com`, the three language
routes, the 10 services, quote form UI, and Search Console *verification*
(HTML file + meta tag `CIc-da9G9QfriX7tAeKqS3w5YF2tt4GKnjV8IMSGP8o`).

Only the following still need the owner:

| # | Action | Why it cannot be done in code | Status until done |
| --- | --- | --- | --- |
| 1 | Vercel → Domains: make **`renovixhomeservices.my` (apex) the primary** so `www` redirects *to* apex, not the other way around | Edge domain redirect is a Vercel setting. Canonicals/sitemap already use apex; reversing it in Next.js would loop | YELLOW — live fetchers currently land on www |
| 2 | Create a Resend API key, verify `renovixhomeservices.my` (or the sending domain) in Resend, set `RESEND_API_KEY` + `QUOTE_FROM_EMAIL` (+ optional `QUOTE_NOTIFICATION_EMAIL`) in Vercel, redeploy, then send **one real quote** and confirm the inbox | Secrets and mailbox access | GREY — API honestly returns 503 today |
| 3 | Submit **`https://renovixhomeservices.my/sitemap.xml`** once in Google Search Console (domain or URL-prefix property on the apex). Do not resubmit per-language sitemaps | GSC dashboard | GREY — verification token is already live; indexing data does not exist yet |
| 4 | Supply a real GA4 Measurement ID (`G-…`) *or* a GTM container ID if measurement is wanted. Optionally Ads conversion ID+labels and Clarity ID | Inventing IDs would send data to someone else. With none set, **no script loads** | GREY |
| 5 | Real-device pass on a phone (menu, quote form, WhatsApp, `tel:`) and confirm Search Console / GA4 realtime after IDs are on | No owner device in this environment | YELLOW |
| 6 | Project metadata still missing per job (location, year, materials, extra photos) — same table as below | Must not be invented | GREY |
| 7 | Approve production after (1)–(5) | Business decision | GREY |

Insufficient real-world data for Search Console performance conclusions.

The project-proof items below remain optional metadata. Nothing here may be
invented, estimated or placeholder-filled — the project pages already render
correctly with only the data that exists.

## Phase 24 — analytics & measurement activation (all measurement is OFF until IDs are supplied)

The measurement system is fully coded (`PHASE_24_ANALYTICS.md`). Today, with
no IDs configured, **no analytics script loads at all**. Each service below
activates only when its real ID is set as an environment variable in Vercel →
Project → Settings → Environment Variables (or `.env.local` locally), followed
by a redeploy. Never invent or placeholder these IDs — a wrong ID sends the
data to someone else's account.

| Service wanted | Owner provides | Goes into | Effect once supplied |
| --- | --- | --- | --- |
| Google Analytics 4 (recommended baseline) | GA4 Measurement ID (`G-…`) from Admin → Data streams | `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | Page views + all conversion events + web-vitals events flow to GA4; page_view sent exactly once per route across EN/MS/ZH |
| Google Ads conversions (only if running ads) | Conversion ID (`AW-…`) + one label per action: quote success, WhatsApp click, phone click | `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`, `NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` | Those three actions count as Google Ads conversions |
| Microsoft Clarity (optional recordings) | Clarity Project ID | `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Session recordings load at browser idle with default text masking kept on |
| Google Tag Manager (only if tag management is preferred over direct GA4) | GTM Container ID (`GTM-…`) | `NEXT_PUBLIC_GTM_CONTAINER_ID` | Container loads instead of the direct Google tag — GA4 and any conversions must then be configured inside the container (exact steps in PHASE_24_ANALYTICS.md §3); GTM and direct GA4 are mutually exclusive by design |

GA4 settings the owner may want after activation: data retention 14 months,
the (optional) three custom dimensions `language` / `service` / `surface`.
After activating anything, browse the site and confirm data in the provider's
own UI (GA4 Realtime / Ads conversions diagnostics / Clarity sessions) before
calling it live — code-complete is not live-verified.

## Phase 22 — quote form go-live & lead handling (highest priority)

The improved quote flow (Phase 22) is fully coded and tested, but live email
delivery and a few business decisions remain with the owner. Until then the
API honestly answers 503 "unavailable" and the form offers the WhatsApp
fallback — nothing is silently lost or faked.

| What is needed | Goes into | Effect once supplied |
| --- | --- | --- |
| `RESEND_API_KEY` | Vercel → Project → Settings → Environment Variables (or `.env` locally) | Enables live email delivery through the existing Resend integration |
| Verified sender domain in Resend (e.g. `renovixhomeservices.my`) | Resend dashboard → Domains | Required by Resend before `QUOTE_FROM_EMAIL` can send |
| `QUOTE_FROM_EMAIL` (e.g. `Renovix Home Services <noreply@renovixhomeservices.my>`) | Same env config | The From address on lead notifications; must be on the verified domain |
| `QUOTE_NOTIFICATION_EMAIL` (final recipient inbox) | Same env config | Inbox that receives quote requests; currently defaults to the public business email `renovixhomeservices@gmail.com` |
| Approval of the final form field set | Reply in this thread | Current set: name, phone/WhatsApp, email (optional), preferred contact method, property type, service, sub-service (optional, registry), location, description, preferred date (optional). Budget and in-form photo upload were deliberately NOT added — budget because quoting depends on scope, photo upload because the current email architecture cannot carry attachments truthfully; photos flow through WhatsApp instead |
| Any lead-routing rules (e.g. different recipient per service, WhatsApp alert on top of email) | New code in a later phase | Today every submission goes to one recipient; routing logic is not built |

No secrets belong in the repository — `.env.example` documents the variables;
the values themselves are configured in the hosting dashboard. Live delivery
should only be declared "verified" after a real end-to-end test with these
credentials, which has not happened yet.

## How project-proof data gets in (Phase 21)

| Owner supplies | Goes into | Field(s) |
| --- | --- | --- |
| Exact location (region + area, only if confirmed) | `data/project-content/projects.ts` | `location: { region, area? }` — links the project to the matching `/areas/` page |
| Completion year | `data/project-content/projects.ts` | `year` — renders as a hero chip |
| Property type | `data/project-content/translations/{ms,zh}/index.ts` + `projects.ts` | `details: [{ key: "propertyType", value: "..." }]` — localized value in each language |
| Materials used | `data/project-content/projects.ts` (en) + `translations/` (ms/zh) | `details: [{ key: "materials", value: "..." }]` |
| Scope confirmation / extra scope items | `data/project-content/projects.ts` (en) + `translations/` (ms/zh) | `scopeOfWork: [...]`, `fullDescription: [...]` |
| Additional photos of the same job | `public/images/projects/` + `data/project-content/projects.ts` | `gallery: [{ src, width, height }]` + `galleryAlt: [...]` in content |
| Before / after pair of the same job | `public/images/projects/` + `data/project-content/projects.ts` | `beforeAfter: { before, after }` + `beforeAlt` / `afterAlt` |
| Permission to publish a photo | (internal record — do not commit) | Photo only goes into the registry once publishing consent is confirmed |
| Testimonial (with written consent) | Not modelled yet — Phase 22+ | Do not add without consent; never invent |

After adding a project or translation, the build fails loudly until
`i18n/coverage.ts` (`ALL_PROJECTS` + per-language lists) and the translation
registries are updated — that is intentional, so a half-added project cannot
ship.

## Per-project gaps

Every published project currently has: real photograph, English/Malay/Chinese
copy, alt text, scope bullets and a genuine service/sub-service mapping.
Missing per project (add only when supplied):

| Project | Location | Year | Property type | Materials | Extra photos |
| --- | --- | --- | --- | --- | --- |
| marble-look-floor-tiling | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| floor-tile-removal-hacking | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| plaster-ceiling-cove-lighting | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| plaster-ceiling-design-downlights | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| plaster-ceiling-pendant-lighting | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| timber-look-ceiling-beams | OWNER-PENDING | OWNER-PENDING | Supplied (Condominium) | OWNER-PENDING | OWNER-PENDING |
| suspended-ceiling-grid | OWNER-PENDING | OWNER-PENDING | Supplied (Commercial unit) | OWNER-PENDING | OWNER-PENDING |
| ceiling-fan-and-light-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| chandelier-and-ceiling-fan-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| high-ceiling-light-installation | OWNER-PENDING | OWNER-PENDING | Supplied (Commercial building) | OWNER-PENDING | OWNER-PENDING |
| electrical-distribution-board-wiring | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| electrical-db-panel-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| electrical-cable-wiring-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| wall-switch-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| outdoor-switch-socket-wiring | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| toilet-and-basin-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| structural-metal-welding-fabrication | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| pipe-and-valve-welding-works | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| on-site-metal-frame-welding | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| metal-awning-frame-installation | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING | OWNER-PENDING |
| office-renovation-ceiling-and-tiling | OWNER-PENDING | OWNER-PENDING | Supplied (Office) | OWNER-PENDING | OWNER-PENDING |

## Portfolio coverage gaps (whole services with no real project yet)

These service pages **correctly show no project-proof section** — no fake case
studies are added. Photographs from the owner would fill them:

- Painting — 0 projects
- Waterproofing — 0 projects
- Flooring — 0 projects
- Handyman — 0 projects
- Plumbing — 1 project (toilet & basin installation)
- General Renovation — 1 project (commercial office; residential examples needed)
- Welding — 4 projects (gates, grilles, railings, pipework examples would widen coverage)
- Tiling — 2 projects (wall tiling and bathroom tiling examples needed)
- Ceiling — 5 projects (drywall partition and suspended-ceiling board examples needed)
- Electrical — 8 projects

## Sub-services with no genuine project proof yet

Phase 21 links sub-service pages to projects **only where the photographed work
genuinely matches**. These sub-services currently omit the project section
(run `npm run audit:projects` for the live list): all Painting, Waterproofing,
Flooring and Handyman sub-services, plus bathroom/kitchen renovation, tile
repair, porcelain tiling, flat plaster ceilings, drywall partitions, full
house rewiring, fault finding, concealed leak repair, drain unblocking,
toilet repair, tap replacement, water heater installation, main gates,
railings, window grilles, welding repair and awning welding work (awning
structure already has one real project).

## Explicitly NOT collected / NOT published

- Client names and exact site addresses (privacy — not modelled at all)
- Prices paid by clients (never published; starting-price guidance comes from
  the separate pricing registry)
- Reviews, star ratings and aggregate ratings (none published; adding them
  requires a Phase-22+ decision with real, consenting customer data)

## How to hand this to the owner

Ask the owner for, in priority order:

1. Confirmation of which photos may be published (per photo).
2. Exact area (or region) for each job, where the client agrees.
3. Completion year per job.
4. Property type per job.
5. Any before/after pairs for jobs already photographed.
6. New photos for the coverage gaps above (one job per service is enough to
   activate that service's project proof).
