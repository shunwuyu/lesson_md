// 判断回文字符串
const isRevervse = (str1, str2) => {
    const normalize = (str) =>
        str.toLowerCase()
        // .normalize('NFD')
        .split('')
        .reverse()
        .join('')
    return normalize(str1) === str2
}
console.log(isRevervse('anagram', 'margana')) // true
console.log(isRevervse('rac', 'car'))