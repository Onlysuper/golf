// pages/order/order.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab
    menuList: [{
      name: "全部"
     }, {
      name: "待支付"
     }, {
      name: "待确认"
     }, {
      name: "已确认"
     }, {
      name: "已取消"
     }],
     tabScroll: 0,
     currentTab: 0,
     windowHeight: '',
     windowWidth: '',
    //  tab end
    startDateValue:'2016-10-13',
    endDateValue:'2016-10-13'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() { 
    wx.getSystemInfo({  // 获取当前设备的宽高，文档有
     success: (res) => { 
     this.setData({
      windowHeight: res.windowHeight,
      windowWidth: res.windowWidth
     })
     },
    })

  },
  clickMenu: function(e) {
    var current = e.currentTarget.dataset.current //获取当前tab的index
    var tabWidth = this.data.windowWidth / 5 // 导航tab共5个，获取一个的宽度
    this.setData({
     tabScroll: (current - 2) * tabWidth //使点击的tab始终在居中位置
    }) 
    if (this.data.currentTab == current) {
     return false
    } else {
     this.setData({currentTab: current })
    }
  },
  // 日期选择start
  // 开始时间
  datePickerBindchange:function(e){
    this.setData({
      startDateValue:e.detail.value
    })
  },
  // 结束时间
  endDatePickerBindchange:function(e){
    this.setData({
      endDateValue:e.detail.value
    })
  },
  // 日期选择end
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})