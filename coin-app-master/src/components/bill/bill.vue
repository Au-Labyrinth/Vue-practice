<template>
	<transition name="slide">
		<div class="bill">
			<div class="bill-header">
				<div class="back">
					<span class="icon iconfont icon-iconfont6" @click="back"></span>
				</div>

				<div class="title">
					<span>充值到二维码地址</span>
				</div>
			</div>

			<div class="bill-content">
				<div class="tab-item">
					<router-link class="tab-link" to="/bill/all-record" replace>
						<div class="tab-text">
							<span>全部记录</span>
						</div>
					</router-link>
					<router-link class="tab-link" to="/bill/pay-record" replace>
						<div class="tab-text">
							<span>充值记录</span>
						</div>
					</router-link>
					<router-link class="tab-link" to="/bill/withdraw-record" replace>
						<div class="tab-text">
							<span>提现记录</span>
						</div>
					</router-link>
				</div>
				
				<keep-alive>
					<router-view></router-view>			
				</keep-alive>			
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
	.bill
		position: absolute
		top: 0
		bottom: 0
		z-index: 9999	
		width: 100%
		background: #edf3f5
		&.slide-enter-active, &.slide-leave-active
			transition: all .3s
		&.slide-enter, &.slide-leave-to
			transform: translate3d(100%, 0, 0)
		.bill-header
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
		.bill-content
			.tab-item
				box-sizing: border-box
				display: flex
				height: 2rem
				line-height: 2rem
				text-align: center
				background: #fff
				border-bottom: 0.1rem solid #ccc
				.tab-link
					flex: 1		
					&.router-link-active
						.tab-text
							span
								border-bottom: 0.2rem solid #01579b
								padding: 0.4rem 0.5rem
								color: #01579b
					.tab-text
						span
							color: #333
							font-weight: 600
							font-size: 0.8rem						
</style>