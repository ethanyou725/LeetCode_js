/**
 * 给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
 * https://leetcode-cn.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
 * * 解法: 双指针扫描链表, 因为题意中限定了连续节点
 * !难点: 删除当前节点要知道上一个节点
 */

var removeZeroSumSublists = function (head) {
  if (head === null) return null;
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let cur = dummyHead;
  scanLoop: while (cur.next !== null) {
    if (cur.next.val === 0) {
      cur.next = cur.next.next;
      continue;
    }
    let scan = cur.next.next,
    sum = cur.next.val;
    while (scan) {
      sum += scan.val;
      if (sum == 0) {
        cur.next = scan.next;
        continue scanLoop;
      } else {
        scan = scan.next;
      }
    }
    cur = cur.next;
  }
  return dummyHead.next;
};
