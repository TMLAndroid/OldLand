let http = require('../../utils/http_.js');
import {ClassicModel} from '../../model/classic.js'
let classicModel = new ClassicModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classics: [],
    index:0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let that = this;
    
      console.log(this.data.classics[0])
    
    classicModel.getLatest((res)=>{
      this.data.classics.push(res);
      console.log('ress', res)
      that.setData({
        classics: that.data.classics
      })
      console.log(that.data.classics)
    })
      // http.getLatest().then(res=>{
      //   this.data.classics.push(res);
      //   that.setData({
      //     classics: that.data.classics
      //   })
      //   console.log(that.data.classics)
      // });
   
  },

onPre(){
  console.log('pre');
},
  onNext(){
    console.log('next');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})