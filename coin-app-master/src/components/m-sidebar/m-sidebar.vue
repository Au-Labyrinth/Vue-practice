<template>
	<div class="sidebar">
		<div class="close">
			<span @click="hideDetail">&times;</span>
		</div>

		<div class="setting">
			<div class="type" @click="toCurrency">
				<span class="icon iconfont icon-ziyuanjrit"></span>
				<span>设置常驻币种</span>
			</div>
			<div class="withdraw" @click="toWithdraw">
				<span class="icon iconfont icon-tixian"></span>
				<span>提现中心</span>
			</div>
		</div>

		<div class="list">
			<div class="link">
				<div class="item drop-item" @click="skip">
					<span>BTC/UEDT</span>
					<span class="icon iconfont icon-jiantou drop"></span>
					<span class="text">比特币</span>
					<p class="percent">
						<span>-11.89%</span>
						<span class="last">-2.888%</span>
					</p>
					<p class="text balance">
						<span>$ 2.70</span>
						<span class="rmb">￥ 17.33</span>
					</p>
				</div>
				<div class="item rise-item" @click="skip">
					<span>BCD</span>
					<span class="icon iconfont icon-jiantou-copy-copy rise"></span>
					<span class="text">比特币钻石</span>
					<p class="percent">
						<span>11.89%</span>
						<span class="last">2.666%</span>
					</p>
					<p class="text balance">
						<span>$ 2.70</span>
						<span class="rmb">￥ 17.33</span>
					</p>
				</div>
			</div>
		</div>

		<div class="logout" v-if="isLogin">
			<mt-button class="btn" type="primary" @click="logout">注销登录</mt-button>
		</div>
		<div class="login" v-if="!isLogin">
			<mt-button class="btn" type="primary" @click="toLogin">登录</mt-button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['isLogin'],
		methods: {
			skip() {
				this.hideDetail()
				this.$router.push({path: '/deal'})
			},
			toCurrency() {
				this.hideDetail()
				this.$router.push({path: '/currency-set/enjoy'})				
			},
			hideDetail() {
				this.$emit("hideSidebar", true)
			},
			logout() {
				this.hideDetail()
				this.$store.commit('logout')
				this.$router.push({path: '/login'})
			},
			toLogin() {
				this.hideDetail()
				this.$store.commit('login')
				this.$router.push({path: '/login'})
			},
			toWithdraw() {
				this.hideDetail()
				this.$router.push({path: '/withdraw'})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.sidebar
		float: left
		background: #1D2023
		width: 16rem
		height: 100vh
		color: #fff
		position: relative
		.close
			position: absolute
			top: 0.3rem
			right: 1rem
			font-size: 2rem
			color: rgba(255, 255, 255, 0.8)
		.setting
			margin-top: 3rem
			line-height: 2rem
			.type, .withdraw
				padding-left: 0.6rem
			.withdraw
				padding-bottom: 1rem
				border-bottom: 0.06rem solid rgba(255, 255, 255, 0.1)
		.list
			margin-top: 1rem
			.link
				width: 90%
				margin: 0 auto
				.item
					position: relative
					height: 5rem
					padding: 0.6rem 1rem
					margin-top: 0.6rem
					border-radius: 0.6rem
					line-height: 1.6rem
					.icon
						position: absolute
						top: 0.6rem
						right: 1rem	
						font-weight: 700		
						font-size: 1.3rem
					.text
						font-size: 0.6rem
						color: rgba(255, 255, 255, 0.5)
						.rmb
							float: right
					.drop
						color: #0ca97b
					.rise
						color: #f50057
					.percent
						color: #0ca97b
						.last
							margin-left: 0.3rem
				.rise-item
					background: rgba(245, 0, 87, 0.1)
				.drop-item
					background: rgba(12, 169, 123, 0.1)
		.logout, .login
			margin-left: 0.66rem
			.btn
				position: absolute
				bottom: 3rem
				width: 90%
				font-size: 1rem
				height: 2.6rem
				background: #01579B
				border-radius: 0.3rem
</style>