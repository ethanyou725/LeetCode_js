/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
 * 求二叉树的最小高度
 * * 解法: 确定递归的终止条件 root === null return 0
 * * 一边的子树为null时, 只求另一边子树的高度即可
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
import { TreeNode } from '../typed';

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0
  if (root.left === null) return minDepth(root.right) + 1
  if (root.right === null) return minDepth(root.left) + 1

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};