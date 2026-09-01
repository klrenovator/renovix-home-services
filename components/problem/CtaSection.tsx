import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { localizeHref } from "@/data/navigation";
import type { ProblemDetail } from "@/data/problem-content/types";

type CtaSectionProps = {
  problem: ProblemDetail;
  lang: string;
};

export function CtaSection({ problem, lang }: CtaSectionProps) {
  const whatsappHref = getWhatsAppHref(lang);

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
            <p className="eyebrow-light">Get a Free Quote</p>
            <h2 className="h2-section mt-3 text-white">
              Need help with {problem.name.toLowerCase()} in Kuala Lumpur &amp; Selangor?
            </h2>
            <p className="mt-4 text-base leading-7 text-white/75">
              Tell us about the problem and share a few photos if you have them. Our team can
              assess the job, answer your questions and guide you on the next step and
              quotation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={localizeHref("/#contact", lang)}
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
