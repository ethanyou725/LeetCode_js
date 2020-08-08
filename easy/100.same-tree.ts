/**
 * https://leetcode-cn.com/problems/same-tree/
 * 给定两个二叉树，编写一个函数来检验它们是否相同。如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的
 */

import { TreeNode } from "../typed";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  function compare(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    return p.val === q.val && compare(p.left, q.left) && compare(p.right, q.right);
  }
  return compare(p, q);
}
