import { siteConfig } from "@/data/site";
import { getAiKnowledge } from "@/lib/ai-knowledge";

/**
 * `llms.txt` at `/llms.txt` — the crawler-friendly summary of this site.
 *
 * Phase 16 (search + AI authority): follows the llms.txt convention so AI
 * assistants and answer engines can discover what Renovix Home Services
 * offers, where, from what starting prices, and which pages answer which
 * questions. The content is generated at build time from the same
 * registries the pages render (`lib/ai-knowledge.ts`), so it stays
 * synchronized automatically — nobody maintains a hand-written copy.
 *
 * `force-static`: prerendered with the rest of the site.
 */
export const dynamic = "force-static";

export function GET() {
  const knowledge = getAiKnowledge();

  const lines: string[] = [
    `# ${siteConfig.name}`,
    ``,
    `> ${siteConfig.tagline}`,
    ``,
    `${siteConfig.description}`,
    ``,
    `Service area: Kuala Lumpur, Selangor and the wider Klang Valley, Malaysia. No other states are served.`,
    `Business hours: ${siteConfig.businessHours.display}.`,
    `Contact: ${siteConfig.phone} (call and WhatsApp) · ${siteConfig.email}`,
    `Address: ${siteConfig.address.full}`,
    `Languages: English (canonical), Bahasa Melayu, Simplified Chinese.`,
    ``,
    `## Services (indicative starting prices, ${knowledge.pricing.lastReviewed})`,
    ``,
    `All prices start from the stated amount. Final quotation is confirmed only after assessing the actual site condition.`,
    ``,
  ];

  for (const service of knowledge.services) {
    lines.push(`- [${service.name}](${service.url}): ${service.priceNote}.`);
  }

  lines.push(
    ``,
    `## Problem guides (symptoms, causes, solutions)`,
    ``,
    `What each problem means, common causes, warning signs, possible solutions and when professional help is needed:`,
    ``,
    `- [All problem guides](${knowledge.problems.index})`,
    ``,
  );

  const problemSample = knowledge.problems.guides.slice(0, 12);

  for (const guide of problemSample) {
    lines.push(`- [${guide.title}](${guide.url})`);
  }

  lines.push(
    ``,
    `## Service areas (${knowledge.serviceArea.areaGuides.length} local guides)`,
    ``,
    `${knowledge.serviceArea.summary}`,
    ``,
    `- [All areas](${knowledge.serviceArea.areasIndex})`,
    ``,
  );

  // Grouped by state and administrative district from the single location
  // registry, so an assistant can answer "do you cover X?" with the correct
  // hierarchy rather than a flat, ambiguous list of place names.
  for (const region of knowledge.serviceArea.regions) {
    lines.push(
      `### ${region.name} — ${region.publishedGuides} guides`,
      ``,
      `- [${region.name} overview](${region.url})`,
      ``,
    );

    for (const district of region.districts) {
      const places = district.locations
        .map((location) => `[${location.name}](${location.url})`)
        .join(", ");
      lines.push(`- **${district.name}**: ${places}`);
    }

    lines.push(``);
  }

  // Knowledge Hub: the educational layer, listed so assistants can cite the
  // guide that actually answers a question rather than a commercial page.
  lines.push(``, `## Guides`, ``, knowledge.knowledgeHub.description, ``);

  for (const article of knowledge.knowledgeHub.articles) {
    lines.push(`- [${article.title}](${article.url})`);
  }

  lines.push(
    ``,
    `## More`,
    ``,
    `- [Knowledge hub](${knowledge.knowledgeHub.index})`,
    `- [Real project portfolio](${knowledge.projects.index})`,
    `- [Frequently asked questions](${knowledge.keyPages.faq})`,
    `- [About](${knowledge.keyPages.about})`,
    `- [Contact](${knowledge.keyPages.contact})`,
    `- [Request a quote](${knowledge.keyPages.quote})`,
    ``,
    `## Machine-readable data`,
    ``,
    `- [Business knowledge (JSON)](${siteConfig.url}/ai/business.json)`,
    `- [Pricing catalogue (JSON)](${knowledge.pricing.feed})`,
    `- [Sitemap](${knowledge.keyPages.sitemap})`,
    ``,
    `## How quoting works`,
    ``,
  );

  for (const [index, step] of knowledge.process.entries()) {
    lines.push(`${index + 1}. ${step}`);
  }

  lines.push(``, ...knowledge.limitations.map((item) => `- ${item}`), ``);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
