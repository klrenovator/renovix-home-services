import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "Kondominium", note: "Pembaikan jubin bilik air, dapur dan balkoni dalam unit bertingkat tinggi, termasuk jubin berongga atau rosak akibat air." },
  { label: "Pangsapuri", note: "Pembaikan jubin setempat untuk lantai, dinding dan kawasan basah pangsapuri." },
  { label: "Rumah Teres", note: "Pembaikan dan penggantian jubin di ruang tamu, dapur dan bilik air rumah landed." },
  { label: "Semi-D & Banglo", note: "Skop lebih luas termasuk kawasan luar yang terdedah kepada cuaca dan lalu lalang." },
  { label: "Kedai & Pejabat", note: "Pembaikan jubin di ruang niaga yang digunakan sepanjang waktu operasi." },
  { label: "Rumah Baharu", note: "Membaiki kecacatan atau jubin rosak di rumah yang baru diserahkan sebelum berpindah." },
];

const areasNote =
  "Pembaikan dan penggantian jubin tersedia di seluruh Kuala Lumpur, Selangor dan Lembah Klang — daripada kondominium di tengah bandar sehingga rumah landed di pinggir bandar.";

const propertyTypesIntro =
  "Kami membaiki jubin di semua jenis hartanah di KL dan Selangor. Ini cara kerja itu berbeza mengikut jenis rumah anda.";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "broken-tile-repair": {
    ...base,
    name: "Pembaikan Jubin Pecah",
    title: "Renovix Home Services | Pembaikan Jubin Pecah di KL & Selangor",
    metaDescription:
      "Jubin pecah, sumbing atau retak teruk dibaiki dan diganti di Kuala Lumpur & Selangor tanpa menjubin semula seluruh lantai. Punca, tanda amaran dan penyelesaian.",
    h1: "Pembaikan Jubin Pecah",
    subtitle:
      "Sekeping jubin pecah tidak bermakna anda perlu menjubin semula. Renovix menggantikan jubin rosak dengan kemas dan memadankannya dengan lantai atau dinding sekeliling.",
    whatItMeans: [
      "Jubin pecah ialah jubin yang sumbing, retak menembusi atau hancur — biasanya pada permukaannya. Ia mungkin hanya sumbing kecil di sudut, atau jubin yang terbelah merentasi permukaan. Berbeza dengan retak halus, jubin pecah sudah kehilangan bahan atau terbelah sepenuhnya, jadi ia tidak akan bertahan dengan sendirinya.",
      "Jubin pecah ialah masalah biasa di rumah Kuala Lumpur dan Selangor. Kerana jubin keras dan tidak lentur, hentakan kuat atau pergerakan di bawahnya boleh memecahkannya. Membiarkannya bukan sekadar soal rupa: permukaan terdedah akan mengumpul kotoran dan kelembapan, membenarkan air sampai ke pelekat dan lapisan bawah, dan akhirnya melonggarkan jubin bersebelahan.",
    ],
    commonCauses: [
      "Objek berat terjatuh ke atas jubin, seperti periuk, alatan atau perabot.",
      "Pergerakan atau enapan pada lantai, dinding atau screed di bawah jubin.",
      "Pemasangan asal yang lemah dengan pelekat tidak mencukupi.",
      "Pergerakan haba di balkoni atau kawasan luar yang terdedah kepada panas dan hujan.",
      "Hentakan seperti pintu yang terhayun ke jubin atau peralatan berat yang dialihkan.",
      "Usia dan haus, terutamanya pada jubin seramik nipis di kawasan sibuk.",
    ],
    warningSigns: [
      "Sumbing, belahan atau lubang yang jelas kelihatan pada permukaan jubin.",
      "Jubin terasa longgar atau berbunyi kosong apabila diketuk.",
      "Retak yang merebak daripada jubin pecah ke jubin bersebelahan.",
      "Tepi tajam yang boleh mencederakan, atau jubin yang bergerak apabila dipijak.",
    ],
    solutions: [
      { title: "Penggantian sekeping jubin", description: "Jubin pecah dikeluarkan dengan berhati-hati, lapisan bawah dibersihkan, dan jubin padanan dipasang dengan pelekat serta grout baharu tanpa mengganggu kawasan lain." },
      { title: "Memadankan jubin ganti", description: "Kami memadankan saiz, kemasan dan warna sedekat mungkin. Jika jubin asal sudah tidak dikeluarkan, kami cadangkan pilihan paling hampir." },
      { title: "Membaiki punca, bukan hanya jubin", description: "Jika jubin pecah kerana lapisan bawah berongga atau screed bergerak, punca itu diselesaikan supaya jubin baharu tidak gagal semula." },
      { title: "Grouting semula selepas penggantian", description: "Selepas jubin baharu melekat, sambungan di-grout semula supaya pembaikan menyatu dengan permukaan sekeliling." },
    ],
    whenToCall: [
      "Jubin sudah hancur atau pecahannya mendedahkan tepi jubin bersebelahan.",
      "Jubin berongga atau longgar apabila dipijak, tanda masalah pada lapisan bawah.",
      "Anda tidak dapat mencari jubin padanan dan perlukan bantuan mengenal pasti pilihan sesuai.",
      "Kawasan terjejas berdekatan air, seperti bilik air, pancuran atau dapur.",
    ],
    relatedServiceNote:
      "Pembaikan jubin pecah dikendalikan oleh pasukan jubin kami. Kami juga menyelaraskan kerja kalis air jika kebocoran menjadi punca kegagalan jubin tersebut.",
    processTitle: "Cara Kami Membaiki Jubin Pecah",
    processIntro:
      "Menggantikan sekeping jubin ialah kerja yang halus. Ini urutan yang kami ikuti supaya pembaikan itu kukuh dan menyatu dengan permukaan sekeliling.",
    processSteps: [
      { title: "Periksa jubin dan lapisan bawah", description: "Kami menyemak tahap kerosakan, sama ada jubin berongga, dan sejauh mana kawasan sekeliling terjejas." },
      { title: "Padankan jubin", description: "Saiz, kemasan dan warna jubin sekeliling dikenal pasti dan padanan terdekat dicari." },
      { title: "Keluarkan dan lekat semula", description: "Jubin pecah dikeluarkan, pelekat lama dibersihkan dan lapisan bawah disediakan sebelum jubin baharu dipasang." },
      { title: "Grout dan kemas", description: "Sambungan di-grout, permukaan dibersihkan dan kawasan kerja dikemas." },
    ],
    faqs: [
      { question: "Boleh jubin pecah dibaiki tanpa diganti?", answer: "Sumbing yang sangat kecil kadangkala boleh diisi supaya kurang ketara, tetapi ia bukan pembaikan kekal. Jika jubin sudah terbelah atau kehilangan bahan, menggantikannya adalah penyelesaian yang betul." },
      { question: "Perlukah tukar seluruh lantai jika satu jubin pecah?", answer: "Tidak. Sekeping jubin boleh dikeluarkan dan diganti tanpa mengganggu jubin sekeliling. Menjubin semula hanya perlu jika kerosakan sudah meluas atau lapisan bawah gagal." },
      { question: "Boleh padankan jubin lama atau yang sudah tidak dikeluarkan?", answer: "Kami akan cuba mencari padanan terdekat dari segi saiz, warna dan kemasan. Jika anda ada simpanan jubin lebihan dari pemasangan asal, itu pilihan terbaik." },
      { question: "Berapa lama masa untuk mengganti jubin pecah?", answer: "Untuk beberapa keping jubin, kerja biasanya boleh disiapkan dalam satu lawatan, tetapi grout dan pelekat memerlukan masa mengering sebelum kawasan itu digunakan semula." },
      { question: "Kenapa jubin saya pecah walaupun tiada apa-apa terhempas?", answer: "Selalunya kerana jubin itu berongga atau screed di bawahnya bergerak. Tanpa sokongan penuh, berat biasa pun sudah cukup untuk memecahkannya." },
    ],
  },
  "cracked-tile-repair": {
    ...base,
    name: "Pembaikan Jubin Retak",
    title: "Renovix Home Services | Pembaikan Jubin Retak di KL & Selangor",
    metaDescription:
      "Jubin retak dibaiki atau diganti di Kuala Lumpur & Selangor selepas puncanya dikenal pasti. Ketahui punca, tanda amaran dan penyelesaian yang sesuai.",
    h1: "Pembaikan Jubin Retak",
    subtitle:
      "Retak halus pada jubin cenderung merebak. Renovix mencari puncanya dan membaiki atau menggantikan jubin retak sebelum ia gagal sepenuhnya.",
    whatItMeans: [
      "Jubin retak mempunyai keretakan pada permukaannya tetapi belum tentu terbelah. Ia boleh berupa retak halus seperti calar, atau retak panjang merentasi jubin. Jubin retak biasanya masih satu keping — tetapi ia sudah tidak lagi kalis air atau kukuh.",
      "Retak jarang berlaku tanpa sebab. Ia biasanya menunjukkan sesuatu bergerak di bawah jubin, atau jubin itu tidak disokong sepenuhnya oleh pelekat. Sebab itu kami mengesahkan punca dahulu sebelum membaiki, supaya jubin ganti tidak retak semula dalam beberapa bulan.",
    ],
    commonCauses: [
      "Enapan atau pergerakan pada screed atau asas di bawah jubin.",
      "Jubin berongga yang melentur di bawah beban dan akhirnya retak.",
      "Pengembangan dan pengecutan haba di balkoni atau lantai luar.",
      "Beban berat yang tertumpu pada satu titik di atas jubin.",
      "Pergerakan struktur pada dinding atau lantai, seperti berhampiran rasuk atau kusen pintu.",
      "Saiz sambungan yang salah atau pelekat yang tidak dicampur dengan betul semasa pemasangan asal.",
    ],
    warningSigns: [
      "Retak merentasi jubin yang semakin panjang dari masa ke masa.",
      "Bunyi berkeriut atau berdetik apabila jubin dipijak.",
      "Retak yang muncul dalam satu garisan merentasi beberapa jubin, tanda pergerakan.",
      "Retak berhampiran garisan grout yang semakin melebar dan memasukkan air.",
    ],
    solutions: [
      { title: "Kenal pasti punca dahulu", description: "Kami menyemak sama ada retak itu disebabkan pergerakan struktur, lapisan berongga atau hentakan setempat sebelum memutuskan pembaikan." },
      { title: "Baiki atau ganti jubin", description: "Retak halus tunggal kadangkala boleh diisi, tetapi kebanyakan jubin retak lebih baik diganti supaya permukaan kembali kalis air." },
      { title: "Melekat semula jubin berongga", description: "Jika jubin berongga, ia dikeluarkan dan dilekat semula pada lapisan yang disediakan supaya ia tidak melentur lagi." },
      { title: "Grout semula dan tutup", description: "Sambungan di-grout semula supaya air tidak lagi masuk melalui retakan lama." },
    ],
    whenToCall: [
      "Retak semakin melebar atau retak baharu terus muncul.",
      "Jubin turut berbunyi kosong atau bergerak sedikit apabila dipijak.",
      "Retak berada di kawasan basah dan air sedang masuk ke dalamnya.",
      "Anda melihat garisan retak yang boleh menunjukkan pergerakan struktur.",
    ],
    relatedServiceNote:
      "Pembaikan jubin retak dikendalikan oleh pasukan jubin kami, dan kami menyelaraskan kerja kalis air jika retak itu berada di kawasan basah.",
    processTitle: "Cara Kami Mengendalikan Jubin Retak",
    processIntro:
      "Retak ialah gejala. Urutan ini memastikan kami membaiki punca dan bukan hanya permukaannya.",
    processSteps: [
      { title: "Periksa retakan", description: "Kami menyemak arah, panjang dan corak retak untuk memahami apa yang menyebabkannya." },
      { title: "Semak lapisan bawah", description: "Jubin diketuk untuk mengesan rongga dan memastikan pelekat masih melekat." },
      { title: "Baiki atau ganti", description: "Jubin diganti atau dilekat semula mengikut keadaan sebenar." },
      { title: "Pantau dan kemas", description: "Kawasan di-grout, dibersihkan dan kami maklumkan tanda yang perlu diperhatikan." },
    ],
    faqs: [
      { question: "Boleh retak halus diisi tanpa menukar jubin?", answer: "Untuk retak sangat halus di kawasan kering, pengisi warna sepadan boleh menjadikannya kurang ketara. Di kawasan basah, penggantian lebih selamat kerana retak tetap membenarkan air masuk." },
      { question: "Adakah jubin retak akhirnya akan pecah?", answer: "Selalunya ya, terutamanya jika ia berada di laluan berjalan atau di atas lapisan berongga. Retak akan melebar setiap kali beban dikenakan." },
      { question: "Kenapa beberapa jubin retak dalam satu garisan?", answer: "Retak dalam satu garisan lurus biasanya menunjukkan pergerakan pada lantai atau screed di bawahnya, bukan kerosakan pada jubin itu sendiri." },
      { question: "Perlukah jubin balkoni yang retak dibaiki segera?", answer: "Ya. Balkoni terdedah kepada hujan, jadi retak membenarkan air masuk ke lapisan bawah dan boleh menyebabkan masalah kalis air yang lebih besar." },
      { question: "Berapa banyak kawasan perlu dibuka untuk membaiki retak?", answer: "Biasanya hanya jubin yang terjejas dan kadangkala satu baris di sekelilingnya, bergantung pada keadaan pelekat di bawahnya." },
    ],
  },
  "loose-tile-repair": {
    ...base,
    name: "Pembaikan Jubin Longgar",
    title: "Renovix Home Services | Pembaikan Jubin Longgar di KL & Selangor",
    metaDescription:
      "Jubin longgar dikeluarkan, dilekat semula dan dikukuhkan pada permukaan rata di Kuala Lumpur & Selangor. Ketahui punca, tanda amaran dan penyelesaiannya.",
    h1: "Pembaikan Jubin Longgar",
    subtitle:
      "Jubin longgar boleh beralih, retak dan membenarkan air masuk. Renovix mengeluarkannya, melekat semula dan mengukuhkannya pada permukaan yang rata.",
    whatItMeans: [
      "Jubin longgar ialah jubin yang sudah hilang cengkaman pada lapisan pelekat di bawahnya. Ia mungkin bergerak sedikit apabila dipijak, terasa melentur, atau tepinya sudah terangkat. Jubin longgar selalunya berbunyi kosong apabila diketuk.",
      "Jika dibiarkan, jubin longgar boleh retak, terangkat sepenuhnya, atau membenarkan air sampai ke permukaan dan struktur di bawah. Di kawasan basah, ini boleh berkembang menjadi masalah kalis air yang jauh lebih mahal.",
    ],
    commonCauses: [
      "Liputan pelekat tidak mencukupi semasa jubin mula-mula dipasang.",
      "Lapisan bawah yang berhabuk atau tidak rata sehingga jubin tidak melekat sempurna.",
      "Pergerakan atau enapan pada screed dan lantai di bawahnya.",
      "Kelembapan terperangkap di bawah jubin, selalunya daripada kebocoran berdekatan.",
      "Pergerakan haba di balkoni dan lantai luar.",
      "Jarak sambungan yang tidak sesuai semasa pemasangan asal.",
    ],
    warningSigns: [
      "Jubin yang bergerak atau terasa melentur apabila ditekan.",
      "Bunyi kosong atau berdetuk apabila jubin diketuk.",
      "Sudut atau tepi yang terangkat dan tersangkut pada kaki.",
      "Grout yang mula retak di sekeliling jubin yang dahulunya kukuh.",
    ],
    solutions: [
      { title: "Melekat semula jubin longgar", description: "Jubin dikeluarkan dengan berhati-hati, pelekat lama dibersihkan, dan jubin dilekat semula pada aras yang sama." },
      { title: "Membetulkan lapisan di bawah", description: "Jika lapisan bawah tidak rata atau rapuh, ia disediakan semula supaya jubin mendapat sokongan penuh." },
      { title: "Menyemak kelembapan", description: "Kami memeriksa sama ada air terperangkap di bawah jubin dan maklumkan jika kerja kalis air diperlukan." },
      { title: "Grouting semula sambungan", description: "Sambungan di-grout semula supaya kawasan itu kembali tertutup dan kemas." },
    ],
    whenToCall: [
      "Lebih daripada satu jubin longgar, yang menunjukkan masalah lapisan bawah yang lebih luas.",
      "Jubin turut retak atau tepinya sudah terangkat.",
      "Jubin longgar berada di kawasan basah seperti bilik air atau balkoni.",
      "Lantai berbunyi kosong di kawasan yang lebih besar.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan jubin kami, dengan sokongan kerja kalis air apabila kelembapan menjadi punca jubin longgar.",
    processTitle: "Cara Kami Mengukuhkan Semula Jubin Longgar",
    processIntro: "Melekat semula jubin dengan betul memerlukan lapisan bawah yang bersih dan rata.",
    processSteps: [
      { title: "Kesan dan periksa jubin", description: "Kami mengetuk kawasan sekeliling untuk mengetahui berapa banyak jubin yang terjejas." },
      { title: "Angkat dan bersihkan lapisan", description: "Jubin diangkat dan pelekat lama dikikis sehingga permukaan bersih." },
      { title: "Lekat semula dan ratakan", description: "Jubin dipasang semula pada aras yang sama dengan jubin sekeliling." },
      { title: "Grout dan tutup", description: "Sambungan di-grout dan kawasan dibersihkan sebelum diserahkan." },
    ],
    faqs: [
      { question: "Boleh jubin longgar dilekat semula tanpa dikeluarkan?", answer: "Jarang berjaya. Tanpa mengeluarkan jubin, pelekat lama tidak dapat dibersihkan dan lekatan baharu tidak akan sekata. Mengangkat jubin ialah cara yang lebih tahan lama." },
      { question: "Kenapa jubin longgar bertahun-tahun selepas dipasang?", answer: "Pelekat yang tidak menutup seluruh belakang jubin akan bertahan seketika, tetapi pergerakan, kelembapan dan penggunaan harian akhirnya melemahkan bahagian yang lemah itu." },
      { question: "Adakah jubin longgar menunjukkan masalah lebih besar?", answer: "Kadangkala. Jika beberapa jubin longgar di kawasan yang sama, ia biasanya menunjukkan masalah pada screed atau kelembapan di bawah lantai." },
      { question: "Boleh jubin longgar menyebabkan kerosakan air?", answer: "Boleh, terutamanya di bilik air. Air boleh masuk melalui sambungan yang retak dan bergerak di bawah jubin sehingga ke ruang bersebelahan." },
      { question: "Adakah kesan pembaikan akan kelihatan?", answer: "Jika jubin asal dapat diselamatkan, hasilnya hampir tidak kelihatan. Jika jubin perlu diganti, perbezaan bergantung pada padanan warna yang tersedia." },
    ],
  },
  "hollow-tile-problems": {
    ...base,
    name: "Masalah Jubin Berongga",
    title: "Renovix Home Services | Masalah Jubin Berongga di KL & Selangor",
    metaDescription:
      "Jubin berongga dikesan dan dibaiki di Kuala Lumpur & Selangor sebelum ia terangkat, retak atau membenarkan air masuk. Punca, tanda dan penyelesaian.",
    h1: "Masalah Jubin Berongga",
    subtitle:
      "Jubin berongga bermakna ikatan di bawahnya sudah gagal. Renovix mengesan dan membaikinya sebelum ia terangkat, retak atau membenarkan air masuk.",
    whatItMeans: [
      "Jubin berongga ialah jubin yang pelekatnya tidak melekat penuh pada lapisan bawah, meninggalkan ruang kosong antara jubin dan screed. Dari atas ia kelihatan normal, tetapi apabila diketuk, bunyinya kosong seperti gendang berbanding bunyi padat jubin yang melekat sempurna.",
      "Jubin berongga tidak selalunya perlu diganti serta-merta, tetapi ia lebih mudah retak, terangkat dan membenarkan air bergerak di bawah permukaan. Di kawasan basah, rongga itu menjadi laluan air yang tersembunyi.",
    ],
    commonCauses: [
      "Pelekat yang tidak menutup seluruh belakang jubin semasa pemasangan.",
      "Lapisan bawah yang berhabuk, tidak rata atau terlalu lembut.",
      "Jubin dipasang di atas screed yang belum matang sepenuhnya.",
      "Pergerakan pada screed atau struktur yang memisahkan jubin daripada asasnya.",
      "Kelembapan yang masuk ke bawah jubin dan melemahkan pelekat.",
      "Pengembangan dan pengecutan yang mengangkat jubin sedikit demi sedikit.",
    ],
    warningSigns: [
      "Bunyi kosong apabila jubin diketuk dengan objek ringan.",
      "Bunyi kosong di bahagian tengah jubin, bukan hanya di tepi.",
      "Jubin terasa sedikit melentur apabila ditekan.",
      "Grout retak atau tertanggal di sekeliling jubin yang kelihatan normal.",
    ],
    solutions: [
      { title: "Tinjauan keseluruhan kawasan", description: "Kami mengetuk seluruh lantai untuk memetakan sejauh mana kawasan berongga sebelum mencadangkan skop kerja." },
      { title: "Angkat dan lekat semula jubin berongga", description: "Jubin diangkat, lapisan disediakan semula dan jubin dipasang dengan liputan pelekat penuh." },
      { title: "Ganti jubin yang retak atau rosak", description: "Jubin yang pecah semasa diangkat digantikan dengan padanan terdekat." },
      { title: "Selaras dengan kerja kalis air", description: "Jika kelembapan menjadi punca, kerja kalis air diselaraskan sebelum jubin dipasang semula." },
    ],
    whenToCall: [
      "Bunyi kosong kedengaran di kawasan yang luas.",
      "Jubin berongga turut longgar, retak atau terangkat.",
      "Kawasan berongga berada di bilik air, pancuran atau balkoni.",
      "Anda melihat kelembapan atau resapan berhampiran jubin berongga.",
    ],
    relatedServiceNote:
      "Pasukan jubin kami mengendalikan kerja ini, dengan sokongan kerja kalis air apabila rongga itu berkaitan dengan kelembapan.",
    processTitle: "Cara Kami Membaiki Jubin Berongga",
    processIntro: "Memetakan kawasan berongga dahulu mengelakkan kerja diulang beberapa kali.",
    processSteps: [
      { title: "Petakan kawasan berongga", description: "Setiap jubin diketuk dan kawasan berongga ditanda." },
      { title: "Angkat jubin terjejas", description: "Jubin diangkat dengan berhati-hati supaya boleh digunakan semula jika elok." },
      { title: "Sediakan semula lapisan", description: "Pelekat lama dibersihkan dan permukaan diratakan." },
      { title: "Pasang semula dan grout", description: "Jubin dipasang dengan liputan penuh, kemudian di-grout dan dibersihkan." },
    ],
    faqs: [
      { question: "Bagaimana saya boleh menyemak jubin berongga sendiri?", answer: "Ketuk permukaan jubin dengan buku jari atau syiling dan dengar perbezaannya. Bunyi padat bermakna lekatan baik; bunyi kosong bermakna terdapat ruang di bawahnya." },
      { question: "Adakah semua jubin berongga perlu diganti?", answer: "Tidak. Jubin berongga yang masih rata, tidak retak dan berada di kawasan kering boleh dipantau. Yang berada di kawasan basah atau sudah bergerak patut dibaiki." },
      { question: "Adakah jubin berongga berbahaya?", answer: "Ia bukan bahaya serta-merta, tetapi jubin berongga lebih mudah pecah secara tiba-tiba dan meninggalkan tepi tajam." },
      { question: "Boleh rongga diisi dengan menyuntik pelekat?", answer: "Kaedah suntikan wujud, tetapi hasilnya tidak konsisten kerana sukar memastikan pelekat mengisi seluruh rongga. Mengangkat dan melekat semula lebih boleh diharap." },
      { question: "Jika keseluruhan lantai berbunyi kosong, apa patut saya buat?", answer: "Itu menunjukkan masalah pemasangan atau screed yang meluas. Dalam kes begini, menjubin semula kawasan tersebut biasanya lebih menjimatkan berbanding pembaikan berulang." },
    ],
  },
  "uneven-tiles": {
    ...base,
    name: "Jubin Tidak Rata",
    title: "Renovix Home Services | Jubin Tidak Rata di KL & Selangor",
    metaDescription:
      "Jubin tidak rata dan lippage dibetulkan di Kuala Lumpur & Selangor dengan kerja leveling dan screeding. Ketahui punca, tanda amaran dan penyelesaian.",
    h1: "Jubin Tidak Rata",
    subtitle:
      "Jubin pada ketinggian berbeza menyebabkan risiko tersadung dan tempat kotoran serta air bertakung. Renovix meratakan lantai dan membetulkan lippage.",
    whatItMeans: [
      "Jubin tidak rata bermaksud jubin duduk pada ketinggian berbeza — keadaan yang dipanggil lippage. Perbezaannya mungkin kecil, tetapi merentasi satu lantai ia menjadi jelas: tepi yang tersangkut pada kaki, lekuk tempat air dan habuk berkumpul, dan kemasan yang nampak tidak siap.",
      "Punca hampir selalunya berada di bawah jubin: screed yang tidak diratakan, pelekat yang tidak sekata, atau kerja yang dibuat tergesa-gesa. Sebab itu penyelesaiannya bukan sekadar menukar jubin, tetapi membetulkan aras di bawahnya.",
    ],
    commonCauses: [
      "Screed atau asas lantai yang tidak diratakan sebelum kerja jubin.",
      "Ketebalan jubin yang tidak konsisten atau jubin yang bengkok digunakan bersama.",
      "Jubin dipasang tanpa leveling clip atau spacer.",
      "Pelekat disapu dengan ketebalan yang tidak sekata.",
      "Enapan atau pergerakan pada asas selepas jubin dipasang.",
      "Kerja yang dipercepatkan untuk menjimatkan masa.",
    ],
    warningSigns: [
      "Perbezaan aras yang jelas antara jubin bersebelahan.",
      "Tepi jubin yang tersangkut pada kaki semasa berjalan.",
      "Habuk, serpihan atau air bertakung pada sambungan.",
      "Perabot yang bergoyang di atas lantai yang sepatutnya rata.",
    ],
    solutions: [
      { title: "Leveling dan screeding sebelum menjubin semula", description: "Untuk kawasan yang teruk, asas diratakan semula sebelum jubin baharu dipasang." },
      { title: "Melaraskan jubin secara individu", description: "Jika hanya beberapa keping terlibat, jubin itu diangkat dan dipasang semula pada aras yang betul." },
      { title: "Membetulkan lippage semasa pemasangan", description: "Sistem leveling digunakan semasa memasang supaya permukaan kekal sekata." },
      { title: "Grout dan kemasan sambungan", description: "Sambungan diperbaiki supaya peralihan antara jubin kelihatan kemas." },
    ],
    whenToCall: [
      "Kawasan tidak rata menyebabkan risiko tersadung atau perbezaan aras yang ketara.",
      "Air bertakung di lantai bilik air atau balkoni dan tidak mengalir ke floor trap.",
      "Beberapa jubin terjejas dan lantai kelihatan condong atau melekuk.",
      "Anda merancang kerja jubin baharu dan mahu mengelakkan masalah ini dari awal.",
    ],
    relatedServiceNote:
      "Kerja leveling dan screeding dikendalikan oleh pasukan jubin kami sebagai sebahagian daripada skop pemasangan.",
    processTitle: "Cara Kami Meratakan Jubin Tidak Rata",
    processIntro: "Kami mengukur dahulu supaya penyelesaiannya sepadan dengan tahap masalah.",
    processSteps: [
      { title: "Ukur aras", description: "Kami memeriksa perbezaan ketinggian di seluruh kawasan." },
      { title: "Tentukan pendekatan", description: "Kami cadangkan sama ada melaras beberapa keping atau menjubin semula kawasan itu." },
      { title: "Ratakan asas", description: "Screed atau pengisi leveling digunakan untuk membetulkan aras." },
      { title: "Pasang dan kemas", description: "Jubin dipasang sekata, di-grout dan dibersihkan." },
    ],
    faqs: [
      { question: "Apa itu lippage jubin?", answer: "Lippage ialah perbezaan ketinggian antara tepi dua jubin bersebelahan. Sedikit lippage sukar dielakkan pada jubin besar, tetapi perbezaan yang ketara menunjukkan masalah pemasangan." },
      { question: "Boleh jubin tidak rata dibetulkan tanpa dibuka?", answer: "Untuk perbezaan yang sangat kecil, tepi jubin kadangkala boleh dikisar. Untuk perbezaan yang ketara, jubin perlu diangkat dan dipasang semula." },
      { question: "Adakah lantai tidak rata berbahaya?", answer: "Ia boleh menyebabkan tersadung, terutamanya untuk warga emas dan kanak-kanak, dan menyebabkan air bertakung di kawasan basah." },
      { question: "Berapa kos untuk meratakan lantai sebelum menjubin?", answer: "Ia bergantung pada keluasan dan seberapa teruk perbezaan aras. Kami mengukur di tapak dan memberikan sebut harga sebelum kerja bermula." },
      { question: "Adakah leveling clip menghalang jubin tidak rata?", answer: "Ia banyak membantu semasa pemasangan, tetapi ia tidak boleh membetulkan asas yang memang tidak rata. Persediaan lantai tetap yang paling penting." },
    ],
  },
  "tile-grout-problems": {
    ...base,
    name: "Masalah Grout Jubin",
    title: "Renovix Home Services | Masalah Grout Jubin di KL & Selangor",
    metaDescription:
      "Grout yang retak, rapuh atau berkulat digantikan di Kuala Lumpur & Selangor supaya jubin kekal kukuh dan tertutup. Punca, tanda dan penyelesaian.",
    h1: "Masalah Grout Jubin",
    subtitle:
      "Grout mengikat jubin dan menghalang air. Apabila ia haus atau rapuh, Renovix melakukan grouting semula supaya jubin kekal kukuh dan tertutup.",
    whatItMeans: [
      "Grout ialah bahan yang mengisi sambungan antara jubin. Fungsinya bukan sekadar kemasan: ia mengikat jubin, mengagihkan beban, dan menghalang air serta kotoran daripada sampai ke pelekat dan lapisan bawah.",
      "Apabila grout haus, retak, rapuh atau bernoda, sambungan hilang fungsi perlindungannya. Air mula bergerak di bawah jubin, dan jubin bersebelahan mula longgar satu demi satu.",
    ],
    commonCauses: [
      "Usia dan haus di kawasan yang kerap dilalui.",
      "Grout yang tidak dicampur dengan betul semasa pemasangan asal.",
      "Pengembangan dan pengecutan jubin yang memampatkan grout.",
      "Kelembapan dan bahan pencuci kimia yang menghakis grout.",
      "Saiz sambungan yang terlalu lebar atau terlalu sempit untuk jubin tersebut.",
      "Sealant yang sudah haus sehingga air dan kotoran masuk ke dalam sambungan.",
    ],
    warningSigns: [
      "Grout yang berdebu, rapuh atau tertanggal daripada sambungan.",
      "Noda hitam atau kulat pada grout yang tidak dapat dibersihkan.",
      "Retak di sepanjang garisan grout antara jubin.",
      "Jubin longgar atau berongga muncul di sebelah grout yang gagal.",
    ],
    solutions: [
      { title: "Grouting semula kawasan terjejas", description: "Grout lama dikeluarkan sehingga kedalaman yang mencukupi dan grout baharu diisi." },
      { title: "Menutup grout", description: "Sealant digunakan pada kawasan basah supaya grout lebih tahan noda dan kelembapan." },
      { title: "Membaiki sambungan tertentu", description: "Untuk kerosakan setempat, hanya sambungan yang bermasalah dibaiki." },
      { title: "Menangani puncanya", description: "Jika grout gagal kerana jubin bergerak atau air meresap, punca itu diselesaikan dahulu." },
    ],
    whenToCall: [
      "Grout rapuh sehingga jubin tidak lagi mendapat sokongan.",
      "Kulat pada grout di kawasan basah tidak dapat dibersihkan.",
      "Air meresap melalui sambungan ke lantai di bawah.",
      "Grout gagal bersama jubin yang berongga atau longgar.",
    ],
    relatedServiceNote:
      "Grouting semula dikendalikan oleh pasukan jubin kami, dan kerja kalis air dicadangkan apabila air sudah meresap ke bawah jubin.",
    processTitle: "Cara Kami Melakukan Grouting Semula",
    processIntro: "Grout baharu hanya bertahan jika grout lama dikeluarkan dengan betul.",
    processSteps: [
      { title: "Periksa sambungan", description: "Kami menyemak keadaan grout dan jubin di sekelilingnya." },
      { title: "Keluarkan grout lama", description: "Grout dikorek keluar sehingga kedalaman yang mencukupi." },
      { title: "Isi grout baharu", description: "Grout baharu diisi, dimampatkan dan dikemas pada setiap sambungan." },
      { title: "Tutup dan bersihkan", description: "Permukaan dibersihkan dan sealant disapu jika sesuai." },
    ],
    faqs: [
      { question: "Kenapa grout menjadi rapuh dan tertanggal?", answer: "Biasanya kerana campuran asal terlalu berair, sambungan tidak dimampatkan dengan betul, atau jubin di bawahnya bergerak sedikit setiap kali dipijak." },
      { question: "Boleh grout lama dibersihkan dan bukan diganti?", answer: "Jika grout masih kukuh dan hanya bernoda, pencucian dan penutupan boleh membantu. Jika ia sudah rapuh atau retak, ia perlu diganti." },
      { question: "Berapa lama grouting semula bertahan?", answer: "Dengan penyediaan yang betul dan penutupan di kawasan basah, ia boleh bertahan bertahun-tahun. Kawasan yang sentiasa basah memerlukan penyelenggaraan lebih kerap." },
      { question: "Perlukah grout diganti sebelum kerja kalis air bilik air?", answer: "Jika bilik air akan dikalis air semula, jubin biasanya dibuka, jadi grout baharu akan dipasang sebagai sebahagian daripada kerja itu." },
      { question: "Berbaloikah menutup grout selepas grouting semula?", answer: "Di bilik air dan dapur, ya. Penutup grout mengurangkan penyerapan noda dan memudahkan pembersihan." },
    ],
  },
  "bathroom-tile-problems": {
    ...base,
    name: "Masalah Jubin Bilik Air",
    title: "Renovix Home Services | Masalah Jubin Bilik Air di KL & Selangor",
    metaDescription:
      "Jubin bilik air yang retak, berongga dan rosak akibat air dibaiki di Kuala Lumpur & Selangor, termasuk kerja kalis air. Punca, tanda dan penyelesaian.",
    h1: "Masalah Jubin Bilik Air",
    subtitle:
      "Jubin bilik air menghadapi air, haba dan penggunaan berterusan. Renovix membaiki jubin retak, berongga dan rosak air serta melindungi ruang di bawahnya.",
    whatItMeans: [
      "Jubin bilik air menanggung tekanan paling tinggi di dalam rumah. Ia sentiasa basah, terdedah kepada haba dan kelembapan, dan dipijak setiap hari. Lama-kelamaan gabungan ini menyebabkan jubin retak, berongga, longgar atau membenarkan air meresap ke lantai dan dinding di bawah.",
      "Sebab itu masalah jubin bilik air bukan sekadar soal rupa. Satu jubin yang gagal boleh dengan cepat bertukar menjadi masalah kalis air yang menjejaskan siling unit di bawah atau dinding bilik bersebelahan.",
    ],
    commonCauses: [
      "Lapisan kalis air yang tidak mencukupi atau sudah gagal di bawah jubin.",
      "Lapisan pelekat berongga yang melentur apabila dipijak.",
      "Air meresap di belakang jubin melalui grout yang retak.",
      "Enapan atau pergerakan pada lantai bilik air.",
      "Pemasangan asal yang lemah tanpa liputan pelekat yang mencukupi.",
      "Paip atau kelengkapan tersembunyi yang bocor di sebalik dinding atau lantai.",
    ],
    warningSigns: [
      "Jubin retak, berongga atau longgar di kawasan pancuran, lantai atau dinding.",
      "Grout bertukar warna, lembut atau bernoda gelap.",
      "Bau lembap atau hapak di dalam bilik air.",
      "Resapan atau kelembapan muncul pada siling bilik di bawah.",
    ],
    solutions: [
      { title: "Baiki jubin terjejas", description: "Jubin yang retak atau berongga dikeluarkan dan diganti atau dilekat semula." },
      { title: "Kalis air semula kawasan basah", description: "Jika membran sudah gagal, kawasan itu dikalis air semula sebelum jubin dipasang." },
      { title: "Grout semula dan tutup sambungan", description: "Sambungan diperbaharui supaya air tidak lagi masuk melalui grout." },
      { title: "Jejak isu paip", description: "Jika kebocoran datang daripada paip, kerja paip diselaraskan sebelum kemasan dibuat." },
    ],
    whenToCall: [
      "Jubin bilik air mula retak, berongga atau longgar di kawasan basah.",
      "Anda perasan kelembapan atau tompok pada siling di bawah bilik air.",
      "Air bertakung atau mengalir perlahan di lantai bilik air.",
      "Grout bernoda, berkulat atau gagal dan air sedang meresap.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan oleh pasukan jubin kami bersama kerja kalis air, kerana kedua-duanya perlu diselesaikan bersama di bilik air.",
    processTitle: "Cara Kami Mengendalikan Masalah Jubin Bilik Air",
    processIntro: "Di bilik air, punca kelembapan mesti disahkan sebelum sebarang jubin dipasang semula.",
    processSteps: [
      { title: "Periksa bilik air", description: "Kami menyemak jubin, grout, kecerunan lantai dan floor trap." },
      { title: "Semak kalis air dan paip", description: "Kami menentukan sama ada masalah datang daripada membran atau paip." },
      { title: "Baiki atau ganti jubin", description: "Jubin terjejas dikeluarkan dan dipasang semula selepas punca diselesaikan." },
      { title: "Selaraskan kerja berkaitan", description: "Kerja kalis air, paip dan grouting diselaraskan dalam satu jadual." },
    ],
    faqs: [
      { question: "Kenapa jubin bilik air kerap bermasalah?", answer: "Kerana ia sentiasa terdedah kepada air, wap dan perubahan suhu. Apabila lapisan kalis air atau grout mula gagal, jubin ialah bahagian pertama yang menunjukkan tandanya." },
      { question: "Adakah pembaikan jubin bilik air sentiasa memerlukan kerja kalis air?", answer: "Tidak semestinya. Untuk sekeping jubin yang pecah akibat hentakan, pembaikan setempat sudah memadai. Jika terdapat tanda resapan, kerja kalis air perlu diperiksa." },
      { question: "Boleh masalah jubin bilik air menjejaskan lantai di bawah?", answer: "Boleh. Air yang melepasi jubin akan bergerak ke screed dan akhirnya muncul sebagai tompok pada siling unit atau bilik di bawah." },
      { question: "Perlukah seluruh lantai bilik air dibuka untuk membaiki satu jubin?", answer: "Tidak, jika kawasan sekeliling masih kukuh dan tiada tanda resapan. Kami memeriksa dahulu sebelum mencadangkan skop." },
      { question: "Bagaimana saya tahu bilik air perlu dikalis air semula?", answer: "Tanda biasa termasuk tompok lembap di siling bawah, kulat berulang, jubin berongga di kawasan basah dan grout yang sentiasa lembap." },
    ],
  },
  "kitchen-tile-problems": {
    ...base,
    name: "Masalah Jubin Dapur",
    title: "Renovix Home Services | Masalah Jubin Dapur di KL & Selangor",
    metaDescription:
      "Jubin lantai dan dinding dapur yang rosak dibaiki di Kuala Lumpur & Selangor, termasuk grouting semula dan jubin berongga. Punca, tanda dan penyelesaian.",
    h1: "Masalah Jubin Dapur",
    subtitle:
      "Jubin dapur menerima tumpahan, haba dan lalu lalang berat. Renovix membaiki jubin lantai dan dinding dapur yang rosak dan memulihkan permukaan yang bersih.",
    whatItMeans: [
      "Jubin dapur bekerja keras. Lantai dan dinding sekitar kaunter menerima tumpahan minyak dan air, peralatan yang terjatuh, serta berat peralatan dapur. Lama-kelamaan jubin dan grout menjadi haus, bernoda dan sukar dibersihkan.",
      "Masalah jubin dapur berlaku di rumah lama dan rumah yang baru diubah suai. Kebanyakannya boleh dibaiki secara setempat, tanpa menjubin semula keseluruhan dapur.",
    ],
    commonCauses: [
      "Objek berat terjatuh ke atas lantai dapur, seperti periuk dan kuali.",
      "Tumpahan kerap yang menembusi grout dan sampai ke lapisan pelekat.",
      "Masalah pelekat atau leveling yang meninggalkan jubin berongga.",
      "Pergerakan pada lantai dapur atau jubin backsplash.",
      "Noda minyak dan makanan yang meresap ke dalam grout.",
      "Kebocoran tersembunyi di belakang sinki atau di bawah permukaan berjubin.",
    ],
    warningSigns: [
      "Jubin retak, sumbing atau berongga pada lantai atau backsplash.",
      "Grout bernoda, berminyak atau rapuh di sekitar kaunter.",
      "Jubin yang terangkat di tepi atau berbunyi kosong.",
      "Air atau kelembapan muncul di sekitar sinki atau lantai di bawah.",
    ],
    solutions: [
      { title: "Ganti jubin rosak", description: "Jubin yang pecah dikeluarkan dan diganti dengan padanan terdekat." },
      { title: "Grout semula dan tutup sambungan", description: "Grout bernoda dikeluarkan dan diganti supaya kawasan lebih mudah dibersihkan." },
      { title: "Lekat semula jubin berongga", description: "Jubin berongga diangkat dan dilekat semula pada lapisan yang disediakan." },
      { title: "Jejak kebocoran di belakang jubin", description: "Jika terdapat kelembapan, kami menyemak paip di sekitar sinki sebelum membaiki permukaan." },
    ],
    whenToCall: [
      "Beberapa jubin dapur mula retak, berongga atau terangkat.",
      "Grout bernoda teruk atau rapuh dan air sedang meresap.",
      "Jubin di bawah peralatan pecah dan perlu dikeluarkan.",
      "Terdapat kelembapan atau kebocoran berhampiran sinki atau lantai.",
    ],
    relatedServiceNote:
      "Pasukan jubin kami mengendalikan pembaikan ini dan menyelaraskan kerja paip jika kebocoran ditemui di sekitar sinki.",
    processTitle: "Cara Kami Membaiki Masalah Jubin Dapur",
    processIntro: "Dapur perlu terus boleh digunakan, jadi kami merancang kerja mengikut kelengkapan yang ada.",
    processSteps: [
      { title: "Periksa kawasan terjejas", description: "Kami menyemak jubin, grout dan tanda kelembapan di sekitar sinki." },
      { title: "Rancang mengikut kelengkapan", description: "Kerja dirancang di sekeliling kabinet dan peralatan yang tidak boleh dialihkan." },
      { title: "Baiki atau ganti jubin", description: "Jubin dikeluarkan dan dipasang semula dengan pelekat baharu." },
      { title: "Bersih dan kemas", description: "Sambungan di-grout, permukaan dibersihkan dan dapur boleh digunakan semula." },
    ],
    faqs: [
      { question: "Boleh jubin di bawah ketuhar atau kabinet diganti?", answer: "Boleh, tetapi peralatan atau kabinet perlu dialihkan dahulu. Kami akan maklumkan apa yang perlu dipindahkan sebelum kerja bermula." },
      { question: "Kenapa grout dapur saya menjadi gelap dan tidak boleh dibersihkan?", answer: "Minyak dan makanan meresap ke dalam grout yang tidak ditutup. Setelah noda itu meresap, grouting semula lebih berkesan berbanding pencucian." },
      { question: "Adakah jubin backsplash lebih mudah retak?", answer: "Jubin dinding jarang menerima beban, jadi retak biasanya berpunca daripada hentakan atau pergerakan struktur, bukan penggunaan harian." },
      { question: "Adakah pembaikan jubin dapur mengambil masa yang lama?", answer: "Pembaikan setempat lazimnya boleh disiapkan dalam satu lawatan, dengan masa tambahan untuk grout dan pelekat mengering." },
      { question: "Patutkah saya grout semula atau tukar keseluruhan lantai dapur?", answer: "Jika jubin masih kukuh dan hanya grout yang gagal, grouting semula sudah memadai. Jika banyak jubin berongga atau retak, menjubin semula lebih baik." },
    ],
  },
  "water-seepage-through-tiles": {
    ...base,
    name: "Resapan Air Melalui Jubin",
    title: "Renovix Home Services | Resapan Air Melalui Jubin di KL & Selangor",
    metaDescription:
      "Resapan air melalui jubin dijejak dan dihentikan di Kuala Lumpur & Selangor dengan kerja kalis air dan pembaikan grout. Punca, tanda dan penyelesaian.",
    h1: "Resapan Air Melalui Jubin",
    subtitle:
      "Air yang bergerak melalui jubin ialah amaran bahawa kawasan basah di bawahnya sudah gagal. Renovix mencari puncanya dan menutupnya dengan betul.",
    whatItMeans: [
      "Resapan air melalui jubin berlaku apabila kelembapan bergerak melalui sambungan, retak atau membran yang gagal di sebalik jubin, dan sampai ke screed atau struktur di bawah. Ia selalunya disedari bukan di bilik air itu sendiri, tetapi pada siling bilik di bawah.",
      "Kerana jubin kelihatan elok dari atas, masalah ini boleh berlarutan lama sebelum disedari. Menjelang tompok muncul, air biasanya sudah bergerak di bawah permukaan untuk satu tempoh yang panjang.",
    ],
    commonCauses: [
      "Membran kalis air yang gagal atau memang tidak dipasang.",
      "Grout yang retak, hilang atau tidak ditutup sehingga air masuk melalui sambungan.",
      "Jubin berongga atau longgar yang menyediakan laluan untuk air bergerak.",
      "Kebocoran tersembunyi daripada paip atau kelengkapan di sebalik jubin.",
      "Kalis air yang hanya menutup sebahagian kawasan basah, contohnya tidak sampai ke dinding.",
      "Pergerakan lantai yang membentuk retak halus sebagai laluan air.",
    ],
    warningSigns: [
      "Tompok air atau kesan lembap pada siling di bawah kawasan basah.",
      "Bau hapak, kulat atau cat mengelupas pada dinding berdekatan.",
      "Kesan air di sekeliling tepi bilik air atau balkoni.",
      "Jubin terasa sejuk, lembap atau mula berbunyi kosong.",
    ],
    solutions: [
      { title: "Kenal pasti punca", description: "Kami menentukan sama ada air datang daripada membran yang gagal, grout atau paip yang bocor." },
      { title: "Kalis air semula kawasan basah", description: "Membran baharu disapu selepas permukaan disediakan dengan betul." },
      { title: "Baiki grout dan ganti jubin rosak", description: "Sambungan dan jubin yang gagal diperbaharui sebagai sebahagian daripada pembaikan." },
      { title: "Selaras dengan kerja paip", description: "Jika kebocoran berpunca daripada paip, ia dibaiki sebelum kemasan dipasang semula." },
    ],
    whenToCall: [
      "Terdapat tompok air pada siling di bawah kawasan basah.",
      "Air masih meresap walaupun grout sudah ditutup semula.",
      "Kulat atau cat mengelupas semakin merebak pada dinding berdekatan.",
      "Anda tinggal di kondominium dan kebocoran berkemungkinan menjejaskan jiran.",
    ],
    relatedServiceNote:
      "Kerja ini dikendalikan bersama antara pasukan jubin dan kalis air kami, kerana kedua-dua lapisan perlu diperbaiki bersama.",
    processTitle: "Cara Kami Menghentikan Resapan Melalui Jubin",
    processIntro: "Menjejaki laluan air ialah langkah paling penting sebelum sebarang pembaikan dibuat.",
    processSteps: [
      { title: "Jejak laluan air", description: "Kami memeriksa corak kelembapan dan menguji kawasan basah untuk mencari puncanya." },
      { title: "Baiki punca", description: "Paip yang bocor atau membran yang gagal dibaiki dahulu." },
      { title: "Perbaharui kalis air", description: "Sistem kalis air baharu disapu dan diuji." },
      { title: "Pasang jubin dan tutup", description: "Jubin dipasang semula, di-grout dan kawasan dibersihkan." },
    ],
    faqs: [
      { question: "Kenapa jubin bilik air saya nampak elok tetapi siling di bawah bertompok?", answer: "Kerana jubin bukan lapisan yang menghalang air. Air boleh melepasi sambungan grout dan bergerak di bawah jubin, jadi kerosakan muncul di tempat lain." },
      { question: "Cukupkah menutup semula grout untuk menghentikan resapan?", answer: "Kadangkala ia membantu untuk kes yang sangat ringan, tetapi jika membran di bawah sudah gagal, resapan akan berulang." },
      { question: "Boleh resapan merosakkan struktur bangunan?", answer: "Kelembapan berpanjangan boleh merosakkan screed, plaster dan siling, serta menggalakkan kulat. Semakin lama ia dibiarkan, semakin besar skop pembaikan." },
      { question: "Perlukah semua jubin dibuka untuk membaiki resapan?", answer: "Tidak semestinya. Ia bergantung pada lokasi punca. Untuk membran yang gagal di seluruh bilik air, jubin biasanya perlu dibuka." },
      { question: "Saya tinggal di kondominium — siapa bertanggungjawab?", answer: "Ia bergantung pada punca dan peraturan bangunan anda. Kami boleh memeriksa dan menerangkan penemuan supaya anda dapat berbincang dengan jiran dan pengurusan." },
    ],
  },
};
