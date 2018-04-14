const {Graph, Vertex} = require('./Graph');

function dfs(vertex, visited = {}) {
  visited[vertex.value] = true;
  let result = `${vertex.value}`;
  vertex.adjacencies.forEach(v => {
    if (!visited[v.value]) result += `${dfs(v, visited)}`;
  });
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

console.log(dfs(a));
