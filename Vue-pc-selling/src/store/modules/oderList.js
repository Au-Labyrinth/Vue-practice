import axios from 'axios'
const state = {
    orderList: [],
    params: {}
}

const getters = {
    getOrderList: state => state.orderList
}

const actions = {
    fetchOrderList ({ commit, state }) {
        axios('/api/getOrderList', params )
        .then((res) => {
            commit('updateOrderList', res.data.list)
        }, (err) => {

        })
        .catch((err) => {

        })
    }
}

const mutations = {
    updateOrderList (state, payload) {
        state.orderList = payload
    },
    updateParams (state, {key, val}) {
        state.params[key] = val
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}