/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 注意 1 不对应任何字母
 */
/**
 * @param {string} digits
 * @return {string[]}
 * 解法: 多重循环好像无法避免
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  const map = {
    "1": [],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  const combine = digits.split("").reduce((pre, next) => {
    pre.push(map[next]);
    return pre;
  }, []);
  return combine.reduce((pre, next) => {
    let ret = [];
    for (let i = 0; i < pre.length; i++) {
      for (let j = 0; j < next.length; j++) {
        ret.push(pre[i] + next[j]);
      }
    }
    return ret;
  });
};
