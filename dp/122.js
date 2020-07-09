/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
  const len = prices.length;
  let result = 0;
  for (let i = 1; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      result = result + prices[i] - prices[i - 1];
    }
  }
  return result;
};
const prices = [ 7, 1, 5, 3, 6, 4 ];
const prices1 = [ 1, 2, 3, 4, 5 ];
console.log(maxProfit(prices));
console.log(maxProfit(prices1));
