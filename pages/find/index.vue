<template>
	<view class="contain">
		<Banner :swiper="swiper" />
		<view class="flex-bar">
			<view class="flex-item" v-for="(item,index) in flexItem" :key="index">
				<image :src="item.pic"></image>
				<view>{{item.title}}</view>
			</view>
		</view>
		<!-- 推荐歌单 -->
		<view class="song-list">
			<view class="list-bar">
				<view class="first">推荐歌单</view>
				<view class="second">歌单广场</view>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
					<view  class="scroll-view-item_H" v-for="(item,index) in songs" :key="index">
						<image :src="item.picUrl"></image>
						<view class="scroll-name">{{item.name}}</view>
						<view class="scroll-count square">{{item.playCount}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 新歌新碟 -->
		<view class="new-song song-list">
			<view class="new-title list-bar">
				<view class="new-left">
					<view class="xinge" :class="{first:newType==1}" @click="songTag(1)">新歌</view>
					<view class="line"></view>
					<view class="xinge" :class="{first:newType==2}" @click="songTag(2)">新碟</view>
				</view>
				<view class="new-right second">更多新歌</view>
			</view>
		</view>
	</view>
</template>

<script>
import Banner from '@/components/banner/index.vue';
import {apiGetBanner,apiGetSongs,apiGetAlbum} from '@/api/index.js'
export default {
	data() {
		return {
			swiper:[],
			flexItem:[
				{title:'每日推荐',pic:'../../static/tab/t_11.png'},
				{title:'歌单',pic:'../../static/tab/t_11.png'},
				{title:'排行榜',pic:'../../static/tab/t_11.png'},
				{title:'电台',pic:'../../static/tab/t_11.png'},
				{title:'直播',pic:'../../static/tab/t_11.png'},
			],
			songs:[],
			newType:1
		}
	},
	onLoad() {
		this.getBanner()
	},
	methods: {
		getBanner(){
			// 轮播接口
			apiGetBanner().then(res=>{
				this.swiper = res.banners
			})
			// 歌单接口
			apiGetSongs().then(res=>{
				// 格式化播放量
				const palycount = data =>{
					let count = data;
					if(data>10000){
						count = (parseInt(data/10000) + '万');
					}
					return count;
				}
				this.songs = res.result;
				this.songs.forEach(item=>{
					item.playCount = palycount(item.playCount);
				})
			})
			// 接口新碟
			apiGetAlbum().then(res=>{
				console.log(res)
			})
		},
		songTag(type){
			this.newType = type
		}
	},
	components:{
		Banner
	}
}
</script>

<style lang="scss">
$margin: 0 40rpx;
	.flex-bar{
		display: flex;
		justify-content: space-between;
		text-align: center;
		height: 80px;
		border-bottom: 1px solid #ccc;
		.flex-item{
			margin: 0 auto;
			image{
				width: 92rpx;
				height: 92rpx;
			}
		}
	}
	// 推荐歌单
	.song-list{
		.list-bar{
			display: flex;
			justify-content: space-between;
			margin: 30rpx 40rpx;
			font-weight: bold;
				.first{
					font-size: 34rpx;
					color: #000;
				}
				.second{
					border: 1px solid #ccc;
					height: 60rpx;
					width: 160rpx;
					text-align: center;
					line-height: 60rpx;
					border-radius: 30rpx;
				}
			}
		}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		margin: $margin;
	}
	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 240rpx;
		position: relative;
		image{
			width: 218rpx;
			height: 218rpx;
			object-fit: cover;
			display: block;
			margin: 0 auto;
			border-radius: 20rpx;
		}
		.scroll-name{
			text-overflow:ellipsis;
			overflow: hidden;
			white-space: nowrap;
			font-weight: bold;
			font-size: 36rpx;
			text-align: center;
		}
		.scroll-count{
			position: absolute;
			top: 10rpx;
			right: 20rpx;
			color: #fff;
		}
		.square::before{
			content: '';
			display:block;
			position: absolute;
			left: -30rpx;
			top: 8rpx;
			width: 0;
			height: 0;
			border-top: 6px solid transparent;
			border-left: 8px solid #fff;
			border-bottom: 6px solid transparent;
		}
	}
	// 新歌新碟
	.new-left{
		display: flex;
		position: relative;
		&>view{
			margin: 0 10rpx;
		}
		.line:before{
			content: '';
			position: absolute;
			display: block;
			width: 2px;
			height: 15px;
			top: 16rpx;
			background: #ccc;
		}
		.xinge{
			line-height: 30px;
			color: #666;
			font-size: 26rpx;
		}
		
	}
</style>
