import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Rumah Teres", note: "Lantai konkrit tingkat bawah boleh mengalami lembapan naik; ambang dapur dan bilik air ialah laluan masuk biasa." },
  { label: "Semi-D & Banglo", note: "Kawasan lantai yang lebih luas bermakna kebocoran perlahan boleh merebak jauh sebelum disedari." },
  { label: "Kondominium & Pangsapuri", note: "Kebocoran daripada unit di atas, atau daripada bilik air anda sendiri, ialah punca paling kerap." },
  { label: "Kedai & Komersial", note: "Kawasan tandas, pantri dan saluran penghawa dingin ialah punca biasa." },
  { label: "Hartanah Lama", note: "Lantai yang dibina tanpa membran kalis lembapan berkesan boleh menolak lembapan naik ke lantai terapung." },
];

const areasNote =
  "Kami membaiki lantai bengkak, terangkat dan berbunyi di seluruh Kuala Lumpur dan Selangor.";

const propertyTypesIntro =
  "Tempat lantai rosak bergantung pada dari mana air datang dan keadaan lantai bawah, dan itu berbeza mengikut jenis hartanah.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "swollen-flooring": {
    ...base,
    name: "Lantai Bengkak atau Rosak Air",
    title: "Renovix Home Services | Pembaikan Lantai Bengkak di KL & Selangor",
    metaDescription:
      "Lantai laminate, vinyl dan SPC bengkak di Kuala Lumpur & Selangor. Ketahui punca bengkak, papan mana boleh diselamatkan, kenapa punca lembapan paling penting dan bila perlu panggil pembaikan.",
    h1: "Lantai Bengkak atau Rosak Air",
    subtitle:
      "Lantai bengkak hampir selalu masalah air yang menyamar sebagai masalah lantai — menggantikan papan tanpa mencari puncanya menjamin ia berulang.",
    whatItMeans: [
      "Bengkak berlaku apabila papan menyerap air dan mengembang. Ia paling ketara pada laminate, yang terasnya papan gentian kayu termampat dan bertindak seperti span apabila air melepasi lapisan pelindung: papan menebal, tepinya terangkat menjadi rabung, dan kerosakan itu kekal kerana gentian tidak kembali ke saiz asal apabila kering.",
      "SPC dan vinyl berkelakuan berbeza. Terasnya bukan berasaskan kayu, jadi papan itu sendiri tidak bengkak dengan cara sama. Yang gagal sebaliknya ialah apa yang di bawah dan di sekelilingnya: air masuk ke bawah lantai terapung melalui celah atau tepi, bertakung pada lantai bawah, dan muncul sebagai terangkat, melengkung atau bau hapak. Perbezaan itu penting kerana ia mengubah kedua-dua pembaikan dan tahap mendesaknya.",
    ],
    commonCauses: [
      "Kebocoran paip di bawah atau di sebelah lantai — selalunya kebocoran perlahan daripada paip, pemanas air atau mesin basuh.",
      "Air dibawa masuk daripada ambang bilik air atau dapur yang tiada penutup.",
      "Mengemop dengan air terlalu banyak, terutamanya pada laminate.",
      "Tumpahan yang dibiarkan bertakung, atau pasu tanaman yang menitis ke lantai.",
      "Lembapan naik melalui lantai konkrit tanpa kalis lembapan atau yang sudah gagal.",
      "Pemeluwapan daripada unit penghawa dingin atau salur salirannya.",
      "Lantai dipasang tanpa ruang pengembangan yang diperlukan, jadi pergerakan biasa tiada tempat untuk pergi.",
    ],
    warningSigns: [
      "Tepi papan terangkat menjadi rabung yang boleh dirasa dengan kaki.",
      "Papan melengkung, membonjol atau terangkat daripada lantai bawah.",
      "Bahagian yang lembut atau kenyal apabila dipijak.",
      "Bau hapak dalam bilik, yang biasanya bermakna lembapan terperangkap di bawah.",
      "Celah terbuka antara papan, atau sebaliknya — papan terbonjol rapat antara satu sama lain.",
      "Perubahan warna atau kesan gelap merebak dari satu titik.",
    ],
    solutions: [
      { title: "Cari dan hentikan punca lembapan dahulu", description: "Sebelum sebarang papan disentuh, kami mengenal pasti dari mana air datang. Menggantikan lantai atas kebocoran aktif ialah wang yang dibelanjakan dua kali, jadi langkah ini tidak boleh dilangkau." },
      { title: "Keringkan lantai bawah", description: "Kawasan terjejas dibuka dan dibiarkan kering dengan betul. Memasang lantai baharu atas lantai bawah yang lembap memerangkap lembapan itu dan lantai baharu turut gagal." },
      { title: "Ganti papan yang terjejas", description: "Laminate bengkak tidak boleh dipulihkan dan mesti diganti. Dengan lantai click-lock, papan individu selalunya boleh ditukar tanpa mengulang keseluruhan bilik." },
      { title: "Betulkan butiran pemasangan", description: "Jika puncanya ruang pengembangan yang tiada, ambang tanpa penutup atau penghadang lembapan yang tertinggal, kami membetulkannya juga supaya kegagalan sama tidak berulang." },
    ],
    whenToCall: [
      "Bengkak sedang merebak, bermakna punca lembapan masih aktif.",
      "Anda boleh menghidu lembap atau kulapuk dalam bilik.",
      "Lantai lembut atau kenyal apabila dipijak.",
      "Anda mengesyaki kebocoran paip di bawah atau di belakang lantai.",
      "Bengkak muncul tanpa sebarang tumpahan yang boleh anda kaitkan.",
    ],
    relatedServiceNote:
      "Pembaikan lantai dikendalikan oleh pasukan lantai kami, bekerjasama dengan paip atau kalis air jika punca lembapan ternyata kebocoran atau masalah resapan.",
    processTitle: "Bagaimana Kami Membaiki Lantai Bengkak",
    processIntro:
      "Urutannya penting: punca, kemudian keringkan, kemudian ganti. Melakukannya dalam susunan lain bermakna melakukannya dua kali.",
    processSteps: [
      { title: "Jejaki lembapan", description: "Kami memeriksa kawasan terjejas dan punca berkemungkinan — paip, ambang, saliran penghawa dingin, dinding luar — untuk mencari di mana air masuk." },
      { title: "Angkat papan terjejas dan keringkan", description: "Papan rosak diangkat supaya lantai bawah boleh diperiksa dan dikeringkan dengan betul." },
      { title: "Betulkan puncanya", description: "Kebocoran dibaiki atau butiran dibetulkan, diselaraskan dengan pasukan paip atau kalis air kami jika perlu." },
      { title: "Ganti dan pulihkan", description: "Papan baharu dipasang dengan ruang pengembangan betul dan penghadang lembapan yang perlu, dan bingkai dipasang semula." },
    ],
    faqs: [
      { question: "Bolehkah lantai laminate bengkak dibaiki, atau perlu diganti?", answer: "Laminate bengkak tidak boleh dipulihkan. Terasnya papan gentian termampat, dan setelah menyerap air, gentian mengembang secara kekal — mengeringkannya tidak mengembalikan papan ke ketebalan asal. Papan terjejas diganti. Berita baiknya, laminate click-lock biasanya boleh diganti sekeping demi sekeping, bukan sebilik." },
      { question: "Bukankah lantai SPC kalis air, jadi ini tidak boleh berlaku?", answer: "Papan SPC itu sendiri tahan air dan tidak akan bengkak seperti laminate. Tetapi lantai sebagai satu sistem tidak tertutup rapat: air masih boleh melalui sambungan dan bertakung pada lantai bawah, yang membawa kepada terangkat, bau hapak dan kulapuk. Jadi SPC memberi anda lebih toleransi terhadap tumpahan, bukan kekebalan daripada kebocoran." },
      { question: "Hanya dua keping rosak. Perlukah saya mengulang seluruh bilik?", answer: "Biasanya tidak. Lantai click-lock boleh diangkat dari dinding terdekat dan papan individu ditukar. Isu praktikalnya ialah padanan: jika lantai sudah beberapa tahun, papan gantian mungkin berbeza sedikit warnanya. Menyimpan lebihan papan daripada pemasangan asal amat berguna untuk sebab ini." },
      { question: "Kenapa lantai saya bengkak sedangkan saya tidak pernah menumpahkan apa-apa?", answer: "Itu soalan penting, dan ia biasanya menunjuk kepada punca yang anda tidak nampak — kebocoran paip perlahan, salur saliran penghawa dingin, lembapan naik melalui lantai, atau air daripada unit atau bilik jiran. Bengkak tanpa tumpahan jelas ialah sebab kuat untuk menjejaki punca sebelum menggantikan apa-apa." },
      { question: "Bolehkah saya keringkan dengan kipas dan lihat sama ada ia pulih?", answer: "Mengeringkan berbaloi dilakukan dan membantu lantai bawah, tetapi ia tidak akan mengempiskan papan laminate. Dan jika punca lembapan masih aktif, mengeringkan permukaan hanya menyembunyikan masalah sementara ia berterusan di bawah. Gunakan kipas, tetapi cari puncanya juga." },
    ],
  },
  "lifting-floor-planks": {
    ...base,
    name: "Papan Lantai Terangkat atau Terpisah",
    title: "Renovix Home Services | Pembaikan Papan Lantai Terangkat di KL & Selangor",
    metaDescription:
      "Papan SPC, vinyl dan laminate terangkat, bercelah atau terbonjol di Kuala Lumpur & Selangor. Fahami ruang pengembangan, kerataan lantai bawah dan kegagalan pelekat serta cara setiap satu dibaiki.",
    h1: "Papan Lantai Terangkat atau Terpisah",
    subtitle:
      "Papan yang terangkat, bercelah atau terbonjol menjadi rabung hampir selalu memberitahu anda tentang pemasangan, bukan tentang produk lantai.",
    whatItMeans: [
      "Lantai terapung direka untuk bergerak. Papan SPC, vinyl dan laminate semuanya mengembang dan mengecut sedikit dengan suhu, dan dalam rumah Malaysia, perbezaan antara bilik tidur berhawa dingin pada waktu malam dan bilik tertutup pada pukul dua petang sudah cukup untuk memberi kesan. Pemasangan mengatasinya dengan meninggalkan ruang pengembangan di sekeliling perimeter, tersembunyi di bawah skirting, supaya keseluruhan lantai boleh bernafas.",
      "Apabila papan terangkat, terbonjol menjadi rabung atau terpisah menjadi celah, biasanya satu daripada tiga perkara telah berlaku: ruang pengembangan terlalu kecil atau terhalang oleh sesuatu yang diskru menembusi lantai, lantai bawah tidak cukup rata, atau lantai berpelekat telah hilang lekatan. Tiada satu pun kerosakan pada papan itu sendiri, sebab itulah sekadar menggantikan papan jarang menyelesaikannya.",
    ],
    commonCauses: [
      "Tiada ruang pengembangan, atau ruang terlalu kecil untuk saiz bilik.",
      "Ruang pengembangan terhalang — oleh bingkai pintu, kabinet berat terpasang, atau skirting yang dipaku menembusi lantai.",
      "Lantai bawah tidak rata, jadi papan merentangi lekukan dan melentur sehingga sambungan gagal.",
      "Kegagalan pelekat pada lantai vinyl berpelekat, selalunya kerana dipasang atas lantai bawah berhabuk atau lembap.",
      "Lembapan di bawah lantai mengangkat atau meherotkan papan.",
      "Perabot berat menekan satu kawasan sementara lantai lain mengembang di sekelilingnya.",
      "Sambungan click yang tidak dikunci sepenuhnya semasa pemasangan.",
    ],
    warningSigns: [
      "Rabung atau bonjolan di tempat dua papan bertemu, selalunya di tengah bilik.",
      "Celah kelihatan terbuka antara papan yang dahulunya rapat.",
      "Papan yang bergerak atau berbunyi klik apabila dipijak.",
      "Tepi papan yang boleh anda angkat dengan kuku.",
      "Lantai berbunyi kosong di satu kawasan dan padat di kawasan lain.",
    ],
    solutions: [
      { title: "Periksa ruang perimeter dahulu", description: "Kami mengangkat skirting atau bingkai di beberapa titik untuk melihat sama ada lantai ada ruang untuk bergerak. Ruang yang terhalang atau tiada ialah punca paling biasa dan paling mudah dibetulkan." },
      { title: "Ratakan lantai bawah jika perlu", description: "Lekukan dan bahagian tinggi dibetulkan dengan bahan perata supaya papan disokong sepenuhnya, bukan merentangi rongga." },
      { title: "Pasang semula kawasan terjejas", description: "Papan diangkat, sambungan diperiksa dan dikunci semula, dan kawasan itu dipasang semula. Papan rosak diganti." },
      { title: "Tangani lembapan jika ada", description: "Jika lembapan di bawah lantai menyumbang, itu ditangani dahulu — jika tidak, lantai yang dipasang semula akan terangkat lagi." },
    ],
    whenToCall: [
      "Rabung telah terbentuk sehingga kaki anda boleh tersadung.",
      "Celah semakin melebar dan bukan kekal sama.",
      "Keterangkatan merebak merentasi bilik.",
      "Anda boleh merasa pergerakan atau mendengar bunyi klik di kawasan luas.",
      "Lantai masih dalam waranti dan anda mahu puncanya didokumentasikan sebelum bertindak.",
    ],
    relatedServiceNote:
      "Papan terangkat dan terpisah dikendalikan oleh pasukan lantai kami, yang akan mengenal pasti sama ada puncanya ruang pengembangan, lantai bawah atau lembapan sebelum memasang semula apa-apa.",
    processTitle: "Bagaimana Kami Membaiki Papan Lantai Terangkat",
    processIntro:
      "Ini kerja diagnosis. Memasang semula papan tanpa mencari kenapa ia terangkat menghasilkan lantai yang terangkat lagi.",
    processSteps: [
      { title: "Periksa ruang, lantai bawah dan lembapan", description: "Kami memeriksa ruang pengembangan perimeter, menguji kerataan lantai bawah dan mencari tanda lembap di bawah." },
      { title: "Angkat papan terjejas", description: "Papan di zon terjejas diangkat supaya lantai bawah dan sambungan boleh dinilai dengan betul." },
      { title: "Betulkan puncanya", description: "Ruang pengembangan dipotong semula, lantai bawah diratakan, atau isu lembapan ditangani mengikut diagnosis." },
      { title: "Pasang semula dan pulihkan", description: "Papan dipasang semula dengan sambungan dikunci penuh dan ruang perimeter betul, dan bingkai dipasang semula supaya ruang kekal tersembunyi tetapi bebas." },
    ],
    faqs: [
      { question: "Kenapa rabung muncul di tengah lantai saya?", answer: "Itu dipanggil peaking, bermakna lantai telah mengembang tetapi tiada tempat untuk pergi, jadi ia terbonjol ke atas pada sambungan. Puncanya hampir selalu ruang pengembangan perimeter — sama ada ia tidak pernah ditinggalkan, atau sesuatu kini menghalangnya, seperti skirting yang dipaku menembusi papan atau unit terpasang yang berat. Membebaskan ruang itu biasanya membolehkan lantai turun semula." },
      { question: "Adakah celah antara papan satu kecacatan lantai?", answer: "Biasanya bukan papan itu sendiri. Celah terbuka apabila sambungan click tidak dikunci sepenuhnya semasa pemasangan, apabila lantai bawah tidak rata jadi papan melentur berpisah, atau apabila lantai mengecut dalam bilik berhawa dingin kuat. Berbaloi didiagnosis sebelum membuat tuntutan waranti, kerana kebanyakan punca berkaitan pemasangan, bukan kecacatan produk." },
      { question: "Perlukah saya menggantikan keseluruhan lantai?", answer: "Jarang sekali. Dalam kebanyakan kes kami mengangkat zon terjejas, membetulkan puncanya dan memasang semula papan yang sama. Penggantian penuh hanya masuk akal apabila papan itu sendiri rosak di kawasan luas, atau apabila lantai bawah ternyata memerlukan kerja besar." },
      { question: "Lantai saya elok selama dua tahun dan baru mula terangkat sekarang. Kenapa?", answer: "Kerana puncanya terkumpul. Ruang pengembangan yang marginal akan bertahan sehingga tempoh panas luar biasa; pelekat yang lemah akibat lantai bawah sedikit lembap terlepas secara beransur; kabinet baharu yang berat boleh menekan lantai yang sebelumnya bebas bergerak. Permulaan yang lewat adalah sangat normal dan tidak bermakna tiada apa-apa yang salah semasa pemasangan." },
      { question: "Bolehkah perabot berat menyebabkan ini?", answer: "Ya, dan ia sering dipandang ringan. Lantai terapung perlu bergerak sebagai satu kepingan. Almari berat atau unit terpasang yang duduk atas papan menekan bahagian itu, jadi apabila lantai lain mengembang, ia terpaksa terbonjol di suatu tempat. Jika boleh, unit terpasang berat patut duduk atas lantai bawah dengan lantai dipasang sehingga ke tepinya." },
    ],
  },
  "hollow-flooring": {
    ...base,
    name: "Lantai Berbunyi Kosong",
    title: "Renovix Home Services | Pembaikan Lantai Kosong di KL & Selangor",
    metaDescription:
      "Lantai yang berbunyi kosong apabila dipijak di Kuala Lumpur & Selangor. Ketahui maksud bunyi kosong bagi SPC, vinyl, laminate dan jubin, bila ia penting dan cara lantai bawah dibetulkan.",
    h1: "Lantai Berbunyi Kosong",
    subtitle:
      "Bunyi kosong bermakna lantai tidak disokong sepenuhnya di bawah — sama ada itu penting atau tidak bergantung sepenuhnya pada jenis lantai anda.",
    whatItMeans: [
      "Apabila anda mengetuk atau memijak lantai dan ia berbunyi kosong, anda sedang mendengar rongga antara permukaan yang anda pijak dan struktur di bawahnya. Udara pengalir bunyi yang lemah, jadi nada berdentum memberitahu anda kedua-duanya tidak bersentuhan berterusan. Dari mana rongga itu datang, dan sama ada ia masalah, bergantung pada jenis lantai.",
      "Bagi lantai terapung — SPC, vinyl atau laminate atas underlay — sedikit bunyi kosong adalah normal sepenuhnya dan bukan kecacatan. Papan itu memang sengaja tidak dilekatkan pada lantai bawah. Yang tidak normal ialah satu bahagian kosong yang jelas dalam lantai yang selainnya konsisten, kerana itu menunjukkan lekukan pada lantai bawah. Bagi jubin, kekosongan lebih serius: ia bermakna ikatan pelekat telah gagal atau tidak pernah dicapai sepenuhnya, dan jubin kosong akan retak serta terangkat lama-kelamaan.",
    ],
    commonCauses: [
      "Lantai bawah tidak rata meninggalkan lekukan yang direntangi oleh lantai.",
      "Bahan perata yang telah retak atau hancur di bawah lantai.",
      "Underlay yang termampat, koyak atau beralih semasa pemasangan.",
      "Bagi jubin, liputan pelekat tidak mencukupi — ikatan bintik dan bukan lapisan penuh.",
      "Kegagalan ikatan pelekat dari masa ke masa, selalunya dipercepatkan oleh lembapan.",
      "Lembapan di bawah lantai yang merosakkan underlay atau ikatan.",
      "Akustik lantai terapung yang normal, yang bukan kecacatan.",
    ],
    warningSigns: [
      "Satu kawasan yang jelas kosong dalam lantai yang selainnya berbunyi padat.",
      "Rasa lembut atau melantun apabila anda memijak titik kosong.",
      "Kawasan kosong yang membesar dari masa ke masa.",
      "Jubin retak atau longgar dalam zon berbunyi kosong.",
      "Bunyi berkeriut atau klik yang mengiringi bunyi kosong.",
    ],
    solutions: [
      { title: "Petakan kawasan kosong", description: "Kami mengetuk lantai untuk menentukan luas rongga, kerana saiz dan lokasinya menentukan sama ada ia memerlukan kerja langsung." },
      { title: "Bezakan normal daripada cacat", description: "Bagi lantai terapung, kami akan memberitahu anda dengan jujur apabila bunyi kosong itu sekadar cara lantai dibina dan tidak memerlukan apa-apa." },
      { title: "Angkat dan ratakan lantai bawah", description: "Jika terdapat lekukan sebenar, lantai diangkat dan lantai bawah diratakan supaya permukaan disokong sepenuhnya." },
      { title: "Pasang semula jubin kosong", description: "Jubin kosong diangkat dan dipasang semula atas lapisan pelekat penuh, kerana jubin kosong akhirnya akan retak di bawah beban." },
    ],
    whenToCall: [
      "Kawasan kosong terasa lembut atau melantun apabila dipijak.",
      "Jubin dalam zon kosong telah retak atau menjadi longgar.",
      "Bahagian kosong sedang merebak.",
      "Kekosongan muncul selepas kebocoran atau tumpahan.",
      "Anda tidak pasti sama ada apa yang anda dengar itu normal bagi jenis lantai anda.",
    ],
    relatedServiceNote:
      "Pasukan lantai kami menilai lantai kosong dan meratakan lantai bawah jika perlu; jubin kosong dikendalikan bersama pasukan jubin kami.",
    processTitle: "Bagaimana Kami Menangani Lantai Kosong",
    processIntro:
      "Kerja pertama ialah menentukan sama ada wujud masalah langsung, kerana bagi lantai terapung selalunya tidak.",
    processSteps: [
      { title: "Ketuk lantai", description: "Kami mengetuk merentasi kawasan untuk memetakan dengan tepat di mana kekosongan berada dan sejauh mana ia meluas." },
      { title: "Kenal pasti binaan lantai", description: "Kami menentukan sama ada ia lantai terapung, lantai berpelekat atau jubin, kerana setiap satu ada piawaian boleh terima berbeza." },
      { title: "Angkat dan betulkan jika perlu", description: "Jika rongga sebenar wujud, permukaan diangkat, lantai bawah diratakan atau jubin dipasang semula atas lapisan pelekat penuh." },
      { title: "Pulihkan dan periksa semula", description: "Lantai dipasang semula dan diketuk sekali lagi untuk mengesahkan rongga sudah tiada." },
    ],
    faqs: [
      { question: "Lantai SPC saya berbunyi kosong di mana-mana. Adakah pemasangannya buruk?", answer: "Hampir pasti tidak. SPC, vinyl dan laminate ialah lantai terapung — ia duduk atas underlay dan sengaja tidak dilekatkan pada lantai bawah, jadi bunyi kosong atau berdentum yang konsisten di seluruh lantai memang begitulah ia dibina. Yang membimbangkan kami ialah satu bahagian kosong yang jelas dalam lantai yang selainnya sekata, yang menunjukkan lekukan di bawah." },
      { question: "Sejauh mana seriusnya jubin kosong?", answer: "Lebih serius berbanding lantai terapung kosong, kerana jubin bergantung pada sentuhan penuh dengan lapisan pelekatnya untuk kekuatan. Jubin kosong tidak disokong, jadi ia melentur di bawah trafik kaki dan akhirnya retak atau menjadi longgar. Satu jubin kosong di sudut kurang trafik selalunya boleh dipantau; jubin kosong di laluan berjalan berbaloi dipasang semula." },
      { question: "Bolehkah bahagian kosong diisi tanpa mengangkat lantai?", answer: "Bagi jubin ada teknik suntikan, tetapi ia tidak boleh diharap dalam setiap keadaan dan kami tidak akan mempersembahkannya sebagai penyelesaian terjamin. Bagi lantai terapung, pengisian tidak mungkin tanpa mengangkat, kerana tiada laluan ke rongga itu. Dalam kebanyakan kes, mengangkat kawasan terjejas dan meratakan lantai bawah dengan betul ialah pembaikan yang tahan lama." },
      { question: "Adakah lantai kosong akan menjadi lebih teruk?", answer: "Kawasan kosong yang berpunca daripada lekukan tetap pada lantai bawah cenderung kekal sama. Yang berpunca daripada kegagalan pelekat atau lembapan biasanya merebak, kerana keadaan yang sama terus bertindak pada kawasan sekeliling. Jika bahagian kosong semakin membesar, itu sebab untuk menyiasat dan bukan menunggu." },
      { question: "Adakah underlay menghentikan bunyi kosong?", answer: "Underlay akustik yang lebih berkualiti atau lebih tebal memang mengurangkan bunyi berdentum lantai terapung dengan ketara, dan berbaloi ditetapkan jika bunyi itu mengganggu anda. Namun ia tidak akan membetulkan kekosongan akibat lantai bawah tidak rata — itu perlu diratakan sebelum lantai dipasang." },
    ],
  },
  "squeaky-flooring": {
    ...base,
    name: "Lantai Berdecit atau Berkeriut",
    title: "Renovix Home Services | Pembaikan Lantai Berdecit di KL & Selangor",
    metaDescription:
      "Lantai SPC, vinyl dan laminate yang berdecit dan berkeriut di Kuala Lumpur & Selangor. Ketahui punca bunyi, kenapa ia biasanya menunjuk kepada lantai bawah dan cara ia dibaiki.",
    h1: "Lantai Berdecit atau Berkeriut",
    subtitle:
      "Decitan ialah geseran — dua permukaan bergesel yang sepatutnya tidak. Ia menjengkelkan dan bukan berbahaya, tetapi ia biasanya menunjuk kepada sesuatu yang berbaloi dibetulkan.",
    whatItMeans: [
      "Bunyi lantai datang daripada pergerakan. Apabila anda memijak lantai terapung, berat anda menolak papan turun sedikit; jika papan disokong sepenuhnya oleh lantai bawah yang rata, tiada apa yang bergesel dan tiada bunyi. Jika ada lekukan di bawah, papan melentur masuk dan keluar daripadanya, dan sambungan antara papan — atau papan terhadap pengikat, paip atau serpihan tertinggal — bergesel dan berdecit.",
      "Sebab itulah decitan lebih kerap mesej daripada lantai bawah berbanding kecacatan lantai. Papan itu melakukan apa yang ia direka; sokongan di bawahnya yang tidak melakukan bahagiannya. Pengecualiannya ialah sambungan yang tidak pernah dikunci penuh, dan lantai yang dipasang terlalu rapat pada dinding atau bingkai pintu sehingga bergesel apabila ia mengembang.",
    ],
    commonCauses: [
      "Lantai bawah tidak rata membiarkan papan melentur pada setiap langkah.",
      "Sambungan click tidak dikunci sepenuhnya semasa pemasangan.",
      "Serpihan, habuk atau kepala skru terperangkap di bawah lantai semasa pemasangan.",
      "Underlay yang termampat, koyak atau berkumpul.",
      "Lantai bergesel pada dinding, bingkai pintu atau paip kerana ruang pengembangan terlalu rapat.",
      "Bagi lantai bawah kayu, papan longgar atau pengikat yang terlepas.",
      "Pergerakan berkaitan lembapan yang telah meherotkan papan atau lantai bawah.",
    ],
    warningSigns: [
      "Decitan atau keriutan di satu tempat yang berulang setiap kali dipijak.",
      "Bunyi klik, yang biasanya menunjuk kepada sambungan dan bukan lantai bawah.",
      "Lenturan yang dapat dirasa — lantai memberi sedikit apabila dipijak.",
      "Bunyi yang merebak ke kawasan baharu dari masa ke masa.",
      "Decitan yang bermula selepas kebocoran, tumpahan atau perabot baharu diletakkan.",
    ],
    solutions: [
      { title: "Cari bunyi dengan tepat", description: "Kami menentukan titik tepatnya dan sama ada ia sambungan, rongga di bawah, atau lantai bergesel di tepi — ketiga-tiganya perlu penyelesaian berbeza." },
      { title: "Bebaskan tepi yang bergesel", description: "Jika lantai bergesel pada dinding, bingkai atau paip, ruang pengembangan dipotong semula dan disembunyikan di bawah bingkai." },
      { title: "Angkat dan ratakan lekukan", description: "Jika papan melentur ke dalam lekukan, kawasan itu diangkat dan lantai bawah diratakan supaya papan disokong dengan betul." },
      { title: "Kunci semula atau ganti sambungan", description: "Sambungan yang tidak pernah dikunci penuh dipasang semula; tepi papan yang rosak diganti." },
    ],
    whenToCall: [
      "Decitan disertai pergerakan atau lenturan apabila dipijak.",
      "Kawasan berbunyi sedang merebak.",
      "Ia bermula selepas kerosakan air atau kebocoran.",
      "Lantai masih baharu dan bunyi muncul tidak lama selepas pemasangan.",
      "Bunyi itu cukup mengganggu anda sehingga anda mahu ia hilang — itu sebab yang sah dengan sendirinya.",
    ],
    relatedServiceNote:
      "Pasukan lantai kami menjejaki bunyi lantai kepada puncanya dan membetulkan lantai bawah, sambungan atau butiran tepi mengikut diagnosis.",
    processTitle: "Bagaimana Kami Membaiki Lantai Berdecit",
    processIntro:
      "Mencari punca dengan tepat ialah sebahagian besar kerja — pembaikan fizikalnya biasanya mudah setelah anda tahu yang mana antara tiga punca itu.",
    processSteps: [
      { title: "Berjalan dan petakan bunyi", description: "Kami merentasi lantai untuk menentukan setiap titik berbunyi dan mencatat sama ada ia berklik, berkeriut atau bergesel." },
      { title: "Periksa tepi dan ruang", description: "Bingkai ditanggalkan di tepi terdekat supaya kami boleh melihat sama ada lantai bergesel pada dinding atau bingkai." },
      { title: "Angkat dan betulkan", description: "Papan terjejas diangkat, sebarang serpihan dibuang, lantai bawah diratakan dan underlay dibaiki." },
      { title: "Pasang semula dan uji jalan", description: "Papan dipasang semula dengan sambungan dikunci penuh, dan kami berjalan di kawasan itu semula untuk mengesahkan bunyi sudah hilang." },
    ],
    faqs: [
      { question: "Adakah lantai berdecit satu masalah struktur?", answer: "Sangat jarang. Dalam majoriti besar kes ia geseran antara lantai dan lantai bawah yang tidak rata, atau antara lantai dan sesuatu yang ia bergesel di tepi — kedua-duanya tidak menjejaskan struktur bangunan. Ia berbaloi diperiksa jika disertai lenturan ketara apabila dipijak, kerana itu menunjukkan rongga yang lebih besar." },
      { question: "Bolehkah bedak talkum atau pelincir membetulkan decitan?", answer: "Ia petua rumah yang terkenal dan boleh mendiamkan sambungan buat sementara, kerana ia mengurangkan geseran yang menghasilkan bunyi. Ia tidak menangani lenturan yang menyebabkan geseran itu, jadi bunyi biasanya kembali. Kami menganggapnya penyelesaian sementara, bukan pembaikan." },
      { question: "Lantai baharu saya berdecit. Adakah itu kesilapan pemasangan?", answer: "Mungkin sekali. Punca pemasangan paling biasa ialah lantai bawah yang tidak diratakan terlebih dahulu, sambungan yang tidak dikunci penuh, dan ruang pengembangan terlalu rapat sehingga lantai bergesel pada dinding atau bingkai pintu. Jika lantai baru dipasang, wajar anda membangkitkannya dengan pemasang asal sebelum mengatur kerja lain." },
      { question: "Adakah decitan akan hilang sendiri?", answer: "Umumnya tidak — keadaan yang menyebabkannya tidak membetulkan diri, dan trafik cenderung mengauskan titik sentuhan itu lebih lanjut. Sedikit variasi bermusim adalah normal apabila kelembapan berubah, jadi decitan mungkin datang dan pergi, tetapi yang berterusan di satu tempat tetap akan kekal sehingga puncanya ditangani." },
      { question: "Perlukah saya mengangkat seluruh lantai untuk membetulkan satu titik berdecit?", answer: "Tidak. Lantai click-lock boleh diangkat dari dinding terdekat sehingga ke kawasan terjejas, dibetulkan, dan dipasang semula. Hanya papan antara dinding itu dan titik berbunyi yang diganggu, jadi satu decitan di tengah bilik tidak bermakna mengulang keseluruhannya." },
    ],
  },
};
