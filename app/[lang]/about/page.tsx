import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getLanguage } from "@/data/languages";
import { siteConfig } from "@/data/site";

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description:
      "Renovix Home Services is a home renovation and improvement service for homes in Kuala Lumpur, Selangor and the Klang Valley.",
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <PagePlaceholder
      eyebrow="About Us"
      title="About Renovix Home Services"
      description={siteConfig.tagline}
      lang={lang}
    />
  );
}
