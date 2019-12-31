import {HTTP} from '../utils/http.js'
class BookModel extends HTTP{
  prefix='book-search'
  constructor(){
    super()
  }
  search(text,success){
    let searchList = wx.getStorageSync(this.prefix);
    if (searchList){
      searchList.unshift(text)
    }else{
      searchList=[]
      searchList.push(text)
    }
    wx.setStorageSync(this.prefix, searchList)
    console.log('搜索',searchList)
    var parmas={
      url:'book/search',
      data:{
        summary:1,
        count:6,
        q: text
      },
      success:success
    }
    this.request(parmas);
  }

  hotkey(success){
    var params={
      url:'book/hot_keyword',
      success:success
    }
    this.request(params);
  }

  hotbook(success){
    var params={
      url:'book/hot_list',
      success:success
    }
    this.request(params);
  }
}
export{
  BookModel
}