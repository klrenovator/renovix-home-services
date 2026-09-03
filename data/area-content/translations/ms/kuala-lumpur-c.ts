import type { AreaProcessStep } from "../../types";
import type { AreaTranslations } from "../types";

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
  "kuala-lumpur/taman-tun-dr-ismail": {
    ...shared("TTDI"),
    name: "TTDI",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di TTDI (Taman Tun Dr Ismail), KL",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di TTDI, Kuala Lumpur — rumah landed era 70-an, kondominium berhampiran MRT dan jalan banglo yang matang. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di TTDI, Kuala Lumpur",
    summary:
      "Taman Tun Dr Ismail — antara kawasan perumahan paling mantap di KL, dengan rumah landed era 1970-an, suasana rendah yang rindang dan kondominium baharu di koridor MRT.",
    intro: [
      "TTDI ialah kawasan perumahan yang dibangunkan sejak 1970-an dengan deretan rumah teres, rumah berkembar dan banglo, dikelilingi jalan yang rindang. Ia mengekalkan suasana rendah dan tenang, manakala koridor MRT dan pembangunan tinggi baharu menambah lapisan moden di sekeliling estet asal.",
      "Lapisan itu menentukan kerja kami di sini. Rumah landed asal sudah sampai ke usia yang memerlukan pendawaian, paip dan bilik air diganti, manakala pemilik kondominium baharu meminta kerja kemasan, lantai dan pembaikan kecacatan. Kami menyediakan pendawaian semula, paip, bilik air dengan kalis air, sambungan rumah dan renovasi penuh di seluruh TTDI.",
    ],
    serviceNotes: [
      "Naik taraf seluruh rumah dan sambungan untuk rumah landed era 1970-an.",
      "Pendawaian semula litar lama dan penambahan soket untuk penghawa dingin, pemanas air serta dapur moden.",
      "Penggantian paip tersembunyi dan kelengkapan sanitari rumah lama.",
      "Kalis air bilik air, balkoni dan bumbung sebelum kerja jubin atau cat.",
      "Kerja jubin semula bilik air dan dapur, termasuk jubin retak atau berongga.",
      "Cat dalaman dan luaran yang sesuai dengan suasana matang kawasan ini.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1970-an–80-an)", note: "Rumah estet asal yang kini memasuki kitaran naik taraf kedua atau ketiga." },
      { label: "Rumah berkembar dan banglo (1970-an–80-an)", note: "Lot asal yang lebih besar dengan permintaan sambungan dan modenisasi penuh." },
      { label: "Kondominium berhampiran MRT", note: "Blok tinggi baharu dengan kerja kemasan dan pembaikan kecacatan." },
      { label: "Pangsapuri servis", note: "Unit kompak dengan jadual kerja mengikut peraturan strata." },
      { label: "Lot kedai sekitar pasar", note: "Unit bawah tanah yang diubah suai untuk kafe, klinik dan pejabat." },
    ],
    problems: [
      { title: "Pendawaian asal yang uzur", description: "Litar era pertama tidak mampu menampung beban penghawa dingin dan dapur moden." },
      { title: "Paip tersembunyi yang menua", description: "Paip awal berkarat dan merembes di sebalik dinding sebelum puncanya kelihatan." },
      { title: "Kalis air bilik air yang gagal", description: "Membran asal tidak lagi menahan air, dan lembap merebak ke bilik bersebelahan." },
      { title: "Jubin berongga dan retak", description: "Jubin lantai longgar akibat pergerakan haba selepas berpuluh tahun." },
      { title: "Fasad lembap di bawah pokok", description: "Dinding terlindung kekal lembap dan kulat berulang tanpa rawatan permukaan." },
    ],
    context: [
      "Kebanyakan rumah landed di TTDI masih mengikut susun atur asal — struktur kukuh dan tingkap luas. Kerja di sini lebih kepada membawa sistem dan kawasan basah ke standard moden.",
      "Jalan di estet ini sempit di sesetengah tempat dan parkir terhad, jadi penghantaran bahan serta pembuangan sisa dirancang dengan teliti.",
      "Bagi kerja kondominium, peraturan strata terpakai seperti biasa: notis renovasi, waktu kerja dan tempahan lif termasuk dalam jadual kami.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah 1970-an di TTDI?", answer: "Ya. Pendawaian semula, paip, bilik air, dapur dan sambungan rumah adalah kerja biasa kami di estet ini." },
      { question: "Boleh anda buat sambungan rumah teres atau berkembar di TTDI?", answer: "Boleh, tertakluk kepada keadaan struktur dan kelulusan. Kami kenal pasti keperluan kelulusan semasa penilaian." },
      { question: "Parkir dan akses menyukarkan kerja di TTDI?", answer: "Jalan di sesetengah bahagian sempit, jadi kami rancang penghantaran dan pembuangan sisa mengikut akses, dan semua ini termasuk dalam jadual yang dipersetujui." },
      { question: "Anda bekerja di kondominium baharu sepanjang koridor MRT?", answer: "Ya. Kerja kemasan, lantai, dapur dan bilik air di unit baharu mengikut peraturan pengurusan bangunan." },
    ],
  },
  "kuala-lumpur/damansara-heights": {
    ...shared("Damansara Heights"),
    name: "Damansara Heights",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Damansara Heights, KL",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Damansara Heights (Bukit Damansara), Kuala Lumpur — banglo dan rumah berkembar era 60-an di lereng bukit. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Damansara Heights (Bukit Damansara)",
    summary:
      "Antara pinggir bandar taman terawal di KL — banglo dan rumah berkembar era 1960-an–80-an di lereng bukit, kawasan kedutaan dan lapisan kondominium baharu sekitar Damansara City.",
    intro: [
      "Damansara Heights — atau Bukit Damansara kepada penduduk lamanya — ialah antara kawasan kediaman paling awal dan paling mapan di Kuala Lumpur, dibangunkan sejak 1960-an di lereng bukit sebelah barat Bangsar. Kawasan ini terkenal dengan lot banglo dan rumah berkembar di jalan berbukit yang rindang, kehadiran kedutaan, serta lapisan baharu pejabat dan kediaman tinggi sekitar Damansara City.",
      "Rumah sebegini memerlukan pendekatan renovasi yang berbeza. Struktur asalnya kukuh, tetapi bumbung, pendawaian, saliran dan bilik air sudah berusia puluhan tahun, manakala lot lereng bukit membawa persoalan saliran dan pengurusan air. Kami memberi sebut harga untuk renovasi penuh, bumbung dan kalis air, pendawaian semula, paip serta cat di Damansara Heights dengan konteks itu — nilai dahulu, kemudian skop dengan jujur.",
    ],
    serviceNotes: [
      "Modenisasi seluruh rumah untuk banglo dan rumah berkembar era 1960-an–80-an.",
      "Kalis air bumbung, balkoni dan dinding bersebelahan lereng sebelum kerja kemasan.",
      "Pendawaian semula dan naik taraf papan agihan rumah lama.",
      "Penggantian paip berkarat dan pembaharuan bilik air di lot cerun.",
      "Cat luaran yang tahan cuaca serta rawatan kulat pada dinding terlindung.",
      "Pembaikan siling plaster lama dan kerja partition semasa modenisasi.",
    ],
    propertyTypes: [
      { label: "Banglo (1960-an–80-an)", note: "Lot asal yang besar dengan pendawaian semula dan modenisasi penuh." },
      { label: "Rumah berkembar (1960-an–80-an)", note: "Rumah lereng bukit yang memasuki kitaran naik taraf penuh kedua." },
      { label: "Kondominium dan kediaman servis", note: "Lapisan tinggi baharu sekitar Damansara City dengan kerja kemasan." },
      { label: "Lot lereng bukit", note: "Kerja saliran dan pengurusan air khusus untuk tapak cerun." },
      { label: "Hartanah berhampiran kedutaan", note: "Kerja penyelenggaraan berjadual yang kemas dan terkawal." },
    ],
    problems: [
      { title: "Bumbung banglo bocor", description: "Bumbung asal rosak selepas berpuluh musim hujan, kelihatan sebagai kesan pada siling atas." },
      { title: "Air masuk dari lereng", description: "Air hujan dari lot cerun menghala ke asas dan dinding bawah, menyebabkan lembap berterusan." },
      { title: "Pendawaian asal", description: "Litar era 1960-an tidak mampu menanggung beban moden dan kerap terputus." },
      { title: "Paip tersembunyi berkarat", description: "Paip lama merembes di sebalik dinding dan merosakkan kemasan." },
      { title: "Kulat pada dinding terlindung", description: "Dinding yang dilindungi pokok matang kekal lembap sepanjang tahun." },
    ],
    context: [
      "Tapak lereng bukit mengubah cara kerja dijalankan: air sentiasa mencari titik paling rendah, jadi saliran dan tepi bumbung diperiksa semasa penilaian, bukan selepas kerja siap.",
      "Jalan di kawasan ini senyap tetapi berliku, dan banyak hartanah terletak di belakang pagar panjang. Akses penghantaran dan pekerja dijadualkan dengan teliti.",
      "Terdapat kedutaan dan bangunan institusi di antara rumah-rumah, jadi sesetengah jalan mempunyai kawalan keselamatan tambahan. Kami mematuhi peraturan akses yang ditetapkan.",
    ],
    faqs: [
      { question: "Anda merenovasi banglo lama di Damansara Heights?", answer: "Ya. Bumbung, pendawaian, paip, bilik air dan modenisasi penuh rumah era 1960-an–80-an adalah kerja biasa kami di sini." },
      { question: "Rumah kami di lereng dan dinding bawah sentiasa lembap. Boleh dibaiki?", answer: "Kelembapan di dinding bawah selalunya berpunca daripada saliran atau kemasukan air, bukan dinding itu sendiri. Kami jejaki puncanya dan selesaikan dari sumber." },
      { question: "Boleh anda buat renovasi penuh semasa kami tinggal di rumah?", answer: "Boleh. Kami jalankan kerja bahagian demi bahagian supaya rumah kekal boleh didiami, dan jadual dipersetujui lebih awal." },
      { question: "Anda bekerja di kondominium baharu sekitar Damansara City?", answer: "Ya. Kerja kemasan, lantai, dapur dan bilik air mengikut peraturan pengurusan bangunan." },
    ],
  },
  "kuala-lumpur/sri-hartamas": {
    ...shared("Sri Hartamas"),
    name: "Sri Hartamas",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Sri Hartamas, KL",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Sri Hartamas, Kuala Lumpur — rumah teres era 90-an, kondominium dan unit kedai-pejabat sekitar Desa Sri Hartamas. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Sri Hartamas",
    summary:
      "Kawasan perbandaran 1990-an bersebelahan Mont Kiara — jalan rumah landed yang kini berusia tiga puluh tahun, blok kondominium dan kawasan komersial Desa Sri Hartamas yang sibuk.",
    intro: [
      "Sri Hartamas terletak di antara Mont Kiara dan Segambut, dibangunkan pada 1990-an sebagai kawasan perumahan rumah teres, rumah berkembar dan kondominium rendah, dengan kawasan komersial Desa Sri Hartamas yang terkenal dengan deretan kedai makan. Perumahannya kini berusia satu generasi — binaan 90-an yang kukuh tetapi sudah tiba masanya bilik air, pendawaian dan kemasan asal diganti.",
      "Justeru, kerja di sini bersifat praktikal: pemilik rumah landed meminta bilik air baharu, dapur moden dan pendawaian semula; pemilik kondominium meminta kerja kemasan dan pembaikan kecacatan; manakala unit kedai-pejabat memerlukan pengubahsuaian komersial. Kami meliputi seluruh Sri Hartamas dengan renovasi penuh, elektrik, paip, kalis air, jubin dan cat.",
    ],
    serviceNotes: [
      "Modenisasi dapur dan bilik air untuk rumah teres era 1990-an.",
      "Pendawaian semula dan penambahan soket di rumah dengan litar asal.",
      "Pembaikan paip lama dan pembaharuan kelengkapan sebelum kebocoran merebak.",
      "Kalis air bilik air dan balkoni di rumah landed mahupun kondominium.",
      "Kerja jubin semula kawasan basah dan penggantian jubin retak.",
      "Cat penuh antara penyewa dan rawatan kulat pada dinding terlindung.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1990-an)", note: "Stok landed asal yang memasuki kitaran modenisasi pertama." },
      { label: "Rumah berkembar (1990-an)", note: "Unit lebih besar dengan sambungan dan pembinaan semula bilik air." },
      { label: "Kondominium rendah", note: "Blok fasa pertama dengan bilik air dan servis asal yang menua." },
      { label: "Pangsapuri servis baharu", note: "Kemasan, lantai dan pembaikan kecacatan." },
      { label: "Unit kedai-pejabat sekitar Desa Sri Hartamas", note: "Pengubahsuaian F&B dan runcit mengikut waktu perniagaan." },
    ],
    problems: [
      { title: "Bilik air asal di hujung usia", description: "Kalis air 90-an gagal mengikut jadual, kelihatan sebagai sudut lembap dan kesan pada siling bawah." },
      { title: "Litar terputus akibat beban moden", description: "Rumah 90-an kini menanggung penghawa dingin dan dapur yang tidak dirancang asalnya." },
      { title: "Kebocoran paip tersembunyi", description: "Paip lama merembes di sebalik dinding berjubin dan merosakkan unit bersebelahan." },
      { title: "Haus daripada sewaan dan F&B", description: "Pintu, pili, suis dan kemasan dinding cepat rosak di unit sewa dan kedai." },
      { title: "Kulat pada fasad terlindung", description: "Dinding yang kurang cahaya kekal lembap dan kulat berulang tanpa rawatan." },
    ],
    context: [
      "Kawasan ini mencampurkan jalan landed, blok kondominium dan deretan komersial dalam jarak yang dekat, jadi jadual kerja disusun mengikut jenis unit: kedai mengikut waktu perniagaan, rumah mengikut penghuni, strata mengikut waktu dibenarkan.",
      "Desa Sri Hartamas sibuk sehingga lewat malam, jadi lawatan dan penghantaran lebih cekap pada waktu pagi. Kami sahkan masa dengan anda lebih awal.",
      "Banyak rumah landed kini disewakan, jadi sebahagian besar kerja kami berpandukan tuan rumah: kemasan tahan lasak dan sebut harga yang membezakan pembaikan penting daripada naik taraf kosmetik.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah teres 90-an di Sri Hartamas?", answer: "Ya. Bilik air, dapur, pendawaian, paip dan modenisasi penuh rumah landed asal adalah kerja biasa kami di sini." },
      { question: "Boleh anda ubah suai unit kedai-pejabat di Desa Sri Hartamas?", answer: "Boleh. Kerja komersial dijadualkan mengikut waktu perniagaan supaya unit boleh dibuka semula seperti yang dipersetujui." },
      { question: "Kami memiliki unit sewa di sini. Boleh dibaiki antara penyewa?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum penyewa baharu masuk." },
      { question: "Kerja kondominium di sini perlukan kebenaran pengurusan?", answer: "Kebanyakan bangunan memerlukan notis renovasi, deposit dan waktu kerja tertentu. Kami sediakan maklumat skop untuk permohonan anda." },
    ],
  },
  "kuala-lumpur/brickfields-mid-valley": {
    ...shared("Brickfields & Mid Valley"),
    name: "Brickfields & Mid Valley",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Brickfields & Mid Valley, KL",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Brickfields dan Mid Valley City, Kuala Lumpur — rumah kedai pra-perang, flat lama dan kondominium sekitar KL Sentral. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Brickfields & Mid Valley City",
    summary:
      "Daerah bersejarah 'Little India' KL bersebelahan kluster komersial Mid Valley — rumah kedai pra-perang, flat lama dan lingkaran kondominium sekitar KL Sentral.",
    intro: [
      "Brickfields ialah antara daerah tertua di Kuala Lumpur, terkenal sebagai Little India dan kini terletak betul-betul di sebelah hab pengangkutan KL Sentral. Stok hartanahnya benar-benar bercampur: rumah kedai dan rumah bandar pra-perang, flat pertengahan abad, serta lingkaran baharu kondominium dan pejabat sekitar KL Sentral dan Mid Valley City, di mana pusat beli-belah, menara pejabat dan kediaman tinggi membentuk salah satu kluster komersial paling sibuk di Lembah Klang.",
      "Campuran itu menghasilkan dua jenis kerja yang berbeza. Bangunan lama memerlukan kesedaran struktur — bumbung uzur, pendawaian asal, dinding lembap dan paip haus — manakala kondominium dan unit komersial baharu meminta kerja kemasan, lantai, partition dan siling. Kami menyediakan kedua-duanya: renovasi penuh dan pembaikan yang berhati-hati untuk stok lama, serta elektrik, paip, kalis air, jubin dan cat di seluruh daerah.",
    ],
    serviceNotes: [
      "Pengubahsuaian rumah bandar dan flat lama dengan kesedaran struktur dalam skop.",
      "Pendawaian semula bangunan pra-perang dan naik taraf papan agihan.",
      "Pembaikan paip lama dan pembaharuan bilik air di flat serta rumah kedai.",
      "Rawatan dinding lembap, resapan bilik air dan kebocoran bumbung.",
      "Penggantian siling plaster lama dan kerja partition di flat serta unit komersial.",
      "Cat penuh untuk rumah kedai dan pangsapuri, dengan rawatan lembap dan kulat dahulu.",
    ],
    propertyTypes: [
      { label: "Rumah kedai pra-perang", note: "Binaan kayu, bata dan plaster lama yang memerlukan pengubahsuaian berhati-hati." },
      { label: "Flat pertengahan abad", note: "Blok lama dengan riser, bilik air dan pendawaian asal yang menua." },
      { label: "Kondominium sekitar KL Sentral dan Mid Valley", note: "Unit tinggi dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Unit komersial dan pejabat", note: "Pengubahsuaian lot kedai dan tingkat pejabat untuk penyewa baharu." },
      { label: "Unit sewa dan servis", note: "Kemasan tahan lasak antara penyewa." },
    ],
    problems: [
      { title: "Dinding lembap di bangunan lama", description: "Binaan pra-perang menyimpan lembapan, dan cat mengelupas berulang tanpa rawatan yang betul." },
      { title: "Pendawaian asal tertekan", description: "Litar lama tidak direka untuk penghawa dingin dan dapur moden." },
      { title: "Bumbung dan siling uzur", description: "Struktur kayu dan plaster awal bocor serta melendut selepas berpuluh musim hujan." },
      { title: "Resapan bilik air antara tingkat", description: "Kalis air asal gagal dan lembap kelihatan pada siling unit bawah." },
      { title: "Haus daripada pusingan sewa", description: "Pintu, kunci, kelengkapan dan kemasan dinding cepat rosak di unit sewa." },
    ],
    context: [
      "Bangunan lama menentukan rentak kerja: di mana unit moden boleh terus memasang jubin, rumah kedai pra-perang mungkin perlu pemeriksaan pendawaian dan struktur dahulu. Kami susun kerja mengikut keperluan bangunan dan terangkan apa yang dibenarkan strukturnya.",
      "Trafik sekitar KL Sentral dan Mid Valley sesak hampir sepanjang hari, jadi lawatan dan penghantaran dirancang pada waktu yang lebih lengang.",
      "Sebahagian besar perumahan di sini adalah strata dengan peraturan ketat tentang waktu kerja, tempahan lif dan pembuangan sisa. Kami sediakan maklumat skop untuk kelulusan anda.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah kedai dan flat lama di Brickfields?", answer: "Ya. Kami nilai struktur dan servis dahulu, kemudian beri sebut harga yang jujur termasuk kerja yang diperlukan kerana usia bangunan." },
      { question: "Boleh anda ubah suai lot kedai atau pejabat berhampiran Mid Valley?", answer: "Boleh. Kerja komersial dijadualkan mengikut waktu perniagaan dan diselaraskan dalam satu program." },
      { question: "Dinding flat kami sentiasa lembap. Boleh dibaiki dengan betul?", answer: "Kelembapan perlu diselesaikan dari puncanya — paip bocor, kalis air gagal atau pengudaraan lemah — bukan sekadar dicat semula." },
      { question: "Anda buat kerja kemasan kondominium sekitar KL Sentral?", answer: "Ya. Lantai, partition, siling, dapur dan bilik air di menara baharu mengikut peraturan pengurusan bangunan." },
    ],
  },
};
