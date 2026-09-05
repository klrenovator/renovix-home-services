# PHASE 26 — IMPLEMENTATION PLAN (living tracker)

**Started:** 2026-09-05 · **Source:** `PHASE_26_DEEP_AUDIT_2026-09-05.md` (deep audit, Master Issue Register + Implementation Master Plan)
**Rule:** Every task below is either ☐ TODO, ✅ DONE (with evidence), ⏸ DEFERRED (with reason) or ☐ OWNER (cannot be done in code). **A future AI session: work the ☐ AI-code items in order, tick them here with a one-line evidence note + date, and never re-do ✅ items.** Owner items are listed at the end of every phase.

Legend: ✅ complete · 🔄 in progress · ☐ open · ⏸ deferred with reason · 🧍 owner action (not code)

---

## Phase 1 — P0 Critical (launch blockers)

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| T-01 · Vercel → Domains → make `renovixhomeservices.my` (apex) primary so `www` redirects to it | 🧍 owner | ✅ 2026-09-05 | Dashboard-only. VERIFIED 2026-09-05 by AI: fetch of www now lands on
`https://renovixhomeservices.my/en/`; apex serves directly (no loop); all page links on apex.
Next: submit the sitemap in GSC on the apex property (T-03) now unblocked |
| T-02 · Resend: create key, verify sending domain, set `RESEND_API_KEY` + `QUOTE_FROM_EMAIL` (+ optional `QUOTE_NOTIFICATION_EMAIL`) in Vercel, redeploy, send one real test quote | 🧍 owner | ☐ | API honestly returns 503 until then; form shows WhatsApp fallback (by design). `qa/` + `audit:quote` cover the rest. Never fake the success state |

**Phase 1 status:** T-01 ✅ done + AI-verified 2026-09-05. T-02 ☐ owner (task 2 of the owner guide) but cannot take leads by email. This is the single biggest funnel gap.

---

## Phase 2 — SEO foundation

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| T-04 · Remove non-standard `host:` from robots.txt | 🤖 code | ✅ 2026-09-05 | `app/robots.ts` edited; local prod server `/robots.txt` returns UA/Allow/Sitemap only (RFC 9309-conformant) |
| T-03 · Submit `https://renovixhomeservices.my/sitemap.xml` once in GSC (apex property), after T-01 | 🧍 owner | ☐ | Verification meta tag already live. Don't resubmit per-language sitemaps (redirected to the single file) |

---

## Phase 3 — Site architecture debt

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| T-06 · Retire legacy `data/problems.ts` | 🤖 code | ✅ 2026-09-05 | File deleted; `problemCategoryIcons`/`problemPreviewSlugs`/`ProblemPreview` now in `data/problem-content/previews.ts` (re-exported from the registry index); `data/i18n` rewired; type-check + all 17 audits PASS |
| T-05 · Reconcile the two location data models | 🤖 code | ✅ (data level) 2026-09-05 | Dead duplicate `seo.title/metaDescription/h1` removed from all 53 `data/locations/registry.ts` entities (−159 lines; never rendered — pages read `data/area-content`); intentional layering documented in `types.ts`; `audit:locations` reconciles ids/districts/publicPath bidirectionally so drift fails the build. **Full physical file-merge deliberately NOT done: no user-facing benefit, high churn on a green build** |
| T-07 · Fix answer-first ↔ FAQ content duplication | 🤖 code | ✅ 2026-09-05 | Audit said "Painting + likely others" — measured: **all 10 services** had `faqs[0]` ≈ compressed copy of `answerFirst[0]` (76–100% overlap). All 10 EN answers rewritten to complementary "how to read the number" framings; MS/ZH verified to already omit those entries (no translation drift); `audit:pricing` re-run PASS. **Regression guard added: `audit:authority` §5b** fails on ≥0.55 containment (≥0.45 + ≥4 shared RM figures); negative test confirmed it FAILs on the old copy |

---

## Phase 4 — Content & topical authority (no AI-code work left)

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| Real project photos for Painting / Waterproofing / Flooring / Handyman (2–3 each, consented, real) | 🧍 owner | ☐ | `audit:projects` currently PASSes with "proof omitted" empty states — honest but thin. Owner adds under `public/projects/` + `data/project-content/projects.ts` per governance §8 (never stock/AI) |
| Real customer reviews (with consent) when they exist | 🧍 owner | ☐ | Until then keep emitting NO Review/AggregateRating schema (governance §1/§6 — `audit:schema` enforces) |
| Optional founder/team note on About | 🧍 owner decision | ☐ | E-E-A-T soft gap; don't invent credentials |

---

## Phase 5 — Local SEO

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| Google Business Profile (claim + real hours once owner confirms days) | 🧍 owner | ☐ | Schema stays honest until then (`dayOfWeek`/geo only when real) |

---

## Phase 6 — AEO / LLM (maintenance only)

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| (Optional, future) `Offer.priceSpecification` in Service JSON-LD, derived from the catalogue | 🤖 code, post-T-02 decision | ☐ | Only if governance §2 single-source chain can be kept (reference → derive, never copy). Low priority; feeds already cover it |

---

## Phase 7 — Performance

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| Field CWV: run PageSpeed Insights + GSC CWV report once there's traffic | 🧍 owner | ☐ | Code-level: 665 static pages, minimal client JS, AVIF/WebP, self-hosted fonts — all re-verified in build this session |
| Post-T-01 check: Lighthouse on apex URL | 🧍 owner | ☐ | Do after www/apex lands |

