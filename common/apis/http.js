export default{
    GET:function(url,data){
        return new Promise(function(resolve, reject){
             wx.request({
                url:"http://easy-mock.laomengx.com/mock/5cac4e7b3e94b50da7d7c5d6"+url,
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
        return new Promise(function(resolve, reject){
             wx.request({
                url:url,
                data:data,
                header:{
                    
                },
                method:"POST",
                dataType:"json",//返回的数据格式
                success:function(res){
                    resolve(res)
                },
                fail:function(err){
                    reject(err)
                }
            })
        })
    }
}