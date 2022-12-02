// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentVid: null,
    currentVideo: null,
    videoes: [
      {
        "id": 9,
        "header": "在家乡寻找冒险",
        "original_header": "Finding Adventure at Home",
        "description": "摄影师 ALex Strohl 与 Andrea Dabene 在路上将近六年，最后他们决定回到自己在蒙大拿的家乡。",
        "original_description": "After nearly six years on the road, photographers Alex Strohl and Andrea Dabene return home to Montana.",
        "video": "https://resources.ninghao.net/landrover/finding-adventure-at-home-480.mp4",
        "image": "https://resources.ninghao.net/landrover/finding-adventure-at-home-480.jpg",
        "duration_raw": 269,
        "duration": "04:30"
      },
      {
        "id": 8,
        "header": "秋季指南：北卡罗来纳",
        "original_header": "Fall Field Guides: North Carolina",
        "description": "在北卡罗莱纳的山区体验一次秋季的公路旅行吧，还可以看到著名的 “熊的影子”",
        "original_description": "Experience a fall road trip in the mountains of North Carolina, complete with a sighting of the elusive Shadow of the Bear.",
        "video": "https://resources.ninghao.net/landrover/fall-field-guide-480.mp4",
        "image": "https://resources.ninghao.net/landrover/fall-field-guide-480.jpg",
        "duration_raw": 60,
        "duration": "01:00"
      },
      {
        "id": 7,
        "header": "揽胜运动版挑战 Downhill",
        "original_header": "Range Rover Sport Downhill Challenge",
        "description": "从寒冰，碎石到湿泥，青草，Inferno 挑战具备了全部特点。在瑞士山腰的 9 公里陡坡，揽胜运动版完成了这项独特的挑战。",
        "original_description": "From ice, rocks and gravel, to wet mud, earth and grass, the Inferno Challenge had it all. A nine-mile steep descent down a mountainside in Switzerland posed a unique challenge for the Range Rover Sport, one which it took on in style.",
        "video": "https://resources.ninghao.net/landrover/range-rover-sport-downhill-challenge-480-v3.mp4",
        "image": "https://resources.ninghao.net/landrover/range-rover-sport-downhill-challenge-480.jpg",
        "duration_raw": 339,
        "duration": "05:39"
      },
      {
        "id": 6,
        "header": "活在阿拉斯加",
        "original_header": "Alive in Alaska",
        "description": "冒险摄影师 Alex Strohl 与 Andrea Dabene，驾驶发现神行在阿拉斯加旅行。",
        "original_description": "Travel the ALCAN highway to Alaska in the Discovery Sport with adventure photographers Alex Strohl and Andrea Dabene.",
        "video": "https://resources.ninghao.net/landrover/alive-in-alaska-480-v3.mp4",
        "image": "https://resources.ninghao.net/landrover/alive-in-alaska-480.jpg",
        "duration_raw": 193,
        "duration": "03:13"
      },
      {
        "id": 5,
        "header": "科罗拉多的冬天",
        "original_header": "Welcome Winter in Colorado",
        "description": "摄影师 Niki Csányi，Grace Ban 与 Neil Britto，开着敞篷版揽胜极光带你探索科罗拉多的山脉。",
        "original_description": "Explore the Colorado mountains in the Range Rover Evoque Convertible with photographers Niki Csányi, Grace Ban and Neil Britto.",
        "video": "https://resources.ninghao.net/landrover/welcome-winter-in-colorado-480.mp4",
        "image": "https://resources.ninghao.net/landrover/welcome-winter-in-colorado-480.jpg",
        "duration_raw": 79,
        "duration": "01:19"
      },
      {
        "id": 4,
        "header": "洛杉矶的声音",
        "original_header": "The Sound of Los Angeles",
        "description": "音乐制作人 Them Jeans，穿过洛杉矶的蔓延景观，为他的音乐寻找灵感。",
        "original_description": "Music producer, , turns up the volume on his latest tracks as he traverses the sprawling landscape of Los Angeles in search of fresh sounds to influence his music.",
        "video": "https://resources.ninghao.net/landrover/the-sound-of-los-angeles-480.mp4",
        "image": "https://resources.ninghao.net/landrover/the-sound-of-los-angeles-480.jpg",
        "duration_raw": 94,
        "duration": "01:34"
      },
      {
        "id": 3,
        "header": "新奥尔良的颜色",
        "original_header": "The Color Of New Orleans",
        "description": "驾驶在新奥尔良的街头，灵感无处不在。艺术家 Cleo Wade 与 Liza Voloshin 参观当地艺术场景，画下这座城市的创意。",
        "original_description": "Inspiration is everywhere when driving the vivid, technicolor streets of New Orleans. Artists Cleo Wade and Liza Voloshin visit the local art scene, drawing creativity from the city that has been their muse.",
        "video": "https://resources.ninghao.net/landrover/the-color-of-new-orleans-480.mp4",
        "image": "https://resources.ninghao.net/landrover/the-color-of-new-orleans-480.jpg",
        "duration_raw": 93,
        "duration": "01:33"
      },
      {
        "id": 2,
        "header": "外来者",
        "original_header": "The Outsider",
        "description": "美国第一本户外杂志 Outside 的创始人 Larry Burke，带我们参观他在新墨西哥的牧场。",
        "original_description": "Adventurous founder of Outside, America's first outdoor lifestyle magazine, Larry Burke takes us on a tour of his New Mexico ranch in a LR4.",
        "video": "https://resources.ninghao.net/landrover/the-outsider-480-v3.mp4",
        "image": "https://resources.ninghao.net/landrover/the-outsider-480.jpg",
        "duration_raw": 180,
        "duration": "03:00"
      },
      {
        "id": 1,
        "header": "法罗群岛",
        "original_header": "Norse Power",
        "description": "发现神行完美非常适合法罗群岛上的极具挑战的地形与曲折的公路。岛上新开了家餐厅，在当地掀起一声美食革命，改变了人们的生活。",
        "original_description": "Perfect for the Faroes' challenging terrain and twisting roads, Discovery Sport visits the remote islands where one restaurant kick started a fine food revolution that changed people's lives.",
        "video": "https://resources.ninghao.net/landrover/norse-power-480-v3.mp4",
        "image": "https://resources.ninghao.net/landrover/norse-power-480.jpg",
        "duration_raw": 148,
        "duration": "02:28"
      }
    ]
  },
  play(event) {
    if (this.data.currentVid !== null) {
      this.data.currentVideo.pause()
    }
    const currentVideo = wx.createVideoContext(
      `${ event.target.dataset.vid }`)
    currentVideo.play()

    this.setData({
      currentVideo,
      currentVid: event.target.dataset.vid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})