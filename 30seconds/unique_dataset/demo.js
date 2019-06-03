const join2019 = [
  { id: 1, name: 'xiaoer', join: ['2019厦门马拉松', '2018厦门马拉松'] },
  { id: 2, name: 'xiaosi', join: ['2019厦门马拉松'] }
]
const join2018 = [
  { id: 1, name: 'xiaoer', join: ['2019厦门马拉松', '2018厦门马拉松'] },
  { id: 3, name: 'menty', join: ['2018厦门马拉松'] },
]

// 要一样， 只有序号一样， 同一数
// const filterNonUniqueBy = (arr, fn) =>
//   arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)))
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))


const users = [...join2019, ...join2018]
// console.log(users);
// 获取只参加过一次的用户

const joinOnce = filterNonUnique(users, (a, b) => a.id === b.id)


// console.log(joinOnce);