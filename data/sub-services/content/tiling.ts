import type { SubServiceDefinition } from "../types";

export const tilingSubServices: SubServiceDefinition[] = [
  {
    slug: "floor-tile-installation",
    serviceSlug: "tiling",
    pricingId: "tiling-floor-ceramic",
    standaloneSearchIntent: true,
    relatedProblems: ["uneven-tiles", "water-seepage-through-tiles", "cracked-tile-repair"],
    en: {
      name: "Floor Tile Installation",
      h1: "Floor Tile Installation in Kuala Lumpur & Selangor",
      metaDescription:
        "Supply and lay ceramic floor tiles on a prepared, level surface in Kuala Lumpur & Selangor, including adhesive and grouting. Floor tile installation from RM8/sqft. Free quote.",
      title: "Renovix Home Services | Floor Tile Installation in KL & Selangor",
      lead:
        "A floor only looks right and lasts when the base under it is flat and stable. We prepare the surface, lay your tiles square and true, then grout to a clean finish.",
      suitableFor: [
        "New floor tiling for living areas, hallways, kitchens and bedrooms.",
        "Replacing an old or dated floor with fresh ceramic tiles.",
        "Commercial and shop floors where a hard-wearing finish is needed.",
      ],
      includes: [
        "Preparing and levelling the floor surface",
        "Laying ceramic floor tiles with quality tile adhesive",
        "Grouting and cleaning the finished joints",
        "Cutting tiles to fit edges, doors and corners",
      ],
      excludes: [
        "Hacking out the existing tiles (see Tile Hacking & Removal)",
        "Underfloor waterproofing where a wet area requires it",
      ],
      costFactors: [
        {
          title: "Tile size and material",
          description:
            "Large-format and porcelain tiles cost more to lay than small ceramic tiles because they need more care to keep flat.",
        },
        {
          title: "Floor area",
          description:
            "Bigger areas benefit from a per-square-foot rate; smaller jobs carry a minimum charge.",
        },
        {
          title: "Surface condition",
          description:
            "A level, ready surface is quickest; levelling and screeding add time and cost.",
        },
      ],
      materials: [
        {
          title: "Ceramic vs porcelain",
          description:
            "Ceramic is the common, cost-effective choice; porcelain is denser and better for heavy use or moisture.",
        },
        {
          title: "Patterns and cuts",
          description:
            "Straight lay is fastest; diagonal, brick or herringbone patterns increase labour.",
        },
      ],
      process: [
        { title: "Inspect the floor", description: "We check level, damp and whether old adhesive or tiles need removing." },
        { title: "Prepare the base", description: "The surface is levelled and screeded where needed before tiling." },
        { title: "Lay and grout", description: "Tiles are laid square, spacers keep joints even, then grout is applied." },
        { title: "Clean up", description: "Excess grout is cleaned and the floor wiped for a finished look." },
      ],
      faqs: [
        { question: "Can you lay tiles over my existing tiles?", answer: "Sometimes, but it raises the floor and can hide problems. We usually recommend hacking out old tiles so the new floor sits at the right level." },
        { question: "How long does a floor take to lay?", answer: "It depends on area and pattern — typically a few days for a 100–200 sqft floor, plus grout drying time." },
        { question: "Do you supply the tiles?", answer: "Yes, we can quote supply-and-lay. If you have already chosen tiles, we lay those and advise on adhesive and grout." },
      ],
    },
    ms: {
      name: "Pemasangan Jubin Lantai",
      h1: "Pemasangan Jubin Lantai di Kuala Lumpur & Selangor",
      metaDescription:
        "Bekal dan pasang jubin lantai seramik pada permukaan rata di Kuala Lumpur & Selangor, termasuk pelekat dan grout. Bermula dari RM8/kaki persegi.",
      title: "Renovix Home Services | Pemasangan Jubin Lantai di KL & Selangor",
      lead:
        "Lantai hanya kelihatan elok dan tahan lama apabila tapaknya rata dan stabil. Kami sediakan permukaan, pasang jubin anda dengan kemas, kemudian grout hingga bersih.",
      suitableFor: [
        "Jubin lantai baharu untuk ruang tamu, lorong, dapur dan bilik.",
        "Mengganti lantai lama dengan jubin seramik baharu.",
        "Lantai kedai dan komersial yang perlu tahan lasak.",
      ],
      includes: [
        "Menyediakan dan meratakan permukaan lantai",
        "Memasang jubin lantai seramik dengan pelekat berkualiti",
        "Grout dan membersihkan sendi siap",
        "Memotong jubin untuk tepi, pintu dan penjuru",
      ],
      excludes: [
        "Mencabut jubin sedia ada",
        "Kalis air bawah lantai jika kawasan basah memerlukannya",
      ],
      costFactors: [
        { title: "Saiz dan bahan jubin", description: "Jubin besar dan porselin lebih mahal dipasang berbanding seramik kecil." },
        { title: "Luas lantai", description: "Kawasan lebih besar untung kadar per kaki persegi; kerja kecil ada caj minimum." },
        { title: "Keadaan permukaan", description: "Permukaan rata paling cepat; leveling dan screed menambah masa." },
      ],
      faqs: [
        { question: "Boleh pasang jubin di atas jubin sedia ada?", answer: "Kadangkala, tetapi ia menaikkan lantai dan boleh menyembunyikan masalah. Kami cadangkan mencabut jubin lama." },
        { question: "Berapa lama lantai dipasang?", answer: "Bergantung luas dan corak — biasanya beberapa hari untuk 100–200 kaki persegi, ditambah masa grout kering." },
        { question: "Adakah anda bekalkan jubin?", answer: "Ya, kami boleh sebut harga bekalan dan pasang. Jika anda sudah pilih jubin, kami pasang dan nasihatkan pelekat." },
      ],
    },
    zh: {
      name: "地砖铺贴",
      h1: "吉隆坡与雪兰莪地砖铺贴",
      metaDescription:
        "在吉隆坡与雪兰莪，于整平准备好的地面供应并铺贴瓷砖地板，包括胶粘剂与填缝。地砖铺贴每平方英尺从 RM8 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪地砖铺贴",
      lead:
        "地面只有在底层平整稳定的前提下，铺出来的效果才好、才耐用。我们处理好基面、把地砖铺得方正到位，再填缝成干净收口。",
      suitableFor: [
        "客厅、走廊、厨房与房间的新地砖铺贴。",
        "以新瓷砖替换旧地板。",
        "需要耐磨地面的商铺与商业空间。",
      ],
      includes: [
        "整平并处理好地面",
        "使用优质瓷砖胶铺贴地砖",
        "填缝并清理完工的接缝",
        "切割瓷砖以贴合边缘、门口与墙角",
      ],
      excludes: [
        "铲除原有瓷砖（见瓷砖铲除）",
        "湿区需要的地面防水",
      ],
      costFactors: [
        { title: "瓷砖尺寸与材质", description: "大板与瓷砖较小型瓷砖更费工时，因为更需注意平整。" },
        { title: "铺贴面积", description: "面积较大按每平方英尺划算；小工程有最低收费。" },
        { title: "地面状况", description: "平整现成的地面最快；找平与砂浆层会增加时间。" },
      ],
      faqs: [
        { question: "可以在原有瓷砖上再铺一层吗？", answer: "有时可以，但会抬高地面并可能掩盖问题。我们通常建议铲除旧瓷砖，让新地面保持在正确标高。" },
        { question: "铺地砖需要多久？", answer: "视面积与铺法而定——100–200 平方英尺通常需数天，另加填缝干固时间。" },
        { question: "你们供应瓷砖吗？", answer: "可以，我们能提供供料与铺贴报价。若您已选好瓷砖，我们负责铺贴并建议胶水与填缝剂。" },
      ],
    },
  },
];
