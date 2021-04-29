Component({
  data: {
    active: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        pagePath: '/pages/index/index',
        text: 'Index',
        icon: 'manager-o'
      },{
        pagePath: '/pages/home/home',
        text: 'Home',
        icon: 'wap-home-o'
      }
    ]
  },
  methods: {
    onChange: function (event) {
      this.setData({ active: event.detail })
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    }
  }
})