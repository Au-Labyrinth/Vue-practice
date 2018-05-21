// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import Rem from 'src/common/js/rem'
import VueI18n from 'vue-i18n'
import 'mint-ui/lib/style.css'

import 'src/common/stylus/index.styl'

// fastclick.attach(document.body)

Vue.use(MintUI)
Vue.use(Rem)
Vue.use(VueI18n)

// 中英切换
function lang() {
	let lang = window.localStorage.getItem('language')
	if (lang) {
		return lang
	} else {
		return 'zh'
	}
}

const language = lang()

const i18n = new VueI18n({
	locale: language,
	messages: {
		'zh': require('./common/language/zh'),
		'en': require('./common/language/en')
	}
})

const api = 'http://192.168.2.134:4000/api/v3'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
