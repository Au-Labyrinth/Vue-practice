import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Sellers from '@/components/sellers/sellers'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'touched',
  routes: [
    {
      path: '/',
      redirect: '/goods',
      name: 'App',
      component: App
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/sellers',
      name: 'Sellers',
      component: Sellers
    }
  ]
})
