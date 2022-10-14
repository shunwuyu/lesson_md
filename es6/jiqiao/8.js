// 从数组中随机选择一个值
const elements = [24, 'You', 777, 'breaking', 99, 'full'];
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomElement = random(elements)
console.log(randomElement) 