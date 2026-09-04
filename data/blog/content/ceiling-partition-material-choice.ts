import type { ArticleDefinition } from "../types";

/**
 * Coverage guide — ceiling & partition material choice.
 *
 * CONTENT_MAP §5 named this as the ceiling depth gap: the pillar page names the
 * materials it works with (9mm gypsum, metal stud, drywall) but no guide helped
 * an owner choose between them room by room. This guide does that without
 * inventing prices (all figures come from the ceiling rows in pricing.ts) and
 * without inventing durability numbers (lifespans stay qualitative — they
 * depend on leaks and installation, not on a brochure claim).
 */
export const ceilingPartitionMaterialChoice: ArticleDefinition = {
  slug: "ceiling-partition-material-choice",
  category: "materials",
  intents: ["material-comparison", "decision-guide", "installation", "price-factors"],
  published: "2026-09-04",
  relatedServices: ["ceiling-partition"],
  relatedSubServices: [
    "flat-plaster-ceiling",
    "l-box-ceiling",
    "drywall-partition",
    "ceiling-repair",
  ],
  relatedProblems: [
    "cracked-ceiling",
    "sagging-ceiling",
    "water-damaged-ceiling",
    "old-plaster-ceiling",
  ],
  relatedLocations: [
    "kuala-lumpur/kepong",
    "kuala-lumpur/desa-parkcity",
    "selangor/petaling-jaya",
    "selangor/puchong",
  ],
  relatedProjects: [
    "plaster-ceiling-cove-lighting",
    "suspended-ceiling-grid",
    "timber-look-ceiling-beams",
  ],
  pricingIds: ["ceiling-flat", "ceiling-lbox", "partition-drywall", "ceiling-repair"],
  en: {
    title: "Renovix Home Services | Ceiling & Partition Material Guide (KL & Selangor)",
    metaDescription:
      "Gypsum, plaster, PVC, timber or metal — which ceiling and partition material suits each room in a KL or Selangor home, what each costs, and the details that decide durability.",
    h1: "Choosing Ceiling and Partition Materials: Gypsum, Plaster, PVC, Timber or Metal",
    excerpt:
      "The right material is decided by the room, not the brochure — what is above the ceiling, how wet the room is, and whether you need to divide space or just cover services.",
    question: "Which material should I choose for my ceiling or partition?",
    answer:
      "For most living spaces, a gypsum board ceiling on a metal frame is the practical standard: it hides wiring and air-conditioner piping, accepts downlights and cove lighting, and is fast to install and easy to finish. Traditional plaster gives a seamless skimmed surface for a flatter, more monolithic look, at a slower pace. PVC panels suit wet and humid rooms such as bathrooms because they resist moisture where gypsum does not. Timber is a feature finish, not a general ceiling — used as beams or a feature section. For partitions, gypsum and drywall on a metal stud are the default, with moisture-resistant board in wet areas and soundproof construction where quiet matters. The decision is mostly room-by-room, and the honest starting point is what the ceiling has to hide and how wet the space gets.",
    keyPoints: [
      "Gypsum board on a metal frame is the practical standard for most living areas — light, fast and takes lighting well.",
      "Traditional plaster reads flatter and more seamless, but it is slower to build and repair.",
      "PVC suits wet and humid rooms; gypsum does not belong directly over persistent damp.",
      "Timber is a feature finish — used for beams and accents, not as a whole-room ceiling.",
      "For partitions, match the board to the room: standard gypsum, moisture-resistant in wet areas, soundproof where quiet matters.",
    ],
    sections: [
      {
        heading: "The materials in plain terms",
        blocks: [
          {
            type: "table",
            columns: ["Material", "What it is", "Where it belongs", "Honest limits"],
            rows: [
              [
                "Gypsum board",
                "Manufactured panels screwed to a metal or timber frame, jointed and skimmed",
                "Flat and L-box ceilings, partitions, bedrooms, living areas, offices",
                "Not for persistent damp; swells and fails if water sits on it",
              ],
              [
                "Traditional plaster",
                "Wet plaster applied and trowelled smooth over a lath or base",
                "Older homes, repair matching, a seamless monolithic finish",
                "Slower to build and to repair; needs a skilled hand for a flat result",
              ],
              [
                "PVC panels",
                "Lightweight waterproof panels clipped to a frame",
                "Bathrooms, kitchens, porches, anywhere hot and humid",
                "A visible panel-line look; not a seamless painted ceiling",
              ],
              [
                "Timber",
                "Solid or engineered timber planks or beams",
                "Feature beams, accents, a warm statement section",
                "Cost and maintenance; needs sealing and suits a feature, not a whole ceiling",
              ],
              [
                "Metal stud / frame",
                "Galvanised steel sections forming the structure the board fixes to",
                "The frame behind most modern gypsum ceilings and partitions",
                "A frame, not a finish — the board on it is what you see",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "In practice most homes combine these: a gypsum board ceiling on a metal frame in the living area, PVC in the bathrooms, and timber used sparingly as a feature rather than everywhere.",
          },
        ],
      },
      {
        heading: "Choosing by room",
        blocks: [
          {
            type: "list",
            items: [
              "Living and dining: gypsum board flat ceiling, or an L-box with a light trough for concealed LED strip — the most popular option for a reason.",
              "Bedrooms: flat gypsum board with a few downlights; keep it simple and leave access for future wiring.",
              "Kitchen: gypsum board is fine where the ceiling stays dry; if cooking steam is constant, a wipeable panel is the safer surface.",
              "Bathroom and wet kitchen: PVC or another moisture-tolerant panel, because gypsum does not forgive standing steam and splashes.",
              "Office or shop: gypsum or drywall partitions on metal stud for dividing space, with glass where visibility and light matter.",
              "Rooms that must stay quiet: a soundproof partition construction with the right infill, not just a thicker board.",
            ],
          },
          {
            type: "callout",
            title: "The room above decides the ceiling",
            text: "Before choosing any ceiling material, look at what is above it — water pipes, an air-conditioner drain, a bathroom. A ceiling that hides a water source needs an access panel and a material that will survive a leak until it is found, not one that turns a small drip into a whole ceiling replacement.",
          },
        ],
      },
      {
        heading: "Ceiling and partition are two different jobs",
        blocks: [
          {
            type: "paragraph",
            text: "Owners often think of them together, and they are usually built together — but they are chosen differently. A ceiling covers the services above and shapes the light; a partition divides space and decides how sound and sight move through a room.",
          },
          {
            type: "list",
            items: [
              "Ceiling: chosen for how it hides wiring and piping, how it takes lighting, and how it survives the room's moisture.",
              "Partition: chosen for whether it must hold a door, block sound, resist moisture, or stay transparent — and whether it is ever meant to come down again.",
              "The frame matters for both: a straight metal-stud frame is what keeps a ceiling flat and a partition rigid years later.",
              "Non-structural means exactly that: a gypsum or drywall partition is a divider, not a load-bearing wall — anything structural is assessed before it is touched.",
            ],
          },
        ],
      },
      {
        heading: "What drives the price",
        blocks: [
          {
            type: "paragraph",
            text: "Ceiling and partition quotes move on area, height, design complexity and lighting integration, plus the board grade where moisture or soundproofing is involved. These are the published starting rates for the scopes we carry out.",
          },
          {
            type: "pricing",
            pricingIds: ["ceiling-flat", "ceiling-lbox", "partition-drywall", "ceiling-repair"],
            note: "Painting, lighting points, cornice and specialised board grades are quoted separately where they apply.",
          },
          {
            type: "callout",
            title: "Price follows the room, not the sample",
            text: "A moisture-resistant or soundproof board costs more than the standard grade, and an L-box costs more than a flat run. The least expensive correct ceiling is the one that suits the room — upgrading the board in the one wet room is money better spent than over-speccing everywhere else.",
          },
        ],
      },
      {
        heading: "Durability and the details that decide it",
        blocks: [
          {
            type: "list",
            items: [
              "Joints and corners are where ceiling problems start — good taping, jointing and a full skim keep cracks away.",
              "Access panels are durability, not decoration: every hidden valve, trap and drain should stay reachable without cutting the ceiling open.",
              "A gypsum ceiling lasts on condition, not on a fixed number of years — kept dry and well jointed it stays sound for a long time; a persistent leak shortens any ceiling's life.",
              "PVC in a bathroom wins by being washable, not by being indestructible — ventilation still decides how clean it stays.",
              "Cracks, sagging and stains are read as signals, not as a cue to repaint — they usually point at movement or moisture above.",
            ],
          },
          {
            type: "paragraph",
            text: "We do not quote a lifespan figure for a ceiling or a partition, because the honest answer is that the substrate, the moisture and the detailing decide it — not the material alone.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between gypsum and plaster ceilings?",
        answer:
          "Gypsum board is a manufactured panel screwed to a frame, jointed and skimmed smooth — fast to install and easy to finish. Traditional plaster is applied wet and trowelled to a seamless surface, which reads flatter but is slower to build and to repair. Most modern work uses gypsum board.",
      },
      {
        question: "Can I use a gypsum ceiling in my bathroom?",
        answer:
          "In a bathroom that stays steamy, gypsum is the wrong surface — persistent damp makes it swell and fail. A moisture-tolerant panel such as PVC is the safer choice there, while gypsum board remains the standard in dry living areas.",
      },
      {
        question: "Which is better for dividing a room — drywall or glass?",
        answer:
          "It depends on what the wall is for. Drywall on a metal stud is the standard for a private, solid division and takes paint and wall fittings. Glass keeps light and visibility moving through the space, and is often used in offices and shops where openness matters.",
      },
      {
        question: "Does a soundproof partition cost more than a standard one?",
        answer:
          "Yes — soundproofing is a construction choice, not a thicker board. It involves the right framing, an infill for the cavity and proper sealing at the edges, and it is quoted at a higher rate than a standard partition.",
      },
      {
        question: "Why does my ceiling keep cracking after it is repaired?",
        answer:
          "Recurring cracks usually mean the cause was not addressed — movement in the structure, a leak above, or a joint that was patched rather than properly re-taped. A repair that only skims the surface will crack again when the underlying cause is still there.",
      },
    ],
    closing:
      "Tell us the room, what is above it, and whether you want to cover services, divide space or both. We will recommend the material that suits the room — and be honest about the one or two places where spending more is actually worth it.",
  },
  ms: {
    title: "Renovix Home Services | Panduan Bahan Siling & Partition (KL & Selangor)",
    metaDescription:
      "Gypsum, plaster, PVC, kayu atau logam — bahan siling dan partition mana yang sesuai untuk setiap bilik di rumah KL atau Selangor, kos masing-masing, dan butiran yang menentukan ketahanan.",
    h1: "Memilih Bahan Siling dan Partition: Gypsum, Plaster, PVC, Kayu atau Logam",
    excerpt:
      "Bahan yang betul ditentukan oleh bilik, bukan risalah — apa yang ada di atas siling, betapa lembap bilik itu, dan sama ada anda perlu membahagi ruang atau sekadar menutup perkhidmatan.",
    question: "Bahan mana yang patut saya pilih untuk siling atau partition saya?",
    answer:
      "Untuk kebanyakan ruang tamu, siling papan gypsum pada rangka logam ialah piawaian praktikal: ia menyorok pendawaian dan paip penghawa dingin, menerima lampu sorot dan pencahayaan cove, cepat dipasang dan mudah disiapkan. Plaster tradisional memberi permukaan skim yang licin untuk rupa lebih rata dan monolitik, dengan kadar yang lebih perlahan. Panel PVC sesuai untuk bilik basah dan lembap seperti bilik air kerana ia tahan kelembapan di mana gypsum tidak. Kayu ialah kemasan ciri, bukan siling umum — digunakan sebagai rasuk atau bahagian ciri. Untuk partition, gypsum dan drywall pada stud logam ialah piawaian, dengan papan tahan lembapan di kawasan basah dan binaan kalis bunyi di tempat yang memerlukan ketenangan. Keputusannya banyak bergantung pada bilik demi bilik, dan titik permulaan yang jujur ialah apa yang siling perlu sorok dan betapa basah ruang itu.",
    keyPoints: [
      "Papan gypsum pada rangka logam ialah piawaian praktikal untuk kebanyakan ruang tamu — ringan, cepat dan sesuai dengan pencahayaan.",
      "Plaster tradisional nampak lebih rata dan licin, tetapi lebih perlahan untuk dibina dan dibaiki.",
      "PVC sesuai untuk bilik basah dan lembap; gypsum tidak patut berada terus di atas kelembapan berterusan.",
      "Kayu ialah kemasan ciri — digunakan untuk rasuk dan aksen, bukan sebagai siling seluruh bilik.",
      "Untuk partition, padankan papan dengan bilik: gypsum standard, tahan lembapan di kawasan basah, kalis bunyi di tempat yang memerlukan ketenangan.",
    ],
    sections: [
      {
        heading: "Bahan-bahan dalam bahasa mudah",
        blocks: [
          {
            type: "table",
            columns: ["Bahan", "Apa ia", "Tempat sesuai", "Batasan jujur"],
            rows: [
              [
                "Papan gypsum",
                "Panel buatan diskru pada rangka logam atau kayu, disambung dan di-skim",
                "Siling rata dan L-box, partition, bilik tidur, ruang tamu, pejabat",
                "Bukan untuk lembap berterusan; menggelembung dan gagal jika air bertakung di atasnya",
              ],
              [
                "Plaster tradisional",
                "Plaster basah disapu dan diratakan licin di atas lath atau tapak",
                "Rumah lama, padanan pembaikan, kemasan monolitik yang licin",
                "Lebih perlahan untuk dibina dan dibaiki; perlu tangan mahir untuk hasil rata",
              ],
              [
                "Panel PVC",
                "Panel kalis air yang ringan diklip pada rangka",
                "Bilik air, dapur, anjung, mana-mana yang panas dan lembap",
                "Rupa garisan panel yang ketara; bukan siling dicat yang licin",
              ],
              [
                "Kayu",
                "Papan atau rasuk kayu pejal atau kejuruteraan",
                "Rasuk ciri, aksen, bahagian kenyataan yang hangat",
                "Kos dan penyelenggaraan; perlu pengedap dan sesuai untuk ciri, bukan seluruh siling",
              ],
              [
                "Stud / rangka logam",
                "Bahagian keluli bergalvani membentuk struktur tempat papan dipasang",
                "Rangka di belakang kebanyakan siling gypsum dan partition moden",
                "Ia rangka, bukan kemasan — papan di atasnya yang anda lihat",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Dalam amalan kebanyakan rumah menggabungkan ini: siling papan gypsum pada rangka logam di ruang tamu, PVC di bilik air, dan kayu digunakan secara berhemat sebagai ciri dan bukannya di merata tempat.",
          },
        ],
      },
      {
        heading: "Memilih mengikut bilik",
        blocks: [
          {
            type: "list",
            items: [
              "Ruang tamu dan makan: siling rata papan gypsum, atau L-box dengan alur cahaya untuk jalur LED tersorok — pilihan paling popular atas sebabnya.",
              "Bilik tidur: papan gypsum rata dengan beberapa lampu sorot; kekalkan ringkas dan tinggalkan akses untuk pendawaian masa depan.",
              "Dapur: papan gypsum elok di tempat siling kekal kering; jika wap memasak berterusan, panel yang boleh dilap ialah permukaan lebih selamat.",
              "Bilik air dan dapur basah: PVC atau panel tahan lembapan lain, kerana gypsum tidak memaafkan wap dan percikan yang berterusan.",
              "Pejabat atau kedai: partition gypsum atau drywall pada stud logam untuk membahagi ruang, dengan kaca di tempat keterlihatan dan cahaya penting.",
              "Bilik yang perlu senyap: binaan partition kalis bunyi dengan pengisi yang betul, bukan sekadar papan lebih tebal.",
            ],
          },
          {
            type: "callout",
            title: "Bilik di atas menentukan siling",
            text: "Sebelum memilih sebarang bahan siling, lihat apa yang ada di atasnya — paip air, longkang penghawa dingin, bilik air. Siling yang menyorok sumber air memerlukan panel akses dan bahan yang bertahan dengan kebocoran sehingga ia ditemui, bukan yang menukar titisan kecil menjadi penggantian seluruh siling.",
          },
        ],
      },
      {
        heading: "Siling dan partition ialah dua kerja berbeza",
        blocks: [
          {
            type: "paragraph",
            text: "Pemilik sering menganggapnya bersama, dan ia selalunya dibina bersama — tetapi ia dipilih secara berbeza. Siling menutup perkhidmatan di atas dan membentuk cahaya; partition membahagi ruang dan menentukan bagaimana bunyi dan pandangan bergerak melalui bilik.",
          },
          {
            type: "list",
            items: [
              "Siling: dipilih untuk bagaimana ia menyorok pendawaian dan paip, bagaimana ia menerima pencahayaan, dan bagaimana ia bertahan dengan kelembapan bilik.",
              "Partition: dipilih untuk sama ada ia perlu menampung pintu, menghalang bunyi, menahan lembapan, atau kekal telus — dan sama ada ia akan dibuang semula suatu hari nanti.",
              "Rangka penting untuk kedua-duanya: rangka stud logam yang lurus itulah yang mengekalkan siling rata dan partition tegap bertahun kemudian.",
              "Bukan struktur bermakna tepat seperti itu: partition gypsum atau drywall ialah pembahagi, bukan dinding galas beban — apa-apa yang bersifat struktur dinilai sebelum disentuh.",
            ],
          },
        ],
      },
      {
        heading: "Apa yang menentukan harga",
        blocks: [
          {
            type: "paragraph",
            text: "Sebut harga siling dan partition bergerak mengikut keluasan, ketinggian, kerumitan reka bentuk dan integrasi pencahayaan, serta gred papan apabila melibatkan kelembapan atau kalis bunyi. Ini kadar permulaan yang diterbitkan untuk skop yang kami jalankan.",
          },
          {
            type: "pricing",
            pricingIds: ["ceiling-flat", "ceiling-lbox", "partition-drywall", "ceiling-repair"],
            note: "Mengecat, titik lampu, cornice dan gred papan khas disebut berasingan jika berkenaan.",
          },
          {
            type: "callout",
            title: "Harga mengikut bilik, bukan sampel",
            text: "Papan tahan lembapan atau kalis bunyi kos lebih daripada gred standard, dan L-box kos lebih daripada laluan rata. Siling betul yang paling murah ialah yang sesuai dengan bilik — menaik taraf papan di satu bilik basah ialah wang yang lebih baik dibelanjakan daripada melebihkan spesifikasi di tempat lain.",
          },
        ],
      },
      {
        heading: "Ketahanan dan butiran yang menentukannya",
        blocks: [
          {
            type: "list",
            items: [
              "Sambungan dan sudut ialah tempat masalah siling bermula — pita, sambungan dan skim penuh yang baik menjauhkan retakan.",
              "Panel akses ialah ketahanan, bukan hiasan: setiap injap, perangkap dan longkang tersorok harus kekal boleh dicapai tanpa memotong siling terbuka.",
              "Siling gypsum bertahan mengikut keadaan, bukan pada bilangan tahun tetap — dijaga kering dan disambung baik ia kekal kukuh lama; kebocoran berterusan memendekkan hayat mana-mana siling.",
              "PVC di bilik air menang kerana boleh dilap, bukan kerana tidak boleh rosak — pengudaraan tetap menentukan betapa bersih ia kekal.",
              "Retakan, kendur dan kesan dibaca sebagai isyarat, bukan isyarat untuk mengecat semula — ia selalunya menunjuk pada pergerakan atau kelembapan di atas.",
            ],
          },
          {
            type: "paragraph",
            text: "Kami tidak menyebut angka jangka hayat untuk siling atau partition, kerana jawapan jujurnya ialah tapak, kelembapan dan perincian yang menentukannya — bukan bahan semata-mata.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Apa perbezaan antara siling gypsum dan plaster?",
        answer:
          "Papan gypsum ialah panel buatan yang diskru pada rangka, disambung dan di-skim licin — cepat dipasang dan mudah disiapkan. Plaster tradisional disapu basah dan diratakan ke permukaan licin, yang nampak lebih rata tetapi lebih perlahan untuk dibina dan dibaiki. Kebanyakan kerja moden menggunakan papan gypsum.",
      },
      {
        question: "Bolehkah saya guna siling gypsum di bilik air?",
        answer:
          "Di bilik air yang kekal berwap, gypsum ialah permukaan yang salah — lembap berterusan membuatnya menggelembung dan gagal. Panel tahan lembapan seperti PVC ialah pilihan lebih selamat di situ, manakala papan gypsum kekal sebagai piawaian di kawasan tinggal yang kering.",
      },
      {
        question: "Mana lebih baik untuk membahagi bilik — drywall atau kaca?",
        answer:
          "Bergantung pada kegunaan dinding itu. Drywall pada stud logam ialah piawaian untuk pembahagian peribadi yang kukuh, dan menerima cat serta kelengkapan dinding. Kaca mengekalkan cahaya dan keterlihatan bergerak melalui ruang, dan sering digunakan di pejabat dan kedai yang mementingkan keterbukaan.",
      },
      {
        question: "Adakah partition kalis bunyi kos lebih daripada yang standard?",
        answer:
          "Ya — kalis bunyi ialah pilihan binaan, bukan papan lebih tebal. Ia melibatkan rangka yang betul, pengisi untuk rongga dan pengedap yang betul di tepi, dan ia disebut pada kadar lebih tinggi daripada partition standard.",
      },
      {
        question: "Kenapa siling saya terus retak selepas dibaiki?",
        answer:
          "Retakan berulang selalunya bermakna puncanya tidak ditangani — pergerakan pada struktur, kebocoran di atas, atau sambungan yang ditampal dan bukannya di-pita semula dengan betul. Pembaikan yang hanya menyalut permukaan akan retak semula apabila punca asasnya masih ada.",
      },
    ],
    closing:
      "Beritahu kami bilik tersebut, apa yang ada di atasnya, dan sama ada anda mahu menutup perkhidmatan, membahagi ruang atau kedua-duanya. Kami akan cadangkan bahan yang sesuai dengan bilik — dan jujur tentang satu dua tempat yang memang berbaloi dibelanjakan lebih.",
  },
  zh: {
    title: "Renovix Home Services | 天花与隔墙材料选择指南（吉隆坡与雪兰莪）",
    metaDescription:
      "石膏板、传统抹灰、PVC、木材还是金属 —— 在吉隆坡或雪兰莪的家中，每个房间该选哪种天花与隔墙材料、各自成本，以及决定耐用度的细节。",
    h1: "选择天花与隔墙材料：石膏板、抹灰、PVC、木材还是金属",
    excerpt:
      "合适的材料由房间决定，而不是由宣传册决定 —— 天花上方是什么、房间有多潮湿，以及您是要分隔空间还是仅仅遮住管线。",
    question: "我的天花或隔墙该选什么材料？",
    answer:
      "对大多数起居空间来说，金属龙骨上的石膏板天花是实用的标准做法：它能遮住电线和空调管线，适合筒灯与灯槽，安装快、收口容易。传统抹灰能做出更平整、更浑然一体的无缝表面，但施工较慢。PVC 板适合浴室等潮湿空间，因为它耐潮，而石膏板做不到。木材是点缀性饰面，不是通铺天花 —— 用于梁或局部造型。隔墙方面，金属龙骨上的石膏板与干墙是默认做法，潮湿区域用防潮板，需要安静的地方做隔音构造。决策基本上是逐间房间来做，而诚实的出发点是：天花要遮什么，空间有多潮湿。",
    keyPoints: [
      "金属龙骨上的石膏板是大多数起居区的实用标准 —— 轻便、快捷，也适合做灯光。",
      "传统抹灰表面更平整、更无缝，但施工和修补都更慢。",
      "PVC 适合潮湿空间；持续返潮的地方不适合直接做石膏板天花。",
      "木材是点缀性饰面 —— 用于梁和局部造型，而不是整间房的天花。",
      "隔墙方面，板材要匹配房间：普通区用标准石膏板，潮湿区用防潮板，需要安静处用隔音构造。",
    ],
    sections: [
      {
        heading: "用大白话讲这些材料",
        blocks: [
          {
            type: "table",
            columns: ["材料", "它是什么", "适合用在哪里", "诚实的局限"],
            rows: [
              [
                "石膏板",
                "固定在金属或木龙骨上的成品板材，接缝并刮平",
                "平面与 L 形天花、隔墙、卧室、起居区、办公室",
                "不适合持续返潮；积水会使其膨胀失效",
              ],
              [
                "传统抹灰",
                "湿灰浆涂抹并抹平在基层或板条上",
                "老房子、匹配式修补、无缝的整体效果",
                "施工与修补更慢；要做出平整效果需要好手艺",
              ],
              [
                "PVC 板",
                "卡在龙骨上的轻质防水板材",
                "浴室、厨房、门廊等闷热潮湿处",
                "有可见板缝的外观；不是无缝的油漆天花",
              ],
              [
                "木材",
                "实木或复合木板、木梁",
                "装饰梁、点缀、温暖的局部造型",
                "成本与维护；需做封闭处理，适合做点缀而非整面天花",
              ],
              [
                "金属龙骨 / 骨架",
                "构成承托板材结构的镀锌钢构件",
                "大多数现代石膏板天花与隔墙背后的骨架",
                "是骨架不是饰面 —— 您看到的是固定在上面的板材",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "实际上大多数家庭是组合使用：起居区做金属龙骨石膏板天花，浴室用 PVC，木材只是克制地用作点缀，而不是到处都用。",
          },
        ],
      },
      {
        heading: "按房间选择",
        blocks: [
          {
            type: "list",
            items: [
              "客厅与餐厅：平面石膏板天花，或带灯槽的 L 形天花用来装隐藏式灯带 —— 成为最受欢迎的选择是有原因的。",
              "卧室：平面石膏板加几盏筒灯；保持简洁，并留出日后改线的检修口。",
              "厨房：天花保持干燥处石膏板即可；若烹饪蒸汽持续不断，可擦拭的面板才是更稳妥的表面。",
              "浴室与湿厨房：PVC 或其它耐潮板材，因为石膏板经不起持续的蒸汽与溅水。",
              "办公室或店铺：金属龙骨上的石膏板或干墙隔墙用于分隔空间，需要通透采光处用玻璃。",
              "需要安静的房间：做隔音隔墙构造并配正确的填充，而不是只加厚板材。",
            ],
          },
          {
            type: "callout",
            title: "天花上方是什么，决定了天花怎么做",
            text: "在选择任何天花材料之前，先看它上面是什么 —— 水管、空调排水、浴室。遮住水源的天花需要检修口，以及一种能在漏水被发现之前扛得住水的材料，而不是把小滴漏变成整面天花更换的材料。",
          },
        ],
      },
      {
        heading: "天花和隔墙是两件不同的事",
        blocks: [
          {
            type: "paragraph",
            text: "业主常把它们放在一起想，施工时也常一起做 —— 但选择逻辑不同。天花遮住上方管线并塑造光线；隔墙分隔空间，并决定声音与视线如何在房间内流动。",
          },
          {
            type: "list",
            items: [
              "天花：看它如何遮住电线管线、如何安排灯光，以及能否扛住房间的潮气。",
              "隔墙：看它是否要装门、挡声音、防潮，还是保持通透 —— 以及将来是否打算拆掉。",
              "两者都看骨架：平直的金属龙骨骨架，才是多年后天花依然平整、隔墙依然稳固的原因。",
              "非承重就是字面意思：石膏板或干墙隔墙只是分隔物，不是承重墙 —— 任何涉及结构的事都要先评估再动。",
            ],
          },
        ],
      },
      {
        heading: "价格由什么决定",
        blocks: [
          {
            type: "paragraph",
            text: "天花与隔墙的报价随面积、层高、造型复杂度与灯光集成而变，涉及防潮或隔音时还看板材等级。以下是我们所承接范围的公开起步价。",
          },
          {
            type: "pricing",
            pricingIds: ["ceiling-flat", "ceiling-lbox", "partition-drywall", "ceiling-repair"],
            note: "油漆、灯位、石膏线及特殊板材等级如适用，另行报价。",
          },
          {
            type: "callout",
            title: "价格跟着房间走，不跟着样板走",
            text: "防潮板或隔音板比标准等级贵，L 形天花比平面贵。最便宜的正确天花，是适合该房间的那一种 —— 在那一间潮湿的房间里升级板材，比处处过度堆料更值得。",
          },
        ],
      },
      {
        heading: "耐用度，以及决定它的细节",
        blocks: [
          {
            type: "list",
            items: [
              "接缝与转角是天花出问题的起点 —— 到位的绷带、接缝与满刮腻子才能让裂缝远离。",
              "检修口是耐用性，不是装饰：每一处隐藏阀门、存水弯和排水都应能打开检修，而不是要切开天花。",
              "石膏板天花的寿命取决于状况，而不是固定年数 —— 保持干燥、接缝良好就能长久完好；持续的漏水会缩短任何天花的寿命。",
              "浴室里的 PVC 赢在可擦拭，而不是不可损坏 —— 通风才最终决定它能保持多干净。",
              "裂缝、下坠与污渍要当作信号来读，而不是当作重新刷漆的理由 —— 它们通常指向上方有位移或潮气。",
            ],
          },
          {
            type: "paragraph",
            text: "我们不为天花或隔墙报一个寿命年数，因为诚实的答案是：决定它的是基面、潮气与细节 —— 而不只是材料本身。",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "石膏板天花和传统抹灰天花有什么区别？",
        answer:
          "石膏板是固定在龙骨上的成品板材，做接缝后刮平 —— 安装快、收口容易。传统抹灰是湿料涂抹并抹平到无缝表面，观感更平整，但施工和修补都更慢。现代工程大多用石膏板。",
      },
      {
        question: "浴室能做石膏板天花吗？",
        answer:
          "在长期有蒸汽的浴室里，石膏板是错误的选择 —— 持续返潮会让它膨胀失效。那里用 PVC 等防潮板材更稳妥，而石膏板仍是干燥起居区的标准做法。",
      },
      {
        question: "隔房间用干墙好还是玻璃好？",
        answer:
          "取决于这面墙的用途。金属龙骨上的干墙是私密、坚实分隔的标准做法，可以刷漆、挂壁挂件。玻璃则让光线和视线在空间里流动，常用于注重通透感的办公室与店铺。",
      },
      {
        question: "隔音隔墙比普通隔墙贵吗？",
        answer:
          "贵 —— 隔音是一种构造选择，而不是加厚板材。它涉及正确的骨架、空腔填充以及边缘的密封处理，报价会比普通隔墙更高。",
      },
      {
        question: "为什么我的天花修补后又开裂？",
        answer:
          "反复开裂通常说明原因没有处理 —— 结构位移、上方漏水，或者接缝只是抹平而没有重新正确做绷带。只补表面的修补，在根本原因仍存在时还会再裂。",
      },
    ],
    closing:
      "告诉我们房间位置、天花上方是什么，以及您是想遮管线、分隔空间，还是两者都要。我们会推荐适合该房间的材料 —— 并且如实指出那一两处确实值得多花钱的地方。",
  },
};
