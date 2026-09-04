import type { SubServiceDefinition } from "../types";

export const waterproofingSubServices: SubServiceDefinition[] = [
  {
    slug: "bathroom-waterproofing",
    serviceSlug: "waterproofing",
    pricingId: "waterproofing-bathroom-hack",
    standaloneSearchIntent: true,
    relatedProblems: ["bathroom-leakage", "water-leakage", "bathroom-tile-problems"],
    en: {
      name: "Bathroom Waterproofing with Tile Hack & Relay",
      h1: "Bathroom Waterproofing in Kuala Lumpur & Selangor",
      metaDescription:
        "Full bathroom waterproofing: hack out tiles, apply a membrane, flood-test, screed and relay tiles across Kuala Lumpur & Selangor. Bathroom waterproofing from RM1,500/bathroom. Free quote.",
      title: "Renovix Home Services | Bathroom Waterproofing in KL & Selangor",
      lead:
        "The only reliable way to stop a bathroom leaking to the unit below is to rebuild its waterproofing properly — tiles off, a fresh membrane, a flood test, then new tiles on top. We do all of it in one coordinated job.",
      suitableFor: [
        "A bathroom leaking into the ceiling or room below.",
        "Damp walls or grout lines that keep staining despite cleaning.",
        "Rebuilding a bathroom where the old waterproofing has failed.",
      ],
      includes: [
        "Hacking out existing tiles and floor/wall preparation",
        "Applying a cementitious waterproof membrane to wet areas",
        "A flood test to confirm the membrane holds",
        "Screeding and relaying new tiles",
      ],
      excludes: [
        "Replacing sanitary ware, plumbing or fittings",
        "Renovating beyond the tiled bathroom footprint",
      ],
      costFactors: [
        {
          title: "Bathroom size",
          description:
            "Pricing is per bathroom — a small guest toilet costs far less than a large master bathroom.",
        },
        {
          title: "Tile condition and removal",
          description:
            "Hacking old tiles and cleaning the base is heavier when adhesive is stubborn.",
        },
        {
          title: "Extent of wet areas",
          description:
            "The number of walls that need the membrane up to a certain height changes the job.",
        },
      ],
      materials: [
        {
          title: "Cementitious membrane",
          description:
            "A two-part cementitious coating is the standard, durable choice for bathroom floors and walls.",
        },
        {
          title: "Replacement tiles",
          description:
            "You can supply new tiles, or we quote supply-and-lay with advice on slip resistance.",
        },
      ],
      process: [
        { title: "Hack out tiles", description: "Old tiles and adhesive are removed to expose the concrete base." },
        { title: "Apply membrane", description: "A waterproof membrane is applied to the floor and wet walls." },
        { title: "Flood test", description: "The area is flooded and watched to confirm no water escapes." },
        { title: "Screed and tile", description: "The floor is screeded and new tiles are laid for a clean finish." },
      ],
      faqs: [
        { question: "Can I waterproof over the existing tiles?", answer: "No — a coating on top of old tiles rarely holds and does not fix the joint. A proper job removes the tiles first." },
        { question: "Do you include the flood test?", answer: "Yes. The membrane is flooded and checked before any new tiles go down, so a leak is caught before it is hidden." },
        { question: "How long does a full bathroom waterproofing take?", answer: "Count on roughly 5–8 working days including membrane and grout curing." },
      ],
    },
    ms: {
      name: "Kalis Air Bilik Air (Pecah & Pasang Jubin)",
      h1: "Kalis Air Bilik Air di Kuala Lumpur & Selangor",
      metaDescription:
        "Kalis air bilik air penuh: pecah jubin, sapu membran, ujian banjir, screed dan pasang jubin baharu di Kuala Lumpur & Selangor. Bermula dari RM1,500/bilik air.",
      title: "Renovix Home Services | Kalis Air Bilik Air di KL & Selangor",
      lead:
        "Satu-satunya cara pasti untuk menghentikan kebocoran bilik air ke unit bawah ialah bina semula kalis airnya dengan betul — cabut jubin, membran baharu, ujian banjir, kemudian jubin baharu. Kami lakukan semua dalam satu kerja terkoordinasi.",
      suitableFor: [
        "Bilik air bocor ke siling atau ruang bawah.",
        "Dinding lembap atau grout yang sentiasa bernoda.",
        "Membina semula bilik air yang kalis airnya gagal.",
      ],
      includes: [
        "Pecah jubin sedia ada dan penyediaan lantai/dinding",
        "Sapuan membran kalis air simen pada kawasan basah",
        "Ujian banjir untuk mengesahkan membran",
        "Screed dan pasang jubin baharu",
      ],
      excludes: [
        "Penggantian sanitari, paip atau kelengkapan",
        "Renovasi di luar kawasan jubin bilik air",
      ],
      costFactors: [
        { title: "Saiz bilik air", description: "Harga per bilik air — tandas kecil lebih murah berbanding bilik air utama besar." },
        { title: "Keadaan dan penyingkiran jubin", description: "Pecah jubin lebih berat apabila pelekat sukar." },
        { title: "Kawasan basah", description: "Bilangan dinding yang perlu membran mengubah skop." },
      ],
      faqs: [
        { question: "Boleh kalis air di atas jubin sedia ada?", answer: "Tidak — salutan di atas jubin lama jarang tahan dan tidak membetulkan sendi. Kerja betul mesti cabut jubin dahulu." },
        { question: "Adakah ujian banjir disertakan?", answer: "Ya. Membran diuji sebelum jubin baharu dipasang." },
        { question: "Berapa lama kalis air bilik air penuh?", answer: "Kira-kira 5–8 hari bekerja termasuk masa membran dan grout kering." },
      ],
    },
    zh: {
      name: "浴室防水（铲砖重铺）",
      h1: "吉隆坡与雪兰莪浴室防水",
      metaDescription:
        "在吉隆坡与雪兰莪进行整间浴室防水：铲除瓷砖、涂刷防水层、满水测试、找平并重铺新砖。浴室防水每间从 RM1,500 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪浴室防水",
      lead:
        "要可靠阻止浴室渗漏到楼下，唯一方法是正确地重做防水层——铲除瓷砖、铺设新防水膜、做满水测试，再铺上新瓷砖。我们以一次协调工程全部完成。",
      suitableFor: [
        "浴室渗漏到下方天花板或房间。",
        "墙面潮湿或填缝反复发黑，清洗仍无效。",
        "旧防水层已失效、需整体重做的浴室。",
      ],
      includes: [
        "铲除原有瓷砖并处理地面与墙面",
        "在湿区涂刷水泥基防水膜",
        "满水测试确认防水层无渗漏",
        "找平并重铺新瓷砖",
      ],
      excludes: [
        "更换卫浴洁具、水管或配件",
        "超出瓷砖浴室范围的翻新",
      ],
      costFactors: [
        { title: "浴室大小", description: "按每间浴室计费——小型卫生间远低于大型主卫。" },
        { title: "瓷砖状况与铲除", description: "旧瓷砖胶黏牢固时，铲除更费力。" },
        { title: "湿区范围", description: "需防水上墙的墙面数量会影响工程。" },
      ],
      faqs: [
        { question: "可以在原有瓷砖上做防水吗？", answer: "不行——在旧瓷砖上涂层很难耐久，也无法解决接缝。正确的做法是先铲除瓷砖。" },
        { question: "包括满水测试吗？", answer: "包括。在铺新砖前会先注水测试防水层，确保在掩盖之前发现渗漏。" },
        { question: "整间浴室防水需多久？", answer: "约 5–8 个工作日，包括防水层与填缝的固化时间。" },
      ],
    },
  },
];
