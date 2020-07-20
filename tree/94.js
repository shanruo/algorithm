/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inorderTraversal = function(root) {
  const result = [];
  const inOrderNode = node => {
    if (node) {
      inOrderNode(node.left);
      result.push(node.val);
      inOrderNode(node.right);
    }
  };
  inOrderNode(root);
  return result;
};
