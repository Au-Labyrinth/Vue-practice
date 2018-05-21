<template>
	<scroll class="current" ref="current">
		<div class="current-content">
			<div class="current-list" v-for="(item, index) in dealCommit">
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
				<div class="list-text">
					<span @click="cancel(index)">撤单</span>
				</div>
			</div>

			<div class="alt"></div>
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'src/components/scroll/scroll'
	import buyImg from './images/buy.png'
	import saleImg from './images/sale.png'
	export default {
		data() {
			return {
				dealCommit: [{
					url: buyImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: saleImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: buyImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: saleImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: buyImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: saleImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: saleImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: buyImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: saleImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: saleImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: buyImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: saleImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					url: buyImg,
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				}]
			}
		},
		methods: {
			cancel(index) {
				this.dealCommit.splice(index, 1)
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
	.current
		position: absolute
		top: 4rem
		bottom: 0
		width: 100%
		overflow: hidden
		font-size: 1rem
		box-sizing: border-box
		.current-list
			display: flex
			justify-content: space-between
			padding: 0 0.66rem
			margin: 0 0.6rem 0.33rem 0.6rem
			box-sizing: border-box
			height: 3.33rem
			line-height: 3.33rem
			background: #fff
			border-bottom: 0.06rem solid #EDF3F5
			&:first-child
				margin-top: 0.66rem
			.list-text
				&:last-child
					color: #1882d5
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