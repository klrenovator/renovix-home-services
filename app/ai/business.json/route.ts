import { getAiKnowledge } from "@/lib/ai-knowledge";

/**
 * Centralized AI-readable business knowledge at `/ai/business.json`.
 *
 * Phase 16 (search + AI authority): answer engines and assistants get one
 * stable document with the verified facts about Renovix Home Services —
 * company information, contact methods, service area, services with
 * indicative starting prices, problem guides, area guides, projects,
 * process and limitations. Every fact is derived from the same registries
 * the visible pages render (`lib/ai-knowledge.ts`), so this feed can never
 * drift from the site.
 *
 * Prices are indicative *starting* prices with their unit, disclaimer and
 * review date attached — a consumer cannot honestly quote a number as a
 * final price. Nothing about reviews, ratings, coordinates, licences,
 * awards or outcomes is claimed, because the business has supplied none.
 *
 * `force-static`: the feed is prerendered at build time with the rest of the
 * site and served from the CDN.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.json(getAiKnowledge(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
