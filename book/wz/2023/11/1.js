// 桶排序
const list = [8, 3, 5, 9, 2, 3, 0, 8];


/**
 * params {number[]} list
 * return {number[]}
 */
function sort(list) {
    const newList = Array.from({length: 10}).fill(0); // 创建 [0, 0, ..., 0] 的数组，长度为10
    list.forEach(el => newList[el] += 1); // 把数组元素记录在 newList 上
    return newList.reduce((pre, el, index) => { // 展开数组
      for(let i = el; i; i--) {
        pre.push(index)
      }
      return pre;
    }, [])
  }
  