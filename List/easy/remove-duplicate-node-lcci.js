/**
 * https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
 * 移除未排序链表中的重复节点。保留最开始出现的节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * * 解法: 使用es6的set 记录遍历过的节点的值, 以此判断是否重复
 * * 通过pre记录上一个出现的节点, 方便删除重复节点
 * * 如果不使用set, 需要两个节点指针遍历链表
 */
var removeDuplicateNodes = function (head) {
  const set = new Set();
  let cur = head;
  let pre = null;
  while (cur !== null) {
    if (set.has(cur.val)) {
      pre.next = cur.next;
    } else {
      set.add(cur.val);
      pre = cur;
    }
    cur = cur.next;
  }
  set.clear();
  return head;
};

var removeDuplicateNodes2 = function (head) {
  let cur = head;
  while (cur !== null) {
    let move = cur;
    while (move.next) {
      if (cur.val === move.next.val) {
        move.next = move.next.next; // delete node
      } else {
        move = move.next;
      }
    }
    cur = cur.next;
  }
  return head;
};
