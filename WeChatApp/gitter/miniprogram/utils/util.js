const getCurrentUser = () => wx.getStorageSync('user')
// console.log(getCurrentUser());
const isSignedIn = () => getCurrentUser().plan

// console.log(getCurrentUser());

module.exports = {
  isSignedIn
}