import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Kerja pembaikan kecil di seluruh rumah dalam satu lawatan." },
  { label: "Kondominium", note: "Pemasangan dalam unit mengikut peraturan dan waktu kerja bangunan." },
  { label: "Pangsapuri", note: "Pembaikan dan pemasangan kecil untuk penghuni dan pemilik." },
  { label: "Semi-D & Banglo", note: "Senarai kerja yang lebih panjang merangkumi kawasan dalam dan luar." },
  { label: "Pejabat & Kedai", note: "Pembaikan kecil premis perniagaan tanpa mengganggu operasi." },
  { label: "Projek Renovasi", note: "Kerja kemasan dan pemasangan akhir selepas renovasi siap." },
];

const areasNote =
  "Servis handyman tersedia di seluruh Kuala Lumpur, Selangor dan Lembah Klang untuk kediaman dan premis perniagaan.";

const propertyTypesIntro =
  "Kebanyakan kerja ini selesai dalam satu lawatan, mengikut jenis dinding dan akses ke lokasi.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "door-problems": {
    ...base,
    name: "Masalah Pintu",
    title: "Masalah Pintu di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Pintu tersangkut, berdecit atau tidak boleh ditutup dibaiki di Kuala Lumpur & Selangor. Punca, tanda amaran dan penyelesaian.",
    h1: "Masalah Pintu",
    subtitle:
      "Pintu yang tersangkut, berdecit atau tidak mahu tertutup ialah masalah engsel atau kusen. Renovix melaraskan dan membaiki pintu supaya ia bergerak lancar.",
    whatItMeans: [
      "Masalah pintu merangkumi pintu yang bergesel dengan lantai, tidak menutup rapat, berdecit kuat, atau mempunyai jurang yang tidak sekata di sekelilingnya.",
      "Puncanya biasanya engsel yang longgar, kusen yang beranjak, atau kayu yang mengembang akibat kelembapan — bukan pintu itu sendiri yang rosak.",
    ],
    commonCauses: [
      "Engsel longgar atau haus menyebabkan pintu turun.",
      "Kelembapan menyebabkan pintu atau kusen mengembang.",
      "Bahagian tepi pintu yang tercalar, sumbing atau retak.",
      "Kusen yang beranjak sehingga pintu tidak sejajar.",
      "Selak atau plat penerima yang tidak sejajar.",
      "Haus akibat penggunaan bertahun-tahun, terutamanya pada pintu berat.",
    ],
    warningSigns: [
      "Pintu bergesel atau perlu ditolak kuat untuk ditutup.",
      "Pintu turun sebelah dan tidak mahu terkunci.",
      "Bunyi berdecit atau bergeser apabila pintu dibuka.",
      "Jurang tidak sekata di sekeliling pintu.",
    ],
    solutions: [
      { title: "Laraskan engsel", description: "Engsel diketatkan atau diselaraskan supaya pintu kembali sejajar." },
      { title: "Ketam atau amplas pintu", description: "Bahagian yang mengembang dikurangkan supaya ia tidak bergesel." },
      { title: "Selaraskan selak", description: "Plat penerima dilaraskan supaya pintu terkunci dengan mudah." },
      { title: "Baiki atau ganti pintu", description: "Jika pintu sudah rosak teruk, penggantian dicadangkan." },
    ],
    whenToCall: [
      "Pintu tidak boleh ditutup atau dikunci dengan betul.",
      "Pintu turun sebelah atau engsel tertanggal dari kusen.",
      "Pintu bergesel dengan lantai atau kusen.",
      "Anda mahu memasang pintu baharu.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan handyman kami dan biasanya selesai dalam satu lawatan.",
    processTitle: "Cara Kami Membaiki Masalah Pintu",
    processIntro: "Kebanyakan pintu hanya perlu dilaraskan, bukan diganti.",
    processSteps: [
      { title: "Nilai pintu", description: "Kami menyemak engsel, kusen dan jurang di sekelilingnya." },
      { title: "Laraskan atau baiki", description: "Engsel dan selak dilaraskan sehingga sejajar." },
      { title: "Baiki kerosakan", description: "Bahagian yang rosak ditampal atau dikemas." },
      { title: "Uji pergerakan", description: "Pintu diuji buka dan tutup sebelum diserahkan." },
    ],
    faqs: [
      { question: "Kenapa pintu saya tiba-tiba tersangkut?", answer: "Selalunya kerana kelembapan menyebabkan kayu mengembang, atau engsel sudah longgar sehingga pintu turun sedikit." },
      { question: "Boleh pintu dibaiki tanpa diganti?", answer: "Selalunya boleh. Melaraskan engsel dan selak sudah menyelesaikan kebanyakan masalah." },
      { question: "Kenapa pintu berdecit?", answer: "Engsel yang kering atau haus. Ia boleh dilincirkan, dan jika masih berdecit, engsel diganti." },
      { question: "Berapa lama kerja pembaikan pintu?", answer: "Kebanyakan pelarasan selesai dalam masa yang singkat pada lawatan yang sama." },
    ],
  },
  "lock-problems": {
    ...base,
    name: "Masalah Kunci",
    title: "Masalah Kunci di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Kunci yang keras, tersangkut atau tidak boleh dipusing dibaiki atau diganti di Kuala Lumpur & Selangor. Punca dan penyelesaian.",
    h1: "Masalah Kunci",
    subtitle:
      "Kunci yang tersangkut atau tidak boleh dipusing ialah risiko keselamatan. Renovix membaiki atau menggantikan kunci supaya rumah anda kekal selamat.",
    whatItMeans: [
      "Masalah kunci merangkumi kunci yang keras dipusing, selak yang tidak masuk, atau kunci yang langsung tidak berfungsi.",
      "Kebanyakannya berpunca daripada mekanisme yang haus atau kunci yang tidak sejajar dengan plat penerima, dan boleh diselesaikan tanpa menukar keseluruhan pintu.",
    ],
    commonCauses: [
      "Habuk dan kotoran terkumpul dalam mekanisme kunci.",
      "Anak kunci yang haus atau bengkok.",
      "Kunci atau selak yang tidak sejajar dengan kusen.",
      "Mekanisme kunci yang tersekat atau rosak.",
      "Silinder kunci yang sudah lama dan tidak lagi boleh diharap.",
      "Karat pada kunci pintu luar akibat pendedahan cuaca.",
    ],
    warningSigns: [
      "Anak kunci sukar dimasukkan atau dipusing.",
      "Kunci tersekat atau tombol menjadi keras.",
      "Pintu tidak terkunci walaupun kunci dipusing.",
      "Anak kunci patah di dalam lubang kunci.",
    ],
    solutions: [
      { title: "Diagnos kunci", description: "Kami menyemak sama ada masalahnya mekanisme, penjajaran atau anak kunci." },
      { title: "Lincir dan laraskan", description: "Mekanisme dibersihkan dan plat penerima dilaraskan." },
      { title: "Ganti silinder atau kunci", description: "Kunci yang rosak diganti dengan yang baharu." },
      { title: "Tingkatkan keselamatan", description: "Kami mencadangkan kunci yang lebih sesuai untuk pintu berkenaan." },
    ],
    whenToCall: [
      "Kunci sukar dipusing atau kerap tersekat.",
      "Pintu tidak terkunci dengan rapat.",
      "Anak kunci patah atau hilang.",
      "Anda mahu menukar kunci selepas berpindah masuk.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan handyman kami untuk pintu dalaman dan pintu utama.",
    processTitle: "Cara Kami Membaiki Masalah Kunci",
    processIntro: "Kami menyemak penjajaran pintu dahulu kerana ia punca paling biasa.",
    processSteps: [
      { title: "Nilai kunci", description: "Kami menguji kunci, selak dan penjajaran pintu." },
      { title: "Servis mekanisme", description: "Kunci dibersihkan, dilincirkan dan dilaraskan." },
      { title: "Ganti jika perlu", description: "Silinder atau set kunci diganti jika sudah rosak." },
      { title: "Uji keselamatan", description: "Kunci diuji beberapa kali sebelum kerja selesai." },
    ],
    faqs: [
      { question: "Kenapa kunci menjadi keras dipusing?", answer: "Biasanya kerana kotoran dalam silinder atau pintu yang sudah tidak sejajar dengan plat penerima." },
      { question: "Boleh kunci dibaiki atau perlu diganti?", answer: "Jika mekanisme masih elok, pembersihan dan pelarasan memadai. Silinder yang haus lebih baik diganti." },
      { question: "Anak kunci patah dalam lubang, boleh dikeluarkan?", answer: "Selalunya boleh, tetapi jika silinder sudah rosak, ia perlu diganti." },
      { question: "Patutkah saya tukar kunci selepas berpindah?", answer: "Ia langkah yang berbaloi kerana anda tidak tahu berapa salinan kunci lama yang masih ada." },
    ],
  },
  "curtain-installation": {
    ...base,
    name: "Pemasangan Langsir",
    title: "Pemasangan Langsir di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Rod dan trek langsir dipasang lurus dan kukuh di Kuala Lumpur & Selangor mengikut jenis dinding. Punca masalah dan penyelesaian.",
    h1: "Pemasangan Langsir",
    subtitle:
      "Langsir tergantung lebih kemas dan tahan lama apabila diukur dan dipasang dengan betul. Renovix memasang rod dan trek dengan kukuh.",
    whatItMeans: [
      "Pemasangan langsir melibatkan pengukuran, pemilihan pengikat yang sesuai dengan jenis dinding, dan pemasangan rod atau trek pada aras yang betul.",
      "Kebanyakan masalah langsir bukan pada kainnya, tetapi pada braket yang longgar atau rod yang tidak lurus.",
    ],
    commonCauses: [
      "Rod dipasang pada dinding yang tidak mampu menanggung beratnya.",
      "Rod tidak lurus atau dipasang pada ketinggian yang salah.",
      "Pengikat atau braket yang tidak sesuai dengan jenis dinding.",
      "Rod yang terlalu panjang atau tidak sepadan dengan langsir.",
      "Trek atau cangkuk dipasang tidak sekata.",
      "Kelengkapan sedia ada yang longgar atau bengkok.",
    ],
    warningSigns: [
      "Rod langsir kendur atau kelihatan senget.",
      "Braket longgar atau mula tertanggal dari dinding.",
      "Langsir tergantung pada ketinggian yang tidak sama.",
      "Trek tidak meluncur dengan lancar.",
    ],
    solutions: [
      { title: "Ukur dan tanda", description: "Kami mengukur tingkap dan menanda kedudukan braket." },
      { title: "Pilih pengikat yang betul", description: "Pengikat dipilih mengikut dinding konkrit, bata atau papan." },
      { title: "Pasang dan laraskan aras", description: "Rod dipasang lurus dan disokong pada jarak yang betul." },
      { title: "Gantung dan semak", description: "Langsir digantung dan pergerakannya disemak." },
    ],
    whenToCall: [
      "Braket langsir tertanggal atau longgar.",
      "Anda memasang langsir baharu di rumah baharu.",
      "Rod kendur di bahagian tengah.",
      "Anda tidak pasti pengikat yang sesuai untuk dinding anda.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan handyman kami dan boleh digabungkan dengan pemasangan lain.",
    processTitle: "Cara Kami Memasang Langsir",
    processIntro: "Pengikat yang betul untuk jenis dinding menentukan sama ada ia kekal kukuh.",
    processSteps: [
      { title: "Ukur tingkap", description: "Ketinggian dan lebar diukur sebelum kerja bermula." },
      { title: "Tanda dan aras", description: "Kedudukan braket ditanda dan disemak lurus." },
      { title: "Pasang kelengkapan", description: "Braket dan rod dipasang dengan pengikat yang sesuai." },
      { title: "Gantung langsir", description: "Langsir digantung dan diperiksa." },
    ],
    faqs: [
      { question: "Berapa tinggi rod langsir patut dipasang?", answer: "Ia bergantung pada ketinggian siling dan rupa yang anda mahu. Kami akan mencadangkan kedudukan yang sesuai semasa memasang." },
      { question: "Kenapa braket langsir tertanggal?", answer: "Selalunya kerana pengikat tidak sesuai dengan jenis dinding, atau beban langsir melebihi sokongan yang ada." },
      { question: "Boleh langsir dipasang pada dinding papan gipsum?", answer: "Boleh, tetapi ia memerlukan pengikat khas atau sokongan tambahan di sebalik papan." },
      { question: "Perlukah rod tambahan untuk langsir panjang?", answer: "Rod yang panjang memerlukan sokongan tengah supaya ia tidak kendur." },
    ],
  },
  "tv-mounting": {
    ...base,
    name: "Pemasangan TV",
    title: "Pemasangan TV Dinding di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "TV dipasang pada dinding dengan braket dan pengikat yang betul di Kuala Lumpur & Selangor, termasuk kemasan kabel. Punca dan penyelesaian.",
    h1: "Pemasangan TV",
    subtitle:
      "TV di dinding memerlukan braket yang betul, pengikat yang kukuh dan ketinggian yang selesa. Renovix memasangnya dengan selamat dan mengemas kabel.",
    whatItMeans: [
      "Pemasangan TV bermaksud memasang braket pada dinding yang mampu menanggung berat TV, pada ketinggian yang selesa untuk ruang itu.",
      "Jenis dinding sangat penting. Dinding konkrit, bata dan papan gipsum memerlukan pengikat yang berbeza untuk menanggung beban dengan selamat.",
    ],
    commonCauses: [
      "Braket yang tidak sesuai dengan saiz dan berat TV.",
      "Pengikat dipasang pada dinding yang tidak mampu menanggung beban.",
      "TV dipasang terlalu tinggi, terlalu rendah atau tidak di tengah.",
      "Kabel dibiarkan berjuntai dan kelihatan bersepah.",
      "Braket yang tidak sepadan dengan corak VESA TV.",
      "Pemasangan longgar sehingga TV tidak rata pada dinding.",
    ],
    warningSigns: [
      "Braket kelihatan terlalu kecil untuk TV.",
      "Dinding menunjukkan tanda tegangan atau braket mula tertarik.",
      "TV senget sedikit atau braket terasa longgar.",
      "Kabel berjuntai kelihatan di dinding.",
    ],
    solutions: [
      { title: "Nilai dinding dan TV", description: "Kami menyemak jenis dinding, berat TV dan corak VESA." },
      { title: "Pilih braket yang betul", description: "Braket dipilih mengikut saiz, berat dan sudut yang dikehendaki." },
      { title: "Pasang pada ketinggian sesuai", description: "Ketinggian ditentukan mengikut kedudukan tempat duduk." },
      { title: "Kemas kabel", description: "Kabel disusun atau disorok supaya kelihatan kemas." },
    ],
    whenToCall: [
      "Anda memasang TV baharu pada dinding.",
      "Braket sedia ada terasa longgar.",
      "Anda tidak pasti dinding boleh menanggung berat TV.",
      "Anda mahu kabel disorok dengan kemas.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan handyman kami, dengan sokongan kerja elektrik jika soket baharu diperlukan.",
    processTitle: "Cara Kami Memasang TV",
    processIntro: "Pengikat yang betul untuk jenis dinding adalah bahagian paling penting.",
    processSteps: [
      { title: "Semak dinding dan TV", description: "Jenis dinding dan spesifikasi TV disahkan." },
      { title: "Pasang braket", description: "Braket dipasang lurus dengan pengikat yang sesuai." },
      { title: "Pasang TV", description: "TV dipasang pada braket dan disemak arasnya." },
      { title: "Kemas kabel", description: "Kabel disusun dan kawasan kerja dibersihkan." },
    ],
    faqs: [
      { question: "Bolehkah TV dipasang pada dinding papan gipsum?", answer: "Boleh, tetapi ia memerlukan pengikat khas atau sokongan di sebalik papan, bergantung pada berat TV." },
      { question: "Berapa tinggi TV patut dipasang?", answer: "Biasanya pada aras mata semasa duduk. Kami akan mencadangkan ketinggian yang sesuai untuk ruang anda." },
      { question: "Bolehkah kabel disorok dalam dinding?", answer: "Dalam sesetengah keadaan boleh, tetapi ia bergantung pada jenis dinding dan lokasi soket." },
      { question: "Perlukah soket baharu berhampiran TV?", answer: "Jika tiada soket berdekatan, pasukan elektrik kami boleh memasang satu supaya kabel tidak berjuntai." },
    ],
  },
  "shelf-installation": {
    ...base,
    name: "Pemasangan Rak",
    title: "Pemasangan Rak di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Rak dipasang lurus dan kukuh mengikut jenis dinding di Kuala Lumpur & Selangor. Punca masalah, tanda amaran dan penyelesaian.",
    h1: "Pemasangan Rak",
    subtitle:
      "Rak hanya sekukuh dinding yang menyokongnya. Renovix memasang rak yang lurus, kukuh dan mampu menanggung bebannya.",
    whatItMeans: [
      "Pemasangan rak melibatkan pemilihan pengikat yang sesuai dengan dinding, penentuan kedudukan braket, dan pemasangan rak pada aras yang betul.",
      "Rak yang jatuh hampir selalu disebabkan pengikat yang salah untuk jenis dinding, bukan kerana rak itu terlalu berat.",
    ],
    commonCauses: [
      "Rak dipasang pada dinding yang tidak mampu menanggung bebannya.",
      "Braket atau pengikat yang tidak sesuai dengan jenis dinding.",
      "Rak tidak lurus atau jarak braket tidak sekata.",
      "Braket longgar, tersalah kedudukan atau tidak mencukupi.",
      "Rak terlalu panjang untuk sokongan yang ada.",
      "Rak lama yang sudah goyang dan tidak lagi kukuh.",
    ],
    warningSigns: [
      "Rak kelihatan senget atau tidak rata.",
      "Braket longgar atau mula tertarik keluar dari dinding.",
      "Rak melentur di bahagian tengah.",
      "Rak bergoyang apabila digunakan.",
    ],
    solutions: [
      { title: "Ukur dan rancang", description: "Kami menentukan kedudukan dan jarak braket." },
      { title: "Pilih pengikat yang betul", description: "Pengikat dipilih mengikut dinding dan beban yang dijangka." },
      { title: "Pasang dan laraskan aras", description: "Rak dipasang lurus dan disemak dengan aras." },
      { title: "Semak keupayaan beban", description: "Kami memastikan sokongan mencukupi untuk kegunaan biasa." },
    ],
    whenToCall: [
      "Rak sedia ada goyang atau mula tertanggal.",
      "Anda memasang rak pada dinding konkrit atau papan gipsum.",
      "Anda mahu memasang beberapa rak pada aras yang sama.",
      "Anda tidak pasti berapa berat yang boleh ditanggung dinding.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan handyman kami dan boleh digabungkan dengan pemasangan lain.",
    processTitle: "Cara Kami Memasang Rak",
    processIntro: "Pengikat yang betul dan jarak braket yang sesuai menentukan kekukuhan rak.",
    processSteps: [
      { title: "Ukur ruang", description: "Kedudukan dan ketinggian rak ditentukan." },
      { title: "Pilih pengikat", description: "Pengikat dipilih mengikut jenis dinding." },
      { title: "Pasang dan aras", description: "Braket dipasang dan aras disemak." },
      { title: "Semak hasil", description: "Kekukuhan rak diuji sebelum diserahkan." },
    ],
    faqs: [
      { question: "Berapa berat yang boleh ditanggung rak dinding?", answer: "Ia bergantung pada jenis dinding, pengikat dan jarak braket. Kami akan menasihatkan had yang munasabah." },
      { question: "Boleh rak dipasang pada dinding papan gipsum?", answer: "Boleh, dengan pengikat khas. Untuk beban berat, sokongan tambahan di sebalik papan diperlukan." },
      { question: "Kenapa rak saya melentur?", answer: "Biasanya kerana jarak antara braket terlalu jauh untuk panjang dan beban rak itu." },
      { question: "Boleh rak dipasang tanpa braket kelihatan?", answer: "Rak jenis tersembunyi boleh dipasang, tetapi ia memerlukan pengikat yang lebih kukuh di dalam dinding." },
    ],
  },
  "minor-home-repairs": {
    ...base,
    name: "Pembaikan Kecil Rumah",
    title: "Pembaikan Kecil Rumah di Kuala Lumpur & Selangor | Renovix",
    metaDescription:
      "Senarai kerja kecil di rumah diselesaikan dalam satu lawatan di Kuala Lumpur & Selangor. Punca, tanda amaran dan penyelesaian.",
    h1: "Pembaikan Kecil Rumah",
    subtitle:
      "Kerja-kerja kecil yang bertimbun di rumah — kelengkapan longgar, cangkuk, silikon dan pembaikan ringan — diselesaikan oleh seorang handyman yang boleh dipercayai.",
    whatItMeans: [
      "Pembaikan kecil rumah merangkumi kerja-kerja ringan yang terkumpul dari masa ke masa: engsel longgar, pintu kabinet yang tidak menutup, silikon yang retak dan lubang kecil pada dinding.",
      "Setiap satu kelihatan remeh, tetapi apabila dikumpulkan, ia boleh diselesaikan dengan lebih cekap dalam satu lawatan yang dirancang.",
    ],
    commonCauses: [
      "Haus akibat penggunaan harian pada engsel, tombol dan kelengkapan.",
      "Kesan hentakan kecil atau calar pada dinding dan permukaan.",
      "Silikon dan pengedap yang retak atau tertanggal.",
      "Kelengkapan yang dipasang dengan pengikat yang tidak sesuai.",
      "Kelembapan harian yang menyebabkan pergerakan kecil dan kelonggaran.",
      "Kerja-kerja yang tertangguh dan terkumpul.",
    ],
    warningSigns: [
      "Engsel, tombol atau pemegang yang longgar.",
      "Pintu kabinet yang tidak menutup dengan betul.",
      "Silikon yang retak, hilang atau mengelupas.",
      "Lubang kecil, calar atau kerosakan ringan pada dinding.",
    ],
    solutions: [
      { title: "Ketatkan dan baiki kelengkapan", description: "Engsel, pemegang dan kelengkapan diketatkan atau diganti." },
      { title: "Kedap semula sambungan", description: "Silikon lama dibuang dan sambungan dikedap semula." },
      { title: "Baiki kerosakan kecil", description: "Lubang dan calar ditampal dan dikemas." },
      { title: "Pemasangan kecil", description: "Cangkuk, cermin dan rak dipasang dengan pengikat yang sesuai." },
    ],
    whenToCall: [
      "Anda mempunyai senarai kerja kecil yang sudah lama tertangguh.",
      "Kelengkapan longgar dan mula rosak.",
      "Silikon di bilik air atau dapur sudah retak.",
      "Anda mahu semuanya diselesaikan dalam satu lawatan.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan handyman kami dan boleh dirancang mengikut senarai anda.",
    processTitle: "Cara Kami Mengendalikan Pembaikan Kecil",
    processIntro: "Menyenaraikan semua kerja terlebih dahulu menjadikan satu lawatan lebih berbaloi.",
    processSteps: [
      { title: "Senaraikan kerja", description: "Kami menyemak senarai anda dan menganggarkan masa." },
      { title: "Kerjakan mengikut urutan", description: "Kerja disusun supaya lawatan digunakan dengan cekap." },
      { title: "Baiki atau ganti", description: "Bahagian yang rosak dibaiki atau diganti." },
      { title: "Semak dan kemas", description: "Setiap kerja disemak dan kawasan dibersihkan." },
    ],
    faqs: [
      { question: "Bolehkah beberapa kerja kecil dibuat dalam satu lawatan?", answer: "Boleh, dan itu cara paling berbaloi. Beritahu kami senarai anda supaya masa dan bahan boleh dirancang." },
      { question: "Adakah anda membawa bahan sendiri?", answer: "Kami membawa peralatan dan bahan asas. Untuk item tertentu, kami akan sahkan terlebih dahulu supaya ia sedia semasa lawatan." },
      { question: "Adakah kerja kecil perlu tempahan awal?", answer: "Ya, supaya kami boleh memperuntukkan masa yang mencukupi untuk semua kerja dalam senarai anda." },
      { question: "Bolehkah anda menilai dahulu sebelum bekerja?", answer: "Boleh. Untuk senarai yang panjang, kami akan menyemak skop dahulu sebelum kerja bermula." },
    ],
  },
};
