// Given a directed graph, and two vertices
// WRite a function to determine if there is a route in between those two vertices

// ----SOlution: Use BFS
// Same as BFS, you use queue to store next vertices
// And while traversing, we search/check if the current vertex is the destination
// If yes, return true that there is a route
// If not, keep search until there is no more vertices to check, return false.
// Time: O(n)

// ----Discussion: Why BFS not DFS?
// I think if the graph is too deep, we should use BFS, to avoid the case where
// we spend so much time on a branch.
// On the other hand, if the graph is wide, we should use DFS, to void spending
// too much time on each layer.

const {Graph, Vertex} = require('./Graph');
const Queue = require('../stack_queue/Queue');

function hasRoute(v1, v2) {
  const queue = new Queue();
  const visited = {};
  queue.enqueue(v1);
  visited[v1.value] = true;

  while (queue.length() > 0) {
    let current = queue.dequeue();
    if (current === v2) return true;

    current.adjacencies.forEach(v => {
      if (!visited[v.value]) {
        queue.enqueue(v);
        visited[v.value] = true;
      }
    });
  }

  return false;
}

const a = new Vertex('0');
const b = new Vertex('1');
const c = new Vertex('2');
const d = new Vertex('3');
const e = new Vertex('4');
const f = new Vertex('5');
const g = new Vertex('6');

a.linkVetices([b,e,f]);
b.linkVetices([d,e]);
c.linkVetices([b]);
d.linkVetices([c,e]);

console.log(hasRoute(a,f));
console.log(hasRoute(a,g));
