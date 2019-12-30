Component({
  properties:{
    title:String,
    isLast:Boolean,
    isFirst:Boolean
  },
  methods:{
    onPrevious:function(){
      console.log('onPrevious')
      this.triggerEvent('right')
    },
    onNext: function () {
      console.log('onNext')
      this.triggerEvent('left')
    }
  }
})