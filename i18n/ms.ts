import type { Dictionary } from "./types";

/**
 * Bahasa Melayu (ms-MY) — Bahasa Melayu Malaysia yang semula jadi dan profesional.
 * Istilah industri tempatan dikekalkan (jubin, siling, kalis air, sebut harga).
 */
export const ms: Dictionary = {
  meta: {
    siteName: "Renovix Home Services",
    brandTagline:
      "Perkhidmatan Renovasi & Pembaikan Rumah Profesional di Kuala Lumpur & Selangor",
    defaultDescription:
      "Renovix Home Services menyediakan perkhidmatan renovasi dan pembaikan rumah profesional di seluruh Kuala Lumpur, Selangor dan Lembah Klang. Kerja jubin, kimpalan, elektrik, cat, siling, partition, paip, kalis air, lantai, renovasi dan kerja am.",
    homeTitle:
      "Renovix Home Services | Renovasi & Pembaikan Rumah di KL & Selangor",
    homeDescription:
      "Perkhidmatan renovasi dan pembaikan rumah di KL, Selangor dan Lembah Klang — kerja jubin, kimpalan, elektrik, cat, siling, paip dan kalis air.",
    ogBadge: "Berkhidmat di KL & Selangor · Lembah Klang",
  },
  a11y: {
    skipToContent: "Langkau ke kandungan utama",
    primaryNavigation: "Utama",
    mobileNavigation: "Navigasi mudah alih",
    breadcrumb: "Jejak laman",
    languageNavigation: "Bahasa",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    brandHome: "Renovix Home Services – Laman Utama",
    filterProjects: "Tapis gambar projek mengikut kategori perkhidmatan",
    languageMenu: "Pilih bahasa",
  },
  nav: {
    // Short forms measured against the Plus Jakarta Sans metrics: the long
    // forms ("Laman Utama", "Kawasan Kami", "Soalan Lazim", "Tentang Kami",
    // "Hubungi Kami") made the desktop header overflow between 1280px and
    // ~1490px. These are the standard short BM nav labels used across
    // Malaysian sites, and they also read better in the mobile menu.
    home: "Utama",
    services: "Perkhidmatan",
    problems: "Masalah",
    areas: "Kawasan",
    projects: "Projek",
    blog: "Panduan",
    faq: "FAQ",
    about: "Tentang",
    contact: "Hubungi",
  },
  legal: {
    privacy: "Dasar Privasi",
    terms: "Terma & Syarat",
  },
  cta: {
    getFreeQuote: "Sebut Harga Percuma",
    quoteShort: "Sebut Harga",
    whatsappShort: "WhatsApp",
    requestQuote: "Minta Sebut Harga",
    getQuote: "Dapatkan Sebut Harga",
    startQuoteRequest: "Mulakan Permintaan Sebut Harga",
    whatsappUs: "WhatsApp Kami",
    viewService: "Lihat Perkhidmatan",
    viewProblem: "Lihat masalah",
    viewGuide: "Lihat panduan",
    viewAreas: "Lihat kawasan",
    explore: "Terokai",
    exploreServices: "Terokai Perkhidmatan",
    exploreServiceAreas: "Terokai kawasan perkhidmatan",
    browseAllServices: "Lihat semua perkhidmatan",
    allServiceAreas: "Semua Kawasan Perkhidmatan",
    browseAllServiceAreas: "Lihat Semua Kawasan Perkhidmatan",
    viewAllFaqs: "Lihat semua soalan lazim",
    backToHome: "Kembali ke Laman Utama",
    exploreCategory: "Terokai perkhidmatan",
    viewContactDetails: "Lihat maklumat hubungan",
    viewServiceAreas: "Lihat Kawasan Perkhidmatan",
    tellUsAboutWork: "Beritahu kami tentang kerja yang anda rancang",
    callNow: "Telefon Sekarang",
    emailUs: "E-mel Kami",
    viewNamed: "Lihat {name}",
  },
  footer: {
    blurbPrimary:
      "Perkhidmatan renovasi dan pembaikan rumah profesional di Kuala Lumpur & Selangor.",
    blurbSecondary:
      "Penyelesaian yang boleh diharap untuk renovasi, pembaikan, penyelenggaraan dan peningkatan rumah di seluruh Lembah Klang.",
    language: "Bahasa",
    services: "Perkhidmatan",
    navigation: "Navigasi",
    areasWeServe: "Kawasan Perkhidmatan Kami",
    contact: "Hubungan",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    email: "E-mel",
    address: "Alamat",
    hours: "Waktu Operasi",
    rights: "Hak cipta terpelihara.",
    machineReadable: "Data mesra mesin",
  },
  home: {
    hero: {
      badge: "Kuala Lumpur & Selangor · Lembah Klang",
      title:
        "Perkhidmatan Renovasi & Pembaikan Rumah Profesional di Kuala Lumpur & Selangor",
      lead: "Kerja jubin, kimpalan, elektrik, cat, siling, partition, paip, kalis air, lantai, renovasi dan kerja am di seluruh Lembah Klang.",
      highlights: [
        "Semua kerja rumah, satu tempat",
        "Liputan KL & Selangor",
        "Proses sebut harga yang mudah",
      ],
      imageAlt: "Kerja renovasi rumah moden di sebuah rumah di Malaysia",
      imageTitle: "Kerja tangan yang profesional",
      imageCaption:
        "Penyelesaian praktikal untuk renovasi, pembaikan dan peningkatan rumah.",
    },
    services: {
      eyebrow: "Perkhidmatan Kami",
      title: "Semua keperluan rumah, di bawah satu bumbung",
      description:
        "Daripada pembaikan kecil hingga kerja renovasi yang lebih besar, Renovix menyediakan pelbagai perkhidmatan rumah yang praktikal di Kuala Lumpur dan Selangor.",
    },
    problems: {
      eyebrow: "Masalah Rumah Yang Kerap Berlaku",
      title: "Ada Masalah di Rumah? Kami Boleh Bantu.",
      description:
        "Inilah antara masalah rumah yang boleh kami nilai dan bantu selesaikan di seluruh Lembah Klang.",
      libraryPrefix: "Lihat semua masalah rumah yang kami bincangkan dalam",
      libraryLink: "pusat panduan masalah",
      librarySuffix: " kami.",
    },
    why: {
      eyebrow: "Kenapa Renovix",
      title: "Kenapa Pilih Renovix Home Services?",
      description:
        "Pendekatan yang praktikal dan mengutamakan pelanggan untuk renovasi dan peningkatan rumah di Kuala Lumpur dan Selangor.",
      benefits: [
        {
          title: "Semua kerja rumah, satu tempat",
          description:
            "Pelbagai keperluan pembaikan dan peningkatan rumah dikendalikan melalui satu saluran sahaja.",
        },
        {
          title: "Kerja tangan yang profesional",
          description:
            "Kami menitikberatkan kerja yang kemas, teliti dan berkemahiran untuk projek rumah harian.",
        },
        {
          title: "Komunikasi yang jelas",
          description:
            "Kami terangkan skop kerja, tanya soalan yang betul dan maklumkan perkembangan kepada anda.",
        },
        {
          title: "Penyelesaian yang praktikal",
          description:
            "Cadangan yang ringkas dan sesuai dengan keperluan sebenar rumah anda.",
        },
        {
          title: "Pelbagai perkhidmatan rumah",
          description:
            "Daripada kerja jubin dan cat hingga kalis air dan kerja am, banyak keperluan boleh ditangani.",
        },
        {
          title: "Liputan KL & Selangor",
          description:
            "Perkhidmatan rumah untuk pelanggan di Kuala Lumpur dan seluruh Lembah Klang.",
        },
        {
          title: "Proses sebut harga yang mudah",
          description:
            "Hantarkan butiran dan gambar kerja, dan kami akan bantu tentukan langkah seterusnya.",
        },
      ],
    },
    process: {
      eyebrow: "Cara Kami Bekerja",
      title: "Proses yang mudah dan telus",
      description:
        "Kami pastikan proses sebut harga mudah difahami supaya anda tahu apa yang dijangka pada setiap peringkat.",
      steps: [
        {
          title: "Beritahu Kami Keperluan Anda",
          description:
            "Terangkan kerja pembaikan, peningkatan atau renovasi yang anda rancang untuk rumah anda.",
        },
        {
          title: "Kongsi Butiran / Gambar",
          description:
            "Hantarkan butiran berkaitan serta gambar kawasan yang terjejas supaya kami dapat memahami skop kerja.",
        },
        {
          title: "Terima Penilaian & Sebut Harga",
          description:
            "Pasukan kami akan menilai maklumat tersebut dan memberikan panduan tentang langkah seterusnya serta sebut harga.",
        },
        {
          title: "Aturkan Jadual Kerja",
          description:
            "Setelah skop dan masa dipersetujui, kerja boleh diatur pada waktu yang sesuai.",
        },
      ],
    },
    areas: {
      eyebrow: "Kawasan Kami Bekerja",
      title: "Berkhidmat di Kuala Lumpur & Selangor",
      description:
        "Renovix menyediakan perkhidmatan renovasi dan pembaikan rumah di seluruh Lembah Klang — dengan panduan khusus untuk kawasan kejiranan utama di bandar serta pekan-pekan penting di Selangor.",
    },
    ctaSection: {
      eyebrow: "Mulakan Sekarang",
      title: "Merancang Pembaikan atau Renovasi Rumah?",
      description:
        "Beritahu kami apa yang anda perlukan dan pasukan kami akan menilai kerja tersebut serta menasihati langkah seterusnya.",
      note: "Telefon atau WhatsApp: +601159259521",
    },
    faq: {
      eyebrow: "Soalan Lazim",
      title: "Soalan yang kerap ditanya sebelum bermula",
      description:
        "Beberapa soalan yang paling kerap ditanya oleh pemilik rumah. Lihat halaman Soalan Lazim untuk jawapan khusus mengikut perkhidmatan, kawasan dan panduan sebut harga.",
    },
  },
  servicesIndex: {
    metaTitle:
      "Renovix Home Services | Perkhidmatan di Kuala Lumpur & Selangor",
    metaDescription:
      "Terokai perkhidmatan rumah Renovix di Kuala Lumpur & Selangor: kerja jubin, kimpalan & logam, elektrik, cat, siling & partition, renovasi, paip, kalis air, lantai dan kerja am.",
    ogDescription:
      "Perkhidmatan renovasi dan pembaikan rumah yang lengkap di Kuala Lumpur, Selangor dan Lembah Klang.",
    breadcrumb: "Perkhidmatan",
    title: "Perkhidmatan Rumah Kami di Kuala Lumpur & Selangor",
    lead: "Sepuluh kategori perkhidmatan praktikal yang merangkumi renovasi, pembaikan, penyelenggaraan dan peningkatan rumah di seluruh Lembah Klang. Setiap halaman perkhidmatan menerangkan apa yang kami lakukan, masalah yang kami selesaikan dan cara kerja dijalankan.",
    gridEyebrow: "Terokai Perkhidmatan",
    gridTitle: "Pilih perkhidmatan untuk maklumat lanjut",
    gridDescription:
      "Setiap halaman perkhidmatan merangkumi skop kerja penuh, sub-perkhidmatan, masalah biasa, jenis hartanah yang kami layani, proses kerja, kawasan perkhidmatan dan soalan lazim.",
    oneStopEyebrow: "Semua Kerja, Satu Pasukan",
    oneStopTitle: "Pelbagai perkhidmatan, satu saluran komunikasi",
    oneStopDescription:
      "Kebanyakan projek renovasi dan pembaikan melibatkan beberapa jenis kerja. Renovix menyelaraskan kerja jubin, elektrik, paip, cat dan lain-lain melalui satu pasukan — supaya urutan kerja betul dan anda hanya berurusan dengan satu pihak.",
    oneStopNote:
      "Tidak pasti perkhidmatan mana yang anda perlukan? Terangkan kerja anda dan kami akan cadangkan yang paling sesuai.",
  },
  servicePage: {
    breadcrumbServices: "Perkhidmatan",
    overviewEyebrow: "Gambaran Perkhidmatan",
    highlightsTitle: "Apa yang diliputi perkhidmatan ini",
    subServicesEyebrow: "Sub-Perkhidmatan",
    subServicesTitle: "Perkhidmatan {name}",
    problemsEyebrow: "Masalah Yang Kami Selesaikan",
    propertyTypesEyebrow: "Jenis Hartanah",
    propertyTypesTitle: "Jenis Hartanah Yang Kami Layani",
    processEyebrow: "Proses Kami",
    whyEyebrow: "Kenapa Renovix",
    areasEyebrow: "Kawasan Perkhidmatan",
    areasTitle: "Berkhidmat di Kuala Lumpur & Selangor",
    faqsEyebrow: "Soalan Lazim",
    faqsTitle: "{name} — Soalan Lazim",
    faqsDescription:
      "Jawapan terus kepada soalan yang paling kerap ditanya pelanggan tentang perkhidmatan ini.",
    relatedEyebrow: "Perkhidmatan Berkaitan",
    relatedTitle: "Perkhidmatan yang sesuai digabungkan",
    relatedDescription:
      "{name} sering digabungkan dengan perkhidmatan Renovix yang lain. Terokai perkhidmatan yang biasa dilakukan serentak.",
    relatedProblemsTitle: "Terokai panduan masalah ini",
    relatedProblemsNote:
      "Panduan ini menerangkan punca, tanda amaran dan penyelesaian praktikal bagi masalah yang ditangani oleh perkhidmatan ini.",
    ctaHeading: "Perlukan {name} di Kuala Lumpur & Selangor?",
    ctaTitle: "Perlukan perkhidmatan ini untuk rumah anda?",
    ctaDescription:
      "Kongsi butiran kerja, jenis hartanah dan lokasi anda, dan kami akan bantu tentukan langkah seterusnya.",
    pricingEyebrow: "Panduan Harga",
    pricingTitle: "Kos {name} di Malaysia",
    pricingDescription:
      "Anggaran harga permulaan berdasarkan kajian pasaran semasa 2026 untuk Kuala Lumpur, Selangor dan Lembah Klang. Sebut harga akhir bergantung pada keadaan tapak sebenar, skop, bahan dan keperluan pemasangan.",
    pricingDisclaimer:
      "Harga bermula dari jumlah yang dinyatakan. Sebut harga akhir bergantung pada keadaan tapak sebenar, skop kerja, bahan, akses dan keperluan pemasangan.",
    pricingNote:
      "Hantar gambar, ukuran dan lokasi untuk penilaian lebih tepat. Harga disemak secara berkala.",
    startingFrom: "Bermula dari",
    priceTableService: "Perkhidmatan",
    priceTableScope: "Skop",
    priceTablePrice: "Harga Permulaan",
    priceTableUnit: "Unit",
    costFactorsEyebrow: "Faktor Kos",
    costFactorsTitle: "Apa yang mempengaruhi kos {name}?",
    costFactorsDescription:
      "Memahami faktor yang mempengaruhi harga membantu anda membandingkan sebut harga secara adil dan menyediakan butiran berguna untuk penilaian.",
    materialsEyebrow: "Bahan",
    materialsTitle: "Bahan biasa untuk {name}",
    materialsDescription:
      "Bahan dipilih berdasarkan jenis hartanah, kegunaan dan bajet. Kami menggunakan bahan standard yang sesuai untuk rumah di Malaysia.",
    durationEyebrow: "Tempoh",
    durationTitle: "Berapa lama {name} mengambil masa?",
    durationDescription:
      "Tempoh bergantung pada skop, keadaan tapak dan masa pengeringan atau curing jika berkaitan.",
    durationNote:
      "Jangka masa adalah anggaran. Jadual sebenar disahkan dalam sebut harga selepas penilaian.",
    includesEyebrow: "Skop",
    includesTitle: "Apa yang biasanya termasuk",
    excludesTitle: "Apa yang biasanya tidak termasuk",
    answerFirstEyebrow: "Jawapan Pantas",
    answerFirstTitle: "Soalan biasa tentang {name}",
    answerFirstDescription:
      "Jawapan terus kepada soalan yang paling kerap ditanya pelanggan dan enjin carian tentang perkhidmatan ini.",
    quotePromptTitle: "Perlukan harga lebih tepat?",
    quotePromptBody:
      "Kongsi gambar kawasan terjejas, ukuran, jenis hartanah dan lokasi. Kami semak butiran dahulu dan bantu tentukan langkah seterusnya sebelum sebut harga.",
    lastReviewedLabel: "Semakan terakhir",
    viewPricing: "Lihat panduan harga",
    pricingFactorsTitle: "Apa yang mempengaruhi harga",
  },
  subServicePage: {
    suitableEyebrow: "Adakah ini servis yang betul?",
    suitableTitle: "Bila {name} ialah pilihan yang sesuai",
    projectEyebrow: "Kerja Kami",
    projectTitle: "Lihat projek kerja {service} kami",
    projectDescription:
      "Projek {service} sebenar yang Renovix siapkan di Kuala Lumpur & Selangor.",
    relatedSubTitle: "Servis {service} yang lain",
    backToService: "Kembali ke {service}",
    includedEyebrow: "Apa yang termasuk",
    includedTitle: "Biasanya termasuk dalam {name}",
    excludedTitle: "Apa yang biasanya tidak termasuk",
    ctaHeading: "Perlukan {name} di Kuala Lumpur & Selangor?",
    processTitle: "Cara kami menjalankan {name}",
  },
  problemsIndex: {
    metaTitle:
      "Renovix Home Services | Masalah Rumah di KL & Selangor",
    metaDescription:
      "Terokai masalah rumah yang kerap kami bantu di Kuala Lumpur & Selangor — jubin, elektrik, cat, siling, paip, kalis air dan kerja am, lengkap dengan punca dan penyelesaian.",
    ogDescription:
      "Jawapan jelas untuk masalah rumah yang biasa di Lembah Klang, setiap satunya dipautkan kepada perkhidmatan Renovix yang betul.",
    breadcrumb: "Masalah",
    title: "Masalah Rumah Yang Kami Selesaikan di Kuala Lumpur & Selangor",
    lead: "Kebanyakan orang mencari perkhidmatan rumah dengan menerangkan masalah mereka, bukan nama perkhidmatan. Halaman ini menerangkan setiap masalah biasa, puncanya, tanda amaran dan cara Renovix menyelesaikannya — setiap satunya dipautkan kepada perkhidmatan yang berkaitan.",
  },
  problemPage: {
    breadcrumbProblems: "Masalah",
    heroCategoryFallback: "Masalah Rumah",
    whatItMeansEyebrow: "Apa Maksud Masalah Ini",
    whatItMeansTitle: "Memahami {name}",
    whatItMeansDescription:
      "Penerangan yang jelas dan jujur tentang apa yang sedang berlaku supaya anda tahu apa yang anda hadapi.",
    shortAnswerEyebrow: "Jawapan ringkas",
    shortAnswerNote:
      "Kami terangkan puncanya dan cara membaikinya, bukan sekadar gejalanya.",
    causesEyebrow: "Punca Biasa",
    causesTitle: "Apa yang biasanya menyebabkan {name}",
    causesDescription:
      "Memahami puncanya membantu anda tahu kenapa ia berlaku dan apa pembaikan yang betul.",
    warningSignsEyebrow: "Tanda Amaran",
    warningSignsTitle: "Tanda amaran yang perlu diperhatikan",
    warningSignsDescription:
      "Mengesan tanda-tanda ini awal selalunya dapat mengelakkan masalah kecil daripada menjadi pembaikan yang lebih besar.",
    solutionsEyebrow: "Penyelesaian Yang Mungkin",
    solutionsTitle: "Cara kami boleh membaikinya",
    solutionsDescription:
      "Pendekatan praktikal yang kami ambil untuk menyelesaikan masalah ini — daripada pembaikan khusus hingga penyelesaian yang lebih menyeluruh.",
    whenToCallEyebrow: "Bila Perlu Panggil Profesional",
    whenToCallTitle: "Bila bantuan profesional diperlukan",
    whenToCallDescription:
      "Ada masalah yang wajar ditangani awal, dan ada yang sepatutnya diserahkan kepada profesional. Berikut ialah bila anda perlu hubungi kami.",
    relatedServiceEyebrow: "Perkhidmatan Renovix Berkaitan",
    relatedServiceTitle: "Perkhidmatan yang mengendalikan masalah ini",
    relatedServiceDescription:
      "{problem} dikendalikan oleh pasukan {service} kami. Perkhidmatan berkaitan di bawah selalunya sebahagian daripada kerja yang sama.",
    mainServiceLabel: "Perkhidmatan utama",
    processEyebrow: "Proses Kami",
    propertyTypesEyebrow: "Jenis Hartanah",
    propertyTypesTitle: "Jenis Hartanah Yang Kami Bantu",
    faqsEyebrow: "Soalan Lazim",
    faqsTitle: "{name} — Soalan Lazim",
    faqsDescription:
      "Jawapan terus kepada soalan yang paling kerap ditanya pelanggan tentang masalah ini.",
    relatedProblemsEyebrow: "Masalah Berkaitan",
    relatedProblemsTitle: "Masalah yang sering berkait",
    relatedProblemsDescription:
      "Masalah-masalah ini kerap berlaku bersama di rumah-rumah sekitar Kuala Lumpur dan Selangor.",
    ctaHeading: "Perlukan bantuan untuk {name} di Kuala Lumpur & Selangor?",
    ctaTitle: "Menghadapi masalah ini di rumah?",
    ctaDescription:
      "Terangkan apa yang anda nampak dan lokasi hartanah anda, dan kami akan nasihati langkah seterusnya.",
  },
  areasIndex: {
    metaTitle:
      "Renovix Home Services | Kawasan Perkhidmatan di KL, Selangor & Lembah Klang",
    metaDescription:
      "Renovix berkhidmat di KL, Selangor dan Lembah Klang. Lihat panduan tempatan untuk kejiranan KL dan pekan Selangor — perkhidmatan dan masalah biasa.",
    ogDescription:
      "Panduan kawasan perkhidmatan tempatan untuk Kuala Lumpur, Selangor dan seluruh Lembah Klang.",
    breadcrumb: "Kawasan Perkhidmatan",
    title: "Kawasan Perkhidmatan Kami di Kuala Lumpur, Selangor & Lembah Klang",
    lead: "Renovix menyediakan perkhidmatan renovasi, pembaikan dan peningkatan rumah di seluruh Kuala Lumpur dan Selangor. Setiap panduan kawasan menerangkan konteks perumahan tempatan, perkhidmatan yang paling relevan di situ dan masalah yang kerap kami temui.",
    faqEyebrow: "Soalan Tentang Liputan",
    faqTitle: "Tentang kawasan perkhidmatan kami",
    faqDescription:
      "Jawapan praktikal untuk pemilik hartanah di kawasan yang kami liputi.",
    guidesEyebrow: "Kawasan Kami Bekerja",
    guidesTitle: "Pilih wilayah untuk diterokai",
    guidesDescription:
      "Kuala Lumpur merangkumi kejiranan bandar; Selangor pula mengelilinginya dengan bandar-bandar terbesar di Lembah Klang. Kedua-duanya membentuk kawasan perkhidmatan kami.",
    guidesCountSuffix: "panduan kawasan",
    viewRegion: "Lihat panduan kawasan",
    klangValleyTitle: "Apa maksud Lembah Klang",
    klangValleyParagraphs: [
      "Lembah Klang ialah kawasan bandar raya yang berpusat di Kuala Lumpur dan lembangan Sungai Klang, merangkumi ibu kota persekutuan serta daerah-daerah Selangor di sekelilingnya — Petaling, Klang, Shah Alam, Subang Jaya, Hulu Langat, Gombak, Sepang dan sebahagian Kuala Langat. Dari segi praktikal, ia bermaksud satu pasaran perumahan yang saling berkait: kerja kami bergerak merentasinya setiap hari, daripada kondominium di Kuala Lumpur hingga ke bandar-bandar di Selangor.",
      "Kami hanya menerbitkan maklumat kawasan yang jujur — tiada pejabat tempatan atau radius perkhidmatan yang direka. Liputan disahkan apabila anda bertanya, dan setiap panduan mencerminkan jenis perumahan serta corak renovasi yang biasa ditemui di lokasi tersebut.",
    ],
    ctaEyebrow: "Mulakan Sekarang",
    ctaTitle: "Merancang kerja rumah di Lembah Klang?",
    ctaDescription:
      "Beritahu kami tentang hartanah dan kerja yang anda rancang — gambar amat membantu. Kami akan menyemak butirannya, menjawap soalan anda dan menasihati langkah seterusnya sebelum sebut harga disediakan.",
    // Phase 15 hierarchy & coverage explorer
    hierarchyEyebrow: "Seni Bina Liputan",
    hierarchyTitle: "Hierarki Liputan Malaysia & Lembah Klang",
    hierarchyDescription:
      "Terokai liputan perkhidmatan komprehensif kami merentasi daerah, perbandaran, dan kejiranan di Kuala Lumpur dan Selangor.",
    activeCoverageTitle: "Lokasi Perkhidmatan Aktif (Lembah Klang)",
    expansionRoadmapTitle: "Pelan Hala Tuju Pengembangan Masa Depan",
    expansionRoadmapBody:
      "Renovix beroperasi secara aktif di seluruh Kuala Lumpur, Selangor, dan Lembah Klang. Pengembangan ke Pulau Pinang, Johor, dan Negeri Sembilan dirancang untuk fasa masa depan tanpa menjejaskan mutu kerja tempatan.",
    districtExplorerTitle: "Terokai Mengikut Daerah Pentadbiran",
    districtExplorerDescription:
      "Cari perbandaran atau kejiranan anda yang dikumpulkan mengikut daerah pentadbiran tempatan.",
  },
  areaRegion: {
    breadcrumbAreas: "Kawasan Perkhidmatan",
    areasEyebrow: "Panduan Kawasan",
    areasTitle: "Kawasan Yang Kami Layani di {name}",
    areasDescription:
      "Setiap panduan merangkumi jenis perumahan setempat, masalah yang kami lihat di sana, perkhidmatan yang paling kerap diminta dan nota praktikal tentang bekerja di kawasan itu.",
    landscapeEyebrow: "Landskap Perumahan",
    landscapeTitle: "Memahami perumahan di {name}",
    servicesEyebrow: "Perkhidmatan Popular",
    servicesTitle: "Perkhidmatan Paling Diminta di {name}",
    faqsEyebrow: "Soalan Lazim",
    faqsTitle: "{name} — Soalan Lazim",
    faqsDescription: "Jawapan praktikal untuk pemilik hartanah di wilayah ini.",
    otherRegion: "Lihat wilayah satu lagi",
    otherTitle: "Kami juga berkhidmat di {name}",
    otherBody:
      "Lihat panduan kawasan {name} kami untuk maklumat perumahan setempat, masalah biasa dan perkhidmatan yang ditawarkan.",
    exploreOther: "Terokai {name}",
    ctaTitle: "Merancang kerja di wilayah ini?",
    ctaDescription:
      "Kongsi kawasan anda, jenis hartanah dan kerja yang diperlukan, dan kami akan bantu tentukan langkah seterusnya.",
    districtsTitle: "Daerah & Kelompok Perbandaran di {name}",
    districtsDescription:
      "Disusun mengikut daerah pentadbiran dan perbandaran tempatan di {name}.",
  },
  areaPage: {
    breadcrumbAreas: "Kawasan Perkhidmatan",
    servicesEyebrow: "Perkhidmatan Yang Tersedia",
    servicesTitle: "Perkhidmatan Rumah Yang Tersedia di {name}",
    serviceInArea: "{service} di {name}",
    allAreasIn: "Semua kawasan di {name}",
    guidesCount: "{count} panduan lokasi di seluruh {name}.",
    browseRegion: "Lihat {name}",
    schemaServiceName: "Perkhidmatan renovasi & pembaikan rumah di {name}",
    schemaServiceType: "Perkhidmatan renovasi dan pembaikan rumah",
    schemaCatalogName: "Perkhidmatan Renovix yang tersedia di {name}",
    propertyTypesEyebrow: "Jenis Hartanah",
    propertyTypesTitle: "Jenis Hartanah di {name}",
    problemsEyebrow: "Masalah Biasa",
    problemsTitle: "Masalah Renovasi & Pembaikan Yang Biasa di {name}",
    processEyebrow: "Proses Kami",
    contextEyebrow: "Konteks Perkhidmatan Tempatan",
    contextTitle: "Bekerja di {name} — Apa Yang Perlu Dijangka",
    relatedEyebrow: "Perkhidmatan Berkaitan",
    relatedTitle: "Perkhidmatan Yang Sering Digabungkan di {name}",
    relatedDescription:
      "Kebanyakan projek di {name} melibatkan beberapa bidang kerja. Merancangnya serentak memastikan urutan kerja betul dan tapak kekal teratur.",
    nearbyEyebrow: "Kawasan Berhampiran",
    nearbyTitle: "Kawasan Lain Yang Kami Layani Berhampiran {name}",
    nearbyDescription: "Kawasan lain yang kami layani berhampiran lokasi ini.",
    faqsEyebrow: "Soalan Lazim",
    faqsTitle: "{name} — Soalan Lazim",
    faqsDescription: "Jawapan praktikal untuk pemilik hartanah di kawasan ini.",
    problemsLink: "Ketahui lebih lanjut tentang masalah ini",
    coverageNoteTitle: "Liputan, dinyatakan dengan jujur",
    coverageNote:
      "Panduan ini menerangkan kawasan tempat kami bekerja dan konteks tempatan yang kami ambil kira semasa merancang. Ia tidak mendakwa adanya pejabat fizikal, radius perkhidmatan tetap atau pasukan tempatan di lokasi ini.",
    ctaHeading: "Merancang kerja di {name}? Mulakan dengan sebut harga percuma.",
    ctaEyebrow: "Dapatkan Sebut Harga Percuma di {name}",
    ctaTitle: "Merancang kerja di kawasan ini?",
    ctaDescription:
      "Kongsi jenis hartanah, kerja yang diperlukan dan lokasi anda, dan kami akan bantu tentukan langkah seterusnya.",
    // Phase 15 local SEO & search-intent
    answerFirstEyebrow: "Jawapan Terus",
    answerFirstTitle: "Jawapan Terus untuk Perkhidmatan Rumah di {name}",
    answerFirstDescription:
      "Fakta terus mengenai liputan, harga permulaan, bantuan segera, dan proses sebut harga di {name}.",
    coverageLabel: "Liputan Perkhidmatan & Berdekatan Saya",
    pricingLabel: "Harga Permulaan & Anggaran",
    emergencyLabel: "Pembaikan Segera & Dasar Keselamatan",
    quotationLabel: "Cara Mendapatkan Sebut Harga Bertulis",
    pricingEyebrow: "Ketelusan Harga",
    pricingTitle: "Harga Permulaan Indikatif di {name}",
    pricingDescription:
      "Kadar permulaan standard Lembah Klang untuk perkhidmatan utama kami. Sebut harga akhir disahkan selepas penilaian keadaan hartanah anda.",
    pricingDisclaimer:
      "Harga bermula daripada jumlah yang dinyatakan. Sebut harga akhir bergantung pada keadaan tapak, skop, bahan, kebolehcapaian dan keperluan pemasangan.",
    pricingFactorsTitle: "Faktor Kos Tempatan di {name}",
    pricingFactorsBody:
      "Bangunan strata bertingkat tinggi memerlukan permit pengurusan dan tempahan lif; rumah teres matang mungkin memerlukan penilaian paip dan pendawaian lama.",
    matrixEyebrow: "Skop & Niat Carian",
    matrixTitle: "Skop Renovasi & Pembaikan Popular di {name}",
    matrixDescription:
      "Permintaan perkhidmatan kediaman dan komersial biasa yang kami kendalikan di kawasan kejiranan ini.",
    matrixRepair: "Pembaikan & Mengesan Masalah",
    matrixInstall: "Pemasangan & Naik Taraf",
    matrixFullReno: "Renovasi Penuh & Komersial",
    matrixUrgentTag: "Bantuan Keselamatan Segera",
    hierarchyEyebrow: "Hierarki Lokasi",
    districtLabel: "Daerah",
    stateLabel: "Negeri / Wilayah",
  },
  about: {
    metaTitle: "Tentang Renovix Home Services | KL & Selangor",
    metaDescription:
      "Ketahui pendekatan praktikal Renovix Home Services terhadap kerja renovasi, pembaikan dan peningkatan rumah di Kuala Lumpur, Selangor dan Lembah Klang.",
    breadcrumb: "Tentang Kami",
    eyebrow: "Tentang Renovix",
    title: "Perkhidmatan rumah yang praktikal, dirancang dengan jelas",
    description:
      "Renovix Home Services menghimpunkan keperluan renovasi, pembaikan dan peningkatan rumah dalam satu titik permulaan yang praktikal untuk rumah di Kuala Lumpur, Selangor dan Lembah Klang.",
    approachEyebrow: "Cara kami mengendalikan kerja rumah",
    approachTitle:
      "Laluan yang jelas daripada soalan pertama hingga langkah seterusnya yang betul",
    approachParagraphs: [
      "Kerja peningkatan rumah lebih mudah diurus apabila skopnya jelas dan jenis kerja yang berkaitan dipertimbangkan bersama. Renovix memberi tumpuan untuk membantu pemilik rumah menerangkan kerja, memahami pilihan perkhidmatan yang ada dan meneruskan dengan pelan yang praktikal.",
      "Sama ada keperluannya pembaikan kecil, naik taraf sebuah bilik atau skop renovasi yang lebih luas, titik permulaannya sama: dengar butirannya, pertimbangkan konteks hartanah dan sampaikan langkah seterusnya dengan jelas. Apabila beberapa jenis kerja terlibat, merancang urutannya lebih awal membantu memastikan kerja kekal fokus.",
    ],
    approachLink: "Beritahu kami tentang kerja yang anda rancang",
    standardsEyebrow: "Apa yang menjadi panduan perkhidmatan kami",
    standardsTitle: "Standard yang jelas untuk setiap pertanyaan",
    standardsLead:
      "Matlamatnya mudah: memudahkan kerja yang betul dipertimbangkan untuk rumah anda, tanpa andaian yang tidak perlu atau pertukaran tanggungjawab yang mengelirukan.",
    principles: [
      {
        title: "Kerja tangan yang profesional",
        description:
          "Persediaan yang teliti, perhatian terhadap perincian dan kemasan yang kemas adalah teras kepada cara kerja rumah sepatutnya dirancang dan dijalankan.",
      },
      {
        title: "Perkhidmatan yang boleh diharap",
        description:
          "Pengalaman yang dipercayai bermula dengan skop yang jelas, jangkaan yang munasabah dan pelan praktikal untuk kerja yang bakal dijalankan.",
      },
      {
        title: "Komunikasi yang jelas",
        description:
          "Skop kerja, langkah seterusnya dan butiran tapak yang berguna sepatutnya mudah difahami sebelum kerja diatur.",
      },
      {
        title: "Penyelesaian yang praktikal",
        description:
          "Cadangan hendaklah sesuai dengan keadaan rumah, kegunaan ruang dan kerja yang benar-benar diperlukan.",
      },
      {
        title: "Perkhidmatan yang mengutamakan pelanggan",
        description:
          "Setiap pertanyaan bermula dengan keutamaan, soalan, lokasi dan konteks hartanah pemilik rumah — bukan jawapan seragam untuk semua.",
      },
    ],
    servicesEyebrow: "Satu titik permulaan yang praktikal",
    servicesTitle:
      "Pelbagai perkhidmatan rumah, dihubungkan apabila ia masuk akal",
    servicesLead:
      "Renovix meliputi pelbagai keperluan peningkatan rumah. Anda boleh meneroka sesuatu perkhidmatan secara berasingan atau menerangkan skop yang lebih luas apabila beberapa jenis kerja mungkin berkaitan.",
    coverageEyebrow: "Kawasan kami bekerja",
    coverageTitle: "Kuala Lumpur, Selangor & Lembah Klang",
    coverageBody:
      "Liputan perkhidmatan Renovix yang dinyatakan termasuk Kuala Lumpur, Selangor dan kawasan Lembah Klang yang lebih luas. Kongsi lokasi anda bersama butiran kerja supaya langkah seterusnya yang betul dapat dipertimbangkan.",
    kualaLumpurLink: "Kawasan perkhidmatan Kuala Lumpur",
    selangorLink: "Kawasan perkhidmatan Selangor",
    allAreasLink: "Semua kawasan perkhidmatan",
    ctaEyebrow: "Mulakan perbualan",
    ctaTitle: "Beritahu kami apa yang rumah anda perlukan",
    ctaDescription:
      "Kongsi pembaikan, naik taraf atau renovasi yang anda rancang bersama jenis hartanah dan lokasi anda, dan kami akan bantu tentukan langkah seterusnya.",
    ctaSecondary: "Hubungi Renovix",
  },
  contact: {
    metaTitle: "Hubungi Renovix Home Services | KL & Selangor",
    metaDescription:
      "Hubungi Renovix Home Services tentang kerja renovasi, pembaikan dan peningkatan rumah di Kuala Lumpur, Selangor dan Lembah Klang, atau mulakan permintaan sebut harga.",
    breadcrumb: "Hubungi Kami",
    eyebrow: "Hubungi Renovix",
    title: "Mulakan dengan soalan tentang perkhidmatan rumah anda",
    description:
      "Telefon atau WhatsApp kami di +601159259521, e-mel renovixhomeservices@gmail.com, atau kongsi skop kerja melalui permintaan sebut harga untuk kerja di Kuala Lumpur, Selangor dan Lembah Klang.",
    heroPrimary: "Mulakan Permintaan Sebut Harga",
    detailsEyebrow: "Maklumat hubungan",
    detailsTitle: "Cara untuk menghubungi kami",
    detailsLead:
      "Hubungi Renovix Home Services terus melalui telefon, WhatsApp atau e-mel. Kami menjawab pertanyaan dalam waktu operasi dan akan beritahu dengan jujur sama ada lawatan tapak diperlukan sebelum sebut harga disediakan.",
    channels: {
      business: "Perniagaan",
      businessHelper:
        "Nama rasmi syarikat, digunakan di seluruh laman web, pada invois dan dalam surat-menyurat.",
      phone: "Nombor Telefon",
      phoneHelper:
        "Telefon kami dalam waktu operasi untuk terangkan kerja yang anda perlukan.",
      whatsapp: "Nombor WhatsApp",
      whatsappHelper:
        "Cara paling pantas untuk hubungi kami — hantar gambar masalah bersama mesej anda.",
      email: "E-mel",
      emailHelper: "Sesuai untuk skop yang lebih besar, pelan, sebut harga dan dokumen.",
      address: "Alamat",
      addressHelper:
        "Pangkalan kami di Mont Kiara. Kerja dijalankan di premis anda di seluruh KL, Selangor dan Lembah Klang.",
      hours: "Waktu Operasi",
      hoursHelper: "Panggilan, mesej WhatsApp dan e-mel dijawab dalam waktu ini.",
    },
    ctaEyebrow: "Hubungi kami",
    ctaTitle: "Kongsi kerja yang anda perlukan",
    ctaBody:
      "Permintaan sebut harga ialah cara paling jelas untuk berkongsi perkhidmatan, hartanah, lokasi dan penerangan ringkas. Gambar boleh membantu proses penilaian.",
    whatsappEyebrow: "WhatsApp",
    whatsappTitle: "Lebih selesa guna WhatsApp?",
    whatsappBody:
      "Hantar mesej bersama beberapa gambar dan lokasi anda. WhatsApp biasanya cara paling cepat untuk terangkan kerja pembaikan dan tentukan langkah seterusnya.",
    whatsappNote: "Telefon atau WhatsApp:",
    areasEyebrow: "Maklumat kawasan perkhidmatan",
    areasTitle: "Kuala Lumpur, Selangor & Lembah Klang",
    areasLead:
      "Liputan Renovix yang dinyatakan termasuk Kuala Lumpur, Selangor dan kawasan Lembah Klang yang lebih luas. Sila sertakan kawasan atau kejiranan anda dalam pertanyaan supaya kerja dapat dipertimbangkan mengikut konteks.",
    kualaLumpurDescription: "Panduan bandar dan kejiranan",
    selangorDescription: "Panduan negeri dan pekan",
    klangValleyDescription: "Terokai semua kawasan perkhidmatan",
  },
  quote: {
    metaTitle: "Renovix Home Services | Sebut Harga di KL & Selangor",
    metaDescription:
      "Minta sebut harga renovasi atau pembaikan rumah daripada Renovix untuk KL, Selangor dan Lembah Klang. Kongsi perkhidmatan, lokasi dan gambar kerja.",
    breadcrumb: "Dapatkan Sebut Harga",
    eyebrow: "Permintaan Sebut Harga",
    title: "Dapatkan sebut harga untuk keperluan rumah anda",
    description:
      "Kongsi perkhidmatan, jenis hartanah, lokasi dan kerja yang anda perlukan. Butiran dan gambar yang berguna boleh membantu penilaian; sebut harga tidak dijana serta-merta.",
    heroPrimary: "Mulakan Permintaan Sebut Harga",
    formTitle: "Beritahu kami tentang kerja anda",
    formLead:
      "Semakin banyak butiran berguna yang anda kongsi, semakin mudah untuk kami memahami apa yang mungkin diperlukan bagi penilaian.",
    sections: {
      contact: "Bagaimana kami boleh menghubungi anda?",
      job: "Tentang kerja",
    },
    labels: {
      name: "Nama",
      whatsapp: "Nombor WhatsApp",
      email: "E-mel",
      propertyType: "Jenis Hartanah",
      service: "Perkhidmatan Diperlukan",
      subService: "Sub-perkhidmatan",
      location: "Lokasi",
      description: "Penerangan",
      preferredDate: "Tarikh Pilihan",
      preferredContact: "Cara hubungan pilihan",
      requiredText: "(wajib)",
    },
    placeholders: {
      name: "Nama anda",
      whatsapp: "Nombor WhatsApp anda",
      email: "anda@contoh.com",
      propertyType: "Pilih jenis hartanah",
      service: "Pilih perkhidmatan",
      subService: "Pilih kerja khusus (pilihan)",
      subServiceDisabled: "Pilih perkhidmatan dahulu",
      location: "Kawasan, bandar atau kejiranan",
      description:
        "Terangkan masalah atau kerja yang anda rancang, termasuk ukuran, butiran akses atau pertimbangan masa yang berguna.",
    },
    help: {
      phone: "Nombor untuk kami menghubungi anda — WhatsApp atau panggilan, mengikut pilihan anda di bawah.",
      email: "Pilihan, kecuali anda mahu dihubungi melalui e-mel.",
      subService: "Pilih pilihan yang paling hampir, atau biarkan kosong.",
      location:
        "Sertakan kawasan di Kuala Lumpur, Selangor atau Lembah Klang tempat kerja diperlukan.",
      preferredDate: "Pilihan. Tarikh hanyalah keutamaan, bukan tempahan.",
      requiredNote: "Ruangan bertanda * wajib diisi.",
      preferredContact: "Kami akan guna cara ini dahulu apabila membalas.",
    },
    contactMethods: {
      whatsapp: "WhatsApp",
      phone: "Panggilan telefon",
      email: "E-mel",
    },
    validation: {
      required: "Ruangan ini wajib diisi.",
      name: "Sila masukkan nama anda.",
      phone: "Sila masukkan nombor telefon yang sah.",
      email: "Sila masukkan alamat e-mel yang sah.",
      emailRequired: "Sila masukkan alamat e-mel supaya kami boleh membalas melalui e-mel.",
      propertyType: "Sila pilih jenis hartanah.",
      service: "Sila pilih perkhidmatan.",
      subService: "Sila pilih sub-perkhidmatan daripada senarai.",
      location: "Sila masukkan kawasan tempat kerja diperlukan.",
      description: "Sila terangkan kerja yang anda perlukan.",
      descriptionTooLong: "Mesej ini terlalu panjang. Sila ringkaskan.",
      preferredContact: "Sila pilih cara anda mahu kami menghubungi anda.",
    },
    whatsappQuickTitle: "Lebih suka WhatsApp?",
    whatsappQuickBody:
      "Tak perlu isi borang — terus mesej kami dan kongsi butiran dalam sembang.",
    whatsappQuickCta: "Sembang di WhatsApp",
    whatsappQuickMessage:
      "Helo Renovix Home Services, saya ingin bertanya tentang sebut harga untuk kerja perkhidmatan rumah.",
    deliveryTitle: "Cara borang ini dihantar",
    deliveryBody:
      "Permintaan anda dihantar kepada pasukan kami. Sebut harga tidak dijana serta-merta — kami semak butiran dahulu dan mungkin meminta maklumat atau gambar lanjut. Anda juga boleh WhatsApp atau telefon +601159259521.",
    submit: "Hantar Permintaan Sebut Harga",
    submitting: "Menghantar permintaan anda...",
    successTitle: "Permintaan diterima",
    successBody:
      "Terima kasih! Permintaan sebut harga anda telah diterima. Pasukan kami akan menghubungi anda menggunakan cara pilihan anda.",
    successPhotosTitle: "Ada gambar kerja tersebut?",
    successPhotosBody:
      "Gambar membantu penilaian awal. Hantar gambar kepada kami melalui WhatsApp selepas permintaan ini.",
    successPhotosCta: "Hantar gambar di WhatsApp",
    successPhotosMessage:
      "Helo Renovix Home Services, saya baru sahaja menghantar permintaan sebut harga untuk {service}. Berikut ialah gambar kerja tersebut.",
    errorTitle: "Permintaan tidak dapat dihantar",
    errorBody:
      "Kami tidak dapat menghantar permintaan anda buat masa ini. Sila cuba lagi atau hubungi kami di WhatsApp.",
    whatsappFallback:
      "Jika anda perlu menghubungi kami sekarang, mesej Renovix Home Services di WhatsApp.",
    whatsappFallbackCta: "Mesej kami di WhatsApp",
    whatsappFallbackMessage:
      "Helo Renovix Home Services, saya cuba hantar permintaan sebut harga di laman web tetapi tidak berjaya. Saya ingin meminta sebut harga.",
    privacyNote:
      "Maklumat yang dihantar digunakan untuk membalas pertanyaan anda.",
    asideEyebrow: "Apa yang berlaku seterusnya",
    asideTitle: "Penilaian yang teliti, bukan janji serta-merta",
    asideBody:
      "Sebut harga yang berguna bergantung kepada skop dan keadaan kerja. Maklumat yang anda kongsi membantu menentukan sama ada butiran lanjut atau penilaian diperlukan.",
    guidanceEyebrow: "Cara menjadikan permintaan anda lebih berguna",
    steps: [
      {
        title: "Kongsi butiran asas",
        description:
          "Pilih perkhidmatan, beritahu kami lokasi kerja dan sertakan penerangan yang jelas tentang masalah atau projek.",
      },
      {
        title: "Tambah konteks yang membantu",
        description:
          "Gambar, ukuran, butiran hartanah dan nota akses bangunan boleh membantu penilaian awal.",
      },
      {
        title: "Semakan sebelum sebut harga",
        description:
          "Butiran akan dipertimbangkan dahulu. Bergantung kepada kerja, maklumat lanjut atau penilaian mungkin diperlukan sebelum sebut harga disediakan.",
      },
    ],
    statusTitle: "Status penghantaran borang",
    statusBody:
      "Borang ini menghantar pertanyaan anda kepada Renovix Home Services. Kami akan menghubungi anda menggunakan cara pilihan anda. Anda juga boleh terus WhatsApp atau telefon +601159259521, atau e-mel renovixhomeservices@gmail.com.",
    faqEyebrow: "Soalan sebut harga",
    faqTitle: "Soalan lazim",
    faqs: [
      {
        question: "Bagaimana saya meminta sebut harga?",
        answer:
          "Isi borang di halaman ini dengan perkhidmatan, jenis hartanah, lokasi dan penerangan ringkas — atau mesej kami di WhatsApp. Setiap permintaan disemak, dan kami akan menghubungi anda menggunakan cara hubungan pilihan anda.",
      },
      {
        question: "Adakah saya akan menerima sebut harga serta-merta?",
        answer:
          "Tidak. Sebut harga tidak dijana serta-merta. Butiran disemak dahulu, dan bergantung kepada kerja, maklumat lanjut, gambar atau penilaian mungkin diperlukan sebelum sebut harga disediakan.",
      },
      {
        question: "Boleh saya hantar gambar kerja?",
        answer:
          "Ya. Selepas menghantar borang, hantar gambar anda melalui WhatsApp. Gambar yang jelas bersama penerangan ringkas membantu penilaian awal, tetapi tidak menggantikan penilaian jika diperlukan.",
      },
      {
        question: "Kawasan manakah yang diliputi?",
        answer:
          "Kuala Lumpur, Selangor dan Lembah Klang. Sertakan kawasan anda dalam permintaan sebut harga supaya lokasi dapat dipertimbangkan dengan betul.",
      },
    ],
    browseEyebrow: "Tidak pasti dari mana hendak mula?",
    browseTitle: "Lihat skop perkhidmatan sebelum meminta sebut harga",
    browseBody:
      "Halaman perkhidmatan menerangkan kerja yang tersedia, masalah biasa dan perkhidmatan berkaitan. Ini boleh memudahkan anda memilih pilihan yang betul dalam borang.",
    coverageEyebrow: "Liputan",
    coverageTitle: "Kerja di seluruh Kuala Lumpur, Selangor & Lembah Klang",
    coverageBody:
      "Sertakan kejiranan atau bandar anda dalam permintaan sebut harga. Anda juga boleh menggunakan panduan kawasan perkhidmatan untuk memahami konteks liputan tempatan.",
    propertyTypes: {
      "condominium-apartment": "Kondominium / apartmen",
      "terrace-landed-house": "Rumah teres / rumah bumi",
      "semi-detached-bungalow": "Rumah berkembar / banglo",
      "shop-office-commercial": "Kedai / pejabat / ruang komersial",
      "other-not-sure": "Lain-lain / belum pasti",
    },
    notSureOption: "Tidak pasti / pelbagai perkhidmatan",
  },
  blogIndex: {
    metaTitle: "Renovix Home Services | Panduan Renovasi Rumah untuk KL & Selangor",
    metaDescription:
      "Panduan praktikal tentang kos renovasi, bahan, pembaikan dan penyelenggaraan untuk rumah di Kuala Lumpur dan Selangor — berdasarkan senarai harga kami sendiri.",
    ogDescription:
      "Panduan kos, perbandingan bahan dan diagnosis pembaikan untuk rumah di Lembah Klang.",
    breadcrumb: "Panduan",
    title: "Panduan Renovasi & Pembaikan Rumah untuk Kuala Lumpur & Selangor",
    lead: "Jawapan terus kepada soalan yang orang tanya sebelum mengupah sesiapa: berapa kos sesuatu kerja, bahan mana sesuai untuk bilik mana, cara membezakan pembaikan daripada bina semula, dan bila sesuatu masalah memerlukan profesional. Setiap harga yang disebut datang daripada kadar rasmi kami.",
    eyebrow: "Pusat Pengetahuan",
    gridTitle: "Terokai panduan kami",
    gridDescription:
      "Setiap panduan menjawab satu soalan dengan tuntas dan dipautkan kepada halaman perkhidmatan, masalah dan kawasan yang berkaitan.",
    categoryEyebrow: "Kategori",
    readGuide: "Baca panduan",
    ctaEyebrow: "Mula Di Sini",
    ctaTitle: "Masih tidak pasti skop mana yang anda perlukan?",
    ctaDescription:
      "Terangkan kerja tersebut dan hantarkan beberapa gambar. Kami akan beritahu apa yang ditunjukkan oleh bukti sebelum memberi sebut harga.",
  },
  blogPage: {
    breadcrumbBlog: "Panduan",
    answerEyebrow: "Jawapan ringkas",
    keyPointsTitle: "Perkara penting",
    publishedLabel: "Diterbitkan",
    updatedLabel: "Dikemas kini",
    writtenByLabel: "Ditulis oleh",
    pricingNote:
      "Kadar di bawah datang daripada senarai harga rasmi kami dan merupakan harga permulaan — sebut harga akhir bergantung pada keadaan tapak sebenar dan skop kerja.",
    faqsEyebrow: "Soalan Lazim",
    faqsTitle: "Soalan yang orang tanya tentang perkara ini",
    relatedServicesTitle: "Perkhidmatan berkaitan panduan ini",
    relatedSubServicesTitle: "Kerja khusus yang dibincangkan di sini",
    relatedProblemsTitle: "Panduan masalah berkaitan",
    relatedProjectsTitle: "Kerja projek berkaitan",
    relatedAreasTitle: "Kawasan tempat kami menjalankan kerja ini",
    relatedArticlesTitle: "Panduan berkaitan",
    relatedAreasDescription:
      "Panduan tempatan untuk kawasan yang paling kerap menghadapi kerja seperti ini.",
    ctaHeading: "Perlukan kerja ini di Kuala Lumpur atau Selangor?",
    ctaDescription:
      "Beritahu kami tentang hartanah anda dan apa yang anda lihat. Kami akan nasihatkan langkah seterusnya sebelum sebut harga disediakan.",
  },
  guideLinks: {
    eyebrow: "Pusat Pengetahuan",
    serviceTitle: "Panduan tentang {name}",
    subServiceTitle: "Panduan tentang {name}",
    problemTitle: "Panduan yang menerangkan lebih lanjut",
    areaTitle: "Panduan untuk rumah di {name}",
    description:
      "Bacaan latar tentang kos, bahan dan apa yang terlibat dalam kerja ini.",
  },
  projects: {
    metaTitle: "Gambar Projek di Kuala Lumpur & Selangor | Renovix Home Services",
    metaDescription:
      "Gambar projek sebenar Renovix Home Services: kerja jubin, siling plaster, pendawaian elektrik, kimpalan dan renovasi di sekitar Kuala Lumpur dan Selangor.",
    breadcrumb: "Projek",
    eyebrow: "Projek",
    title: "Gambar sebenar kerja Renovix di Kuala Lumpur & Selangor",
    description:
      "Pilihan gambar daripada kerja sebenar Renovix, merangkumi kerja jubin, siling plaster dan lampu, pemasangan elektrik, kimpalan dan kerja logam, kelengkapan paip serta renovasi yang sedang berjalan.",
    statusEyebrow: "Mengenai gambar ini",
    statusTitle: "Gambar kerja yang telah kami laksanakan",
    statusBody:
      "Setiap gambar di halaman ini ialah gambar kerja yang dilaksanakan oleh pasukan kami. Nama pelanggan, alamat, tarikh, kos dan keputusan tidak diterbitkan kerana maklumat itu tidak dikongsi di sini. Setiap keterangan hanya menjelaskan apa yang kelihatan dalam gambar.",
    browseEyebrow: "Lihat mengikut kategori perkhidmatan",
    browseTitle: "Gambar projek mengikut jenis kerja",
    browseLead:
      "Tapis portfolio mengikut jenis kerja yang anda minati. Setiap kad membuka halaman projek dan memaut ke halaman perkhidmatan yang berkaitan.",
    allCategories: "Semua kategori",
    showingPrefix: "Memaparkan",
    showingSuffixOne: "projek.",
    showingSuffixMany: "projek.",
    showingNote: "Semua imej adalah daripada kerja yang dilaksanakan oleh pasukan kami.",
    emptyState: "Tiada gambar diterbitkan dalam kategori ini buat masa ini.",
    fallbackCategory: "Perkhidmatan",
    exploreServicePrefix: "Terokai perkhidmatan",
    viewProject: "Lihat projek",
    listRegion: "Portfolio projek",
    emptyEyebrow: "Projek",
    emptyTitle: "Pameran projek kami sedang dikemas kini",
    emptyBody:
      "Pameran projek sebenar sedang dikemas kini. Hubungi Renovix Home Services untuk membincangkan keperluan renovasi atau pembaikan rumah anda, dan kami boleh menerangkan kerja yang serupa dengan apa yang anda fikirkan.",
    emptyNote:
      "Kami hanya menerbitkan gambar kerja yang dilaksanakan oleh pasukan kami sendiri, dengan butiran yang telah disahkan oleh pelanggan. Tiada apa-apa di halaman ini merupakan gambar stok atau contoh rekaan.",
    emptyCtaPrimary: "Dapatkan Sebut Harga Percuma",
    emptyCtaSecondary: "WhatsApp Kami",
    futureEyebrow: "Bagaimana galeri ini bertambah",
    futureTitle: "Apa yang kami tambah pada setiap entri projek",
    futureLead:
      "Gambar baharu ditambah apabila kerja selesai dan imej dibenarkan untuk diterbitkan. Setiap satu diterangkan secara fakta, tanpa hasil yang direka.",
    futureItems: [
      {
        title: "Gambar daripada kerja sebenar",
        description: "Imej yang diambil di tapak semasa atau selepas kerja.",
      },
      {
        title: "Skop yang jelas",
        description:
          "Penerangan fakta tentang kerja, bukan hasil yang direka.",
      },
      {
        title: "Butiran yang disahkan",
        description:
          "Maklumat hartanah dan kawasan hanya apabila ia boleh dikongsi dengan tepat.",
      },
    ],
    ctaEyebrow: "Rancang kerja anda sendiri",
    ctaTitle: "Mahukan kerja seperti ini di tempat anda?",
    ctaDescription:
      "Terokai kategori perkhidmatan atau kongsi butiran pembaikan, naik taraf atau renovasi anda untuk memulakan permintaan sebut harga.",
    ctaSecondary: "Terokai Perkhidmatan",
  },
  projectPage: {
    metaTitleTemplate: "{title} — {category} | Renovix Home Services",
    eyebrow: "Projek",
    overviewEyebrow: "Gambaran Keseluruhan Projek",
    overviewTitle: "Mengenai kerja ini",
    scopeEyebrow: "Skop",
    scopeTitle: "Skop kerja",
    detailsEyebrow: "Butiran Projek",
    detailsTitle: "Butiran yang disahkan",
    detailLabels: {
      propertyType: "Jenis hartanah",
      workType: "Jenis kerja",
      completed: "Siap pada",
      duration: "Tempoh",
      materials: "Bahan",
    },
    galleryEyebrow: "Galeri",
    galleryTitle: "Gambar daripada kerja ini",
    beforeLabel: "Sebelum",
    afterLabel: "Selepas",
    servicesEyebrow: "Perkhidmatan Digunakan",
    servicesTitle: "Perkhidmatan Renovix yang terlibat dalam kerja ini",
    servicesBody:
      "Setiap projek memaut ke halaman perkhidmatan yang menerangkan kerja secara terperinci, termasuk sub-perkhidmatan yang kami laksanakan dan proses yang kami ikuti.",
    subServicesEyebrow: "Sub-Perkhidmatan",
    subServicesTitle: "Servis khusus di sebalik kerja ini",
    subServicesBody:
      "Setiap halaman sub-perkhidmatan menerangkan skop sebenar kerja yang ditunjukkan dalam gambar ini. Hanya sub-perkhidmatan yang benar-benar terlibat dalam kerja ini dipautkan — tiada yang diandaikan.",
    subServicesUnder: "Sebahagian daripada {service}",
    relatedGuidesEyebrow: "Panduan Berkaitan",
    relatedGuidesTitle: "Panduan untuk kerja seperti ini",
    relatedGuidesBody:
      "Panduan masalah praktikal yang berkaitan dengan servis dalam projek ini — apa yang boleh rosak, puncanya dan bila perlu menghubungi kami.",
    locationEyebrow: "Lokasi",
    locationTitle: "Di mana kami menjalankan kerja ini",
    locationUnverifiedBody:
      "Kawasan khusus untuk kerja ini tidak diterbitkan. Renovix Home Services menjalankan kerja jubin, siling, elektrik, kimpalan, paip dan renovasi di seluruh Kuala Lumpur, Selangor dan Lembah Klang.",
    honestyNote:
      "Hanya maklumat yang pelanggan bersetuju untuk dikongsi diterbitkan di sini. Nama pelanggan, alamat tapak, tarikh, harga dan tuntutan hasil tidak disertakan.",
    relatedEyebrow: "Kerja Lain",
    relatedTitle: "Lagi kerja {category}",
    relatedEmpty:
      "Lebih banyak gambar bagi jenis kerja ini akan ditambah apabila kerja selesai dan imej dibenarkan untuk diterbitkan.",
    backToProjects: "Kembali ke semua projek",
    ctaEyebrow: "Rancang kerja anda sendiri",
    ctaTitle: "Perlukan kerja seperti ini di hartanah anda?",
    ctaDescription:
      "Hantarkan butiran dan gambar kerja yang anda fikirkan, atau mesej kami di WhatsApp, dan kami boleh menasihatkan langkah seterusnya serta menyediakan sebut harga.",
  },
  faq: {
    metaTitle:
      "Renovix Home Services | Soalan Lazim Perkhidmatan di KL & Selangor",
    metaDescription:
      "Jawapan kepada soalan lazim tentang Renovix Home Services — pembaikan rumah, renovasi, liputan KL dan Selangor, kondominium, gambar untuk sebut harga dan kategori perkhidmatan khusus.",
    breadcrumb: "Soalan Lazim",
    eyebrow: "Soalan Yang Kerap Ditanya",
    title: "Jawapan jelas sebelum anda meminta sebut harga",
    description:
      "Dapatkan jawapan tentang perkhidmatan Renovix, liputan Kuala Lumpur dan Selangor, jenis hartanah, gambar untuk sebut harga dan setiap kategori perkhidmatan rumah.",
    asideEyebrow: "Cari jawapan yang betul",
    asideTitle: "Maklumat perkhidmatan tanpa tekaan",
    asideLead:
      "Jawapan ini menerangkan struktur perkhidmatan semasa dan langkah seterusnya. Untuk skop khusus sesuatu perkhidmatan, ikuti pautan dalam setiap jawapan yang berkaitan.",
    browseServices: "Lihat semua perkhidmatan",
    exploreAreas: "Terokai kawasan perkhidmatan",
    ctaEyebrow: "Masih ada soalan?",
    ctaTitle: "Kongsi butiran kerja dan soalan yang anda perlukan jawapannya",
    ctaDescription:
      "Permintaan sebut harga memberi anda cara berstruktur untuk menerangkan hartanah, lokasi dan kerja. Gambar boleh membantu penilaian, tetapi sebut harga tidak dijanjikan serta-merta.",
    explorePrefix: "Terokai",
    groups: [
      {
        id: "getting-started",
        label: "Untuk bermula",
        description:
          "Maklumat berguna sebelum anda berkongsi butiran kerja anda.",
      },
      {
        id: "areas-properties",
        label: "Kawasan & jenis hartanah",
        description:
          "Di mana Renovix bekerja dan apa yang perlu dipertimbangkan untuk jenis rumah berbeza.",
      },
      {
        id: "services",
        label: "Soalan khusus perkhidmatan",
        description:
          "Pautan terus ke halaman perkhidmatan yang menerangkan setiap skop kerja.",
      },
    ],
    answers: {
      "services-provided": {
        question: "Apakah perkhidmatan yang anda sediakan?",
        answer:
          "Renovix menyediakan sokongan renovasi, pembaikan dan peningkatan rumah merangkumi kerja jubin, kimpalan dan logam, elektrik, cat, siling dan partition, renovasi am, paip, kalis air, lantai dan kerja am.",
      },
      "request-quote": {
        question: "Bagaimana saya boleh meminta sebut harga?",
        answer:
          "Gunakan borang Dapatkan Sebut Harga untuk berkongsi kerja yang diperlukan, butiran hartanah dan lokasi anda. Anda juga boleh telefon atau WhatsApp kami di +601159259521, atau e-mel renovixhomeservices@gmail.com. Selepas maklumat disemak, butiran lanjut atau penilaian mungkin diperlukan sebelum sebut harga disediakan.",
      },
      "send-photos": {
        question: "Bolehkah saya hantar gambar untuk sebut harga?",
        answer:
          "Boleh. Gambar yang jelas tentang kawasan terjejas, bersama penerangan ringkas, boleh membantu penilaian awal. Gambar tidak menggantikan penilaian apabila ia diperlukan, dan tidak menjamin sebut harga segera.",
      },
      "multiple-services": {
        question:
          "Adakah anda menyediakan pelbagai perkhidmatan untuk satu projek renovasi?",
        answer:
          "Apabila projek memerlukan lebih daripada satu jenis kerja, seperti jubin, paip, elektrik dan cat, Renovix boleh membincangkan skop yang diselaraskan melalui satu saluran komunikasi. Kongsi senarai penuh kerja supaya urutannya dapat dipertimbangkan dengan betul.",
      },
      "areas-covered": {
        question: "Kawasan mana yang anda liputi?",
        answer:
          "Renovix meliputi Kuala Lumpur, Selangor dan kawasan Lembah Klang yang lebih luas. Lawati halaman Kawasan Perkhidmatan untuk panduan wilayah dan kawasan tempatan, kemudian kongsi lokasi anda semasa meminta sebut harga supaya kerja dapat dipertimbangkan dengan betul.",
      },
      "kuala-lumpur": {
        question: "Adakah anda bekerja di Kuala Lumpur?",
        answer:
          "Ya. Kuala Lumpur termasuk dalam liputan perkhidmatan Renovix yang dinyatakan. Bahagian Kawasan Perkhidmatan merangkumi panduan Kuala Lumpur dan halaman kejiranan; ketersediaan untuk sesuatu kerja disahkan selepas kerja dan lokasi disemak.",
      },
      selangor: {
        question: "Adakah anda bekerja di Selangor?",
        answer:
          "Ya. Selangor termasuk dalam liputan perkhidmatan Renovix yang dinyatakan. Bahagian Kawasan Perkhidmatan merangkumi panduan Selangor dan halaman pekan; ketersediaan untuk sesuatu kerja disahkan selepas kerja dan lokasi disemak.",
      },
      condos: {
        question: "Adakah anda bekerja di kondominium?",
        answer:
          "Kerja di kondominium dan apartmen boleh dibincangkan. Peraturan pengurusan bangunan, had waktu kerja, kelulusan renovasi dan pengaturan akses mungkin terpakai, jadi lebih baik jika butiran ini dikongsi awal dalam permintaan sebut harga.",
      },
      tiling: {
        question: "Adakah anda menyediakan kerja jubin?",
        answer:
          "Ya. Perkhidmatan jubin merangkumi pemasangan, penggantian dan pembaikan jubin untuk lantai, dinding, bilik air dan kawasan berkaitan. Halaman perkhidmatan menyenaraikan skop kerja jubin yang tersedia dan masalah yang biasa berlaku.",
      },
      welding: {
        question: "Adakah anda menyediakan kerja kimpalan dan logam?",
        answer:
          "Ya. Kerja kimpalan dan logam boleh merangkumi pagar, gril, susur tangan, struktur awning, pembaikan dan fabrikasi logam khas. Semak halaman perkhidmatan untuk melihat skop yang disenaraikan sebelum meminta sebut harga.",
      },
      electrical: {
        question: "Adakah anda menyediakan kerja elektrik?",
        answer:
          "Ya. Halaman perkhidmatan elektrik merangkumi skop pemasangan, pendawaian, pencahayaan, soket, suis dan pemeriksaan kerosakan yang disenaraikan. Kerja elektrik hendaklah dinilai dan dijalankan selaras dengan keperluan Malaysia yang terpakai.",
      },
      painting: {
        question: "Adakah anda menyediakan kerja cat?",
        answer:
          "Ya. Perkhidmatan cat termasuk kerja cat dalaman dan luaran, cat semula, sentuhan semula dan kemasan dinding yang disenaraikan. Halaman perkhidmatan menerangkan kerja persediaan dan kerja permukaan berkaitan yang mungkin relevan.",
      },
      "ceiling-partition": {
        question: "Adakah anda menyediakan kerja siling dan partition?",
        answer:
          "Ya. Perkhidmatan siling dan partition merangkumi kerja pemasangan, pembaikan dan penggantian siling yang disenaraikan, bersama skop partition gypsum, drywall, kaca dan lain-lain. Halaman perkhidmatan mengasingkan pilihan siling dan partition yang tersedia.",
      },
      renovation: {
        question: "Adakah anda menyediakan kerja renovasi am?",
        answer:
          "Ya. Renovasi am merangkumi skop renovasi teras yang disenaraikan dan boleh dibincangkan bersama kerja kemasan berkaitan. Halaman perkhidmatan menerangkan jenis kerja renovasi dan cara skop pelbagai perkhidmatan boleh dirancang.",
      },
      plumbing: {
        question: "Adakah anda menyediakan kerja paip?",
        answer:
          "Ya. Perkhidmatan paip merangkumi kerja pembaikan dan pemasangan yang disenaraikan untuk paip, pili, tandas, singki, pancuran, saliran dan masalah berkaitan. Halaman perkhidmatan menerangkan skop kerja paip yang tersedia.",
      },
      waterproofing: {
        question: "Adakah anda menyediakan kerja kalis air?",
        answer:
          "Ya. Kerja kalis air tersedia untuk bilik air, tandas, balkoni, bumbung, dinding dan kawasan yang mudah lembap yang disenaraikan. Halaman perkhidmatan menerangkan skop kerja dan masalah resapan air yang mungkin memerlukan penilaian.",
      },
      flooring: {
        question: "Adakah anda menyediakan kerja lantai?",
        answer:
          "Ya. Perkhidmatan lantai merangkumi kerja pembaikan, penggantian dan kemasan lantai yang disenaraikan untuk jenis lantai dan kawasan yang sesuai. Lawati halaman perkhidmatan untuk melihat pilihan yang tersedia.",
      },
      handyman: {
        question: "Adakah anda menyediakan perkhidmatan kerja am?",
        answer:
          "Ya. Sokongan kerja am tersedia untuk pembaikan kecil, pemasangan, pelarasan dan tugas penyelenggaraan harian yang disenaraikan. Halaman perkhidmatan kerja am menyenaraikan kerja khusus yang boleh dibincangkan.",
      },
    },
  },
  legalPage: {
    eyebrow: "Undang-undang",
    privacyTitle: "Dasar Privasi",
    privacyDescription:
      "Cara Renovix Home Services mengendalikan maklumat yang anda pilih untuk hantar melalui laman web dan saluran permintaan sebut harga.",
    privacyMetaDescription:
      "Dasar Privasi untuk laman web, borang sebut harga dan saluran hubungan Renovix Home Services.",
    termsTitle: "Terma & Syarat",
    termsDescription:
      "Terma asas untuk menggunakan laman web Renovix Home Services, meminta sebut harga dan menghubungi perniagaan.",
    termsMetaDescription:
      "Terma dan syarat penggunaan laman web Renovix Home Services serta permintaan perkhidmatan.",
    privacySections: [
      {
        title: "Skop dasar ini",
        paragraphs: [
          "Dasar ini menerangkan cara Renovix Home Services mengendalikan maklumat yang anda pilih untuk hantar melalui laman web ini, borang sebut harga, e-mel atau WhatsApp.",
        ],
      },
      {
        title: "Maklumat yang mungkin anda berikan",
        paragraphs: [
          "Borang sebut harga mungkin meminta maklumat yang diperlukan untuk memahami dan menjawab pertanyaan anda. Sila berikan maklumat yang berkaitan dengan kerja sahaja.",
        ],
        items: [
          "Nama dan nombor telefon anda, serta alamat e-mel jika anda memilih untuk memberikannya.",
          "Jenis hartanah, perkhidmatan diminta, sub-perkhidmatan pilihan, lokasi, penerangan kerja, cara hubungan pilihan dan tarikh pilihan.",
          "Bilangan fail imej yang dipilih dalam borang. Borang semasa tidak memuat naik fail tersebut ke laman web ini; jika perlu, ia meminta anda menghantar gambar secara berasingan melalui WhatsApp.",
        ],
      },
      {
        title: "Cara maklumat digunakan",
        paragraphs: [
          "Renovix menggunakan maklumat pertanyaan untuk membalas, memahami kerja yang diminta, mengatur perbincangan atau penilaian tapak, menyediakan sebut harga dan menyimpan rekod pertanyaan yang sesuai. Maklumat juga digunakan untuk melindungi borang awam daripada spam dan penyalahgunaan.",
        ],
      },
      {
        title: "Pembekal perkhidmatan dan perkongsian",
        paragraphs: [
          "Apabila penghantaran e-mel dikonfigurasi, permintaan sebut harga dihantar melalui Resend ke peti masuk perniagaan. E-mel dan WhatsApp ialah perkhidmatan komunikasi berasingan dengan dasar masing-masing. Renovix tidak menjual maklumat pertanyaan. Maklumat mungkin dikongsi dengan pihak yang perlu mengendalikan pertanyaan atau melaksanakan perkhidmatan yang dipersetujui, atau apabila dikehendaki oleh undang-undang.",
        ],
      },
      {
        title: "Penyimpanan dan keselamatan",
        paragraphs: [
          "Maklumat pertanyaan disimpan hanya selama yang munasabah diperlukan untuk membalas, mengurus perkhidmatan, memenuhi kewajipan undang-undang atau perakaunan, atau menyelesaikan pertikaian. Tempoh tetap tidak dinyatakan kerana ia bergantung pada pertanyaan. Renovix menggunakan perlindungan praktikal pada laman web dan saluran komunikasi, tetapi tiada penghantaran internet boleh dijamin selamat sepenuhnya.",
        ],
      },
      {
        title: "Soalan dan permintaan",
        paragraphs: [
          "Untuk soalan privasi atau permintaan mengakses, membetulkan atau memadam maklumat yang anda hantar, hubungi Renovix Home Services di +601159259521 atau renovixhomeservices@gmail.com. Renovix mungkin perlu mengesahkan permintaan sebelum bertindak dan akan mengendalikannya tertakluk kepada keperluan yang terpakai.",
        ],
      },
      {
        title: "Kemas kini",
        paragraphs: [
          "Dasar ini mungkin dikemas kini apabila laman web, proses sebut harga atau keperluan yang terpakai berubah. Versi semasa ialah versi yang diterbitkan di halaman ini.",
        ],
      },
    ],
    termsSections: [
      {
        title: "Penggunaan laman web",
        paragraphs: [
          "Anda boleh menggunakan laman web ini untuk mengetahui tentang Renovix Home Services, menyemak maklumat perkhidmatan yang diterbitkan, meminta penilaian dan menghubungi perniagaan. Jangan salah guna laman web, cuba mengganggunya atau menghantar maklumat yang menyalahi undang-undang, berbahaya atau tidak berkaitan dengan pertanyaan.",
        ],
      },
      {
        title: "Sebut harga dan maklumat perkhidmatan",
        paragraphs: [
          "Harga yang diterbitkan ialah harga permulaan anggaran, bukan sebut harga akhir. Ketersediaan, skop, bahan, akses, keadaan tapak dan kelulusan yang diperlukan disahkan secara berasingan. Sebut harga bertulis atau perjanjian bertulis lain untuk projek tertentu mengawal skop, harga, masa dan pengecualian projek itu.",
        ],
      },
      {
        title: "Maklumat yang anda hantar",
        paragraphs: [
          "Anda bertanggungjawab memberikan maklumat hubungan dan projek yang cukup tepat untuk Renovix membalas. Jangan hantar kata laluan, butiran kad pembayaran, dokumen pengenalan atau maklumat sensitif lain melalui borang sebut harga kecuali diminta melalui saluran yang sesuai.",
        ],
      },
      {
        title: "Saluran komunikasi pihak ketiga",
        paragraphs: [
          "Laman web ini mungkin memaut ke WhatsApp, e-mel dan perkhidmatan lain yang dikendalikan pihak ketiga. Ketersediaan dan pengendalian maklumat mereka tertakluk kepada terma dan dasar mereka sendiri. Renovix tidak bertanggungjawab atas perkhidmatan pihak ketiga di luar kawalannya.",
        ],
      },
      {
        title: "Keselamatan dan ketersediaan",
        paragraphs: [
          "Liputan perkhidmatan tertumpu pada Kuala Lumpur, Selangor dan Lembah Klang yang lebih luas, tetapi sesuatu kerja masih tertakluk kepada penilaian dan penjadualan. Laman web ini bukan pengganti perkhidmatan kecemasan atau nasihat keselamatan profesional apabila terdapat bahaya segera.",
        ],
      },
      {
        title: "Kandungan laman web",
        paragraphs: [
          "Teks, penjenamaan, susun atur dan gambar projek yang diterbitkan di laman web ini disediakan untuk tujuan maklumat dan perniagaan laman ini. Jangan menyalin, menerbitkan semula atau menggunakannya secara komersial tanpa kebenaran. Renovix mungkin membetulkan, mengemas kini atau membuang kandungan tanpa menjamin setiap halaman sentiasa tersedia.",
        ],
      },
      {
        title: "Hubungi kami",
        paragraphs: [
          "Soalan tentang terma ini boleh dihantar kepada Renovix Home Services di +601159259521 atau renovixhomeservices@gmail.com. Terma laman web ini tidak menggantikan sebut harga atau perjanjian bertulis khusus projek.",
        ],
      },
    ],
  },
  notFound: {
    eyebrow: "404",
    title: "Halaman tidak dijumpai",
    description:
      "Halaman yang anda cari belum tersedia di laman web ini.",
    services: "Lihat perkhidmatan kami",
    areas: "Lihat kawasan perkhidmatan",
  },
  common: {
    home: "Laman Utama",
    serviceAreas: "Kawasan Perkhidmatan",
    malaysia: "Malaysia",
    kualaLumpur: "Kuala Lumpur",
    selangor: "Selangor",
    klangValley: "Lembah Klang",
    freeQuoteEyebrow: "Dapatkan Sebut Harga Percuma",
    freeQuotation: "Sebut Harga Percuma",
    klSelangor: "Kuala Lumpur & Selangor",
    step: "Langkah",
    businessHours: "9:00 pagi – 6:00 petang",
    callOrWhatsApp: "Telefon atau WhatsApp",
  },
  areasBlock: {
    eyebrow: "Kawasan Perkhidmatan",
    title: "Berkhidmat di Kuala Lumpur & Selangor",
    guideTitle: "Setiap kawasan ada panduannya sendiri",
    guideDescription:
      "Jenis perumahan setempat, masalah yang kerap berlaku dan nota kerja yang praktikal untuk kejiranan dan pekan di seluruh Lembah Klang.",
    note: "Tidak pasti sama ada kami meliputi kawasan anda? Tanya kami — kami berkhidmat di kebanyakan lokasi Lembah Klang.",
  },
};
