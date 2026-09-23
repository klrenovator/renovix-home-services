import type { LanguageCode } from "@/data/languages";

/**
 * Localized versions of the short shared lists (service names, place names,
 * category labels, area-index FAQs). These strings appear on almost every page —
 * navigation, footer, mobile menu, cards and chips — so they are translated
 * separately from the long-form page catalogues.
 *
 * English values remain the source of truth in their original data modules; this
 * file only supplies `ms` and `zh` replacements, keyed by the same identifiers.
 */
export type NonEnglish = Exclude<LanguageCode, "en">;

export const serviceList: Record<
  NonEnglish,
  Record<string, { name: string; shortDescription: string }>
> = {
  ms: {
    tiling: {
      name: "Kerja Jubin & Pemasangan Jubin",
      shortDescription:
        "Pemasangan, penggantian dan pembaikan jubin untuk lantai, dinding dan bilik air.",
    },
    "welding-metal-works": {
      name: "Kimpalan & Kerja Logam",
      shortDescription:
        "Fabrikasi logam, kimpalan, pagar, gril, susur tangan dan kerja logam khas.",
    },
    electrical: {
      name: "Kerja Elektrik",
      shortDescription:
        "Pemasangan elektrik, pendawaian, pencahayaan, soket, suis dan pemeriksaan kerosakan.",
    },
    painting: {
      name: "Kerja Mengecat",
      shortDescription:
        "Cat dalaman dan luaran, cat semula, sentuhan semula dan kemasan dinding.",
    },
    "ceiling-partition": {
      name: "Siling & Partisyen",
      shortDescription:
        "Pembaikan siling, siling palsu, dinding partition dan pemasangan panel.",
    },
    "general-renovation": {
      name: "Renovasi & Pengubahsuaian Rumah",
      shortDescription:
        "Kerja renovasi rumah am, naik taraf, pembaikan dan projek peningkatan.",
    },
    plumbing: {
      name: "Kerja Paip (Plumbing)",
      shortDescription:
        "Pembaikan paip, kerja paip, baik pulih pili dan tandas, kebocoran dan saliran.",
    },
    waterproofing: {
      name: "Kalis Air (Waterproofing)",
      shortDescription:
        "Kerja kalis air untuk bilik air, balkoni, bumbung dan kawasan yang mudah lembap.",
    },
    flooring: {
      name: "Lantai & Pemasangan Lantai",
      shortDescription:
        "Pembaikan, penggantian dan kemasan lantai untuk pelbagai jenis lantai dan kawasan.",
    },
    handyman: {
      name: "Servis Handyman",
      shortDescription:
        "Bantuan yang boleh diharap untuk pembaikan rumah, kerja kecil dan penyelenggaraan harian.",
    },
  },
  zh: {
    tiling: {
      name: "瓷砖与铺砖工程",
      shortDescription: "地板、墙面与浴室瓷砖的铺贴、更换与维修。",
    },
    "welding-metal-works": {
      name: "焊接与金属工程",
      shortDescription: "金属制作、焊接、铁门、铁闸、栏杆与定制铁器。",
    },
    electrical: {
      name: "电气工程",
      shortDescription: "电路安装、布线、照明、插座、开关与故障检查。",
    },
    painting: {
      name: "油漆工程",
      shortDescription: "室内外粉刷、重新上漆、局部修补与墙面处理。",
    },
    "ceiling-partition": {
      name: "天花板与隔间工程",
      shortDescription: "天花板维修、假天花板、隔墙与面板安装。",
    },
    "general-renovation": {
      name: "综合装修工程",
      shortDescription: "整体房屋装修、升级、维修与改善工程。",
    },
    plumbing: {
      name: "水管工程",
      shortDescription: "水管维修、管路工程、水龙头与马桶修理、漏水与排水问题。",
    },
    waterproofing: {
      name: "防水工程",
      shortDescription: "浴室、阳台、屋顶及容易受潮区域的防水施工。",
    },
    flooring: {
      name: "地板与地面工程",
      shortDescription: "各类地板与区域的维修、更换与表面处理。",
    },
    handyman: {
      name: "家居维修服务",
      shortDescription: "可靠的小型房屋维修、安装与日常保养服务。",
    },
  },
};

