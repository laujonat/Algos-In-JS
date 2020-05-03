/*
  Build an undirected graph based on a binary tree.

  Represent using an Adjacency List. 
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

class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class Graph {
  // defining vertex array and
  // adjacent list
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.adjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.adjList.get(w).push(v);
  }
  printGraph() {
    // get all the vertices
    let vertices = this.adjList.keys();
    // iterate over the vertices
    for (let i of vertices) {
      // great the corresponding adjacency list
      // for the vertex
      let getValues = this.adjList.get(i);
      let conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (let j of getValues) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
  // preorder
  // Why is list better than graph
  buildGraphFromTree(
    map: Map<number, Array<typeof TreeNode>>,
    node: typeof TreeNode,
    parent: typeof TreeNode
  ) {
    if (node != null) {
      map.put(node.val, new Map());
      if (parent != null) {
        map.get(node.val).push(parent);
        map.get(parent.val).push(node);
      }

      buildGraphFromTree(map, node.left, node);
      buildGraphFromTree(map, node.right, node);
    }
  }
}

const g = new Graph(9);
var vertices = ["F", "B", "G", "A", "D", "C", "E", "I", "H"];

for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("F", "B");
g.addEdge("G", "G");
g.addEdge("G", "I");
g.addEdge("I", "H");
g.addEdge("B", "A");
g.addEdge("B", "D");
g.addEdge("D", "C");
g.addEdge("D", "E");

g.printGraph();
