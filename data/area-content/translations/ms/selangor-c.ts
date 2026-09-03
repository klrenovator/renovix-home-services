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
  "selangor/bandar-sunway": {
    ...shared("Bandar Sunway"),
    name: "Bandar Sunway",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bandar Sunway, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bandar Sunway, Selangor — kondominium, pangsapuri servis dan kedai-pejabat sekitar Sunway Pyramid. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bandar Sunway",
    summary:
      "Perbandaran bersepadu Subang Jaya — kluster Sunway Pyramid dan Universiti Monash, kediaman tinggi dan kawasan komersial yang sibuk.",
    intro: [
      "Bandar Sunway ialah antara kawasan perbandaran paling terkenal di Lembah Klang, sebahagian daripada perbandaran Subang Jaya dan terkenal dengan Sunway Pyramid, Sunway Lagoon serta Universiti Monash Malaysia. Ia dibangunkan sebagai perbandaran bersepadu — beli-belah, pendidikan, kesihatan dan kediaman dalam satu kawasan — dan stok kediamannya mencerminkan itu: deretan padat kondominium dan pangsapuri servis sekitar teras komersial, dengan kedai-pejabat dan sebahagian kecil rumah landed di pinggir.",
      "Kehidupan bertingkat tinggi serta ramai pelajar dan ekspatriat membentuk kerja di sini. Pemilik kondominium meminta kerja kemasan, naik taraf dapur dan bilik air, kalis air balkoni, serta penyelenggaraan handyman; tuan rumah dan ejen meminta pengubahsuaian yang pantas dan tahan lasak antara penyewa. Kami meliputi Bandar Sunway dengan kerja elektrik, paip, jubin, siling dan cat, semuanya dirancang mengikut peraturan strata kawasan ini.",
    ],
    serviceNotes: [
      "Kerja kemasan penuh dan naik taraf unit di stok bertingkat tinggi.",
      "Kalis air bilik air, balkoni dan tepi tingkap di unit kondominium.",
      "Penambahan soket, lampu dan litar penghawa dingin di blok lama.",
      "Pembaikan kebocoran dan pembaharuan kelengkapan di unit tinggi.",
      "Pembaikan pantas untuk haus sewaan — pintu, kunci dan kelengkapan.",
      "Cat praktikal antara penyewa dan cat penuh untuk unit penghuni sendiri.",
    ],
    propertyTypes: [
      { label: "Kondominium (1990-an–2000-an)", note: "Menara pertama yang kini memasuki tahun pembaharuan kalis air dan servis." },
      { label: "Pangsapuri servis (2000-an–2010-an)", note: "Unit tinggi baharu dengan kerja kemasan dan pembaikan kecacatan." },
      { label: "Unit sewa pelajar", note: "Pangsapuri berhampiran kampus yang diperbaharui antara penyewa." },
      { label: "Kedai-pejabat dan unit runcit", note: "Pengubahsuaian komersial mengikut waktu perniagaan." },
      { label: "Rumah landed di pinggir", note: "Stok teres yang lebih kecil dengan naik taraf bilik air dan dapur." },
    ],
    problems: [
      { title: "Resapan balkoni dan bilik air", description: "Kalis air asal menara 90-an gagal dan lembap merebak ke unit bawah." },
      { title: "Haus dan lusuh sewaan", description: "Pertukaran penyewa yang kerap merosakkan pintu, kunci, pili dan kemasan dinding." },
      { title: "Soket tidak mencukupi", description: "Unit lama didawai untuk lebih sedikit peralatan daripada keperluan hari ini." },
      { title: "Jubin berongga di kawasan basah", description: "Pergerakan haba dan pelekat yang gagal menyebabkan jubin berongga dan retak." },
      { title: "Kulat di bilik tertutup", description: "Unit tinggi tanpa pengudaraan silang memerangkap kelembapan dan kulat tumbuh di sudut." },
    ],
    context: [
      "Hampir semua kerja kediaman di sini adalah kerja strata, jadi peraturan pengurusan menentukan rangkanya: deposit, waktu kerja, tempahan lif dan laluan sisa. Kami sediakan maklumat skop untuk kelulusan anda.",
      "Kawasan ini sibuk setiap hari, dan musim peperiksaan menambah trafik. Lawatan dan penghantaran dirancang pada waktu lengang.",
      "Sebahagian besar stok disewakan, jadi banyak kerja kami berpandukan masa antara penyewa: kemasan tahan lasak dan sebut harga yang membezakan pembaikan penting daripada naik taraf kosmetik.",
    ],
    faqs: [
      { question: "Anda bekerja di kondominium lama sekitar Bandar Sunway?", answer: "Ya. Kalis air bilik air dan balkoni, paip, elektrik dan renovasi unit di menara 90-an dan 2000-an adalah kerja biasa kami di sini." },
      { question: "Boleh anda perbaharui unit sewa pelajar antara penyewa?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum penyewa baharu masuk." },
      { question: "Kerja renovasi di sini perlukan kelulusan pengurusan?", answer: "Kebanyakan bangunan strata memerlukan notis, deposit dan waktu kerja tertentu. Kami sediakan maklumat skop untuk permohonan anda." },
      { question: "Anda terima kerja penyelenggaraan kecil di Bandar Sunway?", answer: "Ya — pembaikan pintu dan kunci, penggantian pili, pemasangan rak dan kerja kecil lain, dan boleh digabungkan dalam satu lawatan." },
    ],
  },
  "selangor/bandar-utama": {
    ...shared("Bandar Utama"),
    name: "Bandar Utama",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bandar Utama, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bandar Utama, Petaling Jaya — rumah landed berpagar era 90-an, kondominium dan kedai-pejabat sekitar 1 Utama. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bandar Utama",
    summary:
      "Perbandaran Petaling Jaya era 1990-an yang dibina sekitar 1 Utama — estet teres dan rumah berkembar berpagar, kondominium dan teras komersial yang kukuh.",
    intro: [
      "Bandar Utama ialah perbandaran Petaling Jaya yang berkembang sekitar pusat beli-belah 1 Utama, dibangunkan sejak 1990-an merentasi seksyen BU bernombor menjadi salah satu perbandaran paling lengkap di koridor Damansara. Perumahannya kebanyakannya landed — teres berpagar dan berkawal, rumah berkembar dan sebahagian banglo — dengan lingkaran kondominium dan pangsapuri servis, stesen MRT dan teras komersial padat di tengah.",
      "Stok landed asal kini berusia dua puluh lima hingga tiga puluh lima tahun, tepat di kitaran modenisasi utama pertamanya: bilik air baharu, dapur moden, pendawaian semula dan paip baharu. Unit tinggi yang baharu meminta kerja kemasan dan pembaikan kecacatan. Kami meliputi Bandar Utama dengan renovasi penuh, elektrik, paip, kalis air, jubin dan cat, mengikut peraturan komuniti berpagar dan jadual pengurusan.",
    ],
    serviceNotes: [
      "Modenisasi seluruh rumah untuk teres dan rumah berkembar era 1990-an.",
      "Pendawaian semula dan penambahan soket untuk penghawa dingin serta dapur moden.",
      "Penggantian paip tersembunyi dan pembaharuan bilik air sebelum kebocoran merebak.",
      "Kalis air bilik air, balkoni dan bumbung di rumah landed mahupun unit tinggi.",
      "Kerja jubin semula kawasan basah dan penggantian jubin retak semasa naik taraf bilik air dan dapur.",
      "Cat penuh fasad dan dalaman, dengan rawatan kulat pada dinding terlindung.",
    ],
    propertyTypes: [
      { label: "Rumah teres berpagar (1990-an–2000-an)", note: "Stok teras yang memasuki kitaran modenisasi penuh pertama." },
      { label: "Rumah berkembar dan banglo", note: "Lot lebih besar dengan sambungan dan naik taraf penuh." },
      { label: "Kondominium dan pangsapuri servis", note: "Unit tinggi sekitar teras komersial dengan kerja kemasan." },
      { label: "Kedai-pejabat dan unit runcit", note: "Pengubahsuaian komersial sekitar kluster 1 Utama." },
      { label: "Pembangunan baharu era MRT", note: "Projek terkini berhampiran stesen dengan kerja kemasan dan kecacatan." },
    ],
    problems: [
      { title: "Bilik air asal di hujung usia", description: "Kalis air 90-an gagal mengikut jadual, kelihatan sebagai sudut lembap dan jubin longgar." },
      { title: "Litar terputus akibat beban moden", description: "Rumah 90-an kini menanggung beban yang tidak dirancang asalnya." },
      { title: "Kebocoran paip tersembunyi", description: "Paip lama merembes di sebalik dinding berjubin sebelum puncanya kelihatan." },
      { title: "Bumbung dan siling rumah landed", description: "Kemasan bumbung dan siling plaster asal menunjukkan usia selepas berpuluh musim hujan." },
      { title: "Jubin berongga dan grout reput", description: "Pergerakan haba meninggalkan jubin berongga dan grout hancur di kawasan basah." },
    ],
    context: [
      "Kebanyakan stok landed berada dalam kawasan berpagar dan berkawal, jadi akses mengikut peraturan komuniti: pas pelawat, waktu kerja dan keperluan kontraktor. Kami mendaftar melalui saluran yang betul.",
      "Jalan kawasan ini bersambung ke LDP dan sesak pada waktu puncak. Penghantaran dan lawatan dirancang pada waktu luar puncak.",
      "Dengan stesen MRT dan teras komersial yang dekat, banyak rumah kini disewakan, dan kerja antara penyewa adalah sebahagian tetap kerja kami.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah asal era 90-an di Bandar Utama?", answer: "Ya. Bilik air baharu, dapur moden, pendawaian semula dan modenisasi penuh stok landed adalah kerja biasa kami di sini." },
      { question: "Boleh anda bekerja di dalam kawasan berpagar dan berkawal?", answer: "Boleh. Kami mengikut peraturan pendaftaran dan waktu kerja setiap komuniti, dan menghantar bahan melalui saluran yang betul." },
      { question: "Anda buat kerja kemasan kondominium berhampiran stesen MRT?", answer: "Ya. Kerja kemasan, lantai, dapur dan bilik air mengikut peraturan pengurusan bangunan." },
      { question: "Boleh anda perbaharui rumah sewa antara penyewa?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum penyewa baharu masuk." },
    ],
  },
  "selangor/mutiara-damansara": {
    ...shared("Mutiara Damansara"),
    name: "Mutiara Damansara",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Mutiara Damansara, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Mutiara Damansara, Petaling Jaya — kondominium dan pejabat sekitar The Curve dan IPC. Kerja kemasan, kalis air, elektrik. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Mutiara Damansara",
    summary:
      "Nod kompak di koridor Damansara — The Curve dan IPC di tengah, dikelilingi kondominium, pejabat dan kediaman servis.",
    intro: [
      "Mutiara Damansara ialah kawasan perbandaran padat di Petaling Jaya, dibina sekitar kluster komersial The Curve, IPC Shopping Centre serta pejabat dan hotel di sekelilingnya. Stok kediaman di sini hampir keseluruhannya bertingkat tinggi — kondominium dan kediaman servis — dengan tingkat komersial di bawah, memberikan rentak hidup-bekerja yang jelas bandar.",
      "Campuran itu menentukan kerja yang kami sebut harga: kerja kemasan kondominium, kalis air bilik air dan balkoni, naik taraf elektrik, serta aliran tetap pengubahsuaian komersial di tingkat runcit dan pejabat. Kami meliputi Mutiara Damansara dengan paip, jubin, siling, cat dan renovasi penuh, dirancang mengikut peraturan strata dan waktu perniagaan.",
    ],
    serviceNotes: [
      "Kerja kemasan unit dan renovasi penuh di kediaman bertingkat tinggi.",
      "Kalis air bilik air, balkoni dan tepi tingkap sebelum kerja kemasan.",
      "Lampu, soket dan litar penghawa dingin untuk rumah serta unit komersial.",
      "Kerja siling dan partition untuk pengubahsuaian pejabat dan kediaman.",
      "Pembaikan kebocoran dan pembaharuan kelengkapan di unit dan tingkat komersial.",
      "Cat dalaman untuk unit dan ruang runcit, dengan rawatan kulat.",
    ],
    propertyTypes: [
      { label: "Kondominium (2000-an)", note: "Menara kediaman asal di teras komersial, kini dalam tahun pembaharuan kalis air dan servis." },
      { label: "Kediaman servis (2000-an–2010-an)", note: "Kediaman baharu sekitar kluster runcit, dengan kerja kemasan dan pembaikan kecacatan." },
      { label: "Tingkat pejabat", note: "Pengubahsuaian siling, partition, elektrik dan lantai untuk penyewa baharu." },
      { label: "Unit runcit", note: "Pengubahsuaian kedai sekitar kluster beli-belah mengikut waktu perniagaan." },
      { label: "Pembangunan bercampur", note: "Tingkat komersial di bawah kediaman, dengan dua set peraturan jadual." },
    ],
    problems: [
      { title: "Resapan balkoni dan bilik air", description: "Kalis air asal menara pertama gagal dan lembap kelihatan pada siling bawah." },
      { title: "Pusingan penyewa pejabat", description: "Pertukaran penyewa yang kerap mengekalkan permintaan untuk siling, partition dan lantai." },
      { title: "Soket tidak mencukupi", description: "Unit lama didawai untuk lebih sedikit peralatan dan penghuni bergantung pada sambungan tambahan." },
      { title: "Haus di unit kompak", description: "Pintu, engsel dan kemasan cepat rosak di unit servis yang kecil." },
      { title: "Kulat di bilik tertutup", description: "Unit tinggi tanpa pengudaraan silang memerangkap kelembapan." },
    ],
    context: [
      "Segala-galanya di sini adalah strata atau disewakan, jadi peraturan dan jadual lebih penting daripada tempat lain: notis renovasi, waktu kerja, tempahan lif dan waktu perniagaan. Kami uruskan kertas kerja dan susun kerja di sekelilingnya.",
      "Teras komersial bermakna trafik siang hari yang padat dan parkir penuh. Penghantaran dan lawatan dirancang pada waktu lengang.",
      "Pengubahsuaian pejabat dan runcit adalah sebahagian besar kerja tempatan. Kami selaraskan siling, partition, elektrik dan lantai dalam satu program supaya unit boleh dibuka pada tarikh yang dijanjikan.",
    ],
    faqs: [
      { question: "Anda buat pengubahsuaian pejabat di Mutiara Damansara?", answer: "Ya. Siling, partition, lampu, soket dan lantai untuk penyewa pejabat, dijadualkan mengikut peraturan bangunan dan tarikh masuk anda." },
      { question: "Boleh anda baiki resapan balkoni di kondominium saya?", answer: "Boleh. Kami jejaki punca air masuk, perbaharui kalis air dan jubin semula jika perlu, mengikut keperluan pengurusan." },
      { question: "Kerja renovasi di sini perlukan kelulusan pengurusan?", answer: "Kebanyakan bangunan memerlukan notis, deposit dan waktu kerja tertentu. Kami sediakan maklumat skop untuk permohonan anda." },
      { question: "Boleh anda ubah suai unit runcit mengikut waktu perniagaan?", answer: "Boleh. Kerja bising dirancang di luar waktu perniagaan dan kerja lain disusun supaya kedai boleh terus beroperasi." },
    ],
  },
  "selangor/damansara-perdana": {
    ...shared("Damansara Perdana"),
    name: "Damansara Perdana",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Damansara Perdana, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Damansara Perdana, Petaling Jaya — kondominium lereng bukit, pangsapuri servis dan kedai-pejabat. Kerja kemasan, kalis air. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Damansara Perdana",
    summary:
      "Perbandaran lereng bukit di atas koridor Damansara — kediaman tinggi, pejabat dan runcit di tanah cerun antara Bandar Utama dan Kepong.",
    intro: [
      "Damansara Perdana ialah perbandaran lereng bukit di Petaling Jaya, dibangunkan sejak awal 2000-an di tanah tinggi antara Bandar Utama dan koridor Kepong–Sungai Buloh. Stoknya hampir keseluruhannya bertingkat tinggi: kondominium, pangsapuri servis, pejabat dan kedai yang tersusun di sepanjang bukit, dengan blok runcit dan komersial di terasnya.",
      "Dua perkara menentukan kerja di sini. Pertama, perumahannya bertingkat tinggi dan dikawal strata, jadi kerja kemasan, kalis air, elektrik dan pembaikan kecacatan lebih menonjol daripada renovasi struktur. Kedua, kedudukan lereng bukit menambah pertimbangan saliran dan pengurusan air untuk unit aras bawah. Kami meliputi Damansara Perdana dengan paip, jubin, siling, cat dan renovasi penuh, mengikut peraturan setiap bangunan.",
    ],
    serviceNotes: [
      "Kerja kemasan unit dan renovasi penuh di kondominium serta pangsapuri servis.",
      "Kalis air bilik air, balkoni dan aras bawah dengan saliran lereng dalam perhatian.",
      "Lampu, soket dan litar peralatan untuk unit kediaman dan komersial.",
      "Pembaikan kebocoran dan pembaharuan kelengkapan sebelum lembap merosakkan kemasan.",
      "Kerja siling dan partition untuk pejabat serta kediaman.",
      "Cat dalaman dan rawatan kulat di unit dengan pengudaraan terhad.",
    ],
    propertyTypes: [
      { label: "Kondominium (2000-an–2010-an)", note: "Teras kediaman yang kini memasuki tahun pembaharuan kalis air dan servis." },
      { label: "Pangsapuri servis", note: "Unit kompak dengan kerja kemasan yang cekap dan pembaikan kecacatan." },
      { label: "Pejabat dan unit kedai-pejabat", note: "Pengubahsuaian komersial dalam satu program kerja." },
      { label: "Unit aras bawah dan podium", note: "Unit bersebelahan tanah yang memerlukan perhatian saliran dan air." },
      { label: "Projek tinggi baharu", note: "Menara terkini dengan kerja kemasan dan kecacatan." },
    ],
    problems: [
      { title: "Resapan bilik air dan balkoni", description: "Kalis air asal menara pertama gagal dan lembap merebak ke unit bawah." },
      { title: "Masalah saliran lereng", description: "Unit aras bawah menerima air dari cerun, dan saliran lemah kelihatan sebagai lembap berterusan." },
      { title: "Soket tidak mencukupi", description: "Unit lama didawai untuk lebih sedikit peralatan daripada keperluan hari ini." },
      { title: "Haus di unit servis kompak", description: "Pintu, engsel dan kemasan cepat rosak dan memerlukan penyelenggaraan tetap." },
      { title: "Kulat di bilik tertutup", description: "Unit tanpa pengudaraan silang memerangkap kelembapan dan kulat tumbuh di sudut." },
    ],
    context: [
      "Susun atur lereng bukit bermakna akses dan parkir berbeza antara bangunan — sesetengah blok mempunyai tanjakan sempit dan ruang muat terhad. Kami rancang penghantaran dan pembuangan sisa mengikut kekangan setiap bangunan.",
      "Unit aras bawah wajar menjalani pemeriksaan saliran dalam mana-mana penilaian renovasi: di mana air cerun terlibat, pembaikan berada di puncanya, bukan di permukaan dalaman.",
      "Kawasan ini mencampurkan rumah, pejabat dan runcit dalam blok yang sama, jadi jadual menghormati peraturan strata dan waktu perniagaan.",
    ],
    faqs: [
      { question: "Anda merenovasi unit di kondominium lereng bukit di sini?", answer: "Ya. Kerja kemasan, kalis air bilik air dan balkoni, elektrik serta paip adalah kerja biasa kami di menara kawasan ini." },
      { question: "Unit aras bawah kami sentiasa lembap. Boleh dibaiki?", answer: "Kelembapan di aras bawah selalunya berpunca daripada saliran atau kalis air. Kami jejaki punca air dan selesaikan dari sumber sebelum menyiapkan bahagian dalaman." },
      { question: "Anda buat pengubahsuaian pejabat di Damansara Perdana?", answer: "Ya. Siling, partition, lampu, soket dan lantai untuk penyewa pejabat, dijadualkan mengikut peraturan bangunan dan tarikh masuk anda." },
      { question: "Kerja renovasi di sini perlukan kelulusan pengurusan?", answer: "Kebanyakan bangunan strata memerlukan notis, deposit dan waktu kerja tertentu. Kami sediakan maklumat skop untuk permohonan anda." },
    ],
  },
  "selangor/ara-damansara": {
    ...shared("Ara Damansara"),
    name: "Ara Damansara",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Ara Damansara, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Ara Damansara, Petaling Jaya — rumah teres era 2000-an, kondominium dan kedai-pejabat berhampiran LRT. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Ara Damansara",
    summary:
      "Perbandaran PJ era 2000-an bersebelahan LRT — estet teres, blok kondominium dan kluster komersial Oasis antara Subang dan koridor Damansara.",
    intro: [
      "Ara Damansara ialah perbandaran Petaling Jaya yang dibangunkan sepanjang 2000-an, terletak di antara Subang dan koridor Damansara dengan stesen LRT di tengah dan kawasan komersial Oasis sebagai hab tempatan. Perumahannya mencampurkan landed dan tinggi: estet teres awal daripada fasa pertama, deretan kondominium yang luas, dan blok kedai-pejabat sekitar teras komersial.",
      "Stok landed kini memasuki kitaran naik taraf pertama — bilik air, pendawaian dan dapur asal tiba masanya untuk diganti — manakala kondominium sibuk dengan kerja kemasan, pembaikan kecacatan dan kalis air. Kami meliputi Ara Damansara dengan renovasi penuh, elektrik, paip, jubin dan cat, mengikut peraturan setiap presint.",
    ],
    serviceNotes: [
      "Modenisasi dapur dan bilik air untuk rumah teres fasa pertama.",
      "Pendawaian semula litar asal di teres fasa pertama dan penambahan soket untuk peralatan hari ini.",
      "Penggantian paip tersembunyi yang lama dan pembaharuan kelengkapan di fasa landed pertama.",
      "Kalis air bilik air dan balkoni di rumah landed mahupun unit tinggi.",
      "Kerja jubin semula kawasan basah dan penggantian jubin retak semasa naik taraf bilik air.",
      "Cat penuh dan rawatan kulat untuk rumah serta unit kedai-pejabat.",
    ],
    propertyTypes: [
      { label: "Rumah teres (2000-an)", note: "Fasa landed pertama yang memasuki kitaran modenisasi penuh pertama." },
      { label: "Kondominium (2000-an–2010-an)", note: "Lingkaran tinggi dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Kedai-pejabat sekitar Oasis", note: "Unit komersial untuk kafe, klinik dan perkhidmatan." },
      { label: "Pangsapuri bersebelahan LRT", note: "Blok berorientasikan transit dengan kemasan tahan lasak." },
      { label: "Pembangunan infill baharu", note: "Projek terkini dengan lebih banyak kerja kemasan dan kecacatan berbanding renovasi struktural." },
    ],
    problems: [
      { title: "Bilik air asal tiba masa diganti", description: "Kalis air, kelengkapan dan jubin rumah landed fasa pertama gagal bersama." },
      { title: "Litar terputus akibat beban moden", description: "Rumah era 2000-an menanggung lebih banyak peralatan daripada reka bentuk asal." },
      { title: "Resapan balkoni dan bilik air di kondominium", description: "Membran asal menara pertama gagal dan lembap kelihatan di bawah." },
      { title: "Jubin berongga dan grout reput", description: "Pergerakan haba meninggalkan jubin berongga dan grout hancur di kawasan basah." },
      { title: "Haus sewaan berhampiran LRT", description: "Pintu, kunci dan kemasan cepat rosak di unit sewa sekitar transit." },
    ],
    context: [
      "Presint kawasan ini mempunyai peraturan berbeza: seksyen landed berpagar mendaftar kontraktor melalui saluran sendiri, manakala kondominium mengikut prosedur strata biasa. Kami uruskan kedua-duanya.",
      "LRT dan rangkaian jalan menjadikan kawasan ini mudah diakses tetapi sibuk pada waktu puncak, jadi lawatan dan penghantaran dirancang pada waktu lengang.",
      "Sebahagian besar stok tinggi disewakan, jadi kerja antara penyewa adalah sebahagian tetap kerja kami — kemasan tahan lasak dan jadual ketat.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah teres awal 2000-an di Ara Damansara?", answer: "Ya. Bilik air baharu, dapur moden, pendawaian semula dan modenisasi penuh fasa landed pertama adalah kerja biasa kami di sini." },
      { question: "Anda bekerja di kondominium berhampiran LRT?", answer: "Ya. Kerja kemasan, lantai, kalis air dan pembaikan kecacatan mengikut peraturan pengurusan bangunan." },
      { question: "Boleh anda perbaharui unit sewa antara penyewa?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum penyewa baharu masuk." },
      { question: "Kerja renovasi di sini perlukan kelulusan?", answer: "Seksyen landed berpagar dan bangunan strata masing-masing mempunyai peraturan pendaftaran dan waktu kerja. Kami sediakan maklumat skop untuk permohonan anda." },
    ],
  },
  "selangor/bandar-sri-damansara": {
    ...shared("Bandar Sri Damansara"),
    name: "Bandar Sri Damansara",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bandar Sri Damansara, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bandar Sri Damansara, Selangor — rumah teres era 90-an, pangsapuri dan kondominium berhampiran MRT. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bandar Sri Damansara",
    summary:
      "Perbandaran besar era 1990-an antara Kepong dan Sungai Buloh — estet teres, blok pangsapuri dan kondominium baharu yang kini dilalui MRT Laluan Putrajaya.",
    intro: [
      "Bandar Sri Damansara ialah perbandaran besar di kawasan Sungai Buloh, Selangor, dibangunkan sepanjang 1990-an dan 2000-an di sebelah koridor Kepong. Stoknya merangkumi estet teres awal dan pangsapuri rendah, blok kondominium kemudian, serta deretan komersial — jalur kediaman yang luas dan hampir lengkap sendiri, yang kini dilalui MRT Laluan Putrajaya.",
      "Rumah fasa pertama kini berada pada usia yang memerlukan bilik air, pendawaian dan paip asal diganti, manakala blok baharu membawa kerja kemasan dan pembaikan kecacatan. Kami meliputi Bandar Sri Damansara dengan renovasi penuh, elektrik, paip, kalis air, jubin dan cat, mengikut peraturan setiap presint.",
    ],
    serviceNotes: [
      "Modenisasi dapur dan bilik air untuk teres serta pangsapuri era 1990-an.",
      "Pendawaian semula dan penambahan soket untuk peralatan moden.",
      "Pembaikan paip tersembunyi dan pembaharuan kelengkapan sanitari.",
      "Kalis air bilik air dan balkoni sebelum kerja jubin dan cat.",
      "Kerja jubin semula kawasan basah dan penggantian jubin retak di unit yang lebih lama.",
      "Cat penuh dan rawatan kulat untuk fasad serta dinding terlindung.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1990-an)", note: "Stok landed asal yang memasuki kitaran modenisasi penuh pertama." },
      { label: "Pangsapuri rendah (1990-an)", note: "Blok fasa pertama dengan riser, bilik air dan pendawaian asal." },
      { label: "Kondominium (2000-an–2010-an)", note: "Menara baharu dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Kedai-pejabat dan deretan komersial", note: "Unit bawah tanah untuk runcit dan perkhidmatan." },
      { label: "Pembangunan era MRT", note: "Projek terkini di sekitar stesen, dengan kerja kemasan dan kecacatan sebagai kebiasaan." },
    ],
    problems: [
      { title: "Bilik air asal di hujung usia", description: "Kalis air 90-an gagal, kelihatan sebagai sudut lembap dan kesan pada siling bawah." },
      { title: "Kebocoran paip tersembunyi", description: "Paip lama merembes di sebalik dinding sebelum puncanya kelihatan." },
      { title: "Litar terputus akibat beban moden", description: "Rumah fasa pertama didawai untuk beban yang jauh lebih ringan." },
      { title: "Jubin berongga dan grout reput", description: "Pergerakan haba meninggalkan jubin berongga dan grout hancur di kawasan basah." },
      { title: "Kulat pada dinding terlindung", description: "Deretan rapat dan fasad terlindung kekal lembap tanpa rawatan permukaan." },
    ],
    context: [
      "Kawasan ini merangkumi beberapa era dan presint, jadi penilaian adalah segalanya: teres 90-an dan kondominium 2010-an memerlukan skop berbeza walaupun permintaannya 'sama'. Kami sebut harga mengikut unit sebenar.",
      "Stesen MRT menjadikan kawasan ini lebih terhubung, dan jalan utama lebih sibuk pada waktu puncak. Penghantaran serta lawatan dirancang pada waktu lengang.",
      "Banyak pangsapuri dan teres kini disewakan, jadi kerja antara penyewa adalah sebahagian tetap kerja kami — kemasan tahan lasak dan jadual ketat.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah asal era 90-an di Bandar Sri Damansara?", answer: "Ya. Bilik air baharu, dapur moden, pendawaian semula dan modenisasi penuh rumah fasa pertama adalah kerja biasa kami di sini." },
      { question: "Anda bekerja di blok pangsapuri lama?", answer: "Ya. Paip, kalis air, elektrik dan bilik air di blok fasa pertama adalah antara kerja paling kerap kami di kawasan ini." },
      { question: "Boleh anda perbaharui unit sewa antara penyewa?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum penyewa baharu masuk." },
      { question: "Kerja kondominium di sini perlukan kelulusan pengurusan?", answer: "Kebanyakan bangunan strata memerlukan notis, deposit dan waktu kerja tertentu. Kami sediakan maklumat skop untuk permohonan anda." },
    ],
  },
  "selangor/bangi": {
    ...shared("Bangi"),
    name: "Bangi",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bangi, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bangi, Selangor — rumah Bandar Baru Bangi era 70-an, sewaan sekitar UKM dan perbandaran baharu. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bangi",
    summary:
      "Bandar universiti Selangor — estet Bandar Baru Bangi sejak 1970-an sekitar UKM, pekan Bangi lama dan jalur perbandaran baharu di koridor Kajang.",
    intro: [
      "Bangi ialah daerah matang di kawasan Hulu Langat, Selangor, terkenal sebagai lokasi Universiti Kebangsaan Malaysia dan Bandar Baru Bangi, perbandaran terancang yang dibangunkan sekitar kampus sejak 1970-an. Di sekeliling teras itu terletak pekan Bangi lama, kawasan penyelidikan dan institusi, serta lingkaran perbandaran baharu di koridor Kajang–Putrajaya.",
      "Perumahannya merangkumi beberapa generasi, dan kerja kami mengikutinya. Rumah asal Bandar Baru Bangi — teres, rumah berkembar dan pangsapuri era 1970-an–90-an — kini dalam tahun pembaharuan, dengan pendawaian, paip dan bilik air tiba masanya diganti; pasaran sewa pelajar sekitar UKM mengekalkan permintaan untuk pengubahsuaian pantas dan tahan lasak; manakala perbandaran baharu membawa kerja kemasan dan pembaikan kecacatan. Kami meliputi Bangi dengan renovasi penuh, elektrik, paip, kalis air, jubin, cat dan handyman.",
    ],
    serviceNotes: [
      "Modenisasi seluruh rumah untuk stok era 1970-an–90-an di Bandar Baru Bangi.",
      "Pendawaian semula dan penambahan soket di rumah dengan litar lama.",
      "Pembaikan paip tersembunyi dan pembaharuan bilik air di stok lama.",
      "Kalis air bilik air, bumbung dan balkoni sebelum kerja kemasan.",
      "Pembaikan pantas untuk sewaan pelajar — pintu, kunci dan kelengkapan.",
      "Cat praktikal antara penyewa dan cat penuh untuk rumah penghuni sendiri.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1970-an–90-an)", note: "Stok asal Bandar Baru Bangi yang memasuki kitaran naik taraf kedua atau ketiga." },
      { label: "Rumah berkembar dan banglo", note: "Lot fasa pertama yang lebih besar dengan sambungan dan modenisasi penuh." },
      { label: "Pangsapuri berhampiran UKM", note: "Penginapan pelajar dan staf yang diperbaharui antara penyewa." },
      { label: "Rumah perbandaran baharu (2000-an–2010-an)", note: "Fasa terkini dengan kerja kemasan, kecacatan dan muat-naik." },
      { label: "Rumah kedai dan unit komersial", note: "Pengubahsuaian runcit di pusat perbandaran mengikut waktu perniagaan." },
    ],
    problems: [
      { title: "Pendawaian asal melepasi usia", description: "Litar era 1970-an–80-an tidak mampu menanggung beban moden." },
      { title: "Paip tersembunyi yang menua", description: "Paip awal berkarat dan merembes di sebalik dinding." },
      { title: "Kalis air bilik air gagal", description: "Membran asal tidak lagi menahan air dan lembap merebak ke bilik sebelah." },
      { title: "Haus daripada sewaan pelajar", description: "Pintu, kunci, pili dan kemasan cepat rosak di unit sewa sekitar UKM." },
      { title: "Kulat pada dinding terlindung", description: "Pokok matang di estet lama mengekalkan kelembapan fasad." },
    ],
    context: [
      "Bangi meliputi kawasan luas, daripada pekan lama hingga perbandaran koridor baharu, jadi jadual dirancang mengikut perjalanan antara tapak. Kami kumpulkan lawatan secara munasabah dan sahkan masa dengan anda.",
      "Kalendar universiti membentuk pasaran sewa: tetingkap pengubahsuaian berkumpul sekitar cuti semester. Kami jadualkan kerja mengikut tarikh tersebut.",
      "Rumah lama di daerah ini sering menyimpan kerja naik taraf separa daripada berpuluh tahun — pendawaian bercampur dan tampalan lama. Kami nilai dahulu dan sebut harga mengikut keadaan sebenar.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah asal Bandar Baru Bangi?", answer: "Ya. Pendawaian semula, paip, bilik air baharu dan modenisasi penuh stok 70-an–90-an adalah kerja biasa kami di sini." },
      { question: "Boleh anda perbaharui sewaan pelajar berhampiran UKM?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum kemasukan pelajar." },
      { question: "Anda bekerja di perbandaran baharu sekitar Bangi?", answer: "Ya. Kerja kemasan, pembaikan kecacatan, muat-naik dan naik taraf di fasa baharu semuanya dalam skop biasa kami." },
      { question: "Anda terima kerja handyman kecil di Bangi?", answer: "Ya — pembaikan pintu dan kunci, penggantian pili, pemasangan rak dan kerja kecil lain, dan boleh digabungkan dalam satu lawatan." },
    ],
  },
  "selangor/serdang": {
    ...shared("Serdang"),
    name: "Serdang",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Serdang, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Serdang, Selangor — rumah landed sekitar UPM, kondominium koridor MRT dan deretan kedai berhampiran Seri Kembangan. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Serdang",
    summary:
      "Daerah universiti Selangor — UPM, perbandaran Serdang dan lingkaran kondominium baharu koridor MRT di sebelah Seri Kembangan.",
    intro: [
      "Serdang ialah daerah Selangor yang telah lama wujud di antara Puchong, Balakong dan Seri Kembangan, berteraskan Universiti Putra Malaysia serta kawasan penyelidikan dan ekspo di sekelilingnya. Perumahannya mencerminkan sejarah itu: estet teres dan pangsapuri lama dari 1970-an–90-an sekitar penempatan asal, perbandaran baharu, dan — sejak ketibaan laluan MRT — lingkaran kediaman tinggi yang semakin berkembang di koridor.",
      "Campuran itu bermakna kerja berbeza mengikut blok. Rumah landed lama memerlukan pendawaian semula, paip dan bilik air baharu; sewaan pelajar dan staf memerlukan pengubahsuaian pantas dan tahan lasak; dan kondominium baharu membawa kerja kemasan, pembaikan kecacatan dan kalis air. Kami meliputi Serdang dengan renovasi penuh, elektrik, paip, jubin, cat dan handyman.",
    ],
    serviceNotes: [
      "Modenisasi seluruh rumah untuk teres dan pangsapuri era 1970-an–90-an.",
      "Pendawaian semula dan penambahan soket di rumah dengan litar yang direka untuk beban lebih ringan.",
      "Pembaikan paip tersembunyi dan pembaharuan bilik air sebelum kebocoran merebak.",
      "Kalis air bilik air, balkoni dan bumbung merentasi stok lama serta baharu.",
      "Pembaikan pantas untuk haus sewaan — pintu, kunci dan kelengkapan sekitar kampus.",
      "Cat antara penyewa dan cat penuh untuk rumah lama yang lusuh cuaca.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1970-an–90-an)", note: "Stok landed asal yang kini dalam tahun pembaharuan." },
      { label: "Pangsapuri berhampiran UPM", note: "Penginapan pelajar dan staf sekitar kampus, diperbaharui antara penyewa." },
      { label: "Kondominium koridor MRT", note: "Blok tinggi baharu dengan kerja kemasan, lantai dan pembaikan kecacatan." },
      { label: "Rumah kedai dan deretan komersial", note: "Pengubahsuaian runcit dan perniagaan makanan di pusat perbandaran." },
      { label: "Rumah perbandaran baharu", note: "Fasa landed terkini dengan kerja kemasan dan kecacatan." },
    ],
    problems: [
      { title: "Pendawaian asal melepasi usia", description: "Litar era 1970-an–80-an tidak mampu menanggung beban hari ini." },
      { title: "Paip tersembunyi yang menua", description: "Paip awal berkarat dan merembes di sebalik dinding." },
      { title: "Kalis air bilik air gagal", description: "Membran asal tidak lagi menahan air dan lembap merebak ke bilik sebelah." },
      { title: "Haus daripada sewaan pelajar", description: "Pintu, kunci, pili dan kemasan cepat rosak di unit sewa sekitar UPM." },
      { title: "Pembaikan kecacatan di blok baharu", description: "Retak, jubin berongga dan kecacatan kemasan di projek terkini." },
    ],
    context: [
      "Perumahan Serdang merangkumi lima dekad, jadi penilaian menentukan segalanya: permintaan yang sama bermakna skop berbeza di teres 1970-an berbanding kondominium baharu koridor MRT. Kami sebut harga mengikut unit sebenar.",
      "Kalendar universiti membentuk pasaran sewa, dengan tetingkap pengubahsuaian berkumpul sekitar cuti semester. Kami jadualkan kerja mengikut tarikh tersebut.",
      "Jalan utama di daerah ini paling sibuk pada waktu puncak pagi dan petang, jadi lawatan serta penghantaran dirancang pada waktu lengang.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah teres lama di Serdang?", answer: "Ya. Pendawaian semula, paip, bilik air baharu dan modenisasi penuh rumah 70-an–90-an adalah kerja biasa kami di sini." },
      { question: "Boleh anda perbaharui sewaan pelajar berhampiran UPM?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum kemasukan pelajar." },
      { question: "Anda bekerja di kondominium baharu sepanjang laluan MRT?", answer: "Ya. Kerja kemasan, lantai, kalis air dan pembaikan kecacatan mengikut peraturan pengurusan bangunan." },
      { question: "Anda terima kerja handyman kecil di Serdang?", answer: "Ya — pembaikan pintu dan kunci, penggantian pili, pemasangan rak dan kerja kecil lain, dan boleh digabungkan dalam satu lawatan." },
    ],
  },
  "selangor/balakong": {
    ...shared("Balakong"),
    name: "Balakong",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Balakong, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Balakong, Selangor — teres perbandaran Cheras South era 90-an, estet berhampiran industri dan kondominium baharu. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Balakong",
    summary:
      "Pekan koridor Cheras South — teres perbandaran era 1990-an, estet perindustrian dan lapisan tinggi baharu di sepanjang rangkaian lebuh raya SILK.",
    intro: [
      "Balakong terletak di hujung selatan koridor Cheras dalam daerah Hulu Langat, di mana jalur perbandaran sepanjang Jalan Balakong dan lebuh raya SILK bertemu zon perindustrian yang besar. Ia berkembang pada 1990-an dan 2000-an sebagai kawasan kediaman yang mampu milik dan terhubung baik — rumah teres dua tingkat mendominasi, bersama pangsapuri, deretan kedai dan, kebelakangan ini, blok kondominium berhampiran pusat komersial.",
      "Perumahannya kini berusia satu generasi, dan permintaan mengikut usia itu dengan tepat: bilik air baharu, dapur moden, pendawaian semula, paip dan kerja bumbung. Kami meliputi Balakong dengan renovasi penuh, elektrik, paip, kalis air, jubin dan cat — dengan sebut harga mengikut unit sebenar dan akses dirancang mengikut trafik koridor.",
    ],
    serviceNotes: [
      "Modenisasi dapur dan bilik air untuk stok teres era 1990-an.",
      "Pendawaian semula litar asal dan naik taraf papan agihan di teres era 1990-an.",
      "Pembaikan paip tersembunyi dan pembaharuan kelengkapan sebelum kebocoran merebak.",
      "Kalis air bilik air, bumbung dan balkoni di seluruh rumah kawasan ini.",
      "Kerja jubin semula bilik air dan dapur di teres serta walk-up yang lebih lama.",
      "Cat penuh dan rawatan kulat untuk teres serta rumah berhampiran zon industri.",
    ],
    propertyTypes: [
      { label: "Teres dua tingkat (1990-an–2000-an)", note: "Stok landed utama yang memasuki kitaran modenisasi penuh pertama." },
      { label: "Pangsapuri dan walk-up", note: "Blok pangsapuri awal dengan riser, bilik air dan pendawaian asal." },
      { label: "Kondominium berhampiran pusat komersial", note: "Blok tinggi baharu sekitar pusat komersial, dengan kerja kemasan dan pembaikan kecacatan." },
      { label: "Rumah kedai dan deretan komersial", note: "Unit runcit dan bengkel untuk penyewa baharu." },
      { label: "Rumah bersebelahan industri", note: "Jalan kediaman berhampiran zon industri yang memerlukan kemasan lebih tahan." },
    ],
    problems: [
      { title: "Bilik air asal di hujung usia", description: "Kalis air 90-an gagal, kelihatan sebagai sudut lembap dan kesan pada siling bawah." },
      { title: "Kebocoran paip tersembunyi", description: "Paip lama merembes di sebalik dinding sebelum puncanya kelihatan." },
      { title: "Litar terputus akibat beban moden", description: "Rumah 90-an menanggung lebih banyak peralatan daripada reka bentuk asal." },
      { title: "Bumbung dan siling haus", description: "Kemasan bumbung dan siling plaster asal menunjukkan usia selepas berpuluh musim hujan." },
      { title: "Debu dari koridor", description: "Rumah berhampiran jalan sibuk dan zon industri memerlukan kemasan lebih tahan dan cat lebih kerap." },
    ],
    context: [
      "Jalan Balakong antara yang paling sibuk di koridor Cheras South, terutamanya pada waktu puncak, jadi lawatan dan penghantaran dirancang pada waktu lengang dan disahkan lebih awal.",
      "Zon industri terletak berhampiran jalan kediaman, jadi kemasan tahan lasak lebih berbaloi di sini: cat boleh basuh dan lantai tahan haus. Kami syorkan sewajarnya semasa sebut harga.",
      "Banyak stok kini disewakan, jadi kerja antara penyewa adalah sebahagian tetap kerja kami — jadual ketat dan sebut harga yang membezakan pembaikan penting daripada naik taraf kosmetik.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah teres 90-an di Balakong?", answer: "Ya. Bilik air baharu, dapur moden, pendawaian semula, paip dan kerja bumbung adalah kerja biasa kami di sini." },
      { question: "Anda bekerja di pangsapuri dan walk-up lama?", answer: "Ya. Paip, kalis air, elektrik dan bilik air di blok fasa pertama adalah antara kerja paling kerap kami di kawasan ini." },
      { question: "Boleh anda perbaharui rumah sewa antara penyewa?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum penyewa baharu masuk." },
      { question: "Kerja kondominium di sini perlukan kelulusan pengurusan?", answer: "Kebanyakan bangunan strata memerlukan notis, deposit dan waktu kerja tertentu. Kami sediakan maklumat skop untuk permohonan anda." },
    ],
  },
  "selangor/bandar-baru-klang": {
    ...shared("Bandar Baru Klang"),
    name: "Bandar Baru Klang",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Bandar Baru Klang, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Bandar Baru Klang, Selangor — estet teres sejak 80-an, pangsapuri dan kondominium berhampiran Bukit Raja. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Bandar Baru Klang",
    summary:
      "Perbandaran terancang di utara Klang — estet landed sejak 1980-an, blok pangsapuri dan kondominium baharu antara pekan Klang dan kawasan industri Bukit Raja.",
    intro: [
      "Bandar Baru Klang ialah perbandaran terancang utama di sebelah utara Klang, dibangunkan sejak 1980-an antara bandar diraja dan kawasan industri Bukit Raja. Ia berkembang sebagai daerah kediaman yang hampir lengkap sendiri — estet teres dan rumah berkembar, blok pangsapuri, deretan kedai dan, dalam fasa kemudian, kondominium di sekitar jalan utama dan pusat komersial.",
      "Fasa terawal kini berusia tiga puluh hingga empat puluh tahun dan dalam tahun pembaharuan, jadi kerja yang kami sebut harga sepadan dengan kematangan itu: pendawaian semula, paip, bilik air baharu dan kerja bumbung pada stok landed, serta paip dan kalis air di pangsapuri lama. Kami meliputi Bandar Baru Klang dengan renovasi penuh, elektrik, paip, kalis air, jubin dan cat.",
    ],
    serviceNotes: [
      "Modenisasi dapur dan bilik air untuk stok landed era 1980-an–90-an.",
      "Pendawaian semula dan naik taraf papan agihan di rumah lama.",
      "Pembaikan paip tersembunyi dan pembaharuan kelengkapan sanitari sebelum kebocoran merebak.",
      "Kalis air bilik air, bumbung dan balkoni di rumah generasi pertama kawasan ini.",
      "Kerja jubin semula kawasan basah di stok landed 80-an–90-an dan pangsapuri generasi pertama.",
      "Cat penuh dan rawatan kulat untuk fasad lusuh merentasi stok lama kawasan ini.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1980-an–90-an)", note: "Fasa landed terawal yang kini dalam tahun pembaharuan." },
      { label: "Rumah berkembar (1980-an–2000-an)", note: "Lot awal yang lebih besar dengan sambungan dan modenisasi penuh." },
      { label: "Pangsapuri (1980-an–90-an)", note: "Blok generasi pertama dengan riser, bilik air dan pendawaian asal." },
      { label: "Kondominium (2000-an–2010-an)", note: "Tambahan bertingkat tinggi yang lebih baharu, dengan kerja kemasan dan pembaikan kecacatan." },
      { label: "Rumah kedai dan deretan komersial", note: "Unit runcit dan perkhidmatan untuk penyewa baharu." },
    ],
    problems: [
      { title: "Bilik air asal di hujung usia", description: "Kalis air 80-an gagal, kelihatan sebagai sudut lembap dan kesan pada siling bawah." },
      { title: "Paip tersembunyi yang menua", description: "Paip awal berkarat dan merembes di sebalik dinding." },
      { title: "Litar terputus akibat beban moden", description: "Rumah era 80-an–90-an menanggung lebih banyak peralatan daripada reka bentuk asal." },
      { title: "Bumbung dan siling haus", description: "Kemasan bumbung dan siling plaster asal menunjukkan usia selepas berpuluh musim hujan." },
      { title: "Kulat pada dinding terlindung", description: "Deretan rapat dan fasad terlindung kekal lembap tanpa rawatan yang betul." },
    ],
    context: [
      "Fasa pertama dibina sebelum model presint moden, jadi jalan di seksyen lama lebih sempit dan parkir terhad. Penghantaran dan pembuangan sisa dirancang mengikut akses dan disahkan lebih awal.",
      "Kawasan industri Bukit Raja terletak berhampiran jalan kediaman, jadi kemasan yang menahan debu dan kotoran berbaloi di kawasan ini — kami syorkan sewajarnya semasa sebut harga.",
      "Banyak rumah lama telah disambung selama bertahun-tahun, jadi penilaian memberi tumpuan kepada kesan kerja terdahulu terhadap skop hari ini: apa yang boleh dikekalkan, apa yang perlu dibetulkan, dan apa yang perlu dibuat semula.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah teres 80-an di Bandar Baru Klang?", answer: "Ya. Pendawaian semula, paip, bilik air baharu dan modenisasi penuh fasa landed pertama adalah kerja biasa kami di sini." },
      { question: "Anda bekerja di blok pangsapuri lama?", answer: "Ya. Paip, kalis air, elektrik dan bilik air di blok generasi pertama adalah antara kerja paling kerap kami di kawasan ini." },
      { question: "Boleh anda baiki kebocoran yang hanya kelihatan di siling jiran?", answer: "Boleh — itu senario biasa di blok lama. Kami jejaki punca sepanjang laluan paip dan papak lantai sebelum membuka permukaan." },
      { question: "Kerja kondominium di sini perlukan kelulusan pengurusan?", answer: "Kebanyakan bangunan strata memerlukan notis, deposit dan waktu kerja tertentu. Kami sediakan maklumat skop untuk permohonan anda." },
    ],
  },
  "selangor/sepang": {
    ...shared("Sepang"),
    name: "Sepang",
    title: "Renovix Home Services | Renovasi & Pembaikan Rumah di Sepang & Salak Tinggi, Selangor",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Sepang dan Salak Tinggi, Selangor — rumah perbandaran koridor lapangan terbang, estet landed dan pangsapuri. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Sepang & Salak Tinggi",
    summary:
      "Daerah selatan Selangor — KLIA dan Litar Sepang, koridor perbandaran Salak Tinggi serta jalur estet landed dan pangsapuri di sekitar pekan-pekannya.",
    intro: [
      "Sepang ialah daerah paling selatan di Selangor, terkenal di peringkat antarabangsa kerana Lapangan Terbang Antarabangsa Kuala Lumpur dan Litar Antarabangsa Sepang, serta terkenal kepada penduduk tempatan kerana pekan-pekannya — Salak Tinggi, ibu kota daerah, bersama pekan Sepang, Sungai Pelek dan kawasan kampung serta estet di sekelilingnya. Pembangunan mengikuti lapangan terbang: Salak Tinggi berkembang sebagai perbandaran terancang di koridor lapangan terbang, dan estet landed serta pangsapuri baharu tersebar di sepanjang jalan utama daerah.",
      "Kerja di sini mengikut corak itu. Rumah perbandaran era 1990-an–2010-an memerlukan naik taraf bilik air, pendawaian semula dan pembaikan kecacatan; rumah kampung dan estet lama memerlukan kesedaran struktur, paip dan kerja bumbung; dan unit sewa yang menempatkan pekerja lapangan terbang serta logistik memerlukan pengubahsuaian yang pantas dan tahan lasak. Kami meliputi Sepang dan Salak Tinggi dengan renovasi penuh, elektrik, paip, kalis air, jubin, cat dan handyman.",
    ],
    serviceNotes: [
      "Modenisasi seluruh rumah untuk perbandaran dan estet di seluruh daerah.",
      "Pendawaian semula litar lama dan penambahan soket di rumah dengan beban ringan asal.",
      "Pembaikan paip lama dan pembaharuan bilik air sebelum kebocoran merebak.",
      "Kalis air bilik air, bumbung dan dinding dengan musim hujan daerah dalam perhatian.",
      "Pembaikan pantas untuk rumah sewa — pintu, kunci dan kelengkapan.",
      "Cat antara penyewa dan cat penuh untuk bahagian luar yang lusuh cuaca.",
    ],
    propertyTypes: [
      { label: "Rumah teres perbandaran (1990-an–2010-an)", note: "Estet Salak Tinggi dan koridor yang memasuki kitaran naik taraf pertama." },
      { label: "Pangsapuri dan walk-up", note: "Blok generasi pertama dengan bilik air dan riser yang menua." },
      { label: "Rumah kampung dan estet", note: "Rumah individu lama dengan kesedaran struktur, paip dan bumbung dahulu." },
      { label: "Sewaan untuk pekerja lapangan terbang", note: "Pengubahsuaian tahan lasak dan pantas antara penyewa." },
      { label: "Rumah kedai dan unit komersial", note: "Pengubahsuaian runcit dan perkhidmatan di pusat pekan daerah." },
    ],
    problems: [
      { title: "Bilik air asal tiba masa diganti", description: "Rumah perbandaran 90-an berada pada usia kalis air, kelengkapan dan jubin gagal bersama." },
      { title: "Pendawaian lama di rumah tua", description: "Rumah estet dan kampung sering membawa litar yang ditambah sedikit demi sedikit selama berpuluh tahun." },
      { title: "Bumbung dan dinding haus akibat hujan lebat", description: "Musim hujan daerah menguji bumbung dan dinding terdedah, kelihatan sebagai kesan, resapan dan cat mengelupas." },
      { title: "Kebocoran paip tersembunyi", description: "Paip lama merembes di sebalik dinding sebelum puncanya kelihatan." },
      { title: "Haus sewaan daripada pekerja syif", description: "Pintu, kunci, pili dan kemasan cepat rosak di rumah sewa sekitar kawasan lapangan terbang." },
    ],
    context: [
      "Pekan-pekan Sepang tersebar di sepanjang koridor lapangan terbang dan pantai, jadi kami kumpulkan lawatan secara munasabah dan sahkan masa dengan anda — perjalanan antara tapak adalah sebahagian perancangan.",
      "Ekonomi lapangan terbang membentuk pasaran sewa: pusingan penyewa mengikut pertukaran kerja, dan tuan rumah mahu unit diperbaharui dengan pantas. Kami jadualkan kerja dengan ketat dan gunakan kemasan yang tahan lasak.",
      "Rumah individu lama di sini sering membawa kerja tambahan daripada berpuluh tahun — pendawaian bercampur, bumbung ditampal dan bilik disambung. Kami nilai dahulu dan sebut harga mengikut keadaan sebenar.",
    ],
    faqs: [
      { question: "Anda merenovasi rumah perbandaran di Salak Tinggi?", answer: "Ya. Naik taraf bilik air, pendawaian semula, paip dan modenisasi penuh perbandaran koridor adalah kerja biasa kami di daerah ini." },
      { question: "Boleh anda bekerja di rumah kampung dan estet lama?", answer: "Boleh. Kami nilai struktur, bumbung dan servis dahulu, kemudian beri sebut harga yang jujur termasuk kerja yang diperlukan kerana usia rumah." },
      { question: "Boleh anda perbaharui rumah sewa antara penyewa?", answer: "Boleh. Beritahu tarikh kosong dan kami akan rancang kerja supaya siap sebelum penyewa baharu masuk." },
      { question: "Anda terima kerja handyman kecil di Sepang?", answer: "Ya — pembaikan pintu dan kunci, penggantian pili, pemasangan rak dan kerja kecil lain, dan boleh digabungkan dalam satu lawatan." },
    ],
  },
};
