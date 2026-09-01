import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChevronDown } from "@/components/icons";
import type { AreaFaq } from "@/data/area-content/types";

type AreaFaqSectionProps = {
  name: string;
  faqs: AreaFaq[];
};

export function AreaFaqSection({ name, faqs }: AreaFaqSectionProps) {
  return (
    <section className="section section-surface">
      <div className="container-app grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="FAQs"
            title={`${name} — Frequently Asked Questions`}
            description="Practical answers for property owners in the area."
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
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
    </section>
  );
}
