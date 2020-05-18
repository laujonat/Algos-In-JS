/* @flow
Least Common Ancestor (LCA)

Find the lowest common ancestor (LCA) of two nodes in a binary tree of n nodes. Given references to the root node and nodes a and b of the tree, return the value from the LCA node of a and b.

The LCA of nodes a and b in a tree is defined as the shared ancestor node of a and b that is located farthest from the root.

Example
Input: a=8, b=9.

Output: LCA(8, 9)=5

There are three shared parents of 8 and 9 in this tree: 5, 2, 1. Of those three, the farthest from the root is 5.

Other examples:

LCA(2,5) = 2

LCA(2,3) = 1
*/

const { btree } = require("./test_utils/btree.js");
const { Node } = require("../../dsaa/node/Node.js");
type NodeType = typeof Node;
//  O(N) time and use O(N) of auxiliary space. The auxiliary space is used for the call stack, it is, more narrowly, Θ(height of the tree).
const lca = function(
  root: NodeType,
  nodeA: NodeType,
  nodeB: NodeType
): ?number {
  let curr = root;
  const helper = function<NodeType, NodeType, NodeType>(node, nodeA, nodeB) {
    if (!node) {
      return;
    }
    if (node.val === nodeA.val || node.val === nodeB.val) {
      return node.val;
    }
    const left = helper(node.left_ptr, nodeA, nodeB);
    const right = helper(node.right_ptr, nodeA, nodeB);
    if (left && right) {
      return node.val;
    }
    if (left) {
      return left;
    } else {
      return right;
    }
  };
  return helper(curr, nodeA, nodeB);
};

// const res = lca(
//   btree.root,
//   btree.getNode(btree.root, 4),
//   btree.getNode(btree.root, 7)
// );

module.exports = lca;
