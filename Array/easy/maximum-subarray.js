/**
 * 给定一个整数数组 nums ，
 * 找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * https://leetcode-cn.com/problems/maximum-subarray/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ret = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    ret = Math.max(ret, sum);
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      ret = Math.max(ret, sum);
    }
  }
  return ret;
};
