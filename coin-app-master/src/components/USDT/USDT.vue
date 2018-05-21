<template>
	<div class="usdt">
		<tab :coinList="coinList"></tab>
		<scroll :data="coinList" class="usdt-wrapper">
			<div class="usdt-content">
				<div class="usdt-list" v-for="list in coinList">
					<div class="usdt-text">
						<div class="usdt-item1">
							<img src="./images/pic.png">
							<span class="name">{{list.type}}</span>
						</div>
					</div>	
					<div class="usdt-text">
						<div class="usdt-item2">
							<p class="bPrice">B {{list.bDeal}}</p>
							<p class="price">￥{{list.dealChange}}</p>
						</div>
					</div>
					<div class="usdt-text">
						<div class="usdt-item3">
							<div class="text">
								<p class="rise" :class="{drop: list.priceChange<0}">{{list.priceChange/100}}%</p>
								<p class="price">￥{{list.recentDeal}}</p>
							</div>
						</div>
					</div>

					<div class="usdt-text usdt-icon">
						<span class="icon iconfont icon-jiantou-copy-copy rise" v-if="list.priceChange>=0"></span>
						<span class="icon iconfont icon-jiantou drop" v-if="list.priceChange<0"></span>
					</div>
				</div>
				<div class="alt"></div>
			</div>
		</scroll>
	</div>
</template>

<script>
	import axios from 'axios'
	import Scroll from 'src/components/scroll/scroll'
	import Tab from 'src/components/tab/tab'

	export default {
		data() {
			return {
				coinList: [],
				drop: null
			}
		},
		created() {
			var url = 'https://www.easy-mock.com/mock/5ab3698f1847ef52b3fbcffb/coin/api/market/USDT'
			axios.get(url).then((res) => {
				var data = res.data.data
				this.coinList = data.list
			})
		},
		components: {
			Scroll,
			Tab
		}
	}
</script>

<style lang="stylus" scoped>

.usdt
	.usdt-wrapper
		position: absolute
		top: 7.6rem
		bottom: 3.6rem
		width: 100%
		background: #EDF3F5
		overflow-y: hidden
		.usdt-content
			margin-top: 0.6rem
			.usdt-list	
				margin: 0 0.6rem 0.3rem 0.6rem
				display: flex
				height: 3.3rem
				line-height: 3.3rem
				background: #fff						
				.usdt-text		
					display: flex
					align-items: center
					justify-content: space-around
					flex: 1
					.usdt-item1
						display: flex
						align-items: center
						img
							margin-right: 0.3rem
							width: 1.6rem
							height: 1.6rem
						.name
							font-size: 1rem
							font-weight: 600
					.usdt-item2, .usdt-item3
						line-height: 1rem
						font-size: 0.6rem						
						.bPrice
							font-size: 0.8rem
							font-weight: 700
						.price
							color: #888
						.rise
							font-weight: 700
							font-size: 1rem
							color: #f50057
						.drop
							font-weight: 700
							font-size: 1rem
							color: #0ca97b
				.usdt-icon
					position: absolute
					right: 1rem
					.rise
						font-weight: 700
						color: #f50057
					.drop
						font-weight: 700
						color: #0ca97b
			.alt
				height: 2rem
</style>