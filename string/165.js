/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

const compareVersion = function(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    let value1 = 0,
      value2 = 0;
    if (i < v1.length) {
      value1 = parseInt(v1[i]);
    } if (i < v2.length) {
      value2 = parseInt(v2[i]);
    }

    if (value1 > value2) return 1;
    if (value1 < value2) return -1;
  }
  return 0;
};
console.log(compareVersion('1.0.1', '1'));
