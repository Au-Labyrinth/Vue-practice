<template>
  <panel title='新品推荐' :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">更多尖货</div>
      <slider :options='options' :items='items' cname='product-slider'></slider>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue';
import Slider from '../core/slider.vue';

export default {
  data () {
    return {
      items: [{
          href: "Home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
      }, {
          href: "Home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
      }, {
          href: "Home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
      }, {
          href: "Home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
      }],
      options: {
        slidesPerView: 2.3,
        spaceBetween: 24
      }
    }
  },
  components: {
    Panel,
    Slider
  }
}
</script>

<style lang="scss">
  .product-slider{
    .swiper-container{
      box-sizing: border-box;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
          img{
            display: block;
            width: 100%;
            height: 314px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import "../../css/element.scss";

  .panel{
    @include panel;
    .content{
      padding-bottom: 40px;
      position: relative;
      .arrow{
        position: absolute;
        right: 20px;
        top: -70px;
        padding-right: 30px;
        background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) right bottom no-repeat;
        background-size: 18px 28px;
        color: #999999;
        font-size: 28px;
      }
    }
  }
</style>
