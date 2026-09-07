/**
 * Smart Service Finder — Results page.
 *
 * Server-rendered route at `/{lang}/search/?q=…`. It:
 *   1. Tokenizes the query (Latin + CJK, mixed-language support)
 *   2. Scores every document in the language's `SearchIndex`
 *   3. Ranks the candidates (per-kind + total caps, dedup by URL)
 *   4. Composes result cards (one per match)
 *   5. Falls back to a "no results" panel when nothing matched
 *   6. Emits full SEO metadata: self-canonical, four hreflang alternates,
 *      WebPage + BreadcrumbList + (if results) one ItemList node
 *
 * The query-string variant of the URL is `noindex, follow` to keep the
 * sitemap clean (the base route is `index, follow`).
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageSchema } from "@/components/seo/PageSchema";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { ResultCard } from "@/components/search/ResultCard";
import { NoResultPanel } from "@/components/search/NoResultPanel";
import { SmartSearchBar } from "@/components/search/SmartSearchBar";
import { getLanguage, languages } from "@/data/languages";
import { getSearchIndex } from "@/data/search";
import { getDictionary } from "@/i18n";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";
import { tokenize } from "@/lib/search/tokenize";
import { matchAll } from "@/lib/search/match";
import { rankResults } from "@/lib/search/rank";
import { composeResults } from "@/lib/search/results";
import { buildEmptyState } from "@/lib/search/empty-state";
import { expandQuerySynonyms } from "@/data/search/synonyms";

type SearchPageProps = {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { lang } = await params;
  const { q } = await searchParams;
  const language = getLanguage(lang);
  if (!language) return {};

  const code = language.code;
  const t = getDictionary(code);
  const query = typeof q === "string" ? q : Array.isArray(q) ? q[0] ?? "" : "";

  const title = query
    ? `${t.search.resultsHeading.replace("{query}", query)} | ${t.meta.siteName}`
    : `${t.search.resultsHeadingNone} | ${t.meta.siteName}`;

  const description = t.search.auditDisclosure;

  // `noindex, follow` on the query-string variant. The base route is
  // `index, follow` so search engines can discover the search feature.
  const hasQuery = Boolean(query.trim());

  return buildPageMetadata({
    lang: code,
    path: "/search/",
    title,
    description,
    availableLanguages: languages.map((l) => l.code),
    noIndex: hasQuery,
  });
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const { lang } = await params;
  const { q } = await searchParams;
  const language = getLanguage(lang);
  if (!language) notFound();

  const code = language.code;
  const t = getDictionary(code);
  const query = (typeof q === "string" ? q : Array.isArray(q) ? q[0] ?? "" : "").trim();

  // Empty query → still render the page (with the search bar), but
  // show no results — this is a useful landing page.
  const tokenized = tokenize(query, code);
  const synonyms = expandQuerySynonyms(tokenized);
  const index = getSearchIndex(code);
  const matches = matchAll(index.documents, tokenized, { synonyms });
  const ranked = rankResults(matches);
  const cards = composeResults(ranked.results, code);

  const hasResults = cards.length > 0;
  const emptyState = buildEmptyState(code, query);

  const resultsHeading = query
    ? t.search.resultsHeading.replace("{query}", query)
    : t.search.resultsHeadingNone;
  const resultsMeta = hasResults
    ? t.search.resultsMeta
        .replace("{shown}", String(cards.length))
        .replace("{total}", String(ranked.totalCandidates))
    : "";

  return (
    <>
      <PageSchema
        lang={code}
        path="/search/"
        name={resultsHeading}
        description={t.search.auditDisclosure}
        breadcrumbs={[
          { name: t.common.home, url: absoluteUrl(code, "/") },
          { name: t.search.inputLabel },
        ]}
      />

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="container-app relative z-10 py-12 sm:py-16 lg:py-20">
          <Breadcrumbs
            lang={code}
            inverse
            items={[{ label: t.common.home, href: "/" }, { label: t.search.inputLabel }]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="eyebrow text-amber-200">{t.search.inputLabel}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {resultsHeading}
            </h1>
            <p className="mt-3 text-base text-white/80 sm:text-lg">
              {t.search.helperText}
            </p>
          </div>
          <div className="mt-6 max-w-3xl">
            <SmartSearchBar
              lang={code}
              initialQuery={query}
              variant="hero"
            />
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container-app">
          {hasResults ? (
            <>
              {resultsMeta ? (
                <p className="mb-6 text-sm text-slate-500">{resultsMeta}</p>
              ) : null}
              <div className="grid gap-6 lg:grid-cols-2">
                {cards.map((card) => (
                  <ResultCard key={card.href} card={card} lang={code} />
                ))}
              </div>
            </>
          ) : (
            <NoResultPanel state={emptyState} />
          )}

          <p className="mt-10 text-xs leading-relaxed text-slate-500">
            {t.search.auditDisclosure}
          </p>
        </div>
      </section>
    </>
  );
}
