import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from 'common/util/rem'
import fastClick from 'fastclick'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'common/stylus/index'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Rem).use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
