<template>
	<div class="password">
		<div class="header">
			<span class="back icon iconfont icon-iconfont6" @click="back()"></span>
			<span class="text">密码设定</span>
			<span></span>
		</div>

		<div class="content">
			<form onsubmit="return false">
				<div class="oldPass">
					<span class="icon iconfont icon-informatiom_"></span>
					<input type="password" placeholder="请输入原密码">
				</div>
				<div class="newPass">
					<span class="icon iconfont icon-Password"></span>
					<input type="password" placeholder="请输入新密码">
				</div>
				<div class="newPass">
					<span class="icon iconfont icon-Password"></span>
					<input type="password" placeholder="请输入新密码">
				</div>

				<mt-button type="primary">重置密码</mt-button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.back()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.password
		position: absolute
		top: 0
		bottom: 0
		background: #f2f2f2
		z-index: 999
		width: 100%
		box-sizing: border-box
		&.slide-enter-active, &.slide-leave-active
			transition: all .3s
		&.slide-enter, &.slide-leave-to
			transform: translate3d(100%, 0, 0)
		.header
			display: flex
			justify-content: space-between
			align-items: center
			height: 3rem
			background: #01579b
			color: #fff
			font-size: 1rem
			.icon
				padding-left: 0.75rem
			.text
				padding-right: 0.75rem	
		.content
			position: relative
			width: 95%
			background: #fff
			margin: 1rem auto
			border-radius: 0.5rem
			div
				margin-left: 1rem
				color: #a7a7a7
				font-size: 0.8rem
				height: 3rem
				display: flex
				align-items: center
				.icon
					font-size: 1.2rem
				input
					text-indent: 0.5rem
					width: 21rem
					outline: none
			button
				position: absolute
				margin-top: 5rem
				width: 100%
				height: 2.6rem
				background-color: #1485de
				box-shadow: 0rem 0.3rem 1rem 0rem rgba(20, 133, 222, 0.28)
				border-radius: 1.3rem
				font-size: 1rem
</style>