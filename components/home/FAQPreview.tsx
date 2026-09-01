import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChevronDown } from "@/components/icons";

const faqs = [
  {
    question: "What services does Renovix provide?",
    answer:
      "Renovix provides home renovation and improvement services including tiling, welding, electrical, painting, ceiling and partition, plumbing, waterproofing, flooring, renovation and handyman work.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We serve Kuala Lumpur, Selangor and the wider Klang Valley, including the central city area and major Selangor neighbourhoods.",
  },
  {
    question: "Can I request a quotation?",
    answer:
      "Yes. You can tell us what you need and our team can assess the work and guide you on the next step and quotation.",
  },
  {
    question: "Can I send photos of the work?",
    answer:
      "Yes. Photos and clear details of the affected area are very helpful when we assess the scope of the work.",
  },
  {
    question: "Do you work with condos and apartments?",
    answer:
      "Yes. Many home improvement and repair services can be arranged for condominiums, apartments and landed homes.",
  },
  {
    question: "Do you provide multiple services for one renovation project?",
    answer:
      "Yes. We support one-stop home services, so several related jobs can be coordinated through a single point of contact.",
  },
];

export function FAQPreview() {
  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQ Preview"
              title="Common questions before you start"
              description="A short preview of the questions we hear most often. The complete FAQ section is planned for a later phase."
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
      </div>
    </section>
  );
}
