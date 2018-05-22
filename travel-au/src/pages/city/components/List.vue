<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">韩国</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .border-topbottom
    &:before
      border-color: #cccccc
    &:after
      border-color: #cccccc
  .title
    line-height: .44rem
    background-color: #eeeeee
    padding-left: .2rem
    font-size: .26rem
    color: #666666
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #cccccc
        border-radius: .07rem
  .item-list
    .item
      line-height: .54rem
      color: #666666
      padding-left: .2rem
</style>
