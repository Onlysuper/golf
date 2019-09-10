App({
  onLaunch: function () {

  },
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/result/404'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  }
})
