class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
function insert(root, key) {
  if (root == null) {
    // destination.
    return new Node(key);
  }
  if (key <= root.key) {
    // element is <= hence insert it in left subtree.
    root.left = bst_insert(root.left, key); // if root->left_ptr is null then new TreeNode will be created and root->left_ptr is assigned its address else it will be assigned to the same value as previouly stored.
  } // element is > hence insert it in right subtree.
  else {
    root.right = bst_insert(root.right, key); // if root->right_ptr is null then new TreeNode will be created and root->right_ptr is assigned its address else it will be assigned to the same value as previouly stored.
  }
  return root;
}

module.exports = {
  insert,
};
