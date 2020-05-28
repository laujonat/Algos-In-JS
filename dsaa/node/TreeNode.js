// @flow

type A = any;
type B = any;

class TreeNode<A, B> {
  key: A;
  val: B;
  left_ptr: A | null;
  right_ptr: B | null;
  parent: A | null;
  constructor(key: A, val: B) {
    this.key = key;
    this.val = val;
    this.left_ptr = null;
    this.right_ptr = null;
    this.parent = null;
  }
}

module.exports = TreeNode;
