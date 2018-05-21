<template>
	<div class="wallet">
		<div class="wallet-header" v-if="$store.state.isLogin()">
			<div class="header">	
				<div class="menu">
					<span class="icon iconfont icon-Shapecopy" @click="showDetail"></span>
				</div>			

				<div class="title">
					<span>{{$t('wallet.myWallet')}}</span>		
				</div>
			</div>

			<div class="asset">
				<p class="balance">1000.21</p>
				<div class="text">
					<span>资产估值(CNY)</span>
					<span>资产估值(BTC)</span>
				</div>
			</div>

			<div class="search">
				<span class="icon iconfont icon-sousuo"></span>
	  		<input type="text" v-model="search" class="input" placeholder="输入币种名称实时过滤">
			</div>
		</div>

		<scroll :data="coinList" class="wallet-wrapper" v-if="$store.state.isLogin()" ref="walletWrapper">
			<div class="container">
				<div class="wallet-content" v-for="list in filterData">
					<div class="wallet-info">
						<div class="wallet-list">
							<div class="wallet-item">
								<div class="wallet-text">
									<span>{{list.coin}}</span>
								</div>
								<div class="wallet-text">
									<img src="./images/logo.png">
									<span class="balance">{{list.balance}}</span>
								</div>
								<div class="wallet-text">
									<span class="state">可用: &nbsp;<span>{{list.usable}}</span></span>
									<span class="state gap">锁定: &nbsp;<span>{{list.freeze}}</span></span>
								</div>
							</div>

							<router-link tag="div" to="/bill" class="right-wrapper">
								<div class="right-btn">
									<img src="./images/btn.png">
								</div>
							</router-link>
						</div>

						<div class="wallet-link">
							<div class="text-list">
								<router-link tag="div" to="/pay">
									<div class="text-item1">
										<span class="icon iconfont icon-chongzhi"></span>
										<span class="text">充值</span>
									</div>
								</router-link>
							</div>
							<div class="text-list">
								<router-link tag="div" to="/withdraw">
									<div class="text-item2">
										<span class="icon iconfont icon-tixian"></span>
										<span class="text">提现</span>
									</div>
								</router-link>
							</div>
							<div class="text-list">
								<router-link tag="div" to="/deal/history/all-order">
									<div class="text-item3">
										<span class="icon iconfont icon-navicon-jysz"></span>
										<span class="text">交易</span>										
									</div>
								</router-link>
							</div>
						</div>	
					</div>
				</div>

				<div class="alt"></div>
			</div>
		</scroll>

		<div class="wallet-container" v-if="!$store.state.isLogin()">
			<div class="header">
				<div class="menu">
					<span class="icon iconfont icon-Shapecopy" @click="showDetail"></span>
				</div>

				<div class="title">
					<span>{{$t('wallet.myWallet')}}</span>
				</div>

				<div class="search">
					<router-link tag="div" :to="{name: 'Search'}">
						<span class="icon iconfont icon-sousuo"></span>
					</router-link>
				</div>
			</div>

			<div class="toLogin">
				<img src="./images/login.png">
				<span class="tips">{{$t('wallet.noLogin')}}~</span>
				<mt-button class="btn" type="primary" @click="toLogin"><span class="icon iconfont icon-50"></span><span class="text">{{$t('wallet.toLogin')}}</span></mt-button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Scroll from 'src/components/scroll/scroll'

	export default {
		data() {
			return {
				coinList: [],
				search: '',
				detail: false
			}
		},
		created() {
			if (this.$store.state.isLogin()) {
				var url = 'https://www.easy-mock.com/mock/5ab3698f1847ef52b3fbcffb/coin/api/wallet/coinList'
				axios.get(url).then((res) => {
					var data = res.data
					this.coinList = data.coinList
				})						
			}	
		},
		methods: {
			showDetail() {
				this.detail = !this.detail
				this.$emit('showSidebar', this.detail)
			},
			toLogin() {
				this.$router.push({path: '/login'})
			}
		},
		computed: {
			filterData() {
				var _search = this.search
				if (_search) {
					return this.coinList.filter(function(obj) {
						return obj[Object.keys(obj)[0]].indexOf(_search.toUpperCase().trim()) > -1
					})
				} else {
					return this.coinList
				}
			}
		},
		components: {
			Scroll
		}
	}
