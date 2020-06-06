const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QRCodeSchema = new Schema({
  _allreadyUsed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  url: String,
  // 是否已经被扫码
  scanned: {
    type: Boolean,
    default: false
  },
  status: {
    type: Number,
    default: 0 // 0 - 未确认；1 - 确认授权；-1 - 取消授权
  },
  // 用来换 userInfo
  ticket: String,
  userInfo: {
    type: Object,
    default: {}
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  expireAt: {
    type: Date
  }
});

module.exports = mongoose.model('QRCode', QRCodeSchema);