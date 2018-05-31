<template>
  <panel title='金融头条' :class="$style.panel">
    <section :class="$style.content">
      <swiper :options="options">
        <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
        <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
      </swiper>
    </section>
  </panel>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Panel from '../core/panel.vue'

export default {
  data () {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: "vertical"
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Panel
  }
}
</script>

<style lang="scss">
  .swiper-container-vertical{
    height: 72px;
    .swiper-slide{
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #333;
      em{
        color: #ddd;
        float: right;
        margin-right: 20px;
      }
    }
  }
</style>


<style lang="scss" module>
  @import "../../css/element.scss";

  .panel{
    @include panel;
    >h4{
      display:none;
    }
    margin-top: 100px !important;
    .content{
      overflow: hidden;
      height: 72px;
      line-height: 72px;
      padding-left: 178px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
      background-size: 145px 100%;
    }
  }
</style>