export const regionList: Record<
  NonEnglish,
  Record<string, { name: string; summary: string }>
> = {
  ms: {
    "kuala-lumpur": {
      name: "Kuala Lumpur",
      summary:
        "Panduan untuk bandar Kuala Lumpur serta 21 kawasan kejiranan — daripada pangsapuri bandar hingga rumah teres yang lebih lama.",
    },
    selangor: {
      name: "Selangor",
      summary:
        "Panduan untuk Selangor serta 32 pekan — meliputi perumahan teres, kondominium dan rumah berkembar di seluruh negeri.",
    },
  },
  zh: {
    "kuala-lumpur": {
      name: "吉隆坡",
      summary:
        "吉隆坡市区及 21 个地段的指南 —— 从市中心公寓到较早建成的排屋区。",
    },
    selangor: {
      name: "雪兰莪",
      summary: "雪兰莪及 32 个城镇的指南 —— 涵盖全州的排屋、公寓与半独立屋住宅区。",
    },
  },
};

/**
 * Phase 46 — localized district groups (`districtGroups` in
 * `data/locations/registry.ts`, keyed by district id).
 *
 * The English name and description in the registry are the source of truth for
 * the hierarchy; this table only supplies the Malay and Chinese wording. Until
 * this table existed, `AreaHero`, `AreaAnswerFirstSection`, `AreaRegionPage`
 * and the areas index rendered the English registry strings on every `/ms/`
 * and `/zh/` page ("Segambut & Mont Kiara District", "High-density
 * condominium enclaves, …"). Place names keep their official spelling in Malay
 * and use the same established Chinese names as `areaNames` below.
 * `audit:multilingual` fails if a district id is missing from either language.
 */
export const districtList: Record<
  NonEnglish,
  Record<string, { name: string; description: string }>
