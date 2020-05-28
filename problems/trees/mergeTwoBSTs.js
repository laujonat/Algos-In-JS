/*
Merge Two BSTs
Problem Statement:
Given two BSTs (Binary Search Trees), one with N1 number of nodes and other one with N2 number of nodes.
Your task is to merge them such that:
   - Resultant tree is height balanced.
   - Resultant tree is a BST.
   - Resultant tree contains all values from given BST-1.
   - Resultant tree contains all values from given BST-2.
   - Size of the resultant tree is N1 + N2.
   - For any value, no of occurrences in resultant tree = no of occurrences in BST-1 + no of occurrences in BST-2. (If BST-1 contains 3 nodes with value 50 and BST-2 contains 4 nodes with value 50, then resultant tree should contain exactly 7 nodes with value 50.)
Any resultant tree, satisfying all the above conditions will be considered as valid answer.

Input/Output Format For The Function:

Input Format:

There are two arguments, first one is the root of the first BST with N1 number of nodes and second one is the root of the second BST with N2 number of nodes.
Output Format:

Return root of the resultant BST.
*/
"use-strict";
const { insert } = require("./test_utils/bst.js");
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const merge = function(leftArr, rightArr) {
  let i = 0;
  let j = 0;
  let aux = [];

  while (i <= leftArr.length - 1 && j <= rightArr.length - 1) {
    if (leftArr[i] <= rightArr[j]) {
      aux.push(leftArr[i]);
      i++;
    } else {
      aux.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    aux.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    aux.push(rightArr[j]);
    j++;
  }

  return aux;
};
function buildBst(sortedData, low, hi) {
  if (low > hi) return null;
  if (low === hi) return new Node(sortedData[low]);
  let mid = Math.floor((low + hi) / 2);

  let node = new Node(sortedData[mid]);
  node.left = buildBst(sortedData, low, mid - 1);
  node.right = buildBst(sortedData, mid + 1, hi);
  return node;
}
function mergeTwoBSTs(root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  let arr1 = [];
  let arr2 = [];
  function inOrder(root, arr = []) {
    if (!root === null) {
      return;
    }
    inOrder(root.left, arr);
    arr.push(root.key);
    inOrder(root.right, arr);
  }
  inOrder(root1, arr1);
  inOrder(root2, arr2);
  let sortedData = merge(arr1, arr2);
  return buildBst(sortedData, 0, sortedData.length - 1);
  return root;
}

module.exports = mergeTwoBSTs;
