// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    year: '',  //年
    mouth: '',  //月
    today: '',  //日
    week: ['日', '一', '二', '三', '四', '五', '六'],   //周
    days: [],  //日期数据
    newDay: ["2021-3-15", "2019-3-16", "2021-3-20", "2021-3-1", "2021-3-5", "2021-3-8", "2021-4-29", "2021-4-5"],  //模仿初始化选中的日期
    unDay: ["2021-3-16", "2021-3-10", "2021-3-24", "2021-4-10", "2021-4-20", "2021-4-18"],  //模仿初始化未选中的日期
  },

  onLoad: function (options) {

  },
})

