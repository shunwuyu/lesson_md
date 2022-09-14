let lists = ["./index.js", "./config.js"]

let lists = ["./index.js", "./config.js"]
lists.forEach((url) => require(url)) // 动态导入

if (lists.length) {
    require(lists[0]) // 动态导入
}
