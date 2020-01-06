import { BookModel} from '../../model/book.js'
let bookModel = new BookModel();
const CONTENT = 'content'
const HISTORY = 'history'
const SEARCH = 'search'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curPage: CONTENT,
    hotList:[],
    hookBookList:[],
    historyList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      historyList: wx.getStorageSync('book-search')
    })
    bookModel.hotkey((data)=>{
      this.setData({
        hotList:data.hot
      })
    })
    bookModel.hotbook((data)=>{
        this.setData({
          hookBookList:data
        })
    })
   
  },

  bindfocus:function(){
    this.setData({
      curPage: HISTORY,
      historyList: wx.getStorageSync('book-search')
    })
  },
  bindclear:function(){
    console.log('清除')
    
  },
  bindblur:function(){
    this.setData({
      curPage:CONTENT
    })
  },

  onItemDetail:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../book-detail/detail?id='+id,
    })
    
  },

  onConfirm:function(e){
    this.setData({
      curPage:SEARCH
    })
    let searchKey=e.detail.value;
     
    bookModel.search(searchKey, (data) => {
       
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