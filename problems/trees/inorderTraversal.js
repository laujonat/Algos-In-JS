/*
In-order Traversal of a Tree Without Recursion

Problem Statement:
Write a function to traverse a binary tree in-order, without using recursion.
Return:
[4, 2, 5, 1, 6, 3, 7]

Input/Output Format For The Function:
Input format:
  There is only one argument named root denoting the root of the input tree.
  
  Output format:  
  Return an array containing the node values in in-order traversal of the tree.
*/
const { btree } = require("./test_utils/btree.js");

function inorderIterativeTraversal(root) {
  if (!root) {
    return [];
  }
  const stack = [];
  const output = [];
  let curr = root;
  const goDownLeft = (node) => {
    let curr = node;
    while (curr) {
      stack.push(curr);
      curr = curr.left_ptr;
    }
  };
  goDownLeft(root);
  while (stack.length > 0) {
    let current = stack.pop();
    output.push(current.val);

    if (current.right_ptr) {
      goDownLeft(current.right_ptr);
    }
  }
  return output;
}

module.exports = inorderIterativeTraversal;
