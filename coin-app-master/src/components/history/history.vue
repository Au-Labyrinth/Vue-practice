<template>
	<div class="history">
		<div class="history-tab">
			<div class="tab-text">
				<router-link class="tab-link" tag="div" to="/deal/history/all-order">
					<span>全部订单</span>
				</router-link>
			</div>
			<div class="tab-text">
				<router-link class="tab-link" tag="div" to="/deal/history/buy-order">
					<span>买单</span>
				</router-link>
			</div>
			<div class="tab-text">
				<router-link class="tab-link" tag="div" to="/deal/history/sale-order">
					<span>卖单</span>
				</router-link>
			</div>
		</div>

		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" scoped>
	.history-tab
		display: flex
		height: 2rem
		line-height: 2rem
		box-sizing: border-box
		background: #fff
		border-top: 0.06rem solid #fff		
		.tab-text
			margin-left: 2rem
			font-size: 0.66rem
			.tab-link
				&.router-link-active
					color: #01579b
</style>