<template>
<div class="user-root">
	<div class="header">
		<div class="menu">
			<span class="icon iconfont icon-Shapecopy" @click="showDetail"></span>
		</div>

		<div class="title">
			<span>{{$t('user.userCenter')}}</span>
		</div>

		<div class="search">
			<router-link tag="div" :to="{name: 'Search'}">
				<span class="icon iconfont icon-sousuo"></span>
			</router-link>
		</div>
	</div>

	<scroll class="user">
		<div class="user-container">
			<div class="user-info">
				<div class="logo">
					<img src="./images/logo.png">
				</div>			
				
				<div class="username" v-if="$store.state.isLogin()">
					<span>lin</span>
				</div>
				<div class="username" v-if="!$store.state.isLogin()">
					<router-link tag="div" to="/login">
						<span>{{$t('user.loginRegister')}}</span>						
					</router-link>
				</div>
			</div>

			<div class="user-wrapper">
				<div class="user-list">
					<div class="user-link">
						<ul>
							<li>
								<div>
									<img src="./images/1.png">
									<span class="text">{{$t('user.langSetting')}}</span>
								</div>
								<mt-switch v-model="lang" class="btn"></mt-switch>
							</li>
							<router-link tag="li" to="/security">
								<div>
									<span class="icon iconfont icon-anquanzhongxin89"></span>
									<span class="text">{{$t('user.securityCenter')}}</span>
								</div>
								<div></div>
								<span class="icon iconfont icon-arrow-right-copy-copy-copy arrow"></span>
							</router-link>
							<li class="last">
									<div>
										<span class="icon iconfont icon-gengxin"></span>
										<span class="text">{{$t('user.versionUpdates')}}</span>
									</div>
									<div></div>
									<span class="icon iconfont icon-arrow-right-copy-copy-copy arrow"></span>
							</li>
						</ul>
					</div>
					<div class="user-link">
						<ul>
							<li>
								<div>
									<span class="icon iconfont icon-cny"></span>
									<span class="text">{{$t('user.monetaryUnitSetting')}}</span>
								</div>
								<div class="cny">
									<mt-switch></mt-switch>
								</div>
							</li>
							<router-link tag="li" class="last" to="/currency-set">
								<div>
									<span class="icon iconfont icon-ziyuanjrit"></span>
									<span class="text">{{$t('user.currencySet')}}</span>
								</div>
								<div></div>
								<span class="icon iconfont icon-arrow-right-copy-copy-copy arrow"></span>
							</router-link>
						</ul>
					</div>
					<div class="user-link">
						<ul>
							<router-link tag="li" to="aboutUs">
								<div>
									<span class="icon iconfont icon-web__guanyuwomen"></span>
									<span class="text">{{$t('user.aboutUs')}}</span>
								</div>
								<div></div>
								<span class="icon iconfont icon-arrow-right-copy-copy-copy arrow"></span>
							</router-link>
						</ul>
					</div>
					<div class="user-link" @click="shareShow">
						<ul>
							<li>
								<div>
									<span class="icon iconfont icon-fenxiang2"></span>
									<span class="text">{{$t('user.share')}}</span>
								</div>
								<div></div>
								<span class="icon iconfont icon-arrow-right-copy-copy-copy arrow"></span>
							</li>
						</ul>
					</div>
				</div>

				<div class="logout" v-if="$store.state.isLogin()">
					<mt-button class="btn" type="primary" @click="logout">{{$t('user.logout')}}</mt-button>
				</div>
			</div>	
		</div>
	</scroll>

	<transition name="fold">
		<div class="share" v-show="!fold">
			<div class="type">
				<div class="twitter">
					<img src="./images/twitter.png">
					<p>twitter</p>
				</div>
				<div class="facebook">
					<img src="./images/facebook.png">
					<p>facebook</p>
				</div>
				<div class="weibo">
					<img src="./images/wb.png">
					<p>微博</p>
				</div>
				<div class="weixin">
					<img src="./images/wx.png">
					<p>微信</p>
				</div>
			</div>
			<div class="close">
				<img src="./images/close.png" @click="shareHide">
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="share-mask" v-show="!fold" @click="shareHide"></div>		
	</transition>
</div>
</template>

