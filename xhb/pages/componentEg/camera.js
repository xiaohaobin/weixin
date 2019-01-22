// camera.js
Page({
	data:{
		ctx:null,//相机对象
	},
	onLoad(){
		const ctx = wx.createCameraContext();//实例化相机对象	
		this.setData({
			ctx:ctx
		})
	},
	//拍照
  takePhoto() {
    var ctx = this.data.ctx;
    ctx.takePhoto({
      quality: 'high',//图像质量high，normal，low
      success: (res) => {
				console.log(res);
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
	//开始录像
	startRecord(){
		var ctx = this.data.ctx;
		ctx.startRecord({
			//超过30s或页面 onHide 时会结束录像
			timeoutCallback:function(res){
				console.log("封面图片临时路径--开始",res.tempThumbPath);
				console.log("视频的文件的临时路径---开始",res.tempVideoPath);
			},
			success:function(res){
				console.log("录像成功",res);
			}
		})
	},
	//停止录像
	stopRecord(){
			var ctx = this.data.ctx;
			ctx.stopRecord({
				success:function(res){
					console.log("封面图片文件的临时路径--结束",res.tempThumbPath);
					console.log("视频的文件的临时路径--结束",res.tempVideoPath);
				},
			})
	}
		
})