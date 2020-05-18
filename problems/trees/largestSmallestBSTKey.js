/*
Largest Smaller BST Key
Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. If such a number doesn’t exist, return -1. Assume that all keys in the tree are nonnegative.

Analyze the time and space complexities of your solution.

For example:

For num = 17 and the binary search tree below:

Your function would return:

14 since it’s the largest key in the tree that is still smaller than 17.

*/

const TreeNode = require("../../dsaa/node/TreeNode.js");

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}
BinarySearchTree.prototype.findLargestSmallerKey = function(num) {};

findLargestSmallerKey = function(num) {
  let res = -1;
  let curr = this.root;
  while (curr) {
    if (curr.key < num) {
      res = curr.key;
      curr = curr.right_ptr;
    } else {
      curr = curr.left_ptr;
    }
  }
  return res;
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new TreeNode(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new TreeNode(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left_ptr) {
        currentNode.left_ptr = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left_ptr;
      }
    } else {
      if (!currentNode.right_ptr) {
        currentNode.right_ptr = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right_ptr;
      }
    }
  }
};
var bst = new BinarySearchTree();
// bst.insert(20);
// bst.insert(9);
// bst.insert(25);
// bst.insert(5);
// bst.insert(12);
// bst.insert(11);
// bst.insert(14);

var result = findLargestSmallerKey.call(bst, 17);
module.exports = findLargestSmallerKey;
