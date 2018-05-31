<template>
  <panel title='神券满' :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t20986/356/378471748/65183/e4865464/5b0bd504Nd3f7ffeb.jpg?width=750&height=260" alt="">
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'

export default {
  components: {
    Panel
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
      img{
        display: block;
        width: 100%;
      }
    }
  }
</style>
