<template>
	<div class="nav">
			<div class="nav-item" v-for="item in coinList">
				<router-link tag="div" class="nav-link" :to="'/market/' + item">
					<span class="nav-text">{{item}}</span>
				</router-link>
			</div>
	</div>
</template>

<script>
	import axios  from 'axios'

	export default {
		data() {
			return {
				coinList: []
			}
		},
		created() {
			this.coinList = ['BTC', 'C2C', 'USDT']
		}
	}
</script>

<style lang="stylus" scoped>

.nav
	position: absolute
	top: 3rem 
	height: 2.6rem
	width: 100%
	line-height: 2.5rem
	background: #01579b
	.nav-item
		display: inline-block
		margin-left: 1rem
		.nav-link
			padding: 0 0.5rem			
			font-size: 1rem
			color: rgba(255, 255, 255, 0.5)
			&.router-link-active
				color: #fff
				border-bottom: 0.2rem solid #fff	
</style>