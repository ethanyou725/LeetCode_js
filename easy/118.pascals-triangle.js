/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let dp = [];
  dp[0] = [];
  dp[1] = [1];
  dp[2] = [1, 1];
  if (numRows === 0) return dp[numRows]
  if (numRows < 3) return dp.slice(1, numRows+1);
  for (let i = 3; i <= numRows; i++) {
    const thisRow = new Array(i);
    const preRow = dp[i - 1];
    for (let j = 0; j < thisRow.length; j++) {
      thisRow[j] = (preRow[j - 1] || 0) + (preRow[j] || 0)
    }
    dp.push(thisRow)
  }
  return dp.slice(1);
};