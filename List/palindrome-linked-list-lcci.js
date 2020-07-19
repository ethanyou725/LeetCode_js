/**
 * 检查输入的链表是否是回文的
 * https://leetcode-cn.com/problems/palindrome-linked-list-lcci/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 这道题如果满足O(n) 时间复杂度和 O(1) 空间复杂度, 不应该是easy类型
 * 如果额外开辟空间, 可以遍历链表, 把每个节点的val变成字符串或者数组, 再进行判断
 * 如果要满足O(1)空间复杂度, 则要分成三步走
 * 1. 通过快慢指针找到中间节点, fast指针前进速度是slow两倍, fast 到达末尾是, slow 则是中点
 * 2. 从中点开始反转剩下的链表
 * 3. 反转过后链表 和 原链表比较
 *  
 * * 问题: 一开始被寻找中间节点和翻转困扰, 链表长度偶数是是不是应该特殊处理(没有中点)
 * * 其实不用特殊处理 e.g 1->2->3->3->2->1, midNode是第二个3
 * * 翻转midNode 3->2->1 得到 1->2->3, 原head 为 1->2->3->3
 * * 如果满足回文, 直接比较即可
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  function reverse(head) {
    let curHead = head;
    let pre = null;
    let temp = null;
    while (curHead !== null) {
      temp = curHead.next;
      curHead.next = pre;
      pre = curHead;
      curHead = temp;
    }
    return pre;
  }

  function findMidNode(head) {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  let cur = head;
  let midNode = findMidNode(cur);
  let reverseNode = reverse(midNode);
  // console.log(midNode, reverseNode)
  // console.log(head)

  while (reverseNode !== null && head !== null) {
    if (reverseNode.val !== head.val) return false;
    reverseNode = reverseNode.next;
    head = head.next;
  }
  return true;
};
