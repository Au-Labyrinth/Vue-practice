<template>
  <panel title="下载App" :class="$style.panel">
    <section :class="$style.content">
      <div></div>
      <p>立即下载</p>
    </section>
  </panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";

  html,body{
    background-color: #ffffff;
  }
  .panel{
    @include panel;
    margin: 0 !important;
    >h4{
      display: none;
    }
    .content{
      @include flex();
      align-items: center;
      >div{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 20%;
        background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
        background-size: 100% auto;
      }
      >p{
        @include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:5px);
        position:absolute;
        bottom: 130px;
        width: 471px;
        height: 100px;
        line-height: 100px;
        background-image: linear-gradient(270deg,#F55C33 0, #EE2D1B 75%);
        box-shadow: 0 12px 32px 0 rgba(255, 159, 135, .6);
      }
    }
  }
</style>
