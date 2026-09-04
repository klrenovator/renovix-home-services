import type { AreaProcessStep } from "../../types";
import type { AreaTranslations } from "../types";

/**
 * Malay translations for the Phase 23 Kuala Lumpur guides.
 *
 * The copy is written for Malay readers rather than transliterated from the
 * English source: local terminology (rumah kampung, strata, lot kedai) and the
 * phrasing Malaysian homeowners actually use when describing these problems.
 */

const processSteps: AreaProcessStep[] = [
  { title: "Ceritakan kerja anda", description: "Hantar gambar dan penerangan ringkas melalui WhatsApp atau borang sebut harga." },
  { title: "Lawatan penilaian", description: "Kami memeriksa lokasi, mengukur dan mengesahkan punca sebenar masalah." },
  { title: "Sebut harga bertulis", description: "Skop, bahan dan kos dipecahkan dengan jelas sebelum kerja bermula." },
  { title: "Kerja dan penyerahan", description: "Kerja disiapkan mengikut jadual, diuji dan tapak dibersihkan." },
];

const shared = (name: string) => ({
  servicesIntro: `Servis yang paling kerap diminta di ${name}:`,
  propertyTypesIntro: `Jenis kediaman yang biasa kami kerjakan di ${name}:`,
  problemsIntro: `Masalah yang paling kerap kami temui di ${name}:`,
  processTitle: `Cara Kami Bekerja di ${name}`,
  processIntro: "Proses yang sama untuk setiap kerja, besar atau kecil.",
  processSteps,
  contextIntro: `Perkara yang kami ambil kira apabila bekerja di ${name}:`,
});

