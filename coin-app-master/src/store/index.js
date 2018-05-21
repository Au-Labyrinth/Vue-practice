import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	// 保存登录状态	
	isLogin: function() {
		var token = window.localStorage.getItem('token')
		if (token) {
			return true
		} else {
			return false
		}
	},
	// 保存语言切换状态
	language: function() {
		var lang = window.localStorage.getItem('language')
		if (lang == 'zh') {
			return false
		} else {
			return true
		}
	}
}

const mutations = {
	login(state) {
		state.isLogin()
	},
	logout(state) {
		window.localStorage.removeItem('token')
		state.isLogin()
	}
}

export default new Vuex.Store({
	state,
	mutations
})