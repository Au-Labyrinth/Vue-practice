<template>
  <div>
    <TopSwiper :tops="tops"></TopSwiper>
    <card v-for="book in books" :key="book.id" :book="book"></card>
    <p class="text-footer" v-if="!more">- 没有更多数据 -</p>
  </div>
</template>

<script>
import { get } from '@/util'
import Card from '@/components/Card'
import TopSwiper from '@/components/TopSwiper'

export default {
  data () {
    return {
      books: [],
      tops: [],
      page: 0,
      more: true
    }
  },
  methods: {
    async getList (init) {
      if (init) {
        this.page = 0
        this.more = true
      }

      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist', {page: this.page})

      if (books.list.length < 10 && this.page > 0) {
        this.more = false
      }
      if (init) {
        this.books = books.list
        wx.stopPullDownRefresh()
      } else {
        this.books = this.books.concat(books.list)
      }

      wx.hideNavigationBarLoading()
    },
    async getTop () {
      const tops = await get('/weapp/top')
      this.tops = tops.list
    }
  },
  mounted () {
    this.getList(true)
    this.getTop()
  },
  onPullDownRefresh () {
    this.getList(true)
    this.getTop()
  },
  onReachBottom () {
    console.log(this.more)
    if (!this.more) {
      return false
    }
    this.page = this.page + 1
    this.getList()
  },
  components: {
    Card,
    TopSwiper
  }
}
</script>

<style scoped>
</style>
