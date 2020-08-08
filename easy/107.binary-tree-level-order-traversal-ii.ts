/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 给定二叉树 [3,9,20,null,null,15,7],
 *  3
   / \
  9  20
    /  \
   15   7
 * [
    [15,7],
    [9,20],
    [3]
  ]
 */
/**
 * * 解法: 层序遍历需要借助队列, 难点在于要保持层级, 有的做法是额外加入一个遍历标识层级
 * * 一起进入队列的就是同一层级的, 增加一个循环遍历queue中同一层级的节点 
 * * 这题和102题目基本一样 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 */

import { TreeNode } from "../typed";

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const ret = [];
  let queue: TreeNode[] = [];
  queue = [root];
  while (queue.length !== 0) {
    const level: number[] = [];
    let size = queue.length;
    while (size !== 0) {
      const node = queue.shift();
      node && level.push(node.val);
      if (node && node.left !== null) {
        queue.push(node.left);
      }
      if (node && node.right !== null) {
        queue.push(node.right);
      }
      size -= 1;
    }
    ret.unshift(level);
  }
  return ret;
}
