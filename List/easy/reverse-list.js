/**
 * 翻转链表
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
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
 * * 解法:  1->2->3->4->5->NULL
 * *
 * * 关键步骤是保存先 cur.next 节点, 改变cur.next的指向
 * * 1 -> 2 -> 3 -> 4 -> 5 -> NULL
 * *
 * * temp -> 2
 * * 1 -> null
 * * pre -> 1
 * * cur -> 2
 * * 此时 cur -> 2 -> 3 -> 4 -> 5; pre -> 1
 *  temp -> 3
 *  2 -> pre
 *  pre -> 2
 *  cur -> 3
 */
var reverseList = function (head) {
  let pre = null
  let temp = null
  let cur = head
  while (cur !== null) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}
// temp = cur.next;
// cur.next = pre;
// pre = cur;
// cur = temp;

var reverseList2 = function (head) {
  if (head === null) return null
  let L = null
  let M = null
  let R = head
  while (R.next !== null) {
    L = M
    M = R
    R = R.next
    M.next = L
  }
  R.next = M
  return R
}
