<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <i class=iconfont>&#xe632;</i>
      输入城市经/景点/游玩/主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont arrow-icon">&#xe6b5;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .header
    display: flex
    line-height: 0.86rem
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
      flex: 0 0 1.24rem
      width: 1.24rem
      text-align: center
      .arrow-icon
        margin-left: -0.1rem
        font-size: .24rem
</style>
