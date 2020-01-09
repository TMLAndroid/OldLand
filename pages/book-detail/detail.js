import { BookModel } from '../../model/book.js'
import {LikeModel} from '../../model/like.js'
let bookModel = new BookModel();
let id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detail:null,
      comment:null,
      commentPart:null,
      showInput:false,
      inputValue:'',
      favor:null,
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     id = options.id;
    bookModel.detail(id,(data)=>{
      this.setData({
        detail: data
      })
    })
    bookModel.comment(id,(data)=>{
      this.setData({
        comment:data
      })
      if (data.comments.length >3){
        this.setData({
          commentPart: data.comments.slice(0,3)
        })
      }else{
        this.setData({
          commentPart: data.comments
        })
      }
    })
    bookModel.getLikeNum(id,(data)=>{
      this.setData({
        favor:data
      })
    })

  },

  onShareAppMessage:function(e){

  },

  handFocus:function(e){
    this.setData({
      showInput:true
    })
  },
  handBlur:function(e){
    this.setData({
      showInput: false
    })
  },
  comment:function(e){
    this.setData({
      showInput: false
    })
    bookModel.commentAdd(id, this.data.inputValue,(data)=>{
      console.log('评价成功');
      this.data.comment.comments.unshift({ content: this.data.inputValue, nums:1})
      this.setData({
        comment:this.data.comment
      })
    })
  },
  handInput:function(e){
    this.setData({
      inputValue: e.detail.value
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

  
})