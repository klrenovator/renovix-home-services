import type { SubServiceDefinition } from "../types";

/**
 * Handyman sub-services that have genuine standalone search intent and, where
 * applicable, a priced row in the central pricing registry. English copy is the
 * source of truth; `ms` and `zh` are genuine translations of the same scope.
 */
export const handymanSubServices: SubServiceDefinition[] = [
  {
    slug: "hourly-service",
    serviceSlug: "handyman",
    pricingId: "handyman-hourly",
    standaloneSearchIntent: true,
    relatedProblems: ["minor-home-repairs", "shelf-installation", "curtain-installation"],
    en: {
      name: "Hourly Handyman Service",
      h1: "Hourly Handyman Service in Kuala Lumpur & Selangor",
      metaDescription:
        "Book a reliable handyman by the hour in Kuala Lumpur & Selangor for general home repairs, assembly and maintenance. No job too small — starting from RM60/hour. Free quote.",
      title: "Renovix Home Services | Hourly Handyman in KL & Selangor",
      lead:
        "One reliable handyman who charges by the hour is the simplest way to clear the pile of small fixes around your home — from a door that will not close to a shelf that needs hanging.",
      suitableFor: [
        "A list of small, independent jobs better handled in one visit.",
        "Rental or older homes with everyday wear and tear.",
        "Jobs too big for DIY but too small for a full contractor.",
      ],
      includes: [
        "General repair and maintenance tasks agreed before the visit",
        "Basic hand and power tool use included",
        "Advice on parts to buy and how to source them",
        "One convenient visit to knock out several jobs",
      ],
      excludes: [
        "Materials and replacement parts (billed as incurred)",
        "Specialist trades such as full electrical wiring or concealed plumbing",
      ],
      costFactors: [
        {
          title: "Time on site",
          description:
            "You pay per hour actually spent, so the total depends on how many jobs and how long each takes.",
        },
        {
          title: "Number of jobs",
          description:
            "Bundling several small tasks into one visit is usually more cost-effective than calling out for each.",
        },
        {
          title: "Access and travel",
          description:
            "Location within KL & Selangor and building access can affect the practical call-out.",
        },
      ],
      materials: [
        {
          title: "Your parts, or ours",
          description:
            "We can advise on the correct part and either fit what you supply or help you source it.",
        },
      ],
      process: [
        {
          title: "Tell us the jobs",
          description:
            "Describe the tasks over WhatsApp so we arrive prepared with the right tools.",
        },
        {
          title: "Agree the scope first",
          description:
            "We confirm what will and will not be done so there are no surprises on the hour.",
        },
        {
          title: "Work and handover",
          description:
            "The handyman works through the list and talks you through what was fixed.",
        },
      ],
      faqs: [
        {
          question: "What is the minimum booking?",
          answer:
            "We generally ask for a minimum of one hour so it is worth the visit; the hourly handyman service starts from RM60/hour.",
        },
        {
          question: "Can I supply my own parts?",
          answer:
            "Yes. We are happy to fit parts you have already bought, and can also advise on what to buy if you are unsure.",
        },
        {
          question: "Will one visit cover several small jobs?",
          answer:
            "Usually yes. List them when you enquire so we can bring the right tools and estimate the time accurately.",
        },
      ],
    },
    ms: {
      name: "Servis Handyman Mengikut Jam",
      h1: "Servis Handyman Mengikut Jam di Kuala Lumpur & Selangor",
      metaDescription:
        "Tempah tukang serba boleh yang dipercayai mengikut jam di Kuala Lumpur & Selangor untuk pembaikan rumah am, pemasangan dan penyelenggaraan. Bermula dari RM60/jam.",
      title: "Renovix Home Services | Handyman Mengikut Jam di KL & Selangor",
      lead:
        "Seorang tukang serba boleh yang dikira mengikut jam ialah cara paling mudah untuk menyelesaikan kerja-kerja kecil di rumah — daripada pintu yang tidak boleh ditutup hinggalah rak yang perlu dipasang.",
      suitableFor: [
        "Senarai kerja kecil yang bebas dan lebih baik disiapkan dalam satu lawatan.",
        "Rumah sewa atau rumah lama yang mengalami haus dan lusuh harian.",
        "Kerja terlalu besar untuk DIY tetapi terlalu kecil untuk kontraktor penuh.",
      ],
      includes: [
        "Pembaikan dan penyelenggaraan am yang dipersetujui sebelum lawatan",
        "Penggunaan alatan tangan dan kuasa asas disertakan",
        "Nasihat tentang alat ganti yang perlu dibeli",
        "Satu lawatan mudah untuk menyelesaikan beberapa kerja",
      ],
      excludes: [
        "Bahan dan alat ganti (dibilkan mengikut kos sebenar)",
        "Kerja kepakaran seperti pendawaian elektrik penuh atau paip tersembunyi",
      ],
      costFactors: [
        {
          title: "Masa di tapak",
          description:
            "Anda bayar mengikut jam sebenar, jadi jumlah bergantung pada berapa banyak kerja dan tempohnya.",
        },
        {
          title: "Bilangan kerja",
          description:
            "Menggabungkan beberapa kerja kecil dalam satu lawatan biasanya lebih menjimatkan berbanding panggilan berasingan.",
        },
        {
          title: "Akses dan perjalanan",
          description:
            "Lokasi dalam KL & Selangor dan akses ke bangunan boleh mempengaruhi panggilan praktikal.",
        },
      ],
      materials: [
        {
          title: "Alat ganti anda atau kami",
          description:
            "Kami boleh menasihati alat ganti yang betul dan memasang apa yang anda sediakan atau membantu mencarinya.",
        },
      ],
      process: [
        { title: "Beritahu kerja yang perlu", description: "Huraikan tugas melalui WhatsApp supaya kami tiba dengan alatan yang sesuai." },
        { title: "Persetujuan skop dahulu", description: "Kami sahkan apa yang akan dan tidak akan dilakukan supaya tiada kejutan." },
        { title: "Kerja dan serahan", description: "Tukang menyelesaikan senarai dan menerangkan apa yang telah dibaiki." },
      ],
      faqs: [
        { question: "Apakah tempahan minimum?", answer: "Kami biasanya memerlukan minimum satu jam supaya berbaloi; servis handyman bermula dari RM60/jam." },
        { question: "Bolehkah saya bekalkan alat ganti sendiri?", answer: "Ya. Kami gembira memasang alat ganti yang anda beli, dan boleh menasihati apa yang perlu dibeli." },
        { question: "Boleh satu lawatan selesaikan beberapa kerja?", answer: "Selalunya ya. Senaraikan kerja itu semasa bertanya supaya kami membawa alatan yang betul." },
      ],
    },
    zh: {
      name: "按小时家居维修服务",
      h1: "吉隆坡与雪兰莪按小时家居维修服务",
      metaDescription:
        "在吉隆坡与雪兰莪按小时预订可靠的家居维修师傅，处理日常维修、安装与保养。每小时从 RM60 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪按小时维修",
      lead:
        "一位按小时计费的可靠维修师傅，是最简单解决家中零碎小修的方式——从关不上的门，到需要挂起的层架。",
      suitableFor: [
        "多项独立小修，适合一次上门一并处理。",
        "出租或较旧房屋的日常磨损。",
        "自己动手太难、但找承包商又太大的工作。",
      ],
      includes: [
        "到访前约定的通用维修与保养工作",
        "包括基本手动与电动工具的使用",
        "就零件购买提供建议",
        "一次上门轻松完成多项工作",
      ],
      excludes: [
        "材料与替换零件（按实际费用收取）",
        "专业工种，如全面电路布线或隐蔽水管工程",
      ],
      costFactors: [
        { title: "现场时间", description: "按实际用时计费，总额取决于工作量与时数。" },
        { title: "工作数量", description: "把多项小修并入一次上门通常比逐项叫人更划算。" },
        { title: "进出与路程", description: "位于吉隆坡与雪兰莪的位置及建筑进出会影响实际出访。" },
      ],
      materials: [
        { title: "您的零件或由我们提供", description: "我们可以建议正确零件，并为您提供或协助采购的零件进行安装。" },
      ],
      process: [
        { title: "告知工作内容", description: "通过 WhatsApp 描述任务，让我们带齐合适的工具上门。" },
        { title: "先确认范围", description: "我们确认哪些会做、哪些不做，避免计费有意外。" },
        { title: "施工与交接", description: "师傅逐项完成并说明所修理的内容。" },
      ],
      faqs: [
        { question: "最低预订多久？", answer: "我们通常要求最少一小时，才值得上门一趟；按小时服务从 RM60/小时起。" },
        { question: "我可以自备零件吗？", answer: "可以。我们乐意安装您已购买的零件，也可就选购提供建议。" },
        { question: "一次上门能处理多项小修吗？", answer: "通常可以。预订时列出各项，我们便能带齐工具并准确估算时间。" },
      ],
    },
  },
  {
    slug: "door-repair",
    serviceSlug: "handyman",
    pricingId: "handyman-door",
    standaloneSearchIntent: true,
    relatedProblems: ["door-problems", "lock-problems"],
    en: {
      name: "Door Repair & Lock Replacement",
      h1: "Door Repair & Lock Replacement in Kuala Lumpur & Selangor",
      metaDescription:
        "Repair sticky, squeaky or misaligned doors and replace faulty locks and handles in Kuala Lumpur & Selangor. Door repair & lock replacement from RM80/job. Free quote.",
      title: "Renovix Home Services | Door Repair & Lock Replacement in KL & Selangor",
      lead:
        "A door that scrapes, sticks, squeaks or will not lock is rarely a worn-out door — it is almost always a hinge, strike plate or lock that needs adjusting or replacing. We sort it at the source.",
      suitableFor: [
        "Doors that drag on the frame, stick or will not close properly.",
        "Squeaky or dropped hinges and misaligned strike plates.",
        "Faulty, stiff or broken locks, latches and handles.",
      ],
      includes: [
        "Diagnosing why the door does not align or close",
        "Hinge adjustment or replacement",
        "Lock, latch or handle replacement you supply (or we help source)",
        "Re-alignment so the door closes and latches cleanly",
      ],
      excludes: [
        "Supplying the lock or hardware itself",
        "Full door frame replacement or new door hanging",
      ],
      costFactors: [
        {
          title: "Door condition",
          description:
            "A simple hinge adjustment is quick; a swollen frame or badly dropped door takes longer to realign.",
        },
        {
          title: "Lock type",
          description:
            "Standard deadbolts and mortice locks are straightforward; digital or multi-point locks need more care.",
        },
        {
          title: "Hardware cost",
          description:
            "Locks and handles are billed at cost — the service charge covers fitting and adjustment.",
        },
      ],
      materials: [
        {
          title: "Standard or smart locks",
          description:
            "We can fit anything from a basic rim lock to a mortice, digital or multi-point system you supply.",
        },
      ],
      process: [
        { title: "Check the door", description: "We find out whether it is the hinge, frame, floor or lock causing the problem." },
        { title: "Adjust or replace", description: "Hinges are adjusted or replaced and the lock fitted so everything lines up." },
        { title: "Test and finish", description: "The door is opened and closed and the lock tested before we leave." },
      ],
      faqs: [
        { question: "Do I need a new door, or can it be repaired?", answer: "Most doors can be repaired. We only recommend replacement when the door or frame is genuinely beyond repair." },
        { question: "Can you fit a lock I already bought?", answer: "Yes. Many customers supply their own lock; we fit, align and test it for you." },
        { question: "My door sticks when it rains.", answer: "That usually means the door or frame is swelling with humidity. We can adjust or plane the door so it clears the frame." },
      ],
    },
    ms: {
      name: "Pembaikan Pintu & Penggantian Kunci",
      h1: "Pembaikan Pintu & Penggantian Kunci di Kuala Lumpur & Selangor",
      metaDescription:
        "Baiki pintu yang macet, berdecit atau tidak sejajar serta ganti kunci dan pemegang yang rosak di Kuala Lumpur & Selangor. Bermula dari RM80/kerja.",
      title: "Renovix Home Services | Pembaikan Pintu & Kunci di KL & Selangor",
      lead:
        "Pintu yang menggesel, macet, berdecit atau tidak boleh dikunci jarang bermakna pintu rosak — selalunya engsel, plat atau kunci yang perlu dilaraskan atau diganti.",
      suitableFor: [
        "Pintu yang menggesel bingkai, macet atau tidak boleh ditutup dengan betul.",
        "Engsel berdecit atau kendur dan plat kunci tidak sejajar.",
        "Kunci, selak atau pemegang yang rosak, keras atau patah.",
      ],
      includes: [
        "Diagnosis sebab pintu tidak sejajar atau tidak tertutup",
        "Pelarasan atau penggantian engsel",
        "Penggantian kunci, selak atau pemegang yang anda sediakan",
        "Penjajaran semula supaya pintu tertutup dan terkunci dengan kemas",
      ],
      excludes: [
        "Bekalan kunci atau perkakasan itu sendiri",
        "Penggantian penuh bingkai pintu atau pemasangan pintu baharu",
      ],
      costFactors: [
        { title: "Keadaan pintu", description: "Pelarasan engsel mudah adalah pantas; bingkai bengkak atau pintu kendur mengambil masa lebih lama." },
        { title: "Jenis kunci", description: "Kunci biasa mudah; kunci digital atau multi-titik memerlukan lebih teliti." },
        { title: "Kos perkakasan", description: "Kunci dan pemegang dibilkan mengikut kos — caj servis untuk pemasangan dan pelarasan." },
      ],
      materials: [
        { title: "Kunci biasa atau pintar", description: "Kami boleh memasang daripada kunci rim asas hingga kunci mortice, digital atau multi-titik yang anda sediakan." },
      ],
      process: [
        { title: "Periksa pintu", description: "Kami tentukan sama ada engsel, bingkai, lantai atau kunci yang menjadi punca." },
        { title: "Laraskan atau ganti", description: "Engsel dilaraskan atau diganti dan kunci dipasang supaya semuanya sejajar." },
        { title: "Uji dan kemas", description: "Pintu dibuka dan ditutup dan kunci diuji sebelum kami pergi." },
      ],
      faqs: [
        { question: "Perlukah pintu baharu atau boleh dibaiki?", answer: "Kebanyakan pintu boleh dibaiki. Kami hanya cadangkan penggantian jika pintu atau bingkai benar-benar rosak." },
        { question: "Bolehkah anda pasang kunci yang saya beli?", answer: "Ya. Ramai pelanggan bekalkan kunci sendiri; kami pasang, jajarkan dan uji untuk anda." },
        { question: "Pintu saya macet bila hujan.", answer: "Biasanya pintu atau bingkai membengkak kerana kelembapan. Kami boleh laraskan pintu supaya tidak menggesel bingkai." },
      ],
    },
    zh: {
      name: "门维修与锁具更换",
      h1: "吉隆坡与雪兰莪门维修与锁具更换",
      metaDescription:
        "在吉隆坡与雪兰莪维修卡滞、异响或错位的门，并更换故障的锁具与把手。门维修与锁具更换每项从 RM80 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪门维修与锁具更换",
      lead:
        "门擦地、卡滞、异响或锁不上，很少意味着门坏了——多半是铰链、锁舌片或锁需要调校或更换。我们从根源解决。",
      suitableFor: [
        "门拖擦门框、卡住或无法关紧。",
        "铰链异响、下垂或锁舌片错位。",
        "故障、生硬或损坏的锁、插销与把手。",
      ],
      includes: [
        "诊断门为何无法对齐或关合",
        "铰链调校或更换",
        "更换您提供的锁、插销或把手",
        "重新对位，使门关合顺畅",
      ],
      excludes: [
        "提供锁具或五金件本身",
        "整副门框更换或悬挂新门",
      ],
      costFactors: [
        { title: "门的状态", description: "简单调校铰链很快；门框膨胀或门身严重下垂则需更长时间对位。" },
        { title: "锁的类型", description: "标准门锁容易处理；电子或多点锁需更细心。" },
        { title: "五金成本", description: "锁与把手按成本计费——服务费只含安装与调校。" },
      ],
      materials: [
        { title: "标准或智能锁", description: "从基础锁到您提供的插芯锁、电子锁或多点锁均可安装。" },
      ],
      process: [
        { title: "检查门", description: "查明问题是来自铰链、门框、地板还是锁具。" },
        { title: "调校或更换", description: "调整或更换铰链，装好门锁使其对齐。" },
        { title: "测试与完工", description: "离开前反复开关门并测试门锁。" },
      ],
      faqs: [
        { question: "需要换新门还是可以维修？", answer: "大多数门可以维修。只有当门或门框确实无法修复时我们才建议更换。" },
        { question: "可以安装我自己买的锁吗？", answer: "可以。许多客户自带门锁，我们负责安装、对位并测试。" },
        { question: "下雨时门会卡住。", answer: "通常是门或门框因潮湿而膨胀。我们可调整或刨削门身，使其不再擦碰门框。" },
      ],
    },
  },
  {
    slug: "mounting-installation",
    serviceSlug: "handyman",
    pricingId: "handyman-mounting",
    standaloneSearchIntent: true,
    relatedProblems: ["tv-mounting", "shelf-installation", "curtain-installation"],
    en: {
      name: "TV Mounting & Shelf Installation",
      h1: "TV Mounting & Shelf Installation in Kuala Lumpur & Selangor",
      metaDescription:
        "Secure TV wall mounting and shelf installation in Kuala Lumpur & Selangor for plasterboard, brick and concrete walls. From RM80/unit. Free quote.",
      title: "Renovix Home Services | TV Mounting & Shelf Installation in KL & Selangor",
      lead:
        "A wall-mounted TV or shelf is only as safe as its fixing. We mount screens and fit shelves on the right wall material with the right anchors, so nothing comes down.",
      suitableFor: [
        "Wall-mounting a television at a comfortable viewing height.",
        "Fitting shelves, curtain tracks, mirrors and hooks securely.",
        "Plasterboard, brick or concrete walls where the correct anchor matters.",
      ],
      includes: [
        "Confirming the wall material and correct anchor type",
        "TV bracket mounting and levelling",
        "Shelf, track or item installation you supply",
        "Basic cable tidying for TV mounts",
      ],
      excludes: [
        "Supplying the TV bracket, shelf or hardware",
        "Rewiring or relocating electrical points",
      ],
      costFactors: [
        {
          title: "Wall type",
          description:
            "Concrete and brick are straightforward; hollow plasterboard needs the right hollow-wall anchor to hold securely.",
        },
        {
          title: "Item weight",
            description:
            "Heavier TVs and loaded shelves need larger brackets and more fixings.",
        },
        {
          title: "Height and access",
          description:
            "High or awkward positions (above a staircase, on a tall wall) add time.",
        },
      ],
      materials: [
        {
          title: "Bracket you supply or we source",
          description:
            "We recommend a bracket rated for your TV size and weight, and can fit one you already have.",
        },
      ],
      process: [
        { title: "Check the wall", description: "We identify the wall material so the right anchors are used." },
        { title: "Mark and fix", description: "The bracket or shelf is levelled, drilled and fixed securely." },
        { title: "Mount and check", description: "The TV or shelf is mounted and we confirm it is firm before leaving." },
      ],
      faqs: [
        { question: "Can you mount on a plasterboard wall?", answer: "Yes. Hollow plasterboard needs the correct cavity anchors; we use fixings rated for the weight of your TV or shelf." },
        { question: "Do you supply the bracket?", answer: "We can source and fit one rated for your TV, or mount the bracket you already bought." },
        { question: "Can you hide the cables?", answer: "For TV mounting we tidy cables behind the screen; full in-wall concealment needs an electrician." },
      ],
    },
    ms: {
      name: "Pemasangan TV & Rak di Dinding",
      h1: "Pemasangan TV & Rak di Dinding di Kuala Lumpur & Selangor",
      metaDescription:
        "Pemasangan TV di dinding dan rak yang kukuh di Kuala Lumpur & Selangor untuk dinding plaster, bata dan konkrit. Bermula dari RM80/unit.",
      title: "Renovix Home Services | Pemasangan TV & Rak di KL & Selangor",
      lead:
        "TV atau rak yang dipasang di dinding hanya sekukuh penambatnya. Kami memasang skrin dan rak pada bahan dinding yang betul dengan anchor yang sesuai, supaya tidak terjatuh.",
      suitableFor: [
        "Memasang televisyen di dinding pada ketinggian tontonan yang selesa.",
        "Memasang rak, trek langsir, cermin dan cangkuk dengan kukuh.",
        "Dinding plaster, bata atau konkrit di mana jenis anchor yang betul penting.",
      ],
      includes: [
        "Sahkan jenis bahan dinding dan anchor yang sesuai",
        "Pemasangan dan perataan pendakap TV",
        "Pemasangan rak, trek atau item yang anda sediakan",
        "Penyusunan kabel asas untuk pendakap TV",
      ],
      excludes: [
        "Bekalan pendakap TV, rak atau perkakasan",
        "Pendawaian semula atau pemindahan titik elektrik",
      ],
      costFactors: [
        { title: "Jenis dinding", description: "Konkrit dan bata mudah; plasterboard berongga memerlukan anchor khas untuk kekal kukuh." },
        { title: "Berat item", description: "TV lebih berat dan rak berisi perlu pendakap dan penambat yang lebih besar." },
        { title: "Ketinggian dan akses", description: "Kedudukan tinggi atau sukar menambah masa kerja." },
      ],
      materials: [
        { title: "Pendakap anda sediakan atau kami cari", description: "Kami cadangkan pendakap yang sesuai dengan saiz dan berat TV anda." },
      ],
      process: [
        { title: "Periksa dinding", description: "Kami kenal pasti bahan dinding supaya anchor yang betul digunakan." },
        { title: "Tanda dan pasang", description: "Pendakap atau rak diratakan, digerudi dan dipasang kukuh." },
        { title: "Pasang dan semak", description: "TV atau rak dipasang dan kami sahkan ia kukuh sebelum pergi." },
      ],
      faqs: [
        { question: "Boleh pasang pada dinding plaster?", answer: "Ya. Plasterboard berongga memerlukan anchor yang betul; kami guna penambat yang sesuai dengan berat TV atau rak anda." },
        { question: "Adakah anda bekalkan pendakap?", answer: "Kami boleh sediakan dan pasang pendakap yang sesuai, atau pasang pendakap yang anda beli." },
        { question: "Boleh sembunyikan kabel?", answer: "Untuk pemasangan TV kami kemas kabel di belakang skrin; penyembunyian penuh dalam dinding memerlukan juruelektrik." },
      ],
    },
    zh: {
      name: "电视挂架与层架安装",
      h1: "吉隆坡与雪兰莪电视挂架与层架安装",
      metaDescription:
        "在吉隆坡与雪兰莪，为石膏板、砖墙与混凝土墙进行牢固的电视挂墙与层架安装。每单位从 RM80 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪电视挂架与层架安装",
      lead:
        "挂墙电视或层架的安全性取决于固定方式。我们根据墙体材质选用正确的膨胀螺丝来安装屏幕与层架，确保不会掉落。",
      suitableFor: [
        "将电视以舒适的观看高度挂上墙。",
        "牢固安装层架、窗帘轨、镜子与挂钩。",
        "石膏板、砖墙或混凝土墙，正确锚固尤为关键。",
      ],
      includes: [
        "确认墙体材质与正确的膨胀螺丝类型",
        "电视支架挂装与水平校正",
        "安装您提供的层架、轨道或物品",
        "电视挂架的简单理线",
      ],
      excludes: [
        "提供电视支架、层架或五金件",
        "重新布线或移动电源点",
      ],
      costFactors: [
        { title: "墙体类型", description: "混凝土与砖墙容易处理；中空石膏板需用合适的中空锚栓才牢固。" },
        { title: "物品重量", description: "较重的电视与满载的层架需要更大的支架与更多固定点。" },
        { title: "高度与进出", description: "高处或不便的位置会增加工时。" },
      ],
      materials: [
        { title: "您提供或由我们代购支架", description: "我们建议额定承重适合您电视尺寸与重量的支架，也可安装您已有的支架。" },
      ],
      process: [
        { title: "检查墙体", description: "先辨别墙体材质，以便选用正确的膨胀螺丝。" },
        { title: "标记并固定", description: "将支架或层架校平、钻孔并牢固固定。" },
        { title: "挂装并检查", description: "装好电视或层架，离开前确认稳固。" },
      ],
      faqs: [
        { question: "可以在石膏板墙上挂装吗？", answer: "可以。中空石膏板需使用正确的空腔锚栓；我们会按电视或层架重量选用承重足够的固定件。" },
        { question: "你们提供支架吗？", answer: "我们可以代购并安装适合您电视的支架，或安装您已购买的支架。" },
        { question: "可以隐藏电线吗？", answer: "挂装电视时我们会在屏幕后方整理电线；完全入墙隐藏需要电工处理。" },
      ],
    },
  },
  {
    slug: "grout-silicone",
    serviceSlug: "handyman",
    pricingId: "handyman-grout-silicone",
    standaloneSearchIntent: true,
    relatedProblems: ["minor-home-repairs", "bathroom-tile-problems", "tile-grout-problems"],
    en: {
      name: "Regrout & Silicone Recaulking",
      h1: "Regrout & Silicone Recaulking in Kuala Lumpur & Selangor",
      metaDescription:
        "Remove old, stained or crumbling grout and replace worn silicone seals in bathrooms and kitchens across KL & Selangor. From RM80/job. Free quote.",
      title: "Renovix Home Services | Regrout & Silicone Recaulking in KL & Selangor",
      lead:
        "Crumbling grout and black silicone are not just ugly — they let water behind your tiles. We cut out the old joint and replace it so your tiles stay sealed and look clean.",
      suitableFor: [
        "Grout that is cracked, crumbling, stained or harbouring mould.",
        "Blackened or lifting silicone around baths, basins, sinks and showers.",
        "Preparing a bathroom or kitchen before listing or before a full re-tile.",
      ],
      includes: [
        "Removing old grout or silicone from the joints",
        "Cleaning and drying the joint surface",
        "Applying fresh grout or mould-resistant silicone",
        "Neat, even finish that matches your tiles",
      ],
      excludes: [
        "Replacing damaged or hollow tiles (see tile repair)",
        "Addressing an underlying waterproofing failure",
      ],
      costFactors: [
        {
          title: "Area size",
          description:
            "A single shower or basin is quick; a full bathroom of walls and floor takes longer.",
        },
        {
          title: "Existing joint condition",
          description:
            "Removing hard old silicone or thick crumbling grout takes more time than fresh joints.",
        },
        {
          title: "Colour and finish",
          description:
            "Matching a specific grout colour or a fine anti-fungal finish can affect the job.",
        },
      ],
      materials: [
        {
          title: "Grout and silicone type",
          description:
            "We use mould-resistant silicone for wet joints and recommend grout suited to your tile and usage.",
        },
      ],
      process: [
        { title: "Assess the joints", description: "We check the grout and silicone and whether any tiles are loose behind them." },
        { title: "Remove the old joint", description: "Old grout or silicone is cut out cleanly without damaging the tiles." },
        { title: "Apply fresh finish", description: "New grout or silicone is applied and tooled for a clean, sealed joint." },
      ],
      faqs: [
        { question: "Do I need to re-tile instead of regrouting?", answer: "Not if the tiles are sound. Regrouting renews the joints; tiles that are cracked, hollow or lifting are a separate repair." },
        { question: "Will the new silicone stay clean?", answer: "We use mould-resistant silicone and finish it smooth so it is easier to keep clean." },
        { question: "How long does regrouting take?", answer: "Small areas can be done in a visit; a full bathroom needs drying time before the joints are fully set." },
      ],
    },
    ms: {
      name: "Kerja Semula Grout & Silikon",
      h1: "Kerja Semula Grout & Silikon di Kuala Lumpur & Selangor",
      metaDescription:
        "Keluarkan grout lama yang bernoda atau hancur dan ganti pengedap silikon yang haus di bilik air dan dapur seluruh KL & Selangor. Bermula dari RM80/kerja.",
      title: "Renovix Home Services | Kerja Semula Grout & Silikon di KL & Selangor",
      lead:
        "Grout hancur dan silikon hitam bukan sahaja hodoh — ia membiarkan air masuk ke belakang jubin. Kami keluarkan sendi lama dan ganti supaya jubin kekal bersegel dan bersih.",
      suitableFor: [
        "Grout yang retak, hancur, bernoda atau berkulat.",
        "Silikon yang menghitam atau terangkat di sekeliling tab, besen, sinki dan pancuran.",
        "Menyediakan bilik air atau dapur sebelum disenaraikan atau sebelum jubin semula penuh.",
      ],
      includes: [
        "Mengeluarkan grout atau silikon lama daripada sendi",
        "Membersih dan mengeringkan permukaan sendi",
        "Sapuan grout baharu atau silikon anti-kulat",
        "Kemasan kemas dan sekata yang sepadan dengan jubin anda",
      ],
      excludes: [
        "Mengganti jubin yang rosak atau berongga",
        "Menangani kegagalan kalis air yang mendasari",
      ],
      costFactors: [
        { title: "Saiz kawasan", description: "Pancuran atau besin tunggal cepat; bilik air penuh mengambil masa lebih lama." },
        { title: "Keadaan sendi sedia ada", description: "Mengeluarkan silikon lama yang keras mengambil masa lebih." },
        { title: "Warna dan kemasan", description: "Memadankan warna grout tertentu boleh mempengaruhi kerja." },
      ],
      materials: [
        { title: "Jenis grout dan silikon", description: "Kami guna silikon anti-kulat untuk sendi basah dan cadangkan grout sesuai." },
      ],
      process: [
        { title: "Periksa sendi", description: "Kami semak grout, silikon dan sama ada jubin longgar di belakangnya." },
        { title: "Keluarkan sendi lama", description: "Grout atau silikon lama dipotong bersih tanpa merosakkan jubin." },
        { title: "Sapuan kemasan baharu", description: "Grout atau silikon baharu disapu dan dikemas untuk sendi yang bersih." },
      ],
      faqs: [
        { question: "Perlukah jubin semula?", answer: "Tidak jika jubin masih elok. Regrout memperbaharui sendi; jubin retak atau berongga ialah pembaikan berasingan." },
        { question: "Silikon baharu kekal bersih?", answer: "Kami guna silikon anti-kulat dan kemas supaya mudah dijaga." },
        { question: "Berapa lama kerja semula grout?", answer: "Kawasan kecil boleh siap dalam satu lawatan; bilik air penuh perlu masa kering." },
      ],
    },
    zh: {
      name: "重新填缝与硅胶密封",
      h1: "吉隆坡与雪兰莪重新填缝与硅胶密封",
      metaDescription:
        "在吉隆坡与雪兰莪清除老化、污渍或粉化的填缝剂，并更换浴室与厨房磨损的硅胶密封。每项从 RM80 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪重新填缝与硅胶密封",
      lead:
        "粉化的填缝剂与发黑的硅胶不仅难看，还会让水渗到瓷砖背面。我们清除旧接缝并重新填补，让瓷砖保持密封、干净。",
      suitableFor: [
        "开裂、粉化、有污渍或发霉的填缝剂。",
        "浴缸、面盆、水槽与花洒周围发黑或翘起的硅胶。",
        "在挂牌出售或整体重铺瓷砖前整理浴室或厨房。",
      ],
      includes: [
        "清除接缝中的旧填缝剂或硅胶",
        "清洁并干燥接缝表面",
        "重填新的填缝剂或防霉硅胶",
        "干净平整、与瓷砖相衬的收口",
      ],
      excludes: [
        "更换破损或空鼓的瓷砖（见瓷砖维修）",
        "处理潜在的防水失效",
      ],
      costFactors: [
        { title: "面积大小", description: "单个花洒或面盆较快；整个浴室的墙面与地面需时更长。" },
        { title: "旧接缝状况", description: "清除硬化的旧硅胶或厚实粉化填缝剂需更多时间。" },
        { title: "颜色与收口", description: "匹配特定填缝颜色或细防霉收口会影响工程。" },
      ],
      materials: [
        { title: "填缝剂与硅胶类型", description: "湿区接缝我们使用防霉硅胶，并按瓷砖与用途建议合适的填缝剂。" },
      ],
      process: [
        { title: "评估接缝", description: "检查填缝剂与硅胶，以及接缝后方瓷砖是否松动。" },
        { title: "清除旧接缝", description: "在不损伤瓷砖的前提下干净地剔除旧填缝剂或硅胶。" },
        { title: "施作新收口", description: "抹上新的填缝剂或硅胶并修整，形成干净密封的接缝。" },
      ],
      faqs: [
        { question: "需要重铺瓷砖而不是重新填缝吗？", answer: "只要瓷砖完好就不需要。重新填缝可更新接缝；开裂、空鼓或翘起的瓷砖属于另一项维修。" },
        { question: "新的硅胶能保持干净吗？", answer: "我们使用防霉硅胶并修整平滑，更易清洁。" },
        { question: "重新填缝需要多久？", answer: "小面积可在一次上门完成；整个浴室需要干燥时间让接缝完全固化。" },
      ],
    },
  },
  {
    slug: "minor-repairs",
    serviceSlug: "handyman",
    pricingId: "handyman-small-repair",
    standaloneSearchIntent: true,
    relatedProblems: ["minor-home-repairs", "door-problems", "lock-problems"],
    en: {
      name: "Minor Home Repairs",
      h1: "Minor Home Repairs in Kuala Lumpur & Selangor",
      metaDescription:
        "One trusted handyman for the small repairs that pile up — loose fittings, wall plugs, hooks, silicone, leaks and general fixes across KL & Selangor. From RM60/job. Free quote.",
      title: "Renovix Home Services | Minor Home Repairs in KL & Selangor",
      lead:
        "The small jobs around your home — a dripping tap washer, a loose toilet seat, a wobbly shelf, torn curtain hooks — are easiest fixed together by one reliable handyman in a single visit.",
      suitableFor: [
        "Collections of small fixes better done in one visit.",
        "Rental homes where small faults need quick attention.",
        "Everyday wear-and-tear that DIY has not solved.",
      ],
      includes: [
        "A broad range of minor repair and maintenance tasks",
        "Fixing loose fittings, seals, hooks and fixtures",
        "Small plumbing and carpentry touch-ups",
        "Honest advice on anything that needs a specialist",
      ],
      excludes: [
        "Major renovation or structural work",
        "Specialist electrical wiring or concealed plumbing",
      ],
      costFactors: [
        { title: "Number of tasks", description: "Several small jobs in one visit are far more economical than separate call-outs." },
        { title: "Parts needed", description: "Worn parts and fittings are billed at cost; we advise you before fitting." },
        { title: "Access", description: "Location and building access influence the practical visit." },
      ],
      materials: [
        { title: "Everyday fixings", description: "Washers, plugs, screws, silicone and adhesives are small costs billed as used." },
      ],
      process: [
        { title: "List the jobs", description: "Send your list over WhatsApp so we bring the right tools and parts." },
        { title: "Work through them", description: "The handyman fixes each task and lets you know what needs a specialist." },
        { title: "Final check", description: "You review the completed work before we leave." },
      ],
      faqs: [
        { question: "What counts as a minor repair?", answer: "Most everyday faults — fittings, seals, plugs, hooks, small leaks, adjustments — fall under minor repairs. Larger jobs are quoted separately." },
        { question: "Do you carry parts with you?", answer: "We carry common fixings; for unusual parts we advise you in advance or source them." },
        { question: "Can you come for just one small job?", answer: "Yes — there is no minimum beyond the call-out; fixing several small jobs together is more cost-effective." },
      ],
    },
    ms: {
      name: "Pembaikan Kecil Rumah",
      h1: "Pembaikan Kecil Rumah di Kuala Lumpur & Selangor",
      metaDescription:
        "Seorang tukang yang dipercayai untuk pembaikan kecil yang bertimbun — kelengkapan longgar, plug dinding, cangkuk, silikon, kebocoran dan pembaikan am di KL & Selangor. Bermula dari RM60/kerja.",
      title: "Renovix Home Services | Pembaikan Kecil Rumah di KL & Selangor",
      lead:
        "Kerja kecil di rumah — sesendal pili menitis, tempat duduk tandas longgar, rak goyah, cangkuk langsir koyak — paling mudah diselesaikan oleh seorang tukang yang boleh diharap dalam satu lawatan.",
      suitableFor: [
        "Kumpulan pembaikan kecil yang lebih baik dalam satu lawatan.",
        "Rumah sewa dengan kerosakan kecil yang perlu perhatian segera.",
        "Haus dan lusuh harian yang belum diselesaikan sendiri.",
      ],
      includes: [
        "Pelbagai tugas pembaikan dan penyelenggaraan kecil",
        "Membaiki kelengkapan, pengedap, cangkuk dan pemasangan longgar",
        "Sentuhan kecil kerja paip dan pertukangan",
        "Nasihat jujur tentang apa yang perlu pakar",
      ],
      excludes: [
        "Renovasi utama atau kerja struktur",
        "Pendawaian elektrik kepakaran atau paip tersembunyi",
      ],
      costFactors: [
        { title: "Bilangan tugas", description: "Beberapa kerja kecil dalam satu lawatan lebih jimat daripada panggilan berasingan." },
        { title: "Alat ganti", description: "Bahagian haus dibilkan mengikut kos; kami beritahu sebelum pasang." },
        { title: "Akses", description: "Lokasi dan akses bangunan mempengaruhi lawatan praktikal." },
      ],
      materials: [
        { title: "Kelengkapan harian", description: "Sesendal, plug, skru, silikon dan pelekat ialah kos kecil yang dibilkan mengikut penggunaan." },
      ],
      process: [
        { title: "Senaraikan kerja", description: "Hantar senarai melalui WhatsApp supaya kami bawa alatan dan bahagian yang sesuai." },
        { title: "Selesaikan satu per satu", description: "Tukang membaiki setiap tugas dan memaklumkan apa yang perlu pakar." },
        { title: "Semakan akhir", description: "Anda menyemak kerja yang siap sebelum kami pergi." },
      ],
      faqs: [
        { question: "Apa itu pembaikan kecil?", answer: "Kebanyakan kerosakan harian — kelengkapan, pengedap, plug, cangkuk, kebocoran kecil, pelarasan — termasuk pembaikan kecil. Kerja lebih besar dipetik berasingan." },
        { question: "Adakah anda bawa alat ganti?", answer: "Kami bawa kelengkapan biasa; untuk bahagian luar biasa kami beritahu lebih awal atau cari." },
        { question: "Boleh datang untuk satu kerja kecil?", answer: "Ya — tiada minimum selain panggilan; membaiki beberapa kerja kecil bersama lebih jimat." },
      ],
    },
    zh: {
      name: "家居小修",
      h1: "吉隆坡与雪兰莪家居小修",
      metaDescription:
        "一位可信赖的师傅处理家中累积的小修——松动的五金、墙塞、挂钩、硅胶、渗漏与一般修补，服务吉隆坡与雪兰莪。每项从 RM60 起。免费报价。",
      title: "Renovix Home Services | 吉隆坡与雪兰莪家居小修",
      lead:
        "家中的小活——滴水的水龙头垫圈、松动的马桶盖、摇晃的层架、脱落的窗帘钩——最适合由一位可靠的师傅一次上门一并处理。",
      suitableFor: [
        "多项小修，适合一次上门完成。",
        "出租房屋需尽快处理的小故障。",
        "自己动手仍未解决的日常磨损。",
      ],
      includes: [
        "各类小修与保养工作",
        "修固松动的五金、密封件、挂钩与固定件",
        "小型水暖与木工修补",
        "对需专业处理的问题提供诚实建议",
      ],
      excludes: [
        "大型装修或结构性工程",
        "专业电路布线或隐蔽水管工程",
      ],
      costFactors: [
        { title: "任务数量", description: "多项小修一次上门远比分次叫人更划算。" },
        { title: "所需零件", description: "磨损零件按成本计费；安装前我们会先告知。" },
        { title: "进出", description: "位置与建筑进出会影响实际上门。" },
      ],
      materials: [
        { title: "日常固定件", description: "垫圈、墙塞、螺丝、硅胶与胶水按实际用量计费，费用不高。" },
      ],
      process: [
        { title: "列出工作", description: "通过 WhatsApp 发送清单，以便我们带齐合适的工具与零件。" },
        { title: "逐项处理", description: "师傅逐项修复，并告知哪些需专业人员处理。" },
        { title: "最后检查", description: "离开前请您验收完成的工作。" },
      ],
      faqs: [
        { question: "什么算小修？", answer: "多数日常故障——五金、密封件、墙塞、挂钩、小渗漏、调校——都属于小修。较大工程会另行报价。" },
        { question: "你们随身带零件吗？", answer: "我们携带常见固定件；不常见的零件会提前告知或代为采购。" },
        { question: "只来做一个很小的工作可以吗？", answer: "可以——除出访外没有最低限制；把几项小修一起处理会更划算。" },
      ],
    },
  },
];
