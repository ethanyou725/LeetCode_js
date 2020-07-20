/**
 * https://leetcode-cn.com/problems/linked-list-cycle
 * 给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
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
 * @return {boolean}
 * *解法: 快慢指针, 快指针一次走两步, 慢指针一次走一步, 如果循环, 则一定会相等
 * !注意要判断快指针的next不为null, 走到尽头为null, return false 
 */
var hasCycle = function (head) {
  if (head === null) return false;
  let fast = head.next;
  let slow = head;
  while (fast !== null && fast !== slow) {
    if (fast.next === null) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return fast !== null;
};