> = {
  ms: {
    "kl-segambut": {
      name: "Daerah Segambut & Mont Kiara",
      description:
        "Enklaf kondominium berkepadatan tinggi, kawasan kediaman ekspatriat dan poket rumah bertanah premium di barat laut Kuala Lumpur.",
    },
    "kl-lembah-pantai": {
      name: "Daerah Lembah Pantai & Bangsar",
      description:
        "Kejiranan kediaman mantap, hab komersial, hab pengangkutan dan stok perumahan matang di barat daya Kuala Lumpur.",
    },
    "kl-kepong": {
      name: "Daerah Kepong & Desa ParkCity",
      description:
        "Komuniti kediaman terancang, rumah teres pelbagai generasi dan jalur komersial yang aktif di utara Kuala Lumpur.",
    },
    "kl-seputeh": {
      name: "Daerah Seputeh & Bukit Jalil",
      description:
        "Koridor kediaman bertingkat tinggi moden, pembangunan hab sukan dan perumahan pinggir bandar matang di selatan Kuala Lumpur.",
    },
    "kl-wangsa-maju": {
      name: "Daerah Wangsa Maju & Titiwangsa",
      description:
        "Bandar kediaman berkepadatan tinggi, pembangunan teres matang dan jalan komersial mantap di timur laut Kuala Lumpur.",
    },
    "kl-batu": {
      name: "Daerah Batu & Sentul",
      description:
        "Pekan kereta api bersejarah, menara kondominium baharu berorientasikan transit dan deretan kediaman bercampur di utara Kuala Lumpur.",
    },
    "kl-cheras": {
      name: "Daerah Cheras & Bandar Tun Razak",
      description:
        "Perumahan teres pelbagai fasa yang luas, grid rumah kedai matang dan komuniti kondominium lereng bukit di seluruh tenggara Kuala Lumpur.",
    },
    "kl-city-core": {
      name: "Daerah Pusat Bandar KL & Kampung Baru",
      description:
        "Teras bertingkat tinggi ibu kota di sekitar KLCC, Bukit Bintang dan Imbi, bersama penempatan bersejarah Kampung Baru di sebelahnya.",
    },
    "sel-petaling": {
      name: "Daerah Petaling",
      description:
        "Nadi ekonomi dan kediaman Selangor, merangkumi Petaling Jaya, Subang Jaya, Shah Alam, Puchong dan koridor Damansara.",
    },
    "sel-hulu-langat": {
      name: "Daerah Hulu Langat",
      description:
        "Koridor pertumbuhan kediaman yang rancak merangkumi Kajang, Bangi, Semenyih, Balakong dan sempadan Ampang Jaya.",
    },
    "sel-klang": {
      name: "Daerah Klang",
      description:
        "Hab komersial, perindustrian dan kediaman bersejarah dengan rumah kedai pra-perang, taman perumahan mantap dan bandar komersial moden.",
    },
    "sel-gombak": {
      name: "Daerah Gombak",
      description:
        "Daerah kediaman berbukit di utara yang menghubungkan Selayang, Gombak, Rawang dan komuniti pinggir utara.",
    },
    "sel-sepang": {
      name: "Koridor Sepang & Putrajaya",
      description:
        "Koridor pentadbiran dan teknologi Malaysia dengan infrastruktur moden, bandar terancang dan pembangunan bandar pintar.",
    },
  },
  zh: {
    "kl-segambut": {
      name: "泗岩沫与满家乐区",
      description: "吉隆坡西北部的高密度公寓区、外籍人士社区及高档有地住宅地段。",
    },
    "kl-lembah-pantai": {
      name: "班底谷与孟沙区",
      description: "吉隆坡西南部成熟的住宅社区、商业中心、交通枢纽及历史悠久的房屋存量。",
    },
    "kl-kepong": {
      name: "甲洞与帝沙公园城区",
      description: "吉隆坡北部的规划型住宅社区、多代同堂的排屋区及活跃的商业带。",
    },
    "kl-seputeh": {
      name: "士布爹与武吉加里尔区",
      description: "吉隆坡南部的现代高层住宅走廊、体育中心发展区及成熟的郊区住宅。",
    },
    "kl-wangsa-maju": {
      name: "旺沙玛珠与蒂蒂旺沙区",
      description: "吉隆坡东北部的高密度住宅市镇、成熟排屋区及历史悠久的商业街。",
    },
    "kl-batu": {
      name: "峇都与冼都区",
      description: "吉隆坡北部的历史铁路市镇、新建的公交导向公寓大楼及混合住宅街区。",
    },
    "kl-cheras": {
      name: "蕉赖与敦拉萨镇区",
      description: "遍布吉隆坡东南部的大规模分期排屋区、成熟的店屋街区及山坡公寓社区。",
    },
    "kl-city-core": {
      name: "吉隆坡市中心与甘榜峇鲁区",
      description: "首都环绕 KLCC、武吉免登与燕美路的高层核心区，以及毗邻的历史聚落甘榜峇鲁。",
    },
    "sel-petaling": {
      name: "八打灵县",
      description: "雪兰莪的经济与住宅重镇，涵盖八打灵再也、梳邦再也、莎阿南、蒲种及白沙罗走廊。",
    },
    "sel-hulu-langat": {
      name: "乌鲁冷岳县",
      description: "蓬勃发展的住宅增长走廊，横跨加影、万宜、士毛月、无拉港及安邦再也交界地带。",
    },
    "sel-klang": {
      name: "巴生县",
      description: "历史悠久的商业、工业与住宅中心，拥有战前店屋、成熟住宅区及现代商业市镇。",
    },
    "sel-gombak": {
      name: "鹅唛县",
      description: "北部多丘陵的住宅县，连接士拉央、鹅唛、万挠及北部边缘社区。",
    },
    "sel-sepang": {
      name: "雪邦与布城走廊",
      description: "马来西亚的行政与科技走廊，拥有现代化基础设施、规划型市镇及智慧城市发展项目。",
    },
  },
};

/**
 * Phase 46 — localized official state names for the coverage roadmap list on
 * the areas index (`stateCoverage` in `data/locations/registry.ts`). Only the
 * English qualifier changes in Malay ("Federal Territory" → "Wilayah
 * Persekutuan"); Chinese uses the established names.
 */
