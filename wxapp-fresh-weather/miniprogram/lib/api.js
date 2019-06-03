wx.cloud.init({
  env: 'lm-lesson'
})

const db = wx.cloud.database()
// 往数据库里面查询到用户的openid和具体的时间段，然后获取信息
export const getEmotionByOpenidAndDate = (openid, year, month) => {
  const _ = db.command //查询数据
  year = parseInt(year)
  month = parseInt(month)

  let start = new Date(year, month - 1, 1).getTime()
  let end = new Date(year, month, 1).getTime()
  // console.log(openid, start, end);
  return db
    .collection('diary')
    .where({
      openid,
      tsModified: _.gte(start).and(_.lt(end))
    })
    .get()
}

export const jscode2session = (code) => {
  // console.log(code);
  return wx.cloud.callFunction({
    name: 'jscode2session',
    data: {
      code
    }
  })
}

export const addEmotion = (openid, emotion) => {
  return db.collection('diary').add({
    data: {
      openid,
      emotion,
      tsModified: Date.now() //Date.now() 方法返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
    }
  })
}