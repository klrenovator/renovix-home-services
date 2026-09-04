import type { ArticleDefinition } from "../types";

/**
 * Coverage guide — flooring subfloor preparation.
 *
 * CONTENT_MAP §5 named this as the flooring depth gap: the pillar page says a
 * floor is "only as good as its subfloor" but no guide explained what that
 * preparation actually involves. This guide fills that gap without inventing
 * prices (all figures come from the flooring rows in pricing.ts) and without
 * inventing project proof (it links the one genuine floor-hacking project).
 */
export const flooringSubfloorPreparation: ArticleDefinition = {
  slug: "flooring-subfloor-preparation",
  category: "planning",
  intents: ["preparation", "decision-guide", "when-to-call"],
  published: "2026-09-04",
  relatedServices: ["flooring", "tiling"],
  relatedSubServices: [
    "floor-hacking",
    "spc-flooring",
    "vinyl-flooring",
    "laminate-flooring",
    "floor-repair",
  ],
  relatedProblems: [
    "swollen-flooring",
    "lifting-floor-planks",
    "hollow-flooring",
    "squeaky-flooring",
  ],
  relatedLocations: [
    "kuala-lumpur/mont-kiara",
    "kuala-lumpur/bangsar",
    "selangor/subang-jaya",
    "selangor/puchong",
  ],
  relatedProjects: ["floor-tile-removal-hacking"],
  pricingIds: ["flooring-hacking", "flooring-spc", "flooring-vinyl", "flooring-laminate"],
  en: {
    title: "Renovix Home Services | Flooring Subfloor Preparation Guide (KL & Selangor)",
    metaDescription:
      "What subfloor preparation really means before laying SPC, vinyl or laminate in a KL or Selangor home — level checks, moisture, screeding, hacking and what it costs.",
    h1: "Subfloor Preparation: The Step That Decides How Long Your Floor Lasts",
    excerpt:
      "The most common flooring failure in Malaysian homes is not the plank — it is what the plank was laid on. Here is what a proper subfloor check involves, and why it is never a corner worth cutting.",
    question: "Do I need to prepare the subfloor before installing new flooring?",
    answer:
      "Almost always, yes — and how much preparation depends on what is already there. A flat, dry, sound concrete screed or existing tile floor can often take new SPC, vinyl or laminate directly. An uneven, damp, hollow or crumbling base cannot: the new floor will telegraph every bump, click when walked on, or trap moisture and swell later. Preparation ranges from cleaning and a level check, through self-levelling or screeding, to hacking off the old floor entirely. The honest rule is to assess the subfloor before choosing the floor, because preparation is the single biggest hidden variable in a flooring quotation.",
    keyPoints: [
      "A floor is only as good as its base — uneven or damp subfloors show up later as hollow spots, lifting planks and swelling.",
      "Three checks decide everything: level, moisture, and whether the existing surface is sound.",
      "Many floating floors can be laid over existing flat tiles without hacking — saving time, dust and money.",
      "Levelling or screeding is the biggest hidden cost in flooring; it is quoted after the base is assessed.",
      "If the old floor is hollow, cracked or water-damaged, hacking it off and preparing properly is cheaper than replacing the new floor twice.",
    ],
    sections: [
      {
        heading: "What the subfloor is, and why it decides everything",
        blocks: [
          {
            type: "paragraph",
            text: "The subfloor is the surface your new floor sits on: usually the concrete slab, a cement screed laid over it, or the existing floor you are replacing. A floating floor such as SPC, vinyl or laminate is not glued down everywhere — it locks together and rests on the base, which means the base is doing the structural work. If the base moves, hollows or holds moisture, the finish on top will show it.",
          },
          {
            type: "list",
            items: [
              "Concrete slab or screed: the most common base. Check it is flat, dry and free of loose, dusty or crumbling patches.",
              "Existing tiles: often fine to lay over, provided they are well bonded, not hollow and the extra height works for doors and thresholds.",
              "Old timber or parquet: must be checked for rot and bounce, and usually removed rather than covered.",
              "Newly screeded areas: need the correct curing time before anything is laid on top — moisture trapped under a floor is a warranty-ending mistake.",
            ],
          },
        ],
      },
      {
        heading: "The three checks before any board goes down",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Check the level",
                description:
                  "A long straightedge is run across the floor in both directions to find hollows and high spots. A floating floor tolerates a small tolerance; beyond that, the boards flex and the locking joints open up.",
              },
              {
                title: "Check the moisture",
                description:
                  "This matters most on ground floors and anywhere a pipe or a bathroom is nearby. A damp base shows itself as a musty smell, staining or a hollow-sounding tile; trapping that moisture under new flooring is how swelling and lifting start.",
              },
              {
                title: "Check the soundness",
                description:
                  "Tiles are tapped to find hollows, and loose or crumbling material is marked. Anything that moves or crumbles must be made good before the new floor goes over it.",
              },
            ],
          },
        ],
      },
      {
        heading: "How an uneven or failing base is made ready",
        blocks: [
          {
            type: "paragraph",
            text: "The fix depends on what the checks find. Small local defects are patched; a generally uneven base is levelled; a badly failing one is hacked off and re-prepared. These are the published starting rates for the flooring work involved — preparation is quoted against the condition actually found on site.",
          },
          {
            type: "pricing",
            pricingIds: ["flooring-hacking", "flooring-spc", "flooring-vinyl", "flooring-laminate"],
            note: "Subfloor levelling and screeding is quoted on top of the installation rate and depends on the condition found.",
          },
          {
            type: "callout",
            title: "Preparation is the honest part of the quote",
            text: "Two homes can have the same floor area and very different flooring quotes, purely because one base is flat and dry and the other needs hacking and levelling. A contractor who quotes before seeing the base is guessing — and the guess usually comes out of your floor's lifespan.",
          },
        ],
      },
      {
        heading: "Matching the preparation to the floor",
        blocks: [
          {
            type: "table",
            columns: ["Flooring", "What it needs under it", "What it cannot hide"],
            rows: [
              [
                "SPC",
                "A clean, flat, dry base; tolerates minor unevenness well but not movement",
                "A hollow or crumbling base — clicks and movement transmit straight through",
              ],
              [
                "Vinyl (LVT)",
                "The smoothest base of the lot; imperfections show through thin planks",
                "Roughness and dips — vinyl reads every bump underfoot",
              ],
              [
                "Laminate",
                "Flat and dry above all else; its wood-fibre core swells with moisture",
                "Damp or uneven ground — swelling and peaked joints follow",
              ],
              [
                "Parquet / timber",
                "A fully sound, level base, usually glue or nail fixed",
                "A moving or damp base — boards cup, lift and creak",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Whichever floor you choose, the sequence is the same: assess first, prepare second, install third. Reversing it is how a cheap installation becomes an expensive re-do.",
          },
        ],
      },
      {
        heading: "When to leave it to someone who can see the problem",
        blocks: [
          {
            type: "list",
            items: [
              "The floor is visibly uneven, sloping, or has a high spot you can feel.",
              "Tiles sound hollow over a wide area, or some already move underfoot.",
              "There is a damp smell, staining or a history of leaks under or beside the floor.",
              "You are laying flooring over a bathroom, kitchen or ground-floor slab with no visible damp-proofing.",
              "The old floor is swollen, lifting or water-damaged and you are not sure what is underneath.",
            ],
          },
          {
            type: "paragraph",
            text: "We assess the base before recommending anything, because the right preparation is what makes the difference between a floor that lasts and one that fails in its first rainy season.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I lay new flooring over my existing tiles without hacking?",
        answer:
          "In many cases yes, if the tiles are flat, well bonded and not hollow, and if the extra finished height works for your doors and thresholds. The base is checked first — where the tiles are uneven or failing, they come off or are levelled before the new floor goes down.",
      },
      {
        question: "How long should new screed dry before flooring is laid?",
        answer:
          "Long enough for the moisture content to fall to the level the flooring manufacturer specifies — and no fixed number of days substitutes for a moisture check. Laying a wood-based floor over a base that is still drying traps moisture and leads to swelling later.",
      },
      {
        question: "Why do two similar homes get different flooring quotes?",
        answer:
          "Because preparation differs. One base may be flat and dry and ready to lay on, while the other needs hacking, levelling or screeding. The material and installation rate may be identical; the preparation is what changes the total.",
      },
      {
        question: "My floor sounds hollow when I walk on it. Is that a subfloor problem?",
        answer:
          "Usually yes — hollow sounds point to a void or loose material underneath the finish, such as a debonded tile or a gap under the floating floor. It is worth checking before anything new is laid, because a new floor over a hollow base repeats the same sound.",
      },
      {
        question: "What does subfloor levelling actually involve?",
        answer:
          "The high and low points are mapped, and the base is brought flat — usually with a self-levelling compound or a fresh screed, depending on how far out it is. The area is then allowed to set before installation, so the finished floor sits level and does not flex.",
      },
    ],
    closing:
      "Tell us the room, the condition of the current floor and whether you have ever had leaks or damp there. We will assess the base and tell you honestly how much preparation it needs before a single plank is ordered.",
  },
  ms: {
    title: "Renovix Home Services | Panduan Penyediaan Subfloor Lantai (KL & Selangor)",
    metaDescription:
      "Apa maksud penyediaan subfloor sebelum memasang lantai SPC, vinil atau lamina di rumah KL atau Selangor — semakan aras, kelembapan, screeding, pemecahan dan kosnya.",
    h1: "Penyediaan Subfloor: Langkah yang Menentukan Berapa Lama Lantai Anda Tahan",
    excerpt:
      "Kegagalan lantai yang paling biasa di rumah Malaysia bukan pada papan lantai itu sendiri — tetapi pada dasar tempat papan itu dipasang. Ini yang terlibat dalam semakan subfloor yang betul, dan kenapa ia bukan perkara untuk dijimatkan.",
    question: "Perlukah saya menyediakan subfloor sebelum memasang lantai baharu?",
    answer:
      "Hampir selalu ya — dan berapa banyak penyediaan bergantung pada apa yang sudah ada. Tapak konkrit atau lantai jubin sedia ada yang rata, kering dan kukuh selalunya boleh terus dipasang dengan SPC, vinil atau lamina baharu. Tapak yang tidak rata, lembap, berongga atau rapuh tidak boleh: lantai baharu akan menampakkan setiap bonggol, berbunyi klik apabila dipijak, atau memerangkap kelembapan lalu menggelembung kemudian. Penyediaan bermula daripada pembersihan dan semakan aras, sehingga meratakan sendiri atau screeding, hinggalah memecah lantai lama sepenuhnya. Peraturan jujurnya ialah menilai subfloor sebelum memilih lantai, kerana penyediaan ialah pemboleh ubah tersembunyi terbesar dalam sebut harga lantai.",
    keyPoints: [
      "Lantai hanya sebaik dasarnya — subfloor yang tidak rata atau lembap muncul kemudian sebagai bintik berongga, papan terangkat dan lantai menggelembung.",
      "Tiga semakan menentukan segalanya: aras, kelembapan, dan kekukuhan permukaan sedia ada.",
      "Banyak lantai terapung boleh dipasang di atas jubin rata yang sedia ada tanpa perlu dipecah — menjimatkan masa, habuk dan wang.",
      "Meratakan atau screeding ialah kos tersembunyi terbesar dalam pemasangan lantai; ia disebut selepas dasar dinilai.",
      "Jika lantai lama berongga, retak atau rosak akibat air, memecahnya dan menyediakan tapak dengan betul lebih murah daripada mengganti lantai baharu dua kali.",
    ],
    sections: [
      {
        heading: "Apa itu subfloor, dan kenapa ia menentukan segalanya",
        blocks: [
          {
            type: "paragraph",
            text: "Subfloor ialah permukaan tempat lantai baharu anda duduk: biasanya papak konkrit, screed simen yang diletakkan di atasnya, atau lantai sedia ada yang anda ganti. Lantai terapung seperti SPC, vinil atau lamina tidak digam merata-rata — ia mengunci sesama sendiri dan berehat di atas tapak, bermakna tapak itulah yang menanggung kerja strukturnya. Jika tapak itu bergerak, berongga atau menahan kelembapan, kemasan di atasnya akan menampakkannya.",
          },
          {
            type: "list",
            items: [
              "Papak konkrit atau screed: tapak paling biasa. Periksa ia rata, kering dan bebas daripada tompok yang longgar, berdebu atau rapuh.",
              "Jubin sedia ada: selalunya boleh dipasang terus, asalkan ikatan kukuh, tidak berongga dan ketinggian tambahan sesuai untuk pintu dan ambang.",
              "Kayu lama atau parket: mesti diperiksa untuk reput dan lenturan, dan selalunya dibuang berbanding ditutup.",
              "Kawasan baharu di-screed: perlu masa pengeringan yang betul sebelum apa-apa dipasang di atasnya — kelembapan terperangkap di bawah lantai ialah kesilapan yang menamatkan jaminan.",
            ],
          },
        ],
      },
      {
        heading: "Tiga semakan sebelum sebarang papan dipasang",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Semak aras",
                description:
                  "Kayu pelurus panjang dilalukan merentas lantai dalam dua arah untuk mencari kawasan rendah dan tinggi. Lantai terapung bertoleransi sedikit; melebihi itu, papan melentur dan sambungan kunci terbuka.",
              },
              {
                title: "Semak kelembapan",
                description:
                  "Ini paling penting di tingkat bawah dan mana-mana yang berhampiran paip atau bilik air. Tapak lembap menunjukkan dirinya melalui bau hapak, kesan kotoran atau jubin berbunyi berongga; memerangkap kelembapan itu di bawah lantai baharu ialah bagaimana penggelembungan dan pengangkatan bermula.",
              },
              {
                title: "Semak kekukuhan",
                description:
                  "Jubin diketuk untuk mencari kawasan berongga, dan bahan yang longgar atau rapuh ditanda. Apa-apa yang bergerak atau rapuh mesti dibaiki sebelum lantai baharu dipasang di atasnya.",
              },
            ],
          },
        ],
      },
      {
        heading: "Bagaimana tapak yang tidak rata atau rosak disediakan",
        blocks: [
          {
            type: "paragraph",
            text: "Pembaikan bergantung pada apa yang ditemui semasa semakan. Kecacatan kecil setempat ditampal; tapak yang umumnya tidak rata diratakan; yang teruk gagal dipecah dan disediakan semula. Ini kadar permulaan yang diterbitkan untuk kerja lantai yang terlibat — penyediaan disebut mengikut keadaan sebenar di tapak.",
          },
          {
            type: "pricing",
            pricingIds: ["flooring-hacking", "flooring-spc", "flooring-vinyl", "flooring-laminate"],
            note: "Meratakan dan screeding subfloor disebut di atas kadar pemasangan dan bergantung pada keadaan yang ditemui.",
          },
          {
            type: "callout",
            title: "Penyediaan ialah bahagian jujur dalam sebut harga",
            text: "Dua rumah boleh mempunyai keluasan lantai yang sama tetapi sebut harga lantai yang sangat berbeza, semata-mata kerana satu tapak rata dan kering manakala satu lagi perlu dipecah dan diratakan. Kontraktor yang menyebut harga sebelum melihat tapak sedang meneka — dan tekaan itu biasanya ditanggung oleh jangka hayat lantai anda.",
          },
        ],
      },
      {
        heading: "Memadankan penyediaan dengan jenis lantai",
        blocks: [
          {
            type: "table",
            columns: ["Jenis lantai", "Apa yang diperlukan di bawahnya", "Apa yang tidak dapat disembunyikan"],
            rows: [
              [
                "SPC",
                "Tapak bersih, rata dan kering; bertoleransi sedikit ketidaksamaan tetapi bukan pergerakan",
                "Tapak berongga atau rapuh — bunyi klik dan pergerakan terus menembusi",
              ],
              [
                "Vinil (LVT)",
                "Tapak paling licin antara semua; ketidaksempurnaan kelihatan melalui papan nipis",
                "Kekasaran dan lekukan — vinil menampakkan setiap bonggol",
              ],
              [
                "Lamina",
                "Paling utama rata dan kering; teras gentian kayunya menggelembung dengan kelembapan",
                "Tapak lembap atau tidak rata — penggelembungan dan sendi menonjol menyusul",
              ],
              [
                "Parket / kayu",
                "Tapak rata dan kukuh sepenuhnya, selalunya digam atau dipaku",
                "Tapak yang bergerak atau lembap — papan melengkung, terangkat dan berkeriut",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Walau apa lantai yang anda pilih, urutannya sama: nilai dahulu, sediakan kedua, pasang ketiga. Membalikkannya ialah bagaimana pemasangan murah menjadi pembaikan semula yang mahal.",
          },
        ],
      },
      {
        heading: "Bila perlu serahkan kepada yang dapat melihat masalahnya",
        blocks: [
          {
            type: "list",
            items: [
              "Lantai kelihatan tidak rata, mencerun, atau ada bahagian tinggi yang boleh dirasai.",
              "Jubin berbunyi berongga di kawasan luas, atau sebahagiannya sudah bergerak apabila dipijak.",
              "Ada bau hapak, kesan kotoran atau sejarah bocor di bawah atau di tepi lantai.",
              "Anda memasang lantai di atas bilik air, dapur atau papak tingkat bawah tanpa kalis lembap yang kelihatan.",
              "Lantai lama menggelembung, terangkat atau rosak akibat air dan anda tidak pasti apa yang ada di bawahnya.",
            ],
          },
          {
            type: "paragraph",
            text: "Kami menilai tapak sebelum mencadangkan apa-apa, kerana penyediaan yang betul ialah yang membezakan antara lantai yang tahan dan yang gagal pada musim hujan pertamanya.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Bolehkah saya pasang lantai baharu di atas jubin sedia ada tanpa dipecah?",
        answer:
          "Dalam banyak kes boleh, jika jubin rata, terikat kukuh dan tidak berongga, serta jika ketinggian siap tambahan sesuai untuk pintu dan ambang anda. Tapak diperiksa dahulu — jika jubin tidak rata atau gagal, ia dibuang atau diratakan sebelum lantai baharu dipasang.",
      },
      {
        question: "Berapa lama screed baharu perlu kering sebelum lantai dipasang?",
        answer:
          "Cukup lama sehingga kandungan lembapan turun ke paras yang ditetapkan pengeluar lantai — dan tiada bilangan hari tetap boleh menggantikan semakan kelembapan. Memasang lantai berasaskan kayu di atas tapak yang masih kering memerangkap kelembapan dan menyebabkan penggelembungan kemudian.",
      },
      {
        question: "Kenapa dua rumah yang serupa mendapat sebut harga lantai berbeza?",
        answer:
          "Kerana penyediaan berbeza. Satu tapak mungkin rata dan kering serta sedia dipasang, manakala satu lagi perlu dipecah, diratakan atau di-screed. Kadar bahan dan pemasangan mungkin sama; penyediaan itulah yang mengubah jumlahnya.",
      },
      {
        question: "Lantai saya berbunyi berongga apabila dipijak. Adakah itu masalah subfloor?",
        answer:
          "Selalunya ya — bunyi berongga menunjukkan ruang kosong atau bahan longgar di bawah kemasan, seperti jubin yang terlepas ikatan atau jurang di bawah lantai terapung. Perlu diperiksa sebelum apa-apa yang baharu dipasang, kerana lantai baharu di atas tapak berongga akan mengulangi bunyi yang sama.",
      },
      {
        question: "Apa sebenarnya yang terlibat dalam meratakan subfloor?",
        answer:
          "Titik tinggi dan rendah dipetakan, dan tapak diratakan — selalunya dengan sebatian meratakan sendiri atau screed baharu, bergantung pada sejauh mana ketidaksamaannya. Kawasan itu kemudian dibiarkan mengeras sebelum pemasangan, supaya lantai siap duduk rata dan tidak melentur.",
      },
    ],
    closing:
      "Beritahu kami bilik tersebut, keadaan lantai semasa dan sama ada pernah berlaku bocor atau lembap di situ. Kami akan menilai tapak dan memberitahu dengan jujur berapa banyak penyediaan yang diperlukan sebelum sehelai papan pun ditempah.",
  },
  zh: {
    title: "Renovix Home Services | 地板基层准备指南（吉隆坡与雪兰莪）",
    metaDescription:
      "在吉隆坡或雪兰莪家中铺设 SPC、塑胶地板或强化地板前，基层准备真正包括什么 —— 平整度检查、潮气、水泥找平、打拆及所需费用。",
    h1: "地板基层准备：决定地板寿命的关键一步",
    excerpt:
      "马来西亚家庭最常见的地板问题，往往不是地板本身，而是铺在什么上面。以下是一次到位的基层检查包括什么，以及为什么这一步永远不该省。",
    question: "铺设新地板前需要准备基层吗？",
    answer:
      "几乎总是需要 —— 准备多少取决于现状。平整、干燥、坚实的混凝土基层或现有瓷砖地面，通常可以直接铺设新的 SPC、塑胶地板或强化地板。不平整、受潮、空鼓或酥松的基面则不行：新地板会把每一处高低都显露出来，踩上去有响声，或者把潮气封在下面、日后起拱。准备工作从清洁与平整度检查，到自流平或水泥找平，再到完全打掉旧地面。诚实的原则是：先评估基层，再选地板，因为准备是地板报价中最大的隐藏变量。",
    keyPoints: [
      "地板的好坏取决于基面 —— 不平整或受潮的基层，日后会表现为空鼓、翘边和起拱。",
      "三项检查决定一切：平整度、潮气，以及现有地面的坚实程度。",
      "许多悬浮式地板可以直接铺在现有平整瓷砖上，无需打拆 —— 省时间、省粉尘、省费用。",
      "找平或水泥找平是铺地板最大的隐藏成本；须在评估基面后才报价。",
      "如果旧地面空鼓、开裂或受水损坏，打掉并妥善准备，比新地板返工两次更省钱。",
    ],
    sections: [
      {
        heading: "什么是基层，为什么它决定一切",
        blocks: [
          {
            type: "paragraph",
            text: "基层就是新地板铺在上面的那层：通常是混凝土楼板、铺在其上的水泥找平层，或是您正在更换的现有地面。悬浮式地板如 SPC、塑胶地板或强化地板并非满胶粘贴 —— 它相互锁扣、搁置在基面上，也就是说承载结构作用的是基面。如果基面移动、空鼓或蓄潮，上面的饰面就会显露出来。",
          },
          {
            type: "list",
            items: [
              "混凝土楼板或水泥找平层：最常见的基面。检查其平整、干燥，没有松动、起灰或酥松的部位。",
              "现有瓷砖：通常可以直接铺设，前提是粘结牢固、不空鼓，且增加的高度适合房门与门槛。",
              "旧木地板或拼花地板：必须检查腐烂与弹性，通常宜拆除而非覆盖。",
              "新做找平的部位：需要足够的养护时间才能在其上铺任何东西 —— 潮气被封在地板下，是让质保失效的错误。",
            ],
          },
        ],
      },
      {
        heading: "铺任何板之前的三项检查",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "检查平整度",
                description:
                  "用长靠尺沿两个方向横拉地面，找出低洼与高凸。悬浮式地板只能容忍很小的误差；超出之后，板子会弯曲、锁扣接缝会张开。",
              },
              {
                title: "检查潮气",
                description:
                  "这在首层以及任何靠近水管或浴室的地方最为重要。受潮基面的表现是霉味、污渍或瓷砖空鼓声；把潮气封在新地板下面，正是起拱与翘边的开端。",
              },
              {
                title: "检查坚实度",
                description:
                  "敲击瓷砖找出空鼓，并标记松动或酥松的材料。任何会移动或碎裂的部位，都必须在新地板铺上去之前修补好。",
              },
            ],
          },
        ],
      },
      {
        heading: "如何把不平整或失效的基面准备好",
        blocks: [
          {
            type: "paragraph",
            text: "修补方式取决于检查发现的问题。小的局部缺陷做局部填补；整体不平的基面做找平；严重失效的则打掉重做。以下是相关地板工作的公开起步价 —— 准备费用按现场实际状况报价。",
          },
          {
            type: "pricing",
            pricingIds: ["flooring-hacking", "flooring-spc", "flooring-vinyl", "flooring-laminate"],
            note: "基层找平与水泥找平在安装费之外另行报价，视现场状况而定。",
          },
          {
            type: "callout",
            title: "准备才是报价里诚实的那一部分",
            text: "两户面积相同的房子，地板报价可能差别很大，只因一个基面平整干燥，另一个需要打拆与找平。没看基面就先报价的承包方是在猜 —— 而这个猜测，最后往往由您地板的寿命来买单。",
          },
        ],
      },
      {
        heading: "按地板类型匹配准备工作",
        blocks: [
          {
            type: "table",
            columns: ["地板类型", "下面需要什么", "它藏不住什么"],
            rows: [
              [
                "SPC 石塑地板",
                "干净、平整、干燥的基面；能容忍轻微不平，但不能容忍移动",
                "空鼓或酥松的基面 —— 响声与位移会直接透出来",
              ],
              [
                "塑胶地板（LVT）",
                "所有地板中对基面要求最平滑的；缺陷会透过薄板显现",
                "粗糙与凹陷 —— 塑胶地板会显出每一处高低",
              ],
              [
                "强化地板",
                "首要的是平整与干燥；其木质纤维芯遇潮会膨胀",
                "受潮或不平的地面 —— 随之而来的是起拱与翘缝",
              ],
              [
                "拼花 / 实木地板",
                "完全坚实、平整的基面，通常胶粘或钉装",
                "移动或受潮的基面 —— 板子会起翘、拱起并吱吱作响",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "无论您选哪种地板，顺序都一样：先评估，再准备，最后铺设。把顺序颠倒，就是让一次廉价安装变成一次昂贵的返工。",
          },
        ],
      },
      {
        heading: "什么时候该交给能看出问题的人",
        blocks: [
          {
            type: "list",
            items: [
              "地面明显不平、有坡度，或有一处能感觉到的高凸。",
              "瓷砖大面积空鼓，或部分踩上去已经松动。",
              "地面有霉味、污渍，或地板下方及旁边有过漏水。",
              "您要在没有可见防潮层的浴室、厨房或首层楼板上铺地板。",
              "旧地板起拱、翘起或受水损坏，而您不清楚下面是什么。",
            ],
          },
          {
            type: "paragraph",
            text: "我们在提出任何建议之前先评估基面，因为正确的准备，正是一块地板能长久使用、还是在第一个雨季就出问题的分界。",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "不拆除现有瓷砖，能直接在上面铺新地板吗？",
        answer:
          "许多情况下可以，前提是瓷砖平整、粘结牢固且不空鼓，并且增加的完成高度适合您的房门与门槛。基面会先检查 —— 若瓷砖不平或失效，会先拆除或找平，再铺新地板。",
      },
      {
        question: "新做的水泥找平要干多久才能铺地板？",
        answer:
          "要干到含水率降至地板制造商规定的水平 —— 任何固定的天数都无法替代含水率检测。把木质基材的地板铺在仍在干燥的基面上，会把潮气封住，日后导致起拱。",
      },
      {
        question: "为什么两户相似的房子，地板报价不一样？",
        answer:
          "因为准备工作不同。一户的基面可能平整干燥、可直接铺设，另一户则需要打拆、找平或水泥找平。材料与安装费率可能完全相同，改变总价的是准备工作。",
      },
      {
        question: "踩上去地板有空鼓声，这是基层的问题吗？",
        answer:
          "通常是 —— 空鼓声说明饰面下方有空洞或松动材料，例如脱粘的瓷砖，或悬浮地板下方的缝隙。在铺任何新东西之前值得先检查，因为铺在空鼓基面上的新地板会发出同样的声音。",
      },
      {
        question: "基层找平具体包括什么？",
        answer:
          "先测出高低点的分布，再把基面找平 —— 通常使用自流平材料或重新做水泥找平，视偏差程度而定。之后让该区域充分固化再铺装，使成品地板平稳贴合、不再弯折。",
      },
    ],
    closing:
      "告诉我们房间位置、现有地面的状况，以及那里是否曾漏水或返潮。我们会评估基面，并如实告诉您在订购任何一块地板之前需要做多少准备。",
  },
};
