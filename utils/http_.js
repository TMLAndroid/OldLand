import { config } from '../config.js'
class HTTP{
  constructor(){
    this.baseUrl = config.api_blink_url;
  }

  request(params){
    wx.request({
      url: baseUrl+params.url,
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
          params.success && params.success(res.data);
        } else {
          params.error && params.error(res);
        }
      },
      fail:function(err){
        params.error && params.error(err);
      }
    })
  }
}

export{
  HTTP
}