import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "排屋", note: "一次上门，把家里零散的小维修一并完成。" },
  { label: "共管公寓", note: "单位内的安装工程，遵守管理层的规定与施工时间。" },
  { label: "组屋公寓", note: "适合住户与业主的小型维修与安装。" },
  { label: "半独立式与独立式洋房", note: "室内外都有的较长维修清单。" },
  { label: "办公室与店铺", note: "商业空间的小型维修，尽量不影响营业。" },
  { label: "装修项目", note: "装修完成后的收尾与安装工作。" },
];

const areasNote = "家居维修服务覆盖吉隆坡、雪兰莪与巴生谷的住宅与商业空间。";

const propertyTypesIntro = "多数项目一次上门即可完成，具体视墙体类型与现场条件而定。";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "door-problems": {
    ...base,
    name: "门的问题",
    title: "Renovix Home Services | 吉隆坡与雪兰莪门扇维修",
    metaDescription:
      "在吉隆坡与雪兰莪维修卡住、异响或关不上的门。了解成因、警示迹象与解决方式。",
    h1: "门的问题",
    subtitle:
      "门卡住、异响或关不上，多半是铰链或门框的问题。Renovix 会调校修复，让门开合顺畅。",
    whatItMeans: [
      "门的问题包括门扇刮地、关不严、开合时吱吱作响，或门缝上下不一致。",
      "原因通常是铰链松脱、门框位移，或木材受潮膨胀，而不是门本身坏了。",
    ],
    commonCauses: [
      "铰链松动或磨损，门扇下沉。",
      "潮气使门扇或门框膨胀。",
      "门边刮伤、缺角或开裂。",
      "门框位移，导致门扇不对位。",
      "锁舌与锁扣板不对位或已磨损。",
      "多年使用造成的自然磨损，重门尤其明显。",
    ],
    warningSigns: [
      "门要用力推才关得上，或会刮到地面。",
      "门扇一侧下沉，锁不上。",
      "开门时有明显的吱声或摩擦声。",
      "门缝上下左右不一致。",
    ],
    solutions: [
      { title: "调校铰链", description: "紧固或调整铰链，让门扇重新对位。" },
      { title: "刨修或打磨门边", description: "处理膨胀部位，让门不再刮碰。" },
      { title: "校正锁舌位置", description: "调整锁扣板，让门轻松锁上。" },
      { title: "修复或更换门扇", description: "门扇损坏严重时，建议更换。" },
    ],
    whenToCall: [
      "门关不上或锁不上。",
      "门扇下沉，铰链从门框上松脱。",
      "门扇刮到地面或门框。",
      "您打算安装新门。",
    ],
    relatedServiceNote: "由家居维修团队负责，通常一次上门完成。",
    processTitle: "我们如何修复门的问题",
    processIntro: "多数门只需要调校，并不需要更换。",
    processSteps: [
      { title: "检查门扇", description: "查看铰链、门框与四周缝隙。" },
      { title: "调校或修复", description: "调整铰链与锁具，直到对位。" },
      { title: "修补破损", description: "修补门边的缺口与损伤。" },
      { title: "测试开合", description: "反复测试开关后交付。" },
    ],
    faqs: [
      { question: "门为什么突然卡住了？", answer: "通常是潮气让木材膨胀，或铰链松动导致门扇略微下沉。" },
      { question: "门可以修而不换吗？", answer: "多数可以。调整铰链与锁具就能解决大部分问题。" },
      { question: "门为什么会吱吱响？", answer: "铰链干涩或磨损。先上润滑，若仍有声音则更换铰链。" },
      { question: "修一扇门要多久？", answer: "多数调校在同一次上门中很快就能完成。" },
    ],
  },
  "lock-problems": {
    ...base,
    name: "门锁问题",
    title: "Renovix Home Services | 吉隆坡与雪兰莪门锁维修与更换",
    metaDescription:
      "在吉隆坡与雪兰莪维修或更换卡涩、转不动的门锁。了解成因、警示迹象与解决方式。",
    h1: "门锁问题",
    subtitle:
      "锁卡住或转不动，是实实在在的安全隐患。Renovix 会维修或更换门锁，让家里保持安全。",
    whatItMeans: [
      "门锁问题包括钥匙难以转动、锁舌无法伸出，或锁具完全失灵。",
      "多数是锁芯磨损或门与锁扣板不对位造成的，通常不必更换整扇门就能解决。",
    ],
    commonCauses: [
      "锁芯内积尘与污垢。",
      "钥匙磨损或变形。",
      "锁具或锁舌与门框不对位。",
      "锁体机构卡死或损坏。",
      "锁芯老旧，已不再可靠。",
      "户外门锁受潮生锈。",
    ],
    warningSigns: [
      "钥匙难以插入或转动。",
      "锁具卡住，把手变得很紧。",
      "钥匙转了，门却锁不上。",
      "钥匙断在锁孔里。",
    ],
    solutions: [
      { title: "诊断锁具", description: "判断问题在锁芯、对位还是钥匙。" },
      { title: "润滑与调校", description: "清洁锁体机构并调整锁扣板。" },
      { title: "更换锁芯或锁具", description: "损坏的锁具更换为新品。" },
      { title: "提升安全性", description: "按门型建议更合适的锁具。" },
    ],
    whenToCall: [
      "钥匙难转或经常卡住。",
      "门无法真正锁紧。",
      "钥匙断裂或丢失。",
      "您刚搬入，想更换门锁。",
    ],
    relatedServiceNote: "由家居维修团队负责，涵盖室内门与大门。",
    processTitle: "我们如何处理门锁问题",
    processIntro: "先检查门的对位——这是最常见的原因。",
    processSteps: [
      { title: "评估锁具", description: "测试锁芯、锁舌与门的对位。" },
      { title: "保养机构", description: "清洁、润滑并调校锁具。" },
      { title: "必要时更换", description: "锁芯或整套锁具损坏时予以更换。" },
      { title: "测试安全性", description: "反复测试锁闭后交付。" },
    ],
    faqs: [
      { question: "锁为什么越来越难转？", answer: "多半是锁芯积尘，或门扇已经与锁扣板不对位。" },
      { question: "锁能修还是要换？", answer: "机构完好时清洁调校即可；锁芯已磨损的话，更换更可靠。" },
      { question: "钥匙断在锁里能取出来吗？", answer: "通常可以，但若锁芯已经损坏，就需要更换。" },
      { question: "搬家后需要换锁吗？", answer: "值得考虑，因为您无法确定旧钥匙还有多少副在外。" },
    ],
  },
  "curtain-installation": {
    ...base,
    name: "窗帘安装",
    title: "Renovix Home Services | 吉隆坡与雪兰莪窗帘安装",
    metaDescription:
      "在吉隆坡与雪兰莪按墙体类型安装稳固水平的窗帘杆与轨道。了解常见问题与解决方式。",
    h1: "窗帘安装",
    subtitle:
      "量得准、装得牢，窗帘才挂得好看又耐用。Renovix 会把窗帘杆与轨道装得稳稳当当。",
    whatItMeans: [
      "窗帘安装包括测量、按墙体类型选择合适的固定件，以及把窗帘杆或轨道装在正确的高度与水平上。",
      "多数窗帘问题不在布，而在于支架松动或杆子装得不平。",
    ],
    commonCauses: [
      "把窗帘杆装在承重不足的墙面上。",
      "杆子不水平，或高度不合适。",
      "固定件与墙体类型不匹配。",
      "杆子过长，或与轨道、窗帘不匹配。",
      "轨道或挂钩安装不均匀。",
      "原有配件松动或变形。",
    ],
    warningSigns: [
      "窗帘杆下垂或看起来歪斜。",
      "支架松动，或正从墙上被拉出。",
      "窗帘两边高度不一致。",
      "轨道滑动不顺畅。",
    ],
    solutions: [
      { title: "测量与定位", description: "测量窗口并标出支架位置。" },
      { title: "选择合适固定件", description: "按混凝土、砖墙或石膏板选择配件。" },
      { title: "安装并校水平", description: "杆子装平，并在合适间距处加支撑。" },
      { title: "挂上并检查", description: "挂好窗帘并检查滑动是否顺畅。" },
    ],
    whenToCall: [
      "窗帘支架松脱或掉落。",
      "新家需要安装窗帘。",
      "窗帘杆中间明显下垂。",
      "您不确定自家墙体该用什么固定件。",
    ],
    relatedServiceNote: "由家居维修团队负责，可与其他安装项目合并进行。",
    processTitle: "我们如何安装窗帘",
    processIntro: "配件是否匹配墙体，决定它能不能长期稳固。",
    processSteps: [
      { title: "测量窗口", description: "施工前先量好高度与宽度。" },
      { title: "标记与校平", description: "标出支架位置并确认水平。" },
      { title: "固定配件", description: "以合适的固定件安装支架与杆子。" },
      { title: "挂上窗帘", description: "挂好窗帘并检查效果。" },
    ],
    faqs: [
      { question: "窗帘杆该装多高？", answer: "取决于层高与您想要的效果，我们会在现场给出建议。" },
      { question: "支架为什么会脱落？", answer: "多半是固定件与墙体不匹配，或窗帘重量超出支撑能力。" },
      { question: "石膏板墙可以装窗帘吗？", answer: "可以，但需要专用固定件，或在板后加装支撑。" },
      { question: "长窗帘需要额外支撑吗？", answer: "需要。杆子较长时，中间应加支撑以免下垂。" },
    ],
  },
  "tv-mounting": {
    ...base,
    name: "电视挂墙安装",
    title: "Renovix Home Services | 吉隆坡与雪兰莪电视挂墙安装",
    metaDescription:
      "在吉隆坡与雪兰莪以合适支架与固定件安装挂墙电视，并整理线材。了解注意事项与解决方式。",
    h1: "电视挂墙安装",
    subtitle:
      "挂墙电视需要合适的支架、牢固的固定与舒适的高度。Renovix 会装得安全，并把线材整理干净。",
    whatItMeans: [
      "电视挂墙安装，是把支架固定在能够承重的墙体上，并按该空间的观看位置定出合适的高度。",
      "墙体类型非常关键：混凝土、砖墙与石膏板需要完全不同的固定方式。",
    ],
    commonCauses: [
      "支架承重规格与电视尺寸不匹配。",
      "固定在承重不足的墙面上。",
      "电视装得过高、过低或不居中。",
      "线材外露杂乱，也容易绊到。",
      "支架与电视的 VESA 孔距不匹配。",
      "安装不牢，电视无法平贴墙面。",
    ],
    warningSigns: [
      "支架看起来明显偏小。",
      "墙面出现受力痕迹，支架有被拉出的迹象。",
      "电视轻微倾斜，或支架摸起来松动。",
      "线材沿墙面垂挂在外。",
    ],
    solutions: [
      { title: "评估墙体与电视", description: "确认墙体类型、电视重量与 VESA 规格。" },
      { title: "选择合适支架", description: "按尺寸、重量与需要的角度选型。" },
      { title: "安装在合适高度", description: "依照座位位置确定观看高度。" },
      { title: "整理线材", description: "把线材理顺或隐藏，保持整洁。" },
    ],
    whenToCall: [
      "您要把新电视挂上墙。",
      "现有支架摸起来松动。",
      "您不确定墙体能否承受电视重量。",
      "您希望把线材藏起来。",
    ],
    relatedServiceNote: "由家居维修团队负责；若需要新增插座，会由电气团队配合。",
    processTitle: "我们如何安装挂墙电视",
    processIntro: "选对适合墙体的固定件，是整件事里最关键的一步。",
    processSteps: [
      { title: "确认墙体与电视", description: "核对墙体类型与电视规格。" },
      { title: "安装支架", description: "以合适固定件把支架装平装牢。" },
      { title: "装上电视", description: "把电视挂上支架并校正水平。" },
      { title: "整理线材", description: "理顺线材并清理现场。" },
    ],
    faqs: [
      { question: "石膏板墙能挂电视吗？", answer: "可以，但要用专用固定件或在板后加支撑，具体看电视重量。" },
      { question: "电视该挂多高？", answer: "一般以就座时的视线高度为准，我们会按您的空间给出建议。" },
      { question: "线材可以藏进墙里吗？", answer: "部分情况可以，取决于墙体类型与插座位置。" },
      { question: "电视旁需要新增插座吗？", answer: "若附近没有插座，我们的电气团队可以加装，避免线材外露。" },
    ],
  },
  "shelf-installation": {
    ...base,
    name: "置物架安装",
    title: "Renovix Home Services | 吉隆坡与雪兰莪置物架安装",
    metaDescription:
      "在吉隆坡与雪兰莪按墙体类型安装水平且牢固的置物架。了解常见问题、警示迹象与解决方式。",
    h1: "置物架安装",
    subtitle:
      "架子牢不牢，取决于墙。Renovix 会把置物架装得水平、稳固，并能承受实际使用的重量。",
    whatItMeans: [
      "置物架安装，包括按墙体选择固定件、确定支架位置，并把架子装在正确的水平线上。",
      "架子掉下来，几乎都是因为固定件与墙体不匹配，而不是东西放得太重。",
    ],
    commonCauses: [
      "装在承重不足的墙面上。",
      "支架或固定件与墙体类型不匹配。",
      "架子不水平，支架间距不均。",
      "支架松动、位置不当或数量不足。",
      "架子过长，支撑点不够。",
      "旧架子已经松动，不再牢固。",
    ],
    warningSigns: [
      "架子看起来歪斜或不水平。",
      "支架松动，或正从墙上被拉出。",
      "架子在中段明显下弯。",
      "使用时架子会晃动。",
    ],
    solutions: [
      { title: "测量与规划", description: "确定架子位置与支架间距。" },
      { title: "选择合适固定件", description: "按墙体类型与预期荷载选型。" },
      { title: "安装并校水平", description: "装好后用水平尺校正。" },
      { title: "确认承载能力", description: "确保支撑足以应付日常使用。" },
    ],
    whenToCall: [
      "现有架子晃动或开始脱落。",
      "要在混凝土墙或石膏板上安装架子。",
      "需要多层架子保持同一水平。",
      "您不确定墙体能承受多少重量。",
    ],
    relatedServiceNote: "由家居维修团队负责，可与其他安装项目合并进行。",
    processTitle: "我们如何安装置物架",
    processIntro: "固定件与支架间距，决定架子稳不稳。",
    processSteps: [
      { title: "测量空间", description: "确定架子的位置与高度。" },
      { title: "选择固定件", description: "按墙体类型选择配件。" },
      { title: "安装与校平", description: "装好支架并校正水平。" },
      { title: "检查成果", description: "测试稳固程度后交付。" },
    ],
    faqs: [
      { question: "挂墙架能承受多重？", answer: "取决于墙体、固定件与支架间距，我们会给出合理的建议上限。" },
      { question: "石膏板墙可以装架子吗？", answer: "可以，需使用专用固定件；承重较大时要在板后加支撑。" },
      { question: "架子为什么会下弯？", answer: "多半是支架间距相对于长度与荷载来说太宽了。" },
      { question: "可以做隐藏支架的层板吗？", answer: "可以，但墙内需要更结实的固定方式。" },
    ],
  },
  "minor-home-repairs": {
    ...base,
    name: "家居小维修",
    title: "Renovix Home Services | 吉隆坡与雪兰莪家居小维修",
    metaDescription:
      "在吉隆坡与雪兰莪一次上门解决家中累积的小维修清单。了解常见问题与解决方式。",
    h1: "家居小维修",
    subtitle:
      "家里那些越拖越多的小事——松动的五金、挂钩、填缝与小修补——交给一位靠谱的师傅一次做完。",
    whatItMeans: [
      "家居小维修，指的是日积月累的琐碎工作：松动的铰链、关不严的柜门、开裂的填缝胶，以及墙上的小孔。",
      "单看每一项都不起眼，但集中在一次有安排的上门中处理，效率会高得多。",
    ],
    commonCauses: [
      "日常使用让铰链、把手与五金逐渐松动。",
      "墙面与家具表面的小碰撞与刮痕。",
      "缝隙处的密封胶老化开裂。",
      "安装时使用了不合适的固定件。",
      "日常湿气造成的轻微位移与松动。",
      "一拖再拖、越积越多的零散工作。",
    ],
    warningSigns: [
      "铰链、把手或旋钮松动作响。",
      "柜门关不严。",
      "密封胶开裂、缺失或翘起。",
      "墙面有小孔、划痕或轻微破损。",
    ],
    solutions: [
      { title: "紧固与修复五金", description: "紧固或更换铰链、把手与配件。" },
      { title: "重新打胶密封", description: "清除旧胶，重新做好接缝密封。" },
      { title: "修补表面小损伤", description: "填补孔洞与划痕并收面。" },
      { title: "小型安装", description: "以合适固定件安装挂钩、镜子与层板。" },
    ],
    whenToCall: [
      "您有一份拖了很久的小工作清单。",
      "五金松动，开始出问题。",
      "浴室或厨房的填缝胶已经开裂。",
      "您希望一次上门全部搞定。",
    ],
    relatedServiceNote: "由家居维修团队负责，可按您的清单统一安排。",
    processTitle: "我们如何处理家居小维修",
    processIntro: "事先列好清单，一次上门才最划算。",
    processSteps: [
      { title: "整理清单", description: "了解您的清单并估算所需时间。" },
      { title: "按顺序施工", description: "合理安排顺序，把上门时间用满。" },
      { title: "修复或更换", description: "修好或更换损坏的部件。" },
      { title: "检查与清理", description: "逐项检查并清理现场。" },
    ],
    faqs: [
      { question: "多个小项目可以一次做完吗？", answer: "可以，而且这样最划算。请先把清单告诉我们，方便安排时间与材料。" },
      { question: "师傅会自带材料吗？", answer: "我们会带常用工具与基础材料；特定物件会事先确认，确保上门时齐备。" },
      { question: "小工作也需要预约吗？", answer: "需要，这样我们才能为您的清单预留足够时间。" },
      { question: "可以先来看一下再施工吗？", answer: "可以。清单较长时，我们会先确认范围再开始。" },
    ],
  },
};
