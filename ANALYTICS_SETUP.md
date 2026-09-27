# Measurement Setup — Google Analytics 4, Microsoft Clarity & Vercel

> **Lead-generation Task 2.2 — canonical owner guide.**
> Follow this file to activate, verify, change or remove website measurement.
> No step here requires code changes: the measurement layer is fully coded and
> the website runs with or without it.

Status overview (the three states used throughout this document):

| Area | Status |
| --- | --- |
| Measurement code (event layer, provider glue, delegated click tracking, single `page_view` per route, Web Vitals, Consent Mode defaults, conditional CSP, privacy disclosure, audits) | **CODE COMPLETE** |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` · `NEXT_PUBLIC_CLARITY_PROJECT_ID` · (optional) `NEXT_PUBLIC_GOOGLE_ADS_*` · `NEXT_PUBLIC_GTM_CONTAINER_ID` | **OWNER CONFIGURATION — set in the hosting dashboard, never in the repository** |
| Data appearing in GA4 / Clarity dashboards for real visitors | **NOT CLAIMED — LIVE VERIFIED only after the owner completes §5.2–§5.3** |
| The four business events firing correctly in a real browser | **VERIFIED LOCALLY by `npm run verify:analytics:e2e` (see §5.1) — this is not the same as live dashboard data** |

No measurement ID was invented for this guide. Every ID below is a placeholder
marked as one, and the automated harness deliberately runs with DNS to every
external host disabled so a test ID can never report to a real property.

Related files:

| File | Role |
| --- | --- |
| `lib/analytics-config.ts` | Reads + format-validates every measurement ID; resolves the exclusive delivery route (`ga4` / `gtm` / `none`); derives the CSP origins |
| `lib/analytics.ts` | Platform-neutral event layer: typed events, PII allowlist, window buffer, provider sink |
| `components/analytics/Measurement.tsx` | The only provider glue: script loading, consent defaults, `page_view`, sink/replay, delegated click tracking, Web Vitals |
| `components/analytics/TrackedLink.tsx` | Quote-flow links with rich context; marks its anchors so the delegated listener never double-fires |
| `.env.example` | The documented variable list (values stay empty in git) |
| `scripts/verify-analytics.mjs` (`npm run verify:analytics`) | Local configuration check — formats, route exclusivity, CSP effect; loads nothing, calls nothing |
| `scripts/verify-analytics-e2e.mjs` (`npm run verify:analytics:e2e`) | Drives a real headless browser through the four business events and asserts exactly one of each |
| `PHASE_24_ANALYTICS.md` | The architecture, event catalogue, funnel and privacy reasoning behind all of it |

---

## 1. How measurement works

```
Visitor action                         What the browser does
──────────────────────────────────    ───────────────────────────────────────
Page loads / client-side navigation → page_view            (once per route)
Clicks any WhatsApp CTA             → whatsapp_click       (+ surface, service)
Clicks any tel: link                → phone_click          (+ surface)
Clicks a mailto: link               → email_click
Starts filling the quote form       → quote_form_start
Submits a validated quote           → quote_form_submit
Server accepts the quote            → quote_form_success
Submission fails                    → quote_form_error     (+ reason)
Clicks a service-page quote CTA     → service_cta_click / subservice_cta_click
Real-user performance sample        → web_vitals           (non-interaction)
```

Delivery is exactly one route, chosen at build time from the environment:

- **`NEXT_PUBLIC_GA4_MEASUREMENT_ID` set** → `gtag.js` loads directly; this
  site sends `page_view` and every event itself (the tag's automatic page view
  is disabled, so nothing double-counts).
- **`NEXT_PUBLIC_GTM_CONTAINER_ID` set** → only `gtm.js` loads and events go
  to the data layer as objects; GA4 must then be configured *inside* the
  container (`PHASE_24_ANALYTICS.md` §3 has the container setup).
- **Both set** → GTM wins, the direct Google tag stays off, and the build
  prints a warning. Two live routes at once is the classic double-page-view
  bug; it is structurally impossible here.
- **Neither set** → no measurement script loads at all and the site is
  byte-for-byte the pre-measurement site.

Microsoft Clarity is independent of that choice and loads at browser idle
whenever `NEXT_PUBLIC_CLARITY_PROJECT_ID` is set.

## 2. What the owner supplies

| Variable | Required | Format | Purpose |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | **Yes** (baseline) | `G-XXXXXXXXXX` | GA4 web data stream for `https://renovixhomeservices.my`. Receives page views, every conversion event and web vitals. |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Recommended | short alphanumeric | Microsoft Clarity session recordings/heatmaps, loaded at browser idle with default text masking left **on**. |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | Only if running ads | `AW-123456789` | Shared conversion ID for the three business conversions. |
| `NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL` | Only if running ads | label string | Arms `quote_form_success` as an Ads conversion. |
| `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL` | Only if running ads | label string | Arms `whatsapp_click`. |
| `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` | Only if running ads | label string | Arms `phone_click`. |
| `NEXT_PUBLIC_GTM_CONTAINER_ID` | Alternative to direct GA4 | `GTM-XXXXXX` | Tag management instead of the direct Google tag — **not both**. |
| `NEXT_PUBLIC_ANALYTICS_DEBUG` | No | `true` | Logs every event to the browser console in any environment. Leave unset in production. |

