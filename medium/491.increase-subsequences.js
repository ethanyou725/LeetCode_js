// https://leetcode-cn.com/problems/increasing-subsequences/
/**
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 * 输入: [4, 6, 7, 7]
 * 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 解法: dfs 寻找路径, 回溯的时候去掉出栈, 注意去重
 */
var findSubsequences = function (nums) {
  let map = new Map()
  let res = []

  function dfs(start, path) {
    if (path.length > 1) {
      const keys = path.join()
      if (!map.has(keys)) {
        res.push(path.slice())
        map.set(keys, true)
      }
    }
    for (let i = start, len = nums.length; i < len; i++) {
      const prev = path[path.length - 1]
      const cur = nums[i]
      if (path.length === 0 || cur >= prev) {
        path.push(cur)
        dfs(i + 1, path)
        path.pop()
      }
    }
  }
  dfs(0, [])
  return res
}
