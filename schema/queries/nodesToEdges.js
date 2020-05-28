const nodesToEdges = (nodes, after) => {
  console.log(nodes);
  return nodes.map((node, index) => ({
    cursor: Buffer.from(`cursor${index + after + 1}`).toString("base64"),
    node,
  }));
};

module.exports = nodesToEdges;
