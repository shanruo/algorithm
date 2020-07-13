/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const searchRange = function(nums, target) {
  const len = nums.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      arr.push(i);
    }
  }
  if (arr.length === 0) return [ -1, -1 ];
  return [ arr[0], arr[arr.length - 1] ];
};

console.log(searchRange([ 5, 7, 7, 8, 8, 10 ], 8));
