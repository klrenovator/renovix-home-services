import type { SubServiceDefinition } from "../types";

export const weldingSubServices: SubServiceDefinition[] = [
  {
    slug: "window-grille",
    serviceSlug: "welding-metal-works",
    pricingId: "welding-grille-window",
    standaloneSearchIntent: true,
    relatedProblems: ["rusted-gate-repair", "railing-repair"],
    en: {
      name: "Window Grille Fabrication",
      h1: "Window Grille Fabrication in Kuala Lumpur & Selangor",
      metaDescription:
        "Custom mild-steel window grilles fabricated and installed to your window measurements in Kuala Lumpur & Selangor. Window grille fabrication from RM12/sqft. Free quote.",
      title: "Renovix Home Services | Window Grille Fabrication in KL & Selangor",
      lead:
        "A window grille is a security measure that has to be measured, fabricated and fixed correctly — a grille that is undersized, welded poorly or anchored loosely is not protection at all.",
      suitableFor: [
        "Securing ground-floor windows and sliding doors.",
        "Replacing old, rusted or weak grilles.",
        "Matching new grilles to your existing gate and railing style.",
      ],
      includes: [
        "On-site measurement of each window opening",
        "Fabrication in mild steel to your design and finish",
        "Priming and finishing coats to resist rust",
        "Secure fixing into the surrounding wall",
      ],
      excludes: [
        "Installation of burglar alarms or security systems",
        "Painting finishes beyond the standard prime and top coat",
      ],
      costFactors: [
        {
          title: "Design complexity",
          description:
            "Straight-bar grilles are most economical; decorative curves and patterns add fabrication time.",
        },
        {
          title: "Bar gauge and spacing",
          description:
            "Thicker bars and tighter spacing are more secure but heavier and pricier.",
        },
        {
          title: "Finish",
          description:
            "Standard paint is included; a powder-coated or stainless finish costs more.",
        },
      ],
      materials: [
        {
          title: "Mild steel",
          description:
            "The standard choice — strong, weldable and economical. Treated and painted to resist rust.",
        },
        {
          title: "Stainless steel",
          description:
            "For coastal or high-moisture areas where corrosion resistance matters more.",
        },
      ],
      process: [
        { title: "Measure and design", description: "We measure each opening and confirm the bar pattern and finish with you." },
        { title: "Fabricate", description: "The grille is cut, welded and finished in our workshop to your dimensions." },
        { title: "Install and fix", description: "The grille is positioned and fixed securely into the wall surround." },
      ],
      faqs: [
        { question: "Do I measure the windows myself?", answer: "No — we measure on site so the grille fits exactly. Fabrication from a DIY measurement risks an ill-fitting result." },
        { question: "Can grilles be made to match my existing style?", answer: "Yes. Share a photo of your current gate or railing and we can replicate the pattern." },
        { question: "Do you paint the grille after installing?", answer: "We apply a primer and top coat as part of the job; a bespoke paint colour can be arranged." },
      ],
    },
    ms: {
      name: "Pembuatan Gril Tingkap",
      h1: "Pembuatan Gril Tingkap di Kuala Lumpur & Selangor",
      metaDescription:
        "Gril tingkap besi mild steel ditempah khas dan dipasang mengikut ukuran tingkap anda di Kuala Lumpur & Selangor. Bermula dari RM12/kaki persegi.",
      title: "Renovix Home Services | Pembuatan Gril Tingkap di KL & Selangor",
      lead:
        "Gril tingkap ialah langkah keselamatan yang perlu diukur, dibuat dan dipasang dengan betul — gril yang bersaiz kecil, kimpalan lemah atau longgar bukan perlindungan sama sekali.",
      suitableFor: [
        "Mengamankan tingkap dan pintu gelangsar tingkat bawah.",
        "Mengganti gril lama, berkarat atau lemah.",
        "Memadankan gril baharu dengan gaya pagar dan susur tangan anda.",
      ],
      includes: [
        "Pengukuran di tapak setiap bukaan tingkap",
        "Fabrikasi besi mild steel mengikut reka bentuk dan kemasan anda",
        "Sapu primer dan kemasan untuk tahan karat",
        "Pemasangan kukuh pada dinding sekeliling",
      ],
      excludes: [
        "Pemasangan penggera atau sistem keselamatan",
        "Kemasan cat di luar primer dan cat atas standard",
      ],
      costFactors: [
        { title: "Kerumitan reka bentuk", description: "Gril bar lurus paling jimat; lengkung dan corak hiasan menambah masa fabrikasi." },
        { title: "Saiz dan jarak bar", description: "Bar lebih tebal dan jarak rapat lebih selamat tetapi lebih berat dan mahal." },
        { title: "Kemasan", description: "Cat standard termasuk; kemasan powder-coat atau besi tahan karat lebih mahal." },
      ],
      faqs: [
        { question: "Perlukah saya ukur tingkap sendiri?", answer: "Tidak — kami ukur di tapak supaya gril muat tepat." },
        { question: "Boleh gril dibuat sepadan gaya sedia ada?", answer: "Ya. Kongsi foto pagar atau susur tangan semasa anda dan kami boleh tiru corak itu." },
        { question: "Adakah anda cat gril selepas pasang?", answer: "Kami sapu primer dan cat atas; warna khas boleh diatur." },
      ],
    },
    zh: {
      name: "防盗窗制作",
      h1: "吉隆坡与雪兰莪防盗窗制作",
      metaDescription:
        "在吉隆坡与雪兰莪，按您的窗户尺寸定制并安装低碳钢防盗窗。防盗窗制作每平方英尺从 RM12 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪防盗窗制作",
      lead:
        "防盗窗是安全措施，必须量准、焊好并牢固安装——尺寸偏小、焊接不牢或固定松动的铁窗毫无防护作用。",
      suitableFor: [
        "为底层窗户与推拉门加装防护。",
        "更换老化、锈蚀或脆弱的旧铁窗。",
        "使新铁窗与您现有的铁门、栏杆风格一致。",
      ],
      includes: [
        "现场测量每个窗户开口",
        "按您的设计与表面处理定制低碳钢",
        "施作防锈底漆与面漆",
        "牢固固定于周边墙体",
      ],
      excludes: [
        "安装防盗警报或安防系统",
        "标准底漆与面漆之外的油漆处理",
      ],
      costFactors: [
        { title: "设计复杂度", description: "直条铁窗最实惠；弧形与装饰图案会增加制作工时。" },
        { title: "铁条规格与间距", description: "较粗铁条与较密间距更安全，但更重、更贵。" },
        { title: "表面处理", description: "标准油漆已含；粉末喷涂或不锈钢饰面费用更高。" },
      ],
      faqs: [
        { question: "需要我自己量窗户尺寸吗？", answer: "不需要——我们会上门测量，确保铁窗完全贴合。自行量度容易造成不合装。" },
        { question: "铁窗能配合我现有风格吗？", answer: "可以。分享您现在铁门或栏杆的照片，我们可复刻同款图案。" },
        { question: "安装后你们会上漆吗？", answer: "我们会施作底漆与面漆；也可安排定制颜色。" },
      ],
    },
  },
];