</script>

<style lang="stylus" scoped>

	.wallet-header
		position: absolute
		z-index: 999
		width: 100%
		height: 14rem
		background-image: linear-gradient(180deg, rgba(20, 133, 222, 0.66) 0%, rgba(24, 241, 255, 0.66) 100%), linear-gradient(#01579b, #01579b)
		.header
			height: 3rem
			text-align: center
			color: #fff
			font-size: 1rem
			.menu
				position: absolute
				top: 0.75rem
				left: 0.6rem
			.title
				padding-top: 0.75rem
		.asset
			margin-top: 1rem
			color: #fff
			text-align: center
			line-height: 3rem
			.balance
				font-size: 3rem
			.text
				span
					border-right: 1px solid #fff
					padding: 0 1.5rem
					&:last-child
						border: none			
		.search
			margin: 1rem auto
			width: 90%
			height: 1.6rem
			background-color: rgba(242, 242, 242, 0.48)
			border-radius: 1rem
			color: #fff
			padding-left: 1rem
			.input
				width: 90%
				height: 1.6rem
				background-color: rgba(242, 242, 242, 0)
				border-radius: 1rem
				text-indent: 0.18rem
				outline: none
	.wallet-wrapper	
		background: #F7F7F7
		position: absolute
		top: 14rem
		bottom: 3.6rem
		width: 100%
		overflow-y: hidden
		.wallet-content
			margin-bottom: 2rem
			.wallet-info
				margin: 1rem auto
				width:90%
				height: 10rem
				border-radius: 0.6rem
				background: #fff
				.wallet-list
					padding: 0 1.3rem
					display: flex
					align-items: center
					height: 8rem
					box-shadow: 0rem 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.09)
					.wallet-item
						border-right: 1px dashed #E5E5E5
						width: 80%
						display: inline-block
						.wallet-text
							display: flex
							align-items: center
							line-height: 2rem
							img
								width: 2.3rem
								height: 2.3rem
								border-right: 1px dashed #E5E5E5
								padding-right: 1rem
							.balance
								padding-left: 1rem
								color: #f50057
								font-size: 1.6rem
							.state, .gap
								color: #888
							.gap
								margin-left: 1rem
					.right-wrapper
						width: 20%
						.right-btn
							float: right
							img
								width: 2rem
								height: 2rem
				.wallet-link
					margin-top: 0.3rem
					box-shadow: 0rem 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.09)
					text-align: center
					height: 2rem
					line-height: 2rem
					background: #FAFAFA
					border-bottom-left-radius: 0.6rem
					border-bottom-right-radius: 0.6rem
					.text-list
						display: inline-block
						.text-item1
							color: #1485de
							margin-right: 2rem
							.text
								padding-right: 2rem
								border-right: 0.06rem solid #ccc
						.text-item2
							color: #0ca97b
							margin-right: 2rem
							.text
								padding-right: 2rem
								border-right: 0.06rem solid #ccc
						.text-item3
							color: #f50057
		.alt
			height: 2rem
	.wallet-container
		position: absolute
		top: 0
		bottom: 4rem
		width: 100%
		background: #fff
		.header
			position: absolute
			z-index: 100
			display: flex		
			justify-content: space-between
			width: 100%
			background: #01579b
			height:3rem
			line-height: 3rem
			.title
				color: #fff
			.menu, .search
				.icon
					margin: 0 0.75rem
					color: #fff
			.search
				.icon
					font-size: 1.3rem
		.toLogin
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)
			img
				width: 21.6rem
				height: 29rem
			.tips
				position: absolute
				bottom: 10rem
				left: 50%		
				transform: translate(-50%, 0)
				color: #d1dadc
				font-size: 1rem
			.btn
				position: absolute
				bottom: 4.3rem
				left: 50%
				transform: translate(-50%, 0)
				background-image: linear-gradient(0deg, #ff4351 0%, #ff6849 60%, #ff8c40 100%), linear-gradient(#ff4351, #ff4351)
				box-shadow: 0rem 0.3rem 0.6rem 0rem rgba(255, 71, 80, 0.23)
				border-radius: 1rem
				width: 11.3rem
				height: 2.3rem
				.icon
					vertical-align: middle
					font-size: 1.3rem
				.text
					margin-left: 0.3rem
					font-size: 1rem
</style>