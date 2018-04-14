// There are 3 ways to represent a graph.
// 1. List of vertices and edges
// 2. Adjacency Matrices
// 3. Adjacency list

// The first way is really bad since it takes O(n) time to get to an edge or vertex
// The second way is bad for space since it will have to store each vertices twice in a matrix
// The third way is current the most efficient way to represent a graph,
// Therefore, I will implement a graph using Adjacency list, each vertex will store
// their neighbor vertices.

function Vertex(value) {
  this.value = value;
  this.adjacencies = [];
}

Vertex.prototype.linkVetices = function(vertices) { // this function to link other vertices
  this.adjacencies.push(vertices);
};

function Graph(vertices = []) {
  this.vertices = vertices;
}

// const a = new Vertex('0');
// const b = new Vertex('1');
// const c = new Vertex('2');
// const d = new Vertex('3');

// a.linkVetices([b,c]);
// b.linkVetices([a,c]);
// c.linkVetices([a,b,d]);
// d.linkVetices([c]);
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
//
// const g = new Graph([a,b,c,d]);
//
// console.log(g);

module.exports = Graph;
