/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findKthLargest = function(nums, k) {
  if (!nums) return null;
  if (k > nums.length) return null;
  const newArr = nums.sort((a, b) => b - a);
  return newArr[k - 1];
};

console.log(findKthLargest([ 3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6 ], 2));
