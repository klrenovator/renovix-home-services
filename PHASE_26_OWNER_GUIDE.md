# PHASE 26 — OWNER STEP-BY-STEP GUIDE (one task at a time)

Tracker for the owner-only items from `PHASE_26_IMPLEMENTATION_PLAN.md`.
Working method agreed 2026-09-05: the AI gives ONE task at a time with exact
click steps; the owner says "done"; the AI verifies (live checks + this file),
ticks it, and only then gives the next task. Detailed click instructions for
the current task live in the chat; this file keeps the position + result.

**Current position:** Task 7 of 9 (T-09 quote-form field approval) — awaiting owner decision. (Task 5 parked: 7 projects wired; owner will upload real Painting + Waterproofing photos whenever a job site allows.)

## Checklist

- [x] **1. Vercel apex-primary** ✅ DONE 2026-09-05 — make `renovixhomeservices.my` serve the site
      and `www` redirect TO it (today they are exactly reversed: apex redirects
      to www — verified 2026-09-05 by fetch). DNS itself is fine (apex A →
      Vercel, www CNAME → vercel-dns); nothing at Namecheap needs to change.
      Done when: `https://www.renovixhomeservices.my/en/` 308→
      `https://renovixhomeservices.my/en/` and apex returns 200.
- [x] **2. Resend** ✅ DONE 2026-09-06 — API key + verified sending domain; set
      `RESEND_API_KEY` + `QUOTE_FROM_EMAIL` (+ optional
      `QUOTE_NOTIFICATION_EMAIL`) in Vercel env; redeploy; one real test quote
      → inbox. Done when: test submission lands in the mailbox.
- [x] **3. GSC sitemap submit** ✅ DONE 2026-09-06 — after task 1 only: submit
      `https://renovixhomeservices.my/sitemap.xml` once on the apex property.
- [x] **4. Analytics** ✅ DONE 2026-09-06 — GA4 `G-…` ID *or* GTM `GTM-…` (never both) into the
      matching Vercel env var; verify data in GA4 Realtime.
- [~] **5. Project photos** ◐ 7 wired 2026-09-06 — ⏸ PARKED with owner's decision
      (2026-09-06): real Painting + Waterproofing photos will be uploaded from an
      actual job when available; the held painting pair is NOT published (the raw
      jpgs on `main` are removed by the PR at merge, recoverable from git history).
- [ ] **6. Real-device pass** — phone: menu, quote form, WhatsApp, tel:.
- [ ] **7. T-09 approval** ◐ PRESENTED 2026-09-07 — approve the two optional quote-form fields
      (budget band + preferred time-of-day); AI implements.
- [ ] **8. KV before scale** — provision Vercel KV / Upstash when traffic
      approaches launch; AI then swaps the rate limiter.
- [ ] **9. Dependabot** — GitHub repo → Settings → Code security: enable
      Dependabot alerts + security updates.

## Results log

- **2026-09-05 — Task 1 verified by AI:** fetch of `https://www.renovixhomeservices.my/`
  now resolves to final URL `https://renovixhomeservices.my/en/` (was: stayed on www),
  and the apex itself serves the site directly with no loop; all rendered links/canonicals
  are on the apex host. www/apex mismatch (audit finding I-01, plan T-01) CLOSED.

- **2026-09-06 — Task 2 verified:** owner verified `renovixhomeservices.my` in Resend
  (AI-side check: `send` SPF+CNAME/MX chain and `resend._domainkey` DKIM both resolve live),
  set `RESEND_API_KEY` + `QUOTE_FROM_EMAIL` in Vercel Production env, redeployed (build log
  clean, 665 pages), and a real test quote now delivers to the business inbox. I-02 / plan
  T-02 CLOSED — quote funnel live. Note: this redeploy was of `main` (pre-Phase-26); the
  PR #41 changes (incl. `host:`-line removal from robots.ts) go live at final merge — harmless.

- **2026-09-06 — Task 3 verified:** owner confirmed GSC property `https://renovixhomeservices.my/`
  verified and `sitemap.xml` submitted once. Sitemap content itself was validated by AI earlier
  (apex-only locs, 4-way hreflang, content lastmod) and by `audit:sitemap` (654 URLs). Expected:
  "Success" within 1–2 days; indexing 1–2 weeks; no resubmission needed.

- **2026-09-06 — Task 4 verified (owner-side):** GA4 property created by owner (Kuala Lumpur TZ,
  MYR), stream `G-…` Measurement ID set in Vercel Production as `NEXT_PUBLIC_GA4_MEASUREMENT_ID`,
  redeployed, and GA4 Realtime showed live sessions — owner-confirmed on site test. GTM path
  intentionally unused (consent design: never both). Clarity left optional/deferred.

- **2026-09-06 — Task 5 part A verified:** owner uploaded 9 raw photos to `main`
  (`Add files via upload`). AI processed them: 7 published as new projects with SEO
  file names (`*-kl-selangor.webp`), full en/ms/zh copy incl. alt text + scopeOfWork,
  1200×630 OG crops via the sanctioned script, coverage lists + sitemap counts bumped
  (654→675 URLs, 665→686 pages). The chandelier phone-screenshot was cropped to remove
  gallery chrome; EXIF/GPS stripped on re-encode. Raw jpgs removed from the tree per
  audit rule #4 (recoverable from git history). 2 painting shots HELD: they show US-style
  sockets/switches + a Werner ladder + hardwood floor — inconsistent with a KL/Selangor
  job; publishing them would contradict the site's real-local-work promise. Awaiting one
  owner line: confirm they are a genuine site job. Waterproofing: no photos supplied yet.
  Gates: type-check, lint, audit:project-assets, audit:projects, audit:multilingual,
  audit:sitemap, full build — all green.

- **2026-09-06 — Task 5 parked (owner decision):** owner confirmed they will upload real
  Painting and Waterproofing photos when actual job photos exist; the 2 US-fittings painting
  shots stay unpublished. Re-wire trigger: owner sends photos → run the same pipeline
  (SEO name → webp hero → OG via script → en/ms/zh copy → coverage → audits → build).

- **2026-09-06 — Task 6 owner pass recorded:** items 1–6 and 8–10 all OK on the owner's
  real phone browser (mobile Chrome; Safari was only an example). Quote form end-to-end
  (submit → success → Gmail delivery + Reply-To) and double-submit rate limit both pass on
  device. Two follow-ups: (a) #7 owner requested header change — WhatsApp reduced to the
  familiar icon circle in brand green + a direct-call `tel:` circle added, mobile and
  desktop; implemented on this branch (build 686/686, security audit PASS) — owner to
  visually confirm on the preview before merge. (b) #11 GA4 Realtime showed 0 — diagnostic
  steps with owner (Vercel env var exact name/value/Production scope, build-log validation
  warning check, correct-property + incognito retest).

- **2026-09-07 — Task 6 closed (owner direction):** real-device pass done (items 1–6, 8–10 OK).
  GA4: Vercel env now Production-scoped and PROVEN live via response headers — production CSP
  contains `googletagmanager` + google-analytics origins, which only appear when the build baked
  a valid `NEXT_PUBLIC_GA4_MEASUREMENT_ID`. The raw HTML correctly omits the script tag (by
  design: consent-first client injection), so view-source absence was a false alarm; ongoing
  visibility is a GA4-property/account-view matter, non-blocking for launch. Header WhatsApp/
  call circles shipped on the PR; owner moved to task 7 — flag any visual tweak at final review.
