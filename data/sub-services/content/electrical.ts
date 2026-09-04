import type { SubServiceDefinition } from "../types";

export const electricalSubServices: SubServiceDefinition[] = [
  {
    slug: "socket-installation",
    serviceSlug: "electrical",
    pricingId: "electrical-socket-add",
    standaloneSearchIntent: true,
    relatedProblems: ["insufficient-power-points", "faulty-socket", "power-tripping"],
    en: {
      name: "Power Socket / Plug Point Addition",
      h1: "Power Socket Addition in Kuala Lumpur & Selangor",
      metaDescription:
        "Add a new 13A power socket or plug point in Kuala Lumpur & Selangor, wired to the nearest spur or DB in proper conduit. Power socket addition from RM80/point. Free quote.",
      title: "Renovix Home Services | Power Socket Addition in KL & Selangor",
      lead:
        "Running out of sockets is why most Malaysian homes end up covered in extension leads. We add a proper 13A power point at a safe location, wired correctly to the circuit.",
      suitableFor: [
        "Adding sockets where you constantly need them — desks, kitchens, bedsides.",
        "Replacing the habit of daisy-chaining extension leads.",
        "New power points alongside a renovation or new furniture layout.",
      ],
      includes: [
        "Choosing a safe feed point (spur or nearest circuit)",
        "Running cable in proper conduit",
        "Installing and testing a new 13A socket",
        "Safe isolation and circuit check before work",
      ],
      excludes: [
        "Full house rewiring (see Full House Wiring)",
        "Relocating or upgrading the DB/consumer unit",
      ],
      costFactors: [
        {
          title: "Run length and access",
          description:
            "A socket near an existing point is quick; a long run across a room or through concrete costs more.",
        },
        {
          title: "Concealed vs surface",
          description:
            "Surface (casing) wiring is cheaper; chasing cable into the wall for a flush finish costs more.",
        },
        {
          title: "Number of points",
          description:
            "Adding several sockets in one visit is more economical per point than a single call-out.",
        },
      ],
      materials: [
        {
          title: "Socket and finish",
          description:
            "We fit standard 13A outlets; a matching brand and plate finish can be arranged.",
        },
      ],
      process: [
        { title: "Assess the circuit", description: "We check the nearest feed point and whether the circuit can take another socket safely." },
        { title: "Isolate and run cable", description: "Power is isolated, cable is run and the new point is wired." },
        { title: "Fit and test", description: "The socket is fitted and tested before power is restored." },
      ],
      faqs: [
        { question: "Can I just plug an extension lead in instead?", answer: "A few extension leads are fine, but daisy-chaining many high-draw appliances overloads one socket. A proper point is the safe long-term fix." },
        { question: "Do I need to add sockets during renovation only?", answer: "No — we can add a point to an existing circuit without a full renovation." },
        { question: "Is adding a socket safe in an older home?", answer: "Yes, provided the existing wiring and circuit are sound. We check before adding a load to an old circuit." },
      ],
    },
    ms: {
      name: "Tambah Soket / Titik Kuasa",
      h1: "Penambahan Soket Elektrik di Kuala Lumpur & Selangor",
      metaDescription:
        "Tambah soket kuasa 13A baharu di Kuala Lumpur & Selangor, didawai ke spur atau DB terdekat dalam conduit yang betul. Bermula dari RM80/titik.",
      title: "Renovix Home Services | Penambahan Soket di KL & Selangor",
      lead:
        "Kehabisan soket ialah sebab kebanyakan rumah di Malaysia dipenuhi kabel penyambung. Kami tambah titik kuasa 13A yang betul di lokasi selamat, didawai dengan betul ke litar.",
      suitableFor: [
        "Menambah soket di tempat yang sentiasa diperlukan — meja, dapur, tepi katil.",
        "Menggantikan tabiat menyambung sambungan wayar bertali.",
        "Titik kuasa baharu bersama renovasi atau susun atur perabot baharu.",
      ],
      includes: [
        "Memilih titik suapan yang selamat",
        "Mengalirkan kabel dalam conduit yang betul",
        "Memasang dan menguji soket 13A baharu",
        "Pengasingan selamat dan semakan litar sebelum kerja",
      ],
      excludes: [
        "Pendawaian semula rumah penuh",
        "Memindah atau menaik taraf DB",
      ],
      costFactors: [
        { title: "Jarak dan akses", description: "Soket berhampiran titik sedia ada cepat; laluan panjang lebih mahal." },
        { title: "Tersembunyi vs permukaan", description: "Pendawaian permukaan lebih murah; 'chasing' dalam dinding lebih mahal." },
        { title: "Bilangan titik", description: "Menambah beberapa soket dalam satu lawatan lebih jimat per titik." },
      ],
      faqs: [
        { question: "Boleh guna kabel penyambung sahaja?", answer: "Beberapa kabel penyambung elok, tetapi mencantum banyak perkakas berat membebankan satu soket. Titik tetap ialah penyelesaian selamat." },
        { question: "Perlukah tambah soket hanya semasa renovasi?", answer: "Tidak — kami boleh tambah titik pada litar sedia ada tanpa renovasi penuh." },
        { question: "Selamatkah tambah soket di rumah lama?", answer: "Ya, jika pendawaian dan litar sedia ada elok. Kami semak dahulu sebelum menambah beban." },
      ],
    },
    zh: {
      name: "增设插座 / 电源点",
      h1: "吉隆坡与雪兰莪增设电源插座",
      metaDescription:
        "在吉隆坡与雪兰莪新增 13A 电源插座，以正确的线管接到最近的电源分路或配电箱。插座增设每点位从 RM80 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪增设电源插座",
      lead:
        "插座不够用，正是许多马来西亚家庭插线板接个不停的原因。我们会在安全位置增设规范的 13A 插座，正确接入电路。",
      suitableFor: [
        "在常需用电处增设插座——书桌、厨房、床头。",
        "摆脱串接插线板的习惯。",
        "配合装修或新家具布局增设电源点。",
      ],
      includes: [
        "选择安全的取电点（分路或最近电路）",
        "以规范线管敷设电线",
        "安装并测试新的 13A 插座",
        "施工前安全断电与电路检查",
      ],
      excludes: [
        "全屋重新布线",
        "迁移或升级配电箱",
      ],
      costFactors: [
        { title: "走线距离与路径", description: "靠近现有插座的插座很快；跨越房间或混凝土的长路线更贵。" },
        { title: "暗装与明装", description: "明装线槽较便宜；墙面开槽做暗装平齐更贵。" },
        { title: "点位数量", description: "单次上门增设多个插座较每个点位单独出访更划算。" },
      ],
      faqs: [
        { question: "只接插线板不行吗？", answer: "接少量插线板可以，但把多个大功率电器串接会令单个插座过载。规范增设插座才是安全的长远方案。" },
        { question: "只能在装修时加插座吗？", answer: "不是——我们可把新点位接入现有电路，无需整屋装修。" },
        { question: "在旧屋加插座安全吗？", answer: "只要现有线路与电路良好便安全。我们会先检查，再决定是否在旧电路上增加负载。" },
      ],
    },
  },
];
