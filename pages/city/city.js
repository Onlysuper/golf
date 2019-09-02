// pages/city/city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const win = wx.getSystemInfoSync();
    console.log(win);
    this.setData({
      winHeight: win.windowHeight
    });
  },
//监听传值，后面自己做处理了
cityTap(e){
  console.log('fasdfsdfsdfds');
  console.log(e);
  const cityName=e.detail.cityname;
  wx.navigateBack();
},
// 跳转到国际
countryUrl(){
  wx.navigateTo({
    url:"/pages/country/country"
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

  }
})