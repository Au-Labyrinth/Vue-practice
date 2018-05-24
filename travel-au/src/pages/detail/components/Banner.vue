<template>
  <div>
    <div class="banner" @click='handleBannerClick'>
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1804/3c/3c1d865ea3175504a3.img.jpg_600x330_95199661.jpg" />
      <div class="banner-info">
        <div class="banner-title">千岛湖(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe679;</span> 20</div>
      </div>
    </div>
    <common-gallary :imgs='imgs' v-show='showGallary' @closeGallary='handleCloseGallary'></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/component/gallary/Gallary'

export default {
  name: 'BannerDetail',
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/201405/27/85c8a6c6f70a27e41043f2387253407c.jpg_r_800x800_8a95385f.jpg',
        'http://img1.qunarzz.com/sight/p0/1710/2c/2c65229975c5c26ba3.water.jpg_r_800x800_9cd33c75.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #ffffff
      background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .11rem
        padding: 0 .4rem
        font-size: .24rem
        border-radius: .2rem
        background-color: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
