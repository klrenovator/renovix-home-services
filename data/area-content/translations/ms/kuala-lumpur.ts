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
  "kuala-lumpur/cheras": {
    ...shared("Cheras"),
    name: "Cheras",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Cheras",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Cheras — kerja paip, kalis air, elektrik, jubin dan mengecat untuk pangsapuri, rumah teres dan kondominium. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Cheras",
    summary:
      "Salah satu kawasan kediaman terbesar di KL — pangsapuri dan rumah teres era 70-an hingga 90-an bersama blok bertingkat tinggi yang lebih baharu.",
    intro: [
      "Cheras merangkumi kawasan yang luas, daripada pangsapuri walk-up lama sehinggalah kondominium baharu di sekitar stesen MRT. Kerana kebanyakan rumah di sini berusia serupa, masalah yang sama muncul di seluruh blok dan taman: paip tersembunyi yang bocor, kalis air bilik air yang gagal, dan pendawaian yang tidak lagi menampung beban hari ini.",
      "Kami menyediakan kerja paip, kalis air, elektrik, jubin, cat dan renovasi penuh di seluruh Cheras. Kebanyakan kerja bermula dengan satu masalah yang jelas, dan kami akan beritahu dengan jujur sama ada ia boleh dibaiki setempat atau perlu diselesaikan dengan lebih menyeluruh.",
    ],
    serviceNotes: [
      "Mengesan kebocoran paip tersembunyi antara tingkat dan membaiki punca sebenar.",
      "Kalis air bilik air dan balkoni diperbaharui sebelum kerja jubin dan cat.",
      "Menaik taraf pendawaian lama dan menambah soket di rumah era 70-an hingga 90-an.",
      "Menggantikan jubin retak dan berongga serta memasang semula jubin kawasan basah.",
      "Cat dalaman dan luaran termasuk merawat kesan lembap serta kulat.",
      "Naik taraf rumah sepenuhnya, termasuk dapur dan bilik air.",
    ],
    propertyTypes: [
      { label: "Pangsapuri walk-up (1970-an–90-an)", note: "Paip riser lama dan bilik air asal yang perlu dibaiki." },
      { label: "Rumah teres (1970-an–90-an)", note: "Pendawaian dan paip yang memasuki kitaran penggantian pertama." },
      { label: "Kondominium berhampiran MRT", note: "Unit lebih baharu dengan kerja kemasan dan pembaikan kecacatan." },
      { label: "Lot kedai dan unit komersial", note: "Kerja pembaikan dan naik taraf untuk penyewa baharu." },
      { label: "Unit kondominium sedia ada", note: "Kerja dalam unit mengikut peraturan pengurusan bangunan." },
    ],
    problems: [
      { title: "Kebocoran paip tersembunyi antara tingkat", description: "Selalunya muncul sebagai tompok pada siling jiran sebelum ia kelihatan di unit sendiri." },
      { title: "Kalis air bilik air yang gagal", description: "Membran asal sudah tamat jangka hayat, jadi air meresap ke ruang bawah." },
      { title: "Pendawaian lama yang terbeban", description: "Penghawa dingin dan pemanas air moden membebankan litar yang direka untuk beban lama." },
      { title: "Jubin retak dan berongga", description: "Jubin longgar di kawasan laluan dan bilik air yang kerap basah." },
      { title: "Kulat pada dinding terlindung", description: "Dinding yang kurang cahaya dan pengudaraan kekal lembap sepanjang tahun." },
    ],
    context: [
      "Akses dan masa penting di Cheras. Jalan utama sesak pada waktu puncak, jadi lawatan dan penghantaran bahan dijadualkan di luar waktu tersebut supaya kerja berjalan lancar.",
      "Banyak kerja di sini melibatkan bangunan strata. Jika pengurusan memerlukan kebenaran, deposit atau waktu kerja tertentu, kami menyesuaikan jadual mengikut peraturan tersebut.",
      "Bagi pemilik rumah teres, corak paling biasa ialah naik taraf berperingkat: selesaikan kebocoran dan pendawaian dahulu, kemudian bilik air, dan akhir sekali kemasan.",
    ],
    faqs: [
      { question: "Adakah anda merenovasi pangsapuri lama di Cheras?", answer: "Ya. Kerja paip, elektrik, bilik air dan cat di pangsapuri walk-up adalah antara kerja paling kerap kami lakukan di Cheras." },
      { question: "Boleh anda mengesan kebocoran yang hanya kelihatan di siling jiran?", answer: "Boleh. Kami memeriksa kedua-dua unit jika dibenarkan, kerana punca selalunya berada di kawasan basah unit atas." },
      { question: "Perlukah kebenaran pengurusan kondominium?", answer: "Kebanyakan bangunan memerlukannya untuk kerja yang melibatkan pecah atau bunyi. Kami boleh menyediakan maklumat skop untuk permohonan anda." },
      { question: "Boleh tukar jubin satu bilik air sahaja?", answer: "Boleh. Kami akan menyemak keadaan lapisan kalis air dahulu supaya kerja jubin baharu tidak sia-sia." },
    ],
  },
  "kuala-lumpur/setapak": {
    ...shared("Setapak"),
    name: "Setapak",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Setapak",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Setapak — kerja elektrik, paip, cat, jubin dan handyman untuk rumah teres, pangsapuri dan unit sewa. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Setapak",
    summary:
      "Kawasan matang di timur laut pusat bandar — rumah teres lama, pangsapuri sederhana tinggi dan pasaran sewa yang aktif berhampiran TAR UMT.",
    intro: [
      "Setapak ialah kawasan matang dengan rumah teres 1960-an hingga 80-an, pangsapuri sederhana tinggi dan banyak unit sewa. Rumah di sini selalunya sudah melalui beberapa pusingan pembaikan kecil, jadi kerja kami sering bermula dengan memahami apa yang telah dilakukan sebelum ini.",
      "Kami mengendalikan kerja elektrik, paip, cat, jubin, handyman dan renovasi penuh di Setapak, termasuk kerja pembaharuan unit sewa antara penyewa.",
    ],
    serviceNotes: [
      "Menggantikan pendawaian asal dan papan fius lama dengan sistem yang lebih selamat.",
      "Membaiki paip lama, tekanan air rendah dan kebocoran bilik air.",
      "Kerja cat dalaman dan luaran termasuk pembaikan plaster retak.",
      "Kerja jubin bilik air dan dapur semasa naik taraf.",
      "Kerja pembaikan kecil untuk tuan rumah dan penghuni.",
      "Naik taraf rumah teres lama secara berperingkat.",
    ],
    propertyTypes: [
      { label: "Rumah teres lama (1960-an–80-an)", note: "Pendawaian dan paip asal yang sudah lama melepasi jangka hayat." },
      { label: "Pangsapuri sederhana tinggi", note: "Bilik air dan dapur yang memerlukan pembaharuan." },
      { label: "Unit sewa pelajar", note: "Kemasan tahan lasak dan pembaikan pantas antara penyewa." },
      { label: "Rumah kedai dan lot perniagaan", note: "Kerja naik taraf ruang perniagaan kecil." },
      { label: "Pembangunan baharu", note: "Kerja kemasan dan pembaikan kecacatan selepas serahan." },
    ],
    problems: [
      { title: "Pendawaian asal yang sudah uzur", description: "Kabel dan papan agihan lama tanpa perlindungan bocor arus moden." },
      { title: "Tekanan air rendah di blok lama", description: "Paip bekalan yang tersempit oleh kerak selepas bertahun-tahun." },
      { title: "Resapan air bilik air", description: "Lantai bilik air yang kekal lembap dan meresap ke ruang bersebelahan." },
      { title: "Kesan haus daripada pusingan sewa", description: "Pintu, kelengkapan dan cat yang cepat rosak di unit sewa." },
      { title: "Plaster dinding retak", description: "Retak halus dan tampalan lama yang kelihatan menembusi cat." },
    ],
    context: [
      "Rumah lama di Setapak sering menyimpan kejutan di sebalik dinding: pendawaian bercampur daripada beberapa dekad dan tampalan kerja terdahulu. Kami menyemak dahulu sebelum memberi sebut harga.",
      "Bagi tuan rumah berhampiran TAR UMT, masa adalah segalanya. Kerja pembaharuan dirancang dalam tempoh antara penyewa supaya unit boleh disewakan semula tanpa lengah.",
      "Trafik di Jalan Genting Klang dan Jalan Pahang mula sesak awal, jadi lawatan dan penghantaran bahan dijadualkan mengikut waktu yang lebih lapang.",
    ],
    faqs: [
      { question: "Rumah teres saya masih menggunakan pendawaian asal. Adakah kerja menukar pendawaian mengganggu?", answer: "Ia melibatkan kerja pada dinding dan siling, tetapi boleh dibuat mengikut bahagian supaya rumah kekal boleh didiami." },
      { question: "Boleh anda membaharui unit sewa antara penyewa?", answer: "Boleh. Beritahu kami tarikh, dan kami akan merancang kerja supaya siap sebelum penyewa baharu masuk." },
      { question: "Lantai bilik air sentiasa lembap di satu sudut. Serius?", answer: "Ia patut diperiksa. Selalunya ia menandakan kalis air yang gagal atau kebocoran kecil di bawah jubin." },
      { question: "Adakah anda menerima kerja handyman kecil di Setapak?", answer: "Ya. Kerja kecil boleh digabungkan dalam satu lawatan supaya lebih berbaloi." },
    ],
  },
  "kuala-lumpur/wangsa-maju": {
    ...shared("Wangsa Maju"),
    name: "Wangsa Maju",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Wangsa Maju",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Wangsa Maju — kalis air, kerja paip, jubin, cat dan elektrik untuk rumah teres dan kondominium. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Wangsa Maju",
    summary:
      "Bandar 1990-an yang berkembang daripada Setapak — seksyen rumah teres, kelompok kondominium dan kawasan sewa pelajar yang sibuk.",
    intro: [
      "Wangsa Maju dibangunkan pada 1990-an, jadi sebahagian besar rumah di sini kini memasuki kitaran naik taraf pertama. Kalis air bilik air, paip dapur dan cat luar adalah antara kerja yang paling kerap diminta.",
      "Kami menyediakan renovasi, kalis air, kerja paip, jubin, cat dan elektrik untuk rumah teres, kondominium dan unit sewa di seluruh Wangsa Maju.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres 90-an termasuk dapur dan bilik air.",
      "Kalis air bilik air dan balkoni yang membran asalnya sudah gagal.",
      "Membaiki kebocoran paip dapur dan saluran yang tersumbat.",
      "Menggantikan jubin longgar di balkoni dan kawasan basah.",
      "Cat luar yang pudar dan bernoda akibat cuaca.",
      "Menambah soket dan lampu mengikut keperluan semasa.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1990-an)", note: "Kemasan asal yang kini memerlukan pembaharuan." },
      { label: "Kondominium dan pangsapuri", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Unit sewa pelajar dan keluarga", note: "Kemasan tahan lasak dan pembaikan pantas." },
      { label: "Pejabat kedai dan lot runcit", note: "Kerja naik taraf untuk penyewa perniagaan." },
      { label: "Pangsapuri servis baharu", note: "Kerja kemasan dan pembaikan kecacatan." },
    ],
    problems: [
      { title: "Kalis air bilik air yang menua", description: "Membran generasi pertama kini mula gagal di banyak unit." },
      { title: "Kebocoran paip dan saluran dapur", description: "Sambungan lama di bawah sinki yang mula merembes." },
      { title: "Cat pudar dan bernoda", description: "Fasad yang terdedah kepada matahari dan hujan sepanjang tahun." },
      { title: "Jubin balkoni longgar", description: "Jubin berongga akibat pergerakan haba dan air bertakung." },
      { title: "Soket tidak mencukupi", description: "Rumah 90-an direka untuk peralatan yang jauh lebih sedikit." },
    ],
    context: [
      "Kerja di Wangsa Maju terbahagi antara unit strata dan rumah landed, dan kedua-duanya berjalan berbeza dari segi kebenaran serta waktu kerja.",
      "Kerana kebanyakan rumah dibina pada masa yang sama, kegagalan yang serupa muncul di sepanjang satu-satu baris rumah. Ini memudahkan kami menerangkan apa yang bakal berlaku seterusnya.",
      "Kerja untuk unit sewa berhampiran TAR UMT dijadualkan mengikut kalendar semester, dengan kemasan yang tahan lasak.",
    ],
    faqs: [
      { question: "Boleh anda naik taraf dapur rumah teres 90-an?", answer: "Boleh. Kami biasanya menyemak paip dan elektrik dahulu sebelum kabinet dan jubin dipasang." },
      { question: "Bilik air kondominium saya bocor ke unit bawah. Anda kendalikan sepenuhnya?", answer: "Ya, termasuk mengesan punca, kalis air semula dan memasang jubin baharu." },
      { question: "Anda mengecat luaran rumah sepenuhnya?", answer: "Ya, termasuk penyediaan permukaan dan pembaikan retak sebelum cat disapu." },
      { question: "Boleh kerja dijalankan semasa kami tinggal di rumah?", answer: "Boleh untuk kebanyakan kerja. Kami bekerja mengikut zon supaya rumah kekal boleh digunakan." },
    ],
  },
  "kuala-lumpur/ampang": {
    ...shared("Ampang"),
    name: "Ampang",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Ampang",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Ampang — renovasi, elektrik, kalis air, kerja paip dan siling untuk banglo dan kondominium. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Ampang",
    summary:
      "Kawasan timur KL yang menghijau — banglo pertengahan abad, kondominium matang dan enklaf kediaman yang tenang.",
    intro: [
      "Ampang menggabungkan banglo lama, kondominium yang telah lama beroperasi dan taman kediaman yang tenang. Litupan pokok yang tebal menjadikan pengurusan kelembapan tema berulang dalam hampir setiap kerja di sini.",
      "Kami menyediakan renovasi, kerja elektrik, kalis air, kerja paip, siling dan cat di seluruh Ampang, termasuk kerja pembaharuan untuk unit sewaan.",
    ],
    serviceNotes: [
      "Renovasi berperingkat untuk banglo dan rumah lama.",
      "Menggantikan pendawaian tersembunyi yang sudah uzur.",
      "Kalis air bilik air dan bumbung sebelum kerosakan merebak.",
      "Membaiki kebocoran paip tersembunyi di rumah matang.",
      "Membaiki dan mengganti siling yang rosak akibat air.",
      "Cat dalaman dan luaran termasuk rawatan kulat.",
    ],
    propertyTypes: [
      { label: "Banglo dan vila pertengahan abad", note: "Struktur kukuh yang memerlukan naik taraf perkhidmatan." },
      { label: "Kondominium matang", note: "Unit yang memerlukan pembaharuan bilik air dan kemasan." },
      { label: "Townhouse dan dupleks", note: "Kerja renovasi dua aras dengan akses terhad." },
      { label: "Unit komersial berdekatan", note: "Kerja naik taraf ruang pejabat kecil." },
      { label: "Enklaf rumah teres", note: "Taman kecil yang tenang dengan rumah era 80-an." },
    ],
    problems: [
      { title: "Siling rosak air", description: "Kebocoran dari bumbung atau unit atas yang meninggalkan tompok dan lendutan." },
      { title: "Pendawaian tersembunyi yang menua", description: "Kabel lama yang tidak lagi sesuai dengan beban semasa." },
      { title: "Resapan bilik air di kondominium matang", description: "Kalis air asal yang sudah tamat jangka hayat." },
      { title: "Kulat pada ruang yang terlindung", description: "Litupan pokok dan pengudaraan terhad menyebabkan dinding kekal lembap." },
      { title: "Pintu kayu yang mengembang", description: "Kelembapan tinggi menyebabkan pintu tersangkut dan engsel turun." },
    ],
    context: [
      "Kondominium di Ampang ialah bangunan terurus: waktu kerja, peraturan bunyi dan tempahan lif semuanya perlu dirancang lebih awal.",
      "Bagi banglo lama, perbualan pertama biasanya tentang keutamaan — memastikan rumah selamat dan kalis cuaca dahulu, sebelum kemasan.",
      "Jalan berbukit dan litupan pokok bermakna pengurusan air adalah tema berulang: talang, cerun dan dinding terlindung diperiksa sejak awal.",
    ],
    faqs: [
      { question: "Anda bekerja di kondominium Ampang yang mempunyai peraturan ketat?", answer: "Ya. Kami bekerja mengikut waktu yang dibenarkan dan menyediakan maklumat skop untuk permohonan pengurusan." },
      { question: "Boleh banglo lama direnovasi secara berperingkat?", answer: "Boleh. Kami akan mencadangkan urutan yang munasabah supaya kerja penting dibuat dahulu." },
      { question: "Tompok siling kembali walaupun sudah dicat. Kenapa?", answer: "Kerana sumber air belum dihentikan. Kebocoran perlu dikesan dahulu sebelum kerja kemasan." },
      { question: "Anda mengendalikan pembaharuan unit sewaan?", answer: "Ya, termasuk kerja cat, pembaikan dan pemeriksaan menyeluruh sebelum penyewa baharu masuk." },
    ],
  },
  "kuala-lumpur/kepong": {
    ...shared("Kepong"),
    name: "Kepong",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Kepong",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Kepong — renovasi, jubin, kerja paip, elektrik, cat dan kalis air untuk rumah teres dan lot kedai. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Kepong",
    summary:
      "Kawasan bandar besar di barat laut KL — taman perumahan teres yang matang, deretan lot kedai lama dan pangsapuri baharu berhampiran MRT.",
    intro: [
      "Kepong mempunyai rumah teres yang telah berdiri sejak 1960-an hingga 90-an, deretan kedai lama dan pangsapuri baharu di sekitar MRT. Kebanyakan kerja di sini dijalankan sementara keluarga masih tinggal di rumah.",
      "Kami menyediakan renovasi, jubin, kerja paip, elektrik, cat dan kalis air di seluruh Kepong, termasuk kerja naik taraf lot kedai.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres secara berperingkat sambil rumah kekal didiami.",
      "Menggantikan jubin retak dan memasang jubin bilik air baharu.",
      "Membaiki kebocoran paip dan saluran yang tersumbat.",
      "Menaik taraf pendawaian lama untuk beban peralatan moden.",
      "Cat luaran untuk fasad yang terdedah kepada cuaca.",
      "Kalis air bilik air dan bumbung sebelum kerja kemasan.",
    ],
    propertyTypes: [
      { label: "Rumah teres matang (1960-an–90-an)", note: "Perkhidmatan asal yang memerlukan penggantian." },
      { label: "Rumah kedai dan lot kedai lama", note: "Kerja naik taraf untuk penyewa baharu." },
      { label: "Pangsapuri baharu berhampiran MRT", note: "Kerja kemasan dan pembaikan kecacatan." },
      { label: "Rumah berkembar dan banglo", note: "Kerja renovasi berskala lebih besar." },
      { label: "Flat walk-up", note: "Pembaikan bilik air dan kerja paip dalam unit." },
    ],
    problems: [
      { title: "Kegagalan kalis air bilik air", description: "Air meresap ke bilik bersebelahan atau ke tingkat bawah." },
      { title: "Kebocoran bumbung dan siling", description: "Kebocoran yang hanya muncul semasa hujan lebat." },
      { title: "Jubin lantai retak dan berongga", description: "Jubin longgar di ruang tamu dan laluan utama." },
      { title: "Pendawaian lama di bawah beban moden", description: "Litar yang kerap trip apabila banyak peralatan digunakan." },
      { title: "Fasad yang terjejas cuaca", description: "Cat luar yang pudar, berkulat atau mengelupas." },
    ],
    context: [
      "Renovasi di Kepong biasanya projek rumah berpenghuni. Kami merancang urutan kerja supaya dapur dan sekurang-kurangnya satu bilik air kekal boleh digunakan.",
      "Rumah di sini sering telah dibaiki sebahagian oleh beberapa kontraktor berbeza, jadi kami menyemak apa yang sedia ada sebelum memberi sebut harga.",
      "Akses bahan mudah di kebanyakan kawasan, tetapi deretan kedai lama memerlukan penghantaran di luar waktu sibuk.",
    ],
    faqs: [
      { question: "Boleh renovasi dijalankan sementara kami tinggal di rumah?", answer: "Boleh. Kami bekerja mengikut zon dan memastikan kemudahan asas kekal boleh digunakan." },
      { question: "Berapa lama bilik air dibina semula?", answer: "Ia bergantung pada skop dan masa pengeringan kalis air. Kami akan berikan jadual sebelum kerja bermula." },
      { question: "Anda membaiki lot kedai untuk penyewa baharu?", answer: "Ya, termasuk kerja elektrik, paip, jubin dan cat mengikut keperluan perniagaan." },
      { question: "Bumbung kami bocor hanya semasa ribut. Boleh dikesan?", answer: "Boleh. Kami memeriksa titik masuk air seperti flashing, genting dan longkang bumbung." },
    ],
  },
  "kuala-lumpur/segambut": {
    ...shared("Segambut"),
    name: "Segambut",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Segambut",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Segambut — renovasi, elektrik, kerja paip, cat, kalis air dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Segambut",
    summary:
      "Kawasan utara KL yang tenang — rumah teres lama dan rumah bergaya kampung bersebelahan kediaman premium dan koridor kondominium baharu.",
    intro: [
      "Segambut mempunyai campuran rumah yang luas: rumah teres lama, rumah bergaya kampung, kediaman premium di sekitar Duta dan kondominium yang lebih baharu. Setiap satu memerlukan pendekatan berbeza.",
      "Kami menyediakan renovasi, kerja elektrik, paip, cat, kalis air dan servis handyman di seluruh Segambut.",
    ],
    serviceNotes: [
      "Renovasi rumah lama dengan urutan kerja yang jelas.",
      "Menggantikan pendawaian dan papan fius berusia puluhan tahun.",
      "Membaiki masalah tekanan air dan pemanas air.",
      "Cat dalaman dan luaran termasuk pembaikan permukaan.",
      "Merawat kelembapan tanah dan resapan pada dinding.",
      "Pembaikan kecil dan pemasangan di sekitar rumah.",
    ],
    propertyTypes: [
      { label: "Rumah teres lama", note: "Perkhidmatan asal yang memerlukan naik taraf." },
      { label: "Rumah bergaya kampung", note: "Struktur kayu yang memerlukan pemeriksaan teliti." },
      { label: "Kediaman premium (kawasan Duta)", note: "Kerja kemasan halus dengan zon kerja terkawal." },
      { label: "Kondominium baharu", note: "Kerja dalam unit mengikut peraturan bangunan." },
      { label: "Townhouse dan dupleks", note: "Kerja dua aras dengan akses terhad." },
    ],
    problems: [
      { title: "Pendawaian dan papan fius lama", description: "Sistem tanpa perlindungan bocor arus yang moden." },
      { title: "Kelembapan tanah dan resapan dinding", description: "Dinding bawah yang kekal lembap sepanjang musim hujan." },
      { title: "Kereputan kayu pada bumbung dan kusen", description: "Kesan kelembapan berpanjangan pada struktur kayu." },
      { title: "Masalah pemanas air dan tekanan pancuran", description: "Paip lama dan kelengkapan yang sudah haus." },
      { title: "Tampalan daripada renovasi lampau", description: "Kerja separuh siap yang perlu diselaraskan semula." },
    ],
    context: [
      "Rumah lama di Segambut memerlukan urutan yang betul: keselamatan dan ketahanan cuaca dahulu, kemudian kawasan basah, dan akhirnya kemasan.",
      "Di kawasan kediaman premium, kualiti kemasan dan kebersihan tapak menjadi keutamaan, jadi kami mengehadkan zon kerja dan membersihkan setiap hari.",
      "Sesetengah lorong lama agak sempit, jadi penghantaran bahan dan pembuangan sisa dirancang lebih awal.",
    ],
    faqs: [
      { question: "Boleh anda menilai rumah lama sebelum kami membuat keputusan?", answer: "Boleh. Kami akan menyemak keadaan struktur, paip dan elektrik, dan menerangkan pilihan yang munasabah." },
      { question: "Anda mengendalikan kerja kemasan premium di kawasan Duta?", answer: "Ya, dengan zon kerja terkawal, perlindungan permukaan dan pembersihan harian." },
      { question: "Terdapat kelembapan di bahagian bawah dinding. Boleh dibaiki?", answer: "Boleh. Kami akan mengenal pasti sama ada ia kelembapan naik, resapan atau kebocoran sebelum merawatnya." },
      { question: "Anda bekerja di kondominium baharu Segambut?", answer: "Ya, mengikut waktu kerja dan peraturan yang ditetapkan oleh pihak pengurusan." },
    ],
  },
  "kuala-lumpur/sentul": {
    ...shared("Sentul"),
    name: "Sentul",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Sentul",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Sentul — kerja paip, elektrik, cat, jubin, siling dan handyman untuk flat lama dan kondominium baharu. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Sentul",
    summary:
      "Kawasan keretapi lama Kuala Lumpur — jalan warisan dan flat lama di Sentul Baru, dengan menara baharu di Sentul Timur dan Barat.",
    intro: [
      "Sentul menggabungkan flat lama, rumah era keretapi dan menara kediaman baharu. Kerja di sini terbahagi antara pembaikan bangunan lama dan kerja kemasan unit baharu.",
      "Kami menyediakan kerja paip, elektrik, cat, jubin, siling dan servis handyman di seluruh Sentul.",
    ],
    serviceNotes: [
      "Membaiki paip lama dan saluran tersumbat di blok matang.",
      "Menaik taraf pendawaian dan menambah soket di unit lama.",
      "Kerja cat dalaman untuk unit sewa dan kediaman.",
      "Kerja jubin bilik air dan dapur semasa pembaharuan.",
      "Membaiki siling yang bernoda atau melendut.",
      "Pembaikan kecil dan pemasangan dalam unit.",
    ],
    propertyTypes: [
      { label: "Flat dan pangsapuri lama", note: "Bilik air dan paip riser yang memerlukan pembaikan." },
      { label: "Rumah era keretapi", note: "Struktur lama dengan kemasan asal." },
      { label: "Kondominium Sentul Timur/Barat", note: "Kerja kemasan unit baharu mengikut peraturan pengurusan." },
      { label: "Rumah teres", note: "Naik taraf dapur, bilik air dan kemasan." },
      { label: "Rumah kedai dan lot komersial", note: "Kerja naik taraf ruang perniagaan." },
    ],
    problems: [
      { title: "Saluran tersumbat dan menua", description: "Saluran lama yang kerap tersumbat selepas hujan lebat." },
      { title: "Paip bocor di blok lama", description: "Sambungan yang haus di dalam dinding dan ruang riser." },
      { title: "Bilik air yang sudah uzur", description: "Jubin, kelengkapan dan kalis air yang perlu diganti sepenuhnya." },
      { title: "Tompok dan lendutan siling", description: "Kesan kebocoran dari unit atas atau bumbung." },
      { title: "Kecacatan kemasan unit baharu", description: "Kerja pembaikan selepas serahan pemaju." },
    ],
    context: [
      "Di flat lama, penyelarasan dengan jiran penting kerana penutupan bekalan air boleh menjejaskan beberapa unit pada riser yang sama.",
      "Di menara Sentul Timur dan Barat, peraturan renovasi pengurusan menetapkan waktu kerja, deposit dan penggunaan lif.",
      "Sesetengah jalan lama berada di kawasan rendah, jadi masalah saliran kadangkala muncul selepas ribut.",
    ],
    faqs: [
      { question: "Anda membina semula bilik air di flat lama Sentul?", answer: "Ya, termasuk kerja kalis air, paip dan jubin dengan penyelarasan bekalan air." },
      { question: "Boleh anda menyiapkan kemasan unit baharu sebelum kami masuk?", answer: "Boleh. Kerja seperti cat, lampu dan pemasangan boleh disiapkan sebelum tarikh berpindah." },
      { question: "Unit tingkat bawah kami berbau lembap selepas ribut. Boleh dibantu?", answer: "Boleh. Kami akan menyemak saliran, kelembapan lantai dan kemungkinan resapan dinding." },
      { question: "Siapa menguruskan kelulusan dengan pengurusan?", answer: "Pemilik unit memohon, dan kami menyediakan maklumat skop kerja yang diperlukan." },
    ],
  },
  "kuala-lumpur/mont-kiara": {
    ...shared("Mont Kiara"),
    name: "Mont Kiara",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Mont Kiara",
    metaDescription:
      "Servis renovasi dan pembaikan kondominium di Mont Kiara — kerja paip, kalis air, jubin, elektrik dan handyman mengikut peraturan pengurusan. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Mont Kiara",
    summary:
      "Kawasan kondominium antarabangsa KL — menara generasi pertama yang kini memerlukan pembaharuan, bersama blok baharu yang memerlukan kerja kemasan.",
    intro: [
      "Mont Kiara dipenuhi kondominium, daripada menara generasi pertama 1990-an hingga blok yang baru siap. Kerja di sini hampir selalu melibatkan peraturan pengurusan bangunan, tempahan lif dan waktu kerja yang ditetapkan.",
      "Kami menyediakan kerja paip, kalis air, renovasi, jubin, elektrik dan servis handyman untuk unit kediaman dan unit sewaan di Mont Kiara.",
    ],
    serviceNotes: [
      "Mengesan dan membaiki kebocoran bilik air ke unit bawah.",
      "Kalis air semula bilik air dan balkoni yang membrannya sudah gagal.",
      "Naik taraf unit sepenuhnya antara tempoh sewaan.",
      "Menggantikan jubin kawasan basah dan balkoni.",
      "Menambah lampu, soket dan litar mengikut keperluan.",
      "Pembaikan kecil dan pemasangan dalam unit.",
    ],
    propertyTypes: [
      { label: "Kondominium generasi pertama", note: "Bilik air dan paip yang memasuki kitaran pembaharuan." },
      { label: "Kediaman bertingkat tinggi baharu", note: "Kerja kemasan dan pembaikan kecacatan." },
      { label: "Pangsapuri servis", note: "Kerja pembaharuan antara penyewa." },
      { label: "Unit penthouse dan dupleks", note: "Kerja renovasi dua aras dengan akses terkawal." },
      { label: "Unit runcit dan pejabat", note: "Kerja naik taraf ruang komersial kecil." },
    ],
    problems: [
      { title: "Kebocoran bilik air ke unit bawah", description: "Punca biasa ialah kalis air yang gagal, bukan sekadar grout retak." },
      { title: "Air masuk melalui balkoni", description: "Hujan yang ditiup angin di tingkat atas menembusi tepi balkoni." },
      { title: "Tekanan pancuran yang lemah", description: "Kelengkapan tersumbat kerak atau isu bekalan dalam unit." },
      { title: "Kecacatan unit baharu", description: "Kerja kemasan pemaju yang perlu dibaiki selepas serahan." },
      { title: "Kesan haus antara penyewa", description: "Cat, kelengkapan dan kemasan yang perlu dibaharui." },
    ],
    context: [
      "Setiap kerja di Mont Kiara tertakluk kepada badan pengurusan bangunan: waktu kerja, deposit, tempahan lif dan perlindungan laluan.",
      "Unit tingkat atas menerima hujan yang ditiup angin, jadi kalis air balkoni dan sekeliling tingkap adalah kerja yang kerap diminta.",
      "Bagi tuan rumah, kerja pembaharuan dijadualkan mengikut tarikh tamat sewa supaya unit boleh disewakan semula tanpa lengah.",
    ],
    faqs: [
      { question: "Boleh renovasi dijalankan semasa penyewa masih tinggal di unit?", answer: "Untuk kerja kecil boleh, tetapi kerja bilik air dan pecah lebih baik dijalankan semasa unit kosong." },
      { question: "Bilik air bocor ke unit bawah. Cukupkah menukar jubin?", answer: "Selalunya tidak. Jika membran kalis air sudah gagal, ia perlu dipasang semula sebelum jubin baharu." },
      { question: "Anda membantu dengan keperluan pengurusan bangunan?", answer: "Kami menyediakan maklumat skop kerja dan mematuhi waktu serta peraturan yang ditetapkan." },
      { question: "Boleh pendawaian unit lama dinaik taraf?", answer: "Boleh, termasuk menambah litar dan soket mengikut keperluan peralatan semasa." },
    ],
  },
  "kuala-lumpur/bangsar": {
    ...shared("Bangsar"),
    name: "Bangsar",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bangsar",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bangsar — renovasi, elektrik, kerja paip, cat, kalis air dan siling untuk banglo dan rumah teres. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bangsar",
    summary:
      "Salah satu kawasan berbukit paling matang di KL — banglo pertengahan abad, jalan rumah teres lama dan kondominium yang telah lama berdiri.",
    intro: [
      "Rumah di Bangsar selalunya telah melalui beberapa pusingan naik taraf separa selama berdekad. Kerja kami sering bermula dengan menyusun semula apa yang telah dibuat sebelum ini, terutamanya pendawaian dan paip.",
      "Kami menyediakan renovasi, kerja elektrik, paip, cat, kalis air dan siling di seluruh Bangsar.",
    ],
    serviceNotes: [
      "Renovasi rumah lama dengan menghormati ciri asal bangunan.",
      "Menggantikan pendawaian lama yang telah disambung berulang kali.",
      "Membaiki paip tersembunyi yang menua di rumah matang.",
      "Cat luaran untuk dinding terlindung yang berkulat.",
      "Merawat resapan air pada dinding dan cerun belakang.",
      "Membaiki siling retak dan memasang siling baharu.",
    ],
    propertyTypes: [
      { label: "Banglo pertengahan abad", note: "Rumah kukuh yang memerlukan naik taraf perkhidmatan." },
      { label: "Rumah teres lama", note: "Kemasan asal yang memerlukan pembaharuan menyeluruh." },
      { label: "Kondominium matang", note: "Bilik air dan kemasan yang perlu dibaharui." },
      { label: "Townhouse dan dupleks", note: "Kerja dua aras di kawasan berbukit." },
      { label: "Rumah kedai kawasan Telawi", note: "Kerja naik taraf untuk penyewa perniagaan." },
    ],
    problems: [
      { title: "Pendawaian asal yang sudah melepasi hadnya", description: "Sambungan lama bercampur dengan kerja baharu tanpa susunan yang kemas." },
      { title: "Kelembapan dan kulat di bawah litupan pokok", description: "Dinding terlindung yang jarang kering sepenuhnya." },
      { title: "Masalah saliran di cerun", description: "Air yang mengalir ke arah rumah selepas hujan lebat." },
      { title: "Paip tersembunyi yang menua", description: "Kebocoran yang muncul sebagai tompok pada dinding dalaman." },
      { title: "Plaster dan siling retak", description: "Retak akibat pergerakan bangunan dan usia." },
    ],
    context: [
      "Rumah lama di Bangsar sering menyimpan kerja separa daripada beberapa kontraktor. Kami menyemak keadaan sebenar dahulu supaya sebut harga tepat.",
      "Litupan hijau yang menarik juga menjadikan dinding terlindung lembap. Kerja cat luaran di sini bermula dengan rawatan permukaan, bukan sekadar warna baharu.",
      "Di jalan bercerun, dinding penahan dan longkang belakang menentukan sama ada bilik bawah kekal kering.",
    ],
    faqs: [
      { question: "Boleh pendawaian banglo ditukar tanpa merosakkan ciri asal?", answer: "Boleh. Kami merancang laluan kabel supaya kerja pecah dikurangkan dan kemasan asal dikekalkan." },
      { question: "Anda merenovasi kondominium lama di Bangsar?", answer: "Ya, termasuk bilik air, dapur dan kerja kemasan mengikut peraturan bangunan." },
      { question: "Dinding belakang kami lembap setiap musim hujan. Apa penyelesaiannya?", answer: "Kami akan menyemak saliran dan resapan dahulu, kemudian merawat dari sisi yang menerima air." },
      { question: "Boleh anda memadankan kemasan sedia ada?", answer: "Boleh untuk kebanyakan kemasan. Kami akan menunjukkan pilihan padanan sebelum kerja bermula." },
    ],
  },
  "kuala-lumpur/bukit-jalil": {
    ...shared("Bukit Jalil"),
    name: "Bukit Jalil",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bukit Jalil",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bukit Jalil — renovasi, lantai, kerja paip, elektrik, kalis air dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bukit Jalil",
    summary:
      "Kawasan selatan KL — taman perumahan matang di sekitar Taman Yarl bersama gelombang kediaman bertingkat tinggi yang baharu.",
    intro: [
      "Bukit Jalil menggabungkan rumah teres matang dan kediaman bertingkat tinggi baharu. Kerja di sini terbahagi antara pembaikan rumah lama dan kemasan unit yang baru diserahkan.",
      "Kami menyediakan renovasi, kerja lantai, paip, elektrik, kalis air dan servis handyman di seluruh Bukit Jalil.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres dan kemasan unit bertingkat tinggi.",
      "Pemasangan lantai untuk unit baharu dan rumah yang dinaik taraf.",
      "Membaiki kebocoran paip dan saluran dapur.",
      "Menambah soket, lampu dan litar sebelum berpindah masuk.",
      "Kalis air bilik air dan balkoni sebelum kerja jubin.",
      "Pemasangan dan pembaikan kecil dalam unit.",
    ],
    propertyTypes: [
      { label: "Rumah teres matang (Taman Yarl)", note: "Bilik air dan perkhidmatan yang memerlukan pembaharuan." },
      { label: "Kediaman bertingkat tinggi baharu", note: "Kerja kemasan dan pembaikan kecacatan." },
      { label: "Kondominium berhampiran LRT", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Pangsapuri servis", note: "Kerja pembaharuan antara penyewa." },
      { label: "Lot komersial dan runcit", note: "Kerja naik taraf ruang perniagaan." },
    ],
    problems: [
      { title: "Kecacatan kemasan unit baharu", description: "Kerja pemaju yang perlu dibaiki selepas serahan." },
      { title: "Resapan bilik air di rumah teres lama", description: "Kalis air asal yang sudah tamat jangka hayat." },
      { title: "Masalah tekanan air dan pemanas", description: "Kelengkapan lama dan paip yang tersempit." },
      { title: "Kesan haus selepas acara dan ribut", description: "Habuk, sisa dan kesan air pada kawasan luar." },
      { title: "Saluran dapur tersumbat", description: "Minyak dan sisa makanan yang terkumpul dalam paip." },
    ],
    context: [
      "Kalendar acara di Bukit Jalil mempengaruhi akses. Pada hari perlawanan atau konsert, penghantaran bahan dijadualkan lebih awal.",
      "Bagi unit bertingkat tinggi, kami bekerja mengikut undang-undang kecil renovasi setiap bangunan, termasuk waktu kerja dan tempahan lif.",
      "Ramai pemilik menggabungkan beberapa servis dalam satu projek, seperti bilik air bersama kerja jubin dan elektrik.",
    ],
    faqs: [
      { question: "Boleh anda menyiapkan kemasan unit kondominium baharu?", answer: "Boleh, termasuk lantai, cat, lampu dan pemasangan sebelum anda berpindah masuk." },
      { question: "Anda bekerja di rumah teres Taman Yarl?", answer: "Ya, termasuk kerja bilik air, paip, elektrik dan naik taraf menyeluruh." },
      { question: "Boleh tambah soket dan lampu sebelum kami masuk?", answer: "Boleh, dan itu masa paling sesuai kerana unit masih kosong." },
      { question: "Perlukah kalis air jika hanya menukar jubin?", answer: "Jika membran sedia ada sudah gagal atau tidak wujud, ia perlu dipasang sebelum jubin baharu." },
    ],
  },
  "kuala-lumpur/sri-petaling": {
    ...shared("Sri Petaling"),
    name: "Sri Petaling",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Sri Petaling",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Sri Petaling — renovasi, kerja paip, kalis air, jubin, elektrik dan cat. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Sri Petaling",
    summary:
      "Bandar taman 1990-an di selatan KL — jalan rumah teres, deretan kedai yang sibuk dan pangsapuri baharu yang semakin bertambah.",
    intro: [
      "Rumah di Sri Petaling kebanyakannya dibina pada 1990-an, jadi kalis air asal, paip dan kemasan kini memasuki kitaran penggantian pertama.",
      "Kami menyediakan renovasi, kerja paip, kalis air, jubin, elektrik dan cat untuk rumah teres, lot kedai dan pangsapuri di Sri Petaling.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres 90-an secara berperingkat.",
      "Membaiki kebocoran paip dapur dan bilik air.",
      "Memasang semula kalis air bilik air dan balkoni.",
      "Menggantikan jubin retak dan membaharui grout.",
      "Menambah soket dan menaik taraf litar lama.",
      "Cat dalaman dan luaran termasuk pembaikan permukaan.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1990-an)", note: "Kemasan asal yang memerlukan pembaharuan." },
      { label: "Rumah kedai dan deretan komersial", note: "Kerja naik taraf pantas antara penyewa." },
      { label: "Pangsapuri dan kondominium baharu", note: "Kerja kemasan dan pembaikan kecacatan." },
      { label: "Rumah berkembar", note: "Kerja renovasi berskala lebih besar." },
      { label: "Pangsapuri servis", note: "Kerja pembaharuan untuk tuan rumah." },
    ],
    problems: [
      { title: "Kalis air asal yang mula gagal", description: "Bilik air yang meresap ke ruang bersebelahan." },
      { title: "Kebocoran bumbung dan flashing", description: "Titisan air semasa hujan lebat pada rumah dua tingkat." },
      { title: "Kebocoran paip dan perangkap dapur", description: "Sambungan lama di bawah sinki yang merembes." },
      { title: "Grout uzur dan jubin retak", description: "Kawasan basah yang mula membenarkan air masuk." },
      { title: "Cat pudar dan bernoda", description: "Fasad yang terdedah kepada matahari dan hujan." },
    ],
    context: [
      "Jalan rumah teres di sini sempit dengan kereta di kedua-dua belah, jadi penghantaran bahan dirancang mengikut waktu yang lebih lapang.",
      "Deretan kedai mempunyai rentak berbeza: kerja naik taraf perlu disiapkan cepat antara penyewa.",
      "Kerana rumah di sini berusia serupa, kami boleh menerangkan kepada pemilik apa yang biasanya gagal seterusnya.",
    ],
    faqs: [
      { question: "Bilik air rumah teres 90-an kami bocor. Boleh dibaiki tanpa kos besar?", answer: "Kami akan menyemak sama ada ia kebocoran paip setempat atau kalis air yang gagal, dan mencadangkan pilihan yang munasabah." },
      { question: "Anda membaiki bumbung rumah teres dua tingkat?", answer: "Ya, termasuk mengesan titik masuk air dan kerja kalis air." },
      { question: "Boleh anda menaik taraf lot kedai untuk perniagaan makanan?", answer: "Boleh, termasuk kerja paip, elektrik dan jubin mengikut keperluan operasi." },
      { question: "Boleh kami renovasi satu bilik pada satu masa?", answer: "Boleh. Kerja berperingkat memudahkan perancangan kos dan mengurangkan gangguan." },
    ],
  },
  "kuala-lumpur/old-klang-road": {
    ...shared("Old Klang Road"),
    name: "Old Klang Road",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Old Klang Road",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Old Klang Road — kerja paip, kalis air, renovasi, jubin, cat dan elektrik. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Old Klang Road",
    summary:
      "Koridor Jalan Klang Lama — taman matang seperti Taman Desa dan Taman Sri Sentosa bersama kondominium baharu di pinggir Mid Valley.",
    intro: [
      "Koridor Old Klang Road mempunyai campuran rumah teres matang, flat walk-up dan kondominium yang lebih baharu. Masalah saliran dan kebocoran bilik air adalah antara kerja yang paling kerap diminta.",
      "Kami menyediakan kerja paip, kalis air, renovasi, jubin, cat dan elektrik di seluruh koridor ini.",
    ],
    serviceNotes: [
      "Membaiki saluran tersumbat dan paip lama yang bocor.",
      "Kalis air bilik air dan kawasan basah yang sudah uzur.",
      "Naik taraf rumah matang secara berperingkat.",
      "Menggantikan jubin retak dan berongga.",
      "Cat luaran untuk fasad yang terdedah kepada habuk jalan raya.",
      "Menaik taraf pendawaian dan menambah soket.",
    ],
    propertyTypes: [
      { label: "Taman teres matang (Taman Desa, Sri Sentosa)", note: "Perkhidmatan asal yang memerlukan penggantian." },
      { label: "Flat dan pangsapuri walk-up", note: "Bilik air dan paip riser yang menua." },
      { label: "Kondominium pinggir Mid Valley", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Lot kedai dan unit komersial", note: "Kerja naik taraf untuk penyewa baharu." },
      { label: "Rumah berkembar dan banglo", note: "Kerja renovasi berskala lebih besar." },
    ],
    problems: [
      { title: "Saluran yang kerap tersumbat", description: "Air berpatah balik terutamanya selepas hujan lebat." },
      { title: "Kebocoran bilik air di rumah matang", description: "Kalis air lama yang membenarkan air meresap." },
      { title: "Kotoran dan noda pada fasad", description: "Habuk jalan raya yang melekat pada dinding luar." },
      { title: "Tekanan air yang menurun", description: "Paip bekalan lama yang tersempit oleh kerak." },
      { title: "Dinding retak akibat enapan", description: "Retak yang berulang di tempat yang sama." },
    ],
    context: [
      "Trafik di Jalan Klang Lama padat hampir sepanjang hari, jadi lawatan dan penghantaran bahan dijadualkan di luar waktu puncak.",
      "Sesetengah kawasan rendah di koridor ini mengutamakan saliran dan kemasan yang tahan air.",
      "Untuk menara baharu, peraturan strata biasa terpakai; untuk lot kedai, kerja dijadualkan mengikut waktu operasi.",
    ],
    faqs: [
      { question: "Saluran kami berpatah balik setiap kali hujan lebat. Boleh diselesaikan?", answer: "Kami akan memeriksa talian dan mengenal pasti sama ada ia sumbatan setempat atau masalah pada talian utama." },
      { question: "Anda merenovasi rumah di Taman Desa dan Sri Sentosa?", answer: "Ya, termasuk kerja bilik air, dapur, elektrik dan cat." },
      { question: "Boleh mengecat rumah bersebelahan jalan utama?", answer: "Boleh. Permukaan dibersihkan dahulu supaya cat melekat dengan baik." },
      { question: "Apa yang termasuk dalam sebut harga percuma?", answer: "Skop kerja, bahan utama dan kos dipecahkan supaya anda tahu apa yang dibayar." },
    ],
  },
  "kuala-lumpur/taman-melawati": {
    ...shared("Taman Melawati"),
    name: "Taman Melawati",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Taman Melawati",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Taman Melawati — kalis air, renovasi, kerja paip, elektrik, cat dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Taman Melawati",
    summary:
      "Bandar berbukit di timur laut KL — jalan rumah teres di kaki bukit granit, dengan kediaman premium di lereng yang lebih tinggi.",
    intro: [
      "Taman Melawati terletak di kaki bukit, jadi cara air mengalir di sekitar rumah menentukan banyak kerja pembaikan di sini. Kebocoran bumbung dan resapan dinding penahan adalah aduan yang kerap.",
      "Kami menyediakan kerja kalis air, renovasi, paip, elektrik, cat dan servis handyman di seluruh Taman Melawati.",
    ],
    serviceNotes: [
      "Kalis air bumbung, dinding dan kawasan basah.",
      "Naik taraf rumah teres 1980-an secara berperingkat.",
      "Membaiki kebocoran paip dan saluran luar.",
      "Menaik taraf pendawaian lama dan menambah litar.",
      "Cat luaran termasuk rawatan kulat pada dinding terlindung.",
      "Pembaikan kecil di sekitar rumah dan halaman.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1980-an)", note: "Perkhidmatan asal yang memasuki kitaran penggantian." },
      { label: "Rumah di lereng bukit", note: "Isu saliran dan dinding penahan yang perlu dipantau." },
      { label: "Banglo dan kediaman premium", note: "Kerja renovasi dengan kemasan yang lebih halus." },
      { label: "Kondominium dan pangsapuri", note: "Kerja dalam unit mengikut peraturan bangunan." },
      { label: "Lot kedai", note: "Kerja naik taraf ruang perniagaan kecil." },
    ],
    problems: [
      { title: "Kebocoran bumbung ketika musim hujan", description: "Air masuk melalui genting, flashing atau longkang bumbung." },
      { title: "Resapan pada dinding penahan", description: "Air dari cerun yang menembusi dinding belakang rumah." },
      { title: "Kulat pada dinding terlindung", description: "Dinding yang jarang menerima matahari kekal lembap." },
      { title: "Kelembapan di tingkat bawah", description: "Air bertakung di sekitar tapak rumah selepas hujan." },
      { title: "Perkhidmatan menua di rumah 80-an", description: "Paip dan pendawaian yang perlu dinilai semula." },
    ],
    context: [
      "Di Melawati, lawatan tapak bermula di luar rumah. Cara tanah menyalirkan air menentukan penyelesaian yang betul.",
      "Akses di lereng bukit mempengaruhi logistik: lorong yang curam mengehadkan tempat bahan boleh diletakkan.",
      "Jalan rumah teres yang lebih lama mengikut urutan pembaharuan biasa: perkhidmatan, kawasan basah, kemudian kemasan.",
    ],
    faqs: [
      { question: "Bilik belakang kami lembap selepas hujan panjang. Adakah ia dinding penahan?", answer: "Ia salah satu kemungkinan. Kami akan menyemak saliran, dinding penahan dan tanda resapan sebelum mencadangkan penyelesaian." },
      { question: "Boleh anda mengubah suai dan menambah ruang pada rumah teres 80-an?", answer: "Boleh. Kami akan menerangkan skop kerja dan urutan yang munasabah." },
      { question: "Anda mengecat bumbung selain membaikinya?", answer: "Kami mengutamakan pembaikan dan kalis air dahulu, kemudian kerja kemasan mengikut keperluan." },
      { question: "Adakah kulat akan kembali selepas dicat semula?", answer: "Ia akan kembali jika kelembapan tidak dirawat. Kami merawat punca dahulu sebelum menggunakan cat anti-kulat." },
    ],
  },
  "kuala-lumpur/desa-parkcity": {
    ...shared("Desa ParkCity"),
    name: "Desa ParkCity",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Desa ParkCity",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Desa ParkCity — lantai, elektrik, renovasi, kerja paip, handyman dan cat mengikut garis panduan komuniti. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Desa ParkCity",
    summary:
      "Komuniti terancang di barat KL — kediaman landed berpagar dan kondominium tepi taman dengan piawaian kemasan yang tinggi.",
    intro: [
      "Rumah di Desa ParkCity lebih baharu, jadi kerja di sini lebih kerap melibatkan naik taraf tersasar berbanding renovasi berat: lantai, pencahayaan, kemasan bilik air dan pembaikan kecil.",
      "Kami menyediakan kerja lantai, elektrik, renovasi, paip, handyman dan cat mengikut garis panduan komuniti terurus di Desa ParkCity.",
    ],
    serviceNotes: [
      "Menggantikan lantai asal pemaju dengan pilihan yang lebih tahan lama.",
      "Menaik taraf pencahayaan dan menambah litar untuk peralatan baharu.",
      "Naik taraf dalaman mengikut garis panduan komuniti.",
      "Membaiki kebocoran kecil dan kelengkapan bilik air.",
      "Pemasangan dan pembaikan kecil di sekitar rumah.",
      "Kerja cat dalaman untuk pembaharuan ruang.",
    ],
    propertyTypes: [
      { label: "Rumah teres dan courtyard berpagar", note: "Kemasan pemaju yang mula menunjukkan kesan haus." },
      { label: "Kondominium tepi taman", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Rumah berkembar dan banglo", note: "Kerja naik taraf dengan kemasan halus." },
      { label: "Kediaman servis", note: "Kerja pembaharuan antara penyewa." },
      { label: "Lot runcit kejiranan", note: "Kerja naik taraf ruang perniagaan kecil." },
    ],
    problems: [
      { title: "Kemasan pemaju yang mula haus", description: "Kemasan asal yang tidak lagi menepati kehendak pemilik." },
      { title: "Silikon dan grout yang merosot", description: "Kawasan basah yang mula membenarkan air masuk." },
      { title: "Air masuk di balkoni dan tepi tingkap", description: "Hujan ditiup angin menembusi sambungan yang haus." },
      { title: "Had kerja mengikut peraturan komuniti", description: "Waktu kerja, akses dan pendaftaran pelawat yang perlu dirancang." },
      { title: "Kesan air keras pada kelengkapan", description: "Kerak yang terkumpul pada pancuran dan pili." },
    ],
    context: [
      "Peraturan komuniti terurus membentuk cara kerja dijalankan: akses berpagar, pendaftaran pelawat dan waktu kerja yang dibenarkan.",
      "Kerana rumah lebih baharu, nasihat kami sering mengarah kepada naik taraf tersasar dan bukan kerja pecah yang besar.",
      "Bagi unit pelaburan, kerja pembaharuan dijadualkan mengikut kalendar penyewaan.",
    ],
    faqs: [
      { question: "Boleh kami menggantikan lantai asal pemaju?", answer: "Boleh. Kami akan mencadangkan pilihan lantai yang sesuai dengan penggunaan dan kemasan sedia ada." },
      { question: "Anda mengendalikan renovasi kondominium di bawah peraturan pengurusan?", answer: "Ya, termasuk mematuhi waktu kerja dan menyediakan maklumat skop untuk permohonan." },
      { question: "Boleh anda menaik taraf pencahayaan dan pendawaian tambahan?", answer: "Boleh, termasuk menambah litar dan titik lampu mengikut keperluan." },
      { question: "Grout dan silikon kami sudah nampak uzur selepas beberapa tahun. Normal?", answer: "Ya, terutamanya di kawasan basah. Ia boleh dibaharui tanpa menukar keseluruhan jubin." },
    ],
  },
};
