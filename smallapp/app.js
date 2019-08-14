//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    movie_list: [
      {
        "picture": "/image/cmds1.jpg",
        "title": "催眠大师",
        "description": "主演：徐峥,莫文蔚,管乐,王耀庆,胡静\n影片讲述了知名心理治疗师徐瑞宁和棘手的女病人任小妍之间发生的故事。",
        "time": "2014-04-29"
      },
      {
        "picture": "/image/nezha1.jpg",
        "title": "哪吒之魔童降世",
        "description": "主演：吕艳婷,囧森瑟夫,瀚墨,陈浩,绿绮,杨卫\n该片改编自中国神话故事，讲述了哪吒虽“生而为魔”却“逆天而行斗到底”的成长经历的故事。",
        "time": "2019-07-26"
      },
      {
        "picture": "/image/cmzr1.jpg",
        "title": "沉默的证人",
        "description": "主演：张家辉,杨紫,任贤齐,李成敏\n该片讲述了法医陈嘉豪与实习法医乔琳在法医中心为争夺证物与悍匪Santa而展开一连串生死博弈的故事。",
        "time": "2019-08-16"
      }
    ]
  }
})