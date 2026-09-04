import type { AreaProcessStep } from "../../types";
import type { AreaTranslations } from "../types";

/** Malay translations for the Phase 23 Selangor township guides. */

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
  "selangor/setia-alam": {
    ...shared("Setia Alam"),
    name: "Setia Alam",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Setia Alam, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Setia Alam, Selangor — rumah teres, superlink dan kondominium era 2000-an–2010-an. Sambungan, kalis air, pendawaian. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Setia Alam, Selangor",
    summary:
      "Bandar bersepadu besar di barat laut Shah Alam — kebanyakannya rumah landed era 2000-an–2010-an yang kini memasuki kitaran naik taraf utama pertama.",
    intro: [
      "Setia Alam ialah antara bandar terancang terbesar di Lembah Klang, dibangunkan sejak pertengahan 2000-an di pinggir barat laut Shah Alam dan disambungkan terus ke NKVE melalui susur keluar khususnya sendiri. Hampir keseluruhan kediamannya adalah landed — rumah teres, superlink, rumah berkembar dan rumah kluster merentasi presint bernombor — dengan lapisan kondominium serta pangsapuri servis yang lebih baharu, dan jalur komersial sibuk sekitar kawasan Setia City.",
      "Oleh sebab stok perumahannya agak muda dan seragam, kerja di sini lebih mudah dijangka berbanding pekan lama. Rumah yang dibina dalam dekad pertama bandar ini kini sampai ke usia kalis air bilik air asal, cat luar dan butiran bumbung memerlukan perhatian, manakala pemilik merancang sambungan dapur, dapur basah, naik taraf porch dan pembaharuan dalaman menyeluruh. Kami menyediakan renovasi am, kalis air, kerja jubin, elektrik dan kerja besi di seluruh presint Setia Alam.",
    ],
    serviceNotes: [
      "Sambungan dapur, dapur basah dan naik taraf dalaman penuh untuk rumah landed bandar ini.",
      "Kalis air bilik air, balkoni dan papak bumbung diperbaharui apabila rumah generasi pertama sampai usianya.",
      "Kerja jubin semula kawasan basah dan penggantian jubin berongga atau retak di rumah teres dan superlink.",
      "Penambahan titik, litar lampu dan naik taraf papan agihan untuk rumah yang disambung dan diubah suai.",
      "Grill, pagar, awning dan railing difabrikasi dan dipasang mengikut garis panduan estet.",
      "Cat semula luaran pada fasad terdedah matahari dan hujan serta pembaharuan dalaman penuh.",
    ],
    propertyTypes: [
      { label: "Rumah teres (2000-an–2010-an)", note: "Stok teras bandar ini, kini dalam kitaran pertama naik taraf kalis air, cat dan sistem." },
      { label: "Rumah superlink dan kluster", note: "Rumah landed lebih besar dengan sambungan, dapur basah dan renovasi dalaman penuh." },
      { label: "Rumah berkembar dan banglo", note: "Lot premium dengan skop bumbung, saliran dan modenisasi penuh apabila matang." },
      { label: "Kondominium dan pangsapuri servis", note: "Lapisan tinggi yang lebih baharu dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Pejabat kedai di jalur komersial", note: "Unit komersial yang diubah suai untuk peruncitan, klinik dan pejabat." },
    ],
    problems: [
      { title: "Kegagalan kalis air bilik air kitaran pertama", description: "Membran yang dipasang ketika bandar dibina tamat hayat serentak, dan lembap mula kelihatan pada dinding bersebelahan." },
      { title: "Kebocoran papak bumbung rata dan porch", description: "Papak terdedah di atas porch dan sambungan belakang retak dan menakung air, lalu bocor ke dalam kemudian." },
      { title: "Jubin berongga di kawasan basah dan ruang tamu", description: "Pergerakan haba dan kegagalan pelekat menyebabkan jubin berbunyi kosong lalu retak berhampiran pintu dan zon basah." },
      { title: "Titik kuasa tidak lagi sepadan dengan rumah", description: "Dapur yang disambung, penghawa dingin tambahan dan ruang kerja melebihi reka bentuk litar asal, lalu papan trip." },
      { title: "Karat pada pagar, grill dan awning", description: "Matahari dan hujan lebat merosakkan salutan di sambungan dan tapak, dan karat merebak di bawah lapisan cat." },
    ],
    context: [
      "Sambungan dan perubahan struktur rumah landed di bandar ini tertakluk kepada kelulusan pihak berkuasa tempatan, dan estet mungkin mempunyai garis panduan sendiri mengenai fasad, porch dan kerja sempadan. Kami kenal pasti keperluan itu semasa penilaian.",
      "Kerana banyak rumah dalam satu presint dibina dengan spesifikasi sama, kerosakan yang muncul di satu rumah selalunya kerosakan sama yang tiba mengikut jadual di rumah lain. Itu membantu diagnosis, tetapi kami tetap menilai setiap rumah secara berasingan.",
      "Bandar ini luas dan presintnya berjauhan, jadi kami kumpulkan lawatan secara munasabah dan sahkan masa dengan anda, bukan menjanjikan ketibaan segera yang tidak dapat kami tunaikan.",
    ],
    faqs: [
      { question: "Boleh anda buat sambungan dapur atau belakang rumah teres di Setia Alam?", answer: "Boleh, tertakluk kepada keadaan struktur dan kelulusan. Keperluan kelulusan dikenal pasti semasa penilaian dan kami beritahu apa yang diperlukan untuk permohonan anda." },
      { question: "Bilik air bocor ke bilik sebelah. Perlukah dibina semula sepenuhnya?", answer: "Tidak semestinya. Kadangkala kegagalan hanya setempat di perangkap lantai atau sambungan dinding. Kami jejaki puncanya, dan jika membran benar-benar gagal kami terangkan sebab pecah dan kalis air semula adalah jawapan yang jujur." },
      { question: "Anda fabrikasi pagar, grill dan awning untuk rumah di sini?", answer: "Ya — difabrikasi mengikut ukuran dan dipasang di tapak, termasuk rawatan karat dan cat semula besi sedia ada. Jika estet ada garis panduan rupa, kami mengikutinya." },
      { question: "Anda bekerja di kondominium Setia Alam juga?", answer: "Ya. Kerja bangunan tinggi mengikut peraturan pengurusan — notis renovasi, waktu dibenarkan dan tempahan lif — dan semuanya dimasukkan dalam jadual." },
      { question: "Bagaimana untuk mendapatkan sebut harga di Setia Alam?", answer: "Hubungi kami dengan presint, jenis rumah dan kerja yang dirancang, dengan gambar jika ada. Kami aturkan lawatan dan berikan sebut harga bertulis tanpa obligasi." },
    ],
  },
  "selangor/bandar-kinrara": {
    ...shared("Bandar Kinrara"),
    name: "Bandar Kinrara",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bandar Kinrara, Puchong",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bandar Kinrara, Puchong — rumah teres, berkembar dan kondominium era 1990-an–2000-an. Pendawaian, bilik air, kalis air. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bandar Kinrara, Puchong",
    summary:
      "Bandar mantap di sebelah Puchong dengan rumah landed dan kondominium era 1990-an–2000-an, kini pada tahap pembaharuan sistem rumah.",
    intro: [
      "Bandar Kinrara terletak di bahagian Puchong dalam daerah Petaling, dibangunkan sejak 1990-an merentasi beberapa seksyen bernombor antara koridor lebuh raya Bukit Jalil dan pusat Puchong. Ia bandar bercampur yang sudah mantap: rumah teres, rumah berkembar dan banglo di seksyen lama, blok kondominium dan pangsapuri di sepanjang jalan utama, serta jalur pejabat kedai yang panjang.",
      "Usia bandar inilah fakta utama untuk kerja renovasi. Rumah yang dibina dalam dekad pertamanya kini berusia dua puluh hingga tiga puluh tahun — usia paip tersembunyi, kalis air bilik air, pendawaian dan butiran bumbung mula gagal satu demi satu. Kami menyediakan penggantian paip, pembaharuan kalis air, pendawaian semula dan naik taraf papan agihan, kerja jubin serta renovasi am di seluruh seksyen landed dan blok tinggi Bandar Kinrara.",
    ],
    serviceNotes: [
      "Penggantian paip tersembunyi berkarat dan pembaharuan kelengkapan sanitari di rumah era 1990-an–2000-an.",
      "Kalis air bilik air, balkoni dan bumbung rata diperbaharui pada usia yang telah dicapai rumah-rumah ini.",
      "Pendawaian semula litar lama, naik taraf papan agihan dan penambahan titik untuk peralatan moden.",
      "Kerja jubin semula bilik air dan dapur serta penggantian jubin berongga atau retak di ruang tamu.",
      "Modenisasi dapur dan bilik air serta naik taraf dalaman penuh di rumah landed matang.",
      "Cat dalaman dan cat semula luaran pada fasad lama yang terdedah cuaca.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1990-an–2000-an)", note: "Stok utama bandar ini, kini betul-betul dalam tahun pembaharuan sistem dan kawasan basah." },
      { label: "Rumah berkembar dan banglo", note: "Lot lebih besar dengan skop modenisasi penuh, kerja bumbung dan sambungan." },
      { label: "Kondominium dan pangsapuri", note: "Blok tinggi di jalan utama dengan kerja kemasan, kalis air dan pembaikan kecacatan." },
      { label: "Pejabat kedai di jalur komersial", note: "Unit komersial yang diubah suai untuk klinik, pejabat dan kafe mengikut waktu perniagaan." },
      { label: "Unit sewa dan rumah disewakan", note: "Hartanah yang diperbaharui antara penyewa dengan kemasan tahan lasak dan praktikal." },
    ],
    problems: [
      { title: "Kebocoran paip tersembunyi di sebalik dinding", description: "Paip asal dekad pertama bandar ini berkarat dan merembes, kelihatan sebagai tompokan lembap dan bil air meningkat." },
      { title: "Kalis air bilik air di penghujung hayat", description: "Membran yang dipasang ketika rumah dibina tidak lagi menahan air, dan air sampai ke bilik bersebelahan serta tingkat bawah." },
      { title: "Papan agihan yang tidak lagi mencukupi", description: "Papan yang ditetapkan berdekad lalu kini menanggung penghawa dingin, pemanas air dan litar dapur tambahan, lalu kerap trip." },
      { title: "Jubin lantai berongga dan retak", description: "Kegagalan pelekat dan pergerakan papak menyebabkan jubin berongga lalu retak di kawasan basah dan ruang tamu." },
      { title: "Kebocoran papak porch dan sambungan belakang", description: "Papak rata di atas porch dan sambungan menakung air apabila cerunnya cetek, dan akhirnya bocor ke dalam." },
    ],
    context: [
      "Kerana sebahagian besar bandar ini dibina dengan spesifikasi serupa dalam tempoh beberapa tahun, kerosakan tiba mengikut jadual yang hampir sama. Itu berguna untuk diagnosis, tetapi setiap sebut harga tetap berdasarkan penemuan di rumah anda sendiri.",
      "Jalan di kawasan landed mempunyai akses munasabah dan tempat letak kereta sendiri, jadi penghantaran bahan dan pembuangan sisa mudah; blok tinggi pula mengikut proses strata biasa iaitu notis, deposit, waktu dibenarkan dan tempahan lif.",
      "Jalan utama bandar ini sesak pada waktu puncak. Kami jadualkan lawatan dan penghantaran di luar tempoh itu dan sahkan masa dengan anda.",
    ],
    faqs: [
      { question: "Anda ganti paip rumah lama di Bandar Kinrara?", answer: "Ya. Jika paip tersembunyi telah berkarat, kami nilai sama ada penggantian tertumpu atau penggantian penuh adalah jawapan yang jujur, dan beri sebut harga mengikut keperluan sebenar rumah." },
      { question: "Boleh anda naik taraf papan agihan rumah era 1990-an?", answer: "Boleh. Kami nilai pemasangan sedia ada, beban semasa rumah dan keadaan pendawaian, kemudian beri sebut harga naik taraf papan atau pendawaian semula yang lebih menyeluruh." },
      { question: "Anda bekerja di kondominium selain seksyen landed?", answer: "Ya. Kerja bangunan tinggi mengikut peraturan renovasi bangunan — notis, deposit, waktu dibenarkan dan tempahan lif — dan semuanya dimasukkan dalam jadual." },
      { question: "Papak porch bocor ketika hujan lebat. Boleh dibaiki tanpa dibina semula?", answer: "Selalunya boleh. Banyak kebocoran porch berpunca daripada retak, cerun tidak sesuai atau sambungan gagal, bukan struktur yang rosak. Kami periksa dahulu dan beritahu dengan jujur." },
      { question: "Bagaimana untuk mendapatkan sebut harga di Bandar Kinrara?", answer: "Hubungi kami dengan seksyen, jenis hartanah dan kerja yang dirancang, dengan gambar jika ada. Kami aturkan lawatan dan berikan sebut harga bertulis tanpa obligasi." },
    ],
  },
  "selangor/batu-caves": {
    ...shared("Batu Caves"),
    name: "Batu Caves",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Batu Caves, Selangor",
    metaDescription:
      "Servis pembaikan dan renovasi rumah di Batu Caves, Selangor — rumah estet lama, rumah teres matang dan kediaman baharu di koridor KTM. Bumbung, pendawaian. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Batu Caves, Selangor",
    summary:
      "Pekan lama daerah Gombak di bawah bukit batu kapur — rumah estet lama, rumah teres matang dan lapisan baharu di sepanjang koridor KTM.",
    intro: [
      "Batu Caves terletak dalam daerah Gombak di pinggir utara Kuala Lumpur, terkenal dengan bukit batu kapur dan kompleks kuilnya. Di sekeliling mercu tanda itu terdapat pekan kediaman yang dibangunkan sejak berdekad: rumah estet dan kampung lama, skim rumah teres era 1980-an dan 1990-an, kawasan bengkel dan perindustrian ringan, serta lapisan kediaman dan pangsapuri baharu di sepanjang koridor KTM Komuter dan MRR2.",
      "Campuran usia inilah yang membentuk kerja di sini. Rumah lama memerlukan pembaharuan bumbung, pendawaian dan bilik air; rumah teres 80-an–90-an sampai ke usia kalis air dan paip tersembunyi gagal; manakala hujan lebat yang mengalir dari kawasan tadahan bukit menjadikan butiran bumbung, saliran dan lembap luaran tema berulang di seluruh pekan. Kami menyediakan kerja kalis air dan bumbung, paip, pendawaian, cat serta kerja besi di Batu Caves.",
    ],
    serviceNotes: [
      "Pembaikan bumbung, garisan longkang dan kawasan basah di pekan yang menerima aliran air deras dari bukit.",
      "Penggantian paip lama, penyelesaian masalah saliran berulang dan pembaharuan kelengkapan bilik air.",
      "Pendawaian semula rumah lama, naik taraf papan dan penambahan titik pada litar yang ditambah sedikit demi sedikit.",
      "Cat semula luaran dan rawatan kulat pada dinding yang kekal lembap sepanjang musim hujan.",
      "Pagar, grill, awning dan railing termasuk rawatan karat pada besi yang terdedah cuaca.",
      "Modenisasi dapur dan bilik air serta naik taraf penuh rumah teres dan estet matang.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1980-an–1990-an)", note: "Stok kediaman teras pekan ini, kini memerlukan pembaharuan sistem dan pembinaan semula kawasan basah." },
      { label: "Rumah estet dan kampung lama", note: "Rumah yang dibina individu, dengan bumbung, struktur dan pendawaian dinilai sebelum apa-apa kerja lain." },
      { label: "Pangsapuri di koridor transit", note: "Blok baharu dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Lot kedai dan unit bengkel", note: "Premis komersial dan perindustrian ringan yang memerlukan pengubahsuaian praktikal dan tahan lasak." },
      { label: "Rumah disewakan dan unit sewa", note: "Hartanah yang diperbaharui antara penyewa dengan kemasan tahan lasak dan pembaikan mengutamakan keselamatan." },
    ],
    problems: [
      { title: "Bumbung bocor selepas hujan lebat", description: "Aliran air dari tadahan bukit menguji setiap butiran bumbung, dan genting beralih atau flashing gagal cepat kelihatan sebagai kesan pada siling." },
      { title: "Dinding lembap dan kulat berulang", description: "Musim hujan yang panjang dan fasad terlindung mengekalkan kelembapan, jadi cat gagal dan kulat kembali selagi punca lembapan tidak diselesaikan." },
      { title: "Saliran tersumbat dan terlebih beban", description: "Hujan lebat dan kelodak menenggelamkan longkang dan salur keluar, lalu air berpatah balik ke porch, halaman dan sambungan belakang." },
      { title: "Pendawaian ditambah selama berdekad", description: "Rumah lama membawa litar yang ditambah mengikut keperluan, meninggalkan kabel bercampur dan papan yang tidak lagi sesuai." },
      { title: "Besi luaran berkarat", description: "Kelembapan berterusan menghakis pagar, grill dan rangka awning di sambungan dan tapak sebelum kerosakan kelihatan." },
    ],
    context: [
      "Air ialah tema berulang di sini. Kerana pekan ini terletak di bawah kawasan tadahan bukit, kami memeriksa keseluruhan laluan air — bumbung, longkang, salur keluar dan aras tanah luar — bukan sekadar bilik tempat kesan air muncul.",
      "Kerja bumbung dan luaran bergantung kepada cuaca. Kami rancang peringkat itu dengan mengambil kira hujan dan beritahu dengan jujur apabila musim lembap mengubah tarikh.",
      "Lalu lintas sekitar kompleks kuil meningkat sangat tinggi pada musim perayaan, terutamanya Thaipusam. Kami jadualkan penghantaran dan lawatan di luar hari tersebut supaya akses realistik.",
    ],
    faqs: [
      { question: "Siling saya berkesan air setiap musim hujan. Perlukah bumbung baharu?", answer: "Selalunya tidak. Kebanyakan kebocoran berulang berpunca daripada genting beralih, flashing gagal, longkang tersumbat atau butiran sambungan yang lemah. Kami periksa dan beritahu sama ada pembaikan benar-benar akan bertahan." },
      { question: "Boleh anda baiki dinding lembap yang sentiasa berkulat?", answer: "Boleh, tetapi rawatannya mesti mengikut punca — kebocoran, lembap naik, kegagalan penutupan luar atau pengudaraan lemah. Kami kenal pasti puncanya, selesaikan, kemudian pulihkan permukaan. Cat semula sahaja tidak bertahan." },
      { question: "Anda dawai semula rumah lama di Batu Caves?", answer: "Ya. Kami nilai keseluruhan pemasangan termasuk litar yang ditambah selama bertahun-tahun, dan beri sebut harga naik taraf tertumpu atau pendawaian semula penuh, serta jelaskan kerosakan yang melibatkan keselamatan." },
      { question: "Anda terima kerja ubah suai lot kedai dan bengkel?", answer: "Ya. Kerja komersial dijadualkan mengikut waktu perniagaan, dengan elektrik, paip, jubin dan kemasan diselaraskan dalam satu rancangan." },
      { question: "Bagaimana untuk mendapatkan sebut harga di Batu Caves?", answer: "Hantar jenis hartanah dan masalah yang dihadapi, dengan gambar jika boleh. Kami aturkan penilaian dan berikan sebut harga bertulis tanpa obligasi." },
    ],
  },
  "selangor/bandar-mahkota-cheras": {
    ...shared("Bandar Mahkota Cheras"),
    name: "Bandar Mahkota Cheras",
    title:
      "Renovix Home Services | Renovasi & Pembaikan Rumah di Bandar Mahkota Cheras, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bandar Mahkota Cheras, Selangor — rumah teres, superlink dan kondominium era 2000-an di daerah Hulu Langat. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bandar Mahkota Cheras, Selangor",
    summary:
      "Bandar terancang era 2000-an dalam daerah Hulu Langat di sebelah Selangor sempadan Cheras — kebanyakannya rumah landed yang kini sampai kitaran pembaharuan pertama.",
    intro: [
      "Bandar Mahkota Cheras ialah bandar terancang dalam daerah Hulu Langat, Selangor, dibangunkan sejak awal 2000-an di sebelah Selangor sempadan Cheras, antara Cheras KL dan Kajang. Walaupun berkongsi nama, ia tempat yang jelas berbeza daripada Cheras di Kuala Lumpur: lebih baharu, disusun dalam presint bernombor dengan rumah teres, superlink dan rumah berkembar, sebuah pusat komersial pejabat kedai serta beberapa blok pangsapuri dan kondominium.",
      "Rumah di sini dibina dalam tempoh yang agak singkat, jadi ia menua serentak. Rumah generasi pertama bandar ini kini sampai ke tahap kalis air bilik air asal, cat luar, butiran bumbung dan papak porch memerlukan perhatian, manakala pemilik menambah dapur basah, menyambung ruang belakang dan memodenkan dalaman. Kami menyediakan kerja kalis air, renovasi am, jubin, elektrik dan paip di seluruh presint bandar ini.",
    ],
    serviceNotes: [
      "Kalis air bilik air, balkoni dan papak porch diperbaharui apabila rumah generasi pertama sampai usianya.",
      "Penambahan dapur basah, sambungan belakang dan naik taraf dalaman penuh rumah landed.",
      "Kerja jubin semula kawasan basah dan penggantian jubin berongga atau retak di ruang tamu dan ruang servis.",
      "Penambahan titik dan naik taraf papan untuk dapur yang disambung, penghawa dingin dan ruang kerja.",
      "Pembaharuan kelengkapan, penjejakan kebocoran dan penyaluran semula paip di rumah yang diubah suai.",
      "Pagar, grill, awning dan railing difabrikasi mengikut ukuran dan dipasang di tapak.",
    ],
    propertyTypes: [
      { label: "Rumah teres (2000-an)", note: "Stok teras bandar ini, kini memasuki kitaran pembaharuan kalis air dan kemasan yang pertama." },
      { label: "Rumah superlink dan berkembar", note: "Rumah landed lebih besar dengan sambungan, dapur basah dan renovasi dalaman penuh." },
      { label: "Pangsapuri dan kondominium", note: "Lapisan tinggi yang lebih kecil dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Pejabat kedai di pusat komersial", note: "Unit komersial yang diubah suai untuk klinik, pejabat, pusat tuisyen dan perniagaan makanan." },
      { label: "Rumah disewakan", note: "Hartanah yang diperbaharui antara penyewa dengan kemasan tahan lasak dan praktikal." },
    ],
    problems: [
      { title: "Kebocoran bilik air kitaran pertama", description: "Membran asal di seluruh bandar tamat hayat pada masa hampir sama, dan lembap muncul pada dinding bersebelahan serta siling bawah." },
      { title: "Air masuk melalui papak porch dan belakang", description: "Cerun cetek pada papak terdedah membenarkan air bertakung dan menembusi retak, lalu kelihatan di dalam rumah beberapa bulan kemudian." },
      { title: "Jubin berongga di seluruh ruang tamu", description: "Kegagalan pelekat dan pergerakan papak menyebabkan jubin lantai berongga dan retak, terutamanya berhampiran pintu dan zon basah." },
      { title: "Litar yang tidak lagi mencukupi selepas rumah disambung", description: "Dapur basah tambahan, penghawa dingin dan peralatan melebihi reka bentuk pendawaian asal." },
      { title: "Cat luar haus dan kulat", description: "Matahari dan hujan lebat merosakkan salutan pada fasad terdedah, dan dinding terlindung menyimpan kulat sepanjang musim hujan." },
    ],
    context: [
      "Bandar ini terletak di sebelah Selangor kawasan Cheras, bukan Kuala Lumpur, jadi kelulusan sambungan dan struktur melalui pihak berkuasa tempatan Selangor yang berkaitan. Kami kenal pasti keperluan itu semasa penilaian, bukan selepas kerja bermula.",
      "Rumah yang dibina dengan spesifikasi sama dalam tempoh beberapa tahun cenderung mengalami kerosakan mengikut jadual serupa, yang membantu diagnosis — tetapi sebut harga sentiasa berdasarkan penemuan di rumah anda.",
      "Laluan utama masuk ke bandar ini sesak pada waktu puncak. Kami rancang penghantaran dan lawatan di luar tempoh itu dan sahkan masa dengan jujur.",
    ],
    faqs: [
      { question: "Adakah Bandar Mahkota Cheras sama dengan Cheras di KL?", answer: "Tidak. Bandar Mahkota Cheras ialah bandar Selangor dalam daerah Hulu Langat, di seberang sempadan Cheras, Kuala Lumpur. Rumahnya lebih baharu dan pihak berkuasa tempatannya berbeza — perkara penting untuk kelulusan." },
      { question: "Boleh anda tambah dapur basah atau sambungan belakang?", answer: "Boleh, tertakluk kepada keadaan struktur dan kelulusan. Keperluan dikenal pasti semasa penilaian dan kami beritahu apa yang diperlukan untuk permohonan anda." },
      { question: "Bilik air bocor ke bilik sebelah. Apa yang terlibat?", answer: "Kami jejaki punca dahulu. Jika kalis air benar-benar gagal, jawapan yang jujur ialah pecah, kalis air semula dan jubin semula — tampalan permukaan pada membran yang gagal tidak bertahan." },
      { question: "Anda terima kerja pembaikan kecil, bukan renovasi sahaja?", answer: "Ya. Pembaikan pintu dan kunci, penggantian pili, pembaikan kebocoran dan jubin dialu-alukan dan boleh digabungkan dalam satu lawatan." },
      { question: "Bagaimana untuk mendapatkan sebut harga di Bandar Mahkota Cheras?", answer: "Hubungi kami dengan presint, jenis hartanah dan kerja yang dirancang, dengan gambar jika ada. Kami aturkan lawatan dan berikan sebut harga bertulis tanpa obligasi." },
    ],
  },
};
