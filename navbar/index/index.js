const app = getApp()

Page({
  data: {
    statusBarHeight: 20, //顶部的高度
    scrollTop: 0, //滚出页面的高度
  },
  onLoad: function() {

    this.setData({
      statusBarHeight: app.globalData.statusBarHeight
    })
  },
  //滚动条监听
  onPageScroll: function(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})