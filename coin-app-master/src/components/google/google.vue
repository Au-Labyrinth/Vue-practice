<template>
	<div class="google">
		<div class="header">
			<span class="back icon iconfont icon-iconfont6" @click="back()"></span>
			<span class="text">开启Google认证</span>
			<span></span>
		</div>

		<div class="content">
			<form onsubmit="return false">
				<div class="google-code">
					<span class="icon iconfont icon-informatiom_"></span>
					<input type="text" id="code" class="code" v-model="code" readonly ref="code">
					<mt-button class="copy" @click="copy">复制</mt-button>
				</div>
				<div class="google-code">
					<span class="icon iconfont icon-Password"></span>
					<input type="text" placeholder="请输入谷歌验证码">
				</div>
				<div class="password">
					<span class="icon iconfont icon-Password"></span>
					<input type="password" placeholder="请输入登录密码">
				</div>

				<mt-button class="btn" type="primary">开启Google认证</mt-button>
			</form>
		</div>

		<div class="tips">
			<span>1、如何开启谷歌认证</span>
		</div>		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				code: 'FDOIHLDHNSFHLHFDSOOFIH'
			}
		},
		methods: {
			back() {
				this.$router.back()
			},
			copy() {
				this.$refs.code.select()
				document.execCommand("Copy")
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.google
		position: absolute
		top: 0
		bottom: 0
		background: #f2f2f2
		z-index: 999
		width: 100%
		box-sizing: border-box
		&.slide-enter-active, &.slide-leave-active
			transition: all .3s
		&.slide-enter, &.slide-leave-to
			transform: translate3d(100%, 0, 0)
		.header
			display: flex
			justify-content: space-between
			align-items: center
			height: 3rem
			background: #01579b
			color: #fff
			font-size: 1rem
			.icon
				padding-left: 0.75rem
			.text
				padding-right: 0.75rem
		.content
			position: relative
			width: 95%
			background: #fff
			margin: 1rem auto
			border-radius: 0.5rem
			.google-code
				.code
					color: #1485de
					font-weight: 700
			div
				margin-left: 1rem
				color: #a7a7a7
				font-size: 0.8rem
				height: 3rem
				display: flex
				align-items: center
				.icon
					font-size: 1.2rem
				input
					text-indent: 0.5rem
					width: 21rem
					outline: none
				.copy
					margin-right: 1rem
					width: 4.5rem
					height: 1.6rem
					border-radius: 1rem
					border: 0.06rem solid #1485de
					font-size: 0.1rem
			.btn
				position: absolute
				margin-top: 5rem
				width: 100%
				height: 2.6rem
				background-color: #1485de
				box-shadow: 0rem 0.3rem 1rem 0rem rgba(20, 133, 222, 0.28)
				border-radius: 1.3rem
				font-size: 1rem
		.tips
			margin-left: 1rem
			color: #888
			font-size: 0.6rem
</style>