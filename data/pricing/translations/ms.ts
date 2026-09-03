import type { PricingTranslation } from "../types";

/**
 * Malay copy for the pricing table rows. Only the human-readable fields are
 * translated — every number, unit and price stays in the English source of
 * truth (`pricing.ts`) so a translation can never change a price.
 */
export const msPricingTranslations: Record<string, PricingTranslation> = {
  "plumbing-callout": {
    scope: "Pemeriksaan di tapak dan diagnosis untuk isu paip di KL & Selangor. Yuran diketepikan jika anda teruskan pembaikan.",
    duration: "30–60 minit di tapak",
  },
  "plumbing-pipe-leak-visible": {
    scope: "Baiki paip bocor yang mudah diakses (PVC/ABS), sehingga 1 meter, termasuk pengedap dan ujian.",
    duration: "1–3 jam",
  },
  "plumbing-hidden-leak": {
    scope: "Pengesanan dan pembaikan paip bocor tersembunyi dalam dinding, termasuk pecah dinding, baiki dan skim asas.",
    duration: "Setengah hari hingga 1 hari",
  },
  "plumbing-tap-replacement": {
    scope: "Penggantian pili singki atau dapur, termasuk kerja dan pemasangan asas. Harga pili berbeza ikut jenama.",
    duration: "30–90 minit setiap pili",
  },
  "plumbing-toilet-repair": {
    scope: "Baiki sistem flush tandas, injap masuk, pelampung atau kebocoran di tapak.",
    duration: "1–2 jam",
  },
  "plumbing-drain-unblock": {
    scope: "Membersih tandas, singki atau floor trap tersumbat menggunakan alat manual atau auger.",
    duration: "30 minit – 2 jam",
  },
  "plumbing-water-heater-install": {
    scope: "Pemasangan pemanas air segera atau tangki, sambungan paip serta koordinasi untuk poin elektrik.",
    duration: "1–3 jam",
  },
  "waterproofing-bathroom-hack": {
    scope: "Kalis air bilik air penuh: pecah jubin sedia ada, sapu membran, ujian banjir, screed dan pasang jubin baru.",
    duration: "5–8 hari bekerja termasuk masa curing",
  },
  "waterproofing-pu-injection": {
    scope: "Suntikan PU grouting untuk henti kebocoran aktif pada siling atau retak dinding. Kadar rata per siling bilik air jika berkenaan.",
    duration: "2–4 jam",
  },
  "waterproofing-flat-roof": {
    scope: "Kalis air untuk bumbung rata, teres bumbung atau porch menggunakan membran torch-on atau PU cecair.",
    duration: "2–5 hari untuk 200–600 kaki persegi",
  },
  "waterproofing-balcony": {
    scope: "Kalis air untuk balkoni atau yard berjubin, termasuk pecah jubin, membran dan pasang semula jubin atau screed.",
    duration: "3–6 hari",
  },
  "waterproofing-wall-seepage": {
    scope: "Salutan kalis air untuk dinding luar yang menunjukkan lembap, efflorescence atau resapan.",
    duration: "1–3 hari setiap elevasi",
  },
  "tiling-floor-ceramic": {
    scope: "Bekal dan pasang jubin lantai seramik standard di permukaan rata yang telah siap, termasuk pelekat jubin dan grout.",
    duration: "2–4 hari untuk 100–200 kaki persegi",
  },
  "tiling-porcelain": {
    scope: "Bekal dan pasang jubin porselin 60x60cm pertengahan untuk lantai, termasuk pemeriksaan kerataan.",
    duration: "3–5 hari setiap 100–200 kaki persegi",
  },
  "tiling-bathroom-complete": {
    scope: "Kerja jubin bilik air hujung ke hujung: penyediaan, koordinasi kalis air, pemasangan, grout dan skirting.",
    duration: "4–7 hari",
  },
  "tiling-repair": {
    scope: "Gantian jubin pecah, retak, kosong atau longgar tanpa jubin semula seluruh kawasan.",
    duration: "2–5 jam untuk beberapa keping jubin",
  },
  "tiling-hacking": {
    scope: "Pecah dan buang jubin sedia ada dengan pelupusan debris.",
    duration: "1–2 hari setiap 100 kaki persegi",
  },
  "painting-interior": {
    scope: "Cat dinding dalaman dengan penyediaan permukaan, primer dan 2 lapisan cat emulsi jenama pertengahan.",
    duration: "2–4 hari untuk 1000 kaki persegi",
  },
  "painting-exterior": {
    scope: "Cat dinding luar dengan weatherbond atau setara, termasuk penyediaan dan salutan perlindungan cuaca.",
    duration: "3–6 hari untuk rumah teres",
  },
  "painting-full-house": {
    scope: "Pakej cat penuh dalaman dan luaran untuk rumah teres tipikal 20x70, termasuk kerja dan cat.",
    duration: "4–7 hari untuk rumah teres",
  },
  "painting-touchup-repair": {
    scope: "Baiki dinding retak, mengelupas, berkulat atau rosak air dengan skim, rawatan anti-kulat dan cat semula.",
    duration: "1–3 hari bergantung pada pengeringan",
  },
  "electrical-socket-add": {
    scope: "Penambahan titik soket kuasa 13A di sebelah titik sedia ada atau dengan pendawaian casing.",
    duration: "30–60 minit setiap titik",
  },
  "electrical-light-point": {
    scope: "Titik lampu baharu dengan pendawaian dan sambungan suis, untuk downlight atau lampu gantung.",
    duration: "30–60 minit setiap titik",
  },
  "electrical-fan-install": {
    scope: "Pemasangan kipas siling dengan atau tanpa pendawaian casing, termasuk cangkuk dan ujian.",
    duration: "45–90 minit setiap kipas",
  },
  "electrical-db-box": {
    scope: "Penggantian papan agihan (DB) satu fasa atau tiga fasa berserta MCB dan RCCB/ELCB.",
    duration: "Setengah hari",
  },
  "electrical-full-wiring": {
    scope: "Pendawaian penuh untuk rumah teres baharu atau pendawaian semula, termasuk titik lampu, titik kuasa, kotak DB dan ujian.",
    duration: "5–10 hari",
  },
  "electrical-troubleshoot": {
    scope: "Diagnosis dan pembaikan masalah trip kuasa, litar pintas, soket atau suis rosak.",
    duration: "1–3 jam",
  },
  "flooring-spc": {
    scope: "Bekal dan pasang lantai SPC (stone polymer composite) dengan sistem click-lock dan underlay terlekat.",
    duration: "1–3 hari untuk 500–1000 kaki persegi",
  },
  "flooring-vinyl": {
    scope: "Bekal dan pasang lantai vinyl LVT, sesuai untuk bilik tidur dan ruang tamu.",
    duration: "1–2 hari untuk 500 kaki persegi",
  },
  "flooring-laminate": {
    scope: "Bekal dan pasang lantai laminate untuk kegunaan kediaman.",
    duration: "1–3 hari",
  },
  "flooring-hacking": {
    scope: "Pecah dan buang jubin atau lantai sedia ada berserta pelupusan sisa.",
    duration: "1–3 hari",
  },
  "flooring-repair": {
    scope: "Pembaikan bahagian lantai yang kembung, tidak rata atau rosak, termasuk kerja leveling.",
    duration: "Setengah hari hingga 2 hari",
  },
  "ceiling-flat": {
    scope: "Bekal dan pasang siling plaster rata dengan papan gipsum 9mm, rangka besi dan kemasan.",
    duration: "2–4 hari untuk 300–500 kaki persegi",
  },
  "ceiling-lbox": {
    scope: "Reka bentuk siling L-Box dengan light trough untuk jalur LED tersembunyi, sesuai untuk ruang tamu.",
    duration: "3–5 hari",
  },
  "partition-drywall": {
    scope: "Bekal dan pasang partition drywall standard dengan papan gipsum 12mm dua belah.",
    duration: "2–4 hari setiap 100–200 kaki persegi",
  },
  "ceiling-repair": {
    scope: "Pembaikan siling plaster yang retak, melendut atau rosak air, termasuk pengukuhan dan skim.",
    duration: "1–3 hari",
  },
  "welding-grille-window": {
    scope: "Fabrikasi dan pemasangan grill tingkap dalam mild steel atau stainless steel, termasuk kimpalan dan cat.",
    duration: "3–7 hari fabrikasi + 1 hari pemasangan",
  },
  "welding-gate": {
    scope: "Fabrikasi pintu pagar utama mengikut ukuran dalam mild steel atau stainless steel, jenis swing atau sliding, termasuk pemasangan.",
    duration: "7–14 hari fabrikasi + 1–2 hari pemasangan",
  },
  "welding-repair": {
    scope: "Pembaikan kimpalan di tapak untuk pintu pagar, grill, railing, pagar atau struktur awning.",
    duration: "1–4 jam",
  },
  "welding-railing": {
    scope: "Fabrikasi dan pemasangan railing tangga, railing balkoni atau pagar.",
    duration: "5–10 hari",
  },
  "welding-awning": {
    scope: "Rangka besi untuk awning (ACP, polycarbonate) termasuk fabrikasi dan pemasangan.",
    duration: "5–10 hari",
  },
  "renovation-minor": {
    scope: "Pengubahsuaian ringan termasuk mengecat, kelengkapan asas, kerja basah kecil dan kemasan semula.",
    duration: "1–2 minggu untuk 800–1000 kaki persegi",
  },
  "renovation-mid": {
    scope: "Renovasi pertengahan merangkumi naik taraf dapur/bilik air, jubin, elektrik, paip dan kemasan.",
    duration: "4–10 minggu",
  },
  "renovation-kitchen": {
    scope: "Renovasi dapur termasuk hacking, jubin, paip, elektrik, countertop dan penyelarasan kabinet.",
    duration: "2–4 minggu",
  },
  "renovation-bathroom-full": {
    scope: "Renovasi bilik air sepenuhnya: hacking, kalis air, jubin, paip, elektrik dan pemasangan kelengkapan sanitari.",
    duration: "2–3 minggu setiap bilik air",
  },
  "renovation-extension": {
    scope: "Sambungan struktur untuk dapur, bilik atau porch kereta, termasuk asas, struktur, bumbung dan kemasan.",
    duration: "6–12 minggu",
  },
  "handyman-hourly": {
    scope: "Khidmat handyman am untuk pembaikan kecil, pemasangan dan kerja penyelenggaraan.",
    duration: "Minimum 1 jam",
  },
  "handyman-door": {
    scope: "Penggantian engsel pintu, penjajaran, tukar kunci dan pelarasan strike plate.",
    duration: "30 minit – 2 jam",
  },
  "handyman-mounting": {
    scope: "Pemasangan TV di dinding, rak, rel langsir, gantungan gambar dan pemasangan perabot flat-pack.",
    duration: "30 minit – 2 jam setiap item",
  },
  "handyman-grout-silicone": {
    scope: "Grouting semula dinding/lantai bilik air dan pembaharuan silikon dapur serta bilik air untuk elak resapan air.",
    duration: "2–5 jam",
  },
  "handyman-small-repair": {
    scope: "Pembaikan kecil di rumah termasuk kabinet, laci, sealant, kemasan semula dan penyelenggaraan am.",
    duration: "30 minit – 3 jam",
  },
};
