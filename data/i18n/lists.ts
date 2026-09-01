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
      name: "Kerja Jubin",
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
      name: "Kerja Cat",
      shortDescription:
        "Cat dalaman dan luaran, cat semula, sentuhan semula dan kemasan dinding.",
    },
    "ceiling-partition": {
      name: "Siling & Partition",
      shortDescription:
        "Pembaikan siling, siling palsu, dinding partition dan pemasangan panel.",
    },
    "general-renovation": {
      name: "Renovasi Am",
      shortDescription:
        "Kerja renovasi rumah am, naik taraf, pembaikan dan projek peningkatan.",
    },
    plumbing: {
      name: "Kerja Paip",
      shortDescription:
        "Pembaikan paip, kerja paip, baik pulih pili dan tandas, kebocoran dan saliran.",
    },
    waterproofing: {
      name: "Kerja Kalis Air",
      shortDescription:
        "Kerja kalis air untuk bilik air, balkoni, bumbung dan kawasan yang mudah lembap.",
    },
    flooring: {
      name: "Kerja Lantai",
      shortDescription:
        "Pembaikan, penggantian dan kemasan lantai untuk pelbagai jenis lantai dan kawasan.",
    },
    handyman: {
      name: "Kerja Am",
      shortDescription:
        "Bantuan yang boleh diharap untuk pembaikan rumah, kerja kecil dan penyelenggaraan harian.",
    },
  },
  zh: {
    tiling: {
      name: "瓷砖工程",
      shortDescription: "地板、墙面与浴室瓷砖的铺贴、更换与维修。",
    },
    "welding-metal-works": {
      name: "焊接与铁器工程",
      shortDescription: "金属制作、焊接、铁门、铁闸、栏杆与定制铁器。",
    },
    electrical: {
      name: "电工服务",
      shortDescription: "电路安装、布线、照明、插座、开关与故障检查。",
    },
    painting: {
      name: "油漆工程",
      shortDescription: "室内外粉刷、重新上漆、局部修补与墙面处理。",
    },
    "ceiling-partition": {
      name: "天花板与隔墙",
      shortDescription: "天花板维修、假天花板、隔墙与面板安装。",
    },
    "general-renovation": {
      name: "整体装修",
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
      name: "地板工程",
      shortDescription: "各类地板与区域的维修、更换与表面处理。",
    },
    handyman: {
      name: "居家维修",
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
        "Panduan untuk bandar Kuala Lumpur serta 14 kawasan kejiranan — daripada pangsapuri bandar hingga rumah teres yang lebih lama.",
    },
    selangor: {
      name: "Selangor",
      summary:
        "Panduan untuk Selangor serta 17 pekan — meliputi perumahan teres, kondominium dan rumah berkembar di seluruh negeri.",
    },
  },
  zh: {
    "kuala-lumpur": {
      name: "吉隆坡",
      summary:
        "吉隆坡市区及 14 个地段的指南 —— 从市中心公寓到较早建成的排屋区。",
    },
    selangor: {
      name: "雪兰莪",
      summary: "雪兰莪及 17 个城镇的指南 —— 涵盖全州的排屋、公寓与半独立屋住宅区。",
    },
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
  },
};

export const problemPreviewLabels: Record<NonEnglish, Record<string, string>> = {
  ms: {
    "broken-tile-repair": "Jubin Pecah",
    "water-leakage": "Kebocoran Air",
    "cracked-walls": "Dinding Retak",
    "peeling-paint": "Cat Mengelupas",
    "mouldy-walls": "Dinding Berkulat",
    "power-tripping": "Elektrik Terputus",
    "faulty-socket": "Soket Rosak",
    "water-damaged-ceiling": "Siling Rosak",
    "bathroom-leakage": "Bilik Air Bocor",
    "blocked-drain": "Saliran Tersumbat",
    "loose-tile-repair": "Jubin Longgar",
    "roof-leakage": "Bumbung Bocor",
    "door-problems": "Masalah Pintu",
    "minor-home-repairs": "Pembaikan Rumah Am",
  },
  zh: {
    "broken-tile-repair": "瓷砖破裂",
    "water-leakage": "漏水问题",
    "cracked-walls": "墙面裂缝",
    "peeling-paint": "油漆剥落",
    "mouldy-walls": "墙面发霉",
    "power-tripping": "电源跳闸",
    "faulty-socket": "插座故障",
    "water-damaged-ceiling": "天花板受损",
    "bathroom-leakage": "浴室渗漏",
    "blocked-drain": "排水堵塞",
    "loose-tile-repair": "瓷砖松动",
    "roof-leakage": "屋顶漏水",
    "door-problems": "门的问题",
    "minor-home-repairs": "一般房屋维修",
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
        "Kami melayani Kuala Lumpur dan Selangor — panduan utama kami merangkumi 14 kawasan kejiranan di Kuala Lumpur dan 17 pekan di Selangor, dengan kawasan lain di Lembah Klang dilayan atas permintaan.",
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
        "我们的服务涵盖吉隆坡与雪兰莪 —— 主要指南包括吉隆坡 14 个地段与雪兰莪 17 个城镇，巴生谷其他地区亦可按需求安排。",
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
