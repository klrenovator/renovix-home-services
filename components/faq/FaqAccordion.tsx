import Link from "next/link";
import { IconArrowRight, IconChevronDown } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { resolveFaqLinks } from "@/lib/faq-links";
import type { SiteFaq } from "@/data/site-faqs";

type FaqAccordionProps = {
  faqs: SiteFaq[];
  lang: string;
};

export function FaqAccordion({ faqs, lang }: FaqAccordionProps) {
  const code = getLanguageCode(lang);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        // Phase 51 — every link is resolved from the target's own registry
        // (name, href and translation availability) by `resolveFaqLinks`, so an
        // answer links the page its own copy names, in its own language, and a
        // target without a complete translation degrades to plain text instead
        // of a dead link.
        const links = resolveFaqLinks(faq, code);

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
              {links.length > 0 ? (
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.label}
                      <IconArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </details>
        );
      })}
    </div>
  );
}
