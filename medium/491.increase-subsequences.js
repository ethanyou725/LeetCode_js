// https://leetcode-cn.com/problems/increasing-subsequences/
/**
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 * 输入: [4, 6, 7, 7]
 * 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let set = new Set()
  // todo

  function dfs(start, path) {
    if (start >= nums.length) return
    for (let i = start; i < nums.length; i++) {
      const prev = path[path.length - 1]
      const cur = nums[i]
      if (path.length === 0 || cur >= prev) {
        path.push(nums[i])
        if (path.length >= 2) {
          // todo
          set.add(path.join(","))
        }
        dfs(i + 1, path)
        path.pop()
      }
    }
  }

  dfs(0, [])
  return Array.from(set).map((str) => str.split(",").map((val) => Number(val)))
}
