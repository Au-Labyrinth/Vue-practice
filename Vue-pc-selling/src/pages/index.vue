<template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>
                <template v-for="(product,index) in productList">
                    <h3 :key='product[index]'>{{ product.title }}</h3>
                    <ul>
                        <li v-for="(item,index) in product.list" :key="index">
                            <a :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div v-if="!product.last" class="hr"></div>
                </template>
            </div>
            <div class="index-left-block least-news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="(item,index) in newsList" :key="index">
                        <a :href="item.url">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <slide-show :slides="slides" :inv="slideSpeed" @onchange="doSomthingOnSlideChange"></slide-show>
            <div class="index-board-list">
                <div class="index-board-item" 
                    v-for=" (item, index) in boardList" 
                    :class="[{'line-last' : index % 2 !== 0},'index-board-' + item.id]" 
                    :key="index">
                   <div class="index-board-item-inner">
                       <h2>{{ item.title }}</h2>
                       <p>{{ item.description }}</p>
                       <div class="index-board-button">
                           <router-link :to="item.toKey" class="button">立即购买</router-link>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import slideShow from '../components/slideShow'
    export default {
        name: 'IndexPage',
        components: {
            slideShow
        },
        created: function () {
            axios.get('http://localhost:8080/api/getNewsList')
            .then(response => {
                this.newsList = response.data.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
        data () {
            return {
                slideSpeed: 3000,
                slides: [
                    {
                        src: require('../assets/slideShow/pic1.jpg'),
                        title: 'xxx1',
                        href: '/detail/analysis'
                    },
                    {
                        src: require('../assets/slideShow/pic2.jpg'),
                        title: 'xxx2',
                        href: '/detail/count'
                    },
                    {
                        src: require('../assets/slideShow/pic3.jpg'),
                        title: 'xxx3',
                        href: '/detail/forecast'
                    },
                    {
                        src: require('../assets/slideShow/pic4.jpg'),
                        title: 'xxx4',
                        href: '/detail/publish'
                    }
                ],
                 boardList: [
                    {
                        title: '开放产品',
                        description: '开放产品是一款开放产品',
                        id: 'car',
                        toKey: '/detail/analysis',
                        saleout: false
                    },
                    {
                        title: '品牌营销',
                        description: '品牌营销帮助你的产品更好地找到定位',
                        id: 'earth',
                        toKey: '/detail/count',
                        saleout: false
                    },
                    {
                        title: '使命必达',
                        description: '使命必达快速迭代永远保持最前端的速度',
                        id: 'loud',
                        toKey: '/detail/forecast',
                        saleout: true
                    },
                    {
                        title: '勇攀高峰',
                        description: '帮你勇闯高峰，到达事业的顶峰',
                        id: 'hill',
                        toKey: '/detail/publish',
                        saleout: false
                    }
                ],
                newsList: [],
                productList: {
                   pc: {
                        title: 'PC产品',
                        list: [
                            {
                                name: '数据统计',
                                url: 'http://starcraft.com'
                            },
                            {
                                name: '数据预测',
                                url: 'http://warcraft.com'
                            },
                            {
                                name: '流量分析',
                                url: 'http://overwatch.com',
                                hot: true
                            },
                            {
                                name: '广告发布',
                                url: 'http://hearstone.com'
                            }
                        ]
                    },
                    app: {
                        title: '手机应用类',
                        last: true,
                        last: true,
                        list: [
                            {
                                name: 'pp助手',
                                url: 'http://weixin.com'
                            },
                            {
                                name: '产品助手',
                                url: 'http://twitter.com',
                                hot: true
                            },
                            {
                                name: '智能地图',
                                url: 'http://maps.com'
                            },
                            {
                                name: '团队语音',
                                url: 'http://phone.com'
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            doSomthingOnSlideChange () {
                // do what you want!
            }
        }
    }
</script>

<style scoped>
   .index-wrap {
       width: 1200px;
       margin: 0 auto;
       overflow: hidden;
   }
   .index-left {
       width: 300px;
       text-align: left;
       float: left;
   }
   .index-left-block {
       margin: 15px;
       background: #ffffff;
       box-shadow: 0 0 1px #dddddd;
   }
   .index-left-block .hr {
       margin-bottom: 20px;
   }
   .index-left-block h2 {
       background: #4fc08d;
       color: #ffffff;
       padding: 10px 15px;
       margin-bottom: 20px;
   }
   .index-left-block h3 {
       padding: 0 15px 5px 15px;
       font-weight: bold;
       color: #222222;
   }
   .index-left-block ul {
       padding: 10px 15px;
   }
   .index-left-block li {
       padding: 5px;
   }
   .hot-tag {
       background: #ff0000;
       color: #ffffff;
   }
   .least-news {
       min-height: 512px;
   }
   .index-right {
       width: 900px;
       float: right;
   }
   .index-board-item {
       width: 400px;
       background: #ffffff;
       box-shadow: 0 0 1px #dddddd;
       float: left;
       padding: 20px;
       margin-right: 20px;
       margin-bottom: 20px;
   }
   .index-board-item-inner {
       min-height: 125px;
       padding-left: 120px;
   }
   .index-board-car .index-board-item-inner{
        background: url(../assets/images/1.png) no-repeat;
    }
    .index-board-loud .index-board-item-inner{
        background: url(../assets/images/2.png) no-repeat;
    }
    .index-board-earth .index-board-item-inner{
        background: url(../assets/images/3.png) no-repeat;
    }
    .index-board-hill .index-board-item-inner{
        background: url(../assets/images/4.png) no-repeat;
    }
    .index-board-item h2 {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        margin-bottom: 15px;
    }
    .line-last {
        margin-right: 0;
    }
    .index-board-button {
        margin-top: 20px;
    }
    .new-item {
        display: inline-block;
        width: 230px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .hr {
        height: 1px;
        width: 100%;
        background: #ddd;
    }
    .button {
        background: #4fc08d;
        color: #ffffff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
    }
</style>