export const translations: AreaTranslations = {
  "kuala-lumpur/kl-city-centre": {
    ...shared("Pusat Bandar KL"),
    name: "Pusat Bandar KL",
    title:
      "Renovix Home Services | Renovasi & Pembaikan Rumah di Pusat Bandar KL (KLCC & Bukit Bintang)",
    metaDescription:
      "Servis renovasi dan pembaikan di Pusat Bandar Kuala Lumpur — kondominium dan pangsapuri servis di KLCC, Bukit Bintang dan Imbi. Kerja kemasan, kalis air, pendawaian. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Pusat Bandar KL (KLCC & Bukit Bintang)",
    summary:
      "Teras bangunan tinggi ibu kota — kondominium dan pangsapuri servis di KLCC, Bukit Bintang dan Imbi, di mana setiap kerja tertakluk kepada peraturan pengurusan bangunan.",
    intro: [
      "Pusat Bandar KL merangkumi kawasan padat sekitar Menara Berkembar Petronas, Bukit Bintang, Imbi dan Jalan Sultan Ismail — bahagian Kuala Lumpur di mana hampir semua penduduk tinggal di atas aras tanah. Kediaman di sini hampir keseluruhannya strata: menara kondominium era 1990-an dan 2000-an, blok pangsapuri servis yang lebih baharu di atas podium runcit, serta pangsapuri lama dan lot kedai yang diubah suai di lorong-lorong sekitar Bukit Bintang dan Pudu.",
      "Campuran itu menentukan jenis kerja. Pemilik dan penyewa di pusat bandar meminta kerja kemasan unit, naik taraf dapur dan bilik air, penggantian lantai, kalis air balkoni dan bilik air, serta penambahan titik elektrik untuk peralatan moden dan ruang kerja di rumah. Renovix bekerja mengikut peraturan renovasi setiap bangunan — permit, deposit, waktu dibenarkan, tempahan lif dan laluan sisa — kerana di teras bandar, peraturan itulah yang selalunya menentukan jadual, bukan skop kerja.",
    ],
    serviceNotes: [
      "Kerja kemasan penuh kondominium dan pangsapuri servis mengikut waktu kerja yang diluluskan pengurusan.",
      "Kalis air bilik air, balkoni dan tepi tingkap diperbaharui bagi menara yang melepasi kitaran membran pertama.",
      "Penggantian lantai SPC, vinil dan laminat di unit tinggi dengan kawalan bunyi dan kerja pecah yang ketat.",
      "Penambahan soket, litar lampu dan titik penghawa dingin bagi unit yang didawai untuk beban lebih ringan.",
      "Siling plaster, lampu cove dan partition untuk sudut kerja atau bilik belajar di unit ruang terbuka.",
      "Pembaikan pintu, kunci, kelengkapan dan kerja kecil antara penyewa bagi unit sewa jangka pendek.",
    ],
    propertyTypes: [
      { label: "Kondominium (1990-an–2000-an)", note: "Generasi pertama menara pusat bandar, kini memasuki tahun pembaharuan kalis air, paip dan pendawaian." },
      { label: "Pangsapuri servis di atas podium runcit", note: "Unit kompak yang lebih baharu dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Pangsapuri walk-up sekitar Pudu dan Imbi", note: "Blok kecil dengan bilik air, riser dan pendawaian asal yang jauh melepasi hayat perkhidmatan." },
      { label: "Lot kedai yang diubah suai", note: "Tingkat atas rumah kedai Bukit Bintang yang diubah untuk kediaman, studio atau pejabat." },
      { label: "Unit sewa dan sewa jangka pendek", note: "Kediaman yang kerap bertukar penghuni dan memerlukan pembaharuan pantas serta tahan lasak." },
    ],
    problems: [
      { title: "Bilik air merembes ke unit bawah", description: "Membran asal menara 1990-an dan 2000-an tamat hayat serentak, dan tanda pertama biasanya kesan air pada siling jiran." },
      { title: "Air masuk di balkoni dan tepi tingkap", description: "Hujan bersama angin kencang di tingkat tinggi menembusi sealant yang gagal di ambang balkoni dan bingkai tingkap." },
      { title: "Soket tidak mencukupi untuk penggunaan sebenar", description: "Unit yang didawai sebelum era kerja dari rumah kini bergantung kepada penyambung, dan litar trip apabila dibebani." },
      { title: "Lantai berongga dan terangkat", description: "Pergerakan haba dan pelekat yang haus menyebabkan jubin berongga serta lantai terapung terangkat di sambungan." },
      { title: "Kulat di bilik dalaman kurang pengudaraan", description: "Unit berhawa dingin yang tertutup mengumpul lembapan di almari dan dinding sudut." },
    ],
    context: [
      "Hampir semua kediaman di pusat bandar adalah strata, jadi bangunan yang menentukan rentak kerja. Permit renovasi, deposit boleh dikembalikan, waktu kerja yang diluluskan, tempahan lif dan laluan sisa adalah sebahagian persediaan, dan kami merancang jadual mengikutnya.",
      "Akses ialah kekangan kedua. Ruang muat turun dikongsi, lif servis ditempah mengikut jam, dan saiz bahan mesti muat ke dalam lif — papan panjang, paip panjang dan kelengkapan sanitari besar ditempah dan dihantar mengikut keadaan itu.",
      "Kerja yang bising seperti memecah biasanya dihadkan kepada waktu tertentu hari bekerja. Jika tempoh yang dibenarkan singkat, kami dahulukan peringkat bising dan simpan kerja kemasan yang lebih senyap untuk baki masa.",
    ],
    faqs: [
      { question: "Anda uruskan permit renovasi kondominium KLCC atau Bukit Bintang?", answer: "Kami sediakan dokumen pihak kontraktor yang diminta pejabat pengurusan dan bekerja dalam waktu serta syarat yang diluluskan. Permohonan biasanya dikemukakan oleh pemilik, dan kami berikan segala maklumat yang diperlukan." },
      { question: "Boleh renovasi dijalankan sementara saya tinggal di unit?", answer: "Kebanyakan kes boleh, bilik demi bilik. Kerja memecah dan kerja basah adalah peringkat paling mengganggu, jadi kami kumpulkan peringkat itu dan beritahu dengan jujur hari mana bilik air atau dapur tidak boleh digunakan." },
      { question: "Siling jiran bawah berkesan air. Adakah puncanya bilik air saya?", answer: "Mungkin, tetapi tidak semestinya — puncanya boleh datang dari bilik air unit itu sendiri, riser bersama atau unit di atas. Kami jejaki punca dahulu, kerana membaiki bilik air yang salah tidak menyelesaikan apa-apa." },
      { question: "Anda bekerja di pangsapuri servis dengan pengurusan gaya hotel?", answer: "Ya. Bangunan begitu biasanya lebih ketat dari segi akses dan waktu berbanding kondominium kediaman, jadi kami sahkan peraturannya sebelum memberi jadual." },
      { question: "Bagaimana untuk mendapatkan sebut harga di pusat bandar?", answer: "Hantar nama bangunan, saiz unit dan kerja yang dirancang, dengan gambar jika ada. Kami aturkan lawatan tapak dan berikan sebut harga bertulis tanpa obligasi." },
    ],
  },
  "kuala-lumpur/taman-desa": {
    ...shared("Taman Desa"),
    name: "Taman Desa",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Taman Desa, KL",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Taman Desa, Kuala Lumpur — pangsapuri walk-up era 80-an, rumah teres dan kondominium baharu di Seputeh. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Taman Desa, Kuala Lumpur",
    summary:
      "Kawasan matang di Seputeh dengan pangsapuri rendah era 1980-an, jalan rumah teres dan lapisan kondominium baharu, berhampiran Mid Valley dan Jalan Klang Lama.",
    intro: [
      "Taman Desa terletak di kawasan Seputeh, selatan Kuala Lumpur, di atas rabung antara Jalan Klang Lama dan jalur komersialnya. Kawasan ini dibangunkan terutamanya sepanjang 1980-an sebagai campuran blok pangsapuri rendah, rumah teres dan beberapa banglo, dengan kafe serta lot kedai di sepanjang Jalan Desa Bakti dan generasi kondominium baharu yang ditambah dalam lima belas tahun kebelakangan ini.",
      "Usia kawasan inilah yang menentukan kerja. Pangsapuri walk-up dan rumah teres asalnya kini berusia berdekad, jadi bilik air, paip tersembunyi, pendawaian dan bumbung sampai ke tahap pembaikan bertukar menjadi penggantian. Kami menyediakan penggantian paip, pendawaian semula, pembinaan semula bilik air dengan kalis air yang betul, pembaikan siling dan kerja cat di Taman Desa, di samping kerja kemasan di blok kondominium baharu.",
    ],
    serviceNotes: [
      "Penggantian paip tersembunyi yang menua dan pembaharuan kelengkapan sanitari di pangsapuri serta rumah teres era 80-an.",
      "Kalis air bilik air dan balkoni diperbaharui sebelum kerja jubin semula di blok rendah dan rumah landed.",
      "Pendawaian semula litar asal dan penambahan titik untuk penghawa dingin, pemanas air dan dapur moden.",
      "Pembaikan siling plaster yang rosak air dan pembinaan semula selepas punca kebocoran diselesaikan.",
      "Kerja jubin semula bilik air dan dapur serta penggantian jubin berongga atau retak di unit lama.",
      "Cat dalaman dan pembaikan cat luaran pada dinding lembap yang terlindung.",
    ],
    propertyTypes: [
      { label: "Pangsapuri walk-up dan blok rendah (1980-an)", note: "Blok asal kawasan ini, dengan bilik air, riser dan pendawaian yang sampai umur penggantian serentak." },
      { label: "Rumah teres (1980-an)", note: "Rumah keluarga mantap yang kini memasuki kitaran naik taraf penuh kedua." },
      { label: "Kondominium baharu", note: "Menara selepas 2010 dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Banglo dan rumah berkembar", note: "Stok lebih kecil di rabung, biasanya dengan skop modenisasi penuh dan kerja bumbung." },
      { label: "Lot kedai di jalur komersial", note: "Unit bawah yang diubah suai untuk kafe, klinik dan pejabat sekitar Jalan Desa Bakti." },
    ],
    problems: [
      { title: "Kebocoran antara unit pangsapuri bertindan", description: "Membran bilik air yang gagal di blok lama muncul sebagai siling lembap di unit bawah sebelum unit atas kelihatan bermasalah." },
      { title: "Paip tersembunyi berkarat", description: "Paip asal rumah era 80-an merembes di sebalik dinding, merosakkan plaster dan menaikkan bil air secara senyap." },
      { title: "Pendawaian asal menanggung beban moden", description: "Litar yang direka untuk era lain kini menanggung penghawa dingin dan peralatan dapur, lalu kerap trip." },
      { title: "Siling plaster rosak air", description: "Siling melendut dan berkesan air yang berulang kerana punca kebocoran di atasnya tidak pernah dijejaki." },
      { title: "Kulat pada dinding terlindung dan menghadap cerun", description: "Pokok matang dan cerun mengekalkan kelembapan pada sesetengah dinding sepanjang tahun." },
    ],
    context: [
      "Blok walk-up lama diuruskan badan pengurusan bersama, bukan pejabat pengurusan besar, jadi notis, waktu kerja dan pelupusan sisa masih terpakai tetapi diuruskan melalui jawatankuasa. Kami sahkan keperluan blok anda sebelum mula.",
      "Kebocoran antara unit bertindan ialah pertikaian paling biasa di sini. Kami memeriksa kedua-dua belah jika akses membenarkan, kerana mengenal pasti sama ada air datang dari unit atas, riser bersama atau bilik air itu sendiri menentukan siapa perlu buat apa.",
      "Jalan di sini sempit dengan parkir tepi jalan yang terhad, dan sesetengah blok tiada lif. Itu mempengaruhi cara bahan dihantar dan sisa dibuang, dan kedua-duanya dimasukkan ke dalam jadual.",
    ],
    faqs: [
      { question: "Anda membaiki kebocoran antara tingkat pangsapuri di Taman Desa?", answer: "Ya. Kami jejaki punca dahulu — bilik air di atas, riser bersama atau paip unit itu sendiri — kemudian beri sebut harga. Jika puncanya di unit jiran, kami terangkan dengan jelas apa yang perlu diaturkan." },
      { question: "Boleh anda dawai semula pangsapuri atau rumah teres era 80-an?", answer: "Boleh. Kami nilai litar sedia ada dan papan agihan, kemudian beri sebut harga sama ada naik taraf sebahagian atau pendawaian semula penuh mengikut keperluan sebenar." },
      { question: "Anda bekerja di kondominium baharu Taman Desa?", answer: "Ya. Kerja kemasan, lantai, dapur dan bilik air mengikut peraturan pengurusan bangunan serta waktu dan tempahan lif yang dibenarkan." },
      { question: "Kesan air pada siling berulang selepas dicat semula. Kenapa?", answer: "Kerana kesan itu hanyalah gejala. Selagi kebocoran di atasnya tidak dihentikan, cat baharu hanya menyembunyikannya beberapa bulan. Kami cari dan baiki puncanya dahulu." },
      { question: "Bagaimana untuk mendapatkan sebut harga di Taman Desa?", answer: "Hubungi kami dengan jenis hartanah dan kerja yang dirancang, dengan gambar jika ada. Kami aturkan lawatan dan berikan sebut harga bertulis tanpa obligasi." },
    ],
  },
  "kuala-lumpur/kampung-baru": {
    ...shared("Kampung Baru"),
    name: "Kampung Baru",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Kampung Baru, KL",
    metaDescription:
      "Servis pembaikan dan renovasi rumah di Kampung Baru, Kuala Lumpur — rumah kayu tradisional, rumah batu lama dan rumah kedai. Bumbung, pendawaian, pembaikan. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Kampung Baru, Kuala Lumpur",
    summary:
      "Perkampungan Melayu warisan di tepi KLCC — rumah kayu tradisional, rumah batu lama dan rumah kedai yang memerlukan pendekatan pembaikan dahulu.",
    intro: [
      "Kampung Baru ialah penempatan Melayu tertua yang masih kekal di Kuala Lumpur, ditubuhkan pada penghujung abad ke-19 di pinggir kawasan yang kini menjadi pusat bandar, bertentangan Chow Kit dan dalam pandangan Menara Berkembar Petronas. Kediamannya berbeza daripada mana-mana kawasan lain di ibu kota: rumah kayu bertiang dengan bumbung curam dan lantai papan, rumah batu setingkat yang lama, blok pangsapuri kecil serta deretan rumah kedai di sepanjang Jalan Raja Muda Musa dan lorong sekitarnya.",
      "Kerja di sini lebih kepada pembaikan dan naik taraf berhati-hati berbanding pembinaan semula menyeluruh. Struktur kayu memerlukan perhatian pada reput, bumbung dan lantai; rumah batu lama perlukan pendawaian semula, penggantian paip dan pembaharuan bilik air; manakala pemilik rumah kedai meminta pengubahsuaian praktikal. Kami menyediakan kerja kalis air dan pembaikan bumbung, pendawaian, paip, cat, kerja besi serta pembaikan handyman di Kampung Baru, dengan penilaian keadaan sebenar sebelum mencadangkan skop.",
    ],
    serviceNotes: [
      "Pembaikan kebocoran bumbung curam dan kawasan basah pada rumah kayu serta bilik air konkrit lama.",
      "Pendawaian semula litar yang ditambah sedikit demi sedikit dan penggantian papan agihan lama dengan selamat.",
      "Pembaharuan paip lama, kelengkapan bilik air dan pili luar di rumah yang lama didiami.",
      "Cat semula permukaan kayu dan batu selepas masalah lembap atau reput diselesaikan.",
      "Kerja grill, pagar, railing dan tangga termasuk rawatan karat pada besi lama.",
      "Pintu, kunci, kelengkapan dan pembaikan kecil berterusan untuk rumah lama dan lot kedai.",
    ],
    propertyTypes: [
      { label: "Rumah kayu tradisional bertiang", note: "Rumah warisan yang keadaan kayu, struktur bumbung dan pengudaraan didahulukan sebelum kerja kemasan." },
      { label: "Rumah batu setingkat lama", note: "Rumah selepas perang yang biasanya memerlukan pendawaian semula, paip dan pembaharuan bilik air." },
      { label: "Blok pangsapuri dan flat kecil", note: "Unit kompak dengan kawasan basah, riser dan pendawaian asal yang sampai penghujung hayat." },
      { label: "Rumah kedai dan unit perniagaan makanan", note: "Premis bawah yang diubah suai mengikut waktu perniagaan, dengan servis dan kemasan dinaik taraf serentak." },
      { label: "Bilik sewa dan rumah kongsi", note: "Hartanah yang kerap dihuni dan memerlukan pembaikan mengutamakan keselamatan, bukan kerja kosmetik." },
    ],
    problems: [
      { title: "Bumbung bocor pada struktur yang menua", description: "Berpuluh musim tengkujuh melonggarkan genting dan menghakis flashing, lalu air muncul sebagai kesan pada siling dan kayu di bawahnya." },
      { title: "Kayu reput dan serangan serangga", description: "Lembapan berterusan pada aras lantai dan tiang melemahkan struktur kayu, dan menampalnya hanya menyembunyikan masalah yang merebak." },
      { title: "Pendawaian ditambah sedikit demi sedikit", description: "Litar yang ditambah mengikut keperluan meninggalkan kabel bercampur, titik terlebih beban dan papan yang tidak lagi sesuai." },
      { title: "Bilik air lama bocor ke struktur", description: "Kawasan basah asal tanpa kalis air berkesan membenarkan air masuk ke dinding, lantai dan anggota kayu bersebelahan." },
      { title: "Grill, pagar dan railing berkarat", description: "Besi terdedah kepada kelembapan dan asap kenderaan berkarat di sambungan dan tapak sebelum kelihatan bahaya." },
    ],
    context: [
      "Rumah kayu dan batu lama memerlukan penilaian. Dua rumah di lorong yang sama boleh memerlukan kerja yang jauh berbeza, jadi kami beri sebut harga berdasarkan apa yang bangunan itu tunjukkan, bukan pakej standard.",
      "Akses membentuk logistik: lorong sempit, tempat letak kereta terhad dan sesetengah rumah terletak di belakang rumah lain. Penghantaran dan pembuangan sisa dirancang dalam muatan kecil pada waktu yang dipersetujui.",
      "Urusan tanah dan pemilikan di Kampung Baru boleh rumit, dan sesetengah hartanah disewakan atau dimiliki bersama. Kami bekerja mengikut arahan pihak yang melantik kami dan jelas tentang skop kerja — kami tidak memberi nasihat berkaitan tanah atau pemilikan.",
    ],
    faqs: [
      { question: "Anda membaiki rumah kayu tradisional di Kampung Baru?", answer: "Ya — pembaikan bumbung, penggantian kayu yang reput, pembaikan lantai, pendawaian semula dan cat. Kami nilai keadaan kayu dahulu kerana skop yang betul bergantung sepenuhnya kepada bahagian struktur yang masih baik." },
      { question: "Boleh anda dawai semula rumah lama yang telah ditambah selama bertahun-tahun?", answer: "Boleh. Rumah begini biasanya mempunyai kabel dari pelbagai dekad. Kami nilai keseluruhan pemasangan dan beri sebut harga sama ada naik taraf tertumpu atau pendawaian semula penuh, serta jelaskan kerosakan yang melibatkan keselamatan." },
      { question: "Bumbung hanya bocor ketika hujan lebat. Perlukah bumbung baharu?", answer: "Belum tentu. Banyak kebocoran berpunca daripada genting beralih, flashing gagal atau longkang tersumbat. Kami periksa dan beritahu dengan jujur sama ada pembaikan mencukupi atau penggantian lebih wajar." },
      { question: "Anda ubah suai lot kedai dan premis makanan di sini?", answer: "Ya. Pengubahsuaian komersial dijadualkan mengikut waktu perniagaan, dan kerja elektrik, paip, jubin serta kemasan diselaraskan dalam satu rancangan supaya unit ditutup seminimum mungkin." },
      { question: "Bagaimana untuk mendapatkan sebut harga di Kampung Baru?", answer: "Hantar jenis hartanah dan masalah yang dihadapi, dengan gambar jika boleh. Kami aturkan penilaian dan berikan sebut harga bertulis tanpa obligasi." },
    ],
  },
};
