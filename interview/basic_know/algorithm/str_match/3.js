function rabinKarp(str, pattern) {
    //主串长度
    let m = str.length;
    //模式串的长度
    let n = pattern.length;
    //计算模式串的hash值
    let patternCode = hash(pattern);
    // console.log(patternCode);
    let strCode = hash(str.substring(0, n));
    // console.log(strCode);
    for (let i = 0; i < m - n + 1; i++) {
        if (strCode == patternCode && compareString(i, str, pattern)) {
            return i;
        }
        if (i < m - n) {
            strCode = nextHash(str, strCode, i, n);  
        }
    }
}

function nextHash(str, hash, index, n) {
    hash -= str.charCodeAt(index) - 'a'.charCodeAt(0);
    hash += str.charCodeAt(index + n) -  'a'.charCodeAt(0);
    return hash;
}

function compareString(i, str, pattern) {
    let strSub = str.substring(i, i + pattern.length);
    return strSub === pattern;
}

function hash(str) {
    // console.log(str, '///')
    let hashCode = 0;
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i],  'a')
        hashCode += str.charCodeAt(i) - 'a'.charCodeAt(0);
    }
    return hashCode;
}

let str = "aacdesadsdfer";
let pattern = "adsd";
console.log("第一次出现的位置：", rabinKarp(str, pattern))