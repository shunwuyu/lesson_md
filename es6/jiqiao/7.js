// 可选链操作符
const player = {
    name: 'xieyezi',
    rating: 1000,
    click: () => {
      return 'click'
    },
    pass: (teammate) => {
      return `Pass to ${teammate}`
    },
  }
console.log(player?.hehe?.())
// console.log(player.hehe()); // 如何不报错？
//   console.log(player?.name) // xieyezi
//   console.log(player?.click?.()) // click
//   console.log(player?.teammate?.()) // undefined