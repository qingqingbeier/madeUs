/**
 * Created by 黄晶晶 on 2018-04-10.
 */
import face_01 from './images/face_01.jpg'
import face_02 from './images/face_02.jpg'
import face_03 from './images/face_03.jpg'
import eyes_01 from './images/eyes_01.jpg'
import eyes_02 from './images/eyes_02.jpg'
import eyes_03 from './images/eyes_03.jpg'
import lips_01 from './images/lips_01.jpg'
import lips_02 from './images/lips_02.jpg'
import lips_03 from './images/lips_03.jpg'
import other_01 from './images/other_01.jpg'
import other_02 from './images/other_02.jpg'
import other_03 from './images/other_03.jpg'
import cloth_01 from './clothImg/休闲气质装_01.jpg'
import cloth_02 from './clothImg/休闲气质装_02.jpg'
import cloth_03 from './clothImg/优雅气质装_01.jpg'
import cloth_04 from './clothImg/懒人出街装_01.jpg'
import cloth_05 from './clothImg/懒人出街装_02.jpg'
import cloth_06 from './clothImg/踏青赏花装_01.jpg'
import alafortanfoni from './brand/alafortanfoni.jpg'
import c_section from './brand/c-section.jpg'
import gen3 from './brand/gen3.jpg'
import kollektif from './brand/kollektif.jpg'
import kong from './brand/kong.jpg'
import madebycat from './brand/madebycat.jpg'
import mowo from './brand/mowo.jpg'
import tbwa from './brand/tbwa.jpg'
import videoBg_01 from './makeUpKit/bg_01.png'
import videoBg_02 from './makeUpKit/bg_02.png'
import videoBg_03 from './makeUpKit/bg_03.png'
import cover_01 from './makeUpKit/少女系樱桃妆容.png'
import cover_02 from './makeUpKit/bg_02.png'
import cover_03 from './makeUpKit/bg_03.png'
import video_01 from './makeUpKit/少女系樱桃妆容.mp4'
import video_02 from './makeUpKit/春日赤茶妆.mp4'
import video_03 from './makeUpKit/明艳圣诞妆容.mp4'
import pro_01 from './makeUpKit/pro_01.jpg'
import pro_02 from './makeUpKit/pro_02.jpg'
import pro_03 from './makeUpKit/pro_03.jpg'
import pro_04 from './makeUpKit/pro_04.jpg'
import pro_05 from './makeUpKit/pro_05.jpg'
import pro_06 from './makeUpKit/pro_06.jpg'
import pro_07 from './makeUpKit/pro_07.jpg'
import pro_08 from './makeUpKit/pro_08.jpg'
import pro_09 from './makeUpKit/pro_09.jpg'
import pro_10 from './makeUpKit/pro_10.jpg'
import pro_13 from './makeUpKit/pro_13.jpg'
import pro_14 from './makeUpKit/pro_14.jpg'
import pro_15 from './makeUpKit/pro_15.jpg'
import pro_16 from './makeUpKit/pro_16.jpg'
import suit_01 from './suitImg/suit (1).jpg'
import suit_02 from './suitImg/suit (2).jpg'
import suit_03 from './suitImg/suit (3).jpg'
import suit_04 from './suitImg/suit (4).jpg'
import suit_05 from './suitImg/suit (5).jpg'
import suit_06 from './suitImg/suit (6).jpg'
import suit_07 from './suitImg/suit (7).jpg'
import suit_08 from './suitImg/suit (8).jpg'
import suit_09 from './suitImg/suit (9).jpg'
import suit_10 from './suitImg/suit (10).jpg'
import suit_11 from './suitImg/suit (11).jpg'
import suit_12 from './suitImg/suit (12).jpg'
import suit_13 from './suitImg/suit (13).jpg'
import suit_14 from './suitImg/suit (14).jpg'
import suit_15 from './suitImg/suit (15).jpg'
import suit_16 from './suitImg/suit (16).jpg'
import suit_17 from './suitImg/suit (17).jpg'
import suit_18 from './suitImg/suit (18).jpg'
import suit_19 from './suitImg/suit (19).jpg'
import suit_20 from './suitImg/suit (20).jpg'
import suit_21 from './suitImg/suit (21).jpg'
import suit_22 from './suitImg/suit (22).jpg'
import suit_23 from './suitImg/suit (23).jpg'
import bandShop_1 from './bandShop/悦诗风吟.jpg'
import bandShop_2 from './bandShop/阿芙.jpg'
import bandShop_3 from './bandShop/兰芝.jpg'
import bandShop_4 from './bandShop/自然堂.jpg'
import bandShop_5 from './bandShop/美肤宝.jpg'
import bandShop_6 from './bandShop/一叶子.jpg'
import bandShopLogo_1 from './bandShop/悦诗风吟_logo.jpg'
import bandShopLogo_2 from './bandShop/阿芙_logo.jpg'
import bandShopLogo_3 from './bandShop/兰芝_logo.jpg'
import bandShopLogo_4 from './bandShop/自然堂_logo.jpg'
import bandShopLogo_5 from './bandShop/美肤宝_logo.jpg'
import bandShopLogo_6 from './bandShop/一叶子_logo.jpg'

