<template>
<div class="deal">
	<div class="header">
		<div class="menu">
			<span class="icon iconfont icon-Shapecopy" @click="showDetail"></span>
		</div>

		<div class="title">
			<span>实时交易</span>
		</div>

		<div class="search">
			<router-link tag="div" :to="{name: 'Search'}">
				<span class="icon iconfont icon-sousuo"></span>
			</router-link>
		</div>
	</div>		
	<div class="deal-container">
		<div class="tab-item">
			<router-link tag="div" to="/deal/buy" class="tab-link">			
				<div class="tab-text">
					<span>买入</span>					
				</div>
			</router-link>
			<router-link tag="div" to="/deal/sale" class="tab-link">			
				<div class="tab-text">
					<span>卖出</span>					
				</div>
			</router-link>
			<router-link tag="div" to="/deal/commit" class="tab-link">			
				<div class="tab-text">
					<span>当前委托</span>					
				</div>
			</router-link>
			<router-link tag="div" to="/deal/history" class="tab-link">			
				<div class="tab-text">
					<span>成交记录</span>					
				</div>
			</router-link>
		</div>
		<keep-alive>
			<router-view></router-view>			
		</keep-alive>
	</div>
</div>
</template>

<script>
	import Search from 'src/components/search/search'
	export default {
		data() {
			return {
				detail: false
			}
		},
		methods: {
			showDetail() {
				this.detail = true
				this.$emit('showSidebar', this.detail)
			}			
		},
		components: {
			Search
		}
	}
</script>

<style lang="stylus" scoped>
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
	.deal-container
		position: absolute
		top: 3rem
		bottom: 4rem
		width: 100%
		background: #EDF3F5
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
					span
						color: #01579b !important
						padding: 0.4rem 0.5rem
						border-bottom: 0.2rem solid #01579b
				.tab-text
					span
						color: #333
						font-weight: 600
						font-size: 0.8rem	
												
	</style>