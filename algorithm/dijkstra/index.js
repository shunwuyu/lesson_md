// console.log()
let flag = []; //起过的数组
let n = 6;
let min = 99999999;
let prices = [];
function main() {
  for (let i = 0; i < 9; i++ ) {
    prices[i] = [];
    for (let j = 0; j < 9; j++ ) {
      if (i == j) {
        prices[i][j] = 0; //起点和终点同一
      } else {
        prices[i][j] = Infinity;
      }
    } 
  }

  let ZH = 0,SH = 1, BJ = 2, GZ = 3,CQ = 4,NJ = 5, HZ = 6,LS  = 7;

  prices[ZH][CQ] = 1100;
  prices[ZH][SH] = 600;
  prices[ZH][BJ] = 900;
  prices[ZH][GZ] = 200;
  //others
  prices[CQ][NJ] = 400;
  prices[SH][CQ] = 400;
  prices[SH][BJ] = 500;
  prices[SH][NJ] = 200;
  prices[BJ][SH] = 400;
  prices[BJ][HZ] = 500 ;
  prices[BJ][LS] = 1400;
  prices[GZ][BJ] = 600 ;
  prices[GZ][LS] = 1500 ;
  prices[NJ][HZ] = 300 ;
  prices[HZ][SH] = 200 ;
  // console.log(prices);

  flag[0] = 1;  // 标记1号城市已经在路径中
  dijkstra(0, 0);  //所在的城市编号， 
  console.log(min);
}

function dijkstra(cur, dis) {
  // console.log(dis > min);
  if (dis > min) return;  // 如果当前走过的路程已经大于之前找到的最短路径， 没有必要再往下走了
  if (cur == n) {
    if (dis < min) min = dis; // 到了当前的点
    return;
  }

  for (let j = 0; j < n; j++) {
    if (prices[cur][j] !== Infinity && flag[j] != 1) {
      flag[j] = 1;
      // console.log(j, dis + prices[cur][j], '+++++++');
      dijkstra[j, dis + prices[cur][j]];
      flag[j] = 0;
    }
  }
  return;
}
main();
