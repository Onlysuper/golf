// components/MDatePick/MDatePick.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    showDialog: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    calendarConfig: {
      // 配置内置主题
      theme: 'elegant',
      disablePastDay:true,// 是否禁选过去的日期
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      // hideHeadOnWeekMode: true, // 周视图模式是否隐藏日历头部
      // showHandlerOnWeekMode: true // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
    },
    date:{
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    closeDialogFn(e){
      this.triggerEvent("closeDialogFn", {});
    },
    afterTapDay(e){
      let {year,month,day,week}=e.detail;
      this.triggerEvent("changeDateFn", {
          year,
          month,
          day,
          week
      });
    },
    setTodoLabels:function(){
       console.log(this.selectComponent("#calendar"));
    }
  },
  lifetimes: {
    attached: function() {
      this.setTodoLabels();
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  ready(){
    
    // console.log
    // const data = [
    //   {
    //     year: '2019',
    //     month: '6',
    //     day: '15'
    //   },
    //   {
    //     year: 2019,
    //     month: 6,
    //     day: 18,
    //     todoText: '待办'
    //   }
    // ];

    // this.calendar.setTodoLabels(
    //   {
    //     // circle: true,
    //     // pos: 'top',
    //     days: data
    //   },
    //   '#calendar'
    // );
    // console.log('这里哦')
  }
})
