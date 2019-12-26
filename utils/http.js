import { config } from '../config.js'
function getLatest(){
  return new Promise(function (resolve,reject){
    wx.request({
      url: config.api_blink_url + 'classic/latest',
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success(res) {
        resolve(res.data);
        console.log('获取数据成功', res.data)
        
      },
      fail(res) {
        reject(res);
        console.log('获取数据失败', res)
      }
    })
  })  
}
export{
  getLatest
}