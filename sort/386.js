/**
 * @param {number} n
 * @return {number[]}
 */

const lexicalOrder = function(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i + '');
  }
  res = res.sort();
  return res;
};

console.log(lexicalOrder(13));
