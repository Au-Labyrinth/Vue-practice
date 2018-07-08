<template>
  <div class="swiper">
    <swiper
      :indicator-dots='true'
      indicator-color='#EA5A49'
      :autoplay='true'
      :interval='6000'
      :duration='1000'
      :circular='true'
    >
      <div :key='index' v-for='(top,index) in imgUrls'>
        <swiper-item>
          <img
            class='slide-image'
            mode='aspectFit'
            v-for='(img,imgIndx) in top'
            :key='img.id'
            :src="img.image"
            @click="bookDetail(img)"
            >
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
import chunk from 'chunk'

export default {
  props: ['tops'],
  computed: {
    imgUrls () {
      let res = this.tops
      return chunk(res, 3)
    }
  },
  methods: {
    bookDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper{
  margin-top: 5px;
  .slide-image{
    width: 33%;
    height: 250rpx;
  }
}
</style>

