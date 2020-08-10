/**
 * https://leetcode-cn.com/problems/combination-sum/
 * 输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 解法: 加法效率不如减法
 * todo
 */
var combinationSum = function (candidates, target) {
  candidates.sort()
  let ret = []
  let subArr = []
  let sum = 0
  for (let i = 0; i< candidates.length; i ++) {
    while (sum < target) {
      sum += candidates[i]
      subArr.push(candidates[i])
    }
    if (sum === target) {
      ret.push(subArr)
      subArr = []
    }
  }
}
