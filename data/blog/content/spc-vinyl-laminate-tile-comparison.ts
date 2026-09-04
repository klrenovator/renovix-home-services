import type { ArticleDefinition } from "../types";

/**
 * Backlog item 4 — material guide: SPC vs vinyl vs laminate vs tile.
 * Decision-guide intent feeding the flooring and tiling pillars.
 */
export const spcVinylLaminateTileComparison: ArticleDefinition = {
  slug: "spc-vinyl-laminate-tile-comparison",
  category: "materials",
  intents: [
    "material-comparison",
    "decision-guide",
    "cost",
    "lifespan",
    "installation",
  ],
  published: "2026-09-04",
  relatedServices: ["flooring", "tiling", "general-renovation"],
  relatedSubServices: ["floor-tile-installation"],
  relatedProblems: [
    "uneven-tiles",
    "hollow-tile-problems",
    "water-seepage-through-tiles",
    "kitchen-tile-problems",
  ],
  relatedLocations: [
    "selangor/kota-damansara",
    "selangor/cyberjaya",
    "kuala-lumpur/bukit-jalil",
    "kuala-lumpur/desa-parkcity",
  ],
  relatedProjects: ["marble-look-floor-tiling", "floor-tile-removal-hacking"],
  pricingIds: [
    "flooring-spc",
    "flooring-vinyl",
    "flooring-laminate",
    "tiling-floor-ceramic",
    "tiling-porcelain",
    "flooring-hacking",
    "tiling-hacking",
  ],
  en: {
    title: "Renovix Home Services | SPC vs Vinyl vs Laminate vs Tile — Flooring Guide (Malaysia)",
    metaDescription:
      "SPC, vinyl, laminate and tile compared for Malaysian homes — water resistance, wear, noise, subfloor needs, installation speed and installed rates. Choose with your rooms in mind.",
    h1: "SPC vs Vinyl vs Laminate vs Tile: Choosing Flooring for a Malaysian Home",
    excerpt:
      "Four floor types, four different jobs. What each one handles well, where each one fails, and how to match them to the rooms in a Klang Valley home.",
    question: "Which flooring is best for a Malaysian home — SPC, vinyl, laminate or tile?",
    answer:
      "For wet and semi-wet areas — bathrooms, kitchens, yards, balconies — tile remains the right answer because it is unaffected by standing water. For bedrooms, living rooms and offices, SPC is the safest all-rounder in Malaysia's humidity: it is rigid, dimensionally stable and water-resistant. Vinyl is the thinnest and most forgiving over an existing sound floor, and laminate gives the most convincing timber look but is the least tolerant of water, so it belongs only in dry rooms. Installed rates for all four are in the table below.",
    keyPoints: [
      "Tile is the only one of the four that belongs in a wet area with a floor trap.",
      "SPC is rigid and stable, which is why it copes with Malaysian heat and humidity better than laminate.",
      "Laminate swells irreversibly once water gets into the core — one burst hose or one flooded balcony door ruins a room.",
      "Vinyl and SPC can often be laid over a sound existing floor, avoiding hacking cost and debris.",
      "The subfloor decides the outcome for all four: an uneven base shows through thin flooring and cracks rigid flooring.",
    ],
    sections: [
      {
        heading: "The four options at a glance",
        blocks: [
          {
            type: "table",
            columns: ["", "SPC", "Vinyl", "Laminate", "Tile"],
            rows: [
              [
                "Core",
                "Rigid stone-plastic composite",
                "Flexible PVC sheet or plank",
                "Compressed wood fibre (HDF)",
                "Ceramic or porcelain",
              ],
              [
                "Water",
                "Water-resistant; surface spills fine",
                "Water-resistant; seams are the weak point",
                "Poor — the core swells and cannot be reversed",
                "Unaffected; the only wet-area choice",
              ],
              [
                "Underfoot",
                "Firm, slightly warm, quiet with underlay",
                "Softest and quietest",
                "Firm, can sound hollow",
                "Hard and cool — an advantage in our climate",
              ],
              [
                "Subfloor tolerance",
                "Needs a reasonably flat base; bridges minor defects",
                "Follows the base — every bump telegraphs through",
                "Needs a flat base and expansion gaps",
                "Levelled and screeded as part of the job",
              ],
              [
                "Typical life in a home",
                "Long, in dry and semi-dry rooms",
                "Moderate; wear layer decides it",
                "Shortest in humid conditions",
                "Longest by a wide margin",
              ],
              [
                "Best rooms",
                "Bedrooms, living, study, office",
                "Rentals, bedrooms, light-traffic rooms",
                "Dry bedrooms only",
                "Bathrooms, kitchens, yards, entrances, whole homes",
              ],
            ],
          },
        ],
      },
      {
        heading: "Installed rates",
        blocks: [
          {
            type: "paragraph",
            text: "These are our published starting rates per square foot for installation. Where an old floor has to come up first, hacking and disposal are separate rows rather than a hidden line item.",
          },
          {
            type: "pricing",
            pricingIds: [
              "flooring-spc",
              "flooring-vinyl",
              "flooring-laminate",
              "tiling-floor-ceramic",
              "tiling-porcelain",
            ],
          },
          {
            type: "paragraph",
            text: "Removal of the existing floor, when it is needed:",
          },
          { type: "pricing", pricingIds: ["flooring-hacking", "tiling-hacking"] },
          {
            type: "callout",
            title: "Overlay can save the hacking cost",
            text: "SPC and vinyl can often be laid over an existing tiled or screeded floor if it is sound, flat and dry. That removes hacking, debris disposal and several noisy days from the project — but it raises the finished floor level, so doors and thresholds have to be checked first.",
          },
        ],
      },
      {
        heading: "How to choose room by room",
        blocks: [
          {
            type: "list",
            items: [
              "Bathrooms, yards, wet kitchens and open balconies: tile, over a proper waterproofing membrane. No click-lock floor belongs where there is a floor trap.",
              "Dry kitchens and dining: tile if you want the easiest cleaning and no worry about spills; SPC if you prefer a warmer, quieter surface and the space stays genuinely dry.",
              "Living rooms: any of the four works. Tile suits our climate and heavy traffic; SPC suits a softer, quieter feel and a faster installation.",
              "Bedrooms and study rooms: SPC or vinyl, for warmth and quiet. Laminate is acceptable here if the room never gets wet.",
              "Rented units: SPC or vinyl, because they install quickly between tenancies and individual planks can be replaced.",
              "Ground floors with historic damp: tile. Moisture rising through a slab will destroy any timber-core product.",
            ],
          },
        ],
      },
      {
        heading: "The subfloor decides the result",
        blocks: [
          {
            type: "paragraph",
            text: "Most flooring complaints are not about the material — they are about what it was laid on. Thin vinyl mirrors every bump underneath it. Rigid SPC bridges small defects but rocks and clicks over a badly uneven base. Tile laid over a poorly prepared bed goes hollow and eventually cracks. Whatever you choose, the preparation is not the part to economise on.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Check flatness",
                description:
                  "A long straightedge across the room will show the dips. Small variations can be self-levelled; a badly out-of-level slab needs screeding first.",
              },
              {
                title: "Check moisture",
                description:
                  "A slab that has ever shown damp needs the source addressed before any floor covers it, particularly on ground floors and after a leak.",
              },
              {
                title: "Check the existing floor's adhesion",
                description:
                  "Tapping across old tiles reveals hollow spots. Overlaying onto loose tiles simply transfers the problem to the new floor.",
              },
              {
                title: "Check heights and thresholds",
                description:
                  "Overlaying raises the floor. Door leaves, wardrobe doors and thresholds to wet areas all have to still work afterwards.",
              },
            ],
          },
        ],
      },
      {
        heading: "Honest disadvantages of each",
        blocks: [
          {
            type: "list",
            items: [
              "SPC: joints are visible in strong side light, and a rigid plank floor still needs an expansion gap around the perimeter. Very heavy point loads can dent a thin wear layer.",
              "Vinyl: the wear layer is what you are really buying. A thin one scuffs quickly under furniture and pet claws, and seams are where water eventually gets in.",
              "Laminate: superb appearance, poor with water. Once the core swells the plank is finished — it cannot be dried out and re-flattened.",
              "Tile: hard, cold and unforgiving to dropped glassware; grout lines need occasional maintenance; and installation is slower and messier than a click-lock overlay.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can SPC or vinyl be installed in a bathroom?",
        answer:
          "We do not recommend it. Those rooms have a floor trap, constant standing water and a waterproofing membrane that has to be tiled over. Tile is the correct finish there, and using a click-lock floor instead simply moves the problem to the joints.",
      },
      {
        question: "Do I have to hack the old tiles before laying SPC?",
        answer:
          "Not always. If the existing floor is sound, flat, dry and firmly bonded, SPC can be laid over it — which saves the hacking, the debris and several days. If the tiles are hollow, cracked or uneven, they come up first.",
      },
      {
        question: "Which flooring is quietest for a condominium?",
        answer:
          "Vinyl is the softest underfoot, and SPC with a proper underlay is close behind. Tile transmits the most impact noise. Some buildings have their own rules on flooring and underlay in upper-floor units, so check your management's renovation guidelines before ordering.",
      },
      {
        question: "How long does each type take to install?",
        answer:
          "Click-lock floors over a prepared, sound base are the quickest — often a room a day. Tiling is slower because of setting out, cutting, adhesive and grouting cure times, and slower again if the old floor has to be hacked and the base re-screeded.",
      },
      {
        question: "Is laminate ever the right choice in Malaysia?",
        answer:
          "In a genuinely dry, air-conditioned bedroom or study it looks excellent and performs well. The problem is not the humidity in the air but liquid water — one overflowing air-conditioner tray or a wind-driven balcony spill is enough to swell the core permanently.",
      },
    ],
    closing:
      "Tell us the rooms, the approximate area and what is on the floor now — a photograph of the existing surface helps. We will tell you which of the four suits each room and whether the old floor can stay.",
  },
  ms: {
    title: "Renovix Home Services | SPC vs Vinil vs Laminat vs Jubin — Panduan Lantai (Malaysia)",
    metaDescription:
      "Perbandingan SPC, vinil, laminat dan jubin untuk rumah di Malaysia — ketahanan air, haus, bunyi, keperluan lantai asas, kelajuan pemasangan dan kadar pemasangan.",
    h1: "SPC vs Vinil vs Laminat vs Jubin: Memilih Lantai untuk Rumah di Malaysia",
    excerpt:
      "Empat jenis lantai, empat tugas berbeza. Apa kelebihan setiap satu, di mana ia gagal, dan cara memadankannya dengan bilik di rumah Lembah Klang.",
    question: "Lantai mana terbaik untuk rumah di Malaysia — SPC, vinil, laminat atau jubin?",
    answer:
      "Untuk kawasan basah dan separa basah — bilik air, dapur basah, ruang jemur, balkoni — jubin kekal jawapan yang betul kerana ia tidak terjejas oleh air bertakung. Untuk bilik tidur, ruang tamu dan pejabat, SPC ialah pilihan serba boleh paling selamat dalam kelembapan Malaysia: ia tegar, stabil dari segi dimensi dan tahan air. Vinil paling nipis dan paling memaafkan apabila dipasang di atas lantai sedia ada yang kukuh, manakala laminat memberi rupa kayu paling meyakinkan tetapi paling lemah terhadap air, jadi ia hanya sesuai untuk bilik kering. Kadar pemasangan bagi keempat-empatnya ada dalam jadual di bawah.",
    keyPoints: [
      "Jubin sahaja antara keempat-empat ini yang sesuai untuk kawasan basah yang mempunyai perangkap lantai.",
      "SPC tegar dan stabil, sebab itu ia menghadapi haba dan kelembapan Malaysia lebih baik daripada laminat.",
      "Laminat membengkak secara kekal apabila air masuk ke terasnya — satu hos pecah atau satu pintu balkoni banjir sudah merosakkan satu bilik.",
      "Vinil dan SPC selalunya boleh dipasang di atas lantai sedia ada yang kukuh, menjimatkan kos pemecahan dan sisa binaan.",
      "Lantai asas menentukan hasil untuk keempat-empatnya: permukaan tidak rata akan menampakkan kesan pada lantai nipis dan meretakkan lantai tegar.",
    ],
    sections: [
      {
        heading: "Empat pilihan secara ringkas",
        blocks: [
          {
            type: "table",
            columns: ["", "SPC", "Vinil", "Laminat", "Jubin"],
            rows: [
              [
                "Teras",
                "Komposit batu-plastik tegar",
                "Kepingan atau papan PVC fleksibel",
                "Gentian kayu termampat (HDF)",
                "Seramik atau porselin",
              ],
              [
                "Air",
                "Tahan air; tumpahan permukaan tiada masalah",
                "Tahan air; sambungan ialah titik lemah",
                "Lemah — teras membengkak dan tidak boleh dipulihkan",
                "Tidak terjejas; satu-satunya pilihan kawasan basah",
              ],
              [
                "Rasa pijakan",
                "Kukuh, sedikit hangat, senyap dengan lapisan bawah",
                "Paling lembut dan paling senyap",
                "Kukuh, boleh berbunyi kosong",
                "Keras dan sejuk — kelebihan dalam iklim kita",
              ],
              [
                "Toleransi lantai asas",
                "Perlu asas agak rata; menutup kecacatan kecil",
                "Mengikut asas — setiap bonjolan akan kelihatan",
                "Perlu asas rata dan ruang pengembangan",
                "Diratakan dan discreed sebagai sebahagian kerja",
              ],
              [
                "Jangka hayat biasa di rumah",
                "Panjang, dalam bilik kering dan separa kering",
                "Sederhana; ditentukan lapisan haus",
                "Paling pendek dalam keadaan lembap",
                "Paling panjang dengan jarak jauh",
              ],
              [
                "Bilik paling sesuai",
                "Bilik tidur, ruang tamu, bilik belajar, pejabat",
                "Unit sewa, bilik tidur, bilik trafik ringan",
                "Bilik tidur kering sahaja",
                "Bilik air, dapur, ruang jemur, pintu masuk, seluruh rumah",
              ],
            ],
          },
        ],
      },
      {
        heading: "Kadar pemasangan",
        blocks: [
          {
            type: "paragraph",
            text: "Ini kadar permulaan rasmi kami bagi setiap kaki persegi untuk pemasangan. Jika lantai lama perlu dibuang dahulu, kerja memecah dan pelupusan ialah baris berasingan, bukan item tersembunyi.",
          },
          {
            type: "pricing",
            pricingIds: [
              "flooring-spc",
              "flooring-vinyl",
              "flooring-laminate",
              "tiling-floor-ceramic",
              "tiling-porcelain",
            ],
          },
          { type: "paragraph", text: "Pembuangan lantai sedia ada, apabila ia diperlukan:" },
          { type: "pricing", pricingIds: ["flooring-hacking", "tiling-hacking"] },
          {
            type: "callout",
            title: "Pemasangan atas lantai lama menjimatkan kos pemecahan",
            text: "SPC dan vinil selalunya boleh dipasang di atas lantai berjubin atau berscreed sedia ada jika ia kukuh, rata dan kering. Itu menghapuskan kerja memecah, pelupusan sisa dan beberapa hari kerja bising — tetapi ia menaikkan aras lantai siap, jadi pintu dan ambang perlu diperiksa dahulu.",
          },
        ],
      },
      {
        heading: "Cara memilih mengikut bilik",
        blocks: [
          {
            type: "list",
            items: [
              "Bilik air, ruang jemur, dapur basah dan balkoni terbuka: jubin, di atas membran kalis air yang betul. Tiada lantai kunci-klik yang sesuai di tempat yang ada perangkap lantai.",
              "Dapur kering dan ruang makan: jubin jika anda mahu pembersihan paling mudah tanpa risau tumpahan; SPC jika anda lebih suka permukaan lebih hangat dan senyap serta ruang itu benar-benar kering.",
              "Ruang tamu: mana-mana antara empat ini sesuai. Jubin sesuai dengan iklim kita dan trafik tinggi; SPC memberi rasa lebih lembut dan pemasangan lebih cepat.",
              "Bilik tidur dan bilik belajar: SPC atau vinil, untuk kehangatan dan kesenyapan. Laminat boleh diterima di sini jika bilik itu tidak pernah basah.",
              "Unit disewakan: SPC atau vinil, kerana ia cepat dipasang antara penyewa dan papan individu boleh diganti.",
              "Tingkat bawah dengan sejarah lembap: jubin. Kelembapan yang naik melalui lantai konkrit akan merosakkan mana-mana produk berteras kayu.",
            ],
          },
        ],
      },
      {
        heading: "Lantai asas menentukan hasilnya",
        blocks: [
          {
            type: "paragraph",
            text: "Kebanyakan aduan tentang lantai bukan berpunca daripada bahan — tetapi daripada apa yang ada di bawahnya. Vinil nipis menampakkan setiap bonjolan di bawahnya. SPC tegar menutup kecacatan kecil tetapi bergoyang dan berbunyi di atas asas yang teruk tidak rata. Jubin yang dipasang di atas alas yang tidak disediakan dengan baik akan berongga dan akhirnya retak. Apa pun pilihan anda, kerja persediaan bukan bahagian untuk dijimatkan.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Periksa kerataan",
                description:
                  "Pembaris panjang merentasi bilik akan menunjukkan bahagian lekuk. Perbezaan kecil boleh diratakan sendiri; lantai konkrit yang teruk senget perlu discreed dahulu.",
              },
              {
                title: "Periksa kelembapan",
                description:
                  "Lantai konkrit yang pernah menunjukkan tanda lembap perlu diuruskan puncanya sebelum ditutup lantai baharu, terutamanya di tingkat bawah dan selepas kebocoran.",
              },
              {
                title: "Periksa lekatan lantai sedia ada",
                description:
                  "Mengetuk permukaan jubin lama akan mendedahkan bahagian berongga. Memasang di atas jubin longgar hanya memindahkan masalah kepada lantai baharu.",
              },
              {
                title: "Periksa ketinggian dan ambang",
                description:
                  "Pemasangan atas lantai lama menaikkan aras. Daun pintu, pintu almari dan ambang ke kawasan basah semuanya perlu masih berfungsi selepas itu.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kelemahan jujur setiap satu",
        blocks: [
          {
            type: "list",
            items: [
              "SPC: sambungan kelihatan di bawah cahaya sisi yang kuat, dan lantai papan tegar tetap memerlukan ruang pengembangan di keliling. Beban titik yang sangat berat boleh melekukkan lapisan haus yang nipis.",
              "Vinil: lapisan haus itulah yang sebenarnya anda beli. Lapisan nipis cepat calar akibat perabot dan kuku haiwan peliharaan, dan sambungan ialah tempat air akhirnya masuk.",
              "Laminat: rupa sangat baik, tetapi lemah dengan air. Sebaik teras membengkak, papan itu tamat riwayatnya — ia tidak boleh dikeringkan dan diratakan semula.",
              "Jubin: keras, sejuk dan tidak memaafkan kaca yang terjatuh; garisan grout perlu penyelenggaraan sekali-sekala; dan pemasangannya lebih lambat serta lebih berselerak berbanding pemasangan kunci-klik.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Bolehkah SPC atau vinil dipasang di bilik air?",
        answer:
          "Kami tidak mengesyorkannya. Bilik itu mempunyai perangkap lantai, air bertakung berterusan dan membran kalis air yang perlu ditutup dengan jubin. Jubin ialah kemasan yang betul di situ, dan menggunakan lantai kunci-klik hanya memindahkan masalah kepada sambungan.",
      },
      {
        question: "Perlukah saya memecah jubin lama sebelum memasang SPC?",
        answer:
          "Tidak semestinya. Jika lantai sedia ada kukuh, rata, kering dan melekat kemas, SPC boleh dipasang di atasnya — menjimatkan kerja memecah, sisa binaan dan beberapa hari. Jika jubin berongga, retak atau tidak rata, ia perlu dibuang dahulu.",
      },
      {
        question: "Lantai mana paling senyap untuk kondominium?",
        answer:
          "Vinil paling lembut dipijak, dan SPC dengan lapisan bawah yang betul hampir setanding. Jubin menghantar paling banyak bunyi hentakan. Sesetengah bangunan mempunyai peraturan sendiri mengenai lantai dan lapisan bawah bagi unit tingkat atas, jadi semak garis panduan renovasi pengurusan anda sebelum membuat pesanan.",
      },
      {
        question: "Berapa lama masa pemasangan setiap jenis?",
        answer:
          "Lantai kunci-klik di atas asas yang telah disediakan paling cepat — selalunya satu bilik sehari. Kerja jubin lebih lambat kerana penyusunan, pemotongan, pelekat dan masa pengerasan grout, dan lebih lambat lagi jika lantai lama perlu dipecah dan asasnya discreed semula.",
      },
      {
        question: "Adakah laminat pernah menjadi pilihan tepat di Malaysia?",
        answer:
          "Dalam bilik tidur atau bilik belajar berhawa dingin yang benar-benar kering, ia kelihatan sangat baik dan berfungsi dengan baik. Masalahnya bukan kelembapan udara tetapi air cecair — satu dulang penghawa dingin melimpah atau tempias balkoni sudah cukup untuk membengkakkan terasnya secara kekal.",
      },
    ],
    closing:
      "Beritahu kami bilik yang terlibat, anggaran keluasan dan apa yang ada di lantai sekarang — gambar permukaan sedia ada amat membantu. Kami akan beritahu antara empat pilihan itu yang sesuai untuk setiap bilik dan sama ada lantai lama boleh dikekalkan.",
  },
  zh: {
    title: "Renovix Home Services | SPC、卷材胶地板、强化木地板与瓷砖对比（马来西亚）",
    metaDescription:
      "为马来西亚住宅比较 SPC、胶地板、强化木地板与瓷砖 —— 防水性、耐磨性、脚步声、基层要求、施工速度与安装费率。",
    h1: "SPC、胶地板、强化木地板与瓷砖：马来西亚住宅地面材料怎么选",
    excerpt:
      "四种地板，四种用途。各自擅长什么、在哪里会失败，以及如何依巴生谷住宅的房间来搭配。",
    question: "马来西亚住宅该选哪种地板 —— SPC、胶地板、强化木地板还是瓷砖？",
    answer:
      "潮湿与半潮湿区域 —— 浴室、湿厨房、晒衣区、阳台 —— 瓷砖仍是正确答案，因为它不受积水影响。卧室、客厅与办公空间，SPC 是马来西亚湿热气候下最稳妥的全能选择：刚性好、尺寸稳定、防水。胶地板最薄，铺在状况良好的旧地面上最省事；强化木地板的木纹质感最好，但最怕水，只适合干区。四者的安装费率见下表。",
    keyPoints: [
      "四者之中，只有瓷砖适合用在设有地漏的潮湿区域。",
      "SPC 刚性强、尺寸稳定，因此比强化木地板更能应对马来西亚的高温高湿。",
      "强化木地板一旦芯层进水就会不可逆膨胀 —— 一次水管爆裂或阳台门进水就毁掉一整个房间。",
      "胶地板与 SPC 通常可以直接铺在牢固的旧地面上，省下打拆费用与建筑垃圾。",
      "基层决定四者的成败：基面不平会在薄型地板上显形，也会让刚性地板开裂。",
    ],
    sections: [
      {
        heading: "四种选择一览",
        blocks: [
          {
            type: "table",
            columns: ["", "SPC", "胶地板", "强化木地板", "瓷砖"],
            rows: [
              ["芯材", "刚性石塑复合", "柔性 PVC 卷材或片材", "高密度木纤维板（HDF）", "陶瓷或瓷质砖"],
              [
                "遇水",
                "防水；表面泼溅无碍",
                "防水；接缝是薄弱点",
                "差 —— 芯层膨胀且无法恢复",
                "不受影响；潮湿区唯一选择",
              ],
              [
                "脚感",
                "扎实、略暖，配衬垫后安静",
                "最柔软、最安静",
                "扎实，可能有空响",
                "硬且凉 —— 在我们的气候里是优点",
              ],
              [
                "基层容忍度",
                "需较平整基面；可跨越细微缺陷",
                "完全跟随基面 —— 每处凸起都会显形",
                "需平整基面并预留伸缩缝",
                "找平与砂浆层属于施工的一部分",
              ],
              [
                "住宅内的一般寿命",
                "干区与半干区可用很久",
                "中等；取决于耐磨层",
                "在潮湿环境中最短",
                "远长于其他三者",
              ],
              [
                "最适合的空间",
                "卧室、客厅、书房、办公室",
                "出租单位、卧室、轻度使用空间",
                "仅限干燥卧室",
                "浴室、厨房、晒衣区、玄关、全屋",
              ],
            ],
          },
        ],
      },
      {
        heading: "安装费率",
        blocks: [
          {
            type: "paragraph",
            text: "以下是我们每平方尺的公开安装起价。若需先拆除旧地面，打拆与清运会单独列项，而不是藏在总价里。",
          },
          {
            type: "pricing",
            pricingIds: [
              "flooring-spc",
              "flooring-vinyl",
              "flooring-laminate",
              "tiling-floor-ceramic",
              "tiling-porcelain",
            ],
          },
          { type: "paragraph", text: "如需拆除现有地面：" },
          { type: "pricing", pricingIds: ["flooring-hacking", "tiling-hacking"] },
          {
            type: "callout",
            title: "直接覆铺可省下打拆费用",
            text: "若现有瓷砖或水泥地面牢固、平整且干燥，SPC 与胶地板通常可以直接覆铺其上。这样可省去打拆、垃圾清运与好几天的噪音施工 —— 但完成面会抬高，因此要先确认门扇与门槛。",
          },
        ],
      },
      {
        heading: "按房间选择",
        blocks: [
          {
            type: "list",
            items: [
              "浴室、晒衣区、湿厨房与开放阳台：瓷砖，铺在合格的防水层之上。任何锁扣地板都不该出现在有地漏的空间。",
              "干厨房与餐厅：追求最好清洁、不担心泼溅就选瓷砖；偏好更温润安静的脚感且空间确实保持干燥，就选 SPC。",
              "客厅：四者皆可。瓷砖契合我们的气候与高频使用；SPC 则脚感更柔和、施工更快。",
              "卧室与书房：SPC 或胶地板，兼顾温润与安静。若房间从不会进水，强化木地板也可接受。",
              "出租单位：SPC 或胶地板，换租时施工快，单片损坏也能更换。",
              "曾有返潮问题的一楼：瓷砖。从楼板上返的湿气会毁掉任何木芯类产品。",
            ],
          },
        ],
      },
      {
        heading: "基层决定最终效果",
        blocks: [
          {
            type: "paragraph",
            text: "多数地板投诉不是材料问题，而是铺在什么上面的问题。薄型胶地板会映出下面每一处凸起。刚性 SPC 能跨越细小缺陷，但在严重不平的基面上会翘动、发出咔哒声。铺在处理不当的砂浆层上的瓷砖会空鼓，最终开裂。无论选哪一种，基层处理都不是该省的部分。",
          },
          {
            type: "steps",
            items: [
              {
                title: "检查平整度",
                description:
                  "用长靠尺横跨房间即可看出凹陷。细微差异可用自流平处理；严重不平的楼板需要先做砂浆找平。",
              },
              {
                title: "检查含水情况",
                description:
                  "凡是出现过返潮的楼板，都必须先处理源头再铺地板，一楼与漏水修复后的空间尤其如此。",
              },
              {
                title: "检查旧地面的粘结",
                description:
                  "敲击旧瓷砖可查出空鼓处。在松动瓷砖上覆铺，只是把问题转移到新地板上。",
              },
              {
                title: "检查高度与门槛",
                description:
                  "覆铺会抬高地面。门扇、衣柜门以及通往潮湿区的门槛，都必须在施工后仍能正常使用。",
              },
            ],
          },
        ],
      },
      {
        heading: "各自的实话短板",
        blocks: [
          {
            type: "list",
            items: [
              "SPC：强侧光下能看到拼缝，刚性板材周边仍需预留伸缩缝。极重的点荷载可能压伤较薄的耐磨层。",
              "胶地板：您真正买的是耐磨层。太薄的耐磨层在家具与宠物爪下很快起毛刺，接缝也是水最终渗入的地方。",
              "强化木地板：外观出色，怕水。芯层一旦膨胀就报废 —— 无法烘干后再压平。",
              "瓷砖：硬、凉，掉落玻璃器皿容易碎；填缝需要定期保养；施工也比锁扣覆铺更慢、更凌乱。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "浴室可以铺 SPC 或胶地板吗？",
        answer:
          "我们不建议。那里有地漏、长期积水，还有必须由瓷砖覆盖的防水层。瓷砖才是正确的饰面，改用锁扣地板只是把问题转移到接缝上。",
      },
      {
        question: "铺 SPC 前一定要打掉旧瓷砖吗？",
        answer:
          "不一定。如果现有地面牢固、平整、干燥且粘结良好，SPC 可以直接覆铺 —— 省下打拆、垃圾清运与好几天工期。如果瓷砖空鼓、开裂或不平，就必须先拆除。",
      },
      {
        question: "公寓里哪种地板最安静？",
        answer:
          "胶地板脚感最柔软，SPC 配合合适衬垫也很接近。瓷砖传递的撞击噪音最大。部分大楼对高楼层单位的地板与衬垫另有规定，下单前请先查阅管理处的装修指南。",
      },
      {
        question: "各类地板的施工要多久？",
        answer:
          "在已处理好的牢固基面上铺锁扣地板最快 —— 通常一天一个房间。铺砖较慢，需要放线、切割、粘结剂与填缝养护时间；若还要打掉旧地面并重做砂浆层，则更慢。",
      },
      {
        question: "在马来西亚，强化木地板有合适的场合吗？",
        answer:
          "在确实干燥、有空调的卧室或书房里，它外观出色、表现也好。问题不在空气湿度，而在液态水 —— 一次空调接水盘溢流或阳台飘雨进水，就足以让芯层永久膨胀。",
      },
    ],
    closing:
      "告诉我们涉及哪些房间、大致面积，以及现在的地面是什么 —— 一张现况照片很有帮助。我们会告诉您每个房间适合哪一种，以及旧地面能否保留。",
  },
};
