<template>
	<div class="footer">
		<router-link tag="div" class="footer-link" to="/market">
			<div class="footer-item">
				<img class="img" src="./images/market.png">
				<img class="img-act" src="./images/market-act.png">
				<span>{{$t('footer.market')}}</span>
			</div>
		</router-link>
		<router-link tag="div" class="footer-link" to="/deal">
			<div class="footer-item">
				<img class="img" src="./images/deal.png">
				<img class="img-act" src="./images/deal-act.png">
				<span>{{$t('footer.deal')}}</span>
			</div>
		</router-link>
		<router-link tag="div" class="footer-link" to="/wallet">
			<div class="footer-item">
				<img class="img" src="./images/wallet.png">
				<img class="img-act" src="./images/wallet-act.png">
				<span>{{$t('footer.wallet')}}</span>
			</div>
		</router-link>
		<router-link tag="div" class="footer-link" to="/user">
			<div class="footer-item user-item">
				<img class="img" src="./images/user.png">
				<img class="img-act" src="./images/user-act.png">
				<p></p>
				<span>{{$t('footer.user')}}</span>
			</div>
		</router-link>			
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" scoped>

	.footer
		position: absolute
		bottom: 0
		display: flex
		width: 100vw
		height: 4rem
		background: #1a1d1f
		.footer-link
			flex: 1
			text-align: center
			color: rgba(255, 255, 255, 0.49)
			font-size: 0.6rem
			&.router-link-active
				color: #1485de
				.img
					display: none
				.img-act
					display: block !important
			.footer-item
				margin: 0.5rem auto
				width: 2rem
				height: 3rem
				.img, .img-act
					padding-bottom: 0.3rem
					width: 2rem
					height: 2rem
				.img-act
					display: none
			.user-item
				width: 4rem
				img
					margin: auto
</style>