import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getQuoteHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";

type CTASectionProps = {
  lang: string;
};

export function CTASection({ lang }: CTASectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const cta = t.home.ctaSection;

  return (
    <section id="contact" className="section bg-white scroll-mt-24">
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
            <p className="eyebrow-light">{cta.eyebrow}</p>
            <h2 className="h2-section mt-3 text-white">{cta.title}</h2>
            <p className="mt-4 text-base leading-7 text-white/75">{cta.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={getQuoteHref(code)}
                variant="primary"
                icon={<IconArrowRight className="h-4 w-4" />}
              >
                {t.cta.requestQuote}
              </Button>
              <WhatsAppButton
                href={getWhatsAppHref(code)}
                variant="secondary"
                label={t.cta.whatsappUs}
              />
            </div>

            <p className="mt-5 text-xs text-white/60">{cta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
