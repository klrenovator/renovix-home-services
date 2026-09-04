import type { ArticleDefinition } from "../types";

/**
 * Backlog item 6 — comparison: cementitious vs PU vs torch-on waterproofing.
 * Supports the waterproofing pillar; the systems described are the ones
 * already named on that pillar page.
 */
export const waterproofingSystemsCompared: ArticleDefinition = {
  slug: "waterproofing-systems-compared",
  category: "materials",
  intents: ["material-comparison", "decision-guide", "lifespan", "installation"],
  published: "2026-09-04",
  relatedServices: ["waterproofing", "tiling", "ceiling-partition", "painting"],
  relatedSubServices: ["bathroom-waterproofing"],
  relatedProblems: [
    "roof-leakage",
    "bathroom-leakage",
    "balcony-leakage",
    "wall-seepage",
    "damp-walls",
    "water-stains",
  ],
  relatedLocations: [
    "kuala-lumpur/cheras",
    "kuala-lumpur/kepong",
    "selangor/klang",
    "selangor/rawang",
    "selangor/setia-alam",
    "selangor/bandar-mahkota-cheras",
  ],
  relatedProjects: [],
  pricingIds: [
    "waterproofing-bathroom-hack",
    "waterproofing-flat-roof",
    "waterproofing-balcony",
    "waterproofing-wall-seepage",
    "waterproofing-pu-injection",
  ],
  en: {
    title: "Renovix Home Services | Cementitious vs PU vs Torch-On Waterproofing (Malaysia)",
    metaDescription:
      "Which waterproofing system suits your bathroom, balcony, flat roof or external wall in Malaysia — cementitious, PU coating, torch-on membrane or PU injection. Rates and honest limits.",
    h1: "Cementitious vs PU vs Torch-On Waterproofing: Which System for Which Surface",
    excerpt:
      "Waterproofing is not one product. Matching the system to the surface — and to whether it will be tiled, walked on or exposed to sun — is what decides how long it lasts.",
    question: "Which waterproofing system should I use — cementitious, PU or torch-on?",
    answer:
      "Use cementitious waterproofing under tiles in wet areas such as bathrooms, because it bonds to the screed and tile adhesive sticks to it. Use a PU or acrylic liquid membrane on exposed surfaces that flex and sit in the sun, such as balconies and some flat roofs, because it stays elastic. Use torch-on bituminous membrane on larger flat roofs that need a thick, robust, fully sealed sheet. PU injection is not a membrane at all — it is a targeted repair that seals a specific crack or ingress point from within the concrete. Our rates for each are below.",
    keyPoints: [
      "Cementitious systems are the standard under tiles — they bond to the substrate and are tileable.",
      "PU and acrylic liquid membranes stay flexible, so they handle sun-exposed surfaces that move.",
      "Torch-on membrane is a thick sheet system best suited to larger flat roof areas.",
      "PU injection fixes a specific leak path; it does not waterproof a whole surface.",
      "Preparation and detailing — falls, upstands, corners, floor traps — matter more than the brand of product.",
    ],
    sections: [
      {
        heading: "The systems compared",
        blocks: [
          {
            type: "table",
            columns: ["System", "How it works", "Where it belongs", "Honest limits"],
            rows: [
              [
                "Cementitious",
                "Cement-based slurry brushed or trowelled onto the screed, bonding to it",
                "Bathrooms, wet kitchens, yards, anywhere that will be tiled over",
                "Rigid — it does not bridge a moving crack, and it is not designed to sit exposed to sunlight",
              ],
              [
                "PU / acrylic liquid membrane",
                "Liquid coating that cures into a continuous elastic film",
                "Balconies, exposed slabs, some flat roofs, planter boxes",
                "Needs a clean, dry, properly prepared base; UV performance depends on the product and on being applied at the right thickness",
              ],
              [
                "Torch-on bituminous membrane",
                "Rolled bituminous sheet melted onto the substrate with a torch",
                "Larger flat roofs and areas needing a thick, robust sheet",
                "Requires open-flame work and skilled lapping; not suited to small, intricate internal areas",
              ],
              [
                "PU injection",
                "Resin injected into a crack, expanding to seal the water path",
                "A specific, identified leak point — a slab crack, a construction joint, a ceiling ingress",
                "Repairs one path only; it is not a substitute for waterproofing a surface",
              ],
              [
                "External wall coating",
                "Elastomeric coating applied to a prepared external wall",
                "Wall seepage and rain-driven damp on the outside face",
                "Only works if the source is the wall face — not if water is arriving from a leaking pipe or roof",
              ],
            ],
          },
        ],
      },
      {
        heading: "Choosing by surface",
        blocks: [
          {
            type: "list",
            items: [
              "Bathroom floor and wet walls: cementitious membrane over a properly falled screed, flood tested, then tiled. This is the standard for a reason — the tile adhesive needs something to bond to.",
              "Balcony: a flexible liquid membrane where the surface is exposed and moves with the heat, or a cementitious system if it will be tiled over. The critical detail is the upstand at the door threshold.",
              "Flat roof: torch-on for larger areas needing a robust sheet; liquid membrane where the geometry is complicated with many upstands and penetrations.",
              "External wall with seepage: an elastomeric coating after the cracks are treated — but only once you are sure the water is coming through the wall face and not from a pipe or the roof above.",
              "A single identified crack leaking into a ceiling: PU injection, which seals the path without opening the whole slab.",
            ],
          },
          {
            type: "callout",
            title: "The system matters less than the detailing",
            text: "Most failures we are called to are not product failures. They are at the edges: no upstand behind the shower, membrane stopped short of the door, the fall running away from the trap, or a penetration that was never sealed. Water finds the detail that was skipped.",
          },
        ],
      },
      {
        heading: "Our waterproofing rates",
        blocks: [
          {
            type: "paragraph",
            text: "These are the published starting rates for the waterproofing scopes we carry out. Which one applies depends on the surface and on whether existing finishes have to come off first.",
          },
          {
            type: "pricing",
            pricingIds: [
              "waterproofing-bathroom-hack",
              "waterproofing-flat-roof",
              "waterproofing-balcony",
              "waterproofing-wall-seepage",
              "waterproofing-pu-injection",
            ],
          },
        ],
      },
      {
        heading: "How a proper waterproofing job runs",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Find out where the water is actually coming from",
                description:
                  "Coating the wrong surface is the most expensive mistake in this trade. A stain on a ceiling can come from the bathroom above, a roof, a façade or a pipe, and each has a different answer.",
              },
              {
                title: "Prepare the substrate",
                description:
                  "Loose material is removed, cracks are treated and the surface is cleaned. No membrane bonds to dust, laitance or a damp, contaminated base.",
              },
              {
                title: "Correct the falls",
                description:
                  "Water has to run to the outlet. Where the screed falls the wrong way or ponds, that is corrected before waterproofing, not compensated for afterwards.",
              },
              {
                title: "Apply the system to the right thickness",
                description:
                  "Coats are applied in the specified number and direction, with corners, upstands and pipe penetrations detailed properly — these are where leaks start.",
              },
              {
                title: "Flood test",
                description:
                  "The area is filled and left to stand, and the space below is checked. A membrane that has not been tested is an assumption, not a result.",
              },
              {
                title: "Protect and finish",
                description:
                  "Tiles, screed or a protective layer go over the membrane where the surface will be used. An unprotected membrane in a trafficked area wears through.",
              },
            ],
          },
        ],
      },
      {
        heading: "How long waterproofing lasts",
        blocks: [
          {
            type: "paragraph",
            text: "Any honest answer here is a range, not a number. A tiled bathroom membrane that was properly detailed and is protected by the tile above it lasts a long time; an exposed coating on a balcony that bakes in the sun and is never recoated has a much shorter life. What shortens all of them is the same short list: poor preparation, insufficient thickness, missing upstands, unsealed penetrations, and standing water that never drains. We do not publish a lifespan figure for any system because the substrate and the detailing decide it, not the tin.",
          },
          {
            type: "list",
            items: [
              "Keep floor traps and roof outlets clear — standing water is the enemy of every system.",
              "Check the silicone at the shower corners and floor-to-wall junction once a year and replace it when it lifts or discolours.",
              "On an exposed balcony or flat roof, inspect the coating after each rainy season for cracking, blistering or thin spots.",
              "Fix a small crack in a coating early. Water that gets under a membrane spreads sideways and lifts far more than the crack itself.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I apply PU coating over my bathroom tiles instead of hacking?",
        answer:
          "It is not the right solution for a bathroom floor. The membrane belongs under the tiles, bonded to the screed, so a coating over the finished tile surface is walked on, worn through and interrupted by every grout line and the floor trap. Where hacking is not possible, the honest alternative is to identify the specific leak path and treat that instead.",
      },
      {
        question: "Is torch-on better than a liquid membrane?",
        answer:
          "Neither is better in general — they suit different surfaces. Torch-on gives a thick, robust sheet that works well over larger flat roof areas. Liquid membranes are seamless and easier to detail around many upstands, pipes and awkward corners.",
      },
      {
        question: "What is a flood test and why does it matter?",
        answer:
          "The waterproofed area is sealed, filled with water and left to stand while the space below is monitored. It is the only way to prove the membrane works before it is covered with tiles. Skipping it means the first test is your neighbour's ceiling.",
      },
      {
        question: "Do I need to waterproof a balcony that is already tiled?",
        answer:
          "Only if it is leaking or the detailing has failed. If water is reaching the room below or the ceiling under it, the membrane beneath those tiles is either absent or breached, and a surface coating over old tiles is at best a temporary measure.",
      },
      {
        question: "Will waterproofing fix my damp wall?",
        answer:
          "It depends on why the wall is damp. If rain is driving through the external face, an external coating after crack treatment is the right answer. If a pipe is leaking inside the wall, or water is tracking down from a roof or balcony above, coating the wall changes nothing — the source has to be found first.",
      },
    ],
    closing:
      "Tell us which surface is leaking, what is above and below it, and whether the problem follows rain or follows water use inside the home. That is what determines the system — and we would rather diagnose it correctly than sell you the wrong membrane.",
  },
  ms: {
    title: "Renovix Home Services | Kalis Air Simen vs PU vs Torch-On (Malaysia)",
    metaDescription:
      "Sistem kalis air mana yang sesuai untuk bilik air, balkoni, bumbung rata atau dinding luar anda di Malaysia — berasaskan simen, salutan PU, membran torch-on atau suntikan PU.",
    h1: "Kalis Air Simen vs PU vs Torch-On: Sistem Mana untuk Permukaan Mana",
    excerpt:
      "Kalis air bukan satu produk sahaja. Memadankan sistem dengan permukaan — dan sama ada ia akan dijubin, dipijak atau terdedah kepada matahari — itulah yang menentukan jangka hayatnya.",
    question: "Sistem kalis air mana yang patut saya guna — simen, PU atau torch-on?",
    answer:
      "Gunakan kalis air berasaskan simen di bawah jubin untuk kawasan basah seperti bilik air, kerana ia melekat pada screed dan pelekat jubin boleh melekat padanya. Gunakan membran cecair PU atau akrilik pada permukaan terdedah yang lentur dan terkena matahari, seperti balkoni dan sesetengah bumbung rata, kerana ia kekal elastik. Gunakan membran bitumen torch-on pada bumbung rata yang lebih besar yang memerlukan kepingan tebal, kukuh dan tertutup sepenuhnya. Suntikan PU bukan membran langsung — ia pembaikan khusus yang menutup retakan atau titik resapan tertentu dari dalam konkrit. Kadar kami bagi setiap satu ada di bawah.",
    keyPoints: [
      "Sistem berasaskan simen ialah standard di bawah jubin — ia melekat pada permukaan dan boleh dijubin.",
      "Membran cecair PU dan akrilik kekal fleksibel, jadi ia sesuai untuk permukaan terdedah matahari yang bergerak.",
      "Membran torch-on ialah sistem kepingan tebal yang paling sesuai untuk kawasan bumbung rata yang lebih besar.",
      "Suntikan PU membaiki laluan bocor tertentu; ia tidak mengalis-airkan keseluruhan permukaan.",
      "Persediaan dan perincian — kecerunan, dinding naik, sudut, perangkap lantai — lebih penting daripada jenama produk.",
    ],
    sections: [
      {
        heading: "Perbandingan sistem",
        blocks: [
          {
            type: "table",
            columns: ["Sistem", "Cara ia berfungsi", "Tempat sesuai", "Batasan jujur"],
            rows: [
              [
                "Berasaskan simen",
                "Buburan simen disapu atau ditrowel pada screed dan melekat padanya",
                "Bilik air, dapur basah, ruang jemur, mana-mana yang akan dijubin",
                "Tegar — ia tidak merentasi retakan yang bergerak, dan tidak direka untuk terdedah kepada cahaya matahari",
              ],
              [
                "Membran cecair PU / akrilik",
                "Salutan cecair yang mengeras menjadi filem elastik berterusan",
                "Balkoni, lantai terdedah, sesetengah bumbung rata, kotak penanam",
                "Perlu asas bersih, kering dan disediakan dengan betul; prestasi UV bergantung pada produk dan ketebalan yang betul",
              ],
              [
                "Membran bitumen torch-on",
                "Kepingan bitumen digulung dan dilekatkan dengan api ke permukaan",
                "Bumbung rata lebih besar dan kawasan yang perlukan kepingan tebal dan kukuh",
                "Melibatkan kerja api terbuka dan kemahiran bertindih; tidak sesuai untuk kawasan dalaman kecil dan rumit",
              ],
              [
                "Suntikan PU",
                "Resin disuntik ke dalam retakan dan mengembang menutup laluan air",
                "Titik bocor yang khusus dan dikenal pasti — retak lantai, sambungan binaan, resapan siling",
                "Membaiki satu laluan sahaja; ia bukan pengganti kalis air seluruh permukaan",
              ],
              [
                "Salutan dinding luar",
                "Salutan elastomerik disapu pada dinding luar yang disediakan",
                "Resapan dinding dan lembap akibat hujan pada permukaan luar",
                "Hanya berkesan jika puncanya permukaan dinding — bukan jika air datang dari paip bocor atau bumbung",
              ],
            ],
          },
        ],
      },
      {
        heading: "Memilih mengikut permukaan",
        blocks: [
          {
            type: "list",
            items: [
              "Lantai bilik air dan dinding basah: membran berasaskan simen di atas screed yang bercerun betul, diuji dengan air bertakung, kemudian dijubin. Ini standard atas sebab yang jelas — pelekat jubin memerlukan sesuatu untuk melekat.",
              "Balkoni: membran cecair fleksibel jika permukaan terdedah dan bergerak dengan haba, atau sistem berasaskan simen jika ia akan dijubin. Perincian paling kritikal ialah dinding naik di ambang pintu.",
              "Bumbung rata: torch-on untuk kawasan lebih besar yang perlukan kepingan kukuh; membran cecair jika geometrinya rumit dengan banyak dinding naik dan tembusan.",
              "Dinding luar yang meresap: salutan elastomerik selepas retakan dirawat — tetapi hanya setelah anda pasti air datang melalui permukaan dinding dan bukan daripada paip atau bumbung di atas.",
              "Satu retakan dikenal pasti yang bocor ke siling: suntikan PU, yang menutup laluan itu tanpa membuka seluruh lantai konkrit.",
            ],
          },
          {
            type: "callout",
            title: "Sistem kurang penting berbanding perincian",
            text: "Kebanyakan kegagalan yang kami panggil untuk baiki bukan kegagalan produk. Ia berlaku di bahagian tepi: tiada dinding naik di belakang pancuran, membran berhenti sebelum pintu, kecerunan mengalir menjauhi perangkap, atau tembusan yang tidak pernah ditutup. Air akan menemui perincian yang dilangkau.",
          },
        ],
      },
      {
        heading: "Kadar kerja kalis air kami",
        blocks: [
          {
            type: "paragraph",
            text: "Ini kadar permulaan rasmi bagi skop kalis air yang kami jalankan. Yang mana terpakai bergantung pada permukaan dan sama ada kemasan sedia ada perlu dibuang dahulu.",
          },
          {
            type: "pricing",
            pricingIds: [
              "waterproofing-bathroom-hack",
              "waterproofing-flat-roof",
              "waterproofing-balcony",
              "waterproofing-wall-seepage",
              "waterproofing-pu-injection",
            ],
          },
        ],
      },
      {
        heading: "Bagaimana kerja kalis air yang betul dijalankan",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Cari dari mana air sebenarnya datang",
                description:
                  "Menyalut permukaan yang salah ialah kesilapan paling mahal dalam bidang ini. Kesan pada siling boleh datang dari bilik air di atas, bumbung, fasad atau paip, dan setiap satu ada jawapan berbeza.",
              },
              {
                title: "Sediakan permukaan",
                description:
                  "Bahan longgar dibuang, retakan dirawat dan permukaan dibersihkan. Tiada membran melekat pada habuk, lapisan simen longgar atau asas yang lembap dan tercemar.",
              },
              {
                title: "Betulkan kecerunan",
                description:
                  "Air mesti mengalir ke saluran keluar. Jika screed bercerun ke arah salah atau air bertakung, ia dibetulkan sebelum kerja kalis air, bukan diselaraskan selepasnya.",
              },
              {
                title: "Sapu sistem pada ketebalan yang betul",
                description:
                  "Lapisan disapu mengikut bilangan dan arah yang ditetapkan, dengan sudut, dinding naik dan tembusan paip diperincikan dengan betul — di situlah kebocoran bermula.",
              },
              {
                title: "Ujian air bertakung",
                description:
                  "Kawasan itu diisi air dan dibiarkan, dan ruang di bawah diperiksa. Membran yang tidak diuji ialah andaian, bukan hasil.",
              },
              {
                title: "Lindungi dan kemaskan",
                description:
                  "Jubin, screed atau lapisan pelindung dipasang di atas membran jika permukaan itu akan digunakan. Membran tanpa perlindungan di kawasan trafik akan haus.",
              },
            ],
          },
        ],
      },
      {
        heading: "Berapa lama kalis air bertahan",
        blocks: [
          {
            type: "paragraph",
            text: "Jawapan jujur di sini ialah julat, bukan angka tetap. Membran bilik air berjubin yang diperinci dengan betul dan dilindungi jubin di atasnya bertahan lama; salutan terdedah pada balkoni yang terkena panas matahari dan tidak pernah disapu semula mempunyai jangka hayat jauh lebih pendek. Apa yang memendekkan kesemuanya ialah senarai yang sama: persediaan lemah, ketebalan tidak cukup, dinding naik tiada, tembusan tidak ditutup, dan air bertakung yang tidak pernah kering. Kami tidak menerbitkan angka jangka hayat untuk mana-mana sistem kerana permukaan dan perincian yang menentukannya, bukan tin produk itu.",
          },
          {
            type: "list",
            items: [
              "Pastikan perangkap lantai dan saluran bumbung tidak tersumbat — air bertakung ialah musuh setiap sistem.",
              "Periksa silikon di sudut pancuran dan pertemuan lantai-dinding setahun sekali dan gantikan apabila ia terangkat atau bertukar warna.",
              "Pada balkoni atau bumbung rata terdedah, periksa salutan selepas setiap musim hujan untuk retak, gelembung atau bahagian nipis.",
              "Baiki retakan kecil pada salutan lebih awal. Air yang masuk di bawah membran merebak ke sisi dan mengangkat kawasan jauh lebih luas daripada retakan itu sendiri.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Bolehkah saya sapu salutan PU di atas jubin bilik air tanpa memecah?",
        answer:
          "Ia bukan penyelesaian yang betul untuk lantai bilik air. Membran sepatutnya berada di bawah jubin dan melekat pada screed, jadi salutan di atas permukaan jubin siap akan dipijak, haus dan terputus di setiap garisan grout serta perangkap lantai. Jika memecah tidak dapat dilakukan, alternatif jujurnya ialah mengenal pasti laluan bocor tertentu dan merawatnya.",
      },
      {
        question: "Adakah torch-on lebih baik daripada membran cecair?",
        answer:
          "Tiada yang lebih baik secara umum — kedua-duanya sesuai untuk permukaan berbeza. Torch-on memberi kepingan tebal dan kukuh yang berfungsi baik untuk kawasan bumbung rata yang lebih besar. Membran cecair pula tanpa sambungan dan lebih mudah diperincikan mengelilingi banyak dinding naik, paip dan sudut yang sukar.",
      },
      {
        question: "Apa itu ujian air bertakung dan kenapa ia penting?",
        answer:
          "Kawasan yang dikalis air ditutup, diisi air dan dibiarkan sementara ruang di bawah dipantau. Itulah satu-satunya cara membuktikan membran berfungsi sebelum ia ditutup dengan jubin. Melangkaunya bermakna ujian pertama anda ialah siling jiran.",
      },
      {
        question: "Perlukah saya mengalis-airkan balkoni yang sudah berjubin?",
        answer:
          "Hanya jika ia bocor atau perinciannya sudah gagal. Jika air sampai ke bilik di bawah atau siling di bawahnya, membran di bawah jubin itu sama ada tiada atau sudah pecah, dan salutan permukaan di atas jubin lama pada terbaiknya hanyalah langkah sementara.",
      },
      {
        question: "Adakah kerja kalis air akan membaiki dinding lembap saya?",
        answer:
          "Bergantung pada kenapa dinding itu lembap. Jika hujan menembusi permukaan luar, salutan luar selepas rawatan retakan ialah jawapan yang betul. Jika paip bocor di dalam dinding, atau air menjalar turun dari bumbung atau balkoni di atas, menyalut dinding tidak mengubah apa-apa — puncanya perlu ditemui dahulu.",
      },
    ],
    closing:
      "Beritahu kami permukaan mana yang bocor, apa yang berada di atas dan di bawahnya, dan sama ada masalah itu mengikut hujan atau mengikut penggunaan air di dalam rumah. Itulah yang menentukan sistemnya — dan kami lebih rela membuat diagnosis yang betul daripada menjual membran yang salah.",
  },
  zh: {
    title: "Renovix Home Services | 水泥基、PU 与热熔卷材防水对比（马来西亚）",
    metaDescription:
      "在马来西亚，浴室、阳台、平台屋顶或外墙该用哪种防水系统 —— 水泥基、PU 涂膜、热熔卷材或 PU 灌注。附费率与真实局限。",
    h1: "水泥基、PU 与热熔卷材防水：哪种系统配哪种基面",
    excerpt:
      "防水不是单一产品。把系统与基面匹配 —— 以及它是否会被铺砖、被踩踏或暴晒 —— 才是决定使用年限的关键。",
    question: "我该用哪种防水系统 —— 水泥基、PU 还是热熔卷材？",
    answer:
      "浴室等潮湿区域的瓷砖之下，使用水泥基防水，因为它与砂浆层粘结，瓷砖胶也能附着其上。阳台与部分平台屋顶等会热胀冷缩、日晒暴露的表面，使用 PU 或丙烯酸液体防水涂膜，因为它保持弹性。面积较大、需要厚实完整卷材的平台屋顶，使用沥青热熔卷材。PU 灌注根本不是防水层 —— 它是从混凝土内部封堵特定裂缝或渗水点的针对性维修。各项费率见下文。",
    keyPoints: [
      "水泥基系统是瓷砖之下的标准做法 —— 它与基面粘结，且可直接铺砖。",
      "PU 与丙烯酸液体涂膜保持柔韧，适合会变形的日晒表面。",
      "热熔卷材是厚型片材系统，最适合面积较大的平台屋顶。",
      "PU 灌注解决的是某一条渗漏路径，不能替代整个面的防水。",
      "基层处理与细部收口 —— 坡度、返边、阴角、地漏 —— 比产品品牌更重要。",
    ],
    sections: [
      {
        heading: "各系统对比",
        blocks: [
          {
            type: "table",
            columns: ["系统", "工作原理", "适用位置", "实话说的局限"],
            rows: [
              [
                "水泥基",
                "水泥基浆料刷涂或抹涂于砂浆层并与之粘结",
                "浴室、湿厨房、晒衣区，以及任何将铺砖的位置",
                "刚性 —— 无法跨越活动裂缝，也不适合长期暴露在阳光下",
              ],
              [
                "PU / 丙烯酸液体涂膜",
                "液态涂料固化成连续弹性膜",
                "阳台、外露楼板、部分平台屋顶、种植槽",
                "需要洁净、干燥、处理妥当的基面；耐紫外线表现取决于产品与施工厚度是否达标",
              ],
              [
                "沥青热熔卷材",
                "沥青卷材以火焰加热熔粘于基面",
                "面积较大的平台屋顶，以及需要厚实卷材的区域",
                "涉及明火作业与熟练的搭接工艺；不适合狭小复杂的室内空间",
              ],
              [
                "PU 灌注",
                "树脂注入裂缝后膨胀，封堵渗水通道",
                "已确认的具体漏点 —— 楼板裂缝、施工缝、天花渗水点",
                "只处理一条渗漏路径；不能替代整面基层防水",
              ],
              [
                "外墙涂层",
                "在处理好的外墙面施作弹性涂层",
                "外墙渗水与雨水导致的受潮",
                "只有在水确实由墙面渗入时才有效 —— 若来自漏水管道或屋顶则无用",
              ],
            ],
          },
        ],
      },
      {
        heading: "按基面选择",
        blocks: [
          {
            type: "list",
            items: [
              "浴室地面与湿区墙面：在坡度正确的砂浆层上做水泥基防水，做闭水试验，然后铺砖。这是标准做法自有其道理 —— 瓷砖胶需要可粘结的基面。",
              "阳台：表面外露且随温度变形时用柔性液体涂膜；若将铺砖则用水泥基系统。最关键的细部是门槛处的返边高度。",
              "平台屋顶：面积较大、需要厚实卷材时用热熔卷材；若几何形状复杂、返边与穿管多，则用液体涂膜。",
              "渗水的外墙：先处理裂缝再施作弹性涂层 —— 但前提是确认水确实由墙面渗入，而非来自管道或上方屋顶。",
              "已确认某条裂缝渗漏至天花：做 PU 灌注，在不拆开整块楼板的前提下封堵通道。",
            ],
          },
          {
            type: "callout",
            title: "系统的重要性不及细部收口",
            text: "我们被叫去处理的失效，多数不是产品失效，而是发生在边缘：淋浴区背后没做返边、防水层没延伸到门口、坡度背向地漏，或穿管从未做密封。水总会找到被省略的那一处细节。",
          },
        ],
      },
      {
        heading: "我们的防水费率",
        blocks: [
          {
            type: "paragraph",
            text: "以下是我们承接的各类防水工序的公开起价。具体适用哪一项，取决于基面情况以及是否需要先拆除现有饰面。",
          },
          {
            type: "pricing",
            pricingIds: [
              "waterproofing-bathroom-hack",
              "waterproofing-flat-roof",
              "waterproofing-balcony",
              "waterproofing-wall-seepage",
              "waterproofing-pu-injection",
            ],
          },
        ],
      },
      {
        heading: "一次规范的防水施工怎么做",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "先弄清水到底从哪来",
                description:
                  "在错误的表面做涂层，是这个行业里最贵的错误。天花上的水渍可能来自楼上浴室、屋顶、外立面或管道，各自的解法完全不同。",
              },
              {
                title: "处理基面",
                description:
                  "清除松散物、处理裂缝、清洁表面。任何防水层都无法粘结在灰尘、浮浆或潮湿受污染的基面上。",
              },
              {
                title: "修正坡度",
                description:
                  "水必须流向排水口。若砂浆层坡向错误或积水，要在防水施工前修正，而不是事后弥补。",
              },
              {
                title: "按规定厚度施作",
                description:
                  "按规定的道数与方向施作，阴角、返边与穿管处做好细部收口 —— 渗漏正是从这些地方开始的。",
              },
              {
                title: "闭水试验",
                description:
                  "蓄水静置，并观察下方空间。未经测试的防水层只是假设，不是结果。",
              },
              {
                title: "保护与收面",
                description:
                  "若该面会被使用，则在防水层上做瓷砖、砂浆层或保护层。人员走动区域的裸露防水层会被磨穿。",
              },
            ],
          },
        ],
      },
      {
        heading: "防水能用多久",
        blocks: [
          {
            type: "paragraph",
            text: "诚实的答案是一个区间，而不是一个数字。细部做到位、上方有瓷砖保护的浴室防水层可以用很久；而阳台上长年暴晒、从未重新涂布的外露涂层，寿命则短得多。缩短所有系统寿命的原因都是同一份清单：基层处理不良、厚度不足、缺少返边、穿管未密封，以及长期排不掉的积水。我们不为任何系统公布使用年限数字，因为决定它的是基面与细部，而不是产品罐子。",
          },
          {
            type: "list",
            items: [
              "保持地漏与屋面排水口畅通 —— 积水是所有系统的头号敌人。",
              "每年检查淋浴区阴角与墙地交接处的玻璃胶，一旦翘起或变色就更换。",
              "外露阳台或平台屋顶，每个雨季后检查涂层是否开裂、起泡或偏薄。",
              "涂层上的小裂缝要尽早修。渗到防水层下面的水会横向扩散，掀起的范围远大于裂缝本身。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "可以不打拆，直接在浴室瓷砖上刷 PU 涂层吗？",
        answer:
          "对浴室地面而言这不是正确做法。防水层应位于瓷砖之下并与砂浆层粘结；刷在成品瓷砖表面的涂层会被踩踏磨损，并被每一条填缝线与地漏打断。若确实无法打拆，诚实的替代方案是找出具体渗漏路径并针对处理。",
      },
      {
        question: "热熔卷材比液体涂膜更好吗？",
        answer:
          "笼统地说没有谁更好 —— 它们适用于不同基面。热熔卷材能形成厚实坚固的片层，适合面积较大的平台屋顶。液体涂膜无接缝，在返边、穿管与不规则转角多的位置更容易做好细部。",
      },
      {
        question: "什么是闭水试验，为什么重要？",
        answer:
          "把做完防水的区域封住蓄水静置，同时观察下方空间。这是在铺砖覆盖前证明防水有效的唯一方法。省略它，等于把第一次测试留给邻居的天花板。",
      },
      {
        question: "已经铺砖的阳台还需要做防水吗？",
        answer:
          "只有在漏水或细部已失效时才需要。如果水已到达楼下房间或其天花，说明瓷砖下方的防水层要么没有，要么已破损；在旧砖表面刷涂层，充其量只是临时措施。",
      },
      {
        question: "做防水能解决我家的潮湿墙面吗？",
        answer:
          "取决于墙为什么潮。若雨水从外墙面渗入，处理裂缝后施作外墙涂层是正确答案。若墙内管道漏水，或水从上方屋顶、阳台顺流而下，刷墙面涂层毫无作用 —— 必须先找到源头。",
      },
    ],
    closing:
      "请告诉我们哪个面在渗漏、它的上方与下方分别是什么，以及问题是随下雨出现还是随家中用水出现。这决定了该用哪种系统 —— 比起卖您一套错误的防水，我们更愿意先把诊断做对。",
  },
};
