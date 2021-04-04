/**
 * https://leetcode-cn.com/problems/rotate-list/
 * 双指针或者求链表长度
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || k === 0 || head.next === null) return head 
  let slow = head

  let middle = head
  while (k > 0) {
    k -= 1
    middle = middle.next === null ? head: middle.next
  }
  if (middle === head) return head
  while(middle.next) {
    middle = middle.next
    slow = slow.next
  }
  const ret = slow.next
  slow.next = null
  middle.next = head
  return ret

};