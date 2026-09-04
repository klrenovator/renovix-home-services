import type { ArticleDefinition } from "../types";

/**
 * Coverage guide — plumbing water-pressure diagnosis.
 *
 * CONTENT_MAP §5 named this as the plumbing depth gap. The `low-water-pressure`
 * problem guide answers "why is my pressure low" and how it is fixed; this
 * guide teaches the owner to *diagnose* the cause before spending money, so a
 * call-out is not wasted on a blocked aerator and a booster pump is not bought
 * for a leak. Figures come only from the plumbing rows in pricing.ts.
 */
export const plumbingWaterPressureDiagnosis: ArticleDefinition = {
  slug: "plumbing-water-pressure-diagnosis",
  category: "troubleshooting",
  intents: ["troubleshooting", "repair", "signs-of-failure", "when-to-call", "decision-guide"],
  published: "2026-09-04",
  relatedServices: ["plumbing"],
  relatedSubServices: [
    "callout-inspection",
    "pipe-leak-repair",
    "concealed-leak-repair",
    "water-heater-installation",
  ],
  relatedProblems: ["low-water-pressure", "water-leakage", "leaking-pipe", "blocked-drain"],
  relatedLocations: [
    "kuala-lumpur/sri-petaling",
    "selangor/klang",
    "selangor/rawang",
    "selangor/shah-alam",
  ],
  relatedProjects: [],
  pricingIds: ["plumbing-callout", "plumbing-pipe-leak-visible", "plumbing-hidden-leak"],
  en: {
    title: "Renovix Home Services | Water Pressure Diagnosis Guide (KL & Selangor)",
    metaDescription:
      "Work out why your water pressure is weak before paying for a fix — one outlet or the whole house, time of day, high-rise or landed, and when a call-out is worth it.",
    h1: "Diagnosing Low Water Pressure: Where to Look Before You Pay for a Fix",
    excerpt:
      "Weak pressure has at least six different causes, from a blocked aerator you can clear yourself to a hidden leak behind a wall. Working out which one you have is what stops a cheap fix becoming an expensive guess.",
    question: "How do I work out why my water pressure is low?",
    answer:
      "Narrow it down in three steps before paying anyone. First, is the problem one outlet or the whole house — a single weak tap points at that fitting, while a whole-house drop points at the supply, a valve or the pipework. Second, notice when it happens: pressure that is weak only at peak hours suggests a shared supply or building pump, while pressure that falls when you run a second tap suggests an undersized pipe or a restriction. Third, look for a leak — a rising water bill, a damp patch or a warm spot on the floor all point to a hidden leak rather than a pressure fault. That short investigation tells you whether the answer is a cleaned aerator, a repaired valve or a proper call-out.",
    keyPoints: [
      "One weak outlet is usually that fitting; a whole-house drop is the supply, a valve or the pipework.",
      "The timing of the drop — peak hours, always, or only when a second tap runs — points at the cause.",
      "A rising bill, damp patch or warm floor spot means a hidden leak, not a pressure problem.",
      "A booster pump only helps when the incoming supply is genuinely weak; it does not fix a blocked pipe or a leak.",
      "If you have not found the cause after checking the aerators and valves, a call-out is cheaper than guessing at the wrong fix.",
    ],
    sections: [
      {
        heading: "Step one: one outlet, or the whole house",
        blocks: [
          {
            type: "paragraph",
            text: "Open the affected tap, then a tap in another room, then a shower. If everything else is strong and only one outlet is weak, the problem is almost certainly local to that fitting — an aerator, a cartridge or a valve serving that point. If the whole house is weak, stop cleaning aerators and look upstream.",
          },
          {
            type: "list",
            items: [
              "One tap weak, rest fine: blocked aerator or filter, failing cartridge, or a partly closed stop valve under that fitting.",
              "Whole house weak: the incoming supply, the main stop valve, a blocked or undersized pipe, or a building pump issue in a high-rise.",
              "Pressure falls only when a second tap is on: the supply or pipework cannot deliver enough flow for simultaneous demand.",
              "Pressure varies by time of day: shared mains pressure or a building booster schedule, rather than anything inside your unit.",
            ],
          },
        ],
      },
      {
        heading: "Step two: read the pattern of when it happens",
        blocks: [
          {
            type: "table",
            columns: ["When it is weak", "What that usually means", "What to do next"],
            rows: [
              [
                "Always, at every outlet",
                "Supply pressure, a partly closed main valve, or a building pump problem",
                "Check the main stop valve is fully open, then consider a call-out to test the supply",
              ],
              [
                "Only in the morning and evening",
                "Peak demand on a shared main or a scheduled building booster",
                "Note the pattern and raise it with management in a high-rise, or have the supply tested",
              ],
              [
                "Only when two taps run at once",
                "Undersized inlet pipe or a restriction limiting total flow",
                "A call-out can confirm by testing flow with one and then two outlets open",
              ],
              [
                "It used to be fine and has slowly dropped",
                "Progressive blockage — scale, debris or a failing valve — rather than supply",
                "Look at the oldest pipework and the most-used fittings first",
              ],
              [
                "Pressure is fine but the bill is climbing",
                "A hidden leak, not a pressure fault at all",
                "This is the one to act on quickly — see the leak signs below",
              ],
            ],
          },
        ],
      },
      {
        heading: "Step three: rule out the leak you cannot see",
        blocks: [
          {
            type: "paragraph",
            text: "A hidden leak does not always show up as weak pressure — sometimes it shows up as a bill first. Before blaming the supply, look for the quieter signs that water is escaping somewhere it should not be.",
          },
          {
            type: "list",
            items: [
              "A water bill that has climbed without a change in how you use water.",
              "A damp patch, blistering paint or a stain on a wall, ceiling or floor.",
              "A warm spot on a tiled floor, which can point to a leaking hot-water line.",
              "A meter that keeps turning slowly with every tap and appliance off.",
              "The sound of running water behind a wall when nothing is in use.",
            ],
          },
          {
            type: "callout",
            title: "Leak first, booster never",
            text: "If the cause is a leak, no pump in the world fixes the pressure — and the leak keeps doing damage while you are admiring the new pump. Confirm there is no leak before spending on anything else.",
          },
        ],
      },
      {
        heading: "How a professional diagnosis runs",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Measure the pressure",
                description:
                  "A gauge is fitted to a tap or the inlet and read with everything off, then with outlets open, to separate static pressure from flow.",
              },
              {
                title: "Test outlet by outlet",
                description:
                  "Each fitting is isolated in turn to find whether the restriction is local or general — the quickest way to locate a blocked aerator, cartridge or valve.",
              },
              {
                title: "Check the incoming supply",
                description:
                  "Where the building or mains supply is suspected, the inlet is tested so you know whether the problem is yours or the network's — and whether a booster could even help.",
              },
              {
                title: "Trace for a hidden leak",
                description:
                  "If the flow or bill suggests a leak, the suspect line is traced and the leak located before any opening-up, so the repair is targeted rather than exploratory.",
              },
              {
                title: "Recommend the smallest fix that works",
                description:
                  "The honest outcome is the least expensive correct one — often a cleaned fitting or a valve, sometimes a repair, and only a booster when the supply genuinely calls for it.",
              },
            ],
          },
          {
            type: "pricing",
            pricingIds: ["plumbing-callout", "plumbing-pipe-leak-visible", "plumbing-hidden-leak"],
            note: "The call-out covers inspection and diagnosis; the repair is quoted once the cause is found.",
          },
        ],
      },
      {
        heading: "When a call-out is the cheaper option",
        blocks: [
          {
            type: "list",
            items: [
              "You have cleaned the aerators and checked the valves, and the pressure is still weak.",
              "The whole house is affected and the pattern does not match peak demand.",
              "The pressure has been dropping slowly over weeks or months.",
              "The bill has climbed, or you have seen damp patches, stains or a warm floor.",
              "You are thinking about a booster pump and want to be sure it will actually help.",
            ],
          },
          {
            type: "paragraph",
            text: "Diagnosis is the part of plumbing that pays for itself — it is the difference between buying the fix you need and buying a theory.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why is my shower weak but the kitchen tap is fine?",
        answer:
          "That is usually local to the shower — a blocked shower head or hose, a cartridge problem, or a valve serving that fitting. When the rest of the house is strong, the restriction is almost always at that one point rather than in the supply.",
      },
      {
        question: "Will a booster pump fix weak pressure in a high-rise?",
        answer:
          "Only when the incoming supply is genuinely weak. If the cause is a blocked pipe, a failed valve or a leak, a pump masks the symptom without fixing it. The supply is tested first so you are not paying for a pump the building's supply does not need.",
      },
      {
        question: "Why does my pressure drop when the washing machine is filling?",
        answer:
          "This usually means the total flow available is being shared out — the inlet pipe or a restriction cannot deliver enough for both demands at once. It is common with undersized pipework, and it is the kind of pattern a call-out can confirm quickly.",
      },
      {
        question: "Can low water pressure damage my water heater?",
        answer:
          "It can affect some heaters, particularly instant units that rely on a minimum flow to run properly. Weak or fluctuating flow can make the heater cut out or run hotter than intended, so the pressure question is worth resolving before blaming the heater.",
      },
      {
        question: "How do I know if my weak pressure is actually a leak?",
        answer:
          "A leak often shows up elsewhere first: a rising bill, a damp patch, a stain, a warm tile, or the sound of water behind a wall. If the pressure is low and any of those signs is present, the leak is the lead worth following before anything else.",
      },
    ],
    closing:
      "Tell us what is weak — one tap or the whole home — when it happens, and whether your bill has changed. That is usually enough to point at the cause before a single fitting is opened.",
  },
  ms: {
    title: "Renovix Home Services | Panduan Diagnosis Tekanan Air (KL & Selangor)",
    metaDescription:
      "Kenal pasti kenapa tekanan air anda lemah sebelum membayar untuk pembaikan — satu saluran atau seluruh rumah, masa berlaku, bertingkat atau teres, dan bila panggilan pemeriksaan berbaloi.",
    h1: "Mendiagnosis Tekanan Air Lemah: Tempat Perlu Lihat Sebelum Bayar untuk Baik Pulih",
    excerpt:
      "Tekanan lemah mempunyai sekurang-kurangnya enam punca berbeza, daripada aerator tersumbat yang boleh anda bersihkan sendiri hingga kebocoran tersembunyi di belakang dinding. Mengetahui yang mana satu anda hadapi ialah yang menghalang pembaikan murah menjadi tekaan mahal.",
    question: "Bagaimana saya kenal pasti kenapa tekanan air saya lemah?",
    answer:
      "Sempitkan dalam tiga langkah sebelum membayar sesiapa. Pertama, adakah masalah itu satu saluran atau seluruh rumah — satu pili yang lemah menunjukkan pada kelengkapan itu, manakala penurunan seluruh rumah menunjukkan pada bekalan, injap atau paip. Kedua, perhatikan bila ia berlaku: tekanan yang lemah hanya pada waktu puncak mencadangkan bekalan berkongsi atau pam bangunan, manakala tekanan yang jatuh apabila anda membuka pili kedua mencadangkan paip bersaiz kecil atau sekatan. Ketiga, cari kebocoran — bil air yang meningkat, tompok lembap atau bahagian lantai yang panas semuanya menunjukkan kebocoran tersembunyi, bukan masalah tekanan. Siasatan ringkas itu memberitahu anda sama ada jawapannya aerator yang dibersihkan, injap yang dibaiki, atau panggilan pemeriksaan yang sepatutnya.",
    keyPoints: [
      "Satu saluran lemah selalunya kelengkapan itu; penurunan seluruh rumah ialah bekalan, injap atau paip.",
      "Masa berlakunya penurunan — waktu puncak, sentiasa, atau hanya apabila pili kedua dibuka — menunjukkan puncanya.",
      "Bil meningkat, tompok lembap atau lantai panas bermakna kebocoran tersembunyi, bukan masalah tekanan.",
      "Pam penggalak hanya membantu apabila bekalan masuk benar-benar lemah; ia tidak membetulkan paip tersumbat atau kebocoran.",
      "Jika anda belum jumpa puncanya selepas memeriksa aerator dan injap, panggilan pemeriksaan lebih murah daripada meneka pembaikan yang salah.",
    ],
    sections: [
      {
        heading: "Langkah satu: satu saluran, atau seluruh rumah",
        blocks: [
          {
            type: "paragraph",
            text: "Buka pili yang terjejas, kemudian pili di bilik lain, kemudian pancuran. Jika semua yang lain deras dan hanya satu saluran lemah, masalahnya hampir pasti setempat pada kelengkapan itu — aerator, kartrij atau injap yang membekalkan titik itu. Jika seluruh rumah lemah, berhenti membersihkan aerator dan lihat ke hulu.",
          },
          {
            type: "list",
            items: [
              "Satu pili lemah, lain-lain elok: aerator atau penapis tersumbat, kartrij gagal, atau injap henti separa tertutup di bawah kelengkapan itu.",
              "Seluruh rumah lemah: bekalan masuk, injap henti utama, paip tersumbat atau bersaiz kecil, atau masalah pam bangunan di rumah bertingkat.",
              "Tekanan jatuh hanya apabila pili kedua dibuka: bekalan atau paip tidak mampu menyalurkan aliran cukup untuk permintaan serentak.",
              "Tekanan berubah mengikut masa hari: tekanan utama yang dikongsi atau jadual pam bangunan, bukannya apa-apa di dalam unit anda.",
            ],
          },
        ],
      },
      {
        heading: "Langkah dua: baca corak bila ia berlaku",
        blocks: [
          {
            type: "table",
            columns: ["Bila ia lemah", "Apa yang biasanya bermakna", "Apa perlu buat seterusnya"],
            rows: [
              [
                "Sentiasa, di setiap saluran",
                "Tekanan bekalan, injap utama separa tertutup, atau masalah pam bangunan",
                "Periksa injap henti utama terbuka penuh, kemudian pertimbang panggilan pemeriksaan untuk menguji bekalan",
              ],
              [
                "Hanya pagi dan petang",
                "Permintaan puncak pada paip utama berkongsi atau pam bangunan berjadual",
                "Catat corak itu dan bawa kepada pengurusan di bangunan bertingkat, atau minta bekalan diuji",
              ],
              [
                "Hanya apabila dua pili dibuka serentak",
                "Paip masuk bersaiz kecil atau sekatan mengehadkan jumlah aliran",
                "Panggilan pemeriksaan boleh mengesahkan dengan menguji aliran satu dan dua saluran terbuka",
              ],
              [
                "Dulu elok dan perlahan-lahan menurun",
                "Sekatan progresif — kerak, serpihan atau injap gagal — bukannya bekalan",
                "Lihat paip paling lama dan kelengkapan paling kerap digunakan dahulu",
              ],
              [
                "Tekanan elok tetapi bil meningkat",
                "Kebocoran tersembunyi, bukan masalah tekanan langsung",
                "Ini yang perlu ditindak segera — lihat tanda kebocoran di bawah",
              ],
            ],
          },
        ],
      },
      {
        heading: "Langkah tiga: tolak kemungkinan kebocoran yang tidak kelihatan",
        blocks: [
          {
            type: "paragraph",
            text: "Kebocoran tersembunyi tidak selalu muncul sebagai tekanan lemah — kadangkala ia muncul sebagai bil terlebih dahulu. Sebelum menyalahkan bekalan, lihat tanda-tanda yang lebih senyap bahawa air keluar di tempat yang tidak sepatutnya.",
          },
          {
            type: "list",
            items: [
              "Bil air yang meningkat tanpa perubahan cara anda menggunakan air.",
              "Tompok lembap, cat melepuh atau kesan pada dinding, siling atau lantai.",
              "Bahagian lantai berjubin yang panas, yang boleh menunjukkan talian air panas bocor.",
              "Meter yang terus berpusing perlahan dengan semua pili dan peralatan ditutup.",
              "Bunyi air mengalir di belakang dinding apabila tiada apa-apa digunakan.",
            ],
          },
          {
            type: "callout",
            title: "Kebocoran dahulu, pam jangan sekali-kali",
            text: "Jika puncanya kebocoran, tiada pam di dunia membetulkan tekanan — dan kebocoran terus merosakkan semasa anda mengagumi pam baharu itu. Sahkan tiada kebocoran sebelum berbelanja untuk apa-apa yang lain.",
          },
        ],
      },
      {
        heading: "Bagaimana diagnosis profesional dijalankan",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Ukur tekanan",
                description:
                  "Tolok dipasang pada pili atau saluran masuk dan dibaca dengan semua tertutup, kemudian dengan saluran terbuka, untuk membezakan tekanan statik daripada aliran.",
              },
              {
                title: "Uji saluran demi saluran",
                description:
                  "Setiap kelengkapan diasingkan bergilir-gilir untuk mencari sama ada sekatan itu setempat atau umum — cara terpantas mencari aerator, kartrij atau injap tersumbat.",
              },
              {
                title: "Periksa bekalan masuk",
                description:
                  "Jika bekalan bangunan atau utama disyaki, saluran masuk diuji supaya anda tahu sama ada masalah itu milik anda atau rangkaian — dan sama ada pam penggalak boleh membantu pun.",
              },
              {
                title: "Kesan kebocoran tersembunyi",
                description:
                  "Jika aliran atau bil mencadangkan kebocoran, talian yang disyaki dikesan dan kebocoran dicari sebelum sebarang bukaan, supaya pembaikan disasarkan dan bukannya meneroka.",
              },
              {
                title: "Cadangkan pembaikan paling kecil yang berkesan",
                description:
                  "Hasil jujur ialah pembaikan betul yang paling murah — selalunya kelengkapan yang dibersihkan atau injap, kadangkala pembaikan, dan pam hanya apabila bekalan benar-benar memerlukannya.",
              },
            ],
          },
          {
            type: "pricing",
            pricingIds: ["plumbing-callout", "plumbing-pipe-leak-visible", "plumbing-hidden-leak"],
            note: "Panggilan pemeriksaan meliputi lawatan dan diagnosis; pembaikan disebut selepas punca ditemui.",
          },
        ],
      },
      {
        heading: "Bila panggilan pemeriksaan ialah pilihan lebih murah",
        blocks: [
          {
            type: "list",
            items: [
              "Anda sudah membersihkan aerator dan memeriksa injap, tetapi tekanan masih lemah.",
              "Seluruh rumah terjejas dan coraknya tidak sepadan dengan permintaan puncak.",
              "Tekanan menurun perlahan-lahan selama beberapa minggu atau bulan.",
              "Bil meningkat, atau anda nampak tompok lembap, kesan atau lantai panas.",
              "Anda memikirkan pam penggalak dan mahu pastikan ia benar-benar membantu.",
            ],
          },
          {
            type: "paragraph",
            text: "Diagnosis ialah bahagian kerja paip yang membayar dirinya sendiri — ia membezakan antara membeli pembaikan yang anda perlukan dan membeli satu teori.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Kenapa pancuran saya lemah tetapi pili dapur elok?",
        answer:
          "Itu selalunya setempat pada pancuran — kepala atau hos pancuran tersumbat, masalah kartrij, atau injap yang membekalkan kelengkapan itu. Apabila seluruh rumah deras, sekatan itu hampir selalu pada satu titik itu dan bukannya pada bekalan.",
      },
      {
        question: "Adakah pam penggalak membetulkan tekanan lemah di bangunan bertingkat?",
        answer:
          "Hanya apabila bekalan masuk benar-benar lemah. Jika puncanya paip tersumbat, injap gagal atau kebocoran, pam menutup gejala tanpa membetulkannya. Bekalan diuji dahulu supaya anda tidak membayar pam yang tidak diperlukan oleh bekalan bangunan.",
      },
      {
        question: "Kenapa tekanan saya jatuh apabila mesin basuh sedang mengisi air?",
        answer:
          "Ini biasanya bermakna jumlah aliran yang ada sedang dibahagikan — paip masuk atau sekatan tidak mampu menyalurkan cukup untuk kedua-dua permintaan serentak. Ia biasa dengan paip bersaiz kecil, dan ia corak yang boleh disahkan panggilan pemeriksaan dengan cepat.",
      },
      {
        question: "Bolehkah tekanan air lemah merosakkan pemanas air saya?",
        answer:
          "Ia boleh menjejaskan sesetengah pemanas, terutamanya unit segera yang bergantung pada aliran minimum untuk berfungsi dengan betul. Aliran lemah atau turun naik boleh membuat pemanas terputus atau lebih panas daripada sepatutnya, jadi soalan tekanan wajar diselesaikan sebelum menyalahkan pemanas.",
      },
      {
        question: "Bagaimana saya tahu tekanan lemah saya sebenarnya kebocoran?",
        answer:
          "Kebocoran selalunya muncul di tempat lain dahulu: bil meningkat, tompok lembap, kesan, jubin panas, atau bunyi air di belakang dinding. Jika tekanan lemah dan mana-mana tanda itu wujud, kebocoran ialah petunjuk yang wajar diikuti sebelum apa-apa yang lain.",
      },
    ],
    closing:
      "Beritahu kami apa yang lemah — satu pili atau seluruh rumah — bila ia berlaku, dan sama ada bil anda berubah. Itu biasanya cukup untuk menunjukkan punca sebelum sebarang kelengkapan dibuka.",
  },
  zh: {
    title: "Renovix Home Services | 水压问题诊断指南（吉隆坡与雪兰莪）",
    metaDescription:
      "在花钱维修之前，先弄清楚为什么水压偏低 —— 单个出水口还是全屋、发生时段、高层还是排屋，以及何时值得叫上门检查。",
    h1: "诊断水压偏低：付钱维修之前该先看哪里",
    excerpt:
      "水压偏低至少有六种不同原因，从您可以自己清理的起泡器堵塞，到藏在墙后的漏水。弄清楚自己遇到的是哪一种，才能避免把便宜的修理变成昂贵的猜测。",
    question: "我该怎么弄清自己水压低的原因？",
    answer:
      "在付钱给任何人之前，分三步缩小范围。第一，是单个出水口还是全屋 —— 只有一个龙头水小，问题指向那个配件；全屋都小，则指向供水、阀门或管道。第二，留意发生时间：只在高峰时段水小，说明是共用供水或大楼水泵；一开第二个龙头水就变小，说明是进水管偏细或有堵塞。第三，找漏水 —— 水费上涨、返潮斑点或地面发热，都指向暗漏而非压力故障。这轮简单的排查就能告诉您，答案是清理起泡器、修阀门，还是该叫一次正规上门检查。",
    keyPoints: [
      "单个出水口水小，通常问题就在那个配件；全屋都小，则是供水、阀门或管道。",
      "水压下降的时段 —— 高峰、常年如此，还是只有同时开第二个龙头时 —— 会指向原因。",
      "水费上涨、返潮斑点或地面发热，意味着暗漏，而不是压力问题。",
      "增压泵只有在进水确实偏弱时才有用；它修不好堵塞的管道或漏水。",
      "如果检查完起泡器和阀门仍找不到原因，上门检查比猜错维修方案更省钱。",
    ],
    sections: [
      {
        heading: "第一步：单个出水口，还是全屋",
        blocks: [
          {
            type: "paragraph",
            text: "打开受影响的龙头，再打开另一个房间的龙头，然后打开花洒。如果其它都正常、只有一处水小，问题几乎肯定局限在那个配件 —— 起泡器、阀芯或给该处供水的阀门。如果全屋都小，就别再清起泡器了，往上游找。",
          },
          {
            type: "list",
            items: [
              "只有一个龙头水小、其它正常：起泡器或滤网堵塞、阀芯失效，或该配件下方的截止阀半关。",
              "全屋都小：进水供水、主截止阀、堵塞或偏细的管道，或高层楼的大楼水泵问题。",
              "只有同时开第二个龙头时水压才下降：供水或管道无法同时提供足够的流量。",
              "水压随时段变化：共用的市政水压或大楼水泵的运行时段，而不是您单元内部的问题。",
            ],
          },
        ],
      },
      {
        heading: "第二步：从发生时段读原因",
        blocks: [
          {
            type: "table",
            columns: ["什么时候水小", "通常意味着什么", "接下来做什么"],
            rows: [
              [
                "常年如此、每个出水口都小",
                "供水压力、半关的主阀门，或大楼水泵问题",
                "确认主截止阀已全开，再考虑叫上门检查测试供水",
              ],
              [
                "只在早晚水小",
                "共用主管的高峰用水，或大楼水泵定时运行",
                "记下规律，高层楼可向管理处反映，或请人测试供水",
              ],
              [
                "只有同时开两个龙头时水小",
                "进水管偏细，或有堵塞限制了总流量",
                "上门检查可分别测单龙头与双龙头同开时的流量来确认",
              ],
              [
                "以前正常、后来慢慢变小",
                "渐进性堵塞 —— 水垢、杂物或失效阀门，而非供水",
                "先看最老的管段和最常用的配件",
              ],
              [
                "水压正常但水费在涨",
                "是暗漏，根本不是压力问题",
                "这种情况要尽快处理 —— 见下面的漏水迹象",
              ],
            ],
          },
        ],
      },
      {
        heading: "第三步：排除看不见的漏水",
        blocks: [
          {
            type: "paragraph",
            text: "暗漏不一定表现为水压小 —— 有时会先体现在水费上。在责怪供水之前，先留意那些更安静的、水在不该流的地方流走的迹象。",
          },
          {
            type: "list",
            items: [
              "用水习惯没变，但水费却上涨了。",
              "墙、天花板或地面出现返潮斑点、起泡的油漆或水渍。",
              "瓷砖地面某处发热，可能指向热水管漏水。",
              "所有龙头和电器都关着，水表仍在缓慢转动。",
              "什么都没用时，墙后仍有流水声。",
            ],
          },
          {
            type: "callout",
            title: "先查漏水，绝不要先装泵",
            text: "如果原因是漏水，再好的泵也修不好水压 —— 而且当您还在欣赏新泵时，漏水仍在继续造成破坏。在花钱买任何别的东西之前，先确认没有漏水。",
          },
        ],
      },
      {
        heading: "一次专业诊断是怎么进行的",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "测量压力",
                description:
                  "把压力表接在龙头或进水口上，先全关读数，再开水读数，把静压与流量区分开。",
              },
              {
                title: "逐个出水口测试",
                description:
                  "逐个隔离各配件，判断堵塞是局部的还是普遍的 —— 这是找出堵塞起泡器、阀芯或阀门的最快方法。",
              },
              {
                title: "检查进水供水",
                description:
                  "若怀疑大楼或市政供水，就测试进水口，让您知道问题在自家还是管网 —— 以及增压泵到底能不能帮上忙。",
              },
              {
                title: "追踪暗漏",
                description:
                  "若流量或水费提示漏水，就先定位可疑管线和漏水点，再做开凿，让维修有针对性而不是试探性。",
              },
              {
                title: "推荐最小而有效的修理",
                description:
                  "诚实的结果是正确又最省钱的方案 —— 往往是清洗配件或阀门，有时是维修，只有供水确实需要时才装泵。",
              },
            ],
          },
          {
            type: "pricing",
            pricingIds: ["plumbing-callout", "plumbing-pipe-leak-visible", "plumbing-hidden-leak"],
            note: "上门检查费包含到场与诊断；找到原因后再对维修单独报价。",
          },
        ],
      },
      {
        heading: "什么时候叫上门检查反而更划算",
        blocks: [
          {
            type: "list",
            items: [
              "您已经清过起泡器、查过阀门，水压仍然偏低。",
              "全屋都受影响，且规律与高峰用水不符。",
              "水压在几周或几个月里慢慢下降。",
              "水费上涨，或您看到返潮斑点、水渍或地面发热。",
              "您在考虑装增压泵，想先确认它确实有用。",
            ],
          },
          {
            type: "paragraph",
            text: "诊断是管道工作里能自我回本的一环 —— 它区分了买到真正需要的修理，和买到一个猜测。",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "为什么花洒水小，厨房龙头却正常？",
        answer:
          "这通常是花洒自身的问题 —— 花洒头或软管堵塞、阀芯问题，或给该配件供水的阀门。当全屋其它地方都正常时，堵塞几乎总在那一处，而不是在供水上。",
      },
      {
        question: "高层楼水压低，装增压泵能解决吗？",
        answer:
          "只有当进水确实偏弱时才有用。如果原因是管道堵塞、阀门失效或漏水，泵只是掩盖症状而没解决问题。会先测试供水，让您不必为大楼供水本不需要的泵付钱。",
      },
      {
        question: "为什么洗衣机进水时，家里水压就下降？",
        answer:
          "这通常说明可用总流量在被分摊 —— 进水管或堵塞无法同时满足两处需求。这在进水管偏细时很常见，也是上门检查能快速确认的一种规律。",
      },
      {
        question: "水压低会损坏热水器吗？",
        answer:
          "会影响部分热水器，尤其是依赖最低流量才能正常工作的即热式。水流偏弱或波动会让热水器断火或温度偏高，所以在责怪热水器之前，值得先把水压问题弄清楚。",
      },
      {
        question: "怎么判断水压低其实是漏水？",
        answer:
          "漏水往往先表现在别处：水费上涨、返潮斑点、水渍、发热的瓷砖，或墙后的流水声。如果水压偏低又出现上述任一迹象，漏水就是最值得先追查的线索。",
      },
    ],
    closing:
      "告诉我们哪里水小 —— 一个龙头还是全屋 —— 什么时候发生，以及水费有没有变化。这些通常足以在打开任何配件之前就指向原因。",
  },
};
