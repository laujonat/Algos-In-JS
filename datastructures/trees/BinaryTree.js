const { TreeNodeNoKey } = require("../node/TreeNode.js");
const Edge = require("../node/Edge.js");

/**
 * Binary Tree for testing
 */
class BinaryTree {
  constructor(n) {
    this.noOfNodes = n;
    this.rootIndex = -1;
    this.noOfEdges = 0;
    this.root = null;
    this.nodeValues = [];
    this.edges = [];
  }

  setRootIndex(idx: number) {
    this.rootIndex = idx;
  }

  insert(root, data: number) {
    if (!data && data !== 0) {
      throw new Error("Invalid value");
    }
    this.nodeValues.push(data);
  }

  leftEdge(parent: number, child: number) {
    var edge = new Edge(parent, child, "L");
    this.edges.push(edge);
  }

  rightEdge(parent: number, child: number) {
    var edge = new Edge(parent, child, "R");
    this.edges.push(edge);
  }

  buildTree() {
    if (this.noOfNodes == 0) {
      this.root = null;
      return;
    }
    this.noOfEdges = this.edges.length;
    var nodes = [];
    for (var i = 0; i < this.noOfNodes; i++) {
      nodes.push(new TreeNodeNoKey(this.nodeValues[i]));
    }
    for (var i = 0; i < this.noOfEdges; i++) {
      var edge = this.edges[i];
      if (edge.leftRightFlag == "L") {
        nodes[edge.parentNodeIndex].left_ptr = nodes[edge.childNodeIndex];
      } else {
        nodes[edge.parentNodeIndex].right_ptr = nodes[edge.childNodeIndex];
      }
    }
    this.root = nodes[this.rootIndex];
  }
}

module.exports = BinaryTree;
