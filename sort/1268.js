/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

const suggestedProducts = function(products, searchWord) {
  const len = searchWord.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    let item = [];
    for (let j = 0; j < products.length; j++) {
      const product = products[j];
      const curPre = product.substr(0, i);
      const pre = searchWord.substr(0, i);
      if (product[i] === searchWord[i] && curPre === pre) {
        item.push(product);
      }
    }
    item = item.sort();
    if (item.length > 3) {
      item.length = 3;
    }
    result.push(item);
  }
  return result;
};

console.log(suggestedProducts([ 'havana' ], 'tatiana'));
