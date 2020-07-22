/**
 * https://leetcode-cn.com/problems/partition-list-lcci/
 * 编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。如果链表中包含 x，x 
 * 只需出现在小于 x 的元素之后(如下所示)。分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。
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
 * @param {number} x
 * @return {ListNode}
 * * 解法, 朴实的解法, 创建两个新列表, 遍历链表, ≥x 的节点排在large, 其他的排在small, 然后合并small 和 large
 * ! 注意, large列表的尾部节点是有next的, 需要手动设置 large.next = null
 */
var partition = function(head, x) {
  let cur = head;
  const large = new ListNode();   
  const small = new ListNode();
  let l = large;
  let s = small;
  while (cur !== null) {
      if (cur.val >= x) {
          l.next = cur;
          l = l.next;
      }  else {
          s.next = cur;
          s = s.next;
      }
      cur = cur.next
  }
  s.next = large.next;
  l.next = null;
  return small.next
};