/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (prices[j] > prices[i]) {
        dp[i] = Math.max(dp[i], prices[j] - prices[i]);
      }
    }
  }
  let result = 0;
  for (let i = 0; i < len; i++) {
    result = Math.max(result, dp[i]);
  }
  return result;
};

const prices = [ 7, 1, 5, 3, 6, 4 ];
const prices1 = [ 7, 6, 4, 3, 1 ];
console.log(maxProfit(prices));
console.log(maxProfit(prices1));
