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
  "selangor/petaling-jaya": {
    ...shared("Petaling Jaya"),
    name: "Petaling Jaya",
    title: "Renovasi & Pembaikan Rumah di Petaling Jaya | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Petaling Jaya — renovasi, elektrik, kerja paip, kalis air, cat dan siling. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Petaling Jaya",
    summary:
      "Bandar terancang pertama Selangor — rumah Seksyen era 1950-an, rumah teres kawasan SS dan menara baharu di koridor Damansara.",
    intro: [
      "Petaling Jaya mempunyai rumah dari hampir setiap dekad sejak 1950-an. Rumah Seksyen yang lama selalunya sudah melalui beberapa pusingan naik taraf, dan kerja kami sering bermula dengan menyemak apa yang telah dibuat sebelum ini.",
      "Kami menyediakan renovasi, kerja elektrik, paip, kalis air, cat dan siling di seluruh PJ, daripada rumah Seksyen hingga kondominium di koridor Damansara.",
    ],
    serviceNotes: [
      "Naik taraf rumah lama secara menyeluruh atau berperingkat.",
      "Menggantikan pendawaian dan papan agihan yang sudah uzur.",
      "Membaiki paip lama dan kebocoran tersembunyi.",
      "Kalis air bilik air dan bumbung sebelum kerja kemasan.",
      "Cat dalaman dan luaran termasuk rawatan permukaan.",
      "Membaiki siling retak dan memasang siling baharu.",
    ],
    propertyTypes: [
      { label: "Rumah Seksyen asal (1950-an–60-an)", note: "Struktur kukuh dengan perkhidmatan yang perlu diganti." },
      { label: "Rumah teres kawasan SS (1970-an–90-an)", note: "Kemasan dan paip yang memasuki kitaran kedua." },
      { label: "Kondominium koridor Damansara", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Banglo dan rumah berkembar", note: "Projek renovasi yang lebih besar dan berperingkat." },
      { label: "Lot kedai dan pejabat", note: "Kerja naik taraf untuk penyewa perniagaan." },
    ],
    problems: [
      { title: "Lapisan renovasi lama yang mula gagal", description: "Kerja daripada beberapa kontraktor berbeza yang tidak diselaraskan." },
      { title: "Pendawaian dan papan suis asal", description: "Sistem lama tanpa perlindungan bocor arus." },
      { title: "Resapan bilik air", description: "Kalis air yang gagal dan meresap ke ruang bersebelahan." },
      { title: "Kayu terjejas anai-anai dan kelembapan", description: "Kusen dan struktur kayu yang mula reput." },
      { title: "Bumbung dan siling rosak ribut", description: "Kebocoran yang muncul selepas hujan lebat berterusan." },
    ],
    context: [
      "Penilaian di PJ bermula dengan sejarah rumah. Rumah Seksyen yang telah ditambah dan diubah beberapa kali memerlukan pemeriksaan lebih teliti sebelum sebut harga.",
      "Seksyen lama berada di bawah litupan pokok matang, jadi dinding terlindung kekal lembap dan memerlukan rawatan sebelum dicat.",
      "Untuk kerja strata di koridor Damansara, peraturan setiap bangunan menetapkan waktu kerja dan penggunaan lif.",
    ],
    faqs: [
      { question: "Boleh anda merenovasi rumah 1950-an di Seksyen lama?", answer: "Boleh. Kami menyemak struktur, paip dan elektrik dahulu, kemudian mencadangkan urutan kerja yang selamat." },
      { question: "Rumah SS kami pernah direnovasi. Boleh padankan lantai sedia ada?", answer: "Kami akan menunjukkan pilihan padanan yang paling hampir sebelum kerja bermula." },
      { question: "Anda mengendalikan naik taraf kondominium di Damansara?", answer: "Ya, mengikut peraturan renovasi dan waktu kerja bangunan berkenaan." },
      { question: "Boleh anda menyelaras semua kerja untuk renovasi rumah penuh?", answer: "Boleh. Satu jadual, satu sebut harga dan satu pihak yang bertanggungjawab." },
    ],
  },
  "selangor/subang-jaya": {
    ...shared("Subang Jaya"),
    name: "Subang Jaya",
    title: "Renovasi & Pembaikan Rumah di Subang Jaya | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Subang Jaya — kerja paip, elektrik, renovasi, jubin, cat dan kalis air. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Subang Jaya",
    summary:
      "Bandar matang SS12–SS19 — jalan rumah teres era 70-an dan 80-an, deretan kedai SS15 dan kelompok kondominium yang telah lama berdiri.",
    intro: [
      "Rumah teres di SS12 hingga SS19 kini berusia empat hingga lima dekad. Kalis air bilik air, paip berkarat dan pendawaian lama adalah kerja yang paling kerap diminta di sini.",
      "Kami menyediakan kerja paip, elektrik, renovasi, jubin, cat dan kalis air di seluruh Subang Jaya, termasuk lot kedai SS15.",
    ],
    serviceNotes: [
      "Membaiki dan mengganti paip lama yang berkarat.",
      "Menaik taraf pendawaian dan papan agihan.",
      "Naik taraf rumah teres secara menyeluruh atau berperingkat.",
      "Menggantikan jubin bilik air dan dapur.",
      "Cat dalaman dan luaran selepas pembaikan permukaan.",
      "Kalis air bilik air sebelum kerja jubin baharu.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1970-an–80-an, SS12–SS19)", note: "Perkhidmatan asal yang memerlukan penggantian." },
      { label: "Lot kedai SS15", note: "Kerja naik taraf pantas antara penyewa." },
      { label: "Kondominium yang telah lama berdiri", note: "Bilik air dan kemasan yang perlu dibaharui." },
      { label: "Rumah berkembar", note: "Projek renovasi berskala lebih besar." },
      { label: "Unit sewa pelajar", note: "Kemasan tahan lasak dan pembaikan pantas." },
    ],
    problems: [
      { title: "Kegagalan kalis air bilik air", description: "Membran asal yang sudah tamat jangka hayat." },
      { title: "Paip berkarat", description: "Paip bekalan lama yang menyempit dan mula bocor." },
      { title: "Pendawaian lama yang terbeban", description: "Litar yang kerap trip dengan peralatan moden." },
      { title: "Bumbung dan siling yang menua", description: "Kebocoran musim hujan pada rumah dua tingkat." },
      { title: "Kesan haus ruang komersial", description: "Lot kedai yang kerap bertukar penyewa." },
    ],
    context: [
      "Jalan di Subang Jaya sesak pada waktu sekolah, jadi lawatan dan penghantaran bahan dijadualkan di luar waktu tersebut.",
      "Kerana rumah di sini berusia serupa, satu jalan biasanya menghadapi kitaran pembaikan yang sama.",
      "Untuk kondominium di koridor LRT, peraturan pengurusan menetapkan waktu kerja dan penggunaan lif.",
    ],
    faqs: [
      { question: "Boleh anda membina semula bilik air 1970-an di SS14?", answer: "Boleh, termasuk kerja paip, kalis air, jubin dan kelengkapan baharu." },
      { question: "Anda menaik taraf lot kedai SS15 untuk kafe?", answer: "Ya, termasuk kerja elektrik, paip dan kemasan mengikut keperluan operasi." },
      { question: "Adakah menukar paip seluruh rumah sangat mengganggu?", answer: "Ia melibatkan kerja pecah, tetapi boleh dibuat mengikut bahagian supaya rumah kekal boleh didiami." },
      { question: "Boleh anda bekerja mengikut peraturan renovasi kondominium kami?", answer: "Boleh. Beritahu kami peraturannya, dan kami akan merancang jadual mengikutnya." },
    ],
  },
  "selangor/shah-alam": {
    ...shared("Shah Alam"),
    name: "Shah Alam",
    title: "Renovasi & Pembaikan Rumah di Shah Alam | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Shah Alam — kalis air, cat, renovasi, elektrik, kerja paip dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Shah Alam",
    summary:
      "Ibu negeri bandar taman terancang — seksyen bernombor yang luas, landskap lebar dan koridor moden di sekitar i-City.",
    intro: [
      "Shah Alam direka sebagai bandar taman, jadi lot yang luas dan litupan pokok yang tebal menjadikan pengurusan kelembapan tema utama dalam banyak kerja di sini.",
      "Kami menyediakan kerja kalis air, cat, renovasi, elektrik, paip dan servis handyman di seluruh seksyen Shah Alam.",
    ],
    serviceNotes: [
      "Kalis air bumbung, balkoni dan kawasan basah.",
      "Cat luaran termasuk pembersihan dan rawatan kulat.",
      "Naik taraf rumah seksyen lama secara berperingkat.",
      "Menaik taraf pendawaian di rumah yang lebih lama.",
      "Membaiki kebocoran paip dan saluran tersumbat.",
      "Pembaikan kecil dan pemasangan di sekitar rumah.",
    ],
    propertyTypes: [
      { label: "Rumah teres dan banglo seksyen (1960-an–90-an)", note: "Perkhidmatan asal yang memerlukan naik taraf." },
      { label: "Rumah berkembar", note: "Kerja renovasi dengan kawasan luar yang lebih luas." },
      { label: "Kondominium koridor i-City", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Rumah teres seksyen baharu", note: "Kerja kemasan dan naik taraf tersasar." },
      { label: "Lot kedai dan komersial", note: "Kerja naik taraf untuk penyewa perniagaan." },
    ],
    problems: [
      { title: "Kulat pada fasad terlindung", description: "Dinding di bawah litupan pokok yang jarang kering." },
      { title: "Bumbung dan longkang tersumbat", description: "Daun dan sisa yang menyebabkan air melimpah." },
      { title: "Masalah saliran di sekeliling rumah", description: "Air bertakung di tapak dinding selepas hujan." },
      { title: "Perkhidmatan menua di seksyen lama", description: "Paip dan pendawaian yang perlu dinilai semula." },
      { title: "Resapan balkoni dan kawasan basah", description: "Kalis air yang gagal di kawasan terdedah." },
    ],
    context: [
      "Seksyen di Shah Alam tenang dan kediaman, jadi kawalan bunyi dan waktu kerja diberi perhatian.",
      "Litupan pokok bermakna kerja luaran bukan sekadar mengecat: pembersihan dan rawatan kulat dilakukan dahulu.",
      "Menara strata di koridor i-City mengikut peraturan pengurusan biasa, manakala rumah landed lebih fleksibel.",
    ],
    faqs: [
      { question: "Dinding terlindung rumah kami berkulat. Cukupkah dicat semula?", answer: "Tidak. Kulat perlu dirawat dan puncanya dikurangkan dahulu, barulah cat anti-kulat digunakan." },
      { question: "Anda membersihkan longkang bumbung sebagai sebahagian pembaikan?", answer: "Ya, kerana longkang tersumbat adalah antara punca paling biasa kebocoran bumbung." },
      { question: "Boleh anda menambah ruang pada rumah di seksyen lama?", answer: "Boleh. Kami akan menerangkan skop kerja dan urutan yang munasabah." },
      { question: "Anda berkhidmat di kondominium i-City?", answer: "Ya, mengikut waktu kerja dan peraturan yang ditetapkan pengurusan." },
    ],
  },
  "selangor/puchong": {
    ...shared("Puchong"),
    name: "Puchong",
    title: "Renovasi & Pembaikan Rumah di Puchong | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Puchong — renovasi, kerja paip, kalis air, lantai, elektrik dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Puchong",
    summary:
      "Bekas kawasan perlombongan yang kini menjadi koridor pesat — pekan lama Puchong, taman Bandar Puteri dan barisan kediaman bertingkat tinggi.",
    intro: [
      "Rumah di Puchong berkembang dalam beberapa gelombang: pekan lama, taman perumahan 1990-an hingga 2000-an, dan menara kediaman yang lebih baharu. Setiap kumpulan menghadapi masalah yang berbeza.",
      "Kami menyediakan renovasi, kerja paip, kalis air, lantai, elektrik dan servis handyman di seluruh Puchong.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres dan dapur secara menyeluruh.",
      "Membaiki kebocoran paip dan saluran tersumbat.",
      "Kalis air bilik air yang membran asalnya sudah gagal.",
      "Memasang lantai baharu di unit dan rumah yang dinaik taraf.",
      "Menambah soket dan menaik taraf litar lama.",
      "Pembaikan kecil dan pemasangan dalam unit.",
    ],
    propertyTypes: [
      { label: "Rumah teres dan kedai pekan lama", note: "Bangunan lama yang memerlukan naik taraf perkhidmatan." },
      { label: "Rumah teres taman (1990-an–2000-an)", note: "Kalis air dan paip yang memasuki kitaran pertama." },
      { label: "Pangsapuri dan kondominium", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Taman berpagar", note: "Kerja mengikut pendaftaran dan waktu kerja komuniti." },
      { label: "Lot kedai komersial", note: "Kerja naik taraf untuk penyewa perniagaan." },
    ],
    problems: [
      { title: "Resapan bilik air di rumah 90-an", description: "Membran asal yang kini mula gagal." },
      { title: "Kecacatan kemasan menara baharu", description: "Kerja pemaju yang perlu dibaiki selepas serahan." },
      { title: "Saluran dapur tersumbat", description: "Minyak dan sisa makanan yang terkumpul dalam paip." },
      { title: "Kerosakan fasad akibat cuaca", description: "Cat luar yang pudar dan berkulat." },
      { title: "Masalah tekanan air di bangunan tinggi", description: "Kelengkapan tersumbat atau isu bekalan dalam unit." },
    ],
    context: [
      "Koridor utama Puchong sesak awal, jadi lawatan dan penghantaran bahan dirancang di luar waktu puncak.",
      "Rumah di sini menua mengikut kumpulan usia, jadi kerja yang sama biasanya berulang di seluruh taman.",
      "Taman berpagar dan menara strata masing-masing mempunyai peraturan pendaftaran dan waktu kerja tersendiri.",
    ],
    faqs: [
      { question: "Boleh anda merenovasi dapur dan ruang makan sekali gus?", answer: "Boleh. Kerja paip dan elektrik diselaraskan dahulu sebelum kabinet dan kemasan dipasang." },
      { question: "Anda membaiki kecacatan unit baharu di Puchong?", answer: "Ya, termasuk kerja jubin, cat, paip dan elektrik selepas serahan pemaju." },
      { question: "Bilik air kami bocor ke unit bawah. Anda kendalikan pembaikan kedua-dua unit?", answer: "Kami boleh, dengan kebenaran kedua-dua pemilik, kerana punca dan kesan berada di unit berbeza." },
      { question: "Boleh anda memasang pemanas air dan pancuran hujan?", answer: "Boleh, termasuk menyemak tekanan air dan litar elektrik terlebih dahulu." },
    ],
  },
  "selangor/klang": {
    ...shared("Klang"),
    name: "Klang",
    title: "Renovasi & Pembaikan Rumah di Klang | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Klang — kalis air, elektrik, kerja paip, cat, renovasi dan siling. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Klang",
    summary:
      "Bandar diraja Selangor — rumah kedai sebelum perang dan rumah teres pekan lama, dengan perumahan baharu di Bukit Tinggi dan Bandar Botanic.",
    intro: [
      "Klang menggabungkan bangunan warisan di pekan lama dengan taman perumahan yang lebih baharu di selatan. Kelembapan dan cuaca yang lembap sepanjang tahun menjadi cabaran utama bagi kedua-duanya.",
      "Kami menyediakan kerja kalis air, elektrik, paip, cat, renovasi dan siling di seluruh Klang.",
    ],
    serviceNotes: [
      "Kalis air bumbung, dinding dan kawasan basah.",
      "Menggantikan pendawaian dan papan fius lama.",
      "Membaiki paip berkarat dan saluran tersumbat.",
      "Cat dalaman dan luaran untuk iklim lembap.",
      "Naik taraf rumah lama secara berperingkat.",
      "Membaiki siling yang rosak akibat air.",
    ],
    propertyTypes: [
      { label: "Rumah kedai sebelum perang", note: "Struktur warisan yang memerlukan pendekatan berhati-hati." },
      { label: "Rumah teres pekan lama (1950-an–70-an)", note: "Perkhidmatan asal yang sudah uzur." },
      { label: "Perumahan Bukit Tinggi dan Bandar Botanic", note: "Rumah lebih baharu dalam kitaran naik taraf pertama." },
      { label: "Rumah teres dan flat kawasan Pandamaran", note: "Kerja pembaikan bilik air dan paip." },
      { label: "Lot komersial dan gudang", note: "Kerja pembaikan dan naik taraf ruang perniagaan." },
    ],
    problems: [
      { title: "Kereputan bumbung dan kayu warisan", description: "Struktur lama yang terjejas kelembapan berpanjangan." },
      { title: "Kelembapan pada dinding bata tebal", description: "Dinding lama yang menyerap dan menyimpan air." },
      { title: "Kesedaran banjir berhampiran sungai", description: "Pemilik mengutamakan kemasan yang tahan air." },
      { title: "Pendawaian dan papan fius lama", description: "Sistem yang tidak lagi memenuhi keperluan semasa." },
      { title: "Paip dan saluran berkarat", description: "Kebocoran berulang pada rangkaian paip lama." },
    ],
    context: [
      "Bangunan warisan Klang memerlukan urutan yang betul: struktur, bumbung dan saliran dahulu, kemudian perkhidmatan, dan akhirnya kemasan.",
      "Iklim di sini lembap sepanjang tahun, jadi cat luaran dan plaster memerlukan penyediaan permukaan yang lebih teliti.",
      "Kawasan baharu seperti Bukit Tinggi dan Bandar Botanic mengikut kitaran biasa: kalis air, bilik air, kemudian kemasan.",
    ],
    faqs: [
      { question: "Boleh anda membaiki rumah kedai lama tanpa menghilangkan cirinya?", answer: "Boleh. Kami mengekalkan elemen asal yang masih baik dan menggantikan hanya bahagian yang sudah rosak." },
      { question: "Rumah kami di pekan lama dimasuki air ketika hujan lebat. Apa yang patut diubah?", answer: "Kami akan menyemak saliran, aras lantai dan kemasan, kemudian mencadangkan langkah yang praktikal." },
      { question: "Adakah menukar pendawaian rumah lama mengganggu?", answer: "Ia melibatkan kerja pada dinding dan siling, tetapi boleh dijadualkan mengikut bahagian." },
      { question: "Anda bekerja di Bukit Tinggi dan Bandar Botanic?", answer: "Ya, termasuk kerja bilik air, kalis air, elektrik dan cat." },
    ],
  },
  "selangor/selayang": {
    ...shared("Selayang"),
    name: "Selayang",
    title: "Renovasi & Pembaikan Rumah di Selayang | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Selayang — kerja paip, kalis air, cat, elektrik, handyman dan renovasi. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Selayang",
    summary:
      "Bandar matang di utara Selangor — flat dan rumah teres lama di sekitar pekan, dengan pangsapuri baharu di pinggir yang lebih menghijau.",
    intro: [
      "Selayang mempunyai banyak flat walk-up dan rumah teres era 1970-an hingga 90-an. Kebocoran paip riser dan kalis air bilik air adalah antara aduan yang paling kerap.",
      "Kami menyediakan kerja paip, kalis air, cat, elektrik, handyman dan renovasi di seluruh Selayang.",
    ],
    serviceNotes: [
      "Mengesan dan membaiki kebocoran paip di blok lama.",
      "Memasang semula kalis air bilik air.",
      "Cat dalaman dan luaran untuk rumah dan unit.",
      "Menaik taraf litar yang kerap terbeban.",
      "Pembaikan kecil dan pemasangan dalam unit.",
      "Naik taraf rumah teres secara berperingkat.",
    ],
    propertyTypes: [
      { label: "Flat walk-up (1980-an–90-an)", note: "Paip riser dan bilik air yang menua." },
      { label: "Rumah teres (1970-an–90-an)", note: "Perkhidmatan asal yang memasuki kitaran penggantian." },
      { label: "Pangsapuri baharu di lereng bukit", note: "Kerja kemasan dan pembaikan kecacatan." },
      { label: "Rumah kedai pekan lama", note: "Kerja naik taraf ruang perniagaan." },
      { label: "Rumah berkembar", note: "Projek renovasi berskala lebih besar." },
    ],
    problems: [
      { title: "Kebocoran paip riser di flat lama", description: "Kebocoran yang menjejaskan beberapa unit pada talian sama." },
      { title: "Kegagalan kalis air bilik air", description: "Air meresap ke unit bawah atau bilik bersebelahan." },
      { title: "Ruang dalaman yang sudah uzur", description: "Kemasan lama yang memerlukan pembaharuan." },
      { title: "Litar yang terbeban", description: "Pendawaian lama dengan peralatan moden." },
      { title: "Fasad yang terjejas cuaca", description: "Cat luar yang pudar dan berkulat." },
    ],
    context: [
      "Kerja di flat memerlukan penyelarasan: penutupan bekalan air menjejaskan jiran, dan pembuangan sisa perlu dirancang.",
      "Jalan di pekan lama menjadi sempit pada waktu pasar, jadi lawatan dijadualkan di luar waktu tersebut.",
      "Bagi pemilik rumah teres, corak biasa ialah pembaharuan berperingkat: kebocoran dan elektrik dahulu, kemudian bilik air.",
    ],
    faqs: [
      { question: "Boleh anda mengesan kebocoran tanpa memecah dinding secara membuta?", answer: "Boleh. Kami mengesan lokasi dahulu supaya bukaan sekecil mungkin." },
      { question: "Anda membina semula bilik air di flat lama?", answer: "Ya, termasuk kalis air, paip dan jubin dengan penyelarasan bekalan air." },
      { question: "Boleh anda mengecat luaran rumah teres kami?", answer: "Boleh, termasuk pembersihan permukaan dan pembaikan retak sebelum mengecat." },
      { question: "Anda menerima kerja pembaikan kecil?", answer: "Ya. Beberapa kerja kecil boleh digabungkan dalam satu lawatan." },
    ],
  },
  "selangor/gombak": {
    ...shared("Gombak"),
    name: "Gombak",
    title: "Renovasi & Pembaikan Rumah di Gombak | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Gombak — elektrik, kerja paip, renovasi, cat, handyman dan siling. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Gombak",
    summary:
      "Koridor lama di timur laut bandar — rumah bergaya kampung, jalan rumah teres lama dan kawasan sewa berhampiran universiti.",
    intro: [
      "Gombak mempunyai campuran rumah kampung, rumah teres lama dan unit sewa pelajar. Kelembapan tinggi dan struktur kayu yang menua menjadikan pemeriksaan awal sangat penting.",
      "Kami menyediakan kerja elektrik, paip, renovasi, cat, handyman dan siling di seluruh Gombak.",
    ],
    serviceNotes: [
      "Menggantikan pendawaian lama di rumah kampung dan teres.",
      "Membaiki paip lama dan masalah tekanan air.",
      "Naik taraf rumah lama mengikut keutamaan.",
      "Cat dalaman dan luaran termasuk rawatan kulat.",
      "Pembaikan kecil untuk tuan rumah dan penghuni.",
      "Membaiki siling yang bernoda atau melendut.",
    ],
    propertyTypes: [
      { label: "Rumah bergaya kampung", note: "Struktur kayu yang memerlukan pemeriksaan teliti." },
      { label: "Rumah teres (1960-an–90-an)", note: "Perkhidmatan asal yang sudah uzur." },
      { label: "Pangsapuri sewa pelajar", note: "Kemasan tahan lasak dan pembaikan pantas." },
      { label: "Rumah kedai sepanjang koridor", note: "Kerja naik taraf ruang perniagaan." },
      { label: "Perumahan baharu", note: "Kerja kemasan dan pembaikan kecacatan." },
    ],
    problems: [
      { title: "Pendawaian menua di rumah lama", description: "Kabel dan papan agihan yang sudah melepasi jangka hayat." },
      { title: "Kereputan kayu dan serangan anai-anai", description: "Struktur dan kusen kayu yang terjejas." },
      { title: "Kelembapan tanah", description: "Dinding bawah yang lembap sepanjang musim hujan." },
      { title: "Kebocoran bumbung pada musim hujan", description: "Genting dan flashing yang sudah beranjak." },
      { title: "Kesan haus unit sewa", description: "Kemasan dan kelengkapan yang cepat rosak." },
    ],
    context: [
      "Rumah lama di Gombak memerlukan perbualan yang jujur: sesetengahnya perlu kerja pemulihan sebelum sebarang kerja kemasan.",
      "Lorong kampung selalunya sempit, jadi penghantaran bahan dan pembuangan sisa dirancang lebih awal.",
      "Persekitaran menghijau menjadikan kelembapan tinggi, jadi rawatan kulat dan pengudaraan menjadi sebahagian daripada kebanyakan kerja cat.",
    ],
    faqs: [
      { question: "Boleh anda menilai rumah kampung sebelum kami membuat keputusan?", answer: "Boleh. Kami akan menyemak struktur, bumbung, paip dan elektrik sebelum mencadangkan skop." },
      { question: "Anda membaharui unit sewa berhampiran universiti?", answer: "Ya, dan ia biasanya dijadualkan antara semester supaya unit boleh disewa semula." },
      { question: "Siling kami bernoda setiap musim hujan. Boleh diselesaikan?", answer: "Boleh, selepas punca kebocoran dikesan dan dihentikan." },
      { question: "Berbaloikah menukar pendawaian rumah lama?", answer: "Jika sistem asal tiada perlindungan bocor arus, ia satu naik taraf keselamatan yang berbaloi." },
    ],
  },
  "selangor/ampang-jaya": {
    ...shared("Ampang Jaya"),
    name: "Ampang Jaya",
    title: "Renovasi & Pembaikan Rumah di Ampang Jaya | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Ampang Jaya — kerja paip, kalis air, elektrik, jubin, renovasi dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Ampang Jaya",
    summary:
      "Bahagian Selangor bagi kawasan Ampang — taman Pandan, rumah teres matang dan blok pangsapuri lama sehingga ke sempadan KL.",
    intro: [
      "Ampang Jaya mempunyai rumah teres era 1980-an hingga 90-an dan pangsapuri lama yang kini memerlukan pembaharuan bilik air serta paip.",
      "Kami menyediakan kerja paip, kalis air, elektrik, jubin, renovasi dan servis handyman di seluruh Ampang Jaya.",
    ],
    serviceNotes: [
      "Mengesan kebocoran paip riser di pangsapuri lama.",
      "Memasang semula kalis air bilik air.",
      "Menaik taraf pendawaian asal yang terbeban.",
      "Menggantikan jubin kawasan basah dan lantai.",
      "Naik taraf dapur dan bilik air secara menyeluruh.",
      "Pembaikan kecil dan pemasangan dalam unit.",
    ],
    propertyTypes: [
      { label: "Rumah teres kawasan Pandan (1980-an–90-an)", note: "Perkhidmatan asal yang memasuki kitaran penggantian." },
      { label: "Pangsapuri dan kondominium lama", note: "Bilik air dan paip yang menua." },
      { label: "Rumah kedai pusat bandar", note: "Kerja naik taraf untuk penyewa perniagaan." },
      { label: "Kondominium baharu", note: "Kerja kemasan dan pembaikan kecacatan." },
      { label: "Rumah landed berhampiran lereng bukit", note: "Isu saliran yang perlu dipantau." },
    ],
    problems: [
      { title: "Kebocoran riser di pangsapuri lama", description: "Kebocoran yang merentasi beberapa unit." },
      { title: "Membran bilik air yang gagal", description: "Air meresap ke unit bawah." },
      { title: "Saluran dapur tersumbat", description: "Minyak dan sisa yang terkumpul dalam paip." },
      { title: "Pendawaian asal yang terbeban", description: "Litar lama yang kerap trip." },
      { title: "Kotoran dan kesan cuaca", description: "Fasad berhampiran pusat bandar yang cepat kotor." },
    ],
    context: [
      "Kerja pangsapuri di sini melibatkan logistik bangunan bersama: tempahan lif, waktu kerja dan laluan pembuangan sisa.",
      "Rumah teres kawasan Pandan mengikut urutan biasa: perkhidmatan dan kalis air dahulu, kemudian kemasan.",
      "Deretan kedai makan di pusat bandar bermakna kerja komersial dijadualkan mengikut waktu operasi.",
    ],
    faqs: [
      { question: "Boleh anda membaiki kebocoran yang menjejaskan jiran di bawah?", answer: "Boleh. Kami mengesan punca di unit atas dan membaiki kesan di unit bawah dengan kebenaran kedua-dua pihak." },
      { question: "Anda merenovasi pangsapuri lama kawasan Pandan?", answer: "Ya, termasuk bilik air, dapur, paip dan elektrik." },
      { question: "Boleh anda menaik taraf dapur 90-an kami?", answer: "Boleh, dengan menyemak paip dan elektrik dahulu sebelum kabinet dipasang." },
      { question: "Anda menerima kerja kecil?", answer: "Ya. Kerja kecil boleh digabungkan dalam satu lawatan." },
    ],
  },
  "selangor/kajang": {
    ...shared("Kajang"),
    name: "Kajang",
    title: "Renovasi & Pembaikan Rumah di Kajang | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Kajang — renovasi, kalis air, kerja paip, elektrik, cat dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Kajang",
    summary:
      "Pekan bersejarah Hulu Langat yang dikelilingi taman perumahan — rumah kedai pekan lama, rumah teres 1990-an dan taman berpagar yang lebih baharu.",
    intro: [
      "Kajang menggabungkan pekan lama dengan taman perumahan yang membesar pesat. Rumah 1990-an di sini kini memasuki kitaran kalis air dan pembaharuan bilik air yang pertama.",
      "Kami menyediakan renovasi, kalis air, kerja paip, elektrik, cat dan servis handyman di seluruh Kajang.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres dan rumah kedai secara berperingkat.",
      "Memasang semula kalis air bilik air dan bumbung.",
      "Membaiki kebocoran paip dan saluran tersumbat.",
      "Menaik taraf pendawaian untuk rumah yang telah ditambah.",
      "Cat dalaman dan luaran selepas pembaikan permukaan.",
      "Pembaikan kecil dan pemasangan di sekitar rumah.",
    ],
    propertyTypes: [
      { label: "Rumah kedai pekan lama", note: "Bangunan lama dengan dinding kongsi dan ciri warisan." },
      { label: "Rumah teres taman (1990-an–2000-an)", note: "Kalis air dan paip dalam kitaran pertama." },
      { label: "Taman landed baharu", note: "Naik taraf tersasar dan kerja kemasan." },
      { label: "Pangsapuri berhampiran transit", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Rumah berkembar dan banglo", note: "Projek renovasi berskala lebih besar." },
    ],
    problems: [
      { title: "Kegagalan kalis air kitaran pertama", description: "Bilik air rumah 90-an yang mula meresap." },
      { title: "Kereputan bumbung dan dinding warisan", description: "Bangunan pekan lama yang terjejas kelembapan." },
      { title: "Kebocoran bumbung musim hujan", description: "Air masuk melalui genting dan flashing." },
      { title: "Rumah yang ditambah melebihi kapasiti perkhidmatan", description: "Paip dan elektrik yang tidak dinaik taraf bersama." },
      { title: "Fasad pudar dan bernoda", description: "Cat luar yang terdedah kepada cuaca." },
    ],
    context: [
      "Pekan lama Kajang berbeza daripada taman di sekelilingnya: bahagian hadapan sempit dan dinding kongsi memerlukan kerja yang lebih berhati-hati.",
      "Taman perumahan di sini matang serentak, jadi skop kerja yang sama berulang dari rumah ke rumah.",
      "Trafik padat di sekitar pusat pekan pada hari bekerja, jadi lawatan dan penghantaran dijadualkan mengikutnya.",
    ],
    faqs: [
      { question: "Boleh anda membaiki rumah kedai lama di pekan Kajang?", answer: "Boleh. Kami mengutamakan struktur, bumbung dan saliran sebelum kerja kemasan." },
      { question: "Anda bekerja di taman berpagar yang lebih baharu?", answer: "Ya, mengikut pendaftaran akses dan waktu kerja komuniti." },
      { question: "Bilik air kami bocor ke bilik bawah. Apa penyelesaian yang betul?", answer: "Punca perlu dikesan dahulu; jika membran gagal, kalis air perlu dipasang semula sebelum jubin baharu." },
      { question: "Boleh renovasi dapur dan ruang dobi dibuat serentak?", answer: "Boleh, dan ia lebih menjimatkan kerana kerja paip serta elektrik boleh diselaraskan sekali." },
    ],
  },
  "selangor/seri-kembangan": {
    ...shared("Seri Kembangan"),
    name: "Seri Kembangan",
    title: "Renovasi & Pembaikan Rumah di Seri Kembangan | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Seri Kembangan — kerja paip, kalis air, renovasi, elektrik, cat dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Seri Kembangan",
    summary:
      "Bekas Serdang Lama yang kini menjadi bandar — lot kedai lama, rumah teres 90-an hingga 2000-an dan kelompok pangsapuri berhampiran MRT.",
    intro: [
      "Seri Kembangan menggabungkan kawasan kampung baru yang lama dengan taman perumahan dan pangsapuri yang lebih baharu. Resapan bilik air dan saluran tersumbat adalah antara kerja paling kerap.",
      "Kami menyediakan kerja paip, kalis air, renovasi, elektrik, cat dan servis handyman di seluruh Seri Kembangan.",
    ],
    serviceNotes: [
      "Membaiki kebocoran paip dan saluran lantai tersumbat.",
      "Memasang semula kalis air bilik air.",
      "Naik taraf rumah teres dan lot kedai.",
      "Menaik taraf pendawaian lama dan menambah soket.",
      "Cat dalaman dan luaran untuk rumah dan unit sewa.",
      "Pembaikan kecil dan pemasangan dalam unit.",
    ],
    propertyTypes: [
      { label: "Lot kedai dan rumah kampung baru", note: "Bangunan lama yang memerlukan naik taraf perkhidmatan." },
      { label: "Rumah teres taman (1990-an–2000-an)", note: "Bilik air dan paip dalam kitaran pembaharuan." },
      { label: "Pangsapuri dan kediaman servis", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Unit sewa pelajar dan keluarga", note: "Kemasan tahan lasak dan pembaikan pantas." },
      { label: "Lot komersial", note: "Kerja naik taraf untuk penyewa perniagaan." },
    ],
    problems: [
      { title: "Resapan bilik air di rumah taman", description: "Kalis air asal yang sudah gagal." },
      { title: "Pendawaian yang menua", description: "Litar lama yang tidak menampung beban semasa." },
      { title: "Saluran dapur dan perangkap lantai tersumbat", description: "Sumbatan berulang di talian yang sama." },
      { title: "Kebocoran bumbung rumah landed", description: "Air masuk semasa hujan lebat." },
      { title: "Kesan haus pusingan sewa", description: "Kemasan dan kelengkapan yang cepat rosak." },
    ],
    context: [
      "Jalan di bandar ini sibuk pada waktu sekolah dan pasar, jadi lawatan serta penghantaran dijadualkan mengikutnya.",
      "Sebahagian besar pangsapuri di sini menyewa kepada pelajar, jadi kerja pembaharuan mengikut kalendar semester.",
      "Untuk taman perumahan, urutan pembaharuan yang sama berulang dari rumah ke rumah.",
    ],
    faqs: [
      { question: "Boleh anda menaik taraf lot kedai di kawasan kampung baru?", answer: "Boleh, termasuk kerja elektrik, paip, jubin dan cat mengikut keperluan perniagaan." },
      { question: "Anda membaharui unit sewa pelajar?", answer: "Ya, dan kerja biasanya dijadualkan antara semester." },
      { question: "Terdapat tompok lembap di luar kawasan pancuran. Apa maknanya?", answer: "Ia biasanya menandakan kalis air yang gagal atau kebocoran kecil di bawah jubin." },
      { question: "Boleh sumbatan perangkap lantai diselesaikan secara kekal?", answer: "Kami akan membersihkan talian dan menyemak punca berulang seperti kecerunan atau kerosakan paip." },
    ],
  },
  "selangor/cyberjaya": {
    ...shared("Cyberjaya"),
    name: "Cyberjaya",
    title: "Renovasi & Pembaikan Rumah di Cyberjaya | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Cyberjaya — lantai, elektrik, renovasi, handyman, kerja paip dan cat. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Cyberjaya",
    summary:
      "Hab teknologi Selangor — kediaman landed berpagar dan kondominium moden di sekitar tasik dan koridor pejabat.",
    intro: [
      "Rumah di Cyberjaya agak baharu, jadi kerja di sini lebih kerap melibatkan naik taraf kemasan pemaju, pembaikan kecacatan dan pemasangan tambahan berbanding renovasi berat.",
      "Kami menyediakan kerja lantai, elektrik, renovasi, handyman, paip dan cat di seluruh Cyberjaya.",
    ],
    serviceNotes: [
      "Menggantikan lantai asal dengan pilihan yang lebih tahan lama.",
      "Menambah litar, lampu dan titik kuasa mengikut keperluan.",
      "Naik taraf dalaman mengikut garis panduan komuniti.",
      "Pembaikan kecil dan penyelenggaraan berkala.",
      "Membaiki kebocoran kecil dan kelengkapan bilik air.",
      "Kerja cat dalaman untuk pembaharuan ruang.",
    ],
    propertyTypes: [
      { label: "Taman landed berpagar", note: "Kerja mengikut pendaftaran akses dan waktu komuniti." },
      { label: "Kondominium tepi tasik", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Kediaman servis", note: "Kerja pembaharuan antara penyewa." },
      { label: "Townhouse", note: "Kerja dua aras dengan akses terkawal." },
      { label: "Lot komersial dan pejabat", note: "Kerja naik taraf ruang kerja." },
    ],
    problems: [
      { title: "Naik taraf kemasan pemaju", description: "Kemasan asal yang tidak menepati kehendak pemilik." },
      { title: "Kecacatan selepas serahan", description: "Kerja pembaikan yang perlu diselesaikan awal." },
      { title: "Silikon dan grout yang menua", description: "Kawasan basah yang mula membenarkan air masuk." },
      { title: "Penyelenggaraan untuk pemilik jauh", description: "Pemilik yang tinggal di luar memerlukan laporan yang jelas." },
      { title: "Kekurangan pendawaian untuk peranti pintar", description: "Titik kuasa dan rangkaian yang tidak mencukupi." },
    ],
    context: [
      "Komuniti terurus di Cyberjaya mempunyai protokol pendaftaran, waktu kerja dan akses yang perlu dipatuhi.",
      "Kerana rumah lebih baharu, nasihat kami sering mengarah kepada naik taraf tersasar dan bukan kerja pecah besar.",
      "Bagi pemilik yang tinggal di luar negara atau luar bandar, kami menetapkan cara pelaporan sebelum kerja bermula.",
    ],
    faqs: [
      { question: "Boleh anda menaik taraf lantai kondominium baharu?", answer: "Boleh. Kami akan mencadangkan jenis lantai yang sesuai dengan penggunaan dan peraturan bangunan." },
      { question: "Anda memasang sistem rumah pintar?", answer: "Kami boleh memasang pendawaian dan titik kuasa yang diperlukan untuk peranti yang anda pilih." },
      { question: "Boleh anda menguruskan pembaikan unit yang disewakan semasa kami di luar negara?", answer: "Boleh, dengan persetujuan skop dan cara pelaporan yang jelas sebelum kerja bermula." },
      { question: "Terlalu awalkah untuk merenovasi rumah berusia dua tahun?", answer: "Tidak semestinya. Naik taraf tersasar seperti lantai, pencahayaan atau kemasan bilik air adalah perkara biasa." },
    ],
  },
  "selangor/putrajaya": {
    ...shared("Putrajaya"),
    name: "Putrajaya",
    title: "Renovasi & Pembaikan Rumah di Putrajaya | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Putrajaya — cat, kerja paip, elektrik, handyman, renovasi dan lantai. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Putrajaya",
    summary:
      "Pusat pentadbiran persekutuan — presint berlandskap di sekitar tasik, kuarters kerajaan dan kediaman swasta yang lebih baharu.",
    intro: [
      "Putrajaya direka sebagai bandar taman, jadi banyak dinding berada di bawah bayang pokok dan cenderung berkulat. Kerja cat di sini bermula dengan pembersihan dan rawatan permukaan.",
      "Kami menyediakan kerja cat, paip, elektrik, handyman, renovasi dan lantai di seluruh presint Putrajaya.",
    ],
    serviceNotes: [
      "Cat dalaman dan luaran termasuk rawatan kulat.",
      "Membaiki kebocoran paip dan masalah tekanan air.",
      "Menambah litar dan menaik taraf pencahayaan.",
      "Pembaikan kecil dan pemasangan di sekitar rumah.",
      "Naik taraf dalaman mengikut peraturan presint.",
      "Memasang lantai baharu di ruang yang dinaik taraf.",
    ],
    propertyTypes: [
      { label: "Kuarters kerajaan", note: "Kerja pembaikan mengikut peraturan yang ditetapkan." },
      { label: "Rumah landed presint", note: "Naik taraf dalaman dan kemasan." },
      { label: "Kondominium tepi tasik", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Kediaman berpagar", note: "Kerja mengikut pendaftaran akses dan waktu kerja." },
      { label: "Lot komersial", note: "Kerja naik taraf ruang perniagaan." },
    ],
    problems: [
      { title: "Kulat pada dinding terlindung", description: "Dinding di bawah litupan pokok yang kekal lembap." },
      { title: "Kesan haus di kuarters berpenghuni ramai", description: "Kelengkapan dan kemasan yang cepat rosak." },
      { title: "Naik taraf kemasan standard", description: "Kemasan asal yang ingin dipertingkatkan pemilik." },
      { title: "Masalah tekanan air dan pemanas", description: "Kelengkapan yang tersumbat atau sudah haus." },
      { title: "Peraturan presint yang mengehadkan kerja", description: "Waktu kerja dan jenis kerja yang dibenarkan." },
    ],
    context: [
      "Presint kediaman Putrajaya tenang, jadi disiplin waktu kerja dan kawalan bunyi penting.",
      "Bagi kuarters, peraturan tentang apa yang boleh diubah berbeza daripada kediaman swasta, jadi kami mengesahkan skop dahulu.",
      "Litupan pokok bermakna kerja cat luaran termasuk pembersihan dan rawatan kulat sebelum cat disapu.",
    ],
    faqs: [
      { question: "Boleh anda merenovasi kediaman swasta di Putrajaya?", answer: "Boleh, mengikut peraturan presint dan waktu kerja yang dibenarkan." },
      { question: "Anda menjalankan pembaikan di kuarters kerajaan?", answer: "Ya untuk kerja pembaikan yang dibenarkan. Kami mengesahkan skop sebelum bermula." },
      { question: "Dinding terlindung kami berkulat setiap tahun. Boleh dihentikan?", answer: "Ia boleh dikurangkan dengan rawatan permukaan, cat anti-kulat dan pengudaraan yang lebih baik." },
      { question: "Anda berkhidmat di kondominium tepi tasik?", answer: "Ya, mengikut peraturan renovasi bangunan berkenaan." },
    ],
  },
  "selangor/kota-damansara": {
    ...shared("Kota Damansara"),
    name: "Kota Damansara",
    title: "Renovasi & Pembaikan Rumah di Kota Damansara | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Kota Damansara — renovasi, kerja paip, kalis air, lantai, elektrik dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Kota Damansara",
    summary:
      "Bandar besar antara PJ dan Sungai Buloh — seksyen rumah teres 90-an, deretan komersial The Strand dan kondominium era MRT.",
    intro: [
      "Kota Damansara terbahagi kepada seksyen dengan usia yang berbeza. Seksyen lama kini menghadapi kegagalan kalis air dan paip, manakala menara baharu memerlukan kerja kemasan.",
      "Kami menyediakan renovasi, kerja paip, kalis air, lantai, elektrik dan servis handyman di seluruh Kota Damansara.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres seksyen lama secara berperingkat.",
      "Membaiki paip berkarat dan kebocoran tersembunyi.",
      "Memasang semula kalis air bilik air dan balkoni.",
      "Memasang lantai baharu semasa naik taraf.",
      "Menambah soket dan menaik taraf litar.",
      "Pembaikan kecil dan pemasangan dalam unit.",
    ],
    propertyTypes: [
      { label: "Rumah teres (1990-an–2000-an, ikut seksyen)", note: "Perkhidmatan asal yang memasuki kitaran penggantian." },
      { label: "Kawasan berpagar dan premium", note: "Kerja mengikut peraturan komuniti." },
      { label: "Kondominium koridor MRT", note: "Kerja kemasan unit baharu." },
      { label: "Pangsapuri dan flat", note: "Kerja pembaikan dalam unit." },
      { label: "Lot komersial The Strand", note: "Kerja naik taraf untuk penyewa perniagaan." },
    ],
    problems: [
      { title: "Kegagalan kalis air seksyen lama", description: "Bilik air yang mula meresap selepas dua dekad." },
      { title: "Kecacatan kemasan menara baharu", description: "Kerja pemaju yang perlu dibaiki." },
      { title: "Kakisan paip di seksyen lama", description: "Paip bekalan yang mula bocor." },
      { title: "Grout dan pengedap yang merosot", description: "Kawasan basah yang membenarkan air masuk." },
      { title: "Tarikh akhir naik taraf komersial", description: "Kerja lot kedai yang perlu siap sebelum pembukaan." },
    ],
    context: [
      "Koridor utama sesak pada waktu puncak, jadi lawatan dan penghantaran dijadualkan di luar waktu tersebut.",
      "Kerana seksyen dibina mengikut kumpulan usia, jiran sekitar biasanya memerlukan kerja yang serupa.",
      "Kawasan berpagar dan menara strata mempunyai peraturan pendaftaran, waktu kerja dan pembuangan sisa tersendiri.",
    ],
    faqs: [
      { question: "Boleh anda merenovasi rumah teres di seksyen lama?", answer: "Boleh, dan kami akan mencadangkan urutan kerja yang munasabah bermula dengan perkhidmatan." },
      { question: "Anda menyiapkan kemasan kondominium baharu berhampiran MRT?", answer: "Ya, termasuk lantai, cat, lampu dan pemasangan sebelum berpindah masuk." },
      { question: "Boleh grout bilik air sahaja dibaharui?", answer: "Boleh jika jubin dan kalis air masih baik. Kami akan menyemak keadaan sebenar dahulu." },
      { question: "Sinki dapur kami perlahan mengalir. Serius?", answer: "Ia biasanya sumbatan minyak. Jika ia berulang, talian perlu diperiksa dengan lebih teliti." },
    ],
  },
  "selangor/sungai-buloh": {
    ...shared("Sungai Buloh"),
    name: "Sungai Buloh",
    title: "Renovasi & Pembaikan Rumah di Sungai Buloh | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Sungai Buloh — renovasi, kerja paip, kalis air, elektrik, cat dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Sungai Buloh",
    summary:
      "Koridor barat yang berkembang pesat — pekan lama dan kawasan hospital bersebelahan taman berpagar serta perumahan baharu.",
    intro: [
      "Sungai Buloh menggabungkan pekan lama dengan taman berpagar yang telah lama berdiri dan perumahan baharu. Kerja di sini merangkumi pemulihan bangunan lama sehinggalah kemasan rumah baharu.",
      "Kami menyediakan renovasi, kerja paip, kalis air, elektrik, cat dan servis handyman di seluruh Sungai Buloh.",
    ],
    serviceNotes: [
      "Naik taraf rumah lama dan rumah kedai pekan.",
      "Membaiki paip lama dan kebocoran tersembunyi.",
      "Kalis air bumbung, bilik air dan dinding.",
      "Menaik taraf pendawaian di rumah yang lebih lama.",
      "Cat dalaman dan luaran termasuk rawatan kulat.",
      "Pembaikan kecil dan pemasangan di sekitar rumah.",
    ],
    propertyTypes: [
      { label: "Rumah kedai dan rumah pekan lama", note: "Perkhidmatan asal yang memerlukan naik taraf." },
      { label: "Taman berpagar yang telah lama berdiri", note: "Kerja mengikut peraturan komuniti." },
      { label: "Perumahan taman baharu", note: "Kerja kemasan dan naik taraf tersasar." },
      { label: "Pangsapuri berhampiran transit", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Lot komersial", note: "Kerja naik taraf ruang perniagaan." },
    ],
    problems: [
      { title: "Perkhidmatan menua di pekan lama", description: "Paip dan pendawaian yang sudah melepasi jangka hayat." },
      { title: "Kebocoran bumbung dan longkang", description: "Longkang tersumbat menyebabkan air melimpah masuk." },
      { title: "Kegagalan kalis air bilik air", description: "Membran asal yang mula meresap." },
      { title: "Kelembapan pada dinding terlindung", description: "Dinding yang jarang menerima matahari." },
      { title: "Keperluan kemasan rumah baharu", description: "Kerja tambahan selepas serahan pemaju." },
    ],
    context: [
      "Taman berpagar di sini beroperasi dengan peraturan komuniti: pendaftaran akses, waktu kerja dan laluan pembuangan sisa.",
      "Kawasan perniagaan tepi jalan bermakna kerja komersial perlu dirancang mengikut trafik dan waktu operasi.",
      "Perumahan baharu di sini cukup hampir dengan KL dan Kepong, jadi jadual lawatan lebih fleksibel.",
    ],
    faqs: [
      { question: "Boleh anda membaharui rumah di taman berpagar?", answer: "Boleh, mengikut peraturan akses dan waktu kerja komuniti berkenaan." },
      { question: "Anda membaiki rumah kedai pekan lama?", answer: "Ya, dengan mengutamakan struktur, bumbung dan saliran sebelum kemasan." },
      { question: "Siling kami bernoda selepas hujan lebat. Bumbung atau paip?", answer: "Kami akan mengesan puncanya dahulu, kerana kedua-duanya boleh menghasilkan tompok yang serupa." },
      { question: "Anda bekerja di pangsapuri baharu berhampiran stesen?", answer: "Ya, mengikut peraturan renovasi bangunan berkenaan." },
    ],
  },
  "selangor/rawang": {
    ...shared("Rawang"),
    name: "Rawang",
    title: "Renovasi & Pembaikan Rumah di Rawang | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Rawang — renovasi, kalis air, kerja paip, elektrik, cat dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Rawang",
    summary:
      "Bekas pekan perlombongan yang kini menjadi koridor pertumbuhan — jalan dan rumah kedai pekan lama dikelilingi taman perumahan baharu.",
    intro: [
      "Rawang mempunyai pekan lama yang padat dan taman perumahan yang berkembang pesat di selatan. Kerja di sini merangkumi pemulihan bangunan lama dan kitaran naik taraf pertama rumah 1990-an.",
      "Kami menyediakan renovasi, kalis air, kerja paip, elektrik, cat dan servis handyman di seluruh Rawang.",
    ],
    serviceNotes: [
      "Naik taraf rumah kedai dan rumah teres secara berperingkat.",
      "Kalis air bumbung dan bilik air yang sudah uzur.",
      "Membaiki paip lama dan saluran tersumbat.",
      "Menaik taraf pendawaian asal yang terbeban.",
      "Cat dalaman dan luaran termasuk rawatan kulat.",
      "Pembaikan kecil dan pemasangan di sekitar rumah.",
    ],
    propertyTypes: [
      { label: "Rumah kedai pekan lama", note: "Bangunan lama dengan akses yang terhad." },
      { label: "Rumah teres taman (1990-an–2000-an)", note: "Kalis air dan paip dalam kitaran pertama." },
      { label: "Taman landed baharu", note: "Kerja kemasan dan naik taraf tersasar." },
      { label: "Pangsapuri dan kediaman servis", note: "Kerja dalam unit mengikut peraturan pengurusan." },
      { label: "Rumah berkembar dan banglo", note: "Projek renovasi berskala lebih besar." },
    ],
    problems: [
      { title: "Kereputan bumbung dan kayu pekan lama", description: "Struktur lama yang terjejas kelembapan." },
      { title: "Kegagalan kalis air kitaran pertama", description: "Bilik air rumah 90-an yang mula meresap." },
      { title: "Kelembapan di kawasan menghijau", description: "Dinding terlindung yang kekal lembap." },
      { title: "Pendawaian asal yang terbeban", description: "Litar lama dengan peralatan moden." },
      { title: "Bumbung rosak akibat ribut", description: "Genting beranjak selepas angin kencang." },
    ],
    context: [
      "Pekan lama Rawang padat dan aksesnya terhad, jadi bahan dibawa masuk secara berperingkat dan sisa dirancang laluannya.",
      "Ramai penduduk berulang-alik ke KL, jadi lawatan boleh dijadualkan pada waktu petang atau hujung minggu apabila perlu.",
      "Pinggir yang lebih menghijau dan lembap menjadikan rawatan kulat sebahagian daripada kebanyakan kerja cat.",
    ],
    faqs: [
      { question: "Boleh anda merenovasi rumah kedai di pekan Rawang?", answer: "Boleh, dengan mengutamakan bumbung, struktur dan saliran sebelum kemasan." },
      { question: "Anda bekerja di taman baharu di selatan pekan?", answer: "Ya, termasuk kerja kalis air, bilik air, elektrik dan cat." },
      { question: "Kami bekerja di KL. Boleh lawatan diatur pada waktu petang atau hujung minggu?", answer: "Boleh. Beritahu kami waktu yang sesuai dan kami akan cuba menyesuaikannya." },
      { question: "Bilik air kami bocor hanya selepas mandi. Apa puncanya?", answer: "Ia biasanya menandakan kalis air atau grout yang gagal di kawasan pancuran." },
    ],
  },
  "selangor/semenyih": {
    ...shared("Semenyih"),
    name: "Semenyih",
    title: "Renovasi & Pembaikan Rumah di Semenyih | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di Semenyih — renovasi, kalis air, kerja paip, elektrik, cat dan handyman. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di Semenyih",
    summary:
      "Pekan universiti yang tenang di Hulu Langat — jalan kampung, rumah kedai pekan dan taman perumahan yang berkembang pesat.",
    intro: [
      "Semenyih menggabungkan kawasan kampung, pekan kecil dan taman perumahan baharu. Iklim yang lembap di kawasan ini menjadikan kebocoran bumbung dan kulat aduan yang kerap.",
      "Kami menyediakan renovasi, kalis air, kerja paip, elektrik, cat dan servis handyman di seluruh Semenyih.",
    ],
    serviceNotes: [
      "Naik taraf rumah taman dan rumah pekan.",
      "Kalis air bumbung dan bilik air.",
      "Membaiki paip lama dan saluran tersumbat.",
      "Menaik taraf pendawaian di rumah lama.",
      "Cat dalaman dan luaran termasuk rawatan kulat.",
      "Pembaikan kecil dan pemasangan di sekitar rumah.",
    ],
    propertyTypes: [
      { label: "Rumah kedai dan rumah pekan", note: "Bangunan lama yang memerlukan naik taraf perkhidmatan." },
      { label: "Taman landed baharu", note: "Kerja kemasan dan naik taraf tersasar." },
      { label: "Rumah kawasan kampung", note: "Struktur lama yang memerlukan pemeriksaan teliti." },
      { label: "Unit sewa berhampiran kampus", note: "Kemasan tahan lasak dan pembaikan pantas." },
      { label: "Rumah berkembar dan banglo", note: "Projek renovasi berskala lebih besar." },
    ],
    problems: [
      { title: "Kebocoran bumbung di kawasan lembap", description: "Hujan lebat yang kerap menguji kemasan bumbung." },
      { title: "Kulat dan kelembapan", description: "Dinding yang jarang kering sepenuhnya." },
      { title: "Perkhidmatan menua di pekan", description: "Paip dan pendawaian lama yang perlu diganti." },
      { title: "Kegagalan kalis air kitaran pertama", description: "Bilik air taman baharu yang mula meresap." },
      { title: "Kesan haus unit sewa", description: "Kemasan yang cepat rosak di unit pelajar." },
    ],
    context: [
      "Jalan Semenyih menghubungkan ke Kajang dan koridor LEKAS, jadi lawatan dijadualkan mengikut trafik.",
      "Taman perumahan mudah dari segi logistik, manakala jalan kampung memerlukan perancangan penghantaran yang lebih teliti.",
      "Kerja pembaharuan unit sewa mengikut kalendar universiti supaya unit kosong ketika kerja dijalankan.",
    ],
    faqs: [
      { question: "Boleh anda merenovasi rumah di taman perumahan baharu?", answer: "Boleh, termasuk kerja kalis air, bilik air, dapur dan kemasan." },
      { question: "Anda membaiki bangunan lama di pusat pekan?", answer: "Ya, dengan mengutamakan struktur, bumbung dan saliran." },
      { question: "Dinding kami berkulat pada musim tengkujuh. Apa boleh dibuat?", answer: "Kami merawat kulat, memperbaiki pengudaraan jika boleh, dan menggunakan cat anti-kulat." },
      { question: "Boleh kerja dijalankan mengikut masa lapang kami pada hujung minggu?", answer: "Kami akan cuba menyesuaikan jadual lawatan dengan masa yang sesuai untuk anda." },
    ],
  },
  "selangor/usj": {
    ...shared("USJ"),
    name: "USJ",
    title: "Renovasi & Pembaikan Rumah di USJ | Renovix",
    metaDescription:
      "Servis renovasi dan pembaikan rumah di USJ — renovasi, kalis air, kerja paip, elektrik, jubin dan cat. Sebut harga percuma.",
    h1: "Servis Renovasi & Pembaikan Rumah di USJ",
    summary:
      "UEP Subang Jaya — bandar 1990-an yang luas dengan rumah teres dan pangsapuri di sekitar Taipan, kini dalam dekad renovasinya.",
    intro: [
      "Kebanyakan rumah di USJ dibina dalam era yang sama, jadi satu jalan biasanya menghadapi kitaran kerosakan yang serupa: kalis air bilik air, paip berkarat dan bumbung yang menua.",
      "Kami menyediakan renovasi, kalis air, kerja paip, elektrik, jubin dan cat di seluruh USJ.",
    ],
    serviceNotes: [
      "Naik taraf rumah teres dua tingkat secara menyeluruh.",
      "Memasang semula kalis air bilik air dan balkoni.",
      "Menggantikan paip berkarat dan membaiki kebocoran.",
      "Menaik taraf pendawaian dan menambah soket.",
      "Menggantikan jubin kawasan basah dan lantai.",
      "Cat dalaman dan luaran selepas pembaikan permukaan.",
    ],
    propertyTypes: [
      { label: "Rumah teres dua tingkat (1990-an)", note: "Perkhidmatan asal yang memasuki kitaran penggantian." },
      { label: "Pangsapuri era Goodyear", note: "Logistik bangunan bersama dan paip riser lama." },
      { label: "Rumah di seksyen yang lebih baharu", note: "Naik taraf tersasar dan kerja kemasan." },
      { label: "Lot komersial kawasan Taipan", note: "Kerja naik taraf antara penyewa." },
      { label: "Rumah berkembar", note: "Projek renovasi berskala lebih besar." },
    ],
    problems: [
      { title: "Kegagalan kalis air bilik air", description: "Membran asal yang sudah tamat jangka hayat." },
      { title: "Paip berkarat", description: "Rangkaian paip lama yang mula bocor di beberapa tempat." },
      { title: "Kebocoran bumbung pada genting yang menua", description: "Air masuk semasa hujan lebat berterusan." },
      { title: "Saluran dapur tersumbat", description: "Minyak dan sisa makanan yang terkumpul." },
      { title: "Fasad pudar dan retak", description: "Cat luar yang terdedah kepada matahari dan hujan." },
    ],
    context: [
      "Kerana USJ dibina dalam era yang sama, kami boleh menerangkan dengan jelas apa yang biasanya perlu dibaiki seterusnya.",
      "Pangsapuri era Goodyear melibatkan logistik bangunan bersama: penutupan riser, laluan tangga dan pembuangan sisa.",
      "Deretan komersial Taipan bergerak mengikut pusingan penyewa, jadi kerja naik taraf dijadualkan pada tarikh pembukaan.",
    ],
    faqs: [
      { question: "Boleh anda membina semula bilik air USJ sepenuhnya?", answer: "Boleh, termasuk kerja pecah, paip, kalis air, jubin dan kelengkapan baharu." },
      { question: "Berbaloikah menukar paip rumah teres 90-an?", answer: "Jika kebocoran sudah berulang di beberapa tempat, menggantikan rangkaian lebih menjimatkan jangka panjang." },
      { question: "Anda bekerja di pangsapuri Goodyear Court?", answer: "Ya, mengikut peraturan bangunan dan penyelarasan bekalan air." },
      { question: "Boleh kami renovasi secara berperingkat?", answer: "Boleh. Kami akan menyusun urutan supaya setiap peringkat berdiri sendiri." },
    ],
  },
};
