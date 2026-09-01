import { Button, WhatsAppButton } from "@/components/ui/Button";
import { ContactCtaLine } from "@/components/ui/ContactCtaLine";
import { IconArrowRight, IconPhone } from "@/components/icons";
import { getPhoneHref, getWhatsAppHref } from "@/data/site";
import { format, getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import type { ProblemDetail } from "@/data/problem-content/types";

type CtaSectionProps = {
  problem: ProblemDetail;
  lang: string;
};

export function CtaSection({ problem, lang }: CtaSectionProps) {
  const t = getDictionary(lang);

  return (
    <section className="section section-surface">
      <div className="container-app">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/20"
          />

          <div className="relative max-w-2xl">
            <p className="eyebrow-light">{t.common.freeQuoteEyebrow}</p>
            <h2 className="h2-section mt-3 text-white">
              {format(t.problemPage.ctaHeading, { name: problem.name })}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              {t.problemPage.ctaDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={localizedHref("/quote", lang)}
                variant="primary"
                icon={<IconArrowRight className="h-4 w-4" />}
              >
                {t.cta.requestQuote}
              </Button>
              <WhatsAppButton
                href={getWhatsAppHref()}
                variant="secondary"
                label={t.cta.whatsappUs}
              />
              <Button
                href={getPhoneHref()}
                variant="outline"
                external
                className="border-white/40 text-white hover:bg-white/10"
                icon={<IconPhone className="h-4 w-4" />}
              >
                {t.cta.callNow}
              </Button>
            </div>

            <ContactCtaLine lang={lang} inverse />
          </div>
        </div>
      </div>
    </section>
  );
}
