const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function formatSecond(seconds) {
  return [
    parseInt(seconds / 60 % 60),
    parseInt(seconds % 60)
  ]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1");
}
module.exports = {
  formatTime: formatTime,
  formatSecond: formatSecond
}
