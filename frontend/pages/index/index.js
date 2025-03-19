Page({
  data: {
    photos: []
  },
  onLoad: function () {
    this.fetchPhotos();
  },
  fetchPhotos: function () {
    wx.request({
      url: 'https://your-backend-domain/api/photos',
      method: 'GET',
      success: (res) => {
        this.setData({
          photos: res.data
        });
      }
    });
  },
  goToDetail: function (e) {
    const photoId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/photoDetail/photoDetail?id=${photoId}`
    });
  }
});