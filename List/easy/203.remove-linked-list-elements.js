/**
 * 删除链表中等于给定值 val 的所有节点。
 * https://leetcode-cn.com/problems/remove-linked-list-elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummyHead = new ListNode()
  dummyHead.next = head
  let cur = dummyHead
  while (cur !== null && cur.next !== null) {
      if (cur.next.val === val) {
          cur.next = cur.next.next
      } else {
          cur = cur.next
      }
  }
  return dummyHead.next
};