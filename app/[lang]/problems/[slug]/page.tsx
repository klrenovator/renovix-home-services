import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProblemPage } from "@/components/problem/ProblemPage";
import { ProblemJsonLd } from "@/components/problem/ProblemJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { getProblemDetail, problemDetails } from "@/data/problem-content";
import { siteConfig } from "@/data/site";

type ProblemPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    problemDetails.map((problem) => ({
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

  const canonicalUrl = `${siteConfig.url}/${lang}/problems/${problem.slug}/`;

  return {
    title: {
      absolute: problem.title,
    },
    description: problem.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: problem.title,
      description: problem.metaDescription,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ProblemDetailPage({ params }: ProblemPageProps) {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  const problem = getProblemDetail(slug);

  if (!language || !problem) {
    notFound();
  }

  return (
    <>
      <ProblemJsonLd problem={problem} lang={lang} />
      <ProblemPage problem={problem} lang={lang} />
    </>
  );
}
