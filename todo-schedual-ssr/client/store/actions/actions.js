export default {
  updateCountAsync (store, payLoad) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: payLoad.num
      })
    }, payLoad.time)
  }
}
