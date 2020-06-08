/*
Pre-order Traversal of a Tree Without Recursion

Problem Statement:
Write a function to traverse a binary tree Pre-order, without using recursion.
Return:
[1, 2, 4, 5, 3, 6, 7]

Input/Output Format For The Function:
Input format:
  There is only one argument named root denoting the root of the input tree.
  
  Output format:  
  Return an array containing the node values in pre-order traversal of the tree.
*/
const { btree, btreeInvalid } = require("./test_utils/btree.js");

function preorderTraversal(root) {
  if (!root) {
    return null;
  }
  const stack = [];
  stack.push(root);
  const output = [];
  while (stack.length) {
    let current = stack.pop();
    output.push(current);
    if (current.right_ptr) {
      stack.push(current.right_ptr);
    }
    if (current.left_ptr) {
      stack.push(current.left_ptr);
    }
  }
  return output.map((node) => node.val);
}
// let r = preorderTraversal(btree.root);
// console.log(r);
module.exports = preorderTraversal;
