// Edge List, Adjacent List, Adjacent Matrix are based on Graph Example image in folder

// Edge List
// const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

// Adjacent List
// const graph = [[2], [2,3], [0,1,3], [1,2]]

// Adjacent Matrix. X Y
// 0 means no, 1 means yes - indicates if there is a connection
// const graph = [
//    [0, 0, 1, 0],
//    [0, 0, 1, 1],
//    [1, 1, 0, 1],
//    [0, 1, 1, 0],
//  ]

// how to read Adjacent Matrix above:
// node 0 has connection to index 2
// node 1 has connection to index 2 & 3
// node 2 has connection to index 0, 1, 3
// node 3 has connection to index 1 & 2

// Adjacent Matrix can also be an object:
// const graph = {
//    0: [0, 0, 1, 0],
//    1: [0, 0, 1, 1],
//    2: [1, 1, 0, 1],
//    3: [0, 1, 1, 0],
//  }

// undirected graph
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    // need to understand this. adding key into obj with node - we want to add then equal to []
    // bc when we enter a new node, it won't have any connections intitally.
    // we want to add the edges afterwards
    this.adjacentList[node] = [];
    // 0-->
    // 1-->
    // 2-->
    // 3-->
    // 4-->
    // 5-->
    // 6-->
    this.numberOfNodes++; // when I comment out, nothing changes
  }

  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    // 0-->1 2
    // 1-->3 2 0
    // 2-->4 1 0
    // 3-->1 4
    // 4-->3 2 5
    // 5-->4 6
    // 6-->5
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
