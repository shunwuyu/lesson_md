const QQ_MAP_KEY = '3ELBZ-SPZW4-SIKUC-DBGUQ-VHZUF-ASBHQ'

wx.cloud.init({
  env: 'lm-lesson'
})

const db = wx.cloud.database()

export const addEmotion = (openid, emotion) => { //添加用户信息
  return db.collection('diary').add({
    data: {
      openid,
      emotion,
      tsModified: Date.now()
    }
  })
}

// 获取位置
export const geocoder = (lat, lon, success = () => { }, fail = () => { }) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })
}

export const getWeather = (lat, lon) => {
  return wx.cloud.callFunction({
    name: 'he-weather',
    data: {
      lat,
      lon
    }
  })
}