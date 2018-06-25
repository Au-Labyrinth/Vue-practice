<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
        <span>Goods</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" @click="sortGoods" :class="{'sort-up':sortFlag}">
              Price
              <svg class="icon icon-arrow-short">
                <use xlink:href="#icon-arrow-short"></use>
              </svg>
            </a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" :class="{'filterby-show':filterBy}" id="filter">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)"
                       :class="{'cur':priceChecked=='all'}"
                       @click="setPriceFilter('all')"
                       >All</a></dd>
                <dd v-for="(price,index) in priceFilter" :key="price.startPrice">
                  <a href="javascript:void(0)"
                     @click="setPriceFilter(index)"
                     :class="{'cur':priceChecked==index}">{{ price.startPrice }} - {{ price.endPrice }}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList" :key="item.productId">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/'+item.productImage" :alt="item.productName"></a>
                    </div>
                    <div class="main">
                      <div class="name">{{ item.productName }}</div>
                      <div class="price">{{ item.salePrice }}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                  <img src="../../static/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overlayFlag" @click="closePop"></div>
      <modal :mdShow="mdShow" @close="closeModal">
        <p slot="message">请先登录，否则无法加入购物车!</p>
        <div slot="btnGroup">
          <a class="btn btn--m" @click="closeModal">关闭</a>
        </div>
      </modal>
      <modal :mdShow="mdShowCart" @close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成功!</span>
        </p>
        <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:void(0)" @click="mdShowCart=false">继续购物</a>
          <router-link class="btn btn--m" to="/cart">查看购物车</router-link>
        </div>
      </modal>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
import axios from 'axios'
import NavHeader from '@/components/Header'
import NavBread from '@/components/Bread'
import NavFooter from '@/components/Footer'
import Modal from '@/components/Modal'

export default{
  data () {
    return {
      goodsList: [],
      page: 1,
      pageSize: 8,
      sortFlag: true,
      busy: true,
      loading: false,
      mdShow: false,
      mdShowCart: false,
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '100.00'
        },
        {
          startPrice: '100.00',
          endPrice: '500.00'
        },
        {
          startPrice: '500.00',
          endPrice: '1000.00'
        },
        {
          startPrice: '1000.00',
          endPrice: '5000.00'
        }
      ],
      priceChecked: 'all',
      filterBy: false,
      overlayFlag: false
    }
  },
  mounted () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList (flag) {
      let params = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceChecked
      }
      this.loading = true

      axios.get('/goods/list', { params }).then(res => {
        let data = res.data
        this.loading = false
        if (data.status === '0') {
          if (flag) {
            this.goodsList = this.goodsList.concat(data.result.list)
            if (data.result.count == 0) {
              this.busy = true
            } else {
              this.busy = false
            }
          } else {
            this.goodsList = data.result.list
            this.busy = false
          }
        } else {
          this.goodsList = []
        }
      })
    },
    addCart (productId) {
      axios.post('/goods/addCart', { productId: productId }).then((res) => {
        if (res.data.status == 0) {
          this.mdShowCart = true
        } else {
          this.mdShow = true
        }
      })
    },
    sortGoods () {
      this.sortFlag = !this.sortFlag
      this.page = 1
      this.getGoodsList()
    },
    loadMore () {
      this.busy = true
      setTimeout(() => {
        this.page++
        this.getGoodsList(true)
      }, 500)
    },
    showFilterPop () {
      this.filterBy = true
      this.overlayFlag = true
    },
    setPriceFilter (index) {
      this.priceChecked = index
      this.page = 1
      this.getGoodsList()
      this.closePop()
    },
    closePop () {
      this.overlayFlag = false
      this.filterBy = false
    },
    closeModal () {
      this.mdShow = false
      this.mdShowCart = false
    }
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter,
    Modal
  }
}
</script>
