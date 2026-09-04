import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconMapPin,
  IconAlertTriangle,
  IconShieldCheck,
  IconClipboard,
} from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { getDistrictForLocation } from "@/data/locations";
import { formatPricingAmount, getPricingById } from "@/data/pricing";
import type { AreaDetail } from "@/data/area-content/types";

/**
 * Formats a centralized starting price exactly as the catalogue states it:
 * whole ringgit stay whole (`RM80`), decimals keep two places (`RM1.20`).
 */
function formatStartingPrice(id: string): string {
  const entry = getPricingById(id);
  if (!entry) return "RM—";
  return `RM${formatPricingAmount(entry.startingPrice)}`;
}

type AreaAnswerFirstSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaAnswerFirstSection({ area, lang }: AreaAnswerFirstSectionProps) {
  const t = getDictionary(lang);
  const district = getDistrictForLocation(area.slug);
  const regionLabel = area.region === "kuala-lumpur" ? t.common.kualaLumpur : t.common.selangor;

  const districtName = district?.name ?? regionLabel;

  // Answer-first localized content blocks
  const answers = [
    {
      icon: IconMapPin,
      label: t.areaPage.coverageLabel,
      question:
        lang === "ms"
          ? `Adakah Renovix beroperasi di ${area.name}?`
          : lang === "zh"
            ? `Renovix 是否在 ${area.name} 提供服务？`
            : `Are Renovix home services available in ${area.name}?`,
      answer:
        lang === "ms"
          ? `Ya. Kami menyediakan perkhidmatan renovasi, pembaikan paip, pendawaian elektrik, kalis air, jubin dan lantai di seluruh ${area.name}, ${districtName} dan kawasan sekitar Lembah Klang. Lawatan tapak dan penilaian sebut harga dijalankan secara profesional.`
          : lang === "zh"
            ? `是的。我们在 ${area.name}、${districtName} 及整个巴生谷提供房屋装修、水喉水管、电线电路、防水工程、瓷砖铺设及 SPC 地板等专业服务。我们提供上门勘察与透明的报价服务。`
            : `Yes. We actively provide home renovation, plumbing repairs, electrical rewiring, waterproofing, tiling, and SPC flooring across ${area.name}, ${districtName}, and the wider Klang Valley. On-site assessments and consultations are scheduled promptly.`,
    },
    {
      icon: IconShieldCheck,
      label: t.areaPage.pricingLabel,
      question:
        lang === "ms"
          ? `Berapakah kos permulaan untuk kerja rumah di ${area.name}?`
          : lang === "zh"
            ? `${area.name} 的房屋维修与翻新起步价格是多少？`
            : `How much do home services start from in ${area.name}?`,
      // The figures below are read from the centralized pricing catalogue
      // (`data/pricing/pricing.ts`) at render time — they are never typed
      // here, so a catalogue update can never leave this section quoting a
      // stale price on 138 area pages.
      answer:
        lang === "ms"
          ? `Kadar permulaan kami berpandukan harga telus: pemeriksaan paip bermula ${formatStartingPrice("plumbing-callout")}, pembaikan paip dari ${formatStartingPrice("plumbing-pipe-leak-visible")}, mengecat dari ${formatStartingPrice("painting-interior")}/kps, jubin dari ${formatStartingPrice("tiling-floor-ceramic")}/kps, dan lantai SPC dari ${formatStartingPrice("flooring-spc")}/kps. Sebut harga akhir bergantung kepada keadaan tapak, jenis hartanah dan akses.`
          : lang === "zh"
            ? `我们采用全雪隆统一的透明起步费率：水喉排查 ${formatStartingPrice("plumbing-callout")} 起，水管维修 ${formatStartingPrice("plumbing-pipe-leak-visible")} 起，油漆粉刷每平方尺 ${formatStartingPrice("painting-interior")} 起，瓷砖铺设每平方尺 ${formatStartingPrice("tiling-floor-ceramic")} 起，SPC 地板每平方尺 ${formatStartingPrice("flooring-spc")} 起。最终报价根据现场实际状况与出入要求明确列出。`
            : `We follow transparent Klang Valley benchmark rates: plumbing inspection from ${formatStartingPrice("plumbing-callout")}, pipe repairs from ${formatStartingPrice("plumbing-pipe-leak-visible")}, interior painting from ${formatStartingPrice("painting-interior")}/sqft, ceramic tiling from ${formatStartingPrice("tiling-floor-ceramic")}/sqft, and SPC click flooring from ${formatStartingPrice("flooring-spc")}/sqft. Final quotes reflect actual site conditions and property access.`,
    },
    {
      icon: IconAlertTriangle,
      label: t.areaPage.emergencyLabel,
      question:
        lang === "ms"
          ? `Adakah perkhidmatan kecemasan disediakan di ${area.name}?`
          : lang === "zh"
            ? `${area.name} 是否提供紧急故障排查协助？`
            : `Do you provide urgent or emergency repairs in ${area.name}?`,
      answer:
        lang === "ms"
          ? `Kami menyediakan bantuan segera untuk masalah keselamatan kritikal seperti bekalan elektrik terputus/trip, litar pintas, dan kebocoran paip utama pecah. Untuk renovasi penuh dan pemasangan berjadual, kami membuat temujanji penilaian terlebih dahulu.`
          : lang === "zh"
            ? `针对影响居住安全的紧急状况（如总闸跳闸、电线短路冒火花、主水管爆裂与严重漏水），我们提供优先应急响应与排查。对于全屋装修及一般安装工程，则按标准流程安排现场勘测。`
            : `We provide urgent triage for critical safety concerns such as main power tripping, short circuits, and active pipe bursts or severe water leaks. Full house renovations and scheduled upgrades are arranged through standard on-site consultations.`,
    },
    {
      icon: IconClipboard,
      label: t.areaPage.quotationLabel,
      question:
        lang === "ms"
          ? `Bagaimanakah cara mendapatkan sebut harga untuk ${area.name}?`
          : lang === "zh"
            ? `如何获取 ${area.name} 工程的正式报价单？`
            : `How can I request a quotation for work in ${area.name}?`,
      answer:
        lang === "ms"
          ? `Hantarkan gambar, butiran kerosakan atau skop renovasi bersama lokasi anda melalui WhatsApp atau borang sebut harga dalam talian kami. Kami akan memberikan anggaran awal dan mengatur lawatan tapak jika diperlukan.`
          : lang === "zh"
            ? `您可以通过 WhatsApp 或在线报价表单，将房屋现场照片、损坏情况或装修需求连同具体位置发送给我们。我们会先行评估并安排现场勘察，再为您说明正式报价。`
            : `Send photos, descriptions of the issue or scope, and your location via WhatsApp or our online quote form. We review the details, provide clear initial guidance, and arrange an on-site visit for a formal written quotation.`,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areaPage.answerFirstEyebrow}
          title={format(t.areaPage.answerFirstTitle, { name: area.name })}
          description={format(t.areaPage.answerFirstDescription, { name: area.name })}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {answers.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-surface p-6 shadow-soft transition-all hover:border-brand/40"
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold tracking-tight text-navy">
                  {item.question}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-secondary">
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
