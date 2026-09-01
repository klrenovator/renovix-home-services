import Link from "next/link";
import { IconArrowRight, IconChevronDown } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizeHref } from "@/data/navigation";
import { siteFaqs } from "@/data/site-faqs";

type FAQPreviewProps = {
  lang: string;
};

const previewFaqs = siteFaqs.slice(0, 6);

export function FAQPreview({ lang }: FAQPreviewProps) {
  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions before you start"
              description="A short selection of the questions homeowners ask most often. Visit the full FAQ for service-specific answers, areas and quote guidance."
            />
            <Link
              href={localizeHref("/faq", lang)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View all frequently asked questions
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {previewFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-base">
                  {faq.question}
                  <IconChevronDown className="h-5 w-5 shrink-0 text-brand transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-6 text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
