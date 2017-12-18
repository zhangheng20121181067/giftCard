


function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var rootDocment = 'https://www.easy-mock.com/mock/593dfbeb8ac26d795fe3f85a/shuaispa/index';//你的域名 
function req(url, method,data, cb) {
  wx.showLoading({
    title: '加载中',
  })  
  wx.request({
    url: rootDocment + url,
    data: data,
    method: method, 
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      wx.hideLoading() 
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}


module.exports = {
  formatTime: formatTime,
  req: req
}
