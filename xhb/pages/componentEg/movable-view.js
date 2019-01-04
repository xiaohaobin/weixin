Page({
  data: {
    x: 0,
    y: 0,
		inertia:true,//移动是否有惯性
		animation:true,//是否动画
		damping:1,//阻尼系数值
		friction:1,//摩擦系数
		moveData:{//移动数据
			x:0,
			y:0,
			type:""
		},
		scaleData:{//缩放数据
			x:0,
			y:0,
			scale:1
		}
  },
  tap(e) {
    this.setData({
      x: 30,
      y: 30
    })
  },
  onChange(e) {
    console.log(e.detail);
		this.setData({
			'moveData.x':e.detail.x,
			'moveData.y':e.detail.y,
			'moveData.type':e.detail.source
		})
  },
  onScale(e) {
    console.log(e.detail);
		this.setData({
			'scaleData.x':e.detail.x,
			'scaleData.y':e.detail.y,
			'scaleData.scale':e.detail.scale
		})
  },
	//惯性切换
	inertiaFn:function(){
		var _this = this;
		_this.setData({
			inertia:!_this.data.inertia
		});
	},
	//动画切换
	animationFn:function(){
		var _this = this;
		_this.setData({
			animation:!_this.data.animation
		});
	},
	//监听阻尼系数滑块事件
	dampingChange:function(e){
		this.setData({
		  damping: e.detail.value
		})
	},
	//监听摩擦系数滑块事件
	frictionChange:function(e){
		this.setData({
		  friction: e.detail.value
		})
	}
})