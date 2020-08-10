/**
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 */
import { TreeNode } from "../typed"

function sortedArrayToBST(nums: number[]): TreeNode | null {

  function generateTree (nums: number[], left: number, right: number): TreeNode | null {
    if (left > right) return null
    const mid = ~~((right + left)/2)
    const midVal = nums[mid]
    const root = new TreeNode(midVal)
    root.left = generateTree(nums, left, mid - 1)
    root.right = generateTree(nums, mid + 1 , right)
    return root
  }
  return generateTree(nums, 0, nums.length - 1)
};
