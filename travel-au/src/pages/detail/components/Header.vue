<template>
  <div>
    <router-link class="header-abs"
                   tag='div'
                    to='/'
                    ref='headerAbs'
                    v-show='showAbs'
    >
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <div class="header-fixed"
        v-show='!showAbs'
        :style='opacityStyle'
    >
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scorll')
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 130
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"

  .header-abs
    position: absolute
    left: .1rem
    top: .1rem
    width: .72rem
    height: .72rem
    line-height: .72rem
    border-radius: .36rem
    text-align:center
    background: rgba(0,0,0,.5)
    .back-icon
      font-size: .36rem
      font-weight: 600
      color: #ffffff
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $header-height
    line-height: $header-height
    text-align: center
    color: #ffffff
    background-color: $color-background
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64em
      text-align: center
      font-size: .4rem
      color: #ffffff
</style>
