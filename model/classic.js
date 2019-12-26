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

}
export{
  ClassicModel
}