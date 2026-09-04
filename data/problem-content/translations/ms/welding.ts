import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Pintu pagar utama dan gril tingkap menerima hujan terus; palang bawah dan tiang engsel biasanya rosak dahulu." },
  { label: "Semi-D & Banglo", note: "Pagar yang lebih panjang bermakna lebih banyak kimpalan dan lebih banyak tempat lapisan cat boleh gagal." },
  { label: "Kondominium & Pangsapuri", note: "Gril balkoni dan rak jemuran berkarat di tempat hujan menampar, walaupun di tingkat berbumbung." },
  { label: "Kedai & Komersial", note: "Rangka pintu roller shutter berkarat di landasan tempat air dan habuk berkumpul." },
  { label: "Hartanah Lama", note: "Pagar berusia puluhan tahun mungkin sudah bersalut cat di atas karat aktif dan perlu penggantian bahagian." },
];

const areasNote =
  "Kami membaiki pagar, gril dan susur tangan berkarat di seluruh Kuala Lumpur dan Selangor.";

const propertyTypesIntro =
  "Karat menyerang mana-mana keluli terdedah, tetapi tempat ia bermula bergantung pada kedudukan dan pendedahan cuaca.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "rusted-gate-repair": {
    ...base,
    name: "Pagar & Gril Berkarat",
    title: "Renovix Home Services | Pembaikan Pagar Berkarat di KL & Selangor",
    metaDescription:
      "Pagar, gril dan susur tangan berkarat di Kuala Lumpur & Selangor. Ketahui punca karat dalam iklim tropika, karat mana boleh dirawat, bila bahagian perlu diganti dan bila perlu panggil tukang kimpal.",
    h1: "Pagar & Gril Berkarat",
    subtitle:
      "Karat pada pagar besi mild steel adalah perkara biasa dalam iklim Malaysia — yang penting ialah sama ada ia karat permukaan atau karat yang sudah makan tembus.",
    whatItMeans: [
      "Karat berlaku apabila lapisan pelindung pada keluli mild steel pecah dan logam terdedah kepada lembapan serta udara. Di Malaysia, gabungan kelembapan harian, hujan lebat dan panas terik menembusi cat lebih cepat berbanding iklim sederhana, jadi pagar yang disalut lima atau enam tahun lalu biasanya mula menunjukkan karat di kimpalan, palang bawah dan tempat air bertakung.",
      "Perbezaan yang menentukan kos ialah kedalaman. Karat permukaan bersifat kosmetik: keluli di bawahnya masih kukuh, dan penyelesaiannya ialah pembuangan secara mekanikal, rawatan dan penyalutan semula. Karat struktur pula sudah menipiskan atau menembusi logam, selalunya di bahagian bawah tiang tempat air berkumpul, dan tiada cat yang mampu memulihkan kekuatan itu — bahagian terlibat mesti dipotong dan kepingan baharu dikimpal masuk.",
    ],
    commonCauses: [
      "Cat atau primer asal yang rosak selepas bertahun-tahun panas dan hujan.",
      "Calar dan langgaran yang mendedahkan logam, selalunya di kawasan selak dan engsel.",
      "Air bertakung di dasar tiang atau di dalam bahagian berongga yang tidak ditutup.",
      "Kimpalan yang tidak pernah dibersih dan disapu primer selepas fabrikasi.",
      "Udara masin atau lembapan berterusan di kawasan pantai dan tanah rendah.",
      "Tepi potongan daripada ubah suai di tapak yang dibiarkan tanpa salutan.",
    ],
    warningSigns: [
      "Kesan perang mengalir turun daripada kimpalan atau sambungan.",
      "Cat menggelembung atau mengelupas, yang biasanya bermakna karat sudah aktif di bawahnya.",
      "Lapisan logam mengelupas, atau bahagian yang berbunyi pekak dan lembut apabila diketuk.",
      "Lubang, atau logam yang melekuk apabila ditekan di dasar tiang.",
      "Pagar yang mula melendut atau menyeret, tanda tiang engsel mungkin sudah terhakis.",
    ],
    solutions: [
      { title: "Nilai karat permukaan berbanding karat struktur", description: "Kami memeriksa kedalaman di setiap titik terjejas — terutamanya palang bawah dan tiang engsel — supaya anda diberitahu dengan jujur bahagian mana perlu dirawat dan mana perlu diganti." },
      { title: "Buang karat secara mekanikal dan rawat", description: "Keluli yang masih kukuh diberus atau dicanai sehingga logam bersih, kemudian dirawat dan disapu primer sebelum lapisan akhir. Mengecat atas karat hidup hanya menyembunyikannya." },
      { title: "Potong dan kimpal bahagian baharu", description: "Jika logam sudah tembus atau menipis, bahagian terlibat dipotong dan kepingan baharu dikimpal masuk serta dikemas supaya sepadan dengan bahagian lain." },
      { title: "Salut semula dan tutup takungan air", description: "Hujung berongga yang terbuka ditutup atau ditebuk saliran supaya air tidak bertakung di dalam, kerana itulah punca tempat yang sama berkarat semula." },
    ],
    whenToCall: [
      "Anda nampak lubang, atau logam melentur apabila ditekan.",
      "Pagar sudah melendut, menyeret di lantai atau tersekat pada selak.",
      "Karat kembali ke tempat sama selepas dicat semula.",
      "Susur tangan atau pagar keselamatan terasa longgar — itu isu keselamatan, bukan kosmetik.",
    ],
    relatedServiceNote:
      "Rawatan karat dan penggantian bahagian dikendalikan oleh pasukan kimpalan dan kerja logam kami. Jika anda mahu pagar dicat semula sepenuhnya selepas itu, kami selaraskan dengan pasukan cat.",
    processTitle: "Bagaimana Kami Membaiki Pagar atau Gril Berkarat",
    processIntro:
      "Matlamatnya ialah menangani punca, bukan menutup simptom, supaya tempat yang sama tidak berkarat tembus tahun depan.",
    processSteps: [
      { title: "Periksa dan ketuk logam", description: "Kami memeriksa setiap kawasan berkarat untuk kedalaman, mengetuk dan menekan bagi mencari di mana keluli sudah menipis." },
      { title: "Buang karat sehingga keluli bersih", description: "Kawasan terjejas diberus atau dicanai sehingga hanya logam kukuh yang tinggal." },
      { title: "Baiki atau ganti bahagian", description: "Keluli kukuh dirawat dan disapu primer; keluli tembus dipotong dan bahagian baharu dikimpal masuk." },
      { title: "Primer, salut dan tutup", description: "Primer dan lapisan akhir disapu, dan hujung berongga yang terbuka ditutup daripada air bertakung." },
    ],
    faqs: [
      { question: "Bolehkah pagar berkarat dibaiki, atau perlu diganti terus?", answer: "Ia bergantung sepenuhnya pada kedalaman. Karat permukaan pada keluli kukuh dirawat dan disalut semula, dan pagar kekal jangka hayat penuhnya. Jika logam sudah menipis atau tembus — biasanya di dasar tiang — bahagian itu dipotong dan kepingan baharu dikimpal masuk. Penggantian penuh hanya perlu apabila kebanyakan rangka sudah rosak, dan itu jarang berlaku." },
      { question: "Kenapa karat asyik kembali di tempat yang sama?", answer: "Hampir selalu kerana karat dicat semula dan bukan dibuang, atau kerana air bertakung di tempat yang tidak boleh mengalir — dalam bahagian berongga yang tidak ditutup, atau pada plat dasar yang menakung air. Karat terus berjalan di bawah cat baharu. Penyelesaiannya ialah canai sehingga keluli bersih dan tutup atau salurkan takungan air itu." },
      { question: "Lebih jimatkah jika saya cat sendiri pagar itu?", answer: "Mengecat semula hanya berbaloi jika keluli di bawahnya masih kukuh dan anda membuang karat dengan betul dahulu. Jika anda mengecat atas karat hidup, anda akan mengulanginya dalam setahun. Jika sesuatu bahagian sudah terhakis tembus, mengecat tidak memberi apa-apa dari segi struktur — ia perlu dikimpal." },
      { question: "Adakah keluli tahan karat mengelak masalah ini sepenuhnya?", answer: "Keluli tahan karat jauh lebih tahan kakisan berbanding mild steel dan wajar dipertimbangkan di kawasan pantai atau sentiasa lembap, tetapi kosnya jauh lebih tinggi. Kebanyakan rumah di Lembah Klang memadai dengan mild steel yang disapu primer dengan betul dan diselenggara." },
      { question: "Berapa lama pagar sepatutnya bertahan sebelum berkarat?", answer: "Ia bergantung pada salutan asal, pendedahan dan sama ada ia diselenggara. Kami tidak menerbitkan angka jangka hayat kerana ia terlalu berbeza-beza untuk dinyatakan dengan jujur. Apa yang boleh kami katakan ialah menangkap karat permukaan awal dan menyalut semula jauh lebih murah berbanding menunggu sesuatu bahagian tembus." },
    ],
  },
  "railing-repair": {
    ...base,
    name: "Susur Tangan Longgar atau Rosak",
    title: "Renovix Home Services | Pembaikan Susur Tangan di KL & Selangor",
    metaDescription:
      "Susur tangan tangga, balkoni dan koridor yang longgar di Kuala Lumpur & Selangor. Fahami kenapa pengikat menjadi longgar, kerosakan mana berisiko keselamatan dan cara tukang kimpal membaikinya.",
    h1: "Susur Tangan Longgar atau Rosak",
    subtitle:
      "Susur tangan yang bergerak apabila disandar ialah masalah keselamatan dahulu, kosmetik kemudian — ia patut diperiksa, bukan dibiarkan.",
    whatItMeans: [
      "Susur tangan ialah elemen perlindungan jatuh. Tidak seperti pagar atau gril, ia sesuatu yang orang sandarkan berat badan, selalunya tanpa berfikir dan selalunya di tangga. Ini bermakna susur tangan longgar berada dalam kategori berbeza daripada kebanyakan kerosakan logam: akibat ia gagal ialah kecederaan, bukan kesulitan.",
      "Susur tangan menjadi longgar dalam dua cara. Sama ada pengikatnya gagal — bolt plat dasar longgar, angkur tercabut daripada konkrit, atau lepaan di sekelilingnya hancur — atau kerja logamnya gagal, bermakna kimpalan retak atau bahagian sudah terhakis. Kedua-duanya perlu pembaikan berbeza, dan langkah pertama sentiasa menentukan yang mana satu.",
    ],
    commonCauses: [
      "Bolt plat dasar menjadi longgar selepas bertahun-tahun pergerakan dan penggunaan.",
      "Angkur tercabut daripada konkrit yang lemah, retak atau digerudi terlalu hampir tepi.",
      "Kimpalan pada sambungan tiang ke palang retak akibat lenturan berulang.",
      "Kakisan di dasar tempat air berkumpul di sekeliling tiang.",
      "Kerosakan hentaman daripada perabot, kenderaan atau kejatuhan.",
      "Susur tangan yang asalnya dipasang ke dalam lepaan atau jubin, bukan konkrit struktur.",
    ],
    warningSigns: [
      "Sebarang pergerakan yang kelihatan apabila anda menolak atau menyandar.",
      "Ruang terbuka antara plat dasar dan lantai.",
      "Kesan karat atau konkrit retak di sekeliling dasar tiang.",
      "Garis retak yang kelihatan pada sambungan kimpalan.",
      "Bunyi gegaran atau ketukan apabila susur tangan digunakan.",
    ],
    solutions: [
      { title: "Kenal pasti kegagalan pengikat berbanding kegagalan logam", description: "Kami menentukan sama ada pergerakan berlaku pada angkur, pada kimpalan atau pada bahan itu sendiri — membaiki yang salah meninggalkan susur tangan sama bahaya." },
      { title: "Angkur semula ke dalam konkrit kukuh", description: "Jika angkur tercabut, kami buka sehingga konkrit kukuh dan pasang semula dengan angkur sesuai, bukan sekadar mengetatkan ke dalam lubang yang sudah gagal." },
      { title: "Kimpal semula sambungan retak", description: "Kimpalan retak dicanai keluar dan dikimpal semula dengan betul, kemudian dirawat dan disalut, bukan sekadar ditampal." },
      { title: "Ganti bahagian terhakis", description: "Tiang yang terhakis di dasar dipotong sehingga logam kukuh dan bahagian baharu dikimpal masuk, dengan dasar direka supaya air boleh mengalir." },
    ],
    whenToCall: [
      "Susur tangan bergerak walau sedikit apabila disandar — jangan tunggu untuk yang ini.",
      "Anda nampak retak pada kimpalan atau ruang pada plat dasar.",
      "Susur tangan berada di tangga, balkoni atau mana-mana tempat yang boleh menyebabkan jatuh.",
      "Konkrit di sekeliling dasar tiang retak atau mengelupas.",
    ],
    relatedServiceNote:
      "Pembaikan susur tangan dikendalikan oleh pasukan kimpalan dan kerja logam kami, yang boleh mengangkur semula, mengimpal semula atau menggantikan bahagian mengikut keperluan kerosakan.",
    processTitle: "Bagaimana Kami Membaiki Susur Tangan Longgar",
    processIntro:
      "Kerana susur tangan ialah elemen keselamatan, pembaikan bertujuan memulihkan kekuatan sebenar, bukan sekadar menghentikan goyangan.",
    processSteps: [
      { title: "Uji dan cari pergerakan", description: "Kami membebankan susur tangan di beberapa titik untuk mencari di mana tepatnya ia bergerak — angkur, kimpalan atau bahagian." },
      { title: "Dedah dan sediakan", description: "Pengikat atau sambungan yang gagal dibuka supaya pembaikan masuk ke dalam bahan yang kukuh." },
      { title: "Pasang semula atau kimpal semula", description: "Susur tangan diangkur semula ke dalam konkrit kukuh, atau sambungan dicanai keluar dan dikimpal semula dengan betul." },
      { title: "Rawat, salut dan uji semula", description: "Pembaikan disapu primer dan disalut, kemudian dibebankan semula untuk mengesahkan tiada lagi pergerakan." },
    ],
    faqs: [
      { question: "Susur tangan saya hanya goyang sedikit — adakah itu benar-benar masalah?", answer: "Ya, dan ia berbaloi ditangani. Goyangan sedikit bermakna pengikat atau sambungan sudah mula gagal, dan susur tangan tidak stabil dengan sendirinya — pergerakan itu melonggarkan pengikat setiap kali digunakan. Memandangkan susur tangan wujud untuk menghalang kejatuhan, ia antara sedikit kerosakan logam yang kami katakan tidak patut dibiarkan." },
      { question: "Bolehkah bolt itu sekadar diketatkan semula?", answer: "Hanya jika angkur itu sendiri masih kukuh dan cuma menjadi longgar. Selalunya angkur sudah tercabut dan lubangnya sudah membesar, jadi mengetatkan semula terasa lebih baik untuk beberapa minggu kemudian gagal lagi. Kami memeriksa angkur sebelum memutuskan, dan memasang semula ke dalam konkrit kukuh jika ia sudah rosak." },
      { question: "Perlukah kelulusan pengurusan bangunan untuk susur tangan balkoni?", answer: "Untuk hartanah strata, biasanya ya — susur tangan balkoni lazimnya sebahagian harta bersama atau menjejaskan fasad bangunan, jadi kebanyakan pengurusan mahu dimaklumkan dan mungkin memerlukan permohonan. Semak peraturan rumah bangunan anda sebelum mengatur kerja." },
      { question: "Bolehkah anda memadankan pembaikan dengan reka bentuk susur tangan sedia ada?", answer: "Dalam kebanyakan kes ya. Hantarkan foto dan kami biasanya boleh mendapatkan atau membuat bahagian yang sepadan. Corak hiasan lama kadangkala hanya boleh dianggarkan, dan kami akan memberitahu anda dengan jujur sebelum mula jika padanan tepat tidak dapat dicapai." },
      { question: "Adakah kimpalan retak boleh dibaiki atau susur tangan perlu diganti?", answer: "Kimpalan retak lazimnya boleh dibaiki — ia dicanai keluar dan dikimpal semula, yang memulihkan kekuatan asal apabila dilakukan dengan betul. Penggantian hanya perlu jika logam sekeliling turut terhakis atau susur tangan rosak sepanjang jarak yang panjang." },
    ],
  },
  "gate-alignment-problems": {
    ...base,
    name: "Pagar Tidak Menutup atau Tersasar",
    title: "Renovix Home Services | Pembaikan Jajaran Pagar di KL & Selangor",
    metaDescription:
      "Pagar yang menyeret, tersekat atau tidak berselak di Kuala Lumpur & Selangor. Ketahui kenapa pagar ayun dan gelangsar tersasar, apa boleh dilaras dan apa perlu dikimpal.",
    h1: "Pagar Tidak Menutup atau Tersasar",
    subtitle:
      "Pagar yang menyeret di lantai atau enggan berselak sedang memberitahu anda sesuatu telah bergerak — engsel, tiang, roda atau tanah itu sendiri.",
    whatItMeans: [
      "Pagar ialah pemasangan bergerak yang berat, digantung pada beberapa titik sahaja, jadi perubahan yang sangat kecil di mana-mana dalam pemasangan itu muncul sebagai masalah besar di selak. Engsel yang haus beberapa milimeter, atau tiang yang senget sedikit, sudah cukup untuk membuatkan pagar menyeret di lantai atau meninggalkan ruang di tepi penutup.",
      "Berbaloi memisahkan simptom daripada punca. Menyeret, tersekat, ruang di atas atau bawah tepi penutup, dan selak yang tidak lagi sejajar semuanya tanda berbeza bagi isu asas yang sama: pagar tidak lagi duduk di tempat ia direka. Memaksanya tutup mempercepatkan kerosakan, kerana tekanan itu berpindah ke engsel dan kimpalan.",
    ],
    commonCauses: [
      "Pin dan bush engsel haus selepas bertahun-tahun digunakan.",
      "Tiang engsel senget kerana tanah di dasarnya mendap.",
      "Rangka pagar melendut di penjuru jauh akibat beratnya sendiri.",
      "Roda pada pagar gelangsar haus, tersekat atau tersumbat habuk.",
      "Landasan bawah pagar gelangsar bengkok atau tersumbat.",
      "Kimpalan retak di penjuru rangka pagar menyebabkan ia hilang bentuk segi empat.",
      "Motor pagar automatik atau lengannya tidak dilaras dengan betul.",
    ],
    warningSigns: [
      "Pagar menggesel lantai, meninggalkan kesan berbentuk lengkung.",
      "Anda perlu mengangkat atau menolak pagar untuk berselak.",
      "Ruang di tepi penutup lebih lebar di atas berbanding bawah, atau sebaliknya.",
      "Pagar gelangsar yang tersentak, tersekat atau tiba-tiba berat ditolak.",
      "Kesengetan yang jelas pada tiang engsel.",
    ],
    solutions: [
      { title: "Kenal pasti di mana pergerakan berlaku", description: "Kami memeriksa engsel, tiang, bentuk rangka dan landasan sebelum melaras apa-apa, kerana penyelesaian bergantung pada yang mana telah bergerak." },
      { title: "Laras atau ganti engsel dan roda", description: "Pin dan bush engsel yang haus, serta roda gelangsar yang haus atau tersekat, diganti supaya pagar tergantung dan bergerak seperti direka." },
      { title: "Betulkan dan kukuhkan rangka", description: "Rangka yang melendut ditarik semula ke bentuk asal dan dikukuhkan, dan mana-mana kimpalan retak dicanai keluar serta dikimpal semula." },
      { title: "Luruskan tiang atau landasan", description: "Tiang senget ditetapkan semula dan jika perlu dasarnya dibaiki; landasan bawah yang bengkok diluruskan atau diganti dan dibersihkan." },
    ],
    whenToCall: [
      "Pagar perlu dipaksa, diangkat atau ditolak untuk ditutup.",
      "Ia menyeret di lantai dan mengorek alur.",
      "Pagar gelangsar sudah menjadi berat, bising atau terkeluar landasan.",
      "Anda nampak kesengetan pada tiang engsel atau retak di penjuru rangka.",
    ],
    relatedServiceNote:
      "Jajaran pagar dikendalikan oleh pasukan kimpalan dan kerja logam kami. Jika kerosakan berpunca daripada motor atau sistem kawalan pagar automatik, itu kerja pakar dan kami akan memberitahu anda, bukan meneka.",
    processTitle: "Bagaimana Kami Menjajarkan Semula Pagar",
    processIntro:
      "Kerja jajaran bersifat diagnostik sebelum bersifat fizikal — melaras elemen yang salah memburukkan lagi masalah.",
    processSteps: [
      { title: "Periksa keseluruhan pemasangan", description: "Kami menguji ayunan atau gelangsar sepanjang perjalanan penuhnya dan memeriksa engsel, tiang, rangka dan landasan satu per satu." },
      { title: "Perbaharui komponen haus", description: "Pin engsel, bush atau roda yang haus diganti dengan bahagian bersaiz betul." },
      { title: "Betulkan struktur", description: "Rangka melendut dibetulkan dan dikukuhkan, tiang senget ditetapkan semula, landasan bengkok diluruskan." },
      { title: "Tetapkan selak dan uji", description: "Selak atau penerima ditetapkan semula ke kedudukan yang dibetulkan dan pagar dikitar berulang kali untuk memastikan ia menutup dengan lancar." },
    ],
    faqs: [
      { question: "Kenapa pagar saya tiba-tiba mula menyeret?", answer: "Jarang benar-benar tiba-tiba — ia biasanya berlaku beransur selama berbulan dan sampai ke tahap tersangkut. Punca biasa ialah engsel haus, rangka pagar melendut, atau tiang engsel senget kerana tanah di dasarnya mendap. Pemeriksaan cepat ialah lihat ruang di tepi penutup: jika ia berbentuk baji dan bukan selari, pagar sudah jatuh." },
      { question: "Bolehkah anda canai sahaja bahagian bawah pagar supaya ia berhenti menggesel?", answer: "Kami lebih suka tidak, dan sebabnya begini: mencanai membuang logam untuk menampung kerosakan yang masih ada dan masih bergerak. Pagar akan menggesel semula apabila ia jatuh lagi, dan anda telah kehilangan bahan serta mendedahkan tepi kosong kepada karat. Lebih baik betulkan engsel atau tiang yang telah bergerak." },
      { question: "Pagar gelangsar saya menjadi sangat berat ditolak. Kenapa?", answer: "Biasanya rodanya. Ia sama ada haus menjadi rata, tersekat kerana kurang pelinciran, atau tersumbat habuk dan daun daripada landasan. Kadangkala landasan bawah telah bengkok dilanggar kenderaan. Semuanya boleh dibaiki, dan berbaloi dilakukan sebelum beban tambahan mula merosakkan rangka pagar itu sendiri." },
      { question: "Adakah anda membaiki motor pagar automatik?", answer: "Kami mengendalikan kerja logam — pagar, rangka, engsel, landasan dan jajaran yang motor bergantung padanya. Bahagian dalam motor dan papan kawalan ialah kerja pakar dan kami akan merujuk anda, bukan meneka. Namun selalunya kerosakan automasi sebenarnya kerosakan jajaran yang membuatkan motor tertekan." },
      { question: "Adakah pagar tersasar satu masalah keselamatan?", answer: "Boleh jadi, dalam erti praktikal bahawa pagar yang tidak boleh berselak dengan betul selalunya dibiarkan tidak berselak, dan yang perlu dipaksa cenderung dibiarkan terbuka. Kami tidak membuat sebarang dakwaan tentang apa yang mana-mana pagar mampu halang, tetapi pagar yang menutup dan berselak seperti direka sedang melakukan kerja yang ia dipasang untuknya." },
    ],
  },
  "broken-weld-joint": {
    ...base,
    name: "Kimpalan Retak atau Patah",
    title: "Renovix Home Services | Pembaikan Kimpalan Retak di KL & Selangor",
    metaDescription:
      "Kimpalan retak dan patah pada pagar, gril, susur tangan dan rangka awning di Kuala Lumpur & Selangor. Fahami kenapa kimpalan gagal, mana yang mendesak dan cara pembaikan di tapak dijalankan.",
    h1: "Kimpalan Retak atau Patah",
    subtitle:
      "Kimpalan yang gagal ialah sambungan yang berhenti menanggung beban — semua yang bersambung padanya kini dipegang oleh sesuatu yang tidak direka menanggung keseluruhan kerja itu.",
    whatItMeans: [
      "Kimpalan ialah titik di mana dua kepingan keluli dilebur menjadi satu. Apabila ia retak, pemasangan itu berhenti berkelakuan sebagai satu struktur dan mula berkelakuan sebagai bahagian berasingan yang dipegang longgar. Bergantung pada di mana ia berlaku, akibatnya berjulat daripada bunyi gegaran yang menjengkelkan sehingga kebimbangan keselamatan sebenar, seperti pada tiang susur tangan atau pendakap rangka awning.",
      "Kimpalan gagal atas sebab yang munasabah, dan ia biasanya bukan misteri. Sama ada sambungan itu menanggung beban atau lenturan berulang lebih daripada ia direka, atau kimpalan itu sendiri dibuat dengan buruk — penembusan tidak mencukupi, logam tercemar, atau fillet yang jauh terlalu kecil untuk saiz bahagian. Kakisan dalam sambungan ialah punca ketiga yang biasa, dan di Malaysia ia kerap berlaku kerana kimpalan tanpa primer ialah tempat karat bermula.",
    ],
    commonCauses: [
      "Lenturan berulang pada sambungan, seperti di engsel pagar atau selak yang kerap digunakan.",
      "Kimpalan asal yang penembusannya terlalu sedikit atau saiznya tidak mencukupi untuk beban.",
      "Kakisan menembusi sambungan dan memakan logam kimpalan.",
      "Hentaman — langgaran kenderaan, kejatuhan berat, atau pagar dihempas kuat selama bertahun-tahun.",
      "Beban yang ditambah kemudian yang struktur asal tidak direka untuknya.",
      "Kimpalan dibuat atas logam bercat atau kotor semasa fabrikasi, menghasilkan sambungan tercemar.",
    ],
    warningSigns: [
      "Garis gelap yang kelihatan pada sambungan, selalunya dengan karat merembes daripadanya.",
      "Pergerakan atau kelonggaran pada titik yang dahulunya tegar.",
      "Bunyi klik atau ketukan apabila item digunakan atau dibebankan.",
      "Cat retak dalam garis lurus tepat di sepanjang sambungan.",
      "Dua bahagian yang tidak lagi berada pada sudut asalnya.",
    ],
    solutions: [
      { title: "Nilai sambungan dan laluan beban", description: "Kami melihat kenapa kimpalan gagal, bukan sekadar di mana. Mengimpal semula sambungan yang gagal akibat beban berlebihan tanpa menangani beban itu hanya akan retak semula." },
      { title: "Canai keluar dan kimpal semula dengan betul", description: "Kimpalan yang gagal dicanai keluar sehingga logam bersih dan kukuh, kemudian dikimpal semula dengan penembusan mencukupi dan fillet bersaiz sesuai." },
      { title: "Kukuhkan jika reka bentuk asal marginal", description: "Jika sambungan asal terlalu kecil untuk apa yang ia tanggung, kami menambah gusset atau membesarkan kimpalan, bukan mengulangi kelemahan asal." },
      { title: "Rawat dan salut pembaikan", description: "Sambungan yang dibaiki dibersih, disapu primer dan disalut — kimpalan tanpa salutan ialah tepat tempat pusingan kakisan berikutnya bermula." },
    ],
    whenToCall: [
      "Kimpalan yang gagal berada pada susur tangan, pagar keselamatan, rangka awning atau apa-apa di atas kepala.",
      "Anda nampak pergerakan pada sambungan yang sepatutnya tegar.",
      "Pagar atau gril sudah jelas berubah bentuk.",
      "Kimpalan yang pernah dibaiki retak semula — itu bermakna puncanya tidak pernah ditangani.",
    ],
    relatedServiceNote:
      "Pembaikan kimpalan ialah kerja teras bagi pasukan kimpalan dan kerja logam kami, dan kebanyakan sambungan boleh dibaiki di tapak tanpa menanggalkan keseluruhan item.",
    processTitle: "Bagaimana Kami Membaiki Kimpalan Retak",
    processIntro:
      "Pembaikan kimpalan yang baik menangani kenapa sambungan itu gagal, supaya sambungan sama tidak kembali dalam senarai tahun depan.",
    processSteps: [
      { title: "Periksa sambungan dan struktur", description: "Kami memeriksa retakan dan menentukan sama ada puncanya beban, kakisan, hentaman atau kimpalan asal yang buruk." },
      { title: "Sediakan sehingga logam kukuh", description: "Kimpalan retak dan mana-mana logam terkakis dicanai keluar supaya pembaikan masuk ke dalam keluli bersih." },
      { title: "Kimpal semula dan kukuhkan", description: "Sambungan dikimpal semula pada saiz sesuai, dengan gusset atau sokongan tambahan jika reka bentuk asal marginal." },
      { title: "Kemas dan lindungi", description: "Kimpalan dikemas, disapu primer dan disalut supaya sambungan yang dibaiki terlindung daripada kakisan." },
    ],
    faqs: [
      { question: "Bolehkah kimpalan retak dibaiki di tapak, atau perlu dibawa ke bengkel?", answer: "Kebanyakannya boleh dibaiki di tapak. Kami membawa peralatan kimpalan mudah alih, dan pagar, gril, susur tangan serta rangka awning biasanya dibaiki di tempatnya, yang mengelakkan kos dan gangguan penanggalan. Sesekali item yang perlu dibina semula secara meluas lebih baik dibawa keluar, dan kami akan memberitahu anda lebih awal." },
      { question: "Kenapa kimpalan itu retak sedangkan bahagian lain pagar masih elok?", answer: "Kerana sambungan ialah tempat beban tertumpu. Panel rata pagar menanggung sangat sedikit; sambungan engsel dan penjuru menanggung kesemuanya, dan menerima lenturan setiap kali pagar berayun. Tambah kakisan yang menembusi sambungan tanpa primer, tidak menghairankan kimpalan gagal sebelum bahagian lain." },
      { question: "Kimpalan sama retak semula selepas pembaikan sebelum ini. Apa yang salah?", answer: "Biasanya salah satu daripada dua perkara: pembaikan itu tampalan permukaan yang tidak pernah menembusi logam kukuh, atau punca asasnya tidak pernah ditangani. Jika sambungan menanggung lebih daripada ia direka, mengimpal semula secara serupa hanya menetapkan semula jam. Itulah sebabnya kami melihat pengukuhan, bukan hanya kimpalan." },
      { question: "Adakah kimpalan retak berbahaya?", answer: "Ia bergantung sepenuhnya pada apa yang sambungan itu pegang. Kimpalan retak pada panel hiasan bersifat kosmetik. Kimpalan retak pada tiang susur tangan, pendakap gril balkoni atau rangka awning ialah kebimbangan keselamatan sebenar, kerana sambungan itulah yang menghalang sesuatu daripada jatuh. Apa-apa di atas kepala atau berkaitan kejatuhan patut diperiksa segera." },
      { question: "Adakah kimpalan yang dibaiki akan kelihatan?", answer: "Kimpalan pembaikan dikemas dan disalut, jadi pada pagar atau susur tangan bercat ia biasanya tidak ketara setelah siap. Pada keluli kosong atau tahan karat, pembaikan lebih mungkin kelihatan kerana haba dan logam kimpalan mengubah permukaan. Kami akan menetapkan jangkaan sebelum mula." },
    ],
  },
};
