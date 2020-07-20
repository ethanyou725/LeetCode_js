/**
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
    请你返回该链表所表示数字的 十进制值 。
 * https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/
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
 * @return {number}
 */
var getDecimalValue = function (head) {
  let acc = 0;
  while (head !== null) {
    acc = acc * 2 + head.val;
    head = head.next;
  }
  return acc;
};