<script>
	import axios from 'axios'
	import Scroll from 'src/components/scroll/scroll'
	import Search from 'src/components/search/search'

	export default {
		data() {
			return {
				user: {},
				detail: false,
				fold: true,
				lang: this.$store.state.language()
			}
		},
		mounted() {
			if (this.$store.state.isLogin()) {
				axios.get('https://www.easy-mock.com/mock/5ab3698f1847ef52b3fbcffb/coin/api/user/userInfo').then((res) => {
					this.user = res.data.userInfo
				}).catch(error => {
					console.log(error)
				})
			}
		},
		methods: {
			showDetail() {
				this.detail = true
				this.$emit('showSidebar', this.detail)
			},
			logout() {
				this.$store.commit('logout')
				this.$router.push({path: '/login'})
			},
			shareShow() {
				this.fold = false
			},
			shareHide() {
				this.fold = true
			}
		},
		watch: {
			lang() {
				if (this.lang) {
					this.$i18n.locale = 'en'
					window.localStorage.setItem('language', 'en')
				} else {
					this.$i18n.locale = 'zh'
					window.localStorage.setItem('language', 'zh')
				}
			}
		},
		components: {
			Scroll,
			Search
		}
	}
</script>

<style lang="stylus" scoped>
	.header
		position: absolute
		z-index: 100
		display: flex		
		justify-content: space-between
		width: 100%
		background: #01579b
		height:3rem
		line-height: 3rem
		.title
			color: #fff
		.menu, .search
			.icon
				margin: 0 0.75rem
				color: #fff
		.search
			.icon
				font-size: 1.3rem
	.user
		position: absolute
		top: 3rem
		bottom: 4rem
		width: 100%
		background: #f2f2f2
		overflow: hidden
		box-sizing: border-box
		.user-info
			padding-top: 1rem
			height: 8rem
			text-align: center
			line-height: 3rem
			.logo
				margin: 0 auto
				border-radius: 50%
				box-shadow: 0rem 0.3rem 1.6rem 0rem rgba(20, 133, 222, 0.36)
				background: #1485de
				width: 4.6rem
				height: 4.6rem
				display: flex
				align-items: center
				justify-content:center
				img
					width: 3rem
					height: 3rem
		.user-wrapper
			.user-list	
				width: 90%
				margin: 0 auto
				font-size: 0.6rem
				.user-link
					background: #fff				
					margin-bottom: 0.6rem
					border-radius: 0.06rem
					li
						border-bottom: 0.12rem solid #F2F2F2
						height: 2.6rem
						padding-left: 1rem
						display: flex			
						align-items: center
						justify-content: space-between
						color: #333
						div
							display: flex
							align-items: center
							img
								width: 1rem
								height: 1rem
							.text
								margin-left: 0.6rem
								font-size: 1rem
							.icon
								color: #a7a7a7
						.arrow
							color: #dcdcdc
							margin-right: 1rem
						.btn
							margin-right: 1rem
						.cny
							margin-right: 1rem
			.logout
				margin-top: 2.6rem
				padding-bottom: 1rem
				text-align: center
				.btn
					width: 90%
					height: 2.6rem
					background-color: #1485de
					border-radius: 7rem
					font-size: 1rem
					box-shadow: 0rem 0.3rem 1rem 0rem rgba(20, 133, 222, 0.28)
	.share
		position: absolute
		bottom: 0
		z-index: 2999
		width: 100%
		height: 15rem
		background: #f5f5f5
		transform: translate3d(0, 0, 0)
		&.fold-enter-active, &.fold-leave-active
			transition: all 0.5s
		&.fold-enter, &.fold-leave-to
			transform: translate3d(0, 100%, 0)
		.type
			margin: 2rem auto
			padding-bottom: 1.3rem
			display: flex
			justify-content: space-around
			border-bottom: 0.06rem solid #E5E5E5
			width: 24rem			
			div
				text-align: center
				line-height: 1rem
				img
					width: 3.3rem
					height: 3.3rem
				p
					font-size: 0.33rem
					color: #333
		.close
			text-align: center
			img
				width: 3.3rem
				height: 3.3rem
	.share-mask
		position: fixed
		top: 0
		left: 0
		z-index: 888
		width: 100%
		height: 100%
		opacity: 1
		/* iphone手机下可显示模糊效果 */
		background-filter: blur(10px)
		background: rgba(7, 17, 27, 0.6)
		&.fade-enter-active, &.fade-leave-active
			transition: all 0.5s
		&.fade-enter, &.fade-leave-to
			opacity: 0
			background: rgba(7, 17, 27, 0)
</style>