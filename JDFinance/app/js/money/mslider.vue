<template>
  <panel title='轮播图' :class="$style.panel">
    <section :class="$style.content">
      <slider :items='items' :cname='$style.slider'></slider>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'

export default {
  data () {
    return {
      items: [{
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t20284/262/436336566/46162/90014e9e/5b0d4568N5365db95.jpg?width=750&height=400",
      }, {
          href: "home",
          src: "//img12.360buyimg.com/jrpmobile/jfs/t21001/203/436489199/44713/942ad9b6/5b0d4550N9eb6e692.png?width=750&height=400",
      }, {
        href: "home",
        src: "//img12.360buyimg.com/jrpmobile/jfs/t21832/229/415146066/28909/21140c2a/5b0d4574Ncaba23c4.jpg?width=750&height=400"
      }, {
        href: "home",
        src: "//img12.360buyimg.com/jrpmobile/jfs/t20200/267/438709558/35731/701c94aa/5b0d4595N4179216c.jpg?width=750&height=400"
      }]
    }
  },
  components: {
    Panel,
    Slider
  }
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  
  .panel{
    @include panel;
    >h4{
      display: none;
    }
    .content{
      .slider{
        margin-top: 100px;
      }
    }
  }
</style>
