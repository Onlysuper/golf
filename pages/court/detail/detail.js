// pages/court/detail/detail.js
//指定下个月份
function getNextMonth (date,length) {
  var date1 = new Date();
  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + 30);
  let nMonth = date2.getMonth() + 1;
  let nDate = date2.getFullYear()+'-'+nMonth+'-1';
  return nDate;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeList:[
      {label:'06:30'},
      {label:'06:40'},
      {label:'06:50'},
      {label:'07:00'},
      {label:'07:10'},
      {label:'07:20'},
      {label:'07:30'},
      {label:'07:40'},
      {label:'07:50'},
      {label:'08:00'},
    ],//日期
    timeDialog:false, // 开球时间弹框
    showDialog: false, // 日历弹框
    orderDialog:false,// 预订窗口弹框
    calendarConfig: {
      // 配置内置主题
      theme: 'elegant',
      disablePastDay:true,// 是否禁选过去的日期
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      onlyShowCurrentMonth: 1,
      showHandlerOnWeekMode: false // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
    },
    calendarConfig2: {
      // 配置内置主题
      theme: 'elegant',
      disablePastDay:true,// 是否禁选过去的日期
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      showHandlerOnWeekMode: false, // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
      defaultDay:getNextMonth()
    }
  },
  
  // 日历end
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.defaultDate();
    this.setSchedule()
  },
  // 选择开球时间
  choseTime(e){
    let time = e.target.dataset.current;
    this.closeTimeDialog();
    this.openOrderDialog();
  },
  // 预订窗口打开
  openOrderDialog(){
    this.setData({
      orderDialog: true
    })
  },
  closeOrderDialog(){
    this.setData({
      orderDialog: true
    })
  },
  // 设置日历价格
  setSchedule(){
    setTimeout(()=>{
      //第一个月份标记
      this.calendar.setTodoLabels({
        // 待办点标记设置
        pos: 'bottom', // 待办点标记位置 ['top', 'bottom']
        dotColor: '#40', // 待办点标记颜色
        // circle: false, // 待办圆圈标记设置（如圆圈标记已签到日期），该设置与点标记设置互斥
        showLabelAlways: true, // 点击时是否显示待办事项（圆点/文字），在 circle 为 true 及当日历配置 showLunar 为 true 时，此配置失效
        days: [
          {
            year: 2019,
            month: 9,
            day: 9,
            todoText: '¥780'
          }
        ]
      },'#calendar');
      this.calendar.setTodoLabels({
        // 待办点标记设置
        pos: 'bottom', // 待办点标记位置 ['top', 'bottom']
        dotColor: '#40', // 待办点标记颜色
        // circle: false, // 待办圆圈标记设置（如圆圈标记已签到日期），该设置与点标记设置互斥
        showLabelAlways: true, // 点击时是否显示待办事项（圆点/文字），在 circle 为 true 及当日历配置 showLunar 为 true 时，此配置失效
        days: [
          {
            year: 2019,
            month: 10,
            day: 9,
            todoText: '¥780'
          }
        ]
      },'#calendar2');
    },100)
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
  },
  // 时间start
  openTimeDialog(){
    this.setData({
      timeDialog: true
    })
  },
  closeTimeDialog: function () {
    this.setData({
      timeDialog: false
    })
  },
  // 日历start
  openDialog: function () {
    this.setData({
      showDialog: true
    })
  },
  closeDialogFn: function () {
    this.setData({
      showDialog: false
    })
  },
  changeDateFn(e){
    let {year,month,day,week}=e.detail;
    this.setData({
      date:{
        year,
        month,
        day,
        week
      }
    })
    this.closeDialogFn();
  },
  afterTapDay(e){
    let {year,month,day,week}=e.detail;
    this.setData({
      date:{
        year,month,day,week
      }
    })
    this.closeDialogFn();
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