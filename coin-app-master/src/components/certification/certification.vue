<template>
	<div class="certification">
		<div class="header">
			<span class="back icon iconfont icon-iconfont6" @click="back()"></span>
			<span class="text">实名认证</span>
			<span></span>
		</div>		
		<scroll class="content-wrapper" ref="contentWrapper">
			<form class="content" onsubmit="return false">
				<div class="info">
					<span class="title">填写认证信息（中国大陆）</span>
					<div class="name">
						<span class="icon iconfont icon-informatiom_"></span>
						<input type="text" name="name" placeholder="输入你的真实姓名">
					</div>
					<div class="id-card">
						<span class="icon iconfont icon-shimingrenzheng"></span>
						<input type="text" name="idcard" placeholder="有效身份证号码">
					</div>
					<p>*温馨提示：请确保您使用本人的真实身份进行验证，以便于保证账户和资金操作的安全，我们会保护您的个人信息安全。</p>
				</div>

				<span class="tip">上传证件信息（请确保清晰可见）</span>

				<div class="photo">
					<div class="link">
						<div class="front-pic">
							<input type="file" name="front" capture="camera"  accept="image/*">
						</div>
						<p class="text" @click="showFrontPic">（查看示例）</p>
					</div>
					<div class="link">
						<div class="back-pic">
							<input type="file" name="back" capture="camera"  accept="image/*">
						</div>
						<p class="text" @click="showBackPic">（查看示例）</p>
					</div>
					<div class="link">
						<div class="hand-pic">
							<input type="file" name="hand" capture="camera"  accept="image/*">
						</div>
						<p class="text" @click="showHandPic">（查看示例）</p>
					</div>

					<div class="link">
						<p class="desc">手持本人身份证正面照和个人签字 (请您上传一张手持身份证正面照和个人签字的照片，个人签字的内容包含“coin2coin”和当前日期。请确保照片和个人签字的内容清晰可见。)</p>
					</div>
				</div>

				<mt-button type="primary" class="btn">提交认证</mt-button>
			</form>
		</scroll>

		<div class="frontPic" v-show="frontPic">
			<img src="./images/exa1.png">
			<span class="close" @click="frontClose">&times;</span>
		</div>

		<div class="backPic" v-show="backPic">
			<img src="./images/exa2.png">
			<span class="close" @click="backClose">&times;</span>
		</div>

		<div class="backPic" v-show="handPic">
			<img src="./images/exa3.png">
			<span class="close" @click="handClose">&times;</span>
		</div>
	</div>
</template>

<script>
	import Scroll from 'src/components/scroll/scroll'

	export default {
		data() {
			return {
				frontPic: false,
				backPic: false,
				handPic: false
			}
		},
		methods: {
			back() {
				this.$router.back()
			},
			showFrontPic() {
				this.frontPic = true
			},
			showBackPic() {
				this.backPic = true
			},
			showHandPic() {
				this.handPic = true
			},
			frontClose() {
				this.frontPic = false
			},
			backClose() {
				this.backPic = false
			},
			handClose() {
				this.handPic = false
			},
			click() {
				if (1) {

				}
			}
		},
		components: {
			Scroll
		}
	}
</script>

<style lang="stylus" scoped>
	.certification
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
			transform: translate3d(-100%, 0, 0)
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
		.content-wrapper
			position: absolute
			top:3rem
			bottom: 0
			width: 100%
			box-sizing: border-box
			overflow: hidden
			.content				
				width: 95%
				margin: 1rem auto
				.info
					margin-bottom: 1.3rem
					.title
						margin-left: 0.6rem
						font-size: 0.8rem
						color: #888
						font-weight: 700
					.name, .id-card
						display: flex
						align-items: center
						width: 100%
						height: 2.6rem
						background: #fff
						.icon
							font-size: 1.3rem
							color: #a7a7a7
							margin-left: 1rem
							margin-right: 0.5rem
						input
							outline: none
							font-size: 0.8rem
							color: #adadad
					.name
						margin-top: 0.6rem
					p
						margin-top: 1rem
						color: #acacac
						font-size: 0.8rem
						line-height: 1.3rem
				.tip
					margin-left: 0.6rem
					font-size: 0.8rem
					color: #888
					font-weight: 700
				.photo
					display: flex
					justify-content: space-between
					flex-wrap: wrap
					margin-top: 0.6rem
					.link
						margin-bottom: 2.6rem
						width: 12rem
						height: 7rem
						border-radius: 0.3rem		
						.text
							margin-top: 0.6rem
							text-align: center		
							color: #01579b
							font-size: 0.8rem
							font-weight: bold
						.front-pic
							background-image: url('./images/front.png')
							background-size: 12rem 7rem
							input
								opacity: 0
								width: 12rem
								height: 7rem
								outline: none
						.back-pic
							background-image: url('./images/back.png')
							background-size: 12rem 7rem
							input
								opacity: 0
								width: 12rem
								height: 7rem
								outline: none
						.hand-pic
							background-image: url('./images/hand.png')
							background-size: 12rem 7rem
							input
								opacity: 0
								width: 12rem
								height: 7rem
								outline: none
							
						.desc
							color: #acacac
							font-size: 0.6rem
							line-height: 1.3rem
				.btn
					margin-top: 2rem
					margin-bottom: 2rem
					width: 100%
					height: 2.6rem
					background-color: #1485de
					box-shadow: 0rem 0.3rem 1rem 0rem rgba(20, 133, 222, 0.28)
					border-radius: 1.3rem	
		.frontPic, .backPic, .handPic
			position: fixed
			top: 0 
			left: 0
			z-index: 1000
			opacity: 1
			background: rgba(7, 17, 27, 0.2)
			width: 100%
			height: 100%
			img
				position: fixed
				top: 35%
				left: 50%
				transform: translate(-50%, -35%)
				width: 19rem
				height: 12rem
			.close
				position: fixed
				left: 50%
				bottom: 3.3rem
				transform: translateX(-50%)
				display: flex
				align-items: center
				justify-content: space-around			
				color: #fff
				font-size: 2rem
				border-radius: 50%
				width: 3rem
				height: 3rem
				border: 0.1rem solid #fff
</style>