export const stateNames: Record<NonEnglish, Record<string, string>> = {
  ms: {
    "kuala-lumpur": "Kuala Lumpur (Wilayah Persekutuan)",
    selangor: "Selangor Darul Ehsan",
    penang: "Pulau Pinang",
    johor: "Johor Darul Ta'zim",
    "negeri-sembilan": "Negeri Sembilan",
  },
  zh: {
    "kuala-lumpur": "吉隆坡（联邦直辖区）",
    selangor: "雪兰莪",
    penang: "槟城",
    johor: "柔佛",
    "negeri-sembilan": "森美兰",
  },
};

/**
 * Localized place names. Malay keeps the official Malay spellings, so only the
 * Chinese names differ; established Malaysian Chinese names are used.
 */
export const areaNames: Record<NonEnglish, Record<string, string>> = {
  ms: {},
  zh: {
    "kuala-lumpur/cheras": "蕉赖",
    "kuala-lumpur/setapak": "文良港",
    "kuala-lumpur/wangsa-maju": "旺沙玛珠",
    "kuala-lumpur/ampang": "安邦",
    "kuala-lumpur/kepong": "甲洞",
    "kuala-lumpur/segambut": "泗岩沫",
    "kuala-lumpur/sentul": "冼都",
    "kuala-lumpur/mont-kiara": "满家乐",
    "kuala-lumpur/bangsar": "孟沙",
    "kuala-lumpur/bukit-jalil": "武吉加里尔",
    "kuala-lumpur/sri-petaling": "斯里八打灵",
    "kuala-lumpur/old-klang-road": "旧巴生路",
    "kuala-lumpur/taman-melawati": "美拉华蒂花园",
    "kuala-lumpur/desa-parkcity": "帝沙公园城",
    "kuala-lumpur/taman-tun-dr-ismail": "敦依斯迈花园",
    "kuala-lumpur/damansara-heights": "白沙罗高原",
    "kuala-lumpur/sri-hartamas": "斯里哈达马斯",
    "kuala-lumpur/brickfields-mid-valley": "十五碑",
    "selangor/petaling-jaya": "八打灵再也",
    "selangor/subang-jaya": "梳邦再也",
    "selangor/shah-alam": "莎阿南",
    "selangor/puchong": "蒲种",
    "selangor/klang": "巴生",
    "selangor/selayang": "士拉央",
    "selangor/gombak": "鹅唛",
    "selangor/ampang-jaya": "安邦再也",
    "selangor/kajang": "加影",
    "selangor/seri-kembangan": "史里肯邦安",
    "selangor/cyberjaya": "赛城",
    "selangor/putrajaya": "布城",
    "selangor/kota-damansara": "哥打白沙罗",
    "selangor/sungai-buloh": "双溪毛糯",
    "selangor/rawang": "万挠",
    "selangor/semenyih": "士毛月",
    "selangor/usj": "USJ",
    "selangor/bandar-sunway": "双威镇",
    "selangor/bandar-utama": "万达镇",
    "selangor/mutiara-damansara": "珍珠白沙罗",
    "selangor/damansara-perdana": "白沙罗柏兰岭",
    "selangor/ara-damansara": "阿拉白沙罗",
    "selangor/bandar-sri-damansara": "斯里白沙罗镇",
    "selangor/bangi": "万宜",
    "selangor/serdang": "沙登",
    "selangor/balakong": "无拉港",
    "selangor/bandar-baru-klang": "巴生新镇",
    "selangor/sepang": "雪邦",
    "kuala-lumpur/kl-city-centre": "吉隆坡市中心",
    "kuala-lumpur/taman-desa": "Taman Desa",
    "kuala-lumpur/kampung-baru": "甘榜峇鲁",
    "selangor/setia-alam": "实达阿南",
    "selangor/bandar-kinrara": "金銮镇",
    "selangor/batu-caves": "黑风洞",
    "selangor/bandar-mahkota-cheras": "蕉赖皇冠城",
  },
};

export const problemCategoryList: Record<
  NonEnglish,
  Record<string, { label: string; intro: string }>
