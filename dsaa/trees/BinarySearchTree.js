/*
A BST is a data structure composed of nodes. It has the following guarantees:

- Each tree has a root node (at the top).
- The root node has zero, one or two child nodes.
- Each child node has zero, one or two child nodes, and so on.
- Each node has up to two children.
- For each node, its left descendants are less than the current node, 
  which is less than the right descendants.
*/
type TreeNodeType = {
  key: number,
  value?: Array<?string>,
  left: TreeNodeType,
  right: TreeNodeType,
};

function TreeNode(key: number, value: Array<string>) {
  this.key = key;
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
}

class BinarySearchTree {
  root: TreeNodeType;
  constructor(root: TreeNodeType) {
    this.root = root;
  }
  // O(h) => O(logn);
  search(root: TreeNodeType, key: number) {
    if (root == null) {
      return null;
    }
    let curr = root;
    while (curr != null) {
      if (key === curr.key) {
        return curr;
      } else if (key < curr.key) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return null;
  }
  // O(h) => O(logn);
  insert(key: number, value: Array<string>) {
    let newNode: TreeNodeType = new TreeNode(key, value);
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }
    let curr = this.root;
    let prev = null;
    while (curr != null) {
      if (key == curr.key) {
        throw new Error("Key already exists");
      } else if (key < curr.key) {
        prev = curr;
        curr = curr.left;
      } else {
        prev = curr;
        curr = curr.right;
      }
    }
    if (prev != null) {
      if (key < prev.key) {
        prev.left = newNode;
      } else {
        prev.right = newNode;
      }
    }
    return newNode;
  }

  printInorderTraversal(root: TreeNodeType) {
    if (root != null) {
      this.printInorderTraversal(root.left);
      console.table(root);
      this.printInorderTraversal(root.right);
    }
  }

  printPreorderTraversal(root: TreeNodeType) {
    if (root != null) {
      console.table(root);
      this.printPreorderTraversal(root.left);
      this.printPreorderTraversal(root.right);
    }
  }

  printPostorderTraversal(root: TreeNodeType) {
    if (root != null) {
      this.printPostorderTraversal(root.left);
      this.printPostorderTraversal(root.right);
      console.table(root);
    }
  }

  getInOrderSuccessor(root: TreeNodeType) {
    if (!root) {
      return;
    }
    let parent = root.parent;
    let leftChild = root.left;
    let rightChild = root.right;
    let key = root.key;
    if (!rightChild || !leftChild) {
      while (parent) {
        if (parent.key > key) {
          return parent;
        }
        parent = parent.parent;
      }
      return null;
    }
    if (rightChild) {
      leftChild = rightChild.left;
      if (leftChild) {
        while (leftChild.left) {
          leftChild = leftChild.left;
        }
        return leftChild;
      }
      return rightChild;
    }
  }

  getPredecessor(root: TreeNodeType, pKey: TreeNodeType) {}

  delete(key: number) {
    this.root = this.deleteNode(this.root, key);
  }
  // O(logn)
  deleteNode(root: TreeNodeType, key: number) {
    if (root == null) {
      return root;
    } else if (key < root.key) {
      // Search left
      root.left = this.deleteNode(root.left, key);
    } else if (key > root.key) {
      // Search right
      root.right = this.deleteNode(root.right, key);
    } else {
      if (root.left == null && root.right == null) {
        root = null;
        return root;
      }
      // Case: Node with one child
      if (root.left == null) {
        root = root.right;
        return root;
      } else if (root.right == null) {
        root = root.left;
        return root;
      }
      // Case: Node with two children
      // Get the inorder successor (smallest in the right subtree)
      let successor = this.findMin(root.right);
      root.key = successor.key;
      root.right = this.deleteNode(root.right, successor.key);
    }
    return root;
  }

  // O(height) => O(logn) for balanced binary tree
  findMax(root: TreeNodeType) {
    if (!this.root) {
      return null;
    }
    let curr = root;
    while (curr.right != null) {
      curr = curr.right;
    }
    return curr;
  }
  // O(height) => O(logn) for balanced binary tree
  findMin(root: TreeNodeType) {
    if (!this.root) {
      return root;
    }
    let curr = root;
    while (curr && curr.left != null) {
      curr = curr.left;
    }
    console.log("min: ", curr.key);
    return curr;
  }
  // O(height) => O(logn);
  push(key: number, value: Array<string>) {
    this.insert(key, value);
    return this.root;
  }
  // O(1)
  getRoot() {
    return this.root;
  }
  depthFirstSearch(node: TreeNodeType) {
    if (node) {
      console.log(node.key, node.value);
    }
  }
}

// let root = new TreeNode(4, ["x"]);
// let bst = new BinarySearchTree(root);
// bst.push(2, ["x"]);
// bst.push(7, ["x"]);
// bst.push(5, ["x"]);
// bst.push(8, ["x"]);
// bst.push(1, ["x"]);
// bst.push(3, ["x"]);
// bst.push(9, ["x"]);
// bst.push(6, ["x"]);

// bst.printInorderTraversal(bst.root);
// bst.printPreorderTraversal(bst.root);
// bst.printInorderTraversal(bst.root);

module.exports = { BinarySearchTree };
