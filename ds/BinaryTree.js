let inputString = "";
let currentLine = 0;

function readLine() {
  return inputString[currentLine++];
}

class Edge {
  constructor(parentNodeIndex, childNodeIndex, leftRightFlag) {
    this.parentNodeIndex = parentNodeIndex;
    this.childNodeIndex = childNodeIndex;
    this.leftRightFlag = leftRightFlag;
  }
}

class BinaryTree {
  constructor() {
    this.noOfNodes = 0;
    this.rootIndex = -1;
    this.noOfEdges = 0;
    this.root = null;
    this.nodeValues = [];
    this.edges = [];
  }

  readRawValues() {
    this.noOfNodes = parseInt(readLine());
    if (this.noOfNodes > 0) {
      var nodeValuesStringArray = readLine().split(" ");
    }
    for (var i = 0; i < this.noOfNodes; i++) {
      this.nodeValues.push(parseInt(nodeValuesStringArray[i]));
    }
    this.rootIndex = parseInt(readLine());
    this.noOfEdges = parseInt(readLine());
    for (var i = 0; i < this.noOfEdges; i++) {
      var edgeStringArray = readLine().split(" ");
      var edge = new Edge();
      edge.parentNodeIndex = parseInt(edgeStringArray[0]);
      edge.childNodeIndex = parseInt(edgeStringArray[1]);
      edge.leftRightFlag = edgeStringArray[2];
      this.edges.push(edge);
    }
  }

  buildFromRawValues() {
    if (this.noOfNodes == 0) {
      this.root = null;
      return;
    }
    var nodes = [];
    for (var i = 0; i < this.noOfNodes; i++) {
      nodes.push(new TreeNode(this.nodeValues[i]));
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
