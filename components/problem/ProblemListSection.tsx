import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProblemListSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  icon: ReactNode;
  tone?: "surface" | "white";
};

export function ProblemListSection({
  eyebrow,
  title,
  description,
  items,
  icon,
  tone = "surface",
}: ProblemListSectionProps) {
  return (
    <section className={`section ${tone === "surface" ? "section-surface" : "bg-white"}`}>
      <div className="container-app">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item} className="card flex h-full items-start gap-3 p-5">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-brand">
                {icon}
              </span>
              <p className="text-sm leading-6 text-secondary">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