const faceData = [
  {
    image: face_01,
    description: "玛丽黛佳水域亮肤气垫霜20g*2",
    price: "198",
    originalPrice: "299"
  },
  {
    image: face_02,
    description: "玛丽黛佳元气橙花素颜霜50g",
    price: "99",
    originalPrice: "129"
  },
  {
    image: face_03,
    description: "玛丽黛佳 中国•玛丽黛佳(Marie Dalgar)光影戏法立体粉7g",
    price: "118",
    originalPrice: "118"
  },
];

const eyesData = [
  {
    image: eyes_01,
    description: "玛丽黛佳自然生动眉笔0.2g×2",
    price: "42",
    originalPrice: "48"
  },
  {
    image: eyes_02,
    description: "玛丽黛佳惊艳纤长睫毛膏",
    price: "40.8",
    originalPrice: "48"
  },
  {
    image: eyes_03,
    description: "玛丽黛佳印象女主角三色眉粉3.3g",
    price: "49",
    originalPrice: "58"
  },
];

const lipsData = [
  {
    image: lips_01,
    description: "玛丽黛佳唇釉贪心妆0.8ml*8",
    price: "79",
    originalPrice: "149"
  },
  {
    image: lips_02,
    description: "玛丽黛佳元气灵动轻润唇膏2g",
    price: "59",
    originalPrice: "69"
  },
  {
    image: lips_03,
    description: "玛丽黛佳唇膏惊喜礼盒",
    price: "129",
    originalPrice: "299"
  },
];

const otherData = [
  {
    image: other_01,
    description: "玛丽黛佳净颜晚安礼盒",
    price: "49",
    originalPrice: "169"
  },
  {
    image: other_02,
    description: "玛丽黛佳牛油果净澈卸妆水200ml",
    price: "28",
    originalPrice: "28"
  },
  {
    image: other_03,
    description: "玛丽黛佳 玛丽黛佳元气嘉年华腮红棒5.6g",
    price: "79",
    originalPrice: "79"
  },
];

const clothData = [
  {
    image: cloth_01,
    tag: "休闲气质装",
  },
  {
    image: cloth_02,
    tag: "休闲气质装",
  },
  {
    image: cloth_03,
    tag: "优雅气质装",
  },
  {
    image: cloth_04,
    tag: "懒人出街装",
  },
  {
    image: cloth_05,
    tag: "懒人出街装",
  },
  {
    image: cloth_06,
    tag: "踏青赏花装",
  },
];

const brandData = [
  {
    image: alafortanfoni,
    name: "ala-fortan-foni",
  },
  {
    image: c_section,
    name: "C-sectIon",
  },
  {
    image: gen3,
    name: "Gen3 CreatIve",
  },
  {
    image: kollektif,
    name: "Kollektif",
  },
  {
    image: kong,
    name: "Kong Istanbul",
  },
  {
    image: madebycat,
    name: "Madebycat",
  },
  {
    image: mowo,
    name: "Mowo",
  },
  {
    image: tbwa,
    name: "TBWA Istanbul",
  },
];

