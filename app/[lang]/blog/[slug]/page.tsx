import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/blog/ArticlePage";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { articleLanguages, getArticle, getArticleText, getArticles } from "@/data/blog";
import { buildPageMetadata } from "@/i18n/seo";

type ArticleRouteProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return languages.flatMap((language) =>
    getArticles()
      .filter((article) => articleLanguages(article.slug).includes(language.code))
      .map((article) => ({ lang: language.code, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: ArticleRouteProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  const article = getArticle(slug);

  if (!language || !article) {
    return {};
  }

  const text = getArticleText(article, language.code);

  return buildPageMetadata({
    lang: language.code,
    path: `/blog/${article.slug}/`,
    title: text.title,
    description: text.metaDescription,
    ogTitle: text.h1,
    ogDescription: text.excerpt,
    availableLanguages: articleLanguages(article.slug),
    ...(article.image
      ? {
          ogImage: {
            url: article.image.src,
            width: article.image.width,
            height: article.image.height,
            alt: article.image.alt,
          },
        }
      : {}),
  });
}

export default async function ArticleRoute({ params }: ArticleRouteProps) {
  const { lang, slug } = await params;
  const language = getLanguage(lang);
  const article = getArticle(slug);

  if (!language || !article || !articleLanguages(article.slug).includes(language.code)) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd article={article} lang={language.code} />
      <ArticlePage article={article} lang={language.code} />
    </>
  );
}
