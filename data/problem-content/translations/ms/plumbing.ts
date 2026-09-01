import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Paip lama, bilik air tingkat atas dan saluran keluar di belakang rumah." },
  { label: "Kondominium", note: "Kerja paip dalam unit mengikut waktu kerja dan peraturan pengurusan." },
  { label: "Pangsapuri", note: "Pembaikan kecil bilik air dan dapur di dalam unit." },
  { label: "Semi-D & Banglo", note: "Rangkaian paip yang lebih panjang, termasuk paip luar dan tangki." },
  { label: "Pejabat & Kedai", note: "Tandas dan sinki komersial yang perlu dibaiki dengan cepat." },
  { label: "Projek Renovasi", note: "Kerja paip yang diselaraskan sebelum jubin dan kalis air dipasang." },
];

const areasNote =
  "Kerja paip tersedia di seluruh Kuala Lumpur, Selangor dan Lembah Klang untuk kediaman dan premis perniagaan.";

const propertyTypesIntro =
  "Umur bangunan dan susun atur paip menentukan cara kami mengesan serta membaiki masalah.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "water-leakage": {
    ...base,
    name: "Kebocoran Air",
    title: "Kebocoran Air di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Kebocoran air dikesan dan dibaiki di Kuala Lumpur & Selangor sebelum ia merosakkan dinding dan siling. Punca, tanda amaran dan penyelesaian.",
    h1: "Kebocoran Air",
    subtitle:
      "Kebocoran air sering tersembunyi di sebalik dinding dan di bawah lantai. Renovix mencari puncanya, membaiki kebocoran dan menghentikan kerosakan.",
    whatItMeans: [
      "Kebocoran air ialah air yang keluar daripada sistem paip di tempat yang sepatutnya kekal kering. Ia mungkin titisan kecil pada sambungan, atau kebocoran tersembunyi dalam dinding dan di bawah lantai.",
      "Kebocoran tersembunyi selalunya dikesan melalui kesannya dahulu — bil air meningkat, dinding lembap atau tompok pada siling — bukan melalui air yang kelihatan.",
    ],
    commonCauses: [
      "Sambungan, gasket atau kelengkapan paip yang sudah haus.",
      "Paip berkarat atau rosak di sebalik dinding atau di bawah lantai.",
      "Pili, tandas atau sambungan pemanas air yang bocor.",
      "Retak pada paip tersembunyi akibat usia atau pergerakan bangunan.",
      "Kebocoran daripada bumbung atau tangki air ke dalam bangunan.",
      "Paip yang tercedera semasa kerja renovasi atau menebuk dinding.",
    ],
    warningSigns: [
      "Bil air meningkat walaupun penggunaan tidak berubah.",
      "Tompok lembap atau lembut pada dinding, lantai atau siling.",
      "Bau hapak, kulat atau cat mengelupas berhampiran sumber air.",
      "Bunyi titisan atau takungan air yang berulang.",
    ],
    solutions: [
      { title: "Kesan punca", description: "Kami menjejaki sumber air sebelum sebarang dinding atau lantai dibuka." },
      { title: "Baiki atau ganti paip", description: "Bahagian yang bocor dibaiki atau digantikan dengan paip baharu." },
      { title: "Baiki permukaan yang rosak", description: "Dinding, lantai atau siling yang terjejas dikemas semula." },
      { title: "Sahkan pembaikan", description: "Sistem diuji semula untuk memastikan kebocoran benar-benar berhenti." },
    ],
    whenToCall: [
      "Bil air meningkat tanpa sebab yang jelas.",
      "Terdapat tompok lembap yang semakin membesar.",
      "Anda mendengar bunyi air walaupun semua pili ditutup.",
      "Kebocoran kembali selepas pembaikan sebelum ini.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan paip kami, dengan sokongan kerja kalis air apabila kebocoran menjejaskan struktur.",
    processTitle: "Cara Kami Membaiki Kebocoran Air",
    processIntro: "Mengesan punca dahulu bermakna kami membuka hanya bahagian yang perlu.",
    processSteps: [
      { title: "Sahkan dan kesan kebocoran", description: "Kami menyemak meter, kelengkapan dan kawasan lembap." },
      { title: "Buka bahagian yang perlu", description: "Hanya kawasan yang berkaitan dibuka untuk sampai ke paip." },
      { title: "Baiki punca", description: "Paip atau sambungan yang bocor dibaiki atau diganti." },
      { title: "Uji dan kemas semula", description: "Sistem diuji dan permukaan dikemas sebelum diserahkan." },
    ],
    faqs: [
      { question: "Bagaimana saya tahu ada kebocoran tersembunyi?", answer: "Bil air yang meningkat, tompok lembap, bau hapak atau bunyi air walaupun semua pili ditutup adalah tanda biasa." },
      { question: "Perlukah dinding dipecahkan untuk membaiki kebocoran?", answer: "Kadangkala perlu, tetapi kami mengesan lokasi dahulu supaya bukaan sekecil mungkin." },
      { question: "Bolehkah kebocoran kecil dibiarkan?", answer: "Tidak digalakkan. Kebocoran kecil boleh merosakkan plaster, kayu dan siling dari masa ke masa." },
      { question: "Apa yang perlu saya buat sementara menunggu?", answer: "Tutup injap utama jika kebocoran teruk, dan alihkan barang daripada kawasan yang basah." },
    ],
  },
  "leaking-tap": {
    ...base,
    name: "Pili Bocor",
    title: "Pili Bocor di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Pili bocor dibaiki atau diganti di Kuala Lumpur & Selangor supaya ia berhenti menitis. Punca, tanda amaran dan penyelesaian.",
    h1: "Pili Bocor",
    subtitle:
      "Pili yang menitis membazir air dan menandakan washer atau kartrij yang sudah haus. Renovix membaiki atau menggantikan pili supaya ia berhenti menitis.",
    whatItMeans: [
      "Pili bocor ialah pili yang masih mengeluarkan air walaupun sudah ditutup, atau yang membenarkan air merembes di sekeliling pemegang dan tapaknya.",
      "Ia kelihatan kecil, tetapi titisan berterusan boleh membazir air dalam jumlah besar dan meninggalkan kesan kapur serta karat pada sinki.",
    ],
    commonCauses: [
      "Washer yang haus dan tidak lagi menutup aliran air.",
      "Kartrij atau cakera seramik yang sudah rosak.",
      "Nat atau gasket di sekeliling batang pili yang longgar.",
      "Kerak kapur yang menghalang pili daripada menutup rapat.",
      "Pili lama atau berkualiti rendah yang sudah tamat jangka hayat.",
      "Badan pili yang retak atau sambungan longgar di bahagian bawah.",
    ],
    warningSigns: [
      "Pili menitis walaupun sudah ditutup rapat.",
      "Air merembes di sekeliling pemegang atau tapak pili.",
      "Bunyi berdecit atau pili menjadi keras untuk dipusing.",
      "Kerak kapur atau kesan karat terbentuk di sekitar muncung.",
    ],
    solutions: [
      { title: "Kenal pasti jenis pili", description: "Jenis pili menentukan alat ganti yang diperlukan." },
      { title: "Ganti bahagian yang haus", description: "Washer, kartrij atau gasket diganti dengan yang sepadan." },
      { title: "Ganti pili", description: "Jika badan pili sudah rosak, pili baharu dipasang." },
      { title: "Semak sambungan", description: "Sambungan bawah sinki diperiksa dan diketatkan." },
    ],
    whenToCall: [
      "Pili terus menitis walaupun sudah ditutup ketat.",
      "Air merembes di bawah sinki atau di tapak pili.",
      "Pili menjadi keras atau berbunyi apabila dipusing.",
      "Anda mahu menggantikan pili lama dengan yang baharu.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan paip kami dan biasanya selesai dalam satu lawatan.",
    processTitle: "Cara Kami Membaiki Pili Bocor",
    processIntro: "Kebanyakan pili boleh dibaiki tanpa perlu diganti sepenuhnya.",
    processSteps: [
      { title: "Tutup bekalan", description: "Injap bekalan ditutup sebelum kerja bermula." },
      { title: "Diagnos kebocoran", description: "Kami memeriksa washer, kartrij dan gasket." },
      { title: "Baiki atau ganti", description: "Bahagian yang haus diganti, atau pili baharu dipasang." },
      { title: "Uji dan buka semula", description: "Bekalan dibuka semula dan pili diuji." },
    ],
    faqs: [
      { question: "Adakah pili bocor perlu diganti sepenuhnya?", answer: "Selalunya tidak. Menggantikan washer atau kartrij sudah memadai melainkan badan pili itu sendiri rosak." },
      { question: "Berapa banyak air dibazirkan oleh pili menitis?", answer: "Titisan berterusan boleh membazir beberapa liter sehari, dan ia terus bertambah pada bil bulanan anda." },
      { question: "Kenapa pili baharu pun bocor?", answer: "Biasanya kerana pemasangan yang tidak rapat, gasket yang tersalah letak, atau kualiti pili itu sendiri." },
      { question: "Boleh saya baiki sendiri?", answer: "Pembaikan mudah boleh dilakukan sendiri, tetapi jika air merembes di dalam kabinet atau dinding, lebih baik ia diperiksa." },
    ],
  },
  "leaking-pipe": {
    ...base,
    name: "Paip Bocor",
    title: "Paip Bocor di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Paip bocor dikesan dan dibaiki di Kuala Lumpur & Selangor, termasuk paip tersembunyi dalam dinding. Punca, tanda dan penyelesaian.",
    h1: "Paip Bocor",
    subtitle:
      "Paip bocor boleh menyebabkan kerosakan besar sebelum anda melihatnya. Renovix mengesan dan membaiki paip serta melindungi rumah anda.",
    whatItMeans: [
      "Paip bocor ialah paip bekalan atau pembuangan yang mengeluarkan air melalui retak, lubang atau sambungan yang gagal. Ia boleh berada di dalam dinding, di bawah lantai atau di atas siling.",
      "Kerana kebanyakan paip tersembunyi, kerosakan pada plaster dan siling selalunya muncul sebelum kebocoran itu sendiri dapat dilihat.",
    ],
    commonCauses: [
      "Karat atau lubang kecil pada dinding paip.",
      "Sambungan atau penyambung yang gagal atau dipasang tidak sempurna.",
      "Tekanan air yang tinggi memberi tekanan berlebihan pada paip.",
      "Pergerakan atau enapan bangunan yang menegangkan paip.",
      "Paip lama yang sudah melepasi jangka hayatnya.",
      "Kerosakan tidak sengaja semasa menebuk atau merenovasi.",
    ],
    warningSigns: [
      "Tompok lembap, lembut atau hangat pada dinding, lantai atau siling.",
      "Takungan air di bawah sinki, pada lantai atau siling.",
      "Bil air meningkat tanpa penjelasan.",
      "Bau hapak atau tompok yang semakin membesar.",
    ],
    solutions: [
      { title: "Kesan lokasi paip bocor", description: "Kami mengesan bahagian yang bocor sebelum membuka permukaan." },
      { title: "Baiki bahagian berkenaan", description: "Bahagian paip yang rosak dipotong dan disambung semula." },
      { title: "Ganti rangkaian paip lama", description: "Jika paip sudah terlalu lama, penggantian lebih menjimatkan jangka panjang." },
      { title: "Selaraskan pembaikan permukaan", description: "Plaster, jubin atau siling yang dibuka dikemas semula." },
    ],
    whenToCall: [
      "Terdapat tompok lembap yang semakin membesar.",
      "Air menitis dari siling atau muncul pada lantai.",
      "Bil air meningkat tanpa sebab.",
      "Paip lama sudah kerap bocor di beberapa tempat.",
    ],
    relatedServiceNote:
      "Pembaikan paip dikendalikan oleh pasukan paip kami, dengan kerja jubin atau siling untuk mengemas semula.",
    processTitle: "Cara Kami Membaiki Paip Bocor",
    processIntro: "Kami mengesan dahulu supaya kerja pecah minimum.",
    processSteps: [
      { title: "Asingkan talian", description: "Bekalan ke bahagian berkenaan ditutup." },
      { title: "Kesan kebocoran", description: "Lokasi tepat dikenal pasti sebelum membuka permukaan." },
      { title: "Baiki atau ganti", description: "Paip disambung semula atau digantikan." },
      { title: "Uji dan pulihkan", description: "Sistem diuji dan kawasan dikemas semula." },
    ],
    faqs: [
      { question: "Bagaimana paip dalam dinding dikesan?", answer: "Melalui pemeriksaan corak kelembapan, ujian tekanan dan pengesanan pada titik sambungan yang paling mungkin." },
      { question: "Perlukah semua paip diganti jika satu bocor?", answer: "Tidak semestinya. Tetapi jika paip sudah lama dan bocor berulang kali, penggantian sebahagian rangkaian lebih berbaloi." },
      { question: "Berapa lama kerja pembaikan mengambil masa?", answer: "Pembaikan setempat selalunya selesai dalam satu lawatan; kerja yang melibatkan pecah dinding memerlukan masa untuk kemasan." },
      { question: "Adakah paip bocor boleh merosakkan struktur?", answer: "Kelembapan berterusan boleh merosakkan plaster, kayu dan kemasan, jadi lebih baik ia dibaiki awal." },
    ],
  },
  "blocked-drain": {
    ...base,
    name: "Saluran Tersumbat",
    title: "Saluran Tersumbat di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Saluran tersumbat dibersihkan di Kuala Lumpur & Selangor, dengan nasihat mencegahnya berulang. Punca, tanda amaran dan penyelesaian.",
    h1: "Saluran Tersumbat",
    subtitle:
      "Saluran tersumbat menyebabkan air bertakung dan bau yang tidak selesa. Renovix membersihkan sumbatan dan membantu mengelakkannya berulang.",
    whatItMeans: [
      "Saluran tersumbat ialah paip pembuangan yang tidak lagi mengalir dengan lancar kerana halangan di dalamnya. Ia boleh berlaku pada sinki, bilik air, longkang lantai atau talian utama.",
      "Sumbatan jarang berlaku secara tiba-tiba. Ia biasanya terbentuk secara perlahan sehingga aliran menjadi terlalu perlahan atau berhenti terus.",
    ],
    commonCauses: [
      "Rambut dan sisa sabun terkumpul di saluran bilik air.",
      "Minyak, gris dan sisa makanan di saluran dapur.",
      "Objek asing yang jatuh atau dibuang ke dalam saluran.",
      "Kerak yang menyempitkan paip dari masa ke masa.",
      "Sambungan atau selekoh paip yang mudah memerangkap sisa.",
      "Sumbatan lebih jauh di talian utama atau lubang manhole.",
    ],
    warningSigns: [
      "Sinki, tab atau pancuran yang mengalir perlahan atau berbunyi.",
      "Air bertakung di dalam besen atau longkang lantai.",
      "Bau busuk keluar daripada saluran.",
      "Beberapa kelengkapan pada talian sama tersumbat serentak.",
    ],
    solutions: [
      { title: "Kesan lokasi sumbatan", description: "Kami mengenal pasti sama ada ia setempat atau di talian utama." },
      { title: "Bersihkan saluran", description: "Sumbatan dibuang dengan kaedah yang sesuai untuk paip berkenaan." },
      { title: "Semak keadaan talian", description: "Paip diperiksa untuk mengesan kerosakan atau kerak berlebihan." },
      { title: "Beri nasihat pencegahan", description: "Kami berkongsi langkah mudah supaya sumbatan tidak cepat kembali." },
    ],
    whenToCall: [
      "Air mengalir sangat perlahan atau berhenti terus.",
      "Beberapa kelengkapan tersumbat pada masa yang sama.",
      "Bau busuk berterusan walaupun selepas dibersihkan.",
      "Sumbatan kembali dalam masa singkat.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan paip kami untuk saluran dalaman dan luaran.",
    processTitle: "Cara Kami Membersihkan Saluran Tersumbat",
    processIntro: "Membersihkan sumbatan sahaja tidak memadai jika puncanya berulang.",
    processSteps: [
      { title: "Kenal pasti talian terjejas", description: "Kami menyemak kelengkapan mana yang terjejas." },
      { title: "Bersihkan sumbatan", description: "Sumbatan dibuang menggunakan kaedah yang sesuai." },
      { title: "Bilas dan uji", description: "Saluran dibilas dan aliran diuji semula." },
      { title: "Nasihat pencegahan", description: "Kami menerangkan punca supaya ia tidak berulang." },
    ],
    faqs: [
      { question: "Selamatkah menggunakan bahan kimia pembersih saluran?", answer: "Ia boleh membantu sumbatan ringan, tetapi penggunaan kerap boleh merosakkan paip lama. Sumbatan berulang lebih baik diperiksa." },
      { question: "Kenapa saluran dapur cepat tersumbat?", answer: "Minyak dan gris membeku di dinding paip dan memerangkap sisa makanan sehingga aliran menjadi sempit." },
      { question: "Apa maksudnya jika beberapa saluran tersumbat serentak?", answer: "Ia menunjukkan sumbatan berada di talian utama, bukan pada satu kelengkapan sahaja." },
      { question: "Bagaimana mengelakkan sumbatan berulang?", answer: "Gunakan penapis saluran, elakkan membuang minyak ke sinki, dan bersihkan saluran secara berkala." },
    ],
  },
  "toilet-problems": {
    ...base,
    name: "Masalah Tandas",
    title: "Masalah Tandas di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Tandas yang bocor, tidak berhenti mengalir atau kurang kuat pam dibaiki di Kuala Lumpur & Selangor. Punca, tanda dan penyelesaian.",
    h1: "Masalah Tandas",
    subtitle:
      "Tandas yang mengalir tanpa henti, bocor atau lemah pamnya membazir air dan boleh merosakkan lantai. Renovix membaiki tandas dan puncanya.",
    whatItMeans: [
      "Masalah tandas merangkumi tandas yang terus mengalir, pam yang lemah, air bertakung di tapak, atau tandas yang kerap tersumbat.",
      "Kebanyakan masalah datang daripada mekanisme di dalam tangki atau pengedap di bahagian bawah, dan boleh dibaiki tanpa menggantikan keseluruhan tandas.",
    ],
    commonCauses: [
      "Injap flapper yang haus atau tidak duduk dengan betul.",
      "Injap pengisi rosak atau pelampung ditetapkan pada aras salah.",
      "Rim atau perangkap tersumbat menyebabkan pam lemah.",
      "Pengedap di tapak yang gagal atau mangkuk yang retak.",
      "Sumbatan pada saluran menyebabkan air berpatah balik.",
      "Tandas lama atau pemasangan asal yang tidak kemas.",
    ],
    warningSigns: [
      "Tandas terus mengalir atau tangki tidak berhenti mengisi.",
      "Pam lemah dan tidak membersihkan mangkuk dengan baik.",
      "Air bertakung di sekeliling tapak tandas.",
      "Bunyi berdeguk atau kerap tersumbat.",
    ],
    solutions: [
      { title: "Diagnos masalah", description: "Kami memeriksa mekanisme tangki, pengedap dan saluran." },
      { title: "Baiki mekanisme", description: "Injap dan pelampung diganti atau diselaraskan." },
      { title: "Baiki kebocoran di tapak", description: "Pengedap diganti dan tandas dipasang semula dengan kemas." },
      { title: "Ganti tandas", description: "Jika mangkuk retak atau terlalu lama, penggantian dicadangkan." },
    ],
    whenToCall: [
      "Tandas mengalir tanpa henti dan bil air meningkat.",
      "Air keluar di tapak tandas atau lantai sentiasa lembap.",
      "Pam lemah walaupun tiada sumbatan yang jelas.",
      "Tandas kerap tersumbat tanpa sebab yang munasabah.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan paip kami, termasuk pemasangan tandas gantian.",
    processTitle: "Cara Kami Membaiki Masalah Tandas",
    processIntro: "Kebanyakan masalah tandas boleh dibaiki dengan menggantikan bahagian dalam.",
    processSteps: [
      { title: "Asingkan dan periksa", description: "Bekalan ditutup dan mekanisme diperiksa." },
      { title: "Baiki komponen", description: "Bahagian yang haus diganti dan diselaraskan." },
      { title: "Ganti jika perlu", description: "Tandas diganti hanya jika pembaikan tidak munasabah." },
      { title: "Uji dan sahkan", description: "Pam dan pengedap diuji sebelum kerja diserahkan." },
    ],
    faqs: [
      { question: "Kenapa tandas saya mengalir tanpa henti?", answer: "Biasanya kerana injap flapper tidak menutup rapat, atau injap pengisi tidak berhenti pada aras yang betul." },
      { question: "Adakah air di tapak tandas serius?", answer: "Ia patut diperiksa. Ia mungkin pengedap yang gagal, dan air yang meresap boleh merosakkan lantai." },
      { question: "Kenapa pam tandas lemah?", answer: "Rim atau perangkap yang tersumbat, atau aras air tangki yang terlalu rendah, adalah punca paling biasa." },
      { question: "Berbaloikah membaiki tandas lama?", answer: "Selalunya ya, kerana bahagian dalam mudah diganti. Mangkuk yang retak pula lebih baik digantikan." },
    ],
  },
  "low-water-pressure": {
    ...base,
    name: "Tekanan Air Rendah",
    title: "Tekanan Air Rendah di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Tekanan air rendah diperiksa dan dipulihkan di Kuala Lumpur & Selangor, daripada pili tersumbat hingga isu bekalan. Punca dan penyelesaian.",
    h1: "Tekanan Air Rendah",
    subtitle:
      "Tekanan air yang lemah pada pancuran atau pili selalunya isu paip atau bekalan. Renovix mencari puncanya dan memulihkan aliran yang kuat.",
    whatItMeans: [
      "Tekanan air rendah bermaksud aliran air yang lebih lemah daripada sepatutnya, sama ada di satu kelengkapan sahaja atau di seluruh rumah.",
      "Membezakan antara satu kelengkapan dan seluruh rumah adalah langkah pertama, kerana kedua-duanya menunjukkan punca yang sangat berbeza.",
    ],
    commonCauses: [
      "Aerator, kartrij atau kepala pancuran yang tersumbat kerak.",
      "Injap pengasing yang tidak dibuka sepenuhnya.",
      "Paip bekalan yang tersempit akibat kerak atau sisa.",
      "Isu tekanan daripada bekalan bangunan atau rangkaian air.",
      "Saiz paip masuk yang terlalu kecil untuk keperluan rumah.",
      "Pam penggalak yang rosak atau tidak mencukupi di unit tinggi.",
    ],
    warningSigns: [
      "Aliran lemah pada pancuran, pili atau seluruh rumah.",
      "Pancuran hanya menitis dan tidak menyembur.",
      "Tekanan rendah pada satu kelengkapan tetapi tidak pada yang lain.",
      "Tekanan menurun apabila pili atau mesin lain digunakan.",
    ],
    solutions: [
      { title: "Tentukan skop masalah", description: "Kami menyemak sama ada ia satu kelengkapan atau seluruh rumah." },
      { title: "Bersihkan aerator atau kelengkapan", description: "Kerak dibersihkan atau bahagian yang tersumbat diganti." },
      { title: "Periksa injap dan paip", description: "Injap dan rangkaian paip diperiksa untuk halangan." },
      { title: "Tangani bekalan atau cadangkan pam", description: "Jika puncanya bekalan, kami menerangkan pilihan yang munasabah." },
    ],
    whenToCall: [
      "Tekanan lemah di seluruh rumah.",
      "Tekanan menurun secara mendadak tanpa sebab.",
      "Hanya air panas atau hanya satu bilik air terjejas.",
      "Anda mahu tahu sama ada pam penggalak diperlukan.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan paip kami, termasuk pemeriksaan injap dan kelengkapan.",
    processTitle: "Cara Kami Memulihkan Tekanan Air",
    processIntro: "Kami menyemak dari kelengkapan ke injap utama untuk mencari titik sekatan.",
    processSteps: [
      { title: "Uji aliran", description: "Aliran diuji pada beberapa kelengkapan." },
      { title: "Periksa kelengkapan", description: "Aerator, kartrij dan kepala pancuran diperiksa." },
      { title: "Semak injap dan paip", description: "Injap pengasing dan paip bekalan diperiksa." },
      { title: "Cadangkan penyelesaian", description: "Kami menerangkan pilihan pembaikan atau peningkatan." },
    ],
    faqs: [
      { question: "Kenapa hanya satu pancuran lemah?", answer: "Biasanya kerana kepala pancuran atau kartrij tersumbat kerak, dan ia mudah dibersihkan atau diganti." },
      { question: "Kenapa tekanan menurun apabila mesin basuh digunakan?", answer: "Beberapa kelengkapan berkongsi bekalan yang sama. Jika paip masuk kecil, tekanan akan turun apabila permintaan meningkat." },
      { question: "Adakah pam penggalak sesuai untuk semua rumah?", answer: "Tidak semua. Ia berguna dalam keadaan tertentu, tetapi puncanya perlu disahkan dahulu sebelum pam dicadangkan." },
      { question: "Adakah tekanan rendah tanda kebocoran?", answer: "Kadangkala. Jika tekanan menurun bersama bil air yang meningkat, kebocoran perlu disiasat." },
    ],
  },
};
