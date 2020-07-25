/**
 * https://leetcode-cn.com/problems/3sum/
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * * 解法: 暴力法, 双指针遍历数组, 简化为两数之和的版本
 * ! 注意: 1. 题目中要求不包含重复的数组, 所以直接使用js原生api sort 对原数组排序
 * ! 排序后, 可以直接判断和为0 的数组是否重复(因为顺序一样了)
 */
var threeSum = function (nums) {
  let len = nums.length;
  nums.sort((a, b) => a - b);
  let ret = [];

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let a = nums[i];
    let map = new Map();
    for (let j = i + 1; j < len; j++) {
      let b = nums[j];
      let c = -(a + b);
      if (ret.length) {
        let [x, y, z] = ret[ret.length - 1];
        if (y === b && z === c && a === x) continue;
      }
      if (map.has(c)) {
        ret.push([a, b, c]);
      } else {
        map.set(b, 1);
      }
    }
  }
  return ret;
};
