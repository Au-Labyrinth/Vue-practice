<template>
  <div class='recommend border-top'>
    <ul class='recommend-top'>
      <li class='recommend-top-list border-right'>
        <i></i>
        <span>定位失败</span>
      </li>
      <li class='recommend-top-list'>
        <i></i>
        <span>5折泡温泉</span>
      </li>
    </ul>
    <div class='decline'></div>
    <div class='recommend-hot-list'>
      <div class='hot-list-title'>
        <img class='hot-list-img' src='http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png'>
        <span class='hot-list-text'>本周热门榜单</span>
      </div>
      <ul class='hot-sale-list'>
        <li class='hot-sale-item' v-for='item of hotList' :key='item.id'>
          <a class='item-full-link' :href='item.fullLink'>
            <div class='rank-tag' v-show='item.rank'>
              <img :src='item.rank'>
            </div>
            <div class='item-imgcon'>
              <img :src='item.imgUrl'>
            </div>
            <div class='item-desc'>{{ item.desc }}</div>
            <div class='item-price'>
              <span class='item-price-hilight'>￥<b>{{ item.price }}</b></span>起
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class='decline'></div>
    <div class='recommend-like-list'>
      <img src='http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png'>
      <span class='like-list-text'>猜你喜欢</span>
    </div>
    <ul class='like-list-con'>
      <router-link
        tag='li'
        class='like-list-item border-bottom'
        v-for='item in recommendList'
        :key='item.id'
        :to="'/detail/' + item.id "
      >
        <img class='item-img' :src='item.imgUrl'>
        <div class='item-info'>
          <p class='item-title'>{{ item.title }}</p>
          <p class='item-desc'>{{ item.desc }}</p>
          <button class='item-button'>查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    hotList: {
      type: Array,
      default () {}
    },
    recommendList: {
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

  .recommend
    margin-top: .1rem
    .recommend-top
      display: flex
      .recommend-top-list
        flex: 1
        overflow: hidden
        height: .98rem
        line-height: .98rem
        font-size: .28rem
        text-align: center
        color: $color-text-normal
    .decline
      height: .2rem
      background-color: #F6F5F4
    .recommend-hot-list
      .hot-list-title
        padding: .24rem 0 .26rem
        .hot-list-img
          display: inline-block
          overflow: hidden
          width: .3rem
          height: .3rem
          margin-left: .2rem
          vertical-align: top
        .hot-list-text
          display: inline-block
          margin-left: .08rem
          height: .44rem
          line-height: .44rem
          color: $color-text-normal
          font-size: .32rem
      .hot-sale-list
        padding: 0 .24rem
        overflow-x: scroll
        white-space: nowrap
        .hot-sale-item
          position: relative
          display: inline-block
          padding: .06rem 0 .2rem
          width: 2rem
          &:not(:first-child)
            margin-left: .12rem
          .item-full-link
            display: block
            width: 100%
            height: 100%
            .rank-tag
              position: absolute
              top: 0
              left: 0
              z-index: 1
              overflow: hidden
              width: .84rem
              height: .4rem
              img
                width: 100%
            .item-imgcon
              overflow: -moz-hidden-unscrollable
              width: 2rem
              height: 0
              padding-bottom: 100%
              background-color: lightseagreen
              img
                width: 100%
            .item-desc
              margin-top: .12rem
              color: $color-text-normal
              font-size: .24rem
              line-height: .32rem
              text-align: center
              ellipsis()
            .item-price
              color: $color-text-normal
              font-size: .24rem
              line-height: .36rem
              text-align: center
              .item-price-hilight
                color: #ff9300
                b
                  font-size: .28rem
    .recommend-like-list
      position: relative
      padding: .24rem 0 .26rem
      img
        display: inline-block
        overflow: hidden
        width: .3rem
        height: .3rem
        margin-left: .2rem
        vertical-align: top
      .like-list-text
        display: inline-block
        margin-left: .08rem
        height: .44rem
        line-height: .44rem
        color: $color-text-normal
        font-size: .32rem
    .like-list-con
      .like-list-item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
          width: 1.7rem
          height: 1.7rem
          padding: .1rem
        .item-info
          flex: 1
          padding: .1rem
          min-width: 0
          .item-title
            line-height: .54rem
            font-size: .28rem
          .item-desc
            line-height: .4rem
            font-size: .24rem
            color: #cccccc
            ellipsis()
          .item-button
            line-height: .44rem
            margin-top: .16rem
            background-color: #ff9300
            padding: 0 .2rem
            font-size: .24rem
            border-radius: .06rem
            color: #ffffff
</style>
