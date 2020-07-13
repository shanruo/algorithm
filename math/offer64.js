/**
 * @param {number} n
 * @return {number}
 */

const sumNums = function(n) {
  if (n === 0 || n === 1) return n;
  return sumNums(n - 1) + n;
};
