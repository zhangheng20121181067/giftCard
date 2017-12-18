var util = require('../../utils/util.js')

var app = getApp();
Page({
  data: {
    userInfo: {},
    windowHeight: "",

    historyDetailIndex: "",

    "title": "",
    "img": "",
    "id": "",
    "sellingrate": null,
    "number": 0,
    "name": ""
  },

  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          "windowHeight": res.windowHeight
        })
      }
    });
  },

  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'historyDetailIndex',
      success: function (res) {
        console.log(res.data)
        //设置获取历史详情参数序号
        that.setData({
          "historyDetailIndex": res.data
        })
        //console.log("historyDetailIndex" + that.data.presentIndex);
        //调用应用实例方法获取接口数据
        app.func.req('/interfaces/shopHistoryDetail=' + that.data.historyDetailIndex, 'get', {}, function (res) {
          wx.setNavigationBarTitle({
            title: res.title,
          }),
            // console.log(res)
            that.setData({
              "title": res.title,
              "img": res.img,
              "id": res.id,
              "sellingrate": res.sellingrate,
              "number": res.number,
              "name": res.name
            })
        });
      }
    })
  },
  onHide: function () {
  },
  onUnload: function () {
  },


  //事件处理函数

  onShareAppMessage: function (res) {
    console.log(this.title, this.img)
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.title,
      path: '/page/user?id=123',
      imageUrl: this.data.img,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})
