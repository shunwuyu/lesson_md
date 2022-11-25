function isIsogram (str) { 
    let answer;
    let newStr =str.toLowerCase();
    let arr = newStr.split('')
    arr.sort();
    // console.log(arr)
    console.log(arr, '//////');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            return false;
        }
    }
    answer = true;
    return answer;
}

isIsogram('aba');