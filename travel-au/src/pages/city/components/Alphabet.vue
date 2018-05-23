<template>
  <ul class="list">
    <li class="item" v-for='(item,key) of cities' :key='key'>{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      default () {}
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .list
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: absolute
    top: 1.59rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      color: $color-background
</style>
