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
        "Panduan untuk bandar Kuala Lumpur serta 18 kawasan kejiranan — daripada pangsapuri bandar hingga rumah teres yang lebih lama.",
    },
    selangor: {
      name: "Selangor",
      summary:
        "Panduan untuk Selangor serta 28 pekan — meliputi perumahan teres, kondominium dan rumah berkembar di seluruh negeri.",
    },
  },
  zh: {
    "kuala-lumpur": {
      name: "吉隆坡",
      summary:
        "吉隆坡市区及 18 个地段的指南 —— 从市中心公寓到较早建成的排屋区。",
    },
    selangor: {
      name: "雪兰莪",
      summary: "雪兰莪及 28 个城镇的指南 —— 涵盖全州的排屋、公寓与半独立屋住宅区。",
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
        "Kami melayani Kuala Lumpur dan Selangor — panduan utama kami merangkumi 18 kawasan kejiranan di Kuala Lumpur dan 28 pekan di Selangor, dengan kawasan lain di Lembah Klang dilayan atas permintaan.",
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
        "我们的服务涵盖吉隆坡与雪兰莪 —— 主要指南包括吉隆坡 18 个地段与雪兰莪 28 个城镇，巴生谷其他地区亦可按需求安排。",
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

/**
 * Problem names and one-line summaries for the problem index cards.
 *
 * The long-form problem guides are English-only, but the index page lists all
 * 46 of them on every language version — so without these the `/ms/` and
 * `/zh/` index pages would render an English catalogue inside a Malay or
 * Chinese page. Keyed by problem slug.
 */
export const problemList: Record<
  NonEnglish,
  Record<string, { name: string; subtitle: string }>
> = {
  ms: {
    "broken-tile-repair": {
      name: "Pembaikan Jubin Pecah",
      subtitle:
        "Satu jubin pecah tidak semestinya bermakna seluruh lantai perlu dijubin semula. Renovix menggantikan jubin rosak dengan kemas dan memadankannya dengan lantai atau dinding sekeliling.",
    },
    "cracked-tile-repair": {
      name: "Pembaikan Jubin Retak",
      subtitle:
        "Retak halus pada jubin cenderung merebak. Renovix mencari puncanya dan membaiki atau mengganti jubin retak sebelum ia rosak sepenuhnya.",
    },
    "loose-tile-repair": {
      name: "Pembaikan Jubin Longgar",
      subtitle:
        "Jubin longgar boleh beralih, retak dan membenarkan air masuk. Renovix mengangkatnya, melekatkannya semula dan mengukuhkannya pada permukaan yang rata.",
    },
    "hollow-tile-problems": {
      name: "Masalah Jubin Berongga",
      subtitle:
        "Jubin berongga menandakan lekatan di bawahnya sudah gagal. Renovix mengesan dan membaiki jubin berongga sebelum ia terangkat, retak atau ditembusi air.",
    },
    "uneven-tiles": {
      name: "Jubin Tidak Rata",
      subtitle:
        "Jubin pada ketinggian berbeza menyebabkan risiko tersadung serta kotoran dan air bertakung. Renovix meratakan lantai dan membetulkan beza paras jubin.",
    },
    "tile-grout-problems": {
      name: "Masalah Grout Jubin",
      subtitle:
        "Grout mengikat jubin dan menghalang air. Apabila ia haus atau hancur, Renovix membuat grout semula supaya jubin kekal kukuh dan tertutup rapat.",
    },
    "bathroom-tile-problems": {
      name: "Masalah Jubin Bilik Air",
      subtitle:
        "Jubin bilik air berdepan air, haba dan penggunaan berterusan. Renovix membaiki jubin retak, berongga dan rosak air serta melindungi ruang di bawahnya.",
    },
    "kitchen-tile-problems": {
      name: "Masalah Jubin Dapur",
      subtitle:
        "Jubin dapur menerima tumpahan, haba dan penggunaan berat. Renovix membaiki jubin lantai dan dinding dapur yang rosak dan memulihkan permukaan yang bersih dan tahan lama.",
    },
    "water-seepage-through-tiles": {
      name: "Air Meresap Melalui Jubin",
      subtitle:
        "Air yang bergerak melalui jubin menandakan lapisan kalis air di bawahnya sudah gagal. Renovix mencari puncanya dan menutupnya dengan betul.",
    },
    "power-tripping": {
      name: "Bekalan Elektrik Trip",
      subtitle:
        "Pemutus litar yang kerap trip sedang melindungi litar yang bermasalah. Renovix mencari puncanya dengan selamat, bukan sekadar menghidupkannya semula.",
    },
    "faulty-socket": {
      name: "Soket Rosak",
      subtitle:
        "Soket yang mati, longgar atau panas ialah masalah pendawaian, bukan masalah palam. Renovix membaiki atau mengganti soket dengan selamat dan menguji litar.",
    },
    "faulty-switch": {
      name: "Suis Rosak",
      subtitle:
        "Suis yang memercik, berkelip atau terasa panas ialah masalah pendawaian, bukan bahagian yang haus. Renovix menggantinya dengan selamat dan mengujinya.",
    },
    "flickering-lights": {
      name: "Lampu Berkelip",
      subtitle:
        "Lampu berkelip selalunya masalah pendawaian, bukan masalah mentol. Renovix menjejaki puncanya dan membaikinya pada litar.",
    },
    "short-circuit": {
      name: "Litar Pintas",
      subtitle:
        "Litar pintas ialah kerosakan elektrik yang sebenar. Renovix mengesan dan membaikinya dengan selamat — ia bukan masalah untuk diset semula berulang kali.",
    },
    "old-house-wiring": {
      name: "Pendawaian Rumah Lama",
      subtitle:
        "Pendawaian yang dipasang berdekad lalu tidak direka untuk beban hari ini. Renovix menilai pendawaian lama dan mendawai semula rumah dengan selamat.",
    },
    "insufficient-power-points": {
      name: "Soket Kuasa Tidak Mencukupi",
      subtitle:
        "Soket yang terlalu sedikit bermakna wayar sambungan dan litar terlebih beban. Renovix menambah titik kuasa yang didawai dengan betul di tempat yang anda perlukan.",
    },
    "ceiling-fan-wiring-problems": {
      name: "Masalah Pendawaian Kipas Siling",
      subtitle:
        "Kipas siling yang tidak berpusing, memercik atau tiada bekalan ialah masalah pendawaian. Renovix mendawai dan membaiki kipas dengan selamat.",
    },
    "peeling-paint": {
      name: "Cat Mengelupas",
      subtitle:
        "Cat yang mengelupas atau menggelembung biasanya bermakna permukaan di bawahnya tidak disediakan. Renovix menyediakan dinding dengan betul dan mengecat semula supaya kemasan bertahan.",
    },
    "cracked-walls": {
      name: "Dinding Retak",
      subtitle:
        "Retak pada dinding terbahagi daripada kosmetik hingga struktur. Renovix membaiki plaster yang retak dan memberitahu anda bila retak perlu perhatian lanjut.",
    },
    "mouldy-walls": {
      name: "Dinding Berkulat",
      subtitle:
        "Kulat pada dinding ialah masalah lembap, bukan masalah cat. Renovix merawat kulat dan menangani kelembapan yang menyuburkannya.",
    },
    "faded-paint": {
      name: "Cat Pudar",
      subtitle:
        "Cat pudar apabila terdedah kepada matahari dan cuaca. Renovix memadankan warna anda dan mengecat semula untuk memulihkan kemasan yang segar dan sekata.",
    },
    "uneven-paint": {
      name: "Cat Tidak Sekata",
      subtitle:
        "Cat yang berbelang, berjalur atau bertompok ialah masalah penyediaan dan sapuan. Renovix meratakan permukaan dan mengecat semula dengan betul.",
    },
    "wall-surface-damage": {
      name: "Kerosakan Permukaan Dinding",
      subtitle:
        "Lubang, kemek, plaster hancur dan dinding rosak air semuanya boleh dibaiki. Renovix memulihkan permukaan supaya ia kelihatan dan boleh dicat seperti baharu.",
    },
    "cracked-ceiling": {
      name: "Siling Retak",
      subtitle:
        "Siling yang retak boleh merebak atau, dalam kes terburuk, runtuh. Renovix membaiki retak siling dan memberitahu bila papan perlu diganti.",
    },
    "sagging-ceiling": {
      name: "Siling Melendut",
      subtitle:
        "Siling yang melendut ialah amaran keselamatan. Renovix mencari sebab siling itu turun dan membaiki atau menggantinya sebelum ia gagal.",
    },
    "water-damaged-ceiling": {
      name: "Siling Rosak Air",
      subtitle:
        "Kerosakan air pada siling menandakan kebocoran di atasnya. Renovix mencari puncanya, membaiki kerosakan dan menghalangnya daripada berulang.",
    },
    "ceiling-stains": {
      name: "Kesan Tompok Siling",
      subtitle:
        "Tompok pada siling biasanya kesan kelembapan, bukan sekadar masalah rupa. Renovix merawat puncanya dan memulihkan siling yang bersih.",
    },
    "old-plaster-ceiling": {
      name: "Siling Plaster Lama",
      subtitle:
        "Siling plaster lama retak, melendut dan hilang kekuatan dengan usia. Renovix membaiki atau menggantinya dengan siling moden yang selamat.",
    },
    "water-leakage": {
      name: "Kebocoran Air",
      subtitle:
        "Kebocoran air tersembunyi di sebalik dinding dan di bawah lantai. Renovix mencari puncanya, membaiki kebocoran dan menghentikan kerosakan.",
    },
    "leaking-tap": {
      name: "Pili Bocor",
      subtitle:
        "Pili yang menitis membazirkan air dan boleh menandakan sesendal atau injap yang haus. Renovix membaiki atau mengganti pili supaya ia berhenti menitis.",
    },
    "leaking-pipe": {
      name: "Paip Bocor",
      subtitle:
        "Paip bocor boleh menyebabkan kerosakan serius sebelum anda menyedarinya. Renovix mencari dan membaiki paip serta melindungi rumah anda.",
    },
    "blocked-drain": {
      name: "Saliran Tersumbat",
      subtitle:
        "Saliran tersumbat menyebabkan air bertakung dan bau busuk jika dibiarkan. Renovix membersihkan sumbatan dan membantu menghalangnya berulang.",
    },
    "toilet-problems": {
      name: "Masalah Tandas",
      subtitle:
        "Tandas yang mengalir, bocor atau lemah pamnya membazirkan air dan boleh merosakkan lantai. Renovix membaiki tandas dan menangani puncanya.",
    },
    "low-water-pressure": {
      name: "Tekanan Air Rendah",
      subtitle:
        "Tekanan air yang lemah pada pancuran atau pili selalunya masalah paip atau bekalan. Renovix mencari puncanya dan memulihkan aliran yang kuat dan sekata.",
    },
    "roof-leakage": {
      name: "Kebocoran Bumbung",
      subtitle:
        "Kebocoran bumbung merebak sepantas hujan turun. Renovix mencari titik masuk air, mengalis air bumbung dan menghentikan kebocoran di puncanya.",
    },
    "bathroom-leakage": {
      name: "Kebocoran Bilik Air",
      subtitle:
        "Kebocoran bilik air akhirnya akan sampai ke ruang di bawahnya. Renovix mencari puncanya, mengalis air semula kawasan basah dan menghentikan kerosakan.",
    },
    "balcony-leakage": {
      name: "Kebocoran Balkoni",
      subtitle:
        "Balkoni basah yang bocor ke lantai di bawah ialah masalah kalis air. Renovix menutupnya dengan betul dan melindungi ruang di bawahnya.",
    },
    "wall-seepage": {
      name: "Resapan Air Dinding",
      subtitle:
        "Air yang meresap melalui dinding ialah punca lembap dan kulat. Renovix mencari arah datangnya air dan menutupnya dengan betul.",
    },
    "damp-walls": {
      name: "Dinding Lembap",
      subtitle:
        "Dinding lembap ialah masalah kelembapan yang berterusan. Renovix mencari sebab ia kekal basah dan merawat dinding supaya ia kering sepenuhnya.",
    },
    "water-stains": {
      name: "Kesan Air",
      subtitle:
        "Kesan air ialah tanda kelembapan yang perlu dijejaki, bukan sekadar dicat semula. Renovix mencari puncanya dan memulihkan permukaan yang bersih.",
    },
    "door-problems": {
      name: "Masalah Pintu",
      subtitle:
        "Pintu yang sangkut, berdecit atau tidak boleh ditutup ialah masalah engsel atau kusen. Renovix melaraskan dan membaiki pintu supaya ia dibuka dengan lancar.",
    },
    "lock-problems": {
      name: "Masalah Kunci",
      subtitle:
        "Kunci yang sangkut atau tidak boleh dipusing ialah risiko keselamatan. Renovix membaiki atau mengganti kunci dan memastikan rumah anda selamat.",
    },
    "curtain-installation": {
      name: "Pemasangan Langsir",
      subtitle:
        "Langsir tergantung lebih baik dan tahan lebih lama apabila diukur dan dipasang dengan betul. Renovix memasang rod dan trek dengan kukuh.",
    },
    "tv-mounting": {
      name: "Pemasangan TV di Dinding",
      subtitle:
        "TV yang dipasang pada dinding memerlukan pendakap yang betul, pemasangan yang kukuh dan ketinggian yang selamat. Renovix memasang TV anda dengan selamat dan mengemas kabel.",
    },
    "shelf-installation": {
      name: "Pemasangan Rak",
      subtitle:
        "Rak hanya sekukuh dinding tempat ia dipasang. Renovix memasang rak supaya rata, kukuh dan mampu menanggung beban.",
    },
    "minor-home-repairs": {
      name: "Pembaikan Kecil Rumah",
      subtitle:
        "Kerja-kerja kecil yang menimbun di rumah — kelengkapan longgar, cangkuk, kaulk dan pembaikan kecil — diuruskan dengan cepat oleh satu tukang yang dipercayai.",
    },
  },
  zh: {
    "broken-tile-repair": {
      name: "破损瓷砖维修",
      subtitle:
        "一片瓷砖破损，不一定要整片重铺。Renovix 干净利落地更换损坏的瓷砖，并与周围的地面或墙面配衬。",
    },
    "cracked-tile-repair": {
      name: "瓷砖开裂维修",
      subtitle:
        "瓷砖上的细纹裂缝往往会扩大。Renovix 先找出原因，再在瓷砖彻底损坏之前修补或更换。",
    },
    "loose-tile-repair": {
      name: "瓷砖松动维修",
      subtitle:
        "松动的瓷砖会移位、开裂并让水渗入。Renovix 掀起瓷砖重新铺贴，牢固地固定在平整的基面上。",
    },
    "hollow-tile-problems": {
      name: "瓷砖空鼓问题",
      subtitle:
        "瓷砖空鼓，说明底层黏结已经失效。Renovix 在瓷砖翘起、开裂或渗水之前检测并修复。",
    },
    "uneven-tiles": {
      name: "瓷砖高低不平",
      subtitle:
        "高低不平的瓷砖容易绊倒人，也会积污积水。Renovix 找平地面，修正瓷砖之间的高低差。",
    },
    "tile-grout-problems": {
      name: "瓷砖填缝问题",
      subtitle:
        "填缝剂固定瓷砖并阻挡水分。当它磨损或粉化时，Renovix 重新填缝，让瓷砖保持牢固与密封。",
    },
    "bathroom-tile-problems": {
      name: "浴室瓷砖问题",
      subtitle:
        "浴室瓷砖长期面对水汽、热度与频繁使用。Renovix 修复开裂、空鼓与受水损坏的瓷砖，并保护下方结构。",
    },
    "kitchen-tile-problems": {
      name: "厨房瓷砖问题",
      subtitle:
        "厨房瓷砖承受油污、热度与频繁走动。Renovix 修复受损的厨房地砖与墙砖，恢复干净耐用的表面。",
    },
    "water-seepage-through-tiles": {
      name: "瓷砖渗水",
      subtitle:
        "水从瓷砖渗过，说明下方的防水层已经失效。Renovix 找出源头并妥善封堵。",
    },
    "power-tripping": {
      name: "电源跳闸",
      subtitle:
        "反复跳闸的断路器，是在保护有问题的线路。Renovix 安全地找出原因，而不是一再合闸了事。",
    },
    "faulty-socket": {
      name: "插座故障",
      subtitle:
        "插座没电、松动或发热，是布线问题而不是插头问题。Renovix 安全地维修或更换插座，并检测线路。",
    },
    "faulty-switch": {
      name: "开关故障",
      subtitle:
        "开关打火、闪烁或发热是布线问题，而不是零件老化。Renovix 安全地更换并测试。",
    },
    "flickering-lights": {
      name: "灯光闪烁",
      subtitle:
        "灯光闪烁通常是布线问题，而不是灯泡问题。Renovix 追查原因，从线路上解决。",
    },
    "short-circuit": {
      name: "短路",
      subtitle:
        "短路是真正的电气故障。Renovix 安全地定位并修复 —— 它不是一再复位就能解决的问题。",
    },
    "old-house-wiring": {
      name: "旧屋电线老化",
      subtitle:
        "几十年前铺设的电线，从来不是按今天的用电量设计的。Renovix 评估旧线路并安全地重新布线。",
    },
    "insufficient-power-points": {
      name: "电源插座不足",
      subtitle:
        "插座太少，意味着到处拉插线板、线路过载。Renovix 在您需要的位置增设规范布线的电源点。",
    },
    "ceiling-fan-wiring-problems": {
      name: "吊扇布线问题",
      subtitle:
        "吊扇不转、打火或没有电源，是布线问题。Renovix 安全地为吊扇布线与维修。",
    },
    "peeling-paint": {
      name: "油漆脱落",
      subtitle:
        "油漆起皮或起泡，通常表示底层墙面没有处理好。Renovix 妥善处理墙面后再重新粉刷，让漆面更持久。",
    },
    "cracked-walls": {
      name: "墙面开裂",
      subtitle:
        "墙上的裂缝，从表面裂纹到结构裂缝都有。Renovix 修补开裂的批荡，并告诉您哪些裂缝需要进一步检查。",
    },
    "mouldy-walls": {
      name: "墙面发霉",
      subtitle:
        "墙上发霉是潮湿问题，不是油漆问题。Renovix 处理霉斑，并解决滋生霉菌的水汽来源。",
    },
    "faded-paint": {
      name: "油漆褪色",
      subtitle:
        "日晒雨淋久了，油漆自然褪色。Renovix 为您配色并重新粉刷，恢复干净均匀的漆面。",
    },
    "uneven-paint": {
      name: "油漆不均匀",
      subtitle:
        "斑驳、条纹或色差，是底层处理与施工的问题。Renovix 打磨平整后重新粉刷。",
    },
    "wall-surface-damage": {
      name: "墙体表面损坏",
      subtitle:
        "孔洞、凹痕、粉化的批荡与受水损坏的墙面都可以修复。Renovix 修复墙面，让它外观与上漆效果如新。",
    },
    "cracked-ceiling": {
      name: "天花板开裂",
      subtitle:
        "天花板的裂缝会扩大，严重时甚至会脱落。Renovix 修补天花裂缝，并在需要时建议更换板材。",
    },
    "sagging-ceiling": {
      name: "天花板下垂",
      subtitle:
        "天花板下垂是安全警讯。Renovix 找出下垂的原因，在它塌落之前修复或更换。",
    },
    "water-damaged-ceiling": {
      name: "天花板受水损坏",
      subtitle:
        "天花板出现水损，说明上方有渗漏。Renovix 找出源头、修复损坏，并防止再次发生。",
    },
    "ceiling-stains": {
      name: "天花板水渍",
      subtitle:
        "天花板上的污渍通常是潮气留下的痕迹，不只是外观问题。Renovix 处理成因并恢复干净的天花。",
    },
    "old-plaster-ceiling": {
      name: "旧石膏天花",
      subtitle:
        "旧石膏天花会随年月开裂、下垂并失去强度。Renovix 修复它，或更换为安全的现代天花。",
    },
    "water-leakage": {
      name: "漏水",
      subtitle:
        "漏水常藏在墙内与地板下。Renovix 找出源头、修复漏点，阻止损坏扩大。",
    },
    "leaking-tap": {
      name: "水龙头漏水",
      subtitle:
        "滴水的水龙头浪费水，也可能是垫片或阀芯磨损。Renovix 维修或更换水龙头，让它不再滴水。",
    },
    "leaking-pipe": {
      name: "水管漏水",
      subtitle:
        "水管漏水，往往在您察觉之前就已造成严重损坏。Renovix 找出并修复漏水管道，保护您的家。",
    },
    "blocked-drain": {
      name: "排水管堵塞",
      subtitle:
        "排水管堵塞若不处理，会导致积水与异味。Renovix 疏通堵塞，并帮助防止再次发生。",
    },
    "toilet-problems": {
      name: "马桶问题",
      subtitle:
        "马桶不停流水、渗漏或冲力不足，会浪费水并损坏地面。Renovix 维修马桶并解决根本原因。",
    },
    "low-water-pressure": {
      name: "水压偏低",
      subtitle:
        "花洒或水龙头水压偏弱，往往是管道或供水问题。Renovix 找出原因，恢复稳定有力的水流。",
    },
    "roof-leakage": {
      name: "屋顶漏水",
      subtitle:
        "屋顶漏水会随着雨势迅速蔓延。Renovix 找出进水点，为屋顶做防水，从源头止漏。",
    },
    "bathroom-leakage": {
      name: "浴室漏水",
      subtitle:
        "浴室漏水最终会渗到楼下。Renovix 找出源头，为潮湿区重做防水，阻止损坏扩大。",
    },
    "balcony-leakage": {
      name: "阳台漏水",
      subtitle:
        "阳台积水渗到楼下，是防水层的问题。Renovix 妥善封堵，保护下方的房间。",
    },
    "wall-seepage": {
      name: "墙体渗水",
      subtitle:
        "水在墙体中迁移，正是潮湿与霉斑的成因。Renovix 判断水从哪一侧进来，并妥善封堵。",
    },
    "damp-walls": {
      name: "墙面潮湿",
      subtitle:
        "潮湿的墙面是持续的水汽问题。Renovix 找出墙面久湿不干的原因并加以处理，让它彻底干透。",
    },
    "water-stains": {
      name: "水渍",
      subtitle:
        "水渍是应当追查来源的潮气痕迹，而不是刷层漆盖住就好。Renovix 找出成因并恢复干净的表面。",
    },
    "door-problems": {
      name: "门的问题",
      subtitle:
        "门卡住、有异响或关不上，多半是铰链或门框的问题。Renovix 调校并修复门扇，让开关顺畅。",
    },
    "lock-problems": {
      name: "门锁问题",
      subtitle:
        "锁头卡涩或转不动是安全隐患。Renovix 维修或更换门锁，守护居家安全。",
    },
    "curtain-installation": {
      name: "窗帘安装",
      subtitle:
        "窗帘量准、装稳，才挂得好、用得久。Renovix 牢固地安装窗帘杆与轨道。",
    },
    "tv-mounting": {
      name: "电视挂墙安装",
      subtitle:
        "挂墙电视需要合适的支架、牢固的固定与安全的高度。Renovix 稳固地安装电视并整理线材。",
    },
    "shelf-installation": {
      name: "层架安装",
      subtitle:
        "层架牢不牢，取决于固定它的墙面。Renovix 把层架装得水平、稳固，并能承受重量。",
    },
    "minor-home-repairs": {
      name: "家居小修",
      subtitle:
        "家里累积的小活儿 —— 松动的五金、挂钩、填缝与小修补 —— 由一位值得信赖的师傅一次处理好。",
    },
  },
};
