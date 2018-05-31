<template lang="html">
    <div>
        <heador></heador>
        <rslider></rslider>
        <dairly></dairly>
        <in></in>
        <more></more>
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Rslider from './rslider.vue'
import Dairly from './dairly.vue'
import In from './in.vue'
import More from './more.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'

export default {
  components: {
    Heador,
    Rslider,
    Dairly,
    In,
    More,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss">
</style>
