// var的创建和初始化被提升，赋值不会被提升。
// let的创建被提升，初始化和赋值不会被提升。
// function的创建、初始化和赋值均会被提升。
let myname= '极客时间'
{
  // Cannot access 'myname' before initialization
  console.log(myname) 
  let myname= '极客邦'
}