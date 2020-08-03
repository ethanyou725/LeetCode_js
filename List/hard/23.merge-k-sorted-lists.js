/**
 * 合并 k 个排序链表，返回合并后的排序链表
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * * 解法: 通过js数组的reduce方法, 实质是遍历数组, 两两比较合并, 
 * * 空间复杂度O(1), 时间复杂度为O(kn)
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  function merge(headA, headB) {
      const dummyHead = new ListNode();
      let cur = dummyHead;
      while (headA !== null && headB !== null) {
          if (headA.val > headB.val) {
              cur.next = headB;
              headB = headB.next
          } else {
              cur.next = headA;
              headA = headA.next;
          }
          cur = cur.next
      }
      cur.next = headA === null ? headB: headA
      return dummyHead.next;
  }

  const head = new ListNode(-Infinity)
  return lists.reduce(merge, head).next
 
};