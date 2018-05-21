<template>
  <transition name='slide'>
    <music-list :rank='rank' :title='title' :bg-image='bgImage' :songs='songs'></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
import { getDetailTopList } from 'api/rank'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
export default {
  components: {
    MusicList
  },
  created () {
    this._getDetailTopList()
  },
  data () {
    return {
      songs: [],
      rank: true
    }
  },
  computed: {
    title () {
      return this.topList.topTitle
    },
    bgImage () {
      if (this.songs.length) {
        return this.songs[0].image
      }
      return ''
    },
    ...mapGetters([
      'topList'
    ])
  },
  methods: {
    _getDetailTopList () {
      if (!this.topList.id) {
        this.$router.push('/rank')
      }
      getDetailTopList(this.topList.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.songlist)
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        const musicData = item.data
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>

<style lang="stylus">
  .slide-enter-active, .slide-leave-active
    transition: all .3s ease
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
