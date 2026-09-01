import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { localizedHref } from "@/i18n/hrefs";

type AreaCtaSectionProps = {
  name: string;
  lang: string;
  /** Localized overrides used by the translated service-areas index. */
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  whatsappLabel?: string;
  note?: string;
};

export function AreaCtaSection({
  name,
  lang,
  eyebrow,
  title,
  description,
  primaryLabel = "Request a Quote",
  whatsappLabel = "WhatsApp Us",
  note,
}: AreaCtaSectionProps) {
  const code = getLanguageCode(lang);
  const whatsappHref = getWhatsAppHref(code);

  return (
    <section id="contact" className="section section-surface scroll-mt-24">
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
            <p className="eyebrow-light">{eyebrow ?? `Get a Free Quote in ${name}`}</p>
            <h2 className="h2-section mt-3 text-white">
              {title ?? `Planning work in ${name}? Start with a free quotation.`}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              {description ??
                "Tell us about the property and the work you have in mind — photos help. We'll arrange an assessment, answer your questions and provide a written quotation with clear scope and schedule."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={localizedHref("/quote", code)}
                variant="primary"
                icon={<IconArrowRight className="h-4 w-4" />}
              >
                {primaryLabel}
              </Button>
              <WhatsAppButton
                href={whatsappHref}
                variant="secondary"
                label={whatsappLabel}
              />
            </div>

            <p className="mt-5 text-xs text-white/60">
              {note ?? `Contact placeholder: ${siteConfig.whatsapp}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
