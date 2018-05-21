<template>
	<div class="root">
		<img src="./images/bg.png">			
		<div class="cover">
			<div class="cover-wrapper">			
				<div class="logo">
					<img src="./images/logo.png"><br>
					<img class="coin" src="./images/logo2.png">
					<p class="text">安全可靠的数字货币交易平台安全可靠的数字货币交易平台安全可靠的数字货币交易平台</p>
				</div>

				<div class="info">
					<mt-button type="primary" class="cover-btn" @click="toLogin"><span class="icon iconfont icon-web__guanyuwomen"></span><span class="text">登入注册</span></mt-button>

					<p class="or">OR</p>

					<div class="market">
						<mt-button type="primary" class="market-btn" @click="toMarket"><span class="icon iconfont icon-hangqing"></span><span class="text">查看行情</span></mt-button>
					</div>	
				</div>
				<div class="alt"></div>
			</div>
		</div>
	</div>	
</template>

<script>
	export default {
		methods: {
			toLogin() {
				this.$router.push({path: '/login'})
			},
			toMarket() {
				this.$router.push({path: '/market'})
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
	img
		width: 100vw
		height: 100vh
	.cover
		position: absolute
		top: 0
		bottom: 0
		width: 100%
		.cover-wrapper
			position: absolute
			top: 0
			bottom: 0
			.logo
				margin-top: 5rem
				text-align: center
				img
					width: 5.3rem
					height: 5.3rem
				.coin
					margin-bottom: 1.5rem
					width: 12rem
					height: 1.6rem
				.text
					margin: 0 auto
					width: 90%
					line-height: 1.3rem
					color: #878a9a
			.info	
				position: absolute
				bottom: 5.6rem
				width: 100%
				text-align: center	
				.cover-btn
					margin-top: 1rem
					height: 2.6rem
					width: 90%
					color: #fff
					font-size: 1.1rem
					box-shadow: 0rem 0.3rem 1rem 0rem rgba(29, 148, 219, 0.44)
					border-radius: 1.3rem
					border: none
					background-image: linear-gradient(0deg, rgba(48, 130, 254, 0.35) 0%, rgba(24, 255, 255, 0.35) 100%), linear-gradient(#1a7bc7, #1a7bc7)
					outline: none
					.text
						margin-left: 0.3rem
				.or
					margin-top: 1.3rem
					font-size: 0.6rem
					color: #878a9a
				.market-btn
					margin-top: 1.3rem
					margin-bottom: 2rem
					height: 2.6rem
					width: 90%	
					background-color: rgba(26, 163, 219, 0.25);
					border-radius: 1.3rem
					border: 0.15rem solid rgba(26, 163, 219, 0.5)
					font-size: 1rem
					span
						font-size: 1.1rem
						color: rgba(255, 255, 255, 0.6)
					.text
						margin-left: 0.3rem
			.alt
				height: 10rem
</style>
