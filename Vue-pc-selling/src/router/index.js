import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderListPage from '@/pages/orderList'
import DetailAnaPage from '@/pages/details/analysis'
import DetailCouPage from '@/pages/details/count'
import DetailForPage from '@/pages/details/forecast'
import DetailPubPage from '@/pages/details/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      redirect: '/detail/analysis',
      component: DetailPage,
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },{
          path: 'count',
          component: DetailCouPage
        },{
          path: 'forecast',
          component: DetailForPage
        },{
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
