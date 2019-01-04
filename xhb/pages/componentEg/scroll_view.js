const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  upper(e) {
    console.log("up:",e)
  },
  lower(e) {
    console.log("lower：",e)
  },
  scroll(e) {
    console.log("滚动",e);
  },
  //点击滚动到视图
  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
		  console.log("进入判断了")
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  //点击滚动
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  //针对整个页面的滚动监听
  onPageScroll:function(e){
    console.log("onPageScroll函数针对整个页面的滚动监听：",e);//{scrollTop:99}
  }
});