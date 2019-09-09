// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoFocus:true,
    courtList:[
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      },
      {
        img:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        label:'北京金山湖',
        distance:'30.33km',
        price:'650',
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 取消
  goBack(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
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