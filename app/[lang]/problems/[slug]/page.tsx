import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProblemPage } from "@/components/problem/ProblemPage";
import { ProblemJsonLd } from "@/components/problem/ProblemJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { hasTranslation, languagesWithTranslation } from "@/i18n/coverage";
import { buildPageMetadata } from "@/i18n/seo";
import { getProblemDetail, problemDetails } from "@/data/problem-content";

type ProblemPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    problemDetails
      .filter((problem) => hasTranslation("problem", problem.slug, language.code))
      .map((problem) => ({
        lang: language.code,
        slug: problem.slug,
      })),
  );
}

export async function generateMetadata({
  params,
}: ProblemPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  const problem = getProblemDetail(slug);

  if (!language || !problem) {
    return {};
  }

  return buildPageMetadata({
    lang: language.code,
    path: `/problems/${problem.slug}/`,
    title: problem.title,
    description: problem.metaDescription,
    availableLanguages: languagesWithTranslation("problem", problem.slug),
  });
}

export default async function ProblemDetailPage({ params }: ProblemPageProps) {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  const problem = getProblemDetail(slug);

  if (!language || !problem || !hasTranslation("problem", problem.slug, language.code)) {
    notFound();
  }

  return (
    <>
      <ProblemJsonLd problem={problem} lang={lang} />
      <ProblemPage problem={problem} lang={lang} />
    </>
  );
}
