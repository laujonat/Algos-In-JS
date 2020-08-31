/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
*/

function diameterOfBinaryTree(root) {
  if (!root) {
    return null;
  }
  let count = 0;
  const helper = (node) => {
    if (!node) {
      return 0;
    }
    const left = helper(node.left);
    const right = helper(node.right);

    count = Math.max(count, left + right);

    return 1 + Math.max(left, right);
  };

  return helper(root);
}

module.exports = diameterOfBinaryTree;
