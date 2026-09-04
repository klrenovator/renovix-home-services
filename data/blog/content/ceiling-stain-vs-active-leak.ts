import type { ArticleDefinition } from "../types";

/**
 * Backlog item 3 — repair/diagnosis guide: ceiling stain vs active leak.
 * Problem-first intent feeding the ceiling, waterproofing and plumbing pillars.
 */
export const ceilingStainVsActiveLeak: ArticleDefinition = {
  slug: "ceiling-stain-vs-active-leak",
  category: "troubleshooting",
  intents: ["troubleshooting", "signs-of-failure", "repair", "when-to-call"],
  published: "2026-09-04",
  relatedServices: ["ceiling-partition", "waterproofing", "plumbing", "painting"],
  relatedSubServices: ["bathroom-waterproofing", "pipe-leak-repair"],
  relatedProblems: [
    "ceiling-stains",
    "water-damaged-ceiling",
    "sagging-ceiling",
    "bathroom-leakage",
    "roof-leakage",
    "leaking-pipe",
  ],
  relatedLocations: [
    "kuala-lumpur/wangsa-maju",
    "kuala-lumpur/setapak",
    "selangor/subang-jaya",
    "selangor/klang",
    "selangor/batu-caves",
  ],
  relatedProjects: ["plaster-ceiling-cove-lighting"],
  pricingIds: ["waterproofing-pu-injection", "ceiling-repair", "plumbing-callout", "plumbing-hidden-leak"],
  en: {
    title: "Renovix Home Services | Ceiling Stain or Active Leak? How to Tell (KL & Selangor)",
    metaDescription:
      "How to tell an old, dried ceiling stain from an active leak in a Malaysian home, what each cause looks like, and which trade to call. Practical diagnosis before you repair.",
    h1: "Ceiling Stain or Active Leak? How to Diagnose It Before You Repair",
    excerpt:
      "A dried mark from a fixed problem and a live leak look almost identical from the floor. Here is how to tell them apart, and why repairing the ceiling first is the wrong order.",
    question: "Is my ceiling stain an old mark or an active leak?",
    answer:
      "Mark the outline of the stain in pencil, note the date, and check it again after two or three days — including after heavy rain and after someone showers in the room above. A stain that grows past your pencil line, feels damp, or reappears after being sealed is an active leak. A stain that stays exactly where it is, feels dry and hard, and never changes is historical. Repairing or painting the ceiling before the source is fixed only hides the problem until it bleeds through again.",
    keyPoints: [
      "Outline and date the stain — growth over days is the clearest evidence of an active leak.",
      "Rain-linked stains point at the roof, the façade or an upper balcony; shower-linked stains point at the bathroom above.",
      "A stain that appears with no rain and no bathroom above usually means a concealed pipe.",
      "Sagging, soft or bulging plaster is a different situation from a flat stain and should be treated as unsafe until inspected.",
      "Fix the source first, dry the ceiling out, then repair and repaint. Any other order wastes the repair.",
    ],
    sections: [
      {
        heading: "The three-day test anyone can do",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Outline it",
                description:
                  "Draw a light pencil line around the edge of the stain and write the date beside it. This is the only reliable way to see change, because a slow spread is invisible day to day.",
              },
              {
                title: "Log what happens around it",
                description:
                  "Note heavy rain, and note when the bathroom above is used. If the mark darkens or spreads within a few hours of either, you have your correlation.",
              },
              {
                title: "Touch it",
                description:
                  "A live leak leaves the surface cool and soft or slightly spongy. A historical stain is dry, hard and often chalky at the edges.",
              },
              {
                title: "Look above, not just at the ceiling",
                description:
                  "Check the floor of the room above for damp grout lines, loose skirting or a wet cabinet base, and check the corridor or riser for a service pipe running over that spot.",
              },
            ],
          },
        ],
      },
      {
        heading: "Matching the pattern to the cause",
        blocks: [
          {
            type: "table",
            columns: ["What you observe", "Most likely source", "Who handles it"],
            rows: [
              [
                "Stain darkens during or after heavy rain only",
                "Roof, gutter, parapet or external wall ingress",
                "Waterproofing",
              ],
              [
                "Stain worsens after the bathroom above is used",
                "Failed bathroom waterproofing or a fitting leak upstairs",
                "Waterproofing, sometimes plumbing",
              ],
              [
                "Stain appears steadily with no rain and no bathroom above",
                "Concealed pipe in the slab or ceiling void",
                "Plumbing",
              ],
              [
                "Ring-shaped mark, dry, unchanged for months",
                "Historical leak already fixed",
                "Ceiling repair and repainting",
              ],
              [
                "Plaster sagging, bulging or dropping crumbs",
                "Saturated board or failing fixings",
                "Stop using the area and have it inspected",
              ],
              [
                "Stain along the line where wall meets ceiling",
                "External wall seepage tracking inward",
                "Waterproofing",
              ],
            ],
          },
          {
            type: "callout",
            title: "A sagging ceiling is not a cosmetic problem",
            text: "Flat stains can wait for a scheduled visit. Plaster that is visibly sagging, bulging or shedding material has lost its strength and can come down. Keep people out from underneath it and get it looked at rather than pushing on it to test.",
          },
        ],
      },
      {
        heading: "Why the ceiling is repaired last",
        blocks: [
          {
            type: "paragraph",
            text: "The most common and most expensive mistake is skimming and repainting a stained ceiling before the source has been found. Water travels along the slab and the ceiling frame, so the visible mark can be some distance from the entry point — and a fresh coat of paint over damp board will blister, then stain again, usually within weeks.",
          },
          {
            type: "steps",
            items: [
              {
                title: "1. Trace the source",
                description:
                  "Correlate the stain with rain and with upstairs water use, inspect the area above, and where needed test the suspected point rather than guessing.",
              },
              {
                title: "2. Stop the water",
                description:
                  "Depending on the finding, that is a pipe repair, a bathroom waterproofing scope, external wall or roof treatment, or targeted PU injection where the ingress point is specific.",
              },
              {
                title: "3. Let it dry",
                description:
                  "A soaked ceiling needs time with airflow before it is closed up. Sealing damp material in guarantees mould and a second failure.",
              },
              {
                title: "4. Repair and finish",
                description:
                  "Damaged board is replaced or patched, a stain-blocking sealer goes on so the old mark cannot bleed through, then the ceiling is repainted.",
              },
            ],
          },
        ],
      },
      {
        heading: "What the relevant work costs",
        blocks: [
          {
            type: "paragraph",
            text: "Diagnosis and repair are separate scopes, and it is honest to price them that way. These are our published starting rates for the work a ceiling leak usually leads to.",
          },
          {
            type: "pricing",
            pricingIds: [
              "plumbing-callout",
              "waterproofing-pu-injection",
              "plumbing-hidden-leak",
              "ceiling-repair",
            ],
          },
        ],
      },
      {
        heading: "If the leak is coming from a neighbour's unit",
        blocks: [
          {
            type: "paragraph",
            text: "In stratified housing — condominiums, apartments and serviced units across KL and Selangor — a ceiling leak often originates in the unit above or in common property such as a riser or a flat roof. Under Malaysian strata practice, that makes it a matter to raise with the management corporation as well as with your neighbour, because access and responsibility both have to be arranged before anyone can work.",
          },
          {
            type: "list",
            items: [
              "Photograph the stain with the date visible and keep the record as it develops.",
              "Notify building management in writing and ask them to log the complaint.",
              "Ask politely for access to inspect the floor above — most leaks are found in minutes once someone can look.",
              "Do not repair your ceiling while the source is still upstairs; you will simply pay twice.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can you find the leak without hacking my ceiling open?",
        answer:
          "Often yes. Correlating the stain with rain and with upstairs water use, inspecting the floor above and testing the suspected fitting will identify most sources. Opening up is a last step, used when the evidence points into a concealed void and there is no other way to see the pipe.",
      },
      {
        question: "The stain has not changed in a year. Do I still need to investigate?",
        answer:
          "If it is dry, hard and has not moved through a full rainy season, it is very likely historical. Seal it with a stain-blocking primer before repainting, otherwise the old mark will bleed through the new paint.",
      },
      {
        question: "Why did my ceiling stain come back after painting?",
        answer:
          "Because the water source was never stopped. Paint is not a barrier to water arriving from above; it only covers the mark. When the stain returns in the same place, treat it as confirmation that the leak is still live.",
      },
      {
        question: "Is a leaking ceiling dangerous?",
        answer:
          "A flat stain is not, but saturated plaster is heavy and its fixings weaken. If the ceiling is sagging, bulging or dropping material — or if water is running near light fittings — keep people away from underneath, avoid switching on affected lights, and have it inspected.",
      },
      {
        question: "How long should the ceiling dry before repair?",
        answer:
          "Until it is genuinely dry, which depends on how saturated the board is and how much airflow the space gets. We assess it on site rather than committing to a fixed number of days, because closing up damp material is what causes the repair to fail.",
      },
    ],
    closing:
      "Send a photograph of the stain with your pencil outline and the date, tell us what is directly above the room, and whether it changes with rain or with someone showering. That is usually enough for us to point at the likely source before any work is quoted.",
  },
  ms: {
    title: "Renovix Home Services | Kesan Siling atau Bocor Aktif? Cara Membezakannya (KL & Selangor)",
    metaDescription:
      "Cara membezakan kesan air lama pada siling daripada kebocoran yang masih aktif di rumah Malaysia, rupa setiap punca, dan bidang mana yang perlu dipanggil.",
    h1: "Kesan Siling atau Bocor Aktif? Buat Diagnosis Sebelum Membaiki",
    excerpt:
      "Kesan kering daripada masalah lama dan kebocoran aktif kelihatan hampir sama dari bawah. Inilah cara membezakannya, dan kenapa membaiki siling dahulu ialah urutan yang salah.",
    question: "Adakah kesan pada siling saya kesan lama atau kebocoran aktif?",
    answer:
      "Tandakan garis luar kesan itu dengan pensel, catat tarikhnya, dan periksa semula selepas dua atau tiga hari — termasuk selepas hujan lebat dan selepas seseorang mandi di bilik atas. Kesan yang merebak melepasi garis pensel, terasa lembap, atau muncul semula selepas ditutup ialah kebocoran aktif. Kesan yang kekal di tempat sama, terasa kering dan keras, serta tidak pernah berubah ialah kesan lama. Membaiki atau mengecat siling sebelum puncanya dibaiki hanya menyembunyikan masalah sehingga ia timbul semula.",
    keyPoints: [
      "Tandakan garis luar dan tarikh pada kesan itu — perebakan dalam beberapa hari ialah bukti paling jelas kebocoran aktif.",
      "Kesan berkait hujan menunjukkan bumbung, fasad atau balkoni atas; kesan berkait mandi menunjukkan bilik air di atas.",
      "Kesan yang muncul tanpa hujan dan tanpa bilik air di atas biasanya bermakna paip tersembunyi.",
      "Plaster yang melendut, lembut atau membonjol ialah keadaan berbeza daripada kesan rata dan perlu dianggap tidak selamat sehingga diperiksa.",
      "Baiki puncanya dahulu, keringkan siling, kemudian baiki dan cat semula. Urutan lain hanya membazirkan kerja pembaikan.",
    ],
    sections: [
      {
        heading: "Ujian tiga hari yang sesiapa boleh buat",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Tandakan garis luarnya",
                description:
                  "Lukis garis pensel nipis di sekeliling tepi kesan dan tulis tarikh di sebelahnya. Inilah satu-satunya cara yang boleh dipercayai untuk melihat perubahan, kerana perebakan perlahan tidak kelihatan dari hari ke hari.",
              },
              {
                title: "Catat apa yang berlaku di sekitarnya",
                description:
                  "Catat hujan lebat, dan catat bila bilik air di atas digunakan. Jika kesan menjadi gelap atau merebak dalam beberapa jam selepas salah satunya, anda sudah menemui kaitannya.",
              },
              {
                title: "Sentuh permukaannya",
                description:
                  "Kebocoran aktif meninggalkan permukaan sejuk dan lembut atau sedikit lembik. Kesan lama pula kering, keras dan selalunya berdebu di tepi.",
              },
              {
                title: "Periksa bahagian atas, bukan siling sahaja",
                description:
                  "Periksa lantai bilik di atas untuk garis grout lembap, kaki dinding longgar atau tapak kabinet basah, dan periksa koridor atau ruang paip untuk saluran yang melintasi kawasan itu.",
              },
            ],
          },
        ],
      },
      {
        heading: "Memadankan corak dengan puncanya",
        blocks: [
          {
            type: "table",
            columns: ["Apa yang anda perhatikan", "Punca paling mungkin", "Siapa mengendalikannya"],
            rows: [
              [
                "Kesan menjadi gelap semasa atau selepas hujan lebat sahaja",
                "Resapan bumbung, longkang bumbung, parapet atau dinding luar",
                "Kalis air",
              ],
              [
                "Kesan bertambah teruk selepas bilik air di atas digunakan",
                "Kalis air bilik air gagal atau kebocoran kelengkapan di atas",
                "Kalis air, kadangkala paip",
              ],
              [
                "Kesan muncul berterusan tanpa hujan dan tanpa bilik air di atas",
                "Paip tersembunyi dalam lantai konkrit atau ruang siling",
                "Paip",
              ],
              [
                "Tanda berbentuk bulatan, kering, tidak berubah berbulan-bulan",
                "Kebocoran lama yang sudah dibaiki",
                "Pembaikan siling dan cat semula",
              ],
              [
                "Plaster melendut, membonjol atau berguguran",
                "Papan tepu atau pengikat yang gagal",
                "Berhenti menggunakan kawasan itu dan minta pemeriksaan",
              ],
              [
                "Kesan pada garisan pertemuan dinding dan siling",
                "Resapan dinding luar menjalar ke dalam",
                "Kalis air",
              ],
            ],
          },
          {
            type: "callout",
            title: "Siling melendut bukan masalah kosmetik",
            text: "Kesan rata boleh menunggu lawatan berjadual. Plaster yang jelas melendut, membonjol atau gugur telah hilang kekuatannya dan boleh jatuh. Jauhkan orang dari bawahnya dan minta pemeriksaan, jangan ditekan untuk menguji.",
          },
        ],
      },
      {
        heading: "Kenapa siling dibaiki paling akhir",
        blocks: [
          {
            type: "paragraph",
            text: "Kesilapan paling biasa dan paling mahal ialah melapis dan mengecat semula siling bernoda sebelum puncanya ditemui. Air bergerak di sepanjang lantai konkrit dan rangka siling, jadi tanda yang kelihatan mungkin jauh daripada titik masuk — dan lapisan cat baharu di atas papan lembap akan menggelembung, kemudian bernoda semula, biasanya dalam beberapa minggu.",
          },
          {
            type: "steps",
            items: [
              {
                title: "1. Jejak puncanya",
                description:
                  "Kaitkan kesan itu dengan hujan dan penggunaan air di tingkat atas, periksa kawasan di atas, dan jika perlu uji titik yang disyaki dan bukan sekadar meneka.",
              },
              {
                title: "2. Hentikan airnya",
                description:
                  "Bergantung pada penemuan, ia mungkin pembaikan paip, skop kalis air bilik air, rawatan dinding luar atau bumbung, atau suntikan PU khusus jika titik masuknya spesifik.",
              },
              {
                title: "3. Biarkan ia kering",
                description:
                  "Siling yang tepu memerlukan masa dengan pengaliran udara sebelum ditutup semula. Menutup bahan yang masih lembap menjamin kulat dan kegagalan kedua.",
              },
              {
                title: "4. Baiki dan kemaskan",
                description:
                  "Papan yang rosak diganti atau ditampal, penutup penghalang noda disapu supaya kesan lama tidak menembusi, kemudian siling dicat semula.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kos kerja yang berkaitan",
        blocks: [
          {
            type: "paragraph",
            text: "Diagnosis dan pembaikan ialah skop berasingan, dan jujur untuk menghargakannya sedemikian. Ini kadar permulaan rasmi kami bagi kerja yang biasanya berpunca daripada kebocoran siling.",
          },
          {
            type: "pricing",
            pricingIds: [
              "plumbing-callout",
              "waterproofing-pu-injection",
              "plumbing-hidden-leak",
              "ceiling-repair",
            ],
          },
        ],
      },
      {
        heading: "Jika kebocoran datang dari unit jiran",
        blocks: [
          {
            type: "paragraph",
            text: "Di perumahan strata — kondominium, apartmen dan unit servis di KL dan Selangor — kebocoran siling selalunya berpunca dari unit di atas atau harta bersama seperti ruang paip atau bumbung rata. Mengikut amalan strata di Malaysia, ini bermakna perkara itu perlu dibangkitkan kepada perbadanan pengurusan dan juga jiran anda, kerana akses dan tanggungjawab kedua-duanya perlu diuruskan sebelum sesiapa boleh bekerja.",
          },
          {
            type: "list",
            items: [
              "Ambil gambar kesan itu dengan tarikh yang jelas dan simpan rekod perkembangannya.",
              "Maklumkan kepada pengurusan bangunan secara bertulis dan minta aduan itu direkodkan.",
              "Minta akses dengan sopan untuk memeriksa lantai di atas — kebanyakan kebocoran ditemui dalam beberapa minit sebaik sahaja seseorang dapat melihatnya.",
              "Jangan baiki siling anda sementara puncanya masih di tingkat atas; anda hanya akan membayar dua kali.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Bolehkah anda mencari kebocoran tanpa memecah siling saya?",
        answer:
          "Selalunya boleh. Mengaitkan kesan dengan hujan dan penggunaan air di tingkat atas, memeriksa lantai di atas dan menguji kelengkapan yang disyaki akan mengenal pasti kebanyakan punca. Membuka siling ialah langkah terakhir, digunakan apabila bukti menunjuk ke ruang tersembunyi dan tiada cara lain untuk melihat paip itu.",
      },
      {
        question: "Kesan itu tidak berubah selama setahun. Perlukah saya masih menyiasat?",
        answer:
          "Jika ia kering, keras dan tidak bergerak sepanjang satu musim hujan penuh, ia sangat mungkin kesan lama. Tutup dengan primer penghalang noda sebelum mengecat semula, jika tidak kesan lama akan menembusi cat baharu.",
      },
      {
        question: "Kenapa kesan pada siling saya muncul semula selepas dicat?",
        answer:
          "Kerana sumber airnya tidak pernah dihentikan. Cat bukan penghalang kepada air yang datang dari atas; ia hanya menutup tandanya. Apabila kesan itu kembali di tempat yang sama, anggap ia sebagai pengesahan bahawa kebocoran masih aktif.",
      },
      {
        question: "Adakah siling bocor berbahaya?",
        answer:
          "Kesan rata tidak berbahaya, tetapi plaster yang tepu adalah berat dan pengikatnya melemah. Jika siling melendut, membonjol atau berguguran — atau air mengalir berhampiran lampu — jauhkan orang dari bawahnya, elakkan menghidupkan lampu yang terjejas, dan minta pemeriksaan.",
      },
      {
        question: "Berapa lama siling perlu kering sebelum dibaiki?",
        answer:
          "Sehingga ia benar-benar kering, bergantung pada tahap ketepuan papan dan pengaliran udara di ruang itu. Kami menilainya di tapak dan bukan menetapkan bilangan hari, kerana menutup bahan lembap itulah yang menyebabkan pembaikan gagal.",
      },
    ],
    closing:
      "Hantarkan gambar kesan itu bersama garis pensel dan tarikhnya, beritahu kami apa yang berada tepat di atas bilik tersebut, dan sama ada ia berubah dengan hujan atau apabila seseorang mandi. Itu biasanya memadai untuk kami menunjukkan punca berkemungkinan sebelum apa-apa kerja disebut harga.",
  },
  zh: {
    title: "Renovix Home Services | 天花水渍还是活漏？分辨方法（吉隆坡与雪兰莪）",
    metaDescription:
      "如何分辨马来西亚住宅天花上的陈旧水渍与仍在渗漏的活漏，各种成因的表现，以及该找哪一个工种处理。维修前先做诊断。",
    h1: "天花水渍还是活漏？维修之前先做诊断",
    excerpt:
      "已修好的旧水渍与仍在渗漏的活漏，从地面看几乎一模一样。以下是分辨方法，以及为什么先修天花是错误的顺序。",
    question: "我家天花的水渍是旧痕还是仍在漏水？",
    answer:
      "用铅笔沿水渍边缘描一圈，写上日期，两三天后再看一次 —— 包括大雨过后，以及楼上有人洗澡之后。若水渍越过铅笔线、摸起来潮湿，或在封闭处理后又出现，就是活漏。若它位置不变、干硬、始终没有变化，那就是历史痕迹。在源头修好之前修补或粉刷天花，只是把问题盖住，直到它再次透出来。",
    keyPoints: [
      "描边并标注日期 —— 几天内是否扩大，是判断活漏最清楚的证据。",
      "与下雨相关的水渍指向屋顶、外立面或楼上阳台；与洗澡相关的则指向楼上浴室。",
      "没下雨、楼上也没有浴室却持续出现的水渍，通常代表暗管渗漏。",
      "石膏板下垂、变软或鼓起，与平整的水渍是两回事，在检查前应视为不安全。",
      "先止水，再让天花干透，最后才修补与重新粉刷。任何其他顺序都会白做。",
    ],
    sections: [
      {
        heading: "任何人都能做的三天测试",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "描出轮廓",
                description:
                  "沿水渍边缘用铅笔轻描一圈，并在旁边写上日期。这是观察变化唯一可靠的方法，因为缓慢扩散在日常观察中根本看不出来。",
              },
              {
                title: "记录周边情况",
                description:
                  "记下大雨时间，也记下楼上浴室的使用时间。若水渍在其中之一发生后数小时内变深或扩大，相关性就成立了。",
              },
              {
                title: "用手触摸",
                description:
                  "活漏会让表面偏凉、发软或略带海绵感。历史水渍则干硬，边缘常有粉化现象。",
              },
              {
                title: "检查楼上，而不只是天花",
                description:
                  "查看楼上房间地面是否有潮湿的填缝线、松脱的踢脚线或潮湿的柜脚，也查看走廊或管道井是否有管线经过该位置上方。",
              },
            ],
          },
        ],
      },
      {
        heading: "把现象对应到成因",
        blocks: [
          {
            type: "table",
            columns: ["您观察到的现象", "最可能的来源", "由谁处理"],
            rows: [
              ["只在大雨期间或雨后变深", "屋顶、天沟、女儿墙或外墙渗水", "防水"],
              [
                "楼上浴室使用后加重",
                "楼上浴室防水失效或洁具漏水",
                "防水，有时是水管",
              ],
              [
                "没下雨、楼上也无浴室却持续出现",
                "楼板或天花夹层内的暗管",
                "水管",
              ],
              ["环状痕迹，干燥，数月未变", "已修好的历史漏水", "天花修补与重新粉刷"],
              [
                "石膏板下垂、鼓起或掉落碎屑",
                "板材受潮饱和或吊挂件失效",
                "停止使用该区域并安排检查",
              ],
              ["水渍沿墙与天花交界处延伸", "外墙渗水沿结构向内渗透", "防水"],
            ],
          },
          {
            type: "callout",
            title: "天花下垂不是外观问题",
            text: "平整的水渍可以等预约上门。但明显下垂、鼓起或掉屑的石膏板已经失去强度，可能整片掉落。请让人远离下方并安排检查，不要用手去按压测试。",
          },
        ],
      },
      {
        heading: "为什么天花要最后才修",
        blocks: [
          {
            type: "paragraph",
            text: "最常见也最昂贵的错误，是在找到源头之前就先批灰重刷有水渍的天花。水会沿着楼板与天花骨架流动，因此可见的水渍可能离进水点有一段距离 —— 而在潮湿板材上刷新漆，会先起泡，然后再次泛渍，通常几周内就发生。",
          },
          {
            type: "steps",
            items: [
              {
                title: "1. 追查源头",
                description:
                  "把水渍与下雨、楼上用水情况对照，检查上方区域，必要时对可疑点位做测试，而不是靠猜。",
              },
              {
                title: "2. 止住水源",
                description:
                  "视检查结果而定：可能是管道维修、浴室防水工程、外墙或屋顶处理，或在进水点明确时做针对性 PU 灌注。",
              },
              {
                title: "3. 让它干透",
                description:
                  "受潮饱和的天花需要时间与通风才能封板。把潮湿材料封起来，等于保证发霉与二次失效。",
              },
              {
                title: "4. 修补与收面",
                description:
                  "更换或修补受损板材，涂上封渍底漆使旧痕不会透出，然后重新粉刷天花。",
              },
            ],
          },
        ],
      },
      {
        heading: "相关工程的费用",
        blocks: [
          {
            type: "paragraph",
            text: "诊断与维修是两个不同的工作范围，分开计价才诚实。以下是天花漏水通常会引出的工序的公开起价。",
          },
          {
            type: "pricing",
            pricingIds: [
              "plumbing-callout",
              "waterproofing-pu-injection",
              "plumbing-hidden-leak",
              "ceiling-repair",
            ],
          },
        ],
      },
      {
        heading: "如果漏水来自邻居单位",
        blocks: [
          {
            type: "paragraph",
            text: "在分层地契住宅 —— 吉隆坡与雪兰莪的公寓、组屋与服务式单位 —— 天花漏水往往源自楼上单位，或管道井、平台屋顶等共有产业。依马来西亚分层管理的惯例，这意味着除了与邻居沟通，也必须向管理机构反映，因为进入权与责任归属都要先厘清，施工才有可能开始。",
          },
          {
            type: "list",
            items: [
              "拍下带有日期的水渍照片，并持续记录其变化。",
              "以书面方式通知大楼管理处，并要求登记投诉。",
              "礼貌地请求进入楼上单位查看 —— 多数漏水在有人能上去看的那一刻就几分钟内找到了。",
              "在源头仍在楼上时不要先修自家天花；那只会让您付两次钱。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "可以不拆开天花就找到漏水点吗？",
        answer:
          "通常可以。把水渍与下雨、楼上用水情况对照，检查楼上地面并测试可疑洁具，就能找出多数源头。开孔检查是最后手段，只有在证据指向封闭夹层、别无他法看到管道时才使用。",
      },
      {
        question: "水渍一年都没变化，还需要查吗？",
        answer:
          "如果它干硬、经过一整个雨季都没有扩大，那很可能是历史痕迹。重新粉刷前先用封渍底漆封住，否则旧痕会透过新漆再次显现。",
      },
      {
        question: "为什么粉刷之后水渍又回来了？",
        answer:
          "因为水源从未被止住。油漆无法阻挡从上方渗下来的水，它只是遮住了痕迹。当水渍在同一位置重现，就可以确认漏水仍在持续。",
      },
      {
        question: "天花漏水危险吗？",
        answer:
          "平整的水渍不危险，但吸饱水的石膏板很重，吊挂件也会松弛。如果天花下垂、鼓起或掉落碎屑，或水流靠近灯具，请让人远离下方、不要开启受影响的灯，并尽快安排检查。",
      },
      {
        question: "天花要干多久才能维修？",
        answer:
          "要真正干透为止，取决于板材受潮程度与空间通风状况。我们会在现场评估，而不是给一个固定天数，因为把潮湿材料封起来正是维修失败的原因。",
      },
    ],
    closing:
      "请把带铅笔描边与日期的水渍照片发给我们，告诉我们该房间正上方是什么，以及它是否随下雨或楼上洗澡而变化。通常这就足以让我们在报价前指出可能的源头。",
  },
};
