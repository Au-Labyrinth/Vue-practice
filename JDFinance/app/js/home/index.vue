<template lang="html">
    <div>
        <heador></heador>
        <slider></slider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'

export default {
  components: {
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss" module>
</style>
