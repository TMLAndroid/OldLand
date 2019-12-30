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
        this._setLatestIndex(data.index)
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
    if(data){
      sCallback(data);
    }else{
      this.request({
        url: 'classic/' + index + '/next',
        success: (data) => {
          let key = this._fullKey(data.index);
          wx.setStorageSync(key, data);
          sCallback(data);
        }
      })
    }
  }

  isLast(index){
    let key = this._fullKey('latest-' + index) 
    let latestEpsoide = wx.getStorageSync(key);
    if(latestEpsoide){
      if(latestEpsoide==index){
        return true;
      }
    }
    else return false
  }

  isFirst(index){
    if(index == 1){
      return true;
    }else{
      return false;
    }
  }

  /**
 * 在缓存中存放最新一期的期数
 */
  _setLatestIndex(index) {
    let key = this._fullKey('latest-' + index)
    wx.setStorageSync(key, index)
  }

}
export{
  ClassicModel
}