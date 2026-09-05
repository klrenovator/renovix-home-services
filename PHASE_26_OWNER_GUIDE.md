# PHASE 26 — OWNER STEP-BY-STEP GUIDE (one task at a time)

Tracker for the owner-only items from `PHASE_26_IMPLEMENTATION_PLAN.md`.
Working method agreed 2026-09-05: the AI gives ONE task at a time with exact
click steps; the owner says "done"; the AI verifies (live checks + this file),
ticks it, and only then gives the next task. Detailed click instructions for
the current task live in the chat; this file keeps the position + result.

**Current position:** Task 3 of 9 (GSC sitemap submission) — in progress.

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
- [ ] **3. GSC sitemap submit** — after task 1 only: submit
      `https://renovixhomeservices.my/sitemap.xml` once on the apex property.
- [ ] **4. Analytics** — GA4 `G-…` ID *or* GTM `GTM-…` (never both) into the
      matching Vercel env var; verify data in GA4 Realtime.
- [ ] **5. Project photos** — 2–3 real consented photos for Painting /
      Waterproofing / Flooring / Handyman (AI adds them to the registry next
      session once files are supplied).
- [ ] **6. Real-device pass** — phone: menu, quote form, WhatsApp, tel:.
- [ ] **7. T-09 approval** — approve the two optional quote-form fields
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
