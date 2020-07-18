/*
 * 找出单向链表中倒数第 k 个节点。返回该节点的值
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
 * @param {number} k
 * @return {number}
 * 解法1 遍历链表, 用一个数组arr记录每个node, 返回arr中倒数k的元素的值
 */
var kthToLast = function (head, k) {
  var arr = [];
  let cur = head;
  while (cur !== null) {
    arr.push(cur);
    cur = cur.next;
  }

  return arr[arr.length - k].val;
};

/*
 * 解法2: 双指针fast/slow, fast先走k步, 然后slow在走, fast走到尾部时, 返回slow
 */
var kthToLast2 = function (head, k) {
  let fast = head;
  let slow = head;
  while (k > 0 && fast !== null) {
    k -= 1;
    fast = fast.next
  }

  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  return slow.val
};
