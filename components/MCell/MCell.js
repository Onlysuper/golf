// components/MCell/MCell.js
Component({
  options: {

  addGlobalClass: true
  
  },
  /**
   * 组件的属性列表
   */
  properties: {
    index: { // 属性名
      type: String,
      value: ''
    },
    title: { // 属性名
      type: String,
      value: ''
    },
    describle: { // 属性名
      type: String,
      value: ''
    },
    icon: { // 属性名
      type: String,
      value: ''
    },
    link: {
      type: Boolean,
      value: false
    },
    split: {
      type: Boolean,
      value: false
    },
    splitBlod: {
      type: Boolean,
      value: false
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTab(e){
      if(this.data.link){
        this.triggerEvent("clickTab",{
          title:this.data.title,
          index:this.data.index
        })
      }
    }
  }
})
