/*
Given a binary tree and an integer k, return whether there exists a root-to-leaf path that sums up to k.

For example, given k = 18 and the following binary tree:
    8
   / \
  4   13
 / \   \
2   6   19
Return True since the path 8 -> 4 -> 6 sums to 18.
*/
const { btree } = require("./test_utils/btree.js");

function rootToLeafPath(node, k) {
  console.log("node.key", node.key, node.val, k);
  if (!node) {
    return false;
  }
  if (!node.left_ptr && !node.right_ptr) {
    return node.val === k;
  }
  const foundInLeft = rootToLeafPath(node.left_ptr, k - node.val);
  const foundInRight = rootToLeafPath(node.right_ptr, k - node.val);

  return foundInLeft || foundInRight;
}
// console.log(rootToLeafPath(btree.root, 15));

module.exports = rootToLeafPath;
