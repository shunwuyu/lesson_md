var dijsktra_js=function (weight,start) {
  var n = weight.length;
  var shortPath = [];
  for(var i=0;i<n;i++){
      shortPath[i]=0;
  }
  var path=new Array(n);
  for(var i=0;i<n;i++){
      path[i]=start+"-"+i;
  }

  var visited = new Array(n);
  for(var i=0;i<n;i++){
      visited[i]=0;
  }
  shortPath[start] = 0;
  visited[start] = 1;

  for(var count = 1;count <= n - 1;count++)
  {
      var k = -1;
      var dmin = MAX;
      for(var i = 0;i < n;i++)
      {
          if(visited[i] == 0 && weight[start][i] < dmin)
          {
              dmin = weight[start][i];
              k = i;
          }
      }
      shortPath[k] = dmin;
      visited[k] = 1;
      for(var i = 0;i < n;i++)
      {
          if(visited[i] == 0 && weight[start][k] + weight[k][i] < weight[start][i]){
              weight[start][i] = weight[start][k] + weight[k][i];
              path[i]=path[k]+"-"+i;
          }
      }
  }
  for(var i=0;i<n;i++){
      console.info("从"+start+"出发到"+i+"的最短路径为："+path[i]);
  }
  return shortPath;
};

var fun_copy=function (i, j, value) {
  lengthArr[i][j]=value;
  lengthArr[j][i]=value;
};

var MAX=Number.MAX_VALUE;
var pointNumber=3;
var lengthArr=[];
for(var i=0;i<pointNumber;i++){
  lengthArr[i]=[];
  for(var j=0;j<pointNumber;j++){
      lengthArr[i][j]=MAX;
  }
}
fun_copy(0,1,3);
fun_copy(1,2,2);
dijsktra_js(lengthArr,2);