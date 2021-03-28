/**
 * https://leetcode-cn.com/problems/binary-search-tree-iterator/
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
 *      7
 *   3     15
 *        9   29
 * [7, 3, 15, null, null, 9, 20]
 * 关键思路是 运用栈
 * 先入栈root 的 左节点
 * next的时候出栈左节点, 再遍历左节点的右节点的左节点, 入栈操作 / left->root->right
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
class BSTIterator {
  stack: Array<TreeNode>

  constructor(root: TreeNode | null) {
    this.stack = []
    while (root) {
      this.stack.push(root)
      root = root.left
    }
  }

  next(): number {
    const cur = this.stack.pop()
    if (cur.right) {
      let node = cur.right
      while(node) {
        this.stack.push(node)
        node = node.left
      }
    }
    return cur.val
  }

  hasNext(): boolean {
    return this.stack.length === 0
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
