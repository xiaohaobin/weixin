//index.js
//获取应用实例
let app = getApp();
let common = require("../../utils/common");
Page({
	data: {
		device: true,
		tempImagePath: "", // 拍照的临时图片地址
		tempThumbPath: "", // 录制视频的临时缩略图地址
		tempVideoPath: "", // 录制视频的临时视频地址
		camera: false,
		ctx: {},
		type: "takePhoto",
		startRecord: false,
		time: 0,
		timeLoop: "",
	},
	onLoad() {
		this.setData({
			ctx: wx.createCameraContext()
		})
	},
	// 切换相机前后置摄像头
	devicePosition() {
		this.setData({
			device: !this.data.device,
		})
		console.log("当前相机摄像头为:", this.data.device ? "后置" : "前置");
	},
	camera() {
		let {
			ctx,
			type,
			startRecord
		} = this.data;
		// 拍照
		if (type == "takePhoto") {
			console.log("拍照");
			ctx.takePhoto({
				quality: "normal",
				success: (res) => {
					// console.log(res);
					this.setData({
						tempImagePath: res.tempImagePath,
						camera: false,
					});
					// https://xx.xxxxxx.cn/api/upload要上传文件的服务器域名
					console.log("要上传的图片地址：",res.tempImagePath);
					//上传文件方法
					wx.uploadFile({
						url: 'http://localhost:8080/upload/fileUpload', //仅为示例，非真实的接口地址
						filePath: res.tempImagePath,
						name: "file",
						header: {
							"Content-Type": "multipart/form-data"
						},
						formData: {//其他参数
							"user": "test",
						},
						success: function(res) {
							var data = res.data
							console.log("上传成功",data)
							//do something
						},
						fail:function(res){
							console.log("上传失败",res)
						}
					})
					
					
				},
				fail: (e) => {
					console.log(e);
				}
			})
		}
		// 录视频
		else if (type == "startRecord") {
			if (!startRecord) {
				console.log("开始录视频");
				this.setData({
					startRecord: true
				});
				// 30秒倒计时
				let t1 = 0;
				let timeLoop = setInterval(() => {
					t1++;
					this.setData({
						time: t1,
					})
					// 最长录制30秒
					if (t1 == 30) {
						clearInterval(timeLoop);
						this.stopRecord(ctx);
					}
				}, 1000);
				this.setData({
					timeLoop
				})
				// 开始录制
				ctx.startRecord({
					success: (res) => {
						console.log(res);
					},
					fail: (e) => {
						console.log(e);
					}
				})
			} else {
				this.stopRecord(ctx);
			}
		}
	},
	// 停止录制
	stopRecord(ctx) {
		console.log("停止录视频");
		clearInterval(this.data.timeLoop);
		ctx.stopRecord({
			success: (res) => {
				this.setData({
					tempThumbPath: res.tempThumbPath,
					tempVideoPath: res.tempVideoPath,
					camera: false,
					startRecord: false,
					time: 0
				});
				//上传文件方法
				//先上传视频图片
				console.log("要上传的视频封面地址：",res.tempThumbPath);
				wx.uploadFile({
					url: 'http://localhost:8080/upload/fileUpload', //仅为示例，非真实的接口地址
					filePath: res.tempThumbPath,
					name: "tempThumbPath",
					header: {
						"Content-Type": "multipart/form-data"
					},
					formData: {//其他参数
						"user": "test",
					},
					success: function(res) {
						var data = res.data
						console.log("上传成功",data)
						console.log("要上传的视频地址：",res.tempVideoPath);
						//再上传视频
						wx.uploadFile({
							url: 'http://localhost:8080/upload/fileUpload', //仅为示例，非真实的接口地址
							filePath: res.tempVideoPath,
							name: "tempVideoPath",
							header: {
								"Content-Type": "multipart/form-data"
							},
							formData: {//其他参数
								"user": "test",
							},
							success: function(result) {
								var d = result.data
								console.log("上传成功",d)
								//do something
							},
							fail:function(res){
								console.log("上传失败",res)
							}
						})
						
					},
					fail:function(res){
						console.log("上传失败",res)
					}
				})
				
				
			},
			fail: (e) => {
				console.log(e);
			}
		})
	},
	// 打开模拟的相机界面
	open(e) {
		let {
			type
		} = e.target.dataset;
		console.log("开启相机准备", type == "takePhoto" ? "拍照" : "录视频");
		this.setData({
			camera: true,
			type
		})
	},
	// 关闭模拟的相机界面
	close() {
		console.log("关闭相机");
		this.setData({
			camera: false
		})
	}
})
