/**
 * https://leetcode-cn.com/problems/design-linked-list/
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
  在链表类中实现这些功能：

    get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
    addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
    addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
    addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
    deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。

 */
/**
 * Initialize your data structure here.
 * * 解法: 牢记链表的定义, 线性结构, 只有头部节点可以访问, capacity属性是可以没有的
 * * 难点: 需要自定义一个Node类, 如果已经刷过其他链表的题目, 复制过来
 * * function Node(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function Node(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.header = null;
  this.capacity = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0) return -1;
  if (this.capacity === 0) return -1;
  if (index > this.capacity - 1) return -1;
  let cur = this.header;
  while (index > 0 && cur !== null) {
    index--;
    cur = cur.next;
  }

  return index === 0 ? cur.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  node.next = this.header;
  this.header = node;
  this.capacity += 1;
  return this.header;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  // console.log(this.header, 99, this)
  // if (this.header === null) {
  //   this.addAtHead(val)
  //   return
  // }
  let cur = this.header;
  const append = new Node(val);
  while (cur.next !== null) {
    cur = cur.next;
  }

  cur.next = append;
  this.capacity += 1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 * 1 -> 2 -> 3
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0) return;
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.capacity) {
    this.addAtTail(val);
    return;
  }
  let cur = this.header;
  const added = new Node(val);

  while (index > 1) {
    index--;
    cur = cur.next;
  }
  added.next = cur.next;
  cur.next = added;
  this.capacity += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 * 1 -> 2 -> 3
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) return;
  if (index > this.capacity - 1) return;
  let cur = this.header;
  if (index === 0) {
    cur = null;
    this.header = this.header.next;
    this.capacity -= 1;
    return;
  }
  while (index > 1) {
    index--;
    cur = cur.next;
  }
  cur.next = cur.next.next;
  this.capacity -= 1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
var a = obj.get(1);
obj.deleteAtIndex(1);
var b = obj.get(1);

console.log(obj, a, b);
