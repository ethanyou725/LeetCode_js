/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right || !head) return head
  // 设置dummyHead, 避免left = 1的情况
  let dummyHead = new ListNode()
  dummyHead.next = head
  let start = dummyHead

  // 要获得前驱节点, 所以终止条件为left - 1
  for (let i = 0; i < left - 1; i++) {
    start = start.next
  }

  // let nextNode = start.next

  // for (let j = left; j < right; j++) {
  //   let temp = nextNode.next
  //   nextNode.next = temp.next
  //   temp.next = start.next
  //   start.next = temp
  // }
  let L = null
  let M = null
  let R = start.next
  for (let j = left; j < right; j++) {
    L = M
    M = R
    R = R.next
    M.next = L
  }
  let end = R.next
  R.next = M
  start.next.next = end
  start.next = R

  return dummyHead.next
}

// @lc code=end
