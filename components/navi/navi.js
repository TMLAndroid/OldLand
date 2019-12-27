Component({
  properties:{
    title:String
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