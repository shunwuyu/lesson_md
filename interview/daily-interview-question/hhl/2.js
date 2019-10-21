const strList = '红蓝蓝黄红黄蓝红红黄红'
const sortRules = {'黄': 0, '红': 1, '蓝': 2,}
const list = [[],[],[]]
strList.split('').forEach(item => {list[sortRules[item]].push(item)})
list.reduce((pre, cur) => pre += cur.join(''), '')