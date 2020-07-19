/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 解法: 为避免头部节点相等时无法删除, 设置一个 dummyHead
 */
var deleteNode = function (head, val) {
  let pre = new ListNode();
  pre.next = head;
  let cur = pre;
  while (cur && cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
  return pre.next;
};
