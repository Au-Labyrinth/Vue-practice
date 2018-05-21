<template>
  <transition name="slide">
		<div class="security">
			<div class="header">
				<span class="back icon iconfont icon-iconfont6" @click="back()"></span>
				<span class="text">关于我们</span>
				<span></span>
			</div>

			<div class="content">
				<div class="title">
					<div class="logo">
						<img src="./images/logo.png">
					</div>
					<div class="name">
						<img src="./images/logo2.png">
						<p>领先的数字货币交易平台</p>
					</div>
				</div>

				<div class="desc">
					<p>数码货币（英语：Digital currency，又译为数字货币）是电子货币形式的替代货币。目前，任何政府的中央银行都没有表示要发行数码货币，数码货币也不一定要有基准货币和中央银行。 它不同于虚拟世界中的虚拟货币，因为它能被用于真实的商品和服务交易，而不局限在网络游戏中。早期的数码货币（数字黄金货币）是一种以黄金。</p>
				</div>
			</div>
		</div>
  </transition>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.back()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.security
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
			transform: translate3d(-100%, 0, 0)
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
			margin: 1.6rem auto
			width: 95%
			.title
				border-bottom: 0.06rem solid #E5E5E5
				height: 3rem
				display: flex
				align-items: center
				padding-bottom: 1rem
				.logo
					margin-right: 0.6rem
					border-radius: 50%
					background: #1485de
					width: 2.6rem
					height: 2.6rem
					display: flex
					align-items: center
					justify-content:center
					img
						width: 2rem
						height: 2rem
				.name
					line-height: 1rem
					color: #b5b5b5
					font-size: 0.6rem
					img
						width: 8rem
						height: 1rem
						background-size: 100%
			.desc
				line-height: 1.6rem
				margin-top: 1.6rem
				font-size: 1rem
				color: #666
</style>