export function getData(nums) {
  let point = [];
  function generate(fanwei, label) {
    for (let i = 0 ; i < 200; i ++) {
      let x = normalRandom(fanwei)
      let y = normalRandom(fanwei)
      point.push({x, y, label: label})
    }
  }
  // 黄点
  generate(-2, 0);
  // 蓝点
  generate(2, 1);
  return point;

}

function normalRandom(fanwei) {
  let u1 = Math.random();
  let u2 = Math.random();
  let result = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2)
  return result + fanwei;
}