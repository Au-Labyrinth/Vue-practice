<template>
  <transition name='slide'>
    <div class="city-container">
      <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :cities='cities' :hotCities='hotCities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @change='handleLetterChange'></city-alphabet>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .slide-enter-active, .slide-leave-active
    transition: all .5s
  .city-container
    z-index: 999
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
</style>
