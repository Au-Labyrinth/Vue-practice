<template>
	<transition name="slide">
		<div class="search">
			<div class="search-nav">
				<span class="back icon iconfont icon-iconfont6" @click="back()"></span>

				<div class="text">
					<span class="icon iconfont icon-sousuo"></span>
	  			<input type="text" v-model="search" class="input" placeholder="请输入关键词">
				</div>

				<span class="btn">搜索</span>
			</div>

			<scroll class="search-wrapper" :data="coinList" ref="searchWrapper">
				<div class="search-content">
					<ul>
						<li class="search-text" v-for="item in filterData">
							<img src="./images/pic.png">
							<span>{{item}}</span>
						</li>
					</ul>
				</div>
			</scroll>
		</div>	
	</transition>
</template>

<script>
	import Scroll from 'src/components/scroll/scroll'	

	export default {
		data() {
			return {
				coinList: [],
				search: ''
			}
		},
		created() {
			this.coinList = ['ETH 以太币', 'ETH 以太币', 'ETH 以太币', 'BTC 比特币', 'BTC 比特币', 'BTC 比特币']
		},
		methods: {
			back() {
				this.$router.back()
			}
		},
		computed: {
			filterData() {
				var _search = this.search
				if (_search) {
					return this.coinList.filter(function(obj) {
						return obj.indexOf(_search.toUpperCase().trim()) > -1
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

<style lang="stylus" scoped="">

	.search
		position: fixed
		top: 0
		bottom: 0
		z-index: 110
		width: 100%
		height: 100%
		background: #edf3f5
		box-sizing: border-box
		&.slide-enter-active, &.slide-leave-active
			transition: all .3s
		&.slide-enter, &.slide-leave-to
			transform: translate3d(-100%, 0, 0)
		.search-nav
			display: flex
			align-items: center
			justify-content: space-around
			width: 100%
			height: 3rem
			background: #01579b
			color: #fff
			.text
				width: 18.6rem
				height: 2rem
				line-height: 2rem
				box-sizing: border-box
				border-radius: 0.4rem
				color: rgba(14, 27, 65, 0.3)
				background: #fff
				.icon
					font-weight: 700
					padding-left: 0.6rem
				.input
					width: 16rem
					text-indent: 0.3rem
					outline: none
				.btn
					font-size: 1rem
		.search-wrapper
			position: absolute
			top: 3rem
			bottom: 0
			width: 100%
			box-sizing: border-box
			overflow: hidden
			.search-content
				margin-top: 0.6rem
				background: #fff
				.search-text
					border-bottom: 0.06rem solid #edf3f5
					height: 3rem
					display: flex
					align-items: center		
					padding-left: 1rem
					font-size: 1rem
					&:last-child
						border: none
					img
						margin-right: 0.6rem
						width: 1.6rem
						height: 1.6rem
</style>