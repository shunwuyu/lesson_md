function lwstDP(a, n, b, m) {
  let minDist = [];
  for (let i = 0; i < n; i++) {
    minDist[i] = new Array();
    for (let j = 0; j < m; j++) {
      minDist[i][j] = 0;
    }
  }

  // console.log(minDist);

  // 初始化第0行:a[0..0]与b[0..j]的编辑距离
  for (let j = 0; j < m; ++j) {
    // 初始化第0行:a[0..0]与b[0..j]的编辑距离
    if (a[0] == b[j]) minDist[0][j] = j; // 都到这了
    // 不是第一项  + 1
    else if (j != 0) minDist[0][j] = minDist[0][j-1]+1; 
    // 两数不等， 但是为第一项  
    else minDist[0][j] = 1;
  }
  // console.log(minDist);
  // 初始化第0列:a[0..i]与b[0..0]的编辑距离
  for (let i = 0; i < n; ++i) {
    if (a[i] == b[0]) minDist[i][0] = i;
    else if (i != 0) minDist[i][0] = minDist[i-1][0]+1;
    else minDist[i][0] = 1;
  }
  // console.log(minDist);
  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < m; ++j) {
      if (a[i] == b[j]) 
        minDist[i][j] = min(
          minDist[i-1][j]+1, minDist[i][j-1]+1, minDist[i-1][j-1]
        ) 
      else 
      minDist[i][j] = min(
        minDist[i-1][j]+1, minDist[i][j-1]+1, minDist[i-1][j-1]+1)
    }
  }
  return minDist[n-1][m-1];
}

function min(x, y, z) {
  let minv = Infinity;
  if (x < minv) minv = x;
  if (y < minv) minv = y;
  if (z < minv) minv = z;
  return minv;
}

console.log(lwstDP('mitcmu', 6, 'mtacnu', 6));