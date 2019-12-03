// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
cloud.init();
const db = cloud.database();
const R_PRICE = 5;
// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const { openid, gid, avatarUrl } = event;
    let gooditem = await db.collection('goodLists').doc(gid).get();
    const gooditemData = gooditem.data;
    if (gooditemData.reduce.find(ele => ele.openid === openid)) {
      return {
        code: 200,
        msg: '该用户已经砍过价'
      }
    }
    console.log('gooditem', gooditemData);
    const reduce = gooditemData.reduce;
    reduce.push({
      openid,
      avatarUrl,
      rprice: R_PRICE
    })
    db.collection('goodLists').doc(gid).update({
      data: {
        price: gooditemData.price - R_PRICE,
        reduce
      }
    })
    return {
      code: 200,
      msg: "砍价成功"
    }
  }
  catch (error) {
    return {
      error
    }
  }
}