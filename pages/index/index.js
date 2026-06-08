// pages/index/index.js
Page({
  data: {
    motto: '欢迎来到我的小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    items: [
      { id: 1, title: '项目一', desc: '这是第一个项目' },
      { id: 2, title: '项目二', desc: '这是第二个项目' },
      { id: 3, title: '项目三', desc: '这是第三个项目' }
    ]
  },
  
  onLoad() {
    if (this.data.canIUse) {
      wx.getUserInfo({
        success: res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  handleItemClick(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '你点击了项目 ' + id,
      icon: 'success'
    })
  }
})
