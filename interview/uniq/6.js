var resources = [
  { name: "张三", age: "18" },
  { name: "张三", age: "19" },
  { name: "张三", age: "20" },
  { name: "李四", age: "19" },
  { name: "王五", age: "20" },
  { name: "赵六", age: "21" }
]
var temp = {};
resources = resources.reduce((prev, curv) => {
// 如果临时对象中有这个名字，什么都不做
if (temp[curv.name]) {
}
// 如果临时对象没有就把这个名字加进去，同时把当前的这个对象加入到prev中
else {
   temp[curv.name] = true;
   prev.push(curv);
}
return prev
}, []);
console.log("结果", resources);
