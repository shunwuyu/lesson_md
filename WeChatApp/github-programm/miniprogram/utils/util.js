const moment = require('../lib/moment.js')

const getCurrentUser = () => wx.getStorageSync('user');

const getCurrentToken = () => (getCurrentUser() || {}).token || wx.getStorageSync('token');

const isSignedIn = () => getCurrentToken() && getCurrentUser().plan

const toReadableTime = time => {
  let then = moment(time)
  let now = moment()
  if (now.diff(then, 'days') <= 7) {
    return then.fromNow()
  }
  return then.format('YYYY/MM/DD')
}
const asEvent = (object = {}) => {
  try {
    // 小于七天的 ->  ... 之前
    // 否则 格式化为 年月日
    object.created_at = toReadableTime(object.created_at)
    object.org = {}
    object.actor = {
      login: object.actor.login,
      display_login: object.actor.display_login,
      avatar_url: object.actor.avatar_url + 's=50'
    }
  } catch (error) {
    console.error(error)
  }
  return object
}

module.exports = {
  getCurrentUser,
  getCurrentToken,
  isSignedIn,
  asEvent
}