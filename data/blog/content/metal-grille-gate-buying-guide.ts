import type { ArticleDefinition } from "../types";

/**
 * Coverage article — welding & metal works pillar.
 *
 * The approved backlog had no welding guide, so the welding pillar and its
 * four real projects had no supporting educational content. This is a genuine
 * decision guide (mild steel vs stainless vs aluminium, and what actually
 * decides the price), not a doorway page. It makes no security claims.
 */
export const metalGrilleGateBuyingGuide: ArticleDefinition = {
  slug: "metal-grille-gate-buying-guide",
  category: "materials",
  intents: ["material-comparison", "decision-guide", "cost", "maintenance", "lifespan"],
  published: "2026-09-04",
  relatedServices: ["welding-metal-works", "general-renovation", "painting"],
  relatedSubServices: ["window-grille"],
  relatedProblems: [],
  relatedLocations: [
    "selangor/rawang",
    "selangor/semenyih",
    "kuala-lumpur/taman-melawati",
    "kuala-lumpur/segambut",
  ],
  relatedProjects: [
    "structural-metal-welding-fabrication",
    "on-site-metal-frame-welding",
    "metal-awning-frame-installation",
  ],
  pricingIds: [
    "welding-grille-window",
    "welding-gate",
    "welding-railing",
    "welding-awning",
    "welding-repair",
  ],
  en: {
    title: "Renovix Home Services | Grilles, Gates & Railings — Metal Buying Guide (Malaysia)",
    metaDescription:
      "Mild steel, stainless steel and aluminium compared for Malaysian grilles, gates, railings and awnings — what drives the price, how each ages in our climate, and what maintenance each needs.",
    h1: "Choosing Metal for Grilles, Gates, Railings and Awnings in Malaysia",
    excerpt:
      "Three common metals, very different costs and very different maintenance. What each is suited to, what really drives a fabrication quotation, and how to keep it from rusting.",
    question: "Should I use mild steel, stainless steel or aluminium for my gate or grille?",
    answer:
      "Mild steel is the most economical and the most versatile to fabricate, which is why most gates and window grilles in Malaysia are made from it — but it must be properly coated and recoated, because it will rust when the coating fails. Stainless steel costs considerably more and needs far less maintenance, making it a common choice for railings and for coastal or heavily exposed positions. Aluminium is light and does not rust, so it suits awning frames and trellis work, but it is not the same structurally as steel. Our fabrication rates are below, priced by square foot or per foot run depending on the item.",
    keyPoints: [
      "Mild steel: lowest cost, easiest to fabricate and repair, but its life depends entirely on the coating being maintained.",
      "Stainless steel: much lower maintenance and a cleaner finish, at a materially higher cost.",
      "Aluminium: light and rust-free, well suited to awning frames — but not a like-for-like substitute for structural steel.",
      "Price is driven by section size and thickness, the design's complexity, the finish, and how it is installed — not just the area.",
      "In our climate, rust almost always starts at a joint, a fixing or a scratch, not in the middle of a flat surface.",
    ],
    sections: [
      {
        heading: "The three metals compared",
        blocks: [
          {
            type: "table",
            columns: ["", "Mild steel", "Stainless steel", "Aluminium"],
            rows: [
              [
                "Relative cost",
                "Lowest",
                "Highest of the three for most sections",
                "Between the two, depending on profile",
              ],
              [
                "Corrosion behaviour",
                "Rusts once the coating is breached",
                "Highly corrosion-resistant; grade matters near the coast",
                "Does not rust; can pit in harsh conditions",
              ],
              [
                "Maintenance",
                "Inspect and recoat periodically; touch up scratches early",
                "Occasional cleaning; little more",
                "Occasional cleaning",
              ],
              [
                "Fabrication and repair",
                "Easily welded, modified and repaired on site",
                "Weldable but more demanding and more costly",
                "Different jointing; not simply welded like steel",
              ],
              [
                "Typical uses",
                "Gates, window grilles, door grilles, railings, frames",
                "Railings, handrails, exposed feature work",
                "Awning frames, light trellis, lightweight frames",
              ],
              [
                "Appearance over time",
                "Depends entirely on the coating regime",
                "Stays consistent with minimal effort",
                "Stays consistent; finish depends on the coating",
              ],
            ],
          },
          {
            type: "callout",
            title: "\"Stainless\" is a family, not a single material",
            text: "Different stainless grades behave differently, and exposure matters — a coastal or heavily washed position is harder on metal than a sheltered porch. Ask what grade is being quoted rather than accepting \"stainless\" as a specification on its own.",
          },
        ],
      },
      {
        heading: "What actually drives the price",
        blocks: [
          {
            type: "paragraph",
            text: "Two quotations for the same gate opening can differ substantially, and the difference is usually in specification rather than in margin. These are the variables worth asking about:",
          },
          {
            type: "list",
            items: [
              "Section size and thickness. A heavier frame section costs more in material and in labour, and is the single biggest difference between a light gate and a solid one.",
              "Design complexity. Straight vertical bars are quick; curves, laser-cut panels, decorative infill and mixed materials all add fabrication hours.",
              "Overall size and weight. A wide gate needs a stronger frame, heavier hinges and a more substantial post than a narrow one.",
              "Finish. Primer plus paint, powder coating or a polished stainless finish are different processes with different costs and different maintenance.",
              "Installation conditions. Fixing into a sound concrete post is straightforward; a weak or out-of-plumb existing structure has to be dealt with first.",
              "Moving parts. Wheels, tracks, hinges, locks and any provision for an automation motor add cost and are worth specifying rather than assuming.",
            ],
          },
        ],
      },
      {
        heading: "Our fabrication rates",
        blocks: [
          {
            type: "paragraph",
            text: "Grilles, gates and awnings are priced per square foot; railings and fencing are priced per foot run. Repairs to existing metalwork are a separate job.",
          },
          {
            type: "pricing",
            pricingIds: [
              "welding-grille-window",
              "welding-gate",
              "welding-railing",
              "welding-awning",
              "welding-repair",
            ],
          },
        ],
      },
      {
        heading: "Measuring and specifying before you order",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Measure the opening, not the old item",
                description:
                  "Measure the structural opening in three places — the old grille may have been made to fit a repair rather than the opening itself.",
              },
              {
                title: "Decide how it has to open",
                description:
                  "Swing, sliding or folding changes the frame, the hardware and the space you need to leave clear. Decide this before the design.",
              },
              {
                title: "Check the fixing substrate",
                description:
                  "What the item bolts into matters as much as the item. A heavy gate on a weak post will pull the post, not hold the gate.",
              },
              {
                title: "Consider escape routes",
                description:
                  "Where a grille covers a window that is part of your way out of the building, plan for a means of opening it from inside rather than fixing it permanently shut.",
              },
              {
                title: "Agree the finish and the touch-up",
                description:
                  "Ask what coating system is used and what you should keep for touching up scratches later. A small tin now saves a respray in a few years.",
              },
            ],
          },
        ],
      },
      {
        heading: "Keeping metalwork from rusting",
        blocks: [
          {
            type: "paragraph",
            text: "In Malaysia's rain and humidity, mild steel does not fail gradually across a whole surface — it fails at points. Water sits in a horizontal section, collects at a bolt hole, or gets under a scratch, and the rust spreads outward from there under the paint film.",
          },
          {
            type: "list",
            items: [
              "Walk the gate and grilles once or twice a year and look specifically at the bottom rails, the welds, the hinge points and anywhere water can sit.",
              "Touch up chips and scratches as soon as you see them — bare steel exposed to rain will start rusting within days.",
              "Keep the base of gate posts clear of soil and plants; constant damp against steel at ground level shortens its life more than anything above.",
              "Rinse salt and dirt off exposed metalwork occasionally, especially in coastal areas.",
              "Deal with a spot of surface rust while it is still surface rust. Once a section is pitted, the repair is fabrication rather than painting.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you repair an existing gate instead of replacing it?",
        answer:
          "Often yes. Cracked welds, a sagging frame, a broken hinge, a damaged bottom rail or a section eaten by rust can usually be cut out and rebuilt in place. Replacement makes sense when corrosion is widespread rather than local, or when the frame section was too light for the size to begin with.",
      },
      {
        question: "Is powder coating better than painting?",
        answer:
          "Powder coating gives a harder, more uniform factory finish and is popular for new fabrication. Site painting is easier to touch up afterwards and is often the practical choice for repairs or for work fabricated and installed in place. Both need the steel prepared properly first — that matters more than the choice between them.",
      },
      {
        question: "Do you install automatic gate motors?",
        answer:
          "Tell us at the design stage if a motor is planned or may be added later, because the frame, the track and the fixings have to suit it. We will confirm what we can carry out ourselves and what needs a specialist installer for the automation itself.",
      },
      {
        question: "How long will a mild steel gate last in Malaysia?",
        answer:
          "That depends far more on the coating and the maintenance than on the steel. A well-prepared, well-coated gate that gets its scratches touched up lasts a long time; the same gate left with bare chips at the bottom rail will rust from those points first. We would rather explain what to maintain than publish a figure we cannot stand behind.",
      },
      {
        question: "Can grilles be made so they can still be opened from inside?",
        answer:
          "Yes, and where a window is part of how you would leave the building we recommend it. Tell us which openings those are and we will design an openable panel with an internal release rather than fixing the grille permanently.",
      },
    ],
    closing:
      "Send the measurements of the opening, a photograph of the position and a note of how you want it to open. We will advise which metal and which section suit the job, and quote from the rates above.",
  },
  ms: {
    title: "Renovix Home Services | Grill, Pagar & Railing — Panduan Memilih Logam (Malaysia)",
    metaDescription:
      "Perbandingan besi lembut, keluli tahan karat dan aluminium untuk grill, pagar, railing dan awning di Malaysia — apa yang menentukan harga, cara ia menua dalam iklim kita dan penyelenggaraannya.",
    h1: "Memilih Logam untuk Grill, Pagar, Railing dan Awning di Malaysia",
    excerpt:
      "Tiga logam biasa, kos yang sangat berbeza dan penyelenggaraan yang sangat berbeza. Apa kesesuaian setiap satu, apa yang sebenarnya menentukan sebut harga fabrikasi, dan cara mengelakkannya berkarat.",
    question: "Patutkah saya guna besi lembut, keluli tahan karat atau aluminium untuk pagar atau grill?",
    answer:
      "Besi lembut paling jimat dan paling mudah difabrikasi, sebab itulah kebanyakan pagar dan grill tingkap di Malaysia diperbuat daripadanya — tetapi ia mesti disalut dengan betul dan disalut semula, kerana ia akan berkarat apabila salutannya gagal. Keluli tahan karat jauh lebih mahal tetapi memerlukan penyelenggaraan jauh lebih sedikit, menjadikannya pilihan biasa untuk railing dan kedudukan berhampiran pantai atau yang sangat terdedah. Aluminium ringan dan tidak berkarat, jadi ia sesuai untuk rangka awning dan kerja teralis, tetapi ia tidak sama dari segi struktur dengan keluli. Kadar fabrikasi kami ada di bawah, dikira setiap kaki persegi atau setiap kaki panjang bergantung pada item.",
    keyPoints: [
      "Besi lembut: kos paling rendah, paling mudah difabrikasi dan dibaiki, tetapi jangka hayatnya bergantung sepenuhnya pada salutan yang diselenggara.",
      "Keluli tahan karat: penyelenggaraan jauh lebih rendah dan kemasan lebih bersih, dengan kos yang jauh lebih tinggi.",
      "Aluminium: ringan dan tidak berkarat, sesuai untuk rangka awning — tetapi bukan pengganti setara untuk keluli struktur.",
      "Harga ditentukan oleh saiz dan ketebalan keratan, kerumitan reka bentuk, kemasan dan cara ia dipasang — bukan sekadar keluasan.",
      "Dalam iklim kita, karat hampir selalu bermula pada sambungan, pengikat atau calar, bukan di tengah permukaan rata.",
    ],
    sections: [
      {
        heading: "Perbandingan tiga logam",
        blocks: [
          {
            type: "table",
            columns: ["", "Besi lembut", "Keluli tahan karat", "Aluminium"],
            rows: [
              [
                "Kos relatif",
                "Paling rendah",
                "Paling tinggi antara ketiga-tiganya bagi kebanyakan keratan",
                "Antara kedua-duanya, bergantung pada profil",
              ],
              [
                "Sifat kakisan",
                "Berkarat sebaik salutan pecah",
                "Sangat tahan kakisan; gred penting berhampiran pantai",
                "Tidak berkarat; boleh berlubang halus dalam keadaan teruk",
              ],
              [
                "Penyelenggaraan",
                "Periksa dan salut semula secara berkala; sentuh calar lebih awal",
                "Pembersihan sekali-sekala; tidak banyak lagi",
                "Pembersihan sekali-sekala",
              ],
              [
                "Fabrikasi dan pembaikan",
                "Mudah dikimpal, diubah suai dan dibaiki di tapak",
                "Boleh dikimpal tetapi lebih mencabar dan lebih mahal",
                "Kaedah sambungan berbeza; bukan sekadar dikimpal seperti keluli",
              ],
              [
                "Kegunaan biasa",
                "Pagar, grill tingkap, grill pintu, railing, rangka",
                "Railing, pemegang tangan, kerja hiasan terdedah",
                "Rangka awning, teralis ringan, rangka ringan",
              ],
              [
                "Rupa selepas beberapa tahun",
                "Bergantung sepenuhnya pada penjagaan salutan",
                "Kekal konsisten dengan usaha minimum",
                "Kekal konsisten; kemasan bergantung pada salutan",
              ],
            ],
          },
          {
            type: "callout",
            title: "\"Tahan karat\" ialah satu keluarga, bukan satu bahan",
            text: "Gred keluli tahan karat berbeza berkelakuan berbeza, dan pendedahan juga penting — kedudukan berhampiran pantai atau kerap terkena air lebih mencabar berbanding anjung terlindung. Tanya gred apa yang disebut harga, jangan terima \"tahan karat\" sebagai spesifikasi tunggal.",
          },
        ],
      },
      {
        heading: "Apa yang sebenarnya menentukan harga",
        blocks: [
          {
            type: "paragraph",
            text: "Dua sebut harga untuk bukaan pagar yang sama boleh berbeza dengan ketara, dan perbezaannya biasanya pada spesifikasi, bukan margin. Ini pemboleh ubah yang wajar ditanya:",
          },
          {
            type: "list",
            items: [
              "Saiz dan ketebalan keratan. Keratan rangka yang lebih berat lebih mahal dari segi bahan dan buruh, dan itulah perbezaan terbesar antara pagar ringan dan pagar kukuh.",
              "Kerumitan reka bentuk. Palang menegak lurus cepat disiapkan; lengkungan, panel potong laser, isian hiasan dan bahan campuran semuanya menambah jam fabrikasi.",
              "Saiz dan berat keseluruhan. Pagar lebar memerlukan rangka lebih kuat, engsel lebih berat dan tiang lebih kukuh berbanding pagar sempit.",
              "Kemasan. Primer dan cat, salutan serbuk atau kemasan keluli tahan karat digilap ialah proses berbeza dengan kos dan penyelenggaraan berbeza.",
              "Keadaan pemasangan. Memasang pada tiang konkrit yang kukuh mudah; struktur sedia ada yang lemah atau tidak tegak perlu diuruskan dahulu.",
              "Bahagian bergerak. Roda, landasan, engsel, kunci dan sebarang peruntukan untuk motor automasi menambah kos dan wajar dinyatakan, bukan diandaikan.",
            ],
          },
        ],
      },
      {
        heading: "Kadar fabrikasi kami",
        blocks: [
          {
            type: "paragraph",
            text: "Grill, pagar dan awning dikira setiap kaki persegi; railing dan pagar sempadan dikira setiap kaki panjang. Pembaikan kerja logam sedia ada ialah kerja berasingan.",
          },
          {
            type: "pricing",
            pricingIds: [
              "welding-grille-window",
              "welding-gate",
              "welding-railing",
              "welding-awning",
              "welding-repair",
            ],
          },
        ],
      },
      {
        heading: "Mengukur dan menetapkan spesifikasi sebelum memesan",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Ukur bukaan, bukan item lama",
                description:
                  "Ukur bukaan struktur di tiga tempat — grill lama mungkin dibuat untuk memenuhi pembaikan, bukan bukaan itu sendiri.",
              },
              {
                title: "Tentukan cara ia perlu dibuka",
                description:
                  "Bukaan ayun, gelongsor atau lipat mengubah rangka, perkakasan dan ruang lapang yang perlu ditinggalkan. Tentukan ini sebelum reka bentuk.",
              },
              {
                title: "Periksa tempat pemasangan",
                description:
                  "Apa yang menjadi tempat ia diikat sama pentingnya dengan item itu. Pagar berat pada tiang lemah akan menarik tiang itu, bukan menahan pagar.",
              },
              {
                title: "Pertimbangkan laluan keluar",
                description:
                  "Jika grill menutup tingkap yang menjadi sebahagian laluan keluar anda dari bangunan, rancang cara membukanya dari dalam dan bukan mengunci ia secara kekal.",
              },
              {
                title: "Persetujui kemasan dan cara menyentuh calar",
                description:
                  "Tanya sistem salutan yang digunakan dan apa yang patut anda simpan untuk menyentuh calar kemudian. Satu tin kecil sekarang menjimatkan kerja semburan semula beberapa tahun lagi.",
              },
            ],
          },
        ],
      },
      {
        heading: "Mengelakkan kerja logam daripada berkarat",
        blocks: [
          {
            type: "paragraph",
            text: "Dalam hujan dan kelembapan Malaysia, besi lembut tidak gagal secara perlahan merentasi seluruh permukaan — ia gagal pada titik tertentu. Air bertakung pada keratan mendatar, berkumpul di lubang bolt, atau masuk di bawah calar, dan karat merebak dari situ di bawah lapisan cat.",
          },
          {
            type: "list",
            items: [
              "Periksa pagar dan grill sekali atau dua kali setahun dan lihat khusus pada palang bawah, kimpalan, titik engsel dan mana-mana tempat air boleh bertakung.",
              "Sentuh serpihan dan calar sebaik anda melihatnya — keluli terdedah kepada hujan akan mula berkarat dalam beberapa hari.",
              "Pastikan tapak tiang pagar bebas daripada tanah dan tumbuhan; kelembapan berterusan pada keluli di aras tanah memendekkan hayatnya lebih daripada apa-apa di atasnya.",
              "Bilas garam dan kotoran daripada kerja logam terdedah sekali-sekala, terutamanya di kawasan pantai.",
              "Uruskan karat permukaan semasa ia masih karat permukaan. Sebaik keratan itu berlubang, pembaikannya menjadi kerja fabrikasi, bukan cat.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Bolehkah anda membaiki pagar sedia ada dan bukan menggantikannya?",
        answer:
          "Selalunya boleh. Kimpalan retak, rangka melendut, engsel patah, palang bawah rosak atau keratan dimakan karat biasanya boleh dipotong dan dibina semula di tempatnya. Penggantian munasabah apabila kakisan sudah meluas dan bukan setempat, atau apabila keratan rangka memang terlalu ringan untuk saiznya sejak awal.",
      },
      {
        question: "Adakah salutan serbuk lebih baik daripada cat?",
        answer:
          "Salutan serbuk memberi kemasan kilang yang lebih keras dan seragam, dan popular untuk fabrikasi baharu. Cat di tapak lebih mudah disentuh semula kemudian dan selalunya pilihan praktikal untuk pembaikan atau kerja yang difabrikasi dan dipasang di tempat. Kedua-duanya memerlukan keluli disediakan dengan betul dahulu — itu lebih penting daripada pilihan antara keduanya.",
      },
      {
        question: "Adakah anda memasang motor pagar automatik?",
        answer:
          "Beritahu kami pada peringkat reka bentuk jika motor dirancang atau mungkin ditambah kemudian, kerana rangka, landasan dan pengikat perlu sesuai dengannya. Kami akan sahkan apa yang boleh kami laksanakan sendiri dan apa yang memerlukan pemasang khusus untuk sistem automasi itu.",
      },
      {
        question: "Berapa lama pagar besi lembut bertahan di Malaysia?",
        answer:
          "Itu bergantung jauh lebih kepada salutan dan penyelenggaraan berbanding kepada kelulinya. Pagar yang disediakan dan disalut dengan baik serta calarnya disentuh semula bertahan lama; pagar yang sama dengan serpihan terdedah di palang bawah akan berkarat bermula dari titik itu. Kami lebih rela menerangkan apa yang perlu diselenggara daripada menerbitkan angka yang tidak boleh kami pertahankan.",
      },
      {
        question: "Bolehkah grill dibuat supaya masih boleh dibuka dari dalam?",
        answer:
          "Boleh, dan jika tingkap itu sebahagian daripada laluan anda keluar dari bangunan, kami mengesyorkannya. Beritahu kami bukaan yang mana, dan kami akan reka panel yang boleh dibuka dengan pelepas dalaman dan bukan grill yang dikunci kekal.",
      },
    ],
    closing:
      "Hantarkan ukuran bukaan, gambar kedudukannya dan nota tentang cara anda mahu ia dibuka. Kami akan menasihatkan logam dan keratan yang sesuai untuk kerja itu, dan menyebut harga berdasarkan kadar di atas.",
  },
  zh: {
    title: "Renovix Home Services | 防盗窗花、大门与栏杆金属选材指南（马来西亚）",
    metaDescription:
      "为马来西亚的窗花、大门、栏杆与雨棚比较低碳钢、不锈钢与铝材 —— 什么决定价格、各自在本地气候下如何老化，以及需要哪些保养。",
    h1: "马来西亚窗花、大门、栏杆与雨棚的金属选材",
    excerpt:
      "三种常见金属，成本与保养差异都很大。各自适合什么、报价究竟由什么决定，以及如何防止生锈。",
    question: "大门或窗花该用低碳钢、不锈钢还是铝材？",
    answer:
      "低碳钢最经济、加工最灵活，因此马来西亚多数大门与窗花都用它 —— 但必须做好涂层并定期重新涂装，因为涂层一旦失效它就会生锈。不锈钢成本高出许多，但保养需求低得多，常用于栏杆以及靠海或暴露严重的位置。铝材轻且不生锈，适合雨棚骨架与轻型花架，但在结构性能上与钢材并不等同。我们的加工费率见下文，依项目按平方尺或按尺长计价。",
    keyPoints: [
      "低碳钢：成本最低、最易加工与维修，但寿命完全取决于涂层是否得到维护。",
      "不锈钢：保养需求低得多、外观更利落，代价是材料成本明显更高。",
      "铝材：轻且不生锈，很适合雨棚骨架 —— 但不能等同替代结构用钢。",
      "价格由型材尺寸与厚度、造型复杂度、表面处理与安装方式决定，而不只是面积。",
      "在本地气候下，锈蚀几乎总是从接头、固定点或划痕开始，而不是从平面中间开始。",
    ],
    sections: [
      {
        heading: "三种金属对比",
        blocks: [
          {
            type: "table",
            columns: ["", "低碳钢", "不锈钢", "铝材"],
            rows: [
              ["相对成本", "最低", "多数型材中三者最高", "介于两者之间，视型材而定"],
              [
                "腐蚀表现",
                "涂层一旦破损即开始生锈",
                "耐蚀性强；靠海地区需注意材质等级",
                "不生锈；恶劣环境下可能出现点蚀",
              ],
              [
                "保养",
                "定期检查与重新涂装；划痕要尽早补漆",
                "偶尔清洁即可",
                "偶尔清洁即可",
              ],
              [
                "加工与维修",
                "易焊接，可现场改动与修复",
                "可焊接，但难度与成本更高",
                "连接方式不同；不能像钢材那样简单焊接",
              ],
              [
                "常见用途",
                "大门、窗花、门花、栏杆、框架",
                "栏杆、扶手、外露装饰构件",
                "雨棚骨架、轻型花架、轻质框架",
              ],
              [
                "多年后的外观",
                "完全取决于涂层维护",
                "几乎不需费力即可保持一致",
                "保持一致；外观取决于涂层",
              ],
            ],
          },
          {
            type: "callout",
            title: "「不锈钢」是一个家族，不是单一材料",
            text: "不同等级的不锈钢表现不同，暴露环境也很关键 —— 靠海或常被雨水冲刷的位置，对金属的考验远大于遮蔽良好的门廊。请询问报价所用的具体等级，不要把「不锈钢」当作完整规格。",
          },
        ],
      },
      {
        heading: "价格究竟由什么决定",
        blocks: [
          {
            type: "paragraph",
            text: "同一个门洞的两份报价可能相差不少，差异通常在规格而不是利润。以下这些变量值得您逐项询问：",
          },
          {
            type: "list",
            items: [
              "型材尺寸与厚度。更厚重的框架型材在材料与人工上都更贵，这也是轻型门与扎实门之间最大的差别。",
              "造型复杂度。竖直栏杆做起来快；弧形、激光切割板、装饰填充与混合材料都会增加加工工时。",
              "整体尺寸与重量。宽门需要更强的框架、更重的铰链与更稳固的立柱。",
              "表面处理。底漆加面漆、粉末喷涂或不锈钢抛光是不同工艺，成本与保养需求各不相同。",
              "安装条件。固定在坚实混凝土立柱上很简单；既有结构松散或不垂直，就必须先处理。",
              "活动部件。滚轮、轨道、铰链、门锁以及为自动门电机预留的部分都会增加成本，应明确写清而不是默认包含。",
            ],
          },
        ],
      },
      {
        heading: "我们的加工费率",
        blocks: [
          {
            type: "paragraph",
            text: "窗花、大门与雨棚按平方尺计价；栏杆与围栏按尺长计价。现有金属构件的维修属于另一项工作。",
          },
          {
            type: "pricing",
            pricingIds: [
              "welding-grille-window",
              "welding-gate",
              "welding-railing",
              "welding-awning",
              "welding-repair",
            ],
          },
        ],
      },
      {
        heading: "下单前的测量与规格确认",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "量门洞，而不是量旧构件",
                description:
                  "在三个位置测量结构洞口 —— 旧窗花可能是为了迁就某次修补而做，并不代表洞口真实尺寸。",
              },
              {
                title: "确定开启方式",
                description:
                  "平开、推拉还是折叠，会改变框架、五金与需要预留的净空。请在设计前先定下来。",
              },
              {
                title: "检查固定基体",
                description:
                  "固定在什么上面，与构件本身同样重要。重型大门装在松弱立柱上，结果是把立柱拉坏而不是撑住门。",
              },
              {
                title: "考虑逃生路线",
                description:
                  "若窗花覆盖的窗户是您离开建筑物的通路之一，请设计成可从室内开启，而不是永久封死。",
              },
              {
                title: "确认表面处理与补漆方案",
                description:
                  "询问使用哪种涂层系统，以及日后补划痕该备什么。现在留一小罐补漆，往后可省一次整体重喷。",
              },
            ],
          },
        ],
      },
      {
        heading: "防止金属构件生锈",
        blocks: [
          {
            type: "paragraph",
            text: "在马来西亚的多雨与高湿环境下，低碳钢不是整面缓慢劣化，而是从点开始失效。水积在水平型材上、聚在螺栓孔处，或从划痕渗入，锈就从那里在漆膜下向外扩散。",
          },
          {
            type: "list",
            items: [
              "每年检查大门与窗花一到两次，重点看底横杆、焊缝、铰链处以及任何会积水的位置。",
              "一发现掉漆与划痕就补漆 —— 裸露的钢材遇雨，几天内就会开始生锈。",
              "让门柱根部远离泥土与植物；地面处长期潮湿对钢材寿命的损害，超过上方任何部位。",
              "偶尔冲洗外露金属上的盐分与污垢，靠海地区尤其如此。",
              "在还是表面锈时就处理。一旦型材出现点蚀凹坑，维修就从补漆变成了加工重做。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "现有大门可以维修而不必更换吗？",
        answer:
          "通常可以。焊缝开裂、框架下垂、铰链损坏、底横杆受损或某段被锈蚀吃穿，多数都能切除后就地重做。当腐蚀已经普遍而非局部，或原本框架型材对该尺寸就偏轻时，更换才更合理。",
      },
      {
        question: "粉末喷涂比刷漆更好吗？",
        answer:
          "粉末喷涂能得到更硬、更均匀的工厂饰面，常用于新制构件。现场刷漆则日后更容易补漆，对维修或就地加工安装的构件往往更实用。两者都要求先把钢材基面处理到位 —— 那比在两者之间选哪个更重要。",
      },
      {
        question: "你们安装自动门电机吗？",
        answer:
          "若已计划或日后可能加装电机，请在设计阶段告知，因为框架、轨道与固定件都要相应配合。我们会明确说明哪些由我们施工，哪些自动化部分需要专业安装商处理。",
      },
      {
        question: "低碳钢大门在马来西亚能用多久？",
        answer:
          "这更取决于涂层与保养，而不是钢材本身。基面处理与涂装到位、划痕及时修补的大门可以用很久；同一扇门若底横杆一直有裸露掉漆，就会从那些点开始生锈。比起给一个我们无法担保的数字，我们更愿意说明该维护什么。",
      },
      {
        question: "窗花可以做成室内仍能打开的吗？",
        answer:
          "可以，而且如果该窗户是您离开建筑物的通路之一，我们会建议这么做。请告诉我们是哪些开口，我们会设计带室内开启装置的可开启扇，而不是永久固定死。",
      },
    ],
    closing:
      "请把洞口尺寸、安装位置的照片，以及您希望的开启方式发给我们。我们会建议适合的金属与型材，并依上述费率报价。",
  },
};
