import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons } from "@/components/icons";
import { problems } from "@/data/problems";

export function ProblemSection() {
  return (
    <section id="problems" className="section scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow="Common Home Issues"
          title="Having a Problem at Home? We Can Help."
          description="These are some of the home problems we can assess and support you with across the Klang Valley."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = serviceIcons[problem.icon];
            return (
              <div
                key={problem.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-soft"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{problem.label}</span>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-secondary">
          The dedicated problem pages for these issues are planned for a later phase.
        </p>
      </div>
    </section>
  );
}
