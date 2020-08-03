/**
 * https://leetcode-cn.com/problems/3sum-closest
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 暴力法, 直接遍历数组比较 O(n3次方)
 */
var threeSumClosest = function (nums, target) {
  let len = nums.length;
  let closest = -Infinity;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        closest = Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest;
      }
    }
  }
  return closest;
};
