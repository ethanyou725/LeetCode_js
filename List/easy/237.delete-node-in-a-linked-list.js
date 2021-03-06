// 使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
// https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 这样子做, 当前节点和 next节点一样, 被覆盖了, 相当于删除?
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
