import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndexPage } from "@/components/blog/BlogIndexPage";
import { BlogIndexJsonLd } from "@/components/blog/BlogIndexJsonLd";
import { getLanguage, languages } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { buildPageMetadata } from "@/i18n/seo";

type BlogIndexProps = {
  params: Promise<{ lang: string }>;
};

/** Every language publishes the hub, because every article ships in all three. */
export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({ params }: BlogIndexProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/blog/",
    title: t.blogIndex.metaTitle,
    description: t.blogIndex.metaDescription,
    ogDescription: t.blogIndex.ogDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function BlogIndexRoute({ params }: BlogIndexProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  return (
    <>
      <BlogIndexJsonLd lang={language.code} />
      <BlogIndexPage lang={language.code} />
    </>
  );
}
