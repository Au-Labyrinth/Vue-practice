<template>
<transition name="slide">
	<div class="payto">
		<div class="pay-header">
			<div class="back">
				<span class="icon iconfont icon-iconfont6" @click="back"></span>
			</div>

			<div class="title">
				<span>充值到二维码地址</span>
			</div>
		</div>

		<div class="payto-content">
			<div class="address">
				<div class="text">
					<span class="icon iconfont icon-zuobiao"></span>
					<input type="text" id="code" v-model="code" ref="code" readonly>
				</div>
				<div class="btn">
					<mt-button @click="copy">复制</mt-button>
				</div>
			</div>
			<div class="qr-code">
				<div class="img">
					<img src="./images/qrcode.png">
				</div>
				<div class="text">
					<p>扫一扫二维码</p>
					<p>获取充值地址</p>
				</div>
			</div>
		</div>
	</div>
</transition>
</template>

<script>
	export default {
		data() {
			return {
				code: 'FSHSDFKIERLJHLFHDLSHLFDSLHFK'
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
	.payto
		position: absolute
		top: 0
		bottom: 0
		z-index: 9999	
		width: 100%
		background: #ccc
		&.slide-enter-active, &.slide-leave-active
			transition: all .3s
		&.slide-enter, &.slide-leave-to
			transform: translate3d(100%, 0, 0)	
		.pay-header
			width: 100%
			height: 3rem
			background: #01579b
			display: flex
			align-items: center
			.back
				padding-left: 0.75rem
				color: #fff
			.title
				margin: 0 auto
				color: #fff
				font-size: 1rem
		.payto-content
			position: absolute
			top: 3rem
			bottom: 0
			width: 100%
			background: #edf3f5
			.address
				display: flex
				justify-content: space-between
				align-items: center
				padding: 0 1rem
				height: 4rem
				background: #fff
				border-bottom: 0.06rem solid rgba(0, 0, 0, 0.09)
				.text
					display: flex
					align-items: center
					font-size: 0.6rem
					width: 100%
					.icon
						margin-right: 1rem
						font-size: 1.5rem
						color: #b1b1b1
					input
						color: #01579b
						font-weight: 700
						width: 100%
				.btn
					button
						width: 4.5rem
						height: 1.6rem
						border-radius: 1rem
						border: 0.06rem solid #1485de
						background: #fff
						font-size: 0.8rem
						color: #1485de
			.qr-code
				text-align: center
				height: 16.6rem
				background: #fff
				.img
					padding-top: 2.6rem
					img
						width: 7rem
						height: 7rem
				.text
					font-size: 0.6rem
					color: #333
					line-height: 1.3rem
</style>