import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Tiada kelulusan pengurusan, tetapi kelulusan pihak berkuasa tempatan terpakai untuk perubahan struktur dan pengembangan." },
  { label: "Semi-D & Banglo", note: "Pengembangan dan pengubahan struktur ialah pencetus utama kelulusan majlis; sesetengah kawasan berpagar menambah peraturan sendiri." },
  { label: "Kondominium & Pangsapuri", note: "Kelulusan pengurusan dan deposit renovasi hampir universal, dengan waktu kerja ditetapkan dan hari terhad." },
  { label: "Kedai & Komersial", note: "Keperluan majlis dan pengurusan bangunan lazimnya terpakai, selalunya dengan syarat keselamatan kebakaran." },
  { label: "Hartanah Lama", note: "Pelan asal mungkin tiada, menjadikan penentuan apa yang berstruktur lebih penting sebelum sebarang pecahan." },
];

const areasNote =
  "Kami bekerja mengikut keperluan pengurusan bangunan dan pihak berkuasa tempatan di seluruh Kuala Lumpur dan Selangor.";

const propertyTypesIntro =
  "Kelulusan yang terpakai bergantung banyak pada jenis hartanah yang anda miliki.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "renovation-permit-approval": {
    ...base,
    name: "Kelulusan & Permit Renovasi",
    title: "Renovix Home Services | Kelulusan & Permit Renovasi di KL & Selangor",
    metaDescription:
      "Kelulusan renovasi di Kuala Lumpur & Selangor — persetujuan pengurusan strata, permit pihak berkuasa tempatan dan apa yang memerlukan kelulusan. Fahami prosesnya sebelum kerja bermula.",
    h1: "Kelulusan & Permit Renovasi",
    subtitle:
      "Kebanyakan pertikaian renovasi di bangunan strata Malaysia bermula dengan cara sama: kerja bermula sebelum kelulusan diperoleh.",
    whatItMeans: [
      "Terdapat dua sistem kelulusan berasingan yang terlibat, dan ia kerap dikelirukan. Pertama ialah pengurusan bangunan atau badan pengurusan bersama anda, yang terpakai jika anda tinggal di hartanah strata — kondominium, pangsapuri atau kediaman servis. Kedua ialah pihak berkuasa tempatan, yang terpakai untuk perubahan struktur dan pengembangan tanpa mengira jenis hartanah. Memenuhi satu tidak memenuhi yang satu lagi.",
      "Akibat praktikalnya ialah renovasi yang sah sepenuhnya dari sudut majlis masih boleh dihentikan oleh pengurusan bangunan pada hari kontraktor tiba, kerana deposit tidak pernah dijelaskan dan permohonan tidak pernah difailkan. Ini punca kelewatan paling biasa yang kami lihat, dan ia boleh dielakkan sepenuhnya dengan memulakan dokumentasi lebih awal.",
    ],
    commonCauses: [
      "Menganggap kerja dalaman di dalam unit sendiri tidak memerlukan kebenaran.",
      "Tidak tahu bahawa bangunan mempunyai deposit renovasi dan proses permohonan langsung.",
      "Memulakan kerja sebelum kelulusan bertulis benar-benar dikeluarkan.",
      "Mengelirukan kelulusan pihak berkuasa tempatan dengan kelulusan pengurusan, dan hanya mendapatkan satu.",
      "Memecahkan dinding tanpa menyemak sama ada ia berstruktur atau harta bersama.",
      "Kerja yang menjejaskan fasad bangunan, dinding luar atau kawasan bersama.",
      "Kontraktor bekerja di luar waktu atau hari yang dibenarkan bangunan.",
    ],
    warningSigns: [
      "Pengurusan bangunan meminta dokumen yang anda tidak ada.",
      "Pengawal keselamatan menghalang kontraktor anda masuk atau menolak penghantaran bahan.",
      "Jiran membuat aduan dan pengurusan mengeluarkan notis hentikan kerja.",
      "Diminta deposit atau butiran insurans kontraktor yang anda tidak dimaklumkan.",
      "Notis majlis berkenaan kerja struktur atau pengembangan tanpa kelulusan.",
    ],
    solutions: [
      { title: "Dapatkan peraturan rumah sebelum anda merancang", description: "Minta garis panduan renovasi daripada pejabat pengurusan anda pada awal-awal lagi. Ia menetapkan waktu dibenarkan, deposit, tempoh notis dan apa yang tidak dibenarkan langsung — yang membentuk reka bentuk anda." },
      { title: "Tentukan apa yang berstruktur", description: "Sebelum sebarang dinding dipecahkan, tentukan sama ada ia berstruktur atau harta bersama. Ini perkara yang paling berkemungkinan menghentikan kerja secara kekal." },
      { title: "Hantar awal dan secara bertulis", description: "Permohonan mengambil masa diproses. Menghantar awal dan memegang kelulusan bertulis sebelum tarikh mula ialah yang mengekalkan jadual anda." },
      { title: "Sediakan dokumentasi kontraktor", description: "Kebanyakan pengurusan mahukan butiran kontraktor, senarai pekerja dan insurans sebelum akses diberi. Kami menyediakan apa yang diminta." },
    ],
    whenToCall: [
      "Anda merancang untuk mengalih atau membuka mana-mana dinding.",
      "Kerja melibatkan fasad, dinding luar, tingkap atau apa-apa yang kelihatan dari luar.",
      "Anda mengembangkan hartanah atau mengubah strukturnya.",
      "Pengurusan telah mengeluarkan notis tentang kerja yang sedang berjalan.",
      "Anda mahu skop dirancang mengikut peraturan bangunan anda, bukan melawannya.",
    ],
    relatedServiceNote:
      "Pasukan renovasi kami bekerja mengikut peraturan bangunan anda dan membekalkan dokumentasi kontraktor yang lazimnya diminta pengurusan. Permohonan itu sendiri dibuat oleh anda sebagai pemilik, kerana pengurusan berurusan dengan pemilik dan bukan kontraktor.",
    processTitle: "Bagaimana Kami Bekerja Dengan Proses Kelulusan Anda",
    processIntro:
      "Kami merancang kerja mengikut kelulusan, bukan berharap ia tiba tepat masanya.",
    processSteps: [
      { title: "Semak peraturan rumah bersama", description: "Kami meneliti garis panduan renovasi bangunan anda dan mengenal pasti apa-apa dalam skop yang tidak akan dibenarkan." },
      { title: "Laraskan skop jika perlu", description: "Jika sesuatu tidak dibenarkan, kami mencadangkan alternatif yang mencapai hasil sama dalam lingkungan peraturan." },
      { title: "Bekalkan dokumentasi", description: "Kami menyediakan butiran kontraktor, senarai pekerja dan dokumen lain yang diperlukan pengurusan untuk permohonan." },
      { title: "Jadualkan mengikut tempoh dibenarkan", description: "Kerja diatur mengikut tarikh diluluskan dan waktu kerja dibenarkan, termasuk sebarang sekatan kerja bising." },
    ],
    faqs: [
      { question: "Perlukah kelulusan untuk mengubah suai dalam unit kondo saya sendiri?", answer: "Dalam praktiknya, hampir selalu ya. Hampir setiap bangunan strata di Lembah Klang memerlukan permohonan renovasi, deposit boleh dikembalikan dan pematuhan waktu kerja yang ditetapkan — walaupun untuk kerja sepenuhnya dalam unit anda, kerana bangunan terjejas oleh bunyi, serpihan serta penggunaan lif dan koridor. Minta garis panduan renovasi daripada pejabat pengurusan sebelum anda merancang skop." },
      { question: "Berapakah deposit renovasi dan berapa lama kelulusan mengambil masa?", answer: "Kami sengaja tidak menerbitkan angka bagi kedua-duanya, kerana ia ditetapkan oleh setiap badan pengurusan dan berbeza-beza luas antara bangunan — menyebut nombor di sini akan mengelirukan anda. Pejabat pengurusan anda akan memberitahu kedua-duanya apabila anda meminta garis panduan renovasi, dan berbaloi ditanya seawal mungkin kerana tempohnya membentuk jadual anda." },
      { question: "Bolehkah saya mengalih dinding antara dapur dan ruang tamu?", answer: "Hanya selepas menentukan ia bukan berstruktur dan bukan harta bersama. Sesetengah dinding dalaman menanggung beban atau mengandungi perkhidmatan bangunan, dan dalam hartanah strata sesetengah dinding secara sah ialah harta bersama, bukan milik anda. Ini mesti disahkan sebelum sebarang pemecahan bermula — ia perubahan yang paling berkemungkinan ditolak, dan membaikinya mahal." },
      { question: "Apa berlaku jika kerja bermula tanpa kelulusan?", answer: "Dalam bangunan strata, pengurusan boleh mengeluarkan notis hentikan kerja, menghalang kontraktor anda masuk, dan melucutkan deposit. Bagi kerja struktur atau pengembangan tanpa kelulusan, pihak berkuasa tempatan boleh menuntut pemulihan semula. Kedua-dua akibat jauh lebih mahal berbanding memohon dengan betul." },
      { question: "Adakah anda menguruskan permohonan untuk saya?", answer: "Kami menyediakan segala yang diperlukan dari pihak kontraktor — butiran syarikat, senarai pekerja, dokumentasi insurans dan penerangan skop — dan kami bekerja mengikut tarikh serta waktu diluluskan. Permohonan itu sendiri dihantar oleh anda sebagai pemilik berdaftar, kerana pengurusan dan majlis berurusan dengan pemilik dan bukan kontraktor." },
    ],
  },
  "renovation-scope-creep": {
    ...base,
    name: "Kos Renovasi Melebihi Bajet & Skop Membesar",
    title: "Renovix Home Services | Kos Renovasi Melebihi Bajet di KL & Selangor",
    metaDescription:
      "Kenapa bajet renovasi melebihi anggaran di Kuala Lumpur & Selangor. Fahami skop membesar, keadaan tapak tersembunyi, arahan perubahan dan cara sebut harga jelas mengelak kejutan.",
    h1: "Kos Renovasi Melebihi Bajet & Skop Membesar",
    subtitle:
      "Renovasi jarang melebihi bajet kerana satu kesilapan besar — ia melebihi bajet melalui satu siri tambahan kecil yang tidak pernah diberi harga.",
    whatItMeans: [
      "Skop membesar ialah pengembangan beransur sesuatu kerja melebihi apa yang disebut harga. Ia biasanya bukan salah sesiapa secara dramatik: dinding dibuka dan pendawaian di belakangnya ternyata tidak selamat, jubin dipilih yang lebih mahal daripada peruntukan, soket tambahan diminta sementara juruelektrik sudah berada di tapak. Setiap satu kecil dan munasabah. Bersama-sama, itulah cara bajet bergerak.",
      "Separuh lagi masalah ialah keadaan yang benar-benar tersembunyi. Tiada siapa boleh melihat di sebalik dinding atau di bawah lantai sehingga ia dibuka, jadi sebut harga berasaskan apa yang kelihatan campur andaian munasabah. Apabila andaian itu terbukti salah — screed sudah gagal, paip terhakis, lantai tidak rata — kerja yang diperlukan berubah. Proses yang jujur menanganinya dengan memberi harga perubahan sebelum melakukannya, bukan membentangkannya di akhir.",
    ],
    commonCauses: [
      "Tambahan diminta semasa kerja berjalan yang tidak pernah diberi harga secara rasmi.",
      "Keadaan tersembunyi ditemui setelah dinding dan lantai dibuka.",
      "Sebut harga yang kabur tentang apa yang termasuk dan tidak termasuk.",
      "Pilihan bahan dinaik taraf selepas bajet ditetapkan.",
      "Kecacatan asas — pendawaian lama, kalis air gagal, paip terhakis — yang mesti dibaiki sebelum kemasan dipasang.",
      "Perubahan reka bentuk di tengah kerja, memerlukan kerja siap diulang.",
      "Membandingkan sebut harga berdasarkan harga utama tanpa menyemak liputan setiap satu.",
    ],
    warningSigns: [
      "Kerja dijalankan yang anda tidak ingat pernah bersetuju.",
      "Jaminan lisan bahawa sesuatu 'termasuk' tanpa ia muncul secara bertulis.",
      "Sebut harga dengan satu jumlah pukal tanpa pecahan.",
      "Tambahan disebut sambil lalu tetapi tidak pernah diberi harga.",
      "Sebut harga yang jauh lebih rendah daripada yang lain, yang biasanya bermakna ia mengecualikan sesuatu.",
    ],
    solutions: [
      { title: "Mulakan daripada sebut harga terperinci", description: "Sebut harga yang dipecahkan mengikut skop menjadikan liputan jelas, dan itulah yang membolehkan tambahan kemudian dikenali sebagai tambahan." },
      { title: "Beri harga perubahan sebelum melakukannya", description: "Apabila sesuatu berubah atau ditemui, kosnya dipersetujui sebelum kerja diteruskan, bukan muncul pada bil akhir." },
      { title: "Siasat dahulu jika boleh", description: "Jika keadaan tersembunyi berkemungkinan — pendawaian lama, kalis air diragui — pemeriksaan awal memberi anda bajet realistik dan bukan bajet optimistik." },
      { title: "Tetapkan peruntukan bahan secara jelas", description: "Jika pilihan belum dibuat, peruntukan yang jelas menunjukkan tepat apa kos menaik taraf, bukan membiarkannya terbuka." },
    ],
    whenToCall: [
      "Anda mahukan skop dan sebut harga yang cukup jelas untuk dibandingkan dengan betul.",
      "Anda merancang renovasi di hartanah lama yang keadaan tersembunyi berkemungkinan.",
      "Kerja semasa sedang terpesong dan anda mahu baki skop ditakrifkan.",
      "Anda menerima sebut harga yang berbeza jauh dan mahu memahami sebabnya.",
    ],
    relatedServiceNote:
      "Pasukan renovasi kami memberi sebut harga mengikut skop terperinci dan memberi harga perubahan sebelum melaksanakannya, supaya tambahan ialah keputusan yang anda buat, bukan kejutan yang anda terima.",
    processTitle: "Bagaimana Kami Mengekalkan Skop dan Kos Kelihatan",
    processIntro:
      "Matlamatnya ialah anda sentiasa tahu apa yang telah dipersetujui dan berapa kos sebarang perubahan sebelum ia berlaku.",
    processSteps: [
      { title: "Nilai tapak dengan betul", description: "Kami memeriksa sebelum memberi sebut harga dan membangkitkan keadaan yang boleh mengubah skop, bukan memberi harga rendah dan menemuinya kemudian." },
      { title: "Sebut harga mengikut skop terperinci", description: "Sebut harga menetapkan apa yang termasuk, apa yang dikecualikan dan apa peruntukan bahan." },
      { title: "Beri harga setiap perubahan awal", description: "Jika sesuatu ditemui atau diminta, kami memberi harga dan mendapatkan persetujuan anda sebelum kerja dilakukan." },
      { title: "Simpan rekod berjalan", description: "Perubahan yang dipersetujui direkodkan sepanjang kerja, supaya akaun akhir tidak mengandungi apa-apa yang anda belum lihat." },
    ],
    faqs: [
      { question: "Kenapa sebut harga renovasi berbeza begitu banyak untuk kerja sama?", answer: "Biasanya kerana ia meliputi perkara berbeza. Satu mungkin termasuk pemecahan dan pelupusan, satu lagi tidak; satu mungkin memperuntukkan kalis air, satu lagi mengandaikan yang sedia ada masih baik; peruntukan bahan berbeza. Sebab itulah membandingkan jumlah utama mengelirukan. Minta pecahan terperinci daripada setiap kontraktor dan bandingkan skopnya, bukan nombornya." },
      { question: "Berapa banyak kontingensi patut saya peruntukkan?", answer: "Kami tidak akan menerbitkan peratusan, kerana ia bergantung sepenuhnya pada usia hartanah dan berapa banyak kerja berada di sebalik dinding dan lantai — angka yang disebut di sini akan jadi tekaan yang berlagak nasihat. Apa yang boleh kami katakan ialah semakin lama hartanah dan semakin banyak kerja tersembunyi, semakin masuk akal kontingensi, dan perbincangan sebut harga anda ialah tempat yang betul untuk menentukan saiznya." },
      { question: "Apakah arahan perubahan dan patutkah saya bimbang?", answer: "Perubahan ialah sebarang pindaan yang dipersetujui kepada skop asal — tambahan, penggantian atau sesuatu yang ditemui di tapak. Ia sebahagian normal renovasi dan bukan tanda amaran. Yang penting ialah prosesnya: perubahan patut diterangkan, diberi harga dan dipersetujui sebelum kerja dilakukan, bukan dibentangkan selepasnya." },
      { question: "Bolehkah anda memberitahu kos akhir tepat sebelum bermula?", answer: "Bagi kerja yang kelihatan sepenuhnya dan ditakrifkan dengan baik, sebut harga boleh sangat hampir dengan angka akhir. Jika kerja melibatkan membuka dinding atau lantai, jawapan jujurnya ialah sebut harga meliputi keadaan yang diketahui dan apa-apa yang ditemui akan diberi harga sebagai perubahan. Mana-mana kontraktor yang menjanjikan angka akhir terjamin bagi kerja tersembunyi sedang membuat janji yang mereka tidak mampu lihat cukup jelas untuk ditunaikan." },
      { question: "Sebut harga termurah jauh lebih rendah daripada yang lain. Adakah itu masalah?", answer: "Berbaloi difahami sebabnya sebelum memutuskan. Kadangkala ada sebab yang sah. Lebih kerap, sebut harga rendah telah mengecualikan sesuatu yang lain masukkan — pemecahan, pelupusan, kalis air, kerja pemulihan — yang muncul semula kemudian sebagai kos tambahan. Baca pengecualiannya, bukan jumlahnya." },
    ],
  },
  "renovation-delays": {
    ...base,
    name: "Kelewatan Renovasi",
    title: "Renovix Home Services | Punca Kelewatan Renovasi di KL & Selangor",
    metaDescription:
      "Kenapa renovasi lewat di Kuala Lumpur & Selangor — kelulusan, tempoh bekalan bahan, urutan kerja, pengawetan dan pengeringan. Fahami apa yang boleh dan tidak boleh dipendekkan.",
    h1: "Kelewatan Renovasi",
    subtitle:
      "Kebanyakan kelewatan renovasi datang daripada tiga tempat: kelulusan yang dimulakan lewat, bahan yang dipesan lewat, dan masa pengeringan serta pengawetan yang tidak pernah dimasukkan dalam jadual.",
    whatItMeans: [
      "Renovasi ialah satu urutan, bukan set tugas selari. Kalis air perlu diawet sebelum penjubinan; screed perlu kering sebelum lantai; plaster perlu kering sebelum cat. Tempoh menunggu ini bukan kelonggaran dalam jadual yang boleh dimampatkan — ia bahan melakukan apa yang perlu, dan memendekkannya menyebabkan jubin tertanggal dan cat melepuh beberapa bulan kemudian.",
      "Punca besar kedua ialah urutan kerja. Kerja-kerja bergantung antara satu sama lain dalam susunan tetap: elektrik dan paip fasa pertama sebelum dinding ditutup, kalis air sebelum jubin, siling sebelum cat akhir. Jika satu tergelincir, semua yang di hilirnya turut tergelincir, sebab itulah kelewatan dua hari di awal boleh menjadi seminggu di akhir. Memahami ini menjadikan jadual jauh lebih mudah dirancang.",
    ],
    commonCauses: [
      "Kelulusan pengurusan bangunan dipohon lewat atau dikeluarkan lebih lewat daripada dijangka.",
      "Pilihan bahan dibuat lewat, atau barang bertempoh bekalan panjang dipesan terlalu hampir tarikh.",
      "Masa pengawetan kalis air dan pengeringan screed tidak diambil kira dalam jadual.",
      "Keadaan tersembunyi ditemui semasa pembukaan, memerlukan kerja tambahan sebelum diteruskan.",
      "Waktu kerja terhad dan hari dilarang di bangunan strata.",
      "Perubahan reka bentuk di tengah kerja, memaksa kerja siap diulang.",
      "Hujan menjejaskan kerja luaran seperti cat luar dan kalis air bumbung.",
      "Satu kerja tergelincir dan menolak setiap kerja bergantung ke belakang.",
    ],
    warningSigns: [
      "Permohonan kelulusan belum dihantar sedangkan tarikh mula semakin hampir.",
      "Pilihan bahan masih belum diputuskan selepas kerja bermula.",
      "Jadual yang langsung tidak menunjukkan tempoh pengeringan atau pengawetan.",
      "Pekerja tiba dan mendapati peringkat sebelumnya belum siap.",
      "Diberitahu kerja akan 'dibuat serentak' sedangkan kerja itu bergantung berurutan.",
    ],
    solutions: [
      { title: "Mulakan kelulusan awal", description: "Permohonan ialah satu perkara yang boleh dilakukan jauh sebelum tarikh mula, dan ia punca paling biasa permulaan lewat." },
      { title: "Muktamadkan pilihan bahan sebelum bermula", description: "Memutuskan jubin, kelengkapan sanitari dan lantai sebelum kerja bermula menghapuskan gangguan paling biasa di tengah kerja." },
      { title: "Masukkan pengawetan dan pengeringan dalam jadual", description: "Tempoh ini dijadualkan secara terbuka dan bukan disembunyikan, supaya jadual yang anda terima benar-benar boleh dipenuhi." },
      { title: "Susun kerja secara realistik", description: "Kerja diatur mengikut urutan pergantungan, dengan tapak disediakan untuk setiap kerja sebelum ia tiba." },
    ],
    whenToCall: [
      "Anda mempunyai tarikh tetap untuk dikejar, seperti pindah masuk atau permulaan penyewaan.",
      "Anda mahukan jadual realistik sebelum melibatkan diri.",
      "Kerja melibatkan beberapa bidang dan anda mahu urutannya dirancang.",
      "Bangunan anda menghadkan waktu kerja dan anda perlukan jadual dibina mengikutnya.",
    ],
    relatedServiceNote:
      "Pasukan renovasi kami mengatur kerja mengikut urutan pergantungan dan menyatakan tempoh pengawetan serta pengeringan secara terbuka, supaya jadual mencerminkan bagaimana bahan sebenarnya berkelakuan.",
    processTitle: "Bagaimana Kami Mengatur Jadual Renovasi",
    processIntro:
      "Jadual hanya berguna jika ia mengambil kira masa menunggu dan juga masa bekerja.",
    processSteps: [
      { title: "Sahkan kelulusan dan akses", description: "Kami menentukan tarikh diluluskan, waktu dibenarkan dan sebarang hari terhad sebelum membina jadual." },
      { title: "Sahkan pilihan dan tempoh bekalan", description: "Pilihan bahan dimuktamadkan dan barang bertempoh panjang dikenal pasti supaya tiada yang menghentikan tapak." },
      { title: "Susun dengan masa pengawetan disertakan", description: "Kerja diatur mengikut pergantungan dan tempoh pengawetan serta pengeringan ditunjukkan sebagai sebahagian jadual." },
      { title: "Kemas kini anda sepanjang kerja", description: "Anda diberitahu apabila sesuatu beralih dan apa maknanya kepada tarikh siap, bukan mengetahuinya di akhir." },
    ],
    faqs: [
      { question: "Kenapa beberapa kerja tidak boleh dijalankan serentak untuk mempercepatkan?", answer: "Sebahagian boleh, tetapi banyak tidak, kerana ia bergantung antara satu sama lain secara fizikal. Penjubinan tidak boleh bermula sehingga kalis air diawet; cat tidak boleh siap sehingga siling dipasang; lantai tidak boleh dipasang sehingga screed kering. Meletakkan satu kerja di tapak sebelum pendahulunya siap biasanya menghasilkan kerja ulang, bukan kemajuan. Jika tugas benar-benar bebas, kami memang menjalankannya selari." },
      { question: "Bolehkah masa pengawetan dan pengeringan dipendekkan?", answer: "Tidak secara bermakna, dan itu tempat yang salah untuk dicuba. Kalis air memerlukan pengawetan penuh sebelum dibebankan, dan screed perlu kering sebelum lantai dipasang atasnya. Memendekkan ini punca utama jubin tertanggal dan lantai gagal beberapa bulan kemudian. Pengudaraan baik membantu sedikit dalam cuaca lembap; melangkau tempoh menunggu tidak." },
      { question: "Berapa lama renovasi saya akan mengambil masa?", answer: "Ia bergantung pada skop, hartanah dan sekatan akses, jadi angka umum tidak berguna kepada anda. Apa yang boleh kami lakukan ialah memberi jadual bagi kerja khusus anda yang menunjukkan urutan dan tempoh menunggu, supaya anda nampak bagaimana tempoh itu terbentuk dan bukan sekadar diberi tarikh." },
      { question: "Apakah satu perkara terbaik yang boleh saya lakukan untuk mengelak kelewatan?", answer: "Dua perkara, kedua-duanya sebelum mula: hantar kelulusan pengurusan seawal mungkin, dan muktamadkan pilihan bahan anda. Kedua-duanya menyumbang majoriti besar kelewatan yang boleh dielakkan. Selebihnya — urutan, pengawetan, cuaca — sama ada boleh diurus atau tidak dapat dielakkan, tetapi kelulusan lewat dan jubin yang belum diputuskan sepenuhnya dalam kawalan anda." },
      { question: "Adakah hujan melewatkan kerja dalaman?", answer: "Secara langsung, tidak. Secara tidak langsung, kadangkala: kelembapan berpanjangan melambatkan pengeringan plaster, screed dan cat, dan hujan lebat boleh menghentikan penghantaran bahan serta sebarang kerja luaran. Cat luar dan kalis air bumbung ialah kerja yang benar-benar bergantung pada cuaca, dan kami lebih rela menunggu daripada menyapu salutan yang tidak akan berfungsi." },
    ],
  },
};
