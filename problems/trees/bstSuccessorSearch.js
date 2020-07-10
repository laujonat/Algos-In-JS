/*
  BST Successor Search
    In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). 
    Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.

    Explain your solution and analyze its time and space complexities.
*/

const findInOrderSuccessor = function(inputNode) {
  if (!inputNode) {
    return;
  }
  let parent = inputNode.parent;
  let rightChild = inputNode.right;
  let leftChild = inputNode.left;
  let key = inputNode.key;

  if (!rightChild || !leftChild) {
    while (parent) {
      if (parent.key > key) {
        return parent;
      }
      parent = parent.parent;
    }
    return null;
  }
  if (rightChild.left) {
    while (leftChild.left) {
      leftChild = leftChild.left;
    }
    return leftChild;
  } else {
    return rightChild;
  }
};
module.exports = findInOrderSuccessor;
