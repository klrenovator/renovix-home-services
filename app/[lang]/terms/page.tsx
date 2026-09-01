import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getLanguage } from "@/data/languages";

type TermsPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms & Conditions",
    description:
      "Terms & Conditions for using the Renovix Home Services website and services.",
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Terms & Conditions"
      description="The complete Terms & Conditions will be added in a later phase. Contact details remain placeholders until they are provided."
      lang={lang}
    />
  );
}
