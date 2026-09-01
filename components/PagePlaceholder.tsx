import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons";
import { getWhatsAppHref } from "@/data/site";
import { localizeHref } from "@/data/navigation";

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
  backLabel = "Back to Home",
}: PagePlaceholderProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-app">
        <div className="mb-6">
          <Link
            href={localizeHref("/", lang)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
            {backLabel}
          </Link>
        </div>

        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={localizeHref("/#contact", lang)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            Get a Free Quote
          </Button>
          <WhatsAppButton href={getWhatsAppHref(lang)} />
        </div>

        <p className="mt-8 max-w-2xl rounded-xl border border-slate-200 bg-surface p-4 text-sm leading-6 text-secondary">
          This page is being prepared for a later project phase. The full service
          architecture and detailed content will be added in the next phase.
        </p>
      </div>
    </section>
  );
}
