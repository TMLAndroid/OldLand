import { config } from '../config.js'
class HTTP{
  constructor(){
    this.baseRestUrl = config.api_blink_url;
  }

  request(params){
    console.log('url:', params.url)
    wx.request({
      url: this.baseRestUrl+params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success:function(res){
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          console.log('网络数据',res.data)
          params.success && params.success(res.data);
        } else {
          console.log('网络失败', res)
          params.error && params.error(res);
        }
      },
      fail:function(err){
        console.log('网络失败', err)
        params.error && params.error(err);
      }
    })
  }
}

export{
  HTTP
}