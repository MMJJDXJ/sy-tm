import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'
import Classify from '../views/Classify.vue'
import Enter from '../views/Enter.vue'

const routes = [{
    path: '/cartPath',
    component: Cart
  },

  {
    path: '/productPath',
    component: Product
  },

  {
    path: '/classifyPath',
    component: Classify
  },

  {
    path: '/enterPath',
    component: Enter
  },
]

const router = new VueRouter({
  routes
})

export default router