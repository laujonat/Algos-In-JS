/*
Is It A BST

  Given a binary tree, check if it is a binary search tree (BST). A valid BST does not have to be complete or balanced.
  Consider the below definition of a BST:
  
  All nodes values of left subtree are less than or equal to parent node value
  All nodes values of right subtree are greater than or equal to parent node value
  Both left subtree and right subtree must be a BST
  By definition, NULL tree is a BST
  By definition, tree having a single node or leaf nodes are BST

*/
const BinaryTree = require("../trees/BinaryTree.js");
const { TreeNodeNoKey } = require("../node/TreeNode.js");
const { btree, btreeInvalid } = require("./test_utils/btree.js");

// Inefficient Solution
const isBST = (root) => {
  if (!root) {
    return 1;
  }
  const findMax = (node) => {
    while (node.right_ptr) {
      node = node.right_ptr;
    }
    return node;
  };

  const findMin = (node) => {
    while (node.left_ptr) {
      node = node.left_ptr;
    }
    return node;
  };
  let curr = root;
  let left = curr.left_ptr;
  let right = curr.right_ptr;

  if (left && findMax(left).val > curr.val) {
    return 0;
  }
  if (right && findMin(right).val < curr.val) {
    return 0;
  }

  if (!isBST(left) || !isBST(right)) {
    return 0;
  }
  return 1;
};

// O(n) Solution
function isBSTV2(root) {
  const bstHelper = (node, minVal, maxVal) => {
    if (!node) {
      return 1;
    }
    if (node.val < minVal || node.val > maxVal) {
      return 0;
    }
    return (
      bstHelper(node.left_ptr, minVal, node.val) &&
      bstHelper(node.right_ptr, node.val, maxVal)
    );
  };
  if (bstHelper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)) {
    return 1;
  }
  return 0;
}

let res = isBSTV2(btree.root);
console.log(res);
