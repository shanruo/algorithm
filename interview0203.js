/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const deleteNode = function(node) {
  const curNode = node;
  curNode.val = curNode.next.val;
  curNode.next = curNode.next.next;
};
