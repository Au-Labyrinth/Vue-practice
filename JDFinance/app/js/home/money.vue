<template>
  <panel title='理财精选' :class="$style.panel">
    <section :class="$style.content">
      <dl :class="$style.item" v-for='item in items' :key='item.title'>
        <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
        <dd>{{ item.rate }}</dd>
        <dd>{{ item.text }}</dd>
      </dl>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'

export default {
  data () {
    return {
      items: [{
          title: "定期理财",
          sub: "理财首选",
          rate: "5.60%",
          text: "历史年化回报率",
      }, {
          title: "小白理财",
          sub: "理财首选",
          rate: "4.22%",
          text: "7日年化收益率",
      }, {
          title: "月月盈",
          sub: "养老保障",
          rate: "5%",
          text: "七日年化收益率",
      }, {
          title: "小白基金",
          sub: "天天赚钱",
          rate: "4.27%",
          text: "7日年化收益率",
      }]
    }
  },
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  @import "../../css/util.scss";

  .panel{
    @include panel;
    .content{
      @include flex(row);
      justify-content: space-around;
      box-sizing: border-box;
      &:after{
        content: ' ';
        display: block;
        width: 100%;
        height: 0px;
        box-sizing: border-box;
        border-bottom: 1px solid #dddddd;
        position: relative;
        top: -208px;
      }
      .item{
        box-sizing: border-box;
        position: relative;
        width: 50%;
        padding: 34px 16px;
        &:after{
          content: ' ';
          display: block;
          width: 1px;
          height: 136px;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -60px;
          border-right: 1px solid #eeeeee;
        }
        &:nth-child(2n){
          &:after{
            display: none;
          }
        }
        dt{
          font-size: 30px;
          line-height: 42px;
          color: #333333;
          >span{
            font-size: 22px;
            color: #ff0000;
            border: 1px solid #ff5155;
            padding: 0 8px;
            vertical-align: 1px;
            margin-left: 2px;
          }
        }
        dd{
          &:nth-child(2){
            font-weight: 700;
            font-size: 44px;
            height: 58px;
            line-height: 58px;
            color: #FF5155;
            @include nowrap();
          }
          &:nth-child(3) {
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999999;
            @include nowrap();
          }
        }
      }
    }
  }
</style>
