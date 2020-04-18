/*
Kth Smallest Element Of BST

Given a binary search tree (BST) and an integer k, find k-th smallest element.
Example Input:
  2
 / \
1   3

k=3
Output: 3

The 3rd smallest element is 3.

*/
function bst_insert(root, val) {
  if (root == null) {
    // destination.
    return new TreeNode(val);
  }
  if (val <= root.val) {
    // element is <= hence insert it in left subtree.
    root.left_ptr = bst_insert(root.left_ptr, val); // if root->left_ptr is null then new TreeNode will be created and root->left_ptr is assigned its address else it will be assigned to the same value as previouly stored.
  } // element is > hence insert it in right subtree.
  else {
    root.right_ptr = bst_insert(root.right_ptr, val); // if root->right_ptr is null then new TreeNode will be created and root->right_ptr is assigned its address else it will be assigned to the same value as previouly stored.
  }
  return root;
}

function TreeNode(node_value: number) {
  this.val = node_value;
  this.left_ptr = null;
  this.right_ptr = null;
}

let root = new TreeNode(5);
bst_insert(root, 3);
bst_insert(root, 6);
bst_insert(root, 2);
bst_insert(root, 4);
bst_insert(root, 1);
// O(k) => O(n)
// O(h + k)
function kthSmallestElement(root: typeof TreeNode, k: number) {
  let count = 0;
  let answer = null;

  function findKthSmallestElement(root, k) {
    if (root == null || count > k) {
      return;
    }
    findKthSmallestElement(root.left_ptr, k);
    count++;
    if (count === k) {
      answer = root.val;
      return;
    }
    findKthSmallestElement(root.right_ptr, k);
  }

  findKthSmallestElement(root, k);
  return answer;
}
