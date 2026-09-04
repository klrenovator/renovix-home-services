import type { ArticleDefinition } from "../types";

/**
 * Backlog item 2 — cost guide: full house painting by property type.
 * Supports the painting pillar; property-type framing is what makes it
 * distinct from the pillar's own pricing section.
 */
export const housePaintingCostByPropertyType: ArticleDefinition = {
  slug: "house-painting-cost-by-property-type",
  category: "cost-guides",
  intents: ["cost", "price-factors", "preparation", "decision-guide"],
  published: "2026-09-04",
  relatedServices: ["painting", "general-renovation", "waterproofing"],
  relatedSubServices: [],
  relatedProblems: ["peeling-paint", "faded-paint", "uneven-paint", "cracked-walls", "mouldy-walls"],
  relatedLocations: [
    "kuala-lumpur/cheras",
    "kuala-lumpur/bangsar",
    "selangor/shah-alam",
    "selangor/puchong",
  ],
  relatedProjects: [],
  pricingIds: ["painting-full-house", "painting-interior", "painting-exterior", "painting-touchup-repair"],
  en: {
    title: "Renovix Home Services | Full House Painting Cost by Property Type in KL & Selangor",
    metaDescription:
      "How full house painting is priced in Kuala Lumpur and Selangor — by wall area, not by room count — and what a condo, terrace, semi-D or bungalow typically involves. Free quotation.",
    h1: "Full House Painting Cost by Property Type in Kuala Lumpur & Selangor",
    excerpt:
      "Why painters quote by wall area rather than by house, what changes between a condo and a landed home, and how preparation work moves the final figure.",
    question: "How much does it cost to paint a whole house in KL or Selangor?",
    answer:
      "Interior and exterior painting are priced per square foot of wall area, and a whole-house package has its own starting rate — all shown in the table below. The number of rooms matters far less than the total wall and ceiling area, the ceiling height, and how much preparation the walls need. A repaint over sound walls is the cheapest scenario; peeling, mouldy or previously patched walls add scraping, sealing and skim-coating before a drop of finish paint is applied.",
    keyPoints: [
      "Painting is quoted by wall area, so a high-ceiling three-bedroom unit can cost more than a low-ceiling four-bedroom one.",
      "Preparation — scraping, sealing, filling, sanding — is where quotations genuinely differ. A cheap quote usually means less preparation, not cheaper paint.",
      "Exterior walls carry a higher rate than interior because of access, weather exposure and the coating systems used.",
      "Peeling or mouldy walls have a cause. Painting over damp without fixing the source wastes the whole job.",
      "Condominium works run on building rules: permits, working hours, lift bookings and corridor protection.",
    ],
    sections: [
      {
        heading: "How painting is priced",
        blocks: [
          {
            type: "paragraph",
            text: "There is no single \"price to paint a house\", because two houses with the same number of bedrooms can differ by thousands of square feet of wall. Our catalogue prices the three ways owners actually buy painting: a whole-house package, per square foot for interior walls, and per square foot for exterior walls.",
          },
          {
            type: "pricing",
            pricingIds: ["painting-full-house", "painting-interior", "painting-exterior"],
          },
          {
            type: "paragraph",
            text: "Where only part of the house needs attention — a patched ceiling, a wall that has been damaged, one room after a leak — repair and touch-up painting is priced as its own job rather than pushed into a whole-house scope.",
          },
          { type: "pricing", pricingIds: ["painting-touchup-repair"] },
        ],
      },
      {
        heading: "What each property type usually involves",
        blocks: [
          {
            type: "paragraph",
            text: "Property type is a good shorthand for scope, because it predicts ceiling height, exterior exposure and site access more reliably than floor area does.",
          },
          {
            type: "table",
            columns: ["Property type", "What typically drives the scope", "Usual scope"],
            rows: [
              [
                "Condominium / serviced apartment",
                "Interior only; standard ceiling heights; building renovation rules; lift and corridor protection",
                "Interior walls and ceilings, often between tenancies",
              ],
              [
                "Terrace / link house",
                "Interior plus a front façade and boundary wall; stairwell height at the landing",
                "Full interior, front exterior, gate wall",
              ],
              [
                "Semi-detached",
                "Two or three exposed elevations; more scaffolding or ladder work",
                "Full interior plus exterior on the exposed sides",
              ],
              [
                "Bungalow",
                "Full exterior envelope, often double-height living areas and long boundary walls",
                "Full interior and exterior, staged over more days",
              ],
              [
                "Shop lot / small office",
                "Ceiling grid and service runs; work usually scheduled after hours",
                "Interior walls and ceilings, phased around operating hours",
              ],
            ],
          },
          {
            type: "callout",
            title: "Double-height spaces cost more than their floor area suggests",
            text: "A double-volume living room or a stairwell void needs scaffolding or a tower rather than a stepladder. That is time and equipment, and it is worth flagging when you request a quotation so the figure you get is realistic.",
          },
        ],
      },
      {
        heading: "Preparation: where quotations really differ",
        blocks: [
          {
            type: "paragraph",
            text: "Two painters can quote the same wall area very differently, and the gap is almost always preparation. This is the sequence that decides whether the finish lasts.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Inspect and identify the cause",
                description:
                  "Peeling, bubbling, chalking and mould each point at a different cause. Painting over an active moisture source will fail again within months, so the source is dealt with first.",
              },
              {
                title: "Scrape and sand back",
                description:
                  "Loose and flaking coating is removed back to a sound surface. This is the dustiest and most time-consuming step, and the one most often skipped in a low quotation.",
              },
              {
                title: "Fill, patch and skim",
                description:
                  "Hairline cracks, nail holes and previous patches are filled; badly uneven walls get a skim coat so the finish does not telegraph every repair.",
              },
              {
                title: "Seal or prime",
                description:
                  "A sealer binds the surface and evens out absorbency, so the topcoat covers consistently instead of patchily.",
              },
              {
                title: "Apply the finish coats",
                description:
                  "Coats are applied in the manufacturer's recommended sequence with proper drying time between them. Colour changes — especially dark to light — need more coats.",
              },
            ],
          },
        ],
      },
      {
        heading: "Common wall problems that change the job",
        blocks: [
          {
            type: "list",
            items: [
              "Peeling paint often means moisture behind the wall or a previous coat applied over an unsealed or dirty surface. The cause has to be found before repainting.",
              "Mould and dark patches in bathrooms, behind wardrobes or on external-facing walls point at damp, not at bad paint. Cleaning and treating comes first; anti-fungal coating alone is not a cure for a leak.",
              "Cracked walls can be cosmetic hairline shrinkage or a sign of movement. Cosmetic cracks are filled; structural ones need looking at before being covered up.",
              "Faded and chalky exterior walls are normal UV wear in the Malaysian climate and are usually a straightforward repaint after washing down.",
              "Patchy, uneven finishes are usually an application or absorbency problem, fixable with sealing and an extra coat.",
            ],
          },
        ],
      },
      {
        heading: "Planning your repaint",
        blocks: [
          {
            type: "list",
            items: [
              "Empty or centralise the rooms if you can — furniture protection takes time and time is cost.",
              "Repainting between tenants or before moving in is far quicker and cheaper than painting around a furnished home.",
              "Exterior work depends on the weather; a wet week can push the schedule, and no honest painter will apply a coat onto a wall that has not dried.",
              "If your building requires a renovation permit even for painting, arrange it before booking the dates.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you quote per room or for the whole house?",
        answer:
          "Both are possible, but the underlying measure is wall area. A whole-house package suits an empty or newly handed-over property; individual rooms are quoted separately when you are painting selectively.",
      },
      {
        question: "How many coats of paint are included?",
        answer:
          "The standard scope is a sealer or primer where the surface needs it, followed by the finish coats needed to achieve even coverage. Dramatic colour changes and deep colours often need an extra coat, and that is stated in the quotation rather than discovered later.",
      },
      {
        question: "Can you paint over mouldy walls?",
        answer:
          "Not directly. The mould has to be cleaned and treated, and the moisture feeding it has to be identified — often a seepage or waterproofing issue rather than a painting one. Painting over live mould simply hides it until it comes back through.",
      },
      {
        question: "Should I buy the paint myself?",
        answer:
          "You can. Many owners choose the brand and finish themselves and we apply it. If we supply, the quotation lists the paint separately so you can see exactly what is being used and change it if you prefer another product.",
      },
      {
        question: "How long does painting a whole house take?",
        answer:
          "It depends on wall area and how much preparation is needed, and preparation is usually longer than painting. We give a working-day estimate with the quotation once we know the property size, condition and whether it will be occupied.",
      },
    ],
    closing:
      "Send us the property type, approximate size and a few photographs of the worst walls — especially anything peeling or stained. That is usually enough for a realistic figure before anyone visits.",
  },
  ms: {
    title: "Renovix Home Services | Kos Cat Seluruh Rumah Mengikut Jenis Hartanah di KL & Selangor",
    metaDescription:
      "Cara kos mengecat seluruh rumah dikira di Kuala Lumpur dan Selangor — mengikut luas dinding, bukan bilangan bilik — dan apa yang biasa terlibat bagi kondo, teres, berkembar atau banglo.",
    h1: "Kos Cat Seluruh Rumah Mengikut Jenis Hartanah di Kuala Lumpur & Selangor",
    excerpt:
      "Kenapa tukang cat mengira mengikut luas dinding dan bukan mengikut rumah, apa yang berbeza antara kondo dan rumah bertanah, dan bagaimana kerja persediaan mengubah jumlah akhir.",
    question: "Berapakah kos mengecat seluruh rumah di KL atau Selangor?",
    answer:
      "Cat dalaman dan luaran dikira setiap kaki persegi luas dinding, dan pakej seluruh rumah mempunyai kadar permulaannya sendiri — semuanya ditunjukkan dalam jadual di bawah. Bilangan bilik kurang penting berbanding jumlah luas dinding dan siling, ketinggian siling, serta jumlah kerja persediaan yang diperlukan. Mengecat semula di atas dinding yang masih elok ialah keadaan paling murah; dinding yang mengelupas, berkulat atau pernah ditampal memerlukan kerja mengikis, menutup dan melapis sebelum setitik cat akhir disapu.",
    keyPoints: [
      "Kerja cat dikira mengikut luas dinding, jadi unit tiga bilik bersiling tinggi boleh lebih mahal daripada unit empat bilik bersiling rendah.",
      "Kerja persediaan — mengikis, menutup, menampal, mengampelas — itulah punca sebenar perbezaan sebut harga. Sebut harga murah biasanya bermakna kurang persediaan, bukan cat lebih murah.",
      "Dinding luar berkadar lebih tinggi daripada dinding dalam kerana akses, pendedahan cuaca dan sistem salutan yang digunakan.",
      "Dinding mengelupas atau berkulat ada puncanya. Mengecat di atas kelembapan tanpa membaiki puncanya membazirkan keseluruhan kerja.",
      "Kerja di kondominium tertakluk kepada peraturan bangunan: permit, waktu kerja, tempahan lif dan perlindungan koridor.",
    ],
    sections: [
      {
        heading: "Bagaimana kerja cat dikira",
        blocks: [
          {
            type: "paragraph",
            text: "Tiada satu \"harga mengecat rumah\", kerana dua rumah dengan bilangan bilik yang sama boleh berbeza beribu kaki persegi luas dinding. Katalog kami mengira tiga cara pemilik sebenarnya membeli kerja cat: pakej seluruh rumah, setiap kaki persegi untuk dinding dalaman, dan setiap kaki persegi untuk dinding luaran.",
          },
          {
            type: "pricing",
            pricingIds: ["painting-full-house", "painting-interior", "painting-exterior"],
          },
          {
            type: "paragraph",
            text: "Jika hanya sebahagian rumah memerlukan perhatian — siling yang ditampal, dinding yang rosak, satu bilik selepas kebocoran — kerja pembaikan dan cat sentuhan dikira sebagai kerja tersendiri, bukan dimasukkan ke dalam skop seluruh rumah.",
          },
          { type: "pricing", pricingIds: ["painting-touchup-repair"] },
        ],
      },
      {
        heading: "Apa yang biasa terlibat bagi setiap jenis hartanah",
        blocks: [
          {
            type: "paragraph",
            text: "Jenis hartanah ialah panduan ringkas yang baik untuk skop kerja, kerana ia meramal ketinggian siling, pendedahan luaran dan akses tapak dengan lebih tepat berbanding keluasan lantai.",
          },
          {
            type: "table",
            columns: ["Jenis hartanah", "Apa yang menentukan skop", "Skop biasa"],
            rows: [
              [
                "Kondominium / apartmen servis",
                "Dalaman sahaja; ketinggian siling standard; peraturan renovasi bangunan; perlindungan lif dan koridor",
                "Dinding dan siling dalaman, selalunya antara penyewa",
              ],
              [
                "Rumah teres / berkembar sebaris",
                "Dalaman serta fasad hadapan dan dinding pagar; ketinggian ruang tangga",
                "Dalaman penuh, luaran hadapan, dinding pagar",
              ],
              [
                "Rumah berkembar",
                "Dua atau tiga permukaan terdedah; lebih banyak kerja perancah atau tangga",
                "Dalaman penuh serta luaran pada bahagian terdedah",
              ],
              [
                "Banglo",
                "Seluruh permukaan luar, selalunya ruang tamu dua aras dan dinding pagar panjang",
                "Dalaman dan luaran penuh, dijalankan berperingkat",
              ],
              [
                "Lot kedai / pejabat kecil",
                "Grid siling dan laluan perkhidmatan; kerja biasanya dijadualkan selepas waktu operasi",
                "Dinding dan siling dalaman, berperingkat mengikut waktu operasi",
              ],
            ],
          },
          {
            type: "callout",
            title: "Ruang dua aras lebih mahal daripada yang disangka",
            text: "Ruang tamu dua aras atau ruang tangga memerlukan perancah, bukan sekadar tangga lipat. Itu melibatkan masa dan peralatan, jadi ia wajar dinyatakan semasa meminta sebut harga supaya angka yang anda terima realistik.",
          },
        ],
      },
      {
        heading: "Persediaan: di sinilah sebut harga sebenarnya berbeza",
        blocks: [
          {
            type: "paragraph",
            text: "Dua tukang cat boleh memberi harga yang sangat berbeza untuk luas dinding yang sama, dan jurangnya hampir selalu pada kerja persediaan. Inilah urutan yang menentukan sama ada kemasan itu bertahan.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Periksa dan kenal pasti punca",
                description:
                  "Mengelupas, menggelembung, berdebu dan berkulat masing-masing menunjukkan punca berbeza. Mengecat di atas sumber kelembapan yang masih aktif akan gagal semula dalam beberapa bulan, jadi puncanya diuruskan dahulu.",
              },
              {
                title: "Kikis dan ampelas",
                description:
                  "Salutan longgar dan mengelupas dibuang sehingga ke permukaan yang kukuh. Ini langkah paling berhabuk dan memakan masa, dan paling kerap dilangkau dalam sebut harga murah.",
              },
              {
                title: "Tampal dan ratakan",
                description:
                  "Retak halus, lubang paku dan tampalan lama diisi; dinding yang teruk tidak rata dilapis nipis supaya kemasan tidak menampakkan setiap pembaikan.",
              },
              {
                title: "Sapu penutup atau primer",
                description:
                  "Penutup mengikat permukaan dan menyeragamkan penyerapan, supaya lapisan akhir menutup secara sekata dan bukan berbelang.",
              },
              {
                title: "Sapu lapisan akhir",
                description:
                  "Lapisan disapu mengikut urutan yang disyorkan pengeluar dengan masa kering yang mencukupi antara lapisan. Pertukaran warna — terutamanya gelap ke cerah — memerlukan lebih banyak lapisan.",
              },
            ],
          },
        ],
      },
      {
        heading: "Masalah dinding biasa yang mengubah kerja",
        blocks: [
          {
            type: "list",
            items: [
              "Cat mengelupas selalunya bermakna kelembapan di sebalik dinding atau lapisan sebelumnya disapu di atas permukaan yang tidak ditutup atau kotor. Puncanya perlu dicari sebelum mengecat semula.",
              "Kulat dan tompokan gelap di bilik air, di belakang almari atau pada dinding menghadap luar menunjukkan kelembapan, bukan cat yang buruk. Pembersihan dan rawatan didahulukan; salutan anti-kulat sahaja bukan penyelesaian untuk kebocoran.",
              "Dinding retak boleh jadi retak halus kosmetik atau tanda pergerakan struktur. Retak kosmetik ditampal; retak struktur perlu diperiksa sebelum ditutup.",
              "Dinding luar pudar dan berdebu ialah kesan UV biasa dalam iklim Malaysia dan lazimnya hanya perlu dicuci dan dicat semula.",
              "Kemasan berbelang dan tidak sekata biasanya masalah penyapuan atau penyerapan, yang boleh dibaiki dengan penutup dan satu lapisan tambahan.",
            ],
          },
        ],
      },
      {
        heading: "Merancang kerja cat semula anda",
        blocks: [
          {
            type: "list",
            items: [
              "Kosongkan atau kumpulkan perabot di tengah bilik jika boleh — melindungi perabot mengambil masa, dan masa ialah kos.",
              "Mengecat antara penyewa atau sebelum berpindah masuk jauh lebih cepat dan murah berbanding mengecat rumah yang berperabot.",
              "Kerja luaran bergantung pada cuaca; minggu hujan boleh melewatkan jadual, dan tiada tukang cat yang jujur akan menyapu cat pada dinding yang belum kering.",
              "Jika bangunan anda memerlukan permit renovasi walaupun untuk kerja cat, uruskan ia sebelum menempah tarikh.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Adakah anda mengira mengikut bilik atau seluruh rumah?",
        answer:
          "Kedua-duanya boleh, tetapi ukuran asasnya ialah luas dinding. Pakej seluruh rumah sesuai untuk hartanah kosong atau baru diserahkan; bilik individu dikira berasingan apabila anda mengecat secara terpilih.",
      },
      {
        question: "Berapa lapisan cat yang termasuk?",
        answer:
          "Skop standard ialah penutup atau primer di mana permukaan memerlukannya, diikuti lapisan akhir yang mencukupi untuk liputan sekata. Pertukaran warna yang ketara dan warna gelap selalunya memerlukan lapisan tambahan, dan itu dinyatakan dalam sebut harga, bukan ditemui kemudian.",
      },
      {
        question: "Bolehkah anda mengecat di atas dinding berkulat?",
        answer:
          "Tidak secara terus. Kulat perlu dibersihkan dan dirawat, dan sumber kelembapan yang menyuburkannya perlu dikenal pasti — selalunya masalah resapan atau kalis air, bukan masalah cat. Mengecat di atas kulat yang masih hidup hanya menyembunyikannya sehingga ia timbul semula.",
      },
      {
        question: "Perlukah saya membeli cat sendiri?",
        answer:
          "Boleh. Ramai pemilik memilih jenama dan kemasan sendiri dan kami menyapunya. Jika kami yang membekalkan, sebut harga menyenaraikan cat secara berasingan supaya anda nampak dengan tepat apa yang digunakan dan boleh menukarnya jika mahu produk lain.",
      },
      {
        question: "Berapa lama masa untuk mengecat seluruh rumah?",
        answer:
          "Ia bergantung pada luas dinding dan jumlah persediaan yang diperlukan, dan persediaan biasanya mengambil masa lebih lama daripada mengecat. Kami memberi anggaran hari bekerja bersama sebut harga setelah tahu saiz hartanah, keadaannya dan sama ada ia berpenghuni.",
      },
    ],
    closing:
      "Hantarkan jenis hartanah, anggaran saiz dan beberapa gambar dinding yang paling teruk — terutamanya yang mengelupas atau bertompok. Itu biasanya memadai untuk kami beri angka realistik sebelum sesiapa melawat.",
  },
  zh: {
    title: "Renovix Home Services | 吉隆坡与雪兰莪全屋油漆费用（按房产类型）",
    metaDescription:
      "在吉隆坡与雪兰莪，全屋油漆如何计价 —— 按墙面面积而非房间数量 —— 以及公寓、排屋、半独立与独立洋房各自的常见工程范围。",
    h1: "吉隆坡与雪兰莪全屋油漆费用（按房产类型）",
    excerpt:
      "为什么油漆师傅按墙面面积报价而不是按整间屋，公寓与有地住宅有何不同，以及基层处理如何影响最终金额。",
    question: "在吉隆坡或雪兰莪粉刷整间房子要多少钱？",
    answer:
      "室内与室外油漆按墙面每平方尺计价，全屋套餐则有自己的起价 —— 全部列于下表。房间数量的影响远小于墙面与天花的总面积、楼底高度，以及墙面需要多少基层处理。在状况良好的墙面上重新粉刷是最便宜的情形；起皮、发霉或曾经修补过的墙面，则需要先铲除、封闭与批灰，才能上第一道面漆。",
    keyPoints: [
      "油漆按墙面面积计价，因此楼底高的三房单位可能比楼底低的四房单位更贵。",
      "基层处理 —— 铲除、封闭、填补、打磨 —— 才是报价差异的真正来源。报价低通常代表处理更少，而不是漆更便宜。",
      "外墙费率高于内墙，原因在于施工出入条件、气候侵蚀与所用涂层系统。",
      "墙面起皮或发霉都有成因。在潮湿未解决前直接粉刷，等于浪费整项工程。",
      "公寓施工须遵守大楼规定：装修准证、施工时段、电梯预约与走廊保护。",
    ],
    sections: [
      {
        heading: "油漆如何计价",
        blocks: [
          {
            type: "paragraph",
            text: "并不存在单一的「粉刷一间屋的价格」，因为房间数相同的两间屋，墙面面积可能相差数千平方尺。我们的价目表按屋主实际采购的三种方式计价：全屋套餐、室内墙每平方尺、外墙每平方尺。",
          },
          {
            type: "pricing",
            pricingIds: ["painting-full-house", "painting-interior", "painting-exterior"],
          },
          {
            type: "paragraph",
            text: "若只有局部需要处理 —— 修补过的天花、受损的一面墙、漏水后的某个房间 —— 修补与局部补漆会作为独立工程计价，而不会硬塞进全屋范围。",
          },
          { type: "pricing", pricingIds: ["painting-touchup-repair"] },
        ],
      },
      {
        heading: "各类房产通常涉及的范围",
        blocks: [
          {
            type: "paragraph",
            text: "房产类型是判断工程范围的好线索，因为它比建筑面积更能预测楼底高度、外墙暴露程度与进场条件。",
          },
          {
            type: "table",
            columns: ["房产类型", "影响范围的主要因素", "常见工程范围"],
            rows: [
              [
                "公寓 / 服务式公寓",
                "仅室内；标准楼底；大楼装修规定；电梯与走廊保护",
                "室内墙面与天花，常在换租客时进行",
              ],
              [
                "排屋 / 连排住宅",
                "室内加正立面与围墙；楼梯间高度",
                "全室内、前立面、围墙",
              ],
              [
                "半独立式洋房",
                "两至三面外墙外露；需更多脚手架或梯具作业",
                "全室内加外露面的外墙",
              ],
              [
                "独立洋房",
                "整体外墙面，常有挑高客厅与较长围墙",
                "全室内与全外墙，分阶段施工",
              ],
              [
                "店屋 / 小型办公室",
                "天花龙骨与管线；通常安排在营业时间以外施工",
                "室内墙面与天花，配合营业时段分批进行",
              ],
            ],
          },
          {
            type: "callout",
            title: "挑高空间的成本高于其地面面积所示",
            text: "挑高客厅或楼梯中空处需要脚手架或移动式高架，而不是一把折梯。这牵涉时间与设备，值得在索取报价时说明，让您拿到的数字切合实际。",
          },
        ],
      },
      {
        heading: "基层处理：报价差异的真正所在",
        blocks: [
          {
            type: "paragraph",
            text: "两位师傅对同样的墙面面积可能报出差距很大的价格，而差距几乎总是在基层处理。以下流程决定这层漆能撑多久。",
          },
          {
            type: "steps",
            items: [
              {
                title: "检查并找出成因",
                description:
                  "起皮、鼓泡、粉化与发霉，各自指向不同成因。在潮湿源仍在的墙面上刷漆，几个月内就会再次失效，因此要先处理成因。",
              },
              {
                title: "铲除与打磨",
                description:
                  "把松动、起皮的涂层铲至坚实基面。这是最多灰尘也最耗时的一步，也是低价报价中最常被省略的一步。",
              },
              {
                title: "填补与批灰",
                description:
                  "填补细裂纹、钉孔与旧修补处；墙面严重不平的加做批灰层，让面漆不会把每处修补都映出来。",
              },
              {
                title: "封闭底漆",
                description:
                  "底漆固化基面并统一吸收率，让面漆均匀覆盖，而不是深一块浅一块。",
              },
              {
                title: "施作面漆",
                description:
                  "按厂商建议的顺序施作，层间保留足够干燥时间。变换颜色 —— 尤其深转浅 —— 需要更多道面漆。",
              },
            ],
          },
        ],
      },
      {
        heading: "会改变工程内容的常见墙面问题",
        blocks: [
          {
            type: "list",
            items: [
              "油漆起皮通常代表墙体背后有湿气，或上一层漆刷在未封闭、不干净的基面上。重新粉刷前必须先找出成因。",
              "浴室、衣柜背后或朝外墙面的霉斑与暗块，指向受潮而非漆的品质。要先清洁与处理，单靠防霉漆无法解决漏水。",
              "墙面裂纹可能是收缩造成的表面细裂，也可能是结构位移的迹象。表面裂纹可填补；结构性裂纹应先检视再决定是否覆盖。",
              "外墙褪色与粉化是马来西亚气候下常见的紫外线老化，通常清洗后重新粉刷即可。",
              "斑驳不均的饰面多半是施工或吸收率问题，做好封闭并加一道面漆即可改善。",
            ],
          },
        ],
      },
      {
        heading: "规划您的重新粉刷",
        blocks: [
          {
            type: "list",
            items: [
              "如果可以，请清空房间或把家具集中 —— 家具保护要花时间，而时间就是成本。",
              "在换租客之间或入住前粉刷，比在有家具的住宅内施工快得多也便宜得多。",
              "外墙施工看天气；连续雨天会拖慢进度，负责任的师傅不会在未干的墙面上刷漆。",
              "如果您的大楼连油漆也要求装修准证，请在敲定日期前先办妥。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "你们按房间报价还是按整间屋报价？",
        answer:
          "两种都可以，但底层计算单位都是墙面面积。全屋套餐适合空置或刚交房的单位；若只选择性粉刷部分空间，则按房间单独计价。",
      },
      {
        question: "包含几道漆？",
        answer:
          "标准范围是：视基面状况施作封闭底漆，再加上达到均匀覆盖所需的面漆道数。大幅变色与深色系通常需要多加一道，这会写在报价单上，而不是事后才提。",
      },
      {
        question: "发霉的墙可以直接刷漆吗？",
        answer:
          "不能直接刷。必须先清除并处理霉菌，还要找出滋养它的水气来源 —— 那往往是渗水或防水问题，而不是油漆问题。在活霉上刷漆只是把它盖住，之后仍会透出来。",
      },
      {
        question: "油漆该我自己买吗？",
        answer:
          "可以。许多屋主自行选定品牌与漆膜效果，由我们施工。若由我们供应，报价单会单独列出油漆项目，您能清楚看到用的是什么产品，也可以换成您偏好的品牌。",
      },
      {
        question: "粉刷整间屋要多久？",
        answer:
          "取决于墙面面积与所需的基层处理量，而基层处理通常比刷漆更耗时。我们在了解房产面积、状况以及施工期间是否有人居住后，会随报价提供工作天数估算。",
      },
    ],
    closing:
      "请把房产类型、大致面积，以及几张状况最差墙面的照片 —— 尤其是起皮或有水渍的部分 —— 发给我们。通常这就足以在上门之前给您一个贴近实际的数字。",
  },
};
