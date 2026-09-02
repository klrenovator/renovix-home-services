import type { Dictionary } from "./types";

/**
 * 简体中文 (zh-MY) — 面向马来西亚华裔客户的专业用语。
 * 采用本地惯用词：装修、瓷砖、巴生谷、排屋、半独立屋、报价等。
 */
export const zh: Dictionary = {
  meta: {
    siteName: "Renovix Home Services",
    brandTagline: "吉隆坡与雪兰莪专业房屋装修与维修服务",
    defaultDescription:
      "Renovix Home Services 为吉隆坡、雪兰莪及巴生谷提供专业房屋装修与改善服务，涵盖瓷砖、焊接、水电、油漆、天花板、隔墙、水管、防水、地板、装修与居家维修服务。",
    homeTitle: "Renovix Home Services | 吉隆坡与雪兰莪房屋装修与维修服务",
    homeDescription:
      "吉隆坡、雪兰莪及巴生谷专业房屋装修与改善服务 —— 瓷砖、焊接、电工、油漆、天花板、隔墙、水管、防水、地板与居家维修。",
    ogBadge: "服务吉隆坡与雪兰莪 · 巴生谷",
  },
  a11y: {
    skipToContent: "跳至主要内容",
    primaryNavigation: "主导航",
    mobileNavigation: "手机导航",
    breadcrumb: "面包屑导航",
    languageNavigation: "语言",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    brandHome: "Renovix Home Services – 首页",
    filterProjects: "依服务分类筛选工程照片",
  },
  nav: {
    home: "首页",
    services: "服务项目",
    problems: "常见问题",
    areas: "服务地区",
    projects: "工程案例",
    faq: "常见问答",
    about: "关于我们",
    contact: "联系我们",
  },
  legal: {
    privacy: "隐私政策",
    terms: "条款与条件",
  },
  cta: {
    getFreeQuote: "免费获取报价",
    quoteShort: "报价",
    whatsappShort: "WhatsApp",
    requestQuote: "索取报价",
    getQuote: "获取报价",
    startQuoteRequest: "开始报价申请",
    whatsappUs: "WhatsApp 咨询",
    viewService: "查看服务",
    viewProblem: "查看问题",
    viewGuide: "查看指南",
    viewAreas: "查看地区",
    explore: "了解更多",
    exploreServices: "浏览服务项目",
    exploreServiceAreas: "浏览服务地区",
    browseAllServices: "浏览全部服务",
    allServiceAreas: "全部服务地区",
    browseAllServiceAreas: "浏览全部服务地区",
    viewAllFaqs: "查看全部常见问答",
    backToHome: "返回首页",
    exploreCategory: "了解该服务",
    viewContactDetails: "查看联系方式",
    viewServiceAreas: "查看服务地区",
    tellUsAboutWork: "告诉我们您的工程需求",
    callNow: "立即致电",
    emailUs: "发送电邮",
    viewNamed: "查看{name}",
  },
  footer: {
    blurbPrimary: "吉隆坡与雪兰莪专业房屋装修与改善服务。",
    blurbSecondary:
      "为巴生谷住户提供可靠的装修、维修、保养与房屋改善方案。",
    language: "语言",
    services: "服务项目",
    navigation: "网站导航",
    areasWeServe: "服务地区",
    contact: "联系方式",
    phone: "电话",
    whatsapp: "WhatsApp",
    email: "电邮",
    address: "地址",
    hours: "营业时间",
    rights: "版权所有。",
  },
  home: {
    hero: {
      badge: "吉隆坡与雪兰莪 · 巴生谷",
      title: "吉隆坡与雪兰莪专业房屋装修与改善服务",
      lead: "服务范围涵盖瓷砖、焊接、电工、油漆、天花板、隔墙、水管、防水、地板、装修与居家维修，覆盖整个巴生谷。",
      highlights: ["一站式房屋服务", "覆盖吉隆坡与雪兰莪", "报价流程简单"],
      imageAlt: "马来西亚住宅的现代装修工程",
      imageTitle: "专业施工工艺",
      imageCaption: "为房屋装修、维修与改善提供务实的解决方案。",
    },
    services: {
      eyebrow: "我们的服务",
      title: "一站式解决全屋装修与改善需求",
      description:
        "从小型维修到较大规模的装修工程，Renovix 为吉隆坡与雪兰莪住户提供多元化的实用房屋服务。",
    },
    problems: {
      eyebrow: "常见家居问题",
      title: "家里出现问题？我们可以协助。",
      description:
        "以下是我们在巴生谷各地能够评估并协助处理的常见家居问题。",
      libraryPrefix: "欢迎浏览我们的",
      libraryLink: "问题指南库",
      librarySuffix: "，了解所有我们涵盖的家居问题。",
    },
    why: {
      eyebrow: "为何选择 Renovix",
      title: "为什么选择 Renovix Home Services？",
      description:
        "以务实、以客户为中心的方式，处理吉隆坡与雪兰莪的房屋装修与改善工程。",
      benefits: [
        {
          title: "一站式房屋服务",
          description: "多项房屋改善与维修需求，只需通过一个联系渠道即可处理。",
        },
        {
          title: "专业施工工艺",
          description: "我们专注于日常房屋工程的整洁、细致与专业施工。",
        },
        {
          title: "清晰沟通",
          description: "我们会说明工程内容、提出关键问题，并随时向您汇报进度。",
        },
        {
          title: "务实方案",
          description: "提供简单直接、符合您住家实际需求的建议。",
        },
        {
          title: "多元房屋改善服务",
          description: "从瓷砖、油漆到防水与居家维修，多种需求都能涵盖。",
        },
        {
          title: "覆盖吉隆坡与雪兰莪",
          description: "为吉隆坡及整个巴生谷的客户提供房屋服务。",
        },
        {
          title: "报价流程简单",
          description: "提供工程详情与照片，我们即可为您说明下一步。",
        },
      ],
    },
    process: {
      eyebrow: "服务流程",
      title: "简单、透明的流程",
      description: "我们保持报价流程简单明了，让您清楚知道每个阶段会发生什么。",
      steps: [
        {
          title: "告诉我们您的需求",
          description: "描述您想进行的维修、改善或装修工程。",
        },
        {
          title: "提供资料与照片",
          description: "发送相关资料及受影响区域的照片，协助我们了解工程范围。",
        },
        {
          title: "获取评估与报价",
          description: "我们的团队会评估您提供的资料，并就下一步与报价给予说明。",
        },
        {
          title: "安排施工时间",
          description: "在工程范围与时间安排确认后，即可安排合适的时间施工。",
        },
      ],
    },
    areas: {
      eyebrow: "服务区域",
      title: "服务覆盖吉隆坡与雪兰莪",
      description:
        "Renovix 在整个巴生谷提供房屋装修与改善服务 —— 并为主要市区地段与雪兰莪重点城镇提供专门的地区指南。",
    },
    ctaSection: {
      eyebrow: "立即开始",
      title: "正在规划房屋维修或装修？",
      description: "告诉我们您的需求，我们的团队可以评估工程并为您说明下一步。",
      note: "致电或 WhatsApp：+601159259521",
    },
    faq: {
      eyebrow: "常见问答",
      title: "开工前常见的疑问",
      description:
        "以下摘录屋主最常提出的部分问题。如需针对个别服务、地区与报价的说明，请浏览完整常见问答页面。",
    },
  },
  servicesIndex: {
    metaTitle: "Renovix Home Services | 吉隆坡与雪兰莪服务项目",
    metaDescription:
      "浏览 Renovix 在吉隆坡与雪兰莪的房屋服务：瓷砖、焊接与铁器、电工、油漆、天花板与隔墙、装修、水管、防水、地板及居家维修。",
    ogDescription: "覆盖吉隆坡、雪兰莪及巴生谷的完整房屋装修与改善服务。",
    breadcrumb: "服务项目",
    title: "吉隆坡与雪兰莪房屋服务项目",
    lead: "十大实用服务类别，涵盖巴生谷各地的装修、维修、保养与房屋改善。每个服务页面都说明我们的工作内容、可解决的问题以及施工方式。",
    gridEyebrow: "浏览服务",
    gridTitle: "选择服务了解更多",
    gridDescription:
      "每个服务页面都涵盖完整工程范围、细项服务、常见问题、可服务的房屋类型、施工流程、服务地区与常见问答。",
    oneStopEyebrow: "一站式房屋服务",
    oneStopTitle: "多项服务，一个联系窗口",
    oneStopDescription:
      "多数装修与维修工程都会涉及多项服务。Renovix 通过同一支团队统筹瓷砖、电工、水管、油漆等工程 —— 让施工顺序安排得当，您也只需与一个窗口沟通。",
    oneStopNote:
      "不确定需要哪项服务？把工程告诉我们，我们会为您指出最适合的方向。",
  },
  servicePage: {
    breadcrumbServices: "服务项目",
    overviewEyebrow: "服务概览",
    highlightsTitle: "本服务涵盖的内容",
    subServicesEyebrow: "细项服务",
    subServicesTitle: "{name}项目",
    problemsEyebrow: "我们解决的问题",
    propertyTypesEyebrow: "房屋类型",
    propertyTypesTitle: "我们可服务的房屋类型",
    processEyebrow: "施工流程",
    whyEyebrow: "为何选择 Renovix",
    areasEyebrow: "服务地区",
    areasTitle: "服务覆盖吉隆坡与雪兰莪",
    faqsEyebrow: "常见问答",
    faqsTitle: "{name} — 常见问答",
    faqsDescription: "针对客户最常询问本服务的问题，提供直接的解答。",
    relatedEyebrow: "相关服务",
    relatedTitle: "适合搭配的服务",
    relatedDescription:
      "{name}常与 Renovix 其他服务一同进行。以下是客户经常搭配安排的服务。",
    relatedProblemsTitle: "浏览相关问题指南",
    relatedProblemsNote:
      "这些指南说明本服务所处理问题的成因、警讯与务实解决方式。",
    ctaHeading: "在吉隆坡与雪兰莪需要{name}？",
    ctaTitle: "您的住家需要这项服务？",
    ctaDescription:
      "告诉我们工程详情、房屋类型与所在位置，我们会为您说明下一步。",
  },
  problemsIndex: {
    metaTitle: "Renovix Home Services | 吉隆坡与雪兰莪家居问题",
    metaDescription:
      "浏览我们在吉隆坡与雪兰莪协助处理的常见家居问题 —— 瓷砖、电工、油漆、天花板、水管、防水与居家维修，附成因与解决方案说明。",
    ogDescription: "针对巴生谷常见家居问题的清楚解答，并链接至对应的 Renovix 服务。",
    breadcrumb: "常见问题",
    title: "我们在吉隆坡与雪兰莪解决的家居问题",
    lead: "多数人在寻找房屋服务时，会先描述遇到的问题，而不是服务名称。这些页面逐一说明常见问题的成因、警讯，以及 Renovix 的处理方式 —— 每个问题都链接至对应的服务。",
  },
  problemPage: {
    breadcrumbProblems: "常见问题",
    heroCategoryFallback: "居家问题",
    whatItMeansEyebrow: "这个问题意味着什么",
    whatItMeansTitle: "认识{name}",
    whatItMeansDescription: "清楚、坦诚地说明目前的状况，让您了解自己面对的是什么。",
    shortAnswerEyebrow: "简短回答",
    shortAnswerNote: "我们说明成因与处理方式，而不只是表面症状。",
    causesEyebrow: "常见成因",
    causesTitle: "{name}通常由什么造成",
    causesDescription: "了解成因，才能明白问题为何发生，以及什么才是正确的处理方式。",
    warningSignsEyebrow: "警讯",
    warningSignsTitle: "需要留意的警讯",
    warningSignsDescription:
      "及早发现这些迹象，往往能避免小问题演变成更大的维修工程。",
    solutionsEyebrow: "可能的解决方式",
    solutionsTitle: "我们可以如何处理",
    solutionsDescription:
      "我们解决此问题所采取的务实做法 —— 从针对性维修到更完整的解决方案。",
    whenToCallEyebrow: "何时需要专业人员",
    whenToCallTitle: "什么时候需要专业协助",
    whenToCallDescription:
      "有些问题值得及早处理，有些则应交由专业人员负责。以下说明何时该与我们联系。",
    relatedServiceEyebrow: "相关的 Renovix 服务",
    relatedServiceTitle: "负责处理此问题的服务",
    relatedServiceDescription:
      "{problem}由我们的{service}团队负责。以下相关服务经常属于同一项工程的一部分。",
    mainServiceLabel: "主要服务",
    processEyebrow: "施工流程",
    propertyTypesEyebrow: "房屋类型",
    propertyTypesTitle: "我们可协助的房屋类型",
    faqsEyebrow: "常见问答",
    faqsTitle: "{name} — 常见问答",
    faqsDescription: "针对客户最常询问此问题的内容，提供直接的解答。",
    relatedProblemsEyebrow: "相关问题",
    relatedProblemsTitle: "经常同时出现的问题",
    relatedProblemsDescription: "这些问题在吉隆坡与雪兰莪的住家中经常同时出现。",
    ctaHeading: "在吉隆坡与雪兰莪需要处理{name}？",
    ctaTitle: "住家正面对这个问题？",
    ctaDescription: "描述您看到的情况与房屋所在位置，我们会为您建议下一步。",
  },
  areasIndex: {
    metaTitle: "Renovix Home Services | 吉隆坡、雪兰莪与巴生谷服务地区",
    metaDescription:
      "Renovix 服务范围涵盖吉隆坡、雪兰莪及巴生谷。浏览吉隆坡各区与雪兰莪各镇的地区指南，了解各地服务、房屋类型与常见问题。",
    ogDescription: "吉隆坡、雪兰莪及整个巴生谷的本地服务地区指南。",
    breadcrumb: "服务地区",
    title: "吉隆坡、雪兰莪与巴生谷服务地区",
    lead: "Renovix 在吉隆坡与雪兰莪各地提供房屋装修、维修与改善服务。每份地区指南都说明当地的住宅概况、最相关的服务，以及我们常见的问题。",
    faqEyebrow: "服务范围疑问",
    faqTitle: "关于我们的服务地区",
    faqDescription: "为我们所服务地区的业主提供的实用解答。",
    guidesEyebrow: "我们的工作区域",
    guidesTitle: "选择要浏览的区域",
    guidesDescription:
      "吉隆坡涵盖市区各地段；雪兰莪则环绕其外，拥有巴生谷最大的多个城镇。两者共同构成我们的服务范围。",
    guidesCountSuffix: "份地区指南",
    viewRegion: "查看地区指南",
    klangValleyTitle: "什么是巴生谷",
    klangValleyParagraphs: [
      "巴生谷是以吉隆坡与巴生河流域为中心的都会区，涵盖联邦直辖区及周边雪兰莪地区 —— 八打灵、巴生、莎阿南、梳邦再也、乌鲁冷岳、鹅唛、雪邦，以及瓜拉冷岳的部分地区。实际上，这意味着一个相互连接的住宅市场：我们的工程每天在其间往返，从吉隆坡的公寓到雪兰莪的城镇。",
      "我们只发布如实的地区信息 —— 不会虚构本地办公室或服务半径。服务范围在您询问时确认，每份指南反映的都是当地常见的住宅类型与装修情况。",
    ],
    ctaEyebrow: "立即开始",
    ctaTitle: "正在规划巴生谷的房屋工程？",
    ctaDescription:
      "告诉我们房屋情况与您想进行的工程 —— 照片会有帮助。我们会审阅详情、解答您的疑问，并在准备报价前为您说明下一步。",
  },
  areaRegion: {
    breadcrumbAreas: "服务地区",
    areasEyebrow: "地区指南",
    areasTitle: "我们在{name}服务的地区",
    areasDescription:
      "每份指南都涵盖当地房屋类型、常见问题、最多人询问的服务，以及在该地区施工的实际须知。",
    landscapeEyebrow: "住宅概况",
    landscapeTitle: "了解{name}的住宅结构",
    servicesEyebrow: "热门服务",
    servicesTitle: "{name}最多人询问的服务",
    faqsEyebrow: "常见问答",
    faqsTitle: "{name} — 常见问答",
    faqsDescription: "为本区域屋主提供的实用解答。",
    otherRegion: "查看另一个区域",
    otherTitle: "我们同样服务{name}",
    otherBody: "浏览我们的{name}地区指南，了解当地房屋情况、常见问题与可提供的服务。",
    exploreOther: "浏览{name}",
    ctaTitle: "正在规划本区域的工程？",
    ctaDescription:
      "告诉我们您所在的地区、房屋类型与工程需求，我们会为您说明下一步。",
  },
  areaPage: {
    breadcrumbAreas: "服务地区",
    servicesEyebrow: "可提供的服务",
    servicesTitle: "{name}可提供的居家服务",
    serviceInArea: "{name}{service}",
    allAreasIn: "{name}的所有地区",
    guidesCount: "{name}共有 {count} 份地区指南。",
    browseRegion: "浏览{name}",
    schemaServiceName: "{name}的房屋装修与维修服务",
    schemaServiceType: "房屋装修与维修服务",
    schemaCatalogName: "{name}可提供的 Renovix 服务",
    propertyTypesEyebrow: "房屋类型",
    propertyTypesTitle: "{name}的房屋类型",
    problemsEyebrow: "常见问题",
    problemsTitle: "{name}常见的装修与维修问题",
    processEyebrow: "施工流程",
    contextEyebrow: "本地服务情况",
    contextTitle: "在{name}施工 — 您可以预期什么",
    relatedEyebrow: "相关服务",
    relatedTitle: "{name}经常一起进行的服务",
    relatedDescription:
      "{name}的工程多半涉及多个工种。一起规划可以让工序衔接顺畅，现场也更有效率。",
    nearbyEyebrow: "邻近地区",
    nearbyTitle: "{name}附近我们同样服务的地区",
    nearbyDescription: "我们在此地点附近同样服务的其他地区。",
    faqsEyebrow: "常见问答",
    faqsTitle: "{name} — 常见问答",
    faqsDescription: "为本地屋主提供的实用解答。",
    problemsLink: "进一步了解这些问题",
    coverageNoteTitle: "如实说明服务范围",
    coverageNote:
      "本指南说明我们工作的区域，以及规划工程时会考虑的本地情况；并不表示在此地点设有实体办公室、固定服务半径或本地团队。",
    ctaHeading: "正在规划{name}的工程？先从免费报价开始。",
    ctaEyebrow: "在{name}获取免费报价",
    ctaTitle: "正在规划本地区的工程？",
    ctaDescription:
      "告诉我们房屋类型、工程需求与所在位置，我们会为您说明下一步。",
  },
  about: {
    metaTitle: "关于 Renovix Home Services | 吉隆坡与雪兰莪",
    metaDescription:
      "了解 Renovix Home Services 在吉隆坡、雪兰莪及巴生谷处理房屋装修、维修与改善工程的务实方式。",
    breadcrumb: "关于我们",
    eyebrow: "关于 Renovix",
    title: "务实的房屋服务，清晰的工程规划",
    description:
      "Renovix Home Services 将装修、维修与改善需求整合为一个务实的起点，服务吉隆坡、雪兰莪及巴生谷的住家。",
    approachEyebrow: "我们如何处理房屋工程",
    approachTitle: "从第一个问题到正确的下一步",
    approachParagraphs: [
      "当工程范围清楚、相关工种一并考虑时，房屋改善工程会更容易管理。Renovix 的重点，是协助屋主说明工程内容、了解可选的服务，并以务实的方案推进。",
      "无论是小型维修、单个空间的升级，还是范围更广的装修工程，起点都一样：聆听细节、考虑房屋实际情况，并清楚说明下一步。若涉及多项服务，及早安排施工顺序，有助于让工程保持专注。",
    ],
    approachLink: "告诉我们您的工程需求",
    standardsEyebrow: "服务背后的原则",
    standardsTitle: "每一次询问都遵循的清楚标准",
    standardsLead:
      "目标很简单：让您的住家更容易获得合适的工程安排，不必面对多余的假设或令人混淆的交接。",
    principles: [
      {
        title: "专业施工工艺",
        description: "充分的准备、注重细节与整洁的收工，是规划与执行房屋工程的核心。",
      },
      {
        title: "可靠服务",
        description: "可靠的体验，始于清楚的工程范围、合理的期待与务实的施工计划。",
      },
      {
        title: "清晰沟通",
        description: "在安排施工之前，工程内容、下一步与工地细节都应当容易理解。",
      },
      {
        title: "务实方案",
        description: "建议应符合房屋状况、空间用途，以及实际需要的工程内容。",
      },
      {
        title: "以客户为中心",
        description:
          "每一次询问都从屋主的优先事项、疑问、位置与房屋情况出发，而不是一律套用的答案。",
      },
    ],
    servicesEyebrow: "一个务实的起点",
    servicesTitle: "多项房屋服务，在合适之处相互衔接",
    servicesLead:
      "Renovix 涵盖各类房屋改善需求。您可以单独了解某项服务，也可以在涉及多个工种时，说明更广的工程范围。",
    coverageEyebrow: "我们的工作区域",
    coverageTitle: "吉隆坡、雪兰莪与巴生谷",
    coverageBody:
      "Renovix 所述的服务范围包括吉隆坡、雪兰莪及更广大的巴生谷。请在工程详情中附上所在位置，以便我们考虑合适的下一步。",
    kualaLumpurLink: "吉隆坡服务地区",
    selangorLink: "雪兰莪服务地区",
    allAreasLink: "全部服务地区",
    ctaEyebrow: "开始沟通",
    ctaTitle: "告诉我们您住家的需求",
    ctaDescription:
      "分享您想进行的维修、升级或装修工程，以及房屋类型与所在位置，我们会为您说明下一步。",
    ctaSecondary: "联系 Renovix",
  },
  contact: {
    metaTitle: "联系 Renovix Home Services | 吉隆坡与雪兰莪",
    metaDescription:
      "就吉隆坡、雪兰莪及巴生谷的装修、维修与房屋改善工程联系 Renovix Home Services，或提交报价申请。",
    breadcrumb: "联系我们",
    eyebrow: "联系 Renovix",
    title: "从您的房屋服务问题开始",
    description:
      "欢迎致电或通过 WhatsApp 联系 +601159259521，发送电邮至 renovixhomeservices@gmail.com，或提交报价申请，说明吉隆坡、雪兰莪及巴生谷的工程需求。",
    heroPrimary: "开始报价申请",
    detailsEyebrow: "联系方式",
    detailsTitle: "与我们取得联系的方式",
    detailsLead:
      "您可通过电话、WhatsApp 或电邮直接联系 Renovix Home Services。我们在营业时间内回复咨询，并会如实告知在报价前是否需要先到现场查看。",
    channels: {
      business: "公司名称",
      businessHelper:
        "公司正式名称，在全站、发票及往来函件中统一使用。",
      phone: "电话号码",
      phoneHelper: "营业时间内来电，向我们说明需要处理的工程。",
      whatsapp: "WhatsApp 号码",
      whatsappHelper: "最快捷的联系方式 —— 发送信息时附上问题照片。",
      email: "电邮",
      emailHelper: "适合较大工程范围、图纸、报价单与文件往来。",
      address: "地址",
      addressHelper: "我们位于 Mont Kiara。施工在您的住处进行，服务范围涵盖吉隆坡、雪兰莪与巴生谷。",
      hours: "营业时间",
      hoursHelper: "来电、WhatsApp 信息与电邮均在此时段内回复。",
    },
    ctaEyebrow: "联系我们",
    ctaTitle: "告诉我们您需要的工程",
    ctaBody:
      "报价申请是说明服务、房屋、位置与简短描述最清楚的方式。照片有助于评估。",
    whatsappEyebrow: "WhatsApp 咨询",
    whatsappTitle: "更习惯使用 WhatsApp？",
    whatsappBody:
      "发送信息时附上几张照片与所在位置。WhatsApp 通常是说明维修需求、确定下一步最快的方式。",
    whatsappNote: "致电或 WhatsApp：",
    areasEyebrow: "服务地区信息",
    areasTitle: "吉隆坡、雪兰莪与巴生谷",
    areasLead:
      "Renovix 所述的服务范围包括吉隆坡、雪兰莪及更广大的巴生谷。请在询问中附上您所在的地区或地段，以便我们结合实际情况考虑工程。",
    kualaLumpurDescription: "市区与地段指南",
    selangorDescription: "州属与城镇指南",
    klangValleyDescription: "浏览全部服务地区",
  },
  quote: {
    metaTitle: "Renovix Home Services | 吉隆坡与雪兰莪房屋服务报价",
    metaDescription:
      "向 Renovix 索取吉隆坡、雪兰莪及巴生谷的房屋装修、维修或改善报价。提供工程、房屋、位置与照片，以便我们进行评估。",
    breadcrumb: "获取报价",
    eyebrow: "报价申请",
    title: "为您的房屋服务需求获取报价",
    description:
      "请说明所需服务、房屋类型、位置与工程内容。有用的资料与照片有助于评估；报价不会即时生成。",
    heroPrimary: "开始报价申请",
    formTitle: "告诉我们工程详情",
    formLead: "您提供的资料越详细，我们越容易判断评估时可能需要什么。",
    labels: {
      name: "姓名",
      whatsapp: "WhatsApp 号码",
      email: "电邮",
      propertyType: "房屋类型",
      service: "所需服务",
      subService: "细项服务",
      location: "所在位置",
      description: "工程说明",
      preferredDate: "期望日期",
      photos: "上传照片",
      preferredContact: "首选联系方式",
      requiredText: "（必填）",
    },
    placeholders: {
      name: "您的姓名",
      whatsapp: "您的 WhatsApp 号码",
      email: "nina.v@example.com",
      propertyType: "请选择房屋类型",
      service: "请选择服务",
      subService: "请选择细项服务（可选）",
      subServiceDisabled: "请先选择服务",
      location: "地区、城市或地段",
      description:
        "请描述您想处理的问题或工程，包括有用的尺寸、出入安排或时间考虑。",
    },
    help: {
      email: "选填，除非您希望我们通过电邮联系。",
      subService: "选择最接近的选项，或留空。",
      location: "请注明工程所在的吉隆坡、雪兰莪或巴生谷地区。",
      preferredDate: "选填。日期只是您的偏好，并非预约。",
      photos:
        "本表单不会附上照片。提交后，请通过 WhatsApp 发送照片，以便我们评估工程。",
      photosChosen: "选择该区域的照片",
      requiredNote: "标示 * 的栏位为必填。",
      preferredContact: "我们会优先通过此方式回复您。",
    },
    contactMethods: {
      whatsapp: "WhatsApp",
      phone: "电话",
      email: "电邮",
    },
    validation: {
      required: "此栏为必填项。",
      name: "请输入您的姓名。",
      phone: "请输入有效的电话号码。",
      email: "请输入有效的电邮地址。",
      emailRequired: "请输入电邮地址，以便我们通过电邮回复。",
      propertyType: "请选择房屋类型。",
      service: "请选择服务。",
      location: "请输入工程所在地区。",
      description: "请说明您需要的工程内容。",
      descriptionTooLong: "留言过长，请精简后再提交。",
      preferredContact: "请选择您希望我们联系您的方式。",
    },
    photosPrompt: "上传照片",
    photosSelectedSuffix: "张照片",
    photosSelectedSuffixPlural: "张照片",
    deliveryTitle: "本表单的提交方式",
    deliveryBody:
      "您的申请会发送给我们的团队。报价不会即时生成 —— 我们会先审阅资料，并可能需要更多信息或照片。您也可以拨打或通过 WhatsApp 联系 +601159259521。",
    submit: "提交报价申请",
    submitting: "正在提交您的申请...",
    successTitle: "申请已收到",
    successBody: "谢谢！我们已收到您的报价申请。我们的团队会尽快与您联系。",
    errorTitle: "申请未能发送",
    errorBody: "目前无法提交您的申请。请再试一次，或通过 WhatsApp 联系我们。",
    whatsappFallback: "如需立即联系，请通过 WhatsApp 联系 Renovix Home Services。",
    whatsappFallbackCta: "通过 WhatsApp 联系我们",
    whatsappFallbackMessage:
      "您好，Renovix Home Services。我刚在网站提交报价申请但没有成功，想直接咨询报价。",
    privacyNote: "您提交的资料用于回复此次咨询。",
    asideEyebrow: "接下来的流程",
    asideTitle: "审慎评估，而非即时承诺",
    asideBody:
      "有用的报价取决于工程范围与现场状况。您提供的资料有助于判断是否需要更多细节或实地评估。",
    guidanceEyebrow: "如何让申请更有效",
    steps: [
      {
        title: "提供基本资料",
        description: "选择服务、说明工程地点，并清楚描述问题或工程内容。",
      },
      {
        title: "补充有用的背景",
        description: "照片、尺寸、房屋资料与出入安排说明，都有助于初步评估。",
      },
      {
        title: "报价前的审阅",
        description:
          "我们会先审阅资料。视工程情况，可能需要更多信息或实地评估，才会准备报价。",
      },
    ],
    statusTitle: "表单提交状态",
    statusBody:
      "此表单会将您的咨询发送给 Renovix Home Services。我们会通过您选择的方式与您联系。您也可以直接拨打或通过 WhatsApp 联系 +601159259521，或发送电邮至 renovixhomeservices@gmail.com。",
    browseEyebrow: "不确定从何开始？",
    browseTitle: "索取报价前，先浏览服务范围",
    browseBody:
      "服务页面说明可提供的工程、常见问题与相关服务，有助您在表单中选择正确的选项。",
    coverageEyebrow: "服务范围",
    coverageTitle: "工程覆盖吉隆坡、雪兰莪与巴生谷",
    coverageBody:
      "请在报价申请中注明您所在的地段或城市。您也可以通过服务地区指南，了解当地的覆盖情况。",
    propertyTypes: [
      "公寓 / 组屋",
      "排屋 / 有地住宅",
      "半独立屋 / 洋房",
      "店铺 / 办公室 / 商业空间",
      "其他 / 尚未确定",
    ],
    notSureOption: "不确定 / 需要多项服务",
    notSureSubService: "不确定 —— 请给予建议",
    multipleServicesSubService: "多项服务 / 装修工程",
  },
  projects: {
    metaTitle: "吉隆坡与雪兰莪工程照片 | Renovix Home Services",
    metaDescription:
      "Renovix Home Services 的真实工程照片：吉隆坡与雪兰莪的瓷砖铺设、石膏天花、电气布线、金属焊接与装修施工实录，全部为团队现场拍摄。",
    breadcrumb: "工程案例",
    eyebrow: "工程案例",
    title: "Renovix 在吉隆坡与雪兰莪的真实施工照片",
    description:
      "这里收录 Renovix 实际工程的照片，涵盖瓷砖铺设、石膏天花与灯具、电气安装、焊接与金属工程、卫浴洁具安装，以及进行中的装修工程。",
    statusEyebrow: "关于这些照片",
    statusTitle: "由我们团队施工的实拍照片",
    statusBody:
      "本页每一张图片都是我们团队实际施工的照片。客户姓名、地址、日期、费用与成果并未在此发布，因为这些资料并未提供。每段说明只描述画面中可见的内容。",
    browseEyebrow: "依服务分类浏览",
    browseTitle: "依工程类型浏览照片",
    browseLead:
      "依您感兴趣的工程类型筛选相册。每张卡片都会链接到相应的服务页面。",
    allCategories: "全部分类",
    showingPrefix: "目前显示",
    showingSuffixOne: "张照片。",
    showingSuffixMany: "张照片。",
    showingNote: "所有图片均来自我们团队实际施工的工程。",
    emptyState: "此分类目前尚未发布照片。",
    fallbackCategory: "服务",
    exploreServicePrefix: "了解服务",
    futureEyebrow: "相册如何持续更新",
    futureTitle: "每则工程记录会加入什么",
    futureLead:
      "工程完成且照片获准发布后，我们会陆续加入新的相片。每张照片都据实说明，不会虚构成果。",
    futureItems: [
      {
        title: "真实工程照片",
        description: "施工期间或完工后在现场拍摄的图片。",
      },
      {
        title: "清楚的工程范围",
        description: "如实描述工程内容，而非虚构的成果。",
      },
      {
        title: "确认过的资料",
        description: "仅在能够准确分享时，才列出房屋与地区信息。",
      },
    ],
    ctaEyebrow: "规划您自己的工程",
    ctaTitle: "想在您的空间做同样的工程吗？",
    ctaDescription:
      "浏览服务分类，或提供您的维修、升级或装修详情，开始申请报价。",
    ctaSecondary: "浏览服务项目",
  },
  faq: {
    metaTitle: "Renovix Home Services | 房屋服务常见问答",
    metaDescription:
      "解答关于 Renovix Home Services 的常见问题：房屋维修、装修、吉隆坡与雪兰莪服务范围、公寓工程、报价照片，以及各服务类别。",
    breadcrumb: "常见问答",
    eyebrow: "常见问题",
    title: "索取报价前的直接解答",
    description:
      "了解 Renovix 服务、吉隆坡与雪兰莪服务范围、房屋类型、报价照片，以及各房屋服务类别的相关说明。",
    asideEyebrow: "找到正确的答案",
    asideTitle: "无需猜测的服务信息",
    asideLead:
      "这些答案说明目前的服务架构与下一步。如需个别服务的工程范围，请点选相关答案中的链接。",
    browseServices: "浏览全部服务",
    exploreAreas: "浏览服务地区",
    ctaEyebrow: "还有疑问？",
    ctaTitle: "告诉我们工程详情与您想知道的答案",
    ctaDescription:
      "报价申请让您有系统地说明房屋、位置与工程内容。照片有助于评估，但报价不会即时提供。",
    explorePrefix: "了解",
    groups: [
      {
        id: "getting-started",
        label: "开始之前",
        description: "在提供工程详情之前，您可能会需要的信息。",
      },
      {
        id: "areas-properties",
        label: "服务地区与房屋类型",
        description: "Renovix 的服务区域，以及不同房屋类型的注意事项。",
      },
      {
        id: "services",
        label: "个别服务的问题",
        description: "直接链接至说明各项工程范围的服务页面。",
      },
    ],
    answers: {
      "services-provided": {
        question: "你们提供哪些服务？",
        answer:
          "Renovix 提供房屋装修、维修与改善服务，涵盖瓷砖、焊接与铁器、电工、油漆、天花板与隔墙、整体装修、水管、防水、地板及居家维修。",
      },
      "request-quote": {
        question: "我要如何索取报价？",
        answer:
          "请通过“获取报价”表单，说明所需工程、房屋资料与所在位置。您也可以拨打或通过 WhatsApp 联系 +601159259521，或发送电邮至 renovixhomeservices@gmail.com。资料审阅后，可能需要更多信息或评估，才会准备报价。",
      },
      "send-photos": {
        question: "我可以发送照片以获取报价吗？",
        answer:
          "可以。受影响区域的清晰照片，加上简短说明，有助于初步评估。照片不能取代必要时的实地评估，也不保证能够即时报价。",
      },
      "multiple-services": {
        question: "一项装修工程可以同时安排多项服务吗？",
        answer:
          "如果工程涉及多个工种，例如瓷砖、水管、电工与油漆，Renovix 可以通过一个联系窗口讨论统筹的工程范围。请提供完整的工程清单，以便我们妥善安排施工顺序。",
      },
      "areas-covered": {
        question: "你们的服务范围涵盖哪些地区？",
        answer:
          "Renovix 服务范围包括吉隆坡、雪兰莪及更广大的巴生谷。请浏览服务地区页面查看区域与本地指南，并在索取报价时附上所在位置，以便我们妥善处理。",
      },
      "kuala-lumpur": {
        question: "你们在吉隆坡提供服务吗？",
        answer:
          "是的。吉隆坡在 Renovix 所述的服务范围之内。服务地区板块提供吉隆坡的说明与各地点页面；个别工程是否可安排，会在审阅工程内容与位置后确认。",
      },
      selangor: {
        question: "你们在雪兰莪提供服务吗？",
        answer:
          "是的。雪兰莪在 Renovix 所述的服务范围之内。服务地区板块提供雪兰莪的说明与各城镇页面；个别工程是否可安排，会在审阅工程内容与位置后确认。",
      },
      condos: {
        question: "你们在公寓施工吗？",
        answer:
          "公寓工程可以讨论。管理处的规定、施工时间限制、装修准证与出入安排都可能适用，因此建议在报价申请中尽早提供这些细节。",
      },
      tiling: {
        question: "你们提供瓷砖工程吗？",
        answer:
          "是的。瓷砖服务涵盖地板、墙面、浴室及相关区域的铺贴、更换与维修。服务页面列出可提供的瓷砖工程范围与常见问题。",
      },
      welding: {
        question: "你们提供焊接与铁器工程吗？",
        answer:
          "是的。焊接与铁器工程可包括铁门、铁闸、栏杆、雨棚结构、维修与定制铁器制作。索取报价前，请先浏览服务页面了解所列的工程范围。",
      },
      electrical: {
        question: "你们提供电工服务吗？",
        answer:
          "是的。电工服务页面列出安装、布线、照明、插座、开关与故障检查等工程范围。电工工程应依马来西亚适用的规定进行评估与施工。",
      },
      painting: {
        question: "你们提供油漆工程吗？",
        answer:
          "是的。油漆服务包括所列的室内外粉刷、重新上漆、局部修补与墙面处理。服务页面说明可能相关的基层准备与相关表面处理。",
      },
      "ceiling-partition": {
        question: "你们提供天花板与隔墙工程吗？",
        answer:
          "是的。天花板与隔墙服务涵盖所列的天花板安装、维修与更换，以及石膏板、干墙、玻璃等隔墙工程。服务页面将天花板与隔墙的可选方案分开说明。",
      },
      renovation: {
        question: "你们提供整体装修工程吗？",
        answer:
          "是的。整体装修涵盖所列的核心装修范围，也可与相关收尾工种一并讨论。服务页面说明装修工程的类型，以及多项服务的工程范围如何规划。",
      },
      plumbing: {
        question: "你们提供水管工程吗？",
        answer:
          "是的。水管服务涵盖所列的水管、水龙头、马桶、水槽、花洒、排水及相关问题的维修与安装。服务页面说明可提供的工程范围。",
      },
      waterproofing: {
        question: "你们提供防水工程吗？",
        answer:
          "是的。防水工程适用于所列的浴室、厕所、阳台、屋顶、墙面与容易受潮的区域。服务页面说明工程范围，以及可能需要评估的常见渗漏问题。",
      },
      flooring: {
        question: "你们提供地板工程吗？",
        answer:
          "是的。地板服务涵盖所列的地板维修、更换与表面处理，适用于合适的地板类型与区域。请浏览服务页面了解可选方案。",
      },
      handyman: {
        question: "你们提供居家维修服务吗？",
        answer:
          "是的。居家维修服务涵盖所列的小型房屋维修、安装、调整与日常保养工作。服务页面列出可以讨论的具体项目。",
      },
    },
  },
  legalPage: {
    eyebrow: "法律信息",
    privacyTitle: "隐私政策",
    privacyDescription:
      "完整隐私政策将在后续阶段补充。如有任何隐私相关问题，请联系 Renovix Home Services：+601159259521 或 renovixhomeservices@gmail.com。",
    privacyMetaDescription: "Renovix Home Services 网站与服务的隐私政策。",
    termsTitle: "条款与条件",
    termsDescription:
      "完整条款与条件将在后续阶段补充。如有任何疑问，请联系 Renovix Home Services：+601159259521 或 renovixhomeservices@gmail.com。",
    termsMetaDescription: "使用 Renovix Home Services 网站与服务的条款与条件。",
    placeholderNote:
      "此页面正在为后续项目阶段准备。完整内容将在提供后补充。",
  },
  notFound: {
    eyebrow: "404",
    title: "找不到页面",
    description: "您要找的页面目前尚未在本站提供。",
    services: "浏览我们的服务",
    areas: "查看服务地区",
  },
  common: {
    home: "首页",
    serviceAreas: "服务地区",
    kualaLumpur: "吉隆坡",
    selangor: "雪兰莪",
    klangValley: "巴生谷",
    freeQuoteEyebrow: "获取免费报价",
    freeQuotation: "免费报价",
    klSelangor: "吉隆坡与雪兰莪",
    step: "步骤",
    businessHours: "上午 9:00 – 下午 6:00",
    callOrWhatsApp: "致电或 WhatsApp",
  },
  areasBlock: {
    eyebrow: "服务地区",
    title: "服务吉隆坡与雪兰莪",
    guideTitle: "每个地区都有专属指南",
    guideDescription:
      "整理巴生谷各地段与城镇的房屋类型、常见问题以及实际施工须知。",
    note: "不确定我们是否服务您的地区？欢迎询问 — 巴生谷大部分地点我们都能到。",
  },
};
