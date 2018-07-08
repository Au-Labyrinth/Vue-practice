<template>
  <div class="container">
    <CommentList type="user" :comments="comments"></CommentList>
    <div v-if="userinfo.openId">
      <div class="page-title">我的图书</div>
      <Card v-for="book in books"
            :key="book.id"
            :book="book"></Card>
      <div v-if="!books.length">暂时还没有添加过的书，快去添加几本吧!</div>
    </div>
  </div>
</template>

<script>
import { get } from '@/util'
import CommentList from '@/components/CommentList'
import Card from '@/components/Card'

export default {
  data () {
    return {
      comments: [],
      books: [],
      userinfo: {}
    }
  },
  methods: {
    init () {
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.hideNavigationBarLoading()
    },
    async getBooks () {
      const books = await get('/weapp/booklist', { openid: this.userinfo.openId })
      this.books = books.list
      console.log(books)
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', { openid: this.userinfo.openId })
      this.comments = comments.list
    }
  },
  onPullDownRefresh () {
    this.init()
    wx.stopPullDownRefresh()
  },
  onShow () {
    if (!this.userinfo.openid) {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
        this.init()
      }
    }
  },
  components: {
    CommentList,
    Card
  }
}
</script>

<style scoped>
.page-title{font-size: 14px;}
</style>
