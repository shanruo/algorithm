/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  const len = nums.length;
  const dp = new Array(len);
  for (let i = 0, j = 0; i < len, j < len; i++, j++) {
    if (i === 0) {
      dp[0] = nums[0];
    } else {
      dp[i] = dp[i - 1] + nums[j];
    }
  }
  return dp;
};

console.log(runningSum([ 3, 1, 2, 10, 1 ]));
