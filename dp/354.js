// envelopes = [[5,4],[6,4],[6,7],[2,3]]
// 输出3 组合为: [2,3] => [5,4] => [6,7]

/**
 * @param {number[][]} envelopes
 * @return {number}
 */

const lengthOfLIS = function(nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < len; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};

const maxEnvelopes = function(envelopes) {
  const len = envelopes.length;
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  const height = [];
  for (let i = 0; i < len; i++) {
    height.push(envelopes[i][1]);
  }
  return lengthOfLIS(height);
};

const envelopes = [[ 5, 4 ], [ 6, 4 ], [ 6, 7 ], [ 2, 3 ]];
console.log(maxEnvelopes(envelopes));
