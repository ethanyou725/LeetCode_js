/**
 * https://leetcode-cn.com/problems/palindrome-number/
 */
/**
 * @param {number} x
 * @return {boolean}
 * 解法太多了, 翻转整数, 转成字符串等
 */
var isPalindrome = function (x) {
  str = x.toString();
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
};

var isPalindrome2 = function (x) {
  if (x < 0) return false;
  let origin = x;
  let reverse = 0;
  while (x !== 0) {
    reverse = reverse * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return reverse === origin;
};
