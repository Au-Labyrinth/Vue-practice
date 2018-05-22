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
      <li class='like-list-item border-bottom' v-for='item in recommendList' :key='item.id'>
        <img class='item-img' :src='item.imgUrl'>
        <div class='item-info'>
          <p class='item-title'>{{ item.title }}</p>
          <p class='item-desc'>{{ item.desc }}</p>
          <button class='item-button'>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      hotList: [
        {
          id: '001',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=187807&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_150x150_a980923f.jpg',
          desc: '宋城千古情',
          price: '250',
          rank: 'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png'
        },
        {
          id: '002',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=186956&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/wugc/p3/201206/02/44c1fe10b91aed6793835fbb.jpg_150x150_63d4cf19.jpg',
          desc: '西溪国家湿地公园',
          price: '138',
          rank: 'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png'
        },
        {
          id: '003',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=38354&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/28/288fbeccc335f774a3.img.jpg_150x150_1df64606.jpg',
          desc: '最忆是杭州”- G20峰会特别版《印象西湖》',
          price: '340',
          rank: 'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png'
        },
        {
          id: '004',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=31307&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/57/57ee153a3441d35190.water.jpg_150x150_75528c36.jpg',
          desc: '杭州飞来峰',
          price: '45',
          rank: ''
        },
        {
          id: '005',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=532&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ae/aecef86d7655873f90.water.jpg_150x150_da975344.jpg',
          desc: '杭州野生动物园',
          price: '140',
          rank: ''
        },
        {
          id: '006',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=678&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/3c/3c1d865ea3175504a3.img.jpg_150x150_64c55468.jpg',
          desc: '千岛湖',
          price: '23',
          rank: ''
        },
        {
          id: '007',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=463423&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/71/71815dd0ca83158aa3.water.jpg_150x150_23316e65.jpg',
          desc: '杭州国际博览中心（G20峰会体验馆）',
          price: '80',
          rank: ''
        },
        {
          id: '008',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=462989&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1703/e3/e3d2c4a62fdc54aaa3.img.jpg_150x150_008f8351.jpg',
          desc: '灵隐寺',
          price: '0.1',
          rank: ''
        },
        {
          id: '009',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=456841&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ff/ff223ef32c48528f90.water.jpg_150x150_6bc50e7b.jpg',
          desc: '西湖游船',
          price: '35',
          rank: ''
        },
        {
          id: '010',
          fullLink: 'http://touch.piao.qunar.com/touch/detail.htm?id=458024&from=as_recommend_sight',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1604/e3/e31e236ddd71e31b90.water.jpg_150x150_71b7f2f3.jpg',
          desc: '梅峰岛',
          price: '210',
          rank: ''
        }
      ],
      recommendList: [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        'title': '故宫',
        'desc': '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
        'title': '南山滑雪场',
        'desc': '北京专业级滑雪圣地'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
        'title': '天安门广场',
        'desc': '我爱北京天安门，天安门上太阳升'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
        'title': '水立方',
        'desc': '中国的荣耀，阳光下的晶莹水滴'
      }, {
        'id': '0005',
        'imgUrl': 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
        'title': '温都水城养生馆',
        'desc': '各种亚热带植物掩映其间仿佛置身热带雨林'
      }]
    }
  }
}
</script>

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
            font-size: .32rem
          .item-desc
            line-height: .4rem
            color: #cccccc
            ellipsis()
          .item-button
            line-height: .44rem
            margin-top: .16rem
            background-color: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #ffffff
</style>
