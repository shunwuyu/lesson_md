function dijkstra(path,index){
  var m = path && path.length;
  var n = m && path[0].length;

  if(m && n && m===n && index < n){
      //初始化distance
      var dis = [];
      var i;
      for(i = 0; i< n;i++){
          dis.push(path[index][i]);
      }
      var flag = [];//用于标识index号至其他顶点的距离是否确定
      for(i = 0; i < n; i++ ){
          flag.push(false)
      }
      flag[index] = true;

      var min,minIndex;
      for(i = 0;i < n;i++){
          min = Infinity;
          //找出剩余的不确定的点到index最短的距离对应的索引
          for(var j = 0; j < n; j++){
              if(!flag[j] && dis[j] < min){
                  min = dis[j];
                  minIndex = j;
              }
          }
          flag[minIndex] = true;//标识index到此顶点的距离已经确认
          for(var k = 0; k < n; k++){
              //判断minIndex到k之间有无道路
              if(path[minIndex][k] < Infinity){
                  //更新distance
                  if(dis[k] > dis[minIndex] + path[minIndex][k]){
                      dis[k] = dis[minIndex] + path[minIndex][k];
                  }
              }
          }
      }
      return dis;
  }
  else{
      throw new Error("数据有误")
  }
}