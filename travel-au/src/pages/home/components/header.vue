<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <i class=iconfont>&#xe632;</i>
      输入城市经/景点/游玩/主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
          {{ city }}
        <i class="iconfont arrow-icon">&#xe6b5;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState([
      'city'
    ]),
    ...mapGetters([
      'doubleCity'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .header
    display: flex
    line-height: $header-height
    background: $color-background
    color: #ffffff
    .header-left
      flex: 0 0 0.64rem
      width: 0.64rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      padding-left: .2rem
      background: #fff
      border-radius: .5rem
      color: #cccccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      color: #ffffff
      .arrow-icon
        margin-left: -0.1rem
        font-size: .24rem
</style>
