import type { SubServiceDefinition } from "../types";

export const plumbingSubServices: SubServiceDefinition[] = [
  {
    slug: "pipe-leak-repair",
    serviceSlug: "plumbing",
    pricingId: "plumbing-pipe-leak-visible",
    standaloneSearchIntent: true,
    relatedProblems: ["leaking-pipe", "water-leakage", "low-water-pressure"],
    en: {
      name: "Visible Pipe Leak Repair",
      h1: "Visible Pipe Leak Repair in Kuala Lumpur & Selangor",
      metaDescription:
        "Repair an accessible leaking pipe (PVC, ABS or copper) in Kuala Lumpur & Selangor, up to one metre, sealed and water-tested. Visible pipe leak repair from RM150/job. Free quote.",
      title: "Renovix Home Services | Visible Pipe Leak Repair in KL & Selangor",
      lead:
        "An accessible pipe leak — a dripping joint, a weeping pipe or a small spray under a sink — can be repaired directly at the source without hacking walls, if the damaged section is reachable.",
      suitableFor: [
        "A visible leak on an exposed pipe run under a sink, toilet or appliance.",
        "Leaking joints or pinholes on PVC, ABS or copper pipe you can see.",
        "A damp patch or drip that is clearly not coming from behind a wall.",
      ],
      includes: [
        "Tracing the leak to its exact source",
        "Repairing or replacing the affected pipe section (up to one metre)",
        "Sealing the joint and re-testing with water",
      ],
      excludes: [
        "Hacking open walls or floors for concealed leaks",
        "Reinstating tiling or wall finishes",
      ],
      costFactors: [
        {
          title: "Pipe material",
          description:
            "PVC and ABS are simple to repair; copper needs a plumber's fitting and soldering care.",
        },
        {
          title: "Accessibility",
          description:
            "An easy-to-reach leak is quicker and cheaper than one tucked against a wall or under a cabinet.",
        },
        {
          title: "Extent of damage",
          description:
            "A short damaged section costs less; a longer run or corroded fitting takes more time.",
        },
      ],
      materials: [
        {
          title: "Replacement fittings",
          description:
            "We carry the common PVC, ABS and compression fittings needed for visible pipe repairs.",
        },
      ],
      process: [
        { title: "Locate the leak", description: "We find the exact leaking section and check the pipe around it for further damage." },
        { title: "Repair or replace", description: "The damaged section is cut out and replaced, or the joint resealed." },
        { title: "Water test", description: "We run water through and confirm the joint holds before finishing." },
      ],
      faqs: [
        { question: "Can every pipe leak be fixed without hacking walls?", answer: "If the leak is on an accessible section, yes. Leaks inside a wall or floor need concealed-leak repair, which involves opening the surface." },
        { question: "Do you replace the whole pipe?", answer: "Usually only the damaged section is replaced and joined; replacing a full run is only needed if the pipe is badly corroded." },
        { question: "How quickly can a visible leak be repaired?", answer: "A straightforward visible leak is typically repaired within a few hours in a single visit." },
      ],
    },
    ms: {
      name: "Pembaikan Paip Bocor Kelihatan",
      h1: "Pembaikan Paip Bocor Kelihatan di Kuala Lumpur & Selangor",
      metaDescription:
        "Baiki paip bocor yang mudah diakses (PVC, ABS atau kuprum) di Kuala Lumpur & Selangor, sehingga satu meter, dimeterai dan diuji air. Bermula dari RM150/kerja.",
      title: "Renovix Home Services | Pembaikan Paip Bocor di KL & Selangor",
      lead:
        "Kebocoran paip yang kelihatan — sendi menitis, paip berair atau semburan kecil di bawah sinki — boleh dibaiki terus di punca tanpa memecah dinding, jika bahagian rosak itu mudah dicapai.",
      suitableFor: [
        "Kebocoran kelihatan pada paip terdedah di bawah sinki, tandas atau perkakas.",
        "Sendi bocor atau lubang halus pada paip PVC, ABS atau kuprum yang anda nampak.",
        "Kesan lembap atau titisan yang jelas bukan dari belakang dinding.",
      ],
      includes: [
        "Mengesan punca kebocoran dengan tepat",
        "Membaiki atau mengganti bahagian paip terjejas (sehingga satu meter)",
        "Mengedar sendi dan menguji semula dengan air",
      ],
      excludes: [
        "Memecah dinding atau lantai untuk kebocoran tersembunyi",
        "Memasang semula jubin atau kemasan dinding",
      ],
      costFactors: [
        { title: "Bahan paip", description: "PVC dan ABS mudah dibaiki; kuprum memerlukan kekemasan tukang paip." },
        { title: "Aksesibiliti", description: "Kebocoran mudah dicapai lebih cepat dan murah." },
        { title: "Skop kerosakan", description: "Bahagian pendek lebih murah; paip lebih panjang atau kelengkapan karat mengambil masa." },
      ],
      faqs: [
        { question: "Boleh semua kebocoran paip dibaiki tanpa pecah dinding?", answer: "Jika bocor pada bahagian yang boleh diakses, ya. Kebocoran dalam dinding memerlukan pembaikan tersembunyi." },
        { question: "Adakah anda ganti keseluruhan paip?", answer: "Biasanya hanya bahagian rosak diganti; ganti keseluruhan hanya jika paip sangat berkarat." },
        { question: "Berapa cepat kebocoran kelihatan dibaiki?", answer: "Biasanya dalam beberapa jam dalam satu lawatan." },
      ],
    },
    zh: {
      name: "明漏水管的维修",
      h1: "吉隆坡与雪兰莪明漏水管的维修",
      metaDescription:
        "在吉隆坡与雪兰莪维修可接触的漏水管道（PVC、ABS 或铜管），最长一米，密封并通水测试。明漏水管维修每项从 RM150 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪明漏水管维修",
      lead:
        "明漏水管——水槽下渗水的接口、渗水管道或细小喷水——只要受损段可接触，便可直接在源头修复，无需凿墙。",
      suitableFor: [
        "水槽、马桶或电器下方暴露管道出现可见渗漏。",
        "可见的 PVC、ABS 或铜管接口漏水或针孔渗水。",
        "明显并非来自墙内的潮湿痕迹或滴水。",
      ],
      includes: [
        "精确定位漏水的源头",
        "维修或更换受影响的管段（最长一米）",
        "密封接口并通水复测",
      ],
      excludes: [
        "凿开墙壁或地板处理隐蔽渗漏",
        "恢复瓷砖或墙面饰面",
      ],
      costFactors: [
        { title: "管道材质", description: "PVC 与 ABS 容易处理；铜管需要水工接件并细心焊接。" },
        { title: "可达性", description: "容易触及的漏水更快、更省钱。" },
        { title: "损坏范围", description: "短管段花费较低；较长的管段或生锈接件需时更多。" },
      ],
      faqs: [
        { question: "所有水管漏水都能不凿墙修复吗？", answer: "只要漏水位于可接触管段，就可以。墙内或地面下的渗漏需隐蔽漏水维修，需打开表面。" },
        { question: "你们会更换整条管道吗？", answer: "通常只更换并接好受损段；仅在管道严重锈蚀时才需更换整段。" },
        { question: "明漏能多快修好？", answer: "简单的明漏通常在单次上门几小时内完成。" },
      ],
    },
  },
];
