<template>
<transition name="slide">
	<div class="pay">
		<div class="pay-header">
			<div class="back">
				<span class="icon iconfont icon-iconfont6" @click="back"></span>
			</div>

			<div class="title">
				<span>充值</span>
			</div>

			<router-link tag="div" to="/bill" class="list">
				<span class="icon iconfont icon-qingdan"></span>
			</router-link>
		</div>

		<div class="pay-content">
			<router-link tag="div" to="/payto" class="pay-to">
				<div class="pay-text">
					<div class="desc">			
						<div class="img">
							<img src="./images/pay.png">	
						</div>	
						<div class="text">
							<p>汇入地址充值</p>
							<p class="small-text">虚拟币地址转入扫码转账充值</p>
						</div>
					</div>

					<div class="right">
						<span class="icon iconfont icon-arrow-right-copy-copy-copy arrow"></span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</transition>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.back(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.pay
		position: absolute
		top: 0
		bottom: 0
		z-index: 9999	
		width: 100%
		background: #ccc
		&.slide-enter-active, &.slide-leave-active
			transition: all .3s
		&.slide-enter, &.slide-leave-to
			transform: translate3d(-100%, 0, 0)
		.pay-header
			width: 100%
			height: 3rem
			background: #01579b
			display: flex
			justify-content: space-between
			align-items: center
			.title
				text-align: center
				color: #fff
				font-size: 1rem
			.back, .list
				padding: 0 0.75rem
			.back
				.icon
					color: #fff
					font-size: 1rem
			.list
				.icon
					color: #fff
					font-size: 1.5rem
		.pay-content
			position: absolute
			top: 3rem
			bottom: 0
			width: 100%
			background: #edf3f5
			.pay-to
				display: flex
				align-items: center
				margin: 1rem auto
				width: 90%
				height: 4rem
				background: #fff
				.pay-text
					width: 100%
					display: flex
					justify-content: space-between
					align-items: center	
					margin: 0 0.6rem
					.desc
						display: flex
						align-items: center		
						font-size: 1rem
						.img
							margin-right: 0.6rem
							img
								width: 2.6rem
								height: 2.6rem		
						.text
							line-height: 1.3rem
							.small-text
								font-size: 0.6rem
								color: #888		
					.right
						color: #bababa			
</style>