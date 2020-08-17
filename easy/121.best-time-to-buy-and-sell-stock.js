/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let min = prices[0]
  for (let index = 0; index < prices.length; index++) {
    max = Math.max(max, prices[index] - min)
    min = Math.min(min, prices[index])
    
  }
  return max
};