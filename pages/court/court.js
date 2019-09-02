// pages/court/court.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courtTop:"",
    calendarConfig: {
      // 配置内置主题
      theme: 'elegant',
      disablePastDay:true,// 是否禁选过去的日期
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      // hideHeadOnWeekMode: true, // 周视图模式是否隐藏日历头部
      // showHandlerOnWeekMode: true // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
    },
    // calendarConfig2: {
    //   // 配置内置主题
    //   defaultDay: '',
    //   theme: 'elegant',
    //   disablePastDay:true,// 是否禁选过去的日期
    //   onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
    //   // hideHeadOnWeekMode: true, // 周视图模式是否隐藏日历头部
    //   // showHandlerOnWeekMode: true // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
    // },
    // 弹出框
    showDialog: false,
    date:{},//日期
    area:{},//区域
  },
  openDialog: function () {
      this.setData({
          istrue: true
      })
  },
  closeDialog: function () {
      this.setData({
          istrue: false
      })
  },
  localUrl: function(){
    wx.navigateTo({
      url:"/pages/city/city"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.defaultDate();
    console.log(this.calendar);
  },
  // 初始化页面日期
  defaultDate(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let week = now.getDay();
    this.setData({
      date:{
        year,
        month,
        day,
        week
      }
    })
    // let nextMonth = month*1+1
    // this.setData({
    //   calendarConfig2:Object.assign(this.data.calendarConfig2,{
    //     defaultDay:`${year}-${nextMonth}-${1}`
    //   })
    // })
    // console.log(this.data.calendarConfig2);
  },
  search(){
    wx.navigateTo({
      url:"/pages/search/index"
    })
  },
  doSomeThing() {
    // 调用日历方法
    this.calendar.enableArea(['2018-10-7', '2018-10-28']);
  },
  afterTapDay(e){
    let {year,month,day,week}=e.detail;
    this.setData({
      date:{
        year,
        month,
        day,
        week
      }
    })
    // console.log(this.data.date)
    this.closeDialog();
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