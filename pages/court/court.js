// pages/court/court.js
import tool from "../../common/tool.js";
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
    
    currentCity:'北京',//当前所在城市
    currentTab: 0,
    orderLeft:0,
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
    ],
    orderTab:[
      {
        label:'推荐排序',
        index:0
      },
      {
        label:'距离最近',
        index:1
      },
      {
        label:'价格最低',
        index:2
      }
    ],
    courtTop:"",
    // 弹出框
    showDialog: false,
    date:{},//日期
    area:{},//区域
    calendarConfig: {
     
      // 配置内置主题
      theme: 'elegant',
      disablePastDay:true,// 是否禁选过去的日期
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      onlyShowCurrentMonth: 1,
      // hideHeadOnWeekMode: true, // 周视图模式是否隐藏日历头部
      showHandlerOnWeekMode: false // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
    },
    calendarConfig2: {
      // 配置内置主题
      theme: 'elegant',
      disablePastDay:true,// 是否禁选过去的日期
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      // hideHeadOnWeekMode: true, // 周视图模式是否隐藏日历头部
      showHandlerOnWeekMode: false, // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
      defaultDay:getNextMonth()
    }
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
  clickTab(e){
    console.log('点击了');
    console.log(this.data.currentTab === e.target.dataset.current);
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
    this.setSchedule()
    this.changeline()
  },
  // 日历价钱
  setSchedule(){
    setTimeout(()=>{
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
            day: 10,
            todoText: '¥780'
          }
        ]
      },'#calendar2');
    },200)
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
  search(){
    wx.navigateTo({
      url:"/pages/search/index"
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
  // 日历end

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
  onPageScroll: tool._throttle(function(e){
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
  }),
  // onPageScroll:function(e){
  //   let scrollTop=e.scrollTop;
  //   if(scrollTop&&scrollTop>300){
  //     this.setData({
  //       courtTop:'court-top-short'
  //     })
  //   }else{
  //     this.setData({
  //       courtTop:''
  //     })
  //   }
  // }
})