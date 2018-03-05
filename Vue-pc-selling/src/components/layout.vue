<template>
    <div>
        <div class="app-head">
            <div class="app-head-inner">
                <router-link :to="{path: '/'}">
                    <img src="../assets/logo.png" alt="logo">
                </router-link>
                <div class="head-nav">
                    <ul class="nav-list">
                        <li>{{ username }}</li>
                        <li v-if="username !== ''" class="nav-pile">|</li>
                        <li v-if="username !== ''" class="nav-pile" @click="logOut">退出</li>
                        <li v-if="username !== ''" class="nav-pile">|</li>
                        <li v-if="username === ''" @click="logClick">登录</li>
                        <li v-if="username == ''" class="nav-pile">|</li>
                        <li v-if="username === ''" @click="regClick">注册</li>
                        <li v-if="username === ''" class="nav-pile">|</li>
                        <li @click="aboutClick">关于</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="app-foot">
            <p>© 2018 Au practice MIT</p>
        </div>
        <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
            <log-form @has-log="onSuccessLog"></log-form>
        </my-dialog>
        <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
            <reg-form>aaa</reg-form>
        </my-dialog>
        <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
            <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
        </my-dialog>
    </div>
</template>

<script>
    import Dialog from './dialog'
    import LogForm from './logForm'
    import RegForm from './regForm'
    export default {
        components: {
            MyDialog: Dialog,
            LogForm,
            RegForm
        },
        name: 'Layout',
        data () {
            return {
                isShowLogDialog: false,
                isShowRegDialog: false,
                isShowAboutDialog: false,
                username: ''
            }
        },
        methods: {
            logClick () {
                this.isShowLogDialog = true
            },
            regClick () {
                this.isShowRegDialog = true
            },
            aboutClick () {
                this.isShowAboutDialog = true
            },
            closeDialog(name) {
                this[name] = false 
            },
            onSuccessLog (response) {
                this. closeDialog('isShowLogDialog')
                this.username = response.data.username
            }
            
        }
    }
</script>

<style>
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        background: #f0f2f5;
        font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
        font-size: 14px;
        color: #444;
    }
   .app-head{
       width: 100%;
       height: 90px;
       line-height: 90px;
       background: #363636;
       color: #b2b2b2;
   }
   .app-head-inner{
       width: 1200px;
       margin: 0 auto;
   }
   .app-head-inner img{
       width:50px;
        margin-top: 20px;
   }
   .head-nav{
       float: right;
   }
   .head-nav ul{
       overflow: hidden;
   }
   .head-nav li{
       cursor: pointer;
       float: left;
   }
   .nav-pile{
       padding: 0 10px;
   }
   .app-foot{
       width: 100%;
       height: 80px;
       line-height: 80px;
       background:  #e3e4e8;
       text-align: center;
       clear: both;
       margin-top: 30px;
   }
   .container {
       width: 1200px;
       margin: 0 auto;
   }
</style>
