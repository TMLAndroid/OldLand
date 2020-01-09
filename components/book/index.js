Component({
  properties:{
    book: Object
  },
  methods:{
    onTap: function (event) {
      
      wx.navigateTo({
        url: '../../pages/book-detail/detail?id=' + this.properties.book.id,
      })
    }
  }
})