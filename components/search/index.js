import { paginationBev} from '../behavior/pagination.js'
Component({
  behaviors: [paginationBev],
  properties:{
    // search:{
    //   type:String,
    //   observer:"search"
    // },
    // more:{
    //   type:String,
    //   observer:"loadMore"
    // }
  },
  data:{
    q: '',
    loading: false,
    loadingCenter: false
  },
  methods:{
    search(){
      console.log('搜索11')
    },
    more(){
      console.log('加载更多11')
    }
  }
})