// 引用公共插件
const common = require('../../utils/common.js');


Page({
	onReady(e) {
		// 使用 wx.createAudioContext 获取 audio 上下文 context
		this.audioCtx = wx.createAudioContext('myAudio')
	},
	data: {
		poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
		name: '此时此刻',
		author: '许巍',
		src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
		_innerAudioContext:{//音频对象参数
			currS:0,//当前秒数
			totalS:0,//总共秒数
			audioCurrTime:"",//根据当前秒数currS转换后的时间
			audioTime:""//根据总秒数totalS转换后的时间
		},
		innerAudioContext:null,//音频对象
	},
	audioPlay() {
		this.audioCtx.play()
	},
	audioPause() {
		this.audioCtx.pause()
	},
	audio14() {
		this.audioCtx.seek(14)
	},
	audioStart() {
		this.audioCtx.seek(0)
	},
	onLoad() {
		console.log("转化后的时间：",common.secondToStr(410));
		//音频对象
		const oA = wx.createInnerAudioContext();
		this.setData({
			innerAudioContext:oA
		});
		// var oA = this.data.innerAudioContext;
		oA.autoplay = true;
		oA.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
		
		//播放监听
		oA.onPlay((e) => {
			console.log('开始播放',e);
			
		});
		//监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
		oA.onCanplay((e) => {
			console.log('播放状态：',e);
		});
		//播放失败监听
		oA.onError((res) => {
			console.log("播放出错信息：",res)
		});
		//监听音频播放进度更新事件
		oA.onTimeUpdate((e) => {
// 			console.log('播放进度：',e);
			// console.log('当前音频长度（单位：s）',oA.duration);
			this.setData({
				'_innerAudioContext.audioTime':common.secondToStr(Math.floor(oA.duration)),
				'_innerAudioContext.currS':Math.floor(oA.currentTime),
				'_innerAudioContext.totalS':Math.floor(oA.duration),
				'_innerAudioContext.audioCurrTime':common.secondToStr(Math.floor(oA.currentTime))
			})
			
// 			var minute = Math.floor(oA.duration / 60);//总分钟
// 			var remainderS = Math.floor(oA.duration % 60);//余几秒
			
// 			console.log("6分钟余几秒：",oA.duration % 60);
			// console.log('当前音频的播放位置（单位：s）',oA.currentTime);
		});
		//监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
		oA.onWaiting((e) => {
			console.log('播放暂停加载数据：',e);
		});
		
	},
	//监听音频滑块操作
	sliderChange(e){
		console.log("值：",e.detail.value);
		this.setData({
			'_innerAudioContext.currS':e.detail.value
		});
		//跳转到指定值的秒数位置
		var oA = this.data.innerAudioContext;
		oA.seek(e.detail.value);
		setTimeout(function(){
			oA.pause();
			oA.play();
		},100);
	},
	//播放音频
	innerAudioContextPlay(){
		var oA = this.data.innerAudioContext;
		oA.play();
	},
	//停止音频
	innerAudioContextPause(){
		var oA = this.data.innerAudioContext;
		oA.pause();
	},
	//暂停播放，从新播放会回到从头
	innerAudioContextStop(){
		var oA = this.data.innerAudioContext;
		oA.stop();
	},
})
