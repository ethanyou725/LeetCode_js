/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 * 动态规划问题, 每次爬1层或2层, 到达n层次数为dp(n), dp(n) = dp(n-1) + dp(n-2)
 */
var climbStairs = function (n) {
  if (n === 1 || n === 2) return n;
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
