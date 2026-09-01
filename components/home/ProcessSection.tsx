import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChat, IconCamera, IconClipboard, IconCalendar } from "@/components/icons";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Describe the repair, improvement or renovation work you have in mind for your home.",
    icon: <IconChat className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Share Your Details / Photos",
    description:
      "Send the relevant details and any photos of the affected area to help us understand the scope.",
    icon: <IconCamera className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Receive Assessment & Quotation",
    description:
      "Our team can assess the information and provide guidance on the next step and a quotation.",
    icon: <IconClipboard className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Schedule the Work",
    description:
      "Once the scope and timing are agreed, the work can be arranged at a suitable time.",
    icon: <IconCalendar className="h-6 w-6" />,
  },
];

export function ProcessSection() {
  return (
    <section className="section bg-navy text-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, transparent process"
          description="We keep the quotation process straightforward so you know what to expect at each step."
          inverse
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-accent">
                  {step.number}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  {step.icon}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
