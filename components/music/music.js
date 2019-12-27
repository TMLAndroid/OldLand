import { classicBehavior } from '../classic-beh.js'
let mMgr = wx.getBackgroundAudioManager()
Component({
  behaviors: [classicBehavior],
  properties: {
    src:String,
    title:String
  },
  
  data:{
    playing:false,
    
  },
 detached:function(){
   wx.pauseBackgroundAudio()
 },
  attached: function () {
    this._recoverPlaying()
    this._monitorSwitch()
  },
  methods:{
    onPlay: function(){  
       if(this.data.playing){
         this.setData({
           playing: false
         })
         mMgr.pause();
       }else{
         if (mMgr.src == this.properties.src) {
           mMgr.play()
         }
         else {
           mMgr.src = this.properties.src
         }
         mMgr.title = this.properties.title

         this.setData({
           playing: true
         })
         mMgr.play();
       }
        
    },

    _recoverPlaying: function () {
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src == this.properties.src) {
        if (!mMgr.paused) {
          this.setData({
            playing: true
          })
        }
      }
    },
    _monitorSwitch: function () {
      mMgr.onPlay(() => {
        this._recoverPlaying()
      })
      mMgr.onPause(() => {
        this._recoverPlaying()
      })
      mMgr.onStop(() => {
        this._recoverPlaying()
      }),
        mMgr.onEnded(() => {
          this._recoverPlaying()
        })
    }
     
  }

})