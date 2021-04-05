/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.next = next === undefined ? null : next
//   }
// }
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let s1: number[] = []
  let s2: number[] = []
  while (l1 !== null) {
    s1.push(l1.val)
    l1 = l1.next
  }
  while (l2 !== null) {
    s2.push(l2.val)
    l2 = l2.next
  }

  let ret = null
  let carry = 0

  while (s1.length || s2.length || carry !==0) {
    const a = s1.length ? s1.pop(): 0
    const b = s2.length ? s2.pop(): 0
    let curVal = a + b + carry
    carry = Math.floor(curVal / 10)
    curVal = curVal - 10 * carry
    const curNode = new ListNode(curVal)
    curNode.next = ret
    ret = curNode

  }

  return ret
}
// @lc code=end
