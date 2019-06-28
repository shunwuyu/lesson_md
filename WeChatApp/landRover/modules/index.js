const testDrive = () => {
  wx.showToast({
    title: '暂不支持'
  })
}
// module变量代表当前模块 变量是一个对象
// 它的exports属性（即module.exports）是对外的接口 
// 对外暴露出去的东西都在这个属性上
// 加载某个模块，其实是加载该模块的module.exports属性
// 对外暴露出去什么 加载就是什么

// exports.a = 'a';
// exports.b = 'b';
module.exports = {
  testDrive
};