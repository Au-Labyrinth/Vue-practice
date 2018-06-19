<template>
    <div>
      <nav-header></nav-header>
      <nav-bread></nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)">All</a></dd>
                <dd>
                  <a href="javascript:void(0)">0 - 100</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">100 - 500</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">500 - 1000</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)">1000 - 2000</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList" :key="item.productId">
                    <div class="pic">
                      <a href="#"><img :src="'/static/'+item.prodcutImg" :alt="item.productName"></a>
                    </div>
                    <div class="main">
                      <div class="name">{{ item.productName }}</div>
                      <div class="price">{{ item.prodcutPrice }}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
import axios from 'axios'
import NavHeader from '@/components/Header'
import NavBread from '@/components/Bread'
import NavFooter from '@/components/Footer'

export default{
  data () {
    return {
      goodsList: []
    }
  },
  mounted () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      axios.get('/api/getData').then(res => {
        let data = res.data
        if (data.status === '0') this.goodsList = data.result
      })
    }
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter
  }
}
</script>

<style lang='stylus'>
  @import '../assets/stylus/product.styl'
</style>
