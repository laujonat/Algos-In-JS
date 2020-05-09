/*
  Construct a graph using an adjacency list. 
  A graph is connected is there is a path between any two vertices.
  An undirected graph is complete if there is an edge between every pair of vertices
*/
const LinkedList = require("../struct/DoublyLinkedList.js");
const Queue = require("../struct/Queue.js");

class Graph {
  constructor(n) {
    this.n = n;
    this.bidir = true;
    this.adjList = new Map();
    this.visited = new Map();
    for (let i = 0; i < n; i++) {
      this.adjList.set(i, new LinkedList());
    }
    this.edgeMap = new Map();
  }

  addEdge(start: number, end: number, bidir = true) {
    if (this.adjList.get(start)) {
      this.adjList.get(start).add(end);
      this.edgeMap.set(start, end);
    } else {
      this.adjList.set(start, new LinkedList());
      this.adjList.get(start).add(end);
    }
    if (!bidir) {
      this.bidir = false;
      this.edgeMap.set(start, end);
    } else {
      if (this.adjList.get(end)) {
        this.adjList.get(end).add(start);
      } else {
        this.adjList.set(end, new LinkedList());
        this.adjList.get(end).add(start);
      }
    }
  }
  rootVertex() {
    const iterable = this.adjList.keys().next();
    if (String(iterable.value)) {
      return iterable.value;
    }
    return null;
  }

  hasEulerianCycle(): boolean {
    let odd = 0; // no of vertices with odd degree
    for (const vertex of this.adjList.entries()) {
      const [key, neighbors] = vertex;
      let numEdges = neighbors.length;
      // If the graph is directed, count number of in-degree edges
      if (!this.bidir) {
        for (const edge of this.edgeMap.values()) {
          edge === key && numEdges++;
        }
      }
      if (numEdges % 2 !== 0) {
        odd++;
      }
    }
    return odd === 0;
  }
  // Eulerian Path:
  // https://math.stackexchange.com/questions/1871065/euler-path-for-directed-graph
  hasEulerianPath() {
    let odd = 0;
    for (let vertex of this.adjList.entries()) {
      let [key, neighbors] = vertex;
      let numEdges = neighbors.length;
      // If the graph is directed, count number of in-degree edges
      if (!this.bidir) {
        for (const edge of this.edgeMap.values()) {
          edge === key && numEdges++;
        }
      }
      if (numEdges % 2 !== 0) {
        odd++;
      }
    }
    return odd === 0 || odd === 2 ? true : false;
  }

  *vertices(source) {
    let vertices = this.adjList.get(source);
    if (!vertices) {
      return;
    }
    let currIdx = 0;
    let res = "";
    for (let v of vertices) {
      yield v;
      res.concat(`${v} -> `);
      currIdx++;
    }
  }

  neighbors(source) {
    const vertices = [];
    for (let node of this.vertices(source)) {
      vertices.push(node.data);
    }
    return vertices;
  }

  findConnectedComponents() {
    this.visited = new Map();
    let connected = 0;
    const key = this.rootVertex();
    this.visited.set(key, connected);
    for (const node of this.vertices(key)) {
      if (!this.visited.get(node)) {
        this.visited.set(node, connected);
        connected++;
        this.bfs(node, connected, this.visited);
      }
    }
    return connected;
  }

  shortestPathBFS(source, target) {}

  shortestPathDFS(source, target) {}

  // O(degree(v)) -> O(n + m)
  dfsV2(source, c, dist = 0) {
    console.info("visiting", source, "distance", dist);
    const stack = [];
    const parent = {};
    this.visited.set(source, c);
    this.neighbors(source).forEach((currentVertex) => {
      console.info("captured", Array.from(this.visited.keys()));
      if (!this.visited.get(currentVertex)) {
        this.visited.set(currentVertex, c);
        parent[currentVertex] = source;
        this.dfsV2(currentVertex, c, dist + 1);
      }
    });
  }

  /**
   * @param {number} source
   * @param {number} c //connected component source
   * O(degree(v))
   */
  dfs(source, c, visited = new Map()) {
    const stack = [];
    const parent = {};
    let distance = 0;
    let connected = c ? c : source;
    stack.push({ vertex: source, distance: 0 });
    while (stack.length !== 0) {
      let { vertex: v, distance: d } = stack.pop();
      console.info("visiting: ", v, "distance", d);
      visited.set(source, connected);
      let d1 = [];
      this.neighbors(v).forEach((currentVertex) => {
        if (!visited.get(currentVertex)) {
          parent[currentVertex] = v;
          visited.set(currentVertex, connected);
          d1.push(currentVertex);
          stack.push({ vertex: currentVertex, distance: d + 1 });
        }
        console.info("captured: ", Array.from(visited.keys()));
      });
    }
  }

  /**
   * @param {number} source
   * @param {number} c //connected component source
   * O(degree(v))
   */
  bfs(source, c, visited = new Map()) {
    // Vertices that have been discovered but not yet captured
    const queue = new Queue();
    const parent = {};
    const seen = new Map();
    let distance = 0;
    let connected = c ? c : source;
    queue.enqueue({ vertex: source, distance: 0 });
    while (!queue.isEmpty()) {
      let { vertex: v, distance: d } = queue.dequeue();
      visited.set(v, connected);
      let d1 = [];
      this.neighbors(v).forEach((currentVertex) => {
        console.info("visiting: ", currentVertex, "distance", d + 1);
        if (!visited.get(currentVertex)) {
          parent[currentVertex] = v;
          visited.set(currentVertex, connected);
          d1.push(currentVertex);
          queue.enqueue({ vertex: currentVertex, distance: d + 1 });
        }
        console.info("captured: ", Array.from(visited.keys()));
      });
    }
  }
}

let dag = new Graph(5);
dag.addEdge(0, 1, false);
dag.addEdge(0, 2, false);
dag.addEdge(1, 3, false);
dag.addEdge(1, 4, false);
// console.log("has cycle", dag.hasEulerianCycle());
// console.log("has eulerian path", dag.hasEulerianPath());

let graph = new Graph(10);
graph.addEdge(0, 1);
graph.addEdge(0, 6);
graph.addEdge(0, 8);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(1, 9);
graph.addEdge(2, 4);
graph.addEdge(2, 6);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(3, 8);
graph.addEdge(4, 5);
graph.addEdge(4, 9);
graph.addEdge(5, 9);
graph.addEdge(7, 8);
graph.addEdge(7, 9);
// console.log("has cycle", graph.hasEulerianCycle());
// console.log("has eulerian path", graph.hasEulerianPath());

let dfs = new Graph(10);
dfs.addEdge(0, 1, false);
dfs.addEdge(0, 2, false);
dfs.addEdge(2, 3, false);
dfs.addEdge(2, 4, false);
dfs.addEdge(1, 5, false);
dfs.addEdge(1, 6, false);
dfs.addEdge(6, 7, false);
dfs.addEdge(7, 8, false);
dfs.addEdge(10, 11, false);
dfs.addEdge(11, 12, false);
dfs.addEdge(12, 10, false);
module.exports = dfs;
