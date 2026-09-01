import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "排屋", note: "老旧管路、楼上浴室与屋后的排水管。" },
  { label: "共管公寓", note: "单位内的水管工程，遵守管理层的施工时间与规范。" },
  { label: "组屋公寓", note: "单位内浴室与厨房的小型维修。" },
  { label: "半独立式与独立式洋房", note: "管线更长，包括户外水管与水箱。" },
  { label: "办公室与店铺", note: "商业空间的厕所与洗手盆，需要尽快修复。" },
  { label: "装修项目", note: "水管工程安排在铺砖与防水之前完成。" },
];

const areasNote = "水管服务覆盖吉隆坡、雪兰莪与巴生谷的住宅与商业空间。";

const propertyTypesIntro = "楼龄与管线布局，决定我们如何定位与修复问题。";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "water-leakage": {
    ...base,
    name: "漏水",
    title: "Renovix Home Services | 吉隆坡与雪兰莪漏水检测与维修",
    metaDescription:
      "在吉隆坡与雪兰莪定位并修复漏水，避免墙面与天花受损。了解成因、警示迹象与解决方式。",
    h1: "漏水",
    subtitle:
      "漏水常常藏在墙内与地板下。Renovix 会找出源头、修复渗漏，阻止损坏继续扩大。",
    whatItMeans: [
      "漏水是指水从管路系统渗出到本应保持干燥的地方。它可能是接口处的小滴漏，也可能是墙内、地板下的隐蔽渗漏。",
      "隐蔽漏水通常先靠迹象被发现——水费上升、墙面潮湿或天花出现水渍——而不是看到明显的水。",
    ],
    commonCauses: [
      "接口、密封圈或配件老化渗水。",
      "墙内或地板下的水管锈蚀、破损。",
      "水龙头、马桶或热水器接口渗漏。",
      "隐蔽管路因老化或建筑位移而开裂。",
      "屋顶或水箱漏水进入建筑内部。",
      "装修或钻孔时意外破坏管路。",
    ],
    warningSigns: [
      "用水习惯没变，水费却上升。",
      "墙面、地板或天花出现潮湿或发软的区域。",
      "水源附近有霉味、霉斑或漆面脱落。",
      "听得见滴水声，或反复出现积水。",
    ],
    solutions: [
      { title: "追查源头", description: "在开墙或开地之前先定位水源。" },
      { title: "修复或更换管路", description: "修补渗漏段，或更换该段水管。" },
      { title: "修复受损表面", description: "把受影响的墙面、地板或天花恢复原状。" },
      { title: "复测确认", description: "重新测试系统，确认渗漏已完全停止。" },
    ],
    whenToCall: [
      "水费无故上升。",
      "潮湿区域不断扩大。",
      "所有水龙头关闭时仍听得见水声。",
      "上次维修后渗漏再次出现。",
    ],
    relatedServiceNote: "由水管团队负责；若渗水已影响结构，会配合防水工程。",
    processTitle: "我们如何修复漏水",
    processIntro: "先定位再动工，才能把开凿范围降到最低。",
    processSteps: [
      { title: "确认并定位渗漏", description: "检查水表、配件与潮湿区域。" },
      { title: "按需开凿", description: "只打开必要的部位以接近管路。" },
      { title: "修复源头", description: "修补或更换渗漏的管段与接口。" },
      { title: "测试与复原", description: "测试系统并恢复表面后交付。" },
    ],
    faqs: [
      { question: "怎么知道有隐蔽漏水？", answer: "水费上升、墙面潮湿、霉味，或水龙头全关时仍有水声，都是常见迹象。" },
      { question: "修漏水一定要打墙吗？", answer: "有时需要，但我们会先定位，尽量把开凿范围缩到最小。" },
      { question: "小漏水可以先不管吗？", answer: "不建议。持续渗水会慢慢破坏批荡、木作与天花。" },
      { question: "等师傅上门前该怎么做？", answer: "渗漏严重时先关总阀，并把物品移离潮湿区域。" },
    ],
  },
  "leaking-tap": {
    ...base,
    name: "水龙头漏水",
    title: "Renovix Home Services | 吉隆坡与雪兰莪水龙头漏水维修",
    metaDescription:
      "在吉隆坡与雪兰莪维修或更换滴水的水龙头。了解成因、警示迹象与解决方式。",
    h1: "水龙头漏水",
    subtitle:
      "滴水的水龙头既浪费水，也说明胶垫或阀芯已经磨损。Renovix 会维修或更换，让它彻底止住。",
    whatItMeans: [
      "水龙头漏水是指关闭之后仍在滴水，或水从手柄与底座周围渗出。",
      "看似小事，但持续滴水会累积成可观的用水量，也会在洗手盆上留下水垢与锈迹。",
    ],
    commonCauses: [
      "胶垫磨损，已经无法密封。",
      "阀芯或陶瓷片损坏。",
      "阀杆螺母或密封圈松动老化。",
      "水垢堆积，使龙头无法关严。",
      "龙头老旧或本身品质不佳，已过使用年限。",
      "龙头本体开裂，或底部接口松脱。",
    ],
    warningSigns: [
      "关紧之后仍然滴水。",
      "水从手柄或底座周围渗出。",
      "转动时有异响，或变得很紧。",
      "出水口周围出现水垢或锈迹。",
    ],
    solutions: [
      { title: "确认龙头型式", description: "型式决定所需的配件规格。" },
      { title: "更换磨损部件", description: "更换胶垫、阀芯或密封圈。" },
      { title: "更换龙头", description: "本体已损坏时，安装新的龙头。" },
      { title: "检查接口", description: "检查并紧固水槽下方的进水接口。" },
    ],
    whenToCall: [
      "关紧之后仍持续滴水。",
      "水槽下方或龙头底座有渗水。",
      "龙头变紧或转动时有异响。",
      "您打算更换老旧的水龙头。",
    ],
    relatedServiceNote: "由水管团队负责，通常一次上门即可完成。",
    processTitle: "我们如何维修漏水的水龙头",
    processIntro: "多数水龙头不必整支更换就能修好。",
    processSteps: [
      { title: "关闭供水", description: "施工前先关闭角阀。" },
      { title: "判断渗漏点", description: "检查胶垫、阀芯与密封圈。" },
      { title: "维修或更换", description: "更换磨损部件，或安装新龙头。" },
      { title: "测试与恢复供水", description: "恢复供水并测试出水与止水。" },
    ],
    faqs: [
      { question: "漏水的龙头一定要整支换吗？", answer: "多数不必。更换胶垫或阀芯即可，除非本体已经损坏。" },
      { question: "滴水会浪费多少水？", answer: "持续滴水一天可达数升，长期下来会明显反映在水费上。" },
      { question: "新装的龙头为什么也会漏？", answer: "通常是安装不到位、密封圈错位，或产品本身品质问题。" },
      { question: "可以自己修吗？", answer: "简单更换可以自行处理，但若橱柜内或墙面有渗水，最好请人检查。" },
    ],
  },
  "leaking-pipe": {
    ...base,
    name: "水管渗漏",
    title: "Renovix Home Services | 吉隆坡与雪兰莪水管渗漏维修",
    metaDescription:
      "在吉隆坡与雪兰莪定位并修复渗漏水管，包括墙内隐蔽管路。了解成因与解决方式。",
    h1: "水管渗漏",
    subtitle:
      "水管渗漏往往在您看见之前就已造成损坏。Renovix 会定位、修复并保护您的家。",
    whatItMeans: [
      "水管渗漏是指供水管或排水管因裂缝、孔洞或接口失效而漏水，位置可能在墙内、地板下或天花上方。",
      "由于管路多半是隐蔽的，批荡与天花的损坏，往往比渗漏本身更早被发现。",
    ],
    commonCauses: [
      "管壁锈蚀或出现细小孔洞。",
      "接头或配件失效、安装不当。",
      "水压过高，对管路造成额外负担。",
      "建筑位移或沉降使管路受力。",
      "老旧管路已超过使用年限。",
      "钻孔或装修时意外损伤管路。",
    ],
    warningSigns: [
      "墙面、地板或天花出现潮湿、发软或发热的区域。",
      "水槽下方、天花或地面出现积水。",
      "水费无故上升。",
      "出现霉味，或水渍逐渐扩大。",
    ],
    solutions: [
      { title: "定位渗漏管段", description: "在开凿表面之前先确认位置。" },
      { title: "修复该段管路", description: "切除损坏段并重新接管。" },
      { title: "更换老旧管路", description: "管路过旧时，整段更换更划算。" },
      { title: "配合表面修复", description: "开凿处的批荡、瓷砖或天花一并复原。" },
    ],
    whenToCall: [
      "潮湿区域不断扩大。",
      "天花滴水，或地面出现积水。",
      "水费无故上升。",
      "老旧管路已经在多处渗漏。",
    ],
    relatedServiceNote: "由水管团队负责，并由瓷砖或天花团队配合复原。",
    processTitle: "我们如何修复渗漏水管",
    processIntro: "先定位，把破坏范围降到最低。",
    processSteps: [
      { title: "隔离管路", description: "关闭该段管路的供水。" },
      { title: "定位渗漏点", description: "在开凿前确定准确位置。" },
      { title: "修复或更换", description: "重新接管或更换该段管路。" },
      { title: "测试与复原", description: "测试后恢复表面。" },
    ],
    faqs: [
      { question: "墙内的渗漏怎么找？", answer: "结合潮湿分布、压力测试，以及对最可能的接口位置逐一排查。" },
      { question: "一处漏水就要全屋换管吗？", answer: "不一定。但若管路老旧且反复渗漏，分段更换更值得。" },
      { question: "维修需要多久？", answer: "局部维修多半一次上门完成；涉及开墙的工程则需要额外时间做复原。" },
      { question: "渗漏会影响结构吗？", answer: "长期潮湿会损坏批荡、木作与饰面，因此越早修越好。" },
    ],
  },
  "blocked-drain": {
    ...base,
    name: "排水堵塞",
    title: "Renovix Home Services | 吉隆坡与雪兰莪排水堵塞疏通",
    metaDescription:
      "在吉隆坡与雪兰莪疏通堵塞的排水管，并提供防止复发的建议。了解成因与解决方式。",
    h1: "排水堵塞",
    subtitle:
      "排水堵塞会造成积水与异味。Renovix 会疏通管道，并帮您减少复发的机会。",
    whatItMeans: [
      "排水堵塞是指排水管因内部阻塞而无法顺畅排水，可能发生在洗手盆、浴室、地漏或主排水管。",
      "堵塞很少突然发生，通常是慢慢累积，直到水流变得极慢甚至完全不通。",
    ],
    commonCauses: [
      "浴室排水管内积累的毛发与皂垢。",
      "厨房排水管里的油脂与食物残渣。",
      "掉入或被冲进管道的异物。",
      "水垢长年累积，使管径变窄。",
      "容易挂住杂物的接头或弯头。",
      "主管道或阴井处更深层的堵塞。",
    ],
    warningSigns: [
      "洗手盆、浴缸或淋浴排水缓慢或有咕噜声。",
      "水在盆内或地漏处积着不退。",
      "排水口散发异味。",
      "同一条管线上的多个出水口同时不畅。",
    ],
    solutions: [
      { title: "定位堵塞位置", description: "判断是局部堵塞还是主管道问题。" },
      { title: "疏通管道", description: "按管材选择合适方式清除堵塞。" },
      { title: "检查管路状况", description: "检查是否有破损或严重结垢。" },
      { title: "给出预防建议", description: "说明日常做法，减少再次堵塞。" },
    ],
    whenToCall: [
      "排水极慢或完全不通。",
      "多个出水口同时堵塞。",
      "清理之后异味仍然持续。",
      "堵塞在短时间内反复出现。",
    ],
    relatedServiceNote: "由水管团队负责，涵盖室内与室外排水。",
    processTitle: "我们如何疏通堵塞的排水",
    processIntro: "只清一次而不看原因，堵塞很快就会回来。",
    processSteps: [
      { title: "确认受影响管线", description: "检查哪些出水口受到影响。" },
      { title: "清除堵塞", description: "以合适方式疏通管道。" },
      { title: "冲洗与测试", description: "冲洗管道并测试排水速度。" },
      { title: "预防建议", description: "说明成因，避免再次发生。" },
    ],
    faqs: [
      { question: "用化学疏通剂安全吗？", answer: "轻微堵塞有一定效果，但频繁使用会伤害老旧管路。反复堵塞应该检查。" },
      { question: "厨房排水为什么特别容易堵？", answer: "油脂在管壁凝结，会不断挂住食物残渣，使管径越来越窄。" },
      { question: "多个排水口同时不通代表什么？", answer: "说明堵塞在主管道，而不只是某一个出水口。" },
      { question: "怎样避免反复堵塞？", answer: "使用地漏滤网、不要把油倒入水槽，并定期冲洗管道。" },
    ],
  },
  "toilet-problems": {
    ...base,
    name: "马桶故障",
    title: "Renovix Home Services | 吉隆坡与雪兰莪马桶维修",
    metaDescription:
      "在吉隆坡与雪兰莪维修不停流水、渗漏或冲力不足的马桶。了解成因、警示迹象与解决方式。",
    h1: "马桶故障",
    subtitle:
      "不停流水、渗漏或冲力不足的马桶既浪费水，也会损坏地板。Renovix 会连同原因一起修好。",
    whatItMeans: [
      "马桶故障包括持续进水、冲力不足、底座渗水，以及频繁堵塞等情况。",
      "多数问题出在水箱内的机件或底部密封件上，通常不必更换整个马桶。",
    ],
    commonCauses: [
      "排水阀胶垫磨损或未能对位，导致持续漏水。",
      "进水阀故障，或浮球水位设定不当。",
      "冲水孔或存水弯堵塞，造成冲力不足。",
      "底部密封失效，或马桶本体开裂。",
      "排水管堵塞造成返水。",
      "马桶老旧，或当初安装不到位。",
    ],
    warningSigns: [
      "马桶持续流水，水箱不停进水。",
      "冲水无力，无法冲净。",
      "马桶底座周围出现积水。",
      "有咕噜声，或经常堵塞。",
    ],
    solutions: [
      { title: "诊断问题", description: "检查水箱机件、密封件与排水管。" },
      { title: "维修机件", description: "更换或调整进水阀与排水阀。" },
      { title: "修复底座渗漏", description: "更换密封件并重新安装到位。" },
      { title: "更换马桶", description: "本体开裂或过于老旧时，建议更换。" },
    ],
    whenToCall: [
      "马桶持续流水，水费明显上升。",
      "底座渗水，地面长期潮湿。",
      "没有明显堵塞，冲力却很弱。",
      "马桶无故频繁堵塞。",
    ],
    relatedServiceNote: "由水管团队负责，也包括新马桶的安装。",
    processTitle: "我们如何维修马桶",
    processIntro: "多数马桶问题，更换内部配件就能解决。",
    processSteps: [
      { title: "关水与检查", description: "关闭进水后检查机件。" },
      { title: "维修配件", description: "更换磨损部件并调整水位。" },
      { title: "必要时更换", description: "只有在维修不划算时才建议更换。" },
      { title: "测试确认", description: "测试冲水与密封后交付。" },
    ],
    faqs: [
      { question: "马桶为什么一直在流水？", answer: "通常是排水阀密封不严，或进水阀无法在正确水位停止。" },
      { question: "底座渗水严重吗？", answer: "应该检查。多半是密封失效，渗水长期下去会损坏地板。" },
      { question: "冲力不足是什么原因？", answer: "最常见是冲水孔或存水弯堵塞，或水箱水位太低。" },
      { question: "老马桶值得修吗？", answer: "多数值得，内部配件容易更换；但本体开裂时更换更实际。" },
    ],
  },
  "low-water-pressure": {
    ...base,
    name: "水压不足",
    title: "Renovix Home Services | 吉隆坡与雪兰莪水压不足检修",
    metaDescription:
      "在吉隆坡与雪兰莪检查并改善水压不足，从堵塞的配件到供水问题逐一排查。了解成因与解决方式。",
    h1: "水压不足",
    subtitle:
      "淋浴或水龙头水压偏弱，多半是管路或供水的问题。Renovix 会找出原因，恢复稳定的水流。",
    whatItMeans: [
      "水压不足是指出水比正常情况明显偏弱，可能只发生在某一个出水口，也可能是全屋都受影响。",
      "先分清是单点还是全屋，这是第一步——两者指向完全不同的原因。",
    ],
    commonCauses: [
      "起泡器、阀芯或花洒被水垢堵塞。",
      "角阀或总阀没有完全打开。",
      "供水管因结垢或杂质而变窄。",
      "建筑供水或市政水网的压力问题。",
      "进户管管径偏小，不足以应付用水量。",
      "高层单位的增压泵故障或功率不足。",
    ],
    warningSigns: [
      "花洒、水龙头或全屋出水偏弱。",
      "花洒只是滴水而不成水流。",
      "某一个出水口弱，其他正常。",
      "同时使用其他设备时水压明显下降。",
    ],
    solutions: [
      { title: "判断影响范围", description: "确认是单个出水口还是整户的问题。" },
      { title: "清理堵塞的配件", description: "清除水垢或更换堵塞的部件。" },
      { title: "检查阀门与管路", description: "检查阀门开度与管路是否受阻。" },
      { title: "处理供水或评估增压", description: "若源自供水，会说明可行的方案。" },
    ],
    whenToCall: [
      "全屋水压都偏弱。",
      "水压突然下降且原因不明。",
      "只有热水或只有某一间浴室受影响。",
      "您想知道是否需要安装增压泵。",
    ],
    relatedServiceNote: "由水管团队负责，包括阀门与配件的检查。",
    processTitle: "我们如何改善水压",
    processIntro: "从出水口一路查到总阀，找出受阻的位置。",
    processSteps: [
      { title: "测试水流", description: "在多个出水口测试实际水流。" },
      { title: "检查配件", description: "检查起泡器、阀芯与花洒。" },
      { title: "检查阀门与管路", description: "确认角阀开度与供水管状况。" },
      { title: "提出方案", description: "说明维修或改善的可行做法。" },
    ],
    faqs: [
      { question: "为什么只有一个花洒水压弱？", answer: "多半是花洒或阀芯结垢，清理或更换即可。" },
      { question: "为什么洗衣机一运行水压就下降？", answer: "多个出水点共用同一供水。若进户管偏小，用水量一高压力就会掉。" },
      { question: "每户都适合装增压泵吗？", answer: "并非如此。它在特定情况下有用，但必须先确认原因再决定。" },
      { question: "水压低是漏水的信号吗？", answer: "有可能。若水压下降同时水费上升，就应该排查渗漏。" },
    ],
  },
};
