<template>
	<div class="market">
		<div class="header">
			<div class="menu">
				<span class="icon iconfont icon-Shapecopy" @click="showDetail"></span>
			</div>

			<div class="title">
				<img src="./images/logo.png">
			</div>

			<div class="search">
				<router-link tag="div" :to="{name: 'Search'}">
					<span class="icon iconfont icon-sousuo"></span>
				</router-link>
			</div>
		</div>

		<m-nav></m-nav>

		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import MNav from 'src/components/m-nav/m-nav'
	import Search from 'src/components/search/search'

	export default {
		methods: {
			showDetail() {
				this.detail = true
				this.$emit('showSidebar', this.detail)
			}
		},
		components: {
			MNav,
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
		img
			width: 7.3rem
			height: 1rem
		.menu, .search
			.icon
				margin: 0 0.75rem
				color: #fff
		.search
			.icon
				font-size: 1.3rem
</style>