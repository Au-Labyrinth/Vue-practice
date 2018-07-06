<template>
  <div class="book-card">
    <div class="thumb">
      <img class="image"
           :src="book.image"
           :alt="book.title"
           mode="aspectFit"
      >
    </div>
    <div class="detail">
      <div class="row">
        <div class="right rate-color">
          {{book.rate}}<rate :value='book.rate'></rate>
        </div>
        <div class="left text-primary">
          {{book.title}}
        </div>
      </div>
      <div class="row">
        <div class="right">
          浏览量：
        </div>
        <div class="left">
          {{book.author}}
        </div>
      </div>
      <div class="row">
        <div class="right">
          添加人
        </div>
        <div class="left">
          {{book.publisher}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  props: {
    book: {
      type: Array,
      required: true
    }
  },
  components: {
    Rate
  }
}
</script>

<style lang="scss" scope>
.book-card{
  padding: 10rpx;
  margin: 10px 0;
  overflow: hidden;
  font-size: 14px;
  .thumb{
    float: left;
    width: 90px;
    height: 90px;
    overflow: hidden;
    .image{
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail{
    margin-left: 100px;
    .row{
      line-height: 20px;
      margin-bottom: 3px;
    }
    .right{
      float: right;
    }
    .left{
      margin-right: 80px;
    }
  }
}
</style>

