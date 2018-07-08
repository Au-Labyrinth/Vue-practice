<template>
  <div>
    <BookInfo :info="info"></BookInfo>
    <CommentList :comments="comments"></CommentList>
    <div class="comment" v-if="showAdd">
      <textarea v-model="comment"
                class="textarea"
                :maxlength="100"
                placeholder="请输入图书短评"></textarea>
      <div class="location">
        地理位置:
        <switch color="#20B2AA" :checked="location" @change="getGeo"></switch>
        <span class="text-primary">{{ location }}</span>
      </div>
      <div class="phone">
        手机型号:
        <switch color="#20B2AA" :checked="phone" @change="getPhone"></switch>
        <span class="text-primary">{{ phone }}</span>
      </div>
      <button class="btn" @click="addComment">评论</button>
    </div>
    <div class="text-footer" v-else>未登录或者已经评论过了</div>
    <button class="btn" open-type="share">转发给好友</button>
  </div>
</template>

<script>
import { showSuccess, showModal, get, post } from '@/util'
import BookInfo from '@/components/BookInfo'
import CommentList from '@/components/CommentList'

export default {
  data () {
    return {
      comments: [],
      userinfo: {},
      bookid: '',
      info: {},
      comment: '',
      location: '',
      phone: ''
    }
  },
  computed: {
    showAdd () {
      if (!this.userinfo) { return false }
      if (this.comments.filter(v => v.openid === this.userinfo.openId).length) { return false }
      return true
    }
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookid})
      wx.setNavigationBarTitle({
        title: info.title
      })
      this.info = info
    },
    async addComment () {
      if (!this.comment) {
        return false
      }

      const data = {
        openid: this.userinfo.openId,
        bookid: this.bookid, // 图书id
        comment: this.comment, // 评论内容
        phone: this.phone, // 手机型号
        location: this.location // 地理位置
      }

      try {
        await post('/weapp/addcomment', data)
        showSuccess('评论成功')
        this.comment = ''
        this.getComments()
      } catch (err) {
        showModal('失败', err.msg)
      }
      console.log(data)
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {bookid: this.bookid})
      this.comments = comments.list
    },
    getGeo (e) {
      const ak = 'Ricyb6ECKEGj4aFdShGBKRzrdlaBu2HT'
      let url = 'http://api.map.baidu.com/geocoder/v2/'

      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                ak,
                location: `${geo.latitude},${geo.longitude}`,
                output: 'json'
              },
              success: res => {
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.locatin = '位置地点'
                }
              }
            })
            console.log(geo)
          }
        })
      } else {
        this.location = ''
      }
    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        this.phone = ''
      }
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
    this.getComments()
    this.userinfo = wx.getStorageSync('userinfo')
    if (this.userinfo) {
      this.userinfo = this.userinfo
    }
  },
  components: {
    BookInfo,
    CommentList
  }
}
</script>

<style lang="scss" scoped>
.comment{
  margin-top: 10px;
  .textarea{
    width: 730rpx;
    height: 220rpx;
    padding: 10rpx;
    background: #eeeeee;
  }
}
.location{
  margin: 10px 0;
  padding: 5px 10px;
}
.phone{
  padding: 5px 10px;
}
</style>
