<template>
<transition name="slide">
	<div class="withdraw">
		<div class="withdraw-header">
			<div class="back">
				<span class="icon iconfont icon-iconfont6" @click="back"></span>
			</div>

			<div class="title">
				<span>提现</span>
			</div>

			<router-link tag="div" to="/bill" class="list">
				<span class="icon iconfont icon-qingdan"></span>
			</router-link>
		</div>

		<div class="withdraw-content">
			<router-link tag="div" to="/withdrawto" class="withdraw-to">
				<div class="withdraw-text">
					<div class="desc">			
						<div class="img">
							<img src="./images/withdraw.png">	
						</div>	
						<div class="text">
							<p>提现到地址</p>
							<p class="small-text">输入提现地址提现</p>
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
	.withdraw
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
		.withdraw-header
			width: 100%
			height: 3rem
			background: #01579b
			display: flex
			align-items: center
			justify-content: space-between
			.back, .list
				padding: 0 0.75rem
				color: #fff
			.title
				color: #fff
				font-size: 1rem
			.list
				.icon
					font-size: 1.5rem
		.withdraw-content
			position: absolute
			top: 3rem
			bottom: 0
			width: 100%
			background: #edf3f5
			.withdraw-to
				display: flex
				align-items: center
				margin: 1rem auto
				width: 90%
				height: 4rem
				background: #fff
				.withdraw-text
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