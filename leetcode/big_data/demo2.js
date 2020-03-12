var str1 = '123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222';
var str2 = '99958321098765432102222223333211112222222222222222222';

function addTwoNum(str1, str2) {
  var arr1 = str1.split('').reverse();
  var arr2 = str2.split('').reverse();
  var carry = 0, arr = [];
  var max = Math.max(arr1.length, arr2.length);
  var min = Math.min(arr1.length, arr2.length);

  for(var i = 0; i < max; i++){
    // 两个数相加求和，如果和>=10都进位
    // 如果遍历项为undefined都转化为0
    var tmp = (+arr1[i] || 0) + (+arr2[i] || 0) + carry;
    if( tmp >= 10){
      carry = 1;
      arr.push(tmp - 10);
    } else {
      carry = 0;
      arr.push(tmp);
    }
  }
  if (carry > 0) arr.push(carry);
  return arr.reverse().join('');
}

console.log(addTwoNum(str1, str2));