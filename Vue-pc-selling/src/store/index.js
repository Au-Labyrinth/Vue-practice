import Vue from 'vue'
import Vuex from 'vuex'
import orderList from './modules/oderList.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        orderList
    }
})