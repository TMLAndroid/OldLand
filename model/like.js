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

  like(like_or_cancel,id,type,success){
    var params={
      url: like_or_cancel ? 'like' : 'like/cancel',
      method:'POST',
      data: { art_id:id,type:type},
      success:success
    };
    this.request(params);
  }

}
export{
  LikeModel
}