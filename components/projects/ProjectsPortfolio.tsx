"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconCamera, serviceIcons } from "@/components/icons";
import type { ProjectCategoryId } from "@/data/projects";

export type PortfolioCategory = {
  id: ProjectCategoryId;
  label: string;
  href: string | null;
  icon: keyof typeof serviceIcons;
};

export type PortfolioItem = {
  id: string;
  category: ProjectCategoryId;
};

export type PortfolioLabels = {
  allCategories: string;
  filterAria: string;
  showingPrefix: string;
  showingSuffixOne: string;
  showingSuffixMany: string;
  showingNote: string;
  imagePlaceholder: string;
  statusLabel: string;
  fallbackCategory: string;
  exploreServicePrefix: string;
  titleSuffix: string;
  description: string;
};

type ProjectsPortfolioProps = {
  categories: PortfolioCategory[];
  items: PortfolioItem[];
  labels: PortfolioLabels;
};

type ProjectFilter = "all" | ProjectCategoryId;

export function ProjectsPortfolio({
  categories,
  items,
  labels,
}: ProjectsPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const shown = useMemo(
    () =>
      activeFilter === "all"
        ? items
        : items.filter((item) => item.category === activeFilter),
    [activeFilter, items],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label={labels.filterAria}>
        <FilterButton
          isActive={activeFilter === "all"}
          label={labels.allCategories}
          onClick={() => setActiveFilter("all")}
        />
        {categories.map((category) => (
          <FilterButton
            key={category.id}
            isActive={activeFilter === category.id}
            label={category.label}
            onClick={() => setActiveFilter(category.id)}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-secondary" aria-live="polite">
        {labels.showingPrefix} {shown.length}{" "}
        {shown.length === 1 ? labels.showingSuffixOne : labels.showingSuffixMany}{" "}
        {labels.showingNote}
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => {
          const category = categories.find((entry) => entry.id === item.category);
          const Icon = category ? serviceIcons[category.icon] : IconCamera;

          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-100 text-slate-400">
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-accent/15"
                />
                <div className="relative flex flex-col items-center gap-2 text-center">
                  <Icon className="h-9 w-9 text-brand/60" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                    {labels.imagePlaceholder}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-bold text-navy">
                    {category?.label ?? labels.fallbackCategory}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {labels.statusLabel}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-navy">
                  {category?.label ?? labels.fallbackCategory} {labels.titleSuffix}
                </h3>
                <p className="mt-2 text-sm leading-6 text-secondary">
                  {labels.description}
                </p>
                {category?.href ? (
                  <Link
                    href={category.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {labels.exploreServicePrefix} {category.label}
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`rounded-full border px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isActive
          ? "border-navy bg-navy text-white"
          : "border-slate-200 bg-white text-secondary hover:border-brand/40 hover:text-navy"
      }`}
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
