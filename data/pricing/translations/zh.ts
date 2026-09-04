import type { PricingTranslation } from "../types";

/**
 * Chinese copy for the pricing table rows. Only the human-readable fields are
 * translated — every number, unit and price stays in the English source of
 * truth (`pricing.ts`) so a translation can never change a price.
 */
export const zhPricingTranslations: Record<string, PricingTranslation> = {
  "plumbing-callout": {
    subService: "水管检查与诊断",
    scope: "吉隆坡与雪兰莪的水管问题现场检查与诊断。若确认继续维修，检查费可豁免。",
    duration: "现场 30–60 分钟",
  },
  "plumbing-pipe-leak-visible": {
    subService: "可见水管漏水维修",
    scope: "可直接接触的漏水管（PVC/ABS）维修，长度最多 1 米，包含密封与测试。",
    duration: "1–3 小时",
  },
  "plumbing-hidden-leak": {
    subService: "墙内暗管漏水维修",
    scope: "墙内暗管漏水的检测与维修，包含开孔、修补及基本批灰。",
    duration: "半天至 1 天",
  },
  "plumbing-tap-replacement": {
    subService: "水龙头／水嘴更换",
    scope: "更换洗手盆或厨房水龙头，包含工钱与基本安装配件。水龙头本身价格视品牌而定。",
    duration: "每个水龙头 30–90 分钟",
  },
  "plumbing-toilet-repair": {
    subService: "马桶冲水与配件维修",
    scope: "维修马桶冲水系统、进水阀、水塞或底座漏水。",
    duration: "1–2 小时",
  },
  "plumbing-drain-unblock": {
    subService: "排水管与马桶疏通",
    scope: "使用手工具或通渠机疏通阻塞的马桶、洗手盆或地漏。",
    duration: "30 分钟 – 2 小时",
  },
  "plumbing-water-heater-install": {
    subService: "热水器安装",
    scope: "即热式或储水式热水器安装、水管接驳，并协调所需电源点位。",
    duration: "1–3 小时",
  },
  "waterproofing-bathroom-hack": {
    subService: "浴室防水、拆砖与重铺",
    scope: "浴室全面重做防水：敲除旧瓷砖、涂布水泥基或 PU 防水层、蓄水测试、找平并重铺新瓷砖。",
    duration: "5–8 个工作天，含养护时间",
  },
  "waterproofing-pu-injection": {
    subService: "天花漏水 PU 注浆",
    scope: "以 PU 灌浆封堵天花或墙身裂缝的活跃渗漏。适用情况下按每间浴室天花计价。",
    duration: "2–4 小时",
  },
  "waterproofing-flat-roof": {
    subService: "平屋顶防水",
    scope: "平屋顶、屋顶露台或车棚防水，采用热熔卷材或 PU 液体防水层。",
    duration: "200–600 平方英尺需 2–5 天",
  },
  "waterproofing-balcony": {
    subService: "阳台与庭院防水",
    scope: "已铺砖阳台或后院防水，包含敲砖、防水层及重铺瓷砖或找平层。",
    duration: "3–6 天",
  },
  "waterproofing-wall-seepage": {
    subService: "墙面渗水与外墙涂层",
    scope: "针对外墙受潮、泛碱或渗水的防水涂层处理。",
    duration: "每个立面 1–3 天",
  },
  "tiling-floor-ceramic": {
    subService: "陶瓷地砖铺设",
    scope: "在已找平的地面供应并铺设标准陶瓷地砖，包含瓷砖胶与填缝剂。",
    duration: "100–200 平方英尺需 2–4 天",
  },
  "tiling-porcelain": {
    subService: "瓷砖铺设",
    scope: "供应并铺设中档 60x60cm 瓷质地砖，包含水平检查。",
    duration: "每 100–200 平方英尺 3–5 天",
  },
  "tiling-bathroom-complete": {
    subService: "完整浴室铺砖",
    scope: "浴室地面与墙面铺砖全流程：基面处理、防水协调、铺贴、填缝与踢脚线。",
    duration: "4–7 天",
  },
  "tiling-repair": {
    subService: "瓷砖维修与更换",
    scope: "更换破裂、空鼓或松脱的瓷砖，无需整个区域重铺。",
    duration: "少量瓷砖 2–5 小时",
  },
  "tiling-hacking": {
    subService: "瓷砖拆除",
    scope: "敲除并清走既有瓷砖，包含建筑废料处理。",
    duration: "每 100 平方英尺 1–2 天",
  },
  "painting-interior": {
    subService: "室内墙面刷漆",
    scope: "室内墙面油漆，包含基面处理、底漆及两道中档乳胶漆。",
    duration: "1000 平方英尺需 2–4 天",
  },
  "painting-exterior": {
    subService: "外墙刷漆",
    scope: "外墙油漆，使用户外耐候漆或同级产品，包含基面处理与防护涂层。",
    duration: "排屋需 3–6 天",
  },
  "painting-full-house": {
    subService: "全屋刷漆配套",
    scope: "典型 20x70 排屋的室内外全屋重新油漆，含工钱与油漆。",
    duration: "排屋需 4–7 天",
  },
  "painting-touchup-repair": {
    subService: "墙面修补与补漆",
    scope: "修复开裂、剥落、发霉或受水损的墙面，包含批灰、防霉处理与重新上漆。",
    duration: "视干燥情况 1–3 天",
  },
  "electrical-socket-add": {
    subService: "增加电源插座／插头点位",
    scope: "在既有点位旁或以明装线槽方式新增 13A 电源插座点位。",
    duration: "每个点位 30–60 分钟",
  },
  "electrical-light-point": {
    subService: "灯位安装",
    scope: "新增灯位，含布线与开关接驳，适用于筒灯或吊灯。",
    duration: "每个点位 30–60 分钟",
  },
  "electrical-fan-install": {
    subService: "吊扇安装",
    scope: "吊扇安装，可含或不含明装布线，包含吊钩与测试。",
    duration: "每台风扇 45–90 分钟",
  },
  "electrical-db-box": {
    subService: "DB 配电箱／用户单元更换",
    scope: "更换单相或三相配电箱，含 MCB 与 RCCB/ELCB。",
    duration: "半天",
  },
  "electrical-full-wiring": {
    subService: "全屋电线铺设",
    scope: "排屋全屋布线或重新布线，包含灯位、电源点位、配电箱与测试。",
    duration: "5–10 天",
  },
  "electrical-troubleshoot": {
    subService: "电力故障排查与跳闸维修",
    scope: "跳电、短路、插座或开关故障的诊断与维修。",
    duration: "1–3 小时",
  },
  "flooring-spc": {
    subService: "SPC 地板铺设",
    scope: "供应并安装 SPC 石塑复合地板，采用锁扣系统及预贴静音垫。",
    duration: "500–1000 平方英尺需 1–3 天",
  },
  "flooring-vinyl": {
    subService: "塑胶地板铺设",
    scope: "供应并安装 LVT 乙烯基地板，适合睡房与客厅。",
    duration: "500 平方英尺需 1–2 天",
  },
  "flooring-laminate": {
    subService: "复合地板铺设",
    scope: "供应并安装家用强化复合地板。",
    duration: "1–3 天",
  },
  "flooring-hacking": {
    subService: "旧地板拆除",
    scope: "敲除并清走既有瓷砖或地板，含废料处理。",
    duration: "1–3 天",
  },
  "flooring-repair": {
    subService: "地板维修（起拱／损坏）",
    scope: "修复起鼓、不平或受损的地板区域，包含找平处理。",
    duration: "半天至 2 天",
  },
  "ceiling-flat": {
    subService: "平板石膏天花",
    scope: "供应并安装平面石膏天花，采用 9mm 石膏板、金属骨架及饰面处理。",
    duration: "300–500 平方英尺需 2–4 天",
  },
  "ceiling-lbox": {
    subService: "L 盒与灯槽天花",
    scope: "L 型灯槽天花设计，可隐藏 LED 灯带，适合客厅使用。",
    duration: "3–5 天",
  },
  "partition-drywall": {
    subService: "轻钢龙骨隔墙安装",
    scope: "供应并安装标准石膏板间隔墙，双面 12mm 石膏板。",
    duration: "每 100–200 平方英尺 2–4 天",
  },
  "ceiling-repair": {
    subService: "天花维修（裂缝、下垂、水损）",
    scope: "修复开裂、下垂或受水损的石膏天花，包含加固与批灰。",
    duration: "1–3 天",
  },
  "welding-grille-window": {
    subService: "窗花制作",
    scope: "以低碳钢或不锈钢制作并安装窗花，包含焊接与油漆。",
    duration: "制作 3–7 天 + 安装 1 天",
  },
  "welding-gate": {
    subService: "大门制作",
    scope: "订制低碳钢或不锈钢大门，可选平开或推拉款式，包含安装。",
    duration: "制作 7–14 天 + 安装 1–2 天",
  },
  "welding-repair": {
    subService: "焊接维修服务",
    scope: "大门、窗花、扶手、围栏或遮雨棚结构的现场焊接维修。",
    duration: "1–4 小时",
  },
  "welding-railing": {
    subService: "栏杆与围栏",
    scope: "楼梯扶手、阳台栏杆或围栏的制作与安装。",
    duration: "5–10 天",
  },
  "welding-awning": {
    subService: "雨棚结构（金属框架）",
    scope: "遮雨棚金属骨架（配 ACP 或聚碳酸酯板），含制作与安装。",
    duration: "5–10 天",
  },
  "renovation-minor": {
    subService: "小型翻新／轻装修",
    scope: "轻度翻新，包含油漆、基本配件、小型湿作业与局部修补。",
    duration: "800–1000 平方英尺需 1–2 周",
  },
  "renovation-mid": {
    subService: "中档装修",
    scope: "中档翻新，涵盖厨房／浴室升级、铺砖、电力、水管与饰面工程。",
    duration: "4–10 周",
  },
  "renovation-kitchen": {
    subService: "厨房装修",
    scope: "厨房翻新，包含敲除、铺砖、水管、电力、台面与橱柜协调。",
    duration: "2–4 周",
  },
  "renovation-bathroom-full": {
    subService: "完整浴室装修",
    scope: "浴室全面翻新：敲除、防水、铺砖、水管、电力与洁具安装。",
    duration: "每间浴室 2–3 周",
  },
  "renovation-extension": {
    subService: "房屋扩建",
    scope: "厨房、房间或车棚的结构扩建，包含基础、结构、屋顶与饰面。",
    duration: "6–12 周",
  },
  "handyman-hourly": {
    subService: "按小时计算的杂工服务",
    scope: "一般万能工服务，处理小型维修、安装与保养工作。",
    duration: "最少 1 小时",
  },
  "handyman-door": {
    subService: "门维修与门锁更换",
    scope: "门铰更换、门扇校正、锁具更换及锁片调整。",
    duration: "30 分钟 – 2 小时",
  },
  "handyman-mounting": {
    subService: "电视挂墙与搁板安装",
    scope: "电视墙挂、层架安装、窗帘轨、挂画及组合家具安装。",
    duration: "每件 30 分钟 – 2 小时",
  },
  "handyman-grout-silicone": {
    subService: "重新填缝与硅胶收边",
    scope: "浴室墙地砖重新填缝，厨房与浴室玻璃胶更新，防止渗水。",
    duration: "2–5 小时",
  },
  "handyman-small-repair": {
    subService: "小型房屋维修",
    scope: "家居小型维修，包含橱柜、抽屉、密封胶、局部修补与一般保养。",
    duration: "30 分钟 – 3 小时",
  },
};