const videoData = [
  {
    bgImg: videoBg_01,
    cover: cover_01,
    video: video_01,
    pro_01:{
      description: "美谁推荐 Physicians Formula心形腮红欢愉系列K妹推荐PF腮红",
      img: pro_01,
      price: 78
    },
    pro_02:{
      description: "美谁妹妹 日本MUJI/无印良品敏感肌舒柔清爽滋润爽肤水乳液 200ml",
      img: pro_02,
      price: 55
    },
    pro_03:{
      description: "MUA make up academy烘焙高光粉饼鼻影卧蚕 修容立体持久自然8.5g",
      img: pro_03,
      price: 45
    },
    pro_04:{
      description: "美谁妹妹  Laneige/兰芝雪纱隔离保湿隐形毛孔妆前乳30ml",
      img: pro_04,
      price: 55
    },
    pro_05:{
      description: "仇大哥 泰国RAY蚕丝面膜金银色补水保湿收缩毛孔抗皱去痘印",
      img: pro_05
    },
    pro_06:{
      description: "仇大哥 泰国RAY蚕丝面膜金银色补水保湿收缩毛孔抗皱去痘印",
      img: pro_06
    },
  },
  {
    bgImg: videoBg_02,
    video: video_02,
    pro_01:{
      description: "仇大哥 泰国RAY蚕丝面膜金银色补水保湿收缩毛孔抗皱去痘印",
      img: pro_07,
      price: 88
    },
    pro_02:{
      description: "仇大哥 泰国tokyo dolls唇釉哑光液体唇彩 显色滋润 南瓜脏橘色",
      img: pro_08,
      price: 92
    },
    pro_03:{
      description: "仇大哥 美国N*X 12色眼影盘Warm Rust珠光哑光橘色08枫叶酒红色",
      img: pro_09,
      price:175
    },
    pro_04:{
      description: "仇大哥撩妹间 美国Tom Ford/汤姆福特黑管TF口红04/08/09保湿唇膏",
      img: pro_10,
      price: 338
    }
  },
  {
    bgImg: videoBg_03,
    video: video_03,
    pro_01:{
      description: "方恰拉推荐英国W7眼影盘9色大地系南瓜色珠光哑光不飞粉持久显色",
      img: pro_13,
      price: 55
    },
    pro_02:{
      description: "方恰拉推荐泰国4U2 kiss me harder唇釉哑光显色显白口红03 02",
      img: pro_14,
      price: 52
    },
    pro_03:{
      description: "方恰拉推荐泰国zenn单色眼影膏 带细闪偏光色防晕染tispy",
      img: pro_15,
      price: 55
    },
    pro_04:{
      description: "方恰拉推荐泰国SIVANNA思薇娜星星眼线液笔",
      img: pro_16,
      price: 39
    }
  }
];

const suitData = [
  {
    image: suit_01,
  },
  {
    image: suit_02,
  },
  {
    image: suit_03,
  },
  {
    image: suit_04,
  },
  {
    image: suit_05,
  },
  {
    image: suit_06,
  },
  {
    image: suit_07,
  },
  {
    image: suit_08,
  },
  {
    image: suit_09,
  },
  {
    image: suit_10,
  },
  {
    image: suit_11,
  },
  {
    image: suit_12,
  },
  {
    image: suit_13,
  },
  {
    image: suit_14,
  },
  {
    image: suit_15,
  },
  {
    image: suit_16,
  },
  {
    image: suit_17,
  },
  {
    image: suit_18,
  },
  {
    image: suit_19,
  },
  {
    image: suit_20,
  },
  {
    image: suit_21,
  },
  {
    image: suit_22,
  },
  {
    image: suit_23,
  },
  {
    image: suit_22,
  },
  {
    image: suit_23,
  },
];

const brandShopData = [
  {
    image: bandShop_1,
    name: "悦诗风吟",
    description: "来自济州岛的自然恩赐",
    activity: "满 199 赠 2 件套",
    logo: bandShopLogo_1
  },
  {
    image: bandShop_2,
    name: "阿芙",
    description: "阿芙契约庄园直供",
    activity: "满 199 赠 40",
    logo: bandShopLogo_2
  },
  {
    image: bandShop_3,
    name: "兰芝",
    description: "闪耀水漾美肌",
    activity: "满 299 减 50",
    logo: bandShopLogo_3
  },
  {
    image: bandShop_4,
    name: "自然堂",
    description: "你本来就很美",
    activity: "满 98 赠 98",
    logo: bandShopLogo_4
  },
  {
    image: bandShop_5,
    name: "美肤宝",
    description: "东方养肤之道",
    activity: "满 199 减 50",
    logo: bandShopLogo_5
  },
  {
    image: bandShop_6,
    name: "一叶子",
    description: "新鲜的力量",
    activity: "满 169 赠 100",
    logo: bandShopLogo_6
  },
];



export { faceData, eyesData, lipsData, otherData, clothData, brandData, videoData, suitData, brandShopData };
