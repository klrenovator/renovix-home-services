# Phase 24 — Analytics, Conversion Tracking, Web Vitals & Measurement

Status overview (the three states used throughout this document):

| Area | Status |
| --- | --- |
| Measurement architecture (event layer, provider glue, click tracking, page views, Web Vitals, consent defaults, CSP wiring, docs, audits) | **CODE COMPLETE** |
| GA4 Measurement ID · GTM Container ID · Google Ads conversion ID/labels · Clarity Project ID | **OWNER CONFIGURATION PENDING** |
| Live data collection, real Search Console / GA4 reports, Ads conversion counts, Clarity recordings | **NOT CLAIMED — LIVE VERIFIED requires owner-configured IDs plus real measured data** |

No measurement ID was invented. With every variable empty (today's state) **no
measurement script loads at all**; the Content-Security-Policy, the page HTML
and the performance profile are byte-for-byte the pre-Phase-24 site.

---

## 1. Current-state audit (what existed before this phase)

| System | Finding | Action taken |
| --- | --- | --- |
| Google Analytics 4 | Not installed | Installed behind `NEXT_PUBLIC_GA4_MEASUREMENT_ID` |
| Google Tag Manager | Not installed | Installed behind `NEXT_PUBLIC_GTM_CONTAINER_ID` (either/or with GA4 direct) |
| Google Ads tags | Not installed | Prepared behind conversion ID + label variables |
| Meta Pixel | Not installed, not requested | Not added; audit blocks accidental installs |
| Microsoft Clarity | Not installed | Prepared behind `NEXT_PUBLIC_CLARITY_PROJECT_ID` |
| Search Console verification | **Exists** — `google-site-verification` meta in `app/[lang]/layout.tsx` | Left untouched; the analytics audit asserts it stays intact |
| Web Vitals | Not measured | Implemented via `next/web-vitals` (see §7) |
| Custom analytics utilities | Phase 22 already shipped a platform-neutral event layer (`lib/analytics.ts`), `TrackedLink`, and quote-flow events buffered on `window.__renovixAnalytics` | **Reused** — no duplicate system; Phase 24 adds the provider sink these were designed for |

## 2. Architecture

```
                          ┌────────────────────────────────────────────┐
  User action             │ lib/analytics.ts  (platform-neutral)      │
  ───────────────────────►│  trackConversionEvent(event, context)     │
  QuoteForm interactions  │   • allowlist sanitiser (surface/service/ │
  TrackedLink clicks      │     subservice/reason/lang only, capped)  │
  Delegated click events  │   • buffer on window.__renovixAnalytics   │
  (tel:/mailto:/wa.me,    │   • sink → forwarded to provider          │
   data-analytics-*)      └──────────────────┬─────────────────────────┘
                                             │
                          ┌──────────────────▼─────────────────────────┐
                          │ components/analytics/Measurement.tsx      │
                          │ (single "use client" component, mounted    │
                          │  once in app/[lang]/layout.tsx)            │
                          │  • replays pre-mount events exactly once   │
                          │  • page_view once per route (deduped)      │
                          │  • Core Web Vitals → web_vitals events     │
                          │  • delegated document click listener       │
                          │  • Consent Mode defaults (ads all denied)  │
                          └──────────────────┬─────────────────────────┘
                                             │ lib/analytics-config.ts
                                             │ (validated env IDs, CSP sources)
                          GA4 tag  ──xor──  GTM container  ──plus──  Clarity (independent, lazy)
```

Key files:

| File | Role |
| --- | --- |
| `lib/analytics-config.ts` | Reads + format-validates every measurement env ID; resolves the exclusive delivery route (`ga4` / `gtm` / `none`); derives the CSP origin additions (empty while unconfigured) |
| `lib/analytics.ts` | Platform-neutral event layer: typed events, PII allowlist sanitiser, window buffer, provider sink registration (the Phase 22 audit still verifies it references no platform) |
| `components/analytics/Measurement.tsx` | The only provider glue in the codebase: script loading, consent defaults, page views, sink/replay, delegated click tracking, Web Vitals |
| `components/analytics/TrackedLink.tsx` | Quote-flow links with rich context; marks its anchors so the delegated listener never double-fires |
| `scripts/audit-analytics.mjs` | `npm run audit:analytics` — 40+ static invariants (exclusivity, no fabricated IDs, PII guards, consent, CSP gating, privacy disclosure, Search Console intact) |

## 3. GA4 & GTM — how the either/or works

- Set **`NEXT_PUBLIC_GA4_MEASUREMENT_ID`** (`G-…`) → the Google tag (gtag.js)
  loads directly from `googletagmanager.com/gtag/js`. The tag is configured
  with `send_page_view: false` and `Measurement.tsx` sends `page_view` itself
  (initial load + every client-side navigation, deduped by path+query), so
  there is exactly one page view per page — never the automatic one *and* a
  manual one.
- Set **`NEXT_PUBLIC_GTM_CONTAINER_ID`** (`GTM-…`) instead → only
  `gtm.js` loads; GA4 is then delivered through the container. Events are
  pushed to the data layer in object form (`{event: "whatsapp_click", …}`).
  If **both** IDs are set, GTM wins and the direct Google tag stays off —
  a build-time warning reminds the owner the container must contain the GA4
  tag. Both routes active at once is the classic double-page-view bug; it is
  structurally impossible here.
- Every event is pushed through the same data-layer queue, so events that
  happen before the provider script finishes loading are queued, never lost
  (plus the pre-mount buffer replay from Phase 22's design).

### GTM owner setup (when the container ID route is chosen)

1. In the container, create the **GA4 Configuration tag** with the GA4
   Measurement ID, triggered by a **Custom Event trigger** on `page_view`
   (our bootstrap pushes `page_view` for the initial load *and* every
   client-side route change — do **not** also enable the container's
   "All Pages" GA4 tag, or the initial view would double).
2. Map the conversion events in §5 to GA4 event tags with Custom Event
   triggers on the same names.
3. `web_vitals` and every other event name arrive as data-layer events with
   the parameters listed in §5–§7; GTM preview works (CSP `frame-src` for
   googletagmanager.com is pre-allowed when the GTM ID is set).

### GA4 recommended settings

- **Data retention**: raise from 2 to 14 months (Admin → Data settings) so
  year-over-year trends survive.
- **Google signals**: remain OFF at the tag level (`allow_google_signals:
  false`); do not enable them in the property without revisiting the privacy
  note in §9.
- **Custom dimensions** (register at most these three, event-scoped, if
  reports should group by them — the raw events work without them):
  1. `language` (site language: en/ms/zh) — lets the funnel be split per
     language route.
  2. `service` (registry slug, e.g. `plaster-ceiling`) — quote and CTA events.
  3. `surface` (e.g. `header`, `footer`, `quote_quick_path`) — where a click
     happened.
  Nothing else needs a dimension; page type/location are already visible in
  `page_path` because every route is language- and section-prefixed.

## 4. Conversion funnel

Primary quote path:

```
Landing Page (page_view)
   ↓
Service / Sub-service page (page_view, /services/… paths)
   ↓
CTA click (service_cta_click / subservice_cta_click)
   ↓
Quote Form Start (quote_form_start)
   ↓
Quote Submit (quote_form_submit)
   ↓
Quote Success (quote_form_success)
```

Alternative direct-contact path:

```
Landing Page (page_view)
   ↓
WhatsApp / Phone / Email CTA (whatsapp_click / phone_click / email_click)
   ↓
Contact (off-site; WhatsApp deep-link click is the measurable end point)
```

## 5. Event catalogue

All events fire **once per meaningful action**: one click → one event; the
sink, the delegated listener, the `TrackedLink` marker and the page-view
dedupe guard are audited by `npm run audit:analytics`.

| Event | Fires when | Parameters |
| --- | --- | --- |
| `page_view` | Initial load and every client-side navigation (per language route: `/en/…`, `/ms/…`, `/zh/…`) | `page_title`, `page_location`, `page_path`, `page_referrer`, `language` |
| `quote_form_start` | First meaningful interaction with the quote form (once per form instance) | `lang`, `service` (once chosen) |
| `quote_form_submit` | A validated submission left the browser | `lang`, `service` |
| `quote_form_success` | Server accepted the submission | `lang`, `service` |
| `quote_form_error` | Submission attempt failed | `lang`, `reason` (`validation` \| `rate_limited` \| `unavailable` \| `network`), `service` if known |
| `whatsapp_click` | Any WhatsApp link: header, footer, hero/CTA blocks, quote quick-path, success & error fallbacks, contact page | `lang`, `surface`, sometimes `service` |
| `phone_click` | Any `tel:` link | `lang`, `surface` |
| `email_click` | Any `mailto:` link | `lang`, `surface` |
| `service_cta_click` | Quote CTA on a service page (hero + bottom CTA) | `lang`, `surface`, `service` |
| `subservice_cta_click` | Quote CTA on a sub-service page (hero + bottom CTA) | `lang`, `surface`, `service`, `subservice` |
| `web_vitals` | Each Core Web Vital reported (see §7) | `metric_name`, `metric_value`, `metric_rating`, `navigation_type`, `language`, `non_interaction` |

`surface` values: `header`, `footer`, the path section of the page the click
happened on (`home`, `services`, `areas`, `quote`, `contact`, `blog`, `about`,
`projects`, `problems`, `faq`), or the explicit quote-flow surfaces from
Phase 22 (`quote_quick_path`, `quote_success`, `quote_error`).

## 6. Google Ads conversion tracking — OWNER CONFIGURATION PENDING

Prepared for exactly the three business conversions: **quote success**,
**WhatsApp click**, **phone click**. When the owner creates the conversion
actions in Google Ads, set:

```
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL=<label from tag setup>
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL=<label>
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=<label>
```

- Google-tag (direct GA4) mode: a conversion fires automatically alongside
  the matching event (`gtag("event", "conversion", {send_to})`). Each
  conversion needs its ID *and* its label; a missing label disarms only that
  one conversion.
- GTM mode: conversions are wired inside the container (Google Ads conversion
  tags triggered by the event names above), so nothing is sent twice.
- Enhanced conversions are intentionally **not** enabled (they require
  additional consent handling and hashed customer data — unnecessary for this
  lead flow).
- No conversion identifiers were fabricated; nothing fires today.

## 7. Web Vitals & performance discipline

- **LCP, INP, CLS** (Core Web Vitals) plus **FCP and TTFB** are measured from
  real users with `useReportWebVitals` (the `web-vitals` library bundled by
  Next.js — real-user measurement, not synthetic scores). FID (deprecated) is
  not tracked.
- Each metric is reported once per page load as a **non-interaction**
  `web_vitals` event sent with `transport_type: "beacon"`; CLS is scaled
  ×1000 so values stay integers (a GA4 requirement). In development (or with
  `NEXT_PUBLIC_ANALYTICS_DEBUG=true`) values also print to the console,
  e.g. `[renovix web-vitals] LCP 1420 (good) — navigate`.
- The measurement chunk is ~10.5 KB gzipped (component + web-vitals library),
  loaded as a regular client chunk after first paint. Provider scripts load
  `afterInteractive` (gtag.js / gtm.js) and Clarity `lazyOnload` (browser
  idle). Nothing measurement-related is `beforeInteractive`, nothing blocks
  hydration, and nothing was changed in the site itself to chase a synthetic
  score.
- The rest of the performance surface (local fonts, static SSG pages, image
  pipeline, no other third-party scripts) is unchanged from earlier phases.

## 8. Multilingual tracking

The site is fully language-prefixed, so `page_path` already separates
`/en/…`, `/ms/…`, `/zh/…`. Additionally every event carries `language`
(`en`/`ms`/`zh`, derived from `<html lang>`, which the layout sets to
`en-MY`/`ms-MY`/`zh-MY`). No per-language properties or extra dimensions are
needed; the three optional custom dimensions in §3 cover reporting.

## 9. Privacy posture

- **No PII in analytics — by construction.** Event context passes through a
  closed allowlist (`surface`, `service`, `subservice`, `reason`, `lang`;
  values length-capped). Customer names, phone numbers, emails, locations,
  descriptions and photo counts never enter events; the delegated click
  tracker classifies links by URL scheme only and never reads link text.
  The quote form's `trackConversionEvent` calls pass registry slugs and error
  classes only. `npm run audit:analytics` fails if a call site tries to pass
  a customer field.
- **Nothing identifying in URLs/titles:** analytics never appends data to
  URLs, and quote content is never placed in query strings, page titles or
  event names.
- **Consent Mode defaults are pushed before any provider runs:**
  `analytics_storage: granted` (aggregate, first-party measurement with no
  Google signals and no ad personalization — proportionate for the Malaysian
  PDPA context, which has no cookie-consent regime for this pattern), and
  `ad_storage` / `ad_user_data` / `ad_personalization` all **denied**. A
  future consent banner can update these with a standard
  `consent update` push — the integration point is documented in
  `Measurement.tsx`.
- **Clarity** (if activated) loads at browser idle with its default on-screen
  text masking never disabled, and only a `language` custom tag set.
- **Privacy Policy updated in EN/MS/ZH** — a "Website measurement" section
  now discloses Google Analytics (aggregate, no personal data, advertising
  off), the optional Clarity recording with masking, and how visitors can
  block measurement scripts without breaking the site.
- **CSP stays strict by default:** provider origins are added only for the
  providers actually configured (`lib/analytics-config.ts` → `next.config.ts`);
  with no IDs the policy is identical to the pre-Phase-24 one.

## 10. Debugging (local only — never against production properties)

- `npm run dev` logs every event and web vital to the console by default
  (`[renovix analytics] …`). Set `NEXT_PUBLIC_ANALYTICS_DEBUG=true` to get the
  same in any environment.
- `window.__renovixAnalytics` (event buffer) and `window.dataLayer` (provider
  queue) are inspectable in DevTools.
- In GA4, enable **DebugView** (Admin → DebugView) and add the
  `debug_mode` signal per Google's docs while testing — but test against a
  *test* property or filter internal traffic; do not send synthetic customer
  data to the production property. No test data has been sent anywhere by
  this phase.
- Verify no duplicates: DebugView should show **one** `page_view` per
  navigation and one conversion event per click (`npm run audit:analytics`
  enforces the same invariants statically).

## 11. SEO data discipline

Search Console verification (already in place) was not modified. This phase
makes **no claims** about traffic, rankings, conversions or indexing — none
have been measured yet. Analytics and Search Console are measurement tools;
conclusions belong to a future phase once real data exists.

## 12. Owner activation checklist

Do these only for the services actually wanted (see also
`PROJECT_OWNER_PENDING.md`):

1. **GA4 (recommended baseline)** — create/select the property at
   analytics.google.com, add a web data stream for
   `https://renovixhomeservices.my`, copy the `G-…` Measurement ID, set
   `NEXT_PUBLIC_GA4_MEASUREMENT_ID` in Vercel (or `.env.local`), redeploy,
   then confirm page views appear in GA4 Realtime while browsing the site.
   Optionally register the three custom dimensions from §3 and raise data
   retention to 14 months.
2. **Google Ads conversions (only if running ads)** — in Google Ads create
   three conversion actions (Website, "Use Google tag" installation):
   `quote_form_success`, `whatsapp_click`, `phone_click`; copy the conversion
   ID (`AW-…`) and each action's label into the four
   `NEXT_PUBLIC_GOOGLE_ADS_*` variables; redeploy; verify firing with the
   Google Tag Assistant / conversions diagnostics, then mark them
   "Primary" in reporting.
3. **Clarity (optional)** — create the project at clarity.microsoft.com for
   `renovixhomeservices.my`, copy the Project ID into
   `NEXT_PUBLIC_CLARITY_PROJECT_ID`, redeploy, confirm sessions appear with
   text masked.
4. **GTM instead of direct GA4 (only if tag management is wanted)** — set
   `NEXT_PUBLIC_GTM_CONTAINER_ID` (leave the GA4 variable empty unless GA4 is
   delivered through the container) and follow §3's container setup.
5. After any activation, run `npm run audit:analytics` and a real browse
   session, and only then update the status table at the top of this file
   from OWNER CONFIGURATION PENDING to LIVE VERIFIED with the date.

## 13. Validation performed in this phase

| Check | Result |
| --- | --- |
| `npm run type-check` | PASS |
| `npm run lint` | PASS (0 problems) |
| `npm run build` | PASS (665 static pages, unchanged count) |
| All existing audits (`audit:business`, `og-fonts`, `project-assets`, `pricing`, `projects`, `locations`, `authority`, `subservices`, `blog`, `quote`) | PASS — no regressions |
| `npm run audit:analytics` (new) | PASS |
| Rendered HTML: no provider script/CSP change with IDs unset; service & sub-service CTA data attributes present; privacy sections render in EN/MS/ZH | Verified against the production build |
| Configured-mode build (dummy-format IDs, local only): CSP widens exactly for the enabled providers; gtag.js xor gtm.js templates ship; consent/dedupe logic in the client chunk | Verified |
| GTM+GA4 both set → GTM wins with a build-time warning | Verified |

Browser-level runtime testing (headless click-through) could not run in this
sandbox (no browser available), so live event delivery is **not** claimed —
per §10/§12 it is verified by the owner after configuring real IDs, or by any
future local run with `npm run dev`.
