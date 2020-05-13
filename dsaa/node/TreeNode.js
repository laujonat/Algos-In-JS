// @flow

type A = any;
type B = any;

class TreeNode<A, B> {
  key: mixed;
  val: mixed;
  left_ptr: mixed;
  right_ptr: mixed;
  parent: mixed;
  constructor(key: mixed, val: mixed) {
    this.key = key;
    this.val = val;
    this.left_ptr = null;
    this.right_ptr = null;
    this.parent = null;
  }
}

module.exports = TreeNode;
