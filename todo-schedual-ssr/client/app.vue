<template>
  <div id="app">
    <div id="cover"></div>
    <nav-header></nav-header>
    <!-- <div style="text-align:center;">
      <router-link to="/app/123">app123</router-link>
      <router-link to="/app/456">app456</router-link>
      <router-link to="/login">login</router-link>
    </div> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- <notification content="test notify" /> -->
    <nav-footer></nav-footer>
    <!-- <button @click="notify">notify</button> -->
  </div>
</template>

<script>
  import NavHeader from './layout/header.vue'
  import NavFooter from './layout/footer.jsx'
  // import Todo from './views/todo/todo.vue'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    metaInfo: {
      title: 'Vue todo ssr app'
    },
    data () {
      return {
        text: '黑色五叶草'
      }
    },
    computed: {
      ...mapState({
        count: (state) => state.count,
        textA: state => state.a.text,
        textC: state => state.c.text
      }),
      ...mapGetters({
        'fullName': 'fullName'
        // textPlus: 'a/textPlus'
      })

    },
    mounted () {

      /* this.updateCountAsync({
        num: 5,
        time: 1500
      }) */
    },
    methods: {
      notify () {
        this.$notify({
          content: 'test $notify',
          btn: 'close'
        })
      },
      ...mapActions([
        'updateCountAsync'

      ]),
      ...mapMutations([
        'updateCount'
      ])
    },
    components: {
      NavHeader,
      NavFooter
      // Todo
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

.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>
