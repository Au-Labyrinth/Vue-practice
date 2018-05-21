<template>
	<transition name="slide">	
		<div class="root">
			<img src="./images/bg.png">			
			<div class="forgot">
				<div class="forgot-wrapper">			
					<div class="logo">
						<img src="./images/logo.png">
						<p class="text">正在找回密码</p>
					</div>

					<div class="info">
						<form ref="forgotForm" onsubmit="return false" novalidate>
							<div class="email">
								<span class="icon iconfont icon-web__guanyuwomen"></span>
			  				<input type="text" placeholder="请输入邮箱" v-model="email">	
							</div>
							<div class="authCode">
								<span class="icon iconfont icon-Password"></span>
			  				<input type="text" placeholder="请输入收到的验证码" v-model="authCode">		
			  				<span class="send">发送</span>		
							</div>
							<div class="password">
								<span class="icon iconfont icon-Password"></span>
			  				<input type="password" placeholder="请输入密码" v-model="password">				
							</div>

							<mt-button type="primary" class="login-btn"><span class="icon iconfont icon-mima"></span>注册账户</mt-button>
						</form>

						<div class="back">
							<span class="icon iconfont icon-iconfont6" @click="back"></span>
						</div>
					</div>
					<div class="alt"></div>
				</div>
			</div>
		</div>	
	</transition>
</template>

<script>

	export default {
    data() {
      return {
      	email: '',
      	authCode: '',
      	password: ''
      }
    },
		methods: {
			back() {
				this.$router.back()
			}
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
		transform: translate3d(100%, 0, 0)	
	img
		width: 100vw
		height: 100vh
	.forgot
		overflow: hidden
		position: absolute
		top: 0
		bottom: 0
		width: 100%
		.forgot-wrapper
			.logo
				text-align: center
				margin-top: 7rem
				img
					margin-bottom: 1rem
					width: 5.3rem
					height: 5.3rem
				.text
					font-size: 1rem
					color: #1075c5
			.info
				margin-top: 2.3rem			
				text-align: center
				.email, .password, .authCode				
					margin: 0 auto 1.3rem auto
					width: 90%
					background: #e6e7ed
					border-radius: 1.5rem
					input
						width: 80%					
						height: 3rem
						border-radius: 1.5rem
						background: #e6e7ed
						text-indent: 0.6rem
						caret-color: #1485DE
						outline: none		
				.authCode	
					position: relative
					.send
						position: absolute
						top: 50%
						right: 1rem
						transform: translateY(-50%)
						width: 3rem
						color: #1485de
						font-size: 1rem
				.login-btn
					margin-top: 1rem
					height: 2.6rem
					width: 90%
					color: #fff
					font-size: 1rem
					background-image: linear-gradient(0deg, rgba(12, 169, 123, 0.35) 0%,rgba(53, 239, 115, 0.35) 100%), linear-gradient(#58b3fb, #58b3fb)
					box-shadow: 0rem 0.33rem 1rem 0rem rgba(66, 184, 205, 0.44)
					border-radius: 1.3rem
					border: none
					outline: none
				.back
					margin-top: 2rem
					.icon
						color: #878a9a
						font-size: 1.3rem
						font-weight: 700
</style>
