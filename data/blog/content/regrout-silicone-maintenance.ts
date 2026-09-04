import type { ArticleDefinition } from "../types";

/**
 * Backlog item 7 — maintenance guide: regrout and silicone intervals.
 * Supports the handyman pillar and the grout/silicone sub-service.
 */
export const regroutSiliconeMaintenance: ArticleDefinition = {
  slug: "regrout-silicone-maintenance",
  category: "maintenance",
  intents: ["maintenance", "lifespan", "signs-of-failure", "repair", "when-to-call"],
  published: "2026-09-04",
  relatedServices: ["handyman", "tiling", "waterproofing"],
  relatedSubServices: ["grout-silicone"],
  relatedProblems: [
    "tile-grout-problems",
    "bathroom-tile-problems",
    "mouldy-walls",
    "water-seepage-through-tiles",
    "loose-tile-repair",
  ],
  relatedLocations: [
    "kuala-lumpur/setapak",
    "kuala-lumpur/sri-petaling",
    "selangor/puchong",
    "selangor/kajang",
  ],
  relatedProjects: [],
  pricingIds: ["handyman-grout-silicone", "tiling-repair", "waterproofing-bathroom-hack"],
  en: {
    title: "Renovix Home Services | Regrouting & Silicone Maintenance Guide (KL & Selangor)",
    metaDescription:
      "When to regrout tiles and replace silicone in a Malaysian bathroom or kitchen, how to tell maintenance from a real leak, and what the work costs. Practical, honest guidance.",
    h1: "Regrouting and Silicone: When to Maintain, and When It Is Something Worse",
    excerpt:
      "Grout and silicone are the cheapest maintenance in your home and the earliest warning system you have. Here is how to read them and when to act.",
    question: "How often should bathroom grout and silicone be replaced?",
    answer:
      "There is no fixed interval, because it depends entirely on use, ventilation and how the bathroom was built. The honest rule is to inspect once a year and act on condition, not on the calendar: replace silicone when it lifts, splits, blackens or peels away from the tile, and regrout when joints are crumbling, missing, permanently dark or letting water through. Silicone is a consumable and almost always fails before grout does. What matters most is telling maintenance apart from a symptom of a failed waterproofing membrane underneath.",
    keyPoints: [
      "Silicone is a consumable seal at movement joints; grout is a rigid filler between tiles. They are not interchangeable.",
      "Inspect annually and act on condition — mould, lifting, splitting, crumbling or missing joints.",
      "Regrouting is cheap, quick maintenance. It is not a repair for a leaking floor.",
      "If the ceiling below is stained, or tiles sound hollow, the problem is under the tiles and regrouting will not fix it.",
      "Ventilation is the single biggest factor in how long silicone stays clean in a Malaysian bathroom.",
    ],
    sections: [
      {
        heading: "Grout and silicone do different jobs",
        blocks: [
          {
            type: "table",
            columns: ["", "Grout", "Silicone"],
            rows: [
              [
                "Where it goes",
                "Between tiles, across the flat field",
                "At movement joints — internal corners, floor-to-wall, around the basin, bath and shower tray",
              ],
              ["Behaviour", "Rigid and cementitious", "Flexible and elastic"],
              [
                "Why it fails",
                "Abrasion, cleaning chemicals, movement, poor mixing when installed",
                "Movement, mould growth, loss of adhesion, age",
              ],
              [
                "Typical first sign",
                "Dark, powdery, crumbling or missing sections",
                "Black speckling, lifting at one edge, splitting when pressed",
              ],
              ["Expected role", "Fills and finishes the joint", "Seals a joint that has to move"],
            ],
          },
          {
            type: "paragraph",
            text: "The most common installation error we see is grout used where silicone should be. A rigid grout in a corner that flexes will crack within months, and every crack is a water path.",
          },
        ],
      },
      {
        heading: "Your annual five-minute inspection",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Press the silicone",
                description:
                  "Run a fingertip along the shower corners and the floor-to-wall junction. Anything that lifts, splits or feels detached is finished, however clean it looks.",
              },
              {
                title: "Look at the colour",
                description:
                  "Black speckling that does not come off with cleaning is mould growing inside the sealant, not on it. Once it is inside, it can only be cut out and replaced.",
              },
              {
                title: "Scrape a joint",
                description:
                  "Drag a coin gently along a grout line. Powder coming away means the grout has lost its binder in that area.",
              },
              {
                title: "Tap the tiles",
                description:
                  "Tap across the floor and lower walls with a knuckle. A hollow, drummy sound means the tile has lost its bond — a different problem from grout, and one regrouting will not solve.",
              },
              {
                title: "Check the room below",
                description:
                  "Look at the ceiling under the bathroom. If there is a stain there, stop treating this as maintenance and diagnose the leak properly.",
              },
            ],
          },
        ],
      },
      {
        heading: "What the work costs",
        blocks: [
          {
            type: "paragraph",
            text: "Regrouting and recaulking are among the cheapest interventions in a home, which is exactly why they are worth doing before the problem changes category.",
          },
          { type: "pricing", pricingIds: ["handyman-grout-silicone"] },
          {
            type: "paragraph",
            text: "Where tiles have already loosened or cracked, that is tile repair rather than maintenance, and where water has passed the tiles into the slab it becomes a waterproofing scope.",
          },
          { type: "pricing", pricingIds: ["tiling-repair", "waterproofing-bathroom-hack"] },
        ],
      },
      {
        heading: "How the job is done properly",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Remove, do not overlay",
                description:
                  "Old silicone is cut out completely and the failed grout is raked out to a consistent depth. New sealant applied on top of old sealant does not bond and peels within weeks.",
              },
              {
                title: "Clean and dry",
                description:
                  "The joint is cleaned of soap residue and mould and left dry. Silicone will not adhere to a damp, greasy or dusty joint.",
              },
              {
                title: "Regrout the field",
                description:
                  "New grout is worked into the joints, the excess struck off and the tiles cleaned before it sets.",
              },
              {
                title: "Seal the movement joints",
                description:
                  "A sanitary-grade silicone goes into corners and junctions in one continuous bead, tooled to a neat concave profile so water runs off rather than sitting on it.",
              },
              {
                title: "Leave it to cure",
                description:
                  "The bathroom stays dry for the sealant's stated curing time. Using the shower too early is the most common reason a fresh bead fails.",
              },
            ],
          },
        ],
      },
      {
        heading: "When it is not a maintenance job",
        blocks: [
          {
            type: "paragraph",
            text: "Regrouting is genuinely useful, but it is also the most oversold repair in the trade. It seals the visible surface — it does nothing for a membrane that has failed beneath the tiles. Treat these as diagnosis, not maintenance:",
          },
          {
            type: "list",
            items: [
              "A damp patch or stain on the ceiling of the room below the bathroom.",
              "Tiles that sound hollow when tapped, or that move underfoot.",
              "Grout that stays wet or reappears dark hours after the bathroom was last used.",
              "Damp on the outside face of a bathroom wall, in the adjoining bedroom or corridor.",
              "Repeated mould returning within weeks of a proper reseal — that usually means moisture is arriving from behind, not from the shower.",
            ],
          },
          {
            type: "callout",
            title: "Regrouting a leaking floor buys weeks, not years",
            text: "If water is reaching the slab, the membrane under the tiles is the problem. New grout on top of it hides the evidence for a short while and lets the damage continue underneath. It is cheaper in the long run to diagnose it properly the first time.",
          },
        ],
      },
      {
        heading: "Making it last longer",
        blocks: [
          {
            type: "list",
            items: [
              "Ventilate. Run the fan or open the window after showering — in Malaysian humidity, a bathroom that never dries out will grow mould in any sealant.",
              "Squeegee or wipe the shower walls and the corner joints occasionally; standing water in a joint is what feeds the mould.",
              "Avoid harsh bleaches and acid cleaners on grout. They strip the surface and accelerate crumbling, which is the opposite of what you want.",
              "Fix a dripping tap or a slow shower leak promptly — a joint that is constantly wet will never stay clean.",
              "Deal with one failing joint when you notice it. It is a small job now and a tiling job later.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I just paint over or bleach mouldy silicone?",
        answer:
          "Bleach lightens the surface but the mould growing inside the sealant survives and returns. Once the black is embedded rather than sitting on top, the only real fix is to cut the bead out and replace it.",
      },
      {
        question: "Should the corner between the floor and the wall be grouted or siliconed?",
        answer:
          "Siliconed. That junction moves, and rigid grout in a moving joint cracks. If you are seeing hairline cracks along a corner, this is usually why.",
      },
      {
        question: "Will regrouting stop water leaking to the unit below?",
        answer:
          "Almost never. If water has reached the ceiling below, it has already passed the tiles and the membrane under them has failed. Regrouting the surface does not restore that membrane, and the leak continues out of sight.",
      },
      {
        question: "How long before I can use the shower after resealing?",
        answer:
          "Until the sealant has cured for the time stated on the product, which we tell you before leaving. Using it earlier is the most common cause of a new bead peeling away at one edge.",
      },
      {
        question: "Is it worth regrouting an old bathroom I plan to renovate anyway?",
        answer:
          "If the renovation is a long way off and the tiles are otherwise sound, yes — it is inexpensive and keeps water out in the meantime. If you are rebuilding within months, put the money towards the rebuild instead.",
      },
    ],
    closing:
      "Send a close photograph of the joint and a wider one of the room, and tell us whether anything is showing on the ceiling below. We will tell you honestly whether this is a maintenance visit or something that needs looking at underneath.",
  },
  ms: {
    title: "Renovix Home Services | Panduan Penyelenggaraan Grout & Silikon (KL & Selangor)",
    metaDescription:
      "Bila perlu grout semula jubin dan menggantikan silikon di bilik air atau dapur di Malaysia, cara membezakan penyelenggaraan daripada kebocoran sebenar, dan kosnya.",
    h1: "Grout dan Silikon: Bila Perlu Diselenggara, dan Bila Ia Masalah Lebih Besar",
    excerpt:
      "Grout dan silikon ialah penyelenggaraan paling murah di rumah anda dan sistem amaran paling awal yang anda ada. Inilah cara membacanya dan bila perlu bertindak.",
    question: "Berapa kerap grout dan silikon bilik air perlu diganti?",
    answer:
      "Tiada tempoh tetap, kerana ia bergantung sepenuhnya pada penggunaan, pengudaraan dan cara bilik air itu dibina. Peraturan yang jujur ialah periksa setahun sekali dan bertindak mengikut keadaan, bukan mengikut kalendar: gantikan silikon apabila ia terangkat, pecah, menghitam atau terkelupas daripada jubin, dan grout semula apabila sambungan hancur, hilang, kekal gelap atau meloloskan air. Silikon ialah bahan guna habis dan hampir selalu gagal sebelum grout. Yang paling penting ialah membezakan penyelenggaraan daripada gejala kegagalan membran kalis air di bawahnya.",
    keyPoints: [
      "Silikon ialah pengedap guna habis pada sambungan pergerakan; grout ialah pengisi tegar antara jubin. Kedua-duanya tidak boleh ditukar ganti.",
      "Periksa setiap tahun dan bertindak mengikut keadaan — kulat, terangkat, pecah, hancur atau sambungan hilang.",
      "Grout semula ialah penyelenggaraan murah dan cepat. Ia bukan pembaikan untuk lantai yang bocor.",
      "Jika siling di bawah bernoda, atau jubin berbunyi kosong, masalahnya di bawah jubin dan grout semula tidak akan menyelesaikannya.",
      "Pengudaraan ialah faktor terbesar yang menentukan berapa lama silikon kekal bersih di bilik air di Malaysia.",
    ],
    sections: [
      {
        heading: "Grout dan silikon melakukan tugas berbeza",
        blocks: [
          {
            type: "table",
            columns: ["", "Grout", "Silikon"],
            rows: [
              [
                "Di mana ia digunakan",
                "Antara jubin, merentasi permukaan rata",
                "Pada sambungan pergerakan — sudut dalam, lantai ke dinding, sekeliling besen, tab dan dulang pancuran",
              ],
              ["Sifat", "Tegar dan berasaskan simen", "Fleksibel dan elastik"],
              [
                "Kenapa ia gagal",
                "Kikisan, bahan kimia pencuci, pergerakan, campuran tidak betul semasa dipasang",
                "Pergerakan, pertumbuhan kulat, hilang lekatan, usia",
              ],
              [
                "Tanda pertama biasa",
                "Bahagian gelap, berdebu, hancur atau hilang",
                "Bintik hitam, terangkat di satu tepi, pecah bila ditekan",
              ],
              ["Peranan sepatutnya", "Mengisi dan mengemas sambungan", "Mengedap sambungan yang perlu bergerak"],
            ],
          },
          {
            type: "paragraph",
            text: "Kesilapan pemasangan paling biasa yang kami lihat ialah grout digunakan di tempat silikon sepatutnya digunakan. Grout tegar di sudut yang lentur akan retak dalam beberapa bulan, dan setiap retakan itu laluan air.",
          },
        ],
      },
      {
        heading: "Pemeriksaan lima minit tahunan anda",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Tekan silikonnya",
                description:
                  "Jalankan hujung jari di sepanjang sudut pancuran dan pertemuan lantai-dinding. Apa-apa yang terangkat, pecah atau terasa tertanggal sudah tamat riwayatnya, walaupun kelihatan bersih.",
              },
              {
                title: "Perhatikan warnanya",
                description:
                  "Bintik hitam yang tidak hilang walaupun dicuci ialah kulat yang tumbuh di dalam pengedap, bukan di atasnya. Sekali ia berada di dalam, ia hanya boleh dipotong keluar dan diganti.",
              },
              {
                title: "Kikis sambungan",
                description:
                  "Seret syiling perlahan di sepanjang garisan grout. Serbuk yang tertanggal bermakna grout telah hilang pengikatnya di kawasan itu.",
              },
              {
                title: "Ketuk jubinnya",
                description:
                  "Ketuk lantai dan bahagian bawah dinding dengan buku jari. Bunyi kosong bermakna jubin telah hilang lekatannya — masalah berbeza daripada grout, dan grout semula tidak akan menyelesaikannya.",
              },
              {
                title: "Periksa bilik di bawah",
                description:
                  "Lihat siling di bawah bilik air. Jika ada kesan air di situ, berhenti menganggap ini penyelenggaraan dan buat diagnosis kebocoran dengan betul.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kos kerja ini",
        blocks: [
          {
            type: "paragraph",
            text: "Grout semula dan silikon semula antara kerja paling murah di rumah, dan itulah sebabnya ia berbaloi dibuat sebelum masalah bertukar kategori.",
          },
          { type: "pricing", pricingIds: ["handyman-grout-silicone"] },
          {
            type: "paragraph",
            text: "Jika jubin sudah longgar atau retak, itu pembaikan jubin dan bukan penyelenggaraan, dan jika air sudah menembusi jubin ke lantai konkrit, ia menjadi skop kalis air.",
          },
          { type: "pricing", pricingIds: ["tiling-repair", "waterproofing-bathroom-hack"] },
        ],
      },
      {
        heading: "Cara kerja ini dilakukan dengan betul",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Buang, jangan lapis atas",
                description:
                  "Silikon lama dipotong keluar sepenuhnya dan grout yang gagal dikorek sehingga kedalaman sekata. Pengedap baharu di atas pengedap lama tidak melekat dan akan terkelupas dalam beberapa minggu.",
              },
              {
                title: "Bersih dan kering",
                description:
                  "Sambungan dibersihkan daripada sisa sabun dan kulat serta dibiarkan kering. Silikon tidak akan melekat pada sambungan yang lembap, berminyak atau berhabuk.",
              },
              {
                title: "Grout semula permukaan",
                description:
                  "Grout baharu dimasukkan ke dalam sambungan, lebihannya dibuang dan jubin dibersihkan sebelum ia mengeras.",
              },
              {
                title: "Edap sambungan pergerakan",
                description:
                  "Silikon gred sanitari dimasukkan ke sudut dan pertemuan dalam satu jalur berterusan, dikemas kepada profil cekung yang kemas supaya air mengalir turun dan tidak bertakung.",
              },
              {
                title: "Biarkan ia mengeras",
                description:
                  "Bilik air dibiarkan kering sepanjang tempoh pengerasan yang dinyatakan. Menggunakan pancuran terlalu awal ialah sebab paling biasa jalur baharu gagal.",
              },
            ],
          },
        ],
      },
      {
        heading: "Bila ia bukan kerja penyelenggaraan",
        blocks: [
          {
            type: "paragraph",
            text: "Grout semula memang berguna, tetapi ia juga pembaikan paling kerap dijual berlebihan dalam bidang ini. Ia mengedap permukaan yang kelihatan — ia tidak membantu langsung untuk membran yang telah gagal di bawah jubin. Anggap perkara berikut sebagai diagnosis, bukan penyelenggaraan:",
          },
          {
            type: "list",
            items: [
              "Tompokan lembap atau kesan air pada siling bilik di bawah bilik air.",
              "Jubin yang berbunyi kosong bila diketuk, atau bergerak bila dipijak.",
              "Grout yang kekal basah atau kembali gelap berjam-jam selepas bilik air terakhir digunakan.",
              "Kelembapan pada permukaan luar dinding bilik air, di bilik tidur atau koridor bersebelahan.",
              "Kulat yang berulang dalam beberapa minggu selepas kerja pengedapan yang betul — itu biasanya bermakna kelembapan datang dari belakang, bukan dari pancuran.",
            ],
          },
          {
            type: "callout",
            title: "Grout semula pada lantai bocor membeli minggu, bukan tahun",
            text: "Jika air sampai ke lantai konkrit, membran di bawah jubin itulah masalahnya. Grout baharu di atasnya hanya menyembunyikan buktinya buat seketika sambil kerosakan terus berlaku di bawah. Lebih jimat dalam jangka panjang untuk membuat diagnosis yang betul pada kali pertama.",
          },
        ],
      },
      {
        heading: "Cara memanjangkan jangka hayatnya",
        blocks: [
          {
            type: "list",
            items: [
              "Beri pengudaraan. Hidupkan kipas atau buka tingkap selepas mandi — dalam kelembapan Malaysia, bilik air yang tidak pernah kering akan menumbuhkan kulat pada mana-mana pengedap.",
              "Lap atau keringkan dinding pancuran dan sambungan sudut sekali-sekala; air bertakung pada sambungan itulah makanan kulat.",
              "Elakkan peluntur keras dan pencuci berasid pada grout. Ia mengikis permukaan dan mempercepatkan keretakan, bertentangan dengan yang anda mahukan.",
              "Baiki paip menitis atau kebocoran pancuran dengan segera — sambungan yang sentiasa basah tidak akan kekal bersih.",
              "Uruskan satu sambungan yang gagal sebaik anda perasan. Ia kerja kecil sekarang dan kerja jubin kemudian.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Bolehkah saya cat atau luntur sahaja silikon yang berkulat?",
        answer:
          "Peluntur mencerahkan permukaan tetapi kulat yang tumbuh di dalam pengedap kekal hidup dan akan kembali. Sebaik warna hitam itu berada di dalam dan bukan di permukaan, satu-satunya penyelesaian sebenar ialah memotong jalur itu keluar dan menggantikannya.",
      },
      {
        question: "Sudut antara lantai dan dinding perlu digrout atau disilikon?",
        answer:
          "Disilikon. Pertemuan itu bergerak, dan grout tegar pada sambungan bergerak akan retak. Jika anda nampak retak halus di sepanjang sudut, itu biasanya sebabnya.",
      },
      {
        question: "Adakah grout semula akan menghentikan air bocor ke unit di bawah?",
        answer:
          "Hampir tidak pernah. Jika air sudah sampai ke siling di bawah, ia telah pun melepasi jubin dan membran di bawahnya telah gagal. Grout semula pada permukaan tidak memulihkan membran itu, dan kebocoran berterusan tanpa kelihatan.",
      },
      {
        question: "Berapa lama sebelum saya boleh guna pancuran selepas silikon baharu?",
        answer:
          "Sehingga pengedap mengeras mengikut tempoh yang dinyatakan pada produk, yang akan kami beritahu sebelum meninggalkan tapak. Menggunakannya lebih awal ialah punca paling biasa jalur baharu terkelupas di satu tepi.",
      },
      {
        question: "Berbaloikah grout semula bilik air lama yang saya rancang untuk direnovasi?",
        answer:
          "Jika renovasi itu masih jauh dan jubin masih kukuh, ya — ia murah dan menahan air sementara itu. Jika anda akan membina semula dalam beberapa bulan, gunakan wang itu untuk kerja bina semula.",
      },
    ],
    closing:
      "Hantarkan gambar dekat sambungan itu dan satu gambar keseluruhan bilik, serta beritahu kami sama ada ada apa-apa kelihatan pada siling di bawah. Kami akan beritahu dengan jujur sama ada ini lawatan penyelenggaraan atau sesuatu yang perlu diperiksa di bawah permukaan.",
  },
  zh: {
    title: "Renovix Home Services | 瓷砖填缝与玻璃胶保养指南（吉隆坡与雪兰莪）",
    metaDescription:
      "马来西亚浴室与厨房何时该重做填缝、更换玻璃胶，如何分辨保养与真正的漏水，以及相关费用。务实、诚实的建议。",
    h1: "填缝与玻璃胶：什么时候是保养，什么时候是更严重的问题",
    excerpt:
      "填缝与玻璃胶是家里最便宜的保养，也是最早的预警系统。以下说明如何解读它们，以及何时该采取行动。",
    question: "浴室填缝与玻璃胶多久该更换一次？",
    answer:
      "没有固定周期，因为这完全取决于使用频率、通风状况与当初的施工品质。诚实的原则是每年检查一次，按状况而非按日历行动：玻璃胶一旦翘起、开裂、发黑或与瓷砖脱离就更换；填缝一旦粉化、缺失、长期发黑或开始透水就重做。玻璃胶属易耗材，几乎总是比填缝更早失效。最关键的是分辨这是保养，还是下方防水层已经失效的征兆。",
    keyPoints: [
      "玻璃胶是用于变形缝的易耗密封材；填缝剂是瓷砖之间的刚性填充材。两者不能互换。",
      "每年检查，按状况处理 —— 发霉、翘起、开裂、粉化或缺失。",
      "重做填缝是便宜快速的保养，不是漏水地面的维修方案。",
      "如果楼下天花有水渍，或瓷砖敲起来空鼓，问题在瓷砖之下，重做填缝解决不了。",
      "在马来西亚，通风是决定玻璃胶能保持洁净多久的最大因素。",
    ],
    sections: [
      {
        heading: "填缝与玻璃胶职责不同",
        blocks: [
          {
            type: "table",
            columns: ["", "填缝剂", "玻璃胶"],
            rows: [
              [
                "使用位置",
                "瓷砖之间的平整缝隙",
                "变形缝处 —— 阴角、墙地交接、面盆、浴缸与淋浴盘周边",
              ],
              ["特性", "刚性、水泥基", "柔性、有弹性"],
              [
                "失效原因",
                "磨损、清洁化学品、结构位移、施工时配比不当",
                "位移、霉菌滋生、失去粘附、老化",
              ],
              [
                "常见初期迹象",
                "发黑、粉化、酥裂或局部缺失",
                "黑色斑点、单侧翘起、按压时开裂",
              ],
              ["应有作用", "填充并收整缝隙", "密封需要活动的接缝"],
            ],
          },
          {
            type: "paragraph",
            text: "我们最常见的施工错误，是在该用玻璃胶的位置用了填缝剂。刚性填缝用在会活动的阴角，几个月内就会开裂，而每一道裂缝都是一条渗水通道。",
          },
        ],
      },
      {
        heading: "每年五分钟的自检",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "按压玻璃胶",
                description:
                  "用指尖沿淋浴区阴角与墙地交接处摸一遍。任何翘起、开裂或有脱离感的部分都已失效，无论看起来多干净。",
              },
              {
                title: "观察颜色",
                description:
                  "清洁后仍去不掉的黑色斑点，是长在密封胶内部而非表面的霉。一旦长进去，就只能切除重做。",
              },
              {
                title: "刮一下填缝",
                description:
                  "用硬币沿填缝线轻轻刮过。若有粉末脱落，代表该处填缝已失去胶结力。",
              },
              {
                title: "敲一敲瓷砖",
                description:
                  "用指节敲地面与下半墙。空鼓声代表瓷砖已失去粘结 —— 这与填缝是两个问题，重做填缝无法解决。",
              },
              {
                title: "查看楼下房间",
                description:
                  "看看浴室下方的天花。如果那里有水渍，就别再当成保养处理，而要认真诊断漏水。",
              },
            ],
          },
        ],
      },
      {
        heading: "这项工作的费用",
        blocks: [
          {
            type: "paragraph",
            text: "重做填缝与打胶是家中最便宜的处理之一，也正因如此，值得在问题升级之前就做。",
          },
          { type: "pricing", pricingIds: ["handyman-grout-silicone"] },
          {
            type: "paragraph",
            text: "若瓷砖已松动或开裂，那属于瓷砖维修而非保养；若水已穿过瓷砖进入楼板，则属于防水工程范围。",
          },
          { type: "pricing", pricingIds: ["tiling-repair", "waterproofing-bathroom-hack"] },
        ],
      },
      {
        heading: "规范做法是怎样的",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "清除，而不是覆盖",
                description:
                  "旧玻璃胶要完整切除，失效填缝要开槽至一致深度。新胶打在旧胶上无法粘结，几周内就会脱落。",
              },
              {
                title: "清洁并干燥",
                description:
                  "清除缝内皂垢与霉菌并保持干燥。玻璃胶无法附着在潮湿、油腻或积灰的缝隙上。",
              },
              {
                title: "重做面层填缝",
                description:
                  "把新填缝剂压入缝隙，刮除多余部分，并在其硬化前清洁瓷砖表面。",
              },
              {
                title: "密封变形缝",
                description:
                  "在阴角与交接处一次连续打上卫浴级玻璃胶，并修整成整齐的凹弧面，让水顺流而下而不是停留在胶面上。",
              },
              {
                title: "让它固化",
                description:
                  "在密封胶规定的固化时间内保持浴室干燥。太早使用淋浴，是新胶失效最常见的原因。",
              },
            ],
          },
        ],
      },
      {
        heading: "什么情况下这不是保养工作",
        blocks: [
          {
            type: "paragraph",
            text: "重做填缝确实有用，但也是这个行业里最常被过度推销的项目。它密封的是可见表面 —— 对瓷砖之下已失效的防水层毫无帮助。以下情况请当作诊断，而不是保养：",
          },
          {
            type: "list",
            items: [
              "浴室下方房间的天花出现湿斑或水渍。",
              "瓷砖敲击有空鼓声，或踩上去会晃动。",
              "浴室停用数小时后，填缝仍然潮湿或再度发黑。",
              "浴室墙体外侧、相邻卧室或走廊出现潮湿。",
              "认真重做密封后几周内霉菌又反复出现 —— 这通常代表湿气来自背后，而不是淋浴本身。",
            ],
          },
          {
            type: "callout",
            title: "在漏水地面上重做填缝，买到的是几周而不是几年",
            text: "如果水已到达楼板，问题就在瓷砖下的防水层。在其上重做填缝，只是短暂掩盖证据，让下方的破坏继续进行。长远来看，第一次就把诊断做对反而更省钱。",
          },
        ],
      },
      {
        heading: "如何让它更耐用",
        blocks: [
          {
            type: "list",
            items: [
              "保持通风。洗澡后开抽风扇或开窗 —— 在马来西亚的湿度下，永远干不了的浴室会让任何密封胶都长霉。",
              "偶尔刮干或擦干淋浴墙面与角落接缝；缝里积水正是霉菌的养分。",
              "避免在填缝上使用强漂白剂与酸性清洁剂。它们会侵蚀表面、加速粉化，与您的目的正好相反。",
              "及时修好滴水的龙头或缓慢渗漏的花洒 —— 长期潮湿的接缝不可能保持洁净。",
              "发现某一处接缝失效就立刻处理。现在是小工，拖久了就变成瓷砖工程。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "发霉的玻璃胶可以直接漂白或刷涂盖住吗？",
        answer:
          "漂白只能让表面变浅，长在胶体内部的霉仍然存活并会重新显现。当黑色是长在里面而不是浮在表面时，唯一真正的解法就是切除并重新打胶。",
      },
      {
        question: "墙地交接的阴角该用填缝还是玻璃胶？",
        answer:
          "用玻璃胶。该交接处会有位移，刚性填缝用在活动缝上必然开裂。如果您看到沿阴角出现细裂纹，通常原因就在这里。",
      },
      {
        question: "重做填缝能止住渗到楼下的漏水吗？",
        answer:
          "几乎不能。水既然已到达楼下天花，就代表它早已穿过瓷砖、下方防水层已失效。重做表面填缝无法恢复防水层，渗漏只会在看不见的地方继续。",
      },
      {
        question: "重新打胶后多久可以使用淋浴？",
        answer:
          "要等到密封胶按产品说明完成固化，我们在离场前会告知具体时间。提前使用是新胶单侧脱落最常见的原因。",
      },
      {
        question: "反正打算翻新的旧浴室，还值得重做填缝吗？",
        answer:
          "如果翻新还早、瓷砖本身仍然牢固，值得 —— 花费不高，期间还能挡水。如果几个月内就要重建，那就把这笔钱留给重建工程。",
      },
    ],
    closing:
      "请拍一张接缝特写与一张房间全景发给我们，并说明楼下天花是否有异状。我们会诚实告诉您，这只是一次保养上门，还是需要检查瓷砖下方的问题。",
  },
};
