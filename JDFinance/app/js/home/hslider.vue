<template>
  <article>
    <slider :items='items' :cname='$style.slider'></slider>
    <section :class="$style.list">
      <div :class="$style.item" v-for='item in enters' :key='item.img'>
        <router-link :to='{name: item.href}'>
          <img :src="item.img" :alt="item.title">
          <h4>{{ item.title }}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import Slider from '../core/slider.vue'

export default {
  data ()   {
    return {
      items: [{
        href:'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t21160/321/265171359/49600/f6486521/5b07ff97Nf764b48d.jpg?width=750&height=320'
      }, {
        href:'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t20872/57/274489560/49683/e8527414/5b07ffa1N82e0282b.jpg?width=750&height=320'
      }, {
        href:'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t20173/281/386063392/44002/3b22e082/5b0b9cb2Ndc0b11d1.jpg?width=750&height=320'
      }, {
        href:'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t20173/281/386063392/44002/3b22e082/5b0b9cb2Ndc0b11d1.jpg?width=750&height=320'
      }, {
        href:'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t21796/202/262602945/28303/f848cd6b/5b07ff5cN9b554c5b.jpg?width=750&height=320'
      }, {
        href:'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t21796/202/262602945/28303/f848cd6b/5b07ff5cN9b554c5b.jpg?width=750&height=320'
      }
      ],
      enters: [{
            href: "home",
            img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
            title: "优惠券",
        }, {
            href: "home",
            img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
            title: "领红包",
        }, {
            href: "home",
            img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
            title: "抢钢镚",
        }, {
            href: "home",
            img: "//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132",
            title: "领京豆",
        }, {
            href: "home",
            img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
            title: "白条提额",
        }]
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  
  .slider{
    margin-top: 120px;
    img{
      width: 100%;
    }
  }
  .list{
    @include list(row);
    justify-content: space-around;
    padding-top: 40px;
    padding-bottom: 20px;
    background: #ffffff;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666666;
      }
    }
  }
</style>
