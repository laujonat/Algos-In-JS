/*
  Single Value Tree
  Given a binary tree, find the number of unival subtrees. An unival tree is a tree that has the same value in every node.
*/
const BinaryTree = require("../trees/BinaryTree.js");

const btree = new BinaryTree(7);
btree.setRootIndex(0);
btree.insert(0, 5);
btree.insert(0, 5);
btree.insert(0, 5);
btree.insert(0, 5);
btree.insert(0, 5);
btree.insert(0, 4);
btree.insert(0, 5);

btree.leftEdge(0, 1);
btree.rightEdge(0, 2);
btree.leftEdge(1, 3);
btree.rightEdge(1, 4);
btree.leftEdge(2, 5);
btree.rightEdge(2, 6);
btree.buildTree();

function findSingleValueTrees(root) {
  if (!root) {
    return 0;
  }
  let count = 0;
  let helper = (node) => {
    if (!node.left_ptr && !node.right_ptr) {
      count++;
      return node.val;
    } else if (!node.right_ptr && node.left_ptr) {
      if (node.val === helper(node.left_ptr)) {
        count++;
        return node.val;
      }
      return false;
    } else if (!node.left_ptr && node.right_ptr) {
      if (node.val === helper(node.right_ptr)) {
        count++;
        return node.val;
      }
      return false;
    } else {
      let left = helper(node.left_ptr);
      let right = helper(node.right_ptr);
      if (left === right && right === node.val) {
        count++;
        return node.val;
      }
      return false;
    }
  };
  helper(root);
  return count;
}
let res = findSingleValueTrees(btree.root);
module.exports = findSingleValueTrees;
