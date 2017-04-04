//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    imgUrl:"#"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  changeImgUrl: function(){
    this.setData(
      {'imgUrl':"http://oltdmi67c.bkt.clouddn.com/post-emma-naive.jpg"}
    )
  }
})
