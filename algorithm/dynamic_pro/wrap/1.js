// 莱文斯坦距离
var a = "mitcmu";
var b = "mtacnu";
var n = 6, m = 6; // 各自长度
var minDist = Infinity;
// edist 理解，上一次的决策 + 1
function lwstBT(i, j, edist) {
  // 涉及多个决策阶段，  
  // 个字符串中的每个字符，跟另一个字符串中的字符是否匹配，匹配的话如何处理，不匹配的话又如何处理。所以，这个问题符合多阶段决策最优解模型。
  // 贪心， 回溯， 动态规划都可以解决  回溯最简单
  if (i == n || j == m) { //哪个结束了
    if (i < n) edist += (n - i); // 编辑了几个
    if (j < m) edist += (m - j); // 只执行了几个
    if (edist < minDist) minDist = edist;
    return;
  }

  if (a[i] == b[j]) { //两个字符匹配
    lwstBT(i + 1, j + 1, edist); 
  } else {
    lwstBT(i + 1, j,  edist + 1) //删除a[i]或者b[j]前添加一个字符
    lwstBT(i, j + 1, edist + 1); //删除b[j]或者a[i]前添加一个字符
    lwstBT(i + 1, j + 1, edist + 1); // 将a[i]和b[j]替换为相同字符
  }
}

lwstBT(0, 0, 0)
console.log(minDist);