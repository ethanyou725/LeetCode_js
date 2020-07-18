// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 解法: 创建一个新的链表nlist, 依次遍历两个list, 比较节点的值, 添加到nlist
 * 当有较短链表遍历结束的时候, 较长链表剩余部分添加到nlist
 * 
 * !注意: 链表只有头部节点可以访问 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const head = new ListNode();
  let d = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      d.next = l2;
      l2 = l2.next;
    } else {
      d.next = l1;
      l1 = l1.next;
    }
    d = d.next;
  }
  d.next = l1 === null ? l2 : l1;
  return head.next;
};
