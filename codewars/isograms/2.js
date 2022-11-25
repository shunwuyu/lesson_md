function isIsogram (str) { 
    let answer;
    let newStr =str.toLowerCase();
    let arr = newStr.split('')
    
    for(i=0;i<arr.length;i++){
      let char = arr[i]
    //   let nextChar = arr[i+1]
      console.log(char)
  
      //console.log(nextChar)
        for(x=0; x<arr.length; x++) {
          if(arr.indexOf(char) == x) {
            continue;
          }
          else if (char !== arr[x]){
            answer = true;
            }
          else {answer = false; return false} // console.log("hi");}
        }
       console.log(answer)
    }
    if(str = " "){
      return true
    }
    return answer;
}