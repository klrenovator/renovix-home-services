import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  lang: string;
  backLabel?: string;
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  lang,
  backLabel,
}: PagePlaceholderProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-app">
        <div className="mb-6">
          <Link
            href={localizedHref("/", code)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
            {backLabel ?? t.cta.backToHome}
          </Link>
        </div>

        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          headingLevel={1}
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={localizedHref("/quote", code)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            {t.cta.getFreeQuote}
          </Button>
          <WhatsAppButton href={getWhatsAppHref(code)} label={t.cta.whatsappUs} />
        </div>

        <p className="mt-8 max-w-2xl rounded-xl border border-slate-200 bg-surface p-4 text-sm leading-6 text-secondary">
          {t.legalPage.placeholderNote}
        </p>
      </div>
    </section>
  );
}
