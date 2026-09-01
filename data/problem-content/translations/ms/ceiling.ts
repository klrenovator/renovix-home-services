import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Siling plaster dan siling gypsum yang menunjukkan kesan usia serta kebocoran bumbung." },
  { label: "Kondominium", note: "Kerja siling dalam unit termasuk kes bocor daripada unit di atas." },
  { label: "Pangsapuri", note: "Pembaikan siling setempat dan penggantian panel yang rosak." },
  { label: "Semi-D & Banglo", note: "Rentang siling yang lebih luas dan siling dengan pelbagai aras." },
  { label: "Pejabat & Kedai", note: "Siling gantung dan panel yang perlu dibaiki tanpa mengganggu operasi." },
  { label: "Projek Renovasi", note: "Kerja siling yang diselaraskan dengan lampu, penghawa dingin dan kerja cat." },
];

const areasNote =
  "Kerja pembaikan dan penggantian siling tersedia di seluruh Kuala Lumpur, Selangor dan Lembah Klang.";

const propertyTypesIntro =
  "Jenis siling dan punca kerosakan menentukan sama ada ia perlu dibaiki atau diganti.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "cracked-ceiling": {
    ...base,
    name: "Siling Retak",
    title: "Renovix Home Services | Siling Retak di KL & Selangor",
    metaDescription:
      "Siling retak dibaiki di Kuala Lumpur & Selangor, dengan nasihat jujur bila papan siling perlu diganti. Punca, tanda amaran dan penyelesaian.",
    h1: "Siling Retak",
    subtitle:
      "Siling yang retak boleh merebak dan dalam kes terburuk, gugur. Renovix membaiki retak siling dan memberitahu bila papan perlu diganti.",
    whatItMeans: [
      "Siling retak ialah keretakan pada kemasan siling, selalunya pada papan gipsum atau siling plaster. Ia berbeza daripada retak rambut halus sehinggalah retak yang lebih lebar di sepanjang sambungan papan.",
      "Retak halus selalunya kesan enapan bangunan atau pergerakan rangka siling. Retak yang membesar, atau yang disertai lendutan dan tompok air, perlu perhatian lebih segera.",
    ],
    commonCauses: [
      "Enapan dan pergerakan bangunan dari masa ke masa.",
      "Rangka siling yang mengecut atau bergerak sedikit.",
      "Bahan sambungan yang terlalu nipis atau kering terlalu cepat.",
      "Pergerakan pada pertemuan siling dengan dinding.",
      "Kerosakan air yang melemahkan papan sehingga ia melendut dan retak.",
      "Siling lama yang sudah menjadi rapuh.",
    ],
    warningSigns: [
      "Retak yang semakin panjang atau lebar dari masa ke masa.",
      "Retak disertai tompok air atau bahagian yang membonjol.",
      "Retak pada sambungan yang terbuka di hujung atau tepi.",
      "Sebahagian siling kelihatan mula melendut.",
    ],
    solutions: [
      { title: "Nilai retakan", description: "Kami menyemak sama ada ia retak kemasan atau tanda papan sudah lemah." },
      { title: "Baiki sambungan atau papan", description: "Sambungan diperkukuh semula, atau papan yang rosak diganti." },
      { title: "Selesaikan isu air", description: "Jika terdapat kebocoran, sumbernya perlu dihentikan dahulu." },
      { title: "Kemas dan cat semula", description: "Permukaan diratakan dan dicat supaya kelihatan seperti asal." },
    ],
    whenToCall: [
      "Retak siling semakin melebar atau muncul dalam corak tertentu.",
      "Retak disertai lendutan, tompok atau bonjolan.",
      "Sebahagian siling mula turun.",
      "Siling sudah lama dan anda bimbang tentang keadaannya.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan siling kami, termasuk kerja cat selepas pembaikan.",
    processTitle: "Cara Kami Membaiki Siling Retak",
    processIntro: "Kami menyemak keadaan papan dahulu supaya pembaikan tidak sekadar menutup masalah.",
    processSteps: [
      { title: "Periksa retak dan papan", description: "Kami menilai keadaan papan dan sokongan di atasnya." },
      { title: "Baiki atau ganti", description: "Bahagian yang lemah diperkukuh atau diganti." },
      { title: "Kemas permukaan", description: "Sambungan ditampal dan diratakan." },
      { title: "Cat dan serahkan", description: "Kawasan dicat semula dan tapak dibersihkan." },
    ],
    faqs: [
      { question: "Adakah retak siling perkara biasa?", answer: "Retak rambut halus adalah biasa akibat pergerakan bangunan. Retak yang membesar atau disertai lendutan perlu diperiksa." },
      { question: "Bolehkah siling retak gugur?", answer: "Retak halus jarang membahayakan, tetapi retak yang disertai lendutan atau kerosakan air boleh membawa kepada sebahagian siling gugur." },
      { question: "Kenapa retak muncul di garis sambungan?", answer: "Sambungan papan ialah titik paling banyak bergerak, jadi tekanan terkumpul di situ terlebih dahulu." },
      { question: "Perlukah retak dibaiki sebelum mengecat?", answer: "Ya. Mengecat di atas retak hanya menyembunyikannya buat sementara sebelum ia muncul semula." },
    ],
  },
  "sagging-ceiling": {
    ...base,
    name: "Siling Melendut",
    title: "Renovix Home Services | Siling Melendut di KL & Selangor",
    metaDescription:
      "Siling melendut diperiksa dan dibaiki di Kuala Lumpur & Selangor sebelum ia gugur. Punca, tanda amaran dan penyelesaian.",
    h1: "Siling Melendut",
    subtitle:
      "Siling yang melendut ialah amaran keselamatan. Renovix mencari puncanya dan membaiki atau menggantikan siling sebelum ia gagal.",
    whatItMeans: [
      "Siling melendut ialah siling yang turun, membonjol atau melentur di bawah aras asalnya. Ia berbeza daripada retak kecil kerana bentuk siling itu sendiri sudah berubah.",
      "Lendutan bermakna papan atau sokongannya sedang gagal. Ia patut diambil serius kerana bahagian yang melendut boleh terus turun sehingga gugur.",
    ],
    commonCauses: [
      "Air bertakung di atas atau di sebalik papan akibat bumbung atau paip bocor.",
      "Papan yang tidak disokong dengan betul pada rentang yang panjang.",
      "Pengikat lama yang tidak lagi mampu menahan berat siling.",
      "Siling plaster lama yang hilang kekuatan.",
      "Papan menjadi lembut akibat kelembapan berpanjangan.",
      "Beban tambahan daripada lampu atau kelengkapan lain.",
    ],
    warningSigns: [
      "Lentur atau lekukan yang jelas kelihatan pada siling.",
      "Bonjolan atau tompok air yang semakin membesar.",
      "Retak yang terbentuk di sekeliling kawasan melendut.",
      "Serbuk atau serpihan plaster gugur, atau siling terasa lembut.",
    ],
    solutions: [
      { title: "Nilai tahap dan punca", description: "Kami memeriksa keluasan lendutan dan keadaan sokongan di atas." },
      { title: "Hentikan punca air", description: "Kebocoran dikesan dan dihentikan sebelum pembaikan siling." },
      { title: "Baiki atau ganti siling", description: "Bahagian yang lemah dibuang dan papan baharu dipasang." },
      { title: "Pasang semula dan kemas", description: "Sambungan ditampal, diratakan dan dicat semula." },
    ],
    whenToCall: [
      "Siling melendut atau membonjol dengan jelas.",
      "Terdapat bonjolan atau tompok air di kawasan lendutan.",
      "Serbuk plaster gugur daripada bahagian yang turun.",
      "Anda bimbang siling itu boleh gugur.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan siling kami, dengan sokongan kerja paip atau kalis air jika air menjadi punca.",
    processTitle: "Cara Kami Membaiki Siling Melendut",
    processIntro: "Keselamatan dahulu: kawasan yang melendut diperiksa sebelum sebarang kerja bermula.",
    processSteps: [
      { title: "Nilai siling", description: "Kami menyemak keluasan lendutan dan keadaan rangka." },
      { title: "Tangani puncanya", description: "Kebocoran atau sokongan yang gagal diselesaikan dahulu." },
      { title: "Ganti bahagian terjejas", description: "Papan yang rosak dibuang dan diganti dengan sokongan betul." },
      { title: "Kemas dan cat", description: "Permukaan diratakan, dicat dan tapak dibersihkan." },
    ],
    faqs: [
      { question: "Adakah siling melendut satu kecemasan?", answer: "Ia perlu diperiksa segera. Elakkan kawasan di bawahnya dan alihkan barang sehingga ia diperiksa." },
      { question: "Apa punca siling melendut?", answer: "Paling kerap air daripada kebocoran, papan yang lemah, atau pengikat dan sokongan yang sudah gagal." },
      { question: "Boleh siling melendut dibaiki atau perlu diganti?", answer: "Lendutan kecil kadangkala boleh disokong semula, tetapi papan yang sudah lembut atau rosak air lebih selamat diganti." },
      { question: "Adakah lendutan akan bertambah teruk?", answer: "Ya, jika puncanya masih ada. Papan yang lembap akan terus turun sehingga sebahagiannya gugur." },
    ],
  },
  "water-damaged-ceiling": {
    ...base,
    name: "Siling Rosak Air",
    title: "Renovix Home Services | Siling Rosak Air di KL & Selangor",
    metaDescription:
      "Siling rosak air dibaiki di Kuala Lumpur & Selangor selepas punca kebocoran dikesan dan dihentikan. Punca, tanda dan penyelesaian.",
    h1: "Siling Rosak Air",
    subtitle:
      "Kerosakan air pada siling menandakan kebocoran di atas. Renovix mencari puncanya, membaiki kerosakan dan menghalangnya berulang.",
    whatItMeans: [
      "Siling rosak air ialah siling yang terjejas oleh air dari atas — daripada bumbung bocor, paip pecah, kelengkapan bilik air di tingkat atas, atau air bertakung di atas slab.",
      "Kerosakan boleh kelihatan sebagai tompok kuning kecoklatan, cat menggelembung, bahagian lembut, atau dalam kes teruk, siling yang mula turun.",
    ],
    commonCauses: [
      "Bumbung bocor atau rosak yang membenarkan air hujan masuk.",
      "Paip, longkang bumbung atau tangki air yang bocor di atas siling.",
      "Kebocoran penghawa dingin atau kelengkapan paip di tingkat atas.",
      "Air bertakung di atas slab rata dan meresap ke bawah.",
      "Bilik air di unit atas yang bocor melalui lantai.",
      "Kondensasi dan kelembapan berpanjangan dalam rongga siling.",
    ],
    warningSigns: [
      "Tompok coklat, kuning atau gelap muncul pada siling.",
      "Cat menggelembung, mengelupas atau retak di sekitar tompok.",
      "Kawasan siling yang lembut, membonjol atau lembap.",
      "Titisan air, bau hapak atau bahagian yang mula melendut.",
    ],
    solutions: [
      { title: "Kesan dan hentikan kebocoran", description: "Punca air dikesan sebelum sebarang pembaikan siling dibuat." },
      { title: "Baiki siling yang rosak", description: "Papan yang lembap dibuang dan diganti dengan yang baharu." },
      { title: "Rawat kulat jika ada", description: "Kawasan lembap dirawat sebelum ditutup semula." },
      { title: "Kemas dan cat semula", description: "Kawasan dikemas supaya kembali sekata dengan siling sedia ada." },
    ],
    whenToCall: [
      "Terdapat tompok air atau siling yang menitis.",
      "Siling terasa lembut, membonjol atau mula melendut.",
      "Kebocoran kembali walaupun tompok sudah dicat.",
      "Anda perlu punca dikesan, terutamanya jika ia datang dari unit atas.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan bersama pasukan paip dan kalis air kami, bergantung pada punca kebocoran.",
    processTitle: "Cara Kami Membaiki Siling Rosak Air",
    processIntro: "Tanpa menghentikan air, siling baharu akan rosak semula.",
    processSteps: [
      { title: "Kesan punca air", description: "Kami menyemak bumbung, paip dan ruang di atas siling." },
      { title: "Hentikan kebocoran", description: "Punca dibaiki atau diselaraskan dengan pihak berkaitan." },
      { title: "Baiki siling", description: "Papan rosak diganti dan sambungan dikemas." },
      { title: "Cat semula kawasan", description: "Primer penghalang tompok disapu sebelum cat akhir." },
    ],
    faqs: [
      { question: "Kenapa tompok coklat muncul di siling saya?", answer: "Ia biasanya kesan air yang meresap dari atas — bumbung, paip atau bilik air di tingkat atas." },
      { question: "Perlu baiki kebocoran atau siling dahulu?", answer: "Kebocoran dahulu. Membaiki siling sebelum air dihentikan hanya akan menyebabkan kerosakan berulang." },
      { question: "Boleh siling rosak air dibaiki tanpa diganti?", answer: "Jika papan masih kukuh dan hanya bernoda, ia boleh dirawat dan dicat. Papan yang lembut perlu diganti." },
      { question: "Siapa bertanggungjawab jika bocor dari unit atas?", answer: "Ia bergantung pada punca dan peraturan bangunan. Kami boleh membantu mengenal pasti punca supaya perbincangan menjadi lebih jelas." },
    ],
  },
  "ceiling-stains": {
    ...base,
    name: "Tompok pada Siling",
    title: "Renovix Home Services | Tompok pada Siling di KL & Selangor",
    metaDescription:
      "Tompok siling dirawat di Kuala Lumpur & Selangor dengan mengesan punca kelembapan dan menutup tompok dengan betul. Punca dan penyelesaian.",
    h1: "Tompok pada Siling",
    subtitle:
      "Tompok siling selalunya kesan kelembapan, bukan sekadar masalah rupa. Renovix merawat puncanya dan memulihkan siling yang bersih.",
    whatItMeans: [
      "Tompok siling ialah perubahan warna pada siling, paling kerap tanda air berwarna kuning kecoklatan, tetapi juga boleh berupa tompok gelap akibat kulat atau kawasan kelabu akibat habuk dan usia.",
      "Tanda air adalah jenis paling biasa dan bermakna kelembapan sedang masuk dari atas. Jika dibiarkan, ia boleh melemahkan papan siling.",
    ],
    commonCauses: [
      "Kebocoran perlahan daripada bumbung, paip atau kelengkapan di atas.",
      "Kondensasi dan kelembapan di siling bilik air atau dapur.",
      "Kerosakan air lama yang tidak pernah dirawat sepenuhnya.",
      "Kulat yang tumbuh di kawasan lembap.",
      "Kesan asap atau minyak masakan pada siling dapur.",
      "Habuk dan usia yang mengubah warna siling.",
    ],
    warningSigns: [
      "Tompok kuning kecoklatan atau gelap yang membesar perlahan-lahan.",
      "Tompok menjadi lebih gelap selepas hujan lebat.",
      "Tompok disertai cat menggelembung atau bau lembap.",
      "Beberapa tompok muncul, atau tompok terasa lembut apabila disentuh.",
    ],
    solutions: [
      { title: "Kenal pasti jenis tompok", description: "Kami membezakan tanda air, kulat dan kotoran biasa." },
      { title: "Kesan dan hentikan kelembapan", description: "Punca air dikesan sebelum kerja kemasan dibuat." },
      { title: "Rawat dan tutup tompok", description: "Primer penghalang tompok digunakan supaya ia tidak menembusi cat." },
      { title: "Cat semula siling", description: "Kawasan dicat sehingga sekata dengan siling sedia ada." },
    ],
    whenToCall: [
      "Tompok kembali atau membesar walaupun sudah dicat.",
      "Tompok disertai kebocoran, bau atau kawasan lembut.",
      "Terdapat tompok di beberapa tempat pada siling.",
      "Anda tidak pasti apa yang menyebabkan perubahan warna itu.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan siling dan cat kami, dengan sokongan kerja kalis air jika perlu.",
    processTitle: "Cara Kami Merawat Tompok Siling",
    processIntro: "Tompok yang masih aktif akan menembusi cat baharu jika puncanya tidak dihentikan.",
    processSteps: [
      { title: "Nilai tompok", description: "Kami menyemak sama ada tompok masih aktif atau sudah kering." },
      { title: "Kesan punca kelembapan", description: "Ruang di atas siling diperiksa untuk mencari sumber air." },
      { title: "Rawat dan tutup", description: "Kawasan dibersihkan dan primer penghalang tompok disapu." },
      { title: "Cat semula kawasan", description: "Cat akhir disapu sehingga warna sekata." },
    ],
    faqs: [
      { question: "Boleh saya cat sahaja di atas tompok siling?", answer: "Jika tompok masih aktif, ia akan menembusi cat baharu. Punca perlu dihentikan dan primer khas digunakan." },
      { question: "Kenapa tompok coklat asyik kembali?", answer: "Kerana air masih masuk. Tompok hanya berhenti selepas kebocoran dibaiki." },
      { question: "Adakah semua tompok siling bermakna kerosakan air?", answer: "Tidak semua. Ada tompok akibat kulat, asap dapur atau habuk, tetapi tanda air adalah yang paling biasa." },
      { question: "Bagaimana saya tahu tompok itu masih aktif?", answer: "Jika ia membesar atau menjadi lebih gelap selepas hujan, atau terasa lembap, ia masih aktif." },
    ],
  },
  "old-plaster-ceiling": {
    ...base,
    name: "Siling Plaster Lama",
    title: "Renovix Home Services | Siling Plaster Lama di KL & Selangor",
    metaDescription:
      "Siling plaster lama dibaiki atau diganti di Kuala Lumpur & Selangor dengan sistem siling moden yang lebih selamat. Punca dan penyelesaian.",
    h1: "Siling Plaster Lama",
    subtitle:
      "Siling plaster lama retak, melendut dan hilang kekuatan dengan usia. Renovix membaiki atau menggantikannya dengan siling moden yang selamat.",
    whatItMeans: [
      "Siling plaster lama ialah siling tradisional berkemasan plaster, biasa ditemui di rumah teres lama dan bangunan era terdahulu. Dengan usia, plaster menjadi rapuh, berdebu dan boleh hilang cengkaman pada rangka di sebaliknya.",
      "Siling jenis ini juga lebih sukar diubah suai apabila anda mahu menambah lampu tersembunyi atau siling palsu moden.",
    ],
    commonCauses: [
      "Usia, dengan plaster dan rangka yang merosot selepas bertahun-tahun.",
      "Sistem siling lama yang sudah hilang ikatan dengan rangka.",
      "Kelembapan dan air yang melemahkan plaster.",
      "Pergerakan bangunan yang membuka retak pada plaster.",
      "Berat plaster yang tidak disokong dengan baik pada rentang panjang.",
      "Kaedah pembinaan lama yang tidak lagi digunakan hari ini.",
    ],
    warningSigns: [
      "Permukaan plaster yang berdebu, retak atau mengelupas.",
      "Retak yang merentasi siling dan semakin melebar.",
      "Siling melendut atau bahagian yang terasa longgar.",
      "Serbuk atau serpihan plaster gugur ke lantai.",
    ],
    solutions: [
      { title: "Nilai keadaan siling", description: "Kami menyemak kekuatan plaster dan rangka di atasnya." },
      { title: "Tampal semula atau ganti", description: "Bergantung pada keadaan, siling ditampal atau diganti sepenuhnya." },
      { title: "Pasang siling moden", description: "Siling gypsum baharu dipasang dengan rangka yang betul." },
      { title: "Kemas dan cat", description: "Permukaan diratakan dan dicat untuk kemasan bersih." },
    ],
    whenToCall: [
      "Plaster siling retak, berdebu atau mengelupas.",
      "Sebahagian siling melendut atau terasa longgar.",
      "Anda menggantikan siling sebagai sebahagian daripada renovasi.",
      "Anda mahu menambah lampu tersembunyi pada siling lama.",
    ],
    relatedServiceNote:
      "Penggantian siling dikendalikan oleh pasukan siling kami dan diselaraskan dengan kerja elektrik serta cat.",
    processTitle: "Cara Kami Menggantikan Siling Plaster Lama",
    processIntro: "Kami merancang urutan kerja supaya rumah kekal boleh didiami sepanjang projek.",
    processSteps: [
      { title: "Nilai dan rancang", description: "Kami menyemak keadaan siling dan mencadangkan skop kerja." },
      { title: "Sediakan ruang", description: "Perabot dilindungi dan kawasan kerja ditutup." },
      { title: "Pasang siling baharu", description: "Rangka dan papan baharu dipasang mengikut aras yang betul." },
      { title: "Kemas dan cat", description: "Sambungan ditampal, dicat dan tapak dibersihkan." },
    ],
    faqs: [
      { question: "Patutkah saya baiki atau ganti siling plaster lama?", answer: "Jika kerosakan setempat dan plaster masih kukuh, pembaikan memadai. Jika ia rapuh atau melendut, penggantian lebih selamat." },
      { question: "Kenapa siling plaster lama diganti?", answer: "Kerana ia lebih berat, lebih mudah retak, dan lebih sukar diubah suai untuk lampu dan pendawaian moden." },
      { question: "Boleh saya tambah lampu tersembunyi pada siling lama?", answer: "Kadangkala boleh, tetapi selalunya lebih mudah dan kemas dengan memasang siling gypsum baharu." },
      { question: "Berapa lama kerja penggantian siling mengganggu rumah?", answer: "Ia berhabuk dan bising, jadi kami bekerja mengikut bilik supaya bahagian lain rumah kekal boleh digunakan." },
    ],
  },
};
