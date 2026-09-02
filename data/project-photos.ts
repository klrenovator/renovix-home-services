import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import type { ProjectCategoryId } from "@/data/projects";

/**
 * Real, business-supplied work photographs published on the projects page.
 *
 * Every entry below corresponds to a photograph the business actually uploaded.
 * Nothing here is invented: no client names, addresses, dates, prices or
 * outcomes are recorded, because none were supplied with the images. The copy
 * only describes what is visible in each frame.
 *
 * `width`/`height` are the intrinsic pixel dimensions of the optimized WebP
 * file, so `next/image` can reserve the correct box and avoid layout shift.
 */
export type ProjectPhoto = {
  id: string;
  category: ProjectCategoryId;
  /** Path under `public/`. */
  src: string;
  width: number;
  height: number;
};

export type ProjectPhotoContent = {
  /** Short on-page heading for the card. */
  heading: string;
  /** One to two factual sentences about the work shown. */
  description: string;
  /** Image alt text describing the work. */
  alt: string;
};

export const projectPhotos: ProjectPhoto[] = [
  {
    id: "marble-look-floor-tiling",
    category: "tiling",
    src: "/images/projects/marble-look-floor-tiling-kl-selangor.webp",
    width: 1600,
    height: 900,
  },
  {
    id: "floor-tile-removal-hacking",
    category: "tiling",
    src: "/images/projects/floor-tile-removal-hacking-kl-selangor.webp",
    width: 780,
    height: 1040,
  },
  {
    id: "plaster-ceiling-cove-lighting",
    category: "ceiling",
    src: "/images/projects/plaster-ceiling-cove-lighting-kl-selangor.webp",
    width: 1125,
    height: 1109,
  },
  {
    id: "plaster-ceiling-design-downlights",
    category: "ceiling",
    src: "/images/projects/plaster-ceiling-design-downlights-kl-selangor.webp",
    width: 1080,
    height: 810,
  },
  {
    id: "plaster-ceiling-pendant-lighting",
    category: "ceiling",
    src: "/images/projects/plaster-ceiling-pendant-lighting-kl-selangor.webp",
    width: 750,
    height: 989,
  },
  {
    id: "timber-look-ceiling-beams",
    category: "ceiling",
    src: "/images/projects/timber-look-ceiling-beams-condo-kl-selangor.webp",
    width: 963,
    height: 1280,
  },
  {
    id: "suspended-ceiling-grid",
    category: "ceiling",
    src: "/images/projects/suspended-ceiling-grid-installation-kl-selangor.webp",
    width: 1600,
    height: 900,
  },
  {
    id: "ceiling-fan-and-light-installation",
    category: "electrical",
    src: "/images/projects/ceiling-fan-and-light-installation-kl-selangor.webp",
    width: 720,
    height: 1280,
  },
  {
    id: "chandelier-and-ceiling-fan-installation",
    category: "electrical",
    src: "/images/projects/chandelier-and-ceiling-fan-installation-kl-selangor.webp",
    width: 470,
    height: 620,
  },
  {
    id: "high-ceiling-light-installation",
    category: "electrical",
    src: "/images/projects/high-ceiling-light-installation-kl-selangor.webp",
    width: 607,
    height: 1080,
  },
  {
    id: "electrical-distribution-board-wiring",
    category: "electrical",
    src: "/images/projects/electrical-distribution-board-wiring-kl-selangor.webp",
    width: 756,
    height: 1008,
  },
  {
    id: "electrical-db-panel-installation",
    category: "electrical",
    src: "/images/projects/electrical-db-panel-installation-kl-selangor.webp",
    width: 607,
    height: 1080,
  },
  {
    id: "electrical-cable-wiring-installation",
    category: "electrical",
    src: "/images/projects/electrical-cable-wiring-installation-kl-selangor.webp",
    width: 810,
    height: 1080,
  },
  {
    id: "wall-switch-installation",
    category: "electrical",
    src: "/images/projects/wall-switch-installation-kl-selangor.webp",
    width: 581,
    height: 1032,
  },
  {
    id: "outdoor-switch-socket-wiring",
    category: "electrical",
    src: "/images/projects/outdoor-switch-socket-wiring-kl-selangor.webp",
    width: 607,
    height: 1080,
  },
  {
    id: "toilet-and-basin-installation",
    category: "plumbing",
    src: "/images/projects/toilet-and-basin-installation-kl-selangor.webp",
    width: 810,
    height: 1080,
  },
  {
    id: "structural-metal-welding-fabrication",
    category: "welding",
    src: "/images/projects/structural-metal-welding-fabrication-kl-selangor.webp",
    width: 788,
    height: 1400,
  },
  {
    id: "pipe-and-valve-welding-works",
    category: "welding",
    src: "/images/projects/pipe-and-valve-welding-works-kl-selangor.webp",
    width: 788,
    height: 1400,
  },
  {
    id: "on-site-metal-frame-welding",
    category: "welding",
    src: "/images/projects/on-site-metal-frame-welding-kl-selangor.webp",
    width: 900,
    height: 1600,
  },
  {
    id: "metal-awning-frame-installation",
    category: "welding",
    src: "/images/projects/metal-awning-frame-installation-kl-selangor.webp",
    width: 1284,
    height: 964,
  },
  {
    id: "office-renovation-ceiling-and-tiling",
    category: "renovation",
    src: "/images/projects/office-renovation-ceiling-and-tiling-kl-selangor.webp",
    width: 960,
    height: 1280,
  },
];

