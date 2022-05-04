// 首先，函数传参是传递对象指针的副本
// 到函数内部修改参数的属性这步，我相信大家都知道，
// 当前 p1 的值也被修改了
function test(person) {
    person.age = 26
    // 重新为 person 分配了一个对象时就出现了分歧
    person = {
      name: 'yyy',
      age: 30
    }
  
    return person
  }
  const p1 = {
    name: 'yck',
    age: 25
  }
  const p2 = test(p1)
  console.log(p1) // -> ?
  console.log(p2)