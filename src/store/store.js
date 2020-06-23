import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList1:[
      {
        images:"../images/swiper-one.jpg",
        text: "维达卷纸至有分量3层180克10卷卫生纸巾厕纸有芯卷纸新旧混发",
        price: 25.9
      }
    ],

    cartList2:[
      {
        images:"../images/pro31-zy-lj.png", 
        text: "维达卷纸至有分量3层180克10卷卫生纸巾厕纸有芯卷纸新旧混发",
        price: 4.9
      }
    ],

    cartList3:[
      {
        images:"../images/pro21-zy.jpg",
        text: "妙洁一次性保鲜袋食品袋密实袋 抽取式 小号100只装25cm*17cm",
        price: 3.5
      }
    ]
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
