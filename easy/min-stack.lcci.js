// https://leetcode-cn.com/problems/min-stack-lcci/
// 除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.saved = []
  this._minSaved = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.saved.push(x)
  if (this._minSaved.length === 0 || this._minSaved[this._minSaved.length - 1] >= x) {
      this._minSaved.push(x)
  }

};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const val = this.saved.pop()
  if (val === this._minSaved[this._minSaved.length - 1]) {
      this._minSaved.pop()
  }
  return val
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  if (this.saved.length === 0) return null
  return this.saved[this.saved.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if (this.saved.length === 0) return null
  return this._minSaved[this._minSaved.length - 1] || 0
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/