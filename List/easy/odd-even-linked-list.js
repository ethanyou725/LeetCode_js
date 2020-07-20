/**
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。
 * 请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 * https://leetcode-cn.com/problems/odd-even-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * * 解法: 原理都差不多, 声明两个节点, 分别作为奇偶的起点
 * * 遍历链表, 根据序号分别添加到对应的链表
 * * 奇数链表的末尾指向偶数链表的头部
 * * 注意点1: 因为是添加原始链表的节点, 所以要断尾
 * * 1-> 2 -> 3 -> 4
 * ! 奇数链表增长是 1, 1-> 3 -> 4, 这里必须断掉
 * * 这个不是最优解
 */
var oddEvenList = function (head) {
  if (head === null) return head;
  const a = head;
  const b = head.next;
  let oddHead = a;
  let evenHead = b;
  let index = 1;
  while (head !== null) {
    index++;
    head = head.next;
    if (index > 2) {
      if (index % 2 === 0) {
        evenHead.next = head;
        evenHead = evenHead.next;
      } else {
        if (head) {
          oddHead.next = head;
          oddHead = oddHead.next;
        } else {
          oddHead.next = null;
        }
      }
    }
  }
  oddHead.next = b;
  return a;
};
