function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var bstFromPreorder = function(preorder) {
  if (!preorder.length) return null;
  let first = 0;
  let second = 1;
  let node = new TreeNode(preorder[first]); // 1
  if (preorder.length >= 2) {
    while (second < preorder.length) {
      if (preorder[second] > node.val) {
        break;
      }
      second++;
    }

    let left = preorder.slice(1, second);
    let right = preorder.slice(second);
    node.left = bstFromPreorder(left);
    node.right = bstFromPreorder(right);
  }
  return node;
};

module.exports = bstFromPreorder;
