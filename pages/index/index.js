const app = getApp()

Page({
  data: {
    //banner
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    // 选项按钮
    grideList:[
      {
        label:'订场',
        icon:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        url:'/pages/court/court'
      },
      {
        label:'会员专享',
        icon:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        url:'/pages/court/court'
      },
      {
        label:'旅游',
        icon:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        url:'/pages/court/court'
      },
      {
        label:'旅游',
        icon:'http://hbimg.b0.upaiyun.com/75cdb7cfd53c1eeead7f5333e673e9e669e456d5752e-RNtNWd_fw658',
        url:'/pages/court/court'
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
        img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        title:"江西巴拉巴",
        content:'巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },
      {
        title:"江西巴拉巴",
        content:'巴拉班巴巴啧啧啧啧啧啧做做做做做做做做做做',
        img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      }
    ]
  },
  onLoad: function () {
  
  },

  //跳转到搜索
  search(){
    wx.navigateTo({
      url:"/pages/search/index"
    })
  }
})
