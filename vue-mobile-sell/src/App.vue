<template>
  <div>
    <v-header :seller='seller'></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/sellers'>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import VHeader from './components/header/header'

const ERR_OK = 0

export default {
  name: 'App',
  components: {
    VHeader
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
     axios.get('/api/getSeller').then((res) => {
      console.log(res.data)
      if (res.data.errno === ERR_OK) {
        this.seller = res.data.data
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  mounted () {
    // axios.get('/api/getGoods').then((res) => {
    //   console.log(res.data.data)
    // }).catch((err) => {
    //   console.log(err)
    // })
    // axios.get('/api/getRating').then((res) => {
    //   console.log(res.data.data)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a 
        display: block
        font-size: 14px 
        color: rgb(77, 85, 93)
        &.touched
          color: rgb(240, 20, 20)

</style>
