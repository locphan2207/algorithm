// Write a function to perform a Bread-first-search

// ----Solution: Use a queue, don't use recursive
// With a queue, we know the order of vertices we will traverse.
// The idea is to enqueue the adjacencies vertices of current vertex into queue,
// and mark it as visited, so we don't enqueue it twice in case of a loop path.
// Simply start from the given vertex, enqueue it, and mark it as visited.
// While the queue is not empty, we dequeue to get the next vertex, then
// check that current vertex's adjacency list, enqueue and mark them if they are not visited.
// Keep doing that until nothing left is in the queue.

const {Vertex, Graph} = require('./Graph');
const Queue = require('../stack_queue/Queue');

function bfs(vertex) {
  const queue = new Queue();
  const visited = {};
  queue.enqueue(vertex);  // put the given vertex into queue
  visited[vertex.value] = true; // mark as visited

  let result = '';

  while (queue.length() > 0) {
    let current = queue.dequeue(); // dequeue to get a vertex
    result += `${current.value}`;

    current.adjacencies.forEach(v => { // check its adjacencies
      if (!visited[v.value]) { // if they are not visited
        queue.enqueue(v); // enqueue them
        visited[v.value] = true; // and mark them as visited as well
      }
    });
  }

  return result;
}

const a = new Vertex('0');
const b = new Vertex('1');
const c = new Vertex('2');
const d = new Vertex('3');
const e = new Vertex('4');
const f = new Vertex('5');

a.linkVetices([b,e,f]);
b.linkVetices([d,e]);
c.linkVetices([b]);
d.linkVetices([c,e]);

console.log(bfs(a));
