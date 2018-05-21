<template>
<transition name="slide">
	<div class="withdrawto">
		<div class="withdraw-header">
			<div class="back">
				<span class="icon iconfont icon-iconfont6" @click="back"></span>
			</div>

			<div class="title">
				<span>提现</span>
			</div>
		</div>

		<div class="withdrawto-content">
			<div class="address">
				<div class="options">
					<div class="text">
						<span class="icon iconfont icon-qianbao"></span>
						<input type="text" placeholder="请选着地址或者粘贴">
					</div>
					<div class="text">
						<span class="icon iconfont icon-shijian"></span>
					</div>
				</div>
				<div class="name">
					<div class="text">
						<span class="icon iconfont icon-fangzi"></span>
						<input type="text" placeholder="地址名称，如：我的地址1，选填">
					</div>
				</div>
			</div>

			<div class="money">
				<div class="title">
					<span>提现金额</span>
				</div>
				<div class="amount">
					<img src="./images/money.png">
					<input type="number" placeholder="请输入金额量">
				</div>
				<div class="balance">
					<div class="desc">
						<div class="text">
							<p>可用金额：</p>
						</div>
						<div class="text">
							<span>实际到账金额：</span><span class="deduct">旷工费：</span>
						</div>
					</div>
				</div>

				<div class="btn">
					<button>申请提现到地址</button>
				</div>
			</div>
		</div>
	</div>
</transition>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},		
		methods: {
			back() {
				this.$router.back()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.withdrawto
		position: absolute
		top: 0
		bottom: 0
		z-index: 9999	
		width: 100%
		background: #ccc
		&.slide-enter-active, &.slide-leave-active
			transition: all .3s
		&.slide-enter, &.slide-leave-to
			transform: translate3d(100%, 0, 0)	
		.withdraw-header
			width: 100%
			height: 3rem
			background: #01579b
			.back
				padding-top: 1rem
				padding-left: 0.75rem
				color: #fff
			.title
				margin-top: -1rem
				text-align: center
				color: #fff
				font-size: 1rem
		.withdrawto-content
			position: absolute
			top: 3rem
			bottom: 0
			width: 100%
			background: #edf3f5
			.address
				margin: 1rem auto 
				width: 24rem
				height: 7.4rem
				background: #fff
				border-radius: 0.33rem
				.options, .name
					border-bottom: 0.06rem solid #EDF3F5
					display: flex
					justify-content: space-between
					align-items: center
					padding: 0 1rem
					height: 3.7rem
					color: #b1b1b1
					box-sizing: border-box
					.text
						span
							margin-right: 1rem
							font-size: 1.3rem
						input
							font-size: 0.8rem
							width: 16rem
							outline: none
			.money
				margin: 0 auto
				width: 24rem
				height: 10rem
				background: #fff
				border-radius: 0.33rem
				.title
					display: flex
					align-items: center
					padding: 0 1rem
					height: 2.6rem
					border-bottom: 0.06rem solid #EDF3F5
					box-sizing: border-box
					font-size: 1rem
					color: #333
				.amount
					display: flex
					align-items: center
					padding: 0 1rem
					box-sizing: border-box
					border-bottom: 0.06rem solid #EDF3F5
					height: 3.6rem
					img
						margin-right: 1.3rem
						width: 2.6rem
						height: 2.6rem
					input
						width: 13rem
						outline: none
				.balance
					display: flex
					align-items: center
					padding: 0 1rem
					height: 3.6rem
					line-height: 1.5rem
					font-size: 0.8rem
					color: #b1b1b1
					.deduct
						margin-left: 1rem
				.btn
					margin-top: 3rem
					button
						width: 24rem
						height: 2.6rem
						background-color: #1485de;
						box-shadow: 0rem 0.33rem 1rem 0rem rgba(20, 133, 222, 0.28)
						border-radius: 1.3rem
						font-size: 1rem
						color: #fff
						outline: none
						border: none
</style>