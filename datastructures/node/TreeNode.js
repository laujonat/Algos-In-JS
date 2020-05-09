// @flow

type A = any;
type B = any;
class TreeNode<A, B> {
  key: mixed;
  value: mixed;
  left: mixed;
  right: mixed;
  parent: mixed;
  constructor(key: A, value: B) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
class TreeNodeNoKey<A> {
  key: mixed;
  val: mixed;
  left_ptr: mixed;
  right_ptr: mixed;
  parent: mixed;
  constructor(value: mixed) {
    this.val = value;
    this.left_ptr = null;
    this.right_ptr = null;
    this.parent = null;
  }
}

module.exports = { TreeNode, TreeNodeNoKey };
