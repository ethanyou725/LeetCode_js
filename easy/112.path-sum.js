// https://leetcode-cn.com/problems/path-sum/
/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root, sum) {
  function preOrder(root, rest, queue, res) {
    if (root === null) return false
    rest -= root.val
    queue.push(root.val)
    if (rest === 0 && root.left === null && root.right === null) {
      res.push(queue)
    }
    preOrder(root.left, rest, queue, res)
    preOrder(root.right, rest, queue, res)
    queue.pop()
  }
  let res = []

  preOrder(root, sum, [], res)
  return res.length > 0
}
