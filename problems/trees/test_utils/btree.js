const BinaryTree = require("../../../datastructures/trees/BinaryTree.js");

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

const btree = new BinaryTree(7);
btree.setRootIndex(0);
btree.insert(0, 1);
btree.insert(0, 2);
btree.insert(0, 3);
btree.insert(0, 4);
btree.insert(0, 5);
btree.insert(0, 6);
btree.insert(0, 7);
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

btree.leftEdge(0, 1);
btree.rightEdge(0, 2);
btree.leftEdge(1, 3);
btree.rightEdge(1, 4);
btree.leftEdge(2, 5);
btree.rightEdge(2, 6);
btree.buildTree();

module.exports = { btree, btreeInvalid };
