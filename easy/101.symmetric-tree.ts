import { TreeNode } from '../typed';
/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 对称二叉树
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
 * 递归比较left.left, right.right
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true

  function compareChildren (left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    return (left.val === right.val) && compareChildren(left.left, right.right) && compareChildren(left.right, right.left)
  }

  return compareChildren(root.left, root.right)
};