/**
 * 给定一个有环链表，实现一个算法返回环路的开头节点
 * https://leetcode-cn.com/problems/linked-list-cycle-lcci/
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
 * * 解法, 快慢指针判断是否有环
 * * 注意点: 需要判断没有环的情况, fast === null, fast.next === null
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (slow !== null && fast!==null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if (fast === slow) {
          break
      }
  }

  if (slow === null || fast === null || fast.next === null) return null
  let cur = head
  while (cur !== slow) {
      cur = cur.next;
      slow = slow.next
  }
  return slow
};