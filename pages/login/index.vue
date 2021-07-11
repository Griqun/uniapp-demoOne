<template>
	<view class="content">
		<view class="login-title">
			您好！<br />欢迎来到上报系统
		</view>
		<view class="login-from">
			<u-form  ref="uForm">
				<u-form-item :border-bottom="false" label-position="top" >
					<u-input maxlength="13" v-model="phoneNum" class="login-input" height="100" style="padding:0 1rem;"  placeholder="请输入账号"  type="phone"></u-input>
				</u-form-item>
				<u-form-item :border-bottom="false" label-position="top" >
					<u-input class="login-input" style="padding:0 1rem;" height="100" type="password" v-model="password"  placeholder="请输入密码"></u-input>
				</u-form-item>
				<button :disabled="btnOn==false" :class="{loginButton:btnOn}" @click="login">登录</button>
			</u-form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkPhoneNum:'',
				phoneNum: '',
				password: '',
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				// 手机号校验
				var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				if(!reg_tel.test(this.checkPhoneNum)){
					uni.showToast({
					    title: '请输入正确手机号',
					    duration: 2000,
						icon:'none'
					});
					return false;
				}
				console.log('成功')
			}
		},
		computed: {
			btnOn(){
				return this.phoneNum!=='' &&  this.password!=='';
			}
		},
		watch: {
			 phoneNum (newValue, oldValue) { // 监听电话号码
				 this.phoneNum = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.phoneNum.trim()
				 if (this.phoneNum.length === 13) {
				 // 验证/保存的手机号码，去除空格
				 this.checkPhoneNum = this.phoneNum.replace(/\s/g, '')
				 console.log('输入的电话号码是：', this.checkPhoneNum)
				 } 
			 }
		 },
		
	}
</script>

<style lang="scss" scoped>
	.content{
		margin: 20rpx 40rpx;
	}
	.login-title{
		font-weight: bold;
		font-size: 48rpx;
	}
	.login-input{
		background: #F8F8F8;
		font-weight: bold;
	}
	.login-from{
		button{
			background:#DFDFDF;
		}
		.loginButton{
			background: #3291F8;
			color: #fff;
		}
	}
</style>
