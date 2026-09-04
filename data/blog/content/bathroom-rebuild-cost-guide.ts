import type { ArticleDefinition } from "../types";

/**
 * Backlog item 1 — cost guide: full bathroom rebuild.
 *
 * Commercial-investigation intent feeding the waterproofing, tiling and
 * general-renovation pillars. Every figure the reader sees comes from the
 * catalogue rows declared in `pricingIds`; nothing is authored here.
 */
export const bathroomRebuildCostGuide: ArticleDefinition = {
  slug: "bathroom-rebuild-cost-guide",
  category: "cost-guides",
  intents: ["cost", "price-factors", "preparation", "decision-guide"],
  published: "2026-09-04",
  relatedServices: ["general-renovation", "waterproofing", "tiling", "plumbing"],
  relatedSubServices: ["bathroom-waterproofing", "floor-tile-installation"],
  relatedProblems: [
    "bathroom-leakage",
    "bathroom-tile-problems",
    "water-seepage-through-tiles",
    "toilet-problems",
  ],
  relatedLocations: [
    "kuala-lumpur/cheras",
    "kuala-lumpur/mont-kiara",
    "selangor/petaling-jaya",
    "selangor/subang-jaya",
  ],
  relatedProjects: ["toilet-and-basin-installation"],
  pricingIds: [
    "renovation-bathroom-full",
    "waterproofing-bathroom-hack",
    "tiling-bathroom-complete",
    "plumbing-tap-replacement",
    "plumbing-toilet-repair",
  ],
  en: {
    title: "Renovix Home Services | Bathroom Rebuild Cost Guide (KL & Selangor)",
    metaDescription:
      "What a full bathroom rebuild costs in Kuala Lumpur and Selangor, what sits inside the price, and when a partial repair is the better decision. Catalogue rates and a free quotation.",
    h1: "Bathroom Rebuild Cost Guide for Kuala Lumpur & Selangor",
    excerpt:
      "What a full bathroom rebuild includes, what moves the price, and how to tell whether you need a rebuild or a targeted repair.",
    question: "How much does it cost to rebuild a bathroom in KL or Selangor?",
    answer:
      "A full bathroom rebuild — hacking out the old finishes, re-waterproofing the screed, re-tiling walls and floor, then reinstalling sanitary ware — is priced per bathroom, and our starting rate for the complete scope is shown in the table below. Two thirds of the variation between quotations comes from three things: the size of the bathroom, whether the plumbing points are being moved, and the tile you choose. If the tiles are sound and only the seal has failed, a waterproofing-and-relay scope costs far less than a rebuild.",
    keyPoints: [
      "A rebuild is priced per bathroom, not per square foot, because the fixed work (hacking, waterproofing, sanitary ware) dominates a small room.",
      "Moving the floor trap, toilet outlet or shower valve is the single most expensive change you can request.",
      "Waterproofing is the part you cannot see and cannot skip — it is what decides whether the room lasts ten years or two.",
      "Tile choice changes both material cost and labour: large-format and mosaic take longer to lay than standard ceramic.",
      "A leaking bathroom is not automatically a rebuild. Diagnose first; the fix is often narrower than the fear.",
    ],
    sections: [
      {
        heading: "What a full bathroom rebuild actually includes",
        blocks: [
          {
            type: "paragraph",
            text: "\"Rebuild\" means the room is taken back to structure and put together again. In a typical Klang Valley bathroom that sequence is fixed, and skipping any step is what causes the callbacks you read about.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Protection and hacking",
                description:
                  "Common areas and the corridor are sheeted, then the old wall and floor tiles are hacked off along with the failed screed. Debris is bagged and removed — in a condominium this has to follow the building's loading-bay and lift-padding rules.",
              },
              {
                title: "Plumbing first fix",
                description:
                  "Concealed pipework is repaired or rerouted while the walls are open. This is the only moment moving a floor trap or shower mixer is cheap, and the only moment it is honest to check the old pipes.",
              },
              {
                title: "Screed and falls",
                description:
                  "New screed is laid to fall towards the floor trap. Getting the fall right is what stops standing water later, and it must be done before waterproofing, not after.",
              },
              {
                title: "Waterproofing and flood test",
                description:
                  "The membrane is applied to the floor and up the wet walls, then the room is flooded and left to stand so the seal is proven before a single tile goes down.",
              },
              {
                title: "Tiling and grouting",
                description:
                  "Walls and floor are tiled, cut around the trap and fittings, then grouted and cleaned. Silicone goes into the movement joints — corners and the floor-to-wall junction — not grout.",
              },
              {
                title: "Sanitary ware and second fix",
                description:
                  "Toilet, basin, mixer, shower set and accessories are installed and tested, and the room is cleaned before handover.",
              },
            ],
          },
        ],
      },
      {
        heading: "Bathroom rebuild rates from our price list",
        blocks: [
          {
            type: "paragraph",
            text: "These are our published starting rates for the scopes a bathroom project draws on. The full-rebuild row covers the whole sequence above; the two rows under it are what you would price separately if only part of the room is being redone.",
          },
          {
            type: "pricing",
            pricingIds: [
              "renovation-bathroom-full",
              "waterproofing-bathroom-hack",
              "tiling-bathroom-complete",
            ],
          },
          {
            type: "paragraph",
            text: "Fittings are quoted per item, so replacing a mixer or repairing a flush during the works is priced from these rows rather than absorbed into a vague allowance.",
          },
          { type: "pricing", pricingIds: ["plumbing-tap-replacement", "plumbing-toilet-repair"] },
        ],
      },
      {
        heading: "What moves the price up or down",
        blocks: [
          {
            type: "list",
            items: [
              "Bathroom size. A master bathroom carries more tile area and more waterproofing than a small guest WC, but the fixed setup cost is nearly the same — which is why small bathrooms look expensive per square foot.",
              "Moving plumbing points. Keeping the toilet, trap and shower where they are is the cheapest possible layout. Every point moved means chasing, rerouting and re-testing.",
              "Tile format and finish. Standard ceramic is quickest. Large-format porcelain needs a flatter substrate and more careful setting; mosaic and feature strips add cutting time.",
              "Condition behind the tiles. Rotten screed, a cracked slab or corroded old pipework is only discovered after hacking, and honest contractors re-quote at that point rather than pretend it was included.",
              "Property type and access. High-floor condominium units mean lift bookings, restricted hacking hours and porterage; landed homes usually allow a faster, cheaper site setup.",
              "Sanitary ware you supply. Many owners buy their own toilet and mixer; we install what you buy, which takes the fittings out of the contractor's margin entirely.",
            ],
          },
        ],
      },
      {
        heading: "Do you need a rebuild, or just a repair?",
        blocks: [
          {
            type: "paragraph",
            text: "Most people arrive at a rebuild because of water, not because of looks. Work through this honestly before committing to the bigger scope.",
          },
          {
            type: "table",
            columns: ["What you are seeing", "Likely scope", "Read next"],
            rows: [
              [
                "Damp patch on the ceiling of the room below the bathroom",
                "Diagnosis first — could be a pipe, could be the membrane",
                "Bathroom leakage guide",
              ],
              [
                "Grout dark, crumbling or missing; silicone mouldy",
                "Regrout and recaulk — no rebuild",
                "Regrout and silicone maintenance guide",
              ],
              [
                "A few cracked or hollow tiles, floor otherwise sound",
                "Tile repair and replacement",
                "Bathroom tile problems guide",
              ],
              [
                "Water seeping through the tiled floor into the slab",
                "Hack, re-waterproof and relay",
                "Water seepage through tiles guide",
              ],
              [
                "Layout no longer works, fittings at end of life, seepage as well",
                "Full rebuild",
                "This guide",
              ],
            ],
          },
          {
            type: "callout",
            title: "Diagnose before you demolish",
            text: "A ceiling stain under a bathroom has several possible causes, and only one of them needs the floor taken up. Our ceiling-stain diagnosis guide walks through how to tell them apart before you spend anything.",
          },
        ],
      },
      {
        heading: "How long a rebuild takes and how to plan around it",
        blocks: [
          {
            type: "paragraph",
            text: "The single biggest scheduling factor is the waterproofing: the membrane has to cure and the flood test has to stand, and neither can be rushed without gambling on the whole job. If your home has only one bathroom, plan for it to be out of use for the duration and tell us at quotation stage — the sequence can be arranged to shorten the unusable window, but it cannot be removed.",
          },
          {
            type: "list",
            items: [
              "Condominium and strata units usually need a renovation permit and a deposit from building management before hacking can start — apply early, as approval is the most common cause of delay.",
              "Choose and buy your tiles and sanitary ware before the works begin; waiting for a back-ordered tile stops everything after the waterproofing.",
              "Agree what happens if the screed or pipework behind the tiles turns out to be worse than expected, in writing, before work starts.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is waterproofing really necessary if the bathroom never leaked before?",
        answer:
          "Yes. Once the old tiles and screed are hacked off, the previous membrane is gone with them. Tiling straight onto new screed with no membrane leaves nothing between the water and your slab, and the failure shows up in the room below rather than in the bathroom itself.",
      },
      {
        question: "Can I keep my existing tiles and only redo the waterproofing?",
        answer:
          "Not for a floor membrane. Waterproofing sits under the tiles, so reaching it means lifting them. What can be done without hacking is a surface repair — regrouting, recaulking, or PU injection where the leak is traced to a specific point — and that is worth checking first.",
      },
      {
        question: "How much extra does moving the toilet position cost?",
        answer:
          "It depends on how far the soil outlet has to travel and whether the fall can be maintained without raising the floor. It is quoted case by case after we see the existing layout, because a 30cm shift and a wall-to-wall relocation are completely different jobs.",
      },
      {
        question: "Do you supply the tiles and sanitary ware, or should I buy them?",
        answer:
          "Either works. Many owners prefer to choose and buy their own tiles, toilet and mixer, and we install them. If you would rather we source everything, tell us the finish you want and the quotation will show the materials separately from the labour.",
      },
      {
        question: "Will the quotation change after hacking starts?",
        answer:
          "It can, if what is behind the tiles is materially different from what was visible — badly degraded screed, a cracked slab or corroded concealed pipework. We tell you before proceeding and price the additional work as a separate item rather than folding it in quietly.",
      },
    ],
    closing:
      "If you are weighing a rebuild against a repair, send photographs of the bathroom and of anything you can see in the room below, along with the property type and area. We will tell you which scope the evidence points to before quoting.",
  },
  ms: {
    title: "Renovix Home Services | Panduan Kos Bina Semula Bilik Air (KL & Selangor)",
    metaDescription:
      "Kos bina semula bilik air di Kuala Lumpur dan Selangor, apa yang termasuk dalam harga, dan bila pembaikan separa lebih berbaloi. Kadar rasmi kami dan sebut harga percuma.",
    h1: "Panduan Kos Bina Semula Bilik Air untuk Kuala Lumpur & Selangor",
    excerpt:
      "Apa yang termasuk dalam kerja bina semula bilik air, apa yang menaikkan harga, dan cara menilai sama ada anda perlukan bina semula atau pembaikan khusus sahaja.",
    question: "Berapakah kos bina semula bilik air di KL atau Selangor?",
    answer:
      "Bina semula bilik air sepenuhnya — memecah kemasan lama, membuat kalis air semula pada screed, memasang jubin dinding dan lantai baharu, kemudian memasang semula kelengkapan sanitari — dikira setiap bilik air, dan kadar permulaan kami untuk skop penuh ditunjukkan dalam jadual di bawah. Sebahagian besar perbezaan antara sebut harga datang daripada tiga perkara: saiz bilik air, sama ada titik paip dipindahkan, dan jenis jubin yang anda pilih. Jika jubin masih kukuh dan hanya lapisan kalis air gagal, skop kalis air dan pasang semula jauh lebih murah daripada bina semula.",
    keyPoints: [
      "Bina semula dikira setiap bilik air, bukan setiap kaki persegi, kerana kerja tetap (pecah, kalis air, kelengkapan) mendominasi ruang kecil.",
      "Memindahkan perangkap lantai, saluran tandas atau injap pancuran ialah perubahan paling mahal yang boleh anda minta.",
      "Kalis air ialah bahagian yang tidak nampak dan tidak boleh dilangkau — ia menentukan sama ada bilik itu tahan sepuluh tahun atau dua tahun.",
      "Pilihan jubin mengubah kos bahan dan kos buruh: jubin format besar dan mozek mengambil masa lebih lama daripada jubin seramik biasa.",
      "Bilik air bocor tidak semestinya perlu dibina semula. Buat diagnosis dahulu; penyelesaiannya selalunya lebih kecil daripada yang dibayangkan.",
    ],
    sections: [
      {
        heading: "Apa yang sebenarnya termasuk dalam bina semula bilik air",
        blocks: [
          {
            type: "paragraph",
            text: "\"Bina semula\" bermaksud bilik itu dikembalikan kepada struktur asal dan dibina semula. Dalam bilik air biasa di Lembah Klang, urutan kerjanya tetap, dan melangkau mana-mana langkah itulah punca kerja perlu diulang kemudian.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Perlindungan dan pemecahan",
                description:
                  "Kawasan laluan dan koridor ditutup, kemudian jubin dinding dan lantai lama dipecahkan bersama screed yang rosak. Sisa dibungkus dan dibuang — di kondominium, ini perlu mengikut peraturan lif dan ruang punggah bangunan.",
              },
              {
                title: "Kerja paip peringkat pertama",
                description:
                  "Paip tersembunyi dibaiki atau dialih semasa dinding masih terbuka. Inilah satu-satunya masa memindahkan perangkap lantai atau pengadun pancuran menjadi murah, dan masa paling jujur untuk memeriksa paip lama.",
              },
              {
                title: "Screed dan kecerunan",
                description:
                  "Screed baharu dibina supaya air mengalir ke arah perangkap lantai. Kecerunan yang betul menghalang air bertakung, dan ia mesti disiapkan sebelum kerja kalis air, bukan selepasnya.",
              },
              {
                title: "Kalis air dan ujian air bertakung",
                description:
                  "Membran disapu pada lantai dan naik ke dinding basah, kemudian bilik dibanjiri dan dibiarkan supaya kekalisan terbukti sebelum sekeping jubin dipasang.",
              },
              {
                title: "Pemasangan jubin dan grout",
                description:
                  "Dinding dan lantai dijubin, dipotong mengelilingi perangkap dan kelengkapan, kemudian digrout dan dibersihkan. Silikon dimasukkan pada sambungan pergerakan — sudut dan pertemuan lantai dengan dinding — bukan grout.",
              },
              {
                title: "Kelengkapan sanitari dan pemasangan akhir",
                description:
                  "Tandas, besen, pengadun, set pancuran dan aksesori dipasang serta diuji, dan bilik dibersihkan sebelum diserahkan.",
              },
            ],
          },
        ],
      },
      {
        heading: "Kadar bina semula bilik air daripada senarai harga kami",
        blocks: [
          {
            type: "paragraph",
            text: "Ini kadar permulaan rasmi kami bagi skop yang terlibat dalam projek bilik air. Baris bina semula penuh merangkumi keseluruhan urutan di atas; dua baris di bawahnya ialah harga berasingan jika hanya sebahagian bilik dikerjakan semula.",
          },
          {
            type: "pricing",
            pricingIds: [
              "renovation-bathroom-full",
              "waterproofing-bathroom-hack",
              "tiling-bathroom-complete",
            ],
          },
          {
            type: "paragraph",
            text: "Kelengkapan dikira setiap unit, jadi menggantikan pengadun atau membaiki sistem pam tandas semasa kerja dijalankan dihargakan daripada baris ini, bukan diserap ke dalam peruntukan yang kabur.",
          },
          { type: "pricing", pricingIds: ["plumbing-tap-replacement", "plumbing-toilet-repair"] },
        ],
      },
      {
        heading: "Apa yang menaikkan atau menurunkan harga",
        blocks: [
          {
            type: "list",
            items: [
              "Saiz bilik air. Bilik air utama mempunyai lebih banyak luas jubin dan kalis air berbanding tandas tetamu, tetapi kos persediaan tetapnya hampir sama — sebab itulah bilik air kecil kelihatan mahal setiap kaki persegi.",
              "Memindahkan titik paip. Mengekalkan kedudukan tandas, perangkap dan pancuran ialah susun atur paling jimat. Setiap titik yang dipindahkan bermakna kerja memahat, mengalih dan menguji semula.",
              "Format dan kemasan jubin. Seramik biasa paling cepat. Porselin format besar memerlukan permukaan lebih rata dan pemasangan lebih teliti; mozek dan jalur hiasan menambah masa pemotongan.",
              "Keadaan di sebalik jubin. Screed reput, lantai konkrit retak atau paip lama berkarat hanya ditemui selepas pemecahan, dan kontraktor yang jujur akan memberi sebut harga tambahan pada ketika itu, bukan berpura-pura ia sudah termasuk.",
              "Jenis hartanah dan akses. Unit kondominium di tingkat tinggi memerlukan tempahan lif, waktu memecah yang terhad dan kerja mengangkut; rumah bertanah biasanya membolehkan persediaan tapak lebih cepat dan murah.",
              "Kelengkapan yang anda beli sendiri. Ramai pemilik membeli tandas dan pengadun sendiri; kami memasang apa yang anda beli, dan itu mengeluarkan kos kelengkapan daripada margin kontraktor.",
            ],
          },
        ],
      },
      {
        heading: "Perlukah bina semula, atau pembaikan sahaja?",
        blocks: [
          {
            type: "paragraph",
            text: "Kebanyakan pemilik memikirkan bina semula kerana masalah air, bukan kerana rupa. Nilaikan senarai ini dengan jujur sebelum memilih skop yang lebih besar.",
          },
          {
            type: "table",
            columns: ["Apa yang anda lihat", "Skop yang mungkin", "Baca seterusnya"],
            rows: [
              [
                "Kesan lembap pada siling bilik di bawah bilik air",
                "Diagnosis dahulu — mungkin paip, mungkin membran",
                "Panduan kebocoran bilik air",
              ],
              [
                "Grout gelap, hancur atau hilang; silikon berkulat",
                "Grout semula dan silikon semula — tiada bina semula",
                "Panduan penyelenggaraan grout dan silikon",
              ],
              [
                "Beberapa jubin retak atau berongga, lantai lain masih kukuh",
                "Pembaikan dan penggantian jubin",
                "Panduan masalah jubin bilik air",
              ],
              [
                "Air meresap melalui lantai berjubin ke dalam lantai konkrit",
                "Pecah, kalis air semula dan pasang semula",
                "Panduan resapan air melalui jubin",
              ],
              [
                "Susun atur tidak sesuai lagi, kelengkapan lama, ditambah masalah resapan",
                "Bina semula sepenuhnya",
                "Panduan ini",
              ],
            ],
          },
          {
            type: "callout",
            title: "Buat diagnosis sebelum memecah",
            text: "Kesan air pada siling di bawah bilik air ada beberapa punca, dan hanya satu daripadanya memerlukan lantai dibuka. Panduan diagnosis kesan siling kami menerangkan cara membezakannya sebelum anda berbelanja.",
          },
        ],
      },
      {
        heading: "Tempoh kerja dan cara merancang di sekelilingnya",
        blocks: [
          {
            type: "paragraph",
            text: "Faktor jadual terbesar ialah kerja kalis air: membran perlu mengering dan ujian air bertakung perlu dibiarkan, dan kedua-duanya tidak boleh dipercepatkan tanpa mempertaruhkan keseluruhan kerja. Jika rumah anda hanya ada satu bilik air, jangkakan ia tidak boleh digunakan sepanjang tempoh kerja dan beritahu kami semasa sebut harga — urutan kerja boleh disusun untuk memendekkan tempoh itu, tetapi tidak boleh dihapuskan.",
          },
          {
            type: "list",
            items: [
              "Unit kondominium dan strata biasanya memerlukan permit renovasi dan deposit daripada pengurusan bangunan sebelum kerja memecah bermula — mohon awal, kerana kelulusan ialah punca kelewatan paling biasa.",
              "Pilih dan beli jubin serta kelengkapan sanitari sebelum kerja bermula; menunggu jubin kehabisan stok akan menghentikan semua kerja selepas peringkat kalis air.",
              "Persetujui secara bertulis apa yang berlaku jika screed atau paip di sebalik jubin lebih teruk daripada jangkaan, sebelum kerja dimulakan.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Perlukah kalis air jika bilik air tidak pernah bocor sebelum ini?",
        answer:
          "Perlu. Sebaik sahaja jubin dan screed lama dipecahkan, membran lama turut hilang bersamanya. Memasang jubin terus di atas screed baharu tanpa membran bermakna tiada apa-apa yang memisahkan air daripada lantai konkrit, dan kegagalannya akan kelihatan di bilik bawah, bukan di bilik air itu sendiri.",
      },
      {
        question: "Bolehkah saya kekalkan jubin sedia ada dan buat kalis air sahaja?",
        answer:
          "Tidak untuk membran lantai. Kalis air berada di bawah jubin, jadi untuk sampai kepadanya jubin perlu diangkat. Yang boleh dilakukan tanpa memecah ialah pembaikan permukaan — grout semula, silikon semula, atau suntikan PU jika kebocoran dikesan pada satu titik tertentu — dan itu berbaloi diperiksa dahulu.",
      },
      {
        question: "Berapa kos tambahan untuk memindahkan kedudukan tandas?",
        answer:
          "Ia bergantung pada sejauh mana saluran kumbahan perlu dipanjangkan dan sama ada kecerunan boleh dikekalkan tanpa menaikkan lantai. Ia disebut harga mengikut kes selepas kami melihat susun atur sedia ada, kerana anjakan 30cm dan pemindahan ke dinding bertentangan ialah dua kerja yang berbeza sama sekali.",
      },
      {
        question: "Adakah anda membekalkan jubin dan kelengkapan sanitari, atau saya perlu beli sendiri?",
        answer:
          "Kedua-duanya boleh. Ramai pemilik lebih suka memilih dan membeli jubin, tandas dan pengadun sendiri, dan kami memasangnya. Jika anda mahu kami menguruskan semuanya, beritahu kemasan yang anda inginkan dan sebut harga akan menunjukkan bahan secara berasingan daripada kos buruh.",
      },
      {
        question: "Adakah sebut harga akan berubah selepas kerja memecah bermula?",
        answer:
          "Boleh berubah, jika keadaan di sebalik jubin berbeza secara ketara daripada yang kelihatan — screed yang teruk rosak, lantai konkrit retak atau paip tersembunyi berkarat. Kami memaklumkan anda sebelum meneruskan dan mengira kerja tambahan sebagai item berasingan, bukan memasukkannya secara senyap.",
      },
    ],
    closing:
      "Jika anda menimbang antara bina semula dan pembaikan, hantarkan gambar bilik air dan apa-apa yang kelihatan di bilik bawah, bersama jenis hartanah dan kawasan anda. Kami akan beritahu skop mana yang disokong oleh bukti sebelum memberi sebut harga.",
  },
  zh: {
    title: "Renovix Home Services | 浴室翻新重建费用指南（吉隆坡与雪兰莪）",
    metaDescription:
      "在吉隆坡与雪兰莪重建浴室的费用、价格包含哪些工序，以及什么情况下局部维修更划算。附我们的公开起价与免费报价。",
    h1: "吉隆坡与雪兰莪浴室重建费用指南",
    excerpt:
      "浴室完整重建包含哪些工序、什么因素影响价格，以及如何判断您需要的是重建还是针对性维修。",
    question: "在吉隆坡或雪兰莪重建一间浴室要多少钱？",
    answer:
      "完整的浴室重建 —— 打掉旧饰面、重做防水层、重新铺贴墙地砖，再安装卫浴设备 —— 按每间浴室计价，我们的完整工序起价列于下表。报价之间的差异，多数来自三点：浴室面积、是否移动给排水点位，以及您选择的瓷砖。如果瓷砖仍然牢固，只是防水层失效，那么防水加重铺的工序会比整间重建便宜许多。",
    keyPoints: [
      "重建按每间浴室计价，而非按平方尺，因为打拆、防水与卫浴安装这些固定工序在小空间里占比最大。",
      "移动地漏、马桶排污口或花洒阀门，是您能提出的最昂贵的改动。",
      "防水是看不见却不能省的一步 —— 它决定这间浴室能撑十年还是两年。",
      "瓷砖选择同时影响材料与人工：大板砖和马赛克的铺贴时间都比普通瓷砖长。",
      "浴室漏水不等于必须重建。先做诊断，实际需要处理的范围往往比想象中小。",
    ],
    sections: [
      {
        heading: "浴室完整重建到底包含什么",
        blocks: [
          {
            type: "paragraph",
            text: "「重建」意味着把整个空间拆回结构层再重新做起。在巴生谷一般住宅浴室里，这个施工顺序是固定的，省略任何一步，都是日后返工的主要原因。",
          },
          {
            type: "steps",
            items: [
              {
                title: "保护与打拆",
                description:
                  "先对公共区域与走廊做保护，再打掉旧墙砖、地砖与失效的水泥砂浆层。废料需装袋清运 —— 在公寓还必须遵守大楼的电梯保护与卸货区规定。",
              },
              {
                title: "水路一次施工",
                description:
                  "趁墙体开放时修复或改道暗管。这是移动地漏或花洒混水阀成本最低的时机，也是检查旧管道最实在的时机。",
              },
              {
                title: "找平与坡度",
                description:
                  "重新做水泥砂浆层，并做出朝地漏的排水坡度。坡度做对，日后才不会积水；这一步必须在防水之前完成，而不是之后。",
              },
              {
                title: "防水与闭水试验",
                description:
                  "防水层涂布于地面并上返至湿区墙面，然后蓄水静置做闭水试验，确认不渗漏后才铺第一块砖。",
              },
              {
                title: "铺砖与填缝",
                description:
                  "墙面与地面铺砖，绕开地漏与管件切割，再填缝清洁。变形缝 —— 阴角与墙地交接处 —— 使用玻璃胶，而不是填缝剂。",
              },
              {
                title: "卫浴安装与收尾",
                description:
                  "安装并测试马桶、面盆、混水龙头、花洒组与配件，清洁后交付。",
              },
            ],
          },
        ],
      },
      {
        heading: "我们价目表中的浴室重建费率",
        blocks: [
          {
            type: "paragraph",
            text: "以下是浴室工程所涉及各项工序的公开起价。完整重建那一行涵盖上述全部流程；下面两行则是只翻新部分工序时会单独计价的项目。",
          },
          {
            type: "pricing",
            pricingIds: [
              "renovation-bathroom-full",
              "waterproofing-bathroom-hack",
              "tiling-bathroom-complete",
            ],
          },
          {
            type: "paragraph",
            text: "洁具按件计价，因此施工期间更换混水龙头或维修马桶水箱，都按下列行项计价，而不会含糊地并入一个笼统的预算项。",
          },
          { type: "pricing", pricingIds: ["plumbing-tap-replacement", "plumbing-toilet-repair"] },
        ],
      },
      {
        heading: "哪些因素让价格上升或下降",
        blocks: [
          {
            type: "list",
            items: [
              "浴室面积。主卧浴室的铺砖与防水面积都比客用小卫更大，但固定的进场成本几乎相同 —— 这也是小浴室换算成每平方尺显得偏贵的原因。",
              "移动水路点位。马桶、地漏与花洒维持原位是最省钱的布局。每移动一个点位，都意味着开槽、改道与重新试压。",
              "瓷砖规格与饰面。普通瓷砖最快。大板瓷砖需要更平整的基层与更细致的铺贴；马赛克与装饰腰线会增加切割时间。",
              "瓷砖背后的实际状况。砂浆层酥烂、楼板开裂或暗管锈蚀，都只有打拆后才会发现；负责任的承包商会在那时另行报价，而不是假装原本就已包含。",
              "房产类型与出入条件。高楼层公寓需预约电梯、限制打拆时段并安排搬运；有地住宅通常可以更快、更省地完成进场准备。",
              "由您自购的洁具。许多屋主自行选购马桶与龙头，我们负责安装，这样洁具费用就完全不进承包商的利润里。",
            ],
          },
        ],
      },
      {
        heading: "您需要的是重建，还是维修？",
        blocks: [
          {
            type: "paragraph",
            text: "多数人考虑重建是因为漏水，而不是因为外观。在决定更大的工程范围之前，先如实对照以下情况。",
          },
          {
            type: "table",
            columns: ["您看到的状况", "可能的工程范围", "延伸阅读"],
            rows: [
              [
                "浴室楼下房间的天花出现湿斑",
                "先做诊断 —— 可能是管道，也可能是防水层",
                "浴室漏水指南",
              ],
              [
                "填缝发黑、粉化或脱落；玻璃胶发霉",
                "重新填缝与打胶 —— 无需重建",
                "填缝与玻璃胶保养指南",
              ],
              [
                "几块瓷砖开裂或空鼓，其余地面仍牢固",
                "瓷砖维修与更换",
                "浴室瓷砖问题指南",
              ],
              [
                "水从铺砖地面渗入楼板",
                "打拆、重做防水并重铺",
                "瓷砖渗水指南",
              ],
              [
                "布局不再合用、洁具老旧，同时还有渗水",
                "完整重建",
                "本篇指南",
              ],
            ],
          },
          {
            type: "callout",
            title: "先诊断，再动工",
            text: "浴室下方的天花水渍可能有好几种成因，其中只有一种需要掀开地面。我们的天花水渍诊断指南说明如何在花钱之前分辨它们。",
          },
        ],
      },
      {
        heading: "工期多久，以及如何安排生活",
        blocks: [
          {
            type: "paragraph",
            text: "影响工期最大的因素是防水：防水层需要养护，闭水试验需要静置，两者都不能赶工，否则等于拿整个工程去赌。如果家中只有一间浴室，请预计整个施工期间都无法使用，并在报价阶段告诉我们 —— 工序可以调整以缩短不可用的时段，但无法完全避免。",
          },
          {
            type: "list",
            items: [
              "公寓与分层地契单位通常需要先向管理处申请装修准证并缴付按金，才能开始打拆 —— 请尽早申请，审批是最常见的延误原因。",
              "在开工前选定并买好瓷砖与洁具；等待缺货瓷砖会让防水之后的所有工序停摆。",
              "在开工前以书面约定：若瓷砖背后的砂浆层或管道状况比预期更差，该如何处理与计价。",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "如果浴室以前从没漏过水，还需要做防水吗？",
        answer:
          "需要。旧瓷砖与砂浆层一旦打掉，原本的防水层也随之消失。直接在新砂浆层上铺砖而不做防水，等于水与楼板之间没有任何阻隔，问题会出现在楼下房间，而不是浴室本身。",
      },
      {
        question: "可以保留现有瓷砖，只重做防水吗？",
        answer:
          "地面防水不行。防水层位于瓷砖之下，要处理它就必须掀砖。不打拆能做的是表面处理 —— 重新填缝、重新打胶，或在漏点明确时做 PU 灌注 —— 这些确实值得先评估。",
      },
      {
        question: "移动马桶位置要额外多少钱？",
        answer:
          "取决于排污管需要延伸多远，以及在不垫高地面的前提下能否保持坡度。我们会在查看现有布局后按个案报价，因为移动 30 公分与整面墙的位移，是完全不同的两件工程。",
      },
      {
        question: "瓷砖与洁具由你们供应，还是我自己买？",
        answer:
          "都可以。许多屋主偏好自己挑选与购买瓷砖、马桶与龙头，由我们安装。若希望我们统一采购，请告知想要的饰面风格，报价单会将材料与人工分开列示。",
      },
      {
        question: "打拆开始后报价会变吗？",
        answer:
          "有可能，前提是瓷砖背后的状况与表面所见有实质差异 —— 例如砂浆层严重劣化、楼板开裂或暗管锈蚀。我们会在继续施工前告知您，并将增加的工作列为独立项目计价，而不是悄悄并入原价。",
      },
    ],
    closing:
      "如果您正在重建与维修之间犹豫，请把浴室以及楼下可见状况的照片，连同房产类型与所在区域发给我们。我们会先根据证据告诉您应该选择哪种工程范围，再谈报价。",
  },
};
