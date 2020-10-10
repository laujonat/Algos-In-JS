var zigzagLevelOrder = function(root) {
  if (!root) return [];
  const result = [];
  let currentLevel = [];
  let Q = [];
  let flag = false; // left to right
  let nodes = [];
  Q.push(root);

  while (Q.length) {
    let node = Q.pop();
    let leftChild = node.left;
    let rightChild = node.right;

    currentLevel.push(node.val); // 3, 9, 20
    if (!flag) {
      leftChild && nodes.push(leftChild);
      rightChild && nodes.push(rightChild);
    } else {
      rightChild && nodes.push(rightChild);
      leftChild && nodes.push(leftChild);
    }
    if (!Q.length) {
      result.push(currentLevel); // [3], [3, 9, 20]
      Q = nodes.slice();
      nodes = [];
      currentLevel = [];
      flag = flag ? false : true;
    }
  }
  return result;
};

module.exports = zigzagLevelOrder;
