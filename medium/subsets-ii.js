// https://leetcode-cn.com/problems/subsets-ii/
function subsetsWithDup(nums1) {
  nums1.sort()
  let ans = []
  let path = []
  const n = nums1.length
  const visited = []
  function backTrace(nums, start, visited, n) {
    ans.push(path.slice())
    console.log(ans)
    for (let i = start; i < n; i++) {
      if (nums[i - 1] === nums[i] && !visited[i - 1]) continue
      visited[i] = true
      path.push(nums[i])
      backTrace(nums, i + 1, visited, n)
      // 回溯
      visited[i] = false
      path.pop()
    }
  }
  backTrace(nums1, 0, visited, n)
  return ans
}

function subsetsWithDup(nums1) {
  nums1.sort()
  let res = []
  let path = []
  const len = nums1.length

  function backTrace(start, len, nums, path, res) {
    res.push(path.slice())
    for (let i = start; i < len; i++) {
      // 去重的条件, 大于start, 并且和上一个元素相等
      if (i > start && nums[i - 1] === nums[i]) continue

      path.push(nums[i])
      backTrace(i + 1, len, nums, path, res)
      path.pop()
    }
  }
  backTrace(0, len, nums1, path, res)
  return res
}
