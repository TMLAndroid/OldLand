 import {HTTP} from '../utils/http.js'
class LikeModel extends HTTP{
  constructor(){
    super()
  }

  getClassicLikeStatus(cid, type, success) {
    var parmas = {
      url: 'classic/' + type + '/' + cid + '/favor',
      success: success
    }
    this.request(parmas);

}

}
export{
  LikeModel
}