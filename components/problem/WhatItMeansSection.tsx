import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSparkles } from "@/components/icons";
import type { ProblemDetail } from "@/data/problem-content/types";

type WhatItMeansSectionProps = {
  problem: ProblemDetail;
};

export function WhatItMeansSection({ problem }: WhatItMeansSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-app grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="What This Problem Means"
            title={`Understanding ${problem.name}`}
            description="A clear, honest explanation of what is happening so you know what you are dealing with."
          />
          <div className="mt-6 space-y-4 text-base leading-7 text-secondary">
            {problem.whatItMeans.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:pt-14">
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">The short answer</p>
            <h3 className="h3-card mt-3 text-navy">{problem.name}</h3>
            <p className="mt-3 text-sm leading-6 text-secondary">{problem.subtitle}</p>
            <ul className="mt-5 space-y-2.5">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-brand">
                  <IconSparkles className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-6 text-secondary">
                  We explain the cause and the fix, not just the symptom.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
