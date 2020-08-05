// https://leetcode-cn.com/problems/generate-parentheses/
/**
 * 输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
 */
/**
 * @param {number} n
 * @return {string[]}
 * 解法: 深度优先
 */
var generateParenthesis = function (n) {
  let ret = []

  function dfs(left, right, str) {
    if (left > 0) {
      dfs(left - 1, right, str + "(")
    }
    if (right > left) {
      dfs(left, right - 1, str + ")")
    }
    if (left === 0 && right === 0) {
      ret.push(str)
      return
    }
  }

  dfs(n, n, "")
  return ret
}
