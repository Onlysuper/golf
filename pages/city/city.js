// pages/city/city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    orderLeft:'',
    tabList:[
      {
        label:'国内',
        index:0,
      },
      {
        label:'国际/地区',
        index:1
      }
    ]
  },
  clickTab(e){
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
     return false;
    } else {
     that.setData({
      currentTab: e.target.dataset.current
     })
    }
    this.changeline(e)
  },
  changeline:function(){
    const query = wx.createSelectorQuery()
    var _this = this
    query.select('.tabTrue').boundingClientRect()
    query.exec(function (res) {
     let halfWidth = Math.round(res[0].width)/2;
     let orderLeft=  Math.round(res[0].left)+halfWidth-15
     _this.setData({
      orderLeft:orderLeft
     })
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const win = wx.getSystemInfoSync();
    this.setData({
      winHeight: win.windowHeight
    });
    this.changeline(1)
  },
  //监听传值，后面自己做处理了
  cityTap(e){
    const cityName=e.detail.cityname;
    console.log(cityName);
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      currentCity: cityName
    })
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