All of these are public identifiers, not secrets: they ship to browsers by
design. They still belong in the hosting dashboard, not in git, so that the
repository can never pin the site to one property.

### 2.1 Where the record stands (read this before setting anything)

Two statements exist in this repository and they cannot both be checked from
the code:

- `PROJECT_OWNER_PENDING.md` (Phase 26 table, item 4) records that on
  **2026-09-06** the owner created a GA4 property and set
  `NEXT_PUBLIC_GA4_MEASUREMENT_ID` in Vercel Production, and that Clarity and
  Ads labels were left optional.
- `PHASE_24_ANALYTICS.md` and the Phase 24 section of the same file state that
  every measurement ID is unset, and this checkout contains none
  (`.env.example` is empty, and `npm run audit:analytics` reports
  *"no measurement IDs configured in this environment"*).

Neither can be resolved here: environment variables live in Vercel, and the
deployed site could not be fetched from the environment this guide was written
in. So treat the 2026-09-06 record as **unconfirmed** and settle it with two
cheap checks before doing anything else:

1. `vercel env ls` (or Vercel → Project → Settings → Environment Variables) —
   is `NEXT_PUBLIC_GA4_MEASUREMENT_ID` present for Production?
2. Open `https://renovixhomeservices.my/en/`, view source and search for
   `googletagmanager`. A hit means measurement is live; nothing means it is not.

If it is already set, skip to §5.2 (verify the data is arriving) and §3 step 4
(add Clarity). If it is not, follow §3 from the top.

## 3. Step-by-step activation

### Step 1 — Create the GA4 property and web data stream

