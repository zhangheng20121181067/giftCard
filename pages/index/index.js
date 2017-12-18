//index.js
//获取应用实例
var util = require('../../utils/util.js')

var app = getApp();//取得全局App({..})实例
var userInfo = app.globalData.userInfo;//取得全局变量需要的值

Page({
  data: {
    userInfo: {},

    src: "",
    bannerId:"",
    bannertitle:"",
    indexListTop: [],
    indexListDown:[],
    clickFlag:true
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取接口数据
    app.func.req('/interfaces/index', 'get',{}, function (res) {
       console.log(res)
        that.setData({
          "src": res.banner.src,
          "bannerId": res.banner.id,
          "bannertitle": res.banner.title,
          "indexListTop": res.indexListTop,
          "indexListDown": res.indexListDown,
        })
    }); 
  },
  onShow:function(){
    
  },
  onHide:function(){
  
  },
  //事件处理函数
  //跳转到购买历史页面
  bindViewTap: function() {
    wx.navigateTo({
      url: '../shopHistory/shopHistory'
    })
  },
  //点击图片事件
  idChoose: function (options) {
   
  },
  //分享转发
  onShareAppMessage: function (res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: "女神",
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
