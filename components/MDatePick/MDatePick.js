// components/MDatePick/MDatePick.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },
  properties: {
    calendarConfig:{
      type:Object,
      value:{}
    },
    showDialog: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date:{}
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
    }
  }
})
