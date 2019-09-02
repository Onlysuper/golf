// pages/court/court.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courtTop:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  search(){
    wx.navigateTo({
      url:"/pages/search/index"
    })
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll:function(e){
    let scrollTop=e.scrollTop;
    if(scrollTop&&scrollTop>300){
      this.setData({
        courtTop:'court-top-short'
      })
    }else{
      this.setData({
        courtTop:''
      })
    }
  }
})