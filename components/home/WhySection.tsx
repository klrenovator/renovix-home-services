import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconHome,
  IconShieldCheck,
  IconChat,
  IconWrench,
  IconLayers,
  IconMapPin,
  IconClipboard,
} from "@/components/icons";

type Benefit = {
  title: string;
  description: string;
  icon: ReactNode;
};

const benefits: Benefit[] = [
  {
    title: "One-stop home services",
    description: "Access several home improvement and repair needs through a single point of contact.",
    icon: <IconHome className="h-6 w-6" />,
  },
  {
    title: "Professional workmanship",
    description: "We focus on clean, careful and skilled work for everyday home projects.",
    icon: <IconShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Clear communication",
    description: "We explain the work, ask the right questions and keep you informed.",
    icon: <IconChat className="h-6 w-6" />,
  },
  {
    title: "Practical solutions",
    description: "Straightforward recommendations that match the needs of your home.",
    icon: <IconWrench className="h-6 w-6" />,
  },
  {
    title: "Multiple home improvement services",
    description: "From tiling and painting to waterproofing and handyman work, many needs are covered.",
    icon: <IconLayers className="h-6 w-6" />,
  },
  {
    title: "KL & Selangor coverage",
    description: "Home services for customers in Kuala Lumpur and across the Klang Valley.",
    icon: <IconMapPin className="h-6 w-6" />,
  },
  {
    title: "Easy quotation process",
    description: "Send the details and photos of the work, and we can guide the next step.",
    icon: <IconClipboard className="h-6 w-6" />,
  },
];

export function WhySection() {
  return (
    <section id="why" className="section section-surface scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow="Why Renovix"
          title="Why Choose Renovix Home Services?"
          description="A practical, customer-focused approach to home renovation and improvement in Kuala Lumpur and Selangor."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="card flex flex-col gap-3 p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-navy">
                {benefit.icon}
              </span>
              <h3 className="h3-card">{benefit.title}</h3>
              <p className="text-sm leading-6 text-secondary">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
