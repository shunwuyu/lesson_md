const nums = ['c', 'a', 'z', 'y'];
console.log(nums.sort());
const nums2 = [1, 10, 2, 28];
console.log(nums2.sort(function(a, b) {
  return a - b > 0;
}));
const people = [
  { age: 46, name: 'roger' },
  { age: 99, name: 'vinny' },
  { age: 26, name: 'don' },
  { age: 74, name: 'brendan' }
]

var OrderPeople = function(people) {
  return people.sort((a, b) => {
    // 从小到大  相互交换位置 <= 0 不动  > 互换
    return a.age - b.age
  })
}

console.log(OrderPeople(people));