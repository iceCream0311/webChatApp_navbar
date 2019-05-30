App({
  onLaunch: function () {
    let that=this;
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.statusBarHeight = res.statusBarHeight
        console.log(that.globalData.statusBarHeight)
      }     
    })
  },
  globalData:{
    statusBarHeight:0
  }
})
