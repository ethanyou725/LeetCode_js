/**
 * 给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，而不是基于节点的值。
 * 换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * * 解法1: 简单粗暴先遍历1个链表, 每个节点用个map存起来, 然后遍历第二个链表, 当然空间复杂度不友好
 * * 解法2: 同时遍历2个链表, 到尾部的时候, a链表指向b链表的头, b链表指向a链表的头
 * * 1 -> 2 -> 3 -> 6
 * * 4 -> 5 ↗
 * * 遍历的过程 1 => 2 => 3 => 6 => 4 => 5 => 3
 * *           4 => 5 => 4 => 6 => 1 => 2 => 3
 * * 3 是相交的节点
 * * 如果不相交, 则不相遇
 */
var getIntersectionNode = function (headA, headB) {
  const map = new Map();
  while (headA !== null) {
    map.set(headA, true);
    headA = headA.next;
  }

  while (headB !== null) {
    if (map.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};

var getIntersectionNode2 = function (headA, headB) {
  let curA = headA;
  let curB = headB;
  while (curA !== curB) {
    if (curA === null) {
      curA = headB;
    } else {
      curA = curA.next;
    }

    curB = curB === null ? headA : curB.next;
  }
  return curA;
};
