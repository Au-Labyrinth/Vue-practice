import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from 'common/util/rem'
import fastClick from 'fastclick'
import 'common/stylus/index'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Rem)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
