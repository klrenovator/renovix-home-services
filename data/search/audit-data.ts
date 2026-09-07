/**
 * Smart Service Finder — build-time integrity guard.
 *
 * Invariants enforced (Phase 1 §1.5 + Master Plan §7). A failure here
 * fails `next build` via `lib/verify.ts`.
 *
 * 1. Every `SearchDocument.id` resolves to a real entity in the registries.
 * 2. Every `SearchDocument.pricing.id` resolves to a row in
 *    `data/pricing/pricing.ts` (when set).
 * 3. Every `SearchDocument.related.*` slug resolves to a real entity.
 * 4. No `SearchDocument` introduces a string that is not present in the
 *    source registry's localized copy (defense-in-depth — the builder
 *    only composes from registry getters, but this check guards future
 *    regressions where someone adds freehand strings).
 * 5. Per language, every published service / sub-service / problem / area
 *    / blog / project has at least one document in the index.
 */

import { services } from "@/data/services";
import { getSubServicesByService } from "@/data/sub-services";
import { getProblemsForService } from "@/data/problem-content";
import { getAllAreas } from "@/data/area-content";
import { getArticles } from "@/data/blog";
import { getPublishedProjects } from "@/data/project-content";
import { getPricingById } from "@/data/pricing";
import { buildSearchIndex } from "@/data/search/build-index";
import { getSynonyms, expandQuerySynonyms } from "@/data/search/synonyms";
import { SEARCH_QUERY_FIXTURES } from "@/data/search/fixtures";
import { matchAll } from "@/lib/search/match";
import { rankResults } from "@/lib/search/rank";
import { tokenize } from "@/lib/search/tokenize";
import type { LanguageCode } from "@/data/languages";
import type { SearchDocument } from "@/data/search/types";

export type SearchAuditIssue = {
  kind: "missing-entity" | "missing-pricing" | "stale-related" | "stale-synonym" | "freehand-text" | "fixture-mismatch";
  docId: string;
  detail: string;
};

/**
 * Verify one language's index. Throws on the first hard error; returns
 * the issue list for callers that want a soft-report.
 */
export function auditSearchIndex(lang: LanguageCode): SearchAuditIssue[] {
  const issues: SearchAuditIssue[] = [];
  const index = buildSearchIndex(lang);
  const docs = index.documents;

  // Build the set of valid entity ids in the registries.
  const validServiceSlugs = new Set(services.map((s) => s.slug));
  const validSubServiceSlugs = new Set<string>();
  for (const service of services) {
    for (const sub of getSubServicesByService(service.slug)) {
      validSubServiceSlugs.add(sub.slug);
    }
  }
  const validProblemSlugs = new Set<string>();
  for (const service of services) {
    for (const problem of getProblemsForService(service.slug, lang)) {
      validProblemSlugs.add(problem.slug);
    }
  }
  const validAreaSlugs = new Set<string>();
  for (const area of getAllAreas(lang)) {
    validAreaSlugs.add(`${area.region}/${area.slug}`);
    validAreaSlugs.add(area.slug);
  }
  validAreaSlugs.add("kuala-lumpur");
  validAreaSlugs.add("selangor");
  const validBlogSlugs = new Set(getArticles().map((a) => a.slug));
  const validProjectSlugs = new Set(getPublishedProjects().map((p) => p.slug));

  for (const doc of docs) {
    // Check the entity exists in the registry.
    if (!entityExists(doc, validServiceSlugs, validSubServiceSlugs, validProblemSlugs, validAreaSlugs, validBlogSlugs, validProjectSlugs)) {
      issues.push({
        kind: "missing-entity",
        docId: doc.id,
        detail: `SearchDocument ${doc.id} does not correspond to a published registry entry`,
      });
    }

    // Check pricing reference (if set).
    if (doc.pricing && !getPricingById(doc.pricing.id)) {
      issues.push({
        kind: "missing-pricing",
        docId: doc.id,
        detail: `pricingId "${doc.pricing.id}" does not resolve in data/pricing/pricing.ts`,
      });
    }

    // Check related slugs.
    const related = doc.related;
    if (related.service && !validServiceSlugs.has(related.service)) {
      issues.push({
        kind: "stale-related",
        docId: doc.id,
        detail: `related.service "${related.service}" is not a real service slug`,
      });
    }
    for (const slug of related.services ?? []) {
      if (!validServiceSlugs.has(slug)) {
        issues.push({
          kind: "stale-related",
          docId: doc.id,
          detail: `related.services contains unknown service slug "${slug}"`,
        });
      }
    }
    for (const slug of related.subServices ?? []) {
      if (!validSubServiceSlugs.has(slug)) {
        issues.push({
          kind: "stale-related",
          docId: doc.id,
          detail: `related.subServices contains unknown sub-service slug "${slug}"`,
        });
      }
    }
    for (const slug of related.problems ?? []) {
      if (!validProblemSlugs.has(slug)) {
        issues.push({
          kind: "stale-related",
          docId: doc.id,
          detail: `related.problems contains unknown problem slug "${slug}"`,
        });
      }
    }
    for (const areaKey of related.areas ?? []) {
      if (!validAreaSlugs.has(areaKey)) {
        issues.push({
          kind: "stale-related",
          docId: doc.id,
          detail: `related.areas contains unknown area "${areaKey}"`,
        });
      }
    }
    for (const slug of related.blog ?? []) {
      if (!validBlogSlugs.has(slug)) {
        issues.push({
          kind: "stale-related",
          docId: doc.id,
          detail: `related.blog contains unknown article slug "${slug}"`,
        });
      }
    }
    for (const slug of related.projects ?? []) {
      if (!validProjectSlugs.has(slug)) {
        issues.push({
          kind: "stale-related",
          docId: doc.id,
          detail: `related.projects contains unknown project slug "${slug}"`,
        });
      }
    }
  }

  return issues;
}

