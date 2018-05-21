<template>
	<div class="sale">
		<div class="sale-top">
			<div class="operate">
				<div class="input">
					<input class="type" type="text" placeholder="请选择币种">
				</div>

				<div class="operate-list">
					<div class="operate-text">
						<button>+</button>
						<input type="number" placeholder="市值" v-model="market">
						<button>-</button>						
					</div>

					<div class="operate-text">
						<button>+</button>
						<input type="number" placeholder="交易数量" v-model="count">
						<button>-</button>						
					</div>

					<div class="operate-text">
						<button>+</button>
						<input type="number" placeholder="交易额" v-model="price">
						<button>-</button>						
					</div>

					<div class="operate-text">
						<span>总额：{{ total }}</span>
					</div>	

					<div class="options">
						<button>全仓</button>
						<button>半仓</button>
						<button>1/3仓</button>
						<button>2/3仓</button>
						<button>1/4仓</button>
					</div>

					<div class="btn">
						<button><span class="icon iconfont icon-ziyuanjrit"></span><span class="text">卖出</span></button>
					</div>
				</div>
			</div>

			<div class="menu">
				<scroll class="sale-menu" ref="saleMenu">
					<div class="sale-content">
						<div @click="sale(item.price)" class="sale-list" v-for="item in saleMenu">
							<div class="sale-text">
								<span>卖{{item.number}}</span>
							</div>
							<div class="sale-text">
								<span>{{item.price}}</span>
							</div>
							<div class="sale-text">
								<span>{{item.count}}</span>
							</div>
						</div>
					</div>
				</scroll>
				<div class="market">
					<span class="icon iconfont icon-ziyuanjrit"></span>
					<span>0.00567</span>
				</div>
				<scroll class="buy-menu" ref="buyMenu">
					<div class="buy-content">
						<div @click="buy(item.price)" class="buy-list" v-for="item in buyMenu">
							<div class="buy-text">
								<span>买{{item.number}}</span>
							</div>
							<div class="buy-text">
								<span>{{item.price}}</span>
							</div>
							<div class="buy-text">
								<span>{{item.count}}</span>
							</div>
						</div>
					</div>
				</scroll>
			</div>
		</div>

		<div class="sale-bottom">
			<div class="deal-list">
				<div class="deal-text">
					<span>市值</span>
				</div>
				<div class="deal-text">
					<span>成本/现价</span>
				</div>
				<div class="deal-text">
					<span>持仓数量</span>
				</div>
				<div class="deal-text">
					<span>盈亏</span>
				</div>
			</div>

			<div class="noHistory" v-if="!dealHistory.length">
				<img src="./images/null.png">
			</div>
			
			<scroll class="history" ref="history">
				<div class="history-content">
					<div class="history-list" v-for="item in dealHistory">
						<div class="list-text">
							<span>{{item.market}}</span>
						</div>
						<div class="list-text">
							<span>{{item.nowPrice}}</span>
						</div>
						<div class="list-text">
							<span>{{item.total}}</span>
						</div>
						<div class="list-text">
							<span>{{item.nowPrice - item.market | range}}</span>
						</div>
					</div>

					<div class="alt"></div>
				</div>
			</scroll>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Scroll from 'src/components/scroll/scroll'

	export default {
		data() {
			return {
				market: 0,
				price: 0,
				count: 0,
				buyMenu: [],
				saleMenu: [],
				dealHistory: [{
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				},{
					market: 0.36,
					nowPrice: 0.66,
					total: 1000.33
				}]
			}
		},
		created() {
			var url = 'https://www.easy-mock.com/mock/5ab3698f1847ef52b3fbcffb/coin/api/deal/dealList'
			axios.get(url).then((res) => {
					var data = res.data
					this.buyMenu = data.dealList.buyMenu
					this.saleMenu = data.dealList.saleMenu
			})
		},
		computed: {
			total() {
				if (this.price && this.count) {
					return this.price * this.count			
				} else if (this.price == 0 || this.count == 0) {
					return 0
				}
			}
		},
		methods: {
			sale(price) {
					this.market = price
			},
			buy(price) {
				this.market = price
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
.sale-top
	display: flex
	width: 100%
	height: 23rem
	background: #fff
	.operate
		box-sizing: border-box
		flex: 0 0 13rem
		height: 22rem
		margin: 0.66rem 0.33rem
		.input
			.type
				box-sizing: border-box			
				width: 100%
				height: 2rem
				text-indent: 0.5rem
				border: 0.06rem solid #e6e6e6
		.operate-list
			.operate-text
				margin-top: 1rem
				display: flex
				justify-content: space-between
				button
					box-sizing: border-box
					width: 2rem
					height: 2rem
					background: rgba(12, 169, 123, 0.24)
					color: #0ca97b
					font-size: 1.5rem
					border: 0.06rem solid #0ca97b
				input
					box-sizing: border-box
					width: 8.3rem
					height: 2rem
					text-indent: 0.5rem
					border: 0.06rem solid #0ca97b
				span
					font-size: 0.66rem
					color: #f50057
			.options
				margin-top: 1rem
				line-height: 2rem
				button				
					width: 4rem
					height: 1.6rem
					font-size: 1rem				
					border-radius: 0.3rem
					border: 0.06rem solid #ccc
					background: #fff
			.btn
				margin-top: 2rem
				button
					color: #fff
					border: none
					width: 13rem
					height: 2rem
					background-color: #0ca97b;
					box-shadow: 0rem 0.3rem 0.6rem 0rem rgba(12, 169, 123, 0.3);
					border-radius: 1rem
				.icon
					padding: 0.125rem
					font-size: 0.5rem
					border-radius: 50%
					border: 0.06rem solid #fff
					font-size: 1rem
				.text
					margin-left: 0.33rem
					font-size: 1rem
	.menu
		flex: 1
		margin: 0.66rem 0.33rem
		height: 22rem
		box-sizing: border-box
		border: 0.06rem solid #e6e6e6
		border-left: 0.12rem solid #e6e6e6
		width: 11rem
		.sale-menu, .buy-menu
			padding: 5px			
			height: 10rem
			width: 100%
			box-sizing: border-box
			overflow: hidden
			line-height: 2rem
			.sale-list, .buy-list
				display: flex
				.sale-text, .buy-text
					flex: 1
				.sale-text
					color: #0ca97b
					&:last-child
						color: #333
				.buy-text
					color: #f50057
					&:last-child
						color: #333
		.market
			padding-left: 0.06rem
			height: 2rem
			background: #d9d8d4
			line-height: 2rem
			font-size: 1rem
			color: #0ca97b
.sale-bottom
	position: absolute
	top: 25rem
	bottom: 0
	width: 100%
	box-sizing: border-box
	.deal-list
		height: 3.66rem
		display: flex
		padding-left: 0.33rem
		background: #fff
		.deal-text
			flex: 1	
			margin-top: 2.33rem
			color: #888
			font-size: 0.66rem
	.noHistory
		position: absolute
		top: 3.66rem
		bottom: 0
		width: 100%	
		display: flex
		align-items: center
		justify-content: center
		box-sizing: border-box
		img
			width: 7.66rem
			height: 8.33rem
	.history
		position: absolute
		top: 3.66rem
		bottom: 0
		padding-top: 0.33rem
		width: 100%
		overflow: hidden
		.history-list
			display: flex
			padding-left: 0.33rem
			box-sizing: border-box
			width: 100%
			height: 3.33rem
			line-height: 3.33rem
			background: #fff
			border-bottom: 0.06rem solid #EDF3F5
			.list-text
				flex: 1
		.alt
			height: 0.66rem
</style>