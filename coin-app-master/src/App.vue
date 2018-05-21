<template>
	<div class="root">
		<m-sidebar class="sidebar" :class="{'show':show}" v-if="detail||hideDetail" @hideSidebar="hideSidebar" :isLogin="$store.state.isLogin()"></m-sidebar>

	  <div class="content" :class="{detail: detail,hideDetail: hideDetail}">
			<router-view @showSidebar="showSidebar"></router-view>
			<m-footer></m-footer>
		</div>
	</div>
</template>

<script>
  import MFooter from 'src/components/m-footer/m-footer'
  import MSidebar from 'src/components/m-sidebar/m-sidebar'
  
	export default {
		data() {
			return {
				detail: false,
				hideDetail: false,
				show: false
			}
		},
		methods: {
			showSidebar(data) {
				this.detail = data
				this.hideDetail = true
				this.show = true
			},
			hideSidebar(data) {
				this.hideDetail = data
				this.detail = false
				this.show = false
			}
		},
		components: {
			MFooter,
			MSidebar
		}
	}
</script>

<style lang="stylus" scoped>
.root
	position: absolute
	left: 0
	top: 0
	bottom: 0
	right: 0
	overflow: hidden
	box-sizing: border-box
	.content
		&.hideDetail
			margin-left: 0
			animation: hideSidebar 0.3s
		&.detail
			margin-left: 16rem
			animation: sidebar 0.3s
	.sidebar
		display: none
		&.show
			display: block
@keyframes sidebar
	from 
		margin-left: 0
	to
		margin-left: 16rem
@keyframes hideSidebar
	from 
		margin-left: 16rem
	to
		margin-left: 0
</style>
