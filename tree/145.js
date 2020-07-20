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

const postorderTraversal = function(root) {
  const result = [];
  const postOrderNode = node => {
    if (node) {
      postOrderNode(node.left);
      postOrderNode(node.right);
      result.push(node.val);
    }
  };
  postOrderNode(root);
  return result;
};
