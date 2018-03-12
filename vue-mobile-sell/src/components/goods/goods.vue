<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for='(item,index) in goods' :key='index' class='menu-item'>
          <span class='text border-1px'>
            <i v-show='item.type>0' class='icon' :class='classMap[item.type]'></i>{{ item.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for='(item,index) in goods' :key='index' class='food-list'>
          <h1 class="title">{{ item.name }}</h1>
          <ul>
            <li v-for='(food,index) in item.foods' :key='index' class='food-item' ></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  const ERR_OK = 0
  export default {
    name: 'Goods',
    porops: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        goods: []
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      axios.get('/api/getGoods')
      .then((res) => {
        if (res.data.errno === ERR_OK) {
          this.goods = res.data.data
          console.log(this.goods)
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
</script>

<style lang="stylus">
  @import '../../common/stylus/mixin'
  .goods
    display: flex
    position: absolute;
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7 
      .menu-item
        display: table
        width: 56px
        height: 54px
        line-height: 14px
        padding: 0 12px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, .1))
          font-size: 12px

    .foods-wrapper
      flex: 1
      background: lightseagreen
      
</style>
