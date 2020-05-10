/*
Post-order Traversal of a Tree Without Recursion

Problem Statement:
Write a function to traverse a binary tree Post-order, without using recursion.
Return:
[4, 5, 2, 6, 7, 3, 1]

Input/Output Format For The Function:
Input format:
  There is only one argument named root denoting the root of the input tree.
  
  Output format:  
  Return an array containing the node values in post-order traversal of the tree.
*/
const { btree, btreeInvalid } = require("./test_utils/btree.js");
// O(n) space
// O(n) time
function postorderTraversal(root) {
  if (!root) {
    return null;
  }
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length != 0) {
    let node = stack[stack.length - 1];
    let left = node.left_ptr;
    let right = node.right_ptr;
    if (!left && !right) {
      res.push(node.val);
      stack.pop();
    } else {
      if (right) {
        stack.push(right);
        node.right_ptr = null;
      }
      if (left) {
        stack.push(left);
        node.left_ptr = null;
      }
    }
  }
  return res;
}

// let res = postorderTraversal(btree.root);
module.exports = postorderTraversal;
