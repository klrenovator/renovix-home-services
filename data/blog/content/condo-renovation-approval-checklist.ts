import type { ArticleDefinition } from "../types";

/**
 * Backlog item 5 — planning checklist: condominium / strata renovation
 * approvals in KL and Selangor.
 *
 * Honesty constraint: building rules differ by management corporation and by
 * local authority, so this guide teaches the reader what to ask and what to
 * prepare. It states no specific fee, form number, statutory deadline or
 * approval procedure, because those are not ours to invent — every concrete
 * requirement is described as "ask your management".
 */
export const condoRenovationApprovalChecklist: ArticleDefinition = {
  slug: "condo-renovation-approval-checklist",
  category: "planning",
  intents: ["preparation", "decision-guide", "when-to-call"],
  published: "2026-09-04",
  relatedServices: ["general-renovation", "tiling", "ceiling-partition", "electrical", "waterproofing"],
  relatedSubServices: ["bathroom-waterproofing", "floor-tile-installation", "socket-installation"],
  relatedProblems: ["bathroom-leakage", "water-damaged-ceiling", "insufficient-power-points"],
  relatedLocations: [
    "kuala-lumpur/mont-kiara",
    "kuala-lumpur/bukit-jalil",
    "selangor/cyberjaya",
    "selangor/bandar-sunway",
    "selangor/kota-damansara",
    "kuala-lumpur/kl-city-centre",
  ],
  relatedProjects: ["office-renovation-ceiling-and-tiling"],
  pricingIds: [],
  en: {
    title: "Renovix Home Services | Condo Renovation Approval Checklist (KL & Selangor)",
    metaDescription:
      "What to prepare before renovating a condominium or strata unit in Kuala Lumpur and Selangor — management approval, contractor documents, working hours, deposits and access. A practical checklist.",
    h1: "Condominium Renovation Approval Checklist for KL & Selangor",
    excerpt:
      "Every building sets its own renovation rules. Here is what to ask your management corporation, what they will normally want from your contractor, and how to sequence it so approval is not what delays you.",
    question: "What approvals do I need before renovating a condo in KL or Selangor?",
    answer:
      "Almost every stratified building in Kuala Lumpur and Selangor requires you to apply to the management corporation or joint management body for renovation approval before work starts, and most also require a refundable deposit, a set of drawings or a scope description, and your contractor's details and workers' particulars. Rules differ from building to building — hours, permitted works, lift access and debris disposal are all set locally — so the first step is always to request your building's current renovation guidelines in writing. Structural alterations and anything affecting common property are a separate matter and may also need local authority consent.",
    keyPoints: [
      "Ask management for the current renovation guidelines in writing before you plan anything — every building's rules differ.",
      "Approval usually needs a scope or drawing, contractor and worker details, and a refundable deposit.",
      "Hacking hours, lift use and debris removal are almost always restricted; plan the noisy work around them.",
      "Anything touching structure, the façade, common pipes or the external wall is a different conversation from an internal refresh.",
      "Apply early. Waiting for approval is the most common avoidable delay in a condominium project.",
    ],
    sections: [
      {
        heading: "Before you commit to dates",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Request the renovation guidelines",
                description:
                  "Ask the management office for the current written renovation rules for your building. Do not rely on what a neighbour did two years ago — house rules are revised, and it is your deposit at stake.",
              },
              {
                title: "Define the scope honestly",
                description:
                  "Write down what is being changed room by room. Management assesses risk from the scope: repainting and new flooring are usually straightforward, while hacking, wet-area work and electrical changes attract more conditions.",
              },
              {
                title: "Check what is common property",
                description:
                  "In stratified housing the boundary between your parcel and common property is not always obvious. Risers, main pipes, the façade, external windows and sometimes the slab and balcony are common. Work that touches them needs management's involvement, not just their permission.",
              },
              {
                title: "Submit the application and pay the deposit",
                description:
                  "Most buildings ask for a refundable deposit against damage to common areas, plus the application itself. Ask what conditions must be met for the deposit to be returned, and get that in writing too.",
              },
              {
                title: "Book the practicalities",
                description:
                  "Lift bookings, lift padding, loading bay slots, worker passes and parking are all typically arranged before the first day, not on it.",
              },
            ],
          },
        ],
      },
      {
        heading: "What management will usually ask for",
        blocks: [
          {
            type: "paragraph",
            text: "The exact list is set by your building, but across condominiums in KL and Selangor these are the items most commonly requested. Preparing them in advance is what turns a two-week approval into a two-day one.",
          },
          {
            type: "list",
            items: [
              "A completed renovation application form from the management office.",
              "A description of the works, and drawings or a layout plan where the scope involves more than finishes.",
              "The contractor's company details and a contact person who can be reached during the works.",
              "Workers' identification details for access passes.",
              "The proposed start and completion dates, and the intended working hours.",
              "The refundable renovation deposit, and any administrative charge the building sets.",
              "Insurance details, where the building requires them.",
            ],
          },
          {
            type: "callout",
            title: "Ask rather than assume",
            text: "Deposit amounts, permitted working hours, whether weekend work is allowed and how debris must be removed vary from building to building. Any contractor who tells you the rules without reading your building's guidelines is guessing.",
          },
        ],
      },
      {
        heading: "Works that need extra care in a strata unit",
        blocks: [
          {
            type: "table",
            columns: ["Scope", "Why management cares", "What to prepare"],
            rows: [
              [
                "Hacking tiles or screed",
                "Noise, vibration and heavy debris through common areas",
                "Restricted hacking hours, protected lift and corridor, bagged debris",
              ],
              [
                "Bathroom waterproofing",
                "A failure shows up in the unit below and becomes a dispute",
                "Scope showing membrane and flood test before tiling",
              ],
              [
                "Moving or adding plumbing points",
                "Connections to shared risers and stacks",
                "Confirmation of what is your parcel and what is common",
              ],
              [
                "Electrical alterations and new points",
                "Load, safety and compliance in a shared building",
                "Competent installer and a clear scope",
              ],
              [
                "Removing or adding walls",
                "Possible structural or fire-compartment implications",
                "Professional advice; management approval; possible authority consent",
              ],
              [
                "Balcony, window or façade changes",
                "Almost always common property and uniform appearance rules",
                "Written management position before ordering anything",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "We do not carry out structural alterations on the strength of a contractor's opinion. Where a proposed change may affect structure or a fire compartment, the honest answer is that it needs professional assessment and the building's formal position before anyone starts.",
          },
        ],
      },
      {
        heading: "Living through it, and keeping your neighbours",
        blocks: [
          {
            type: "list",
            items: [
              "Tell your immediate neighbours before the noisy phase, not after the first complaint.",
              "Keep the corridor clear and clean at the end of every working day — most deposit deductions are for common-area damage and mess, not for the work itself.",
              "Keep the approval letter and your contractor's contact details where security can see them.",
              "Photograph the lift lobby, corridor and your entrance before work starts, so any pre-existing damage is not attributed to your project.",
              "If your unit has one bathroom and it is being rebuilt, plan where you will shower before the hacking starts.",
            ],
          },
        ],
      },
      {
        heading: "Sequencing a condo renovation so approval is not the delay",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Weeks before: guidelines and scope",
                description:
                  "Get the written rules, agree the scope and confirm which parts of the work touch common property.",
              },
              {
                title: "Then: quotation and drawings",
                description:
                  "A quotation with a clear scope is usually enough for management for a finishes-level renovation; a layout change needs drawings.",
              },
              {
                title: "Then: application, deposit and dates",
                description:
                  "Submit everything together. Ask how long approval normally takes at your building and treat that as your earliest start date.",
              },
              {
                title: "Then: materials on site",
                description:
                  "Tiles and sanitary ware should arrive before the works, not during. A back-ordered tile stops the whole sequence after waterproofing.",
              },
              {
                title: "Finally: works, inspection and deposit return",
                description:
                  "Complete within the approved period, clear the site, then ask management to inspect the common areas and release the deposit.",
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need approval just to repaint or change the flooring?",
        answer:
          "Many buildings require an application even for finishes-only work, because workers and materials still use the lifts and corridors. It is quicker to ask the management office than to be stopped by security on day one.",
      },
      {
        question: "Who applies for the renovation permit — me or the contractor?",
        answer:
          "The application is normally made by the parcel owner, because it is your deposit and your undertaking to follow the house rules. We supply the contractor and worker details, the scope and the dates that the form asks for.",
      },
      {
        question: "Can renovation work be done on weekends?",
        answer:
          "That depends entirely on your building. Many restrict noisy work to weekday hours and prohibit hacking on Sundays and public holidays. The permitted hours will be stated in your building's renovation guidelines.",
      },
      {
        question: "What happens to the renovation deposit?",
        answer:
          "It is normally refundable after the works are completed and the management office is satisfied that no common-area damage or mess was left behind. Ask upfront what the inspection covers so there are no surprises at the end.",
      },
      {
        question: "The leak is coming from the unit above mine. Whose problem is it?",
        answer:
          "Start by reporting it to management in writing and asking for access to inspect the unit above, since the source usually has to be fixed there. Repairing your own ceiling before the source is stopped means paying for the same repair twice.",
      },
    ],
    closing:
      "Send us your building's renovation guidelines along with what you want to change, and we will tell you which parts are straightforward, which need management's formal position, and how the schedule should be arranged around the permitted hours.",
  },
  ms: {
    title: "Renovix Home Services | Senarai Semak Kelulusan Renovasi Kondominium (KL & Selangor)",
    metaDescription:
      "Apa yang perlu disediakan sebelum merenovasi kondominium atau unit strata di Kuala Lumpur dan Selangor — kelulusan pengurusan, dokumen kontraktor, waktu kerja, deposit dan akses.",
    h1: "Senarai Semak Kelulusan Renovasi Kondominium untuk KL & Selangor",
    excerpt:
      "Setiap bangunan menetapkan peraturan renovasinya sendiri. Inilah apa yang perlu ditanya kepada pengurusan, apa yang biasanya diminta daripada kontraktor anda, dan cara menyusun jadual supaya kelulusan bukan punca kelewatan.",
    question: "Kelulusan apa yang diperlukan sebelum merenovasi kondo di KL atau Selangor?",
    answer:
      "Hampir setiap bangunan strata di Kuala Lumpur dan Selangor menghendaki anda memohon kelulusan renovasi daripada perbadanan pengurusan atau badan pengurusan bersama sebelum kerja bermula, dan kebanyakannya juga memerlukan deposit boleh dikembalikan, lukisan atau penerangan skop kerja, serta butiran kontraktor dan pekerja. Peraturan berbeza antara bangunan — waktu kerja, jenis kerja yang dibenarkan, akses lif dan pelupusan sisa semuanya ditetapkan secara tempatan — jadi langkah pertama sentiasa meminta garis panduan renovasi semasa bangunan anda secara bertulis. Pengubahsuaian struktur dan apa-apa yang melibatkan harta bersama ialah perkara berasingan dan mungkin memerlukan kebenaran pihak berkuasa tempatan.",
    keyPoints: [
      "Minta garis panduan renovasi semasa secara bertulis daripada pengurusan sebelum merancang apa-apa — peraturan setiap bangunan berbeza.",
      "Kelulusan biasanya memerlukan skop atau lukisan, butiran kontraktor dan pekerja, serta deposit boleh dikembalikan.",
      "Waktu memecah, penggunaan lif dan pembuangan sisa hampir sentiasa terhad; rancang kerja bising mengikutnya.",
      "Apa-apa yang menyentuh struktur, fasad, paip bersama atau dinding luar ialah perbincangan berbeza daripada pembaharuan dalaman.",
      "Mohon awal. Menunggu kelulusan ialah kelewatan paling biasa yang boleh dielakkan dalam projek kondominium.",
    ],
    sections: [
      {
        heading: "Sebelum anda menetapkan tarikh",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Minta garis panduan renovasi",
                description:
                  "Minta pejabat pengurusan memberikan peraturan renovasi bertulis semasa untuk bangunan anda. Jangan bergantung pada apa yang jiran buat dua tahun lalu — peraturan rumah dipinda, dan deposit anda yang dipertaruhkan.",
              },
              {
                title: "Tentukan skop dengan jujur",
                description:
                  "Tuliskan apa yang akan diubah bilik demi bilik. Pengurusan menilai risiko berdasarkan skop: mengecat semula dan lantai baharu biasanya mudah, manakala kerja memecah, kerja kawasan basah dan perubahan elektrik menarik lebih banyak syarat.",
              },
              {
                title: "Semak apa yang harta bersama",
                description:
                  "Dalam perumahan strata, sempadan antara petak anda dan harta bersama tidak selalu jelas. Ruang paip, paip utama, fasad, tingkap luar dan kadangkala lantai konkrit serta balkoni ialah harta bersama. Kerja yang menyentuhnya memerlukan penglibatan pengurusan, bukan sekadar kebenaran mereka.",
              },
              {
                title: "Hantar permohonan dan bayar deposit",
                description:
                  "Kebanyakan bangunan meminta deposit boleh dikembalikan terhadap kerosakan kawasan bersama, selain permohonan itu sendiri. Tanya syarat apa yang perlu dipenuhi untuk deposit dikembalikan, dan dapatkan jawapannya secara bertulis juga.",
              },
              {
                title: "Uruskan hal praktikal",
                description:
                  "Tempahan lif, pelapik lif, slot ruang punggah, pas pekerja dan tempat letak kereta semuanya biasanya diuruskan sebelum hari pertama, bukan pada hari itu.",
              },
            ],
          },
        ],
      },
      {
        heading: "Apa yang biasanya diminta pengurusan",
        blocks: [
          {
            type: "paragraph",
            text: "Senarai tepatnya ditetapkan oleh bangunan anda, tetapi di kondominium sekitar KL dan Selangor, inilah item yang paling kerap diminta. Menyediakannya lebih awal itulah yang menukar kelulusan dua minggu kepada dua hari.",
          },
          {
            type: "list",
            items: [
              "Borang permohonan renovasi yang lengkap daripada pejabat pengurusan.",
              "Penerangan kerja, serta lukisan atau pelan susun atur jika skopnya melibatkan lebih daripada kemasan.",
              "Butiran syarikat kontraktor dan orang untuk dihubungi sepanjang kerja dijalankan.",
              "Butiran pengenalan pekerja untuk pas akses.",
              "Tarikh mula dan siap yang dicadangkan, serta waktu kerja yang dirancang.",
              "Deposit renovasi boleh dikembalikan, dan apa-apa caj pentadbiran yang ditetapkan bangunan.",
              "Butiran insurans, jika bangunan memerlukannya.",
            ],
          },
          {
            type: "callout",
            title: "Tanya, jangan andaikan",
            text: "Jumlah deposit, waktu kerja yang dibenarkan, sama ada kerja hujung minggu dibenarkan dan cara sisa perlu dibuang berbeza antara bangunan. Mana-mana kontraktor yang memberitahu anda peraturannya tanpa membaca garis panduan bangunan anda sebenarnya hanya meneka.",
          },
        ],
      },
      {
        heading: "Kerja yang memerlukan perhatian lebih di unit strata",
        blocks: [
          {
            type: "table",
            columns: ["Skop", "Kenapa pengurusan ambil berat", "Apa yang perlu disediakan"],
            rows: [
              [
                "Memecah jubin atau screed",
                "Bunyi, getaran dan sisa berat melalui kawasan bersama",
                "Waktu memecah terhad, lif dan koridor dilindungi, sisa dibungkus",
              ],
              [
                "Kalis air bilik air",
                "Kegagalan akan kelihatan di unit bawah dan menjadi pertikaian",
                "Skop yang menunjukkan membran dan ujian air sebelum pemasangan jubin",
              ],
              [
                "Memindah atau menambah titik paip",
                "Sambungan kepada ruang paip dan saluran bersama",
                "Pengesahan bahagian mana petak anda dan mana harta bersama",
              ],
              [
                "Pengubahsuaian elektrik dan titik baharu",
                "Beban, keselamatan dan pematuhan dalam bangunan bersama",
                "Pemasang yang kompeten dan skop yang jelas",
              ],
              [
                "Membuang atau menambah dinding",
                "Kemungkinan implikasi struktur atau petak kebakaran",
                "Nasihat profesional; kelulusan pengurusan; mungkin kebenaran pihak berkuasa",
              ],
              [
                "Perubahan balkoni, tingkap atau fasad",
                "Hampir sentiasa harta bersama dan tertakluk peraturan rupa seragam",
                "Pendirian bertulis pengurusan sebelum memesan apa-apa",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "Kami tidak menjalankan pengubahsuaian struktur berdasarkan pendapat kontraktor semata-mata. Jika perubahan yang dicadangkan mungkin menjejaskan struktur atau petak kebakaran, jawapan yang jujur ialah ia memerlukan penilaian profesional dan pendirian rasmi bangunan sebelum sesiapa memulakan kerja.",
          },
        ],
      },
      {
        heading: "Menjalani prosesnya, dan mengekalkan hubungan baik dengan jiran",
        blocks: [
          {
            type: "list",
            items: [
              "Beritahu jiran terdekat sebelum fasa bising bermula, bukan selepas aduan pertama.",
              "Pastikan koridor lapang dan bersih pada penghujung setiap hari kerja — kebanyakan potongan deposit disebabkan kerosakan dan kekotoran kawasan bersama, bukan kerja itu sendiri.",
              "Simpan surat kelulusan dan butiran kontraktor di tempat yang boleh dilihat pihak keselamatan.",
              "Ambil gambar lobi lif, koridor dan pintu masuk anda sebelum kerja bermula, supaya kerosakan sedia ada tidak dikaitkan dengan projek anda.",
              "Jika unit anda hanya ada satu bilik air dan ia sedang dibina semula, rancang di mana anda akan mandi sebelum kerja memecah bermula.",
            ],
          },
        ],
      },
      {
        heading: "Susunan kerja supaya kelulusan bukan puncanya lewat",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Beberapa minggu awal: garis panduan dan skop",
                description:
                  "Dapatkan peraturan bertulis, persetujui skop dan sahkan bahagian mana kerja yang menyentuh harta bersama.",
              },
              {
                title: "Seterusnya: sebut harga dan lukisan",
                description:
                  "Sebut harga dengan skop yang jelas biasanya memadai untuk pengurusan bagi renovasi peringkat kemasan; perubahan susun atur memerlukan lukisan.",
              },
              {
                title: "Seterusnya: permohonan, deposit dan tarikh",
                description:
                  "Hantar semuanya serentak. Tanya berapa lama kelulusan biasanya mengambil masa di bangunan anda dan anggap itu sebagai tarikh mula terawal.",
              },
              {
                title: "Seterusnya: bahan sampai ke tapak",
                description:
                  "Jubin dan kelengkapan sanitari perlu tiba sebelum kerja, bukan semasa kerja. Jubin kehabisan stok akan menghentikan seluruh urutan selepas kerja kalis air.",
              },
              {
                title: "Akhirnya: kerja, pemeriksaan dan pemulangan deposit",
                description:
                  "Siapkan dalam tempoh yang diluluskan, bersihkan tapak, kemudian minta pengurusan memeriksa kawasan bersama dan melepaskan deposit.",
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Perlukah kelulusan hanya untuk mengecat semula atau menukar lantai?",
        answer:
          "Banyak bangunan memerlukan permohonan walaupun untuk kerja kemasan sahaja, kerana pekerja dan bahan tetap menggunakan lif dan koridor. Lebih cepat bertanya kepada pejabat pengurusan berbanding dihalang pihak keselamatan pada hari pertama.",
      },
      {
        question: "Siapa memohon permit renovasi — saya atau kontraktor?",
        answer:
          "Permohonan lazimnya dibuat oleh pemilik petak, kerana ia deposit anda dan akujanji anda untuk mematuhi peraturan rumah. Kami membekalkan butiran kontraktor dan pekerja, skop kerja dan tarikh yang diminta dalam borang tersebut.",
      },
      {
        question: "Bolehkah kerja renovasi dijalankan pada hujung minggu?",
        answer:
          "Ia bergantung sepenuhnya pada bangunan anda. Banyak bangunan mengehadkan kerja bising kepada waktu hari bekerja dan melarang kerja memecah pada hari Ahad dan cuti umum. Waktu yang dibenarkan akan dinyatakan dalam garis panduan renovasi bangunan anda.",
      },
      {
        question: "Apa jadi kepada deposit renovasi?",
        answer:
          "Ia lazimnya boleh dikembalikan selepas kerja siap dan pejabat pengurusan berpuas hati tiada kerosakan atau kekotoran ditinggalkan di kawasan bersama. Tanya lebih awal apa yang diperiksa supaya tiada kejutan pada penghujungnya.",
      },
      {
        question: "Kebocoran datang dari unit di atas saya. Tanggungjawab siapa?",
        answer:
          "Mulakan dengan melaporkannya kepada pengurusan secara bertulis dan meminta akses untuk memeriksa unit di atas, kerana puncanya biasanya perlu dibaiki di situ. Membaiki siling anda sebelum puncanya dihentikan bermakna membayar untuk pembaikan yang sama dua kali.",
      },
    ],
    closing:
      "Hantarkan garis panduan renovasi bangunan anda bersama apa yang anda mahu ubah, dan kami akan beritahu bahagian mana yang mudah, mana yang memerlukan pendirian rasmi pengurusan, dan bagaimana jadual patut disusun mengikut waktu yang dibenarkan.",
  },
  zh: {
    title: "Renovix Home Services | 公寓装修准证申请清单（吉隆坡与雪兰莪）",
    metaDescription:
      "在吉隆坡与雪兰莪装修公寓或分层地契单位前该准备什么 —— 管理处批准、承包商文件、施工时段、按金与出入安排。一份实用清单。",
    h1: "吉隆坡与雪兰莪公寓装修准证申请清单",
    excerpt:
      "每栋大楼的装修规定都不一样。以下是该向管理处询问的内容、他们通常会要求承包商提供什么，以及如何安排流程，让审批不成为拖延原因。",
    question: "在吉隆坡或雪兰莪装修公寓前需要哪些批准？",
    answer:
      "吉隆坡与雪兰莪几乎所有分层地契大楼，都要求业主在开工前向管理机构或联合管理机构申请装修批准，多数还需缴付可退还按金、提交图纸或工程范围说明，以及承包商与工人的资料。各大楼规定不同 —— 施工时段、允许的工程类型、电梯使用与垃圾清运都由大楼自行规定 —— 因此第一步永远是以书面索取贵大楼现行的装修指南。涉及结构改动或共有产业的工程属另一回事，可能还需地方政府的许可。",
    keyPoints: [
      "在做任何规划之前，先以书面向管理处索取现行装修指南 —— 每栋大楼规定都不同。",
      "申请通常需要工程范围或图纸、承包商与工人资料，以及可退还按金。",
      "打拆时段、电梯使用与垃圾清运几乎都有限制；把噪音工序安排在允许时段内。",
      "凡涉及结构、外立面、公共管道或外墙的，都与室内翻新是两回事。",
      "尽早申请。等待审批是公寓装修项目中最常见、也最可避免的延误。",
    ],
    sections: [
      {
        heading: "在敲定日期之前",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "索取装修指南",
                description:
                  "向管理处索取贵大楼现行的书面装修规定。不要参照邻居两年前的做法 —— 大楼规约会修订，而押上按金的是您。",
              },
              {
                title: "如实界定工程范围",
                description:
                  "逐个房间写下要改动的内容。管理处依范围评估风险：重新粉刷与更换地板通常简单，而打拆、湿区施工与电路改动则会附带更多条件。",
              },
              {
                title: "确认哪些属于共有产业",
                description:
                  "在分层住宅中，自有单位与共有产业的界线并不总是明显。管道井、主管道、外立面、外窗，有时连楼板与阳台都属共有。涉及这些的工程需要管理处参与，而不只是获得许可。",
              },
              {
                title: "递交申请并缴付按金",
                description:
                  "多数大楼会收取针对公共区域损坏的可退还按金，另有申请本身的手续。请询问退还按金需满足哪些条件，同样要书面确认。",
              },
              {
                title: "预约各项实务安排",
                description:
                  "电梯预约、电梯保护垫、卸货区时段、工人通行证与停车位，通常都要在开工前安排好，而不是当天才办。",
              },
            ],
          },
        ],
      },
      {
        heading: "管理处通常会要求什么",
        blocks: [
          {
            type: "paragraph",
            text: "确切清单由贵大楼决定，但在吉隆坡与雪兰莪的公寓中，以下是最常被要求的项目。提前备齐，正是把两周审批缩短为两天的关键。",
          },
          {
            type: "list",
            items: [
              "管理处提供并填妥的装修申请表。",
              "工程内容说明；若范围不只是饰面，还需图纸或平面布置图。",
              "承包商公司资料，以及施工期间可联络的负责人。",
              "工人身份资料，用于办理通行证。",
              "拟定的开工与完工日期，以及计划的施工时段。",
              "可退还的装修按金，以及大楼规定的任何行政费用。",
              "保险资料（若大楼有此要求）。",
            ],
          },
          {
            type: "callout",
            title: "请询问，不要假设",
            text: "按金金额、允许施工时段、周末能否施工、垃圾如何清运，各大楼都不同。任何承包商若未看过贵大楼的装修指南就告诉您规定，那都是在猜。",
          },
        ],
      },
      {
        heading: "分层单位中需要格外注意的工程",
        blocks: [
          {
            type: "table",
            columns: ["工程范围", "管理处为何在意", "需要准备什么"],
            rows: [
              [
                "打掉瓷砖或砂浆层",
                "噪音、震动与经过公共区域的大量废料",
                "受限的打拆时段、电梯与走廊保护、废料装袋",
              ],
              [
                "浴室防水",
                "一旦失效会出现在楼下单位并演变成纠纷",
                "载明防水层与闭水试验先于铺砖的工程范围",
              ],
              [
                "移动或增设给排水点位",
                "涉及与共用立管的连接",
                "确认哪些属自有单位、哪些属共有产业",
              ],
              [
                "电路改动与新增点位",
                "共用建筑中的负荷、安全与合规",
                "具能力的施工方与清楚的工程范围",
              ],
              [
                "拆除或增建墙体",
                "可能涉及结构或防火分区",
                "专业意见；管理处批准；可能需当局许可",
              ],
              [
                "阳台、窗户或外立面改动",
                "几乎必属共有产业，并受外观统一规定约束",
                "在下单前取得管理处的书面立场",
              ],
            ],
          },
          {
            type: "paragraph",
            text: "我们不会仅凭承包商的判断进行结构改动。若拟议的改动可能影响结构或防火分区，诚实的答案是：必须先有专业评估与大楼的正式立场，任何人才可以动工。",
          },
        ],
      },
      {
        heading: "施工期间的相处之道",
        blocks: [
          {
            type: "list",
            items: [
              "在噪音阶段开始前先告知相邻住户，而不是等第一封投诉之后。",
              "每个工作日结束时保持走廊畅通清洁 —— 多数按金扣款来自公共区域的损坏与脏乱，而不是工程本身。",
              "把批准函与承包商联络资料放在保安可查看的地方。",
              "开工前拍下电梯厅、走廊与您家门口的照片，避免既有损坏被算到您的项目上。",
              "若单位只有一间浴室且正在重建，请在打拆前安排好洗澡的地方。",
            ],
          },
        ],
      },
      {
        heading: "如何排序，让审批不成为延误",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "提前数周：指南与范围",
                description:
                  "取得书面规定，确定工程范围，并确认哪些部分会触及共有产业。",
              },
              {
                title: "接着：报价与图纸",
                description:
                  "对饰面级别的装修，一份范围清楚的报价单通常足以送审；若涉及布局改动则需图纸。",
              },
              {
                title: "接着：申请、按金与日期",
                description:
                  "一并递交。询问贵大楼一般的审批时长，并把它当作最早的开工日。",
              },
              {
                title: "接着：材料进场",
                description:
                  "瓷砖与洁具应在开工前到货，而不是施工中才到。缺货瓷砖会让防水之后的所有工序停摆。",
              },
              {
                title: "最后：施工、验收与退还按金",
                description:
                  "在批准期限内完工、清理现场，然后请管理处检查公共区域并释放按金。",
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "只是重新粉刷或换地板，也需要批准吗？",
        answer:
          "许多大楼即使只做饰面工程也要求申请，因为工人与材料仍会使用电梯与走廊。先问管理处，比开工当天被保安拦下来快得多。",
      },
      {
        question: "装修准证由我申请还是承包商申请？",
        answer:
          "通常由单位业主提出申请，因为按金与遵守规约的承诺都在您名下。我们会提供表格所需的承包商与工人资料、工程范围与日期。",
      },
      {
        question: "周末可以施工吗？",
        answer:
          "完全取决于贵大楼。许多大楼把噪音工序限制在工作日时段，并禁止在周日与公共假期打拆。允许的时段会写在贵大楼的装修指南中。",
      },
      {
        question: "装修按金会怎样处理？",
        answer:
          "通常在完工后，管理处确认公共区域没有遗留损坏与脏乱即可退还。请事先询问验收涵盖哪些项目，以免结尾时出现意外。",
      },
      {
        question: "漏水来自楼上单位，这是谁的问题？",
        answer:
          "先以书面向管理处报备，并请求进入楼上单位查看，因为源头通常必须在那里处理。在源头未止住前先修自家天花，等于为同一处维修付两次钱。",
      },
    ],
    closing:
      "把贵大楼的装修指南连同您想改动的内容发给我们，我们会说明哪些部分可以直接进行、哪些需要管理处的正式立场，以及施工进度该如何配合允许时段安排。",
  },
};
