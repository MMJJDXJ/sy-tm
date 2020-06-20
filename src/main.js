import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
// 商品详情轮播图 -zy


// vant 商品详情轮播图 -zy
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);

import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

import { SwipeCell } from 'vant';

Vue.use(SwipeCell);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')