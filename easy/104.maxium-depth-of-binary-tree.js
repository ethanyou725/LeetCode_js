/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 求二叉树的最大深度
 *  3
   / \
  9  20
    /  \
   15   7
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null ) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};