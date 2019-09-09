// pages/user/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexArr:[
      {
       id:0,
       name:'男'
      },
      {
      id:1,
      name:'女'
      }
    ],
    birthday:"",
    sex:""
  },
  // 选择性别
  bindSexChange:function(e){
    this.setData({
      sex: this.data.sexArr[e.detail.value].name
    })
  },
  // 选择出生年月
  bindDateChange: function(e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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