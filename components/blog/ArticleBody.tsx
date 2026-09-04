import { IconCheck } from "@/components/icons";
import { getDictionary } from "@/i18n";
import {
  formatPricingAmount,
  getPricingDisclaimer,
  getPricingUnitsLabel,
} from "@/data/pricing";
import { getAllPricing } from "@/data/pricing";
import type { PricingEntry } from "@/data/pricing/types";
import type { ArticleBlock, ArticleSection } from "@/data/blog/types";

/**
 * Renders an article's authored body blocks.
 *
 * The one block that is *not* authored is `pricing`: it resolves rows out of
 * the central catalogue for the requested language, so an article can never
 * state a price the price list does not back, and a catalogue revision updates
 * every guide that quotes it.
 */

function localizedRow(id: string, lang: string): PricingEntry | undefined {
  return getAllPricing(lang).find((entry) => entry.id === id);
}

function PricingTable({
  pricingIds,
  note,
  lang,
}: {
  pricingIds: string[];
  note?: string;
  lang: string;
}) {
  const t = getDictionary(lang);
  const rows = pricingIds
    .map((id) => localizedRow(id, lang))
    .filter((row): row is PricingEntry => Boolean(row));

  if (rows.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-100 last:border-0">
                <th scope="row" className="px-5 py-4 align-top font-semibold text-navy">
                  {row.subService}
                  <span className="mt-1 block text-xs font-normal leading-5 text-secondary">
                    {row.scope}
                  </span>
                </th>
                <td className="whitespace-nowrap px-5 py-4 align-top font-semibold text-brand">
                  RM{formatPricingAmount(row.startingPrice)}
                  <span className="ml-1 text-xs font-medium text-secondary">
                    {getPricingUnitsLabel(row.unit, lang)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4">
        {note ? <p className="text-xs leading-5 text-secondary">{note}</p> : null}
        <p className="text-xs leading-5 text-secondary">{t.blogPage.pricingNote}</p>
        <p className="mt-1 text-xs leading-5 text-secondary">{getPricingDisclaimer(lang)}</p>
      </div>
    </div>
  );
}

function Block({ block, lang }: { block: ArticleBlock; lang: string }) {
  if (block.type === "paragraph") {
    return <p className="mt-5 text-base leading-7 text-secondary">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="mt-5 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-7 text-secondary">
            <IconCheck className="mt-1.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="mt-6 space-y-4">
        {block.items.map((item, index) => (
          <li key={item.title} className="card flex gap-4 p-5 sm:p-6">
            <span
              aria-hidden
              className="text-xl font-extrabold leading-none text-brand/30"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="h3-card">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className="mt-6 rounded-2xl border border-brand/20 bg-brand/5 p-5 sm:p-6">
        <h3 className="text-base font-semibold text-navy">{block.title}</h3>
        <p className="mt-2 text-sm leading-6 text-secondary">{block.text}</p>
      </aside>
    );
  }

  if (block.type === "table") {
    return (
      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/70">
              {block.columns.map((column, index) => (
                <th
                  key={`${column}-${index}`}
                  scope="col"
                  className="px-4 py-3 font-semibold text-navy"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-slate-100 last:border-0">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 align-top leading-6 ${
                      cellIndex === 0 ? "font-semibold text-navy" : "text-secondary"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <PricingTable pricingIds={block.pricingIds} note={block.note} lang={lang} />;
}

export function ArticleBody({
  sections,
  lang,
}: {
  sections: ArticleSection[];
  lang: string;
}) {
  return (
    <div className="mt-12 space-y-12">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="h2-section text-navy">{section.heading}</h2>
          {section.blocks.map((block, index) => (
            <Block key={index} block={block} lang={lang} />
          ))}
        </section>
      ))}
    </div>
  );
}