1. Go to [analytics.google.com](https://analytics.google.com) and sign in with
   the Google account the business owns.
2. **Admin → Create → Property.** Name it `Renovix Home Services`, set the
   reporting time zone to **Kuala Lumpur** and the currency to **Malaysian
   Ringgit (MYR)**.
3. In the new property: **Admin → Data streams → Add stream → Web.**
   - Website URL: `https://renovixhomeservices.my`
   - Stream name: `Renovix website`
   - Enhanced measurement: leave the defaults, **except** turn *off*
     "Google signals"-style advertising features if they are offered — this
     site already disables them at the tag level.
4. Copy the **Measurement ID** (`G-XXXXXXXXXX`) from the stream details.

Do not paste the ID anywhere yet.

### Step 2 — Set the variables in Vercel

1. Vercel → Project → **Settings → Environment Variables**.
2. Add `NEXT_PUBLIC_GA4_MEASUREMENT_ID` = the `G-…` value from step 1.
3. Scope it to **Production**, and to **Preview** too if preview deployments
   should be measured. (Recommended: keep Preview *off*, or point Preview at a
   separate GA4 test property, so internal preview traffic never mixes with
   real demand.)
4. Click **Save**, then **Deployments → ⋯ → Redeploy** the latest deployment.
   `NEXT_PUBLIC_*` values are inlined at **build** time, so an env change does
   nothing until the site is rebuilt.

### Step 3 — Confirm the configuration is picked up

Locally, with the same values in `.env.local`:

```bash
npm run verify:analytics
```

The script reports the resolved delivery route (`ga4` / `gtm` / `none`),
rejects malformed IDs (a typo can never point measurement at someone else's
property), warns when GA4 and GTM are both set, warns when an ID was typed
without the `NEXT_PUBLIC_` prefix (it would silently never reach the browser),
and prints exactly which Content-Security-Policy origins the build will allow.
It loads no script and makes no network call.

On the deployed site, the equivalent check is: view source on
`https://renovixhomeservices.my/en/` and confirm
`googletagmanager.com/gtag/js?id=G-…` is loaded.

### Step 4 — Microsoft Clarity (recommended)

Session recordings show *why* visitors abandon the quote form — the single
most useful CRO input this site can get, and free.

1. Go to [clarity.microsoft.com](https://clarity.microsoft.com) and sign in
   (a Microsoft account is fine; it can be linked to the same Google-owned
   business mailbox).
2. **Add new project** → name `Renovix Home Services` →
   URL `https://renovixhomeservices.my`.
3. Choose **Manual install** (this site already contains the Clarity tag
   behind an environment variable — do **not** paste the Clarity snippet into
   any page or into Google Tag Manager).
4. Copy the **Project ID** into `NEXT_PUBLIC_CLARITY_PROJECT_ID` in Vercel,
   then redeploy.
5. In Clarity → **Settings → Masking**, keep the default **Balanced** (or
   stricter). The site never disables masking, and the privacy policy tells
   visitors text is masked.

### Step 5 — Google Ads conversions (only if ads are running)

In Google Ads → **Goals → Conversions → New conversion action → Website**,
create three actions with the "Google tag" installation, then copy the
conversion ID (`AW-…`) and each action's label into:

| Variable | Fires on |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_ADS_QUOTE_LABEL` | `quote_form_success` |
| `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL` | `whatsapp_click` |
| `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL` | `phone_click` |

Each conversion needs the ID **and** its own label; a missing label disarms
only that conversion. In GTM mode the conversions are wired inside the
container instead and these labels are ignored. Enhanced conversions stay
**off** — they would require hashed customer data this lead flow does not need.

### Step 6 — Google Tag Manager instead of direct GA4 (optional)

Only if the owner wants to manage tags without redeploying: set
`NEXT_PUBLIC_GTM_CONTAINER_ID`, leave `NEXT_PUBLIC_GA4_MEASUREMENT_ID` empty,
and follow the container setup in `PHASE_24_ANALYTICS.md` §3 (a GA4
Configuration tag triggered by a **Custom Event** on `page_view` — not the
"All Pages" trigger, or the initial view doubles).

### Step 7 — Two GA4 settings worth changing once

- **Admin → Data settings → Data retention**: raise from 2 to **14 months**, so
  year-over-year comparisons survive.
- **Admin → Custom definitions**: optionally register `language`, `service` and
  `surface` as event-scoped custom dimensions to split reports by language
  route, service and CTA location. The raw events work without them.

## 4. Local development (`.env.local`, never committed)

```bash
# .env.local  (git-ignored — .gitignore already excludes .env*)
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX   # a TEST property, not the live one
NEXT_PUBLIC_CLARITY_PROJECT_ID=
NEXT_PUBLIC_ANALYTICS_DEBUG=true
```

Then `npm run dev`. Every event and web vital prints to the console as
`[renovix analytics] …` / `[renovix web-vitals] …`, and
`window.__renovixAnalytics` plus `window.dataLayer` are inspectable in
DevTools. Use a **test** GA4 property for local work; synthetic developer
traffic must not land in the production property.

## 5. Verification

### 5.1 Automated, in a real browser (no provider data involved)

```bash
npm run build
npm run verify:analytics:e2e                     # event layer, current build
npm run verify:analytics:e2e -- --configured     # + provider hop, TEST-format IDs
npm run verify:analytics:e2e -- --configured --no-build   # re-run against that build
```

It needs a Chromium/Chrome executable, resolved from `--chrome`, `$CHROME_PATH`,
`$CHROME_BIN`, the usual system locations, or a Playwright/Puppeteer browser
cache. **If no browser is found it prints `SKIPPED` and claims nothing** — a
skip is never a pass.

The harness serves the real production build with `next start`, drives a real
headless Chromium over the DevTools Protocol, and performs the actual customer
actions. It asserts:

| Verified | How |
| --- | --- |
| `whatsapp_click` | A real click on the floating WhatsApp CTA on `/en/`, `/ms/` and `/zh/` — exactly one event per click, with `lang` and `surface: floating_whatsapp_general` |
| `phone_click` | A real click on the header `tel:` CTA — exactly one event with `surface: header` |
| `quote_form_submit` | The quote form filled and submitted — exactly one event carrying the selected service slug |
| `quote_form_success` | The same submission with the endpoint answering `200 ok` — exactly one event, and the success panel renders |
| `quote_form_error` | The same submission against the **real, unstubbed** endpoint — exactly one event with `reason: "unavailable"` (the honest 503 path, nothing faked) |
| `page_view` | One per route, plus exactly one more after a client-side navigation (proving no double counting) |
| Provider hop | `gtag.js` and the Clarity tag actually load with the configured IDs, and every event reaches `window.dataLayer` in the shape the provider expects |
| Consent | The Consent Mode defaults are pushed before anything else, with every advertising signal denied |
| Web Vitals | Real-user LCP/FCP/TTFB samples arrive as non-interaction events |
| No PII | No event parameter ever contains the name, phone, location or description typed into the form |

Guarantees built into the harness: Chromium runs with every non-loopback
hostname unresolvable (proved by a probe before the run starts, and the run
aborts if the block is not active), and the success path fulfils
`POST /api/quote/` inside the browser so no email provider is ever contacted.
`--configured` builds into `.next-analytics-e2e/` (git-ignored), never into
`.next/`, and uses the obviously-fake IDs `G-E2EVERIFY0` / `e2everify01`.

### 5.2 Live in GA4 — the only LIVE VERIFIED gate for GA4

1. Browse `https://renovixhomeservices.my/en/` in a normal browser.
   **Admin → Realtime** must show one active user within ~30 seconds.
2. Navigate to a service page, click the floating WhatsApp CTA, click the
   call button, then submit a real quote request.
3. **Admin → DebugView** (enable debug mode per Google's instructions, or
   filter your own traffic) must show, for that session:
   `page_view` (one per page), `whatsapp_click`, `phone_click`,
   `quote_form_start`, `quote_form_submit` and `quote_form_success`.
4. Confirm there is **one** `page_view` per navigation — not two. Two means
   both GA4 routes are somehow active; see §6.
5. **Reports → Engagement → Events**: after 24–48 hours the same event names
   appear with counts.

Only after steps 1–4 have been seen in the owner's own GA4 property is it
correct to describe GA4 as live.

### 5.3 Live in Clarity

1. Browse two or three pages on the deployed site.
2. Clarity → **Recordings**: the sessions appear (usually within a few
   minutes) with on-screen text masked.
3. Clarity → **Settings → Setup**: confirm the site URL is
   `renovixhomeservices.my`.

### 5.4 What is still not claimed after all of this

- No traffic, ranking, conversion-rate or revenue figure may be quoted from
  measurement until real data exists — measurement is the instrument, not the
  result (see `PHASE_24_ANALYTICS.md` §11).
- The automated harness proves the *site* fires and forwards events. It cannot
  prove the property belongs to the business, that data retention is set, or
  that reports are being read. Those are §5.2–§5.3.

## 6. Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| No `gtag.js` in the page source after setting the ID | The deployment was not rebuilt — `NEXT_PUBLIC_*` values are inlined at build time | Redeploy (Vercel → Deployments → Redeploy) |
| Realtime shows nothing | ID typo, or the variable is scoped to Preview only | `npm run verify:analytics` locally with the same values; check the Vercel scope |
| `page_view` appears twice per page | Both GA4 routes are active (direct tag **and** a container that also holds a GA4 tag) | Pick one route. In GTM mode, remove the container's "All Pages" GA4 tag and keep only the Custom Event trigger on `page_view` |
| An event name never appears in DebugView | The event exists but no custom dimension was registered — it is still recorded | Register `language` / `service` / `surface` as custom dimensions (§3 step 7), or read the raw event |
| CSP violation for `googletagmanager.com` in the console | A provider ID was added by hand somewhere the config cannot see | IDs must come from the documented variables; `lib/analytics-config.ts` derives the CSP from them |
| Clarity shows no recordings | The project ID is unset or the deployment was not rebuilt | `npm run verify:analytics` shows whether Clarity is configured; Clarity also needs a couple of sessions before the dashboard fills |
| WhatsApp/phone clicks missing on one language route | Never observed — the harness tests EN, MS and ZH | Re-run `npm run verify:analytics:e2e`; if it fails, the failure names the route |

## 7. Privacy & security notes

- **No personal data reaches measurement — by construction.** Event context
  passes through a closed allowlist (`surface`, `service`, `subservice`,
  `reason`, `lang`, all length-capped) in `lib/analytics.ts`. Names, phone
  numbers, email addresses, locations, project descriptions and photo counts
  never enter an event, a URL, a page title or an event name. The delegated
  click tracker classifies links by URL scheme only and never reads link text.
  `npm run audit:analytics` fails the build if a call site tries otherwise, and
  `npm run verify:analytics:e2e` asserts the same at runtime.
- **Advertising signals are off.** Consent Mode defaults are pushed before any
  provider runs: `analytics_storage: granted`, `ad_storage`, `ad_user_data`
  and `ad_personalization` all **denied**; the GA4 config sets
  `allow_google_signals: false` and
  `allow_ad_personalization_signals: false`.
- **The CSP only widens for providers that are actually configured.** With no
  IDs set, the policy is byte-for-byte the pre-measurement policy.
- **Clarity keeps its default text masking.** The site never calls the
  un-masking API, and the privacy policy says so.
- **The privacy policy discloses measurement in EN, MS and ZH** ("Website
  measurement" / "Pengukuran laman web" / "网站流量衡量"), including how a
  visitor can block measurement scripts without breaking the site.
- **Search Console verification is untouched** by any of this.

## 8. Changing, rotating or removing IDs

- **Change a property or project:** update the variable in Vercel and
  redeploy. The old property stops receiving data at the redeploy; nothing in
  the repository needs editing.
- **Move from direct GA4 to GTM:** set `NEXT_PUBLIC_GTM_CONTAINER_ID`, clear
  `NEXT_PUBLIC_GA4_MEASUREMENT_ID`, configure GA4 inside the container
  (§3 step 6), redeploy, then re-check DebugView for a single `page_view`.
- **Turn measurement off entirely:** delete the variables and redeploy. No
  script loads, the CSP returns to its strict pre-measurement form, and the
  privacy wording stays accurate because it is written as "when measurement is
  enabled".
- **Stop Clarity only:** clear `NEXT_PUBLIC_CLARITY_PROJECT_ID` and redeploy.
- There is no secret to rotate. If a property is compromised, delete the
  stream in GA4 and create a new one.

## 9. Activation checklist

- [ ] §2.1 resolved: confirmed whether `NEXT_PUBLIC_GA4_MEASUREMENT_ID` is
      already set in Vercel Production (do not add a second stream blindly).
- [ ] GA4 property + web data stream created for
      `https://renovixhomeservices.my` (Kuala Lumpur / MYR).
- [ ] `NEXT_PUBLIC_GA4_MEASUREMENT_ID` set in Vercel **Production** and the
      site redeployed.
- [ ] `googletagmanager.com/gtag/js?id=G-…` visible in the deployed page
      source.
- [ ] `npm run verify:analytics` reports `CONFIGURED` with the same values.
- [ ] `npm run verify:analytics:e2e` passes against the real build.
- [ ] Clarity project created; `NEXT_PUBLIC_CLARITY_PROJECT_ID` set;
      redeployed; recordings visible with text masked.
- [ ] GA4 data retention raised to 14 months; optional custom dimensions
      registered.
- [ ] Google Ads conversions created and armed **only if** ads are running.
- [ ] GA4 Realtime + DebugView checked with a real browse session: one
      `page_view` per navigation and all four business events present.
- [ ] Only then: update the status table at the top of
      `PHASE_24_ANALYTICS.md` from **OWNER CONFIGURATION PENDING** to **LIVE
      VERIFIED**, with the date.

## 10. Validation performed for this guide (Task 2.2)

| Check | Result |
| --- | --- |
| `npm run build` | PASS (689 static entries, route set unchanged) |
| All 18 `scripts/audit-*.mjs` | PASS, including the new Task 2.2 section of `npm run audit:analytics` |
| `npm run verify:analytics` | Exercised in `NOT CONFIGURED`, GA4+Clarity `CONFIGURED`, GTM-wins, malformed-ID and missing-`NEXT_PUBLIC_`-prefix states |
| `npm run verify:analytics:e2e` | PASS — real headless Chromium against the real production build: `whatsapp_click` (EN/MS/ZH), `phone_click`, `quote_form_submit`, `quote_form_success`, `quote_form_start`, `quote_form_error` (`unavailable`), consent defaults, no PII, no external request |
| `npm run verify:analytics:e2e -- --configured` | PASS — TEST-format IDs: `gtag.js` + Clarity tags load, CSP allows exactly those origins, one `page_view` per route plus one per client-side navigation, every event reaches `window.dataLayer`, web vitals arrive, and every provider request fails at DNS |
| Live GA4 / Clarity dashboards | **NOT CLAIMED** — no measurement ID is available in this environment, and the deployed site could not be fetched from it. The owner completes §5.2–§5.3 |
