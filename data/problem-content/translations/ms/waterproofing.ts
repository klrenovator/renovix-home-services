import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Bumbung, bilik air tingkat atas dan dinding luar yang terdedah kepada hujan." },
  { label: "Kondominium", note: "Bilik air, balkoni dan dinding kongsi antara unit." },
  { label: "Pangsapuri", note: "Kerja kalis air setempat di bilik air dan kawasan basah." },
  { label: "Semi-D & Banglo", note: "Bumbung rata, balkoni dan dinding luar yang lebih luas." },
  { label: "Pejabat & Kedai", note: "Tandas, bumbung dan dinding luar premis komersial." },
  { label: "Projek Renovasi", note: "Lapisan kalis air dipasang sebelum jubin dan kemasan akhir." },
];

const areasNote =
  "Kerja kalis air dan pembaikan bocor tersedia di seluruh Kuala Lumpur, Selangor dan Lembah Klang.";

const propertyTypesIntro =
  "Punca kebocoran berbeza mengikut jenis bangunan, jadi pemeriksaan dibuat sebelum sebarang kerja.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "roof-leakage": {
    ...base,
    name: "Bumbung Bocor",
    title: "Bumbung Bocor di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Bumbung bocor dikesan dan dibaiki di Kuala Lumpur & Selangor dengan kerja kalis air yang betul. Punca, tanda amaran dan penyelesaian.",
    h1: "Bumbung Bocor",
    subtitle:
      "Bumbung bocor merebak secepat hujan turun. Renovix mencari titik masuk air, membuat kalis air dan menghentikan kebocoran di puncanya.",
    whatItMeans: [
      "Bumbung bocor bermaksud air hujan menemui laluan masuk melalui penutup bumbung, sambungan atau lapisan kalis air yang sudah gagal.",
      "Titik masuk air jarang berada tepat di atas tompok pada siling. Air boleh bergerak di sepanjang rasuk sebelum menitis, jadi pemeriksaan perlu dibuat dengan teliti.",
    ],
    commonCauses: [
      "Genting yang retak, beranjak atau pecah.",
      "Membran kalis air pada bumbung rata yang sudah tamat jangka hayat.",
      "Longkang bumbung dan paip turun yang tersumbat.",
      "Flashing yang terangkat di pertemuan bumbung dengan dinding.",
      "Lubang atau sambungan yang gagal pada bumbung logam.",
      "Usia dan cuaca yang merosakkan lapisan pelindung bumbung.",
    ],
    warningSigns: [
      "Tompok air atau kawasan lembap pada siling di bawah bumbung.",
      "Titisan air semasa atau selepas hujan lebat.",
      "Bau hapak atau kulat di ruang atas.",
      "Cat siling menggelembung atau bahagian siling mula melendut.",
    ],
    solutions: [
      { title: "Kesan punca kebocoran", description: "Kami memeriksa bumbung untuk mencari titik masuk sebenar." },
      { title: "Baiki penutup bumbung", description: "Genting, flashing atau panel yang rosak dibaiki atau diganti." },
      { title: "Sapu lapisan kalis air", description: "Kawasan yang terdedah dirawat dengan sistem kalis air yang sesuai." },
      { title: "Baiki kerosakan dalaman", description: "Siling dan dinding yang terjejas dikemas semula selepas bocor berhenti." },
    ],
    whenToCall: [
      "Air menitis dari siling setiap kali hujan lebat.",
      "Tompok pada siling semakin membesar.",
      "Kebocoran kembali walaupun sudah dibaiki sebelum ini.",
      "Bumbung sudah lama dan belum pernah dirawat kalis air.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan kalis air kami, dengan pembaikan siling selepas kebocoran dihentikan.",
    processTitle: "Cara Kami Membaiki Bumbung Bocor",
    processIntro: "Kami merawat punca dahulu, bukan hanya menutup tompok pada siling.",
    processSteps: [
      { title: "Periksa bumbung", description: "Kami menyemak genting, flashing dan longkang bumbung." },
      { title: "Baiki punca", description: "Bahagian yang rosak dibaiki atau diganti." },
      { title: "Uji untuk kebocoran lain", description: "Kawasan diuji semula untuk memastikan tiada titik lain." },
      { title: "Baiki bahagian dalam", description: "Siling dikemas dan dicat semula." },
    ],
    faqs: [
      { question: "Kenapa bocor hanya semasa hujan lebat?", answer: "Sesetengah kebocoran hanya terbuka apabila jumlah air tinggi atau angin menolak air ke arah sambungan tertentu." },
      { question: "Perlukah seluruh bumbung dikalis air?", answer: "Tidak semestinya. Jika kerosakan setempat, rawatan boleh difokuskan pada kawasan berkenaan." },
      { question: "Boleh siling dibaiki dahulu?", answer: "Tidak digalakkan. Selagi air masih masuk, siling baharu akan rosak semula." },
      { question: "Berapa lama lapisan kalis air bertahan?", answer: "Ia bergantung pada sistem yang digunakan dan pendedahan cuaca. Kami akan menerangkan jangkaan sebelum kerja bermula." },
    ],
  },
  "bathroom-leakage": {
    ...base,
    name: "Bilik Air Bocor",
    title: "Bilik Air Bocor di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Bilik air bocor dibaiki di Kuala Lumpur & Selangor dengan kerja kalis air semula pada kawasan basah. Punca, tanda dan penyelesaian.",
    h1: "Bilik Air Bocor",
    subtitle:
      "Kebocoran bilik air akan mencari jalan ke bilik di bawah. Renovix mencari puncanya, membuat kalis air semula dan menghentikan kerosakan.",
    whatItMeans: [
      "Bilik air bocor bermaksud air meresap keluar dari kawasan basah, biasanya melalui lapisan kalis air yang gagal, grout yang retak atau paip tersembunyi.",
      "Tanda pertama selalunya muncul di siling atau dinding bilik di bawah, bukan di dalam bilik air itu sendiri.",
    ],
    commonCauses: [
      "Lapisan kalis air di bawah jubin yang gagal atau tidak pernah dipasang.",
      "Air meresap melalui grout yang retak atau hilang.",
      "Jubin berongga atau retak yang memberi laluan kepada air.",
      "Kebocoran daripada paip, perangkap atau sambungan tandas.",
      "Kalis air yang hanya menutup lantai tanpa dinding basah.",
      "Kawasan pancuran yang tidak pernah dikalis air dengan betul.",
    ],
    warningSigns: [
      "Tompok atau kawasan lembap pada siling di bawah bilik air.",
      "Bau hapak, kulat atau cat mengelupas pada dinding berdekatan.",
      "Air bertakung di lantai atau aliran yang perlahan.",
      "Jubin berbunyi kosong atau terangkat di kawasan basah.",
    ],
    solutions: [
      { title: "Kesan kebocoran", description: "Kami menentukan sama ada ia paip atau kalis air yang gagal." },
      { title: "Kalis air semula kawasan basah", description: "Membran baharu dipasang pada lantai dan dinding basah." },
      { title: "Baiki jubin dan grout", description: "Jubin dipasang semula dan grout dibaharui." },
      { title: "Baiki punca paip", description: "Jika kebocoran datang daripada paip, ia dibaiki dahulu." },
    ],
    whenToCall: [
      "Terdapat tompok pada siling di bawah bilik air.",
      "Dinding berhampiran bilik air sentiasa lembap.",
      "Jubin bilik air berbunyi kosong atau terangkat.",
      "Kebocoran kembali selepas pembaikan sebelum ini.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan kalis air kami bersama kerja jubin dan paip apabila perlu.",
    processTitle: "Cara Kami Membaiki Bilik Air Bocor",
    processIntro: "Kalis air perlu menutup lantai dan dinding basah, bukan lantai sahaja.",
    processSteps: [
      { title: "Kesan kebocoran", description: "Kami memeriksa paip, grout dan kawasan basah." },
      { title: "Baiki punca", description: "Paip atau kawasan yang gagal dibaiki dahulu." },
      { title: "Kalis air semula", description: "Membran disapu dan dibiarkan mengeras sepenuhnya." },
      { title: "Pasang jubin dan kemas", description: "Jubin dipasang semula dan sambungan dikedap." },
    ],
    faqs: [
      { question: "Perlukah semua jubin dibuka untuk kerja kalis air?", answer: "Bergantung pada punca. Kadangkala hanya kawasan basah perlu dibuka, tetapi kalis air penuh memerlukan jubin dibuka." },
      { question: "Bolehkah grout sahaja menghentikan kebocoran?", answer: "Grout membantu, tetapi ia bukan lapisan kalis air. Jika membran gagal, grout baharu tidak akan menyelesaikannya." },
      { question: "Berapa lama bilik air tidak boleh digunakan?", answer: "Ia bergantung pada skop kerja dan masa pengeringan membran. Kami akan menerangkan jadual sebelum bermula." },
      { question: "Bagaimana jika kebocoran datang dari unit atas?", answer: "Kami membantu mengenal pasti punca supaya perbincangan dengan pihak berkaitan menjadi lebih jelas." },
    ],
  },
  "balcony-leakage": {
    ...base,
    name: "Balkoni Bocor",
    title: "Balkoni Bocor di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Balkoni bocor dikalis air semula di Kuala Lumpur & Selangor untuk melindungi ruang di bawahnya. Punca, tanda dan penyelesaian.",
    h1: "Balkoni Bocor",
    subtitle:
      "Balkoni yang bocor ke tingkat bawah ialah masalah kalis air. Renovix mengedapnya dengan betul dan melindungi bilik di bawahnya.",
    whatItMeans: [
      "Balkoni bocor bermaksud air hujan meresap melalui lantai balkoni ke slab dan seterusnya ke ruang di bawah.",
      "Kerana balkoni terdedah kepada panas dan hujan sepanjang tahun, lapisan kalis air dan pengedap di tepinya merosot lebih cepat daripada kawasan dalaman.",
    ],
    commonCauses: [
      "Membran kalis air lantai balkoni yang sudah gagal.",
      "Jubin retak atau berongga yang membenarkan air ke slab.",
      "Retak pada tepi balkoni, skirting atau parapet.",
      "Longkang lantai tersumbat menyebabkan air bertakung.",
      "Pendedahan matahari dan pergerakan haba yang merosakkan pengedap.",
      "Kerja jubin atau kalis air asal yang tidak sempurna.",
    ],
    warningSigns: [
      "Tompok pada siling atau dinding di bawah balkoni.",
      "Air bertakung di lantai balkoni selepas hujan.",
      "Jubin balkoni berongga, longgar atau retak.",
      "Bau lembap atau kulat di bilik bawah.",
    ],
    solutions: [
      { title: "Kesan kebocoran", description: "Kami memeriksa lantai, tepi dan longkang balkoni." },
      { title: "Kalis air semula balkoni", description: "Membran baharu dipasang dengan cerun yang betul." },
      { title: "Baiki jubin dan pengedap", description: "Jubin yang rosak diganti dan sambungan dikedap semula." },
      { title: "Baiki longkang", description: "Longkang lantai dibersihkan atau dibaiki supaya air mengalir keluar." },
    ],
    whenToCall: [
      "Terdapat tompok pada siling di bawah balkoni.",
      "Air bertakung di balkoni selepas hujan.",
      "Jubin balkoni retak atau berbunyi kosong.",
      "Balkoni belum pernah dikalis air semula sejak dibina.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan kalis air kami bersama kerja jubin untuk kemasan akhir.",
    processTitle: "Cara Kami Membaiki Balkoni Bocor",
    processIntro: "Cerun dan tepi adalah bahagian yang paling kerap gagal pada balkoni.",
    processSteps: [
      { title: "Periksa balkoni", description: "Kami menyemak jubin, tepi dan aliran air." },
      { title: "Baiki permukaan", description: "Jubin rosak dibuka dan permukaan disediakan." },
      { title: "Sapu kalis air", description: "Membran disapu termasuk pada bahagian tepi." },
      { title: "Kedap dan kemas", description: "Jubin dipasang semula dan sambungan dikedap." },
    ],
    faqs: [
      { question: "Perlukah jubin balkoni dibuka?", answer: "Untuk kalis air penuh, ya. Untuk kerosakan setempat, kadangkala rawatan permukaan sudah memadai." },
      { question: "Kenapa balkoni bocor walaupun baharu?", answer: "Selalunya kerana cerun tidak betul, longkang tersumbat, atau kalis air asal tidak menutup bahagian tepi." },
      { question: "Bolehkah balkoni digunakan semasa kerja?", answer: "Tidak semasa membran mengering. Kami akan memberitahu tempoh yang diperlukan." },
      { question: "Adakah lapisan kalis air perlu diperbaharui?", answer: "Ya, ia terdedah kepada cuaca dan perlu diperiksa secara berkala." },
    ],
  },
  "wall-seepage": {
    ...base,
    name: "Resapan Air Dinding",
    title: "Resapan Air Dinding di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Resapan air pada dinding dirawat di Kuala Lumpur & Selangor dengan mengenal pasti arah masuk air. Punca, tanda dan penyelesaian.",
    h1: "Resapan Air Dinding",
    subtitle:
      "Air yang meresap melalui dinding adalah punca kelembapan dan kulat. Renovix mengenal pasti dari mana air datang dan mengedapnya dengan betul.",
    whatItMeans: [
      "Resapan air dinding bermaksud air bergerak melalui struktur dinding dan muncul di permukaan dalaman sebagai kawasan lembap.",
      "Ia berbeza daripada kondensasi. Resapan datang dari luar atau dari kawasan basah di sebelah, dan biasanya menjadi lebih teruk selepas hujan.",
    ],
    commonCauses: [
      "Hujan yang menampar dinding luar dan meresap melalui kerja bata.",
      "Retak atau sambungan yang gagal pada dinding.",
      "Air daripada kawasan basah di sebalik dinding kongsi.",
      "Kelembapan naik dari tanah pada dinding tanpa lapisan penghalang.",
      "Saliran yang lemah menyebabkan tapak dinding sentiasa basah.",
      "Tekanan air dari luar yang menolak kelembapan masuk.",
    ],
    warningSigns: [
      "Kawasan lembap atau cat menggelembung pada dinding dalaman.",
      "Kulat atau bau hapak pada permukaan dinding.",
      "Tompok yang merebak atau menjadi lebih gelap selepas hujan.",
      "Kelembapan muncul berhampiran dinding luar atau dinding kongsi.",
    ],
    solutions: [
      { title: "Kenal pasti arah masuk air", description: "Kami menentukan sama ada air datang dari luar, bawah atau sebelah." },
      { title: "Baiki punca", description: "Retak, sambungan atau kebocoran diselesaikan dahulu." },
      { title: "Sapu penghalang kalis air", description: "Rawatan kalis air disapu pada sisi yang betul." },
      { title: "Baiki dan cat semula", description: "Plaster dalaman dibaiki dan dicat selepas dinding kering." },
    ],
    whenToCall: [
      "Dinding dalaman kekal lembap selepas hujan.",
      "Cat mengelupas berulang kali di tempat yang sama.",
      "Kulat kembali walaupun sudah dibersihkan.",
      "Anda tidak pasti dari mana air itu datang.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan kalis air kami, dengan kerja cat selepas dinding kering.",
    processTitle: "Cara Kami Merawat Resapan Air Dinding",
    processIntro: "Merawat sisi yang salah tidak akan menghentikan air.",
    processSteps: [
      { title: "Nilai dinding", description: "Kami memeriksa kedua-dua sisi dinding dan corak kelembapan." },
      { title: "Baiki punca", description: "Retak dan sambungan yang gagal dibaiki." },
      { title: "Kedap atau kalis air", description: "Rawatan disapu pada sisi yang menerima air." },
      { title: "Baiki dan cat semula", description: "Plaster dibaiki dan kawasan dicat semula." },
    ],
    faqs: [
      { question: "Bolehkah dinding dikalis air dari dalam?", answer: "Kadangkala boleh, tetapi merawat sisi luar biasanya lebih berkesan kerana ia menghentikan air sebelum ia masuk." },
      { question: "Kenapa cat mengelupas berulang di tempat sama?", answer: "Kerana kelembapan masih bergerak melalui dinding. Cat baharu tidak akan bertahan selagi puncanya kekal." },
      { question: "Adakah resapan sama dengan kelembapan naik?", answer: "Tidak. Kelembapan naik bermula dari tapak dinding, manakala resapan boleh berlaku di mana-mana bahagian dinding." },
      { question: "Berapa lama dinding perlu kering?", answer: "Ia bergantung pada tahap kelembapan. Mengecat terlalu awal akan menyebabkan masalah berulang." },
    ],
  },
  "damp-walls": {
    ...base,
    name: "Dinding Lembap",
    title: "Dinding Lembap di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Dinding lembap dirawat di Kuala Lumpur & Selangor dengan mengenal pasti jenis kelembapan dan puncanya. Punca, tanda dan penyelesaian.",
    h1: "Dinding Lembap",
    subtitle:
      "Dinding lembap ialah masalah kelembapan yang berterusan. Renovix mencari sebab ia kekal basah dan merawatnya supaya benar-benar kering.",
    whatItMeans: [
      "Dinding lembap ialah dinding yang kekal basah atau sejuk kerana kelembapan yang berterusan, sama ada daripada kondensasi, resapan atau kebocoran.",
      "Mengenal pasti jenis kelembapan adalah penting kerana rawatan untuk kondensasi berbeza sepenuhnya daripada rawatan untuk resapan atau kebocoran.",
    ],
    commonCauses: [
      "Kondensasi akibat kelembapan tinggi dan pengudaraan lemah.",
      "Air bergerak masuk melalui dinding luar atau dinding kongsi.",
      "Kelembapan naik pada tapak dinding tanpa lapisan penghalang.",
      "Kebocoran daripada paip, bumbung atau kelengkapan berdekatan.",
      "Saliran lemah yang membiarkan air bertakung pada tapak dinding.",
      "Dinding yang tidak pernah dikedap atau dikalis air dengan betul.",
    ],
    warningSigns: [
      "Dinding terasa lembap, sejuk atau kelihatan lebih gelap.",
      "Kulat atau bau hapak pada permukaan dinding.",
      "Cat mengelupas atau bernoda pada tompok yang sama.",
      "Kelembapan berhampiran tapak dinding atau kawasan basah.",
    ],
    solutions: [
      { title: "Kenal pasti jenis kelembapan", description: "Kami membezakan kondensasi, resapan dan kebocoran." },
      { title: "Hentikan sumber kelembapan", description: "Punca dibaiki atau pengudaraan diperbaiki." },
      { title: "Rawat dan kalis air dinding", description: "Dinding dirawat dan dikalis air mengikut jenis masalah." },
      { title: "Baiki dan cat semula", description: "Plaster dibaiki dan dicat selepas dinding kering." },
    ],
    whenToCall: [
      "Dinding kekal lembap walaupun cuaca kering.",
      "Kulat kembali berulang kali di kawasan yang sama.",
      "Cat mengelupas atau plaster reput.",
      "Anda tidak pasti sama ada ia kondensasi atau kebocoran.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan kalis air kami, dengan kerja cat sebagai kemasan akhir.",
    processTitle: "Cara Kami Merawat Dinding Lembap",
    processIntro: "Rawatan yang betul bermula dengan mengenal pasti jenis kelembapan.",
    processSteps: [
      { title: "Nilai kelembapan", description: "Kami memeriksa corak, lokasi dan kemungkinan punca." },
      { title: "Baiki punca", description: "Kebocoran, saliran atau pengudaraan diselesaikan." },
      { title: "Rawat dan kalis air", description: "Dinding dirawat dengan sistem yang sesuai." },
      { title: "Baiki dan cat semula", description: "Kemasan dipulihkan selepas dinding kering." },
    ],
    faqs: [
      { question: "Bagaimana membezakan kondensasi dan resapan?", answer: "Kondensasi biasanya muncul pada permukaan sejuk dan bertambah pada waktu tertentu, manakala resapan menjadi lebih teruk selepas hujan." },
      { question: "Bolehkah cat khas menyelesaikan dinding lembap?", answer: "Cat boleh membantu selepas puncanya dirawat, tetapi ia bukan penyelesaian jika air masih masuk." },
      { question: "Adakah pengudaraan yang lebih baik memadai?", answer: "Untuk masalah kondensasi, ia banyak membantu. Untuk resapan atau kebocoran, ia tidak mencukupi." },
      { question: "Berapa lama dinding mengambil masa untuk kering?", answer: "Ia bergantung pada ketebalan dinding dan tahap kelembapan; kami akan menasihatkan sebelum kerja kemasan." },
    ],
  },
  "water-stains": {
    ...base,
    name: "Tompok Air",
    title: "Tompok Air di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Tompok air pada dinding dan siling dijejaki serta dirawat di Kuala Lumpur & Selangor. Punca, tanda amaran dan penyelesaian.",
    h1: "Tompok Air",
    subtitle:
      "Tompok air ialah kesan kelembapan yang patut dijejaki, bukan sekadar ditutup dengan cat. Renovix mencari puncanya dan memulihkan permukaan.",
    whatItMeans: [
      "Tompok air ialah kesan berwarna kuning kecoklatan atau gelap pada dinding atau siling yang menunjukkan air pernah, atau masih, meresap ke kawasan itu.",
      "Tompok yang masih aktif akan menembusi cat baharu, jadi langkah pertama ialah menentukan sama ada sumber air sudah berhenti atau belum.",
    ],
    commonCauses: [
      "Kebocoran perlahan daripada bumbung, paip atau kelengkapan di atas.",
      "Resapan melalui dinding luar atau dinding kongsi selepas hujan.",
      "Kondensasi dan kelembapan yang berkumpul di satu kawasan.",
      "Lapisan kalis air yang gagal.",
      "Tompok lama yang hanya dicat tanpa dirawat.",
      "Kebocoran daripada bilik air atau kawasan basah di sebelah.",
    ],
    warningSigns: [
      "Tanda kuning kecoklatan atau gelap yang semakin membesar.",
      "Tompok menjadi lebih gelap selepas hujan.",
      "Tompok disertai cat menggelembung atau permukaan lembut.",
      "Beberapa tompok muncul pada dinding atau siling.",
    ],
    solutions: [
      { title: "Kenal pasti jenis tompok", description: "Kami membezakan kesan air aktif dan tompok lama." },
      { title: "Kesan dan hentikan sumber", description: "Punca air dihentikan sebelum kemasan dibuat." },
      { title: "Rawat dan tutup tompok", description: "Primer penghalang tompok disapu supaya ia tidak menembusi." },
      { title: "Cat semula kawasan", description: "Kawasan dicat sehingga sekata dengan permukaan sedia ada." },
    ],
    whenToCall: [
      "Tompok kembali selepas dicat.",
      "Tompok membesar atau menjadi lebih gelap selepas hujan.",
      "Terdapat beberapa tompok pada dinding atau siling.",
      "Anda tidak pasti dari mana air itu datang.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan kalis air dan cat kami mengikut punca kebocoran.",
    processTitle: "Cara Kami Merawat Tompok Air",
    processIntro: "Tompok hanya berhenti selepas sumber airnya berhenti.",
    processSteps: [
      { title: "Nilai tompok", description: "Kami menyemak sama ada tompok masih aktif." },
      { title: "Hentikan sumber", description: "Kebocoran atau resapan dibaiki." },
      { title: "Rawat dan tutup", description: "Kawasan dibersihkan dan di-primer." },
      { title: "Cat semula permukaan", description: "Kemasan akhir disapu sehingga warna sekata." },
    ],
    faqs: [
      { question: "Boleh saya cat sahaja di atas tompok air?", answer: "Hanya jika sumber air sudah berhenti dan primer khas digunakan. Jika tidak, tompok akan muncul semula." },
      { question: "Bagaimana saya tahu tompok masih aktif?", answer: "Jika ia membesar, menjadi lebih gelap selepas hujan, atau terasa lembap, ia masih aktif." },
      { question: "Adakah tompok air sentiasa bermakna kebocoran?", answer: "Selalunya ya, tetapi kondensasi berat juga boleh meninggalkan kesan pada permukaan tertentu." },
      { question: "Perlukah plaster diganti?", answer: "Jika plaster sudah reput atau lembut, ia perlu dibuang dan diganti sebelum dicat." },
    ],
  },
};
