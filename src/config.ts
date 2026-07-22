export const siteConfig = {
  // 多语言名称（站点名 / 当地名）
  name: {
    th: 'จุดชมวิวทะเลหมอกหยุนไหล',
    en: 'Yun Lai Viewpoint',
    zh: '云来观景台',
  },
  nameLocal: 'จุดชมวิวทะเลหมอกหยุนไหล', // 当地（泰文）名称
  domain: 'https://yunlaiviewpoint.com',

  phone: '+66810243982',
  phoneDisplay: '+66 81 024 3982',

  rating: 4.4,
  reviewCount: '4,987',

  // 实际坐标（用于天气 / 日落 API 与地图嵌入）—— 云来观景台（Yun Lai Viewpoint，Wiang Tai, Pai）
  coords: { lat: 19.3690, lng: 98.3954 },

  // 统一 Google Maps 链接（首屏 / 照片 / 评价 / 页脚 共 4 处 + JSON-LD sameAs）
  mapsUrl: 'https://maps.app.goo.gl/Fmvh1oXNoSRGTrgG9',

  // 地图嵌入（MapSection iframe，使用用户提供的 Yun Lai Viewpoint Google Maps 嵌入代码）
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0026668448077!2d98.39538800302316!3d19.369037202899808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da8201f4379731%3A0xea280ac5d8994cea!2z5LqR5p2l6KeC5pmv5Y-w!5e0!3m2!1szh-CN!2sus!4v1784688751883!5m2!1szh-CN!2sus',

  // 结构化数据 sameAs（权威资料页）
  sameAs: [
    'https://maps.app.goo.gl/Fmvh1oXNoSRGTrgG9',
    'https://www.tourismthailand.org/',
  ],

  address: '999W+J56, Wiang Tai, Pai District, Mae Hong Son 58130, Thailand',
  plusCode: '999W+J56',

  // 画廊图片前缀（配合 public/gallery/yun-lai-viewpoint-1..N.jpg）
  galleryPrefix: 'yun-lai-viewpoint-',

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
  ],
};
