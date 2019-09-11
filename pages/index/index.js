// import {Test} from "../../common/apis/index.js";
// Test("/baseInfo",{
//   openId:'123'
// }).then(res=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err)
// })
const app = getApp();
// 设置函数防抖
const debounce = (fn, delay = 300) => {
  let ctx,
    args;
  let timer = null;
  const later = function () {
    fn.apply(ctx, args)
    timer = null;
  }
  return function () {
    ctx = this
    args = arguments;
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }
  timer = setTimeout(later, delay)
}

Page({
  data: {
    currentCity:"",
    height: '', // 获取当前页面的可视高度
    // 此页面 页面内容距最顶部的距离
    winHeight: app.globalData.height * 2 + 20,  
    //banner
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    // 选项按钮
    grideList:[
      {
        label:'预订',
        icon:'/imgs/gride/1.png',
        url:'/pages/court/court'
      },
      {
        label:'活动',
        icon: '/imgs/gride/2.png',
        url:'/pages/activity/activity'
      },
      {
        label:'行程',
        icon: '/imgs/gride/3.png',
        url:'/pages/trip/trip'
      },
      {
        label:'赛事',
        icon: '/imgs/gride/4.png',
        url:'/pages/race/race'
      }
    ],
    // 最新活动
    activeList:[
      {
        img:"http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label:"36度假会籍",
        local:"深圳西丽",
        date:"2019.09.10",
        price:"1900",
        url:''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      },
      {
        img: "http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658",
        show: false,
        def: "/imgs/load-img.gif",
        label: "36度假会籍",
        local: "深圳西丽",
        date: "2019.09.10",
        price: "1900",
        url: ''
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hotCourts:[
      {
        title:"江西巴拉巴",
        content:'巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title:"江西巴拉巴",
        content:'巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title:"江西巴拉巴",
        content:'巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      },
      {
        title: "江西巴拉巴",
        content: '巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        show: false,
        def: "/imgs/load-img.gif"
      }
    ]
  },
  onLoad: function () {
    wx.getSystemInfo({  // 获取页面可视区域的高度
      success: (res) => {
        this.setData({
          height: res.screenHeight
        })
      },
    })
    this.defaultCity();
    // this.showImg()
  },
  onShow: function(){
    this.defaultCity();
  },
  localUrl: function(){
    wx.navigateTo({
      url:"/pages/city/city"
    })
  },
  // 默认的城市
  defaultCity(){
    // currentCity
    let that = this;
    wx.getStorage({
      key: 'cityName',
      success: function(res){
        that.setData({
          currentCity: res.data
        })
      },
      fail: function() {
        // fail
        console.log('获取失败')
      },
      complete: function() {
        // complete
      }
    })
  },
  callPhone(e){
    let phone= e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber:phone
    })
  },
  outputSrc(){
    console.log(123);
  },
  errImg: function (e) {
    var _errImg = e.target.dataset.errImg;
    // var _objImg = "'" + _errImg + "'";
    // var _errObj = {};
    // _errObj[_errImg] = "/imgs/load-img.gif";
    // console.log(e.detail.errMsg + "----" + _errObj[_errImg] + "----" + _objImg);
    // this.setData(_errObj);//注意这里的赋值方式...  
  },
  onLazyLoad(info) {
    console.log(info)
  },
  onPageScroll: function () {  // 调用showImg函数
    // debounce()
    // this.showImg()
  },
  showImg() {  // 判断高度是否需要加载
    // 最新球场懒加载
    let activeList = this.data.activeList // 获取图片数组数据
    for (let i in this.data.activeList) {
      wx.createIntersectionObserver().relativeToViewport({ bottom: 0 }).observe('.pic' + i, (ret) => {
        if (ret.intersectionRatio > 0) {
          activeList[i].show = true
        }
        this.setData({
          activeList
        })
      })
    }

    // 热门球场懒加载
    let hotCourts = this.data.hotCourts // 获取图片数组数据
    for (let i in this.data.hotCourts) {
      wx.createIntersectionObserver().relativeToViewport({ bottom: 0 }).observe('.slide-image' + i, (ret) => {
        if (ret.intersectionRatio > 0) {
          hotCourts[i].show = true
        }
        this.setData({
          hotCourts
        })
      })
    }
  },

  //跳转到搜索
  search(){
    wx.navigateTo({
      url:"/pages/search/index"
    })
  }
})
