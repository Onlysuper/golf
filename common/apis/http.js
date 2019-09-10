export default{
    GET:function(url,data){
        return new Promise(function(resolve, reject){
             wx.request({
               url:"https://mockapi.eolinker.com/W9pfdKi1123f3578dab43110e74d041ede620d3a9e12cac"+url,
                data:data,
                header:{
                    'content-type': 'application/json' // 默认值
                },
                method:"GET",
                dataType:"json",//返回的数据格式
                success:function(res){
                    resolve(res)
                },
                fail:function(err){
                    reject(err)
                }
            })
        })
    },
    POST:function(url,data){
      return new Promise(function (resolve, reject) {
        wx.request({
          url: "https://mockapi.eolinker.com/W9pfdKi1123f3578dab43110e74d041ede620d3a9e12cac" + url,
          data: data,
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          method: "POST",
          dataType: "json",//返回的数据格式
          success: function (res) {
            resolve(res)
          },
          fail: function (err) {
            reject(err)
          }
        })
      })
    }
}