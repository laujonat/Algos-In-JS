const BinaryTree = require("../../../dsaa/trees/BinaryTree.js");

const btreeInvalid = new BinaryTree(7);
btreeInvalid.setRootIndex(0);
// btree.insert(0, 5);
// btree.insert(0, 4);
// btree.insert(0, 6);
// btree.insert(0, 2);
// btree.insert(0, 6);
// btree.insert(0, 12);
// btree.insert(0, 2);300 200 400 100 400
btreeInvalid.insert(0, 300);
btreeInvalid.insert(0, 200);
btreeInvalid.insert(0, 400);
btreeInvalid.insert(0, 100);
btreeInvalid.insert(0, 400);

btreeInvalid.leftEdge(0, 1);
btreeInvalid.rightEdge(0, 2);
btreeInvalid.leftEdge(1, 3);
btreeInvalid.rightEdge(1, 4);
// btree.leftEdge(2, 5);
// btree.rightEdge(2, 6);
btreeInvalid.buildTree();

// const btree = new BinaryTree(12);
// btree.setRootIndex(0);
// btree.insert(0, 1);
// btree.insert(0, 2);
// btree.insert(0, 3);
// btree.insert(0, 4);
// btree.insert(0, 5);
// btree.insert(0, 6);
// btree.insert(0, 7);
// btree.insert(0, 5);
// btree.insert(0, 4);
// btree.insert(0, 6);
// btree.insert(0, 2);
// btree.insert(0, 5);
// btree.insert(0, 5);
// btree.insert(0, 9);

// const btree = new BinaryTree(4);
// btree.setRootIndex(0);
// btree.insert(0, 1);
// btree.insert(0, 2);
// btree.insert(0, 3);
// btree.insert(0, 4);
// btree.leftEdge(0, 1);
// btree.rightEdge(1, 2);
// btree.leftEdge(2, 3);

// btree.insert(0, 300);
// btree.insert(0, 200);
// btree.insert(0, 400);
// btree.insert(0, 100);
// btree.insert(0, 400);

// btree.leftEdge(0, 1);
// btree.rightEdge(0, 2);
// btree.leftEdge(1, 3);
// btree.rightEdge(1, 4);
// btree.leftEdge(2, 5);
// btree.rightEdge(2, 6);
// btree.buildTree();

// const btree = new BinaryTree(8);
// btree.setRootIndex(0);
// btree.insert(0, 4);
// btree.insert(0, 2);
// btree.insert(0, 5);
// btree.insert(0, 1);
// btree.insert(0, 3);
// btree.setRootIndex(0);
// btree.leftEdge(0, 1);
// btree.rightEdge(0, 2);
// btree.leftEdge(1, 3);
// btree.rightEdge(1, 4);
// btree.buildTree();
// btree.insert(0, 1);
// btree.insert(0, 2);
// btree.insert(0, 3);
// btree.insert(0, 4);
// btree.insert(0, 5);
// btree.insert(0, 6);
// btree.insert(0, 7);
// btree.insert(0, 8);
// btree.leftEdge(0, 1);
// btree.rightEdge(0, 2);
// btree.rightEdge(1, 3);
// btree.leftEdge(2, 4);
// btree.rightEdge(2, 5);
// btree.leftEdge(4, 6);
// btree.rightEdge(4, 7);
// btree.buildTree();

const btree = new BinaryTree(3);
btree.setRootIndex(1);
btree.insert(1, 1);
btree.insert(1, 2);
btree.insert(1, 3);
btree.leftEdge(1, 0);
btree.rightEdge(1, 2);
btree.buildTree();

const _btree = new BinaryTree(3);
_btree.setRootIndex(1);
_btree.insert(1, 6);
_btree.insert(1, 7);
_btree.insert(1, 8);
_btree.setRootIndex(1);
_btree.leftEdge(1, 0);
_btree.rightEdge(1, 2);
_btree.buildTree();

module.exports = { btree, _btree, btreeInvalid };
