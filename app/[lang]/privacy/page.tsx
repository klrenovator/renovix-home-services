import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getLanguage } from "@/data/languages";

type PrivacyPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy",
    description:
      "Privacy Policy for Renovix Home Services website and services.",
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;

  if (!getLanguage(lang)) {
    notFound();
  }

  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Privacy Policy"
      description="The complete Privacy Policy will be added in a later phase. Contact details remain placeholders until they are provided."
      lang={lang}
    />
  );
}
