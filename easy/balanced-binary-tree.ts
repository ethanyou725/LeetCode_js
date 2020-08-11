/**
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * 判断是否平衡二叉树
 * 平衡二叉树, 左右两个字数的高度差绝对值不超过1
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

import { TreeNode } from "../typed";

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;
  function getDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  const left = getDepth(root.left);
  const right = getDepth(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}
