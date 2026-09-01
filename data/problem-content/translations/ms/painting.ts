import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Dinding dalaman dan fasad rumah teres yang terdedah kepada panas serta hujan." },
  { label: "Kondominium", note: "Kerja dinding dalam unit mengikut waktu kerja dan peraturan pengurusan bangunan." },
  { label: "Pangsapuri", note: "Pembaikan dinding dan kerja cat berskala kecil di dalam unit." },
  { label: "Semi-D & Banglo", note: "Kawasan dinding yang lebih luas termasuk dinding luar dan pagar." },
  { label: "Pejabat & Kedai", note: "Kerja dinding di ruang komersial yang perlu dijadualkan mengikut waktu operasi." },
  { label: "Projek Renovasi", note: "Pembaikan dinding dan cat sebagai peringkat akhir selepas kerja lain siap." },
];

const areasNote =
  "Kerja pembaikan dinding dan mengecat tersedia di seluruh Kuala Lumpur, Selangor dan Lembah Klang untuk kediaman dan premis perniagaan.";

const propertyTypesIntro =
  "Cara kami mengendalikan dinding bergantung pada jenis bangunan dan tahap pendedahan kepada kelembapan.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "peeling-paint": {
    ...base,
    name: "Cat Mengelupas",
    title: "Cat Mengelupas di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Cat yang mengelupas atau menggelembung dibaiki di Kuala Lumpur & Selangor dengan penyediaan permukaan yang betul. Punca, tanda amaran dan penyelesaian.",
    h1: "Cat Mengelupas",
    subtitle:
      "Cat yang mengelupas atau menggelembung biasanya bermakna permukaan di bawahnya belum bersedia. Renovix menyediakan dinding dengan betul supaya kemasan bertahan.",
    whatItMeans: [
      "Cat mengelupas berlaku apabila lapisan cat terangkat, mengelupas atau menggelembung daripada dinding atau siling. Ia mungkin hanya tompok kecil di sudut, atau kawasan besar yang cat tertanggal seperti kepingan.",
      "Ia jarang disebabkan kualiti cat semata-mata. Puncanya hampir selalu permukaan yang tidak disediakan dengan betul, atau kelembapan yang bergerak di sebalik lapisan cat.",
    ],
    commonCauses: [
      "Kelembapan atau kondensasi di sebalik cat, selalunya daripada dinding lembap atau kebocoran.",
      "Cat disapu pada permukaan berhabuk, berminyak atau tidak disediakan.",
      "Mengecat semula di atas lapisan lama yang sudah lemah tanpa mengikis atau primer.",
      "Jenis cat yang tidak sesuai untuk permukaan atau tahap pendedahan.",
      "Masa pengeringan yang tidak mencukupi antara lapisan.",
      "Dinding luar yang terdedah kepada hujan lebat dan matahari terik.",
    ],
    warningSigns: [
      "Cat menggelembung atau terangkat secara bertompok, terutamanya berhampiran kawasan lembap.",
      "Serpihan cat gugur ke lantai atau jatuh dari siling.",
      "Cat retak berpetak sebelum mengelupas.",
      "Kelembapan, kulat atau tompok air kelihatan di bawah cat yang terkelupas.",
    ],
    solutions: [
      { title: "Cari punca sebelum mengecat semula", description: "Kami menyemak kelembapan dan keadaan permukaan sebelum sebarang kerja cat dimulakan." },
      { title: "Kikis dan sediakan permukaan", description: "Cat yang lemah dikikis sehingga permukaan stabil, kemudian diratakan." },
      { title: "Cat semula dengan kemasan sesuai", description: "Primer dan jenis cat dipilih mengikut permukaan dan tahap kelembapan." },
      { title: "Selesaikan masalah kelembapan", description: "Jika terdapat kebocoran atau kalis air yang gagal, ia perlu dibaiki dahulu." },
    ],
    whenToCall: [
      "Cat mengelupas di kawasan luas dan puncanya tidak jelas.",
      "Pengelupasan disertai kelembapan, kulat atau tompok air.",
      "Dinding sudah dicat beberapa kali tetapi terus mengelupas.",
      "Cat luar terkelupas sehingga dinding terdedah kepada cuaca.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan cat kami, dengan sokongan kerja kalis air apabila kelembapan menjadi punca.",
    processTitle: "Cara Kami Membaiki Cat Mengelupas",
    processIntro: "Penyediaan permukaan ialah bahagian yang menentukan berapa lama kemasan baharu bertahan.",
    processSteps: [
      { title: "Nilai punca", description: "Kami memeriksa kelembapan, keadaan cat lama dan permukaan di bawahnya." },
      { title: "Kikis dan baiki", description: "Cat lemah dikikis, retak ditampal dan permukaan diratakan." },
      { title: "Primer dan cat semula", description: "Primer yang sesuai disapu sebelum lapisan akhir." },
      { title: "Sahkan kemasan", description: "Kami menyemak kemasan di bawah cahaya sebelum menyerahkan kerja." },
    ],
    faqs: [
      { question: "Boleh saya cat terus di atas cat yang mengelupas?", answer: "Tidak. Cat baharu akan mengelupas bersama lapisan lama. Bahagian yang lemah mesti dikikis dahulu sehingga permukaan stabil." },
      { question: "Kenapa cat mengelupas tidak lama selepas dicat semula?", answer: "Selalunya kerana kelembapan masih ada di dalam dinding, atau permukaan tidak dibersihkan dan di-primer sebelum dicat." },
      { question: "Adakah cat mengelupas tanda kelembapan?", answer: "Selalunya ya, terutamanya jika ia berlaku di bilik air, dapur atau dinding luar. Punca kelembapan perlu disahkan dahulu." },
      { question: "Cat jenis apa sesuai untuk bilik yang lembap?", answer: "Cat tahan lembap atau anti-kulat, dengan primer yang sesuai. Pengudaraan yang lebih baik juga membantu mengurangkan masalah berulang." },
    ],
  },
  "cracked-walls": {
    ...base,
    name: "Dinding Retak",
    title: "Dinding Retak di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Dinding retak dibaiki dan dikemas di Kuala Lumpur & Selangor, dengan nasihat jujur bila retak perlu diperiksa lebih lanjut. Punca dan penyelesaian.",
    h1: "Dinding Retak",
    subtitle:
      "Retak dinding boleh jadi kosmetik atau struktur. Renovix membaiki plaster yang retak dan memberitahu anda bila sesuatu retak perlu perhatian lebih.",
    whatItMeans: [
      "Dinding retak ialah keretakan pada plaster atau kemasan cat dinding dalaman atau luaran. Ia berbeza daripada retak rambut halus sehinggalah retak yang lebih dalam pada plaster atau kerja bata.",
      "Di kebanyakan rumah di Malaysia, retak rambut adalah kesan biasa daripada enapan bangunan dan plaster yang mengering. Retak yang semakin membesar pula perlu diperiksa dengan lebih teliti.",
    ],
    commonCauses: [
      "Enapan dan pergerakan bangunan dari masa ke masa.",
      "Pengecutan plaster selepas ia kering.",
      "Pergerakan pada pertemuan dinding dengan kusen pintu atau rasuk.",
      "Pengembangan dan pengecutan haba pada dinding luar.",
      "Pergerakan struktur atau masalah pada dinding menanggung beban.",
      "Kelembapan dalam dinding yang menyebabkan plaster mengembang dan retak.",
    ],
    warningSigns: [
      "Retak halus yang cepat menjadi lebih panjang atau lebar.",
      "Retak berbentuk pepenjuru atau seperti anak tangga.",
      "Retak di sudut dinding atau sekeliling kusen pintu dan tingkap.",
      "Retak disertai tonjolan, perbezaan aras atau pintu yang mula tersangkut.",
    ],
    solutions: [
      { title: "Nilai retakan", description: "Kami menyemak lebar, arah dan corak retak untuk membezakan retak kosmetik dan retak yang perlu perhatian." },
      { title: "Sediakan dan isi retak", description: "Retak dibuka sedikit, dibersihkan dan diisi supaya tampalan melekat kekal." },
      { title: "Rawat puncanya", description: "Jika kelembapan menjadi punca, ia diselesaikan sebelum kemasan dibuat." },
      { title: "Cat semula dengan kemasan rata", description: "Kawasan tampalan diratakan dan dicat supaya tidak kelihatan." },
    ],
    whenToCall: [
      "Retak semakin membesar atau muncul dalam corak tertentu.",
      "Retak disertai tonjolan dinding atau lantai yang menurun.",
      "Retak berhampiran elemen struktur atau kawasan menanggung beban.",
      "Anda mahukan kemasan rata dan bukan tampalan yang kelihatan.",
    ],
    relatedServiceNote:
      "Pembaikan retak dikendalikan oleh pasukan cat dan renovasi kami, bergantung pada kedalaman retak tersebut.",
    processTitle: "Cara Kami Membaiki Dinding Retak",
    processIntro: "Retak perlu dibuka dan diisi dengan betul, bukan sekadar ditutup cat.",
    processSteps: [
      { title: "Periksa retakan", description: "Kami menilai jenis retak dan kemungkinan puncanya." },
      { title: "Sediakan permukaan", description: "Retak dibuka, bahagian longgar dibuang dan permukaan dibersihkan." },
      { title: "Isi dan kukuhkan", description: "Retak diisi dan diperkukuh dengan tape atau mesh jika perlu." },
      { title: "Amplas, primer dan cat", description: "Permukaan diratakan, di-primer dan dicat sehingga sekata." },
    ],
    faqs: [
      { question: "Adakah retak rambut pada dinding normal?", answer: "Retak rambut halus adalah biasa, terutamanya pada rumah baharu dan pada plaster yang sedang mengering. Ia kosmetik selagi ia tidak membesar." },
      { question: "Bila retak dinding menjadi masalah struktur?", answer: "Apabila ia lebar, berbentuk pepenjuru, semakin membesar, atau disertai pintu yang tersangkut dan lantai yang menurun. Keadaan begini perlu penilaian lanjut." },
      { question: "Boleh saya isi dan cat sahaja?", answer: "Untuk retak halus, boleh. Tetapi jika retak itu bergerak, tampalan akan pecah semula melainkan ia dibuka dan diperkukuh dengan betul." },
      { question: "Bagaimana membaiki retak yang berulang?", answer: "Retak berulang perlu dibuka, diperkukuh dengan mesh atau tape, dan puncanya — biasanya pergerakan atau kelembapan — perlu ditangani." },
    ],
  },
  "mouldy-walls": {
    ...base,
    name: "Dinding Berkulat",
    title: "Dinding Berkulat di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Dinding berkulat dirawat di Kuala Lumpur & Selangor dengan menangani punca kelembapan dan menggunakan cat anti-kulat. Punca, tanda dan penyelesaian.",
    h1: "Dinding Berkulat",
    subtitle:
      "Kulat pada dinding ialah masalah kelembapan, bukan masalah cat. Renovix merawat kulat dan menangani kelembapan yang menghidupkannya.",
    whatItMeans: [
      "Kulat pada dinding ialah pertumbuhan gelap dan berbulu yang muncul di tempat yang sentiasa lembap dan kurang pengudaraan. Ia biasanya kelihatan sebagai tompok hitam, hijau atau putih, selalunya disertai bau hapak.",
      "Iklim panas dan lembap di Lembah Klang menjadikan kulat masalah biasa, terutamanya di bilik air, dapur dan bilik yang kurang aliran udara.",
    ],
    commonCauses: [
      "Pengudaraan yang lemah dan kelembapan terperangkap.",
      "Kondensasi pada dinding sejuk yang kekal lembap.",
      "Kebocoran tersembunyi daripada paip, bumbung atau rongga dinding.",
      "Kelembapan naik dari lantai di rumah tanpa lapisan penghalang.",
      "Menyidai pakaian di dalam rumah atau penghawa dingin yang menambah kelembapan.",
      "Mengecat di atas permukaan yang masih lembap.",
    ],
    warningSigns: [
      "Tompok gelap, berbulu atau berdebu pada dinding, siling atau sudut.",
      "Bau hapak yang berterusan di dalam bilik.",
      "Cat mengelupas, menggelembung atau bernoda berhampiran kulat.",
      "Kulat kembali tidak lama selepas dibersihkan.",
    ],
    solutions: [
      { title: "Kenal pasti punca kelembapan", description: "Kami menyemak sama ada ia berpunca daripada kebocoran, kondensasi atau pengudaraan." },
      { title: "Rawat dan bersihkan permukaan", description: "Kulat dibersihkan dan permukaan dirawat sebelum sebarang cat disapu." },
      { title: "Gunakan cat anti-kulat", description: "Primer dan cat anti-kulat digunakan untuk melambatkan pertumbuhan semula." },
      { title: "Baiki punca kelembapan", description: "Kebocoran atau kalis air yang gagal dibaiki supaya masalah tidak berulang." },
    ],
    whenToCall: [
      "Kulat kembali setiap kali selepas dibersihkan.",
      "Kulat menutup kawasan yang luas atau disertai bau lembap.",
      "Terdapat juga cat mengelupas, tompok air atau kebocoran yang disyaki.",
      "Kulat semakin merebak dan anda bimbang tentang kesihatan penghuni.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan cat kami bersama kerja kalis air apabila kelembapan datang daripada kebocoran.",
    processTitle: "Cara Kami Merawat Dinding Berkulat",
    processIntro: "Tanpa menyelesaikan kelembapan, kulat akan kembali walaupun selepas dicat semula.",
    processSteps: [
      { title: "Semak punca kelembapan", description: "Kami memeriksa kebocoran, pengudaraan dan corak kondensasi." },
      { title: "Rawat kulat", description: "Permukaan dibersihkan dan dirawat sehingga bersih." },
      { title: "Baiki dan primer", description: "Plaster yang rosak dibaiki dan primer sesuai disapu." },
      { title: "Cat dengan cat anti-kulat", description: "Lapisan akhir menggunakan cat yang direka untuk kawasan lembap." },
    ],
    faqs: [
      { question: "Cukupkah membersih kulat dengan peluntur?", answer: "Peluntur menghilangkan warna kulat di permukaan, tetapi tidak menyelesaikan kelembapan yang menghidupkannya. Kulat akan kembali jika punca tidak dirawat." },
      { question: "Kenapa kulat tumbuh di satu sudut sahaja?", answer: "Sudut selalunya lebih sejuk dan kurang aliran udara, jadi kondensasi berkumpul di situ terlebih dahulu." },
      { question: "Adakah kulat berbahaya kepada kesihatan?", answer: "Kulat boleh menjejaskan penghidap alahan dan masalah pernafasan. Kawasan yang luas patut dirawat dan puncanya diselesaikan." },
      { question: "Boleh kulat ditutup dengan cat?", answer: "Tidak. Mengecat di atas kulat hanya menyembunyikannya buat sementara; ia akan muncul semula melalui lapisan cat baharu." },
    ],
  },
  "faded-paint": {
    ...base,
    name: "Cat Pudar",
    title: "Cat Pudar di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Cat yang pudar dipulihkan di Kuala Lumpur & Selangor dengan padanan warna dan kemasan yang lebih tahan cuaca. Punca dan penyelesaian.",
    h1: "Cat Pudar",
    subtitle:
      "Cat pudar apabila matahari dan cuaca menang. Renovix memadankan warna anda dan mengecat semula untuk kemasan yang segar dan sekata.",
    whatItMeans: [
      "Cat pudar ialah kehilangan warna dan kilauan pada permukaan yang dicat, terutamanya pada dinding yang terdedah kepada matahari dan hujan. Pigmen cat terurai dan permukaan kelihatan malap, belang atau beberapa tona lebih cerah.",
      "Ia paling ketara pada dinding yang menghadap matahari, tetapi kawasan dalaman juga boleh pudar selepas bertahun-tahun.",
    ],
    commonCauses: [
      "Pendedahan berpanjangan kepada sinaran ultraungu.",
      "Haba dan perubahan suhu pada dinding luar.",
      "Cat berkualiti rendah yang digunakan pada asalnya.",
      "Warna tertentu yang memang lebih mudah pudar.",
      "Mengecat sebahagian kawasan dengan warna yang tidak sepadan.",
      "Usia, di mana lapisan cat terurai secara beransur-ansur.",
    ],
    warningSigns: [
      "Dinding kelihatan jauh lebih cerah berbanding dinding yang terlindung.",
      "Warna kelihatan belang pada satu permukaan.",
      "Permukaan cat menjadi berdebu apabila disapu tangan.",
      "Kawasan yang dicat semula tidak sepadan dengan bahagian lain.",
    ],
    solutions: [
      { title: "Padankan warna asal", description: "Kami memadankan warna sedia ada supaya kawasan baharu menyatu." },
      { title: "Cat semula dengan kemasan tahan lasak", description: "Cat luar yang lebih tahan UV digunakan untuk dinding yang terdedah." },
      { title: "Cat keseluruhan permukaan", description: "Untuk hasil paling sekata, satu permukaan penuh dicat dari tepi ke tepi." },
      { title: "Sediakan permukaan dahulu", description: "Permukaan berdebu dibersihkan dan di-primer sebelum cat disapu." },
    ],
    whenToCall: [
      "Dinding sudah terlalu pudar sehingga kelihatan tidak sekata.",
      "Anda mahu memulihkan warna asal di seluruh bilik atau fasad.",
      "Permukaan juga berdebu, mengelupas atau memerlukan pembaikan.",
      "Anda mengecat sebahagian bilik dan perlu ia sepadan.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan cat kami sebagai sebahagian daripada kerja mengecat dalaman atau luaran.",
    processTitle: "Cara Kami Memulihkan Cat Pudar",
    processIntro: "Padanan warna dan penyediaan permukaan menentukan sama ada kemasan baharu kelihatan sekata.",
    processSteps: [
      { title: "Nilai permukaan dan warna", description: "Kami menyemak keadaan cat sedia ada dan memadankan tona." },
      { title: "Sediakan dinding", description: "Permukaan dibersihkan, dibaiki dan di-primer jika perlu." },
      { title: "Cat kawasan berkenaan", description: "Cat disapu mengikut permukaan penuh supaya tiada garis peralihan." },
      { title: "Semak kemasan", description: "Kemasan diperiksa di bawah cahaya semula jadi." },
    ],
    faqs: [
      { question: "Boleh cat pudar dipulihkan tanpa mengecat semula?", answer: "Pembersihan boleh membantu jika permukaan hanya berdebu, tetapi warna yang sudah terurai hanya boleh dipulihkan dengan cat baharu." },
      { question: "Kenapa satu dinding pudar lebih cepat?", answer: "Dinding yang menghadap matahari menerima lebih banyak sinaran UV dan haba, jadi pigmennya terurai lebih awal." },
      { question: "Bagaimana mengurangkan cat daripada pudar?", answer: "Gunakan cat luar berkualiti dengan rintangan UV, pastikan permukaan disediakan dengan betul, dan pilih warna yang lebih stabil untuk fasad." },
      { question: "Adakah mengecat satu dinding akan kelihatan pelik?", answer: "Ia boleh berlaku jika warna tidak sepadan sepenuhnya. Mengecat dari sudut ke sudut menjadikan peralihan itu jauh kurang ketara." },
    ],
  },
  "uneven-paint": {
    ...base,
    name: "Cat Tidak Sekata",
    title: "Cat Tidak Sekata di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Cat belang, berjalur atau tidak sekata dibaiki di Kuala Lumpur & Selangor dengan penyediaan permukaan dan lapisan yang betul. Punca dan penyelesaian.",
    h1: "Cat Tidak Sekata",
    subtitle:
      "Cat yang belang, berjalur atau berbeza kilauan ialah masalah penyediaan dan sapuan. Renovix meratakan permukaan dan mengecat semula dengan betul.",
    whatItMeans: [
      "Cat tidak sekata bermaksud permukaan yang dicat tidak konsisten — kelihatan berjalur, bertompok, ada kesan roller atau perbezaan kilauan antara satu bahagian dengan bahagian lain.",
      "Puncanya hampir selalu cara permukaan disediakan dan cara cat disapu, bukan cat itu sendiri.",
    ],
    commonCauses: [
      "Permukaan plaster yang kasar dan tidak diratakan.",
      "Mengecat di atas tampalan tanpa mengamplas sehingga rata.",
      "Kesan roller kerana cat disapu terlalu tebal atau terlalu nipis.",
      "Perbezaan warna atau kilauan kerana menggunakan cat dari batch berbeza.",
      "Hanya satu lapisan disapu pada permukaan yang memerlukan primer.",
      "Pencahayaan yang lemah semasa kerja menyembunyikan sapuan yang tidak sekata.",
    ],
    warningSigns: [
      "Kesan roller, jalur atau garis bertindih kelihatan pada dinding.",
      "Tompok kilat atau kusam pada permukaan yang sepatutnya sekata.",
      "Tampalan pembaikan kelihatan menonjol melalui cat.",
      "Cat kelihatan berbeza di bawah pencahayaan yang berlainan.",
    ],
    solutions: [
      { title: "Ratakan dan sediakan permukaan", description: "Permukaan diamplas dan diratakan supaya cat melekat sekata." },
      { title: "Sapu lapisan yang sekata", description: "Bilangan lapisan yang betul disapu dengan teknik yang konsisten." },
      { title: "Gunakan primer atau lapisan asas", description: "Primer digunakan supaya penyerapan permukaan seragam." },
      { title: "Selaraskan kemasan", description: "Kemasan disemak di bawah cahaya dan diselaraskan sehingga sekata." },
    ],
    whenToCall: [
      "Cat kelihatan berjalur atau belang walaupun sudah disapu semula.",
      "Tampalan pembaikan kelihatan menembusi lapisan cat.",
      "Kilauan tidak sekata pada satu dinding, terutamanya di bawah cahaya terang.",
      "Anda mahukan kemasan yang benar-benar rata untuk dinding ciri atau keseluruhan bilik.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan cat kami, termasuk skim coat apabila permukaan perlu diratakan sepenuhnya.",
    processTitle: "Cara Kami Membaiki Cat Tidak Sekata",
    processIntro: "Kemasan sekata bermula daripada permukaan yang rata dan penyerapan yang seragam.",
    processSteps: [
      { title: "Periksa kemasan", description: "Kami menyemak permukaan di bawah cahaya untuk mengesan jalur dan tompok." },
      { title: "Sediakan permukaan", description: "Amplas, tampal dan ratakan bahagian yang bermasalah." },
      { title: "Primer dan cat semula", description: "Primer disapu, diikuti lapisan cat yang mencukupi." },
      { title: "Semak di bawah cahaya", description: "Kemasan akhir disemak semula sebelum diserahkan." },
    ],
    faqs: [
      { question: "Kenapa cat kelihatan berjalur selepas dicat semula?", answer: "Biasanya kerana lapisan terlalu nipis, teknik roller tidak konsisten, atau permukaan menyerap cat secara tidak sekata tanpa primer." },
      { question: "Boleh cat tidak sekata dibaiki dengan satu lapisan lagi?", answer: "Kadangkala boleh, tetapi jika masalahnya permukaan yang kasar atau tampalan yang menonjol, ia perlu diratakan dahulu." },
      { question: "Apa punca tompok kusam pada cat?", answer: "Bahagian yang menyerap lebih banyak cat, seperti tampalan atau plaster baharu, akan kelihatan lebih kusam jika tidak di-primer." },
      { question: "Berbaloikah menggunakan primer sebelum mengecat?", answer: "Ya. Primer menyeragamkan penyerapan permukaan dan menjadikan warna akhir lebih konsisten." },
    ],
  },
  "wall-surface-damage": {
    ...base,
    name: "Kerosakan Permukaan Dinding",
    title: "Kerosakan Permukaan Dinding di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Lubang, kemek, plaster reput dan dinding rosak air dibaiki di Kuala Lumpur & Selangor sebelum dicat semula. Punca, tanda dan penyelesaian.",
    h1: "Kerosakan Permukaan Dinding",
    subtitle:
      "Lubang, kemek, plaster reput dan dinding rosak air semuanya boleh dibaiki. Renovix memulihkan permukaan supaya ia kelihatan dan boleh dicat seperti baharu.",
    whatItMeans: [
      "Kerosakan permukaan dinding merangkumi kerosakan fizikal dan kelembapan yang menjadikan dinding dalam keadaan buruk — lubang skru, kemek, plaster yang retak atau reput, serta tompok tempat air menyebabkan cat menggelembung.",
      "Permukaan begini tidak boleh dicat terus. Ia perlu dibaiki dan diratakan dahulu, jika tidak kerosakan itu akan kelihatan melalui lapisan cat baharu.",
    ],
    commonCauses: [
      "Lubang dan kemek akibat perabot, tombol pintu atau barang yang dialihkan.",
      "Plaster yang retak atau reput akibat usia dan kelembapan.",
      "Kerosakan air yang mengembangkan atau mengangkat plaster.",
      "Kelengkapan yang dibuang meninggalkan lubang dan tampalan.",
      "Hentakan dan haus di kawasan yang kerap dilalui.",
      "Kemasan asal yang lemah atau permukaan yang tidak pernah disediakan dengan betul.",
    ],
    warningSigns: [
      "Lubang, kemek atau calar yang jelas kelihatan di bawah cahaya.",
      "Plaster yang reput, retak atau berdebu dan mudah gugur.",
      "Cat menggelembung atau bernoda akibat air di sebaliknya.",
      "Dinding yang terlalu rosak untuk dicat terus.",
    ],
    solutions: [
      { title: "Baiki kerosakan", description: "Lubang dan kemek diisi, plaster yang reput dibuang dan digantikan." },
      { title: "Rawat punca kelembapan", description: "Jika kerosakan berpunca daripada air, sumbernya diselesaikan dahulu." },
      { title: "Ratakan permukaan", description: "Putty atau skim coat digunakan supaya permukaan kembali rata." },
      { title: "Cat semula kawasan", description: "Primer dan cat disapu supaya tampalan tidak kelihatan." },
    ],
    whenToCall: [
      "Kerosakan lebih daripada sekadar lubang kecil.",
      "Plaster reput atau rosak air di kawasan yang luas.",
      "Kerosakan berulang selepas pembaikan sebelum ini.",
      "Anda mahukan kemasan rata di seluruh dinding.",
    ],
    relatedServiceNote:
      "Pembaikan dinding dikendalikan oleh pasukan cat dan renovasi kami, bergantung pada skop kerosakan.",
    processTitle: "Cara Kami Membaiki Kerosakan Permukaan Dinding",
    processIntro: "Permukaan mesti stabil dan rata sebelum sebarang cat disapu.",
    processSteps: [
      { title: "Nilai kerosakan", description: "Kami menyemak kedalaman kerosakan dan tanda kelembapan." },
      { title: "Potong dan baiki", description: "Bahagian yang reput dibuang dan plaster baharu dipasang." },
      { title: "Ratakan permukaan", description: "Putty atau skim coat disapu dan diamplas rata." },
      { title: "Primer dan cat", description: "Primer disapu sebelum lapisan cat akhir." },
    ],
    faqs: [
      { question: "Boleh lubang kecil di dinding dibaiki dengan mudah?", answer: "Boleh. Lubang kecil boleh diisi, diamplas dan dicat sehingga tidak kelihatan dalam satu lawatan." },
      { question: "Kenapa plaster pada dinding ini asyik reput?", answer: "Biasanya kerana kelembapan di dalam dinding. Selagi punca kelembapan tidak diselesaikan, plaster baharu akan reput semula." },
      { question: "Perlukah kerosakan air dibaiki sebelum mengecat?", answer: "Ya. Mengecat di atas plaster yang masih lembap akan menyebabkan cat menggelembung dan bernoda semula." },
      { question: "Adakah tampalan akan kelihatan selepas dicat?", answer: "Jika ia diratakan dan di-primer dengan betul, tampalan sepatutnya tidak kelihatan selepas kemasan akhir." },
    ],
  },
};
