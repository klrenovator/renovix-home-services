import type { ArticleDefinition } from "../types";

/**
 * Coverage article — electrical pillar.
 *
 * The approved backlog had no electrical guide, leaving the electrical pillar
 * and its eight problem guides without supporting educational content. This
 * fills that gap with genuine diagnostic intent ("is my wiring past it?"),
 * not a keyword page. Urgency language is kept inside the audited
 * safety-critical triage boundary: power faults are one of the two genuine
 * emergency contexts in CONTENT_GOVERNANCE.md.
 */
export const oldHouseWiringWarningSigns: ArticleDefinition = {
  slug: "old-house-wiring-warning-signs",
  category: "troubleshooting",
  intents: ["signs-of-failure", "troubleshooting", "when-to-call", "lifespan", "cost"],
  published: "2026-09-04",
  relatedServices: ["electrical", "general-renovation"],
  relatedSubServices: ["socket-installation"],
  relatedProblems: [
    "old-house-wiring",
    "power-tripping",
    "short-circuit",
    "faulty-socket",
    "faulty-switch",
    "flickering-lights",
    "insufficient-power-points",
  ],
  relatedLocations: [
    "kuala-lumpur/sentul",
    "kuala-lumpur/old-klang-road",
    "selangor/klang",
    "selangor/petaling-jaya",
    "kuala-lumpur/kampung-baru",
    "kuala-lumpur/taman-desa",
  ],
  relatedProjects: [
    "electrical-distribution-board-wiring",
    "electrical-db-panel-installation",
    "electrical-cable-wiring-installation",
  ],
  pricingIds: [
    "electrical-troubleshoot",
    "electrical-db-box",
    "electrical-full-wiring",
    "electrical-socket-add",
  ],
  en: {
    title: "Renovix Home Services | Signs Your House Wiring Needs Attention (KL & Selangor)",
    metaDescription:
      "Warning signs that an older Malaysian home's wiring needs checking or replacing — repeated tripping, warm sockets, burning smells, two-pin points and old DB boards. What to do first.",
    h1: "Warning Signs That Your House Wiring Needs Attention",
    excerpt:
      "Repeated tripping, warm switch plates, browning sockets and an old DB board are not quirks of an older house. Here is how to read them and what to do in what order.",
    question: "How do I know if my house wiring needs to be replaced?",
    answer:
      "Wiring rarely fails all at once — it warns you first. Repeated tripping on the same circuit, sockets or switch plates that feel warm, scorch marks or browning around a point, a burning smell, lights that dim when an appliance starts, and a fuse-type or heavily modified distribution board are all signs that the installation should be inspected by a competent electrician. Some of these are fixable at one point; others mean the circuit or the installation is past its useful life. A burning smell or visible scorching is not something to monitor — switch the affected circuit off and get it checked.",
    keyPoints: [
      "Repeated tripping is the system doing its job. Do not keep resetting it without finding out why.",
      "Warmth, browning or scorch marks at a socket or switch indicate a loose or overloaded connection.",
      "A burning smell, sparking or a socket too hot to touch is a safety-critical fault — isolate that circuit and call an electrician.",
      "Two-pin unearthed points, cloth-covered or brittle cable and a fuse-type board all belong to an older generation of installation.",
      "Adding more extension cords to solve too few sockets moves the load, it does not reduce it.",
    ],
    sections: [
      {
        heading: "The signs, and what each one usually means",
        blocks: [
          {
            type: "table",
            columns: ["What you notice", "What it usually indicates", "What to do"],
            rows: [
              [
                "The same circuit trips repeatedly",
                "An overloaded circuit, a faulty appliance, or moisture and insulation breakdown in the wiring",
                "Unplug appliances on that circuit one at a time to isolate; if it still trips, have the circuit tested",
              ],
              [
                "A socket or switch plate feels warm",
                "A loose termination or a connection carrying more current than it should",
                "Stop using that point and have it opened and checked",
              ],
              [
                "Browning, scorch marks or a burning smell",
                "Heat damage at a connection — arcing",
                "Switch off that circuit at the board and call an electrician before using it again",
              ],
              [
                "Lights dim when the kettle or air-conditioner starts",
                "Voltage drop from an undersized or shared circuit",
                "Have the circuit and its load assessed",
              ],
              [
                "Sockets spark when a plug is pushed in",
                "Worn contacts inside the socket",
                "Replace the accessory and check the termination behind it",
              ],
              [
                "Two-pin sockets with no earth",
                "An older installation generation",
                "Assess the whole installation rather than replacing one point",
              ],
              [
                "Fuse-type board, or a board with many added-on parts",
                "The protection arrangement has been outgrown",
                "Have the board and its protection reviewed",
              ],
            ],
          },
          {
            type: "callout",
            title: "Do not keep resetting a tripping breaker",
            text: "A breaker that trips repeatedly is detecting something. Resetting it over and over does not fix the fault; it just removes the warning. If a circuit trips immediately after being reset, or trips when nothing is plugged in, leave it off and have it tested.",
          },
        ],
      },
      {
        heading: "Older homes in the Klang Valley",
        blocks: [
          {
            type: "paragraph",
            text: "Plenty of houses across Kuala Lumpur and Selangor were wired for a household that owned a fraction of the appliances we own now. The wiring may be perfectly sound and still be undersized for the way the house is used today — that is a capacity question, not a fault. It usually shows up in the same way: too few sockets, extension leads everywhere, a nuisance trip whenever two heavy appliances run together, and a distribution board with no spare ways left.",
          },
          {
            type: "list",
            items: [
              "Air-conditioning, water heaters and induction hobs added over the years all draw far more than the sockets they were plugged into were intended for.",
              "Renovations by different contractors over decades leave a board that nobody has documented, with circuits that do not match the labels.",
              "Bathroom and kitchen points are where earthing and moisture protection matter most, and where older installations are most often behind.",
              "Multi-way adaptors stacked on one socket are a symptom, not a solution — the load reaching the wall stays the same.",
            ],
          },
        ],
      },
      {
        heading: "What the work costs",
        blocks: [
          {
            type: "paragraph",
            text: "Diagnosis, a board replacement and a full rewire are three different scopes with three different prices, and it is more honest to start with the first than to sell the third.",
          },
          {
            type: "pricing",
            pricingIds: [
              "electrical-troubleshoot",
              "electrical-socket-add",
              "electrical-db-box",
              "electrical-full-wiring",
            ],
          },
        ],
      },
      {
        heading: "Start with a test, not a rewire",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Describe the symptom precisely",
                description:
                  "Which circuit, how often, and what was running at the time. A pattern — trips only when the kettle and the air-conditioner run together, or only after heavy rain — narrows the cause quickly.",
              },
              {
                title: "Isolate by elimination",
                description:
                  "Unplug everything on that circuit, reset, and reintroduce appliances one by one. A single faulty appliance is a very common answer and costs nothing to rule out.",
              },
              {
                title: "Get the circuit tested",
                description:
                  "Where the fault is in the installation rather than an appliance, testing identifies which circuit and roughly where, so the repair is targeted instead of speculative.",
              },
              {
                title: "Repair, upgrade or rewire",
                description:
                  "Most findings are a single point or a single circuit. A board replacement is a bigger step; a full rewire is the last one, justified when the installation as a whole is past its life.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "In Malaysia, electrical installation work is regulated and connection to the supply is the utility's domain. We will tell you plainly when something is not ours to do and what the correct route is, rather than working around it.",
          },
        ],
      },
      {
        heading: "If you are renovating anyway",
        blocks: [
          {
            type: "paragraph",
            text: "The cheapest time to fix an electrical shortfall is while the walls, ceilings or floors are already open. If you are planning a renovation, decide the socket and lighting layout before the finishes go on — adding a point afterwards means chasing a wall that has just been painted.",
          },
          {
            type: "list",
            items: [
              "Walk each room and count where you actually plug things in today, not where the sockets happen to be.",
              "Plan for the kitchen and the home office first; those are where extension leads accumulate.",
              "Decide lighting positions before the ceiling is closed up.",
              "If the board is old and the renovation is significant, replacing it during the works is far less disruptive than doing it later.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "My breaker trips only when it rains. What does that mean?",
        answer:
          "It usually points to moisture reaching part of the installation — an outdoor point, a light fitting under a leaking area, or a cable route that has become damp. It is worth investigating together with the water source, because fixing only the electrical side leaves the cause in place.",
      },
      {
        question: "Is it safe to keep using a socket that feels warm?",
        answer:
          "No. Warmth at a socket means a connection is heating up, and heat at a connection is how arcing and scorching start. Stop using that point, and have it opened and checked rather than waiting for it to get worse.",
      },
      {
        question: "Do I need a full rewire, or can individual circuits be fixed?",
        answer:
          "Most problems are local — one point, one accessory or one circuit — and are repaired as such. A full rewire is justified when the installation as a whole is at the end of its life, not because one socket failed.",
      },
      {
        question: "Can I add more power points without rewiring the whole house?",
        answer:
          "Usually yes, provided the existing circuit and board have the capacity for it. That is exactly what the assessment establishes: whether a new point can be added to what is there, or whether the supply to that area needs upgrading first.",
      },
      {
        question: "How old does wiring have to be before it needs replacing?",
        answer:
          "Age alone is not the test — condition and capacity are. A well-installed older system in good condition can still be sound, while a newer one that has been repeatedly modified may not be. That is why we test rather than quote a rewire from the age of the house.",
      },
    ],
    closing:
      "Tell us what the symptom is, which circuit it affects and what is running when it happens — and send a photograph of your distribution board. That is usually enough to say whether this is a single point, a circuit or a bigger conversation.",
  },
  ms: {
    title: "Renovix Home Services | Tanda Pendawaian Rumah Anda Perlu Diperiksa (KL & Selangor)",
    metaDescription:
      "Tanda amaran bahawa pendawaian rumah lama di Malaysia perlu diperiksa atau diganti — kerap trip, soket panas, bau terbakar, soket dua pin dan papan DB lama. Apa yang perlu dibuat dahulu.",
    h1: "Tanda Amaran Bahawa Pendawaian Rumah Anda Perlu Diperiksa",
    excerpt:
      "Kerap trip, penutup suis terasa panas, soket bertukar perang dan papan DB lama bukan perkara biasa bagi rumah lama. Inilah cara membacanya dan apa yang perlu dibuat mengikut urutan.",
    question: "Bagaimana saya tahu pendawaian rumah saya perlu diganti?",
    answer:
      "Pendawaian jarang gagal serentak — ia memberi amaran dahulu. Kerap trip pada litar yang sama, soket atau penutup suis yang terasa panas, kesan hangus atau perang di sekeliling titik, bau terbakar, lampu malap apabila peralatan dihidupkan, serta papan agihan jenis fius atau yang banyak diubah suai — semuanya tanda pemasangan itu patut diperiksa oleh juruelektrik yang kompeten. Sesetengahnya boleh dibaiki pada satu titik; yang lain bermakna litar atau pemasangan itu sudah tamat jangka hayat. Bau terbakar atau kesan hangus bukan perkara untuk dipantau — matikan litar berkenaan dan minta ia diperiksa.",
    keyPoints: [
      "Kerap trip bermakna sistem sedang melakukan tugasnya. Jangan asyik reset tanpa mengetahui puncanya.",
      "Kepanasan, warna perang atau kesan hangus pada soket atau suis menunjukkan sambungan longgar atau terlebih beban.",
      "Bau terbakar, percikan api atau soket terlalu panas untuk disentuh ialah kerosakan kritikal keselamatan — asingkan litar itu dan hubungi juruelektrik.",
      "Soket dua pin tanpa pembumian, kabel berbalut kain atau rapuh dan papan jenis fius semuanya milik generasi pemasangan lama.",
      "Menambah kabel sambungan untuk mengatasi soket yang tidak cukup hanya memindahkan beban, bukan mengurangkannya.",
    ],
    sections: [
      {
        heading: "Tanda-tanda, dan maksud setiap satu",
        blocks: [
          {
            type: "table",
            columns: ["Apa yang anda perasan", "Apa yang biasanya ditunjukkan", "Apa yang perlu dibuat"],
            rows: [
              [
                "Litar yang sama kerap trip",
                "Litar terlebih beban, peralatan rosak, atau kelembapan dan kerosakan penebat pada pendawaian",
                "Cabut peralatan pada litar itu satu demi satu untuk mengasingkan; jika masih trip, minta litar diuji",
              ],
              [
                "Soket atau penutup suis terasa panas",
                "Sambungan longgar atau membawa arus lebih daripada sepatutnya",
                "Berhenti menggunakan titik itu dan minta ia dibuka serta diperiksa",
              ],
              [
                "Warna perang, kesan hangus atau bau terbakar",
                "Kerosakan haba pada sambungan — arka elektrik",
                "Matikan litar itu di papan dan hubungi juruelektrik sebelum menggunakannya semula",
              ],
              [
                "Lampu malap apabila cerek atau penghawa dingin dihidupkan",
                "Penurunan voltan daripada litar terlalu kecil atau dikongsi",
                "Minta litar dan bebannya dinilai",
              ],
              [
                "Soket berpercikan bila palam dimasukkan",
                "Sesentuh dalam soket sudah haus",
                "Ganti aksesori itu dan periksa sambungan di belakangnya",
              ],
              [
                "Soket dua pin tanpa pembumian",
                "Generasi pemasangan yang lebih lama",
                "Nilai keseluruhan pemasangan dan bukan sekadar menukar satu titik",
              ],
              [
                "Papan jenis fius, atau papan dengan banyak tambahan",
                "Susunan perlindungan sudah tidak mencukupi",
                "Minta papan dan perlindungannya disemak",
              ],
            ],
          },
          {
            type: "callout",
            title: "Jangan asyik reset pemutus litar yang trip",
            text: "Pemutus litar yang kerap trip sedang mengesan sesuatu. Reset berulang kali tidak membaiki kerosakan; ia hanya menghilangkan amaran. Jika litar trip serta-merta selepas direset, atau trip walaupun tiada apa-apa dipalamkan, biarkan ia dimatikan dan minta ia diuji.",
          },
        ],
      },
      {
        heading: "Rumah lama di Lembah Klang",
        blocks: [
          {
            type: "paragraph",
            text: "Banyak rumah di Kuala Lumpur dan Selangor didawai untuk isi rumah yang memiliki jauh lebih sedikit peralatan berbanding sekarang. Pendawaian itu mungkin masih elok tetapi tidak cukup kapasiti untuk cara rumah itu digunakan hari ini — itu persoalan kapasiti, bukan kerosakan. Ia biasanya menampakkan diri dengan cara yang sama: soket terlalu sedikit, kabel sambungan di merata tempat, trip mengganggu setiap kali dua peralatan berat digunakan serentak, dan papan agihan yang tiada ruang kosong lagi.",
          },
          {
            type: "list",
            items: [
              "Penghawa dingin, pemanas air dan dapur induksi yang ditambah selama bertahun-tahun semuanya menarik jauh lebih banyak kuasa daripada yang dirancang untuk soket asal.",
              "Renovasi oleh kontraktor berbeza selama berdekad meninggalkan papan yang tiada dokumentasi, dengan litar yang tidak sepadan dengan labelnya.",
              "Titik di bilik air dan dapur ialah tempat pembumian dan perlindungan kelembapan paling penting, dan di situlah pemasangan lama paling kerap ketinggalan.",
              "Penyesuai pelbagai palam bertindih pada satu soket ialah gejala, bukan penyelesaian — beban yang sampai ke dinding tetap sama.",
            ],
          },
        ],
      },
      {
        heading: "Kos kerja ini",
        blocks: [
          {
            type: "paragraph",
            text: "Diagnosis, penggantian papan dan pendawaian semula penuh ialah tiga skop berbeza dengan tiga harga berbeza, dan lebih jujur bermula dengan yang pertama daripada menjual yang ketiga.",
          },
          {
            type: "pricing",
            pricingIds: [
              "electrical-troubleshoot",
              "electrical-socket-add",
              "electrical-db-box",
              "electrical-full-wiring",
            ],
          },
        ],
      },
      {
        heading: "Mulakan dengan ujian, bukan pendawaian semula",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Terangkan gejala dengan tepat",
                description:
                  "Litar yang mana, berapa kerap, dan apa yang sedang digunakan ketika itu. Corak — trip hanya apabila cerek dan penghawa dingin digunakan serentak, atau hanya selepas hujan lebat — mempercepatkan pengecaman punca.",
              },
              {
                title: "Asingkan secara penghapusan",
                description:
                  "Cabut semua peralatan pada litar itu, reset, dan pasangkan semula satu demi satu. Satu peralatan rosak ialah jawapan yang sangat biasa dan tidak memerlukan kos untuk disingkirkan.",
              },
              {
                title: "Uji litar berkenaan",
                description:
                  "Jika kerosakan pada pemasangan dan bukan peralatan, ujian mengenal pasti litar mana dan lebih kurang di mana, supaya pembaikan disasarkan dan bukan spekulatif.",
              },
              {
                title: "Baiki, naik taraf atau dawai semula",
                description:
                  "Kebanyakan penemuan ialah satu titik atau satu litar. Menggantikan papan ialah langkah lebih besar; pendawaian semula penuh ialah langkah terakhir, wajar apabila keseluruhan pemasangan sudah tamat jangka hayat.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "Di Malaysia, kerja pemasangan elektrik dikawal selia dan sambungan kepada bekalan ialah bidang kuasa pihak utiliti. Kami akan beritahu dengan jelas apabila sesuatu bukan bidang kami dan apakah laluan yang betul, bukannya mengambil jalan pintas.",
          },
        ],
      },
      {
        heading: "Jika anda memang sedang merenovasi",
        blocks: [
          {
            type: "paragraph",
            text: "Masa paling jimat untuk membetulkan kekurangan elektrik ialah semasa dinding, siling atau lantai masih terbuka. Jika anda merancang renovasi, tetapkan susun atur soket dan lampu sebelum kemasan dipasang — menambah titik selepas itu bermakna memahat dinding yang baru dicat.",
          },
          {
            type: "list",
            items: [
              "Berjalan di setiap bilik dan kira di mana anda benar-benar memalam peralatan hari ini, bukan di mana soket kebetulan berada.",
              "Rancang dapur dan ruang kerja rumah dahulu; di situlah kabel sambungan berkumpul.",
              "Tetapkan kedudukan lampu sebelum siling ditutup.",
              "Jika papan sudah lama dan renovasi itu besar, menggantikannya semasa kerja berjalan jauh kurang mengganggu berbanding kemudian.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Pemutus litar saya trip hanya apabila hujan. Apa maksudnya?",
        answer:
          "Ia biasanya menunjukkan kelembapan sampai kepada sebahagian pemasangan — titik luar, lampu di bawah kawasan bocor, atau laluan kabel yang menjadi lembap. Ia wajar disiasat bersama sumber airnya, kerana membaiki bahagian elektrik sahaja membiarkan puncanya kekal.",
      },
      {
        question: "Selamatkah menggunakan soket yang terasa panas?",
        answer:
          "Tidak. Kepanasan pada soket bermakna sambungan sedang menjadi panas, dan haba pada sambungan itulah permulaan arka dan kesan hangus. Berhenti menggunakan titik itu, dan minta ia dibuka serta diperiksa dan bukan menunggu ia bertambah teruk.",
      },
      {
        question: "Perlukah pendawaian semula penuh, atau litar individu boleh dibaiki?",
        answer:
          "Kebanyakan masalah bersifat setempat — satu titik, satu aksesori atau satu litar — dan dibaiki sedemikian. Pendawaian semula penuh wajar apabila keseluruhan pemasangan sudah di penghujung hayatnya, bukan kerana satu soket rosak.",
      },
      {
        question: "Bolehkah saya menambah titik kuasa tanpa mendawai semula seluruh rumah?",
        answer:
          "Biasanya boleh, dengan syarat litar dan papan sedia ada mempunyai kapasiti untuk itu. Itulah yang ditentukan oleh penilaian: sama ada titik baharu boleh ditambah pada yang sedia ada, atau bekalan ke kawasan itu perlu dinaik taraf dahulu.",
      },
      {
        question: "Berapa lama usia pendawaian sebelum ia perlu diganti?",
        answer:
          "Usia sahaja bukan ukurannya — keadaan dan kapasiti yang menentukan. Sistem lama yang dipasang dengan baik dan dalam keadaan elok masih boleh selamat, manakala sistem lebih baharu yang berulang kali diubah suai mungkin tidak. Sebab itulah kami menguji dan bukan menyebut harga pendawaian semula berdasarkan usia rumah.",
      },
    ],
    closing:
      "Beritahu kami apa gejalanya, litar mana yang terjejas dan apa yang sedang digunakan ketika ia berlaku — serta hantarkan gambar papan agihan anda. Itu biasanya memadai untuk kami nyatakan sama ada ini satu titik, satu litar atau perbincangan yang lebih besar.",
  },
  zh: {
    title: "Renovix Home Services | 住宅电线需要检查的警示信号（吉隆坡与雪兰莪）",
    metaDescription:
      "马来西亚老屋电线需要检查或更换的警示信号 —— 反复跳闸、插座发热、焦味、两脚插座与老旧配电箱。应该先做什么。",
    h1: "住宅电线需要检查的警示信号",
    excerpt:
      "反复跳闸、开关面板发热、插座变褐与老旧配电箱，并不是老屋的「正常现象」。以下说明如何解读，以及按什么顺序处理。",
    question: "怎么知道我家电线需要更换？",
    answer:
      "电线很少会毫无预警地整体失效 —— 它会先发出信号。同一回路反复跳闸、插座或开关面板发热、插座周围出现焦痕或变褐、闻到焦味、启动电器时灯光变暗，以及仍是保险丝式或被大量加装改动过的配电箱，都是应请有资格的电工检查的迹象。其中有些只需处理单个点位；有些则代表该回路或整套电气装置已到使用年限。闻到焦味或看到焦痕不属于「继续观察」的情况 —— 请关闭该回路电源并安排检查。",
    keyPoints: [
      "反复跳闸代表保护装置正在起作用。不要在不查明原因的情况下一再复位。",
      "插座或开关处发热、变褐或有焦痕，代表接点松动或过载。",
      "焦味、打火花或插座烫手属于安全关键故障 —— 请切断该回路并联系电工。",
      "无接地的两脚插座、布包或已脆化的电缆，以及保险丝式配电箱，都属于更早一代的电气装置。",
      "用更多延长线来解决插座不足，只是转移负载，并没有减少负载。",
    ],
    sections: [
      {
        heading: "各种信号及其通常含义",
        blocks: [
          {
            type: "table",
            columns: ["您注意到的现象", "通常代表什么", "该怎么做"],
            rows: [
              [
                "同一回路反复跳闸",
                "回路过载、某件电器故障，或线路受潮与绝缘劣化",
                "逐一拔掉该回路上的电器以缩小范围；若仍跳闸，请安排回路检测",
              ],
              [
                "插座或开关面板发热",
                "接线松动，或该接点承载的电流超出设计",
                "停止使用该点位，请人拆开检查",
              ],
              [
                "变褐、焦痕或焦味",
                "接点因电弧造成的热损伤",
                "在配电箱切断该回路，并在再次使用前联系电工",
              ],
              [
                "开水壶或冷气启动时灯光变暗",
                "回路截面不足或共用回路造成压降",
                "请评估该回路及其负载",
              ],
              ["插入插头时打火花", "插座内部触片磨损", "更换该配件并检查其背后接线"],
              [
                "无接地的两脚插座",
                "较早一代的电气装置",
                "评估整套装置，而不是只换一个点位",
              ],
              [
                "保险丝式配电箱，或加装件很多的配电箱",
                "保护配置已不敷使用",
                "请检视配电箱及其保护装置",
              ],
            ],
          },
          {
            type: "callout",
            title: "不要一再复位跳闸的断路器",
            text: "反复跳闸的断路器是在侦测到问题。一再复位并不能修复故障，只是把警报消掉。若回路复位后立即跳闸，或在没有插任何电器时也跳闸，请保持断电并安排检测。",
          },
        ],
      },
      {
        heading: "巴生谷的老屋",
        blocks: [
          {
            type: "paragraph",
            text: "吉隆坡与雪兰莪有大量住宅，当年布线时所设想的家庭电器数量远少于今天。线路本身可能完好，却已不足以支撑现在的用电方式 —— 这是容量问题，而不是故障。它的表现往往一致：插座太少、到处是延长线、两件大功率电器同时使用就跳闸，以及配电箱已无空余回路位。",
          },
          {
            type: "list",
            items: [
              "多年来陆续加装的冷气、热水器与电磁炉，用电量都远超当初插座的设计预期。",
              "数十年间由不同承包商施工的改造，留下一个无人记录的配电箱，回路与标签也对不上。",
              "浴室与厨房点位是接地与防潮最重要的地方，也是老旧装置最常落后的地方。",
              "一个插座上叠加多个转换器是症状而不是解决办法 —— 到达墙内的负载并没有变少。",
            ],
          },
        ],
      },
      {
        heading: "相关工作的费用",
        blocks: [
          {
            type: "paragraph",
            text: "检测、更换配电箱与全屋重新布线是三种不同范围、三种不同价格的工作；从第一项开始，比直接推销第三项更诚实。",
          },
          {
            type: "pricing",
            pricingIds: [
              "electrical-troubleshoot",
              "electrical-socket-add",
              "electrical-db-box",
              "electrical-full-wiring",
            ],
          },
        ],
      },
      {
        heading: "先做检测，而不是直接重新布线",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "准确描述症状",
                description:
                  "哪个回路、多久一次、当时在使用什么。规律 —— 例如只在开水壶与冷气同时使用时跳闸，或只在大雨后跳闸 —— 能很快缩小原因范围。",
              },
              {
                title: "用排除法定位",
                description:
                  "拔掉该回路上所有电器，复位后再逐一接回。某一件电器故障是非常常见的答案，而且排除它不需要任何费用。",
              },
              {
                title: "对回路做检测",
                description:
                  "若故障在线路本身而非电器，检测能确定是哪个回路、大致位置在哪，让维修有的放矢而不是靠猜。",
              },
              {
                title: "维修、升级或重新布线",
                description:
                  "多数结果只是单个点位或单个回路。更换配电箱是更大的一步；全屋重新布线是最后一步，只有在整套装置确实到寿时才合理。",
              },
            ],
          },
          {
            type: "paragraph",
            text: "在马来西亚，电气装置工程受法规监管，与供电网的接驳属于电力公司的权责范围。凡不属于我们可以处理的事项，我们会明确说明，并告知正确的途径，而不是绕开它。",
          },
        ],
      },
      {
        heading: "如果您本来就要装修",
        blocks: [
          {
            type: "paragraph",
            text: "解决电气不足最省钱的时机，是墙面、天花或地面还开着的时候。若您正在规划装修，请在饰面施工前定好插座与灯位 —— 事后加点位，就意味着在刚粉刷好的墙上开槽。",
          },
          {
            type: "list",
            items: [
              "逐间房走一遍，记录您今天实际在哪里插电，而不是插座恰好在哪里。",
              "优先规划厨房与居家办公区；延长线通常都堆在这两处。",
              "在封天花之前确定灯位。",
              "若配电箱老旧而装修规模不小，趁施工期间更换，比日后单独更换要省事得多。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "我家断路器只在下雨时跳闸，这代表什么？",
        answer:
          "通常代表湿气进入了装置的某个部分 —— 户外点位、漏水区域下方的灯具，或已经受潮的走线路径。应连同水源一起排查，因为只处理电气侧会让成因继续存在。",
      },
      {
        question: "插座摸起来发热还能继续用吗？",
        answer:
          "不能。插座发热代表接点正在升温，而接点发热正是电弧与焦损的起点。请停止使用该点位，拆开检查，而不是等它恶化。",
      },
      {
        question: "一定要全屋重新布线，还是可以只修某个回路？",
        answer:
          "多数问题是局部的 —— 一个点位、一个配件或一个回路 —— 并按此处理。只有在整套装置确实到寿时，全屋重新布线才成立，而不是因为一个插座坏了。",
      },
      {
        question: "可以在不重新布线的情况下增加插座吗？",
        answer:
          "通常可以，前提是现有回路与配电箱有足够容量。这正是评估要确认的事：新点位能否接到现有线路上，还是该区域的供电需要先升级。",
      },
      {
        question: "电线用多少年就该换？",
        answer:
          "年限本身不是判断标准 —— 状况与容量才是。施工良好、状态完好的旧系统仍可安全使用，而被反复改动过的较新系统未必安全。因此我们以检测为准，而不是凭房龄开一张重新布线的报价。",
      },
    ],
    closing:
      "请告诉我们症状是什么、影响哪个回路、发生时正在使用什么，并附上配电箱的照片。通常这就足以判断这是单个点位、单个回路，还是需要更全面处理的问题。",
  },
};
