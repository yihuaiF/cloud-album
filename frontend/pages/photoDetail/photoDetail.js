Page({
  data: {
    photo: {}  // 当前图片的详细信息
  },
  onLoad: function (options) {
    const photoId = options.id;
    this.fetchPhotoDetail(photoId);
  },
  fetchPhotoDetail: function (photoId) {
    wx.request({
      url: `https://your-backend-domain/api/photos/${photoId}`,  // 后端接口
      method: 'GET',
      success: function (res) {
        this.setData({
          photo: res.data
        });
      }.bind(this)  // 确保 this 指向当前页面对象
    });
  }
});