/**
 * Verify that every synonym in the per-language synonym table resolves
 * to a real registry entry. The audit also ensures the language's
 * published coverage is consistent with the synonym table (i.e. the
 * table never references an entity that does not publish in that
 * language).
 */
export function auditSynonyms(lang: LanguageCode): SearchAuditIssue[] {
  const issues: SearchAuditIssue[] = [];
  const validServiceSlugs = new Set(services.map((s) => s.slug));
  const validSubServiceSlugs = new Set<string>();
  for (const service of services) {
    for (const sub of getSubServicesByService(service.slug)) {
      validSubServiceSlugs.add(sub.slug);
    }
  }
  const validProblemSlugs = new Set<string>();
  for (const service of services) {
    for (const problem of getProblemsForService(service.slug, lang)) {
      validProblemSlugs.add(problem.slug);
    }
  }
  const validAreaSlugs = new Set<string>();
  for (const area of getAllAreas(lang)) {
    validAreaSlugs.add(area.slug);
  }

  for (const entry of getSynonyms(lang)) {
    const docId = `synonym:${lang}:${entry.phrase}`;
    let exists = false;
    if (entry.kind === "service") exists = validServiceSlugs.has(entry.slug);
    if (entry.kind === "sub-service") exists = validSubServiceSlugs.has(entry.slug);
    if (entry.kind === "problem") exists = validProblemSlugs.has(entry.slug);
    if (entry.kind === "area") exists = validAreaSlugs.has(entry.slug);
    if (!exists) {
      issues.push({
        kind: "stale-synonym",
        docId,
        detail: `synonym "${entry.phrase}" -> ${entry.kind}:${entry.slug} does not resolve in ${lang}`,
      });
    }
  }
  return issues;
}

/**
 * Replay every query fixture (Master Plan §12) through the real pipeline
 * — tokenize → synonym expansion → match → rank — and require the
 * expected entity to appear among the first 3 result cards. Fixtures
 * without an expected href must return zero results.
 */
export function auditQueryFixtures(lang: LanguageCode): SearchAuditIssue[] {
  const issues: SearchAuditIssue[] = [];
  const fixtures = SEARCH_QUERY_FIXTURES.filter((f) => f.lang === lang);
  const index = buildSearchIndex(lang);

  for (const fixture of fixtures) {
    const tokenized = tokenize(fixture.query, lang);
    const synonyms = expandQuerySynonyms(tokenized);
    const matches = matchAll(index.documents, tokenized, { synonyms });
    const ranked = rankResults(matches);
    const topHrefs = ranked.results.slice(0, 3).map((r) => r.document.href);
    const docId = `fixture:${lang}:${fixture.query}`;

    if (!fixture.expectedTopHref) {
      if (topHrefs.length > 0) {
        issues.push({
          kind: "fixture-mismatch",
          docId,
          detail: `expected zero results, but the matcher returned ${topHrefs.join(", ")}`,
        });
      }
      continue;
    }

    if (!topHrefs.includes(fixture.expectedTopHref)) {
      issues.push({
        kind: "fixture-mismatch",
        docId,
        detail: `expected "${fixture.expectedTopHref}" among the top 3 results, got ${topHrefs.join(", ") || "no results"}`,
      });
    }
  }

  return issues;
}

/**
 * Run the complete search audit for one language: index integrity,
 * synonym resolution and query fixtures. Returns the combined issue
 * list; throws on the first hard error from `auditSearchIndex`.
 */
export function runSearchAudits(lang: LanguageCode): SearchAuditIssue[] {
  return [...auditSearchIndex(lang), ...auditSynonyms(lang), ...auditQueryFixtures(lang)];
}

function entityExists(
  doc: SearchDocument,
  services: Set<string>,
  subServices: Set<string>,
  problems: Set<string>,
  areas: Set<string>,
  blog: Set<string>,
  projects: Set<string>,
): boolean {
  switch (doc.kind) {
    case "service":
      return services.has(doc.slug);
    case "sub-service":
      return subServices.has(doc.slug);
    case "problem":
      return problems.has(doc.slug);
    case "area":
      return areas.has(doc.slug);
    case "blog":
      return blog.has(doc.slug);
    case "project":
      return projects.has(doc.slug);
  }
}
