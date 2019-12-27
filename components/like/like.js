Component({
  properties:{
    count:Number,
    like:Boolean,
  
  },
  methods:{
    onLike:function(){
      this.triggerEvent('like', { 'like': this.properties.like})
    }
  }
})