//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tags: ['推荐1', '推荐2', '推荐3', '推荐4', '推荐5', '推荐6', '推荐7', '推荐8', '推荐9', '推荐10', '推荐11', '推荐12', '推荐13', '推荐14'],
    left: 0,
    now:0
  },
  fnclick(ev){
    console.log(ev);
    this.setData({
      left:ev.target.offsetLeft,
      now: ev.target.dataset.index,
    })
  },
  onLoad: function (options) {
    console.log(123456);
    let _this = this;
    // wx.request({
    //   url:'https://opehs.tanx.com/ex?i=mm_17187609_2273741_118690666&cb=jsonp_callback_8101&callback=&userid=&o=&f=&n=&r=&cg=a6ad73662bcfe5892bc5eb1729dda71d&pvid=f3ac6eec9bdcb8cedc3472573a1dd1a6&u=http%3A%2F%2Fwww.sohu.com%2F&psl=0',
    //   dataType:'json',
    //   success(res) {
    //     console.log(res);
    //     _this.setData({
    //       tags:'dsf'
    //     })
    //   },
    //   fail(){
    //     console.log('获取失败')
    //     _this.setData({
    //       tags: ['获取失败1', '获取失败2', '获取失败3','获取失败4']
    //     })
    //   }
    // })
  }
})
