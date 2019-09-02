const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
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
  search(){
    wx.navigateTo({
      url:"/pages/search/index"
    })
  }
})
