/**
 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，
 并且它们的每个节点只能存储 一位 数字
 https://leetcode-cn.com/problems/add-two-numbers/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 ** 解法: 遍历两个链表, 相加每个node的val, 如果大于10, 则下两个(或者一个)节点的值加1
 * !难点 处理大于10的情况, 尤其最后的节点有进位的情况, 这个是一开始submit不通过的主要原因
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const node = new ListNode();
  let cur = node;
  let isge10 = false;
  while (l1 !== null || l2 !== null) {
    const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (isge10 ? 1 : 0);
    cur.next = new ListNode(val % 10);
    isge10 = val >= 10;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
    cur = cur.next;
  }

  if (isge10) {
    cur.next = new ListNode(1);
  }
  return node.next;
};
