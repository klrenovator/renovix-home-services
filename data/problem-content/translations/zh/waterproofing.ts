import type { ProblemPropertyType } from "../../types";
import type { ProblemTranslations } from "../types";

const propertyTypes: ProblemPropertyType[] = [
  { label: "排屋", note: "屋顶、楼上浴室与常年淋雨的外墙。" },
  { label: "共管公寓", note: "浴室、阳台，以及单位之间的共用墙。" },
  { label: "组屋公寓", note: "浴室与潮湿区域的局部防水工程。" },
  { label: "半独立式与独立式洋房", note: "平屋顶、阳台与面积更大的外墙。" },
  { label: "办公室与店铺", note: "商业空间的洗手间、屋顶与外墙。" },
  { label: "装修项目", note: "防水层在铺砖与饰面之前完成。" },
];

const areasNote = "防水与堵漏服务覆盖吉隆坡、雪兰莪与巴生谷。";

const propertyTypesIntro = "渗漏原因因建筑而异，因此我们会先做检查再动工。";

const base = { propertyTypes, areasNote, propertyTypesIntro };

export const translations: ProblemTranslations = {
  "roof-leakage": {
    ...base,
    name: "屋顶漏水",
    title: "Renovix Home Services | 吉隆坡与雪兰莪屋顶漏水维修",
    metaDescription:
      "在吉隆坡与雪兰莪定位并修复屋顶漏水，做好防水处理。了解成因、警示迹象与解决方式。",
    h1: "屋顶漏水",
    subtitle:
      "屋顶一漏，雨下多久就渗多久。Renovix 会找出入水点，做好防水，从源头止住渗漏。",
    whatItMeans: [
      "屋顶漏水，是指雨水从屋面材料、接缝或已经失效的防水层找到了进入室内的通道。",
      "入水点很少正好在天花水渍的正上方。水会沿着结构流动一段距离才滴落，所以必须仔细排查。",
    ],
    commonCauses: [
      "瓦片开裂、移位或破损。",
      "平屋顶的防水层已过使用年限。",
      "排水沟与落水管堵塞导致积水回流。",
      "屋面与墙体交接处的泛水收边翘起。",
      "金属屋面的孔洞或接缝失效。",
      "年久与风吹日晒使保护层老化。",
    ],
    warningSigns: [
      "屋顶下方的天花或墙面出现水渍。",
      "大雨中或雨后出现滴水。",
      "顶层或夹层有霉味、霉斑。",
      "天花漆面起泡，或局部开始下垂。",
    ],
    solutions: [
      { title: "定位渗漏源头", description: "检查屋面，找出真正的入水点。" },
      { title: "修复屋面材料", description: "修补或更换破损的瓦片、泛水与板材。" },
      { title: "施作屋面防水", description: "对暴露部位使用合适的防水系统。" },
      { title: "修复室内损坏", description: "止漏之后再复原天花与墙面。" },
    ],
    whenToCall: [
      "每逢大雨天花就滴水。",
      "天花水渍不断扩大。",
      "上次修补后渗漏又出现。",
      "屋顶年久，从未做过防水处理。",
    ],
    relatedServiceNote: "由防水团队负责，止漏后再由天花团队复原。",
    processTitle: "我们如何修复屋顶漏水",
    processIntro: "先处理源头，而不是只把天花的水渍盖住。",
    processSteps: [
      { title: "检查屋顶", description: "查看瓦片、泛水与排水沟。" },
      { title: "修复源头", description: "修补或更换受损部位。" },
      { title: "复查是否还有渗点", description: "重新测试，确认没有其他入水口。" },
      { title: "修复室内", description: "复原天花并重新上漆。" },
    ],
    faqs: [
      { question: "为什么只有大雨时才漏？", answer: "有些渗点要在雨量大或风向把水推向特定接缝时才会显现。" },
      { question: "整个屋顶都要做防水吗？", answer: "不一定。若损坏是局部的，可以只针对该区域处理。" },
      { question: "可以先修天花吗？", answer: "不建议。水没止住，新天花很快又会坏。" },
      { question: "防水层能用多久？", answer: "取决于所用系统与暴露程度，我们会在动工前说明预期年限。" },
    ],
  },
  "bathroom-leakage": {
    ...base,
    name: "浴室渗漏",
    title: "Renovix Home Services | 吉隆坡与雪兰莪浴室渗漏维修",
    metaDescription:
      "在吉隆坡与雪兰莪修复浴室渗漏，为潮湿区域重做防水。了解成因、警示迹象与解决方式。",
    h1: "浴室渗漏",
    subtitle:
      "浴室渗漏总会找到路渗到楼下。Renovix 会找出源头、重做防水，止住损坏。",
    whatItMeans: [
      "浴室渗漏是指水从潮湿区域渗出，通常经由失效的防水层、开裂的填缝或隐蔽管路。",
      "最先出现的迹象，往往是在楼下房间的天花或墙面，而不是浴室本身。",
    ],
    commonCauses: [
      "瓷砖下的防水层失效，或当初根本没有做。",
      "填缝开裂或缺失，水从缝隙渗入。",
      "空鼓或开裂的瓷砖给了水通路。",
      "水管、存水弯或马桶接口渗漏。",
      "防水只做了地面，湿区墙面没有做。",
      "淋浴区从未做过规范的防水。",
    ],
    warningSigns: [
      "浴室下方的天花出现水渍或潮湿区域。",
      "邻近墙面有霉味、霉斑或漆面脱落。",
      "地面积水，或排水缓慢。",
      "潮湿区域的瓷砖空鼓或翘起。",
    ],
    solutions: [
      { title: "定位渗漏", description: "判断是管路渗漏还是防水层失效。" },
      { title: "重做湿区防水", description: "地面与湿区墙面重新施作防水层。" },
      { title: "修复瓷砖与填缝", description: "重铺瓷砖并更新填缝。" },
      { title: "修复管路源头", description: "若源头是水管，先修好再做面层。" },
    ],
    whenToCall: [
      "浴室下方的天花出现水渍。",
      "浴室附近的墙面长期潮湿。",
      "浴室瓷砖空鼓或翘起。",
      "上次维修后渗漏又出现。",
    ],
    relatedServiceNote: "由防水团队负责，必要时配合瓷砖与水管工程。",
    processTitle: "我们如何修复浴室渗漏",
    processIntro: "防水必须覆盖地面与湿区墙面，只做地面并不够。",
    processSteps: [
      { title: "定位渗漏", description: "检查管路、填缝与湿区状况。" },
      { title: "修复源头", description: "先修好渗漏的管路或失效部位。" },
      { title: "重做防水", description: "施作防水层并充分养护。" },
      { title: "铺砖收口", description: "重铺瓷砖并做好接缝密封。" },
    ],
    faqs: [
      { question: "做防水一定要敲掉全部瓷砖吗？", answer: "视源头而定。局部问题有时只需处理湿区；完整防水则需要打开瓷砖。" },
      { question: "只重做填缝能止漏吗？", answer: "填缝有帮助，但它不是防水层。防水层失效的话，换填缝解决不了。" },
      { question: "浴室要停用多久？", answer: "取决于施工范围与防水层养护时间，我们会在动工前说明。" },
      { question: "如果是楼上渗下来的怎么办？", answer: "我们可以协助确认源头，让与相关方的沟通更有依据。" },
    ],
  },
  "balcony-leakage": {
    ...base,
    name: "阳台渗漏",
    title: "Renovix Home Services | 吉隆坡与雪兰莪阳台渗漏防水",
    metaDescription:
      "在吉隆坡与雪兰莪为渗漏的阳台重做防水，保护楼下空间。了解成因、警示迹象与解决方式。",
    h1: "阳台渗漏",
    subtitle:
      "阳台渗水到楼下，是防水问题。Renovix 会规范地做好封堵，保护下方房间。",
    whatItMeans: [
      "阳台渗漏是指雨水穿过阳台地面渗入楼板，进而影响下方空间。",
      "阳台常年日晒雨淋，防水层与边缘密封的老化速度，比室内区域快得多。",
    ],
    commonCauses: [
      "阳台地面的防水层已经失效。",
      "瓷砖开裂或空鼓，让水直达楼板。",
      "阳台边缘、踢脚或女儿墙处出现裂缝。",
      "地漏堵塞或密封不良，造成积水。",
      "日晒与热胀冷缩破坏密封胶与防水层。",
      "当初的铺砖或防水施工不到位。",
    ],
    warningSigns: [
      "阳台下方的天花或墙面出现水渍。",
      "雨后阳台地面积水或排水缓慢。",
      "阳台瓷砖空鼓、松动或开裂。",
      "楼下房间有霉味或霉斑。",
    ],
    solutions: [
      { title: "定位渗漏", description: "检查地面、边缘与地漏。" },
      { title: "重做阳台防水", description: "以正确坡度施作新的防水层。" },
      { title: "修复瓷砖与密封", description: "更换破损瓷砖并重新打胶。" },
      { title: "修复排水", description: "疏通或改善地漏，确保排水顺畅。" },
    ],
    whenToCall: [
      "阳台下方天花出现水渍。",
      "雨后阳台积水不退。",
      "阳台瓷砖开裂或空鼓。",
      "阳台自交房以来从未重做防水。",
    ],
    relatedServiceNote: "由防水团队负责，面层由瓷砖团队配合完成。",
    processTitle: "我们如何修复阳台渗漏",
    processIntro: "坡度与边缘，是阳台最常出问题的两个地方。",
    processSteps: [
      { title: "检查阳台", description: "查看瓷砖、边缘与排水情况。" },
      { title: "处理基面", description: "拆除破损瓷砖并整理基层。" },
      { title: "施作防水", description: "施作防水层，边缘一并上翻。" },
      { title: "密封收口", description: "重铺瓷砖并做好接缝密封。" },
    ],
    faqs: [
      { question: "阳台瓷砖一定要敲掉吗？", answer: "做完整防水需要。若只是局部损坏，有时表面处理即可。" },
      { question: "为什么新阳台也会渗漏？", answer: "常见原因是坡度不对、地漏堵塞，或原防水层没有做到边缘上翻。" },
      { question: "施工期间阳台能用吗？", answer: "防水层养护期间不行，我们会说明需要等待的时间。" },
      { question: "防水层需要定期翻新吗？", answer: "需要。它长期暴露在户外，应定期检查与维护。" },
    ],
  },
  "wall-seepage": {
    ...base,
    name: "墙体渗水",
    title: "Renovix Home Services | 吉隆坡与雪兰莪墙体渗水处理",
    metaDescription:
      "在吉隆坡与雪兰莪处理墙体渗水，先判断水从哪一侧进来再施工。了解成因与解决方式。",
    h1: "墙体渗水",
    subtitle:
      "水穿过墙体，正是潮湿与霉菌的根源。Renovix 会判断水从哪一侧来，并做好封堵。",
    whatItMeans: [
      "墙体渗水是指水穿过墙体结构，在室内一侧的墙面上表现为潮湿区域。",
      "它与结露不同：渗水来自室外或隔壁的潮湿区域，通常在下雨之后更明显。",
    ],
    commonCauses: [
      "雨水拍打外墙并渗入砖体。",
      "墙体裂缝或接缝失效。",
      "共用墙另一侧的潮湿区域渗水过来。",
      "缺乏防潮层导致地面返潮。",
      "排水不良，墙根长期积水。",
      "外侧水压把水推入墙体。",
    ],
    warningSigns: [
      "室内墙面出现潮湿区域或漆面起泡。",
      "墙面出现霉斑或霉味。",
      "雨后水渍扩大或颜色变深。",
      "潮湿出现在靠外墙或共用墙的位置。",
    ],
    solutions: [
      { title: "判断进水方向", description: "确认水来自室外、地面还是隔壁。" },
      { title: "修复源头", description: "先处理裂缝、接缝或渗漏。" },
      { title: "施作防水屏障", description: "在正确的一侧做防水处理。" },
      { title: "修复并重新上漆", description: "墙体干燥后再修补批荡并上漆。" },
    ],
    whenToCall: [
      "雨后室内墙面持续潮湿。",
      "同一位置的漆面反复脱落。",
      "清理之后霉斑又长回来。",
      "您不确定水从哪里进来。",
    ],
    relatedServiceNote: "由防水团队负责，墙体干燥后再由油漆团队收面。",
    processTitle: "我们如何处理墙体渗水",
    processIntro: "做错一侧，水照样进来。",
    processSteps: [
      { title: "评估墙体", description: "检查墙体两侧与潮湿分布。" },
      { title: "修复源头", description: "修补裂缝与失效接缝。" },
      { title: "封堵或防水", description: "在受水的一侧施作防水层。" },
      { title: "修补上漆", description: "修复批荡并重新上漆。" },
    ],
    faqs: [
      { question: "可以从室内做防水吗？", answer: "有时可以，但从外侧处理通常更有效，因为它在水进入之前就挡住了。" },
      { question: "为什么同一处的漆总是脱落？", answer: "因为潮气仍在墙体内移动。源头不解决，新漆撑不久。" },
      { question: "渗水和返潮是一回事吗？", answer: "不是。返潮从墙根开始，渗水则可能发生在墙体任何位置。" },
      { question: "墙体要干多久才能上漆？", answer: "取决于受潮程度。太早上漆会让问题重演。" },
    ],
  },
  "damp-walls": {
    ...base,
    name: "墙体潮湿",
    title: "Renovix Home Services | 吉隆坡与雪兰莪墙体潮湿处理",
    metaDescription:
      "在吉隆坡与雪兰莪处理长期潮湿的墙体，先分辨潮湿类型再对症施工。了解成因与解决方式。",
    h1: "墙体潮湿",
    subtitle:
      "墙体潮湿是持续性的水汽问题。Renovix 会找出它为什么一直干不了，并彻底处理。",
    whatItMeans: [
      "墙体潮湿是指墙面因持续水汽而保持湿冷，来源可能是结露、渗水或渗漏。",
      "分辨潮湿类型很关键——处理结露的方法，与处理渗水或漏水完全不同。",
    ],
    commonCauses: [
      "湿度高、通风差造成的结露。",
      "水从外墙或共用墙渗入。",
      "缺乏防潮层的墙根返潮。",
      "附近的水管、屋顶或设备渗漏。",
      "排水不良，墙根长期积水。",
      "墙体从未做过密封或防水。",
    ],
    warningSigns: [
      "墙面摸起来潮冷，颜色偏深。",
      "墙面出现霉斑或霉味。",
      "同一片区域的漆面反复起泡、发黄。",
      "墙根或靠近潮湿区域的位置发潮。",
    ],
    solutions: [
      { title: "分辨潮湿类型", description: "区分结露、渗水与渗漏。" },
      { title: "断开水汽来源", description: "修复源头或改善通风。" },
      { title: "处理并做防水", description: "按问题类型对墙体做相应处理。" },
      { title: "修补并重新上漆", description: "墙体干透后再修面上漆。" },
    ],
    whenToCall: [
      "天气干燥时墙面仍然潮湿。",
      "同一区域反复长霉。",
      "漆面脱落或批荡剥落。",
      "您分不清是结露还是漏水。",
    ],
    relatedServiceNote: "由防水团队负责，最后由油漆团队完成饰面。",
    processTitle: "我们如何处理潮湿墙体",
    processIntro: "对症处理，先从判断潮湿类型开始。",
    processSteps: [
      { title: "评估潮湿情况", description: "检查分布、位置与可能的原因。" },
      { title: "修复源头", description: "处理渗漏、排水或通风问题。" },
      { title: "处理与防水", description: "按合适的系统对墙体施工。" },
      { title: "修补上漆", description: "墙体干燥后恢复饰面。" },
    ],
    faqs: [
      { question: "怎么分辨结露和渗水？", answer: "结露多出现在较冷的表面并随时段变化；渗水则在雨后明显加重。" },
      { question: "特殊涂料能解决潮湿吗？", answer: "在源头处理之后有帮助，但水还在进来的话，涂料解决不了问题。" },
      { question: "改善通风就够了吗？", answer: "对结露有明显帮助；对渗水或漏水则不够。" },
      { question: "墙体要多久才会干？", answer: "取决于墙体厚度与受潮程度，我们会在收面前给出建议。" },
    ],
  },
  "water-stains": {
    ...base,
    name: "水渍",
    title: "Renovix Home Services | 吉隆坡与雪兰莪水渍处理",
    metaDescription:
      "在吉隆坡与雪兰莪追查并处理墙面与天花的水渍，而不是简单盖漆。了解成因与解决方式。",
    h1: "水渍",
    subtitle:
      "水渍是应该追查的潮气痕迹，而不是随手盖漆就好。Renovix 会找出原因，恢复干净的表面。",
    whatItMeans: [
      "水渍是墙面或天花上黄褐色或深色的痕迹，说明这里曾经、或仍在渗水。",
      "仍在活动的水渍会透过新漆再现，所以第一步是判断水源是否已经停止。",
    ],
    commonCauses: [
      "上方的屋顶、水管或设备缓慢渗漏。",
      "雨后水从外墙或共用墙渗入。",
      "结露与湿气在某处集中。",
      "防水层失效。",
      "旧渍从未处理，只是被漆盖住。",
      "隔壁浴室或潮湿区域渗漏。",
    ],
    warningSigns: [
      "黄褐色或深色痕迹持续扩大。",
      "雨后颜色变深。",
      "水渍伴随漆面起泡或表面发软。",
      "墙面或天花出现多处水渍。",
    ],
    solutions: [
      { title: "判断水渍类型", description: "区分仍在活动的渗水与陈旧痕迹。" },
      { title: "找出并止住源头", description: "先止水再做饰面。" },
      { title: "处理并封闭水渍", description: "使用封渍底漆，防止渗色透出。" },
      { title: "重新粉刷", description: "补漆到与周围一致。" },
    ],
    whenToCall: [
      "补漆之后水渍又出现。",
      "水渍在雨后扩大或变深。",
      "墙面或天花有多处水渍。",
      "您不确定水从哪里来。",
    ],
    relatedServiceNote: "视源头由防水团队与油漆团队共同处理。",
    processTitle: "我们如何处理水渍",
    processIntro: "只有水源停止，水渍才会真正停止。",
    processSteps: [
      { title: "评估水渍", description: "判断水渍是否仍在活动。" },
      { title: "止住源头", description: "修复渗漏或渗水通道。" },
      { title: "处理与封闭", description: "清洁后涂上封渍底漆。" },
      { title: "重新上漆", description: "上面漆直到色泽一致。" },
    ],
    faqs: [
      { question: "可以直接把水渍盖住吗？", answer: "只有在水源已经停止、并使用封渍底漆的前提下可以，否则它会再次浮现。" },
      { question: "怎么判断水渍还在活动？", answer: "如果它扩大、雨后变深，或摸起来潮湿，就说明还在渗。" },
      { question: "水渍一定代表漏水吗？", answer: "多数是，但严重结露也会在某些表面留下痕迹。" },
      { question: "批荡需要更换吗？", answer: "若批荡已经酥软剥落，需要铲除更换后再上漆。" },
    ],
  },
};
