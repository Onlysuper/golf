// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {
      name:'CBD-特惠时段',
      disabled:true
      },
      {
      name:'CBD-特惠时段',
      disabled:false
      },
      {
      name:'CBD-特惠时段'
      },
      {
      name:'CBD-特惠时段'
      },
      {
        name:'CBD-特惠时段'
        },
        {
          name:'CBD-特惠时段'
          },
          {
            name:'CBD-特惠时段'
            },
  ]
  },

  signSub(){
    wx.navigateTo({
      url: '/pages/order/confirm',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getSystemInfo({
    //   success: (res) => {
    //     this.setData({
    //       scrollHeight: res.windowHeight
    //     })
    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  // 下拉刷新
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://xxx/?page=0',
      method: "GET",
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        that.setData({
          moment: res.data.data
        });
        console.log(that.data.moment);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    page = page + 1;
    wx.request({
      url: 'https://xxx/?page=' + page,
      method: "GET",
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 回调函数
        var moment_list = that.data.moment;
        const oldData = that.data.moment;
        that.setData({
           moment:oldData.concat(res.data.data)
        })
        // 隐藏加载框
        wx.hideLoading();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})