<template>
	<scroll class="pay" ref="pay">
		<div class="pay-content">
			<div class="pay-list" v-for="item in dealCommit">
				<div class="list-text">
					<div class="list-item">	
						<img :src="item.url">
						<span>{{item.market}}</span>
					</div>
				</div>
				<div class="list-text">
					<span>{{item.nowPrice}}</span>
				</div>
				<div class="list-text">
					<span>{{item.total}}</span>
				</div>
			</div>

			<div class="alt"></div>
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'src/components/scroll/scroll'
	import payImg from './images/pay.png'

	export default {
		data() {
			return {
				dealCommit: [{
					url: payImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: payImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: payImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: payImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: payImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: payImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				}]
			}
		},
		filters: {
			range(number) {
				return number.toFixed(5);
			}
		},
		components: {
			Scroll
		}
	}
</script>

<style lang="stylus" scoped>
	.pay
		position: absolute
		top: 5rem
		bottom: 0
		width: 100%
		overflow: hidden
		font-size: 1rem
		box-sizing: border-box
		.pay-list
			display: flex
			justify-content: space-between
			padding: 0 1.32rem 0 0.66rem
			margin: 0 0.6rem 0.33rem 0.6rem
			box-sizing: border-box
			height: 3.33rem
			line-height: 3.33rem
			background: #fff
			border-bottom: 0.06rem solid #EDF3F5
			&:first-child
				margin-top: 0.66rem
			.list-text
				.list-item
					display: flex
					align-items: center
					img
						margin-right: 0.33rem
						width: 1.66rem
						height: 1.66rem
		.alt
			height: 0.66rem	
</style>