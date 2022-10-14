function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}
  async function changeColor(color, duration) {
      console.log(color);
      await sleep(duration);
  }
  async function main() {
      while (true) {
          await changeColor('红灯', 2000);
          await changeColor('黄灯', 1000);
          await changeColor('绿灯', 3000);
      }
  }
  main();