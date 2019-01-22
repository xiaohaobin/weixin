// canvas.js
Page({
  canvasIdErrorCallback(e) {
    console.error(e.detail.errMsg)
  },
  onReady(e) {
    // 使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle('#00ff00')
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()

    context.setStrokeStyle('#ff0000')
    context.setLineWidth(2)

    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    console.log(Math.PI);
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)

    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, Math.PI, true)

    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()

    const ctx = wx.createCanvasContext('secondCanvas')
    // begin path
    //rect()必须依赖setFillStyle()和fill()才能设置填充
    ctx.rect(10, 10, 100, 30)
    ctx.setFillStyle('yellow')
    ctx.fill()

    ctx.beginPath()
    ctx.rect(10, 40, 120, 30)
    // only fill this rect, not in current path
    ctx.setFillStyle('blue')
    //fillRect相当于rect() + fill()的使用，颜色填充直接去上一次的setFillStyle()
    ctx.fillRect(10, 70, 100, 30)

    ctx.rect(10, 100, 100, 30)

    // it will fill current path
    ctx.setFillStyle('red')
    ctx.fill()

    //所有的图形画完之后必须，draw()方法定义绘画
    ctx.draw()
  },
  //导出图片
  ToTempFile(){
    wx.canvasToTempFilePath({          
      canvasId: 'firstCanvas',
      success(res) {
        console.log(res.tempFilePath)
      }
    })
  },
  //将像素数据绘制到画布
  PutImageData(){
    // const data = new Uint8ClampedArray([255, 0, 0, 1])
    wx.canvasPutImageData({
      canvasId: 'secondCanvas2',
      x: 10,
      y: 10,
      width: 10,
      height:10,
      data: new Uint8ClampedArray([255, 0, 0, 1]),
      success(res) { 
        console.log("succ",res);
      }
    })
  }
})