type ContentMap = Record<string, ProjectPhotoContent>;

const en: ContentMap = {
  "marble-look-floor-tiling": {
    heading: "Marble-look floor tiling",
    description:
      "Large-format marble-effect floor tiles laid and levelled across a room, with the spirit level and trowel still on the finished surface.",
    alt: "Large marble-look floor tiles laid and levelled by Renovix Home Services in Kuala Lumpur.",
  },
  "floor-tile-removal-hacking": {
    heading: "Floor tile removal before retiling",
    description:
      "Old floor tiles being hacked out of a corridor and entrance area to prepare the screed for a new tiled finish.",
    alt: "Worker removing old floor tiles from a corridor during tiling preparation by Renovix Home Services.",
  },
  "plaster-ceiling-cove-lighting": {
    heading: "Plaster ceiling with cove lighting",
    description:
      "A recessed plaster ceiling finished with warm cove lighting, downlights and a ceiling fan in a living area.",
    alt: "Plaster ceiling with warm cove lighting, downlights and a ceiling fan installed by Renovix Home Services in Selangor.",
  },
  "plaster-ceiling-design-downlights": {
    heading: "Plaster ceiling design with downlights",
    description:
      "A panelled plaster ceiling with concealed strip lighting, spotlights and a centre ceiling fan.",
    alt: "Panelled plaster ceiling with concealed strip lighting and downlights completed by Renovix Home Services.",
  },
  "plaster-ceiling-pendant-lighting": {
    heading: "Plaster ceiling and pendant lighting",
    description:
      "A stepped plaster ceiling with recessed downlights, a ceiling fan and a pendant light fitted in an open living and dining area.",
    alt: "Stepped plaster ceiling with downlights and pendant lighting installed by Renovix Home Services in Kuala Lumpur.",
  },
  "timber-look-ceiling-beams": {
    heading: "Timber-look ceiling beams",
    description:
      "A plaster ceiling with timber-look beam detailing, cove lighting and ceiling fans in a condominium living room.",
    alt: "Condominium ceiling with timber-look beams, cove lighting and ceiling fans completed by Renovix Home Services.",
  },
  "suspended-ceiling-grid": {
    heading: "Suspended ceiling grid installation",
    description:
      "A metal suspension grid installed across a commercial unit, ready to receive the ceiling boards.",
    alt: "Metal suspended ceiling grid installed across a commercial unit by Renovix Home Services in Klang Valley.",
  },
  "ceiling-fan-and-light-installation": {
    heading: "Ceiling fan and light installation",
    description:
      "A ceiling fan and light fittings wired and mounted into a recessed plaster ceiling with cove lighting.",
    alt: "Ceiling fan and light fittings installed in a plaster ceiling by Renovix Home Services in Selangor.",
  },
  "chandelier-and-ceiling-fan-installation": {
    heading: "Chandelier and ceiling fan installation",
    description:
      "A decorative chandelier, ceiling fan and downlights installed and tested in a living area with cove lighting.",
    alt: "Chandelier, ceiling fan and downlights installed in a living area by Renovix Home Services in Kuala Lumpur.",
  },
  "high-ceiling-light-installation": {
    heading: "High-level lighting installation",
    description:
      "Lighting work carried out from a scissor lift at high ceiling level inside a commercial building.",
    alt: "Electrician installing high-level lighting from a scissor lift for Renovix Home Services in Klang Valley.",
  },
  "electrical-distribution-board-wiring": {
    heading: "Distribution board wiring",
    description:
      "A wall-mounted distribution board wired up with colour-coded circuits, breakers and terminal rails.",
    alt: "Wall-mounted electrical distribution board wired with colour-coded circuits and breakers by Renovix Home Services.",
  },
  "electrical-db-panel-installation": {
    heading: "Electrical panel installation",
    description:
      "An electrician terminating incoming cables at a control panel during an electrical installation.",
    alt: "Electrician terminating cables at an electrical control panel for Renovix Home Services in Kuala Lumpur.",
  },
  "electrical-cable-wiring-installation": {
    heading: "Cable wiring installation",
    description:
      "Cable runs being pulled and dressed into flexible conduit at ceiling level during an electrical fit-out.",
    alt: "Electrician pulling cables into conduit at ceiling level during an electrical installation by Renovix Home Services.",
  },
  "wall-switch-installation": {
    heading: "Wall switch installation",
    description:
      "A wall switch being wired and fixed into its back box during interior electrical works.",
    alt: "Electrician wiring a wall switch into its back box for Renovix Home Services in Selangor.",
  },
  "outdoor-switch-socket-wiring": {
    heading: "Outdoor switch and socket wiring",
    description:
      "An external switch and socket point being wired and fixed to a wall on site.",
    alt: "Electrician wiring an outdoor switch and socket point on site for Renovix Home Services in Klang Valley.",
  },
  "toilet-and-basin-installation": {
    heading: "Toilet and basin installation",
    description:
      "A wall-hung basin and close-coupled toilet installed and connected in a finished tiled bathroom.",
    alt: "Toilet and wall-hung basin installed in a tiled bathroom by Renovix Home Services in Kuala Lumpur.",
  },
  "structural-metal-welding-fabrication": {
    heading: "Structural metal fabrication",
    description:
      "A long steel section being welded and fabricated in a workshop, with the weld arc live at the joint.",
    alt: "Welder fabricating a long steel section in a workshop for Renovix Home Services in Selangor.",
  },
  "pipe-and-valve-welding-works": {
    heading: "Pipe and valve welding works",
    description:
      "Welding work on pipework and flanged valves in a fabrication yard, with the finished assemblies laid out ready for fitting.",
    alt: "Welder working on pipework and flanged valves in a fabrication yard for Renovix Home Services.",
  },
  "on-site-metal-frame-welding": {
    heading: "On-site metal frame welding",
    description:
      "A metal frame being welded in position on a concrete slab during on-site metal works.",
    alt: "Welder joining a metal frame on a concrete slab during on-site metal works by Renovix Home Services.",
  },
  "metal-awning-frame-installation": {
    heading: "Metal awning frame installation",
    description:
      "A steel support frame fixed across a roof area, forming the structure for an awning covering.",
    alt: "Steel awning support frame installed across a roof area by Renovix Home Services in Selangor.",
  },
  "office-renovation-ceiling-and-tiling": {
    heading: "Office renovation in progress",
    description:
      "A commercial interior mid-renovation, with the suspended ceiling frame overhead and floor tiles being set out with levelling clips.",
    alt: "Office interior under renovation with ceiling framing and floor tiling in progress by Renovix Home Services.",
  },
};

