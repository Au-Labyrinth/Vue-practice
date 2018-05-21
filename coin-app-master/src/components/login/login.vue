<template>
	<transition name="slide">	
		<div class="root">
			<img src="./images/bg.png">			
			<scroll class="login">
				<div class="login-wrapper">			
					<div class="logo">
						<img src="./images/logo.png">
						<p class="text">安全可靠的数字货币交易平台安全可靠的数字货币交易平台安全可靠的数字货币交易平台</p>
					</div>

					<div class="info">
						<form ref="loginForm" onsubmit="return false" novalidate>
							<div class="email">
								<span class="icon iconfont icon-web__guanyuwomen"></span>
			  				<input type="text" placeholder="请输入邮箱" v-model="email">	
							</div>
							<div class="password">
								<span class="icon iconfont icon-Password"></span>
			  				<input type="password" placeholder="请输入密码" v-model="password">				
							</div>

							<div class="gauth">
								<span class="icon iconfont icon-Password"></span>
			  				<input type="text" placeholder="请输入谷歌验证码" v-model="gauth">				
							</div>
							<mt-button type="primary" class="login-btn" @click="login"><span class="icon iconfont icon-mima"></span>登入</mt-button>
						</form>

						<div class="label">
							<span>如果忘记密码，请</span><span class="link" @click="skip">找回密码</span>
						</div>

						<p class="or">OR</p>

						<mt-button type="primary" class="regist-btn" @click="toRegist"><span class="icon iconfont icon-web__guanyuwomen"></span><span>注册账号</span></mt-button>

						<div class="back">
							<span class="icon iconfont icon-jiantouarrow483" @click="back"></span>
						</div>
					</div>
					<div class="alt"></div>
				</div>
			</scroll>

			<transition name="fade">
				<div class="error" v-show="error">
					<img src="./images/error.png">
				</div>
			</transition>
		</div>	
	</transition>
</template>

<script>
	import axios from 'axios'
	import Scroll from 'src/components/scroll/scroll'

	export default {
    data() {
      return {
      	email: 'ce@ce.com',
      	password: '12345678',
      	gauth: '3213',
				error: false
      }
    },
		methods: {
			back() {
				this.$router.push({path: '/market'})
			},
			skip() {
				this.$router.push({path: '/forgot'})
			},
			login() {
				console.log(this.api)
				if (this.email && this.password) {
					axios({
						method: 'post',
						url: api + '/login',
						data: {
							email: this.email,
							password: this.password
						}
					}).then((res) => {
						console.log('aa')
						if (res.data.status == 'success') {
							var token = window.localStorage.setItem('token', res.data.data.token)
							this.$store.commit('login')
							this.$router.push({path: '/market'})
						} else {
							this.error = true
							setTimeout(() => {
								this.error = false
							}, 2000)
						}
					})
				} else {
					this.error = true
					setTimeout(() => {
						this.error = false
					}, 2000)
				}
			},
			toRegist() {
				this.$router.push({path: '/regist'})
			}
		},
		components: {
			Scroll
		}
	}	
</script>

<style lang="stylus" scoped>
.root
	position: absolute
	top: 0
	bottom: 0
	z-index: 999	
	width: 100%
	&.slide-enter-active, &.slide-leave-active
		transition: all .3s
	&.slide-enter, &.slide-leave-to
		transform: translate3d(-100%, 0, 0)	
	img
		width: 100vw
		height: 100vh
	.login
		overflow: hidden
		position: absolute
		top: 0
		bottom: 0
		width: 100%
		.login-wrapper
			.logo
				margin-top: 7rem
				text-align: center
				img
					width: 5.3rem
					height: 5.3rem
				.text
					margin: 0 auto
					width: 90%
					line-height: 1.3rem
					color: #878a9a
			.info
				margin-top: 2.3rem			
				text-align: center
				.email, .password, .gauth
					padding-left: 1rem
					margin: 0 auto 1.3rem auto
					width: 90%
					background: #e6e7ed
					border-radius: 1.5rem
					input
						width: 90%					
						height: 3rem
						border-radius: 1.5rem
						background: #e6e7ed
						text-indent: 0.6rem
						caret-color: #1485DE
						outline: none		
				.login-btn
					margin-top: 1rem
					height: 2.6rem
					width: 90%
					color: #fff
					font-size: 1rem
					box-shadow: 0rem 0.3rem 1rem 0rem rgba(29, 148, 219, 0.44)
					border-radius: 1.3rem
					border: none
					background-image: linear-gradient(0deg, rgba(48, 130, 254, 0.35) 0%, rgba(24, 255, 255, 0.35) 100%), linear-gradient(#1a7bc7, #1a7bc7)
					outline: none
				.label
					margin-top: 1.3rem
					margin-bottom: 0.6rem
					color: #878a9a
					.link
						color:#2087da
				.or
					font-size: 0.6rem
					color: #878a9a
				.regist-btn
					margin-top: 1.3rem
					margin-bottom: 2rem
					height: 2.6rem
					width: 90%
					border-radius: 1.3rem	
					background: #fff	
					font-size: 1rem
					span
						color: #6ab5ee
				.back
					.icon
						color: #878a9a
						font-size: 2rem
			.alt
				height: 10rem
	.error
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		z-index: 1000
		opacity: 1
		background: rgba(7, 17, 27, 0.2)
		width: 100%
		height: 100%
		&.fade-enter-active, &.fade-leave-active
			transition: all .3s
		&.fade-enter, &.fade-leave-to
			opacity: 0
			background: rgba(7, 17, 27, 0)
		img
			position: fixed
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)			
			width: 6.3rem
			height: 6.3rem
</style>
