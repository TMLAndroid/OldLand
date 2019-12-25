import { config } from '../config.js'
function getLatest(){
  console.log()
  wx.request({
    url: config.api_blink_url +'classic/latest',
    header: {
      'content-type': 'application/json',
      'appkey': config.appkey
    },
    success(res){
      console.log('获取数据成功',res)
    },
    fail(res){
      console.log('获取数据失败', res)    
    }
  })
}
export{
  getLatest
}