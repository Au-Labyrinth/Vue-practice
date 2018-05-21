<template>
<div class="tab-root">
	<div class="tab-item">
		<div class="tab-text">
			<span>{{$t('market.edit')}}<span class="icon iconfont icon-icon-"></span></span>
		</div>
		<div class="tab1 tab-text" @click="sortBy('dealChange', rev)">
			<span>{{$t('market.latestPrice')}}<div class="rotate"><span class="icon iconfont icon-qiehuan"></span></div></span>
		</div>
		<div class="tab2 tab-text" @click="sortBy('recentDeal', rev)">
			<span>{{$t('market.increase')}}<div class="rotate"><span class="icon iconfont icon-qiehuan"></span></div></span>
		</div>
	</div>	
</div>

</template>

<script>
	export default {
		props: ['coinList'],
		data() {
			return {
				rev: false
			}
		},
		methods: {
			sortBy(property, rev) {
				this.coinList.sort(this.compare(property, rev))
			},
			compare(property, rev) {
				if (rev === true) {
					this.rev = false
					return function(a, b) {
						var value1 = a[property]
						var value2 = b[property]
						return value1 - value2
					}
				} else {
					this.rev = true
					return function(a, b) {
						var value1 = a[property]
						var value2 = b[property]
						return value2 - value1
					}					
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
.tab-root
	position: absolute
	width: 100%
	top: 5.6rem
	background: #fff
	.tab-item
		display: flex
		height: 2rem
		line-height: 2rem
		margin: 0 0.6rem
		text-align:center
		.tab-text
			flex: 1
			.rotate
				transform: rotate(90deg)
				display: inline-block
</style>