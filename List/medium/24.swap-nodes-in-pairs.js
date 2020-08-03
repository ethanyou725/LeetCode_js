/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 给定一个链表, 两两交换其中相邻的节点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定 1->2->3->4, 返回 2->1->4->3.
 * @param {ListNode} head
 * @return {ListNode}
 * 解法: 给定一个dummyHead, 好方便计算和保持头结点的引用
 */
var swapPairs = function (head) {
  let dummyHead = new ListNode()
  dummyHead.next = head
  let cur = dummyHead
  let temp1 = null
  let temp2 = null
  while (cur.next && cur.next.next) {
    temp1 = cur.next
    temp2 = cur.next.next
    cur.next = temp2
    temp1.next = temp2.next
    temp2.next = temp1
    cur = temp1
  }
  return dummyHead.next
}
