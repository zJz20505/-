// pages/cal/cal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    a:0,
    num: "0",
    op: "",
    logs:[],
  },
  isClear: false,
  result: null,


  numBut(e) {
    // console.log(e.target.dataset.val)
    let val = e.target.dataset.val

    if (this.data.num ==='0' || this.isClear) {
      this.setData({
        num: val,
        a :this.data.num
      })
      this.isClear = false

    } else {
      this.setData({
        num: this.data.num + val,
        

      })
    }
  },

  opBut(e) {
    this.isClear = true
   
    // console.log(this.target.dataset.val)
    var op = this.data.op
    var num = Number(this.data.num)

    let val = e.target.dataset.val

    this.setData({
      op: val
    }) 
    
    if(this.result == null){
      this.result = num
      return
    }

    if (op === '+') {
      this.result = this.result + num
     
      this.setData({
        num:this.result
      })
      

    }else if(op === '-'){
      this.result = this.result - num
     
      this.setData({
        num:this.result
      })
     
    }
   var b = this.data.a
    var  on = op +num
    wx.setStorageSync('calclogs', b+ on+"="+this.result)
    console.log(this.result)
    this.onLoad();
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 var logs = wx.getStorageSync('calclogs');
 this.setData({"logs":logs})
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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