function selection_sort(arr){
  for( let i = 0;i < arr.length ; i++ ){ //外层排序
      let min = i;//最小元素的下标
      //找到位置
      for(let j = i + 1;j < arr.length ; j++ ){ //前面是排好序的
          if(arr[j] < arr[min]){
              min = j;//找最小值
          }
      }
      //交换位置  
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
  }
  return arr;
}

console.log(selection_sort([8, 2, 5, 9, 7]));
