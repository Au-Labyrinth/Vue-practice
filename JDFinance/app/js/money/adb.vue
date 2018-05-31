<template>
  <panel title='理财专享' :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t18631/176/1296661704/41624/f193c3f6/5ac2e521N06980907.png?width=750&height=200" alt="">
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
