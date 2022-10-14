function fearNotLetter(str) {
    //将字符串转为ASCII码，并存入数组
    let arr=[];
    for(let i=0; i<str.length; i++){
        arr.push(str.charCodeAt(i));
    }
    console.log(arr, '---------');
    for(let j=1; j<arr.length; j++){
        let num=arr[j]-arr[j-1];
        //判断后一项减前一项是否为1，若不为1，则缺失该字符的前一项
        if(num!=1){
        //将缺失字符ASCII转为字符并返回 
         return String.fromCharCode(arr[j]-1); 
        }
    }
    return undefined;
}
fearNotLetter("abce")
