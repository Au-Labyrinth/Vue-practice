<template>
  <div class="container">
    <div class="userinfo">
      <img class="userinfo-avatar" :src="userinfo.avatarUrl" alt="">
      <p class="userinfo-nickname">{{ userinfo.nickName }}</p>
    </div>
    <YearProgress></YearProgress>
    <button class="btn btn-addbook" v-if="userinfo.openId" @click="scanBook">添加图书</button>
    <button v-else open-type="getUserInfo" lang="zh_CN" class='btn' @getuserinfo="login">点击登录</button>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import { showSuccess, showModal, post } from '@/util'
import config from '@/config'
import YearProgress from '@/components/yearProgress'

export default {
  data () {
    return {
      userinfo: {
        avatarUrl: 'http://image.shengxinjing.cn/rate/unlogin.png',
        nickName: ''
      }
    }
  },
  methods: {
    async addBook (isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openid: this.userinfo.openId
      })
      console.log(res)
      showModal('添加成功', `${res.title}添加成功`)
    },
    scanBook () {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    },
    getWxLogin ({encryptedData, iv, userinfo}) {
      const self = this
      wx.login({
        success (loginResult) {
          console.log('loginResult', loginResult)
          var loginParams = {
            code: loginResult.code,
            encryptedData,
            iv
          }
          qcloud.setLoginUrl(config.loginUrl)
          qcloud.login({
            loginParams,
            success () {
              qcloud.request({
                url: config.userUrl,
                login: true,
                success (userRes) {
                  showSuccess('登录成功')
                  wx.setStorageSync('userinfo', userRes.data.data)
                  self.userinfo = userRes.data.data
                }
              })
            },
            fail (error) {
              showModal('登录失败', error)
            }
          })
        },
        fail (loginError) {
          showModal('登录失败', loginError)
        }
      })
    },
    login (e) {
      const self = this
      wx.getSetting({
        success (res) {
          if (res.authSetting['scope.userInfo']) {
            wx.checkSession({
              success: function () {
                showSuccess('登录成功')
              },
              fail: function () {
                qcloud.clearSession()
                var options = {
                  encryptedData: e.mp.detail.encryptedData,
                  iv: e.mp.detail.iv,
                  userinfo: e.mp.detail.userInfo
                }
                self.getWxLogin(options)
              }
            })
          } else {
            showModal('用户未授权', e.mp.detail.errMsg)
          }
        }
      })
    }
  },
  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  },
  components: {
    YearProgress
  }
}
</script>

<style lang="scss">
  .container{
    padding: 0 30rpx;
    .userinfo{
      margin-top: 100rpx;
      text-align: center;
      img{
        width: 150rpx;
        height: 150rpx;
        margin: 20rpx;
        border-radius: 50%;
      }
    }
  }
</style>

