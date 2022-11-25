function isIsogram (str) { 
    let answer;
    let newStr =str.toLowerCase();
    let arr = newStr.split('')
    let obj = {} 
    for(i=0;i<arr.length;i++){
      let char = arr[i]
      if (obj[char] == 1) {
        return false;
      } else {
        obj[char] = 1;
      }
    }
    if(str = " "){
      return true
    }
    return answer;
}