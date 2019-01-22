Page({
	data: {
		Muted:false,//是否静音
		mode:"live",//live和RTC模式
		
	},
	statechange(e) {
		console.log('live-player code:', e.detail.code)
	},
	error(e) {
		console.error('live-player error:', e.detail.errMsg)
	},
	//是否静音
	isMuted(e) {
		var _this = this;
		_this.setData({
			Muted:!_this.data.Muted
		})
	},
	//切换模式
	toggleMode(e){
		var _this = this;
		_this.setData({
			mode:(_this.data.mode == "live" ? "RTC" : "live")
		})
	},
	 onReady(res) {
	  this.ctx = wx.createLivePlayerContext('player')
	},	
	bindPlay() {
	  this.ctx.play({
	    success: res => {
	      console.log('play success')
	    },
	    fail: res => {
	      console.log('play fail')
	    }
	  })
	},
	bindPause() {
	  this.ctx.pause({
	    success: res => {
	      console.log('pause success')
	    },
	    fail: res => {
	      console.log('pause fail')
	    }
	  })
	},
	bindStop() {
	  this.ctx.stop({
	    success: res => {
	      console.log('stop success')
	    },
	    fail: res => {
	      console.log('stop fail')
	    }
	  })
	},
	bindResume() {
	  this.ctx.resume({
	    success: res => {
	      console.log('resume success')
	    },
	    fail: res => {
	      console.log('resume fail')
	    }
	  })
	},
	bindMute() {
	  this.ctx.mute({
	    success: res => {
	      console.log('mute success')
	    },
	    fail: res => {
	      console.log('mute fail')
	    }
	  })
	}
})
