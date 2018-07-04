import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

/* store.registerModule('c', {
    state: {
      text: 'textc'
    }
  })
  store.unRegisterModule)('moduleName')
  store.watch((state) => state.count + 1, (newCount) => {
    console.log(newCount)
  })
  store.subscribe((mutation, state) => {
    console.log(mutation.type)
    console.log(mutation.payLoad)
  })
  store.subscribeAction((action, state) => {
    console.log(action.type)
    console.log(action.payLoad)
  })
*/

/* router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  if (to.fullPath === '/app') {
    next({path: '/login'})
  }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
}) */

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
