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

const preorderTraversal = function(root) {
  const result = [];
  const preOrderNode = node => {
    if (node) {
      result.push(node.val);
      preOrderNode(node.left);
      preOrderNode(node.right);
    }
  };
  preOrderNode(root);
  return result;
};
