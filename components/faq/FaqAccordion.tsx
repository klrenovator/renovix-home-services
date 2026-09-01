import Link from "next/link";
import { IconArrowRight, IconChevronDown } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import { getServiceBySlug } from "@/data/services";
import type { SiteFaq } from "@/data/site-faqs";

type FaqAccordionProps = {
  faqs: SiteFaq[];
  lang: string;
};

export function FaqAccordion({ faqs, lang }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const relatedService = faq.relatedServiceSlug
          ? getServiceBySlug(faq.relatedServiceSlug)
          : undefined;

        return (
          <details
            key={faq.id}
            className="group rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-soft sm:px-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-base">
              {faq.question}
              <IconChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
            </summary>
            <div className="pr-7">
              <p className="mt-3 text-sm leading-6 text-secondary">{faq.answer}</p>
              {relatedService ? (
                <Link
                  href={localizeHref(relatedService.path, lang)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Explore {relatedService.name}
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </details>
        );
      })}
    </div>
  );
}
