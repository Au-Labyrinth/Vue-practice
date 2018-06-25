// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'

import '@/assets/css/base'
import '@/assets/css/checkout'
import '@/assets/css/product'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: '../static/loading-svg/loading-spinning-bubbles.svg',
  try: 3
}).use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
