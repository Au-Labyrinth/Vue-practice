<template>
	<div class="enjoy">
		<div class="top">
			<div class="search">
				<span class="icon iconfont icon-sousuo"></span>
	  		<input type="text" v-model="search" class="input" placeholder="输入币种名称实时过滤">
			</div>
		</div>

		<div class="container">
			<div class="tip">
				<span>当前关注币种（{{coinList.length}}种）</span>
			</div>

			<scroll :data="coinList" class="list-wrapper" ref="list-wrapper">
				<div class="content">
					<draggable element="div" v-model="coinList" :options="dragOptions" :move="onMove">
						<transition-group tag="div" name="flip-list">
							<div class="list" v-for="(item, index) in filterData" :key="item">
								<div class="text">
									<span class="icon iconfont icon-jian" @click="cancel(index)"></span>
									<img src="./images/pic.png">
									<span class="item">{{item}}</span>
								</div>
								<span class="icon iconfont icon-menu2 drag" id="drag" @touchstart="touch"></span>
							</div>
						</transition-group>
					</draggable>
				</div>
			</scroll>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import Scroll from 'src/components/scroll/scroll'
	import Draggable from 'vuedraggable'

	export default {
		data() {
			return {
				coinList: [],
				search: ''
			}
		},
		mounted() {
			this.coinList = ['BTC', "C2C", "USDT", "MANA", 'BTC1', "C2C2", "USDT3", "MANA4"]
		},
		methods: {
			cancel(index) {
				this.coinList.splice(index, 1)
			},
	    onMove () {
	    	// 过滤后禁止拖拽
	      return !this.search
	    },
	    touch(event) {
	    	// 阻止better-scroll滚动
	   		event.stopPropagation()
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
			},
	    dragOptions() {
	      return  {
	      	handle: '.drag',
	        ghostClass: 'ghost'
	      }
	    }
		},
		components: {
			Scroll,
			Draggable
		}
	}
</script>

<style lang="stylus" scoped>
	.enjoy
		width: 100%
		height: 100%
		background: #F5F5F5 
		.top
			display: flex
			align-items: center
			width: 100%
			height: 3rem
			background: #fff
			.search
				margin: 0 auto
				width: 90%
				height: 1.6rem
				background: #F2F2F2
				border-radius: 1rem
				color: #888
				padding-left: 1rem
				border: 1px solid #F2F2F2
				font-size: 0.7rem
				.input
					width: 90%
					height: 1.6rem
					background-color: rgba(242, 242, 242, 0)
					border-radius: 1rem
					text-indent: 0.18rem
					outline: none
		.container
			width: 100%
			height: 100%
			box-sizing: border-box
			.tip
				height: 3rem
				color: #bcbcbc
				line-height: 3rem
				font-size: 0.6rem
				text-align: center
			.list-wrapper
				position: absolute
				top: 9rem
				bottom: 0
				left: 50%
				transform: translateX(-50%)
				width: 95%
				overflow: hidden
				.content
					background: #fff
					border-radius: 0.3rem
					.ghost
						opacity: 1	
						background: #C8EBFB
					.list
						margin: 0 auto
						display: flex
						align-items: center
						justify-content: space-between
						width: 95%
						height: 3.3rem
						border-bottom: 0.06rem solid #E6E6E6
						&:last-child
							border: none
						&.flip-list-move
							transition: transform 0.5s
						.text
							display: flex
							align-items: center
							.icon-jian
								margin-right: 1rem
								font-size: 1.5rem
								font-weight: 700
								color: #F50057
							img
								width: 1.6rem
								height: 1.6rem
							.item
								margin-left: 0.33rem
								color: #666
								font-size: 1rem
						.icon-menu2
							color: #bcbcbc
							font-size: 1.3rem
</style>