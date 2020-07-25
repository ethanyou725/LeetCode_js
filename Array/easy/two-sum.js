/**
 * https://leetcode-cn.com/problems/two-sum/
 * 给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * * 解法: 用一个hash map 记录diff
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      return [map.get(num), i];
    } else {
      const diff = target - num;
      map.set(diff, i);
    }
  }
};
