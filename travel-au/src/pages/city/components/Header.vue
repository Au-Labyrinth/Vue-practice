<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .header
    position: relative
    height: $header-height
    line-height: $header-height
    text-align: center
    color: #ffffff
    background-color: $color-background
    font-size: .32rem
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64em
      text-align: center
      font-size: .4rem
      color: #ffffff
</style>
