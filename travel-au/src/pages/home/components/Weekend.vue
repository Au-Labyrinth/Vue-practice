<template>
  <div class='recommend border-top'>
    <h2 class='weekend-title'>周末去哪儿</h2>
    <ul class='like-list-con'>
      <li class='like-list-item border-bottom' v-for='item of weekendList' :key='item.id'>
        <div class='item-img-wrapper'>
          <img class='item-img' :src='item.imgUrl'>
        </div>
        <div class='item-info'>
          <p class='item-title'>{{ item.title }}</p>
          <p class='item-desc'>{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    weekendList: {
      type: Array,
      default () {}
    }
  },
  data () {
    return {
    }
  }
}
</script>
s
<style lang='stylus' scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .weekend-title
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    background-color: #F6F5F4
    color: $color-text-normal
    .like-list-text
      display: inline-block
      margin-left: .08rem
      height: .44rem
      line-height: .44rem
      color: $color-text-normal
      font-size: .32rem
  .like-list-con
      .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
          width: 100%
      .item-info
        padding: .1rem
        .item-title
          line-height: .54rem
          font-size: .28rem
        .item-desc
          line-height: .4rem
          font-size: .24rem
          color: #616161
          ellipsis()
</style>
