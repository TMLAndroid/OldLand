let http = require('../../utils/http_.js');
import {ClassicModel} from '../../model/classic.js'
import { LikeModel } from '../../model/like.js'
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    like:true,
    count:0,
    isLast:true,
    isFirst:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    let that = this;
    
      
    
    classicModel.getLatest((res)=>{
      this._getClassicLikeStatus(res.id,res.type);
      that.setData({
        classic: res,
        isLast: classicModel.isLast(res.index),
        isFirst: classicModel.isFirst(res.index)
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
      if(res){
        this._getClassicLikeStatus(res.id, res.type)
        this.setData({
          classic: res,
          isLast: classicModel.isLast(res.index),
          isFirst: classicModel.isFirst(res.index)
        })
      }else{
        console.log('no classic data');
      }
  })
},
  onNext(){
    let index = this.data.classic.index;
    classicModel.getNext(index,(res)=>{
      if(res){
        this._getClassicLikeStatus(res.id,res.type)
        this.setData({
          classic: res,
          isLast:classicModel.isLast(res.index),
          isFirst:classicModel.isFirst(res.index)
        })
      }else{
        console.log('no classic data');
      }
    })
  },
  onLike(e){
   let like = e.detail.like;
   if(like){
     likeModel.like(false, this.data.classic.id, this.data.classic.type,(data)=>{
       this.setData({
         like: false
       })
     });
     
   }else{
     likeModel.like(true, this.data.classic.id, this.data.classic.type, (data) => {
       this.setData({
         like: true
       })
     });
   }
    
  },

  _getClassicLikeStatus(id,type){
    likeModel.getClassicLikeStatus(id,type,(data)=>{
        this.setData({
          like: data.like_status,
          count: data.fav_nums
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