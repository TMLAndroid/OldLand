import {HTTP} from '../utils/http.js'
class BookModel extends HTTP{
  prefix='book-search'
  constructor(){
    super()
  }
  
  //搜索
  search(text,success){
    let searchList = wx.getStorageSync(this.prefix);
    if (searchList){
      searchList.unshift(text)
    }else{
      searchList=[]
      searchList.push(text)
    }
    wx.setStorageSync(this.prefix, searchList)
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

//热词
  hotkey(success){
    var params={
      url:'book/hot_keyword',
      success:success
    }
    this.request(params);
  }

//热门书籍
  hotbook(success){
    var params={
      url:'book/hot_list',
      success:success
    }
    this.request(params);
  }

//书籍详情
  detail(id,success){
    var params={
      url:'book/'+id+"/detail",
      success:success
    }
    this.request(params)
  }

  comment(id,success){
    var params={
      url:'book/'+id+'/short_comment',
      success: success
    }
    this.request(params)
  }
}
export{
  BookModel
}