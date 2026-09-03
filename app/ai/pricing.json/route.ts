import { getAiReadablePricing } from "@/data/pricing";

/**
 * Machine-readable pricing feed at `/ai/pricing.json`.
 *
 * Answer engines, assistants and price aggregators increasingly read a plain
 * JSON document instead of parsing a table out of HTML. This route serves the
 * exact same entries the service pages render — one source of truth in
 * `data/pricing/pricing.ts` — so the feed can never drift from the site.
 *
 * Every figure is a *starting* price with its scope, unit and disclaimer
 * attached, and `lastReviewed` states when the figures were last checked, so a
 * consumer cannot honestly quote a number as a final price.
 *
 * `force-static`: the feed is prerendered at build time with the rest of the
 * site and served from the CDN.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.json(getAiReadablePricing(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
