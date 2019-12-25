//api文档 http://bl.7yue.pro/dev/index.html
//index.js
//获取应用实例
let http = require('../../utils/http.js');
const app = getApp()

Page({
  data: {
    
  },
  
  onLoad: function () {
    http.getLatest();
     
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
