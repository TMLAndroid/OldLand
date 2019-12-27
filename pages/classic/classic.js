let http = require('../../utils/http_.js');
import {ClassicModel} from '../../model/classic.js'
let classicModel = new ClassicModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    let that = this;
    
      
    
    classicModel.getLatest((res)=>{
      
      
      that.setData({
        classic: res
      })
      console.log(that.data.classic)
    })
      // http.getLatest().then(res=>{
      //   this.data.classics.push(res);
      //   that.setData({
      //     classics: that.data.classics
      //   })
      //   console.log(that.data.classics)
      // });
   
  },

  onPrevious(){
    let index = this.data.classic.index;
    classicModel.getPrevious(index,(res) => {
    this.setData({
      classic: res
    })
  })
},
  onNext(){
    let index = this.data.classic.index;
    classicModel.getNext(index,(res)=>{
      this.setData({
        classic: res
      })
    })
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