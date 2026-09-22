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

  // Sub-services: one page per bookable scope of work. Listed in full (51)
  // because they are the most specific commercial surface on the site and the
  // pages an assistant should cite for a narrow "do they do X / what does X
  // cost" question. Names, urls and price notes all come from the registry.
  lines.push(
    ``,
    `## Sub-services (${knowledge.subServices.scopes.length} specific scopes, indicative starting prices)`,
    ``,
    knowledge.subServices.description,
    ``,
  );

  for (const scope of knowledge.subServices.scopes) {
    const price = scope.priceNote ? `: ${scope.priceNote}` : "";
    lines.push(`- [${scope.name}](${scope.url}) — under ${scope.service}${price}`);
  }

  // Phase 42 — every problem guide, not a sample. Until now this section
  // listed `slice(0, 12)` of the 57 guides behind an index link, while
  // `/ai/business.json` carried all 57 and every other family here was
  // complete (10 services, 51 sub-services, 2 regions, 53 areas, 12 guides,
  // 28 projects). An assistant reading only this document — the one written
  // for it — could cite a fifth of the symptom corpus and had to crawl the
  // index to find the rest. The data was already built and already trusted;
  // only the rendering was incomplete.
  //
  // The groups are the same ten categories `/problems/` itself uses, and both
  // the grouping and the titles come from the registry via
  // `knowledge.problems.guides` — no count, label or URL is typed here, so
  // removing a guide from the registry removes it from this feed at the next
  // build.
  const problemGroups: {
    label: string;
    guides: { title: string; url: string }[];
  }[] = [];

  for (const guide of knowledge.problems.guides) {
    // `problemDetails` is concatenated category by category, so walking the
    // list in order and opening a group on first sight reproduces the
    // registry's own category order without re-reading it.
    let group = problemGroups.find((item) => item.label === guide.categoryLabel);
    if (!group) {
      group = { label: guide.categoryLabel, guides: [] };
      problemGroups.push(group);
    }
    group.guides.push(guide);
  }

  lines.push(
    ``,
    `## Problem guides (${knowledge.problems.guides.length} guides, symptoms, causes, solutions)`,
    ``,
    `What each problem means, common causes, warning signs, possible solutions and when professional help is needed:`,
    ``,
    `- [All problem guides](${knowledge.problems.index})`,
    ``,
  );

  for (const group of problemGroups) {
    lines.push(`### ${group.label} — ${group.guides.length} guides`, ``);

    for (const guide of group.guides) {
      lines.push(`- [${guide.title}](${guide.url})`);
    }

    lines.push(``);
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

  // Real project portfolio: the evidence-of-work surface. Listed in full —
  // one page per published project — straight from the registry the pages
  // render, the same list `/ai/business.json` carries, so an assistant asked
  // "have they done this kind of work before?" can cite the actual job rather
  // than an index page. A project page exists only for work with a real
  // photograph, and each page shows only the details the business supplied,
  // so nothing here can claim a location, date or material the site does not.
  lines.push(
    ``,
    `## Projects (${knowledge.projects.published.length} published jobs)`,
    ``,
    `Real completed work, documented with its own photographs.`,
    ``,
    `- [All projects](${knowledge.projects.index})`,
    ``,
  );

  for (const project of knowledge.projects.published) {
    lines.push(`- [${project.title}](${project.url})`);
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