> = {
  ms: {
    tiling: {
      label: "Masalah Jubin",
      intro:
        "Jubin pecah, retak, kosong, longgar dan tidak rata, serta masalah grout, bilik air, dapur dan resapan air di seluruh Lembah Klang.",
    },
    electrical: {
      label: "Masalah Elektrik",
      intro:
        "Litar terputus, soket dan suis rosak, lampu berkelip, litar pintas, pendawaian lama dan kerosakan kipas siling.",
    },
    painting: {
      label: "Masalah Cat & Dinding",
      intro:
        "Cat mengelupas, dinding retak dan berkulat, kemasan pudar dan tidak rata, serta permukaan dinding yang rosak.",
    },
    ceiling: {
      label: "Masalah Siling",
      intro:
        "Siling retak, melendut, rosak akibat air dan berkesan, serta siling plaster lama yang perlu dibaiki atau diganti.",
    },
    plumbing: {
      label: "Masalah Paip",
      intro:
        "Kebocoran air, pili dan paip bocor, saliran tersumbat, masalah tandas dan tekanan air rendah.",
    },
    waterproofing: {
      label: "Masalah Kalis Air",
      intro:
        "Kebocoran bumbung, bilik air dan balkoni, resapan dinding, dinding lembap dan kesan air.",
    },
    handyman: {
      label: "Masalah Kerja Am",
      intro:
        "Masalah pintu dan mangga, pemasangan langsir, pemasangan TV, pemasangan rak dan pembaikan rumah kecil.",
    },
    welding: {
      label: "Masalah Kimpalan & Kerja Logam",
      intro:
        "Pagar dan gril berkarat, susur tangan longgar, pagar yang tidak lagi menutup atau sejajar, dan kimpalan retak pada rangka logam.",
    },
    flooring: {
      label: "Masalah Lantai",
      intro:
        "Papan bengkak dan rosak air, papan terangkat dan terpisah, kawasan berbunyi kosong dan lantai berdecit.",
    },
    "general-renovation": {
      label: "Masalah Perancangan Renovasi",
      intro:
        "Kelulusan dan permit renovasi, kos melebihi bajet dan skop membesar, serta punca kelewatan renovasi.",
    },
  },
  zh: {
    tiling: {
      label: "瓷砖问题",
      intro:
        "瓷砖破裂、裂纹、空鼓、松动与不平整，以及填缝、浴室、厨房与渗漏问题，覆盖整个巴生谷。",
    },
    electrical: {
      label: "电工问题",
      intro: "电路跳闸、插座与开关故障、灯光闪烁、短路、旧线路与吊扇线路问题。",
    },
    painting: {
      label: "油漆与墙面问题",
      intro: "油漆剥落、墙面裂缝与发霉、漆面褪色与不均匀，以及墙面表层受损。",
    },
    ceiling: {
      label: "天花板问题",
      intro: "天花板开裂、下垂、受潮受损与污渍，以及需要维修或更换的旧石膏天花板。",
    },
    plumbing: {
      label: "水管问题",
      intro: "漏水、水龙头与水管渗漏、排水堵塞、马桶问题与水压偏低。",
    },
    waterproofing: {
      label: "防水问题",
      intro: "屋顶、浴室与阳台渗漏、墙面渗水、墙体潮湿与水渍。",
    },
    handyman: {
      label: "居家维修问题",
      intro: "门与锁的问题、窗帘安装、电视挂架、层架安装与小型房屋维修。",
    },
    welding: {
      label: "焊接与金属工程问题",
      intro: "生锈的铁门与防盗网、松动的栏杆、关不上或错位的铁门，以及金属框架上开裂的焊缝。",
    },
    flooring: {
      label: "地板问题",
      intro: "膨胀与水损的板材、翘起与离缝的板材、空心声区域，以及有异响的地板。",
    },
    "general-renovation": {
      label: "装修规划问题",
      intro: "装修批准与准证、超支与范围扩张，以及装修延误的成因。",
    },
  },
};

export const projectCategoryLabels: Record<NonEnglish, Record<string, string>> =
  {
    ms: {
      tiling: "Jubin",
      welding: "Kimpalan",
      electrical: "Elektrik",
      painting: "Cat",
      ceiling: "Siling",
      partition: "Partition",
      renovation: "Renovasi",
      plumbing: "Paip",
      waterproofing: "Kalis Air",
      flooring: "Lantai",
      handyman: "Kerja Am",
    },
    zh: {
      tiling: "瓷砖",
      welding: "焊接",
      electrical: "电工",
      painting: "油漆",
      ceiling: "天花板",
      partition: "隔墙",
      renovation: "装修",
      plumbing: "水管",
      waterproofing: "防水",
      flooring: "地板",
      handyman: "居家维修",
    },
  };

