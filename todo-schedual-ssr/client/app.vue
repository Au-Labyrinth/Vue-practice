<template>
  <div id="app">
    <div id="cover"></div>
    <nav-header></nav-header>
    <todo></todo>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from './layout/header.vue'
  import NavFooter from './layout/footer.jsx'
  import Todo from './views/todo/todo.vue'

  export default {
    data () {
      return {
        text: '黑色五叶草'
      }
    },
    components: {
      NavHeader,
      NavFooter,
      Todo
    }
  }
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #D3D3D3
  opacity .3
  z-index -1
}
</style>
