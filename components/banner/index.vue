<template>
	<!-- 公共轮播组件 -->
	<view class="banner">
		<swiper :indicator-dots="true" indicator-color="rgba(255,255,255,.5)" indicator-active-color="#ff3721" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiper" :key="index">
				<view class="item">
					<image :src="item.imageUrl"></image>
					<view class="tag">
						{{item.typeTitle}}
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:['swiper'],
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.banner{
		margin: 30rpx 0;
		swiper{
			width: 100%;
			height: 278rpx;
		}
		.item{
			width: 686rpx;
			height: 268rpx;
			margin: 0 auto;
			position: relative;
			border-radius: 14rpx;
			overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
				.tag{
					background-color: #42A1EB;
					position: absolute;
					width: 100rpx;
					height: 40rpx;
					line-height: 40rpx;
					color: #fff;
					border-radius: 14rpx 0 14rpx 0;
					text-align: center;
					right: 0;
					bottom:0;
				}
		}
	}
</style>
