# Phase 25 — Final Production Readiness Report

Project: **Renovix Home Services**
Website: **https://renovixhomeservices.my**
Date: 2026-09-04

Nothing below is marked *live verified* unless it was actually requested over
HTTP. Missing business facts were not invented.

---

## A. GREEN — verified complete

| Item | Evidence |
| --- | --- |
| Production site serves | Live homepage, services, quote, contact, MS/ZH, sitemap, robots, llms.txt, AI feeds, GSC file all 200 |
| HTTPS | Live TLS; SecurityHeaders.com grade **A**; HSTS `max-age=63072000` (Vercel) |
| `/robots.txt` | Live: `Allow: /`, Host apex, Sitemap `https://renovixhomeservices.my/sitemap.xml` |
| `/sitemap.xml` | **654** unique HTTPS apex URLs, 218 EN + 218 MS + 218 ZH, no duplicates, no staging hosts |
| All public sitemap routes | Local `next start` sweep **654/654 HTTP 200** |
| Root redirect | `/` → `/en/` 308 |
| Retired sitemaps | `/sitemap/{en,ms,zh}.xml` → `/sitemap.xml` 308 |
| Canonical + hreflang | Self-canonical on apex; `en-MY` / `ms-MY` / `zh-MY` / `x-default`→EN on sampled pages |
| 10 services + 51 sub-services | All present; **no Carpentry** (`/en/services/carpentry/` 404) |
| 57 problems, 53 areas, 21 projects, 12 guides | Registry + sitemap counts |
| Pricing single-source | 51 rows; `audit:pricing` PASS; tiling still “Starting from RM8 per sqft” |
| NAP / contact links | One phone, one WhatsApp, one email, one address — live on contact + chrome |
| Quote form UI | EN/MS/ZH; required labels; honeypot; no fake file input; WhatsApp fallback |
| Quote API (code + local live) | 405 GET; 400 validation; 403 foreign origin; www origin allowed; honest **503** without Resend; honeypot 200; 413 oversized; 429 rate limit |
| Structured data | Organization/LocalBusiness + WebSite everywhere; Service/FAQ/Breadcrumb/Article/ImageObject as designed; **no** Review/AggregateRating |
| Security headers (after this phase) | CSP including `frame-ancestors 'none'`, `X-Frame-Options: DENY`, nosniff, referrer-policy, permissions-policy, no `X-Powered-By` |
| Analytics default | No GA4/GTM/Clarity/Ads scripts while IDs unset (live HTML) |
| Search Console verification | HTML file + meta `CIc-da9G9QfriX7tAeKqS3w5YF2tt4GKnjV8IMSGP8o` live |
| Build / lint / type-check | PASS (665 static pages) |
| Audit suite | All existing + new static audits PASS |

Stale MS/ZH homepage copy that still said “18 KL / 28 Selangor” guides was
corrected to **21 / 32** (matches the Phase 23 registry).

---

## B. YELLOW — code complete, live/device verification remains

| Item | Why yellow |
| --- | --- |
| www vs apex | Canonicals/sitemap/robots use **apex**. Live fetchers currently land on **www** (Vercel primary domain). Owner must set apex as primary. Not changed in Next.js (would loop). |
| Real-device mobile/desktop click-through | Served-HTML + previous-phase Chromium notes. This sandbox cannot TLS to production and has no owner phone. |
| Core Web Vitals field data | `next/web-vitals` is wired (reports only once a measurement ID exists). Public PageSpeed API quota was exhausted. No fabricated LCP/INP/CLS numbers. |
| Quote conversion on production | Local API verified. A production POST was **not** sent (would create a fake lead and/or 503). |
| Google Search Console indexing | Verification is live. Crawl/index/performance reports: **Insufficient real-world data for performance conclusions.** |

---

## C. GREY — owner / configuration pending

| Item | Owner supplies |
| --- | --- |
| Live quote email | `RESEND_API_KEY`, verified sending domain, `QUOTE_FROM_EMAIL`, optional `QUOTE_NOTIFICATION_EMAIL`, then one real test submission |
| Analytics | Real GA4 `G-…` **or** GTM `GTM-…` (never both). Optional Ads conversion ID + labels, Clarity ID |
| Search Console sitemap submit | Submit `https://renovixhomeservices.my/sitemap.xml` **once** on the apex property |
| Vercel canonical host | Apex primary (see B) |
| Project proof extras | Per-job location, year, materials, extra photos — see `PROJECT_OWNER_PENDING.md` |
| Opening days | Not stated; schema correctly omits `dayOfWeek` |
| Reviews / ratings / certifications / years of experience | Not supplied; correctly unpublished |

---

## D. RED — production blockers

**None.** The site is up on HTTPS, public routes work, the quote path fails
honestly (503 + WhatsApp) rather than silently, and pricing/NAP/schema are
not contradicted.

The www/apex mismatch is SEO-inconsistent, not a site-down blocker.

---

## E. Final counts (repository, Phase 25 — not historical)

| Item | Count |
| --- | ---: |
| Services | 10 |
| Sub-services (priced, standalone pages) | 51 |
| Problem pages | 57 |
| Blog articles | 12 |
| Location guides | 53 (21 KL + 32 Selangor) |
| Region hubs | 2 |
| Projects | 21 |
| Pricing rows | 51 |
| Search-intent matrix entries | 24 |
| Language routes | 3 (`/en/`, `/ms/`, `/zh/`) |
| Canonical pages per language | 218 |
| Sitemap `<loc>` URLs | **654** |
| Static pages built | **665** |
| Languages represented in sitemap | 218 × 3 |

---

## F. Final test results

| Check | Result |
| --- | --- |
| `npm run type-check` | PASS |
| `npm run lint` | PASS (0 problems) |
| `npm run build` | PASS — 665 static, `/api/quote` dynamic |
| `audit:business` | PASS |
| `audit:og-fonts` | PASS |
| `audit:project-assets` | PASS |
| `audit:pricing` | PASS (51 rows) |
| `audit:locations` | PASS (53 guides) |
| `audit:authority` | PASS |
| `audit:subservices` | PASS (51) |
| `audit:blog` | PASS (12) |
| `audit:quote` | PASS |
| `audit:analytics` | PASS (IDs unset) |
| `audit:projects` | PASS (21) |
| `audit:security` | PASS |
| `audit:sitemap` | PASS (654) |
| `audit:schema` | PASS |
| `audit:multilingual` | PASS |
| `audit:routes` | PASS |
| `audit:live` (`next start`) | PASS — 654/654 sitemap 200; quote 503/403/400/413/429 |
| Live production HTTP | Homepage, MS, ZH, tiling, quote, contact, robots, sitemap, llms.txt, pricing.json, GSC file — 200 |
| Live email delivery | **Not tested** (owner pending) |
| Live analytics | **Not tested** (no IDs; correctly dark) |
| PageSpeed / CWV field | **Not yet testable** here |
| Search Console performance | **Insufficient real-world data for performance conclusions.** |

---

## Owner checklist (remaining only)

1. Vercel: primary domain = `renovixhomeservices.my` (www → apex).
2. Resend credentials + one real quote-email test.
3. Search Console: submit `/sitemap.xml` once on the apex property.
4. Optional: GA4 or GTM ID (never both); optional Ads / Clarity.
5. Optional: project metadata / extra photos.
6. Phone-in-hand pass of menu, quote, WhatsApp, `tel:`.
7. Production approval.

Do **not** invent measurement IDs, reviews, or project facts.

Phase 25 is the last initial-build checkpoint. Further SEO/content/analytics
work is post-launch maintenance.
