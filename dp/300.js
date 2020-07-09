/**
 * @param {number[]} nums
 * @return {number}
 */

const lengthOfLIS = function(nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  let result = 0;
  for (let i = 0; i < len; i++) {
    result = Math.max(result, dp[i]);
  }
  return result;
};
const arr = [ 10, 9, 2, 5, 3, 7, 101, 18 ];
console.log(lengthOfLIS(arr));
