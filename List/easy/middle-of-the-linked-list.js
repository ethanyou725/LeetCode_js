/**
 * 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
  如果有两个中间结点，则返回第二个中间结点。
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
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
 * *解法: 快慢指针
 * *注意点: 链表个数奇数/偶数时候, 需要判断一下, 
 * *偶数fast指针结尾是最后一个节点, 奇数是null, 题目要求(有两个中间结点，则返回第二个中间结点)
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return fast === null ? slow : slow.next;
};