const ms: ContentMap = {
  "marble-look-floor-tiling": {
    heading: "Pemasangan jubin lantai corak marmar",
    description:
      "Jubin lantai format besar bercorak marmar dipasang dan diratakan di seluruh ruang, dengan aras dan sudip masih berada di atas permukaan yang siap.",
    alt: "Jubin lantai corak marmar bersaiz besar dipasang dan diratakan oleh Renovix Home Services di Kuala Lumpur.",
  },
  "floor-tile-removal-hacking": {
    heading: "Pembuangan jubin lantai sebelum pemasangan baharu",
    description:
      "Jubin lantai lama dipecahkan di ruang koridor dan pintu masuk untuk menyediakan lapisan simen bagi kemasan jubin baharu.",
    alt: "Pekerja membuang jubin lantai lama di koridor semasa kerja penyediaan jubin oleh Renovix Home Services.",
  },
  "plaster-ceiling-cove-lighting": {
    heading: "Siling plaster dengan lampu cove",
    description:
      "Siling plaster terbenam disiapkan dengan lampu cove berwarna hangat, lampu downlight dan kipas siling di ruang tamu.",
    alt: "Siling plaster dengan lampu cove, downlight dan kipas siling dipasang oleh Renovix Home Services di Selangor.",
  },
  "plaster-ceiling-design-downlights": {
    heading: "Reka bentuk siling plaster dengan downlight",
    description:
      "Siling plaster berpanel dengan lampu jalur tersembunyi, lampu sorot dan kipas siling di bahagian tengah.",
    alt: "Siling plaster berpanel dengan lampu jalur tersembunyi dan downlight disiapkan oleh Renovix Home Services.",
  },
  "plaster-ceiling-pendant-lighting": {
    heading: "Siling plaster dan lampu gantung",
    description:
      "Siling plaster bertingkat dengan downlight terbenam, kipas siling dan lampu gantung dipasang di ruang tamu dan makan yang terbuka.",
    alt: "Siling plaster bertingkat dengan downlight dan lampu gantung dipasang oleh Renovix Home Services di Kuala Lumpur.",
  },
  "timber-look-ceiling-beams": {
    heading: "Alang siling corak kayu",
    description:
      "Siling plaster dengan perincian alang bercorak kayu, lampu cove dan kipas siling di ruang tamu kondominium.",
    alt: "Siling kondominium dengan alang corak kayu, lampu cove dan kipas siling disiapkan oleh Renovix Home Services.",
  },
  "suspended-ceiling-grid": {
    heading: "Pemasangan rangka siling gantung",
    description:
      "Rangka logam siling gantung dipasang merentasi unit komersial, sedia untuk menerima papan siling.",
    alt: "Rangka logam siling gantung dipasang di unit komersial oleh Renovix Home Services di Lembah Klang.",
  },
  "ceiling-fan-and-light-installation": {
    heading: "Pemasangan kipas siling dan lampu",
    description:
      "Kipas siling dan lampu didawaikan serta dipasang pada siling plaster terbenam yang mempunyai lampu cove.",
    alt: "Kipas siling dan lampu dipasang pada siling plaster oleh Renovix Home Services di Selangor.",
  },
  "chandelier-and-ceiling-fan-installation": {
    heading: "Pemasangan candelier dan kipas siling",
    description:
      "Candelier hiasan, kipas siling dan downlight dipasang serta diuji di ruang tamu yang mempunyai lampu cove.",
    alt: "Candelier, kipas siling dan downlight dipasang di ruang tamu oleh Renovix Home Services di Kuala Lumpur.",
  },
  "high-ceiling-light-installation": {
    heading: "Pemasangan lampu di aras tinggi",
    description:
      "Kerja lampu dijalankan dari pelantar gunting pada aras siling tinggi di dalam bangunan komersial.",
    alt: "Juruelektrik memasang lampu aras tinggi dari pelantar gunting untuk Renovix Home Services di Lembah Klang.",
  },
  "electrical-distribution-board-wiring": {
    heading: "Pendawaian papan agihan elektrik",
    description:
      "Papan agihan yang dilekapkan pada dinding didawaikan dengan litar berkod warna, pemutus litar dan rel terminal.",
    alt: "Papan agihan elektrik didawaikan dengan litar berkod warna dan pemutus litar oleh Renovix Home Services.",
  },
  "electrical-db-panel-installation": {
    heading: "Pemasangan panel elektrik",
    description:
      "Juruelektrik menamatkan kabel masuk pada panel kawalan semasa kerja pemasangan elektrik.",
    alt: "Juruelektrik menamatkan kabel pada panel kawalan elektrik untuk Renovix Home Services di Kuala Lumpur.",
  },
  "electrical-cable-wiring-installation": {
    heading: "Pemasangan pendawaian kabel",
    description:
      "Kabel ditarik dan disusun ke dalam konduit fleksibel di aras siling semasa kerja pemasangan elektrik.",
    alt: "Juruelektrik menarik kabel ke dalam konduit di aras siling semasa pemasangan elektrik oleh Renovix Home Services.",
  },
  "wall-switch-installation": {
    heading: "Pemasangan suis dinding",
    description:
      "Suis dinding didawaikan dan dipasang ke dalam kotak belakangnya semasa kerja elektrik dalaman.",
    alt: "Juruelektrik mendawai suis dinding ke dalam kotak belakang untuk Renovix Home Services di Selangor.",
  },
  "outdoor-switch-socket-wiring": {
    heading: "Pendawaian suis dan soket luaran",
    description:
      "Titik suis dan soket luaran didawaikan serta dipasang pada dinding di tapak kerja.",
    alt: "Juruelektrik mendawai titik suis dan soket luaran di tapak untuk Renovix Home Services di Lembah Klang.",
  },
  "toilet-and-basin-installation": {
    heading: "Pemasangan tandas dan besen",
    description:
      "Besen gantung dinding dan mangkuk tandas dipasang serta disambungkan di bilik air berjubin yang telah siap.",
    alt: "Tandas dan besen gantung dinding dipasang di bilik air berjubin oleh Renovix Home Services di Kuala Lumpur.",
  },
  "structural-metal-welding-fabrication": {
    heading: "Fabrikasi logam berstruktur",
    description:
      "Keratan keluli panjang dikimpal dan difabrikasi di bengkel, dengan arka kimpalan menyala pada sambungan.",
    alt: "Pengimpal memfabrikasi keratan keluli panjang di bengkel untuk Renovix Home Services di Selangor.",
  },
  "pipe-and-valve-welding-works": {
    heading: "Kerja kimpalan paip dan injap",
    description:
      "Kerja kimpalan pada paip dan injap berbebibir di kawasan fabrikasi, dengan pemasangan siap disusun sedia untuk dipasang.",
    alt: "Pengimpal mengerjakan paip dan injap berbebibir di kawasan fabrikasi untuk Renovix Home Services.",
  },
  "on-site-metal-frame-welding": {
    heading: "Kimpalan rangka logam di tapak",
    description:
      "Rangka logam dikimpal pada kedudukannya di atas papak konkrit semasa kerja logam di tapak.",
    alt: "Pengimpal menyambung rangka logam di atas papak konkrit semasa kerja logam di tapak oleh Renovix Home Services.",
  },
  "metal-awning-frame-installation": {
    heading: "Pemasangan rangka awning logam",
    description:
      "Rangka sokongan keluli dipasang merentasi kawasan bumbung, membentuk struktur untuk penutup awning.",
    alt: "Rangka sokongan awning keluli dipasang di kawasan bumbung oleh Renovix Home Services di Selangor.",
  },
  "office-renovation-ceiling-and-tiling": {
    heading: "Renovasi pejabat sedang berjalan",
    description:
      "Ruang dalaman komersial dalam proses renovasi, dengan rangka siling gantung di atas dan jubin lantai sedang disusun menggunakan klip perata.",
    alt: "Ruang pejabat dalam renovasi dengan rangka siling dan pemasangan jubin lantai oleh Renovix Home Services.",
  },
};

