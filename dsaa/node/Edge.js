class Edge {
  constructor(parentNodeIndex, childNodeIndex, leftRightFlag) {
    this.parentNodeIndex = parentNodeIndex;
    this.childNodeIndex = childNodeIndex;
    this.leftRightFlag = leftRightFlag;
  }
}

module.exports = Edge;
