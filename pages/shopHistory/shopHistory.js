//shopHistory.js
//获取应用实例
//var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
  
    data:{},
    "itemBgSrc":"http://case.ufunet.cn/case/xiaochengxuimages/images/shopHistoryBg.png",
    "goodslist": [{
      "img": "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f3af0e0f4aa7d933aba5ec21cc22ba76/8b82b9014a90f6038f91a85c3112b31bb051ed8c.jpg",
      "id": 1,
      "sellingrate": "10%",
      "number": 10,
      "name":"赵丽颖图片01"
    },
    {
      "img": "http://d.5857.com/zhaoliy_160128/001.jpg",
      "id": 2,
      "sellingrate": "30%",
      "number": 30,
      "name": "赵丽颖图片02"
    },
    {
      "img": "http://www.dzwww.com/yule/yulezhuanti/mtcbg/201511/W020151116552595794290.jpg",
      "id": 3,
      "sellingrate": "50%",
      "number": 50,
      "name": "赵丽颖图片03"
    }
    ]
  },
  
  onLoad: function () {
   
  },

  onShow:function(){
    
  },
  onHide:function(){
  
  },
  onUnload: function () {
   
  },
  //点击历史选项事件
  idChoose: function (options) {
    var id = options.currentTarget.dataset.id
    wx.setStorage({
      key: 'historyDetailIndex',
      data: id
    })

    wx.navigateTo({
      url: '../shopHistoryDetail/shopHistoryDetail'
    })
  },
 
  //事件处理函数
  
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: "购买历史",
      path: '/page/user?id=123',
      imageUrl: "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f3af0e0f4aa7d933aba5ec21cc22ba76/8b82b9014a90f6038f91a85c3112b31bb051ed8c.jpg",
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
 
})
