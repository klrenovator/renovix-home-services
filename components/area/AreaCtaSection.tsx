import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { localizeHref } from "@/data/navigation";

type AreaCtaSectionProps = {
  name: string;
  lang: string;
};

export function AreaCtaSection({ name, lang }: AreaCtaSectionProps) {
  const whatsappHref = getWhatsAppHref(lang);

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
            <p className="eyebrow-light">Get a Free Quote in {name}</p>
            <h2 className="h2-section mt-3 text-white">
              Planning work in {name}? Start with a free quotation.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Tell us about the property and the work you have in mind — photos help.
              We&apos;ll arrange an assessment, answer your questions and provide a written
              quotation with clear scope and schedule.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={localizeHref("/quote", lang)}
                variant="primary"
                icon={<IconArrowRight className="h-4 w-4" />}
              >
                Request a Quote
              </Button>
              <WhatsAppButton href={whatsappHref} variant="secondary" />
            </div>

            <p className="mt-5 text-xs text-white/60">
              Contact placeholder: {siteConfig.whatsapp}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
