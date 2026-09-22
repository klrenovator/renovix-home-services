import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/HomePage";
import { PageSchema } from "@/components/seo/PageSchema";
import { faqNode } from "@/components/seo/schema";
import { getLanguage, languages } from "@/data/languages";
import { getHomeFaqs } from "@/data/i18n";
import { getDictionary } from "@/i18n";
import { absoluteUrl, buildPageMetadata } from "@/i18n/seo";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({ lang: language.code }));
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    return {};
  }

  const t = getDictionary(language.code);

  return buildPageMetadata({
    lang: language.code,
    path: "/",
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    availableLanguages: languages.map((item) => item.code),
  });
}

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;
  const language = getLanguage(lang);

  if (!language) {
    notFound();
  }

  const code = language.code;
  const t = getDictionary(code);

  // Phase 42 — the homepage renders the first six site FAQs in
  // `FAQPreview`, so it is the one page on the site with visible question and
  // answer copy and no `FAQPage` node for it (`/faq/` and `/quote/` already
  // publish theirs). The same `getHomeFaqs()` array feeds both, so the node
  // describes exactly the questions the page shows — and nothing else: no
  // question is invented for the schema, and no review, rating or claim is
  // added to it.
  const homeFaqs = getHomeFaqs(code);

  return (
    <>
      <PageSchema
        lang={code}
        path="/"
        name={t.home.hero.title}
        description={t.meta.homeDescription}
        extra={[faqNode(absoluteUrl(code, "/"), homeFaqs)]}
      />
      <HomePage lang={code} />
    </>
  );
}
