<template>
  <div class="bookinfo">
    <div class="thumb">
      <img class="back"
           :src="info.image"
           :alt="info.title"
           mode="asepctFill"
      >
      <img class="img"
         :src="info.image"
         :alt="info.title"
         mode="aspectFit"
      >
      <div class="info">
        <div class="title">{{ info.title }}</div>
        <div class="author">{{ info.author }}</div>
      </div>
    </div>
    <div class="detail">
      <img class="avatar" :src="userinfo.img" mode="aspectFit">
      {{ userinfo.nickName }}
      <div class="right rate-color">
        {{ info.rate }}分
        <rate :value='info.rate'></rate>
      </div>
    </div>
    <div class="detail">
      {{ info.publisher }}
      <div class="right">
        {{ info.price }}
      </div>
    </div>
    <div class="tags">
      <div class="badge" v-for="tag in info.tags" :key='tag'>{{tag}}</div>
    </div>
    <div class="summary">
      <p v-for="sum in info.summary" :key='sum'>
        {{sum}}
      </p>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate'

export default {
  props: ['info'],
  computed: {
    userinfo () {
      return this.info.user_info || {}
    }
  },
  components: {
    Rate
  }
}
</script>

<style lang="scss" scoped>
.bookinfo{
  font-size: 14px;
  .right{
    float: right;
  }
  .badge{
    display:inline-block;
    margin: 5px;
    padding: 5px;
    border-radius: 7px;
    color: #20B2AA;
    border: 1px solid #20B2AA;
  }
  .thumb{
    position: relative;
    width: 100%;
    height: 500rpx;
    overflow: hidden;
    .back{
      filter: blur(15px);
      width: 100%;
    }
    .img{
      position: absolute;
      width: 100%;
      height: 300rpx;
      left: 0;
      top: 30rpx;
    }
    .info{
      position: absolute;
      width: 100%;
      left: 0;
      top: 330rpx;
      text-align: center;
      color: #ffffff;
      .title{
        font-size: 20px;
      }
      .author{
        font-size: 14px;
      }
    }
  }
  .detail{
    padding: 5px 10px;
    .avatar{
      width: 20px;
      height: 20px;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  .summary{
    padding: 0 15px;
    margin-top: 10px;
    p{
      text-indent: 2em;
      font-size: 14px;
    }
  }
}
</style>

