import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Litar, soket dan papan agihan rumah teres yang selalunya sudah bertahun-tahun tidak dinaik taraf." },
  { label: "Semi-D & Banglo", note: "Litar yang lebih banyak, lampu luar dan beban peralatan yang lebih tinggi." },
  { label: "Kondominium", note: "Kerja elektrik dalam unit mengikut waktu dan garis panduan pengurusan bangunan." },
  { label: "Pangsapuri", note: "Pembaikan setempat, titik lampu dan soket tambahan dalam unit." },
  { label: "Pejabat & Kedai", note: "Titik kuasa, pencahayaan dan pengagihan litar untuk ruang komersial kecil." },
  { label: "Projek Renovasi", note: "Kerja elektrik yang disiapkan mengikut urutan sebelum siling ditutup dan cat disapu." },
];

const areasNote =
  "Kerja elektrik tersedia di seluruh Kuala Lumpur, Selangor dan Lembah Klang untuk rumah landed, kondominium dan premis kecil.";

const propertyTypesIntro =
  "Umur bangunan dan cara pendawaian asal dipasang menentukan cara kami mengendalikan setiap kes.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "power-tripping": {
    ...base,
    name: "Elektrik Trip",
    title: "Renovix Home Services | Masalah Elektrik Trip di KL & Selangor",
    metaDescription:
      "Breaker yang kerap trip diperiksa dan dibaiki di Kuala Lumpur & Selangor. Ketahui punca, tanda amaran dan langkah selamat sebelum juruelektrik tiba.",
    h1: "Elektrik Trip",
    subtitle:
      "Breaker yang trip berulang kali sedang melindungi litar yang bermasalah. Renovix mencari puncanya dengan selamat, bukan sekadar menghidupkannya semula.",
    whatItMeans: [
      "Elektrik trip berlaku apabila breaker atau RCCB di papan agihan memutuskan bekalan secara automatik. Breaker ialah alat keselamatan — ia trip atas sebab tertentu: melindungi pendawaian, peralatan dan penghuni daripada beban berlebihan atau kerosakan.",
      "Trip sekali selepas beban sementara mungkin tidak membimbangkan. Tetapi breaker yang trip berulang kali menunjukkan masalah berterusan pada litar itu, dan menghidupkannya semula tanpa memeriksa hanya menyembunyikan masalah tersebut.",
    ],
    commonCauses: [
      "Terlalu banyak peralatan pada satu litar sehingga melebihi kadar bebannya.",
      "Peralatan rosak atau kabel yang cedera menyebabkan litar pintas.",
      "Kebocoran arus melalui peralatan basah atau rosak yang menjadikan RCCB trip.",
      "Pendawaian lama atau bersaiz kecil yang tidak mampu menampung beban hari ini.",
      "Sambungan longgar atau breaker yang sudah haus.",
      "Pemanas air atau penghawa dingin yang menarik arus melebihi kemampuan litarnya.",
    ],
    warningSigns: [
      "Breaker yang sama trip berulang kali dalam tempoh singkat.",
      "Trip berlaku setiap kali peralatan tertentu dihidupkan.",
      "Bau hangus, soket panas atau suis bertukar warna.",
      "Lampu malap atau peralatan perlahan apabila beberapa alat digunakan serentak.",
    ],
    solutions: [
      { title: "Kenal pasti litar terlibat", description: "Kami menyemak papan agihan dan menentukan litar mana yang trip serta apa yang disambung padanya." },
      { title: "Uji litar dan peralatan", description: "Peralatan diasingkan satu per satu untuk mengesahkan sama ada masalah datang daripada litar atau daripada alat tertentu." },
      { title: "Baiki kerosakan atau tukar breaker", description: "Sambungan longgar dibaiki, kabel rosak diganti, dan breaker yang sudah lemah ditukar." },
      { title: "Imbangi beban atau naik taraf litar", description: "Jika litar memang terlebih beban, kami cadangkan litar tambahan atau pengagihan semula beban." },
    ],
    whenToCall: [
      "Breaker trip berulang kali dan anda tidak dapat mengenal pasti puncanya.",
      "Terdapat bau hangus, percikan api atau soket yang panas.",
      "RCCB trip walaupun tiada peralatan dihidupkan.",
      "Anda mahu litar diuji dengan betul sebelum masalah menjadi lebih besar.",
    ],
    relatedServiceNote:
      "Masalah trip dikendalikan oleh pasukan elektrik kami, termasuk ujian litar dan naik taraf papan agihan jika perlu.",
    processTitle: "Cara Kami Mengendalikan Masalah Trip",
    processIntro: "Kami menguji secara berperingkat supaya punca sebenar disahkan, bukan diteka.",
    processSteps: [
      { title: "Periksa papan agihan", description: "Kami menyemak keadaan breaker, label litar dan perlindungan sedia ada." },
      { title: "Asingkan punca", description: "Litar dan peralatan diasingkan sehingga punca dikenal pasti." },
      { title: "Baiki kerosakan", description: "Sambungan, kabel atau breaker yang bermasalah dibaiki atau diganti." },
      { title: "Uji semula dan sahkan", description: "Litar diuji semula di bawah beban sebelum kerja diserahkan." },
    ],
    faqs: [
      { question: "Bahayakah jika saya asyik reset breaker yang trip?", answer: "Ya. Breaker trip kerana ada sebab. Reset berulang kali tanpa memeriksa boleh menyebabkan kabel menjadi panas dan meningkatkan risiko kebakaran." },
      { question: "Kenapa RCCB trip tetapi breaker utama tidak?", answer: "RCCB mengesan kebocoran arus ke bumi, biasanya daripada peralatan yang lembap atau rosak, manakala breaker biasa hanya bertindak terhadap beban berlebihan dan litar pintas." },
      { question: "Boleh terlalu banyak peralatan menyebabkan trip?", answer: "Boleh. Jika jumlah beban pada satu litar melebihi kadarnya, breaker akan memutuskan bekalan. Penyelesaiannya ialah mengagihkan beban atau menambah litar." },
      { question: "Apa yang patut saya buat sementara menunggu juruelektrik?", answer: "Cabut peralatan pada litar berkenaan, jangan reset berulang kali, dan elakkan menggunakan soket yang panas atau berbau hangus." },
    ],
  },
  "faulty-socket": {
    ...base,
    name: "Soket Rosak",
    title: "Renovix Home Services | Soket Rosak di KL & Selangor",
    metaDescription:
      "Soket mati, longgar atau panas dibaiki dan diganti dengan selamat di Kuala Lumpur & Selangor, termasuk ujian litar. Punca, tanda dan penyelesaian.",
    h1: "Soket Rosak",
    subtitle:
      "Soket yang mati, longgar atau panas ialah masalah pendawaian, bukan masalah plug. Renovix membaiki atau menggantikannya dengan selamat dan menguji litarnya.",
    whatItMeans: [
      "Soket rosak ialah titik kuasa yang tidak lagi berfungsi, longgar, terasa panas, atau mengeluarkan percikan apabila plug dimasukkan. Kerana soket ialah tempat peralatan bertemu dengan pendawaian rumah, kerosakan di situ bukan sekadar menyusahkan tetapi juga berisiko.",
      "Kebanyakan punca berada di belakang plate soket dan tidak kelihatan dari luar — sambungan longgar, terminal yang haus atau kabel yang rosak.",
    ],
    commonCauses: [
      "Wayar longgar pada terminal di belakang soket.",
      "Suis atau sesentuh terminal soket yang sudah haus.",
      "Litar yang trip atau fius yang putus menjejaskan titik itu.",
      "Kerosakan akibat soket yang kerap terlebih beban.",
      "Soket lama yang sudah merosot dengan usia.",
      "Plug yang ditarik dengan kasar sehingga merosakkan soket.",
    ],
    warningSigns: [
      "Soket tidak berfungsi walaupun litar dihidupkan.",
      "Soket terasa suam atau panas selepas digunakan.",
      "Percikan atau bunyi berdetik apabila plug dimasukkan.",
      "Plug longgar atau mudah tertanggal daripada soket.",
    ],
    solutions: [
      { title: "Diagnosis soket dan litar", description: "Kami menguji sama ada masalah pada soket itu sendiri atau pada litar yang membekalkannya." },
      { title: "Ganti soket", description: "Soket yang haus atau rosak diganti dengan unit baharu yang sesuai." },
      { title: "Baiki sambungan longgar", description: "Terminal dikemaskan semula dan kabel diperiksa untuk tanda haba berlebihan." },
      { title: "Semak beban litar", description: "Jika soket kerap terlebih beban, kami cadangkan litar tambahan." },
    ],
    whenToCall: [
      "Soket langsung tidak berfungsi.",
      "Soket panas, berpercikan atau berbau hangus.",
      "Plug longgar atau kerap tertanggal.",
      "Beberapa soket pada litar yang sama tidak berfungsi.",
    ],
    relatedServiceNote:
      "Pembaikan soket dikendalikan oleh pasukan elektrik kami bersama ujian litar untuk mengesahkan tiada masalah lain.",
    processTitle: "Cara Kami Membaiki Soket Rosak",
    processIntro: "Soket diasingkan dan diuji dahulu sebelum sebarang penggantian dibuat.",
    processSteps: [
      { title: "Asingkan dan uji", description: "Bekalan dimatikan dan titik itu diuji untuk mengesahkan keadaannya." },
      { title: "Periksa pendawaian", description: "Terminal dan kabel di belakang soket diperiksa untuk kerosakan haba." },
      { title: "Ganti soket", description: "Soket baharu dipasang dengan sambungan yang kemas dan kukuh." },
      { title: "Uji dan hidupkan semula", description: "Titik diuji semula sebelum bekalan dipulihkan." },
    ],
    faqs: [
      { question: "Boleh soket rosak dibaiki atau perlu diganti?", answer: "Jika masalahnya hanya sambungan longgar, ia boleh dibaiki. Jika badan soket sudah hangus, haus atau retak, penggantian lebih selamat." },
      { question: "Kenapa soket saya berpercikan apabila plug dimasukkan?", answer: "Percikan kecil sesekali boleh berlaku, tetapi percikan berulang menunjukkan sesentuh yang haus atau sambungan longgar dan patut diperiksa." },
      { question: "Adakah soket yang panas berbahaya?", answer: "Ya. Haba menunjukkan rintangan pada sambungan atau beban berlebihan. Berhenti menggunakan soket itu dan hubungi kami." },
      { question: "Berapa banyak soket sesuai untuk satu litar?", answer: "Ia bergantung pada kadar litar dan jenis peralatan yang disambung. Kami mengira beban sebenar sebelum mencadangkan soket tambahan." },
    ],
  },
  "faulty-switch": {
    ...base,
    name: "Suis Rosak",
    title: "Renovix Home Services | Suis Rosak di KL & Selangor",
    metaDescription:
      "Suis yang berpercikan, panas atau tidak berfungsi diganti dengan selamat di Kuala Lumpur & Selangor. Ketahui punca, tanda amaran dan penyelesaian.",
    h1: "Suis Rosak",
    subtitle:
      "Suis yang berpercikan, membuatkan lampu berkelip atau terasa panas ialah masalah pendawaian. Renovix menggantikannya dengan selamat dan mengujinya.",
    whatItMeans: [
      "Suis rosak ialah suis dinding yang tidak lagi berfungsi, menyebabkan lampu berkelip, terasa panas atau mengeluarkan percikan apabila digunakan. Suis ialah alat yang ringkas, jadi kerosakannya mudah disedari — tetapi puncanya biasanya di belakang suis, bukan pada suis itu sendiri.",
      "Terminal longgar, sesentuh yang haus atau kabel yang rosak boleh menjadikan suis bertindak tidak menentu.",
    ],
    commonCauses: [
      "Terminal atau wayar longgar di belakang suis.",
      "Mekanisme suis yang haus dan tidak lagi bersentuh dengan baik.",
      "Suis yang tidak sesuai atau kadarnya terlalu rendah untuk beban tersebut.",
      "Mekanisme suis yang patah atau rocker yang tercabut.",
      "Kabel yang rosak di dalam dinding yang membekalkan suis.",
      "Litar suis dua hala yang tersalah didawai.",
    ],
    warningSigns: [
      "Suis tidak lagi menghidupkan atau memadamkan lampu.",
      "Lampu berkelip atau malap apabila suis digunakan.",
      "Suis terasa panas semasa digunakan.",
      "Bunyi percikan kedengaran apabila suis ditekan.",
    ],
    solutions: [
      { title: "Diagnosis suis dan litar", description: "Kami mengesahkan sama ada masalah pada suis, pendawaian atau lekapan lampu." },
      { title: "Ganti suis", description: "Suis baharu dengan kadar yang betul dipasang dan dikemaskan." },
      { title: "Baiki pendawaian", description: "Terminal longgar dikemaskan dan kabel yang rosak diganti." },
      { title: "Semak susun atur suis", description: "Litar dua hala disemak dan didawai semula jika perlu." },
    ],
    whenToCall: [
      "Suis langsung tidak berfungsi.",
      "Suis panas, berpercikan atau berbau hangus.",
      "Lampu berkelip atau malap setiap kali suis digunakan.",
      "Suis longgar atau plate tertanggal dari dinding.",
    ],
    relatedServiceNote:
      "Penggantian suis dikendalikan oleh pasukan elektrik kami, termasuk pemeriksaan lekapan lampu yang berkaitan.",
    processTitle: "Cara Kami Menggantikan Suis Rosak",
    processIntro: "Kerja bermula dengan mematikan litar dan mengesahkan keadaan pendawaian.",
    processSteps: [
      { title: "Asingkan litar", description: "Bekalan dimatikan di papan agihan sebelum suis dibuka." },
      { title: "Uji dan periksa", description: "Terminal dan kabel diperiksa untuk kerosakan haba atau sambungan longgar." },
      { title: "Ganti dan kemaskan", description: "Suis baharu dipasang, dikemaskan dan plate dipasang rata." },
      { title: "Uji fungsi", description: "Semua kedudukan suis diuji sebelum kerja diserahkan." },
    ],
    faqs: [
      { question: "Kenapa suis saya terasa panas?", answer: "Haba biasanya menunjukkan sambungan longgar atau suis yang kadarnya terlalu rendah untuk beban. Ia patut diperiksa dengan segera." },
      { question: "Boleh suis rosak dibaiki dan bukan diganti?", answer: "Jika hanya terminal longgar, ia boleh dikemaskan. Jika mekanisme dalaman sudah haus, penggantian lebih boleh diharap." },
      { question: "Kenapa suis menyebabkan lampu berkelip?", answer: "Sesentuh yang haus di dalam suis menyebabkan sambungan terputus-putus, dan lampu berkelip mengikutnya." },
      { question: "Adakah suis dua hala lebih mudah rosak?", answer: "Tidak semestinya, tetapi litarnya lebih rumit, jadi kesilapan pendawaian lebih mudah berlaku semasa pemasangan." },
    ],
  },
  "flickering-lights": {
    ...base,
    name: "Lampu Berkelip",
    title: "Renovix Home Services | Lampu Berkelip di KL & Selangor",
    metaDescription:
      "Lampu berkelip dijejak sehingga ke punca litar di Kuala Lumpur & Selangor. Ketahui punca biasa, tanda amaran dan bila perlu memanggil juruelektrik.",
    h1: "Lampu Berkelip",
    subtitle:
      "Lampu berkelip selalunya masalah pendawaian, bukan masalah mentol. Renovix menjejak puncanya dan membaikinya pada litar.",
    whatItMeans: [
      "Lampu berkelip ialah lampu yang malap, berdenyut atau hidup-mati secara berselang. Ia mudah dianggap sebagai mentol longgar, tetapi kelipan yang berterusan biasanya menunjukkan masalah sambungan atau pendawaian pada litar tersebut.",
      "Corak kelipan memberi petunjuk: satu lampu yang berkelip berbeza daripada beberapa lampu yang malap serentak apabila penghawa dingin atau pemanas air dihidupkan.",
    ],
    commonCauses: [
      "Mentol longgar atau sesentuh yang lemah pada pemegang lampu.",
      "Sambungan longgar pada suis atau lekapan lampu.",
      "Litar terlebih beban yang menyebabkan voltan turun apabila peralatan berjalan.",
      "Dimmer yang rosak atau mentol yang tidak serasi dengannya.",
      "Pendawaian lama dengan sambungan yang lemah.",
      "Sambungan longgar di dalam papan agihan.",
    ],
    warningSigns: [
      "Lampu berkelip secara konsisten, bukan sekali-sekala.",
      "Lampu malap apabila penghawa dingin atau pemanas air mula berjalan.",
      "Beberapa lampu berkelip pada masa yang sama.",
      "Kelipan disertai haba, percikan atau bau hangus.",
    ],
    solutions: [
      { title: "Tentukan skop masalah", description: "Kami menyemak sama ada satu lampu sahaja atau beberapa lampu pada litar yang sama terjejas." },
      { title: "Periksa lekapan dan suis", description: "Pemegang lampu, suis dan sambungan berkaitan diperiksa." },
      { title: "Kemaskan dan baiki sambungan", description: "Sambungan longgar dikemaskan dan kabel yang lemah diganti." },
      { title: "Tangani beban litar", description: "Jika voltan turun kerana beban, kami cadangkan pengagihan semula atau litar tambahan." },
    ],
    whenToCall: [
      "Lampu terus berkelip walaupun mentol sudah ditukar.",
      "Lampu di seluruh rumah malap apabila peralatan besar berjalan.",
      "Kelipan disertai haba, percikan atau bau hangus.",
      "Kelipan kelihatan berpunca daripada papan agihan.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan elektrik kami, termasuk pemeriksaan papan agihan apabila beberapa litar terjejas.",
    processTitle: "Cara Kami Menjejak Lampu Berkelip",
    processIntro: "Kelipan ialah gejala, jadi kami menjejaknya dari lekapan sehingga ke papan agihan.",
    processSteps: [
      { title: "Uji lampu dan litar", description: "Kami mengesahkan sama ada masalah pada lekapan atau litar." },
      { title: "Periksa sambungan", description: "Suis, pemegang lampu dan kotak sambungan diperiksa." },
      { title: "Baiki punca", description: "Sambungan dibaiki atau komponen yang rosak diganti." },
      { title: "Sahkan pembaikan", description: "Litar diperhatikan di bawah beban untuk memastikan kelipan berhenti." },
    ],
    faqs: [
      { question: "Adakah lampu berkelip berbahaya?", answer: "Kelipan sekali-sekala biasanya tidak, tetapi kelipan berterusan menunjukkan sambungan longgar yang boleh menjana haba dan patut diperiksa." },
      { question: "Kenapa lampu malap apabila penghawa dingin dihidupkan?", answer: "Peralatan besar menarik arus tinggi semasa mula berjalan. Jika kelipan itu ketara, ia menunjukkan litar itu terlalu dibebani atau sambungan sudah lemah." },
      { question: "Mungkinkah ia hanya mentol rosak?", answer: "Boleh jadi. Tukar mentol dahulu — jika kelipan berterusan, masalahnya berada pada lekapan, suis atau litar." },
      { question: "Kenapa lampu LED berkelip secara berbeza?", answer: "LED sensitif kepada dimmer yang tidak serasi dan turun naik voltan kecil, jadi ia kadangkala berkelip walaupun litar itu elok." },
    ],
  },
  "short-circuit": {
    ...base,
    name: "Litar Pintas",
    title: "Renovix Home Services | Litar Pintas di KL & Selangor",
    metaDescription:
      "Litar pintas dikesan dan dibaiki dengan selamat di Kuala Lumpur & Selangor. Ketahui punca, tanda amaran dan apa yang perlu dilakukan segera.",
    h1: "Litar Pintas",
    subtitle:
      "Litar pintas ialah kerosakan elektrik yang sebenar. Renovix mengesan dan membaikinya dengan selamat — ia bukan masalah yang patut di-reset berulang kali.",
    whatItMeans: [
      "Litar pintas berlaku apabila wayar hidup bersentuhan dengan wayar neutral atau bumi, membentuk laluan rintangan yang sangat rendah. Arus yang sangat besar mengalir, dan breaker direka untuk memutuskannya dengan segera.",
      "Ia boleh berlaku di dalam peralatan, pada kabel yang rosak, atau pada pendawaian di sebalik dinding dan soket. Kerana arusnya tinggi, litar pintas berisiko menyebabkan kebakaran jika diabaikan.",
    ],
    commonCauses: [
      "Wayar hidup bersentuhan dengan neutral atau bumi di dalam kabel atau lekapan.",
      "Penebat yang rosak atau tersepit pada soket, suis atau kotak sambungan.",
      "Peralatan rosak dengan pendawaian dalaman yang pintas.",
      "Air atau kelembapan masuk ke dalam soket, peralatan atau kotak sambungan.",
      "Pendawaian lama yang penebatnya sudah rapuh.",
      "Sambungan longgar yang membenarkan wayar bersentuhan pada laluan yang salah.",
    ],
    warningSigns: [
      "Breaker trip serta-merta dan tidak boleh di-reset.",
      "Bau hangus, asap atau bunyi letupan kecil pada soket.",
      "Percikan pada soket, suis atau peralatan.",
      "Soket atau peralatan berhenti berfungsi selepas trip.",
    ],
    solutions: [
      { title: "Kesan lokasi pintas", description: "Litar diasingkan dan diuji bahagian demi bahagian untuk mengesan titik kerosakan." },
      { title: "Baiki pendawaian rosak", description: "Kabel atau lekapan yang rosak dibaiki atau diganti." },
      { title: "Ganti peralatan rosak", description: "Jika puncanya peralatan, kami mengesahkannya supaya ia tidak disambung semula." },
      { title: "Sahkan perlindungan litar", description: "Breaker dan perlindungan kebocoran arus diperiksa selepas pembaikan." },
    ],
    whenToCall: [
      "Breaker trip serta-merta dan tidak mahu di-reset.",
      "Terdapat bau hangus, asap atau percikan.",
      "Soket atau peralatan rosak dan berbau terbakar.",
      "Anda sudah reset breaker tetapi kerosakan yang sama berulang.",
    ],
    relatedServiceNote:
      "Litar pintas dikendalikan oleh pasukan elektrik kami dengan ujian litar penuh sebelum bekalan dipulihkan.",
    processTitle: "Cara Kami Membaiki Litar Pintas",
    processIntro: "Keselamatan didahulukan: litar diasingkan sebelum sebarang ujian dijalankan.",
    processSteps: [
      { title: "Asingkan litar terjejas", description: "Bekalan ke litar itu dimatikan sepenuhnya." },
      { title: "Uji untuk mengesan pintas", description: "Bahagian litar diuji satu per satu untuk mengecilkan lokasi." },
      { title: "Baiki atau ganti", description: "Kabel, lekapan atau peralatan yang rosak dibaiki atau diganti." },
      { title: "Uji semula dan pulihkan", description: "Litar diuji semula sebelum bekalan dihidupkan." },
    ],
    faqs: [
      { question: "Apa patut saya buat jika saya mengesyaki litar pintas?", answer: "Biarkan breaker dalam keadaan mati, cabut peralatan pada litar itu, jangan reset berulang kali, dan hubungi juruelektrik." },
      { question: "Apa beza litar pintas dan beban berlebihan?", answer: "Beban berlebihan bermakna terlalu banyak peralatan pada satu litar. Litar pintas ialah kerosakan sebenar pada pendawaian atau peralatan, dan biasanya menyebabkan trip serta-merta." },
      { question: "Boleh litar pintas menyebabkan kebakaran?", answer: "Boleh, jika perlindungan litar tidak berfungsi dengan betul. Itulah sebabnya breaker dan perlindungan kebocoran arus penting." },
      { question: "Kenapa peralatan baharu menyebabkan litar pintas?", answer: "Peralatan baharu boleh mempunyai kerosakan kilang, atau menarik beban yang lebih tinggi daripada kemampuan litar sedia ada." },
    ],
  },
  "old-house-wiring": {
    ...base,
    name: "Pendawaian Rumah Lama",
    title: "Renovix Home Services | Pendawaian Rumah Lama di KL & Selangor",
    metaDescription:
      "Pendawaian rumah lama diperiksa dan didawai semula dengan selamat di Kuala Lumpur & Selangor. Ketahui tanda amaran dan pilihan pendawaian penuh atau separa.",
    h1: "Pendawaian Rumah Lama",
    subtitle:
      "Pendawaian yang dipasang berdekad lalu tidak pernah direka untuk beban hari ini. Renovix menilai pendawaian lama dan mendawai semula rumah dengan selamat.",
    whatItMeans: [
      "Pendawaian rumah lama merujuk kepada pendawaian yang dipasang bertahun-tahun lalu dan tidak pernah dinaik taraf untuk beban penghawa dingin, pemanas air dan peralatan dapur moden. Litarnya lebih sedikit, soketnya lebih sedikit, dan perlindungan kebocoran arus mungkin tiada.",
      "Dengan berlalunya masa, penebat kabel juga menjadi keras dan rapuh. Ia mungkin masih berfungsi, tetapi margin keselamatannya semakin mengecil setiap tahun.",
    ],
    commonCauses: [
      "Penebat yang sudah tua, keras dan rapuh.",
      "Pendawaian bersaiz kecil yang jauh di bawah keperluan rumah moden.",
      "Papan agihan tanpa perlindungan bumi atau RCCB yang betul.",
      "Kerja hacking atau renovasi lalu yang merosakkan kabel tersembunyi.",
      "Tambahan litar selama bertahun-tahun dengan sambungan yang tidak kemas.",
      "Soket yang tidak pernah dibumikan.",
    ],
    warningSigns: [
      "Papan agihan masih menggunakan fius lama tanpa perlindungan RCCB.",
      "Trip kerap, soket panas, lampu berkelip atau bau hangus.",
      "Terlalu sedikit titik kuasa sehingga extension digunakan di mana-mana.",
      "Pendawaian yang jelas berasal daripada renovasi lama.",
    ],
    solutions: [
      { title: "Nilai pendawaian sedia ada", description: "Kami memeriksa papan agihan, keadaan kabel dan perlindungan yang ada." },
      { title: "Pendawaian semula penuh atau separa", description: "Skop dicadangkan mengikut keadaan sebenar, bukan secara automatik seluruh rumah." },
      { title: "Naik taraf papan agihan", description: "Papan agihan baharu dengan litar berlabel dan perlindungan yang sesuai." },
      { title: "Tambah soket dan titik berbumi", description: "Titik kuasa tambahan dipasang supaya extension tidak lagi diperlukan." },
    ],
    whenToCall: [
      "Pendawaian masih yang asal dan tidak pernah dinaik taraf.",
      "Terdapat tanda trip kerap, soket panas atau lampu berkelip.",
      "Papan agihan menggunakan fius lama tanpa perlindungan kebocoran arus.",
      "Anda merancang renovasi yang akan membuka dinding dan siling.",
    ],
    relatedServiceNote:
      "Kerja pendawaian semula dikendalikan oleh pasukan elektrik kami dan diselaraskan dengan kerja siling serta cat semasa renovasi.",
    processTitle: "Cara Kami Mengendalikan Pendawaian Lama",
    processIntro: "Kami menilai dahulu supaya anda tidak membayar untuk kerja yang tidak diperlukan.",
    processSteps: [
      { title: "Tinjau pendawaian", description: "Keadaan kabel, litar dan papan agihan diperiksa." },
      { title: "Rancang skop", description: "Kami cadangkan pendawaian penuh atau separa berserta kosnya." },
      { title: "Laksanakan pendawaian", description: "Kabel baharu ditarik dan titik dipasang mengikut rancangan." },
      { title: "Uji dan serahkan", description: "Setiap litar diuji, dilabel dan diterangkan kepada anda." },
    ],
    faqs: [
      { question: "Bagaimana saya tahu rumah perlu didawai semula?", answer: "Tanda biasa termasuk trip kerap, soket panas, papan agihan lama tanpa RCCB, dan pendawaian yang tidak pernah diganti sejak rumah dibina." },
      { question: "Adakah pendawaian semula mengganggu penghuni?", answer: "Pendawaian semula penuh melibatkan hacking dinding atau siling, jadi ia memang mengganggu. Kerja separa boleh dirancang mengikut bahagian supaya rumah masih boleh dihuni." },
      { question: "Apa itu perlindungan RCCB dan kenapa ia penting?", answer: "RCCB memutuskan bekalan apabila mengesan kebocoran arus ke bumi, contohnya melalui peralatan basah. Ia melindungi penghuni daripada renjatan elektrik." },
      { question: "Patutkah saya dawai semula sebelum atau selepas renovasi?", answer: "Sebelum kemasan dibuat. Semasa dinding dan siling terbuka ialah masa paling menjimatkan untuk menarik kabel baharu." },
    ],
  },
  "insufficient-power-points": {
    ...base,
    name: "Kekurangan Titik Kuasa",
    title: "Renovix Home Services | Kekurangan Titik Kuasa di KL & Selangor",
    metaDescription:
      "Soket tambahan dipasang dengan pendawaian yang betul di Kuala Lumpur & Selangor supaya anda tidak lagi bergantung pada extension. Punca dan penyelesaian.",
    h1: "Kekurangan Titik Kuasa",
    subtitle:
      "Soket yang terlalu sedikit bermakna extension dan litar terlebih beban. Renovix memasang titik kuasa yang didawai dengan betul di tempat yang anda perlukan.",
    whatItMeans: [
      "Kekurangan titik kuasa ialah situasi biasa apabila sesebuah bilik tidak mempunyai cukup soket untuk peralatan yang benar-benar digunakan. Akibatnya, extension dan adaptor bercabang digunakan di merata tempat.",
      "Ia bukan sekadar menyusahkan. Terlalu banyak peralatan pada satu titik boleh menyebabkan soket menjadi panas, litar trip, dan kabel extension yang melintasi laluan berjalan menjadi risiko tersadung.",
    ],
    commonCauses: [
      "Rumah yang didawai ketika peralatan elektrik jauh lebih sedikit digunakan.",
      "Susun atur bilik yang menjadikan soket sedia ada berada di tempat yang salah.",
      "Soket yang hilang semasa renovasi atau kerja partisyen lalu.",
      "Keluarga yang membesar atau ruang kerja di rumah yang menambah peranti.",
      "Penggunaan adaptor bercabang sebagai ganti titik kuasa sebenar.",
      "Pergantungan kepada kabel extension yang melintasi lantai.",
    ],
    warningSigns: [
      "Adaptor bercabang atau extension digunakan setiap hari.",
      "Satu soket menampung banyak peranti dan menjadi panas atau trip.",
      "Peralatan perlu dicabut bergilir-gilir untuk digunakan.",
      "Kabel bersepah di atas lantai dan menjadi risiko tersadung.",
    ],
    solutions: [
      { title: "Rancang lokasi titik baharu", description: "Kami merancang kedudukan soket mengikut cara ruang itu benar-benar digunakan." },
      { title: "Tambah soket pada litar yang sesuai", description: "Titik baharu disambung pada litar yang mampu menampung beban tambahan." },
      { title: "Tambah litar khusus untuk beban tinggi", description: "Peralatan seperti pemanas air dan penghawa dingin diberikan litar tersendiri." },
      { title: "Pemasangan permukaan atau tersembunyi", description: "Kami cadangkan trunking atau kerja tersembunyi mengikut keadaan dinding anda." },
    ],
    whenToCall: [
      "Anda bergantung pada extension atau adaptor setiap hari.",
      "Soket terlebih beban, panas atau trip apabila lebih banyak peranti disambung.",
      "Anda sedang menyediakan ruang kerja, naik taraf dapur atau memasang peralatan baharu.",
      "Anda mahu soket dialih atau ditambah sebagai sebahagian daripada renovasi.",
    ],
    relatedServiceNote:
      "Kerja menambah titik kuasa dikendalikan oleh pasukan elektrik kami dan boleh diselaraskan dengan kerja renovasi yang sedang berjalan.",
    processTitle: "Cara Kami Menambah Titik Kuasa",
    processIntro: "Kami mengira beban dahulu supaya soket baharu tidak menimbulkan masalah baharu.",
    processSteps: [
      { title: "Nilai susun atur dan beban", description: "Kami menyemak litar sedia ada dan peralatan yang akan disambung." },
      { title: "Rancang laluan kabel", description: "Laluan yang paling kemas dipilih, sama ada tersembunyi atau menggunakan trunking." },
      { title: "Pasang dan dawai soket", description: "Titik kuasa dipasang dan disambung dengan kemas." },
      { title: "Uji dan kemas", description: "Titik diuji, dinding dikemas dan kawasan kerja dibersihkan." },
    ],
    faqs: [
      { question: "Selamatkah menggunakan adaptor bercabang di mana-mana?", answer: "Ia selamat untuk beban ringan sahaja. Untuk peralatan berkuasa tinggi seperti cerek, ketuhar atau pemanas, titik kuasa sebenar lebih selamat." },
      { question: "Berapa banyak soket boleh ditambah dalam satu bilik?", answer: "Ia bergantung pada kadar litar dan beban yang dijangka. Kami mengira jumlahnya sebelum mencadangkan bilangan titik baharu." },
      { question: "Boleh tambah soket tanpa hacking dinding?", answer: "Boleh. Trunking permukaan ialah penyelesaian yang kemas dan cepat apabila hacking tidak sesuai atau tidak dibenarkan." },
      { question: "Perlukah pendawaian baharu untuk menambah soket?", answer: "Tidak semestinya. Jika litar sedia ada mempunyai kapasiti, soket boleh disambungkan daripadanya. Untuk beban tinggi, litar baharu diperlukan." },
    ],
  },
  "ceiling-fan-wiring-problems": {
    ...base,
    name: "Masalah Pendawaian Kipas Siling",
    title: "Renovix Home Services | Masalah Pendawaian Kipas Siling di KL & Selangor",
    metaDescription:
      "Kipas siling yang tidak berputar, berpercikan atau tiada bekalan dibaiki di Kuala Lumpur & Selangor, termasuk pemasangan titik kipas baharu.",
    h1: "Masalah Pendawaian Kipas Siling",
    subtitle:
      "Kipas siling yang tidak berputar, berpercikan atau tiada bekalan ialah masalah pendawaian. Renovix mendawai dan membaiki kipas dengan selamat.",
    whatItMeans: [
      "Masalah pendawaian kipas siling merujuk kepada kes di mana kipas tidak berfungsi kerana sambungan elektrik, bukan kerana unit kipas itu sendiri. Ia termasuk titik kipas tanpa bekalan, kipas yang tidak mahu hidup, atau kipas yang trip breaker.",
      "Kerana kipas siling ialah lekapan tetap, masalahnya berkait dengan litar, titik kipas dan suis yang mengawalnya — dan semuanya perlu diuji sebelum kipas diganti.",
    ],
    commonCauses: [
      "Titik kipas tanpa bekalan hidup, atau switched live yang tidak disambung.",
      "Pendawaian longgar atau tersalah sambung di siling atau pada suis.",
      "Kapasitor atau regulator kipas yang sudah rosak.",
      "Fungsi lampu atau alat kawalan jauh yang memerlukan pendawaian tambahan.",
      "Titik kipas sedia ada yang tidak sesuai untuk kipas yang lebih berat.",
      "Litar yang trip apabila kipas dihidupkan kerana kerosakan.",
    ],
    warningSigns: [
      "Kipas tidak berputar walaupun suis dihidupkan.",
      "Kipas berpercikan atau menyebabkan breaker trip.",
      "Kipas berputar tidak menentu atau berhenti selepas beberapa ketika.",
      "Titik kipas langsung tiada bekalan, termasuk lampunya.",
    ],
    solutions: [
      { title: "Semak bekalan dan suis", description: "Kami menguji titik kipas dan suis untuk mengesahkan bekalan sampai ke situ." },
      { title: "Dawai kipas dengan betul", description: "Sambungan hidup, neutral, bumi dan switched live disemak dan dikemaskan." },
      { title: "Ganti kapasitor atau regulator", description: "Komponen yang rosak diganti jika itu puncanya." },
      { title: "Pasang kipas atau titik baharu", description: "Titik kipas baharu dipasang dengan sokongan siling yang mencukupi." },
    ],
    whenToCall: [
      "Kipas tidak mahu hidup walaupun suis dihidupkan.",
      "Kipas berpercikan, trip breaker atau berbau hangus.",
      "Anda memasang kipas baharu, terutamanya yang mempunyai lampu atau remote.",
      "Titik kipas tiada bekalan dan perlu didawai.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan elektrik kami dan diselaraskan dengan kerja siling jika sokongan tambahan diperlukan.",
    processTitle: "Cara Kami Mengendalikan Pendawaian Kipas Siling",
    processIntro: "Titik kipas diuji dahulu supaya kami tahu sama ada masalahnya pada bekalan atau pada kipas.",
    processSteps: [
      { title: "Asingkan dan uji titik", description: "Bekalan dimatikan dan titik kipas diuji." },
      { title: "Dawai kipas dengan betul", description: "Sambungan dibuat mengikut susunan yang betul dan dikemaskan." },
      { title: "Uji semua fungsi", description: "Kelajuan, lampu dan alat kawalan jauh diuji." },
      { title: "Kemas dan serahkan", description: "Kawasan kerja dibersihkan dan kipas diserahkan dalam keadaan berfungsi." },
    ],
    faqs: [
      { question: "Kenapa kipas baharu saya tidak berfungsi sedangkan yang lama berfungsi?", answer: "Kipas baharu selalunya memerlukan sambungan tambahan untuk lampu atau remote. Jika titik sedia ada hanya mempunyai dua wayar, pendawaian tambahan diperlukan." },
      { question: "Boleh guna titik kipas sedia ada untuk kipas berlampu?", answer: "Boleh jika terdapat switched live yang mencukupi atau kipas itu dikawal sepenuhnya melalui remote. Kami akan mengesahkannya semasa pemeriksaan." },
      { question: "Kenapa kipas menyebabkan breaker trip?", answer: "Biasanya kerana kerosakan pada motor, kapasitor atau pendawaian yang tersalah sambung. Ia perlu diuji sebelum kipas digunakan semula." },
      { question: "Apa fungsi kapasitor pada kipas siling?", answer: "Kapasitor membantu motor bermula dan mengekalkan kelajuan. Apabila ia rosak, kipas mungkin berdengung tetapi tidak berputar." },
    ],
  },
};
