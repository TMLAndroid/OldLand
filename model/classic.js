import { HTTP} from '../utils/http.js'
class ClassicModel extends HTTP{
  prefix = 'classic'
  constructor(){
    super()
  }

  getLatest(sCallback){
    this.request({
      url:'classic/latest',
      success:(data)=>{
        let key = this._fullKey(data.index);
        wx.setStorageSync(key, data)
        sCallback(data);
      }
    })
  }

  _fullKey(partKey) {
    let key = this.prefix + '-' + partKey
    return key
  }

  getPrevious(index,sCallback) {
    let key = this._fullKey(index - 1);
    let data = wx.getStorageSync(key);
    
    if (data) {
      console.log('jinlai')
      sCallback(data);
    } else {
      this.request({
        url: 'classic/' + index + '/previous',
        success: (data) => {
          let key = this._fullKey(data.index);
          wx.setStorageSync(key, data);
          sCallback(data);
        }
      })
    }
    
  }

  getNext(index,sCallback){
    let key = this._fullKey(index+1);
    let data =wx.getStorageSync(key);
    console.log('数据',key,data)
    if(data){
      console.log('jinlai')
      sCallback(data);
    }else{
      this.request({
        url: 'classic/' + index + '/next',
        success: (data) => {
          let key = this._fullKey(data.index);
          try {
            wx.setStorageSync(key, data);
          } catch (e) { console.log('异常',e)}
          
          sCallback(data);
        }
      })
    }
    
  }

}
export{
  ClassicModel
}