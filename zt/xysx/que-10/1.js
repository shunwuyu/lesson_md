function findGroup(data,n,sum){
  if(n==0 &&sum==0){ // 回溯
    return  true
  }

  if(n<0){ // 退出
    return false 
  }

  if(n>0){
    for(var i = 0; i < data.length; i++){

            var temp = data.slice(i+1,data.length);
            // 在里面 或不在里面
            return findGroup(temp,n-1,sum-data[i]) || findGroup(temp,n,sum);
     }	

  }
  
};

console.log(getRsult([1,2,3,4,5,6,7],4,19))