const zh: ContentMap = {
  "marble-look-floor-tiling": {
    heading: "仿云石地砖铺设",
    description:
      "大尺寸仿云石地砖已铺贴并调平，完成面上仍放着水平尺与抹刀。",
    alt: "Renovix Home Services 在吉隆坡铺设并调平的大尺寸仿云石地砖。",
  },
  "floor-tile-removal-hacking": {
    heading: "重铺前的旧地砖拆除",
    description:
      "走道与入口处的旧地砖被凿除，为新地砖饰面整理底层水泥面。",
    alt: "工人在走道拆除旧地砖，为 Renovix Home Services 的铺砖工程作准备。",
  },
  "plaster-ceiling-cove-lighting": {
    heading: "石膏天花与灯槽照明",
    description:
      "客厅内的凹入式石膏天花，配以暖色灯槽照明、筒灯与吊扇。",
    alt: "Renovix Home Services 在雪兰莪安装的石膏天花，配灯槽照明、筒灯与吊扇。",
  },
  "plaster-ceiling-design-downlights": {
    heading: "石膏天花造型与筒灯",
    description:
      "分格造型的石膏天花，内藏灯带、射灯，中央设有吊扇。",
    alt: "Renovix Home Services 完成的分格石膏天花，内藏灯带与筒灯。",
  },
  "plaster-ceiling-pendant-lighting": {
    heading: "石膏天花与吊灯",
    description:
      "开放式客饭厅的层叠式石膏天花，装有嵌入式筒灯、吊扇与吊灯。",
    alt: "Renovix Home Services 在吉隆坡安装的层叠式石膏天花、筒灯与吊灯。",
  },
  "timber-look-ceiling-beams": {
    heading: "仿木纹天花横梁",
    description:
      "公寓客厅的石膏天花，配上仿木纹横梁造型、灯槽照明与吊扇。",
    alt: "Renovix Home Services 完成的公寓天花，配仿木纹横梁、灯槽照明与吊扇。",
  },
  "suspended-ceiling-grid": {
    heading: "吊顶龙骨安装",
    description:
      "商用单位内已安装完成的金属吊顶龙骨，随时可以封上天花板材。",
    alt: "Renovix Home Services 在巴生谷商用单位安装的金属吊顶龙骨。",
  },
  "ceiling-fan-and-light-installation": {
    heading: "吊扇与灯具安装",
    description:
      "吊扇与灯具已完成布线并安装在带灯槽照明的凹入式石膏天花上。",
    alt: "Renovix Home Services 在雪兰莪于石膏天花安装的吊扇与灯具。",
  },
  "chandelier-and-ceiling-fan-installation": {
    heading: "水晶吊灯与吊扇安装",
    description:
      "装饰吊灯、吊扇与筒灯已在设有灯槽照明的客厅安装并测试完成。",
    alt: "Renovix Home Services 在吉隆坡客厅安装的吊灯、吊扇与筒灯。",
  },
  "high-ceiling-light-installation": {
    heading: "高处灯具安装",
    description:
      "在商用建筑内使用剪式升降平台，于高天花位置进行灯具安装工作。",
    alt: "电工使用剪式升降平台为 Renovix Home Services 在巴生谷安装高处灯具。",
  },
  "electrical-distribution-board-wiring": {
    heading: "配电箱布线",
    description:
      "壁挂式配电箱已完成布线，配有色标线路、断路器与端子排。",
    alt: "Renovix Home Services 完成布线的壁挂式配电箱，配色标线路与断路器。",
  },
  "electrical-db-panel-installation": {
    heading: "电箱与控制柜安装",
    description:
      "电工在电气安装工程中，为控制柜接驳并端接进线电缆。",
    alt: "电工为 Renovix Home Services 在吉隆坡的控制柜端接电缆。",
  },
  "electrical-cable-wiring-installation": {
    heading: "电缆布线安装",
    description:
      "电气安装期间，在天花高度将电缆穿入软管并整理排布。",
    alt: "电工在天花高度将电缆穿入软管，进行 Renovix Home Services 的电气安装。",
  },
  "wall-switch-installation": {
    heading: "墙面开关安装",
    description:
      "室内电气工程中，墙面开关正在接线并固定入暗盒。",
    alt: "电工为 Renovix Home Services 在雪兰莪把墙面开关接线并装入暗盒。",
  },
  "outdoor-switch-socket-wiring": {
    heading: "户外开关与插座布线",
    description:
      "现场进行户外开关与插座点位的接线与固定安装。",
    alt: "电工在现场为 Renovix Home Services 在巴生谷接驳户外开关与插座点位。",
  },
  "toilet-and-basin-installation": {
    heading: "马桶与洗手盆安装",
    description:
      "壁挂式洗手盆与连体马桶已在完成铺砖的浴室内安装并接驳妥当。",
    alt: "Renovix Home Services 在吉隆坡铺砖浴室内安装的马桶与壁挂洗手盆。",
  },
  "structural-metal-welding-fabrication": {
    heading: "结构钢件加工焊接",
    description:
      "长条钢构件正在车间内焊接加工，接缝处可见焊接弧光。",
    alt: "焊工在车间为 Renovix Home Services 加工长条钢构件（雪兰莪）。",
  },
  "pipe-and-valve-welding-works": {
    heading: "管道与阀门焊接工程",
    description:
      "在加工场进行管道与法兰阀门的焊接作业，完成的组件已排列待装。",
    alt: "焊工在加工场为 Renovix Home Services 焊接管道与法兰阀门。",
  },
  "on-site-metal-frame-welding": {
    heading: "现场金属框架焊接",
    description:
      "现场金属工程中，金属框架在混凝土楼板上就位焊接。",
    alt: "焊工在混凝土楼板上焊接金属框架，属 Renovix Home Services 的现场金属工程。",
  },
  "metal-awning-frame-installation": {
    heading: "金属遮阳棚骨架安装",
    description:
      "钢制支撑骨架已横跨屋面固定，形成遮阳棚覆盖层的结构。",
    alt: "Renovix Home Services 在雪兰莪屋面安装的钢制遮阳棚支撑骨架。",
  },
  "office-renovation-ceiling-and-tiling": {
    heading: "办公空间装修进行中",
    description:
      "商用室内正在装修，上方是吊顶骨架，地面地砖正以调平卡子逐块铺设。",
    alt: "Renovix Home Services 施工中的办公室内部，进行天花骨架与地砖铺设。",
  },
};

const projectPhotoContent: Record<LanguageCode, ContentMap> = { en, ms, zh };

/**
 * Content for a single photo. Falls back to English only if a key is ever
 * missing, which the i18n coverage check prevents from happening in practice.
 */
export function getProjectPhotoContent(
  id: string,
  lang: LanguageCode | string,
): ProjectPhotoContent {
  const code = getLanguageCode(lang);
  return projectPhotoContent[code][id] ?? en[id];
}
