import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],

    productList:[
      {
        images1: require("../images/swiper-one.jpg"),
        images2: require("../images/swiper-two.jpg"),
        images3: require("../images/swiper-three.jpg"),
        images4: require("../images/swiper-four.jpg"),
        text:"维达卷纸至有分量3层180克10卷卫生纸巾厕纸有芯卷纸新旧混发",
        price: 25.9,
        num:1,
        supermarket: "天猫超市",
        images21: require("../images/xqimg0.jpg"),
        images22: require("../images/xqimg1.jpg"),
        images23: require("../images/xqimg2.jpg"),

        
      },

      {
        images1: require("../images/pro31-zy.jpg"),
        images2: require("../images/pro32-zy.jpg"),
        images3: require("../images/pro33-zy.jpg"),
        images4: require("../images/pro34-zy.jpg"),
        text:"比比赞网红日式小圆饼干海盐味麦芽零食充饥小吃夜宵休闲食品100g",
        price: 4.9,
        num:1,
        supermarket: "天猫超市",
        images21: require("../images/progif.gif"),
        images22: require("../images/pro6-zy.jpg"),
        images23: require("../images/pro88-zy.jpg"),
      },

      {
        images1: require("../images/pro21-zy.jpg"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"妙洁一次性保鲜袋食品袋密实袋 抽取式 小号100只装25cm*17cm",
        price: 3.5,
        num:1,
        supermarket: "天猫超市",
        images21: require("../images/pro66.gif"),
        images22: require("../images/pro77.gif"),
        images23: require("../images/pro111.png"),
      },

      {
        images1: require("../images/guessLikeThreeLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"李宁男鞋空袭珀之心高帮音速篮球鞋",
        price: 399,
        num:1,
        supermarket: "李宁",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeThreeRight-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"rjkk男cargo宽松w九分裤牛仔裤",
        price: 359,
        num:1,
        supermarket: "rjkk",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeFourLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"办公室家用便携简易出租屋折叠床",
        price: 249,
        num:1,
        supermarket: "办公用品",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeFourRight-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"ck 2020小宽带斜挎包小方包真皮包包",
        price: 189,
        num:1,
        supermarket: "ck",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeFiveLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"春秋薄款短款卫衣女圆领2020年新款长袖韩版宽松春季上衣潮ins",
        price: 44,
        num:1,
        supermarket: "春秋薄款",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeFiveRight-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"胡桃木沙发新中式贵妃农村全实木沙发组合客厅成套经济型家具套装",
        price: 2180,
        num:1,
        supermarket: "胡桃木",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeSixLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "超强淋浴大出水日本高压加压花洒",
        price: 18,
        num:1,
        supermarket: "日本花洒",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeSixRight-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "法式轻婚纱2020新款气质新娘主纱抹胸拖尾星空女简约森系超仙梦幻",
        price: 501,
        num:1,
        supermarket: "轻婚纱",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeSevenLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "ins宽松重工钉珠露肩黑色短袖t恤",
        price: 74,
        num:1,
        supermarket: "abc",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeSevenRight-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "李宁男2020 aban027音速低帮篮球鞋",
        price: 268,
        num:1,
        supermarket: "李宁",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeEightLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "阶梯架娃娃手办柜架陈列盲盒收纳盒",
        price: 28,
        num:1,
        supermarket: "收纳",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeEightRight-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "罗蒙2020夏季修身直筒西裤休闲裤",
        price: 149,
        num:1,
        supermarket: "罗蒙",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeNineLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "s925纯银蝴蝶结甜美可爱小清新耳钉",
        price: 25.7,
        num:1,
        supermarket: "s925",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeNineRight-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text: "蕾彩黑色长袖宽松大码连衣裙女中长款春季2020新款钉珠裙子31502",
        price: 388,
        num:1,
        supermarket: "蕾彩",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      },

      {
        images1: require("../images/guessLikeFiveLeft-lj.png"),
        images2: require("../images/pro22-zy.jpg"),
        images3: require("../images/pro23-zy.jpg"),
        images4: require("../images/pro24-zy.jpg"),
        text:"春秋薄款短款卫衣女圆领2020年新款长袖韩版宽松春季上衣潮ins",
        price: 44,
        num:1,
        supermarket: "韩版T恤",
        images21: require("../images/pro999.jpg"),
        images22: require("../images/pro111.png"),
        images23: require("../images/000.jpg"),
      }
    ],

    
  },
  mutations: {
    addCartstore(state,product){
      state.cartList.push({
        price: product.price,
        text: product.text,
        images: product.images,
        num:product.num
      })
    }

  
  },
  actions: {
  },
  modules: {
  }
})
