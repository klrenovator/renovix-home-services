import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import type { LegalSection } from "@/i18n/types";

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
  lang: string;
};

/**
 * A short, honest legal-information page. The copy describes the data flow and
 * quoting process this site actually implements; it does not invent company
 * registration details or promise legal rights beyond the applicable law.
 */
export function LegalPage({
  title,
  description,
  sections,
  lang,
}: LegalPageProps) {
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
            <IconArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
            {t.cta.backToHome}
          </Link>
        </div>

        <SectionHeading
          eyebrow={t.legalPage.eyebrow}
          title={title}
          description={description}
          headingLevel={1}
        />

        <article className="mt-10 max-w-3xl space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight text-navy">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-secondary">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-secondary">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            href={localizedHref("/quote", code)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" aria-hidden="true" />}
          >
            {t.cta.getFreeQuote}
          </Button>
          <WhatsAppButton href={getWhatsAppHref()} label={t.cta.whatsappUs} />
        </div>
      </div>
    </section>
  );
}
