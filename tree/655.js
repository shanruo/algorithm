/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */

const printRow = function(arr, root, row, left, right) {
  if (root) {
    const mid = Math.floor((left + right) / 2);
    arr[row][mid] = String(root.val);
    printRow(arr, root.left, row + 1, left, mid);
    printRow(arr, root.right, row + 1, mid + 1, right);
  }
};

const getDepth = function(root) {
  if (!root) return 0;
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);
  return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
};

const printTree = function(root) {
  const row = getDepth(root);
  const col = Math.pow(2, row) - 1;
  const arr = Array.from(new Array(row), () => new Array(col).fill(''));
  printRow(arr, root, 0, 0, col);
  return arr;
};
