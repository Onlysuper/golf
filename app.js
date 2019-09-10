App({
  onLaunch: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.platform = res.platform
        let totalTopHeight = 68
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
        }
        that.globalData.statusBarHeight = res.statusBarHeight
        that.globalData.titleBarHeight = totalTopHeight - res.statusBarHeight
      },
      failure() {
        that.globalData.statusBarHeight = 0
        that.globalData.titleBarHeight = 0
      }
    })
  },
  globalData:{
    statusBarHeight:0,
    titleBarHeight:0
  },
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/result/404'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  }
})
