//detail.js
var util = require('../../utils/util.js')
var app = getApp()   
Page({
  data: {
    title:"", 
    src: "",
    currentItem:0,
    choiceList:[],
    giftList:[],
    totalCount:0,
    totalPrice:0
  },
 
  onLoad: function (options) {
    var that = this;
    console.log(options.detailId)
    var detailId = options.detailId;
    
    //调用应用实例方法获取接口数据
    app.func.req('/interfaces/detail=' + detailId, 'get', {}, function (res) {
      wx.setNavigationBarTitle({
        title: res.title,
      }),
      // console.log(res)
      that.setData({
        "title": res.title,
        "src": res.src,
        "currentItem": res.currentItem,
        "choiceList": res.choiceList,
        "giftList": res.giftList,
        "totalCount": res.totalCount,
        "totalPrice": res.totalPrice
      })
    });
  },
  onShow: function () {
  },
  tagChoose: function (options) {
    var that = this
    var id = options.currentTarget.dataset.id;
    //console.log(id)
    //设置当前样式
    that.setData({
      'currentItem': id,
      'src':this.data.choiceList[id-1].src
    })
  },

  add: function (options){
    var that = this;
    var id = options.currentTarget.dataset.id;
    
    var newGiftList = this.data.giftList;
   
    ++newGiftList[id - 1].count;
    //console.log(newGiftList)

    var shuliang = 0; //数量
    var zongji=0;     //合计
   // console.log(id,++this.data.giftList[id - 1].count);
    for (var i = 0; i < this.data.giftList.length; i++) {
      shuliang+=this.data.giftList[i].count;
      zongji += this.data.giftList[i].count * this.data.giftList[i].price
    }  
    //console.log(shuliang)
   
    that.setData({
      "totalCount": shuliang,
      "giftList": newGiftList,
      "totalPrice": zongji
    })
  },

  reduce: function (options) {
    var that = this;
    var id = options.currentTarget.dataset.id;

    var newGiftList = this.data.giftList;

    --newGiftList[id - 1].count;
   // console.log("礼品面额选择列表"+newGiftList)

    var shuliang = 0; //数量
    var zongji = 0;     //合计
    // console.log(id,++this.data.giftList[id - 1].count);
    for (var i = 0; i < this.data.giftList.length; i++) {
      shuliang += this.data.giftList[i].count;
      zongji += this.data.giftList[i].count * this.data.giftList[i].price
    }
    //console.log(shuliang)

    that.setData({
      "totalCount": shuliang,
      "giftList": newGiftList,
      "totalPrice": zongji
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮 res.target=="undefined"
      // console.log(res.target)
    }
    return {
      title: this.data.title,
      path: '/page/user?id=123',
      imageUrl: this.data.src,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

 
})
