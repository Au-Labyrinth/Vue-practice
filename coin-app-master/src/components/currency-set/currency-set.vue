<template>
<transition name="slide">
	<div class="currency-set">
		<div class="currency-set-header">
			<div class="back">
				<span class="icon iconfont icon-iconfont6" @click="back"></span>
			</div>
			<div class="title">
				<router-link tag="div" class="enjoy" to="/currency-set/enjoy" replace>
					<span>已关注币种</span>				
				</router-link>
				<router-link tag="div" class="hate" to="/currency-set/no-concern" replace>
					<span>未关注币种</span>
				</router-link>
			</div>
			<div></div>
		</div>
		<router-view></router-view>
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
	.currency-set
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
		.currency-set-header
			width: 100%
			height: 3rem
			background: #01579b
			display: flex
			justify-content: space-between
			align-items: center
			.back
				padding: 0 0.75rem
				.icon
					color: #fff
					font-size: 1rem
			.title
				display: flex
				align-items: center
				text-align: center
				width: 12.6rem
				height: 2rem
				color: #fff
				font-size: 1rem
				font-weight: 700
				border: 0.11rem solid #fff
				border-radius: 0.2rem
				box-sizing: border-box	
				.enjoy
					display: flex
					align-items: center
					justify-content: space-around
					width: 6.3rem
					height: 2rem
					box-sizing: border-box
					&.router-link-active
						display: flex
						align-items: center
						justify-content: space-around
						background: #fff
						color: #01579b 
				.hate
					width: 6.3rem
					box-sizing: border-box
					&.router-link-active
						display: flex
						align-items: center
						justify-content: space-around
						height: 2rem
						background: #fff
						color: #01579b
</style>