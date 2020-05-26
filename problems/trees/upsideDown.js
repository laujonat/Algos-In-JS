/*
Upside Down
Problem Statement:
Given a binary tree where every node has either 0 or 2 children and every right node is a leaf node, flip it upside down turning it into a binary tree where all left nodes are leafs.

Function has to return a TreeNode value: root of the flipped-upside-down tree.

Constraints:

0 <= number of nodes <= 100000
1 <= values stored in the nodes <= 100000
Every node either has 0 or 2 children.
Every right node is a leaf node.

*/
"use-strict";
const { btree } = require("./test_utils/btree.js");
const TreeNode = require("../../dsaa/node/TreeNode.js");

function flipUpsideDown(root) {
  if (!root) {
    return null;
  }

  const inorderHelper = (node) => {
    if (!node.left_ptr && !node.right_ptr) {
      return node;
    }
    // console.log(node.left_ptr.val);
    const rnode = inorderHelper(node.left_ptr);
    // console.log(
    //   "rnode",
    //   rnode.val,
    //   "left",
    //   rnode.left_ptr,
    //   "right",
    //   rnode.right_ptr
    // );
    node.left_ptr.left_ptr = node.right_ptr;
    node.left_ptr.right_ptr = node;
    node.left_ptr = null;
    node.right_ptr = null;
    return rnode;
  };
  return inorderHelper(root);
}
// flipUpsideDown(btree.root);
module.exports = flipUpsideDown;
