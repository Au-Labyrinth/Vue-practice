<template>
  <transition name="slide">
		<div class="security">
			<div class="header">
				<span class="back icon iconfont icon-iconfont6" @click="back()"></span>
				<span class="text">安全中心</span>
				<span></span>
			</div>

			<div class="content">
				<div class="items">
					<router-link tag="div" to="/password" class="link">
						<div>
							<span class="icon iconfont icon-Password"></span>
							<span class="text">登录密码设置</span>
						</div>
						<div>
							<span class="icon iconfont icon-arrow-right-copy-copy-copy"></span>
						</div>
					</router-link>
					<router-link tag="div" to="/certification" class="link">
						<div>
							<span class="icon iconfont icon-shimingrenzheng"></span>
							<span class="text">实名认证</span>
						</div>
						<div>
							<span class="icon iconfont icon-arrow-right-copy-copy-copy"></span>
						</div>
					</router-link>
					<router-link tag="div" to="/google" class="link">
						<div>
							<span class="icon iconfont icon-web__gugeyanzheng"></span>
							<span class="text">谷歌认证</span>
						</div>
						<div>
							<span class="icon iconfont icon-arrow-right-copy-copy-copy"></span>
						</div>
					</router-link>
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
			width: 95%
			margin: 1rem auto
			color: #333 
			font-size: 1rem
			background: #fff
			border-radius: 0.3rem
			.items
				.link
					border-bottom: 0.06rem solid #F2F2F2
					display: flex
					align-items: center	
					justify-content: space-between
					height: 3rem
					&:last-child
						border: none
					.icon
						color: #a7a7a7
						margin: 0 1rem
						font-size: 1.2rem
					.text
						margin-left: -0.5rem
</style>