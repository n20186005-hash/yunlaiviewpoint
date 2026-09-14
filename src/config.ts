export const siteConfig = {
  // 多语言名称（站点名 / 当地名）
  name: {
    th: 'จุดชมวิวทะเลหมอกหยุนไหล',
    en: 'Yun Lai Viewpoint',
    zh: '云来观景台',
  },
  nameLocal: 'จุดชมวิวทะเลหมอกหยุนไหล', // 当地（泰文）名称
  domain: 'https://yunlaiviewpoint.com',
  domainName: 'yunlaiviewpoint.com',

  phone: '+66810243982',
  phoneDisplay: '+66 81 024 3982',

  // 谷歌地图（Google Maps）最新评分——同步时间：2026 年 9 月
  rating: 4.4,
  reviewCount: '5,033',
  reviewSyncDate: {
    th: 'กันยายน 2026',
    en: 'September 2026',
    zh: '2026 年 9 月',
  },

  // 实际坐标（用于天气 / 日落 API 与地图嵌入）—— 云来观景台（Yun Lai Viewpoint，Wiang Tai, Pai）
  coords: { lat: 19.3690372, lng: 98.395388 },

  // 统一 Google Maps 链接（首屏 / 照片 / 评价 / 页脚 共 4 处 + JSON-LD sameAs）
  mapsUrl: 'https://maps.app.goo.gl/Fmvh1oXNoSRGTrgG9',

  // 地图嵌入（MapSection iframe，使用用户提供的最新 Yun Lai Viewpoint Google Maps 嵌入代码）
  // {UI} / {REGION} 由 MapSection 按站点语言替换
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6528.192125425115!2d98.395388!3d19.3690372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da8201f4379731%3A0xea280ac5d8994cea!2sYun%20Lai%20Viewpoint!5e1!3m2!1s{UI}!2s{REGION}!4v1789372736266!5m2!1s{UI}!2s{REGION}',

  // 社交分享图（由 scripts/make-og.mjs 在构建前生成）
  // 页面主视觉与画廊图片位于 src/assets/gallery，由 Astro 图片管线输出多尺寸 AVIF/WebP
  ogImage: '/og.jpg',

  // 结构化数据 sameAs（权威资料页）
  sameAs: [
    'https://maps.app.goo.gl/Fmvh1oXNoSRGTrgG9',
    'https://www.tourismthailand.org/',
  ],

  address: '999W+J56, Wiang Tai, Pai District, Mae Hong Son 58130, Thailand',
  plusCode: '999W+J56',

  // 社交 / 资料链接（科普站占位，上线前请替换为官方或可运营账号）
  socialLinks: [
    {
      name: 'Tourism Thailand',
      href: 'https://www.tourismthailand.org/',
      icon: 'globe',
    },
    {
      name: 'Mae Hong Son',
      href: 'https://www.tourismthailand.org/Destinations/mae-hong-son',
      icon: 'tree',
    },
    {
      name: 'Google Maps',
      href: 'https://maps.app.goo.gl/Fmvh1oXNoSRGTrgG9',
      icon: 'map',
    },
  ],

  // 资料来源（页脚引用，需与页脚 per-language name 结构一致）
  sources: [
    {
      name: { th: 'การท่องเที่ยวแห่งประเทศไทย', en: 'Tourism Authority of Thailand', zh: '泰国国家旅游局' },
      url: 'https://www.tourismthailand.org/',
    },
    {
      name: { th: 'วิกิพีเดีย – อำเภอปาย', en: 'Wikipedia — Pai District', zh: '维基百科 – 拜县' },
      url: 'https://en.wikipedia.org/wiki/Pai_district',
    },
    {
      name: { th: 'จังหวัดแม่ฮ่องสอน', en: 'Mae Hong Son Province', zh: '夜丰颂府' },
      url: 'https://www.maehongson.go.th/',
    },
    {
      name: { th: 'กูเกิลแมป – รีวิวผู้ใช้', en: 'Google Maps — User Reviews', zh: '谷歌地图 – 用户评价' },
      url: 'https://maps.app.goo.gl/Fmvh1oXNoSRGTrgG9',
    },
  ],

  // ---------------------------------------------------------------------------
  // 单景点 SEO 实体绑定配置变量表
  // 变量占位符 ↔ 实际取值（仅需替换本表即可复用模板）
  // ---------------------------------------------------------------------------
  entity: {
    domainName: 'yunlaiviewpoint.com',
    attractionFullName: {
      th: 'จุดชมวิว ทะเลหมอก หยุนไหล',
      en: 'Yun Lai Viewpoint',
      zh: '云来观景台',
    },
    attractionShortName: {
      th: 'หยุนไหล',
      en: 'Yun Lai',
      zh: '云来',
    },
    city: { th: 'ปาย', en: 'Pai', zh: '拜县' },
    stateProvince: { th: 'แม่ฮ่องสอน', en: 'Mae Hong Son', zh: '夜丰颂府' },
    country: { th: 'ประเทศไทย', en: 'Thailand', zh: '泰国' },
    countryCode2Letter: 'TH',
    postalCode: '58130',
    // 结构化数据里的 streetAddress 只放 Plus Code + 乡镇，行政区划由 locality /
    // region / postalCode / country 分别表达，避免地址信息重复堆叠
    streetAddress: '999W+J56, Wiang Tai',
    latitude: 19.3690372,
    longitude: 98.395388,
    mapsShareUrl: 'https://maps.app.goo.gl/Fmvh1oXNoSRGTrgG9',
    mapsEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6528.192125425115!2d98.395388!3d19.3690372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da8201f4379731%3A0xea280ac5d8994cea!2sYun%20Lai%20Viewpoint!5e1!3m2!1s{UI}!2s{REGION}!4v1789372736266!5m2!1s{UI}!2s{REGION}',
    nearbyLandmark1: {
      th: 'สะพานประวัติศาสตร์สงครามโลกครั้งที่ 2',
      en: 'WWII Memorial Bridge',
      zh: '二战纪念桥',
    },
    nearbyLandmark2: {
      th: 'บ่อน้ำพุร้อนท่าปาย',
      en: 'Tha Pai Hot Spring',
      zh: '塔佩温泉',
    },
    govtTourismUrl: 'https://www.tourismthailand.org/',
  },
};