---

## Phase 8 — UX / CRO

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| T-09 · Quote form: add optional **budget band** + **preferred time-of-day** (and decide on photo upload) | 🤖 code, gated | ☐ | Audit gates this on owner approving the field list. Proposed: budget select (`under-3k / 3k–10k / 10k–30k / 30k-plus / not-sure`), time-of-day (`morning / afternoon / evening / flexible`), both optional; photo upload stays "send on WhatsApp" unless owner wants server-side handling (needs storage decision). Implementation surface when approved: `QuoteForm.tsx` + `lib/quote/{constants,validation,email}.ts` + 3 dictionaries; `audit:quote` unaffected (behavior-based) |
| Real-device pass (menu, form, WhatsApp, tel:) | 🧍 owner | ☐ | All prior phases flagged this |

---

## Phase 9 — Security & scale

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| T-10 · Nonce-based CSP (remove `'unsafe-inline'`) | 🤖 code | ⏸ DEFERRED 2026-09-05 | Full-static SSG + Next.js inline bootstrap scripts ⇒ a real nonce requires per-request dynamic rendering (or an edge worker rewriting every HTML response), which would trade away the site's 665-page static architecture and its CWV posture. Risk today is limited: pages contain zero user input at build time and the only dynamic route returns JSON. **Revisit trigger:** any feature that renders user/3rd-party data into HTML, or a move to ISR/dynamic. Then: middleware nonce → `csp` in metadata, remove `unsafe-inline` from `script-src`+`style-src`, verify every page hydrates |
| T-11 · Distributed rate limiting (Vercel KV/Upstash) before high traffic | 🧍 owner + 🤖 code | ☐ | Owner provisions the store; the swap is ~½ day (`lib/quote/rate-limit.ts` interface is already isolated). Per-instance in-memory limiter is the documented honest baseline until then |
| Dependabot / Snyk continuous CVE monitoring | 🧍 owner | ☐ | One-time `npm audit` already run 2026-09-05 → **0 vulnerabilities**; ongoing automation is a GitHub setting |

---

## Phase 10 — Final QA gate (run after every future phase)

| Task | Track | Status | Evidence / note |
| --- | --- | --- | --- |
| T-12 · `npm ci && npm run type-check && npm run lint && npm run build` | 🤖 verification | ✅ 2026-09-05 | 0 errors / 0 warnings / 665 static pages (re-run again after any future change) |
| T-13 · Dependency vulnerability scan | 🤖 verification | ✅ 2026-09-05 | `npm audit`: 0 vulnerabilities |
| T-14 · All audit scripts + live QA | 🤖 verification | ✅ 2026-09-05 | 17/17 audits PASS (incl. new §5b guard) + `audit:live` PASS 199/WARN 0/FAIL 0 vs `next start` |

**Standing rule for every future change:** type-check → lint → build → all 17 audits → (if routes/content changed) `audit:live` against a local `next start` → update this file's ticks + `PROJECT_PROGRESS.md`.

---

## How to resume this plan next session (AI instructions)

1. Read this file; do the topmost ☐ 🤖 items (currently: T-09 once owner approves fields; Phase 6 optional).
2. Do NOT re-do ✅ items — evidence and rationale are recorded; re-verification of ✅ claims is exactly "re-run the gates" in Phase 10, nothing more.
3. Do NOT invent data the owner hasn't supplied (governance §1). If blocked, say so in this file with a ☐ and a reason line.
4. After any code change: run the Phase 10 gate, tick the item here with date + one-line evidence, append a dated entry to `PROJECT_PROGRESS.md`, commit to the working branch.
5. Owner ☐ items: surface them in the final chat summary, never "helpfully" fake them.

## Owner quick-list (everything 🧍 above, in one place)

1. **Vercel → Domains:** apex `renovixhomeservices.my` primary (www → apex redirect). *(biggest single SEO fix)*
2. **Resend:** API key + `QUOTE_FROM_EMAIL` (+optional notification address) in Vercel env; send 1 real test quote; confirm inbox.
3. **GSC:** after (1), submit the single sitemap on the apex property.
4. **Analytics:** GA4 ID *or* GTM (not both); optionally Clarity.
5. **Photos:** real consented project photos for Painting/Waterproofing/Flooring/Handyman.
6. **Device pass:** phone test of menu/form/WhatsApp/tel:.
7. **Approve T-09 field list** (budget + time-of-day optional selects; photo-upload decision) → AI implements next session.
8. **Before high-traffic launch:** provision Vercel KV/Upstash for T-11.
9. **GitHub repo settings:** enable Dependabot alerts + security updates.
10. **GBP claim** + real hours when confirmed.

---

## Progress log

- **2026-09-05 (owner task 1):** T-01 www/apex primary FIXED in Vercel by owner, AI-verified live (www → apex 308, no loop, apex serves 200).
- **2026-09-05 (session 1):** Deep audit saved (`PHASE_26_DEEP_AUDIT_2026-09-05.md`). Ticked T-04, T-05 (data level), T-06, T-07, T-12, T-13, T-14. All verification gates re-run green (type-check/lint/build/17 audits/npm audit/live QA 199-0-0). New `audit:authority` §5b dedup guard added + negative-tested. Owner list set above.