export const areasIndexFaqList: Record<
  NonEnglish,
  { question: string; answer: string }[]
> = {
  ms: [
    {
      question: "Kawasan mana yang anda layani?",
      answer:
        "Kami melayani Kuala Lumpur dan Selangor — panduan utama kami merangkumi 21 kawasan kejiranan di Kuala Lumpur dan 32 pekan di Selangor, dengan kawasan lain di Lembah Klang dilayan atas permintaan.",
    },
    {
      question: "Apakah itu Lembah Klang?",
      answer:
        "Lembah Klang ialah kawasan metropolitan yang berpusat di Kuala Lumpur dan pekan-pekan Selangor di sekitarnya — Petaling Jaya, Subang Jaya, Shah Alam, Klang, Kajang dan lain-lain. Apabila kami katakan kami melayani Lembah Klang, maksudnya Kuala Lumpur bersama daerah-daerah Selangor ini.",
    },
    {
      question: "Kawasan saya tidak disenaraikan. Bolehkah anda membantu?",
      answer:
        "Kemungkinan besar boleh — panduan ini merangkumi kawasan yang paling kerap diminta, bukan sempadan perkhidmatan. Hantarkan mesej dengan lokasi dan kerja yang anda perlukan, dan kami akan sahkan apa yang boleh kami lakukan.",
    },
    {
      question: "Adakah anda melayani hartanah bertingkat dan rumah bumi?",
      answer:
        "Kedua-duanya. Kerja di hartanah strata mengikut peraturan pengurusan bangunan masing-masing, dan kerja di rumah bumi diatur mengikut kesesuaian isi rumah anda — panduan kawasan menerangkan butiran praktikal untuk setiap lokasi.",
    },
  ],
  zh: [
    {
      question: "你们的服务范围涵盖哪些地区？",
      answer:
        "我们的服务涵盖吉隆坡与雪兰莪 —— 主要指南包括吉隆坡 21 个地段与雪兰莪 32 个城镇，巴生谷其他地区亦可按需求安排。",
    },
    {
      question: "什么是巴生谷？",
      answer:
        "巴生谷是以吉隆坡为中心、涵盖周边雪兰莪城镇的都会区域 —— 包括八打灵再也、梳邦再也、莎阿南、巴生、加影等地。当我们说服务巴生谷，指的正是吉隆坡加上这些雪兰莪地区。",
    },
    {
      question: "我所在的地区没有列出，你们还能协助吗？",
      answer:
        "很可能可以 —— 这些指南涵盖的是询问最多的地区，并非服务界线。请把您的位置与工程需求告诉我们，我们会确认能够提供的协助。",
    },
    {
      question: "你们服务高楼住宅与有地住宅吗？",
      answer:
        "两者都服务。分层住宅的工程需遵循各栋建筑的管理规定，有地住宅则依住户的时间安排施工 —— 各地区指南都说明了当地的实际细节。",
    },
  ],
};

/*
 * Phase 47 — the problem index card labels are no longer translated here.
 *
 * This file used to hold a `problemList` table of Malay and Chinese card names
 * and one-line summaries, authored when the long-form problem guides were
 * English-only. All 57 guides are now fully localized in both languages, so the
 * table became a second, parallel translation of strings the guides already
 * publish — and it drifted: 10 Malay and 22 Chinese card names (and all 114
 * subtitles) disagreed with the H1, `<title>` and `Article.headline` of the very
 * page the card linked to. `getProblemCardLabels()` now reads the localized
 * guide itself, so a card can never name a problem differently from the page it
 * opens, and `i18n/verify.ts` fails the build if a guide stops publishing a
 * localized name or subtitle. Do not re-introduce a card-label table here.
 *
 * The retired wordings remain in git history (removed 2026-09-23) if the owner
 * ever prefers one on the card; the place to apply it is the guide, so the two
 * cannot diverge again.
 */
