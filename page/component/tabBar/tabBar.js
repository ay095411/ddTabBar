Page({
  data: {
    currentTab: 0,
    items: [
      {
        "iconPath": "/image/icon_component.png",
        "selectedIconPath": "/image/icon_component.png",
        "text": "首页"
      },
      {
        "iconPath": "/image/yingyong.png",
        "selectedIconPath": "/image/yingyong.png"
      },
      {
        "iconPath": "/image/icon_biz.png",
        "selectedIconPath": "/image/icon_biz.png",
        "text": "我的"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})