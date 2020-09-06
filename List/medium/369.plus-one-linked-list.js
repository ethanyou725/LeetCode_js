/* Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.
You may assume the integer do not contain any leading zero, except the number 0 itself.
The digits are stored such that the most significant digit is at the head of the list.
Example :
Input: [1,2,3]
Output: [1,2,4] */

var plusOne = function (head) {
  const stack = [];
  let cur = head;
  while (cur !== null) {
    stack.push(cur);
    cur = cur.next;
  }

  let carry = 1;

  while (stack.length !== 0 && carry !== 0) {
    let last = stack.pop();
    let sum = last.val + carry;
    last.val = sum % 10;
    carry = Math.floor(sum / 10);
  }
  // 全部为9 需要在头加head [9,9,9] -> [1,0,0,0]
  if (carry) {
    const newHead = new ListNode(1);
    newHead.next = head;
    return newHead;
  }
  return head;
};

const input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null
};
// 返回
// {
//     "a": 1,
//     "b[0]": 1,
//     "b[1]": 2,
//     "b[2].c": true,
//     "b[3][0]": 3,
//     "d.e": 2,
//     "d.f": 3,
//     "g": null,  值为null或者undefined，丢弃
// };

function isObject(val) {
  return val !== null && typeof val === "object";
}

function flatten(input) {
  const ret = {};

  function handlePrimitive(val, suffix = "") {
    ret[`${suffix}`] = val;
  }

  function handleObject(obj, suffix = "") {
    const keys = Object.keys(obj);
    if (keys.length === 0) return ret;
    for (let i = 0; i < keys.length; i++) {
      const skey = keys[i];
      const val = obj[skey];
      const append = [suffix, skey].filter(Boolean).join(".")
      if (Array.isArray(val)) {
        handleArray(val, append);
      } else if (isObject(val)) {
        handleObject(val, append);
      } else {
        handlePrimitive(val, append);
      }
    }
  }

  function handleArray(array, suffix = "") {
    for (let i = 0, len = array.length; i < len; i++) {
      const val = array[i];
      if (Array.isArray(val)) {
        handleArray(val, `${suffix}[${i}]`);
      } else if (isObject(val)) {
        handleObject(val, `${suffix}[${i}]`);
      } else {
        handlePrimitive(val, `${suffix}[${i}]`);
      }
    }
  }

  handleObject(input, "");

  return ret;
}

var a = flatten({ a: [1, 2, [3, 4], { c: "w", j: "k", z: [1, 2] }], b: 3, d: 4 });
// var a= flatten({c: "w", j: "k"})

console.log(a);
