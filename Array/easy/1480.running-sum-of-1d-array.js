/**
 * https://leetcode-cn.com/problems/running-sum-of-1d-array/
 * 输入：nums = [1,1,1,1,1]
    输出：[1,2,3,4,5]
    解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (nums.length === 0) return nums;
  const ret = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    const preSum = ret[ret.length - 1] || 0;
    ret.push(preSum + nums[i]);
  }
  return ret;
};

// 解法2不需要额外空间
var runningSum = function (nums) {
  for (let i = 1, len = nums.length; i < len; i++) {
    const pre = nums[i - 1];
    const cur = num[i];
    nums[i] = pre + cur;
  }
};
