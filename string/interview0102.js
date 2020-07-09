/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

const CheckPermutation = function(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 !== len2) {
    return false;
  }
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < len1; i++) {
    arr1.push(s1.charCodeAt(i));
    arr2.push(s2.charCodeAt(i));
  }
  arr1.sort();
  arr2.sort();

  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    if (i === len1 - 1) {
      return true;
    }
  }
};

const CheckPermutation1 = function(s1, s2) {
  return s1.split('').sort().toString() === s2.split('').sort().toString();
};

console.log(CheckPermutation('abc', 'bca'));
console.log(CheckPermutation1('abc', 'bca'));
