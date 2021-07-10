import request from "@/utils/request.js"

//轮播请求接口
export function apiGetBanner(data) {
	return request.request({
		url: '/banner',
		method: 'GET',
		data
	})
}

//推荐歌单
export function apiGetSongs(data) {
	return request.request({
		url: '/personalized',
		method: 'GET',
		data,
	})
}

//新碟新歌
export function apiGetAlbum(data) {
	return request.request({
		url: '/album/newest',
		method: 'GET',
		data
	})
}

//精选视频
export function apiGetRelatedVideo(data) {
	return request.request({
		url: '/related/allvideo',
		method: 'GET',
		data
	})
}
