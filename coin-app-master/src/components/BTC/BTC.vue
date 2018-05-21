<template>
	<div class="btc">	
		<tab :coinList="coinList"></tab>

		<scroll class="btc-wrapper">
			<div class="btc-content">	
				<router-link to="/deal">
					<div class="btc-list" v-for="(list, key) in coinList">
						<div class="btc-text">
							<div class="btc-item1">
								<img src="./images/pic.png">
								<span class="name">{{key}}</span>
							</div>
						</div>	
						<div class="btc-text">
							<div class="btc-item2">
								<p class="bPrice">{{list.hight}}</p>
								<p class="price">{{}}</p>
							</div>
						</div>
						<div class="btc-text">
							<div class="btc-item3">
								<div class="text">
									<p class="rise" :class="{drop: list.priceChange<0}">{{list.change/100 | range}}%</p>
									<p class="price">{{}}</p>
								</div>
							</div>
						</div>

						<div class="btc-text btc-icon">
							<span class="icon iconfont icon-jiantou-copy-copy rise" v-if="list.priceChange>=0"></span>
							<span class="icon iconfont icon-jiantou drop" v-if="list.priceChange<0"></span>
						</div>
					</div>
				</router-link>

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
				coinList: {},
				drop: null
			}
		},
		created() {
			var url = 'http://192.168.2.134:4000/api/v3/market/tickers'
			axios.get(url).then((res) => {
				this.coinList = res.data
			})
		},
		filters: {
			range(val) {
				return parseFloat(val).toFixed(2)
			}
		},
		components: {
			Scroll,
			Tab
		}
	}
</script>

<style lang="stylus" scoped>

.btc
	.btc-wrapper
		position: absolute
		top: 7.6rem
		bottom: 3.6rem
		width: 100%
		background: #EDF3F5
		overflow-y: hidden
		.btc-content
			margin-top: 0.6rem
			.btc-list	
				margin: 0 0.6rem 0.3rem 0.6rem
				display: flex
				height: 3.3rem
				line-height: 3.3rem
				background: #fff				
				.btc-text		
					display: flex
					align-items: center
					justify-content: space-around
					flex: 1
					.btc-item1
						display: flex
						align-items: center
						img
							margin-right: 0.3rem
							width: 1.6rem
							height: 1.6rem
						.name
							width: 3.5rem
							font-size: 0.8rem
							font-weight: 700
							color: #333
					.btc-item2, .btc-item3
						line-height: 1rem
						font-size: 0.6rem						
						.bPrice
							font-size: 0.8rem
							font-weight: 700
							color: #333
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
				.btc-icon
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