module.exports = function (app) {
  app.router.get('/', 'home.index'); // 第一个参数为 url 路径，第二个参数的说直接点就是 controller 下的"文件名.方法"（ 例如：'home.index'就会去找 egg_folder/app/controller 下的 home.js，然后再这个 js 里面找到 index 方法 ）。
}