// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    year: 0,
    month: 0,
    day: 0,
    verticalCurrent: 2,
    roomCurrent: "403网络直播间",
    rooms: [{
      id: 1,
      name: "403网络直播间"
    }, {
      id: 2,
      name: "404共享办公室"
    }],
    position: 'left',
    reservedArr: [1, 2, 3],
    button_1: false,
    button_2: false,
    button_3: false,
    button_4: false,
  },

  // 切换会议室
  handleRoomChange({ detail = {} }) {
    this.setData({
      roomCurrent: this.data.rooms[detail.value].name
    });
  },

  // 按钮点击事件
  handleClick: function () {
    wx.navigateTo({
      url: '../reserve/reserve'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      year: options.year,
      month: options.month,
      day: options.day,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let { reservedArr, button_1, button_2, button_3, button_4 } = this.data;
    reservedArr.forEach(element => {
      switch (element) {
        case 1:
          button_1 = !button_1;
          break;
        case 2:
          button_2 = !button_2;
          break;
        case 3:
          button_3 = !button_3;
          break;
        case 4:
          button_4 = !button_4;
          break;
        default:
          break;
      }
    })
    this.setData({
      button_1: button_1,
      button_2: button_2,
      button_3: button_3,
      button_4: button_4,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})