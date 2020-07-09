/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = function(root) {
  if (root === null) {
    return null;
  }
  const right = invertTree(root.right);
  const left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
};
