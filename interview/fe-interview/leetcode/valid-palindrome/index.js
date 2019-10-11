// https://leetcode-cn.com/problems/valid-palindrome/
function isValid(c) {
  const charCode = c.charCodeAt(0);
  const isDigit =
    charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0);
  const isChar = charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0);

  return isDigit || isChar;
}

var isPalindrome = function(s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isValid(s[left])) {
      left++;
      continue;
    }
    if (!isValid(s[right])) {
      right--;
      continue;
    }

    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }

  return right <= left;
};

console.log(isPalindrome('aba'));